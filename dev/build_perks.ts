import fetch from "node-fetch";
import { saveFile } from "./fetch_utils.js";

console.log('Runes from communitydragon');

main();
async function main() {
    const perks_json: Promise<any> = fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json').then(x => x.json());
    const perkstyles_json: Promise<any> = fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json').then(x => x.json());

    const perks: { [key: string]: any } = {};

    for (const i of await perks_json) {
        perks[i.id] = i;
        // i.iconPath = i.iconPath.slice(25);
    }

    let perkStyles: { [key: string]: any } = {};
    // '/lol-game-data/assets/' ''https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/

    for (const i of (await perkstyles_json).styles) {
        perkStyles[i.id] = i;
        // i.iconPath = i.iconPath.slice(25);
    }

    saveFile('./src/runes/perks.json', perks)
    saveFile('./src/runes/perkStyles.json', perkStyles)
    console.log("Goodbye");
}