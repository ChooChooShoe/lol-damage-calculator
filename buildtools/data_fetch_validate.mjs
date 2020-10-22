
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
        validateSkill(champObj, champObj.skills[i], i);
    }
}

function validateSkill(champObj, skilldata, index) {

    skilldata.effects = [];
    for (let leveling_index in skilldata.leveling) {
        let effect = {}
        effect.levelingtext = skilldata.leveling[leveling_index];
        // console.log('\n\n')
        let x = matchReplaceSpellEffects(effect.levelingtext, false, skilldata);
        effect.str = x.str;
        effect.vars = x.vars;

        if (x.vars.ap_progressions.length > 0) {
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
                    // console.log(subeff.title + " ====> " + subeff.base_progression);
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
        skilldata.effects[leveling_index] = effect;
    }
}