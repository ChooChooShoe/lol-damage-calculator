use std::{fs::File, io::Write};

use serde::{Deserialize, Serialize};

use crate::{
    cdragon::{
        CommunityDragon, Item as CItem, ItemId, RequiredAlly, RequiredBuffCurrencyName,
        RequiredChampion,
    },
    datadragon::{DataDragon, Item as DItem},
    leaguewiki::{LeagueWiki, LiveItemData, PassiveProgression},
};

pub fn generate_items(
    ddragon: &mut DataDragon,
    cdragon: &mut CommunityDragon,
    leageuwiki: &mut LeagueWiki,
) -> Result<(), Box<dyn std::error::Error>> {
    let mut d_items = ddragon.get_items()?;
    let mut c_items = cdragon.get_items()?;

    let mut res = Vec::with_capacity(c_items.len());

    for c_item in c_items.drain(..) {
        let ditem: Option<DItem> = d_items.remove(&c_item.id.to_string());
        let item = if let Ok(x) = leageuwiki.get_item_data(&c_item.name, c_item.is_ornn_item()) {
            x
        } else {
            println!("League wiki failed from item {}", c_item.name);
            continue;
        };

        if let Some(rune) = FullItem::merge_from(ditem, c_item, item) {
            res.push(rune);
        }
    }

    save_to_file("../src/model/items/items.gen.ts", &res)?;
    Ok(())
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct FullItem {
    pub id: ItemId,
    /// Translated name
    pub name: String,
    /// Name of the item. Only necessary if the value differs from name.
    pub disp_name: String,
    pub description: String,
    pub active: bool,
    pub in_store: bool, // defaults to true
    pub from: Vec<ItemId>,
    pub to: Vec<ItemId>,
    pub categories: Vec<String>,
    pub max_stacks: i64,                     // defaults to 1
    pub required_champion: RequiredChampion, //'FiddleSticks' | 'Kalista' | 'Sylas' | 'Gangplank', //defaults to ""
    pub required_ally: RequiredAlly,         // : 'Ornn', //defaults to ""
    pub required_buff_currency_name: RequiredBuffCurrencyName,
    pub required_buff_currency_cost: i64,
    pub special_recipe: usize, // defaults to 0
    pub is_enchantment: bool,  // always false
    pub price: i64,
    pub price_total: i64,
    /// Wiki buy field
    pub buy: String,
    /// Wiki sell field
    pub sell: String,

    pub icon_path: String,
    pub stats: FullItemStats,
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

    pub limit: String,    //get.infoboxlimit(item),
    pub req: String,      //get.req(item),
    pub recipe: String,   //_getInfoboxRecipe(item),
    pub builds: String,   //_getInfoboxBuilds(item),
    pub sr: String,       //get.SR(item) == true and 'yes' or 'no',
    pub ha: String,       //get.HA(item) == true and 'yes' or 'no',
    pub ar: String,       //get.AR(item) == true and 'yes' or 'no',
    pub menu: String,     //menu,
    pub nickname: String, //nickname,
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
pub struct FullItemStats {
    pub ap: f64,              //get.ap(item),
    pub apunique: f64,        //get.apunique(item),
    pub ah: f64,              //get.ah(item),
    pub armor: f64,           //get.armor(item),
    pub armorunique: f64,     //get.armorunique(item),
    pub armpen: f64,          //get.armpen(item),
    pub lethality: f64,       //get.lethality(item),
    pub lethalityunique: f64, //get.lethalityunique(item),
    pub ad: f64,              //get.ad(item),
    pub attack_speed: f64,    //get.as(item),
    pub cdr: f64,             //get.cdr(item),
    pub cdrunique: f64,       //get.cdrunique(item),
    pub crit: f64,            //get.crit(item),
    pub critdamage: f64,      //get.critdamage(item),
    pub gp10: f64,            //get.gp10(item),
    pub hsp: f64,             //get.hsp(item),
    pub hspunique: f64,       //get.hspunique(item),
    pub hp: f64,              //get.hp(item),
    pub hp5: f64,             //get.hp5(item),
    pub hp5flat: f64,         //get.hp5flat(item),
    pub lifesteal: f64,       //get.lifesteal(item),
    pub mr: f64,              //get.mr(item),
    pub msflat: f64,          //get.msflat(item),
    pub ms: f64,              //get.ms(item),
    pub msunique: f64,        //get.msunique(item),
    pub mana: f64,            //get.mana(item),
    pub mp5: f64,             //get.mp5(item),
    pub mp5flat: f64,         //get.mp5flat(item),
    pub mpen: f64,            //get.mpen(item),
    pub mpenflat: f64,        //get.mpenflat(item),
    pub omnivamp: f64,        //get.omnivamp(item),
    pub pvamp: f64,           //get.pvamp(item),
    pub spellvamp: f64,       //get.spellvamp(item),
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
    pub fn merge_from(d_item: Option<DItem>, item: CItem, live_item: LiveItemData) -> Option<Self> {
        let icon_path = item.icon_path[22..].to_lowercase();
        let icon_url = format!("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/{icon_path}");

        if let Some(d_item) = d_item {
            assert!(d_item.name == item.name);
        }

        Some(FullItem {
            stats: Into::into(&live_item),
            id: item.id,
            name: item.name,
            disp_name: live_item.disp_name,
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
            buy: live_item.buy,
            sell: live_item.sell,
            icon_path,
            spec: live_item.spec,
            spec2: live_item.spec2,
            consume: live_item.consume,
            pass: live_item.pass,
            pass2: live_item.pass2,
            pass3: live_item.pass3,
            pass4: live_item.pass4,
            pass5: live_item.pass5,
            mythic: live_item.mythic,
            act: live_item.act,
            limit: live_item.limit,
            req: live_item.req,
            recipe: live_item.recipe,
            builds: live_item.builds,
            sr: live_item.sr,
            ha: live_item.ha,
            ar: live_item.ar,
            menu: live_item.menu,
            nickname: live_item.nickname,
        })
    }
}
fn save_to_file(file: &str, output: &Vec<FullItem>) -> Result<(), Box<dyn std::error::Error>> {
    let mut file = File::create(file)?;

    let j = serde_json::to_string_pretty(output)?;

    file.write_all(b"export default ")?;
    file.write_all(j.as_bytes())?;

    Ok(())
}
