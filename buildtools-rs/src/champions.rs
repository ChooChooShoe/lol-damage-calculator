use std::{collections::HashMap, fs::File, io::Write};

use serde::{Deserialize, Serialize};

use crate::remote::{
    cdragon::{
        ChampionData, ChampionNumberId, CommunityDragon, Item as CItem, ItemId, Passive,
        PlaystyleInfo, RequiredAlly, RequiredBuffCurrencyName, RequiredChampion, SpellInfo,
        TacticalInfo,
    },
    datadragon::{ChampionComplex, DataDragon, Image, Item as DItem},
    leaguewiki::{
        AdaptiveType, Effects, LeagueWiki, LiveChampData, LiveItemData, PassiveProgression,
        RangeType, Stats,
    },
};

pub fn gen(
    ddragon: &mut DataDragon,
    cdragon: &mut CommunityDragon,
    leageuwiki: &mut LeagueWiki,
) -> Result<(), Box<dyn std::error::Error>> {
    let mut summaries = cdragon.get_champion_summary()?;

    let mut res: Vec<(String, FullChamp)> = Vec::new();

    for summary in summaries.drain(0..30) {
        let c_champ = match cdragon.get_champion(summary.id) {
            Ok(x) => x,
            Err(e) => {
                println!(
                    "[ERROR] Champion {}({}) failed because of: {e}",
                    summary.name, summary.id
                );
                continue;
            }
        };

        let d_champ = match ddragon.find_champion(&summary.alias) {
            Ok(x) => x,
            Err(e) => {
                println!(
                    "[ERROR] Champion {}({}) using alias '{}' from cdragon was not found in datadragon\nCause: {e}",
                    summary.name, summary.id, summary.alias
                );
                continue;
            }
        };

        let w_champ = match leageuwiki.get_champ_data(&summary.name) {
            Ok(x) => x,
            Err(e) => {
                println!(
                    "[ERROR] Champion {}({}) failed to get league wiki because of {e}",
                    summary.name, summary.id
                );
                continue;
            }
        };
        let full = FullChamp::merge_from(d_champ, c_champ, w_champ, ddragon.sprite_base_uri());
        res.push((full.name.to_string(), full));
    }
    save_to_file("./Champions.gen.ts", &mut res)?;
    Ok(())
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct FullChamp {
    pub id: ChampionNumberId,
    pub wikiname: String, // champion name (must be unique)
    // pub id: u32,          // champion's ID within the api
    pub apiname: String, // champion's name within the api

    pub name: String,  // "Wukong",
    pub alias: String, // "MonkeyKing",
    pub title: String,
    pub image: Image,
    pub sprite_style: String,
    pub short_bio: String,
    pub tactical_info: TacticalInfo,
    pub playstyle_info: PlaystyleInfo,
    pub square_portrait_path: String,
    pub stinger_sfx_path: String,
    pub choose_vo_path: String,
    pub ban_vo_path: String,
    pub roles: Vec<String>,
    pub recommended_item_defaults: Vec<String>,
    // pub skins: Vec<SkinInfo>,
    pub passive: Passive,
    pub spells: [SpellInfo; 4],

    pub resource: String, // champion's resource
    pub fullname: String, //  	Lore character's full given name. This is used in the champion roster's search feature
    pub nickname: String,
    pub date: String,               // release date
    pub patch: String,              // release patch ID (e.g. V4.20)
    pub changes: String,            // patch ID of last changes
    pub role: Vec<String>,          // table of strings
    pub adaptivetype: AdaptiveType, // champion's adaptive force type
    pub rangetype: RangeType,       // Melee or Ranged
    pub be: u32,                    // champion's Blue Essence cost
    pub rp: u32,                    // champion's RP cost
    pub skill_i: String,            // table of strings
    pub skill_q: String,            // table of strings
    pub skill_w: String,            // table of strings
    pub skill_e: String,            // table of strings
    pub skill_r: String,            // table of strings
    pub stats: Stats,
}
impl FullChamp {
    pub fn merge_from(
        d: ChampionComplex,
        c: ChampionData,
        w: LiveChampData,
        sprite_base_uri: &str,
    ) -> Self {
        // let icon_path = c.icon_path[22..].to_lowercase();
        // let icon_url = format!("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/{icon_path}");

        let item_type = "Unknown".to_owned();
        let category = "unsorted".to_owned();

        // debug_assert_eq!(d.key, c.id.to_string());
        // debug_assert_eq!(d.key, w.id.to_string());

        // debug_assert_eq!(d.id, c.alias, "d.id, c.alias");
        // debug_assert_eq!(d.id, w.apiname, "d.id, w.apiname");

        // debug_assert_eq!(d.name, c.name, "d.name, c.name");
        // debug_assert_eq!(d.name, w.wikiname, "d.name, w.wikiname");

        // debug_assert_eq!(c.title, w.title, "c.title, w.title");

        // debug_assert_eq!(
        //     c.tactical_info.difficulty, w.difficulty,
        //     "c.tactical_info.difficulty, w.difficulty"
        // );
        // debug_assert_eq!(
        //     c.tactical_info.style, w.style,
        //     "c.tactical_info.style, w.style"
        // );

        // debug_assert_eq!(
        //     c.playstyle_info.damage, w.damage,
        //     "c.playstyle_info.damage, w.damage"
        // );
        // debug_assert_eq!(
        //     c.playstyle_info.durability, w.toughness,
        //     "c.playstyle_info.durability, w.toughness"
        // );
        // debug_assert_eq!(
        //     c.playstyle_info.crowd_control, w.control,
        //     "c.playstyle_info.crowd_control, w.control"
        // );
        // debug_assert_eq!(
        //     c.playstyle_info.mobility, w.mobility,
        //     "c.playstyle_info.mobility, w.mobility"
        // );
        // debug_assert_eq!(
        //     c.playstyle_info.utility, w.utility,
        //     "c.playstyle_info.utility, w.utility"
        // );

        FullChamp {
            id: c.id,
            wikiname: w.wikiname,
            apiname: w.apiname,
            name: c.name,
            alias: c.alias,
            title: c.title,
            sprite_style: d.image.get_sprite_style(sprite_base_uri),
            image: d.image,
            short_bio: c.short_bio,
            tactical_info: c.tactical_info,
            playstyle_info: c.playstyle_info,
            square_portrait_path: c.square_portrait_path,
            stinger_sfx_path: c.stinger_sfx_path,
            choose_vo_path: c.choose_vo_path,
            ban_vo_path: c.ban_vo_path,
            roles: c.roles,
            recommended_item_defaults: c.recommended_item_defaults,
            passive: c.passive,
            spells: c.spells,
            resource: w.resource,
            fullname: w.fullname,
            nickname: w.nickname,
            date: w.date,
            patch: w.patch,
            changes: w.changes,
            role: w.role,
            adaptivetype: w.adaptivetype,
            rangetype: w.rangetype,
            be: w.be,
            rp: w.rp,
            skill_i: w.skill_i,
            skill_q: w.skill_q,
            skill_w: w.skill_w,
            skill_e: w.skill_e,
            skill_r: w.skill_r,
            stats: w.stats,
        }
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
    file_name: &str,
    output: &mut Vec<(String, FullChamp)>,
) -> Result<(), Box<dyn std::error::Error>> {
    let mut file = File::create(file_name)?;

    output.sort_unstable_by(|a, b| a.0.cmp(&b.0));
    // let j = serde_json::to_string_pretty(output)?;

    writeln!(file, "//This file is auto-generated.\n")?;

    writeln!(
        file,
        "import type {{ ChampionGenData }} from '@/api/DataTypes';\n"
    )?;
    writeln!(file, "// prettier-ignore")?;
    let keys = output
        .iter()
        .map(|(name, _champ)| format!("'{name}'"))
        .collect::<Vec<_>>()
        .join(" | ");
    writeln!(file, "export type ChampionName = {keys}")?;

    file.write_all(b";\n\nexport default {")?;
    for (name, champ) in output {
        let champ_as_json = serde_json::to_string(&champ)?;
        // let j = j.replace("from", "to");

        file.write_all(format!("'{}': ", name).as_bytes())?;
        file.write_all(champ_as_json.as_bytes())?;
        file.write_all(",\n".as_bytes())?;
    }
    file.write_all("} satisfies { [n in ChampionName]: ChampionGenData };\n".as_bytes())?;
    // file.write_all(include_bytes!("item.gen.ts"))?;

    println!("File saved. {file_name}");
    Ok(())
}
