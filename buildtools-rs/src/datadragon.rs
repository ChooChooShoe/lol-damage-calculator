use std::{collections::HashMap, default};

use crate::fetch::FetchClient;
use json::JsonValue;
use serde::{Deserialize, Serialize};
use serde_json::Value;

type Version = String;

type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;
#[derive(Debug)]
pub enum DDragonError {
    Request(reqwest::Error),
    SerdeJson(serde_json::Error),
}

impl From<reqwest::Error> for DDragonError {
    fn from(value: reqwest::Error) -> Self {
        DDragonError::Request(value)
    }
}
impl From<serde_json::Error> for DDragonError {
    fn from(value: serde_json::Error) -> Self {
        DDragonError::SerdeJson(value)
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
#[serde(deny_unknown_fields)]
pub struct Realms {
    pub n: Named,
    pub v: String,            // "13.13.1"
    pub l: String,            // "en_US"
    pub cdn: String,          // "https://ddragon.leagueoflegends.com/cdn"
    pub dd: String,           // "13.13.1"
    pub lg: String,           // "13.13.1"
    pub css: String,          // "13.13.1"
    pub profileiconmax: i64,  // 28
    pub store: Option<Value>, // null
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, Hash, PartialEq, Eq)]
#[serde(deny_unknown_fields)]
pub struct Named {
    pub item: String,        // "13.13.1"
    pub rune: String,        // "7.23.1"
    pub mastery: String,     // "7.23.1"
    pub summoner: String,    // "13.13.1"
    pub champion: String,    // "13.13.1"
    pub profileicon: String, // "13.13.1"
    pub map: String,         // "13.13.1"
    pub language: String,    // "13.13.1"
    pub sticker: String,     // "13.13.1"
}

pub fn get_realms() -> Result<Realms> {
    let region = "na";
    let url = format!("https://ddragon.leagueoflegends.com/realms/{region}.json");
    let body = reqwest::blocking::get(url)?.text()?;
    let realms: Realms = serde_json::from_str(&body)?;
    Ok(realms)
}

pub type ApiVersions = Vec<String>;
pub fn get_api_versions() -> Result<ApiVersions> {
    let url = "https://ddragon.leagueoflegends.com/api/versions.json";
    let body = reqwest::blocking::get(url)?.text()?;

    let v: ApiVersions = serde_json::from_str(&body)?;
    Ok(v)
}

pub fn get_latest_version() -> Result<String> {
    let realms = get_realms()?;
    Ok(realms.v)
}

pub struct DataDragon {
    client: FetchClient,
    version: String,
    lang: String,
    base_data_uri: String,
}
impl DataDragon {
    pub fn latest() -> Result<DataDragon> {
        let relms = get_realms()?;
        let version = relms.v;
        let lang = relms.l;
        let base_data_uri = format!("http://ddragon.leagueoflegends.com/cdn/{version}/data/{lang}");
        Ok(DataDragon {
            client: FetchClient::new()?,
            version,
            lang,
            base_data_uri,
        })
    }

    // The Raw Json File
    pub fn get_items_json(&mut self) -> Result<ItemJson> {
        let url = format!("{0}/item.json", self.base_data_uri);
        let body = self.client.fetch(url)?.text()?;

        // println!("--- START OF BODY ---");
        // println!("{body}");
        // println!("---- END OF BODY ----");

        let v: ItemJson = serde_json::from_str(&body)?;

        assert!(v.r#type == "item");
        assert!(v.version == self.version);
        Ok(v)
    }
    pub fn get_items(&mut self) -> Result<HashMap<String, Item>> {
        Ok(self.get_items_json()?.data)
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
// #[serde(deny_unknown_fields)]
pub struct ItemJson {
    pub r#type: String, // always 'item';
    pub version: Version,
    // pub basic: BasicItem,
    pub data: HashMap<String, Item>,
    // groups: HashMap<String, any>[],
    // tree: HashMap<String, any>[],
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct BasicItem {
    pub name: String,

}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
#[serde(deny_unknown_fields)]
pub struct Item {
    pub name: String,
    pub description: String,
    #[serde(default = "default_colloq")]
    pub colloq: String,
    pub plaintext: String,
    pub special_recipe: i64,           // undefined defaults to 0
    pub consumed: bool,                // undefined defaults to false
    pub consume_on_full: Option<bool>, // undefined defaults to false
    #[serde(default = "default_1")]
    pub stacks: i64, // undefined defaults to 1
    #[serde(default = "default_true")]
    pub in_store: bool, // defaults to true
    pub hide_from_all: bool,           // defaults to false
    pub required_champion: String, //'FiddleSticks' | 'Kalista' | 'Sylas' | 'Gangplank', //defaults to ""
    pub required_ally: String,     // : 'Ornn', //defaults to ""
    pub from: Vec<String>,
    pub into: Vec<String>,
    pub image: Image,
    pub gold: Gold,
    pub tags: Vec<String>,
    pub maps: Value,
    // maps: { '11': boolean, '12': boolean, '21': boolean, '22': boolean },
    pub stats: HashMap<String, f64>,
    #[serde(default = "default_1")]
    depth: i64, // undefined defaults to 1
    pub effect: Value,
}
fn default_colloq() -> String {
    String::from(";")
}
fn default_1() -> i64 {
    1
}
fn default_true() -> bool {
    true
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase", default)]
#[serde(deny_unknown_fields)]
pub struct Gold {
    pub base: i64,
    pub purchasable: bool,
    pub total: i64,
    pub sell: i64,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase", default)]
#[serde(deny_unknown_fields)]
pub struct Image {
   pub full: String,
   pub sprite: String,
   pub group: String,
   pub x: i64,
   pub y: i64,
   pub w: i64,
   pub h: i64,
  }