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


regex = re.compile(
    r"\{\{\{\{\{1<noinclude>\|Ability data</noinclude>\}\}\}\|([\S\s]+)\|\{\{\{2\|\}\}\}\|\{\{\{3\|\}\}\}\|\{\{\{4\|\}\}\}\|\{\{\{5\|\}\}\}")

failed_champ_count = 0
fail_count = 0
warn_count = 0
warn_champs = dict()

def simple_riot(spell):
    return {
        'name': spell['name'],
        'description': spell['description'],
        'image': spell['image'],
    }


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
                    export['import_errors'] = []
                    if skill == {}:
                        export['import_errors'].append('empty spell')
                        print('warning: empty spell')
                    matchedKnown = False
                    matchedNotes = False
                    for x in skill:
                        key = x.replace(' ', '_')
                        value = skill[x]
                        if x.startswith('line_'):
                            if value == "" or value == r"}}":
                                pass
                            elif matchedNotes:
                                export['notes'].append(value)
                            elif x == 'line_1':
                                export['name'] = re.sub(regex, r"\1", value)
                            elif value.startswith(('-->', '*', r'{{')):
                                last_key = list(export.items())[-1][0]
                                print('info: backtracing', key, 'to', last_key, 'adding value', value)
                                last =  export[last_key]
                                if type(last) == type([]):
                                    last.append(value)
                                else:
                                    export[last_key] = export[last_key] + '\n' + value
                            else:
                                print('warning: unknown line:', x, value)
                                export['import_errors'].append(x + ': ' + value)
                                warn_count += 1
                                warn_champs[champ['id']] = True
                        else:
                            if x == 'notes':
                                matchedNotes = True
                                matchedKnown = False
                                export[key] = []
                                if value != "":
                                    export[key].append(value)
                            else:
                                matchedNotes = False
                                matchedKnown = True
                                last_key = key
                                last_value = value
                                export[key] = value
                    
                    if export['import_errors'] == []:
                        export.pop('import_errors')
                    for key in export:
                        if len(key) > 16:
                            print('warn: long key found', key,export[key])
                            warn_count += 1
                            warn_champs[champ['id']] = True

                    spells[letter+num] = export
                except ValueError as e:
                    print('Spells for champ failed at: ', letter, num)
                    print(e)
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
            "herotype": champ["wikia_champ"].get("herotype", ""),  # fix Zoe
            "alttype": champ["wikia_champ"].get("alttype", ""),
            "rangetype": champ["wikia_champ"].get("rangetype", "Melee"),
            "be_cost": champ["wikia_champ"].get("be", 0),
            "rp_cost": champ["wikia_champ"].get("rp", 0),
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
