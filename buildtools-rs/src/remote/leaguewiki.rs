use std::{
    collections::{HashMap, VecDeque},
    fmt::Display,
    fs::{File, OpenOptions},
    io::Write,
    num::ParseFloatError,
    ops::DerefMut,
};

use crate::{effect_models::EffectModel, remote::fetch::FetchClient};
use serde::{Deserialize, Serialize};

use scraper::{Element, ElementRef, Html, Selector};

pub type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

use once_cell::sync::Lazy;
static SELECT_TEMPLATE_SBC: Lazy<Selector> =
    Lazy::new(|| Selector::parse(".template_sbc").unwrap());
static SELECT_DATA_SOURCE: Lazy<Selector> =
    Lazy::new(|| Selector::parse(r#"[data-source]"#).unwrap());
static SELECT_IMG_YES: Lazy<Selector> = Lazy::new(|| Selector::parse("img[alt=\"Yes\"]").unwrap());
static SELECT_ASIDE_REGION: Lazy<Selector> =
    Lazy::new(|| Selector::parse(r#"aside[role="region"]"#).unwrap());

#[derive(Clone, Copy, Debug)]
enum ParseError {
    MissingAside,
}
impl std::error::Error for ParseError {}

impl Display for ParseError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "MissingAside")
    }
}

fn as_text(el: ElementRef<'_>) -> String {
    let text = el.text().collect::<Vec<_>>().join("").trim().to_owned();
    // if text == el.inner_html() {
    //     println!("The value for {} could have been inner_html", text)
    // }
    text
}
pub type Scaling = Vec<f64>;
fn as_scaling(el: ElementRef<'_>) -> Scaling {
    let mut ret = Vec::with_capacity(5);
    for text in el.text() {
        for part in text.split('/') {
            let mut number: f64 = part.trim().parse().unwrap_or(0.0);
            if part == "∞" {
                number = f64::INFINITY
            } else if part == "-∞" {
                number = f64::NEG_INFINITY
            }
            ret.push(number);
        }
    }
    ret
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
pub enum SkillEffect {
    StacksEffec(),
    GainEffec(),
    DamageEffec(),
    HealEffec(),
    ShieldEffec(),
    UniqueEffec(),
    CrowdControlEffect(),
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct LevelingGroup(Vec<Leveling>);

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct Leveling {
    pub name: String,
    pub values: Scaling,
    pub values_html: String,
}

static SKILL_TABS: Lazy<Selector> = Lazy::new(|| Selector::parse("dl.skill-tabs").unwrap());

fn as_leveling(el: ElementRef<'_>) -> Vec<LevelingGroup> {
    let mut ret = Vec::new();
    for skill_tab in el.select(&SKILL_TABS) {
        let mut group = LevelingGroup::default();
        let mut child_elemnts = skill_tab.child_elements();
        while let (Some(dt), Some(dd)) = (child_elemnts.next(), child_elemnts.next()) {
            let name = as_text(dt);
            let values = as_scaling(dd);
            let values_html = dd.inner_html().trim().to_owned();
            group.0.push(Leveling {
                name,
                values,
                values_html,
            });
        }
        ret.push(group);
    }
    ret
}

fn as_stat(el: ElementRef<'_>) -> Option<f64> {
    let merge = el.text().collect::<Vec<_>>().join("");
    let text = merge.trim();
    if let Some(start) = text.find("+") {
        if let Some(end) = text[start..].find(" ") {
            let text = &text[start..end];

            let is_percent = text.ends_with("%");
            let striped = text.strip_suffix("%").unwrap_or(text);

            return match striped.trim().parse::<f64>() {
                Ok(value) => {
                    if is_percent {
                        Some(value / 100.0)
                    } else {
                        Some(value)
                    }
                }
                Err(_) => {
                    println!("The value {} could not be parsed as f64", text);
                    None
                }
            };
        }
    }

    if text != "" {
        print!("The value {} was not in the stat format. ", text);
        println!("Should be like \"+ 99% \" or \"+ 88 \"")
    }
    None
}
fn as_usize(el: ElementRef<'_>) -> usize {
    let html = el.inner_html();
    match html.parse::<usize>() {
        Ok(value) => value,
        Err(_) => {
            if html != "ID" {
                println!("The value {} could not be parsed as usize", html);
            }
            0
        }
    }
}
fn as_map(el: ElementRef<'_>, yes_selector: &Selector) -> bool {
    let html = el.select(yes_selector).next();
    html.is_some()
}

pub struct LeagueWiki {
    client: FetchClient,
    live_item_cache: HashMap<String, LiveItemData>,
}
impl LeagueWiki {
    pub fn latest() -> Result<LeagueWiki> {
        let _ = File::create("../src/generated/itemeffects.ts");

        Ok(LeagueWiki {
            client: FetchClient::new()?,
            live_item_cache: HashMap::new(),
        })
    }
    pub fn get_rune_data(&mut self, rune_name: &str) -> Result<RuneData> {
        let name = rune_name.replace(" ", "_");
        let url = format!(
            "https://leagueoflegends.fandom.com/wiki/Template:Rune_data_{}",
            name.trim()
        );
        let body = self.client.fetch(url)?.text()?;

        let document = Html::parse_fragment(&body);

        Ok(RuneData::new(document))
    }
    ///
    /// item_name is the localized item name.
    /// # Errors
    ///
    /// This function will return an error if .
    pub fn get_item_data(&mut self, item_name: &str, is_ornn_item: bool) -> Result<LiveItemData> {
        let name = item_name.trim().replace(" ", "_");

        if let Some(page) = self.live_item_cache.get(&name) {
            println!("Using cache page for item {name}");
            return Ok(page.clone());
        }
        let url = format!("https://leagueoflegends.fandom.com/wiki/{}", name);
        let body = self.client.fetch(url)?.text()?;

        let document = Html::parse_document(&body);

        let infobox = if is_ornn_item {
            // Ornn items are on the same page as normal mythics
            // see https://leagueoflegends.fandom.com/wiki/Jak%27Sho,_The_Protean#The_Unspoken_Parasite
            let mut x = document.select(&SELECT_ASIDE_REGION);
            // select the second selected element
            x.next();
            x.next()
        } else {
            // The first region is the one we want.
            document.select(&SELECT_ASIDE_REGION).next()
        };
        let infobox = match infobox {
            Some(x) => x,
            None => return Err(ParseError::MissingAside.into()),
        };

        let mut item = LiveItemData::default();

        for (index, el) in infobox.select(&SELECT_DATA_SOURCE).enumerate() {
            let data_name = el.value().attr("data-source");

            match data_name {
                Some("image") => {}
                Some("disp_name") => item.disp_name = as_text(el),
                Some("caption") => item.caption = as_text(el),

                Some("ap") => item.ap = as_stat(el),
                Some("ah") => item.ah = as_stat(el),
                Some("armor") => item.armor = as_stat(el),
                Some("armpen") => item.armpen = as_stat(el),
                Some("lethality") => item.lethality = as_stat(el),
                Some("ad") => item.ad = as_stat(el),
                Some("as") => item.attack_speed = as_stat(el),
                Some("cdr") => item.cdr = as_stat(el),
                Some("crit") => item.crit = as_stat(el),
                Some("critdamage") => item.critdamage = as_stat(el),
                Some("gp10") => item.gp10 = as_stat(el),
                Some("hsp") => item.hsp = as_stat(el),
                Some("hp") => item.hp = as_stat(el),
                Some("hp5") => item.hp5 = as_stat(el),
                Some("hp5flat") => item.hp5flat = as_stat(el),
                Some("lifesteal") => item.lifesteal = as_stat(el),
                Some("mr") => item.mr = as_stat(el),
                Some("msflat") => item.msflat = as_stat(el),
                Some("ms") => item.ms = as_stat(el),
                Some("mana") => item.mana = as_stat(el),
                Some("mp5") => item.mp5 = as_stat(el),
                Some("mp5flat") => item.mp5flat = as_stat(el),
                Some("mpen") => item.mpen = as_stat(el),
                Some("mpenflat") => item.mpenflat = as_stat(el),
                Some("omnivamp") => item.omnivamp = as_stat(el),
                Some("pvamp") => item.pvamp = as_stat(el),
                Some("spellvamp") => item.spellvamp = as_stat(el),

                Some("spec") => item.spec = Some(el.inner_html().trim().to_owned()),
                Some("spec2") => item.spec2 = Some(el.inner_html().trim().to_owned()),

                Some("consume") => {
                    item.effects.consume = Effect::try_make(name.as_ref(), index, el)
                }

                Some("act") => item.effects.act = Effect::try_make(name.as_ref(), index, el),
                Some("act2") => item.effects.act = Effect::try_make(name.as_ref(), index, el),

                Some("apunique") => item.apunique = as_stat(el),
                Some("cdrunique") => item.cdrunique = as_stat(el),
                Some("armorunique") => item.armorunique = as_stat(el),
                Some("msunique") => item.msunique = as_stat(el),
                Some("hspunique") => item.hspunique = as_stat(el),
                Some("lethalityunique") => item.lethalityunique = as_stat(el),
                Some("pass") => item.effects.pass = Effect::try_make(name.as_ref(), index, el),
                Some("pass2") => item.effects.pass2 = Effect::try_make(name.as_ref(), index, el),
                Some("pass3") => item.effects.pass3 = Effect::try_make(name.as_ref(), index, el),
                Some("pass4") => item.effects.pass4 = Effect::try_make(name.as_ref(), index, el),
                Some("pass5") => item.effects.pass5 = Effect::try_make(name.as_ref(), index, el),

                Some("mythic") => item.effects.mythic = Effect::try_make(name.as_ref(), index, el),
                // Some("aura ") => item.aura = Some(el.inner_html().trim().to_owned()),
                Some("limit") => item.limit = Some(as_text(el)),
                Some("req") => item.req = as_html(el),
                Some("recipe") => item.recipe = as_html(el),
                Some("builds") => item.builds = as_html(el),
                Some("buy") => item.buy = as_text(el),
                Some("sell") => item.sell = as_text(el),
                Some("id") => item.id = as_usize(el),
                Some("classic sr 5v5") => {
                    item.availability_classic_sr_5v5 = as_map(el, &SELECT_IMG_YES)
                }
                Some("aram") => item.availability_hr_aram = as_map(el, &SELECT_IMG_YES),
                Some("nb") => item.availability_nexus_blitz = as_map(el, &SELECT_IMG_YES),
                Some("arena") => item.availability_arena = as_map(el, &SELECT_IMG_YES),
                Some("menu") => {
                    item.menu = el
                        .text()
                        .map(|t| t.trim())
                        .filter(|t| !t.is_empty())
                        .map(|t| t.to_owned())
                        .collect()
                }
                Some("nickname") => {
                    item.keywords = el
                        .text()
                        .map(|t| t.trim())
                        .filter(|t| !t.is_empty())
                        .map(|t| t.to_owned())
                        .collect()
                }
                None => println!("Match Failed: None is not possible"),
                Some(s) => println!("Match Failed: '{s}' is not a known [data-source] type"),
            }
        }
        // let res = &mut item;
        self.live_item_cache.insert(name, item.clone());

        Ok(item)
    }

    pub fn get_champ_data(&mut self, champ_name: &str) -> Result<LiveChampData> {
        let name = champ_name.trim().replace(" ", "_");

        let url = format!(
            "https://leagueoflegends.fandom.com/wiki/Template:Data_{}",
            name
        );
        let body = self.client.fetch(url)?.text()?;

        let document = Html::parse_document(&body);

        Ok(LiveChampData::parse(document, champ_name)?)
    }
    pub fn get_champ_skills(&mut self, champ: &LiveChampData) -> Result<Vec<LiveAbility>> {
        let mut res = Vec::new();
        for skill in champ.skills() {
            let url = format!(
                "https://leagueoflegends.fandom.com/wiki/Template:Data_{}/{skill}",
                champ.wikiname
            );
            let body = self.client.fetch(url)?.text()?;
            let document = Html::parse_document(&body);
            res.push(LiveAbility::parse(document, champ)?);
        }
        Ok(res)
    }
}

fn as_html(el: ElementRef<'_>) -> Option<String> {
    let html = if let Some(x) = el.first_element_child() {
        x.inner_html()
    } else {
        el.inner_html()
    };

    Some(html.trim().to_owned())
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct RuneData {
    /// Necessary: Used for identification. (Known as 1 or {{1}} on wiki)
    pub name: String,
    /// Name of the rune. Only necessary if the value differs from First Strike.
    pub disp_name: String,
    /// Season.  Ex. "2022"
    pub released: String,
    /// Rune path.  Ex. "Inspiration"
    pub path: String,
    /// Slots.  Ex. "Inspiration"
    pub shard_slots: String,
    /// Tier.  Ex. "Keystone"
    pub slot: String,
    /// Description (line 1) HTML
    pub description: String,
    /// Description (line 1) HTML
    pub description2: String,
    /// Description (line 1) HTML
    pub description3: String,
    /// Description (line 1) HTML
    pub description4: String,
    /// Cooldown HTML
    pub cooldown: PassiveProgression,
    /// range HTML
    pub range: String,
}

impl RuneData {
    pub fn new(document: Html) -> RuneData {
        static SELECT_DATA_NAME: Lazy<Selector> =
            Lazy::new(|| Selector::parse("[data-name]").unwrap());

        let mut rune = RuneData::default();

        for el in document.select(&SELECT_DATA_NAME) {
            // text iter to vec, join to string, trim \n, to owned
            let text = el.text().collect::<Vec<_>>().join("").trim().to_owned();

            let data_name = el.value().attr("data-name");

            // println!("data-name='{:?}' text: {:?}", data_name, text);

            match data_name {
                Some("1") => rune.name = text,
                Some("disp_name") => rune.disp_name = text,
                Some("released") => rune.released = text,
                Some("path") => rune.path = text,
                Some("shard slots") => rune.shard_slots = text,
                Some("slot") => rune.slot = text,
                Some("description") => rune.description = el.inner_html(),
                Some("description2") => rune.description2 = el.inner_html(),
                Some("description3") => rune.description3 = el.inner_html(),
                Some("description4") => rune.description4 = el.inner_html(),
                Some("cooldown") => rune.cooldown = PassiveProgression::from(el),
                Some("range") => rune.range = text,
                Some("removed") => (),
                Some("wr") => (),
                None => println!("Match Failed: None is not possible"),
                Some(s) => println!("Match Failed: '{s}' is not a known data-name type"),
            }
        }
        rune
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct PassiveProgression {
    text: String,
    start: Vec<f64>,
    finish: Vec<f64>,
    top_label: String,
    top_values: Vec<f64>,
    bot_label: String,
    bot_values: Vec<f64>,
    formula: String,
}
// <span class="pp-tooltip tooltips-init-complete"
// style="position:relative; border-bottom:1px dotted; cursor:help;"
// data-top_label="unique swaps"
// data-displayformula="300-25 per unique swap. ''This is capped at 150 seconds at 6 swaps.''"
// data-bot_values="300;275;250;225;200;175;150"
// data-top_values="0;1;2;3;4;5;6">300 − 150 (based on unique swaps)</span>

// <span class="pp-tooltip tooltips-init-complete"
// style="position:relative; border-bottom:1px dotted; cursor:help;"
// data-start="25;"
// data-finish="15;"
// data-bot_values="25;24.41;23.82;23.24;22.65;22.06;21.47;20.88;20.29;19.71;19.12;18.53;17.94;17.35;16.76;16.18;15.59;15"
// data-top_values="">25 − 15 (based on level)</span>

// <span class="pp-tooltip tooltips-init-complete"
// style="position:relative; border-bottom:1px dotted; cursor:help;"
// data-top_label="marks"
// data-displayformula="+75 at 4 stacks, and +25 every 3 stacks thereafter, up to 250 bonus range at 25 stacks."
// data-bot_values="75;100;125;150;175;200;225;250"
// data-top_values="4;7;10;13;16;19;22;25">75 − 250 (based on marks)</span>

impl From<scraper::ElementRef<'_>> for PassiveProgression {
    fn from(el: scraper::ElementRef<'_>) -> Self {
        let text = el.text().collect::<Vec<_>>().join("").trim().to_owned();
        if let Some(child) = el.first_element_child() {
            PassiveProgression {
                text,
                start: child.attr("data-start").map(pp_values).unwrap_or_default(),
                finish: child.attr("data-finish").map(pp_values).unwrap_or_default(),
                top_label: child.attr("data-top_label").unwrap_or("Level").to_owned(),
                top_values: child
                    .attr("data-top_values")
                    .map(pp_values)
                    .unwrap_or_default(),
                bot_label: child.attr("data-bot_label").unwrap_or("Value").to_owned(),
                bot_values: child
                    .attr("data-bot_values")
                    .map(pp_values)
                    .unwrap_or_default(),
                formula: child.attr("data-displayformula").unwrap_or("").to_owned(),
            }
        } else {
            let start = pp_values(&text);
            PassiveProgression {
                text,
                start,
                finish: vec![],
                top_label: String::default(),
                top_values: vec![],
                bot_label: String::default(),
                bot_values: vec![],
                formula: String::default(),
            }
        }
    }
}

fn pp_values(s: &str) -> Vec<f64> {
    let mut res = Vec::with_capacity(18);
    for split in s.split(';') {
        match split.parse::<f64>() {
            Ok(value) => res.push(value),
            Err(_) => (),
        }
    }
    res
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct LiveItemData {
    /// Necessary and is just the item name.
    pub disp_name: String,
    /// Ex. "She swore to dedicate her life to his destruction. The gauntlets heard."
    pub caption: String,
    // Stats
    pub ap: Option<f64>,
    pub ah: Option<f64>,
    pub armor: Option<f64>,
    pub armpen: Option<f64>,
    pub lethality: Option<f64>,
    pub ad: Option<f64>,
    pub attack_speed: Option<f64>,
    pub cdr: Option<f64>,
    pub crit: Option<f64>,
    pub critdamage: Option<f64>,
    pub gp10: Option<f64>,
    pub hsp: Option<f64>,
    pub hp: Option<f64>,
    pub hp5: Option<f64>,
    pub hp5flat: Option<f64>,
    pub lifesteal: Option<f64>,
    pub mr: Option<f64>,
    pub msflat: Option<f64>,
    pub ms: Option<f64>,
    pub mana: Option<f64>,
    pub mp5: Option<f64>,
    pub mp5flat: Option<f64>,
    pub mpen: Option<f64>,
    pub mpenflat: Option<f64>,
    pub omnivamp: Option<f64>,
    pub pvamp: Option<f64>,
    pub spellvamp: Option<f64>,

    pub apunique: Option<f64>,
    pub cdrunique: Option<f64>,
    pub armorunique: Option<f64>,
    pub msunique: Option<f64>,
    pub hspunique: Option<f64>,
    pub lethalityunique: Option<f64>,

    /// Specal Stat 1
    pub spec: Option<String>,
    /// Specal Stat 2
    pub spec2: Option<String>,

    pub effects: Effects,

    pub limit: Option<String>,  //get.infoboxlimit(item),
    pub req: Option<String>,    //get.req(item),
    pub recipe: Option<String>, //_getInfoboxRecipe(item),
    pub builds: Option<String>, //_getInfoboxBuilds(item),
    pub buy: String,            //get.buy(item),
    pub sell: String,           //get.sell(item),
    /// Riot's ID number
    pub id: usize,
    pub availability_classic_sr_5v5: bool,
    pub availability_hr_aram: bool,
    pub availability_nexus_blitz: bool,
    pub availability_arena: bool,
    pub menu: Vec<String>,     //menu,
    pub keywords: Vec<String>, //nickname,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct Effects {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub consume: Option<Effect>, //get.consume(item),
    #[serde(skip_serializing_if = "Option::is_none")]
    pub pass: Option<Effect>, //get.pass(item),
    #[serde(skip_serializing_if = "Option::is_none")]
    pub pass2: Option<Effect>, //get.pass2(item),
    #[serde(skip_serializing_if = "Option::is_none")]
    pub pass3: Option<Effect>, //get.pass3(item),
    #[serde(skip_serializing_if = "Option::is_none")]
    pub pass4: Option<Effect>, //get.pass4(item),
    #[serde(skip_serializing_if = "Option::is_none")]
    pub pass5: Option<Effect>, //get.pass5(item),
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mythic: Option<Effect>, //get.mythic(item),
    #[serde(skip_serializing_if = "Option::is_none")]
    pub act: Option<Effect>, //get.act(item),
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct Effect {
    pub name: String,
    pub unique: bool,
    pub description: String,
    pub description_html: String,
    pub description_parts: Vec<String>,
    pub model: Option<String>,
    pub cd: Option<f64>,
    pub recharge: Option<f64>,
    pub charges: Option<f64>,
    pub range: Option<f64>,
    pub radius: Option<f64>,
}
impl Effect {
    pub fn try_make(item_name: &str, index: usize, el: ElementRef<'_>) -> Option<Self> {
        let mut unique = false;
        let mut name = String::default();

        let mut line_parts: Vec<String> = el
            .text()
            // filter if empty or all whitespace.
            .filter(|s| !s.trim().is_empty())
            .map(|f| f.to_owned())
            .collect();

        let full_line = line_parts.join("");
        // Need at least 3 to find the unque and name.
        if line_parts.len() > 3 {
            match line_parts.remove(0).as_str() {
                // Unique + No Name
                "Unique:" => {
                    unique = true;
                }
                // Unique + Name
                "Unique – " => {
                    unique = true;
                    // Next line is the name.
                    name = line_parts.remove(0).trim().to_owned();
                    line_parts.remove(0); //Should be ":"
                }
                line => {
                    unique = false;
                    // Not-Unique + Name
                    if line.ends_with(":") {
                        name = line[0..line.len() - 1].trim().to_owned()
                    }
                    // Not-Unique + No Name
                    else {
                        // Put the part back in.
                        line_parts.insert(0, line.to_owned());
                    }
                }
            }
        }
        let model_name;
        if name.is_empty() {
            model_name = format!("{item_name}_{index}").to_ascii_lowercase();
        } else {
            model_name = format!("{item_name}_{name}").to_ascii_lowercase();
        }
        let mut model_name = Some(model_name.replace(|c: char| !c.is_ascii_alphanumeric(), "_"));
        println!("Added missing model: {model_name:?}");
        let description = full_line.trim().to_owned();
        let html = as_html(el).unwrap();
        //Removes the sba <span></span> but is not the best solution.
        let description_html = html
            .split_once("</span>")
            .unwrap_or_default()
            .1
            .trim()
            .to_owned();

        let cd = None;
        let recharge = None;
        let charges = None;
        let range = None;
        let radius = None;

        // For "Unique – Legendary: This item counts as a Legendary item."
        if name == "Legendary" {
            model_name = None;
        }
        if name == "Mythic Passive" {}

        let model = EffectModel::from_html_fragment(&description_html);

        // If the model is named save it to server files.
        if let Some(model_name) = model_name.as_ref() {
            let file_name = format!("../src/generated/itemeffects/{}.ts", model_name);
            if let Ok(mut file) = File::create(file_name) {
                let json = serde_json::to_string_pretty(&model).unwrap_or_default();
                if let Err(me) = file.write_all(json.as_bytes()) {
                    println!("{}", me);
                }
            }

            let models_file = "../src/generated/itemeffects.tsx";
            if let Ok(mut file) = OpenOptions::new()
                .write(true)
                .append(true)
                .open(models_file)
            {
                // let json = serde_json::to_string_pretty(&model).unwrap();
                let line = format!(
                    r#"<div class="template"> <span style="color:blue">{model_name}</span><div>{description_html}</div></div>\n"#
                );
                if let Err(me) = file.write_all(line.as_bytes()) {
                    println!("File write Error: {}", me);
                }
            }
        }

        Some(Effect {
            name,
            unique,
            description,
            description_html,
            description_parts: line_parts,
            model: model_name,
            cd,
            recharge,
            charges,
            range,
            radius,
        })
    }
}
use thiserror::Error;

#[derive(Error, Debug)]
pub enum LiveChampDataError {
    #[error("data store disconnected")]
    Disconnect(#[from] std::io::Error),
    #[error("the data for key `{0}` is not available")]
    Redaction(String),
    #[error("invalid header (expected {expected:?}, found {found:?})")]
    InvalidHeader { expected: String, found: String },
    #[error("unknown data store error")]
    Unknown,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct LiveChampData {
    pub wikiname: String, // champion name (must be unique)
    pub id: u32,          // champion's ID within the api
    pub apiname: String,  // champion's name within the api
    pub title: String,    // champion's title
    pub resource: String, // champion's resource
    pub fullname: String, //  	Lore character's full given name. This is used in the champion roster's search feature
    pub nickname: String,
    pub date: String,      // release date
    pub patch: String,     // release patch ID (e.g. V4.20)
    pub changes: String,   // patch ID of last changes
    pub role: Vec<String>, // table of strings
    //pub client_positions         // table of strings // Intended / meta positions; as presented by Riot's API (last updated: V14.5)
    //pub external_positions       // table of strings // Information from a third party analytics service; minimum 0.5% pick rate; data set must include ALL RANKS and ALL REGIONS (last updated: 21/Feb/2024)
    pub damage: u8,                 // champion's damage rating from 1 to 3
    pub toughness: u8,              // champion's toughness rating from 1 to 3
    pub control: u8,                // champion's control rating from 1 to 3
    pub mobility: u8,               // champion's mobility rating from 1 to 3
    pub utility: u8,                // champion's utility rating from 1 to 3
    pub difficulty: u8,             // champion's difficulty rating from 0 to 3
    pub style: u8, // champion's damage style from 0 to 100 (0 = basic attacks; 100 = abilities)
    pub adaptivetype: AdaptiveType, // champion's adaptive force type
    pub rangetype: RangeType, // Melee or Ranged
    pub be: u32,   // champion's Blue Essence cost
    pub rp: u32,   // champion's RP cost
    pub skill_i: String, // table of strings
    pub skill_q: String, // table of strings
    pub skill_w: String, // table of strings
    pub skill_e: String, // table of strings
    pub skill_r: String, // table of strings
    pub attack: String, //
    pub defense: String, //
    pub magic: String, //
    pub herotype: String, //
    pub alttype: String, //
    pub stats: Stats,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub enum AdaptiveType {
    #[default]
    Physical,
    Magic,
}
impl From<String> for AdaptiveType {
    fn from(value: String) -> Self {
        match value.to_ascii_lowercase().as_str() {
            "magic" => AdaptiveType::Magic,
            _ => AdaptiveType::Physical,
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub enum RangeType {
    #[default]
    Melee,
    Ranged,
}
impl From<String> for RangeType {
    fn from(value: String) -> Self {
        match value.to_ascii_lowercase().as_str() {
            "ranged" => RangeType::Ranged,
            _ => RangeType::Melee,
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[serde(default)]
pub struct Stats {
    hp_base: f64,
    hp_lvl: f64,
    mp_base: f64,
    mp_lvl: f64,
    arm_base: f64,
    arm_lvl: f64,
    mr_base: f64,
    mr_lvl: f64,
    hp5_base: f64,
    hp5_lvl: f64,
    mp5_base: f64,
    mp5_lvl: f64,
    dam_base: f64,
    dam_lvl: f64,
    as_base: f64,  // champion's base attack speed as decimal
    as_ratio: f64, // champion's attack speed ratio as decimal
    as_lvl: f64,   // champion's bonus_as growth as whole number
    as_lvl1: f64,
    as_lvl1_bonus: f64,
    missile_speed: f64, // missile speed for ranged basic attacks (0 = Non-Projectile)
    attack_cast_time: f64, // only used to calculated 'windup_percent'
    attack_total_time: f64, // only used to calculated 'windup_percent'
    attack_delay_offset: f64, // only used to calculated 'windup_percent'
    attack_delay: f64,
    windup: f64,          // Not stored in data, but is retrievable (default is 0.3)
    windup_modifier: f64, // champion's modifier to windup growth
    crit_base: f64,       // champion's base critical strike damage (defaults to 175%)
    crit_mod: f64,        // champion's total critical strike damage modifier
    range: f64,           // champion's range
    range_lvl: f64,
    ms: f64, // champion's movement speed
    ms_lvl: f64,
    gameplay_radius: f64, // champion's hitbox for most purposes (defaults to 65)
    acquisition_radius: f64, // champion's auto-attack range (defaults to 800)
    selection_radius: f64, // champion's mouse-over selection radius (defaults to 100)
    pathing_radius: f64,  // champion's pathing radius (defaults to 35)
    aram_dmg_dealt: f64,  // damage dealt modifier in aram as decimal (defaults to 1.0)
    aram_dmg_taken: f64,  // damage taken modifier in aram as decimal (defaults to 1.0)
    aram_healing: f64,    // healing modifier in aram as decimal
    aram_shielding: f64,  // shielding modifier in aram as decimal
    urf_dmg_dealt: f64,   // damage dealt modifier in aram as decimal (defaults to 1.0)
    urf_dmg_taken: f64,   // damage taken modifier in aram as decimal (defaults to 1.0)
    urf_healing: f64,     // healing modifier in aram as decimal
    urf_shielding: f64,   // shielding modifier in aram as decimal
                          // ability_haste   : f64,        // initial ability haste in aram as integer
                          // mana_regen      : f64,        // mana regeneration modifier in aram as decimal
                          // energy_regen    : f64,        // energy regeneration modifier in aram as decimal
                          // attack_speed    : f64,        // total attack speed modifier in aram as decimal
                          // movement_speed  : f64,        // movement speed modifier in aram as decimal
                          // tenacity        : f64,        // tenacity and slow resistance modifier in aram as decimal (defaults to 1.0)
                          // nb                 // nexus blitz-specific balance changes (see aram for parameters)
                          // ofa                // one for all-specific balance changes (see aram for parameters)
                          // urf                // ultimate rapid fire-specific balance changes (see aram for parameters)
                          // usb                // ultimate spell book-specific balance changes (see aram for parameters)
                          // ar                 // arena-specific balance changes (see aram for parameters)
}
impl Default for Stats {
    fn default() -> Self {
        Self {
            hp_base: 0.0,
            hp_lvl: 0.0,
            mp_base: 0.0,
            mp_lvl: 0.0,
            arm_base: 0.0,
            arm_lvl: 0.0,
            mr_base: 0.0,
            mr_lvl: 0.0,
            hp5_base: 0.0,
            hp5_lvl: 0.0,
            mp5_base: 0.0,
            mp5_lvl: 0.0,
            dam_base: 0.0,
            dam_lvl: 0.0,
            as_base: 0.0,
            as_ratio: 0.0,
            as_lvl: 0.0,
            missile_speed: 0.0,
            attack_cast_time: 0.3,
            attack_total_time: 1.5,
            attack_delay_offset: -0.1,
            windup: 0.3,
            windup_modifier: 0.0,
            crit_base: 175.0,
            crit_mod: 1.0,
            range: 175.0,
            range_lvl: 0.0,
            ms: 325.0,
            ms_lvl: 0.0,
            gameplay_radius: 0.0,
            acquisition_radius: 0.0,
            selection_radius: 0.0,
            pathing_radius: 0.0,
            aram_dmg_dealt: 1.0,
            aram_dmg_taken: 1.0,
            aram_healing: 1.0,
            aram_shielding: 1.0,
            urf_dmg_dealt: 1.0,
            urf_dmg_taken: 1.0,
            urf_healing: 1.0,
            urf_shielding: 1.0,
            as_lvl1: 0.0,
            as_lvl1_bonus: 0.0,
            attack_delay: 0.0,
        }
    }
}

impl LiveChampData {
    fn parse(
        document: Html,
        champ_name: &str,
    ) -> std::result::Result<LiveChampData, LiveChampDataError> {
        // This pages uses a difrent table so data-name is not set.

        static SEL: Lazy<Selector> = Lazy::new(|| Selector::parse(".article-table tr").unwrap());

        let mut data = LiveChampData::default();
        data.wikiname = champ_name.to_owned();

        for el in document.select(&SEL) {
            let mut child_elemnts = el.child_elements();
            if let (Some(k), Some(v)) = (child_elemnts.next(), child_elemnts.next()) {
                match k.inner_html().as_str() {
                    "1" => data.wikiname = v.inner_html(),
                    "id" => data.id = to_number(v),
                    "apiname" => data.apiname = v.inner_html(),
                    "title" => data.title = v.inner_html(),
                    "resource" => data.resource = v.inner_html(),
                    "fullname" => data.fullname = v.inner_html(),
                    "nickname" => data.nickname = v.inner_html(),
                    "date" => data.date = v.inner_html(),
                    "patch" => data.patch = v.inner_html(),
                    "changes" => data.changes = v.inner_html(),
                    "role" => data.role = v.inner_html().split(',').map(|f| f.to_owned()).collect(),
                    "damage" => data.damage = to_number(v),
                    "toughness" => data.toughness = to_number(v),
                    "control" => data.control = to_number(v),
                    "mobility" => data.mobility = to_number(v),
                    "utility" => data.utility = to_number(v),
                    "difficulty" => data.difficulty = to_number(v),
                    "style" => data.style = to_number(v),
                    "adaptivetype" => data.adaptivetype = AdaptiveType::from(v.inner_html()),
                    "rangetype" => data.rangetype = RangeType::from(v.inner_html()),
                    "be" => data.be = to_number(v),
                    "rp" => data.rp = to_number(v),
                    "skill_i" => data.skill_i = v.inner_html(),
                    "skill_q" => data.skill_q = v.inner_html(),
                    "skill_w" => data.skill_w = v.inner_html(),
                    "skill_e" => data.skill_e = v.inner_html(),
                    "skill_r" => data.skill_r = v.inner_html(),

                    "attack" => data.attack = v.inner_html(),
                    "defense" => data.defense = v.inner_html(),
                    "magic" => data.magic = v.inner_html(),
                    "herotype" => data.herotype = v.inner_html(),
                    "alttype" => data.alttype = v.inner_html(),

                    "hp_base" => data.stats.hp_base = to_number(v),
                    "hp_lvl" => data.stats.hp_lvl = to_number(v),
                    "hp5_base" => data.stats.hp5_base = to_number(v),
                    "hp5_lvl" => data.stats.hp5_lvl = to_number(v),
                    "mp_base" => data.stats.mp_base = to_number(v),
                    "mp_lvl" => data.stats.mp_lvl = to_number(v),
                    "mp5_base" => data.stats.mp5_base = to_number(v),
                    "mp5_lvl" => data.stats.mp5_lvl = to_number(v),
                    "arm_base" => data.stats.arm_base = to_number(v),
                    "arm_lvl" => data.stats.arm_lvl = to_number(v),
                    "mr_base" => data.stats.mr_base = to_number(v),
                    "mr_lvl" => data.stats.mr_lvl = to_number(v),
                    "dam_base" => data.stats.dam_base = to_number(v),
                    "dam_lvl" => data.stats.dam_lvl = to_number(v),
                    "as_base" => data.stats.as_base = to_number(v),
                    "as_ratio" => data.stats.as_ratio = to_number(v),
                    "as_lvl" => data.stats.as_lvl = to_number(v),
                    "as_lvl1" => data.stats.as_lvl1 = to_number(v),
                    "as_lvl1_bonus" => data.stats.as_lvl1_bonus = to_number(v),
                    "range" => data.stats.range = to_number(v),
                    "range_lvl" => data.stats.range_lvl = to_number(v),
                    "ms" => data.stats.ms = to_number(v),
                    "ms_lvl" => data.stats.ms_lvl = to_number(v),
                    "crit_base" => data.stats.crit_base = to_number(v),
                    "crit_mod" => data.stats.crit_mod = to_number(v),
                    "missile_speed" => data.stats.missile_speed = to_number(v),
                    "attack_cast_time" => data.stats.attack_cast_time = to_number(v),
                    "attack_total_time" => data.stats.attack_total_time = to_number(v),
                    "attack_delay_offset" => data.stats.attack_delay_offset = to_number(v),
                    "attack_delay" => data.stats.attack_delay = to_number(v),
                    "windup" => data.stats.windup = to_number(v),
                    "windup_modifier" => data.stats.windup_modifier = to_number(v),
                    "acquisition_radius" => data.stats.acquisition_radius = to_number(v),
                    "selection_radius" => data.stats.selection_radius = to_number(v),
                    "gameplay_radius" => data.stats.gameplay_radius = to_number(v),
                    "pathing_radius" => data.stats.pathing_radius = to_number(v),
                    "aram_dmg_dealt" => data.stats.aram_dmg_dealt = to_number(v),
                    "aram_dmg_taken" => data.stats.aram_dmg_taken = to_number(v),
                    "aram_healing" => data.stats.aram_healing = to_number(v),
                    "aram_shielding" => data.stats.aram_shielding = to_number(v),
                    "urf_dmg_dealt" => data.stats.urf_dmg_dealt = to_number(v),
                    "urf_dmg_taken" => data.stats.urf_dmg_taken = to_number(v),
                    "urf_healing" => data.stats.urf_healing = to_number(v),
                    "urf_shielding" => data.stats.urf_shielding = to_number(v),
                    s => println!("Match Failed: {s} is not a known data-name type"),
                }
            }
        }

        Ok(data)
    }

    fn skills(
        &self,
    ) -> std::iter::Chain<
        std::str::Split<'_, char>,
        std::iter::Chain<
            std::str::Split<'_, char>,
            std::iter::Chain<std::str::Split<'_, char>, std::str::Split<'_, char>>,
        >,
    > {
        self.skill_i.split(',').chain(
            self.skill_q
                .split(',')
                .chain(self.skill_w.split(',').chain(self.skill_r.split(','))),
        )
    }
}

fn to_number<T>(el: ElementRef<'_>) -> T
where
    T: std::str::FromStr + Default,
{
    let text = el.text().collect::<Vec<_>>().join("");
    match text.trim().parse::<T>() {
        Ok(x) => x,
        Err(_) => T::default(),
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct LiveAbility {
    pub name: String,      //Sonic Wave : String, //Necessary: Used for identification.
    pub disp_name: String, //Name of the ability Only necessary if the value differs from Sonic Wave.
    pub champion: String,  //Lee Sin : String, //champion
    pub skill: String,     //Q : String, //skill
    pub range: String,     //range
    pub target_range: String, //Range center 1200 : String, //target range
    pub attack_range: String, //attack range
    pub collision_radius: String, //collision radius
    pub effect_radius: String, //Sight icon 400 : String, //effect radius
    pub width: String,     //Range model 120 : String, //width
    pub angle: String,     //angle
    pub inner_radius: String, //inner radius
    pub tether_radius: String, //tether radius
    pub speed: Scaling,    //1800 : String, //speed
    pub cast_time: String, //0.25 : String, //cast time
    pub cost: Scaling,     //50 : String, //cost
    pub costtype: String,  //Energy : String, //costtype
    pub r#static: String,  //static
    pub cooldown: Scaling, //10 / 9 / 8 / 7 / 6 : String, //cooldown
    pub cdstart: String,   //on-cast
    pub ontargetcd: String, //ontargetcd
    pub ontargetcdstatic: String, //ontargetcdstatic
    pub recharge: String,  //recharge
    pub customlabel: String, //customlabel
    pub custominfo: String, //custominfo

    pub blurb: String, //Active: Lee Sin Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for a short time, during which they are True Sight icon revealed. : String, //blurb
    pub blurb2: String, //While the target is marked, Lee Sin can cast Resonating Strike Resonating Strike.
    pub blurb3: String, //blurb3
    pub blurb4: String, //blurb4
    pub icon: String,   //Sonic Wave.png : String, //icon
    pub description: String, //Active: Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for 3 seconds, during which they are True Sight icon revealed. : String, //description
    pub leveling: Vec<LevelingGroup>, //Physical Damage:    55 / 80 / 105 / 130 / 155 (+ 115% bonus AD) leveling
    pub icon2: String,           //icon2
    pub description2: String, //While the target is marked, Lee Sin can cast Resonating Strike Resonating Strike.
    pub leveling2: Vec<LevelingGroup>, //leveling2
    pub icon3: String,        //icon3
    pub description3: String, //description3
    pub leveling3: Vec<LevelingGroup>, //leveling3
    pub icon4: String,        //icon4
    pub description4: String, //description4
    pub leveling4: Vec<LevelingGroup>, //leveling4
    pub icon5: String,        //icon5
    pub description5: String, //description5
    pub leveling5: Vec<LevelingGroup>, //leveling5

    pub targeting: String,    //Direction targeting
    pub affects: String,      //Enemies affects
    pub damagetype: String,   //Physical damagetype
    pub spelleffects: String, //Spell spelleffects
    pub spellshield: String,  //True spellshield
    pub projectile: String,   //True projectile
    pub callforhelp: String,  //callforhelp
    pub grounded: String,     //grounded
    pub knockdown: String,    //knockdown
    pub silence: String,      //silence
    pub additional: String, //Displays additional information in a smaller window below the template.
    pub notes: String, //* This ability will cast from wherever the caster is at the start of the cast time. Displays additional information with effect table to the right.
    pub flavortext: String, //flavortext
    pub flavorsound: String, //flavorsound
    pub video: String, //video
    pub video2: String, //video 2
    pub yvideo: String, //YouTube video
    pub yvideo2: String, //YouTube video 2
}
impl LiveAbility {
    fn parse(document: Html, champ: &LiveChampData) -> Result<LiveAbility> {
        static DATA_NAME: Lazy<Selector> =
            Lazy::new(|| Selector::parse(".article-table [data-name]").unwrap());

        let mut ability = LiveAbility::default();
        for el in document.select(&DATA_NAME) {
            let data_name = el
                .attr("data-name")
                .expect("[data-name] must have data-name attr");

            let inner_html = el.inner_html().trim().to_owned();

            match data_name {
                "1" => ability.name = inner_html,
                "disp_name" => ability.disp_name = inner_html,
                "champion" => ability.champion = inner_html,
                "skill" => ability.skill = inner_html,
                "range" => ability.range = inner_html,
                "target range" => ability.target_range = inner_html,
                "attack range" => ability.attack_range = inner_html,
                "collision radius" => ability.collision_radius = inner_html,
                "effect radius" => ability.effect_radius = inner_html,
                "width" => ability.width = inner_html,
                "angle" => ability.angle = inner_html,
                "inner radius" => ability.inner_radius = inner_html,
                "tether radius" => ability.tether_radius = inner_html,
                "speed" => ability.speed = as_scaling(el),
                "cast time" => ability.cast_time = inner_html,
                "cost" => ability.cost = as_scaling(el),
                "costtype" => ability.costtype = inner_html,
                "static" => ability.r#static = inner_html,
                "cooldown" => ability.cooldown = as_scaling(el),
                "cdstart" => ability.cdstart = inner_html,
                "ontargetcd" => ability.ontargetcd = inner_html,
                "ontargetcdstatic" => ability.ontargetcdstatic = inner_html,
                "recharge" => ability.recharge = inner_html,
                "customlabel" => ability.customlabel = inner_html,
                "custominfo" => ability.custominfo = inner_html,
                "icon" => ability.icon = inner_html,
                "blurb" => ability.blurb = inner_html,
                "blurb2" => ability.blurb2 = inner_html,
                "blurb3" => ability.blurb3 = inner_html,
                "blurb4" => ability.blurb4 = inner_html,
                "description" => ability.description = inner_html,
                "leveling" => ability.leveling = as_leveling(el),
                "icon2" => ability.icon2 = inner_html,
                "description2" => ability.description2 = inner_html,
                "leveling2" => ability.leveling2 = as_leveling(el),
                "icon3" => ability.icon3 = inner_html,
                "description3" => ability.description3 = inner_html,
                "leveling3" => ability.leveling3 = as_leveling(el),
                "icon4" => ability.icon4 = inner_html,
                "description4" => ability.description4 = inner_html,
                "leveling4" => ability.leveling4 = as_leveling(el),
                "icon5" => ability.icon5 = inner_html,
                "description5" => ability.description5 = inner_html,
                "leveling5" => ability.leveling5 = as_leveling(el),
                "targeting" => ability.targeting = inner_html,
                "affects" => ability.affects = inner_html,
                "damagetype" => ability.damagetype = inner_html,
                "spelleffects" => ability.spelleffects = inner_html,
                "spellshield" => ability.spellshield = inner_html,
                "projectile" => ability.projectile = inner_html,
                "callforhelp" => ability.callforhelp = inner_html,
                "grounded" => ability.grounded = inner_html,
                "knockdown" => ability.knockdown = inner_html,
                "silence" => ability.silence = inner_html,
                "additional" => ability.additional = inner_html,
                "notes" => ability.notes = inner_html,
                "flavortext" => ability.flavortext = inner_html,
                "flavorsound" => ability.flavorsound = inner_html,
                "video" => ability.video = inner_html,
                "video2" => ability.video2 = inner_html,
                "yvideo" => ability.yvideo = inner_html,
                "yvideo2" => ability.yvideo2 = inner_html,
                _ => println!("[WARN] LiveAbility Match failed '{data_name}' not found"),
            }
        }

        Ok(ability)
    }
}
