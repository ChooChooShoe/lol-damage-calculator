
import fs from 'fs';
import fetch from 'node-fetch';

function saveFile(path, data) {
    return fs.promises.writeFile(path, JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file '${path}' was saved!`);
    });
}

/**
 * 
 * @param item   Ex.
 "1001": {
    "id": 1001,
    "name": "Boots of Speed",
    "description": "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed",
    "active": false,
    "inStore": true,
    "from": [],
    "to": [ 3006, 3047 ],
    "categories": [
      "Boots"
    ],
    "mapStringIdInclusions": [ "SR" ]
    "maxStacks": 1,
    "modeNameInclusions": [ "CLASSIC", "TUTORIAL" ]
    "requiredChampion": "",
    "requiredAlly": "",
    // From 3901 - Fire at Will
    "requiredBuffCurrencyName": "GangplankBilgewaterToken",
    "requiredBuffCurrencyCost": 500,
    "specialRecipe": 0,
    "isEnchantment": false,
    "price": 300,
    "priceTotal": 300,
    "iconPath": "/lol-game-data/assets/DATA/Items/Icons2D/1001_Boots_of_Speed.png"
  },
 */
function takeRiftItem(item, riotItems) {
    item.mapStringIdInclusions = undefined;
    item.modeNameInclusions = undefined;
    item.specialRecipe = undefined;
    item.inStore = undefined;
    if (!item.iconPath.startsWith('/lol-game-data/assets/DATA/Items/Icons2D/')) {
        console.log("Unknown Item PAth", item.iconPath);
        item.iconPath = "";
    }
    else {
        item.iconPath = item.iconPath.substring("/lol-game-data/assets/DATA/Items/Icons2D/".length);
    }
    if(riotItems[item.id]){
        item.image = riotItems[item.id].image;
        item.colloq = ';' + riotItems[item.id].colloq.split(';').filter(item => item).join(';');
        item.search = item.name.toLowerCase() + item.colloq.toLowerCase();
    }
    else {
        console.log('No image for item',item.id,item.name)
    }

    item.stats = {
        //TODO item states
    };
    return item
}

function takeARAMItem(item, riotItems) {
    item.mapStringIdInclusions = undefined;
    item.modeNameInclusions = undefined;
    item.specialRecipe = undefined;
    item.inStore = undefined;
    return item
}

/**
 * From https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json
 * @param cdragonItems JSON Object
 */
function onItemsJsonResponse(riotJson, cdragonItems) {
    const riotItems = riotJson["data"];
    let riftItems = {};
    let aramItems = {};
    let otherItems = {};
    for (const item_obj of cdragonItems) {

        if (item_obj.inStore === false) {
            otherItems[item_obj.id] = item_obj;
        } else if (item_obj.mapStringIdInclusions.includes('SR') && item_obj.modeNameInclusions.includes('CLASSIC')) {
            item_obj.mapStringIdInclusions = undefined;
            item_obj.modeNameInclusions = undefined;
            riftItems[item_obj.id] = takeRiftItem(item_obj, riotItems);
        } else if (item_obj.mapStringIdInclusions.includes('HA') && item_obj.modeNameInclusions.includes('ARAM')) {
            aramItems[item_obj.id] = takeARAMItem(item_obj, riotItems);
        } else {
            otherItems[item_obj.id] = item_obj;
        }
    }
    Object.freeze(riftItems);
    Object.freeze(aramItems);
    Object.freeze(otherItems);
    saveFile('./public/api/shop/rift_items.json', riftItems);
    saveFile('./public/api/shop/aram_items.json', aramItems);
    saveFile('./public/api/shop/other_items.json', otherItems);
}

console.log('Hello');

fs.mkdirSync('./public/api/shop/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

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
    const lang = "en_US";
    console.log("Using ddragon version:", version);

    const ddragonItemUrl = `${cdn}/${version}/data/${lang}/item.json`;

    console.log("Fetching (DDragon): %s", ddragonItemUrl);
    console.log("Fetching (CDragon): %s", cdragonItemsUrl);

    const responseDDragon = await fetch(ddragonItemUrl);
    const responseCDragon = await fetch(cdragonItemsUrl);
    const bodyDDragon = await responseDDragon.json();
    const bodyCDragon = await responseCDragon.json();
    return onItemsJsonResponse(bodyDDragon, bodyCDragon);
}