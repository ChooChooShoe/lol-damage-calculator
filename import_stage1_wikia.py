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
import json

import os

from html.parser import HTMLParser

if len(sys.argv) == 1:
    print("error: champion id to download is required but not supplied")
    print("usage:", sys.argv[0], "<champion ids...|all|list|help>")
    sys.exit(1)
else:
    clarg = sys.argv[1]
    if clarg == "help" or clarg == "-h" or clarg == "--help":
        print("usage:", sys.argv[0], "<champion ids...|all|list|help>")
        sys.exit(0)
    champsList = ",".join(sys.argv[1:]).split(",")


if not os.path.exists("export"):
    print("creating dir: export")
    os.makedirs("export")


class MyHTMLParser(HTMLParser):
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
        r = requests.get(url)
        print("Fetching (chomp):", r.url)
        if r.status_code != 200:
            print("Bad request:", url, "gave code", r.status_code)
            self.reset()
            return ""
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
                    for lineNumber, line in enumerate(wikia_skill.splitlines(), 1):
                        lineNumber = "line_" + str(lineNumber)
                        line = line.strip()
                        
                        if line.startswith('|') and "=" in line:
                            split = line.split("=")
                            key = split[0].strip().replace("|", "", 1)
                            value = '='.join(split[1:]).strip()
                            skillobj[key] = cast(value)
                        else:
                            skillobj[lineNumber] = line
                    export["wikia_skill_{}{}".format(letter, skillnum)] = skillobj
        return True
    return False


# Use the latest league version.
version = "9.5.1"

url = "https://ddragon.leagueoflegends.com/cdn/{}/data/en_US/championFull.json".format(
    version
)
print("Fetching (json):", url)
champion_json = requests.get(url).json()

if clarg == "list":
    print("List of champion for lol patch "+version+":")

champtions = {}
for keyid in champion_json["data"]:
    if clarg == "list":
        print(keyid, end=" ")
        continue
    if clarg != "all" and keyid not in champsList:
        continue
    champ = champion_json["data"][keyid]
    export = {
        "api_version": "9.5.1",
        "timestamp": "2019-03-14T17:08:00+00:00", # yikes, im lazy
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
        lineNumber = "line_" + str(lineNumber)
        line = line.strip()
        if line.startswith('|') and "=" in line:
            split = line.split("=")
            key = split[0].strip().replace("|", "", 1)
            value = '='.join(split[1:]).strip()
            champObj[key] = cast(value)
            # Each skill gets an object
            try_take_skill(key, value, export)
        else:
            champObj[lineNumber] = line
    # for line in lines
    export["wikia_champ"] = champObj

    champtions[keyid] = export
    with open("./export/" + keyid + ".pass1.json", "w") as file:
        print("Writing file:", "./export/" + keyid + ".json")
        file.write(json.dumps(export))

if clarg == "list":
    print()
