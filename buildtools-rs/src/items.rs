use std::{collections::HashMap, fs::File, io::Write};

use serde::{Deserialize, Serialize};

use crate::remote::{
    cdragon::{
        CommunityDragon, Item as CItem, ItemId, RequiredAlly, RequiredBuffCurrencyName,
        RequiredChampion,
    },
    datadragon::{DataDragon, Image, Item as DItem},
    leaguewiki::{Effects, LeagueWiki, LiveItemData, PassiveProgression},
};

pub fn generate_items(
    ddragon: &mut DataDragon,
    cdragon: &mut CommunityDragon,
    leageuwiki: &mut LeagueWiki,
) -> Result<(), Box<dyn std::error::Error>> {
    let mut d_items = ddragon.get_items()?;
    let mut c_items = cdragon.get_items()?;

    let mut res: Vec<(String, FullItem)> = Vec::new();

    for c_item in c_items.drain(0..50) {
        let d_item = match d_items.remove(&c_item.id.to_string()) {
            None => {
                println!(
                    "Item {}({}) from cdragon was not found in datadragon",
                    c_item.name, c_item.id
                );
                continue;
            }
            Some(x) => x,
        };

        let w_item = match leageuwiki.get_item_data(&c_item.name, c_item.is_ornn_item()) {
            Err(_) => {
                println!("League wiki failed from item {}", c_item.name);
                continue;
            }
            Ok(x) => x,
        };
        if let Some(full_item) =
            FullItem::merge_from(d_item, c_item, w_item, ddragon.sprite_base_uri())
        {
            res.push((full_item.id.to_string(), full_item));
        }
    }
    save_to_file("./items.gen.ts", &mut res)?;
    Ok(())
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct FullItem {
    pub id: ItemId,
    /// Translated name
    pub name: String,
    /// Name of the item. Only necessary if the value differs from name.
    #[serde(skip)]
    pub disp_name: String,
    pub keywords: Vec<String>, //nickname,
    pub description: String,
    pub colloq: String,
    pub active: bool,
    pub from: Vec<ItemId>,
    pub to: Vec<ItemId>,
    pub categories: Vec<String>,
    pub max_stacks: i64,                     // defaults to 1
    pub required_champion: RequiredChampion, //'FiddleSticks' | 'Kalista' | 'Sylas' | 'Gangplank', //defaults to ""
    pub required_ally: RequiredAlly,         // : 'Ornn', //defaults to ""
    pub required_buff_currency_name: RequiredBuffCurrencyName,
    pub required_buff_currency_cost: i64,
    pub special_recipe: usize, // defaults to 0
    #[serde(skip)]
    pub is_enchantment: bool, // always false
    pub price: i64,
    pub price_total: i64,
    pub sell_price: i64,
    /// Wiki buy field
    // #[serde(skip)]
    pub buy: String,
    /// Wiki sell field
    // #[serde(skip)]
    pub sell: String,
    pub in_store: bool, // defaults to true

    pub icon_path: String,
    pub sprite_style: String,
    pub image: Image,
    // pub maps: Vec<String>,
    pub depth: i64,
    pub limit: Option<String>,                   //get.infoboxlimit(item),
    pub requirement_description: Option<String>, //get.req(item),
    pub menu: Vec<String>,                       //menu,

    pub stats: FullItemStats,
    /// Specal Stat 1
    pub special_stat: Option<String>,
    /// Specal Stat 2
    pub special_stat2: Option<String>,

    pub effects: Effects,

    pub recipe: Option<String>, //_getInfoboxRecipe(item),
    pub builds: Option<String>, //_getInfoboxBuilds(item),

    pub availability: Availability,
    pub r#type: String,
    pub category: String,
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct Availability {
    pub classic: bool,
    pub aram: bool,
    pub nexus_blitz: bool,
    pub arena: bool,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct FullItemStats {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ability_power: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ability_haste: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub armor: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub precent_armor_penetration: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub lethality: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub attack_damage: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub attack_speed: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub cooldown_reduction: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub critical_strike_chance: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub crit_damage: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub gold_per_10: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub heal_and_shield_power: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub health: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub health_regen_precent: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub health_regen_flat: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub lifesteal: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub magic_resistance: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub movement_speed_flat: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub movement_speed_precent: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mana: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mana_regen_precent: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mana_regen_flat: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub magic_penetration_precent: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub magic_penetration_flat: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub omnivamp: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub physical_vamp: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub spell_vamp: Option<f64>,

    // These are shown with a "Unique:" prefix
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ability_power_unique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub cdrunique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub armor_unique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub msunique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub heal_and_shield_power_unique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub lethalityunique: Option<f64>,
}

impl From<&LiveItemData> for FullItemStats {
    fn from(value: &LiveItemData) -> Self {
        FullItemStats {
            ability_power: value.ap,
            ability_power_unique: value.apunique,
            ability_haste: value.ah,
            armor: value.armor,
            armor_unique: value.armorunique,
            precent_armor_penetration: value.armpen,
            lethality: value.lethality,
            lethalityunique: value.lethalityunique,
            attack_damage: value.ad,
            attack_speed: value.attack_speed,
            cooldown_reduction: value.cdr,
            cdrunique: value.cdrunique,
            critical_strike_chance: value.crit,
            crit_damage: value.critdamage,
            gold_per_10: value.gp10,
            heal_and_shield_power: value.hsp,
            heal_and_shield_power_unique: value.hspunique,
            health: value.hp,
            health_regen_precent: value.hp5,
            health_regen_flat: value.hp5flat,
            lifesteal: value.lifesteal,
            magic_resistance: value.mr,
            movement_speed_flat: value.msflat,
            movement_speed_precent: value.ms,
            msunique: value.msunique,
            mana: value.mana,
            mana_regen_precent: value.mp5,
            mana_regen_flat: value.mp5flat,
            magic_penetration_precent: value.mpen,
            magic_penetration_flat: value.mpenflat,
            omnivamp: value.omnivamp,
            physical_vamp: value.pvamp,
            spell_vamp: value.spellvamp,
        }
    }
}

impl FullItem {
    pub fn merge_from(
        d_item: DItem,
        c_item: CItem,
        w_item: LiveItemData,
        sprite_base_uri: &str,
    ) -> Option<Self> {
        let icon_path = c_item.icon_path[22..].to_lowercase();
        let icon_url = format!("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/{icon_path}");

        if d_item.name.trim() != c_item.name.trim() {
            println!("Names are not the same {} and {}", d_item.name, c_item.name)
        }
        let item_type = "Unknown".to_owned();
        let category = "unsorted".to_owned();

        Some(FullItem {
            colloq: d_item.colloq.clone(),
            sprite_style: d_item.image.get_sprite_style(sprite_base_uri),
            image: d_item.image,

            stats: Into::into(&w_item.clone()),

            id: c_item.id,
            name: c_item.name,
            disp_name: w_item.disp_name,
            description: c_item.description,
            active: c_item.active,
            in_store: c_item.in_store,
            from: c_item.from,
            to: c_item.to,
            categories: c_item.categories,
            max_stacks: c_item.max_stacks,
            required_champion: c_item.required_champion,
            required_ally: c_item.required_ally,
            required_buff_currency_name: c_item.required_buff_currency_name,
            required_buff_currency_cost: c_item.required_buff_currency_cost,
            special_recipe: c_item.special_recipe,
            is_enchantment: c_item.is_enchantment,
            price: c_item.price,
            price_total: c_item.price_total,
            sell_price: d_item.gold.sell,
            buy: w_item.buy,
            sell: w_item.sell,
            icon_path: icon_url,
            special_stat: w_item.spec,
            special_stat2: w_item.spec2,
            effects: w_item.effects,
            limit: w_item.limit,
            requirement_description: w_item.req,
            recipe: w_item.recipe,
            builds: w_item.builds,
            availability: Availability {
                classic: w_item.availability_classic_sr_5v5,
                aram: w_item.availability_hr_aram,
                nexus_blitz: w_item.availability_nexus_blitz,
                arena: w_item.availability_arena,
            },
            menu: w_item.menu,
            keywords: w_item.keywords,
            // maps: vec![], // TODO: maps_from(live_item.sr, live_item.ha, live_item.ar),
            depth: d_item.depth,
            r#type: item_type,
            category,
        })
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct ItemScript {
    pub models: Effects,
}

fn maps_from(sr: bool, hr: bool, ar: bool) -> Vec<String> {
    let mut res = Vec::with_capacity(3);
    if sr {
        res.push("SR".to_owned())
    }
    if hr {
        res.push("HA".to_owned())
    }
    if ar {
        res.push("AR".to_owned())
    }
    res
}

fn save_to_file(
    file: &str,
    output: &mut Vec<(String, FullItem)>,
) -> Result<(), Box<dyn std::error::Error>> {
    let mut file = File::create(file)?;

    output.sort_unstable_by(|a, b| a.0.cmp(&b.0));
    // let j = serde_json::to_string_pretty(output)?;

    file.write_all(b"//This file is auto-generated.\n\nimport type { RootRatio } from '@/api/DataTypes';\n\n// prettier-ignore\nexport type ItemNumber = ")?;
    let keys = output.iter().map(|f| f.0.clone()).collect::<Vec<_>>();

    file.write_all(keys.join(" | ").as_bytes())?;

    file.write_all(b";\n\nexport default {")?;
    for x in output {
        let j = serde_json::to_string(&x.1)?;
        // let j = j.replace("from", "to");

        file.write_all(format!("'{}': ", x.0).as_bytes())?;
        file.write_all(j.as_bytes())?;
        file.write_all(",".as_bytes())?;
    }
    file.write_all("} satisfies { [n in ItemNumber]: ItemGenData };\n\n".as_bytes())?;
    file.write_all(include_bytes!("item.gen.ts"))?;

    Ok(())
}
