#!/usr/bin/python

#######################################################################################
#
# This script will download champion data from 
# the league wikia (https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki)
# because the data from the riot api is missing some details.
#
# All Champs are save as json in ./export/{{ChampionId}}.pass1.json
#
# usage: import_stage1_wikia.py help
# usage: import_stage1_wikia.py list
# usage: import_stage1_wikia.py all
# usage: import_stage1_wikia.py [champion ids...]
#
#######################################################################################

import sys
import requests
import re
import json
import time
import os

from html.parser import HTMLParser

import logging as log
log.basicConfig(filename='stage1.log', filemode='w',level=log.DEBUG,format='%(levelname)s: %(message)s')

if len(sys.argv) == 1:
    print("WARNING champion id to download is required but not supplied")
    print("usage: %s <champion ids...|all|list|help>", sys.argv[0])
    sys.exit(1)
else:
    clarg = sys.argv[1]
    if clarg == "help" or clarg == "-h" or clarg == "--help":
        log.info("usage: %s <champion ids...|all|list|help>", sys.argv[0])
        sys.exit(0)
    champsList = ",".join(sys.argv[1:]).split(",")
    log.info('Command Line Args: '  + ' '.join(clarg))


if not os.path.exists("export"):
    log.info("creating dir: export")
    os.makedirs("export")


class MyHTMLParser(HTMLParser):
    def __init__(self):
        self.noRedoUrls = []
        super(MyHTMLParser, self).__init__()

    def handle_starttag(self, tag, attrs):
        if tag == "textarea":
            self.readAbility = True

    def handle_endtag(self, tag):
        if tag == "textarea":
            self.readAbility = False

    def handle_data(self, data):
        if self.readAbility:
            self.outputData += data + "\n"

    def reset(self):
        self.readAbility = False
        self.outputData = ""
        super(MyHTMLParser, self).reset()

    def chomp(self, url):
        log.info("Fetching (chomp): %s", url)
        r = requests.get(url)
        if r.status_code != 200:
            log.warning("Bad request for %s gave code: %s", r.url, r.status_code)
            self.reset()
            return ""
        if r.url in self.noRedoUrls:
            log.info("Url is the same as one before. skipping %s", r.url)
            self.reset()
            return ""
        self.noRedoUrls.append(r.url)
        self.feed(r.text)
        ret = parser.outputData
        self.reset()
        return ret


parser = MyHTMLParser()


def make_spell(spell):
    spell

    return spell


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
        return '' + nums[0] + '.' + nums[1] + '.1'
    else:
        return '' + nums[0] + '.' + nums[1] + '.' + nums[2]

regex = re.compile(r"\{\{\{\{\{1<noinclude>\|Ability data</noinclude>\}\}\}\|([\S\s]+)\|\{\{\{2\|\}\}\}\|\{\{\{3\|\}\}\}\|\{\{\{4\|\}\}\}\|\{\{\{5\|\}\}\}")

def try_take_skill(line, value, export):
    if line.startswith("skill_"):
        for letter in ["i", "q", "w", "e", "r"]:
            if line.startswith("skill_" + letter):
                for skillnum, skill_name in enumerate(value.split(";"), 1):
                    skill_name = skill_name.strip().replace(" ", "_")
                    url = "https://leagueoflegends.fandom.com/wiki/Template:Data_{}/{}?action=edit".format(
                        champ["name"], skill_name
                    )
                    wikia_skill = parser.chomp(url)
                    skillobj = {}
                    last_key = '_preamble'
                    for lineNumber, line in enumerate(wikia_skill.splitlines(), 1):
                        log.debug('skill line is %s', line)
                        lineNumber = "line_" + str(lineNumber)
                        line = line.strip()
                        if line == "" or line == r"}}":
                            pass
                        elif r'{{{1<noinclude>|Ability data</noinclude>}}}' in line:
                            skillobj['name'] = re.sub(regex, r"\1", line)
                            skillobj['name'] = re.sub('-->', '', skillobj['name'])
                            last_key = 'name'
                        elif line.startswith('|') and "=" in line:
                            split = line.split("=")
                            key = split[0].strip().replace("|", "", 1).replace(' ', '_')
                            value = '='.join(split[1:]).strip()
                            skillobj[key] = cast(value)
                            last_key = key
                        else:
                            # skillobj[lineNumber] = line
                            # last_key = list(skillobj.items())[-1][0]
                            log.debug('backtracing %s to %s adding "%s"', 'key', last_key, line)
                            skillobj[last_key] = skillobj.get(last_key,'') + '\n' + line
                    if skillobj != {}:
                        export["wikia_skill_{}{}".format(letter, skillnum)] = skillobj
        return True
    return False


# Use the latest league version.
version = "9.10.1"
timestamp = "2019-03-22T00:40:54+00:00"

url = "https://ddragon.leagueoflegends.com/cdn/{}/data/en_US/championFull.json".format(
    version
)
log.info("Fetching (json): %s", url)
champion_json = requests.get(url).json()

if clarg == "list":
    log.info("List of champion for lol patch "+version+":")

champtions = {}
for keyid in champion_json["data"]:
    if clarg == "list":
        log.info(keyid)
        print(keyid, end=" ")
        continue
    if clarg != "all" and keyid not in champsList:
        continue
    print('Taking: ' + keyid)
    champ = champion_json["data"][keyid]
    export = {
        "api_version": version,
        # "timestamp": timestamp, # yikes, im lazy
        "id": champ["id"],  # "RekSai"
        "key": champ["key"],  # "421"
        "name": champ["name"],  # "Rek'Sai"
        "title": champ["title"],  # "the Void Burrower"
        "image": champ["image"],
        "skins": champ['skins'],
        "lore": champ['lore'],
        "blurb": champ['blurb'],
        "allytips": champ['allytips'],
        "enemytips": champ['enemytips'],
        "tags": champ["tags"],  # [ "Fighter" ],
        "partype": champ["partype"],  # "Battlefury"
        "info": champ["info"],
        "stats": champ["stats"],
        "riot_spell_q": make_spell(champ["spells"][0]),
        "riot_spell_w": make_spell(champ["spells"][1]),
        "riot_spell_e": make_spell(champ["spells"][2]),
        "riot_spell_r": make_spell(champ["spells"][3]),
        "riot_spell_i": {
            "name": champ["passive"]["name"],
            "description": champ["passive"]["description"],
            "image": champ["passive"]["image"],
        },
        "riot_recommended": champ['recommended'],
    }
    url = "https://leagueoflegends.fandom.com/wiki/Template:Data_{}?action=edit".format(
        champ["name"]
    )
    wikia_champ = parser.chomp(url)

    lines = enumerate(wikia_champ.splitlines(), 1)
    champObj = {}
    for lineNumber, line in lines:
        log.info('Champ has line %s', line)
        lineNumber = "line_" + str(lineNumber)
        line = line.strip()
        if line == "" or line == r"}}":
            pass
        elif r'{{1<noinclude>|champion data</noinclude>}}' in line:
            pass
        elif line.startswith('|') and "=" in line:
            split = line.split("=")
            key = split[0].strip().replace("|", "", 1).replace(' ', '_')
            value = '='.join(split[1:]).strip()
            champObj[key] = cast(value)
            # Each skill gets an object
            try_take_skill(key, value, export)
        else:
            champObj[lineNumber] = line
    
    champObj["changes"] = make_changes(champObj.get("changes", "V0.0"))

    export["wikia_champ"] = champObj

    champtions[keyid] = export
    with open("./export/" + keyid + ".pass1.json", "w") as file:
        log.info("Writing file: ./export/%s.pass1.json", keyid)
        file.write(json.dumps(export, indent=2, sort_keys=False))
