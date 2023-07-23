mod cdragon;
mod datadragon;
mod fetch;
mod items;
mod leaguewiki;
mod runes;
mod effect_models;

use crate::{cdragon::CommunityDragon, datadragon::DataDragon, leaguewiki::LeagueWiki};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut ddragon = DataDragon::latest()?;
    let mut cdragon = CommunityDragon::latest()?;
    let mut leaguewiki = LeagueWiki::latest()?;

    let action = "items";
    match action {
        "items" => {
            items::generate_items(&mut ddragon, &mut cdragon, &mut leaguewiki)?;
        }
        "runes" => {
            runes::generate_runes(&mut ddragon, &mut cdragon, &mut leaguewiki)?;
        }
        
        "test " => {
            let x = leaguewiki.get_rune_data("First Strike");

            println!("LeagueWiki Rune First Strike is {:?}", x);

            let json = ddragon.get_items()?;

            let cd_items = cdragon.get_items()?;

            println!("DDragon Item Count: {:?}", json.len());
            println!("DDragon Item 1036 is {:?}", json.get("1036"));

            println!("CommunityDragon Item Count: {:?}", cd_items.len());
            println!("CommunityDragon Item [0] is {:?}", cd_items[0]);
            let perk_styles = cdragon.get_perk_styles()?;
            println!("CommunityDragon Perk Style Count: {:?}", perk_styles.len());
            println!("CommunityDragon Perk Style [0] is {:?}", perk_styles[0]);

            let perks = cdragon.get_perks()?;
            println!("CommunityDragon Perk Count: {:?}", perks.len());
            println!("CommunityDragon Perk [0] is {:?}", perks[0]);

            println!(
                "sizeof <Option<Ally> {}",
                std::mem::size_of::<Option<cdragon::RequiredAlly>>()
            );
            println!(
                "sizeof Ally {}",
                std::mem::size_of::<cdragon::RequiredAlly>()
            );
        }
        _ => {}
    }
    Ok(())
}
