
import fs from 'fs';
import fetch from 'node-fetch';
import he from 'he';
import { default as matchReplaceSpellEffects, numberExpand } from '../src/javascript/matchreplace.mjs';
import JSON5 from 'json5';

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
    // let indent = 0
    for (let line of raw.split('\n')) {
        const tline = line.trim();
        if (line === '' || tline.startsWith('--'))
            continue;
        if (line.startsWith('return')) {
            results.push('{')
            continue;
        }
        // if(line.includes('{'))
        //     indent++;
        // if(line.includes('}'))
        //     indent--;
        line = line
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
            ;
        results.push(line);
    }
    const js = results.join('\n');

    // DEBUG --- test if the data is valid data.
    fs.promises.writeFile('./buildtools/testjson.json', js, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file ./buildtools/testjson.json was saved!`);
    });

    return JSON5.parse(js);

}
async function fetch_wikia(url) {
    console.log('Fetching (wikia)', url);
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
            if (match) {
                obj["name"] = match[1];
                console.log("Setting name to", match[1]);
                isFirstLine = false;
            } else {
                obj["name"] = String(line);
                console.log("Setting name to", line);
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
    console.log("File got (wikia) ", wikiaChamp.apiname);
    // console.assert(riotChamp.key === wikiaChamp.id);
    console.assert(riotChamp.id === wikiaChamp.apiname);
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

    //Done in order.
    await createSkill('I', wikiaChamp.skill_i, riotChamp.passive, true, model).catch(err => { console.error(err) });
    await createSkill('Q', wikiaChamp.skill_q, riotChamp.spells[0], false, model).catch(err => { console.error(err) });
    await createSkill('W', wikiaChamp.skill_w, riotChamp.spells[1], false, model).catch(err => { console.error(err) });
    await createSkill('E', wikiaChamp.skill_e, riotChamp.spells[2], false, model).catch(err => { console.error(err) });
    await createSkill('R', wikiaChamp.skill_r, riotChamp.spells[3], false, model).catch(err => { console.error(err) });

    return model;
}
function buildChangesField(changes) {
    let nums = changes.replace('V', '').replace('b', '.2').split('.')
    if (nums.length == 2)
        return '' + nums[0] + '.' + nums[1] + '.1';
    else
        return '' + nums[0] + '.' + nums[1] + '.' + nums[2];
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
function makeDescriptionHtml(skillout) {
    let html = [];
    for (const line of skillout.description) {
        let x = matchReplaceSpellEffects(line, false, skillout);
        html.push(x.str);
    }
    return html.join('<br />');
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
        descriptionHtml: null,
        leveling: skilldata.leveling || [],
        // riotDescription: riotSpell.description,
        notes: skilldata.notes || "",

        skillkey: skilldata.skillkey,
        skillid: skilldata.skillid,

    };

    skillout.descriptionHtml = makeDescriptionHtml(skillout);

    if (skilldata.name !== riotSpell.name)
        console.log("Name mismatch wikia: [" + skilldata.name + "] and riot: [" + riotSpell.name + "]");


    if (!is_passive) {
        let old_val = (skilldata.cost || '0').toString();
        let value = old_val;

        if (value.includes('{{')) {
            const list = burnify(value, skillout.maxrank);
            value = list.join('/');
            skillout.cost = list;
        } else {
            // Cost does not sacle with level.
            skillout.cost = +parseFloat(value).toFixed(3);
        }
        if (value != riotSpell['costBurn'])
            skillout.cost_warn = (`Wiki's and Riot's mana costs do not match: Wiki's value  ${old_val} as ${value} and riot's value ${riotSpell['cost']} as ${riotSpell['costBurn']}`)
    }
    if (!is_passive) {
        let old_val = (skilldata.cooldown || '0').toString();
        let value = old_val;

        if (value.includes('{{')) {
            // Cooldown sacles with level.
            const list = burnify(value, skillout.maxrank);
            value = list.join('/');
            skillout.cooldown = list;
        } else {
            // Cooldown does not sacle with level.
            skillout.cooldown = +parseFloat(value).toFixed(3);
        }
        if (value != riotSpell['cooldownBurn'])
            skillout.cooldown_warn = `Wiki's and Riot's cooldowns do not match: Wiki's value '${old_val}' as '${value}' and riot's value '${riotSpell['cooldown']}' as '${riotSpell['cooldownBurn']}'`;

    }


    skillout.effects = [];
    for (let leveling_index in skillout.leveling) {
        let effect = {}
        skillout.effects[leveling_index] = effect;
        const levelingtext = skillout.leveling[leveling_index];
        // effect.levelingtext = levelingtext;
        let x = matchReplaceSpellEffects(levelingtext, false, skillout);
        effect.str = x.str;
        effect.vars = x.vars;

        // if (x.vars.ap_progressions.length == 0) continue;
        effect.subeffects = [];
        // as_ratios are deivded evenly between st_slices
        const as_ratios_per_st = (x.vars.as_ratios.length / x.vars.st_slices.length) || 0;
        for (const subindex in x.vars.st_slices) {
            const title = x.vars.st_slices[subindex][0] || '';
            let damage_type = matchDamageType(title.toLowerCase());
            if (damage_type == 'none')
                damage_type = matchDamageType(skillout.descriptionHtml.toLowerCase());
            let ratios = {}

            if (damage_type != 'none') {
                ratios.base_damage = x.vars.ap_progressions[subindex];
            }
            for (let ratio_index = 0; ratio_index < as_ratios_per_st; ratio_index++) {
                for (const r in x.vars.as_ratios[ratio_index])
                    ratios[r] = x.vars.as_ratios[ratio_index][r];
            }

            effect.subeffects[subindex] = {
                index: parseInt(subindex),
                title: title,
                damage_type: damage_type,
                ratios: ratios,
                // str: x.vars.st_slices[subindex][1] || '',
            }
        }
    }
    return skillout;
}
const keyword_to_damage_type = {
    magic: "magic",
    true: "true",
    physical: "physical",
    none: "none",
    slow: "none",
    heal: "none",
    shield: "none",
    minion: "none",
    speed: "none",
}
function matchDamageType(text) {
    for (const key in keyword_to_damage_type) {
        if (text.indexOf(key) > -1) {
            return keyword_to_damage_type[key];
        }
    }
    return 'unknown'
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
    return numberExpand(param.split('|').slice(1), forceRange, round);
}

let noRepeatDesc = new Set();

function saveFile(path, data) {
    console.log(`Saving file '${path}'...`);
    return fs.promises.writeFile(path, JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file '${path}' was saved!`);
    });
}

let cdn = "", lang = "", version = "", dispVersion = "";

/**
 * From https://ddragon.leagueoflegends.com/api/versions.json
 * @param body JSON Object
 */
async function onRealmJsonResponse(body) {
    cdn = "https://ddragon.leagueoflegends.com/cdn";
    // Use the lateset version.
    version = body[0];
    // Cuts the last .1 off of ddragon patch versions to look like normal patches.
    dispVersion = version.replace(/\.1$/, "")
    lang = "en_US";
    console.log("Using ddragon version:", version);

    const championUrl = `${cdn}/${version}/data/${lang}/champion.json`;


    saveFile(`./src/api/version.json`, {
        v: version,
        dv: dispVersion,
        l: lang,
        cdn: cdn,
    });

    const mod_data_url = `https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data?action=edit`;

    console.log("Fetching (json): %s", championUrl);
    const responseDDragon = await fetch(championUrl);
    console.log("Fetching (wikia-module): %s", mod_data_url);
    const responseWikia = await fetch(mod_data_url);
    console.log("Parsing (responseDDragon)");
    const bodyDDragon = await responseDDragon.json();
    console.log("Parsing (responseWikia)");
    const bodyWikia = await wikia_to_json(responseWikia)
    console.log("Building Champion Json");
    return await onChampionJsonResponse(bodyDDragon, bodyWikia);
}

/**
 * From https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion.json
 * and From https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data?action=edit
 * @param champ_json JSON Object
 * @param fandom_data JSON Object
 */
async function onChampionJsonResponse(champ_json, fandom_data) {
    // console.log('fandom_data',fandom_data)
    console.assert(champ_json.type === 'champion');
    console.assert(champ_json.format === 'standAloneComplex');
    console.assert(champ_json.version === version);
    let returnData = {};
    let promises = []
    for (const keyid in champ_json.data) {
        const champ = champ_json.data[keyid];
        // if (champ.id !== 'Syndra') continue;
        returnData[keyid] = {
            // version: champ.version, // ddragon version
            id: champ.id, // Ex. "RekSai"
            // key: champ.key, // Ex. "421"
            name: champ.name,
            title: champ.title, // Ex. "the Void Burrower"
            // blurb: champ.blurb,
            // info: champ.info,
            // image: champ.image,
            // tags: champ.tags, // ["Fighter", "Tank"],
            resource: champ.partype, // Renamed 
            stats: champ.stats
        }
        // Ex. https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion/Aatrox.json
        const url = `${cdn}/${version}/data/${lang}/champion/${champ.id}.json`;
        console.log('Fetching (ddragon)', url)
        const fullDataPromise = fetch(url).then((response) => response.json());

        promises.push(doMergeData(fullDataPromise, fandom_data[champ.name]).then((data) => {
            return saveFile(`./public/api/champion/${champ.id}.json`, data);
        }));
    }
    console.log("Awaiting all Promises");
    await Promise.all(promises);
    // console.log("freeze data");
    // Object.freeze(returnData);
    saveFile('./src/api/ChampionList.json', returnData);
    return returnData;
}
async function createSkill(letter, skillNames, riotData, isPassive, champModel) {
    // if (!skillNames) return;
    const skillsplit = skillNames;//.toString().split(";")
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

fs.mkdirSync('./public/api/champion/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

//https://ddragon.leagueoflegends.com/realms/na.json
await fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then((response) => { return response.json(); })
    .then(onRealmJsonResponse);