// This file is auto-generated on Tue, 16 Apr 2024 17:26:18 -0400.

import { SkillGenData } from '@/api/DataTypes';

// prettier-ignore
export type SkillName = 'Berserker Rage' | 'Undertow' | 'Tough It Out' | 'Reckless Swing' | 'Ragnarok';

export const Skills =  {
'Berserker Rage': {
  "name": "Berserker Rage",
  "displayName": "",
  "champion": "Olaf",
  "skill": "I",
  "range": "None",
  "targetRange": "None",
  "attackRange": "None",
  "collisionRadius": "None",
  "effectRadius": "None",
  "width": "None",
  "angle": "None",
  "innerRadius": "None",
  "tetherRadius": "None",
  "speed": "None",
  "castTime": "None",
  "cost": "None",
  "costtype": "",
  "static": "",
  "cooldown": "None",
  "cdstart": "",
  "ontargetcd": "",
  "ontargetcdstatic": "",
  "recharge": "",
  "customlabel": "",
  "custominfo": "",
  "details": [
    {
      "icon": "Berserker Rage.png",
      "blurb": "<span class=\"template_sbc\"><b>Innate:</b></span> <span data-param=\"\" data-champion=\"Olaf\" class=\"inline-image label-after champion-icon\" style=\"display:inline;white-space:pre;\" data-game=\"lol\" data-skin=\"Original\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a title=\"Olaf\" href=\"/wiki/Olaf/LoL\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"thumbborder lazyload\" data-image-key=\"Olaf_OriginalSquare.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802\" alt=\"Olaf\" data-image-name=\"Olaf OriginalSquare.png\" loading=\"lazy\" width=\"20\" height=\"20\" decoding=\"async\" data-relevant=\"0\"></a></span> <span style=\"white-space:normal;\"><a title=\"Olaf/LoL\" href=\"/wiki/Olaf/LoL\">Olaf</a></span></span> gains <span style=\"white-space:nowrap\"><a title=\"Attack speed\" href=\"/wiki/Attack_speed\"><img width=\"15\" alt=\"Attack speed icon\" decoding=\"async\" loading=\"lazy\" height=\"15\" class=\"lazyload\" data-image-key=\"Attack_speed_icon.png\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443\" data-image-name=\"Attack speed icon.png\"></a>&nbsp;<span style=\"color:orangered; white-space:normal\"><b>bonus</b> attack speed</span></span> and <span style=\"white-space:nowrap\"><a href=\"/wiki/Life_steal\" title=\"Life steal\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/76/Life_steal_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203537\" data-relevant=\"0\" loading=\"lazy\" alt=\"Life steal icon\" height=\"15\" data-image-key=\"Life_steal_icon.png\" width=\"15\" data-image-name=\"Life steal icon.png\" class=\"lazyload\" decoding=\"async\"></a>&nbsp;life steal</span> based on <span style=\"color: #1F995C; white-space:normal\">his <b>missing</b> health</span>.",
      "description": "<span class=\"template_sbc\"><b>Innate:</b></span> <b>Olaf</b> gains <span style=\"white-space:nowrap\"><a href=\"/wiki/Attack_speed\" title=\"Attack speed\"><img data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Attack_speed_icon.png\" alt=\"Attack speed icon\" decoding=\"async\" width=\"15\" height=\"15\" class=\"lazyload\" data-image-name=\"Attack speed icon.png\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443\"></a>&nbsp;<span style=\"color:orangered; white-space:normal\"><b>bonus</b> attack speed</span></span> and <span style=\"white-space:nowrap\"><a href=\"/wiki/Life_steal\" title=\"Life steal\"><img alt=\"Life steal icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" loading=\"lazy\" data-image-name=\"Life steal icon.png\" data-relevant=\"0\" class=\"lazyload\" height=\"15\" data-image-key=\"Life_steal_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/76/Life_steal_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203537\" width=\"15\"></a>&nbsp;<a href=\"/wiki/Life_steal\" title=\"Life steal\">life steal</a></span> based on <span style=\"color: #1F995C; white-space:normal\">his <b>missing</b> health</span>, up to <span style=\"color:orangered; white-space:normal\"><span data-bot_values=\"50;52.12;54.34;56.66;59.09;61.62;64.25;66.99;69.82;72.76;75.81;78.96;82.21;85.56;89.01;92.57;96.24;100\" data-bot_key=\"%\" data-useformula=\"50+(50/17)*(x-1)*(0.7025+0.0175*(x-1))\" class=\"pp-tooltip\" style=\"position:relative; border-bottom:1px dotted; cursor:help;\" data-top_values=\"\">50% − 100% (based on level)</span> <b>bonus</b> attack speed</span> and <span data-bot_values=\"8;8.72;9.48;10.27;11.09;11.95;12.85;13.78;14.74;15.74;16.77;17.85;18.95;20.09;21.27;22.48;23.72;25\" class=\"pp-tooltip\" data-useformula=\"8+(17/17)*(x-1)*(0.7025+0.0175*(x-1))\" data-bot_key=\"%\" data-top_values=\"\" style=\"position:relative; border-bottom:1px dotted; cursor:help;\">8% − 25% (based on level)</span> life steal at <span style=\"color: #1F995C; white-space:normal\">70% <b>missing</b> health</span>.",
      "leveling": []
    }
  ],
  "targeting": "Passive",
  "affects": "Self",
  "damagetype": "",
  "spelleffects": "",
  "spellshield": "",
  "projectile": "",
  "callforhelp": "",
  "grounded": "",
  "knockdown": "",
  "silence": "",
  "additional": "",
  "notes": "* No additional details.",
  "flavortext": "",
  "flavorsound": ""
},
'Undertow': {
  "name": "Undertow",
  "displayName": "",
  "champion": "Olaf",
  "skill": "Q",
  "range": "None",
  "targetRange": {
    "Both": [
      [
        425.0,
        1000.0
      ],
      " 425 / 1000\n"
    ]
  },
  "attackRange": "None",
  "collisionRadius": "None",
  "effectRadius": {
    "Both": [
      [
        100.0,
        250.0,
        300.0
      ],
      " 100 / 250 / 300\n"
    ]
  },
  "width": {
    "Both": [
      [
        180.0
      ],
      " 180\n"
    ]
  },
  "angle": "None",
  "innerRadius": "None",
  "tetherRadius": "None",
  "speed": {
    "Both": [
      [
        1600.0
      ],
      "1600\n"
    ]
  },
  "castTime": {
    "Both": [
      [
        0.25
      ],
      "0.25\n"
    ]
  },
  "cost": {
    "Both": [
      [
        50.0,
        55.0,
        60.0,
        65.0,
        70.0
      ],
      "50 / 55 / 60 / 65 / 70\n"
    ]
  },
  "costtype": "Mana",
  "static": "",
  "cooldown": {
    "Both": [
      [
        9.0
      ],
      "9\n"
    ]
  },
  "cdstart": "on-cast",
  "ontargetcd": "",
  "ontargetcdstatic": "",
  "recharge": "",
  "customlabel": "",
  "custominfo": "",
  "details": [
    {
      "icon": "Undertow.png",
      "blurb": "<span class=\"template_sbc\"><b>Active:</b></span> <span data-game=\"lol\" class=\"inline-image label-after champion-icon\" data-champion=\"Olaf\" data-skin=\"Original\" style=\"display:inline;white-space:pre;\" data-param=\"\"><span class=\"border\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Olaf/LoL\" title=\"Olaf\"><img height=\"20\" data-image-key=\"Olaf_OriginalSquare.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802\" alt=\"Olaf\" class=\"thumbborder lazyload\" data-image-name=\"Olaf OriginalSquare.png\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" decoding=\"async\" loading=\"lazy\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Olaf/LoL\" title=\"Olaf/LoL\">Olaf</a></span></span> throws an axe to the target location that deals <span style=\"color: #FF8C34; white-space:normal\">physical damage</span> to enemies it passes through, briefly <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Slow\" class=\"glossary\"><a href=\"/wiki/Slow\" title=\"Slow\"><img alt=\"Slow icon\" height=\"20\" data-image-name=\"Slow icon.png\" loading=\"lazy\" data-image-key=\"Slow_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-relevant=\"0\" class=\"lazyload\"></a> <a class=\"mw-redirect\" title=\"Slow\" href=\"/wiki/Slow\">slowing</a></span> them based on distance travelled. Enemy <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Champions\"><a title=\"Champion\" href=\"/wiki/Champion\"><img decoding=\"async\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Champion icon\" class=\"lazyload\" data-relevant=\"0\" data-image-name=\"Champion icon.png\" data-image-key=\"Champion_icon.png\" loading=\"lazy\" width=\"20\"></a> <a title=\"Champion\" href=\"/wiki/Champion\">champions</a></span> hit also have <span style=\"white-space:nowrap\"><a title=\"Armor penetration\" href=\"/wiki/Armor_penetration\"><img height=\"15\" data-relevant=\"0\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Armor_penetration_icon.png\" decoding=\"async\" width=\"15\" data-image-name=\"Armor penetration icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/64/Armor_penetration_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442\" loading=\"lazy\" alt=\"Armor penetration icon\"></a>&nbsp;<span style=\"color:yellow; white-space:normal\">reduced armor</span></span> for a few seconds.",
      "description": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Olaf</b> throws an axe to the target location that deals <span style=\"color: #FF8C34; white-space:normal\">physical damage</span> to enemies it passes through and <span data-game=\"lol\" data-tip=\"Slows\" style=\"white-space:pre; position:relative;\" class=\"glossary\"><a title=\"Slow\" href=\"/wiki/Slow\"><img decoding=\"async\" data-image-name=\"Slow icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"lazyload\" data-relevant=\"0\" height=\"20\" width=\"20\" data-image-key=\"Slow_icon.png\" alt=\"Slow icon\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744\"></a> <a title=\"Slow\" href=\"/wiki/Slow\" class=\"mw-redirect\">slows</a></span> them for <span data-top_label=\"distance traveled\" data-top_values=\"400;475;550;625;700;775;850;925;1000\" style=\"position:relative; border-bottom:1px dotted; cursor:help;\" class=\"pp-tooltip\" data-displayformula=\"1.5+(0.125 per 75 units traveled)\" data-bot_values=\"1.5;1.63;1.75;1.88;2;2.13;2.25;2.38;2.5\">1.<small>5</small> − 2.<small>5</small> (based on distance traveled)</span> seconds. Enemy <span data-tip=\"Champions\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" class=\"glossary\"><a title=\"Champion\" href=\"/wiki/Champion\"><img width=\"20\" data-image-name=\"Champion icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630\" class=\"lazyload\" data-relevant=\"0\" height=\"20\" data-image-key=\"Champion_icon.png\" alt=\"Champion icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" loading=\"lazy\"></a> <a href=\"/wiki/Champion\" title=\"Champion\">champions</a></span> hit are also inflicted with <span style=\"white-space:nowrap\"><a title=\"Armor penetration\" href=\"/wiki/Armor_penetration\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Armor_penetration_icon.png\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/64/Armor_penetration_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442\" class=\"lazyload\" loading=\"lazy\" data-relevant=\"0\" width=\"15\" alt=\"Armor penetration icon\" height=\"15\" data-image-name=\"Armor penetration icon.png\"></a>&nbsp;<span style=\"color:yellow; white-space:normal\">20% armor reduction</span></span> for 4 seconds.",
      "leveling": [
        [
          {
            "name": "Physical Damage:",
            "values": {
              "Both": [
                [
                  65.0,
                  115.0,
                  165.0,
                  215.0,
                  0.0
                ],
                "65 / 115 / 165 / 215 / 265 (+ 100% bonus AD)"
              ]
            },
            "values_html": "65 / 115 / 165 / 215 / 265 <span style=\"color:orange; white-space:normal\">(+ 100% <b>bonus</b> AD)</span>"
          }
        ],
        [
          {
            "name": "Slow:",
            "values": {
              "Both": [
                [
                  25.0,
                  30.0,
                  35.0,
                  40.0,
                  0.0
                ],
                "25 / 30 / 35 / 40 / 45%"
              ]
            },
            "values_html": "25 / 30 / 35 / 40 / 45%"
          }
        ]
      ]
    },
    {
      "icon": "",
      "blurb": "The axe remains in place during the cooldown, and <b>Olaf</b> can pick up the axe to reduce the <span style=\"white-space:nowrap\"><a href=\"/wiki/Cooldown\" title=\"Cooldown\"><img alt=\"Cooldown icon\" data-image-name=\"Cooldown icon.png\" decoding=\"async\" data-image-key=\"Cooldown_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" class=\"lazyload\" loading=\"lazy\" height=\"15\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027\" width=\"15\"></a>&nbsp;<b>total</b> cooldown</span>.",
      "description": "<i>Undertow</i> deals <span style=\"color: #FF8C34; white-space:normal\"><b>bonus</b> physical damage</span> against <span data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Monsters\"><a title=\"Monster\" href=\"/wiki/Monster\"><img loading=\"lazy\" width=\"20\" height=\"20\" data-image-name=\"Monster icon.png\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Monster_icon.png/revision/latest/scale-to-width-down/20?cb=20231028083627\" class=\"lazyload\" data-image-key=\"Monster_icon.png\" alt=\"Monster icon\"></a> <a href=\"/wiki/Monster\" title=\"Monster\">monsters</a></span>.",
      "leveling": [
        [
          {
            "name": "Monster Bonus Physical Damage:",
            "values": {
              "Both": [
                [
                  5.0,
                  10.0,
                  15.0,
                  20.0,
                  25.0
                ],
                "5 / 10 / 15 / 20 / 25"
              ]
            },
            "values_html": "5 / 10 / 15 / 20 / 25"
          },
          {
            "name": "Total Monster Damage:",
            "values": {
              "Both": [
                [
                  70.0,
                  125.0,
                  180.0,
                  235.0,
                  0.0
                ],
                "70 / 125 / 180 / 235 / 290 (+ 100% bonus AD)"
              ]
            },
            "values_html": "70 / 125 / 180 / 235 / 290 <span style=\"color:orange; white-space:normal\">(+ 100% <b>bonus</b> AD)</span>"
          }
        ]
      ]
    },
    {
      "icon": "",
      "blurb": "",
      "description": "The axe remains in place for a duration equal to <i>Undertow's</i> cooldown, briefly granting <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Sight\" class=\"glossary\"><a href=\"/wiki/Sight\" title=\"Sight\"><img width=\"20\" decoding=\"async\" data-image-key=\"Sight_icon.png\" class=\"lazyload\" data-relevant=\"0\" alt=\"Sight icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-image-name=\"Sight icon.png\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820\"></a> <a href=\"/wiki/Sight\" title=\"Sight\">sight</a></span> of its surroundings. <b>Olaf</b> can pick up the axe to reduce <i>Undertow's</i> <span style=\"white-space:nowrap\"><a title=\"Cooldown\" href=\"/wiki/Cooldown\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Cooldown icon\" width=\"15\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027\" class=\"lazyload\" data-image-name=\"Cooldown icon.png\" data-relevant=\"0\" data-image-key=\"Cooldown_icon.png\" loading=\"lazy\" height=\"15\" decoding=\"async\"></a>&nbsp;<b>current</b> cooldown</span> to <span class=\"basic-tooltip\" style=\"border-bottom:1px dotted gray;cursor:help;\" title=\"Affected by ability haste\">2.<small>5</small> seconds</span>, which resets the cooldown if that has already elapsed.",
      "leveling": []
    },
    {
      "icon": "",
      "blurb": "",
      "description": "<i>Undertow will cast at max range if cast beyond that. Nearby monsters are granted <span data-tip=\"Ghosting\" style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\"><a href=\"/wiki/Unit_collision\" title=\"Unit collision\"><img width=\"20\" data-image-key=\"Ghost.png\" data-relevant=\"0\" height=\"20\" class=\"lazyload\" decoding=\"async\" data-image-name=\"Ghost.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/20?cb=20180514003209\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Ghost\" loading=\"lazy\"></a> <a title=\"Unit collision\" href=\"/wiki/Unit_collision\">ghosting</a></span> upon Undertow's cast.</i>",
      "leveling": []
    }
  ],
  "targeting": "Location",
  "affects": "Enemies",
  "damagetype": "Physical",
  "spelleffects": "Aoe",
  "spellshield": "True",
  "projectile": "special",
  "callforhelp": "",
  "grounded": "",
  "knockdown": "",
  "silence": "",
  "additional": "",
  "notes": "* <i>Undertow</i> may hit additional targets upon landing, but not targets already struck in-flight.\n<ul><li><ul><li>The axe will land approximately 50 units further than <i>Undertow's</i> target range if cast below maximum range.</li></ul></li>\n<li>The axe is stopped prematurely upon encountering <span style=\"display:inline;white-space:pre;\" data-param=\"\" data-ability=\"Wind Wall\" data-game=\"lol\" data-champion=\"Yasuo\" class=\"inline-image label-after ability-icon\"><span class=\"border\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Yasuo/LoL#Wind_Wall\" title=\"Wind Wall\"><img class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" width=\"20\" data-image-name=\"Yasuo Wind Wall.png\" data-image-key=\"Yasuo_Wind_Wall.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/2/2c/Yasuo_Wind_Wall.png/revision/latest/scale-to-width-down/20?cb=20131122024151\" height=\"20\" alt=\"Wind Wall\" decoding=\"async\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Yasuo/LoL#Wind_Wall\" title=\"Yasuo/LoL\">Wind Wall</a></span></span> or <span data-champion=\"Braum\" data-param=\"\" style=\"display:inline;white-space:pre;\" data-ability=\"Unbreakable\" data-game=\"lol\" class=\"inline-image label-after ability-icon\"><span style=\"display:inline-block;position:relative;\" class=\"border\" data-width=\"20\"><a title=\"Unbreakable\" href=\"/wiki/Braum/LoL#Unbreakable\"><img width=\"20\" height=\"20\" class=\"thumbborder lazyload\" data-image-name=\"Braum Unbreakable.png\" data-image-key=\"Braum_Unbreakable.png\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/3/3f/Braum_Unbreakable.png/revision/latest/scale-to-width-down/20?cb=20170818001617\" alt=\"Unbreakable\" loading=\"lazy\"></a></span> <span style=\"white-space:normal;\"><a title=\"Braum/LoL\" href=\"/wiki/Braum/LoL#Unbreakable\">Unbreakable</a></span></span>, remaining on the ground upon collision.</li>\n<li>The timer for how long an axe stays on the ground does not begin until it has landed, thus it is possible to throw another axe before retrieving the first.</li>\n<li><b>Olaf</b> cannot pick up an enemy <b>Olaf's</b> axe on the ground.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>",
  "flavortext": "",
  "flavorsound": ""
},
'Tough It Out': {
  "name": "Tough It Out",
  "displayName": "",
  "champion": "Olaf",
  "skill": "W",
  "range": "None",
  "targetRange": "None",
  "attackRange": "None",
  "collisionRadius": "None",
  "effectRadius": "None",
  "width": "None",
  "angle": "None",
  "innerRadius": "None",
  "tetherRadius": "None",
  "speed": "None",
  "castTime": {
    "Both": [
      [
        0.0
      ],
      "none\n"
    ]
  },
  "cost": {
    "Both": [
      [
        50.0
      ],
      "50\n"
    ]
  },
  "costtype": "Mana",
  "static": "",
  "cooldown": {
    "Both": [
      [
        16.0,
        15.0,
        14.0,
        13.0,
        12.0
      ],
      "16 / 15 / 14 / 13 / 12\n"
    ]
  },
  "cdstart": "",
  "ontargetcd": "",
  "ontargetcdstatic": "",
  "recharge": "",
  "customlabel": "",
  "custominfo": "",
  "details": [
    {
      "icon": "Olaf Tough It Out.png",
      "blurb": "<span class=\"template_sbc\"><b>Active:</b></span> <span data-champion=\"Olaf\" style=\"display:inline;white-space:pre;\" data-game=\"lol\" data-param=\"\" data-skin=\"Original\" class=\"inline-image label-after champion-icon\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border\"><a href=\"/wiki/Olaf/LoL\" title=\"Olaf\"><img loading=\"lazy\" alt=\"Olaf\" decoding=\"async\" height=\"20\" width=\"20\" class=\"thumbborder lazyload\" data-relevant=\"0\" data-image-key=\"Olaf_OriginalSquare.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802\" data-image-name=\"Olaf OriginalSquare.png\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Olaf/LoL\" title=\"Olaf/LoL\">Olaf</a></span></span> gains tremendous <span style=\"white-space:nowrap\"><a title=\"Attack speed\" href=\"/wiki/Attack_speed\"><img width=\"15\" alt=\"Attack speed icon\" height=\"15\" decoding=\"async\" data-relevant=\"0\" loading=\"lazy\" data-image-name=\"Attack speed icon.png\" data-image-key=\"Attack_speed_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443\"></a>&nbsp;<span style=\"color:orangered; white-space:normal\"><b>bonus</b> attack speed</span></span> for a few seconds, and <span data-tip=\"Shield\" style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\"><a title=\"Shield\" href=\"/wiki/Shield\"><img height=\"20\" alt=\"Hybrid resistances icon\" decoding=\"async\" width=\"20\" data-image-key=\"Hybrid_resistances_icon.png\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Hybrid resistances icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Hybrid_resistances_icon.png/revision/latest/scale-to-width-down/20?cb=20170516021237\" loading=\"lazy\" class=\"lazyload\"></a> <a href=\"/wiki/Shield\" title=\"Shield\">shields</a></span> himself based on <span style=\"color: #1F995C; white-space:normal\">his <b>missing</b> health</span> for a short time.",
      "description": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Olaf</b> gains <span style=\"white-space:nowrap\"><a title=\"Attack speed\" href=\"/wiki/Attack_speed\"><img data-relevant=\"0\" data-image-name=\"Attack speed icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" height=\"15\" width=\"15\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443\" data-image-key=\"Attack_speed_icon.png\" class=\"lazyload\" decoding=\"async\" alt=\"Attack speed icon\"></a>&nbsp;<span style=\"color:orangered; white-space:normal\"><b>bonus</b> attack speed</span></span> for 5 seconds.",
      "leveling": [
        [
          {
            "name": "Bonus Attack Speed:",
            "values": {
              "Both": [
                [
                  40.0,
                  50.0,
                  60.0,
                  70.0,
                  0.0
                ],
                "40 / 50 / 60 / 70 / 80%"
              ]
            },
            "values_html": "40 / 50 / 60 / 70 / 80%"
          }
        ]
      ]
    },
    {
      "icon": "Olaf Tough It Out 2.png",
      "blurb": "",
      "description": "He also grants himself a <span data-game=\"lol\" data-tip=\"Shield\" style=\"white-space:pre; position:relative;\" class=\"glossary\"><a title=\"Shield\" href=\"/wiki/Shield\"><img height=\"20\" width=\"20\" data-image-key=\"Hybrid_resistances_icon.png\" class=\"lazyload\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Hybrid_resistances_icon.png/revision/latest/scale-to-width-down/20?cb=20170516021237\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-image-name=\"Hybrid resistances icon.png\" alt=\"Hybrid resistances icon\"></a> <a href=\"/wiki/Shield\" title=\"Shield\">shield</a></span> for 2.<small>5</small> seconds with an amount that is capped at <span style=\"color: #1F995C; white-space:normal\">70% <b>missing</b> health</span>.",
      "leveling": [
        [
          {
            "name": "Shield Strength:",
            "values": {
              "Both": [
                [
                  10.0,
                  40.0,
                  70.0,
                  100.0,
                  0.0
                ],
                "10 / 40 / 70 / 100 / 130 (+ 17.5% missing health)"
              ]
            },
            "values_html": "10 / 40 / 70 / 100 / 130 <span style=\"color: #1F995C; white-space:normal\">(+ 17.<small>5</small>% <b>missing</b> health)</span>"
          }
        ]
      ]
    },
    {
      "icon": "",
      "blurb": "",
      "description": "<i>Tough It Out <span data-tip=\"Basic attack reset\" class=\"glossary\" data-game=\"lol\" style=\"white-space:pre; position:relative;\"><a href=\"/wiki/Basic_attack#Resets\" title=\"Basic attack\"><img data-relevant=\"0\" decoding=\"async\" height=\"20\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Fiora_Bladework.png/revision/latest/scale-to-width-down/20?cb=20150721193304\" width=\"20\" data-image-key=\"Fiora_Bladework.png\" data-image-name=\"Fiora Bladework.png\" class=\"lazyload\" alt=\"Bladework\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a title=\"Basic attack\" href=\"/wiki/Basic_attack#Resets\">resets</a></span> <b>Olaf's</b> basic attack timer.</i>",
      "leveling": []
    }
  ],
  "targeting": "Auto",
  "affects": "Self",
  "damagetype": "",
  "spelleffects": "",
  "spellshield": "",
  "projectile": "",
  "callforhelp": "",
  "grounded": "",
  "knockdown": "",
  "silence": "",
  "additional": "",
  "notes": "* No additional details.",
  "flavortext": "",
  "flavorsound": ""
},
'Reckless Swing': {
  "name": "Reckless Swing",
  "displayName": "",
  "champion": "Olaf",
  "skill": "E",
  "range": "None",
  "targetRange": {
    "Both": [
      [
        325.0
      ],
      " 325\n"
    ]
  },
  "attackRange": "None",
  "collisionRadius": "None",
  "effectRadius": "None",
  "width": "None",
  "angle": "None",
  "innerRadius": "None",
  "tetherRadius": "None",
  "speed": "None",
  "castTime": {
    "Both": [
      [
        0.25
      ],
      "0.25\n"
    ]
  },
  "cost": {
    "Both": [
      [
        21.0,
        34.5,
        48.0,
        61.5,
        0.0
      ],
      "21 / 34.5 / 48 / 61.5 / 75 (+ 15% AD)\n"
    ]
  },
  "costtype": "<span style=\"color: #1F995C; white-space:normal\">Health</span>",
  "static": "",
  "cooldown": {
    "Both": [
      [
        11.0,
        10.0,
        9.0,
        8.0,
        7.0
      ],
      "11 / 10 / 9 / 8 / 7\n"
    ]
  },
  "cdstart": "",
  "ontargetcd": "",
  "ontargetcdstatic": "",
  "recharge": "",
  "customlabel": "",
  "custominfo": "",
  "details": [
    {
      "icon": "Reckless Swing.png",
      "blurb": "<span class=\"template_sbc\"><b>Active:</b></span> <span data-game=\"lol\" style=\"display:inline;white-space:pre;\" data-param=\"\" class=\"inline-image label-after champion-icon\" data-champion=\"Olaf\" data-skin=\"Original\"><span class=\"border\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Olaf/LoL\" title=\"Olaf\"><img data-relevant=\"0\" height=\"20\" decoding=\"async\" loading=\"lazy\" class=\"thumbborder lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Olaf\" data-image-name=\"Olaf OriginalSquare.png\" data-image-key=\"Olaf_OriginalSquare.png\" width=\"20\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Olaf/LoL\" title=\"Olaf/LoL\">Olaf</a></span></span> consumes <span style=\"color: #1F995C; white-space:normal\"><span style=\"white-space:nowrap\"><a href=\"/wiki/Health\" title=\"Health\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Health_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203537\" width=\"15\" data-image-key=\"Health_icon.png\" alt=\"Health icon\" class=\"lazyload\" data-image-name=\"Health icon.png\" decoding=\"async\" height=\"15\" data-relevant=\"0\"></a>&nbsp;health</span></span> to strike thunder onto the target enemy, dealing <span style=\"color: #F9966B; white-space:normal\">true damage</span>. If this kills the target, <b>Olaf</b> <span data-game=\"lol\" class=\"glossary\" data-tip=\"Heal\" style=\"white-space:pre; position:relative;\"><a title=\"Healing\" href=\"/wiki/Healing\"><img width=\"20\" data-image-name=\"Heal power icon.png\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" loading=\"lazy\" height=\"20\" data-image-key=\"Heal_power_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Heal_power_icon.png/revision/latest/scale-to-width-down/20?cb=20170909150244\" alt=\"Heal power icon\" class=\"lazyload\"></a> <a href=\"/wiki/Healing\" title=\"Healing\">heals</a></span> the <span style=\"white-space:nowrap\"><a title=\"Health\" href=\"/wiki/Health\"><img height=\"15\" alt=\"Health icon\" width=\"15\" loading=\"lazy\" class=\"lazyload\" decoding=\"async\" data-image-name=\"Health icon.png\" data-image-key=\"Health_icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Health_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203537\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a>&nbsp;<span style=\"color: #1F995C; white-space:normal\">health cost</span></span>.",
      "description": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Olaf</b> strikes thunder onto the target enemy, dealing <span style=\"white-space:nowrap\"><a title=\"True damage\" href=\"/wiki/True_damage\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/c0/Hybrid_penetration_icon.png/revision/latest/scale-to-width-down/15?cb=20171001102450\" decoding=\"async\" width=\"15\" class=\"lazyload\" data-image-name=\"Hybrid penetration icon.png\" alt=\"Hybrid penetration icon\" height=\"15\" data-image-key=\"Hybrid_penetration_icon.png\"></a>&nbsp;<span style=\"color: #F9966B; white-space:normal\">true damage</span></span>.",
      "leveling": [
        [
          {
            "name": "True Damage:",
            "values": {
              "Both": [
                [
                  70.0,
                  115.0,
                  160.0,
                  205.0,
                  0.0
                ],
                "70 / 115 / 160 / 205 / 250 (+ 50% AD)"
              ]
            },
            "values_html": "70 / 115 / 160 / 205 / 250 <span style=\"color:orange; white-space:normal\">(+ 50% AD)</span>"
          }
        ]
      ]
    },
    {
      "icon": "",
      "blurb": "Basic attacks <span style=\"white-space:nowrap\"><a title=\"Cooldown reduction\" href=\"/wiki/Cooldown_reduction\"><img height=\"15\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Cooldown reduction icon.png\" data-image-key=\"Cooldown_reduction_icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/95/Cooldown_reduction_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203444\" loading=\"lazy\" decoding=\"async\" width=\"15\" alt=\"Cooldown reduction icon\" class=\"lazyload\"></a>&nbsp;reduce</span> <i>Reckless Swing's</i> cooldown.",
      "description": "If <i>Reckless Swing</i> kills the target, <b>Olaf</b> <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Heals\"><a title=\"Healing\" href=\"/wiki/Healing\"><img data-image-name=\"Heal power icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Heal power icon\" loading=\"lazy\" data-image-key=\"Heal_power_icon.png\" height=\"20\" data-relevant=\"0\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Heal_power_icon.png/revision/latest/scale-to-width-down/20?cb=20170909150244\" decoding=\"async\" width=\"20\"></a> <a href=\"/wiki/Healing\" title=\"Healing\">heals</a></span> himself equal to the <span style=\"color: #1F995C; white-space:normal\"><span style=\"white-space:nowrap\"><a href=\"/wiki/Health\" title=\"Health\"><img decoding=\"async\" loading=\"lazy\" data-image-name=\"Health icon.png\" width=\"15\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Health_icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Health_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203537\" height=\"15\" alt=\"Health icon\"></a>&nbsp;health cost</span></span>.",
      "leveling": []
    },
    {
      "icon": "",
      "blurb": "",
      "description": "Basic attacks reduce <i>Reckless Swing's</i> <span style=\"white-space:nowrap\"><a href=\"/wiki/Cooldown\" title=\"Cooldown\"><img height=\"15\" class=\"lazyload\" decoding=\"async\" data-image-name=\"Cooldown icon.png\" data-image-key=\"Cooldown_icon.png\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027\" width=\"15\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" alt=\"Cooldown icon\"></a>&nbsp;cooldown</span> by 1 second, increased to 2 against monsters.",
      "leveling": []
    }
  ],
  "targeting": "Unit",
  "affects": "Enemies",
  "damagetype": "True",
  "spelleffects": "spell",
  "spellshield": "True",
  "projectile": "",
  "callforhelp": "true",
  "grounded": "",
  "knockdown": "",
  "silence": "",
  "additional": "",
  "notes": "* The health cost is equal to 30% of the <b>total</b> damage dealt by the ability.\n<ul><li><i>Reckless Swing</i> can be cast even if <b>Olaf</b> doesn't have the sufficient amount of health to pay for the health cost.\n<ul><li>As with all abilities with health costs, <i>Reckless Swing</i> will not reduce <b>Olaf's</b> health below <span style=\"color: #1F995C; white-space:normal\">1</span>.</li></ul></li>\n<li><i>Reckless Swing's</i> health refund is considered a <span data-tip=\"Heal\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\"><a title=\"Healing\" href=\"/wiki/Healing\"><img loading=\"lazy\" data-relevant=\"0\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" alt=\"Heal power icon\" width=\"20\" data-image-key=\"Heal_power_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Heal_power_icon.png/revision/latest/scale-to-width-down/20?cb=20170909150244\" class=\"lazyload\" data-image-name=\"Heal power icon.png\"></a> <a title=\"Healing\" href=\"/wiki/Healing\">heal</a></span> therefore it is affected by healing modifiers.</li></ul>\n<ul><li>If the target becomes <span data-tip=\"Untargetable\" data-game=\"lol\" style=\"white-space:pre; position:relative;\" class=\"glossary\"><a title=\"Untargetable\" href=\"/wiki/Untargetable\"><img height=\"20\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Untargetable_icon.png/revision/latest/scale-to-width-down/20?cb=20220206063243\" class=\"lazyload\" alt=\"Untargetable icon\" data-image-name=\"Untargetable icon.png\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-image-key=\"Untargetable_icon.png\" width=\"20\"></a> <a href=\"/wiki/Untargetable\" class=\"mw-redirect\" title=\"Untargetable\">untargetable</a></span>, <span data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Death\"><a title=\"Death\" href=\"/wiki/Death\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Death.png\" data-relevant=\"0\" width=\"20\" data-image-name=\"Death.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/c3/Death.png/revision/latest/scale-to-width-down/20?cb=20200415031113\" height=\"20\" decoding=\"async\" class=\"lazyload\" alt=\"Death\" loading=\"lazy\"></a> <a href=\"/wiki/Death\" title=\"Death\">dies</a></span>, or is too far away or no longer in <span data-tip=\"Sight\" data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\"><a title=\"Sight\" href=\"/wiki/Sight\"><img data-relevant=\"0\" alt=\"Sight icon\" width=\"20\" height=\"20\" data-image-name=\"Sight icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-image-key=\"Sight_icon.png\" class=\"lazyload\"></a> <a title=\"Sight\" href=\"/wiki/Sight\">sight</a></span> during the cast time, this ability will cancel but does not go on <span style=\"white-space:nowrap\"><a href=\"/wiki/Cooldown\" title=\"Cooldown\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027\" data-relevant=\"0\" data-image-name=\"Cooldown icon.png\" alt=\"Cooldown icon\" data-image-key=\"Cooldown_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" width=\"15\" height=\"15\" class=\"lazyload\" decoding=\"async\"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>",
  "flavortext": "",
  "flavorsound": ""
},
'Ragnarok': {
  "name": "Ragnarok",
  "displayName": "",
  "champion": "Olaf",
  "skill": "R",
  "range": "None",
  "targetRange": "None",
  "attackRange": "None",
  "collisionRadius": "None",
  "effectRadius": "None",
  "width": "None",
  "angle": "None",
  "innerRadius": "None",
  "tetherRadius": "None",
  "speed": "None",
  "castTime": {
    "Both": [
      [
        0.0
      ],
      "none\n"
    ]
  },
  "cost": {
    "Both": [
      [
        100.0
      ],
      "100\n"
    ]
  },
  "costtype": "mana",
  "static": "",
  "cooldown": {
    "Both": [
      [
        100.0,
        95.0,
        90.0,
        85.0,
        80.0
      ],
      "100 / 95 / 90 / 85 / 80\n"
    ]
  },
  "cdstart": "on-cast",
  "ontargetcd": "",
  "ontargetcdstatic": "",
  "recharge": "",
  "customlabel": "",
  "custominfo": "",
  "details": [
    {
      "icon": "false",
      "blurb": "<span class=\"template_sbc\"><b>Passive:</b></span> <span data-champion=\"Olaf\" data-skin=\"Original\" data-game=\"lol\" class=\"inline-image label-after champion-icon\" style=\"display:inline;white-space:pre;\" data-param=\"\"><span class=\"border\" style=\"display:inline-block;position:relative;\" data-width=\"20\"><a href=\"/wiki/Olaf/LoL\" title=\"Olaf\"><img height=\"20\" class=\"thumbborder lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802\" alt=\"Olaf\" data-image-key=\"Olaf_OriginalSquare.png\" data-image-name=\"Olaf OriginalSquare.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-relevant=\"0\" loading=\"lazy\" width=\"20\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Olaf/LoL\" title=\"Olaf/LoL\">Olaf</a></span></span> gains <span style=\"white-space:nowrap\"><a href=\"/wiki/Armor\" title=\"Armor\"><img class=\"lazyload\" alt=\"Armor icon\" width=\"15\" height=\"15\" decoding=\"async\" data-image-name=\"Armor icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Armor_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Armor_icon.png\" loading=\"lazy\"></a>&nbsp;<span style=\"color:yellow; white-space:normal\"><b>bonus</b> armor</span></span> and <span style=\"white-space:nowrap\"><a href=\"/wiki/Magic_resistance\" title=\"Magic resistance\"><img decoding=\"async\" width=\"15\" height=\"15\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Magic_resistance_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203539\" class=\"lazyload\" alt=\"Magic resistance icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-image-key=\"Magic_resistance_icon.png\" data-image-name=\"Magic resistance icon.png\"></a>&nbsp;<span style=\"color: #00FFFF; white-space:normal\"><b>bonus</b> magic resist</span></span>.",
      "description": "<span class=\"template_sbc\"><b>Passive:</b></span> <b>Olaf</b> gains <span style=\"white-space:nowrap\"><a title=\"Armor\" href=\"/wiki/Armor\"><img data-image-key=\"Armor_icon.png\" data-image-name=\"Armor icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Armor_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442\" alt=\"Armor icon\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"15\" decoding=\"async\" loading=\"lazy\" height=\"15\" data-relevant=\"0\"></a>&nbsp;<span style=\"color:yellow; white-space:normal\"><b>bonus</b> armor</span></span> and <span style=\"white-space:nowrap\"><a href=\"/wiki/Magic_resistance\" title=\"Magic resistance\"><img data-image-key=\"Magic_resistance_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Magic resistance icon\" data-relevant=\"0\" decoding=\"async\" loading=\"lazy\" width=\"15\" height=\"15\" data-image-name=\"Magic resistance icon.png\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Magic_resistance_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203539\"></a>&nbsp;<span style=\"color: #00FFFF; white-space:normal\"><b>bonus</b> magic resistance</span></span>.",
      "leveling": [
        [
          {
            "name": "Bonus Resistances:",
            "values": {
              "Both": [
                [
                  10.0,
                  15.0,
                  20.0,
                  25.0,
                  30.0
                ],
                "10 / 15 / 20 / 25 / 30"
              ]
            },
            "values_html": "10 / 15 / 20 / 25 / 30"
          }
        ]
      ]
    },
    {
      "icon": "Ragnarok.png",
      "blurb": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Olaf</b> becomes enraged for a short time, <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\" data-tip=\"Cleanse\"><a href=\"/wiki/Crowd_control#Removal\" title=\"Crowd control\"><img data-image-key=\"Gangplank_Remove_Scurvy.png\" alt=\"Remove Scurvy\" data-relevant=\"0\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" height=\"20\" data-image-name=\"Gangplank Remove Scurvy.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Gangplank_Remove_Scurvy.png/revision/latest/scale-to-width-down/20?cb=20150707190028\" class=\"lazyload\" decoding=\"async\"></a> <a title=\"Crowd control\" href=\"/wiki/Crowd_control#Removal\">cleansing</a></span> himself and becoming <span style=\"white-space:pre; position:relative;\" data-tip=\"Cc-immune\" data-game=\"lol\" class=\"glossary\"><a title=\"Crowd control\" href=\"/wiki/Crowd_control#Immunity\"><img height=\"20\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/b/b1/Cc-immune_icon.png/revision/latest/scale-to-width-down/20?cb=20200327223512\" alt=\"Cc-immune icon\" data-relevant=\"0\" class=\"lazyload\" loading=\"lazy\" data-image-name=\"Cc-immune icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-image-key=\"Cc-immune_icon.png\"></a> <a href=\"/wiki/Crowd_control#Immunity\" title=\"Crowd control\">cc-immune</a></span>, as well as gaining <span style=\"white-space:nowrap\"><a href=\"/wiki/Attack_damage\" title=\"Attack damage\"><img decoding=\"async\" height=\"15\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Attack_damage_icon.png\" class=\"lazyload\" alt=\"Attack damage icon\" data-image-name=\"Attack damage icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/Attack_damage_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443\" width=\"15\" loading=\"lazy\"></a>&nbsp;<span style=\"color:orange; white-space:normal\"><b>bonus</b> attack damage</span></span> and increased <a href=\"/wiki/Size\" title=\"Size\">size</a>. For a brief moment, he gains <span style=\"white-space:nowrap\"><a title=\"Movement speed\" href=\"/wiki/Movement_speed\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540\" width=\"15\" data-relevant=\"0\" height=\"15\" alt=\"Movement speed icon\" decoding=\"async\" data-image-name=\"Movement speed icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"lazyload\" loading=\"lazy\" data-image-key=\"Movement_speed_icon.png\"></a>&nbsp;<span style=\"color: #F5EE99; white-space:normal\"><b>bonus</b> movement speed</span></span> while facing nearby enemy <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\" data-tip=\"Champions\"><a href=\"/wiki/Champion\" title=\"Champion\"><img loading=\"lazy\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630\" height=\"20\" decoding=\"async\" data-image-name=\"Champion icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"lazyload\" data-image-key=\"Champion_icon.png\" width=\"20\" alt=\"Champion icon\"></a> <a href=\"/wiki/Champion\" title=\"Champion\">champions</a></span>.",
      "description": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Olaf</b> becomes enraged for 3 seconds, <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Cleanse\" class=\"glossary\"><a href=\"/wiki/Crowd_control#Removal\" title=\"Crowd control\"><img class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Gangplank Remove Scurvy.png\" decoding=\"async\" alt=\"Remove Scurvy\" height=\"20\" width=\"20\" data-image-key=\"Gangplank_Remove_Scurvy.png\" loading=\"lazy\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Gangplank_Remove_Scurvy.png/revision/latest/scale-to-width-down/20?cb=20150707190028\"></a> <a href=\"/wiki/Crowd_control#Removal\" title=\"Crowd control\">cleansing</a></span> himself of all <span data-tip=\"Crowd control\" data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\"><a href=\"/wiki/Crowd_control\" title=\"Crowd control\"><img height=\"20\" decoding=\"async\" class=\"lazyload\" data-image-name=\"Stun icon.png\" alt=\"Stun icon\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" data-image-key=\"Stun_icon.png\" width=\"20\" loading=\"lazy\"></a> <a title=\"Crowd control\" href=\"/wiki/Crowd_control\">crowd control</a></span> and becoming <span style=\"white-space:pre; position:relative;\" data-tip=\"Cc-immune\" data-game=\"lol\" class=\"glossary\"><a title=\"Crowd control\" href=\"/wiki/Crowd_control#Immunity\"><img data-image-key=\"Cc-immune_icon.png\" alt=\"Cc-immune icon\" width=\"20\" height=\"20\" data-relevant=\"0\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/b/b1/Cc-immune_icon.png/revision/latest/scale-to-width-down/20?cb=20200327223512\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-image-name=\"Cc-immune icon.png\"></a> <a href=\"/wiki/Crowd_control#Immunity\" title=\"Crowd control\">immune to them</a></span>, as well as gaining <span style=\"white-space:nowrap\"><a href=\"/wiki/Attack_damage\" title=\"Attack damage\"><img data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/Attack_damage_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Attack damage icon\" decoding=\"async\" data-image-name=\"Attack damage icon.png\" height=\"15\" data-image-key=\"Attack_damage_icon.png\" loading=\"lazy\" width=\"15\" class=\"lazyload\"></a>&nbsp;<span style=\"color:orange; white-space:normal\"><b>bonus</b> attack damage</span></span> and 10% increased <a title=\"Size\" href=\"/wiki/Size\">size</a>. For the first second of <i>Ragnarok</i>, he also gains <span style=\"white-space:nowrap\"><a href=\"/wiki/Movement_speed\" title=\"Movement speed\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" width=\"15\" height=\"15\" data-image-name=\"Movement speed icon.png\" class=\"lazyload\" data-image-key=\"Movement_speed_icon.png\" decoding=\"async\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540\" alt=\"Movement speed icon\"></a>&nbsp;<span style=\"color: #F5EE99; white-space:normal\"><b>bonus</b> movement speed</span></span> while facing <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Sight\"><a href=\"/wiki/Sight\" title=\"Sight\"><img decoding=\"async\" data-image-key=\"Sight_icon.png\" alt=\"Sight icon\" height=\"20\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" class=\"lazyload\" data-image-name=\"Sight icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820\"></a> <a title=\"Sight\" href=\"/wiki/Sight\">visible</a></span> enemy <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Champions\" class=\"glossary\"><a title=\"Champion\" href=\"/wiki/Champion\"><img alt=\"Champion icon\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" height=\"20\" data-image-name=\"Champion icon.png\" decoding=\"async\" class=\"lazyload\" data-image-key=\"Champion_icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630\"></a> <a title=\"Champion\" href=\"/wiki/Champion\">champions</a></span> within 2000 units.",
      "leveling": [
        [
          {
            "name": "Bonus Attack Damage:",
            "values": {
              "Both": [
                [
                  10.0,
                  15.0,
                  20.0,
                  25.0,
                  0.0
                ],
                "10 / 15 / 20 / 25 / 30 (+ 25% AD)"
              ]
            },
            "values_html": "10 / 15 / 20 / 25 / 30 <span style=\"color:orange; white-space:normal\">(+ 25% AD)</span>"
          }
        ],
        [
          {
            "name": "Bonus Movement Speed:",
            "values": {
              "Both": [
                [
                  20.0,
                  45.0,
                  0.0
                ],
                "20 / 45 / 70%"
              ]
            },
            "values_html": "20 / 45 / 70%"
          }
        ]
      ]
    },
    {
      "icon": "",
      "blurb": "<i>Ragnarok's</i> duration can be extended by hitting <a title=\"Basic attack\" href=\"/wiki/Basic_attack\">basic attacks</a> and <i><span class=\"inline-image label-after ability-icon\" style=\"display:inline;white-space:pre;\" data-game=\"lol\" data-param=\"\" data-ability=\"Reckless Swing\" data-champion=\"Olaf\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border\"><a href=\"/wiki/Olaf/LoL#Reckless_Swing\" title=\"Reckless Swing\"><img alt=\"Reckless Swing\" loading=\"lazy\" width=\"20\" data-image-name=\"Olaf Reckless Swing.png\" data-relevant=\"0\" height=\"20\" class=\"thumbborder lazyload\" data-image-key=\"Olaf_Reckless_Swing.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/1d/Olaf_Reckless_Swing.png/revision/latest/scale-to-width-down/20?cb=20230830010737\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a></span> <span style=\"white-space:normal;\"><a title=\"Olaf/LoL\" href=\"/wiki/Olaf/LoL#Reckless_Swing\">Reckless Swing</a></span></span></i> against an enemy <span data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Champion\"><a href=\"/wiki/Champion\" title=\"Champion\"><img class=\"lazyload\" data-image-name=\"Champion icon.png\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630\" loading=\"lazy\" alt=\"Champion icon\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Champion_icon.png\" data-relevant=\"0\" height=\"20\"></a> <a title=\"Champion\" href=\"/wiki/Champion\">champion</a></span>.",
      "description": "<i>Ragnarok's</i> duration is increased by and up to 2.<small>5</small> seconds for each basic attack <span data-game=\"lol\" class=\"glossary\" data-tip=\"On-hit\" style=\"white-space:pre; position:relative;\"><a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\"><img height=\"20\" loading=\"lazy\" data-image-name=\"On-hit icon.png\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106\" data-image-key=\"On-hit_icon.png\" width=\"20\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"On-hit icon\" decoding=\"async\"></a> <a title=\"Attack effects\" href=\"/wiki/Attack_effects#On_Hitting\">on-hit</a></span> or cast of <i><span data-ability=\"Reckless Swing\" data-game=\"lol\" data-champion=\"Olaf\" class=\"inline-image label-after ability-icon\" style=\"display:inline;white-space:pre;\" data-param=\"\"><span style=\"display:inline-block;position:relative;\" data-width=\"20\" class=\"border\"><a href=\"/wiki/Olaf/LoL#Reckless_Swing\" title=\"Reckless Swing\"><img class=\"thumbborder lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/1d/Olaf_Reckless_Swing.png/revision/latest/scale-to-width-down/20?cb=20230830010737\" decoding=\"async\" data-image-key=\"Olaf_Reckless_Swing.png\" alt=\"Reckless Swing\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-relevant=\"0\" data-image-name=\"Olaf Reckless Swing.png\" height=\"20\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Olaf/LoL#Reckless_Swing\" title=\"Olaf/LoL\">Reckless Swing</a></span></span></i> against an enemy <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Champion\" data-game=\"lol\"><a title=\"Champion\" href=\"/wiki/Champion\"><img data-image-key=\"Champion_icon.png\" loading=\"lazy\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630\" class=\"lazyload\" alt=\"Champion icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-relevant=\"0\" decoding=\"async\" data-image-name=\"Champion icon.png\"></a> <a href=\"/wiki/Champion\" title=\"Champion\">champion</a></span>.",
      "leveling": []
    },
    {
      "icon": "",
      "blurb": "<span class=\"template_sbc\"><b><span style=\"white-space:pre; position:relative;\" data-tip=\"Cc-immune\" data-game=\"lol\" class=\"glossary\"><a href=\"/wiki/Crowd_control#Immunity\" title=\"Crowd control\"><img loading=\"lazy\" width=\"20\" alt=\"Cc-immune icon\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-key=\"Cc-immune_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/b/b1/Cc-immune_icon.png/revision/latest/scale-to-width-down/20?cb=20200327223512\" data-relevant=\"0\" data-image-name=\"Cc-immune icon.png\" class=\"lazyload\"></a> Cc-immunity</span></b></span>: <span class=\"glossary\" data-tip=\"Crowd control\" data-game=\"lol\" style=\"white-space:pre; position:relative;\"><a href=\"/wiki/Crowd_control\" title=\"Crowd control\"><img data-image-key=\"Stun_icon.png\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940\" width=\"20\" data-relevant=\"0\" loading=\"lazy\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Stun icon\" data-image-name=\"Stun icon.png\" class=\"lazyload\"></a> <a href=\"/wiki/Crowd_control\" title=\"Crowd control\">Crowd control</a></span> cannot be applied during this time.",
      "description": "",
      "leveling": []
    }
  ],
  "targeting": "Auto",
  "affects": "Self",
  "damagetype": "",
  "spelleffects": "",
  "spellshield": "",
  "projectile": "",
  "callforhelp": "",
  "grounded": "",
  "knockdown": "",
  "silence": "",
  "additional": "",
  "notes": "* <i>Ragnarok</i> removes the underlying <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Stun\"><a href=\"/wiki/Stun\" title=\"Stun\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Stun_icon.png\" decoding=\"async\" loading=\"lazy\" width=\"20\" alt=\"Stun icon\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940\" data-image-name=\"Stun icon.png\" data-relevant=\"0\" class=\"lazyload\" height=\"20\"></a> <a title=\"Stun\" href=\"/wiki/Stun\" class=\"mw-redirect\">stun</a></span> from <span data-tip=\"Airborne\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\"><a href=\"/wiki/Airborne\" title=\"Airborne\"><img data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d6/Airborne_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223933\" class=\"lazyload\" alt=\"Airborne icon\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-name=\"Airborne icon.png\" loading=\"lazy\" width=\"20\" data-image-key=\"Airborne_icon.png\"></a> <a class=\"mw-redirect\" href=\"/wiki/Airborne\" title=\"Airborne\">airborne</a></span> effects, but not the forced displacement, which requires him to use a <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Blink\" class=\"glossary\"><a href=\"/wiki/Blink\" title=\"Blink\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" alt=\"Flash\" height=\"20\" data-image-name=\"Flash.png\" data-relevant=\"0\" class=\"lazyload\" data-image-key=\"Flash.png\" decoding=\"async\"></a> <a href=\"/wiki/Blink\" title=\"Blink\">blink</a></span> or <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\" data-tip=\"Dash\"><a href=\"/wiki/Dash\" title=\"Dash\"><img class=\"lazyload\" width=\"20\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-name=\"Dash.png\" data-image-key=\"Dash.png\" decoding=\"async\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Dash.png/revision/latest/scale-to-width-down/20?cb=20180514002826\" alt=\"Dash\"></a> <a href=\"/wiki/Dash\" title=\"Dash\">dash</a></span> ability to override it.\n<ul><li><i>Ragnarok</i> does not bypass self or ally applied effects, unless otherwise stated. Some examples include <span data-game=\"lol\" data-item=\"Zhonya's Hourglass\" class=\"inline-image label-after item-icon\" style=\"display:inline;white-space:pre;\" data-param=\"\"><span class=\"border\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Zhonya%27s_Hourglass\" title=\"Zhonya's Hourglass\"><img decoding=\"async\" height=\"20\" alt=\"Zhonya's Hourglass\" class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" width=\"20\" data-relevant=\"0\" data-image-name=\"Zhonya's Hourglass item.png\" data-image-key=\"Zhonya%27s_Hourglass_item.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/b/b5/Zhonya%27s_Hourglass_item.png/revision/latest/scale-to-width-down/20?cb=20201029203022\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Zhonya%27s_Hourglass\" title=\"Zhonya's Hourglass\">Zhonya's Hourglass</a></span></span>, <span data-param=\"\" class=\"inline-image label-after item-icon\" data-game=\"lol\" data-item=\"Guardian Angel\" style=\"display:inline;white-space:pre;\"><span style=\"display:inline-block;position:relative;\" class=\"border\" data-width=\"20\"><a href=\"/wiki/Guardian_Angel\" title=\"Guardian Angel\"><img alt=\"Guardian Angel\" decoding=\"async\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" class=\"thumbborder lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Guardian_Angel_item.png/revision/latest/scale-to-width-down/20?cb=20210904172822\" data-image-name=\"Guardian Angel item.png\" data-image-key=\"Guardian_Angel_item.png\" height=\"20\" data-relevant=\"0\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Guardian_Angel\" title=\"Guardian Angel\">Guardian Angel</a></span></span>, and <span data-param=\"\" data-champion=\"Kalista\" data-ability=\"Fate's Call\" data-game=\"lol\" style=\"display:inline;white-space:pre;\" class=\"inline-image label-after ability-icon\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border\"><a href=\"/wiki/Kalista/LoL#Fate's_Call\" title=\"Fate's Call\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/5/5b/Kalista_Fate%27s_Call.png/revision/latest/scale-to-width-down/20?cb=20141104220726\" data-relevant=\"0\" loading=\"lazy\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" alt=\"Fate's Call\" height=\"20\" class=\"thumbborder lazyload\" data-image-name=\"Kalista Fate's Call.png\" data-image-key=\"Kalista_Fate%27s_Call.png\"></a></span> <span style=\"white-space:normal;\"><a title=\"Kalista/LoL\" href=\"/wiki/Kalista/LoL#Fate's_Call\">Fate's Call</a></span></span>.\n<ul><li>He prevents both ally and enemy <span style=\"display:inline;white-space:pre;\" data-champion=\"Bard\" class=\"inline-image label-after champion-icon\" data-skin=\"Original\" data-param=\"\" data-game=\"lol\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Bard/LoL\" title=\"Bard\"><img alt=\"Bard\" class=\"thumbborder lazyload\" data-relevant=\"0\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" data-image-name=\"Bard OriginalSquare.png\" data-image-key=\"Bard_OriginalSquare.png\" height=\"20\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/3/37/Bard_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402215420\"></a></span> <span style=\"white-space:normal;\"><a title=\"Bard/LoL\" href=\"/wiki/Bard/LoL\">Bard</a></span></span> from putting him in <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Stasis\"><a href=\"/wiki/Stasis\" title=\"Stasis\"><img data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/e2/Stasis_icon.png/revision/latest/scale-to-width-down/20?cb=20150225124408\" loading=\"lazy\" width=\"20\" class=\"lazyload\" alt=\"Stasis icon\" data-image-name=\"Stasis icon.png\" decoding=\"async\" data-image-key=\"Stasis_icon.png\" height=\"20\"></a> <a class=\"mw-redirect\" title=\"Stasis\" href=\"/wiki/Stasis\">stasis</a></span> with <span data-ability=\"Tempered Fate\" data-game=\"lol\" data-champion=\"Bard\" data-param=\"\" class=\"inline-image label-after ability-icon\" style=\"display:inline;white-space:pre;\"><span style=\"display:inline-block;position:relative;\" data-width=\"20\" class=\"border\"><a href=\"/wiki/Bard/LoL#Tempered_Fate\" title=\"Tempered Fate\"><img loading=\"lazy\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Bard_Tempered_Fate.png/revision/latest/scale-to-width-down/20?cb=20150224202956\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Bard_Tempered_Fate.png\" decoding=\"async\" class=\"thumbborder lazyload\" alt=\"Tempered Fate\" data-image-name=\"Bard Tempered Fate.png\" height=\"20\" data-relevant=\"0\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Bard/LoL#Tempered_Fate\" title=\"Bard/LoL\">Tempered Fate</a></span></span>.</li>\n<li>The ability will remain for its full duration regardless.</li></ul></li>\n<li><i>Ragnarok</i> does not negate any <a href=\"/wiki/Debuff\" title=\"Debuff\">debuffs</a> other than <span data-game=\"lol\" data-tip=\"Crowd control\" style=\"white-space:pre; position:relative;\" class=\"glossary\"><a title=\"Crowd control\" href=\"/wiki/Crowd_control\"><img data-image-key=\"Stun_icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940\" loading=\"lazy\" decoding=\"async\" class=\"lazyload\" width=\"20\" data-image-name=\"Stun icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Stun icon\" height=\"20\"></a> <a href=\"/wiki/Crowd_control\" title=\"Crowd control\">crowd control</a></span> from being applied unless absolutely necessary.</li>\n<li>The <span style=\"color:orange; white-space:normal\"><b>bonus</b> attack damage</span> updates dynamically over the duration; Increases or reductions in <span style=\"color:orange; white-space:normal\">attack damage</span> after the effect has been applied will still be amplified.</li>\n<li>The <span style=\"color:orange; white-space:normal\">25% attack damage</span> scaling amplifies the flat <span style=\"color:orange; white-space:normal\">attack damage <b>bonus</b></span> as well.</li>\n<li><i>Ragnarok</i> will not expire during <span data-param=\"\" data-ability=\"Reckless Swing\" style=\"display:inline;white-space:pre;\" data-champion=\"Olaf\" data-game=\"lol\" class=\"inline-image label-after ability-icon\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border\"><a title=\"Reckless Swing's\" href=\"/wiki/Olaf/LoL#Reckless_Swing\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/1d/Olaf_Reckless_Swing.png/revision/latest/scale-to-width-down/20?cb=20230830010737\" class=\"thumbborder lazyload\" decoding=\"async\" loading=\"lazy\" width=\"20\" height=\"20\" data-image-key=\"Olaf_Reckless_Swing.png\" alt=\"Reckless Swing's\" data-image-name=\"Olaf Reckless Swing.png\"></a></span> <span style=\"white-space:normal;\"><a title=\"Olaf/LoL\" href=\"/wiki/Olaf/LoL#Reckless_Swing\">Reckless Swing's</a></span></span> cast time.</li>\n<li><i>Ragnarok</i> will not resist the displacement caused by the 10 additional <span style=\"display:inline;white-space:pre;\" data-param=\"\" class=\"inline-image unit-icon label-after\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Blast_Cone\" title=\"Blast Cones\"><img loading=\"lazy\" width=\"20\" data-image-key=\"Blast_ConeSquare.png\" data-relevant=\"1\" alt=\"Blast Cones\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/a6/Blast_ConeSquare.png/revision/latest/scale-to-width-down/20?cb=20170119022005\" class=\"thumbborder lazyload\" data-image-name=\"Blast ConeSquare.png\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Blast_Cone\" title=\"Blast Cone\" class=\"mw-redirect\">Blast Cones</a></span></span> spawned by <span data-param=\"\" style=\"display:inline;white-space:pre;\" class=\"inline-image unit-icon label-after\"><span class=\"border\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Infernal_Drake\" title=\"Infernal Rift\"><img alt=\"Infernal Rift\" width=\"20\" loading=\"lazy\" class=\"thumbborder lazyload\" decoding=\"async\" data-relevant=\"0\" data-image-name=\"Infernal DrakeSquare.png\" data-image-key=\"Infernal_DrakeSquare.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Infernal_DrakeSquare.png/revision/latest/scale-to-width-down/20?cb=20170408124043\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Infernal_Drake\" title=\"Infernal Drake\">Infernal Rift</a></span></span> if they're triggered by <b>Olaf</b>.<sup><span style=\"border-bottom:1px dotted gray;cursor:help;\" title=\"This is not intended.\" class=\"basic-tooltip\">(bug)</span></sup></li>\n<li><i>Ragnarok's</i> duration will not be increased if the basic attack is <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" class=\"glossary\" data-tip=\"Dodged\"><a title=\"Attack effects\" href=\"/wiki/Attack_effects#Parrying\"><img class=\"lazyload\" alt=\"Jax Counter Strike old\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-relevant=\"0\" width=\"20\" loading=\"lazy\" data-image-key=\"Jax_Counter_Strike_old.png\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Jax_Counter_Strike_old.png/revision/latest/scale-to-width-down/20?cb=20171223030746\" data-image-name=\"Jax Counter Strike old.png\"></a> <a href=\"/wiki/Attack_effects#Parrying\" title=\"Attack effects\">dodged</a></span>.</li>\n<li><i>Ragnarok's</i> duration will be increased if the basic attack is <span data-tip=\"Blocked\" data-game=\"lol\" style=\"white-space:pre; position:relative;\" class=\"glossary\"><a title=\"Attack effects\" href=\"/wiki/Attack_effects#Parrying\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Shen_Spirit%27s_Refuge.png/revision/latest/scale-to-width-down/20?cb=20170217191016\" height=\"20\" data-relevant=\"0\" class=\"lazyload\" data-image-name=\"Shen Spirit's Refuge.png\" data-image-key=\"Shen_Spirit%27s_Refuge.png\" alt=\"Spirit's Refuge\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" loading=\"lazy\" width=\"20\"></a> <a title=\"Attack effects\" href=\"/wiki/Attack_effects#Parrying\">blocked</a></span>.</li></ul>",
  "flavortext": "",
  "flavorsound": ""
},
} satisfies { [n in SkillName]: SkillGenData };

