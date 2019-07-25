/// 
/// #######################################################################################
/// 
/// This script will procees the data from stage1 && save it to the final verseion.
/// run import_stage1.js first to make the *.stage1.json files
/// 
/// usage: import_stage2.js help
/// usage: import_stage2.js
/// 
/// #######################################################################################

const fs = require('fs');

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

let failed_champ_count = 0
let fail_count = 0
let warn_count = 0
let warn_champs = new Object();
let known_values = new Object();
let known_keys = []


function simple_riot(spell) {
  return {
    'name': spell['name'],
    'description': spell['description'],
    'image': spell['image'],
  }
}

function handle_riot_spell(cexport, riot) {
  // cexport['riot'] = riot
  cexport['id'] = riot['id']
  cexport['riotName'] = riot['name']
  // cexport['description'] = riot['description']
  // cexport['tooltip'] = riot['tooltip']
  // cexport['leveltip'] = riot['leveltip']
  cexport['maxrank'] = riot['maxrank']
  // cexport['cooldown'] = riot['cooldown']
  // cexport['cooldownBurn'] = riot['cooldownBurn']
  // cexport['cost'] = riot['cost']
  // cexport['costBurn'] = riot['costBurn']
  // cexport['datavalues'] = riot['datavalues']
  // cexport['effect'] = riot['effect']
  // cexport['effectBurn'] = riot['effectBurn']
  // cexport['vars'] = riot['vars']
  // cexport['costType'] = riot['costType']
  cexport['maxammo'] = parseInt(riot['maxammo'])
  // cexport['range'] = riot['range']
  // cexport['rangeBurn'] = riot['rangeBurn']
  cexport['image'] = riot['image']
  // cexport['resource'] = riot['resource']
}

function wikia(value) {
  return value
}

function intify(value) {
  if (value == "")
    return 0
  if (typeof (value) !== "number") {
    warn_count += 1
    log.warning('type mismatch. expected int but got ' + value)
    value = wikia(value)
  }
  return value
}

function boolify(value) {
  if (value == "")
    return false
  if (typeof (value) !== "boolean") {
    warn_count += 1
    log.warning('type mismatch. expected bool but got ' + value)
    value = wikia(value)
  }
  return value
}

function boolishify(value) {
  if (value == "") {
    return false
  }
  if (value == 'Special' || value == 'Unknown')
    return value
  if (typeof (value) !== "boolean") {
    warn_count += 1
    log.warning('type mismatch. expected bool but got ' + value)
    value = wikia(value)
  }
  return value
}

function stringify(value) {
  if (typeof (value) !== "string") {
    log.info('type mismatch. expected string but got %d will auto wrap', value)
    value = value.toString();
  }
  else {
    value = wikia(value)
  }
  return value
}
function otherify(value) {
  if (typeof (value) !== "string")
    value = wikia(value)
  return value
}

function burnify(param, forceRange, round) {
  // from matchreplace.js
  const regex = /([\d./*\-+()]+) to ([\d./*\-+()]+)( [\d]+)?/;
  const clean = /([^\d./*\-+()]+)/g;
  const list = [];
  round = parseInt(round) || 3;

  for (const p of param.split(';')) {
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
      list.push(+parseFloat(eval(p.replace(clean, ''))).toFixed(round));
    }
  }
  // from matchreplace.js

  log.info(`burnify for value ${param} => output is ${list}`)
  return list.join(' / ');
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
function make_changes(changes) {
  let nums = changes.replace('V', '').replace('b', '.2').split('.')
  if (nums.length == 2)
    return '' + nums[0] + '.' + nums[1] + '.1';
  else
    return '' + nums[0] + '.' + nums[1] + '.' + nums[2];
}

function testing_spell(champ, skill) {
  const cexport = new Object();
  const riot = skill['riot']
  let last_warn_count = warn_count
  const is_passive = (skill["skill"] || 'x') == "I"
  const maxrank = is_passive ? 5 : Number(riot.maxrank)

  cexport['key'] = skill['key']
  if (!is_passive)
    handle_riot_spell(cexport, riot)
  else {
    cexport['riotName'] = riot['name']
    // cexport['description'] = riot['description']
    cexport['image'] = riot['image']
  }
  cexport['affects'] = otherify((skill["affects"] || null))

  // if (skill['_flavorsound'])
  //   cexport['_flavorsound'] = otherify(skill['_flavorsound'])
  if (skill['angle'])
    cexport['angle'] = otherify(skill['angle'])

  cexport['blurb'] = otherify((skill["blurb"] || ''))

  if (skill['callforhelp'])
    cexport['callforhelp'] = otherify(skill['callforhelp'])
  if (skill['cast_time'])
    cexport['cast_time'] = otherify(skill['cast_time'])

  cexport['champion'] = otherify((skill["champion"] || ''))

  if (skill['collision_radius'])
    cexport['collision_radius'] = otherify(skill['collision_radius'])


  // if (skill['cooldown'])
  if (!is_passive) {
    let old_val = ((skill["cooldown"] || '0')).toString() || '0'
    let value = old_val

    if (value.includes('{{'))
      value = burnify(value, maxrank)

    if (value != riot['cooldownBurn']) {
      log.warning(`cooldown is not matching riots: value ${old_val} as ${value} to riot ${riot['cooldown']} burn ${riot['cooldownBurn']}`)

      cexport['cooldown'] = riot['cooldown']
      cexport['cooldownBurn'] = riot['cooldownBurn']
    } else {
      let li = value.split('/')
      // if (li.length == 1)
      //cexport['cooldown'] = list(map(cast, [li[0]] * maxrank))
      // else
      //cexport['cooldown'] = list(map(cast, li))
      cexport['cooldownBurn'] = value
    }
  }
  else {
    cexport['cooldown'] = (skill["cooldown"] || null)
    cexport['cooldownBurn'] = (skill["cooldownBurn"] || null)
  }
  // if (type(cexport['cooldown']) != type([]) && type(cexport['cooldown']) != type(null))
  //   log.warning("cooldown is not a list: its a %s = %s", type(cexport['cooldown']), cexport['cooldown'])
  //   cexport['cooldown'] = null


  //if (skill['cost'])
  if (!is_passive) {
    let old_val = (skill["cost"] || '0').toString() || '0'
    let value = old_val

    if (value.includes('{{'))
      value = burnify(value, maxrank)

    if (value != riot['costBurn'])
      log.warning(`cost is not matching riots: value ${old_val} as ${value} to riot ${riot['cost']} burn ${riot['costBurn']}`)

    let li = value.split('/')
    // if (li.length == 1)
    //   cexport['cost'] = list(map(cast, [li[0]] * maxrank))
    // else
    //   cexport['cost'] = list(map(cast, li))
    cexport['costBurn'] = value
  }
  // if (isinstance(value, str) && 'ap' not in str(value))
  //   cexport['cost'] = riot['cost']
  //   cexport['costBurn'] = riot['costBurn']
  //   warn_count += 1
  //   log.warning('cost %s + riot %s burn %s', (skill["cost"] || null), riot['cost'],  riot['costBurn'])

  // else if (isinstance(value, int) && str(value) not in riot['costBurn'])
  //   cexport['cost'] = riot['cost']
  //   cexport['costBurn'] = riot['costBurn']
  //   warn_count += 1
  //   log.warning('cost is not matching riots: value %s riot %s burn %s', value, riot['cost'], riot['costBurn'])
  //   print('For spell %s - %s Cost mismatched: wiki = %s ---- riot: %s  burn: %s' % (champ['name'], skill['name'], value, riot['cost'], riot['costBurn']))
  //   input_num = input(": ") || "riot"
  //   print(input_num)

  // else:
  //   // use riot cost && costBurn
  //   cexport['cost'] = riot['cost']
  //   cexport['costBurn'] = riot['costBurn']

  //if (skill['costtype'])
  let value = (skill["costtype"] || 'no cost')
  if (value.toLowerCase() == 'energy')
    value = 'Energy'
  else if (value.toLowerCase() == 'mana')
    value = 'Mana'
  else if (value == '' || value.toLowerCase() == 'no cost')
    value = 'No cost'
  // else if ('charge' not in value.toLowerCase())
  // log.warning('Unknown costtype value %s',value)
  cexport['costtype'] = otherify(value)

  if (skill['custominfo'])
    cexport['custominfo'] = otherify(skill['custominfo'])
  if (skill['customlabel'])
    cexport['customlabel'] = otherify(skill['customlabel'])

  //if (skill['damagetype'])
  value = (skill["damagetype"] || 'null').toString();
  let damageTypes = []
  if (value.includes('agic'))
    damageTypes.push('magic')
  if (value.includes('hysical'))
    damageTypes.push('physical')
  if (value.includes('rue'))
    damageTypes.push('true')
  if (value.includes('one') || damageTypes.length == 0)
    damageTypes.push('null')

  cexport['damagetype'] = damageTypes.join( ' / ');
  cexport['damageTypes'] = damageTypes;

  cexport['description'] = [
    (skill["description"] || null),
    (skill["description2"] || null),
    (skill["description3"] || null),
    (skill["description4"] || null),
    (skill["description5"] || null),
  ].filter( el => el != null);

  if (skill['disp_name'])
    cexport['disp_name'] = otherify((skill["disp_name"] || skill['name']))
  if (skill['effect_radius'])
    cexport['effect_radius'] = otherify(skill['effect_radius'])
  if (skill['flavorsound'])
    cexport['flavorsound'] = otherify(skill['flavorsound'])
  if (skill['flavortext'])
    cexport['flavortext'] = otherify(skill['flavortext'])
  if (skill['grounded'])
    cexport['grounded'] = boolishify(skill['grounded'])

  cexport['icon'] = [
    (skill["icon"] || null),
    (skill["icon2"] || null),
    (skill["icon3"] || null),
    (skill["icon4"] || null),
    (skill["icon5"] || null),
  ].filter( el => el != null);

  if (skill['inner_radius'])
    cexport['inner_radius'] = otherify(skill['inner_radius'])
  if (skill['knockdown'])
    cexport['knockdown'] = boolishify(skill['knockdown'])

  cexport['leveling'] = [
    (skill["leveling"] || null),
    (skill["leveling2"] || null),
    (skill["leveling3"] || null),
    (skill["leveling4"] || null),
    (skill["leveling5"] || null),
  ].filter( el => el != null);
  // if (skill['missile_cast_range?'])
  //   cexport['missile_cast_range?'] = otherify(skill['missile_cast_range?'])
  if (skill['name'])
    cexport['name'] = otherify(skill['name'])
  if (skill['notes'])
    cexport['notes'] = otherify(skill['notes']).trim().split('\n')
  if (skill['occurrence'])
    cexport['occurrence'] = otherify(skill['occurrence'])
  if (skill['onhiteffects'])
    cexport['onhiteffects'] = otherify(skill['onhiteffects'])
  if (skill['parry'])
    if (skill['parry'] == 'partly')
      cexport['parry'] = 'Partly'
    else
      cexport['parry'] = boolishify(skill['parry'])
  if (skill['projectile'])
    value = skill['projectile']
  if (value == 'yasuo' || value == 'Yasuo')
    cexport['projectile'] = 'Yasuo'
  else
    cexport['projectile'] = boolishify(value)
  if (skill['range'])
    cexport['range'] = otherify(skill['range'])
  if (skill['recharge']) {
    let old_val = (skill["recharge"] || '0').toString() || '0'
    value = old_val

    if (value.includes('{{'))
      value = burnify(value, maxrank)

    // let li = value.split('/')
    // if (li.length == 1)
    //   cexport['recharge'] = list(map(cast, [li[0]] * maxrank))
    // else
    //   cexport['recharge'] = list(map(cast, li))
  }
  // if (skill['riot'])
  // cexport['riot'] = otherify(skill['riot'])
  if (skill['skill'])
    cexport['skill'] = otherify(skill['skill'])
  if (skill['speed'])
    cexport['speed'] = otherify(skill['speed'])
  if (skill['spelleffects'])
    // ['Area of Effect', 'Area of effect', 'Aoe', False, 'Single target', 'aoe', 'Heal', '', 
    // 'AoE', 'AoeDoT', 'DoT', 'Special', 'Shield', 'aoe, false', 'Single', 'AoEDoT', 'area of effect',
    // 'single', 'AoE, Heal', 'dot, single', 'area', 'DOT', 'Single Target', 'Multi-hit', 'aoedot', 'dot']
    cexport['spelleffects'] = otherify(skill['spelleffects'])
  if (skill['spelleffects-aoe'])
    cexport['spelleffects-aoe'] = otherify(skill['spelleffects-aoe'])
  if (skill['spelleffects-dot'])
    cexport['spelleffects-dot'] = otherify(skill['spelleffects-dot'])
  if (skill['spelleffects-false'])
    cexport['spelleffects-false'] = otherify(skill['spelleffects-false'])
  if (skill['spelleffects-single'])
    cexport['spelleffects-single'] = otherify(skill['spelleffects-single'])
  if (skill['spellshield'])
    cexport['spellshield'] = boolishify(skill['spellshield'])
  // if (skill['spellshields'])
  // cexport['spellshields'] = otherify(skill['spellshields'])
  if (skill['static'])
    cexport['static'] = otherify(skill['static'])
  if (skill['target_range'])
    cexport['target_range'] = otherify(skill['target_range'])
  if (skill['targeting'])
    cexport['targeting'] = otherify(skill['targeting'])
  if (skill['tether_radius'])
    cexport['tether_radius'] = otherify(skill['tether_radius'])
  // if (skill['video'])
  //   cexport['video'] = otherify(skill['video'])
  // if (skill['width'])
  //   cexport['width'] = otherify(skill['width'])
  // if (skill['yvideo'])
  //   cexport['yvideo'] = otherify(skill['yvideo'])
  // if (skill['yvideo2'])
  //   cexport['yvideo2'] = otherify(skill['yvideo2'])

  // if (cl_collect_known)
  // for key in skill:
  //   value = skill[key]
  //   if (key not in known_keys)
  //     known_keys.append(key)
  //   if (cl_collect_known && key not in ['riot', 'description', 'description2', 'description3', 'icon', 'blurb', 'notes', 'leveling'])
  //     if (key not in known_values)
  //       known_values[key] = []
  //     if (value not in known_values[key])
  //       known_values[key].append(value)

  if (last_warn_count != warn_count)
    warn_champs[champ['id']] = true
  log.warning(`There were ${warn_count - last_warn_count} warnings for ${skill['name']}`)
  return cexport

}
function take_spell(champ) {
  let spells = {};
  let did_fail = false
  for (const letter of ['i', 'q', 'w', 'e', 'r']) {
    for (const number of ['1', '2']) {
      const skillkey = 'wikia_skill_' + letter + number;

      if (skillkey in champ) {
        log.info('Taking spell: ' + skillkey)
        let skill = champ[skillkey];
        let last_desc;
        try {
          skill = champ[skillkey]
          skill['riot'] = champ["riot_spell_" + letter]

          if ('wikia_skill_' + letter + '2' in champ)
            skill['key'] = letter.toUpperCase() + number
          else
            skill['key'] = letter.toUpperCase()

          if (number == '1')
            last_desc = skill['description']
          else if (last_desc == skill['description']) {
            log.info('Removing spell because of duplicate description ' + last_desc)
            continue
          }
          spells[letter + number] = testing_spell(champ, skill)
        }
        catch {
          log.warning('Spells for champ failed at: ' + letter + " " + number)
          // log.warning(traceback.format_exc())
          did_fail = true
          fail_count += 1
        }
      }
    }
  }
  if (did_fail)
    failed_champ_count += 1
  log.warning('%s had errors', champ["name"])
  return spells;
}

const inpath = "./export/"
const cexportpath = "./public/api/champion/"
// Create folders as needed.
fs.mkdir('./export', (err) => { if (err) log.debug(err) })
let all_champs = {}

let files = fs.readdirSync(inpath);

files.forEach((file, i, array) => {
  let f = fs.readFileSync(inpath + file);
   
    //if (err) throw err;
    let champ = JSON.parse(f);
    //console.log(champ);
    let cexport = {
      // "api_versi;on": champ['api_version'],
      "patch": champ.wikia_champ.patch || "",
      "changes": make_changes(champ.wikia_champ.changes || "V0.0"),
      "id": champ["id"],
      "key": champ["key"],
      "name": champ["name"],
      "fullname": champ["wikia_champ"].fullname || champ["name"],
      "title": champ["title"],
      "image": champ["image"],  // maybe change?
      // "skins": champ["skins"],
      // "lore": champ["lore"],
      // "blurb": champ["blurb"],
      // "allytips": champ["allytips"],
      // "enemytips": champ["enemytips"],
      "tags": champ["tags"],
      "resource": champ["partype"],  // renamed to resource
      // "resource": champ["wikia_champ"]["resource"] || "Mana",
      "herotype": champ["wikia_champ"]["herotype"] || "",  // fix Zoe
      "alttype": champ["wikia_champ"]["alttype"] || "",
      "be_cost": champ["wikia_champ"]["be"] || 0,
      "rp_cost": champ["wikia_champ"]["rp"] || 0,
      "adaptivetype": champ["wikia_champ"]["adaptivetype"] || "magic",
      "info": champ["info"],
      // "stats": champ["stats"],
      "i_displayname": (champ["wikia_champ"]["skill_i"].toString()).replace(/;/g, " / "),
      "q_displayname": (champ["wikia_champ"]["skill_q"].toString()).replace(/;/g, " / "),
      "w_dispalyname": (champ["wikia_champ"]["skill_w"].toString()).replace(/;/g, " / "),
      "e_dispalyname": (champ["wikia_champ"]["skill_e"].toString()).replace(/;/g, " / "),
      "r_dispalyname": (champ["wikia_champ"]["skill_r"].toString()).replace(/;/g, " / "),

      // "simple_skills": {
      //   "i": champ["riot_spell_i"],
      //   "q": simple_riot(champ["riot_spell_q"]),
      //   "w": simple_riot(champ["riot_spell_w"]),
      //   "e": simple_riot(champ["riot_spell_e"]),
      //   "r": simple_riot(champ["riot_spell_r"]),
      // }

    };
    all_champs[cexport["id"]] = {
      "id": cexport["id"],
      "key": cexport["key"],
      "name": cexport["name"],
      "title": cexport["title"],
      "changes": cexport["changes"],
      "resource": cexport["resource"],
      "stats": champ['stats'],
    }
    cexport['complex_skills'] = take_spell(champ);

    let filename = cexportpath + cexport["id"] + '.json';
    fs.writeFile(filename, JSON.stringify(cexport, null, 2), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("File " + filename + " was saved!");

    });
  //});
});

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

// let all_champs_2 = {}
// const sortedd_champs = all_champs.items
// for k in sorted(all_champs.items(), key=lambda item: item[1]['name']):
//   all_champs_2[k[0]] = k[1]

  // if (cl_collect_known)
  //   known_keys.sort()
  //   log.warning('known_keys %s', str(known_keys))
  //   for k in known_values:
  //     log.warning('%s = %s', k, str(known_values[k]))


