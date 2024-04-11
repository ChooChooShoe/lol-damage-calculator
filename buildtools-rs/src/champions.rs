use std::{collections::HashMap, fs::File, io::Write, iter::Map};

use serde::{Deserialize, Serialize};

use crate::remote::{
    cdragon::{
        ChampionData, ChampionNumberId, CommunityDragon, Item as CItem, ItemId, Passive,
        PlaystyleInfo, RequiredAlly, RequiredBuffCurrencyName, RequiredChampion, SpellInfo,
        TacticalInfo,
    },
    datadragon::{ChampionComplex, DataDragon, Image, Item as DItem},
    leaguewiki::{
        AdaptiveType, Effects, LeagueWiki, LevelingGroup, LiveAbility, LiveChampData, LiveItemData,
        PassiveProgression, RangeType, Scaling, Stats,
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
        if let Ok(skills) = leageuwiki.get_champ_skills(&w_champ) {
            let full_skills = skills
                .into_iter()
                .map(|skill| FullSkill::new(&w_champ, skill))
                .collect();

            match save_skills_to_file(
                format!("./champion/{}.gen.ts", w_champ.wikiname),
                full_skills,
            ) {
                Ok(()) => (),
                Err(e) => {
                    println!(
                        "[ERROR] Skills from champ {}({}) could not save to disk because of {e}",
                        summary.name, summary.id
                    );
                }
            }
        }

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
    pub apiname: String,  // champion's name within the api
    pub name: String,     // "Wukong",
    pub alias: String,    // "MonkeyKing",
    pub fullname: String, //  	Lore character's full given name. This is used in the champion roster's search feature
    pub nickname: String,
    pub title: String,
    pub image: Image,
    pub sprite_style: String,
    pub resource: String,           // champion's resource
    pub date: String,               // release date
    pub patch: String,              // release patch ID (e.g. V4.20)
    pub changes: String,            // patch ID of last changes
    pub role: Vec<String>,          // table of strings
    pub adaptivetype: AdaptiveType, // champion's adaptive force type
    pub rangetype: RangeType,       // Melee or Ranged
    pub be: u32,                    // champion's Blue Essence cost
    pub rp: u32,                    // champion's RP cost
    pub short_bio: String,
    pub tactical_info: TacticalInfo,
    pub playstyle_info: PlaystyleInfo,
    pub square_portrait_path: String,
    pub stinger_sfx_path: String,
    pub choose_vo_path: String,
    pub ban_vo_path: String,
    pub roles: Vec<String>,
    // pub recommended_item_defaults: Vec<String>,
    // pub skins: Vec<SkinInfo>,
    // pub passive: Passive,
    // pub spells: [SpellInfo; 4],
    pub skill_i: Vec<String>, // table of strings
    pub skill_q: Vec<String>, // table of strings
    pub skill_w: Vec<String>, // table of strings
    pub skill_e: Vec<String>, // table of strings
    pub skill_r: Vec<String>, // table of strings
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
            // recommended_item_defaults: c.recommended_item_defaults,
            // passive: c.passive,
            // spells: c.spells,
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
            skill_i: w.skill_i.split(',').map(|x| x.trim().to_owned()).collect(),
            skill_q: w.skill_q.split(',').map(|x| x.trim().to_owned()).collect(),
            skill_w: w.skill_w.split(',').map(|x| x.trim().to_owned()).collect(),
            skill_e: w.skill_e.split(',').map(|x| x.trim().to_owned()).collect(),
            skill_r: w.skill_r.split(',').map(|x| x.trim().to_owned()).collect(),
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

fn save_skills_to_file(
    file_name: String,
    output: Vec<FullSkill>,
) -> Result<(), Box<dyn std::error::Error>> {
    let mut file = std::io::BufWriter::new(File::create(file_name)?);

    let now = chrono::Local::now().to_rfc2822();
    writeln!(file, "// This file is auto-generated on {now}.\n")?;
    writeln!(file, "import {{ SkillGenData }} from '@/api/DataTypes';\n")?;

    writeln!(file, "// prettier-ignore")?;
    let keys = output
        .iter()
        .map(|x| format!("'{}'", x.name))
        .collect::<Vec<_>>()
        .join(" | ");
    writeln!(file, "export type SkillName = {keys};")?;

    writeln!(file, "\nexport const Skills =  {{")?;

    for skill in output {
        let as_json = serde_json::to_string_pretty(&skill)?;
        writeln!(file, "'{}': {as_json},", skill.name)?;
    }
    writeln!(file, "}} satisfies {{ [n in SkillName]: SkillGenData }};\n")?;

    Ok(())
}
fn save_to_file(
    file_name: &str,
    output: &mut Vec<(String, FullChamp)>,
) -> Result<(), Box<dyn std::error::Error>> {
    let mut file = std::io::BufWriter::new(File::create(file_name)?);

    output.sort_unstable_by(|a, b| a.0.cmp(&b.0));

    let now = chrono::Local::now().to_rfc2822();
    writeln!(file, "// This file is auto-generated on {now}.\n")?;

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
    writeln!(file, "export type ChampionName = {keys};")?;

    file.write_all(b"\n\nexport default {")?;
    for (name, champ) in output {
        let champ_as_json = serde_json::to_string_pretty(&champ)?;
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

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct FullSkill {
    pub name: String, //Sonic Wave : String, //Necessary: Used for identification.
    pub display_name: String, //Name of the ability Only necessary if the value differs from Sonic Wave.
    pub champion: String,     //Lee Sin : String, //champion
    pub skill: String,        //Q : String, //skill
    pub range: String,        //range
    pub target_range: String, //Range center 1200 : String, //target range
    pub attack_range: String, //attack range
    pub collision_radius: String, //collision radius
    pub effect_radius: String, //Sight icon 400 : String, //effect radius
    pub width: String,        //Range model 120 : String, //width
    pub angle: String,        //angle
    pub inner_radius: String, //inner radius
    pub tether_radius: String, //tether radius
    pub speed: Scaling,       //1800 : String, //speed
    pub cast_time: String,    //0.25 : String, //cast time
    pub cost: Scaling,        //50 : String, //cost
    pub costtype: String,     //Energy : String, //costtype
    pub r#static: String,     //static
    pub cooldown: Scaling,    //10 / 9 / 8 / 7 / 6 : String, //cooldown
    pub cdstart: String,      //on-cast
    pub ontargetcd: String,   //ontargetcd
    pub ontargetcdstatic: String, //ontargetcdstatic
    pub recharge: String,     //recharge
    pub customlabel: String,  //customlabel
    pub custominfo: String,   //custominfo

    pub details: SkillDetails,

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
                       // pub video: String, //video
                       // pub video2: String, //video 2
                       // pub yvideo: String, //YouTube video
                       // pub yvideo2: String, //YouTube video 2
}
impl FullSkill {
    pub fn new(w_champ: &LiveChampData, skill: LiveAbility) -> FullSkill {
        let details = SkillDetails::new(w_champ, &skill);
        FullSkill {
            name: skill.name,
            display_name: skill.disp_name,
            champion: skill.champion,
            skill: skill.skill,
            range: skill.range,
            target_range: skill.target_range,
            attack_range: skill.attack_range,
            collision_radius: skill.collision_radius,
            effect_radius: skill.effect_radius,
            width: skill.width,
            angle: skill.angle,
            inner_radius: skill.inner_radius,
            tether_radius: skill.tether_radius,
            speed: skill.speed,
            cast_time: skill.cast_time,
            cost: skill.cost,
            costtype: skill.costtype,
            r#static: skill.r#static,
            cooldown: skill.cooldown,
            cdstart: skill.cdstart,
            ontargetcd: skill.ontargetcd,
            ontargetcdstatic: skill.ontargetcdstatic,
            recharge: skill.recharge,
            customlabel: skill.customlabel,
            custominfo: skill.custominfo,
            details,
            targeting: skill.targeting,
            affects: skill.affects,
            damagetype: skill.damagetype,
            spelleffects: skill.spelleffects,
            spellshield: skill.spellshield,
            projectile: skill.projectile,
            callforhelp: skill.callforhelp,
            grounded: skill.grounded,
            knockdown: skill.knockdown,
            silence: skill.silence,
            additional: skill.additional,
            notes: skill.notes,
            flavortext: skill.flavortext,
            flavorsound: skill.flavorsound,
            // video: skill.video,
            // video2: skill.video2,
            // yvideo: skill.yvideo,
            // yvideo2: skill.yvideo2,
        }
    }
}
#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct SkillDetails(Vec<Details>);

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default, rename_all = "camelCase")]
pub struct Details {
    pub icon: String,                 //Sonic Wave.png : String, //icon
    pub blurb: String, //Active: Lee Sin Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for a short time, during which they are True Sight icon revealed. : String, //blurb
    pub description: String, //Active: Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for 3 seconds, during which they are True Sight icon revealed. : String, //description
    pub leveling: Vec<LevelingGroup>, //Physical Damage:    55 / 80 / 105 / 130 / 155 (+ 115% bonus AD) leveling
}
impl Details {
    fn new(
        blurb: &str,
        icon: &str,
        description: &str,
        leveling: &Vec<LevelingGroup>,
    ) -> Option<Details> {
        if blurb == "" && icon == "" && description == "" {
            return Option::None;
        }
        Some(Details {
            icon: icon.to_owned(),
            blurb: blurb.to_owned(),
            description: description.to_owned(),
            leveling: leveling.clone(),
        })
    }
}

impl SkillDetails {
    fn new(_w_champ: &LiveChampData, value: &LiveAbility) -> SkillDetails {
        let mut vec = Vec::with_capacity(5);

        if let Some(details1) = Details::new(
            &value.blurb,
            &value.icon,
            &value.description,
            &value.leveling,
        ) {
            vec.push(details1);
        }
        if let Some(d) = Details::new(
            &value.blurb2,
            &value.icon2,
            &value.description2,
            &value.leveling2,
        ) {
            vec.push(d);
        }
        if let Some(d) = Details::new(
            &value.blurb3,
            &value.icon3,
            &value.description3,
            &value.leveling3,
        ) {
            vec.push(d);
        }
        if let Some(d) = Details::new(
            &value.blurb4,
            &value.icon4,
            &value.description4,
            &value.leveling4,
        ) {
            vec.push(d);
        }
        if let Some(d) = Details::new(&"", &value.icon5, &value.description5, &value.leveling5) {
            vec.push(d);
        }

        SkillDetails(vec)
    }
}
