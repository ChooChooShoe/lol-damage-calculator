use std::collections::HashMap;

use crate::fetch::fetch;
use serde::{Deserialize, Serialize};
use serde_json::Value;

type Version = String;

type Result<T> = std::result::Result<T, DDragonError>;
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
    let body = fetch(url)?.text()?;
    let realms: Realms = serde_json::from_str(&body)?;
    Ok(realms)
}

pub type ApiVersions = Vec<String>;
pub fn get_api_versions() -> Result<ApiVersions> {
    let url = "https://ddragon.leagueoflegends.com/api/versions.json";
    let body = fetch(url)?.text()?;

    let v: ApiVersions = serde_json::from_str(&body)?;
    Ok(v)
}

pub fn get_latest_version() -> Result<String> {
    let realms = get_realms()?;
    Ok(realms.v)
}

pub struct DataDragon {
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
            version,
            lang,
            base_data_uri,
        })
    }

    // The Raw Json File
    pub fn get_items_json(&self) -> Result<ItemJson> {
        let url = format!("{0}/item.json", self.base_data_uri);
        let body = fetch(url)?.text()?;

        println!("--- START OF BODY ---");
        println!("{body}");
        println!("---- END OF BODY ----");

        let v: ItemJson = serde_json::from_str(&body)?;
        Ok(v)
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
// #[serde(deny_unknown_fields)]
pub struct ItemJson {
    r#type: String, // always 'item';
    version: Version,
    basic: Item,
    data: HashMap<String, Item>,
    // groups: HashMap<String, any>[],
    // tree: HashMap<String, any>[],
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase")]
// #[serde(deny_unknown_fields)]
pub struct Item {
    name: String,
    //rune: any,
    description: String,
    colloq: String,
    plaintext: String,
    special_recipe: Option<i64>,       // undefined defaults to 0
    consumed: Option<bool>,            // undefined defaults to false
    consume_on_full: Option<bool>,     // undefined defaults to false
    stacks: Option<i64>,               // undefined defaults to 1
    in_store: Option<bool>,            // defaults to true
    hide_from_all: Option<bool>,       // defaults to false
    required_champion: Option<String>, //'FiddleSticks' | 'Kalista' | 'Sylas' | 'Gangplank', //defaults to ""
    required_ally: Option<String>,     // : 'Ornn', //defaults to ""
    from: Vec<String>,
    into: Vec<String>,
    // image: Image,
    // gold: { base: number, purchasable: boolean, total: number, sell: number },
    tags: Vec<String>,
    // maps: { '11': boolean, '12': boolean, '21': boolean, '22': boolean },
    // stats?: Record<String, number>,
    // depth: number | undefined, // undefined defaults to 1
    // effect?: any,
}
