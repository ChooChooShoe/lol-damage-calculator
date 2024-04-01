use std::{fs::File, io::Write};

use serde::{Serialize, Deserialize};

use crate::remote::{
    cdragon::{CommunityDragon, Perk, PerkId},
    datadragon::DataDragon,
    leaguewiki::{LeagueWiki, PassiveProgression, RuneData},
};

pub fn generate_runes(
    _ddragon: &mut DataDragon,
    cdragon: &mut CommunityDragon,
    leageuwiki: &mut LeagueWiki,
) -> Result<(), Box<dyn std::error::Error>> {
    // let drunes = ddragon.get_runes()?;
    let perks = cdragon.get_perks()?;

    let mut res = Vec::with_capacity(perks.len());

    for perk in perks {
        let rune_data = match leageuwiki.get_rune_data(&perk.name) {
            Ok(x) => x,
            Err(_) => {
                println!("League wiki failed from perk {}", perk.name);
                continue;
            }
        };

        if let Some(rune) = FullRune::merge_from(perk, rune_data) {
            res.push(rune);
        }
    }

    save_to_file("./Perks.Gen.ts", &res)?;
    Ok(())
}

#[derive(Serialize, Deserialize, Debug, Default, Clone, PartialEq)]
#[serde(default)]
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
    description_ratios: String,
    description_ratios2: String,
    description_ratios3: String,
    description_ratios4: String,
    recommendation_descriptor: String,
    /// Starts with `/lol-game-data/assets/v1/`
    icon_path: String,
    end_of_game_stat_descs: Vec<String>,
    recommendation_descriptor_attributes: serde_json::Value,
    /// Cooldown HTML
    cooldown: PassiveProgression,
    /// range HTML
    range: String,
}

impl FullRune {
    pub fn merge_from(perk: Perk, rune_data: RuneData) -> Option<Self> {
        if perk.name != rune_data.name {
            println!("Rune name mismatch {} and {}", perk.name, rune_data.name);
            return None;
        }
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
            description_ratios: String::default(),
            description_ratios2: String::default(),
            description_ratios3: String::default(),
            description_ratios4: String::default(),
            recommendation_descriptor: perk.recommendation_descriptor,
            icon_path,
            end_of_game_stat_descs: perk.end_of_game_stat_descs,
            recommendation_descriptor_attributes: perk.recommendation_descriptor_attributes,
            cooldown: rune_data.cooldown,
            range: rune_data.range,
        })
    }
}
fn save_to_file(file: &str, output: &Vec<FullRune>) -> Result<(), Box<dyn std::error::Error>> {
    let mut file = File::create(file)?;
    

    let j = serde_json::to_string_pretty(output)?;

    file.write_all(b"export default ")?;
    file.write_all(j.as_bytes())?;

    Ok(())
}
