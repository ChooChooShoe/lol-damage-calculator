pub mod item_effect_models;
pub mod effect_models;
pub mod remote;
pub mod items;
pub mod runes;
pub mod champions;

use crate::{remote::cdragon::CommunityDragon, remote::datadragon::DataDragon, remote::leaguewiki::LeagueWiki};

use clap::Parser;

/// Simple program to greet a person
#[derive(Parser, Debug)]
#[command(version, about, long_about = None)]
struct Args {
    /// What file type to generate
    #[arg(short, long)]
    gen: String,
    
    #[arg(short, long, default_value = "./src/generated/")]
    path: std::path::PathBuf,

    /// Number of times to greet
    #[arg(short, long, default_value_t = 1)]
    count: u8,
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args = Args::parse();

    for _ in 0..args.count {
        println!("Hello {}!", args.gen)
    }

    let _ = std::env::set_current_dir(args.path);

    let mut ddragon = DataDragon::latest()?;
    let mut cdragon = CommunityDragon::latest()?;
    let mut leaguewiki = LeagueWiki::latest()?;

    match args.gen.as_str() {
        "items" => {
            items::generate_items(&mut ddragon, &mut cdragon, &mut leaguewiki)?;
        }
        "runes" => {
            runes::generate_runes(&mut ddragon, &mut cdragon, &mut leaguewiki)?;
        }
        "nammed_spell_effects" => {
            effect_models::generate_item_effects(&mut leaguewiki)?;
        }
        "champions" | "champs" => {
            champions::gen(&mut ddragon, &mut cdragon, &mut leaguewiki)?;
        }
        "testchamps" => {
            let x = leaguewiki.get_champ_data("Diana");

            println!("Champ: {x:?}");
        }
        "test" => {
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
                std::mem::size_of::<Option<remote::cdragon::RequiredAlly>>()
            );
            println!(
                "sizeof Ally {}",
                std::mem::size_of::<remote::cdragon::RequiredAlly>()
            );
        }
        _ => {}
    }
    Ok(())
}
