use std::{fmt::Display, num::ParseFloatError};

use crate::fetch::FetchClient;
use serde::{Deserialize, Serialize};

use scraper::{Element, ElementRef, Html, Selector};

type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

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
    if text == el.inner_html() {
        println!("The value for {} could have been inner_html", text)
    }
    text
}
fn as_f64(el: ElementRef<'_>) -> f64 {
    match el.inner_html().parse::<f64>() {
        Ok(value) => value,
        Err(_) => {
            println!("The value {} could not be parsed as f64", el.inner_html());
            0.0
        }
    }
}
fn as_usize(el: ElementRef<'_>) -> usize {
    match el.inner_html().parse::<usize>() {
        Ok(value) => value,
        Err(_) => {
            println!("The value {} could not be parsed as usize", el.inner_html());
            0
        }
    }
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

        let selector = Selector::parse("[data-name]")?;
        let mut rune_data = RuneData::default();

        for el in document.select(&selector) {
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
        let name = item_name.replace(" ", "_");
        let url = format!("https://leagueoflegends.fandom.com/wiki/{}", name.trim());
        let body = self.client.fetch(url)?.text()?;

        let document = Html::parse_document(&body);
        let region_select = Selector::parse(r#"aside[role="region"]"#)?;

        let infobox = if is_ornn_item {
            // Ornn items are on the same page as normal mythics
            // see https://leagueoflegends.fandom.com/wiki/Jak%27Sho,_The_Protean#The_Unspoken_Parasite
            let mut x = document.select(&region_select);
            x.next();
            x.next()
        } else {
            // The first region is the one we want.
            document.select(&region_select).next()
        };
        let infobox = match infobox {
            Some(x) => x,
            None => return Err(ParseError::MissingAside.into()),
        };

        let mut item = LiveItemData::default();

        let data_source_select = Selector::parse(r#"[data-source]"#)?;

        for el in infobox.select(&data_source_select) {
            // text iter to vec, join to string, trim \n, to owned
            let text = el.text().collect::<Vec<_>>().join("").trim().to_owned();

            let data_name = el.value().attr("data-source");

            match data_name {
                Some("disp_name") => item.disp_name = as_text(el),
                Some("caption") => item.caption = as_text(el),
                Some("ap") => item.ap = as_f64(el),
                Some("apunique") => item.apunique = as_f64(el),
                Some("ah") => item.ah = as_f64(el),
                Some("armor") => item.armor = as_f64(el),
                Some("armorunique") => item.armorunique = as_f64(el),
                Some("armpen") => item.armpen = as_f64(el),
                Some("lethality") => item.lethality = as_f64(el),
                Some("lethalityunique") => item.lethalityunique = as_f64(el),
                Some("ad") => item.ad = as_f64(el),
                Some("attack_speed") => item.attack_speed = as_f64(el),
                Some("cdr") => item.cdr = as_f64(el),
                Some("cdrunique") => item.cdrunique = as_f64(el),
                Some("crit") => item.crit = as_f64(el),
                Some("critdamage") => item.critdamage = as_f64(el),
                Some("gp10") => item.gp10 = as_f64(el),
                Some("hsp") => item.hsp = as_f64(el),
                Some("hspunique") => item.hspunique = as_f64(el),
                Some("hp") => item.hp = as_f64(el),
                Some("hp5") => item.hp5 = as_f64(el),
                Some("hp5flat") => item.hp5flat = as_f64(el),
                Some("lifesteal") => item.lifesteal = as_f64(el),
                Some("mr") => item.mr = as_f64(el),
                Some("msflat") => item.msflat = as_f64(el),
                Some("ms") => item.ms = as_f64(el),
                Some("msunique") => item.msunique = as_f64(el),
                Some("mana") => item.mana = as_f64(el),
                Some("mp5") => item.mp5 = as_f64(el),
                Some("mp5flat") => item.mp5flat = as_f64(el),
                Some("mpen") => item.mpen = as_f64(el),
                Some("mpenflat") => item.mpenflat = as_f64(el),
                Some("omnivamp") => item.omnivamp = as_f64(el),
                Some("pvamp") => item.pvamp = as_f64(el),
                Some("spellvamp") => item.spellvamp = as_f64(el),
                Some("spec") => item.spec = el.inner_html(),
                Some("spec2") => item.spec2 = el.inner_html(),
                Some("consume") => item.consume = el.inner_html(),
                Some("pass") => item.pass = el.inner_html(),
                Some("pass2") => item.pass2 = el.inner_html(),
                Some("pass3") => item.pass3 = el.inner_html(),
                Some("pass4") => item.pass4 = el.inner_html(),
                Some("pass5") => item.pass5 = el.inner_html(),
                Some("mythic ") => item.mythic = el.inner_html(),
                Some("act") => item.act = el.inner_html(),
                Some("limit") => item.limit = el.inner_html(),
                Some("req") => item.req = el.inner_html(),
                Some("recipe") => item.recipe = el.inner_html(),
                Some("builds") => item.builds = el.inner_html(),
                Some("buy") => item.buy = as_text(el),
                Some("sell") => item.sell = as_text(el),
                Some("id") => item.id = as_usize(el),
                Some("sr") => item.sr = as_text(el),
                Some("ha") => item.ha = as_text(el),
                Some("ar") => item.ar = as_text(el),
                Some("menu") => item.menu = as_text(el),
                Some("nickname") => item.nickname = as_text(el),
                None => println!("Match Failed: None is not possible"),
                Some(s) => println!("Match Failed: '{s}' is not a known data-source type"),
            }
        }

        Ok(item)
    }
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
    pub ap: f64,              
    pub apunique: f64,        
    pub ah: f64,              
    pub armor: f64,           
    pub armorunique: f64,     
    pub armpen: f64,          
    pub lethality: f64,       
    pub lethalityunique: f64, 
    pub ad: f64,              
    pub attack_speed: f64,    
    pub cdr: f64,             
    pub cdrunique: f64,       
    pub crit: f64,            
    pub critdamage: f64,      
    pub gp10: f64,            
    pub hsp: f64,             
    pub hspunique: f64,       
    pub hp: f64,              
    pub hp5: f64,             
    pub hp5flat: f64,         
    pub lifesteal: f64,       
    pub mr: f64,              
    pub msflat: f64,          
    pub ms: f64,              
    pub msunique: f64,        
    pub mana: f64,            
    pub mp5: f64,             
    pub mp5flat: f64,         
    pub mpen: f64,            
    pub mpenflat: f64,        
    pub omnivamp: f64,        
    pub pvamp: f64,           
    pub spellvamp: f64,       

    /// Specal Stat 1
    pub spec: String,
    /// Specal Stat 2
    pub spec2: String,

    pub consume: String, //get.consume(item),
    pub pass: String,    //get.pass(item),
    pub pass2: String,   //get.pass2(item),
    pub pass3: String,   //get.pass3(item),
    pub pass4: String,   //get.pass4(item),
    pub pass5: String,   //get.pass5(item),
    pub mythic: String,  //get.mythic(item),
    pub act: String,     //get.act(item),

    pub limit: String,  //get.infoboxlimit(item),
    pub req: String,    //get.req(item),
    pub recipe: String, //_getInfoboxRecipe(item),
    pub builds: String, //_getInfoboxBuilds(item),
    pub buy: String,    //get.buy(item),
    pub sell: String,   //get.sell(item),
    /// Riot's ID number
    pub id: usize,
    pub sr: String,       //get.SR(item) == true and 'yes' or 'no',
    pub ha: String,       //get.HA(item) == true and 'yes' or 'no',
    pub ar: String,       //get.AR(item) == true and 'yes' or 'no',
    pub menu: String,     //menu,
    pub nickname: String, //nickname,
}
