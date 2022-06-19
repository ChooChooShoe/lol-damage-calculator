
import fs from 'fs';
import fetch from 'node-fetch';
import { default as matchReplaceSpellEffects, numberExpand } from '../src/javascript/matchreplace.mjs';

import { make_wiki_skill_model, fetch_mod_data, saveFile } from './fetch_utils.mjs';

const SKIP_RIOTDATA_FOR_STATS = true;
const DEBUG = true;

async function doMergeData(riotChampPromise, wikiaChamp, ChampionListEntry) {
    const rcr = await riotChampPromise;
    const riotChamp = rcr ? rcr.data[Object.keys(rcr.data)[0]] : { spells: [] };
    console.log("File got (wikia) ", wikiaChamp.name, wikiaChamp.apiname);
    ChampionListEntry.image = riotChamp.image
    // Clone ChampionListEntry so skills are not added back to it.
    const model = Object.assign({}, ChampionListEntry);
    model.skills = {};

    // Missing skills in wiki data.
    if (wikiaChamp.name === "Kled & Skaarl")
        wikiaChamp.skills = { "1": "Skaarl the Cowardly Lizard", "2": "Bear Trap on a Rope", "3": "Violent Tendencies", "4": "Jousting", "5": "Chaaaaaaaarge!!!" };

    // Remove extra skills.
    if (wikiaChamp.name === "Kled")
        wikiaChamp.skills = { "1": "Dismounted Skaarl the Cowardly Lizard", "2": "Pocket Pistol", "3": "Violent Tendencies", "4": "Unmounted Jousting", "5": "Unmounted Chaaaaaaaarge!!!" }

    // Missing skills in wiki data.
    if (wikiaChamp.name === "Mega Gnar")
        wikiaChamp.skills = { "1": "Rage Gene", "2": "Boulder Toss", "3": "Wallop", "4": "Crunch", "5": "GNAR!" };

    if(wikiaChamp.name === "Elise")
        wikiaChamp.skill_r = ["Spider Form / Human Form" ]
    // Remove extra skills.
    // if (wikiaChamp.name === "Gnar")
    // wikiaChamp.skills = { "1": "Rage Gene", "2": "Boulder Toss", "3": "Wallop", "4": "Crunch", "5": "GNAR!" };


    const named_skills = {
        i: Object.values(wikiaChamp.skill_i) || [],
        q: Object.values(wikiaChamp.skill_q) || [],
        w: Object.values(wikiaChamp.skill_w) || [],
        e: Object.values(wikiaChamp.skill_e) || [],
        r: Object.values(wikiaChamp.skill_r) || []
    };

    const merged_skills = { A: [], I: [], Q: [], W: [], E: [], R: [] };

    if (!wikiaChamp.skills)
        return console.log("[SKILL] not found for", wikiaChamp);

    outer: for (const x of Object.values(wikiaChamp.skills)) {
        for (const key of ['i', 'q', 'w', 'e', 'r']) {
            const index = named_skills[key].indexOf(x);
            if (index > -1) {
                named_skills[key].splice(index, 1);
                merged_skills[key.toUpperCase()].push(x);
                continue outer;
            }
        }
        // For Senna, Jhin and Samira
        if (x === 'Basic Attack' || x === 'Taunt') {
            merged_skills.A.push(x);
            continue outer;
        }
        // Fallthrough
        console.log("[SKILL] Could not be found in QWER", x, "for", wikiaChamp.apiname, ':', Object.values(wikiaChamp.skills), "vs", wikiaChamp.skill_i, wikiaChamp.skill_q, wikiaChamp.skill_w, wikiaChamp.skill_e, wikiaChamp.skill_r)
    }
    for (const key of ['i', 'q', 'w', 'e', 'r']) {
        const x = named_skills[key];
        if (x.length > 0) {
            if (x[0].indexOf('2') === -1) {
                console.log("[SKILL] Extra Skills", key, x, "for", wikiaChamp.apiname, ':', Object.values(wikiaChamp.skills), "vs", wikiaChamp.skill_i, wikiaChamp.skill_q, wikiaChamp.skill_w, wikiaChamp.skill_e, wikiaChamp.skill_r)
                
            }
            // Add all anyway.
            merged_skills[key.toUpperCase()] = merged_skills[key.toUpperCase()].concat(x);
        }
    }

    //Done in order.
    if(merged_skills.A.length > 0)
        await createSkill('A', merged_skills.A, {}, false, model).catch(err => { console.error(err) });
    
    await createSkill('I', merged_skills.I, riotChamp.passive, true, model).catch(err => { console.error(err) });
    await createSkill('Q', merged_skills.Q, riotChamp.spells[0], false, model).catch(err => { console.error(err) });
    await createSkill('W', merged_skills.W, riotChamp.spells[1], false, model).catch(err => { console.error(err) });
    await createSkill('E', merged_skills.E, riotChamp.spells[2], false, model).catch(err => { console.error(err) });
    await createSkill('R', merged_skills.R, riotChamp.spells[3], false, model).catch(err => { console.error(err) });

    return model;
}
async function createSkill(letter, skills, riotData, isPassive, champModel) {
    let skill_id = 0;
    for (const skill_name of skills) {
        skill_id++;
        const skill_key = letter.toUpperCase() + (skills.length > 1 ? skill_id : '');
        console.log(`Creating skill ${skill_name} (${skill_key})`);

        await make_wiki_skill_model(champModel.name, skill_name).then((model) => {
            if (model && model.description) {
                if (noRepeatDesc.has(champModel.name+model.description)) {
                    console.log('[WARN] Description is the same as one before. Skipping', skill_name, model.description);
                    return;
                } else {
                    noRepeatDesc.add(champModel.name+model.description);
                }
            } else {
                console.log(`[WARN] Invalid Skill ${skill_name} (${skill_key}) no model description`);
                return;
            }
            model.skillletter = letter.toUpperCase();
            model.skillkey = skill_key;
            model.skillid = skill_id;
            champModel.skills[skill_key] = buildSkill(model, riotData, isPassive, champModel);
        });
    }
}

function buildChangesField(changes) {
    let nums = changes.replace('V', '').replace('b', '.2').split('.')
    if (nums.length == 2)
        return '' + nums[0] + '.' + nums[1] + '.1';
    else
        return '' + nums[0] + '.' + nums[1] + '.' + nums[2];
}
function makeDescriptionHtml(skillout) {
    let html = [];
    for (const line of skillout.description) {
        let x = matchReplaceSpellEffects(line, false, skillout);
        html.push(x.str);
    }
    return html.join('<br />');
}

function buildSkill(model, riotData, is_passive, champModel) {
    stackData(model, ["description", "leveling"]);
    const skillout = {
        // riotId: riotSpell.id || '',
        name: model.name || riotData.name,
        maxrank: riotData.maxrank || 0,
        cooldown: model.cooldown,
        cost: model.cost,
        costtype: model.costtype,
        targeting: model.targeting,
        target_range: model.target_range,
        image: riotData.image,
        description: model.description || [],
        descriptionHtml: null,
        leveling: model.leveling || [],
        // riotDescription: riotSpell.description,
        notes: model.notes || "",

        //TODO FIX THIS MESS
        skillletter: model.skillletter,
        skillkey: model.skillkey,
        skillid: model.skillid,
        skillwiki: model.skill,

    };

    skillout.descriptionHtml = makeDescriptionHtml(skillout);

    if (!is_passive) {
        let old_val = (model.cost || '0').toString();
        let value = old_val;

        if (value.includes('{{')) {
            const list = burnify(value, skillout.maxrank);
            value = list.join('/');
            skillout.cost = list;
        } else {
            // Cost does not sacle with level.
            skillout.cost = +parseFloat(value).toFixed(3);
        }
    }
    if (!is_passive) {
        let old_val = (model.cooldown || '0').toString();
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
            if (damage_type === 'none' || damage_type === 'unknown')
                damage_type = matchDamageType(skillout.descriptionHtml.toLowerCase());
            if (damage_type === 'unknown') {
                console.log("[WARN] Using adaptivetype as damage_type for skill", title);
                damage_type = champModel.adaptivetype;
            }
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
    heal: "heal",
    shield: "shield",
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

    saveFile(`./src/api/version.json`, {
        v: version,
        dv: dispVersion,
        l: lang,
        cdn: cdn,
    });


    console.log("Building Champion Json (No Riot Data)");
    return makeChampionList(await fetch_mod_data());
}

/**
 * From https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data?action=edit
 * @param ModuleChampionData JSON Object
 */
async function makeChampionList(ModuleChampionData) {
    let ChampionList = {};
    let promises = []
    for (const [champ, data] of Object.entries(ModuleChampionData)) {
        data.name = champ;
        ChampionList[champ] = {
            id: data.apiname === "GnarBig" ? "Gnar" : data.apiname,
            name: champ,  // Ex. Rammus
            //id: data.id, // Ex. 33,
            //apiname: data.apiname, // Ex.  'Rammus',
            title: data.title, // Ex.  'the Armordillo',
            image: null,
            // attack: data.attack, // Ex.  4,
            // defense: data.defense, // Ex.  10,
            // magic: data.magic, // Ex.  5,
            // difficulty: data.difficulty, // Ex.  1,
            herotype: data.herotype, // Ex.  'Tank',
            alttype: data.alttype, // Ex.  'Fighter',
            resource: data.resource, // Ex.  'Mana',
            stats: data.stats,
            rangetype: data.rangetype, // Ex.  'Melee',
            date: data.date, // Ex.  '2009-07-10',
            patch: data.patch, // Ex.  'July 10, 2009 Patch',
            changes: buildChangesField(data.changes || "V0.0"), // Ex.  'V12.10',
            role: data.role, // Ex.  ['Vanguard'],
            positions: data.positions, // Ex.  ['Jungle'],
            op_positions: data.op_positions, // Ex.  ['Jungle'],
            // damage: data.damage, // Ex.  2,
            // toughness: data.toughness, // Ex.  3,
            // control: data.control, // Ex.  3,
            // mobility: data.mobility, // Ex.  2,
            // utility: data.utility, // Ex.  1,
            // style: data.style, // Ex.  65,
            adaptivetype: data.adaptivetype, // Ex.  'Physical',
            be: data.be, // Ex.  1350,
            rp: data.rp, // Ex.  585,
            // skill_i: data.skill_i,// Ex.: ['Spiked Shell'],
            // skill_q: data.skill_q,// Ex.: ['Powerball'],
            // skill_w: data.skill_w,// Ex.: ['Defensive Ball Curl'],
            // skill_e: data.skill_e,// Ex.: ['Frenzying Taunt'],
            // skill_r: data.skill_r,// Ex.: ['Soaring Slam'],
            // skills: {
            //     '1': 'Spiked Shell',
            //     '2': 'Powerball',
            //     '3': 'Defensive Ball Curl',
            //     '4': 'Frenzying Taunt',
            //     '5': 'Soaring Slam'
            // }
        }
        // Ex. https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion/Aatrox.json
        const url = `${cdn}/${version}/data/${lang}/champion/${ChampionList[champ].id}.json`;
        console.log('Fetching (ddragon)', url)
        const fullDataPromise = fetch(url).then((response) => {
            if (response.ok) return response.json();
            console.error(url, "url is invalid")
            // TODO fix GnarBig
            return null;
        });
        promises.push(doMergeData(fullDataPromise, data, ChampionList[champ]).then((merged_data) => {
            return saveFile(`./public/api/champion/${champ}.json`, merged_data);
        }));
    }
    console.log("Awaiting all Promises");
    await Promise.all(promises);
    // console.log("freeze data");
    // Object.freeze(returnData);
    const sorted = Object.entries(ChampionList).sort((a, b) => a[1].name > b[1].name ? 1 : -1)

    saveFile('./src/api/ChampionList.json', Object.fromEntries(sorted));
    return ChampionList;
}
console.log('Hello');

fs.mkdirSync('./public/api/champion/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

//https://ddragon.leagueoflegends.com/realms/na.json
await fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then((response) => { return response.json(); })
    .then(onRealmJsonResponse);