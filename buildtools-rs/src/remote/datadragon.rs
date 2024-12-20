use std::{collections::HashMap, default};

use crate::{item_models::{DDragonItem, Gold, RequiredAlly, RequiredChampion}, remote::fetch::FetchClient};
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
    sprite_base_uri: String,
}
impl DataDragon {
    pub fn latest() -> Result<DataDragon> {
        let relms = get_realms()?;
        let version = relms.v;
        let lang = relms.l;
        let base_data_uri = format!("http://ddragon.leagueoflegends.com/cdn/{version}/data/{lang}");
        let sb = format!("http://ddragon.leagueoflegends.com/cdn/{version}/img/sprite");
        Ok(DataDragon {
            client: FetchClient::new()?,
            version,
            lang,
            base_data_uri,
            sprite_base_uri: sb,
        })
    }

    pub fn sprite_base_uri(&self) -> &str {
        self.sprite_base_uri.as_str()
    }
    // The Raw Json File
    // Ex. https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/item.json
    pub fn get_items_json(&mut self) -> Result<ItemJson> {
        let url = format!("{0}/item.json", self.base_data_uri);
        let body = self.client.fetch(url)?.text()?;

        // println!("--- START OF BODY ---");
        // println!("{body}");
        // println!("---- END OF BODY ----");

        let v: ItemJson = serde_json::from_str(&body)?;

        assert!(v.version == self.version);
        Ok(v)
    }
    pub fn get_items(&mut self) -> Result<HashMap<String, DDragonItem>> {
        Ok(self.get_items_json()?.data)
    }

    // Ex. https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion/MonkeyKing.json
    pub fn find_champion(&mut self, champion: &str) -> Result<ChampionComplex> {
        let key = Self::fix_champion_key(champion);

        let url = format!("{0}/champion/{key}.json", self.base_data_uri);
        let body = self.client.fetch(url)?.text()?;
        let mut response: ChampionStandAloneComplexResponse = serde_json::from_str(&body)?;
        debug_assert_eq!(response.r#type, "champion");
        debug_assert_eq!(response.format, "standAloneComplex");
        response
            .data
            .remove(champion)
            .ok_or("JSON is not in the right format".into())
    }

    fn fix_champion_key(apiname: &str) -> String {
        if apiname == "Wukong" {
            return "MonkeyKing".to_owned();
        };
        if apiname == "GnarBig" {
            return "Gnar".to_owned();
        };
        return apiname.replace(" ", "").replace(".", "");
    }
    // pub fn get_all_champions() -> Result<ChampionBasicJson> {
    //   return fetch("{this.baseDataUri}/champion.json").then(
    //     (res) => res.json() as Promise<ChampionBasicJson>,
    //   );
    // }
    // pub fn get_all_champions_full() -> Result<ChampionFullJson> {
    //   return fetch("{this.baseDataUri}/championFull.json").then(
    //     (res) => res.json() as Promise<ChampionFullJson>,
    //   );
    // }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(deny_unknown_fields)]
pub struct ItemJson {
    #[serde(rename = "type")]
    pub file_type: ItemFileType, // always 'item';
    pub version: Version,
    pub basic: BasicItem,
    pub data: HashMap<String, DDragonItem>,
    pub groups: Vec<Group>,
    pub tree: Vec<TreeNode>,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase")]
pub enum ItemFileType {
    #[default]
    Item,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase", deny_unknown_fields)]
pub struct BasicItem {
    pub name: String,
    pub rune: serde_json::Value,
    //pub rune: Rune,
    pub gold: Gold,
    pub group: String,
    pub description: String,
    pub colloq: String,
    pub plaintext: String,
    pub consumed: bool,
    pub stacks: i64,
    pub depth: i64,
    pub consume_on_full: bool,
    pub from: Vec<Option<serde_json::Value>>,
    pub into: Vec<Option<serde_json::Value>>,
    pub special_recipe: i64,
    pub in_store: bool,
    pub hide_from_all: bool,
    pub required_champion: String,
    pub required_ally: String,
    pub stats: HashMap<String, i64>,
    pub tags: Vec<Option<serde_json::Value>>,
    pub maps: HashMap<String, bool>,
}


#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub struct Group {
    pub id: String,
    #[serde(rename = "MaxGroupOwnable")]
    pub max_group_ownable: String,
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub struct TreeNode {
    pub header: String,
    pub tags: Vec<String>,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
#[serde(deny_unknown_fields)]
pub struct Image {
    pub full: String,
    pub sprite: String,
    pub group: ItemFileType,
    pub x: i64,
    pub y: i64,
    pub w: i64,
    pub h: i64,
}
impl Image {
    pub fn get_sprite_style(&self, sprite_base_uri: &str) -> String {
        format!(
            "background: url('{sprite_base_uri}/{}') -{}px -{}px; width:{}px; height:{}px;",
            self.sprite, self.x, self.y, self.w, self.h
        )
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase", default)]
pub struct ChampionStandAloneComplexResponse {
    r#type: String,
    format: String,
    version: String,
    data: HashMap<String, ChampionComplex>,
}
impl Default for ChampionStandAloneComplexResponse {
    fn default() -> Self {
        ChampionStandAloneComplexResponse {
            r#type: "champion".to_owned(),
            format: "standAloneComplex".to_owned(),
            version: "1.0.0".to_owned(),
            data: Default::default(),
        }
    }
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase", default)]
pub struct ChampionComplex {
    pub id: String,
    pub key: String,
    pub name: String,
    pub image: Image,
    // resource: String
}
