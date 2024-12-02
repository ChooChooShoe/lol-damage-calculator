use std::{collections::HashMap, default, path::Display};

use serde::{Deserialize, Serialize};

pub type CDrgaonItems = Vec<CDragonItem>;
pub type CDragonItemId = usize;

fn _colloq() -> String {
    ";".into()
}
fn _1() -> i64 {
    1
}
fn _true() -> bool {
    true
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default, deny_unknown_fields)]
pub struct DDragonItem {
    pub name: String,
    pub description: String,
    #[serde(default = "_colloq")]
    pub colloq: String,
    pub plaintext: String,
    pub from: Vec<String>,
    pub into: Vec<String>,
    // pub rune: Value,
    pub gold: Gold,
    // pub group: String,
    pub consumed: bool, // undefined defaults to false
    #[serde(default = "_1")]
    pub stacks: i64, // undefined defaults to 1
    #[serde(default = "_1")]
    pub depth: i64, // undefined defaults to 1
    pub consume_on_full: Option<bool>, // undefined defaults to false
    pub special_recipe: i64, // undefined defaults to 0
    #[serde(default = "_true")]
    pub in_store: bool, // defaults to true
    pub hide_from_all: bool, // defaults to false
    pub required_champion: RequiredChampion, //'FiddleSticks' | 'Kalista' | 'Sylas' | 'Gangplank', //defaults to ""
    pub required_ally: RequiredAlly,         // : 'Ornn', //defaults to ""
    // pub stats: Object
    pub tags: Vec<crate::item_models::Category>,
    pub maps: HashMap<String, bool>,
    pub stats: HashMap<String, f64>,
    pub image: crate::remote::datadragon::Image,
    pub effect: HashMap<EffectAmount, String>,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase", default, deny_unknown_fields)]
pub struct Gold {
    pub base: i64,
    pub total: i64,
    pub sell: i64,
    pub purchasable: bool,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, Hash)]
pub enum EffectAmount {
    Effect1Amount,
    Effect2Amount,
    Effect3Amount,
    Effect4Amount,
    Effect5Amount,
    Effect6Amount,
    Effect7Amount,
    Effect8Amount,
    Effect9Amount,
    Effect10Amount,
    Effect11Amount,
    Effect12Amount,
    Effect13Amount,
    Effect14Amount,
    Effect15Amount,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase", deny_unknown_fields)]
pub struct CDragonItem {
    pub id: CDragonItemId,
    pub name: String,
    pub description: String,
    pub active: bool,
    pub in_store: bool,
    pub from: Vec<CDragonItemId>,
    pub to: Vec<CDragonItemId>,
    pub categories: Vec<Category>,
    pub max_stacks: i64,
    pub required_champion: RequiredChampion,
    pub required_ally: RequiredAlly,
    pub required_buff_currency_name: RequiredBuffCurrencyName,
    pub required_buff_currency_cost: i64,
    pub special_recipe: i64,
    pub is_enchantment: bool,
    pub price: i64,
    pub price_total: i64,
    pub display_in_item_sets: bool,
    pub icon_path: IconPath,
}

impl std::fmt::Display for CDragonItem {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}({})", self.name, self.id)
    }
}

impl CDragonItem {
    pub fn is_ornn_item(&self) -> bool {
        self.description.contains("ornnBonus")
    }
}
/// Used for datadragon tags and cdragon catagories.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub enum Category {
    AbilityHaste,
    Active,
    Armor,
    ArmorPenetration,
    AttackSpeed,
    Aura,
    Boots,
    Consumable,
    CooldownReduction,
    CriticalStrike,
    Damage,
    GoldPer,
    Health,
    HealthRegen,
    Jungle,
    Lane,
    LifeSteal,
    MagicPenetration,
    MagicResist,
    Mana,
    ManaRegen,
    NonbootsMovement,
    OnHit,
    Slow,
    SpellBlock,
    SpellDamage,
    SpellVamp,
    Stealth,
    Tenacity,
    Trinket,
    Vision,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub enum RequiredAlly {
    #[default]
    #[serde(rename = "")]
    None,
    #[deprecated]
    Ornn,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Eq, Default, Copy, Hash)]
pub enum RequiredBuffCurrencyName {
    #[serde(rename = "")]
    #[default]
    None,
    GangplankBilgewaterToken,
    #[serde(rename = "S11Support_Quest_Completion_Buff")]
    S11SupportQuestCompletionBuff,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Eq, Default, Copy, Hash)]
pub enum RequiredChampion {
    #[serde(rename = "")]
    #[default]
    None,
    FiddleSticks,
    Gangplank,
    Kalista,
    Sylas,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Eq, Default, Hash)]
pub struct IconPath(String);

impl IconPath {
    pub fn as_full_url(&self) -> String {
        if self.0.len() < 22 {
            return "".into();
        }
        format!(
            "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/{}",
            self.0[22..].to_lowercase()
        )
    }
}

impl core::ops::Deref for IconPath {
    type Target = String;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}
impl core::ops::DerefMut for IconPath {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.0
    }
}

#[cfg(test)]
mod tests {
    use std::sync::LazyLock;

    use super::*;

    static ITEMS_JSON: LazyLock<Vec<CDragonItem>> = LazyLock::new(|| {
        let url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json";
        println!("Fetching items.json from {url}");
        let body = reqwest::blocking::get(url).unwrap().text().unwrap();
        let value: Vec<CDragonItem> = serde_json::from_str(&body).unwrap();
        value
    });

    #[test]
    fn it_works() {
        let url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json";
        let body = reqwest::blocking::get(url).unwrap().text().unwrap();
        let value: Vec<CDragonItem> = serde_json::from_str(&body).unwrap();

        let json_text = serde_json::to_string(&value).unwrap();
        assert_eq!(json_text, body);
    }

    #[test]
    fn item_assumptions_validator() {
        for item in ITEMS_JSON.iter() {
            assert!(item.id > 0);
            assert_eq!(item.required_ally, RequiredAlly::None);
            assert_eq!(item.is_enchantment, false);
            assert!(item.icon_path.len() > 0);
        }
    }
}
