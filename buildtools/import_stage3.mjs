/// 
/// #######################################################################################
/// 
/// This script makes indevidual champion models for each.
/// 
/// usage: import_stage3.js help
/// usage: import_stage3.js
/// 
/// #######################################################################################

import fs from 'fs';
import matchReplaceSpellEffects from '../src/javascript/matchreplace.mjs';

/// Simple Logger
class Log {
    constructor(filename, minlevel) {
        this.filename = filename;
        this.minlevel = minlevel || 0;
    }
    info(msg, opt) {
        if (opt) console.log(`INFO: ${msg}`, opt)
        else console.log(`INFO: ${msg}`)
    }
    debug(msg) {
        console.log(`DEBUG: ${msg}`)
    }
    warning(msg) {
        console.log(`WARN: ${msg}`)
    }
    error(msg) {
        console.log(`ERROR: ${msg}`)
    }
}
const log = new Log('stage1.log', 0);

const inpath = "./export/";
const outpath = "./public/api/champion/";

// Create folders as needed.
fs.mkdir(outpath, (err) => { if (err) log.debug(err) })

let all_champs = {};
let files = fs.readdirSync(inpath);

files.forEach((filename, i, array) => {
    log.info("file ", filename);

    try {
        let f = fs.readFileSync(inpath + filename);
        let champ = JSON.parse(f);

        const model = {
            patch: champ.wikia_champ.patch || "",
            changes: buildChangesField(champ.wikia_champ.changes || "V0.0"),
            id: champ.id,
            key: champ.key,
            name: champ.name,
            // fullname: champ.wikia_champ.fullname,
            title: champ.title,
            image: champ.image,
            // skins: champ["skins"],
            // lore: champ["lore"],
            // blurb: champ["blurb"],
            // allytips: champ["allytips"],
            // enemytips: champ["enemytips"], 
            tags: champ.tags,
            resource: champ.partype,  // renamed to resource
            herotype: champ.wikia_champ.herotype || "",  // fix Zoe
            alttype: champ.wikia_champ.alttype || "",
            rangetype: champ.wikia_champ.rangetype || "Ranged",
            be_cost: champ.wikia_champ.be || 0,
            rp_cost: champ.wikia_champ.rp || 0,
            adaptivetype: champ.wikia_champ.adaptivetype || "magic",
            info: champ.info,
            stats: champ.stats,

        };
        model.skills = {};
        model.skillcount = 0;
        for (const skillid in champ.skills) {
            const riotSpell = wikiaSkillIdToRiotSpell(skillid, champ);
            const skill = champ.skills[skillid];
            stackData(skill, ["description", "leveling"]);
            model.skillcount += 1;
            const is_passive = skillid.startsWith('i');
            model.skills[skillid] = buildSkill(skill, riotSpell, is_passive, champ, model);
        }

        all_champs[model.id] = {
            "id": model.id,
            // "key": model.key,
            "name": model.name,
            "title": model.title,
            "changes": model.changes,
            "resource": model.resource,
            "stats": champ.stats,
        }

        let outfilename = outpath + model["id"] + '.json';
        fs.writeFile(outfilename, JSON.stringify(model, null, 2), function (err) {
            if (err) {
                return console.log(err);
            }
            log.info("File " + outfilename + " was saved!");
        });
    } catch (error) {
        log.error(error);
    }

});

function buildChangesField(changes) {
    let nums = changes.replace('V', '').replace('b', '.2').split('.')
    if (nums.length == 2)
        return '' + nums[0] + '.' + nums[1] + '.1';
    else
        return '' + nums[0] + '.' + nums[1] + '.' + nums[2];
}


function buildSkill(skilldata, riotSpell, is_passive, champ, model) {
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

    };
    if (skilldata.name !== riotSpell.name)
        log.info("Name mismatch wikia: [" + skilldata.name + "] and riot: [" + riotSpell.name + "]");


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
            log.warning(`cost is not matching riots: value ${old_val} as ${value} to riot ${riotSpell['cost']} burn ${riotSpell['costBurn']}`)

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
            log.warning(`cooldown is not matching riots: value ${old_val} as ${value} to riot ${riotSpell['cooldown']} burn ${riotSpell['cooldownBurn']}`)

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
                    log.info(subeff.title + " ====> " + subeff.base_progression);
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

function wikiaSkillIdToRiotSpell(skillId, champ) {
    switch (skillId) {
        case 'q1':
        case 'q2':
        case 'q3':
            return champ.riot_spells[0];
        case 'w1':
        case 'w2':
        case 'w3':
            return champ.riot_spells[1];
        case 'e1':
        case 'e2':
        case 'e3':
            return champ.riot_spells[2];
        case 'r1':
        case 'r2':
        case 'r3':
            return champ.riot_spells[3];
        case 'i1':
        case 'i2':
        case 'i3':
        default:
            return champ.riot_passive;
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
                log.warning(msg);
            }
        }
    }
    // from matchreplace.js

    log.info(`burnify for value ${param} => output is ${list}`)
    return list;
}

/// Sort all_champs by name.
let all_champs_2 = {}
let sorteted = Object.entries(all_champs).sort(function (a, b) {
    if (a[1].name < b[1].name) { return -1; }
    if (a[1].name > b[1].name) { return 1; }
    return 0;
});
for (let k in sorteted) {
    all_champs_2[sorteted[k][0]] = sorteted[k][1];
}
let filename = './public/api/ChampionList.json';
fs.writeFile(filename, JSON.stringify(all_champs_2, null, 2), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("File " + filename + " was saved!");
});
