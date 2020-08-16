
import fs from 'fs';
import fetch from 'node-fetch';
import he from 'he';
import matchReplaceSpellEffects from '../src/javascript/matchreplace.mjs';
import JSON5 from 'json5';

const noReedoHrefs = new Set();

/**
 * From https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data?action=edit
 * @param body string?
 */
async function wikia_to_json(body) {
    const text = await body.text();
    const content = text.match(/<textarea[^>]*>([\s\S]*)<\/textarea>/m);
    if (!content) {
        console.warn("Missing data. No data found");
        return null;
    }
    const raw = he.decode(content[1]);
    if (raw.length < 3) {
        console.warn("Missing data. Data length is less then 3");
        return null;
    }
    let results = [];

    // DIFRENT WAY OF CONVERTING TO JSON
    // let state = 'start'
    // for (let i = 0; i < raw.length; i++) {
    //     let v = raw[i];
    //     switch (state) {
    //         case 'start':
    //             if(v == '-' && raw[i+1] == '-') {
    //                 i = raw.indexOf('\n',i)
    //                 continue;
    //             } else {
    //                 i = raw.indexOf('{',i)
    //                 state = 'obj'
    //                 break;
    //             }
    //         case 'obj':
    //             if(v.match(/[\W]/)) {
    //                 break
    //             } else {
    //                 i = raw.indexOf('{',i)
    //                 state = 'obj'
    //                 break;
    //             }
    //             break;
    //         default:
    //             continue;
    //     }
    //     results.push(raw[i]);
    // }

    // let indent = 0
    for (let line of raw.split('\n')) {
        const tline = line.trim();
        if(line === '' || tline.startsWith('--'))
            continue;
        if(line.startsWith('return')) {
            results.push('{')
            continue;
        }
        // if(line.includes('{'))
        //     indent++;
        // if(line.includes('}'))
        //     indent--;
        line = line
            // //replaces [" and "] with "
            .replace(/\["|"]/g,`"`)
            // //replaces = with :
            .replace(/=/g,`:`)
            // //replaces [1] : with nothing if line has a { or is after a ', '
            .replace(/, \[\d] : /g,`, `).replace(/{\[\d] : /g,`{`)
            // //replaces { and } with [ and ] only if line has both
            .replace(/{(.*)}/g,`[$1]`)

            ;
            // Special case for Aphelios
            line = line.replace(/\[(\d)] : /g,`"$1" : `)
        results.push(line);
    }
    const js = results.join('\n');

    // DEBUG --- test if the data is valid data.
    // fs.promises.writeFile('./buildtools/testjson.json', js, function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(`The file  was saved!`);
    // });

    return JSON5.parse(js);

}
async function fetch_wikia(url) {
    console.log('Fetching (wikia)',url);
    const response = await fetch(url);
    const text = await response.text();

    const content = text.match(/<textarea[^>]*>([\s\S]*)<\/textarea>/m);
    if (!content)
        return null;
    const raw = he.decode(content[1]);

    if (raw.length < 3) {
        console.warn("Missing data. No data found");
        return null;
    }
    let obj = new Object();
    const dataSplit = raw.trim().slice(2, raw.length - 3).split("\n|");
    let isFirstLine = true;
    for (const line of dataSplit) {
        if (isFirstLine) {
            // line === "{{{{{1<noinclude>|Ability data</noinclude>}}}|Terrashape|{{{2|}}}|{{{3|}}}|{{{4|}}}|{{{5|}}}"
            const match = line.match(/noinclude>}}}\|([^|]*)\|/);
            if(match) {
                obj["name"] = match[1];
                console.log("Setting name to", match[1]);
                isFirstLine = false;
            } else {
                obj["name"] = String(line);
                console.log("Setting name to",line);
                isFirstLine = false;
            }
        } else {
            const parts = line.split('=');
            let key = parts[0].trim().replace(/ /g, '_');
            let value = parts.slice(1).join('=').trim();
            obj[key] = autoCast(value);
            // console.log("key", key, ", value", value)
        }
    }
    return obj;
}


async function doMergeData(riotChampPromise, wikiaChamp) {
    const rcr = await riotChampPromise;
    const riotChamp = rcr.data[Object.keys(rcr.data)[0]];
    console.log("File got (wikia) ", wikiaChamp.name);
    console.assert(riotChamp.id === wikiaChamp.id);
    console.assert(riotChamp.name === wikiaChamp.name);
    const model = {
        patch: wikiaChamp.patch || "",
        changes: buildChangesField(wikiaChamp.changes || "V0.0"),
        id: riotChamp.id,
        // key: riotChamp.key,
        name: riotChamp.name,
        // fullname: wikiaChamp.fullname,
        title: riotChamp.title,
        image: riotChamp.image,
        // skins: riotChamp["skins"],
        // lore: riotChamp["lore"],
        // blurb: riotChamp["blurb"],
        // allytips: riotChamp["allytips"],
        // enemytips: riotChamp["enemytips"], 
        // tags: riotChamp.tags,
        resource: riotChamp.partype,  // renamed to resource
        herotype: wikiaChamp.herotype || "",  // fix Zoe
        alttype: wikiaChamp.alttype || "",
        rangetype: wikiaChamp.rangetype || "Ranged",
        be_cost: wikiaChamp.be || 0,
        rp_cost: wikiaChamp.rp || 0,
        adaptivetype: wikiaChamp.adaptivetype.split(',')[0].toLowerCase(),
        info: riotChamp.info,
        stats: riotChamp.stats,

    };

    model.skills = {};

    await createSkill('I', wikiaChamp.skill_i, riotChamp.passive,   true,  model);
    await createSkill('Q', wikiaChamp.skill_q, riotChamp.spells[0], false, model);
    await createSkill('W', wikiaChamp.skill_w, riotChamp.spells[1], false, model);
    await createSkill('E', wikiaChamp.skill_e, riotChamp.spells[2], false, model);
    await createSkill('R', wikiaChamp.skill_r, riotChamp.spells[3], false, model);

    return model;
}
function buildChangesField(changes) {
    let nums = changes.replace('V', '').replace('b', '.2').split('.')
    if (nums.length == 2)
        return '' + nums[0] + '.' + nums[1] + '.1';
    else
        return '' + nums[0] + '.' + nums[1] + '.' + nums[2];
}
function default_export(champ) {
    return {
        "id": champ["id"], // "RekSai"
        "key": champ["key"], // "421"
        "name": champ["name"], // "Rek'Sai"
        "title": champ["title"], // "the Void Burrower"
        "image": champ["image"],
        "skins": champ['skins'],
        "lore": champ['lore'],
        "blurb": champ['blurb'],
        "allytips": champ['allytips'],
        "enemytips": champ['enemytips'],
        "tags": champ["tags"], //["Fighter"],
        "partype": champ["partype"], // "Battlefury"
        "info": champ["info"],
        "stats": champ["stats"],
        "riot_spells": champ.spells, // renamed 
        "riot_passive": { // renamed 
            "name": champ["passive"]["name"],
            "description": champ["passive"]["description"],
            "image": champ["passive"]["image"],
        },
        "riot_recommended": champ['recommended'], // renamed 
        wikia_champ: null,
        skills: {},
    }
}

function autoCast(s) {
    if (s === null || s == undefined)
        return null;
    s = s.toString().trim();
    if (s === '')
        return '';
    if (!isNaN(Number(s)))
        return Number(s);
    if (parseFloat(s))
        return parseFloat(s)
    if (s === "true" || s === "True")
        return true;
    if (s === "false" || s === "False")
        return false;
    return s;
}

function buildSkill(skilldata, riotSpell, is_passive, model) {
    stackData(skilldata, ["description", "leveling"]);
    const skillout = {
        riotId: riotSpell.id || '',
        name: skilldata.name || riotSpell.name,
        maxrank: riotSpell.maxrank || 0,
        cooldown: skilldata.cooldown,
        cost: skilldata.cost,
        costtype: skilldata.costtype,
        targeting: skilldata.targeting,
        target_range: skilldata.target_range,
        image: riotSpell.image,
        description: skilldata.description || [],
        // riotDescription: riotSpell.description,
        notes: skilldata.notes || "",

        skillkey: skilldata.skillkey,
        skillid: skilldata.skillid,

    };
    if (skilldata.name !== riotSpell.name)
        console.log("Name mismatch wikia: [" + skilldata.name + "] and riot: [" + riotSpell.name + "]");


    if (!is_passive) {
        let old_val = (skilldata.cost || '0').toString();
        let value = old_val;
        let list;

        if (value.includes('{{')) {
            list = burnify(value, skillout.maxrank);
            value = list.join('/');
        } else {
            value = Number(old_val) || 0;
            list = [value, value, value, value, value, value];
            list.length = skillout.maxrank;
        }
        if (value != riotSpell['costBurn'])
            console.warn(`cost is not matching riots: value ${old_val} as ${value} to riot ${riotSpell['cost']} burn ${riotSpell['costBurn']}`)

        skillout.costBurn = String(value);
        skillout.cost = list;
    }
    if (!is_passive) {
        let old_val = (skilldata.cooldown || '0').toString();
        let value = old_val;
        let list;

        if (value.includes('{{')) {
            list = burnify(value, skillout.maxrank);
            value = list.join('/');
        } else {
            value = Number(old_val) || 0;
            list = [value, value, value, value, value, value];
            list.length = skillout.maxrank;
        }
        if (value != riotSpell['cooldownBurn'])
            console.warn(`cooldown is not matching riots: value ${old_val} as ${value} to riot ${riotSpell['cooldown']} burn ${riotSpell['cooldownBurn']}`)

        skillout.cooldownBurn = String(value);
        skillout.cooldown = list;
    }

    skillout.effects = [];
    for (let effectindex in skilldata.leveling) {
        let effect = {}
        effect.levelingtext = skilldata.leveling[effectindex];
        let x = matchReplaceSpellEffects(effect.levelingtext, false);
        effect.str = x.str;
        effect.vars = x.vars;

        if (x.vars.ap_progressions) {
            effect.subeffects = [];
            const subeffCount = x.vars.st_slices.length / 2;
            const as_ratios_per = x.vars.as_ratios ? (x.vars.as_ratios.length / subeffCount) : 0;
            for (let subindex = 0; subindex < subeffCount; subindex++) {
                const subeff = {
                    index: subindex,
                    ratios: {},
                    title: x.vars.st_slices[subindex * 2] || '',
                    str: x.vars.st_slices[subindex * 2 + 1] || '',
                }
                var damageing = true;
                if (subeff.title.indexOf('amage') === -1) {
                    console.log(subeff.title + " ====> " + subeff.base_progression);
                    subeff.damage_type = 'none';
                    damageing = false;
                } else if (subeff.title.indexOf('agic') > -1) {
                    subeff.damage_type = 'magic';
                } else if (subeff.title.indexOf('rue') > -1) {
                    subeff.damage_type = 'true';
                } else if (subeff.title.indexOf('hysical') > -1) {
                    subeff.damage_type = 'physical';
                } else {
                    subeff.damage_type = 'unknown';
                }
                if (damageing) {
                    subeff.ratios.base_damage = x.vars.ap_progressions[subindex];
                } else {
                    subeff.ratios.base_progression = x.vars.ap_progressions[subindex];
                }
                for (let ratio_index = 0; ratio_index < as_ratios_per; ratio_index++) {
                    for (const r in x.vars.as_ratios[ratio_index])
                        subeff.ratios[r] = x.vars.as_ratios[ratio_index][r];

                }
                effect.subeffects[subindex] = subeff;
            }
        }
        skillout.effects[effectindex] = effect;
    }
    return skillout;
}
/// Takes each string in toStack array are stakcs 1-5 elements into one array of the orijonal name for the given obj.
function stackData(obj, toStack) {
    for (const stackIter of toStack) {
        obj[stackIter] = [
            (obj[`${stackIter}`] || null),
            (obj[`${stackIter}2`] || null),
            (obj[`${stackIter}3`] || null),
            (obj[`${stackIter}4`] || null),
            (obj[`${stackIter}5`] || null),
        ].filter(el => el !== null && el !== undefined);
    }
}

function burnify(param, forceRange, round) {
    // from matchreplace.js
    const regex = /([\d./*\-+()]+) to ([\d./*\-+()]+)( [\d]+)?/;
    const clean = /([^\d./*\-+()]+)/g;
    const list = [];
    round = parseInt(round) || 3;

    for (const p of param.split('|').slice(1)) {
        const found = p.match(regex);
        if (found) {
            const start = parseFloat(eval(found[1]));
            const end = parseFloat(eval(found[2]));
            const range = forceRange || parseInt(found[3]) || 5;
            const diff = (end - start) / (range - 1 - list.length);
            for (let i = list.length; i < range; i++) {
                list.push(+(start + diff * i).toFixed(round));
            }
        } else {
            try {

                let num = eval(p.replace(clean, ''));
                if (!isNaN(num))
                    list.push(+parseFloat(num).toFixed(round));
            } catch (msg) {
                console.warn(msg);
            }
        }
    }
    // from matchreplace.js

    console.info(`burnify for value ${param} => output is ${list}`)
    return list;
}

let noRepeatDesc = new Set();

function saveFile(path, data) {
    return fs.promises.writeFile(path, JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file '${path}' was saved!`);
    });
}

let cdn = "", lang = "", version = "", dispVersion = "";

/**
 * From https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json
 * @param items_json JSON Object
 */
function onItemsJsonResponse(items_json) {
    let riftItems = {};
    let aramItems = {};
    let otherItems = {};
    for (const item_obj of items_json) {
        if(item_obj.inStore === false) {
            otherItems[item_obj.id] = item_obj;
        } else if(item_obj.mapStringIdInclusions.includes('SR') && item_obj.modeNameInclusions.includes('CLASSIC')){
            riftItems[item_obj.id] = item_obj;
        } else if(item_obj.mapStringIdInclusions.includes('HA') && item_obj.modeNameInclusions.includes('ARAM')){
            aramItems[item_obj.id] = item_obj;
        } else {
            otherItems[item_obj.id] = item_obj;
        }
        // returnData[item_obj.id] = { // Ex. 1036
        //     id: item_obj.id, // Ex. "RekSai"
        //     name: item_obj.name, // Ex. "Long Sword"
        //     description: item_obj.description, // Ex. "<stats>+10 Attack Damage</stats>"
        //     active: item_obj.active, // Ex. false
        //     // "inStore": true,
        //     // "active": false,
        //     // "inStore": true,
        //     // "from": [],
        //     // "to": [],
        //     // "categories": [],
        //     // "mapStringIdInclusions": [],
        //     // "maxStacks": 1,
        //     // "modeNameInclusions": [],
        //     // "requiredChampion": "",
        //     // "requiredAlly": "",
        //     // "requiredBuffCurrencyName": "",
        //     // "requiredBuffCurrencyCost": 0,
        //     // "specialRecipe": 0,
        //     // "isEnchantment": false,
        //     // "price": 350,
        //     // "priceTotal": 350,
        //     // "iconPath": "/lol-game-data/assets/DATA/Items/Icons2D/1036_Long_Sword.png"
        // }
    }
    Object.freeze(riftItems);
    Object.freeze(aramItems);
    Object.freeze(otherItems);
    saveFile('./public/api/shop/rift_items.json', riftItems);
    saveFile('./public/api/shop/aram_items.json', aramItems);
    saveFile('./public/api/shop/other_items.json', otherItems);
}
async function createSkill(letter, skillNames, riotData, isPassive, champModel) {
    if (!skillNames) return;
    const skillsplit = skillNames.toString().split(";")
    for (let skillnum = 0; skillnum < skillsplit.length; skillnum++) {
        console.log('Creating skill', letter, skillnum);
        const element = skillsplit[skillnum];
        const skill_name = element.trim().replace(/ /g, "_")
        const url = `https://leagueoflegends.fandom.com/wiki/Template:Data_${champModel.name}/${skill_name}?action=edit`
        console.log('Fetching (skill)', url);
        const model = await fetch_wikia(url);

        let valid = false;
        if (model && model.description) {
            if (noRepeatDesc.has(model.description)) {
                console.warn('Description is the same as one before. Skipping', skill_name, model.description)
            } else {
                noRepeatDesc.add(model.description);
                valid = true;
            }
        }
        if (valid) {
            model.skillkey = letter.toUpperCase();
            model.skillid = letter.toLowerCase() + (skillnum + 1).toString();
            champModel.skills[model.skillid] = buildSkill(model, riotData, isPassive, champModel);
        }
    }
}

console.log('Hello');

fs.mkdirSync('./public/api/shop/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

const items_json_url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json"
fetch(items_json_url)
    .then((response) => { return response.json(); })
    .then(onItemsJsonResponse);