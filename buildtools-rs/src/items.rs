use std::{collections::HashMap, fs::File, io::Write};

use serde::{Deserialize, Serialize};

use crate::{
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

    for c_item in c_items.drain(..) {
        let ditem: Option<DItem> = d_items.remove(&c_item.id.to_string());
        let item = if let Ok(x) = leageuwiki.get_item_data(&c_item.name, c_item.is_ornn_item()) {
            x
        } else {
            println!("League wiki failed from item {}", c_item.name);
            continue;
        };
        if let Some(ditem) = ditem {
            if let Some(full_item) = FullItem::merge_from(ditem, c_item, item, ddragon.sprite_base_uri())
            {
                res.push((full_item.id.to_string(), full_item));
            }
        }
    }
    save_to_file("../src/model/items/items.gen.ts", &mut res)?;
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
    #[serde(skip)]
    pub buy: String,
    /// Wiki sell field
    #[serde(skip)]
    pub sell: String,
    pub in_store: bool, // defaults to true

    pub icon_path: String,
    pub sprite_style: String,
    pub image: Image,
    pub maps: Vec<String>,
    pub depth: i64,
    pub limit: Option<String>,                   //get.infoboxlimit(item),
    pub requirement_description: Option<String>, //get.req(item),
    pub menu: Vec<String>,                            //menu,

    pub stats: FullItemStats,
    /// Specal Stat 1
    #[serde(skip_serializing_if = "Option::is_none")]
    pub special_stat: Option<String>,
    /// Specal Stat 2
    #[serde(skip_serializing_if = "Option::is_none")]
    pub special_stat2: Option<String>,

    pub effects: Effects,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub recipe: Option<String>, //_getInfoboxRecipe(item),
    #[serde(skip_serializing_if = "Option::is_none")]
    pub builds: Option<String>, //_getInfoboxBuilds(item),
    pub sr: bool, //get.SR(item) == true and 'yes' or 'no',
    pub ha: bool, //get.HA(item) == true and 'yes' or 'no',
    pub ar: bool, //get.AR(item) == true and 'yes' or 'no',

    pub r#type: String,
    pub category: String,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct FullItemStats {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ap: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ah: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub armor: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub armpen: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub lethality: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ad: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub attack_speed: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub cdr: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub crit: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub critdamage: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub gp10: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub hsp: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub hp: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub hp5: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub hp5flat: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub lifesteal: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mr: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub msflat: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ms: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mana: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mp5: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mp5flat: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mpen: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mpenflat: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub omnivamp: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub pvamp: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub spellvamp: Option<f64>,

    // These are shown with a "Unique:" prefix
    #[serde(skip_serializing_if = "Option::is_none")]
    pub apunique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub cdrunique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub armorunique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub msunique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub hspunique: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub lethalityunique: Option<f64>,
}

impl From<&LiveItemData> for FullItemStats {
    fn from(value: &LiveItemData) -> Self {
        FullItemStats {
            ap: value.ap,
            apunique: value.apunique,
            ah: value.ah,
            armor: value.armor,
            armorunique: value.armorunique,
            armpen: value.armpen,
            lethality: value.lethality,
            lethalityunique: value.lethalityunique,
            ad: value.ad,
            attack_speed: value.attack_speed,
            cdr: value.cdr,
            cdrunique: value.cdrunique,
            crit: value.crit,
            critdamage: value.critdamage,
            gp10: value.gp10,
            hsp: value.hsp,
            hspunique: value.hspunique,
            hp: value.hp,
            hp5: value.hp5,
            hp5flat: value.hp5flat,
            lifesteal: value.lifesteal,
            mr: value.mr,
            msflat: value.msflat,
            ms: value.ms,
            msunique: value.msunique,
            mana: value.mana,
            mp5: value.mp5,
            mp5flat: value.mp5flat,
            mpen: value.mpen,
            mpenflat: value.mpenflat,
            omnivamp: value.omnivamp,
            pvamp: value.pvamp,
            spellvamp: value.spellvamp,
        }
    }
}

impl FullItem {
    pub fn merge_from(
        d_item: DItem,
        item: CItem,
        live_item: LiveItemData,
        sprite_base_uri: &str,
    ) -> Option<Self> {
        let icon_path = item.icon_path[22..].to_lowercase();
        let icon_url = format!("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/{icon_path}");

        if d_item.name.trim() != item.name.trim() {
            println!("Names are not the same {} and {}", d_item.name, item.name)
        }
        let item_type = "Unknown".to_owned();
        let category = "unsorted".to_owned();

        Some(FullItem {
            colloq: d_item.colloq.clone(),
            sprite_style: d_item.image.get_sprite_style(sprite_base_uri),
            image: d_item.image,

            stats: Into::into(&live_item.clone()),

            id: item.id,
            name: item.name,
            disp_name: "".to_owned(), //live_item.disp_name,
            description: item.description,
            active: item.active,
            in_store: item.in_store,
            from: item.from,
            to: item.to,
            categories: item.categories,
            max_stacks: item.max_stacks,
            required_champion: item.required_champion,
            required_ally: item.required_ally,
            required_buff_currency_name: item.required_buff_currency_name,
            required_buff_currency_cost: item.required_buff_currency_cost,
            special_recipe: item.special_recipe,
            is_enchantment: item.is_enchantment,
            price: item.price,
            price_total: item.price_total,
            sell_price: d_item.gold.sell,
            buy: live_item.buy,
            sell: live_item.sell,
            icon_path: icon_url,
            special_stat: live_item.spec,
            special_stat2: live_item.spec2,
            effects: live_item.effects,
            limit: live_item.limit,
            requirement_description: live_item.req,
            recipe: live_item.recipe,
            builds: live_item.builds,
            sr: live_item.sr,
            ha: live_item.ha,
            ar: live_item.ar,
            menu: live_item.menu,
            keywords: live_item.keywords,
            maps: maps_from(live_item.sr, live_item.ha, live_item.ar),
            depth: d_item.depth,
            r#type: item_type,
            category,
        })
    }
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct ItemScript {
    pub models: Effects

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
