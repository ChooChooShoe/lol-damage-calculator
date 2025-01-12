use std::{fs::File, io::Write};

use serde::{Deserialize, Serialize};

use crate::remote::{
    cdragon::{CommunityDragon, Perk, PerkId, PerkStyle},
    datadragon::DataDragon,
    leaguewiki::{Effect, LeagueWiki, PassiveProgression, RuneData},
};

pub fn generate_runes(
    _ddragon: &mut DataDragon,
    cdragon: &mut CommunityDragon,
    leageuwiki: &mut LeagueWiki,
) -> Result<(), Box<dyn std::error::Error>> {
    // let drunes = ddragon.get_runes()?;
    let perks = cdragon.get_perks()?;

    let mut runes_list = Vec::with_capacity(perks.len());

    for perk in perks {
        let rune_data = match leageuwiki.get_rune_data(&perk.name) {
            Ok(x) => x,
            Err(_) => {
                println!("League wiki failed from perk {}", perk.name);
                continue;
            }
        };

        if let Some(rune) = FullRune::combine(perk, rune_data) {
            runes_list.push(rune);
        }
    }

    save_to_file("./perks.gen.ts", runes_list, cdragon.get_perk_styles()?)?;
    Ok(())
}
fn save_to_file(
    file: &str,
    output: Vec<FullRune>,
    styles: Vec<PerkStyle>,
) -> Result<(), Box<dyn std::error::Error>> {
    let mut file = std::io::BufWriter::new(File::create(file)?);

    let mut output = output
        .into_iter()
        .map(|x| (x.id.clone(), x))
        .collect::<Vec<_>>();

    output.sort_unstable_by(|a, b| a.0.cmp(&b.0));

    let now = chrono::Local::now().to_rfc2822();
    writeln!(file, "// This file is auto-generated on {now}.\n")?;
    writeln!(
        file,
        "import type {{ Perk, PerkStyle }} from '@/runes/perks';"
    )?;

    writeln!(file, "// prettier-ignore")?;
    let keys = output
        .iter()
        .map(|(_name, full_rune)| format!("\"{}\"", full_rune.name))
        .collect::<Vec<_>>()
        .join(" | ");
    writeln!(file, "export type PerkName = {keys};")?;

    writeln!(file, "// prettier-ignore")?;
    let keys = output
        .iter()
        .map(|(_name, full_rune)| format!("{}", full_rune.id ))
        .collect::<Vec<_>>()
        .join(" | ");
    writeln!(file, "export type PerkId = {keys};")?;


    writeln!(file, "// prettier-ignore")?;
    let keys = styles
        .iter()
        .map(|style| format!("\"{0}\"", &style.name))
        .collect::<Vec<_>>()
        .join(" | ");
    writeln!(file, "export type StyleName = {keys};")?;

    writeln!(file, "// prettier-ignore")?;
    let keys = styles
        .iter()
        .map(|style| format!("{0}", &style.id))
        .collect::<Vec<_>>()
        .join(" | ");
    writeln!(file, "export type StyleId = {keys};")?; 

    write!(file, "\nexport const Perks = {{")?;
    for (id, rune) in output {
        write!(file, "\"{id}\": ")?;
        write!(file, "{}", serde_json::to_string_pretty(&rune)?)?;
        writeln!(file, ",")?;
    }
    writeln!(file, "}}  satisfies Record<PerkId, Perk>;")?;

    write!(file, "\n\n\nexport const Styles = {{")?;
    for mut style in styles {
        // Change the styles icon here. It's the only change I make to styles.
        let icon_path = style.icon_path[22..].to_lowercase();
        style.icon_path = format!("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/{icon_path}");

        write!(file, "\"{}\": ", style.id)?;
        write!(file, "{}", serde_json::to_string_pretty(&style)?)?;
        writeln!(file, ",")?;
    }
    writeln!(file, "}} satisfies Record<StyleId, PerkStyle>;")?;

    Ok(())
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct FullRune {
    id: PerkId,
    /// Translated name `"First Strike"`, `"Demolish"`, `"Future's Market"` ...
    /// Necessary: Used for identification. (Known as 1 or {{1}} on wiki)
    name: String,
    /// Name of the rune. Only necessary if the value differs from First Strike.
    disp_name: String,
    /// Season.  Ex. "2022"
    released: String,
    /// Rune path.  Ex. "Inspiration"
    path: String,
    /// Slots.  Ex. "Inspiration"
    shard_slots: String,
    /// Tier.  Ex. "Keystone"
    slot: String,
    /// Ex. "11.23"
    major_change_patch_version: String,
    recommendation_descriptor: String,
    icon_path: String,
    end_of_game_stat_descs: Vec<String>,
    recommendation_descriptor_attributes: serde_json::Value,
    /// Cooldown HTML
    cooldown: PassiveProgression,
    /// range HTML
    range: String,
    /// Full tooltip with HTML and replacers. Ex. ```"Attacks or abilities against an enemy champion within @GraceWindow.2@s of entering champion combat grants @GoldProcBonus@ gold and <b>First Strike</b> for @Duration@ seconds, causing you to deal <truedamage>@DamageAmp*100@%</truedamage> extra <truedamage>damage</truedamage> against champions, and granting <gold>{{ Item_Melee_Ranged_Split }}</gold> of that damage dealt as <gold>gold</gold>.<br><br>Cooldown: <scaleLevel>@Cooldown@</scaleLevel>s<br><hr><br>Damage Dealt: @f1@<br>Gold Gained: @f2@"```
    tooltip: String,
    /// A berif description. Ex. ```"When you initiate champion combat, deal 9% extra damage for 3 seconds and gain gold based on damage dealt."```
    short_desc: String,
    /// A full description with HTML and replacers. Ex. ```"Attacks or abilities against an enemy champion within 0.25s of entering champion combat grants 5 gold and <b>First Strike</b> for 3 seconds, causing you to deal <truedamage>9%</truedamage> extra <truedamage> damage</truedamage> against champions, and granting <gold>100% (70% for ranged champions)</gold> of bonus damage dealt as <gold>gold</gold>.<br><br>Cooldown: <scaleLevel>25 - 15</scaleLevel>s"```
    long_desc: String,
    /// Description (line 1) HTML
    description: String,
    /// Description (line 1) HTML
    description2: String,
    /// Description (line 1) HTML
    description3: String,
    /// Description (line 1) HTML
    description4: String,
    /// Description Ratios
    effect: Option<Effect>,
    effect2: Option<Effect>,
    effect3: Option<Effect>,
    effect4: Option<Effect>,
}

impl FullRune {
    pub fn combine(perk: Perk, rune_data: RuneData) -> Option<Self> {
        // if perk.name != rune_data.name {
        //     println!("Rune name mismatch {} and {}", perk.name, rune_data.name);
        //     return None;
        // }
        // Starts with `/lol-game-data/assets/v1/`
        let icon_path = perk.icon_path[22..].to_lowercase();
        let icon_url = format!("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/{icon_path}");
        Some(FullRune {
            id: perk.id,
            name: perk.name,
            disp_name: rune_data.disp_name,
            released: rune_data.released,
            path: rune_data.path,
            shard_slots: rune_data.shard_slots,
            slot: rune_data.slot,
            major_change_patch_version: perk.major_change_patch_version,
            tooltip: perk.tooltip,
            short_desc: perk.short_desc,
            long_desc: perk.long_desc,
            description: rune_data.description,
            description2: rune_data.description2,
            description3: rune_data.description3,
            description4: rune_data.description4,
            effect: rune_data.effect,
            effect2: rune_data.effect2,
            effect3: rune_data.effect3,
            effect4: rune_data.effect4,
            recommendation_descriptor: perk.recommendation_descriptor,
            icon_path: icon_url,
            end_of_game_stat_descs: perk.end_of_game_stat_descs,
            recommendation_descriptor_attributes: perk.recommendation_descriptor_attributes,
            cooldown: rune_data.cooldown,
            range: rune_data.range,
        })
    }
}


#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(rename_all = "camelCase", default)]
pub struct FullStyle {
    
    pub id: usize,
    /// Translated name `Resolve`, `Domination`, `Precision`, `Sorcery`, or `Inspiration`
    pub name: String,
    /// A berif description of the name. Used for tooltips in rune selector.
    pub tooltip: String,
    /// Starts with `/lol-game-data/assets/v1/`
    pub icon_path: String,
    pub is_advanced: bool,
    /// The other 4 sub styles (excluding this style).
    pub allowed_sub_styles: [usize; 4],
    /// Unused in current league.
    pub sub_style_bonus: [crate::remote::cdragon::SubStyleBonus; 4],
    pub slots: [crate::remote::cdragon::Slot; 7],
    pub default_page_name: String,
    pub default_sub_style: i64,
    pub default_perks: [PerkId; 9],
    pub default_perks_when_splashed: [PerkId; 2],
    pub default_stat_mods_per_sub_style: [crate::remote::cdragon::DefaultStatModsPerSubStyle; 4],
}