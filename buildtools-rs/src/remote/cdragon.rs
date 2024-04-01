use core::fmt;

use crate::remote::fetch::FetchClient;
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

    pub fn get_champion_summary(&mut self) -> Result<ChampionSummaryList> {
        let url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json";
        let body = self.client.fetch(url)?.text()?;
        let mut v: Vec<ChampionSummary> = serde_json::from_str(&body)?;
        // Removes the "-1" champ.
        v.remove(0);
        Ok(ChampionSummaryList { inner: v })
    }
    pub fn get_champion<T: fmt::Debug>(&mut self, number_id: T) -> Result<ChampionData> {
        let url = format!("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/{number_id:?}.json");
        let body = self.client.fetch(url)?.text()?;
        let mut v: ChampionData = serde_json::from_str(&body)?;
        v.fix_asset_paths();
        Ok(v)
    }

    pub fn get_champion_rune_recommendations(
        &mut self,
    ) -> Result<Vec<ChampionRuneRecommendations>> {
        let url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-rune-recommendations.json";
        let body = self.client.fetch(url)?.text()?;
        let v: Vec<ChampionRuneRecommendations> = serde_json::from_str(&body)?;
        Ok(v)
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

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct ChampionRuneRecommendations {
    champion_id: u32,
    is_override: bool,
    rune_recommendations: Vec<RuneRecommendation>,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct RuneRecommendation {
    position: Position,
    map_id: u32,
    is_default_position: bool,
    min_summoner_level: u32,
    perk_ids: [PerkId; 9],
    primary_perk_style_id: PerkId,
    secondary_perk_style_id: PerkId,
    summoner_spell_ids: [SummonerSpellId; 2],
    recommendation_id: String,
}

pub type Position = String;
pub type SummonerSpellId = u32;

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub struct ChampionSummaryList {
    inner: Vec<ChampionSummary>,
}
impl core::ops::Deref for ChampionSummaryList {
    type Target = Vec<ChampionSummary>;

    fn deref(&self) -> &Self::Target {
        &self.inner
    }
}
impl core::ops::DerefMut for ChampionSummaryList {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.inner
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default, deny_unknown_fields)]
pub struct ChampionSummary {
    pub id: ChampionNumberId,
    pub name: String,
    pub alias: String,
    pub square_portrait_path: String,
    pub roles: Vec<String>,
}

pub type ChampionNumberId = i32;

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default, deny_unknown_fields)]
pub struct ChampionData {
    pub id: ChampionNumberId,
    pub name: String,  // "Wukong",
    pub alias: String, // "MonkeyKing",
    pub title: String,
    pub short_bio: String,
    pub tactical_info: TacticalInfo,
    pub playstyle_info: PlaystyleInfo,
    pub square_portrait_path: String,
    pub stinger_sfx_path: String,
    pub choose_vo_path: String,
    pub ban_vo_path: String,
    pub roles: Vec<String>,
    pub recommended_item_defaults: Vec<String>,
    pub skins: Vec<SkinInfo>,
    pub passive: Passive,
    pub spells: [SpellInfo; 4],
}
impl ChampionData {
    fn fix_asset_paths(&mut self) {
        // "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/"

        self.square_portrait_path = self.square_portrait_path[22..].to_lowercase();
        self.stinger_sfx_path = self.stinger_sfx_path[22..].to_lowercase();
        self.choose_vo_path = self.choose_vo_path[22..].to_lowercase();
        self.ban_vo_path = self.ban_vo_path[22..].to_lowercase();
        self.passive.ability_icon_path = self.passive.ability_icon_path[22..].to_lowercase();
        self.spells[0].ability_icon_path = self.spells[0].ability_icon_path[22..].to_lowercase();
        self.spells[1].ability_icon_path = self.spells[1].ability_icon_path[22..].to_lowercase();
        self.spells[2].ability_icon_path = self.spells[2].ability_icon_path[22..].to_lowercase();
        self.spells[3].ability_icon_path = self.spells[3].ability_icon_path[22..].to_lowercase();
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default, deny_unknown_fields)]
pub struct TacticalInfo {
    pub style: u8,
    pub difficulty: u8,
    pub damage_type: DamageType,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
pub enum DamageType {
    #[default]
    #[serde(alias = "kPhysical")]
    Physical,
    #[serde(alias = "kMagic")]
    Magic,
    #[serde(alias = "kMixed")]
    Mixed,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default, deny_unknown_fields)]
pub struct PlaystyleInfo {
    pub damage: u8,
    pub durability: u8,
    pub crowd_control: u8,
    pub mobility: u8,
    pub utility: u8,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct SkinInfo {
    pub id: usize,
    pub is_base: bool,
    pub name: String,
    pub splash_path: String,
    pub uncentered_splash_path: String,
    pub tile_path: String,
    pub load_screen_path: String,
    pub skin_type: String,
    pub rarity: String,
    pub is_legacy: bool,
    pub splash_video_path: Option<String>,
    pub collection_splash_video_path: Option<String>,
    pub features_text: Option<String>,
    pub chroma_path: Option<String>,
    //pun chromas: Option<String>,
    pub emblems: Option<String>,
    pub region_rarity_id: usize,
    pub rarity_gem_path: Option<String>,
    // pub skin_lines: Option<String>,
    pub skin_augments: Option<String>,
    pub description: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default, deny_unknown_fields)]
pub struct Passive {
    pub name: String,
    pub ability_icon_path: String,
    pub ability_video_path: String,
    pub ability_video_image_path: String,
    pub description: String,
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct SpellInfo {
    pub spell_key: String,
    pub name: String,
    pub ability_icon_path: String,
    pub ability_video_path: String,
    pub ability_video_image_path: String,
    pub cost: String,
    pub cooldown: String,
    pub description: String,
    pub dynamic_description: String,
    pub range: Vec<f64>,
    pub cost_coefficients: Vec<f64>,
    pub cooldown_coefficients: Vec<f64>,
    pub coefficients: Coefficients,
    #[serde(skip)]
    effect_amounts: (),
    #[serde(skip)]
    ammo: (),
    pub max_level: u8,
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default, deny_unknown_fields)]
pub struct Coefficients {
    pub coefficient1: f64,
    pub coefficient2: f64,
}
