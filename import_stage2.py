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

if len(sys.argv) == 2:
    h = sys.argv[1]
    if h == "help" or h == "-h" or h == "--help":
        print("usage:", sys.argv[0], "")
        sys.exit(0)
cl_collect_known = True

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
    export['riot'] = riot
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
        print('warning: type mismatch. expected int but got', value)
        value = wikia(value)
    return value


def boolify(value):
    if value == "":
        return False
    if not isinstance(value, bool):
        global warn_count
        warn_count += 1
        print('warning: type mismatch. expected bool but got', value)
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
        print('warning: type mismatch. expected bool but got', value)
        value = wikia(value)
    return value


def stringify(value):
    if not isinstance(value, str):
        print('info: type mismatch. expected string but got', value, 'will auto wrap')
        value = str(value)
    else:
        value = wikia(value)
    return value

def otherify(value):
    if isinstance(value, str):
        value = wikia(value)
    return value

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
    if not is_passive:
        handle_riot_spell(export, riot)

    if '_flavorsound' in skill:
        export['_flavorsound'] = otherify(skill['_flavorsound'])
    if 'affects' in skill:
        export['affects'] = otherify(skill['affects'])
    if 'angle' in skill:
        export['angle'] = otherify(skill['angle'])
    if 'blurb' in skill:
        export['blurb'] = otherify(skill['blurb'])
    if 'callforhelp' in skill:
        export['callforhelp'] = otherify(skill['callforhelp'])
    if 'cast_time' in skill:
        export['cast_time'] = otherify(skill['cast_time'])
    if 'champion' in skill:
        export['champion'] = otherify(skill['champion'])
    if 'collision_radius' in skill:
        export['collision_radius'] = otherify(skill['collision_radius'])
    if 'cooldown' in skill:
        if not is_passive:
            print('debug: cooldown', skill['cooldown'], 'riot',
                  riot['cooldown'], 'riotBurn', riot['cooldownBurn'])
        export['cooldown'] = skill['cooldown']
    if 'cost' in skill:
        value = skill['cost']
        if value == "":
            value = 0
        if isinstance(value, str) and 'ap' not in str(value):
            export['cost'] = riot['cost']
            export['costBurn'] = riot['costBurn']
            warn_count += 1
            print('warning: cost is non-standard value', value,
                  'riot cost', riot['cost'], 'riot burn', riot['costBurn'])
        elif isinstance(value, int) and str(value) not in riot['costBurn']:
            export['cost'] = riot['cost']
            export['costBurn'] = riot['costBurn']
            warn_count += 1
            print('warning: cost is not matching riots: value', value,
                  'riot cost', riot['cost'], 'riot burn', riot['costBurn'])
        else:
            # use riot cost and costBurn
            export['cost'] = riot['cost']
            export['costBurn'] = riot['costBurn']
    #if 'costtype' in skill:
    value = skill.get('costtype', 'No cost')
    if value == 'energy':
        value = 'Energy'
    elif value == 'mana':
        value = 'Mana'
    elif value == '':
        value = 'No cost'
    export['costtype'] = otherify(value)
    print('damagetype', export['costtype'])

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
        export['disp_name'] = otherify(skill['disp_name', skill['name']])
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
    if 'missile_cast_range?' in skill:
        export['missile_cast_range?'] = otherify(skill['missile_cast_range?'])
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
        export['recharge'] = otherify(skill['recharge'])
    if 'riot' in skill:
        export['riot'] = otherify(skill['riot'])
    if 'skill' in skill:
        export['skill'] = otherify(skill['skill'])
    if 'speed' in skill:
        export['speed'] = otherify(skill['speed'])
    if 'spelleffects' in skill:
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
        export['spellshields'] = otherify(skill['spellshields'])
    if 'static' in skill:
        export['static'] = otherify(skill['static'])
    if 'target_range' in skill:
        export['target_range'] = otherify(skill['target_range'])
    if 'targeting' in skill:
        export['targeting'] = otherify(skill['targeting'])
    if 'tether_radius' in skill:
        export['tether_radius'] = otherify(skill['tether_radius'])
    if 'video' in skill:
        export['video'] = otherify(skill['video'])
    if 'width' in skill:
        export['width'] = otherify(skill['width'])
    if 'yvideo' in skill:
        export['yvideo'] = otherify(skill['yvideo'])
    if 'yvideo2' in skill:
        export['yvideo2'] = otherify(skill['yvideo2'])

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
        print('There were', warn_count - last_warn_count,
              'warning(s) for', skill['name'])
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
                print('Taking spell:', skillkey)
                try:
                    skill = champ[skillkey]
                    export = OrderedDict()
                    export['riot'] = champ["riot_spell_"+letter]
                    for x in skill:
                        key = x.replace(' ', '_')
                        value = skill[x]
                        if x.startswith('line_'):
                            if value == "" or value == r"}}":
                                pass
                            elif x == 'line_1':
                                export['name'] = re.sub(regex, r"\1", value)
                            else:
                                last_key = list(export.items())[-1][0]
                                print('info: backtracing', key, 'to',
                                      last_key, 'adding value', value)
                                export[last_key] = export[last_key] + \
                                    '\n' + value
                        else:
                            export[key] = value

                    spells[letter+num] = testing_spell(champ, export)
                except:
                    print('Spells for champ failed at: ', letter, num)
                    print(traceback.format_exc())
                    did_fail = True
                    fail_count += 1

    if did_fail:
        failed_champ_count += 1
        print('warning:', champ["name"], 'had errors')


os.chdir("./export")
for filename in glob.glob("*.pass1.json"):
    export = {}
    with open(filename, "r") as file:
        print("Processing:", filename)
        champ = json.load(file)
        export = {
            "id": champ["id"],
            "key": champ["key"],
            "name": champ["name"],
            "fullname":  champ["wikia_champ"].get("fullname", ""),
            "title": champ["title"],
            "image": champ["image"],  # maybe change?
            "tags": champ["tags"],
            "resource": champ["partype"],  # renamed to resource
            # "resource": champ["wikia_champ"].get("resource", "Mana"),
            "herotype": champ["wikia_champ"].get("herotype", ""),  # fix Zoe
            "alttype": champ["wikia_champ"].get("alttype", ""),
            "patch": champ["wikia_champ"].get("patch", ""),
            "changes": champ["wikia_champ"].get("changes", ""),
            "be_cost": champ["wikia_champ"].get("be", 0),
            "rp_cost": champ["wikia_champ"].get("rp", 0),
            "adaptivetype": champ["wikia_champ"].get("adaptivetype", "magic"),
            "info": champ["info"],
            "i_displayname": champ["wikia_champ"]["skill_i"].replace(";", " / "),
            "q_displayname": champ["wikia_champ"]["skill_q"].replace(";", " / "),
            "w_dispalyname": champ["wikia_champ"]["skill_w"].replace(";", " / "),
            "e_dispalyname": champ["wikia_champ"]["skill_e"].replace(";", " / "),
            "r_dispalyname": champ["wikia_champ"]["skill_r"].replace(";", " / "),

            "simple_skills": {
                "i": champ["riot_spell_i"],
                "q": simple_riot(champ["riot_spell_q"]),
                "w": simple_riot(champ["riot_spell_w"]),
                "e": simple_riot(champ["riot_spell_e"]),
                "r": simple_riot(champ["riot_spell_r"]),
            }

        }
        spells = {}
        take_spell(champ, spells)
        export['complex_skills'] = spells

    with open(filename.replace(".pass1", ""), "w") as file:
        file.write(json.dumps(export))

print('Complete!')
print('Champion with erorrs', failed_champ_count, ': total errors', fail_count)
print('warnings', warn_count)
for c in warn_champs:
    print(c, end=' ')
print()

if cl_collect_known:
    known_keys.sort()
    print('known_keys', known_keys)
    print('\n')
    for k in known_values:
        print(k, str(known_values[k]))
        print('\n')
