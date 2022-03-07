
import fs from 'fs';
import he from 'he';
import fetch from 'node-fetch';
import JSON5 from 'json5';

// import lua2js from 'lua2js';
let spriteBaseUri = ``;

/**
 * Fetches in a wiki data page and returns the textarea content inside.
 * @param {RequestInfo} url 
 * @returns string
 */
async function fetch_wiki(url) {
    console.log("Fetching (wiki):", url);
    return fetch(url)
        .then(response => response.text())
        .then(text => text.match(/<textarea[^>]*>([^]*)<\/textarea>/m))
        .then(content => he.decode(content[1]))
        .then(raw => {
            // Converts Lua data to json data.
            let results = [];
            for (let line of raw.split('\n')) {
                const tline = line.trim();
                if (tline === '' || tline.startsWith('--'))
                    continue;
                if (tline.startsWith('return')) {
                    results.push('{')
                    continue;
                }
                results.push(tline
                    //replaces [" and "] with "
                    .replace(/\["|"]/g, `"`)
                    //replaces = with :
                    .replace(/=/g, `:`)
                    //replaces [1] : with nothing if line has a { or is after a ', '
                    .replace(/, \[\d] : /g, `, `).replace(/{\[\d] : /g, `{`)
                    //replaces { and } with [ and ] only if line has both
                    .replace(/{(.*)}/g, `[$1]`)
                    //replaces [12] : with "12" :
                    .replace(/\[(\d+)] : /g, `"$1" : `)
                    //replaces -- with //
                    .replace(/--/g, "//")
                );
            }
            // return parsed JSON as a javascript object.
            return JSON5.parse(results.join(''));
        });
}
function fix_wiki_links(item, allItems) {
    for (const [key, value] of Object.entries(item)) {
        if (typeof value === "string" && value.startsWith(':>')) {
            item[key] = allItems[value.slice(2)][key];
        }
        if (typeof value === "object") {
            for (const [key2, value2] of Object.entries(value)) {
                if (typeof value2 === "string" && value2.startsWith(':>')) {
                    item[key][key2] = allItems[value2.slice(2)][key][key2];
                }
            }
        }
    }
}

function saveFile(path, data) {
    return fs.promises.writeFile(path, JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file '${path}' was saved!`);
    });
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
/**
 * 
 * @param a   Ex.
{
"id": 3853,
"name": "Shard of True Ice",
"description": "<mainText><stats><attention> 40</attention> Ability Power<br><attention> 75</attention> Health<br><attention> 100%</attention> Base Mana Regen<br><attention> 3</attention> Gold Per 10 Seconds</stats><br><br> <active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br> <active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
"active": true,
"inStore": false,
"from": [],
"to": [],
"categories": [
"GoldPer",
"Lane",
"ManaRegen",
"SpellDamage"
],
"maxStacks": 1,
"requiredChampion": "",
"requiredAlly": "",
"requiredBuffCurrencyName": "",
"requiredBuffCurrencyCost": 0,
"specialRecipe": 3851,
"isEnchantment": false,
"price": 400,
"priceTotal": 400,
"iconPath": "/lol-game-data/assets/ASSETS/Items/Icons2D/3853_Mage_T3_ShardofTrueIce.png"
},
@param b Ex. "3853": {
"name": "Shard of True Ice",
"description": "<mainText><stats><attention>40</attention> Ability Power<br><attention>75</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
"colloq": "",
"plaintext": "",
"specialRecipe": 3851,
"inStore": false,
"image": {
"full": "3853.png",
"sprite": "item1.png",
"group": "item",
"x": 432,
"y": 192,
"w": 48,
"h": 48
},
"gold": {
"base": 400,
"purchasable": false,
"total": 400,
"sell": 160
},
"tags": [
"GoldPer",
"Lane",
"ManaRegen",
"SpellDamage"
],
"maps": {
"11": true,
"12": false,
"21": false,
"22": false
},
"stats": {
"FlatHPPoolMod": 75,
"FlatMagicDamageMod": 40
},
"effect": {
"Effect1Amount": "3"
}
},
 */
function takeRiftItem(a, b, c) {
    function check(key, key2) {
        if (key2)
            return check_val(`${key}" and "${key2}`, a[key], b[key2]);
        return check_val(key, a[key], b[key]);
    }
    function check_val(key, val_a, val_b) {
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
    function unique(key) {
        if (a[key])
            console.log(`Item ${a.id}: Key "${key}" hade unique value. "${a[key]}"`)
        return a[key]
    }
    function get_type() {
        //typedata definition
        let typedata = (c.type || []).join(',');
        let s = [];

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
    function get_category() {
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
        "stats": c.stats || {},
        "effects": c.effects || {},
        "type": get_type(),
        "category": get_category(),
    }
}



/**
 * From https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json
 * @param cdragonItems JSON Object
 */
function onItemsJsonResponse(riotJson, cdragonItems, wikiItems) {
    const riotItems = riotJson["data"];
    let allItems = {};
    console.log("Length of riotItems", Object.keys(riotItems).length, " vs ", cdragonItems.length, " vs ", Object.keys(wikiItems).length);


    saveFile('./src/api/items/riotJson.json', riotJson);
    saveFile('./src/api/items/cdragonItems.json', cdragonItems);
    saveFile('./src/api/items/wikiItems.json', wikiItems);

    const defaultRiotItem = {
        "name": "Missing Riot Item",
        "from": [], "to": [], "image": null, "gold": {}, "tags": [], maps: {
            "11": true,
            "12": true,
            "21": true,
            "22": false
        },
    }
    const cdragon_by_id = {}
    for (const [key, value] of Object.entries(cdragonItems)) {
        cdragon_by_id[value.id] = value;
    }

    for (const [key, wikiItem] of Object.entries(wikiItems)) {
        if(!wikiItem.id) continue;
        let riotItem = riotItems[wikiItem.id];
        if (!riotItem) {
            console.log(`Item ${key} (${wikiItem.id}) is missing RiotData`)
            riotItem = defaultRiotItem;
        }
        let item_obj = cdragon_by_id[wikiItem.id];
        if (!item_obj) {
            console.log(`Item ${key} (${wikiItem.id}) is missing CDragonData`)
            item_obj = {};
        }
        fix_wiki_links(wikiItem, wikiItems);
        allItems[wikiItem.id] = takeRiftItem(item_obj, riotItem, wikiItem);
    }
    saveFile('./src/api/items/items.json', allItems);
}

console.log('Hello from Item Fetch');

fs.mkdirSync('./src/api/items/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

const cdragonItemsUrl = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json"

// const responseDDragon = await fetch(championUrl);
// const responseWikia = await fetch(mod_data_url);
// const bodyDDragon = await responseDDragon.json();
// const bodyWikia = await wikia_to_json(responseWikia)
// return onChampionJsonResponse(bodyDDragon, bodyWikia);

fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then((response) => { return response.json(); })
    .then(onVersionsJsonResponse);

/**
 * From https://ddragon.leagueoflegends.com/api/versions.json
 * @param body JSON Object
 */
async function onVersionsJsonResponse(body) {
    const cdn = "https://ddragon.leagueoflegends.com/cdn";
    // Use the latest version.
    const version = body[0];
    // Cuts the last .1 off of ddragon patch versions to look like normal patches.
    const dispVersion = version.replace(/\.1$/, "")
    const lang = "en_US";
    console.log("Using ddragon version:", version);

    await saveFile(`./src/api/version.json`, {
        v: version,
        dv: dispVersion,
        l: lang,
        cdn: cdn,
    });
    spriteBaseUri = `${cdn}/${version}/img/sprite/`;
    const ddragonItemUrl = `${cdn}/${version}/data/${lang}/item.json`;

    console.log("Fetching (DDragon): %s", ddragonItemUrl);
    console.log("Fetching (CDragon): %s", cdragonItemsUrl);

    const responseDDragon = await fetch(ddragonItemUrl);
    const responseCDragon = await fetch(cdragonItemsUrl);
    const wikiBody = await fetch_wiki(`https://leagueoflegends.fandom.com/wiki/Module:ItemData/data?action=edit`);

    const bodyDDragon = await responseDDragon.json();
    const bodyCDragon = await responseCDragon.json();

    return onItemsJsonResponse(bodyDDragon, bodyCDragon, wikiBody);
}