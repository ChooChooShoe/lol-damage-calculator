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
  warn(msg) {
    console.log(`WARN: ${msg}`)
  }
  error(msg) {
    console.log(`ERROR: ${msg}`)
  }
}
const log = new Log('stage1.log', 0);
const noReedoHrefs = new Set();
function fetch_wikia(url, callback) {
  log.info("Fetching (chomp): %s", url)
  request(url, (err, res, body) => {
    if (err) return log.warn('Bad request: ' + err.toString());
    // if (noReedoHrefs.has(res.href)) return log.warn('Url is the same as one before. skipping ' + res.href)
    // noReedoHrefs.add(res.href);
    const content = body.match(/<textarea[^>]*>([\s\S]*)<\/textarea>/m);
    if (!content)
      return log.warn('Unknown page found for ' + url);
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
  }
}
function cast(s) {
  s = s.trim();
  if (s === '')
    return ''
  if (!isNaN(Number(s)))
    return Number(s)
  if (parseFloat(s))
    return parseFloat(s)
  if (s == "true" || s == "True")
    return true;
  if (s == "false" || s == "False")
    return false;
  return s;
}
// might call callback on r2 before r1 is saved. 
function chain_skills(cexport, champ_name, calback) {
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
    const isfianl = skillnum === skillsplit.length - 1;
    const element = skillsplit[skillnum];
    const skill_name = element.trim().replace(" ", "_")
    const url = `https://leagueoflegends.fandom.com/wiki/Template:Data_${champ_name}/${skill_name}?action=edit`
    fetch_wikia(url, (data) => {
      const lines = data.split('\n')
      const skillobj = {}
      let last_key = '_preamble'
      for (let index = 0; index < lines.length; index++) {
        const line = lines[index].trim();
        if (!line || line === "" || line.startsWith("}}")) {
          log.debug('Skipping line: ' + line)
          continue;
        }
        else if (line.startsWith('{{') && !skillobj.name) {
          const s = line.split('|')[2] || 'No Name';
          skillobj['name'] = s.replace('-->', '');
          last_key = 'name'
        }
        else if (line.startsWith('|') && line.includes("=")) {
          let split = line.split("=")
          let key = split[0].trim().replace("|", "", 1).replace(' ', '_')
          let value = split.slice(1).join('=').trim()
          skillobj[key] = cast(value)
          last_key = key
        }
        else {
          log.debug('backtracing key to ' + last_key + ' adding ' + line)
          skillobj[last_key] = (skillobj[last_key] || '') + '\n' + line
        }
      }
      let valid = true;
      if (skillobj.description) {
        if (noRepeatDesc.has(skillobj.description)) {
          log.warn('Description is the same as one before. Skipping ' + skill_name)
          valid = false;
        } else
          noRepeatDesc.add(skillobj.description);
      }
      if (valid) {
        skillobj.skillkey = letter.toUpperCase();
        skillobj.skillid = letter.toLowerCase() + (skillnum + 1).toString();
        cexport.skills[skillobj.skillid] = skillobj;
      }
      if (callback && isfianl)
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
  log.info("usage: node %s <champion ids...|all|list|help>", process.argv[1])
  process.exit(0)
}
const all = (clarg == 'all');

const champsList = process.argv.slice(2).join(',').split(",")
log.info('Command Line Args: ' + champsList)


fs.mkdir('./export', (err) => { if (err) log.debug(err) })


const realmsUrl = "https://ddragon.leagueoflegends.com/realms/na.json";
/// Get the latest version from /realms/na.json
request(realmsUrl, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  const cdn = body.cdn;
  const version = body.v;
  const lang = body.l;
  log.info("using ddragon version:", version);

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
  log.info("Fetching (json): %s", championFull)
  request(championFull, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }

    if (clarg == "list") {
      log.info(`List of champion for lol patch ${version}: ` + Object.keys(body.data).join(' '))
      return;
    }
    // let champtions = {};
    for (const keyid in body.data) {
      if (!all && !champsList.includes(keyid)) continue;
      const champ = body.data[keyid];
      log.info('Taking: ' + keyid);

      fetch_wikia(`https://leagueoflegends.fandom.com/wiki/Template:Data_${champ.name}?action=edit`, (wikia_champ) => {
        let cexport = default_export(champ);
        let lines = wikia_champ.split('\n');
        let champObj = {}
        for (let index = 0; index < lines.length; index++) {
          const line = lines[index].trim();
          if (!line || line === "" || line.startsWith("}}") || line.startsWith('{{')) {
            log.info('Skipping line: ' + line)
            continue;
          }
          else if (line.startsWith('|') && line.includes("=")) {
            let split = line.split("=")
            let key = split[0].trim().replace("|", "", 1).replace(' ', '_')
            let value = split.slice(1).join('=').trim()
            champObj[key] = cast(value)
          } else {
            const lineNumber = "line_" + (index + 1)
            log.warn('Unknown line: "' + lineNumber + '" value ' + line)
            champObj[lineNumber] = line
          }
        }
        champObj["changes"] = make_changes(champObj["changes"] || "V0.0")
        cexport.wikia_champ = champObj

        cexport.skills = {};
        chain_skills(cexport, champ.name, () => {
          // champtions[keyid] = cexport
          fs.writeFile(`./export/${keyid}.pass1.json`, JSON.stringify(cexport, null, 2), function (err) {
            if (err) {
              return console.log(err);
            }
            console.log("The file was saved!");
          });
        });
      });
    }
  });
})