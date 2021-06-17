
import fs from 'fs';
import process from 'process';
import fetch from 'node-fetch';
import he from 'he';
import { default as matchReplaceSpellEffects, numberExpand } from '../src/javascript/matchreplace.mjs';
import JSON5 from 'json5';

const DEBUG = false;
async function onVersionResponse(versions_json) {
    const cdn = "https://ddragon.leagueoflegends.com/cdn";
    // Use the lateset version.
    const version = versions_json[0];
    // Cuts the last .1 off of ddragon patch versions to look like normal patches.
    const dispVersion = version.replace(/\.1$/, "")
    const lang = "en_US";
    console.log("Using ddragon version:", version);

    saveFile(`./src/api/version.json`, {
        v: version,
        dv: dispVersion,
        l: lang,
        cdn: cdn,
    });

    // const p1 = fetch(`${cdn}/${version}/data/${lang}/champion.json`)
    //     .then(response => response.json())
    //     .then(json => DEBUG ? saveFile(`./champion.json`, json) : json);

    const p2 = fetch_module_data()
        .then(json => DEBUG ? saveFile(`./Module_ChampionData.json`, json) : json);
    // return onChampionJsonResponse(await champ_json, await wiki_json);

    // const champ_json = await p1
    const fandom_data = await p2;
    let basicModels = {};
    const promises = []
    for (const [keyid, champ] of Object.entries(fandom_data)) {
        if (DEBUG && keyid !== "Rek'Sai") continue;
        basicModels[keyid] = {
            id: champ.apiname, // Ex. "RekSai"
            key: champ.id, // Ex. "421"
            name: keyid, // "Rek'Sai"
            title: champ.title, // Ex. "the Void Burrower"
            resource: champ.resource,
            stats: champ.stats,
            rangetype: champ.rangetype, // "Melee"
            positions: champ.positions, // [ "Jungle" ],
            // "op_positions": [ "Jungle" ],
            adaptivetype: champ.adaptivetype, // "Physical",
        }
        const realApiName = fix_apiname[champ.apiname] || champ.apiname;
        // Ex. https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion/RekSai.json
        const url = `${cdn}/${version}/data/${lang}/champion/${realApiName}.json`;
        promises.push(fetch(url)
            .then(response => response.json())
            .then(json => doMergeData(json.data[Object.keys(json.data)[0]], champ, basicModels[keyid]))
            .then(data => saveFile(`./public/api/champion/${keyid}.json`, data)));

    }
    console.log("Awaiting all Promises");
    await Promise.all(promises);
    await saveFile('./src/api/ChampionList.json', basicModels);
    return basicModels;
}

async function fetch_wiki(url) {
    return fetch(url)
        .then(response => response.text())
        .then(text => text.match(/<textarea[^>]*>([^]*)<\/textarea>/m))
        .then(content => he.decode(content[1]));
}

async function fetch_module_data() {
    const modDataUrl = `https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data?action=edit`;
    const raw = await fetch_wiki(modDataUrl);

    if (DEBUG) await fs.promises.writeFile('./Module_ChampionData.lua', raw)

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
            //replaces [12] : with "12" :
            .replace(/\[(\d+)] : /g, `"$1" : `)
            //replaces { and } with [ and ] only if no : between them
            .replace(/{(.*)}/g, `[$1]`)
            //replaces -- with //
            .replace(/--/g, "//")
        );
    }
    // Converts objects to arrays for skills
    const json = JSON5.parse(results.join(''));
    for (const champ of Object.values(json)) {
        for (const key of ['skill_i', 'skill_q', 'skill_e', 'skill_w', 'skill_r', 'skills'])
            if (typeof champ[key] === "object") {
                champ[key] = Array.from(Object.values(champ[key]));
            }
    }
    return json;
}

function buildChangesField(changes) {
    let nums = changes.replace('V', '').replace('b', '.2').split('.')
    if (nums.length == 2)
        return '' + nums[0] + '.' + nums[1] + '.1';
    else
        return '' + nums[0] + '.' + nums[1] + '.' + nums[2];
}

async function doMergeData(riotChamp, wikiaChamp, basicModel) {
    console.log("Merge Data for ", basicModel.name);
    const extraModel = {
        image: riotChamp.image,
        // skins: riotChamp["skins"],
        // lore: riotChamp["lore"],
        // blurb: riotChamp["blurb"],
        // allytips: riotChamp["allytips"],
        // enemytips: riotChamp["enemytips"], 
        // tags: riotChamp.tags,
        // "attack": 8,
        // "defense": 5,
        // "magic": 2,
        // "difficulty": 2,
        herotype: wikiaChamp.herotype, // "herotype": "Fighter",
        alttype: wikiaChamp.alttype || "", // undefined
        date: wikiaChamp.date, // "date": "2014-12-11",
        patch: wikiaChamp.patch || "", // "V4.21",
        changes: buildChangesField(wikiaChamp.changes || "V0.0"), //  "V11.1",
        // "role": [ "Diver" ],
        // "damage": 2,
        // "toughness": 2,
        // "control": 2,
        // "mobility": 2,
        // "utility": 2,
        // "style": 30,
        be: wikiaChamp.be || 0,
        rp: wikiaChamp.rp || 0,
        skill_i: wikiaChamp.skill_i,// "skill_i": [ "Fury of the Xer'Sai" ],
        skill_q: wikiaChamp.skill_q,// "skill_q": [ "Queen's Wrath", "Prey Seeker" ],
        skill_w: wikiaChamp.skill_w,// "skill_w": [ "Burrow", "Unburrow" ],
        skill_e: wikiaChamp.skill_e,// "skill_e": [ "Furious Bite", "Tunnel" ],
        skill_r: wikiaChamp.skill_r,// "skill_r": [ "Void Rush" ],
        skill_names: wikiaChamp.skills,
        skills: []
    }
    // Adds all valus from basicModel to the fullModel.
    const fullModel = Object.assign({}, basicModel);
    Object.assign(fullModel, extraModel)

    const skills_added = [wikiaChamp.skill_i, wikiaChamp.skill_q, wikiaChamp.skill_w, wikiaChamp.skill_e, wikiaChamp.skill_r].flat();
    if (skills_added !== wikiaChamp.skills)
        fullModel.skillsMismatch = true;

    const map_riot = { I: riotChamp.passive, Q: riotChamp.spells?.[0], W: riotChamp.spells?.[1], E: riotChamp.spells?.[2], R: riotChamp.spells?.[3] };

    // fix for kled not having skills.
    wikiaChamp.skills = wikiaChamp.skills || [];
    for (const [index, skillName] of wikiaChamp.skills.entries()) {
        console.log('Creating skill', skillName, index + 1);
        const wiki_skill = await fetch_wiki_skill(fullModel.name, skillName) || {};
        const riotSkill = map_riot[wiki_skill.skill] || {};
        // let valid = false;
        // if (model && model.description) {
        //     if (noRepeatDesc.has(model.description)) {
        //         console.warn('Description is the same as one before. Skipping', skill_name, model.description)
        //     } else {
        //         noRepeatDesc.add(model.description);
        //         valid = true;
        //     }
        // }
        // if (valid) {
        wiki_skill.skillkey = "X";
        wiki_skill.skillid = "X" + (index + 1).toString();
        fullModel.skills[index] = buildSkill(riotSkill, wiki_skill, fullModel);
        // }
    }
    return fullModel;
}
export async function fetch_wiki_skill(champ_name, skill_name) {
    const skillDataUrl = `https://leagueoflegends.fandom.com/wiki/Template:Data_${champ_name}/${skill_name.replace(/ /g, '_')}?action=edit`;
    const raw = await fetch_wiki(skillDataUrl);

    let obj = { name: skill_name };
    // Trims {{ and \n}}  splits lines and create an iterator
    const splitIter = raw.trim().slice(2, -3).split("\n|")[Symbol.iterator]();

    // skip first line
    splitIter.next();

    for (const line of splitIter) {
        const index = line.indexOf('=');
        let key = line.slice(0, index).trim().replace(/ /, '_');
        let value = line.slice(index + 1).trim();
        obj[key] = autoCast(value);
    }
    return obj;
}

async function saveFile(path, data) {
    console.log(`Saving file '${path}'...`);
    const _ = await fs.promises.writeFile(path, JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file '${path}' was saved!`);
    });
    return data;
}

function buildSkill(riotSpell, wiki, model) {
    for (const stackIter of ["icon", "description", "leveling"]) {
        wiki[stackIter] = [
            (wiki[`${stackIter}`]),
            (wiki[`${stackIter}2`]),
            (wiki[`${stackIter}3`]),
            (wiki[`${stackIter}4`]),
            (wiki[`${stackIter}5`]),
        ].filter(v => v);
        wiki[`${stackIter}2`] = undefined;
        wiki[`${stackIter}3`] = undefined;
        wiki[`${stackIter}4`] = undefined;
        wiki[`${stackIter}5`] = undefined;
    }
    const skillout = {
        name: wiki.name, // Fury of the Xer'Sai
        disp_name: wiki.disp_name, //Name of the ability Only necessary if the value differs from Fury of the Xer'Sai.
        // champion: wiki_skill.champion, // "Rek'Sai"champion
        skill: wiki.skill?.replace('I', 'P'), // I
        range: wiki.range, //range
        target_range: wiki.target_range, //target range
        attack_range: wiki.attack_range, //attack range
        travel_distance: wiki.travel_distance, //travel distance
        collision_radius: wiki.collision_radius, //collision radius
        effect_radius: wiki.effect_radius, //effect radius
        width: wiki.width, //width
        angle: wiki.angle, //angle
        inner_radius: wiki.inner_radius, //inner radius
        tether_radius: wiki.tether_radius, //tether radius
        speed: wiki.speed, //speed
        cast_time: wiki.cast_time, //cast time
        cost: 0, //cost
        costtype: wiki.costtype, //costtype
        static: wiki.static, //static
        cooldown: wiki.cooldown, //cooldown
        ontargetcd: wiki.ontargetcd, //ontargetcd
        ontargetcdstatic: wiki.ontargetcdstatic, //ontargetcdstatic
        recharge: wiki.recharge, //recharge
        rechargestatic: wiki.rechargestatic, //rechargestatic
        customlabel: wiki.customlabel, //customlabel
        custominfo: wiki.custominfo, //custominfo
        icon: wiki.icon, //icon (STACKED)
        blurb: [wiki.blurb, wiki.blurb2].filter(v => v).join('\n'), // blurb
        description: wiki.description || [], //description  (STACKED)
        descriptionHtml: null, // custom
        leveling: wiki.leveling || [], //leveling  (STACKED)
        targeting: wiki.targeting, //Permafrost is a single target ability.
        affects: wiki.affects, //Permafrost affects enemy champions and large monsters
        damagetype: wiki.damagetype || "None", //Permafrost deals magic damage.
        spelleffects: wiki.spelleffects || "none", //spelleffects
        onhiteffects: wiki.onhiteffects, //onhiteffects can be set to 'true', for abilities that apply on-hit effects (from items or other abilities)
        occurrence: wiki.occurrence, //occurrence can either be set to 'hit' or 'attack', and refers to on-hit effects
        spellshield: wiki.spellshield, //spellshield can either be set to true, or written with a custom description.
        projectile: wiki.projectile, //true
        callforhelp: wiki.callforhelp, //callforhelp determines whether minion aggro will transfer to the caster
        additional: wiki.additional, //Displays additional information in a smaller window below the template.
        notes: wiki.notes, //Displays additional information with effect table to the right.
        flavorsound: wiki.flavorsound, //For abilities where the SFX/quote is an important part of the gameplay - e.g. Kled or Sion ulting.
        // video: wiki.video, //video
        // video2: wiki.video2, //video 2
        // yvideo: wiki.yvideo, //YouTube video
        // yvideo2: wiki.yvideo2, //YouTube video 2

        maxrank: riotSpell.maxrank || 0,
        image: riotSpell.image,

        skillkey: wiki.skillkey,
        skillid: wiki.skillid,
    };
    const is_passive = skillout.skill === "P";

    skillout.descriptionHtml = makeDescriptionHtml(skillout);

    if (!is_passive) {
        const old_cost = (wiki.cost || '0').toString();
        if (old_cost.includes('{{'))
            // Cost sacles with level.
            skillout.cost = burnify(old_cost, skillout.maxrank);
        else
            // Cost does not sacle with level.
            skillout.cost = +parseFloat(old_cost).toFixed(3);


        const old_cooldown = (wiki.cooldown || '0').toString();
        if (old_cooldown.includes('{{'))
            // Cooldown sacles with level.
            skillout.cooldown = burnify(old_cooldown, skillout.maxrank);
        else
            // Cooldown does not sacle with level.
            skillout.cooldown = +parseFloat(old_cooldown).toFixed(3);
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
            if (damage_type == 'unknown')
                damage_type = matchDamageType(skillout.damagetype || '');
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
function matchDamageType(text) {
    text = text.toString();
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
    for (const key in keyword_to_damage_type) {
        if (text.indexOf(key) > -1) {
            return keyword_to_damage_type[key];
        }
    }
    return 'unknown'
}

function burnify(param, forceRange, round) {
    return numberExpand(param.split('|').slice(1), forceRange, round);
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

const fix_apiname = { GnarBig: "Gnar"}


console.log('Hello');

fs.mkdirSync('./src/api/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

fs.mkdirSync('./public/api/champion', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

//https://ddragon.leagueoflegends.com/realms/na.json
await fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then(response => { return response.json(); })
    .then(onVersionResponse);
