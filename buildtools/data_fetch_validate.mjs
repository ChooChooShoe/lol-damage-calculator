
import fs from 'fs';
import fetch from 'node-fetch';
import he from 'he';
import { default as matchReplaceSpellEffects, numberExpand } from '../src/javascript/matchreplace.mjs';
import JSON5 from 'json5';

console.log('Validataing Data from data_fetch');

fs.mkdirSync('./public/api/champion/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

fs.readdir('./public/api/champion/', (err, files) => {
    files.forEach(file => {
        fs.readFile('./public/api/champion/' + file, (err, data) => {
            if (err) throw err;
            let champObj = JSON.parse(data);
            validateChamp('./public/api/champion/' + file, file, champObj);
            saveFile('./public/api/champion/' + file, champObj)
        });
    });
});

function saveFile(path, data) {
    return fs.writeFile(path, JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log(`The file '${path}' was saved!`);
    });
}

function validateChamp(filepath, file, champObj) {
    for (const i in champObj.skills) {
        champObj.skills[i] = validateSkill(champObj, champObj.skills[i], i);
    }
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
function validateSkill(champObj, skilldata, index) {
    let skillout = skilldata;

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