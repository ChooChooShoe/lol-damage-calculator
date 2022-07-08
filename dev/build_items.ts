import { fetchAndSaveRealms, saveFile } from "./fetch_utils.js";
import fs from 'fs/promises';
import { Image } from "../src/api/DataTypes.js";

const USE_FIXED_REALMS = true;
const ITEMS_TO_ITEM_ARRAYS = false;
const ITEMS_MISSMATCH_TEST = false;
console.log('Building data for items.json');
let spriteBaseUri = "null";
main();
async function main() {

    //const cd_url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json"
    //console.log("Fetching (CommunityDragon):", cd_url);
    //const bodyCDragon = fetch(cd_url).then(response => response.json());
    // const wikiBody = fetch_wiki(`https://leagueoflegends.fandom.com/wiki/Module:ItemData/data`);


    const bodyCDragon = fs.readFile('./src/api/items/cdragonItems.json').then(x => JSON.parse(x.toString()));
    const wikiBody = fs.readFile('./src/api/items/wikiItems.json').then(x => JSON.parse(x.toString()));




    let realms: { v: string; l: string; cdn: string; };
    if (USE_FIXED_REALMS)
        realms = { v: "12.11.1", l: "en_US", cdn: "https://ddragon.leagueoflegends.com/cdn" };
    else
        realms = await fetchAndSaveRealms();


    spriteBaseUri = `${realms.cdn}/${realms.v}/img/sprite/`;
    const dd_url = `${realms.cdn}/${realms.v}/data/${realms.l}/item.json`;
    console.log("Fetching (DataDragon): %s", dd_url);
    // const bodyDDragon = fetch(dd_url).then(response => response.json());
    const bodyDDragon = fs.readFile('./src/api/items/riotJson.json').then(x => JSON.parse(x.toString()));


    const model = await onItemsJsonResponse(await bodyDDragon, await bodyCDragon, await wikiBody);

    await saveFile('./src/api/items/items.json', model)
    console.log("Goodbye");

    // const ModuleChampionDataFile = fetch_Module_ChampionData();

    // makeChampionList(ModuleChampionData);

    // let ItemsRootObj = {};
    // let SkillList = {};
    // let promises: Array<Promise<void>> = []
    // // const ChampionModule = await fetch_mod_data();
    // for (const [champ, champlist_model] of Object.entries(await ModuleChampionDataFile)) {
    //     if (champlist_model.date === 'Upcoming') continue;

    //     ItemsRootObj[champ] = { name: champ, image: null };
    //     Object.assign(ItemsRootObj[champ], champlist_model)
    //     promises.push(fetch_live_wiki_skills(champ).then(async (live_model) => {
    //         SkillList[champ] = live_model;
    //         const riot = await fetch_ddragon(await realms, champlist_model.apiname);
    //         Object.assign(ItemsRootObj[champ], mergeModels(live_model, riot as NeededRiotValues))
    //     }).catch(e => console.log(e)));
    // }
    // console.log("Awaiting all Promises");
    // await Promise.all(promises);

} async function onItemsJsonResponse(riotJson: { data: { [x: string]: RiotItemEntry; } }, cdragonItems: ArrayLike<CDragonItemEntry>, wikiItems: { [s: string]: WikiItemEntry; }) {
    const riotItems = riotJson.data;
    console.log("Length of riotItems", Object.keys(riotItems).length, " vs ", cdragonItems.length, " vs ", Object.keys(wikiItems).length);


    // saveFile('./src/api/items/riotJson.json', riotJson);
    // saveFile('./src/api/items/cdragonItems.json', cdragonItems);
    // saveFile('./src/api/items/wikiItems.json', wikiItems);


    // const defaultRiotItem = {
    //     "name": "Missing Riot Item",
    //     "from": [], "to": [], "image": null, "gold": {}, "tags": [], maps: {
    //         "11": true,
    //         "12": true,
    //         "21": true,
    //         "22": false
    //     },
    // }
    const cdragon_by_id: { [x: string]: CDragonItemEntry; } = {}
    for (const value of Object.values(cdragonItems)) {
        cdragon_by_id[value.id] = value;
    }
    const wiki_by_id: { [x: string]: WikiItemEntry; } = {}
    for (const [key, value] of Object.entries(wikiItems)) {
        wiki_by_id[value.id || ("no_id_using_key_" + key)] = value;
    }

    // Lookup values for wiki data. Fix for "=>OrnnItem" entries
    function lookup_crawl(entry: { [x: string]: any; }, root: { [x: string]: any; }, tree: string[]): void {
        for (const [key, val] of Object.entries(entry)) {
            if (typeof val === 'string' && val.startsWith('=>')) {
                let lookup = root[val.slice(2)];
                for (const branch of tree) lookup = lookup[branch];

                if (lookup) {
                    console.log("Item lookup kv", key, val, 'from', lookup, tree);
                    entry[key] = lookup[key];
                } else {
                    console.log("[ERROR] Itemlookup failed for kv", key, val, ' from is null or undefined');
                }
            }
            if (val && typeof val === 'object') {
                lookup_crawl(val, root, [...tree, key])
            }
        }
    }
    // Converts values to arrays of all values. To see all posiable field values.
    if (ITEMS_TO_ITEM_ARRAYS) {
        let x = {}, y = {}, z = {};
        for (const [key, value] of Object.entries(riotItems)) {
            for (const [key, value2] of Object.entries(value)) {
                if (key in x) {
                    if (!x[key].includes(value2))
                        x[key].push(value2);
                } else x[key] = [value2];
            }
        }
        for (const [key, value] of Object.entries(cdragon_by_id)) {
            for (const [key, value2] of Object.entries(value)) {
                if (key in y) {
                    if (!y[key].includes(value2))
                        y[key].push(value2);
                } else y[key] = [value2];
            }
        }
        for (const [key, value] of Object.entries(wikiItems)) {
            for (const [key, value2] of Object.entries(value)) {
                if (key in z) {
                    if (!z[key].includes(value2))
                        z[key].push(value2);
                } else z[key] = [value2];
            }
        }
        return { riot: x, cdragon: y, wiki: z }
    }

    if (ITEMS_MISSMATCH_TEST) {
        let x: any = [], y: any = [], z: any = [];
        for (const [key, value] of Object.entries(riotItems)) {
            if (!cdragon_by_id[key])
                y.push({ "riot": key });
            if (!wiki_by_id[key])
                z.push({ "riot": key });
        }
        // RIOT is missing cdragon's 2001, 2007, 2008 (Recall Items)
        // and wiki's "Ohmwrecker (Turret Item)"
        for (const [key, value] of Object.entries(cdragon_by_id)) {
            if (!riotItems[key])
                x.push({ "cdragon": key });
            if (!wiki_by_id[key])
                z.push({ "cdragon": key });
        }
        // cdragon is missing wiki's "Ohmwrecker (Turret Item)"
        for (const [key, value] of Object.entries(wiki_by_id)) {
            if (!riotItems[key])
                x.push({ "wiki": key });
            if (!cdragon_by_id[key])
                y.push({ "wiki": key });
        }
        // WIKI is missing a bunch of not real items.
        // 1040,1500,1504,1505,1516,1517,1518,1519,2001,2007,2008,7050
        // 2424 Broken Stopwatch
        // 3600 Kalista's Black Spear
        // 4403 The Golden Spatula - has build paths
        // 4641 Stirring Wardstone
        return { riot: x, cdragon: y, wiki: z }
    }


    const allItems = {};
    for (const [key, wikiItem] of Object.entries(wikiItems)) {
        // Ohmwrecker (Turret Item) has no id.
        if (!wikiItem.id) continue;
        let riotItem = riotItems[wikiItem.id];
        let item_obj = cdragon_by_id[wikiItem.id];
        if (!riotItem) {
            console.log(`[WARN] Item ${key} (${wikiItem.id}) is missing RiotData`)
            continue;
        }
        if (!item_obj) {
            console.log(`[WARN] Item ${key} (${wikiItem.id}) is missing CDragonData`)
            continue;
        }
        lookup_crawl(wikiItem, wikiItems, []);
        allItems[wikiItem.id] = takeRiftItem(item_obj, riotItem, wikiItem);
    }
    return allItems

}

function takeRiftItem(a: CDragonItemEntry, b: RiotItemEntry, c: WikiItemEntry) {
    function check(key: string, key2?: string): number | any[] {
        if (key2)
            return check_val(`${key}" and "${key2}`, a[key], b[key2]);
        return check_val(key, a[key], b[key]);
    }
    function check_val(key: string, val_a: number | any[], val_b: number | any[]) {
        if (Array.isArray(val_a) && Array.isArray(val_b)) {
            val_a.sort();
            val_b.sort();
        }
        if (val_a && !val_b && key !== "inStore")
            console.log(`Item ${a.id}: Key "${key}" has no riot value (${val_a})`);
        if (val_a && val_b && val_a.toString() !== val_b.toString())
            console.log(`Item ${a.id}: Key "${key}" not match. (${val_a} !== ${val_b})`);
        return val_a;
    }
    function unique(key: string) {
        if (a[key])
            console.log(`Item ${a.id}: Key "${key}" hade unique value. "${a[key]}"`)
        return a[key]
    }
    function get_type() {
        //typedata definition
        let typedata = (c.type || []).join(',');
        let s: string[] = [];

        //consumable test
        if (c.effects?.consume) {
            if (c.tier === 1)
                s.push("Consumable")
            else
                s.push("Advanced Consumable")
        }
        //distributed test
        if (typedata.includes("Distributed"))
            s.push("Distributed")

        //basic trinket test
        if (typedata.includes("Basic Trinket"))
            s.push("Basic Trinket")
        //enchantment test
        if (typedata.includes("Enchantment"))
            s.push("Enchantment")
        //potions test
        if (typedata.includes("Potion"))
            s.push("Potion")
        //boots test
        if (typedata.includes("Boots"))
            s.push("Boots")
        //turret test
        if (typedata.includes("Turret"))
            s.push("Turret")
        //minion item test
        if (typedata.includes("Minion"))
            s.push("Minion")
        // GeneratedTip test - not on wiki
        if (a.description?.startsWith('GeneratedTip') || a.description === "")
            s.push("GeneratedTip")

        if (typedata.includes("Basic") && !typedata.includes("Basic Trinket"))
            s.push("Basic")
        else if (typedata.includes("Starter") && !typedata.includes("Basic Trinket"))
            s.push("Starter")
        else if (typedata.includes("Epic") && !typedata.includes("Basic Trinket"))
            s.push("Epic")
        else if (typedata.includes("Legendary") && !typedata.includes("Basic Trinket"))
            s.push("Legendary")
        else if (s.length == 0) {
            if (b.depth === 0 || c.tier === 1) {
                if (a.to?.length > 0)
                    s.push("Basic")
                else
                    s.push("Starter")
            }
            else {
                if (c.effects?.mythic)
                    s.push("Mythic")
                else {
                    if (a.to?.length > 0)
                        s.push("Epic")
                    else
                        s.push("Legendary")
                }
            }
        }
        return s
    }
    type ItemCatagoryType = "championitems" | "distributives" | "starters" | "consumables" | "trinkets" | "boots" | "basics" | "epics" | "legendaries" | "ornnitems" | "mythics" | "minionturretitems" | "unsorted";

    function get_category(): ItemCatagoryType {
        let types = get_type().join(',');
        if (c.champion || b.requiredChampion)
            return "championitems"
        if (types.includes("Distributed"))
            return "distributives"
        if (types.includes("Starter"))
            return "starters"
        if (types.includes("Potion") || types.includes("Consumable"))
            return "consumables"
        if (types.includes("Trinket"))
            return "trinkets"
        if (types.includes("Boots"))
            return "boots"
        if (types.includes("Basic") && !types.includes("Basic Trinket"))
            return "basics"
        if (types.includes("Epic"))
            return "epics"
        if (types.includes("Legendary"))
            return "legendaries"
        if (types.includes("Mythic"))
            if (c.ornn === true)
                return "ornnitems"
            else
                return "mythics"
        if (types.includes("Trinket"))
            return "trinkets"
        if (types.includes("Minion") || types.includes("Turret") || types.includes('GeneratedTip'))
            return "minionturretitems"
        return "unsorted"
    }
    function make_stats() {
        const ret = c.stats || {};
        for (const key of ['spec', 'spec2']) {
            if (ret[key])
                // Matches [[ thing ]] captures thing
                ret[key] = ret[key].replace(/\[\[([^[]*)\]\]/g, function (_: any, capture: string) {
                    const parms = capture.split('|');
                    return `${parms[parms.length - 1]}`
                });
        }
        return ret;
    }
    // if (b.description) b.description = b.description.replace(/<attention>/g, "<attention> ").replace(/  /g, " ").replace(/<br> /g, "<br>");
    // if (a.description) a.description = a.description.replace(/<attention>/g, "<attention> ").replace(/  /g, " ").replace(/<br> /g, "<br>");

    // if (!a.iconPath.startsWith('/lol-game-data/assets/DATA/Items/Icons2D/')) {
    //     console.log("Unknown Item PAth", a.iconPath);
    //     a.iconPath = "";
    // }
    // else {
    //     a.iconPath = a.iconPath.substring("/lol-game-data/assets/DATA/Items/Icons2D/".length);
    // }
    // if (b[a.id]) {
    //     a.image = b[a.id].image;
    //     a.colloq = ';' + b[a.id].colloq.split(';').filter(item => item).join(';');
    //     a.search = a.name.toLowerCase() + a.colloq.toLowerCase();
    // }
    // else {
    //     console.log('No image for item', a.id, a.name)
    // }

    // a.stats = {
    //     //TODO item states
    // };
    let colloq = (b.colloq || ";");
    if (colloq.indexOf(';') !== 0)
        colloq = ";" + colloq;
    const iconPath = a.iconPath ? "https://raw.communitydragon.org/latest/game/assets/items/icons2d" + a.iconPath.slice(a.iconPath.lastIndexOf("/")).toLowerCase() : '';
    return {
        "id": a.id,
        "name": check('name'),
        "description": a.description,
        "colloq": colloq,
        "active": a.active,
        "inStore": check("inStore"),
        "from": check('from'),
        "to": check('to', "into"),
        "categories": check('categories', "tags"),
        "maxStacks": a.maxStacks,
        "requiredChampion": check('requiredChampion'),
        "requiredAlly": check('requiredAlly'),
        "requiredBuffCurrencyName": unique("requiredBuffCurrencyName"),
        "requiredBuffCurrencyCost": unique("requiredBuffCurrencyCost"),
        "specialRecipe": check("specialRecipe"),
        // "isEnchantment": check("isEnchantment"),
        "price": check_val('price', a.price, b.gold.base),
        "priceTotal": check_val('priceTotal', a.priceTotal, b.gold.total),
        "sellPrice": b.gold.sell || 0,
        "purchasable": b.gold.purchasable || false,
        "iconPath": iconPath,
        "spriteStyle": b.image ?
            `background: url('${spriteBaseUri}${b?.image?.sprite}') -${b?.image?.x}px -${b?.image?.y}px; width:${b?.image?.w}px; height:${b?.image?.h}px;`
            : `background:url('${iconPath}') 0px 0px;width:48px;height:48px;background-size:contain;`,
        "image": b.image || null,
        "maps": map_number_to_names(b.maps),
        "depth": b.depth || 0,
        "limit": c.limit || "",
        "menu": c.menu || {},
        "stats": make_stats(),
        "effects": c.effects || {},
        "type": get_type(),
        "category": get_category(),
    }
}

function map_number_to_names(maps) {
    console.assert(Object.keys(maps).length == 4, "Maps not length 4")
    return [
        maps["11"] === true ? 'SR' : null,
        maps["12"] === true ? 'HA' : null,
        // maps["21"] === true ? 'Nexus Blitz' : null,
        maps["22"] === true ? 'TFT' : null,
    ].filter(x => x !== null);
}

// "maps": {
//     "1": true,
//     "8": true,
//     "10": true,
//     "12": true
//   }
interface RiotItemEntry {
    name: string;
    description: string;
    colloq: string; //default ";"
    plaintext: string; //default ";"
    specialRecipe?: number, // undefined defaults to 0
    consumed?: true, // undefined defaults to false
    consumeOnFull?: true, // undefined defaults to false
    stacks?: number, // undefined defaults to 1
    inStore?: false, // defaults to true
    hideFromAll?: true, // defaults to false
    requiredChampion?: "FiddleSticks" | "Kalista" | "Sylas" | "Gangplank" //defaults to ""
    requiredAlly?: "Ornn"//defaults to ""
    from?: string[];
    into?: string[];
    image: Image;
    gold: { base: number; purchasable: boolean; total: number; sell: number; };
    tags: string[];
    maps: { "11": boolean; "12": boolean; "21": boolean; "22": boolean; };
    // stats: { [x: RiotStatName]: number; };
    depth: number | undefined, // undefined defaults to 1
    effect?: any;
}
type RiotStatName = "FlatHPPoolMod" | "rFlatHPModPerLevel" | "FlatMPPoolMod" | "rFlatMPModPerLevel" | "PercentHPPoolMod" | "PercentMPPoolMod" | "FlatHPRegenMod" | "rFlatHPRegenModPerLevel" | "PercentHPRegenMod" | "FlatMPRegenMod" | "rFlatMPRegenModPerLevel" | "PercentMPRegenMod" | "FlatArmorMod" | "rFlatArmorModPerLevel" | "PercentArmorMod" | "rFlatArmorPenetrationMod" | "rFlatArmorPenetrationModPerLevel" | "rPercentArmorPenetrationMod" | "rPercentArmorPenetrationModPerLevel" | "FlatPhysicalDamageMod" | "rFlatPhysicalDamageModPerLevel" | "PercentPhysicalDamageMod" | "FlatMagicDamageMod" | "rFlatMagicDamageModPerLevel" | "PercentMagicDamageMod" | "FlatMovementSpeedMod" | "rFlatMovementSpeedModPerLevel" | "PercentMovementSpeedMod" | "rPercentMovementSpeedModPerLevel" | "FlatAttackSpeedMod" | "PercentAttackSpeedMod" | "rPercentAttackSpeedModPerLevel" | "rFlatDodgeMod" | "rFlatDodgeModPerLevel" | "PercentDodgeMod" | "FlatCritChanceMod" | "rFlatCritChanceModPerLevel" | "PercentCritChanceMod" | "FlatCritDamageMod" | "rFlatCritDamageModPerLevel" | "PercentCritDamageMod" | "FlatBlockMod" | "PercentBlockMod" | "FlatSpellBlockMod" | "rFlatSpellBlockModPerLevel" | "PercentSpellBlockMod" | "FlatEXPBonus" | "PercentEXPBonus" | "rPercentCooldownMod" | "rPercentCooldownModPerLevel" | "rFlatTimeDeadMod" | "rFlatTimeDeadModPerLevel" | "rPercentTimeDeadMod" | "rPercentTimeDeadModPerLevel" | "rFlatGoldPer10Mod" | "rFlatMagicPenetrationMod" | "rFlatMagicPenetrationModPerLevel" | "rPercentMagicPenetrationMod" | "rPercentMagicPenetrationModPerLevel" | "FlatEnergyRegenMod" | "rFlatEnergyRegenModPerLevel" | "FlatEnergyPoolMod" | "rFlatEnergyModPerLevel" | "PercentLifeStealMod" | "PercentSpellVampMod";

interface CDragonItemEntry {
    id: number;
    name: string;
    description: string;
    active: boolean;
    inStore: boolean;
    from: number[];
    to: number[];
    categories: string[];
    maxStacks: number; // 0 | 1 | 5 | 9 | 10
    requiredChampion: "" | "FiddleSticks" | "Kalista" | "Sylas" | "Gangplank";
    requiredAlly: "" | "Ornn";
    requiredBuffCurrencyName: "" | "GangplankBilgewaterToken" | "S11Support_Quest_Completion_Buff";
    requiredBuffCurrencyCost: number; // 0 | 1 | 500
    specialRecipe: number;
    isEnchantment: false;
    price: number;
    priceTotal: number;
    iconPath: string;
}

interface WikiItemEffect {
    cd?: number
    charges?: number
    description: string;
    name: string
    range?: number
    unique: true
}

interface WikiItemEntry {
    id: number;
    tier: 1 | 2 | 3 | 4;
    type?: string[];
    limit?: string;
    maps: {
        cs: true | 'als' | undefined;
        ha: true | 'als' | undefined;
        nb: true | 'als' | undefined;
        sr: true | 'als' | undefined;
        tt: true | 'als' | undefined;
    };
    effects?: {
        act?: WikiItemEffect;
        aura?: WikiItemEffect;
        aura2?: WikiItemEffect;
        consume?: WikiItemEffect;
        mythic?: WikiItemEffect | string;
        pass?: WikiItemEffect;
        pass2?: WikiItemEffect;
        pass3?: WikiItemEffect;
        pass4?: WikiItemEffect;
        pass5?: WikiItemEffect;
    }
    menu: {
        "ability power"?: true;
        "armor pen"?: true;
        "assassin"?: true;
        "attack damage"?: true;
        "attack speed"?: true;
        "fighter"?: true;
        "health and reg"?: true;
        "lifesteal vamp"?: true;
        "mage"?: true;
        "magic pen"?: true;
        "mana and reg"?: true;
        "marksman"?: true;
        "movement"?: true;
        "onhit effects"?: true;
        "support"?: true;
        "tank"?: true;
    };
    stats: {
        ad?: number; // (22) [55, 40, 45, 20, 65, 25, 70, 7, 60, 8, 75, 50, 15, 30, 10, 35, '=>Manamun//number;e', 6, 5, 3, 80, 85]
        ah?: number; // (7) [10, 20, 25, 30, 15, "=>Winter's Approach", '=>Manamune']//
        ap?: number; // (21) [30, 20, 60, 80, 40, 25, 55, 65, 15, 90, 70, 100, 35, 85, 110, 75, 120, num//ber;5, 8, 50, 10]
        armor?: number; // (10) [30, 40, 15, 45, 50, 25, 80, 60, 20, 35]//
        armpen?: number; // (2) [18, 30]
        as?: number; // (10) [35, 25, 30, 12, 20, 45, 15, 40, 50, 18]
        crit?: number; // (5) [20, '=>Immortal Shieldbow', 15, '=>Galeforce', '=>Kraken Slayernum//ber;']
        gp10?: number; // (2) [3, 2]
        hp?: number; // (20) [450, 650, 200, 300, 350, 75, 250, 40, 80, 70, 400, 325, "=>Winter's Appr//onumber;ach", 500, 150, 60, 100, 30, 10, 800]
        hp5?: number; // (5) [100, 150, 200, 25, 50]
        hp5flat?: number; // (2) [6, 20]
        hsp?: number; // (2) [10, 20]
        lethality?: number; // (4) [10, 26, 18, 12]
        lifesteal?: number; // (4) [7, 18, 8, 10]
        mana?: number; // (8) [500, 800, 600, 860, 400, 250, 300, 240]
        mp5?: number; // (6) [100, 50, 75, 200, 115, 25]
        mpen?: number; // (2) [13, 40]
        mpenflat?: number; // (3) [10, 6, 18]
        mr?: number; // (8) [30, 45, 40, 70, 50, 25, 60, 35]
        ms?: number; // (3) [5, 8, 7]
        msflat?: number; // (5) [45, 25, 60, 115, '=>Boots']
        omnivamp?: number; // (5) [12, 7, 8, 5, 10]
        spec?: string; // "+25% <a href='https://leagueoflegends.fandom.com/wiki/slow resist' class='wiki__link'>slow resist</a>"
    };
    recipe: string[];
    buy: number;
    nickname?: string[];
    caption?: string;
    itemlimit?: string;
    tags?: ("HasOnHit" | "OnHitAppliesLifeSteal")[];
    formatname?: string;
    sellratio?: number // defualt 0.8
    champion?: ("Fiddlesticks" | "Gangplank" | "Kalista" | "Sylas")[] // Fiddlesticks Gangplank Kalista Sylas
    ornn?: true,
    builds?: string | undefined; // see Broken Stopwatch and Perfectly Timed Stopwatch
    req?: string;
    sell?: number;
    exclusive?: "Clash" // see Overcharged
}

