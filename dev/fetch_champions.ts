
import fetch from "node-fetch";
import { fetchAndSaveRealms, fetch_Module_ChampionData, saveFile } from "./fetch_utils.js";
import { fetch_ddragon, fetch_live_wiki_skills, NeededRiotValues, mergeModels } from "./live_wiki_fetch.js";


console.log('Live Wiki Fetching for all data.');
const DEBUG = false;

console.log("HELLO");
main();

let realms = { v: "12.11.1", l: "en_US", cdn: "https://ddragon.leagueoflegends.com/cdn" }

async function main() {

    const realms = fetchAndSaveRealms();
    const ModuleChampionDataFile = fetch_Module_ChampionData();

    // makeChampionList(ModuleChampionData);

    let ChampionList = {};
    let SkillList = {};
    let promises: Array<Promise<void>> = []
    // const ChampionModule = await fetch_mod_data();
    for (const [champ, champlist_model] of Object.entries(await ModuleChampionDataFile)) {
        if (champlist_model.date === 'Upcoming') continue;

        ChampionList[champ] = { name: champ, image: null };
        Object.assign(ChampionList[champ], champlist_model)
        promises.push(fetch_live_wiki_skills(champ).then(async (live_model) => {
            SkillList[champ] = live_model;
            const riot = await fetch_ddragon(await realms, champlist_model.apiname);
            Object.assign(ChampionList[champ], mergeModels(live_model, riot as NeededRiotValues))
        }).catch(e => console.log(e)));
    }
    console.log("Awaiting all Promises");
    await Promise.all(promises);
    saveFile('./src/api/ChampionList.json', ChampionList)
    saveFile('./src/api/ChampionListSkills.json', SkillList)
    console.log("Goodbye");

}
