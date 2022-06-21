
import fs from 'fs';
import { matchReplaceSpellEffects, numberExpand } from '../src/javascript/matchreplace.mjs';
import { saveFile } from './fetch_utils.mjs';

console.log('Validataing Data from data_fetch');

fs.mkdirSync('./public/api/champion/', { recursive: true }, (err) => { if (err && err.code !== 'EEXIST') console.info(err) })

fs.readdir('./public/api/champion/', (err, files) => {
    files.forEach(file => {
        fs.readFile('./public/api/champion/' + file, (err, data) => {
            if (err) throw err;
            let champObj = JSON.parse(data);
            if (validateChamp('./public/api/champion/' + file, file, champObj))
                saveFile('./public/api/champion/' + file, champObj)
        });
    });
});


function validateChamp(filepath, file, champObj) {
    let ret = false;
    for (const i in champObj.skills) {
        ret = ret || validateSkill(champObj, champObj.skills[i], i);
    }
    return ret;
}
function validateSkill(champObj, skilldata, index) {
    for (let eff of skilldata.effects) {
        console.log(eff.raw);
        const re = matchReplaceSpellEffects(eff.raw, skilldata, {notext:true})
        console.log('vars',re.vars,'\n');
    }
    return false;
}