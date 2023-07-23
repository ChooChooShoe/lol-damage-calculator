use std::{fmt::Display, num::ParseFloatError};

use crate::{effect_models::EffectModel, fetch::FetchClient};
use lazy_static::lazy_static;
use serde::{Deserialize, Serialize};

use scraper::{Element, ElementRef, Html, Selector};

type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

lazy_static! {
    static ref SELECT_TEMPLATE_SBC: Selector = Selector::parse(".template_sbc").unwrap();
    static ref SELECT_DATA_NAME: Selector = Selector::parse("[data-name]").unwrap();
    static ref SELECT_DATA_SOURCE: Selector = Selector::parse(r#"[data-source]"#).unwrap();
    static ref SELECT_IMG_YES: Selector = Selector::parse("img[alt=\"Yes\"]").unwrap();
    static ref SELECT_ASIDE_REGION: Selector = Selector::parse(r#"aside[role="region"]"#).unwrap();
}

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
}
impl LeagueWiki {
    pub fn latest() -> Result<LeagueWiki> {
        Ok(LeagueWiki {
            client: FetchClient::new()?,
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

        let mut rune_data = RuneData::default();

        for el in document.select(&SELECT_DATA_NAME) {
            // text iter to vec, join to string, trim \n, to owned
            let text = el.text().collect::<Vec<_>>().join("").trim().to_owned();

            let data_name = el.value().attr("data-name");

            // println!("data-name='{:?}' text: {:?}", data_name, text);

            match data_name {
                Some("1") => rune_data.name = text,
                Some("disp_name") => rune_data.disp_name = text,
                Some("released") => rune_data.released = text,
                Some("path") => rune_data.path = text,
                Some("shard slots") => rune_data.shard_slots = text,
                Some("slot") => rune_data.slot = text,
                Some("description") => rune_data.description = el.inner_html(),
                Some("description2") => rune_data.description2 = el.inner_html(),
                Some("description3") => rune_data.description3 = el.inner_html(),
                Some("description4") => rune_data.description4 = el.inner_html(),
                Some("cooldown") => rune_data.cooldown = PassiveProgression::from(el),
                Some("range") => rune_data.range = text,
                Some("removed") => (),
                Some("wr") => (),
                None => println!("Match Failed: None is not possible"),
                Some(s) => println!("Match Failed: '{s}' is not a known data-name type"),
            }
        }

        Ok(rune_data)
    }
    pub fn get_item_data(&mut self, item_name: &str, is_ornn_item: bool) -> Result<LiveItemData> {
        let name = item_name.trim().replace(" ", "_");
        let url = format!("https://leagueoflegends.fandom.com/wiki/{}", name);
        let body = self.client.fetch(url)?.text()?;

        let document = Html::parse_document(&body);

        let infobox = if is_ornn_item {
            // Ornn items are on the same page as normal mythics
            // see https://leagueoflegends.fandom.com/wiki/Jak%27Sho,_The_Protean#The_Unspoken_Parasite
            let mut x = document.select(&SELECT_ASIDE_REGION);
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

        for el in infobox.select(&SELECT_DATA_SOURCE) {
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

                Some("consume") => item.effects.consume = Some(el.into()),

                Some("act") => item.effects.act = Some(el.into()),
                Some("act2") => item.effects.act = Some(el.into()),

                Some("apunique") => item.apunique = as_stat(el),
                Some("cdrunique") => item.cdrunique = as_stat(el),
                Some("armorunique") => item.armorunique = as_stat(el),
                Some("msunique") => item.msunique = as_stat(el),
                Some("hspunique") => item.hspunique = as_stat(el),
                Some("lethalityunique") => item.lethalityunique = as_stat(el),
                Some("pass") => item.effects.pass = Some(el.into()),
                Some("pass2") => item.effects.pass2 = Some(el.into()),
                Some("pass3") => item.effects.pass3 = Some(el.into()),
                Some("pass4") => item.effects.pass4 = Some(el.into()),
                Some("pass5") => item.effects.pass5 = Some(el.into()),

                Some("mythic") => item.effects.mythic = Some(el.into()),
                // Some("aura ") => item.aura = Some(el.inner_html().trim().to_owned()),
                Some("limit") => item.limit = as_html(el),
                Some("req") => item.req = as_html(el),
                Some("recipe") => item.recipe = as_html(el),
                Some("builds") => item.builds = as_html(el),
                Some("buy") => item.buy = as_text(el),
                Some("sell") => item.sell = as_text(el),
                Some("id") => item.id = as_usize(el),
                Some("sr") => item.sr = as_map(el, &SELECT_IMG_YES),
                Some("ha") => item.ha = as_map(el, &SELECT_IMG_YES),
                Some("ar") => item.ar = as_map(el, &SELECT_IMG_YES),
                Some("menu") => item.menu = as_text(el),
                Some("nickname") => item.nickname = as_text(el),
                None => println!("Match Failed: None is not possible"),
                Some(s) => println!("Match Failed: '{s}' is not a known data-source type"),
            }
        }

        Ok(item)
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

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct PassiveProgression {
    text: String,
    start: Option<Vec<f64>>,
    finish: Option<Vec<f64>>,
    bot_values: Option<Vec<f64>>,
    top_values: Option<Vec<f64>>,
}

impl From<scraper::ElementRef<'_>> for PassiveProgression {
    fn from(el: scraper::ElementRef<'_>) -> Self {
        let text = el.text().collect::<Vec<_>>().join("").trim().to_owned();
        if let Some(child) = el.first_element_child() {
            PassiveProgression {
                text,
                start: child.value().attr("data-start").map(pp_values),
                finish: child.value().attr("data-finish").map(pp_values),
                bot_values: child.value().attr("data-bot_values").map(pp_values),
                top_values: child.value().attr("data-top_values").map(pp_values),
            }
        } else {
            PassiveProgression {
                text,
                start: None,
                finish: None,
                bot_values: None,
                top_values: None,
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
    pub sr: bool,         //get.SR(item) == true and 'yes' or 'no',
    pub ha: bool,         //get.HA(item) == true and 'yes' or 'no',
    pub ar: bool,         //get.AR(item) == true and 'yes' or 'no',
    pub menu: String,     //menu,
    pub nickname: String, //nickname,
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
    pub model: Vec<EffectModel>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub cd: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub recharge: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub charges: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub range: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub radius: Option<f64>,
}

impl From<ElementRef<'_>> for Effect {
    fn from(value: ElementRef<'_>) -> Self {
        let mut unique = false;
        let mut name = String::from("");
        if let Some(el) = value.select(&SELECT_TEMPLATE_SBC).next() {
            let name_parts = el.text().collect::<Vec<_>>();
            if name_parts.len() >= 1 {
                unique = name_parts[0].contains("Unique");
            }
            if name_parts.len() >= 2 {
                name = name_parts[1].to_owned();
            }
        }
        let full_line = value.text().collect::<Vec<_>>().join("");
        let desc = match full_line.find(':') {
            Some(x) => full_line.split_at(x + 1).1,
            None => &full_line,
        };

        let mut models = Vec::new();
        models.push(EffectModel::Damage {
            damagetype: String::from("Magic"),
            children: vec![],
        });

        Effect {
            name,
            unique,
            description: desc.trim().to_owned(),
            description_html: as_html(value).unwrap(),
            model: models,
            cd: None,
            recharge: None,
            charges: None,
            range: None,
            radius: None,
        }
    }
}
