///
/// This script will download champion data from 
/// the league wikia (https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki)
/// because the data from the riot api is missing some details.
///
/// All Champs are save as json in ./export/{{ChampionId}}.pass1.json
///
/// usage: node import_stage1.js help
/// usage: node import_stage1.js list
/// usage: node import_stage1.js all
/// usage: node import_stage1.js [champion ids...]
///

const fs = require('fs');
const request = require('request');
const he = require('he');

const noReedoHrefs = new Set();
function fetch_wikia(url, callback) {
  console.log("Fetching (chomp): %s", url);
  request(url, (err, res, body) => {
    if (err) return console.warn('Bad request: ' + err.toString());
    // if (noReedoHrefs.has(res.href)) return console.warn('Url is the same as one before. skipping ' + res.href)
    // noReedoHrefs.add(res.href);
    const content = body.match(/<textarea[^>]*>([\s\S]*)<\/textarea>/m);
    if (!content)
      return console.warn('Unknown page found for ' + url);
    callback(he.decode(content[1]));
  });
}
function make_changes(changes) {
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
// might call callback on r2 before r1 is saved. 
function chain_skills(cexport, champ_name, calback) {
  champ_name = champ_name.replace(/ /g, '_');
  try_take_skill('I', cexport.wikia_champ.skill_i, cexport, champ_name, () => {
    try_take_skill('Q', cexport.wikia_champ.skill_q, cexport, champ_name, () =>
      try_take_skill('W', cexport.wikia_champ.skill_w, cexport, champ_name, () => {
        try_take_skill('E', cexport.wikia_champ.skill_e, cexport, champ_name, () => {
          try_take_skill('R', cexport.wikia_champ.skill_r, cexport, champ_name, calback);
        })
      })
    )
  })
}

const noRepeatDesc = new Set();
function try_take_skill(letter, value, cexport, champ_name, callback) {
  if (!value) return;
  let skillsplit = value.toString().split(";")
  for (let skillnum = 0; skillnum < skillsplit.length; skillnum++) {
    const isFinalCall = skillnum === skillsplit.length - 1;
    const element = skillsplit[skillnum];
    const skill_name = element.trim().replace(/ /g, "_")
    const url = `https://leagueoflegends.fandom.com/wiki/Template:Data_${champ_name}/${skill_name}?action=edit`
    fetch_wikia(url, (data) => {
      let skillObj = wikiaSourceToObj(data);
      let valid = true;
      if (skillObj.description) {
        if (noRepeatDesc.has(skillObj.description)) {
          console.warn('Description is the same as one before. Skipping', skill_name, skillObj.description)
          valid = false;
        } else
          noRepeatDesc.add(skillObj.description);
      }
      if (valid) {
        skillObj.skillkey = letter.toUpperCase();
        skillObj.skillid = letter.toLowerCase() + (skillnum + 1).toString();
        cexport.skills[skillObj.skillid] = skillObj;
      }
      if (callback && isFinalCall)
        callback();
    });
  }
}

if (process.argv.length <= 2) {
  console.log("WARNING champion id to download is required but not supplied");
  console.log("usage: node %s <champion ids...|all|list|help>", process.argv[1]);
  process.exit(1);
}
const clarg = process.argv[2]
if (clarg == "help" || clarg == "-h" || clarg == "--help") {
  console.log("usage: node %s <champion ids...|all|list|help>", process.argv[1])
  process.exit(0)
}
const all = (clarg == 'all');

const champsList = process.argv.slice(2).join(',').split(",")
console.log('Command Line Args: ', champsList)


fs.mkdir('./export', (err) => { if (err) console.info(err) })


const realmsUrl = "https://ddragon.leagueoflegends.com/realms/na.json";
/// Get the latest version from /realms/na.json
request(realmsUrl, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  const cdn = body.cdn;
  const version = body.v;
  const lang = body.l;
  console.log("using ddragon version:", version);

  const championFull = `${cdn}/${version}/data/${lang}/championFull.json`;

  fs.writeFile(`./public/api/version.json`, JSON.stringify({
    v: version,
    l: lang,
    cdn: cdn,
  }, null, 2), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file ./public/api/version.json was saved!");
  });
  console.log("Fetching (json): %s", championFull)
  request(championFull, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log("File got %s", championFull)

    if (clarg == "list") {
      console.log(`List of champion for lol patch ${version}: `, Object.keys(body.data).join(' '))
      return;
    }
    // let champtions = {};
    for (const keyid in body.data) {
      if (!all && !champsList.includes(keyid)) continue;
      const champ = body.data[keyid];
      console.log('Taking: ', keyid);

      fetch_wikia(`https://leagueoflegends.fandom.com/wiki/Template:Data_${champ.name}?action=edit`, (data) => {
        console.log("File got (wikia) ", champ.name);
        let rootObj = default_export(champ);

        let champObj = wikiaSourceToObj(data);
        champObj.changes = make_changes(champObj.changes || "V0.0")
        rootObj.wikia_champ = champObj

        rootObj.skills = {};
        chain_skills(rootObj, champ.name, () => {
          // champtions[keyid] = cexport
          fs.writeFile(`./export/${keyid}.pass1.json`, JSON.stringify(rootObj, null, 2), function (err) {
            if (err) {
              return console.log(err);
            }
            console.log(`The file './export/${keyid}.pass1.json' was saved!`);
          });
        });
      });
    }
  });
})

function wikiaSourceToObj(data) {
  if(data.length < 3){
    console.warn("Missing data. No data found");
    return {};
  }
  let obj = new Object();
  const dataSplit = data.trim().slice(2, data.length - 3).split("\n|");
  let isFirstLine = true;
  for (const line of dataSplit) {
    if (isFirstLine) {
      // line === "{{{{{1<noinclude>|Ability data</noinclude>}}}|Terrashape|{{{2|}}}|{{{3|}}}|{{{4|}}}|{{{5|}}}"
      const match = line.match(/noinclude>}}}\|([^|]*)\|/);
      obj["name"] =  match[1];
      console.log("Setting name from to",  match[1]);
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