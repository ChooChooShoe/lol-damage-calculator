use crate::fetch::FetchClient;
use serde::{Deserialize, Serialize};

pub type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

pub struct CommunityDragon {
    client: FetchClient,
}
impl CommunityDragon {
    pub fn latest() -> Result<CommunityDragon> {
        Ok(CommunityDragon {
            client: FetchClient::new()?,
        })
    }

    pub fn get_items(&mut self) -> Result<Vec<Item>> {
        let url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json";
        let body = self.client.fetch(url)?.text()?;
        let v: Vec<Item> = serde_json::from_str(&body)?;

        Ok(v)
    }

    pub fn get_perks(&mut self) -> Result<Vec<Perk>> {
        let url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json";
        let body = self.client.fetch(url)?.text()?;
        let v: Vec<Perk> = serde_json::from_str(&body)?;

        Ok(v)
    }
    pub fn get_perk_styles(&mut self) -> Result<Vec<PerkStyle>> {
        let url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json";
        let body = self.client.fetch(url)?.text()?;
        let v: PerkStyles = serde_json::from_str(&body)?;
        assert!(v.schema_version == 2);

        Ok(v.styles)
    }
}
pub type ItemId = usize;
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct Item {
    pub id: ItemId,
    pub name: String,
    pub description: String,
    pub active: bool,
    #[serde(default = "default_true")]
    pub in_store: bool, // defaults to true
    pub from: Vec<ItemId>,
    pub to: Vec<ItemId>,
    pub categories: Vec<String>,
    #[serde(default = "default_1")]
    pub max_stacks: i64, // defaults to 1
    pub required_champion: RequiredChampion, //'FiddleSticks' | 'Kalista' | 'Sylas' | 'Gangplank', //defaults to ""
    pub required_ally: RequiredAlly,         // : 'Ornn', //defaults to ""
    pub required_buff_currency_name: RequiredBuffCurrencyName,
    pub required_buff_currency_cost: i64,
    pub special_recipe: usize, // defaults to 0
    pub is_enchantment: bool,  // always false
    pub price: i64,
    pub price_total: i64,
    pub icon_path: String,
}
impl Item {
    pub fn is_ornn_item(&self) -> bool {
        self.required_ally == RequiredAlly::Ornn
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub enum RequiredAlly {
    Ornn,
    #[default]
    #[serde(rename = "")]
    None,
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub enum RequiredChampion {
    FiddleSticks,
    Kalista,
    Sylas,
    Gangplank,
    #[default]
    #[serde(rename = "")]
    None,
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub enum RequiredBuffCurrencyName {
    GangplankBilgewaterToken,
    #[serde(rename = "S11Support_Quest_Completion_Buff")]
    S11SupportQuestCompletionBuff,
    #[default]
    #[serde(rename = "")]
    None,
}
fn default_1() -> i64 {
    1
}
fn default_true() -> bool {
    true
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct PerkStyles {
    /// Should alawys be set to 2.
    pub schema_version: u8,
    /// Should be the 5 rune styles
    pub styles: Vec<PerkStyle>,
}

pub type StyleId = usize;
pub type SubStyleId = usize;
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct PerkStyle {
    id: StyleId,
    /// Translated name `Resolve`, `Domination`, `Precision`, `Sorcery`, or `Inspiration`
    name: String,
    /// A berif description of the name. Used for tooltips in rune selector.
    tooltip: String,
    /// Starts with `/lol-game-data/assets/v1/`
    icon_path: String,
    asset_map: serde_json::Value,
    is_advanced: bool,
    /// The other 4 sub styles (excluding this style).
    allowed_sub_styles: [SubStyleId; 4],
    /// Unused in current league.
    sub_style_bonus: [SubStyleBonus; 4],
    slots: [Slot; 7],
    default_page_name: String,
    default_sub_style: i64,
    default_perks: [PerkId; 9],
    default_perks_when_splashed: [PerkId; 2],
    default_stat_mods_per_sub_style: [DefaultStatModsPerSubStyle; 4],
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct SubStyleBonus {
    style_id: StyleId,
    perk_id: PerkId,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct Slot {
    r#type: String,
    slot_label: String,
    perks: Vec<PerkId>,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct DefaultStatModsPerSubStyle {
    id: String,
    perks: [PerkId; 3],
}

pub type PerkId = usize;

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct Perk {
    pub id: PerkId,
    /// Translated name `"First Strike"`, `"Demolish"`, `"Future's Market"` ...
    pub name: String,
    /// Ex. "11.23"
    pub major_change_patch_version: String,
    /// Full tooltip with HTML and replacers. Ex. ```"Attacks or abilities against an enemy champion within @GraceWindow.2@s of entering champion combat grants @GoldProcBonus@ gold and <b>First Strike</b> for @Duration@ seconds, causing you to deal <truedamage>@DamageAmp*100@%</truedamage> extra <truedamage>damage</truedamage> against champions, and granting <gold>{{ Item_Melee_Ranged_Split }}</gold> of that damage dealt as <gold>gold</gold>.<br><br>Cooldown: <scaleLevel>@Cooldown@</scaleLevel>s<br><hr><br>Damage Dealt: @f1@<br>Gold Gained: @f2@"```
    pub tooltip: String,
    /// A berif description. Ex. ```"When you initiate champion combat, deal 9% extra damage for 3 seconds and gain gold based on damage dealt."```
    pub short_desc: String,
    /// A full description with HTML and replacers. Ex. ```"Attacks or abilities against an enemy champion within 0.25s of entering champion combat grants 5 gold and <b>First Strike</b> for 3 seconds, causing you to deal <truedamage>9%</truedamage> extra <truedamage> damage</truedamage> against champions, and granting <gold>100% (70% for ranged champions)</gold> of bonus damage dealt as <gold>gold</gold>.<br><br>Cooldown: <scaleLevel>25 - 15</scaleLevel>s"```
    pub long_desc: String,
    pub recommendation_descriptor: String,
    /// Starts with `/lol-game-data/assets/v1/`
    pub icon_path: String,
    pub end_of_game_stat_descs: Vec<String>,
    pub recommendation_descriptor_attributes: serde_json::Value,
}
