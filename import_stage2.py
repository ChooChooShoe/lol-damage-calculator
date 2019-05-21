#!/usr/bin/python

#######################################################################################
#
# This script will procees the data from stage1 and save it to the final verseion.
# run import_stage1_wikia.py first to make the *.stage1.json files
#
# usage: import_stage2.py help
# usage: import_stage2.py
#
#######################################################################################

import sys
import requests
import json
import glob
import os
import re
import traceback

from collections import OrderedDict
from html.parser import HTMLParser
from pathlib import Path

# os.remove("stage2.log")
import logging as log
log.basicConfig(filename='stage2.log', filemode='w',level=log.INFO)
# log.getLogger().addHandler(log.StreamHandler(sys.stdout))

if len(sys.argv) == 2:
    h = sys.argv[1]
    if h == "help" or h == "-h" or h == "--help":
        log.info("usage: %s", sys.argv[0])
        sys.exit(0)
cl_collect_known = False

regex = re.compile(
    r"\{\{\{\{\{1<noinclude>\|Ability data</noinclude>\}\}\}\|([\S\s]+)\|\{\{\{2\|\}\}\}\|\{\{\{3\|\}\}\}\|\{\{\{4\|\}\}\}\|\{\{\{5\|\}\}\}")

failed_champ_count = 0
fail_count = 0
warn_count = 0
warn_champs = dict()
known_values = dict()
known_keys = []


def simple_riot(spell):
    return {
        'name': spell['name'],
        'description': spell['description'],
        'image': spell['image'],
    }


def handle_riot_spell(export, riot):
    # export['riot'] = riot
    export['id'] = riot['id']
    export['riotName'] = riot['name']
    # export['description'] = riot['description']
    # export['tooltip'] = riot['tooltip']
    # export['leveltip'] = riot['leveltip']
    export['maxrank'] = riot['maxrank']
    # export['cooldown'] = riot['cooldown']
    # export['cooldownBurn'] = riot['cooldownBurn']
    # export['cost'] = riot['cost']
    # export['costBurn'] = riot['costBurn']
    # export['datavalues'] = riot['datavalues']
    # export['effect'] = riot['effect']
    # export['effectBurn'] = riot['effectBurn']
    # export['vars'] = riot['vars']
    # export['costType'] = riot['costType']
    export['maxammo'] = int(riot['maxammo'])
    # export['range'] = riot['range']
    # export['rangeBurn'] = riot['rangeBurn']
    export['image'] = riot['image']
    # export['resource'] = riot['resource']


def wikia(value):
    return value


def intify(value):
    if value == "":
        return 0
    if not isinstance(value, int):
        global warn_count
        warn_count += 1
        log.warning('type mismatch. expected int but got %d', value)
        value = wikia(value)
    return value


def boolify(value):
    if value == "":
        return False
    if not isinstance(value, bool):
        global warn_count
        warn_count += 1
        log.warning('type mismatch. expected bool but got %d', value)
        value = wikia(value)
    return value


def boolishify(value):
    if value == "":
        return False
    if value == 'Special' or value == 'Unknown':
        return value
    if not isinstance(value, bool):
        global warn_count
        warn_count += 1
        log.warning('type mismatch. expected bool but got %d', value)
        value = wikia(value)
    return value


def stringify(value):
    if not isinstance(value, str):
        log.info('type mismatch. expected string but got %d will auto wrap', value)
        value = str(value)
    else:
        value = wikia(value)
    return value

def otherify(value):
    if isinstance(value, str):
        value = wikia(value)
    return value

def burnify(value, maxrank):
    r = re.search(r'([\d./*\-+]+) to ([\d./*\-+]+)', value)
    result = ''
    if r != None:
        start = float(r.group(1))
        end = float(r.group(2))
        diff = (end - start) / 4.0
        if maxrank == 3:
            result = '%g/%g/%g' %(start, start + diff * 2, end)
        else:
            result = '%g/%g/%g/%g/%g' % (start, start + diff * 1, start + diff * 2, start + diff * 3, end)
    elif '%|health' in value:
        x = float(re.sub('[^0-9]','', value))
        if maxrank == 3:
            result = '%g%%/%g%%/%g%%' % (x, x, x)
        else:
            result = '%g%%/%g%%/%g%%/%g%%/%g%%' % (x, x, x, x, x)
    else:
        result = value[5:-2].replace('|', '/')
    log.debug('burnify for value %s at maxrank %s => output is %s', value, maxrank, result)
    return result

def cast(s):
    s = s.strip()
    try:
        return int(s)
    except ValueError:
        try:
            return float(s)
        except ValueError:
            if s == "True" or s == "true":
                return True
            elif s == "False" or s == "false":
                return False
            else:
                return s

def make_changes(changes):
    nums = changes.replace('V', '').replace('b', '.2').split('.')
    if len(nums) == 2:
        return nums[0] + '.' + nums[1] + '.1'
    else:
        return nums[0] + '.' + nums[1] + '.' + nums[2]

def testing_spell(champ, skill):
    global failed_champ_count
    global fail_count
    global warn_count
    global warn_champs
    global known_keys
    export = dict()
    riot = skill['riot']
    last_warn_count = warn_count
    is_passive = skill.get('skill', 'x') == "I"
    maxrank = 5 if is_passive else int(riot['maxrank'])

    export['key'] = skill['key']
    if not is_passive:
        handle_riot_spell(export, riot)
    else:
        export['riotName'] = riot['name']
        # export['description'] = riot['description']
        export['image'] = riot['image']

    export['affects'] = otherify(skill.get('affects', 'None'))

    # if '_flavorsound' in skill:
    #     export['_flavorsound'] = otherify(skill['_flavorsound'])
    if 'angle' in skill:
        export['angle'] = otherify(skill['angle'])

    export['blurb'] = otherify(skill.get('blurb', ''))

    if 'callforhelp' in skill:
        export['callforhelp'] = otherify(skill['callforhelp'])
    if 'cast_time' in skill:
        export['cast_time'] = otherify(skill['cast_time'])

    export['champion'] = otherify(skill.get('champion', ''))

    if 'collision_radius' in skill:
        export['collision_radius'] = otherify(skill['collision_radius'])
        

    # if 'cooldown' in skill:
    if not is_passive:
        old_val = str(skill.get('cooldown', '0')) or '0'
        value = old_val
        
        if r'{{' in value:
            value = burnify(value, maxrank)

        if value != riot['cooldownBurn']:
            log.warning('cooldown is not matching riots: value %s as %s to riot %s burn %s', old_val, value, riot['cooldown'], riot['cooldownBurn'])
        
            export['cooldown'] = riot['cooldown']
            export['cooldownBurn'] = riot['cooldownBurn']
        else:
            li = value.split('/')
            if len(li) == 1:
                export['cooldown'] = list(map(cast, [li[0]] * maxrank))
            else:
                export['cooldown'] = list(map(cast, li))
            export['cooldownBurn'] = value
        
    else:
        export['cooldown'] = skill.get('cooldown', None)
        export['cooldownBurn'] = skill.get('cooldownBurn', None)

    if type(export['cooldown']) != type([]) and type(export['cooldown']) != type(None):
        log.warning("cooldown is not a list: its a %s = %s", type(export['cooldown']), export['cooldown'])
        export['cooldown'] = None


    #if 'cost' in skill:
    if not is_passive:
        old_val = str(skill.get('cost', '0')) or '0'
        value = old_val
        
        if r'{{' in value:
            value = burnify(value, maxrank)

        if value != riot['costBurn']:
            log.warning('cost is not matching riots: value %s as %s to riot %s burn %s', old_val, value, riot['cost'], riot['costBurn'])
            
        li = value.split('/')
        if len(li) == 1:
            export['cost'] = list(map(cast, [li[0]] * maxrank))
        else:
            export['cost'] = list(map(cast, li))
        export['costBurn'] = value

    # if isinstance(value, str) and 'ap' not in str(value):
    #     export['cost'] = riot['cost']
    #     export['costBurn'] = riot['costBurn']
    #     warn_count += 1
    #     log.warning('cost %s + riot %s burn %s', skill.get('cost', None), riot['cost'],  riot['costBurn'])

    # elif isinstance(value, int) and str(value) not in riot['costBurn']:
    #     export['cost'] = riot['cost']
    #     export['costBurn'] = riot['costBurn']
    #     warn_count += 1
    #     log.warning('cost is not matching riots: value %s riot %s burn %s', value, riot['cost'], riot['costBurn'])
    #     print('For spell %s - %s Cost mismatched: wiki = %s ---- riot: %s  burn: %s' % (champ['name'], skill['name'], value, riot['cost'], riot['costBurn']))
    #     input_num = input(": ") or "riot"
    #     print(input_num)
        
    # else:
    #     # use riot cost and costBurn
    #     export['cost'] = riot['cost']
    #     export['costBurn'] = riot['costBurn']

    #if 'costtype' in skill:
    value = skill.get('costtype', 'no cost')
    if value.lower() == 'energy':
        value = 'Energy'
    elif value.lower() == 'mana':
        value = 'Mana'
    elif value == '' or value.lower() == 'no cost':
        value = 'No cost'
    elif 'charge' not in value.lower():
        log.warning('Unknown costtype value %s',value)
    export['costtype'] = otherify(value)

    if 'custominfo' in skill:
        export['custominfo'] = otherify(skill['custominfo'])
    if 'customlabel' in skill:
        export['customlabel'] = otherify(skill['customlabel'])
    
    #if 'damagetype' in skill:
    value = str(skill.get('damagetype', 'None'))
    damageTypes = []
    if 'agic' in value:
        damageTypes.append('magic')
    if 'hysical' in value:
        damageTypes.append('physical')
    if 'rue' in value:
        damageTypes.append('true')
    if 'one' in value or len(damageTypes) == 0:
        damageTypes.append('none')
        
    export['damagetype'] = ' / '.join(damageTypes).title()
    export['damageTypes'] = damageTypes

    export['description'] = list(filter(None, [
        skill.get('description', None),
        skill.get('description2', None),
        skill.get('description3', None),
        skill.get('description4', None),
        skill.get('description5', None),
    ]))

    if 'disp_name' in skill:
        export['disp_name'] = otherify(skill.get('disp_name', skill['name']))
    if 'effect_radius' in skill:
        export['effect_radius'] = otherify(skill['effect_radius'])
    if 'flavorsound' in skill:
        export['flavorsound'] = otherify(skill['flavorsound'])
    if 'flavortext' in skill:
        export['flavortext'] = otherify(skill['flavortext'])
    if 'grounded' in skill:
        export['grounded'] = boolishify(skill['grounded'])

    export['icon'] = list(filter(None, [
        skill.get('icon', None),
        skill.get('icon2', None),
        skill.get('icon3', None),
        skill.get('icon4', None),
        skill.get('icon5', None),
    ]))
    if 'inner_radius' in skill:
        export['inner_radius'] = otherify(skill['inner_radius'])
    if 'knockdown' in skill:
        export['knockdown'] = boolishify(skill['knockdown'])

    export['leveling'] = list(filter(None, [
        skill.get('leveling', None),
        skill.get('leveling2', None),
        skill.get('leveling3', None),
        skill.get('leveling4', None),
        skill.get('leveling5', None),
    ]))
    # if 'missile_cast_range?' in skill:
    #     export['missile_cast_range?'] = otherify(skill['missile_cast_range?'])
    if 'name' in skill:
        export['name'] = otherify(skill['name'])
    if 'notes' in skill:
        export['notes'] = otherify(skill['notes']).strip().split('\n')
    if 'occurrence' in skill:
        export['occurrence'] = otherify(skill['occurrence'])
    if 'onhiteffects' in skill:
        export['onhiteffects'] = otherify(skill['onhiteffects'])
    if 'parry' in skill:
        if skill['parry'] == 'partly':
            export['parry'] = 'Partly'
        else:
            export['parry'] = boolishify(skill['parry'])
    if 'projectile' in skill:
        value = skill['projectile']
        if value == 'yasuo' or value == 'Yasuo':
            export['projectile'] = 'Yasuo'
        else:
            export['projectile'] = boolishify(value)
    if 'range' in skill:
        export['range'] = otherify(skill['range'])
    if 'recharge' in skill:
        old_val = str(skill.get('recharge', '0')) or '0'
        value = old_val
        
        if r'{{' in value:
            value = burnify(value, maxrank)

        li = value.split('/')
        if len(li) == 1:
            export['recharge'] = list(map(cast, [li[0]] * maxrank))
        else:
            export['recharge'] = list(map(cast, li))

    # if 'riot' in skill:
        # export['riot'] = otherify(skill['riot'])
    if 'skill' in skill:
        export['skill'] = otherify(skill['skill'])
    if 'speed' in skill:
        export['speed'] = otherify(skill['speed'])
    if 'spelleffects' in skill:
        # ['Area of Effect', 'Area of effect', 'Aoe', False, 'Single target', 'aoe', 'Heal', '', 
        # 'AoE', 'AoeDoT', 'DoT', 'Special', 'Shield', 'aoe, false', 'Single', 'AoEDoT', 'area of effect',
        # 'single', 'AoE, Heal', 'dot, single', 'area', 'DOT', 'Single Target', 'Multi-hit', 'aoedot', 'dot']
        export['spelleffects'] = otherify(skill['spelleffects'])
    if 'spelleffects-aoe' in skill:
        export['spelleffects-aoe'] = otherify(skill['spelleffects-aoe'])
    if 'spelleffects-dot' in skill:
        export['spelleffects-dot'] = otherify(skill['spelleffects-dot'])
    if 'spelleffects-false' in skill:
        export['spelleffects-false'] = otherify(skill['spelleffects-false'])
    if 'spelleffects-single' in skill:
        export['spelleffects-single'] = otherify(skill['spelleffects-single'])
    if 'spellshield' in skill:
        export['spellshield'] = boolishify(skill['spellshield'])
    if 'spellshields' in skill:
        pass #export['spellshields'] = otherify(skill['spellshields'])
    if 'static' in skill:
        export['static'] = otherify(skill['static'])
    if 'target_range' in skill:
        export['target_range'] = otherify(skill['target_range'])
    if 'targeting' in skill:
        export['targeting'] = otherify(skill['targeting'])
    if 'tether_radius' in skill:
        export['tether_radius'] = otherify(skill['tether_radius'])
    # if 'video' in skill:
    #     export['video'] = otherify(skill['video'])
    # if 'width' in skill:
    #     export['width'] = otherify(skill['width'])
    # if 'yvideo' in skill:
    #     export['yvideo'] = otherify(skill['yvideo'])
    # if 'yvideo2' in skill:
    #     export['yvideo2'] = otherify(skill['yvideo2'])

    if cl_collect_known:
        for key in skill:
            value = skill[key]
            if key not in known_keys:
                known_keys.append(key)
            if cl_collect_known and key not in ['riot', 'description', 'description2', 'description3', 'icon', 'blurb', 'notes', 'leveling']:
                if key not in known_values:
                    known_values[key] = []
                if value not in known_values[key]:
                    known_values[key].append(value)
                
    if last_warn_count != warn_count:
        warn_champs[champ['id']] = True
        log.warning('There were %d warnings for %s', warn_count - last_warn_count, skill['name'])
    return export


def take_spell(champ, spells):
    global failed_champ_count
    global fail_count
    global warn_count
    global warn_champs

    did_fail = False
    for letter in ['i', 'q', 'w', 'e', 'r']:
        for num in ['1', '2', '3', '4', '5', '6', '7']:
            skillkey = 'wikia_skill_'+letter+num
            if skillkey in champ:
                log.info('Taking spell: %s', skillkey)
                try:
                    skill = champ[skillkey]
                    skill['riot'] = champ["riot_spell_"+letter]

                    if 'wikia_skill_'+letter+'2' in champ:
                        skill['key'] = letter.upper() + num
                    else:
                        skill['key'] = letter.upper()

                    if num == '1':
                        last_desc = skill['description']
                    elif last_desc == skill['description']:
                        log.info('Removing spell because of duplicate description %s', last_desc)
                        continue
                    spells[letter+num] = testing_spell(champ, skill)
                except:
                    log.warning('Spells for champ failed at: %s %s', letter, num)
                    log.warning(traceback.format_exc())
                    did_fail = True
                    fail_count += 1

    if did_fail:
        failed_champ_count += 1
        log.warning('%s had errors', champ["name"])


inpath = Path("./export")
exportpath = Path("./public/api/champion/")
# Create folders as needed.
exportpath.mkdir(parents=True,exist_ok=True)
# os.chdir("./export")
all_champs = {}
for filename in inpath.glob("*.pass1.json"):
    export = {}
    with open(filename, "r",encoding='UTF-8') as file:
        log.info("Processing: %s", filename)
        champ = json.load(file)
        export = {
            "api_version": champ['api_version'],
            "patch": champ["wikia_champ"].get("patch", ""),
            "changes": make_changes(champ["wikia_champ"].get("changes", "V0.0")),
            "id": champ["id"],
            "key": champ["key"],
            "name": champ["name"],
            "fullname":  champ["wikia_champ"].get("fullname", champ["name"]),
            "title": champ["title"],
            "image": champ["image"],  # maybe change?
            # "skins": champ["skins"],
            # "lore": champ["lore"],
            # "blurb": champ["blurb"],
            # "allytips": champ["allytips"],
            # "enemytips": champ["enemytips"],
            "tags": champ["tags"],
            "resource": champ["partype"],  # renamed to resource
            # "resource": champ["wikia_champ"].get("resource", "Mana"),
            "herotype": champ["wikia_champ"].get("herotype", ""),  # fix Zoe
            "alttype": champ["wikia_champ"].get("alttype", ""),
            "be_cost": champ["wikia_champ"].get("be", 0),
            "rp_cost": champ["wikia_champ"].get("rp", 0),
            "adaptivetype": champ["wikia_champ"].get("adaptivetype", "magic"),
            "info": champ["info"],
            # "stats": champ["stats"],
            "i_displayname": champ["wikia_champ"]["skill_i"].replace(";", " / "),
            "q_displayname": champ["wikia_champ"]["skill_q"].replace(";", " / "),
            "w_dispalyname": champ["wikia_champ"]["skill_w"].replace(";", " / "),
            "e_dispalyname": champ["wikia_champ"]["skill_e"].replace(";", " / "),
            "r_dispalyname": champ["wikia_champ"]["skill_r"].replace(";", " / "),

            # "simple_skills": {
            #     "i": champ["riot_spell_i"],
            #     "q": simple_riot(champ["riot_spell_q"]),
            #     "w": simple_riot(champ["riot_spell_w"]),
            #     "e": simple_riot(champ["riot_spell_e"]),
            #     "r": simple_riot(champ["riot_spell_r"]),
            # }

        }
        spells = {}
        take_spell(champ, spells)
        export['complex_skills'] = spells

    all_champs[export["id"]] = {
            "id": export["id"],
            "key": export["key"],
            "name": export["name"],
            "title": export["title"],
            "changes": export["changes"],
            "resource": export["resource"],
            "stats": champ['stats'],
    }
    newfilename = exportpath / (export["id"] + '.json')
    # Remove old exports
    # (Path("./export/") / (export["id"] + '.json')).unlink()
    # Save to new '/api/champion/Id.json' style
    with open(newfilename, "w") as file:
        file.write(json.dumps(export, indent=4, sort_keys=False))

all_champs_2 = {}
for k in sorted(all_champs.items(), key=lambda item: item[1]['name']):
    all_champs_2[k[0]] = k[1]

with open(Path('public/api') / 'ChampionList.json', "w") as file:
    file.write(json.dumps(all_champs_2, indent=2, sort_keys=False))
log.info('Complete!')
log.info('Champion with erorrs %s: total errors %s', failed_champ_count, fail_count)
log.info('Warnings: %s', warn_count)
for c in warn_champs:
    log.warning(c)

if cl_collect_known:
    known_keys.sort()
    log.warning('known_keys %s', str(known_keys))
    for k in known_values:
        log.warning('%s = %s', k, str(known_values[k]))
