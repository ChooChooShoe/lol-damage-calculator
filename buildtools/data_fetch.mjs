
import fs from 'fs';
import fetch from 'node-fetch';
import he from 'he';
import matchReplaceSpellEffects from '../src/javascript/matchreplace.mjs';


const noReedoHrefs = new Set();
async function fetch_wikia(url) {
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
            obj["name"] = match[1];
            console.log("Setting name to", match[1]);
            isFirstLine = false;
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

async function onRealmJsonResponse(body) {
    cdn = "https://ddragon.leagueoflegends.com/cdn"; // body.cdn;
    version = body[0]; // body.v;
    // Cuts the last .1 off of ddragon patch versions to look like normal patches.
    dispVersion = version.lastIndexOf('.1') > 2 ? version.slice(0, version.lastIndexOf('.1')) : version;
    lang = "en_US"; // body.l;
    console.log("Using ddragon version:", version);

    const championUrl = `${cdn}/${version}/data/${lang}/champion.json`;


    saveFile(`./public/api/version.json`, {
        v: version,
        dv: dispVersion,
        l: lang,
        cdn: cdn,
    });

    console.log("Fetching (json): %s", championUrl)

    const response = await fetch(championUrl);
    const body2 = await response.json();
    return onChampionJsonResponse(body2);
}


function onChampionJsonResponse(body) {
    console.assert(body.type === 'champion');
    console.assert(body.format === 'standAloneComplex');
    console.assert(body.version === version);
    let returnData = {};
    for (const keyid in body.data) {
        const champ = body.data[keyid];
        // if (champ.id !== 'Syndra') continue;
        returnData[keyid] = {
            // version: champ.version, // ddragon version
            id: champ.id, // "RekSai"
            // key: champ.key, // "421" // "Rek'Sai"
            name: champ.name,
            title: champ.title, // "the Void Burrower"
            // blurb: champ.blurb,
            // info: champ.info,
            // image: champ.image,
            // tags: champ.tags, // ["Fighter", "Tank"],
            resource: champ.partype, // Renamed 
            stats: champ.stats
        }

        const fullDataPromise = fetch(`${cdn}/${version}/data/${lang}/champion/${champ.id}.json`)
                .then((response) => response.json());

        fetch_wikia(`https://leagueoflegends.fandom.com/wiki/Template:Data_${champ.name}?action=edit`)
            .then((wikiaData) => doMergeData(fullDataPromise, wikiaData))
            .then((data) => {
                return saveFile(`./public/api/champion/${champ.id}.json`, data);
            });
    }
    Object.freeze(returnData);
    saveFile('./public/api/ChampionList.json', returnData);
    return returnData;
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
function doMergeSkillData(){

}


console.log('Hello');

// if (process.argv.length <= 2) {
//     console.log("WARNING champion id to download is required but not supplied");
//     console.log("usage: node %s <champion ids...|all|list|help>", process.argv[1]);
//     process.exit(1);
// }
// const clarg = process.argv[2]
// if (clarg == "help" || clarg == "-h" || clarg == "--help") {
//     console.log("usage: node %s <champion ids...|all|list|help>", process.argv[1])
//     process.exit(0)
// }
// const all = (clarg == 'all');

// const champsList = process.argv.slice(2).join(',').split(",")
// console.log('Command Line Args: ', champsList)


fs.mkdirSync('./public/api/champion/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })
//https://ddragon.leagueoflegends.com/realms/na.json
fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then((response) => { return response.json(); })
    .then(onRealmJsonResponse);