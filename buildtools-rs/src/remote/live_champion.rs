use once_cell::sync::Lazy;
use scraper::{ElementRef, Html, Selector};
use thiserror::Error;

use crate::remote::leaguewiki::{as_leveling, as_scaling, to_number};

use super::leaguewiki::{LevelingGroup, Scaling};

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
    #[error("stat block div is missing from DOM")]
    MissingStatBlock,
}

#[derive(serde::Serialize, serde::Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct LiveChampData {
    pub wikiname: String,

    pub render: String,
    pub release_date: String,
    pub last_changed: String,
    pub role: Vec<String>,
    pub legacy: Vec<String>,
    pub position: Vec<String>,
    pub resource: String,
    pub range_type: String,
    pub adaptive_type: String,
    pub cost_store: String,
    pub cost_crafting: String,
    pub ratings: String,
    pub style: String,
    pub difficulty: String,
    pub spotlight: String,

    pub stats: Stats,
    pub abilities: Vec<LiveAbility>,
    // pub wikiname: String, // champion name (must be unique)
    // pub id: u32,         // champion's ID within the api
    // pub apiname: String, // champion's name within the api
    // pub title: String,   // champion's title
    // // pub resource: String, // champion's resource
    // pub fullname: String, //  	Lore character's full given name. This is used in the champion roster's search feature
    // pub nickname: String,
    // pub date: String,    // release date
    // pub patch: String,   // release patch ID (e.g. V4.20)
    // pub changes: String, // patch ID of last changes
}

pub type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

impl LiveChampData {
    pub fn fetch(
        client: &mut super::fetch::FetchClient,
        champ_name: &str,
    ) -> Result<LiveChampData> {
        let name = champ_name.trim().replace(" ", "_");

        let url = format!("https://leagueoflegends.fandom.com/wiki/{}/LoL", name);
        let body = client.fetch(url)?.text()?;
        let document = Html::parse_document(&body);
        Ok(LiveChampData::new(client, document, champ_name)?)
    }
    fn new(
        client: &mut super::fetch::FetchClient,
        document: Html,
        champ_name: &str,
    ) -> Result<LiveChampData> {
        // This pages uses a difrent table so data-name is not set.

        static SEL_CHAMPION_CONTAINER: Lazy<Selector> =
            Lazy::new(|| Selector::parse("#infobox-champion-container [data-source]").unwrap());

        static SEL_STATS_CONTAINER: Lazy<Selector> =
            Lazy::new(|| Selector::parse(".lvlselect").unwrap());
        static SEL_ABILITY_CONTAINER: Lazy<Selector> =
            Lazy::new(|| Selector::parse(".lvlselect [data-source]").unwrap());
        static SEL_DATA_VALUE: Lazy<Selector> =
            Lazy::new(|| Selector::parse(".pi-data-value").unwrap());
        static SEL_A_HREF: Lazy<Selector> = Lazy::new(|| Selector::parse("a").unwrap());

        let stats_el = match document.select(&SEL_STATS_CONTAINER).next() {
            Some(x) => x,
            None => return Err(LiveChampDataError::MissingStatBlock.into()),
        };
        let mut data = LiveChampData {
            wikiname: champ_name.to_owned(),
            stats: Stats::from(stats_el),
            ..Default::default()
        };

        for el in document.select(&SEL_CHAMPION_CONTAINER) {
            let source = el.attr("data-source").unwrap_or_default();

            let text: String = el.select(&SEL_DATA_VALUE).flat_map(|x| x.text()).collect();
            let text = text.trim().to_owned();
            // let text: String = el.text().map(|x| x.trim()).collect::<String>().replace("\n", "\\n");
            // let html: String = el.html().replace("\n", "\\n");
            // let inner_html: String = el.inner_html().replace("\n", "\\n");

            println!("Element {source}={text}");
            match source {
                "render" => data.render = text,
                "release" => data.release_date = text,
                "changed" => data.last_changed = text,
                "role" => data.role = text.split(" ").map(|s| s.to_owned()).collect(),
                "legacy" => data.legacy = text.split(" ").map(|s| s.to_owned()).collect(),
                "position" => data.position = text.split(" ").map(|s| s.to_owned()).collect(),
                "resource" => data.resource = text,
                "rangetype" => data.range_type = text,
                "adaptivetype" => data.adaptive_type = text,
                "cost" => {
                    if data.cost_crafting.is_empty() {
                        data.cost_crafting = text;
                    } else {
                        data.cost_store = text;
                    }
                }
                "ratings" => data.ratings = text,
                "style" => data.style = text,
                "difficulty" => data.difficulty = text,
                "spotlight" => data.spotlight = text,
                s => println!(
                    "Match Failed: {s} is not a known data-source type for SEL_CHAMPION_CONTAINER"
                ),
            }
        }
        for data_url in document.select(&SEL_A_HREF).filter_map(|el| {
            let href = el.attr("href").unwrap_or_default();
            if href.starts_with("https://leagueoflegends.fandom.com/wiki/Template:Data_") {
                return Some(href);
            }
            None
        }) {
            let url = data_url.replace("?action=edit", "");
            let body = client.fetch(&url)?.text()?;
            let document = Html::parse_document(&body);

            // Abilities are un-grouped and added one by one.
            let skill = LiveAbility::new(document, &mut data)?;
            data.abilities.push(skill);
        }
        Ok(data)
    }

    // pub fn skills(
    //     &self,
    // ) -> std::iter::Chain<
    //     std::str::Split<'_, char>,
    //     std::iter::Chain<
    //         std::str::Split<'_, char>,
    //         std::iter::Chain<std::str::Split<'_, char>, std::str::Split<'_, char>>,
    //     >,
    // > {
    //     // self.skill_i.split(',').chain(
    //     //     self.skill_q
    //     //         .split(',')
    //     //         .chain(self.skill_w.split(',').chain(self.skill_r.split(','))),
    //     // )
    // }
}

#[derive(serde::Serialize, serde::Deserialize, Debug, Clone, PartialEq)]
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

    aram: SpecialStatistics,
    nexus_blitz: SpecialStatistics,
    one_for_all: SpecialStatistics,
    urf: SpecialStatistics,
    ult_spellbook: SpecialStatistics,
    arena: SpecialStatistics,
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
            as_lvl1: 0.0,
            as_lvl1_bonus: 0.0,
            attack_delay: 0.0,
            aram: Default::default(),
            arena: Default::default(),
            nexus_blitz: Default::default(),
            one_for_all: Default::default(),
            ult_spellbook: Default::default(),
            urf: Default::default(),
        }
    }
}

static DATA_SOURCE: Lazy<Selector> = Lazy::new(|| Selector::parse("[data-source]").unwrap());
impl<'a> From<ElementRef<'a>> for Stats {
    fn from(value: ElementRef<'a>) -> Self {
        let mut stats = Self::default();
        for el in value.select(&DATA_SOURCE) {
            let source = el.attr("data-source").unwrap_or("data-source-missing");

            let text: Vec<&str> = el.text().filter(|x| !x.trim().is_empty()).collect();
            let base: f64 = text
                .get(1)
                .unwrap_or(&&"")
                .replace("%", "")
                .trim()
                .parse()
                .unwrap_or_default();
            let lvl: f64 = text
                .get(2)
                .unwrap_or(&&"")
                .replace("%", "")
                .trim()
                .parse()
                .unwrap_or_default();
            println!("Stat {source} base: {base} lvl: {lvl} text: '{text:?}'");
            match source {
                "health" => {
                    stats.hp_base = base;
                    stats.hp_lvl = lvl;
                }
                "resource" => {
                    stats.mp_base = base;
                    stats.mp_lvl = lvl;
                }
                "health regen" => {
                    stats.hp5_base = base;
                    stats.hp5_lvl = lvl;
                }
                "resource regen" => {
                    stats.mp5_base = base;
                    stats.mp5_lvl = lvl;
                }
                "armor" => {
                    stats.arm_base = base;
                    stats.arm_lvl = lvl;
                }
                "attack damage" => {
                    stats.dam_base = base;
                    stats.dam_lvl = lvl;
                }
                "mr" => {
                    stats.mr_base = base;
                    stats.mr_lvl = lvl;
                }
                "critical damage" => {
                    stats.crit_base = base;
                    stats.crit_mod = lvl;
                }
                "ms" => {
                    stats.ms = base;
                    stats.ms_lvl = lvl;
                }
                "range" => {
                    stats.range = base;
                    stats.range_lvl = lvl;
                }
                "attack speed" => stats.as_base = base,
                "windup" => stats.windup = base,
                "as ratio" => stats.as_ratio = base,
                "bonus as" => stats.as_lvl = base,
                "missile speed" => stats.missile_speed = base,
                // it's listed twice
                // "missile speed" => {}
                "gameplay radius" => stats.gameplay_radius = base,
                "selection radius" => stats.selection_radius = base,
                "pathing radius radius" => stats.pathing_radius = base,
                "acquisition radius" => stats.acquisition_radius = base,

                "aram-dmg-dealt" => stats.aram.damage_dealt = base,
                "aram-dmg-taken" => stats.aram.damage_taken = base,
                "aram-healing" => stats.aram.healing = base,
                "aram-shielding" => stats.aram.shielding = base,
                "aram_ability_haste" => stats.aram.ability_haste = base,
                "aram_mana_regen" => stats.aram.mana_regen = base,
                "aram_energy_regen" => stats.aram.energy_regen = base,
                "aram_attack_speed" => stats.aram.attack_speed = base,
                "aram_movement_speed" => stats.aram.movement_speed = base,
                "aram_tenacity" => stats.aram.tenacity = base,

                "nb-dmg-dealt" => stats.nexus_blitz.damage_dealt = base,
                "nb-dmg-taken" => stats.nexus_blitz.damage_taken = base,
                "nb-dmg-healing" => stats.nexus_blitz.healing = base,
                "nb-dmg-shielding" => stats.nexus_blitz.shielding = base,
                "nb_ability_haste" => stats.nexus_blitz.ability_haste = base,
                "nb_mana_regen" => stats.nexus_blitz.mana_regen = base,
                "nb_energy_regen" => stats.nexus_blitz.energy_regen = base,
                "nb_attack_speed" => stats.nexus_blitz.attack_speed = base,
                "nb_movement_speed" => stats.nexus_blitz.movement_speed = base,
                "nb_tenacity" => stats.nexus_blitz.tenacity = base,

                "ofa-dmg-dealt" => stats.one_for_all.damage_dealt = base,
                "ofa-dmg-taken" => stats.one_for_all.damage_taken = base,
                "ofa-dmg-healing" => stats.one_for_all.healing = base,
                "ofa-dmg-shielding" => stats.one_for_all.shielding = base,
                "ofa_ability_haste" => stats.one_for_all.ability_haste = base,
                "ofa_mana_regen" => stats.one_for_all.mana_regen = base,
                "ofa_energy_regen" => stats.one_for_all.energy_regen = base,
                "ofa_attack_speed" => stats.one_for_all.attack_speed = base,
                "ofa_movement_speed" => stats.one_for_all.movement_speed = base,
                "ofa_tenacity" => stats.one_for_all.tenacity = base,

                "urf-dmg-dealt" => stats.urf.damage_dealt = base,
                "urf-dmg-taken" => stats.urf.damage_taken = base,
                "urf-dmg-healing" => stats.urf.healing = base,
                "urf-dmg-shielding" => stats.urf.shielding = base,
                "urf_ability_haste" => stats.urf.ability_haste = base,
                "urf_mana_regen" => stats.urf.mana_regen = base,
                "urf_energy_regen" => stats.urf.energy_regen = base,
                "urf_attack_speed" => stats.urf.attack_speed = base,
                "urf_movement_speed" => stats.urf.movement_speed = base,
                "urf_tenacity" => stats.urf.tenacity = base,

                "usb-dmg-dealt" => stats.ult_spellbook.damage_dealt = base,
                "usb-dmg-taken" => stats.ult_spellbook.damage_taken = base,
                "usb-dmg-healing" => stats.ult_spellbook.healing = base,
                "usb-dmg-shielding" => stats.ult_spellbook.shielding = base,
                "usb_ability_haste" => stats.ult_spellbook.ability_haste = base,
                "usb_mana_regen" => stats.ult_spellbook.mana_regen = base,
                "usb_energy_regen" => stats.ult_spellbook.energy_regen = base,
                "usb_attack_speed" => stats.ult_spellbook.attack_speed = base,
                "usb_movement_speed" => stats.ult_spellbook.movement_speed = base,
                "usb_tenacity" => stats.ult_spellbook.tenacity = base,

                "ar_dmg_dealt" => stats.arena.damage_dealt = base,
                "ar_dmg_taken" => stats.arena.damage_taken = base,
                "ar_dmg_healing" => stats.arena.healing = base,
                "ar_dmg_shielding" => stats.arena.shielding = base,
                "ar_ability_haste" => stats.arena.ability_haste = base,
                "ar_mana_regen" => stats.arena.mana_regen = base,
                "ar_energy_regen" => stats.arena.energy_regen = base,
                "ar_attack_speed" => stats.arena.attack_speed = base,
                "ar_movement_speed" => stats.arena.movement_speed = base,
                "ar_tenacity" => stats.arena.tenacity = base,
                s => println!("Match Failed: {s} is not a known data-source for Stats"),
            }
        }
        stats
    }
}

#[derive(serde::Serialize, serde::Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct SpecialStatistics {
    damage_dealt: f64,
    damage_taken: f64,
    healing: f64,
    shielding: f64,
    ability_haste: f64,
    mana_regen: f64,
    energy_regen: f64,
    attack_speed: f64,
    movement_speed: f64,
    tenacity: f64,
}

#[derive(serde::Serialize, serde::Deserialize, Debug, Clone, PartialEq)]
pub enum GroupAbility {
    One(LiveAbility),
    Two(LiveAbility, LiveAbility),
    Three(LiveAbility, LiveAbility, LiveAbility),
}

#[derive(serde::Serialize, serde::Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct LiveAbility {
    pub name: String,      //Sonic Wave : String, //Necessary: Used for identification.
    pub disp_name: String, //Name of the ability Only necessary if the value differs from Sonic Wave.
    pub champion: String,  //Lee Sin : String, //champion
    pub skill: String,     //Q : String, //skill
    pub range: Scaling,     //range
    pub target_range: Scaling, //Range center 1200 : String, //target range
    pub attack_range: Scaling, //attack range
    pub collision_radius: Scaling, //collision radius
    pub effect_radius: Scaling, //Sight icon 400 : String, //effect radius
    pub width: Scaling,     //Range model 120 : String, //width
    pub angle: Scaling,     //angle
    pub inner_radius: Scaling, //inner radius
    pub tether_radius: Scaling, //tether radius
    pub speed: Scaling,    //1800 : String, //speed
    pub cast_time: Scaling, //0.25 : String, //cast time
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
    pub icon2: String,                //icon2
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
    fn new<'a>(document: Html, _champ: &mut LiveChampData) -> Result<LiveAbility> {
        static DATA_NAME: Lazy<Selector> =
            Lazy::new(|| Selector::parse(".article-table [data-name]").unwrap());

        let mut ability = LiveAbility::default();
        for el in document.select(&DATA_NAME) {
            let data_name = el
                .attr("data-name")
                .expect("[data-name] must have data-name attr");

            let inner_html = el.inner_html().trim().to_owned();

            // println!("Ability {data_name} text: '{inner_html:?}'");
            match data_name {
                "1" => ability.name = inner_html,
                "disp_name" => ability.disp_name = inner_html,
                "champion" => ability.champion = inner_html,
                "skill" => ability.skill = inner_html,
                "range" => ability.range = as_scaling(el),
                "target range" => ability.target_range = as_scaling(el),
                "attack range" => ability.attack_range = as_scaling(el),
                "collision radius" => ability.collision_radius = as_scaling(el),
                "effect radius" => ability.effect_radius = as_scaling(el),
                "width" => ability.width = as_scaling(el),
                "angle" => ability.angle = as_scaling(el),
                "inner radius" => ability.inner_radius = as_scaling(el),
                "tether radius" => ability.tether_radius = as_scaling(el),
                "speed" => ability.speed = as_scaling(el),
                "cast time" => ability.cast_time = as_scaling(el),
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
