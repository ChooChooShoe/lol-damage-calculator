// This file is auto-generated on Tue, 16 Apr 2024 17:26:26 -0400.

import { SkillGenData } from '@/api/DataTypes';

// prettier-ignore
export type SkillName = 'Double Strike' | 'Alpha Strike' | 'Meditate' | 'Wuju Style' | 'Highlander';

export const Skills =  {
'Double Strike': {
  "name": "Double Strike",
  "displayName": "",
  "champion": "Master Yi",
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
      "icon": "Double Strike.png",
      "blurb": "<span class=\"template_sbc\"><b>Innate:</b></span> <span data-skin=\"Original\" data-game=\"lol\" class=\"inline-image label-after champion-icon\" data-param=\"\" data-champion=\"Master Yi\" style=\"display:inline;white-space:pre;\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border\"><a href=\"/wiki/Master_Yi/LoL\" title=\"Master Yi's\"><img data-relevant=\"0\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/73/Master_Yi_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220630\" loading=\"lazy\" alt=\"Master Yi's\" height=\"20\" data-image-key=\"Master_Yi_OriginalSquare.png\" data-image-name=\"Master Yi OriginalSquare.png\" width=\"20\" class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL\" title=\"Master Yi/LoL\">Master Yi's</a></span></span> basic attacks generate a stack of <i>Double Strike</i> for a few seconds. At 3 stacks, his next basic attack will consume them to make a second attack that deals <span style=\"color: #FF8C34; white-space:normal\"><b>reduced</b> physical damage</span>.",
      "description": "<span class=\"template_sbc\"><b>Innate:</b></span> <b>Master Yi's</b> <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-tip=\"Basic attack\" data-game=\"lol\"><a title=\"Basic attack\" href=\"/wiki/Basic_attack\">basic attacks</a></span> <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\" data-tip=\"On-hit\"><a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\"><img loading=\"lazy\" data-relevant=\"0\" alt=\"On-hit icon\" data-image-name=\"On-hit icon.png\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" width=\"20\" height=\"20\" data-image-key=\"On-hit_icon.png\"></a> <a title=\"Attack effects\" href=\"/wiki/Attack_effects#On_Hitting\">on-hit</a></span> generate a <a title=\"Stack\" href=\"/wiki/Stack\">stack</a> of <i>Double Strike</i> for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. At 3 stacks, <b>Master Yi's</b> next basic attack <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"On-attack\" data-game=\"lol\"><a title=\"Attack effects\" href=\"/wiki/Attack_effects#On_Attacking\">on-attack</a></span> is empowered to consume the stacks to strike twice, the second strike dealing <span style=\"color:orange; white-space:normal\">50% AD</span> <span style=\"color: #FF8C34; white-space:normal\">physical damage</span>.",
      "leveling": []
    },
    {
      "icon": "",
      "blurb": "",
      "description": "The second strike applies <span class=\"glossary\" data-tip=\"On-hit\" style=\"white-space:pre; position:relative;\" data-game=\"lol\"><a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\"><img data-image-name=\"On-hit icon.png\" data-relevant=\"0\" decoding=\"async\" alt=\"On-hit icon\" width=\"20\" class=\"lazyload\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106\" height=\"20\" data-image-key=\"On-hit_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\">on-hit</a></span> and <span style=\"white-space:pre; position:relative;\" data-tip=\"On-attack\" data-game=\"lol\" class=\"glossary\"><a href=\"/wiki/Attack_effects#On_Attacking\" title=\"Attack effects\">on-attack</a></span> effects at 100% effectiveness and is affected by <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-tip=\"Critical strike\" data-game=\"lol\"><a href=\"/wiki/Critical_strike\" title=\"Critical strike\"><img width=\"20\" loading=\"lazy\" height=\"20\" alt=\"Critical strike icon\" class=\"lazyload\" data-relevant=\"1\" data-image-name=\"Critical strike icon.png\" decoding=\"async\" data-image-key=\"Critical_strike_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a title=\"Critical strike\" href=\"/wiki/Critical_strike\">critical strike</a></span> modifiers.",
      "leveling": []
    },
    {
      "icon": "",
      "blurb": "",
      "description": "If <b>Master Yi's</b> primary target is killed before the second strike, he automatically attacks another enemy within 300 range.",
      "leveling": []
    },
    {
      "icon": "",
      "blurb": "",
      "description": "<i>The second strike can <span class=\"glossary\" data-game=\"lol\" data-tip=\"Critical strike\" style=\"white-space:pre; position:relative;\"><a href=\"/wiki/Critical_strike\" title=\"Critical strike\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550\" alt=\"Critical strike icon\" loading=\"lazy\" height=\"20\" class=\"lazyload\" data-image-key=\"Critical_strike_icon.png\" data-image-name=\"Critical strike icon.png\" width=\"20\" data-relevant=\"1\" decoding=\"async\"></a> <a title=\"Critical strike\" href=\"/wiki/Critical_strike\">critically strike</a></span> <span data-tip=\"Turrets\" data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\"><a title=\"Turret\" href=\"/wiki/Turret\"><img data-relevant=\"0\" height=\"20\" data-image-key=\"Turret_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/82/Turret_icon.png/revision/latest/scale-to-width-down/20?cb=20180701054101\" decoding=\"async\" data-image-name=\"Turret icon.png\" alt=\"Turret icon\" width=\"20\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\"></a> <a title=\"Turret\" href=\"/wiki/Turret\">structures</a></span>.</i>",
      "leveling": []
    }
  ],
  "targeting": "Passive",
  "affects": "Enemies",
  "damagetype": "Physical",
  "spelleffects": "attack",
  "spellshield": "",
  "projectile": "",
  "callforhelp": "true",
  "grounded": "",
  "knockdown": "",
  "silence": "",
  "additional": "",
  "notes": "* Since <i>Double Strike</i> resets the counter on-attack and the second strike applies on-hit effects, the second strike is able to add a stack for the next <i>Double Strike</i> activation.\n<ul><li>If <i>Double Strike's</i> target becomes <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Untargetable\" data-game=\"lol\"><a href=\"/wiki/Untargetable\" title=\"Untargetable\"><img alt=\"Untargetable icon\" data-relevant=\"0\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Untargetable_icon.png/revision/latest/scale-to-width-down/20?cb=20220206063243\" loading=\"lazy\" decoding=\"async\" height=\"20\" width=\"20\" data-image-name=\"Untargetable icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Untargetable_icon.png\"></a> <a title=\"Untargetable\" href=\"/wiki/Untargetable\" class=\"mw-redirect\">untargetable</a></span> shortly after the triggering attack, it will still occur and deal its effects as usual.</li>\n<li>The second strike will trigger but not consume <i>Double Strike</i> stacks if the primary attack is <span data-game=\"lol\" data-tip=\"Dodge\" class=\"glossary\" style=\"white-space:pre; position:relative;\"><a title=\"Attack effects\" href=\"/wiki/Attack_effects#Parrying\"><img alt=\"Jax Counter Strike old\" data-image-key=\"Jax_Counter_Strike_old.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Jax_Counter_Strike_old.png/revision/latest/scale-to-width-down/20?cb=20171223030746\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Jax Counter Strike old.png\" data-relevant=\"0\" class=\"lazyload\" decoding=\"async\" width=\"20\" loading=\"lazy\" height=\"20\"></a> <a title=\"Attack effects\" href=\"/wiki/Attack_effects#Parrying\">dodged</a></span>.\n<ul><li><span style=\"color:red; font-family:math; font-weight:bold; font-size:1em;\" title=\"Pending for test\"><span class=\"fas fa-vial\"></span> PENDING FOR TEST:</span>: <span data-game=\"lol\" style=\"white-space:pre; position:relative;\" data-tip=\"Blind\" class=\"glossary\"><a href=\"/wiki/Blind\" title=\"Blind\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/81/Blind_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224954\" height=\"20\" data-image-key=\"Blind_icon.png\" loading=\"lazy\" width=\"20\" alt=\"Blind icon\" data-image-name=\"Blind icon.png\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"lazyload\" data-relevant=\"0\"></a> <a href=\"/wiki/Blind\" class=\"mw-redirect\" title=\"Blind\">Blind</a></span></li></ul></li></ul>",
  "flavortext": "",
  "flavorsound": ""
},
'Alpha Strike': {
  "name": "Alpha Strike",
  "displayName": "",
  "champion": "Master Yi",
  "skill": "Q",
  "range": "None",
  "targetRange": {
    "Both": [
      [
        600.0
      ],
      " 600\n"
    ]
  },
  "attackRange": "None",
  "collisionRadius": "None",
  "effectRadius": {
    "Both": [
      [
        600.0
      ],
      " 600\n"
    ]
  },
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
        20.0,
        19.5,
        19.0,
        18.5,
        18.0
      ],
      "20 / 19.5 / 19 / 18.5 / 18\n"
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
      "icon": "Alpha Strike.png",
      "blurb": "<span class=\"template_sbc\"><b>Active:</b></span> <span data-param=\"\" style=\"display:inline;white-space:pre;\" data-skin=\"Original\" class=\"inline-image label-after champion-icon\" data-game=\"lol\" data-champion=\"Master Yi\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Master_Yi/LoL\" title=\"Master Yi\"><img class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" data-relevant=\"0\" loading=\"lazy\" data-image-key=\"Master_Yi_OriginalSquare.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/73/Master_Yi_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220630\" height=\"20\" decoding=\"async\" data-image-name=\"Master Yi OriginalSquare.png\" alt=\"Master Yi\"></a></span> <span style=\"white-space:normal;\"><a title=\"Master Yi/LoL\" href=\"/wiki/Master_Yi/LoL\">Master Yi</a></span></span> briefly <span data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Vanish\"><a href=\"/wiki/Untargetability#Vanish\" title=\"Untargetability\"><img loading=\"lazy\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Shaco Hallucinate.png\" class=\"lazyload\" height=\"20\" data-relevant=\"0\" alt=\"Hallucinate\" data-image-key=\"Shaco_Hallucinate.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/65/Shaco_Hallucinate.png/revision/latest/scale-to-width-down/20?cb=20160608033548\" decoding=\"async\"></a> <a href=\"/wiki/Untargetability#Vanish\" title=\"Untargetability\">vanishes</a></span> and marks the target enemy, then rapidly marks up to 3 other nearby enemies. If there are no other eligible targets before then, <b>Master Yi</b> can mark the same enemies again.",
      "description": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Master Yi</b> <span class=\"glossary\" data-game=\"lol\" style=\"white-space:pre; position:relative;\" data-tip=\"Vanish\"><a title=\"Untargetability\" href=\"/wiki/Untargetability#Vanish\"><img decoding=\"async\" height=\"20\" data-image-key=\"Shaco_Hallucinate.png\" data-image-name=\"Shaco Hallucinate.png\" data-relevant=\"0\" class=\"lazyload\" width=\"20\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Hallucinate\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/65/Shaco_Hallucinate.png/revision/latest/scale-to-width-down/20?cb=20160608033548\"></a> <a title=\"Untargetability\" href=\"/wiki/Untargetability#Vanish\">vanishes</a></span> and becomes <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-tip=\"Lockout\" data-game=\"lol\"><a href=\"/wiki/Terminology_(League_of_Legends)#Lockout\" title=\"Terminology (League of Legends)\"><img decoding=\"async\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Lockout_icon_2.png/revision/latest/scale-to-width-down/20?cb=20210417234848\" data-image-key=\"Lockout_icon_2.png\" class=\"lazyload\" width=\"20\" alt=\"Lockout icon 2\" data-relevant=\"0\" data-image-name=\"Lockout icon 2.png\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a href=\"/wiki/Terminology_(League_of_Legends)#Lockout\" title=\"Terminology (League of Legends)\">unable to act</a></span>. After <span title=\"0.2 seconds, but rounded up to the next game tick.\" class=\"basic-tooltip\" style=\"border-bottom:1px dotted gray;cursor:help;\">0.<small>231</small> seconds</span>, he marks the target enemy and then proceeds to mark the nearest <span data-tip=\"Sight\" style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\"><a href=\"/wiki/Sight\" title=\"Sight\"><img class=\"lazyload\" height=\"20\" data-image-key=\"Sight_icon.png\" alt=\"Sight icon\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820\" loading=\"lazy\" data-image-name=\"Sight icon.png\"></a> <a title=\"Sight\" href=\"/wiki/Sight\">visible</a></span> un-marked enemy within 600 units, recurring every <span title=\"0.2 seconds, but rounded up to the next game tick.\" style=\"border-bottom:1px dotted gray;cursor:help;\" class=\"basic-tooltip\">0.<small>231</small> seconds</span><span class=\"container\" style=\"cursor:help;\" id=\"container\"><span class=\"flipText1 active\">「&nbsp;up to 3 times.&nbsp;」</span><span class=\"flipText2\">「&nbsp;for a total of 4 marks.&nbsp;」</span></span>If there are no other un-marked targets before then, <b>Master Yi</b> can mark the same enemies again. During <i>Alpha Strike</i>, <b>Master Yi</b> can select a direction from the primary target.",
      "leveling": []
    },
    {
      "icon": "",
      "blurb": "Upon finishing marking, he <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Blinks\" class=\"glossary\"><a title=\"Blink\" href=\"/wiki/Blink\"><img loading=\"lazy\" class=\"lazyload\" alt=\"Flash\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" height=\"20\" data-image-key=\"Flash.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149\" data-image-name=\"Flash.png\"></a> <a href=\"/wiki/Blink\" title=\"Blink\">reappears</a></span> and detonates the marks, dealing <span style=\"color: #FF8C34; white-space:normal\">physical damage</span> and applying <span data-game=\"lol\" style=\"white-space:pre; position:relative;\" class=\"glossary\" data-tip=\"On-hit\"><a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\"><img loading=\"lazy\" data-image-name=\"On-hit icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106\" alt=\"On-hit icon\" data-relevant=\"0\" height=\"20\" class=\"lazyload\" data-image-key=\"On-hit_icon.png\"></a> <a title=\"Attack effects\" href=\"/wiki/Attack_effects#On_Hitting\">on-hit</a></span> effects. Subsequent marks on a target have less effect.",
      "description": "Upon finishing marking, <b>Master Yi</b> <span data-tip=\"Blinks\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" class=\"glossary\"><a href=\"/wiki/Blink\" title=\"Blink\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" loading=\"lazy\" decoding=\"async\" class=\"lazyload\" width=\"20\" alt=\"Flash\" height=\"20\" data-image-name=\"Flash.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149\" data-image-key=\"Flash.png\"></a> <a href=\"/wiki/Blink\" title=\"Blink\">reappears</a></span> 75 units in the targeted direction, or in front of the target otherwise, and then becomes able to act again<span class=\"container\" style=\"cursor:help;\" id=\"container\"><span class=\"flipText1 active\">「&nbsp;after <span class=\"basic-tooltip\" style=\"border-bottom:1px dotted gray;cursor:help;\" title=\"0.15 seconds, but rounded up to the next game tick.\">0.<small>165</small> seconds</span>.&nbsp;」</span><span class=\"flipText2\">「&nbsp;<span class=\"basic-tooltip\" style=\"border-bottom:1px dotted gray;cursor:help;\" title=\"Effective time due to game ticks\">1.<small>087</small> seconds total</span> after the start of the cast with 4 bounces.&nbsp;」</span></span>If the primary target <span class=\"glossary\" data-tip=\"Death\" data-game=\"lol\" style=\"white-space:pre; position:relative;\"><a title=\"Death\" href=\"/wiki/Death\"><img alt=\"Death\" class=\"lazyload\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-image-name=\"Death.png\" height=\"20\" width=\"20\" data-image-key=\"Death.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/c3/Death.png/revision/latest/scale-to-width-down/20?cb=20200415031113\"></a> <a title=\"Death\" href=\"/wiki/Death\">dies</a></span> or is too far away during the delay, <b>Master Yi</b> will reappear at the initial cast location instead.",
      "leveling": []
    },
    {
      "icon": "",
      "blurb": "Basic attacks <span style=\"white-space:nowrap\"><a title=\"Cooldown reduction\" href=\"/wiki/Cooldown_reduction\"><img data-image-key=\"Cooldown_reduction_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/95/Cooldown_reduction_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203444\" decoding=\"async\" alt=\"Cooldown reduction icon\" height=\"15\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-image-name=\"Cooldown reduction icon.png\" data-relevant=\"0\" class=\"lazyload\" width=\"15\"></a>&nbsp;reduce</span> <i>Alpha Strike's</i> cooldown.",
      "description": "<b>Master Yi</b> then detonates the marks, dealing <span style=\"color: #FF8C34; white-space:normal\">physical damage</span> and applying <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-tip=\"On-hit\" data-game=\"lol\"><a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\"><img data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106\" loading=\"lazy\" class=\"lazyload\" decoding=\"async\" width=\"20\" alt=\"On-hit icon\" data-image-name=\"On-hit icon.png\" data-image-key=\"On-hit_icon.png\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\">on-hit</a></span> effects at 75% effectiveness. Marks after the first on the same target instantly deal 25% damage and apply <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"On-hit\"><a title=\"Attack effects\" href=\"/wiki/Attack_effects#On_Hitting\"><img data-image-key=\"On-hit_icon.png\" data-image-name=\"On-hit icon.png\" alt=\"On-hit icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" width=\"20\" loading=\"lazy\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106\" class=\"lazyload\" height=\"20\"></a> <a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\">on-hit</a></span> effects at 18.<small>75</small>% effectiveness. <i>Alpha Strike</i> deals <span style=\"color: #FF8C34; white-space:normal\"><b>bonus</b> physical damage</span> to <span class=\"glossary\" data-game=\"lol\" style=\"white-space:pre; position:relative;\" data-tip=\"Monster\"><a title=\"Monster\" href=\"/wiki/Monster\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Monster_icon.png/revision/latest/scale-to-width-down/20?cb=20231028083627\" decoding=\"async\" data-image-name=\"Monster icon.png\" class=\"lazyload\" width=\"20\" data-image-key=\"Monster_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-relevant=\"0\" alt=\"Monster icon\" loading=\"lazy\"></a> <a href=\"/wiki/Monster\" title=\"Monster\">monsters</a></span> per hit.",
      "leveling": [
        [
          {
            "name": "Physical Damage:",
            "values": {
              "Both": [
                [
                  30.0,
                  60.0,
                  90.0,
                  120.0,
                  0.0
                ],
                "30 / 60 / 90 / 120 / 150 (+ 50% AD)"
              ]
            },
            "values_html": "30 / 60 / 90 / 120 / 150 <span style=\"color:orange; white-space:normal\">(+ 50% AD)</span>"
          },
          {
            "name": "Reduced Damage per hit:",
            "values": {
              "Both": [
                [
                  7.5,
                  15.0,
                  22.5,
                  30.0,
                  0.0
                ],
                "7.5 / 15 / 22.5 / 30 / 37.5 (+ 12.5% AD)"
              ]
            },
            "values_html": "7.<small>5</small> / 15 / 22.<small>5</small> / 30 / 37.<small>5</small> <span style=\"color:orange; white-space:normal\">(+ 12.<small>5</small>% AD)</span>"
          },
          {
            "name": "Maximum Single-Target Damage:",
            "values": {
              "Both": [
                [
                  52.5,
                  105.0,
                  157.5,
                  210.0,
                  0.0
                ],
                "52.5 / 105 / 157.5 / 210 / 262.5 (+ 87.5% AD)"
              ]
            },
            "values_html": "52.<small>5</small> / 105 / 157.<small>5</small> / 210 / 262.<small>5</small> <span style=\"color:orange; white-space:normal\">(+ 87.<small>5</small>% AD)</span>"
          }
        ],
        [
          {
            "name": "Monster Bonus Damage:",
            "values": {
              "Both": [
                [
                  75.0,
                  100.0,
                  125.0,
                  150.0,
                  175.0
                ],
                "75 / 100 / 125 / 150 / 175"
              ]
            },
            "values_html": "75 / 100 / 125 / 150 / 175"
          },
          {
            "name": "Monster Total Damage:",
            "values": {
              "Both": [
                [
                  105.0,
                  160.0,
                  215.0,
                  270.0,
                  0.0
                ],
                "105 / 160 / 215 / 270 / 325 (+ 50% AD)"
              ]
            },
            "values_html": "105 / 160 / 215 / 270 / 325 <span style=\"color:orange; white-space:normal\">(+ 50% AD)</span>"
          },
          {
            "name": "Reduced Monster Damage per hit:",
            "values": {
              "Both": [
                [
                  26.25,
                  40.0,
                  53.75,
                  67.5,
                  0.0
                ],
                "26.25 / 40 / 53.75 / 67.5 / 81.25 (+ 12.5% AD)"
              ]
            },
            "values_html": "26.<small>25</small> / 40 / 53.<small>75</small> / 67.<small>5</small> / 81.<small>25</small> <span style=\"color:orange; white-space:normal\">(+ 12.<small>5</small>% AD)</span>"
          },
          {
            "name": "Max Monster Single-Target Damage:",
            "values": {
              "Both": [
                [
                  183.75,
                  280.0,
                  376.25,
                  472.5,
                  0.0
                ],
                "183.75 / 280 / 376.25 / 472.5 / 568.75 (+ 87.5% AD)"
              ]
            },
            "values_html": "183.<small>75</small> / 280 / 376.<small>25</small> / 472.<small>5</small> / 568.<small>75</small> <span style=\"color:orange; white-space:normal\">(+ 87.<small>5</small>% AD)</span>"
          }
        ]
      ]
    },
    {
      "icon": "",
      "blurb": "",
      "description": "<i>Alpha Strike's</i> primary and lesser damage can <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" class=\"glossary\" data-tip=\"Critically strike\"><a href=\"/wiki/Critical_strike\" title=\"Critical strike\"><img data-image-name=\"Critical strike icon.png\" data-relevant=\"1\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" loading=\"lazy\" alt=\"Critical strike icon\" class=\"lazyload\" height=\"20\" width=\"20\" data-image-key=\"Critical_strike_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550\"></a> <a title=\"Critical strike\" href=\"/wiki/Critical_strike\">critically strike</a></span> for <span style=\"color: #FF8C34; white-space:normal\"><b>bonus</b> physical damage</span> equal to <span style=\"color:orange; white-space:normal\">(17.<small>5</small>%&nbsp;+&nbsp;<span data-item=\"Infinity Edge\" data-param=\"\" class=\"inline-image label-after item-icon\" data-game=\"lol\" style=\"display:inline;white-space:pre;\"><span style=\"display:inline-block;position:relative;\" class=\"border\" data-width=\"20\"><a title=\"8.75%\" href=\"/wiki/Infinity_Edge\"><img class=\"thumbborder lazyload\" data-relevant=\"0\" decoding=\"async\" height=\"20\" alt=\"8\" loading=\"lazy\" data-image-name=\"Infinity Edge item.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/15/Infinity_Edge_item.png/revision/latest/scale-to-width-down/20?cb=20201104234931\" data-image-key=\"Infinity_Edge_item.png\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Infinity_Edge\" title=\"Infinity Edge\">8.<small>75</small>%</a></span></span>) AD</span> and <span style=\"color:orange; white-space:normal\">(4.<small>375</small>%&nbsp;+&nbsp;<span data-param=\"\" data-game=\"lol\" class=\"inline-image label-after item-icon\" style=\"display:inline;white-space:pre;\" data-item=\"Infinity Edge\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border\"><a href=\"/wiki/Infinity_Edge\" title=\"2.1875%\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/15/Infinity_Edge_item.png/revision/latest/scale-to-width-down/20?cb=20201104234931\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"2\" decoding=\"async\" width=\"20\" class=\"thumbborder lazyload\" data-image-name=\"Infinity Edge item.png\" data-image-key=\"Infinity_Edge_item.png\" height=\"20\" data-relevant=\"0\" loading=\"lazy\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Infinity_Edge\" title=\"Infinity Edge\">2.<small>1875</small>%</a></span></span>) AD</span> respectively.",
      "leveling": []
    },
    {
      "icon": "",
      "blurb": "",
      "description": "Basic attacks <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\" data-tip=\"On-hit\"><a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\"><img class=\"lazyload\" decoding=\"async\" data-image-key=\"On-hit_icon.png\" width=\"20\" loading=\"lazy\" data-image-name=\"On-hit icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106\" height=\"20\" alt=\"On-hit icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\">on-hit</a></span> reduce <i>Alpha Strike's</i> <span style=\"white-space:nowrap\"><a title=\"Cooldown\" href=\"/wiki/Cooldown\"><img class=\"lazyload\" width=\"15\" data-image-key=\"Cooldown_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" height=\"15\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027\" data-relevant=\"0\" data-image-name=\"Cooldown icon.png\" alt=\"Cooldown icon\" decoding=\"async\"></a>&nbsp;<b>current</b> cooldown</span> by <span style=\"border-bottom:1px dotted gray;cursor:help;\" title=\"Affected by ability haste\" class=\"basic-tooltip\">1 second</span>.",
      "leveling": []
    }
  ],
  "targeting": "Unit",
  "affects": "Self, Enemies",
  "damagetype": "Physical",
  "spelleffects": "AoE",
  "spellshield": "Special",
  "projectile": "",
  "callforhelp": "",
  "grounded": "True",
  "knockdown": "",
  "silence": "",
  "additional": "",
  "notes": "* <i>Alpha Strike's</i> primary damage applies after <b>Master Yi</b> reappears.\n<ul><li><i>Alpha Strike's</i> <span style=\"white-space:nowrap\"><a title=\"Cooldown\" href=\"/wiki/Cooldown\"><img data-image-name=\"Cooldown icon.png\" data-relevant=\"0\" data-image-key=\"Cooldown_icon.png\" alt=\"Cooldown icon\" class=\"lazyload\" decoding=\"async\" height=\"15\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"15\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027\"></a>&nbsp;cooldown reduction</span> applies on <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Turret\" data-game=\"lol\"><a title=\"Turret\" href=\"/wiki/Turret\"><img width=\"20\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/82/Turret_icon.png/revision/latest/scale-to-width-down/20?cb=20180701054101\" data-image-name=\"Turret icon.png\" loading=\"lazy\" data-image-key=\"Turret_icon.png\" data-relevant=\"0\" height=\"20\" alt=\"Turret icon\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a title=\"Turret\" href=\"/wiki/Turret\">structures</a></span>.</li>\n<li>When <b>Master Yi</b> bounces from a unit it will grant <span class=\"glossary\" data-game=\"lol\" style=\"white-space:pre; position:relative;\" data-tip=\"Sight\"><a href=\"/wiki/Sight\" title=\"Sight\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" data-image-key=\"Sight_icon.png\" alt=\"Sight icon\" decoding=\"async\" data-relevant=\"0\" height=\"20\" class=\"lazyload\" data-image-name=\"Sight icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820\" loading=\"lazy\"></a> <a href=\"/wiki/Sight\" title=\"Sight\">vision</a></span> in a 600 radius around it for up-to <span style=\"border-bottom:1px dotted gray;cursor:help;\" title=\"0.6 seconds, but rounded up to the next game tick.\" class=\"basic-tooltip\">0.<small>627</small> seconds</span>  after <i>Alpha Strike</i> ends, including across terrain, though not into <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Brush\" data-game=\"lol\"><a href=\"/wiki/Brush\" title=\"Brush\"><img loading=\"lazy\" height=\"20\" alt=\"Brushmaker\" data-relevant=\"0\" data-image-key=\"Ivern_Brushmaker.png\" class=\"lazyload\" data-image-name=\"Ivern Brushmaker.png\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Ivern_Brushmaker.png/revision/latest/scale-to-width-down/20?cb=20170818003622\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\"></a> <a href=\"/wiki/Brush\" title=\"Brush\">brushes</a></span>.\n<ul><li>It will always grant vision around the primary target, even if he doesn't bounce off it.</li></ul></li>\n<li><i>Alpha Strike's</i> damage is calculated at the moment that each mark is placed. Because of this, it is possible to inflict differing amounts of damage if <b>Master Yi's </b><span style=\"color:orange; white-space:normal\">AD</span> changes between marks.</li>\n<li><b>Master Yi</b> will follow all his primary target's movements.\n<ul><li><i>Alpha Strike</i> can only follow up-to <span class=\"basic-tooltip\" style=\"border-bottom:1px dotted gray;cursor:help;\" title=\"From Yi's location at start of cast\">2000</span> units; If the target teleports a very long distance, it will not be followed.</li></ul></li>\n<li>If the primary target becomes <span class=\"glossary\" data-game=\"lol\" style=\"white-space:pre; position:relative;\" data-tip=\"Untargetable\"><a title=\"Untargetable\" href=\"/wiki/Untargetable\"><img height=\"20\" decoding=\"async\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Untargetable_icon.png/revision/latest/scale-to-width-down/20?cb=20220206063243\" data-image-key=\"Untargetable_icon.png\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" width=\"20\" data-image-name=\"Untargetable icon.png\" alt=\"Untargetable icon\"></a> <a href=\"/wiki/Untargetable\" class=\"mw-redirect\" title=\"Untargetable\">untargetable</a></span> and there are no other nearby valid targets, <i>Alpha Strike</i> will end prematurely and will not deal the damage occurring after <b>Master Yi's</b> reappearance.</li>\n<li>The choice of exit direction occurs through an indicator anchored to the target during the time that <b>Master Yi</b> is vanished. Selection commands (default: MB1/left click) and movement commands (default: MB2/right click) are both valid.\n<ul><li>Multiple commands can be issued, but only the <i>final</i> command before exiting will determine the direction.</li></ul></li>\n<li>If the primary target is a champion, <b>Master Yi</b> will be automatically ordered to basic attack them after <i>Alpha Strike</i> ends.\n<ul><li><b>Master Yi</b> will not be able to buffer other abilities.<sup><span style=\"border-bottom:1px dotted gray;cursor:help;\" class=\"basic-tooltip\" title=\"This is not intended.\">(bug)</span></sup></li></ul></li>\n<li><span style=\"white-space:pre; position:relative;\" data-tip=\"Spell shield\" data-game=\"lol\" class=\"glossary\"><a href=\"/wiki/Spell_shield\" title=\"Spell shield\"><img decoding=\"async\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Sivir_Spell_Shield.png/revision/latest/scale-to-width-down/20?cb=20170818194532\" class=\"lazyload\" data-image-name=\"Sivir Spell Shield.png\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-image-key=\"Sivir_Spell_Shield.png\" alt=\"Spell Shield\" width=\"20\"></a> <a title=\"Spell shield\" href=\"/wiki/Spell_shield\">Spell shield</a></span> will only block a single instance of damage.</li>\n<li>On-hit damage applied by <i>Alpha Strike</i> will be negated by <span data-tip=\"Dodge\" data-game=\"lol\" style=\"white-space:pre; position:relative;\" class=\"glossary\"><a title=\"Attack effects\" href=\"/wiki/Attack_effects#Parrying\"><img alt=\"Jax Counter Strike old\" loading=\"lazy\" data-image-key=\"Jax_Counter_Strike_old.png\" data-relevant=\"0\" height=\"20\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Jax Counter Strike old.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Jax_Counter_Strike_old.png/revision/latest/scale-to-width-down/20?cb=20171223030746\" width=\"20\" decoding=\"async\"></a> <a href=\"/wiki/Attack_effects#Parrying\" title=\"Attack effects\">dodge</a></span> and <span style=\"white-space:pre; position:relative;\" data-tip=\"Block\" class=\"glossary\" data-game=\"lol\"><a href=\"/wiki/Attack_effects#Parrying\" title=\"Attack effects\"><img loading=\"lazy\" width=\"20\" class=\"lazyload\" data-relevant=\"0\" alt=\"Spirit's Refuge\" decoding=\"async\" data-image-name=\"Shen Spirit's Refuge.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-key=\"Shen_Spirit%27s_Refuge.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Shen_Spirit%27s_Refuge.png/revision/latest/scale-to-width-down/20?cb=20170217191016\"></a> <a title=\"Attack effects\" href=\"/wiki/Attack_effects#Parrying\">block</a></span>, but not while <b>Master Yi</b> is <span class=\"glossary\" data-tip=\"Blind\" data-game=\"lol\" style=\"white-space:pre; position:relative;\"><a href=\"/wiki/Blind\" title=\"Blind\"><img data-image-key=\"Blind_icon.png\" width=\"20\" data-relevant=\"0\" data-image-name=\"Blind icon.png\" height=\"20\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/81/Blind_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224954\" loading=\"lazy\" alt=\"Blind icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"lazyload\"></a> <a href=\"/wiki/Blind\" title=\"Blind\" class=\"mw-redirect\">blinded</a></span>.\n<ul><li><i>Alpha Strike's</i> own damage will not be negated.</li></ul></li>\n<li>If <b>Master Yi</b> <span data-tip=\"Death\" style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\"><a href=\"/wiki/Death\" title=\"Death\"><img loading=\"lazy\" alt=\"Death\" width=\"20\" data-image-name=\"Death.png\" decoding=\"async\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/c3/Death.png/revision/latest/scale-to-width-down/20?cb=20200415031113\" class=\"lazyload\" data-image-key=\"Death.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\"></a> <a href=\"/wiki/Death\" title=\"Death\">dies</a></span> during <i>Alpha Strike</i> and he is only focusing one target, the ability will only deal the reduced damage strikes and not the final tick of damage from reappearing.\n<ul><li>If he is striking multiple targets the damage will be dealt immediately when <i>dying</i>, and if he <i>dies</i> before the bounce from the last target, <i>Alpha Strike</i> will deal reduced damage only to all units he already bounced from.<sup><span class=\"basic-tooltip\" style=\"border-bottom:1px dotted gray;cursor:help;\" title=\"This is not intended.\">(bug)</span></sup></li></ul></li>\n<li>If <b>Master Yi</b> enters <span data-tip=\"Resurrection\" data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\"><a href=\"/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health\" title=\"Death\"><img alt=\"Revival icon\" width=\"20\" data-image-name=\"Revival icon.png\" loading=\"lazy\" height=\"20\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/7c/Revival_icon.png/revision/latest/scale-to-width-down/20?cb=20170714051127\" data-image-key=\"Revival_icon.png\" data-relevant=\"0\"></a> <a href=\"/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health\" title=\"Death\">resurrection</a></span> during <i>Alpha Strike</i> and he is only focusing one target, the ability will deal the reduced damage strikes as normal and the final tick of damage after being <i>resurrected</i>.\n<ul><li>If he is striking multiple targets, <i>Alpha Strike</i> will <i>sometimes</i> deal the reduced damage from repeated bounces and the main damage after being <i>resurrected</i>, and <i>sometimes</i> only the reduced damage, unrelated to the number of targets available.<sup><span style=\"border-bottom:1px dotted gray;cursor:help;\" title=\"This is not intended.\" class=\"basic-tooltip\">(bug)</span></sup></li></ul></li>\n<li>The following table refers for interactions while <b>Master Yi</b> is performing <i>Alpha Strike</i>:</li></ul>\n<table class=\"article-table\" style=\"font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;\">\n\n<tbody><tr>\n<th colspan=\"2\">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan=\"2\">Abilities\n</th>\n<td><span data-champion=\"Master Yi\" data-ability=\"Wuju Style\" data-game=\"lol\" class=\"inline-image label-after ability-icon\" data-param=\"\" style=\"display:inline;white-space:pre;\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Master_Yi/LoL#Wuju_Style\" title=\"Wuju Style\"><img height=\"20\" class=\"thumbborder lazyload\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/fc/Master_Yi_Wuju_Style.png/revision/latest/scale-to-width-down/20?cb=20170818192025\" alt=\"Wuju Style\" loading=\"lazy\" data-image-key=\"Master_Yi_Wuju_Style.png\" data-relevant=\"0\" data-image-name=\"Master Yi Wuju Style.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\"></a></span> <span style=\"white-space:normal;\"><a title=\"Master Yi/LoL\" href=\"/wiki/Master_Yi/LoL#Wuju_Style\">Wuju Style</a></span></span> and <span data-ability=\"Highlander\" style=\"display:inline;white-space:pre;\" data-param=\"\" data-champion=\"Master Yi\" class=\"inline-image label-after ability-icon\" data-game=\"lol\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Master_Yi/LoL#Highlander\" title=\"Highlander\"><img alt=\"Highlander\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/10/Master_Yi_Highlander.png/revision/latest/scale-to-width-down/20?cb=20170818191955\" data-image-key=\"Master_Yi_Highlander.png\" class=\"thumbborder lazyload\" data-relevant=\"0\" height=\"20\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" loading=\"lazy\" data-image-name=\"Master Yi Highlander.png\"></a></span> <span style=\"white-space:normal;\"><a title=\"Master Yi/LoL\" href=\"/wiki/Master_Yi/LoL#Highlander\">Highlander</a></span></span> are usable. <span data-ability=\"Meditate\" data-game=\"lol\" style=\"display:inline;white-space:pre;\" data-param=\"\" data-champion=\"Master Yi\" class=\"inline-image label-after ability-icon\"><span class=\"border\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a title=\"Meditate\" href=\"/wiki/Master_Yi/LoL#Meditate\"><img height=\"20\" alt=\"Meditate\" data-image-key=\"Master_Yi_Meditate.png\" loading=\"lazy\" width=\"20\" decoding=\"async\" data-image-name=\"Master Yi Meditate.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Master_Yi_Meditate.png/revision/latest/scale-to-width-down/20?cb=20170818192004\" class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL#Meditate\" title=\"Master Yi/LoL\">Meditate</a></span></span> is disabled.\n</td></tr>\n<tr>\n<th colspan=\"2\">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan=\"3\">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan=\"2\">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan=\"3\">Spells\n</th>\n<th>Usable\n</th>\n<td><span class=\"inline-image label-after spell-icon\" data-game=\"lol\" data-param=\"\" style=\"display:inline;white-space:pre;\" data-spell=\"Barrier\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border icon-20\"><a href=\"/wiki/Barrier\" title=\"Barrier\"><img loading=\"lazy\" width=\"20\" class=\"thumbborder lazyload\" data-image-key=\"Barrier.png\" data-image-name=\"Barrier.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Barrier\" decoding=\"async\" height=\"20\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/cc/Barrier.png/revision/latest/scale-to-width-down/20?cb=20180514002510\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Barrier\" title=\"Barrier\">Barrier</a></span></span> <span style=\"display:inline;white-space:pre;\" data-spell=\"Clarity\" data-param=\"\" data-game=\"lol\" class=\"inline-image label-after spell-icon\"><span class=\"border icon-20\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a title=\"Clarity\" href=\"/wiki/Clarity\"><img decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d7/Clarity.png/revision/latest/scale-to-width-down/20?cb=20180514002750\" width=\"20\" loading=\"lazy\" data-image-name=\"Clarity.png\" alt=\"Clarity\" height=\"20\" class=\"thumbborder lazyload\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Clarity.png\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Clarity\" title=\"Clarity\">Clarity</a></span></span> <span style=\"display:inline;white-space:pre;\" class=\"inline-image label-after spell-icon\" data-param=\"\" data-game=\"lol\" data-spell=\"Cleanse\"><span class=\"border icon-20\" style=\"display:inline-block;position:relative;\" data-width=\"20\"><a title=\"Cleanse\" href=\"/wiki/Cleanse\"><img data-image-name=\"Cleanse.png\" data-image-key=\"Cleanse.png\" loading=\"lazy\" height=\"20\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/95/Cleanse.png/revision/latest/scale-to-width-down/20?cb=20180514002812\" alt=\"Cleanse\" class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" decoding=\"async\"></a></span> <span style=\"white-space:normal;\"><a title=\"Cleanse\" href=\"/wiki/Cleanse\">Cleanse</a></span></span> <span data-spell=\"Exhaust\" data-game=\"lol\" data-param=\"\" class=\"inline-image label-after spell-icon\" style=\"display:inline;white-space:pre;\"><span class=\"border icon-20\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a title=\"Exhaust\" href=\"/wiki/Exhaust\"><img decoding=\"async\" height=\"20\" width=\"20\" loading=\"lazy\" data-relevant=\"0\" data-image-name=\"Exhaust.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/4a/Exhaust.png/revision/latest/scale-to-width-down/20?cb=20180514003128\" data-image-key=\"Exhaust.png\" alt=\"Exhaust\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"thumbborder lazyload\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Exhaust\" title=\"Exhaust\">Exhaust</a></span></span> <span class=\"inline-image label-after spell-icon\" data-game=\"lol\" data-spell=\"Ghost\" style=\"display:inline;white-space:pre;\" data-param=\"\"><span style=\"display:inline-block;position:relative;\" data-width=\"20\" class=\"border icon-20\"><a href=\"/wiki/Ghost\" title=\"Ghost\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" data-image-name=\"Ghost.png\" data-image-key=\"Ghost.png\" decoding=\"async\" height=\"20\" width=\"20\" class=\"thumbborder lazyload\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/20?cb=20180514003209\" alt=\"Ghost\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Ghost\" title=\"Ghost\">Ghost</a></span></span> <span class=\"inline-image label-after spell-icon\" data-game=\"lol\" style=\"display:inline;white-space:pre;\" data-param=\"\" data-spell=\"Heal\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border icon-20\"><a title=\"Heal\" href=\"/wiki/Heal\"><img data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/6e/Heal.png/revision/latest/scale-to-width-down/20?cb=20180514003319\" data-image-name=\"Heal.png\" decoding=\"async\" class=\"thumbborder lazyload\" width=\"20\" height=\"20\" alt=\"Heal\" loading=\"lazy\" data-image-key=\"Heal.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a></span> <span style=\"white-space:normal;\"><a title=\"Heal\" href=\"/wiki/Heal\">Heal</a></span></span> <span class=\"inline-image label-after spell-icon\" data-game=\"lol\" data-spell=\"Ignite\" style=\"display:inline;white-space:pre;\" data-param=\"\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border icon-20\"><a href=\"/wiki/Ignite\" title=\"Ignite\"><img class=\"thumbborder lazyload\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-name=\"Ignite.png\" alt=\"Ignite\" loading=\"lazy\" data-relevant=\"0\" data-image-key=\"Ignite.png\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Ignite.png/revision/latest/scale-to-width-down/20?cb=20180514003345\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Ignite\" title=\"Ignite\">Ignite</a></span></span> <span class=\"inline-image label-after spell-icon\" data-spell=\"Smite\" data-game=\"lol\" data-param=\"\" style=\"display:inline;white-space:pre;\"><span data-width=\"20\" class=\"border icon-20\" style=\"display:inline-block;position:relative;\"><a title=\"Smite\" href=\"/wiki/Smite\"><img class=\"thumbborder lazyload\" data-image-key=\"Smite.png\" width=\"20\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Smite.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/05/Smite.png/revision/latest/scale-to-width-down/20?cb=20180514003641\" decoding=\"async\" height=\"20\" alt=\"Smite\"></a></span> <span style=\"white-space:normal;\"><a title=\"Smite\" href=\"/wiki/Smite\">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span style=\"display:inline;white-space:pre;\" data-param=\"\" class=\"inline-image label-after spell-icon\" data-spell=\"Flash\" data-game=\"lol\"><span class=\"border icon-20\" style=\"display:inline-block;position:relative;\" data-width=\"20\"><a title=\"Flash\" href=\"/wiki/Flash\"><img width=\"20\" data-image-key=\"Flash.png\" class=\"thumbborder lazyload\" data-image-name=\"Flash.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149\" loading=\"lazy\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Flash\" decoding=\"async\" data-relevant=\"0\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Flash\" title=\"Flash\">Flash</a></span></span> <span data-spell=\"Teleport\" style=\"display:inline;white-space:pre;\" data-game=\"lol\" data-param=\"\" class=\"inline-image label-after spell-icon\"><span class=\"border icon-20\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a title=\"Teleport\" href=\"/wiki/Teleport\"><img data-image-name=\"Teleport.png\" decoding=\"async\" loading=\"lazy\" data-image-key=\"Teleport.png\" alt=\"Teleport\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Teleport.png/revision/latest/scale-to-width-down/20?cb=20180514003653\" height=\"20\" width=\"20\" class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Teleport\" title=\"Teleport\">Teleport</a></span></span> <span data-param=\"\" style=\"display:inline;white-space:pre;\" class=\"inline-image label-after spell-icon\" data-spell=\"Recall\" data-game=\"lol\"><span style=\"display:inline-block;position:relative;\" data-width=\"20\" class=\"border icon-20\"><a href=\"/wiki/Recall\" title=\"Recall\"><img class=\"thumbborder lazyload\" data-image-key=\"Recall.png\" alt=\"Recall\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/43/Recall.png/revision/latest/scale-to-width-down/20?cb=20171227214733\" data-image-name=\"Recall.png\" decoding=\"async\" width=\"20\" data-relevant=\"0\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\"></a></span> <span style=\"white-space:normal;\"><a title=\"Recall\" href=\"/wiki/Recall\">Recall</a></span></span> <span class=\"inline-image label-after spell-icon\" data-spell=\"Hexflash\" data-game=\"lol\" style=\"display:inline;white-space:pre;\" data-param=\"\"><span style=\"display:inline-block;position:relative;\" data-width=\"20\" class=\"border icon-20\"><a href=\"/wiki/Hextech_Flashtraption#Hexflash\" title=\"Hexflash\"><img width=\"20\" data-image-name=\"Hexflash.png\" loading=\"lazy\" data-image-key=\"Hexflash.png\" class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" alt=\"Hexflash\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/76/Hexflash.png/revision/latest/scale-to-width-down/20?cb=20180514003331\" decoding=\"async\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Hextech_Flashtraption#Hexflash\" title=\"Hextech Flashtraption\">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan=\"2\">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>",
  "flavortext": "",
  "flavorsound": "<span><audio class=\"ext-audiobutton\" data-volume=\"1.0\" hidden=\"\" preload=\"none\"><source type=\"application/ogg\" src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/86/Master_Yi_Original_Q_5.ogg/revision/latest?cb=20221209162105\"><a href=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/86/Master_Yi_Original_Q_5.ogg/revision/latest?cb=20221209162105\">Link</a></audio><a class=\"ext-audiobutton\" data-state=\"play\" title=\"Play/Pause\">▶️</a></span><sup><a href=\"/wiki/File:Master_Yi_Original_Q_5.ogg\" title=\"File:Master Yi Original Q 5.ogg\">&nbsp;&nbsp;</a></sup> <i>\"Many foes, one strike!\"</i>"
},
'Meditate': {
  "name": "Meditate",
  "displayName": "",
  "champion": "Master Yi",
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
        0.0
      ],
      "40 mana + 6% maximum\n"
    ]
  },
  "costtype": "<span style=\"color: #0099CC; white-space:normal\">mana</span> per second",
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
      "icon": "Meditate.png",
      "blurb": "<span class=\"template_sbc\"><b>Active:</b></span> <span data-game=\"lol\" style=\"display:inline;white-space:pre;\" data-champion=\"Master Yi\" data-skin=\"Original\" class=\"inline-image label-after champion-icon\" data-param=\"\"><span class=\"border\" style=\"display:inline-block;position:relative;\" data-width=\"20\"><a href=\"/wiki/Master_Yi/LoL\" title=\"Master Yi\"><img height=\"20\" data-image-key=\"Master_Yi_OriginalSquare.png\" loading=\"lazy\" alt=\"Master Yi\" decoding=\"async\" width=\"20\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/73/Master_Yi_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220630\" class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Master Yi OriginalSquare.png\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL\" title=\"Master Yi/LoL\">Master Yi</a></span></span> <span data-tip=\"Channels\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\"><a href=\"/wiki/Channel\" title=\"Channel\"><img alt=\"Channeling icon\" decoding=\"async\" class=\"lazyload\" data-image-key=\"Channeling_icon.png\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Channeling_icon.png/revision/latest/scale-to-width-down/20?cb=20180628192319\" width=\"20\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Channeling icon.png\" loading=\"lazy\"></a> <a href=\"/wiki/Channel\" title=\"Channel\">channels</a></span> for a few seconds, rapidly <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Healing\"><a title=\"Healing\" href=\"/wiki/Healing\"><img width=\"20\" decoding=\"async\" height=\"20\" data-image-name=\"Heal power icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Heal_power_icon.png/revision/latest/scale-to-width-down/20?cb=20170909150244\" data-relevant=\"0\" data-image-key=\"Heal_power_icon.png\" class=\"lazyload\" alt=\"Heal power icon\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a href=\"/wiki/Healing\" title=\"Healing\">healing</a></span> himself based on <span style=\"color: #1F995C; white-space:normal\">his <b>missing</b> health</span>.",
      "description": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Master Yi</b> <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Channels\" class=\"glossary\"><a title=\"Channel\" href=\"/wiki/Channel\"><img decoding=\"async\" alt=\"Channeling icon\" height=\"20\" data-image-name=\"Channeling icon.png\" width=\"20\" data-image-key=\"Channeling_icon.png\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Channeling_icon.png/revision/latest/scale-to-width-down/20?cb=20180628192319\"></a> <a title=\"Channel\" href=\"/wiki/Channel\">channels</a></span> for up to 4 seconds, <span data-game=\"lol\" data-tip=\"Healing\" style=\"white-space:pre; position:relative;\" class=\"glossary\"><a title=\"Healing\" href=\"/wiki/Healing\"><img alt=\"Heal power icon\" data-image-key=\"Heal_power_icon.png\" loading=\"lazy\" data-relevant=\"0\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Heal_power_icon.png/revision/latest/scale-to-width-down/20?cb=20170909150244\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" decoding=\"async\" data-image-name=\"Heal power icon.png\"></a> <a href=\"/wiki/Healing\" title=\"Healing\">healing</a></span> himself every 0.<small>5</small> seconds, increased by <span style=\"color: #1F995C; white-space:normal\"><span class=\"pp-tooltip\" data-bot_values=\"0;10;20;30;40;50;60;70;80;90;100\" data-top_key=\"%\" style=\"position:relative; border-bottom:1px dotted; cursor:help;\" data-top_label=\"missing health\" data-top_values=\"0;10;20;30;40;50;60;70;80;90;100\" data-bot_key=\"%\" data-displayformula=\"1% per 1% missing health\">0% − 100% (based on <b>missing</b> health)</span></span>.",
      "leveling": [
        [
          {
            "name": "Minimum Heal Per Tick:",
            "values": {
              "Both": [
                [
                  15.0,
                  25.0,
                  35.0,
                  45.0,
                  0.0
                ],
                "15 / 25 / 35 / 45 / 55 (+ 12.5% AP)"
              ]
            },
            "values_html": "15 / 25 / 35 / 45 / 55 <span style=\"color: #7A6DFF; white-space:normal\">(+ 12.<small>5</small>% AP)</span>"
          },
          {
            "name": "Maximum Heal Per Tick:",
            "values": {
              "Both": [
                [
                  30.0,
                  50.0,
                  70.0,
                  90.0,
                  0.0
                ],
                "30 / 50 / 70 / 90 / 110 (+ 25% AP)"
              ]
            },
            "values_html": "30 / 50 / 70 / 90 / 110 <span style=\"color: #7A6DFF; white-space:normal\">(+ 25% AP)</span>"
          }
        ],
        [
          {
            "name": "Minimum Total Heal:",
            "values": {
              "Both": [
                [
                  120.0,
                  200.0,
                  280.0,
                  360.0,
                  0.0
                ],
                "120 / 200 / 280 / 360 / 440 (+ 100% AP)"
              ]
            },
            "values_html": "120 / 200 / 280 / 360 / 440 <span style=\"color: #7A6DFF; white-space:normal\">(+ 100% AP)</span>"
          },
          {
            "name": "Maximum Total Heal:",
            "values": {
              "Both": [
                [
                  240.0,
                  400.0,
                  560.0,
                  720.0,
                  0.0
                ],
                "240 / 400 / 560 / 720 / 880 (+ 200% AP)"
              ]
            },
            "values_html": "240 / 400 / 560 / 720 / 880 <span style=\"color: #7A6DFF; white-space:normal\">(+ 200% AP)</span>"
          }
        ]
      ]
    },
    {
      "icon": "",
      "blurb": "While channeling, <b>Master Yi</b> gains damage reduction, pauses <i><span class=\"inline-image label-after ability-icon\" data-param=\"\" style=\"display:inline;white-space:pre;\" data-ability=\"Wuju Style\" data-champion=\"Master Yi\" data-game=\"lol\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border\"><a title=\"Wuju Style's\" href=\"/wiki/Master_Yi/LoL#Wuju_Style\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" height=\"20\" class=\"thumbborder lazyload\" data-image-key=\"Master_Yi_Wuju_Style.png\" data-image-name=\"Master Yi Wuju Style.png\" loading=\"lazy\" alt=\"Wuju Style's\" width=\"20\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/fc/Master_Yi_Wuju_Style.png/revision/latest/scale-to-width-down/20?cb=20170818192025\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL#Wuju_Style\" title=\"Master Yi/LoL\">Wuju Style's</a></span></span></i> and <i><span data-ability=\"Highlander\" style=\"display:inline;white-space:pre;\" data-champion=\"Master Yi\" data-game=\"lol\" class=\"inline-image label-after ability-icon\" data-param=\"\"><span class=\"border\" style=\"display:inline-block;position:relative;\" data-width=\"20\"><a title=\"Highlander's\" href=\"/wiki/Master_Yi/LoL#Highlander\"><img class=\"thumbborder lazyload\" data-image-key=\"Master_Yi_Highlander.png\" decoding=\"async\" alt=\"Highlander's\" width=\"20\" data-image-name=\"Master Yi Highlander.png\" data-relevant=\"0\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/10/Master_Yi_Highlander.png/revision/latest/scale-to-width-down/20?cb=20170818191955\" loading=\"lazy\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL#Highlander\" title=\"Master Yi/LoL\">Highlander's</a></span></span></i> duration, and gains one stack of <i><span data-game=\"lol\" style=\"display:inline;white-space:pre;\" class=\"inline-image label-after ability-icon\" data-champion=\"Master Yi\" data-param=\"\" data-ability=\"Double Strike\"><span style=\"display:inline-block;position:relative;\" data-width=\"20\" class=\"border\"><a href=\"/wiki/Master_Yi/LoL#Double_Strike\" title=\"Double Strike\"><img data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/Master_Yi_Double_Strike.png/revision/latest/scale-to-width-down/20?cb=20170818191944\" decoding=\"async\" data-image-name=\"Master Yi Double Strike.png\" width=\"20\" loading=\"lazy\" height=\"20\" class=\"thumbborder lazyload\" data-image-key=\"Master_Yi_Double_Strike.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Double Strike\"></a></span> <span style=\"white-space:normal;\"><a title=\"Master Yi/LoL\" href=\"/wiki/Master_Yi/LoL#Double_Strike\">Double Strike</a></span></span></i> per second.",
      "description": "While channeling, <b>Master Yi</b> gains 90% damage reduction for the first 0.<small>5</small> seconds, which is then modified to a reduced amount for the remaining duration of the channel. <i>Meditate's</i> damage reduction is halved against <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\" data-tip=\"Turret\"><a title=\"Turret\" href=\"/wiki/Turret\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" height=\"20\" loading=\"lazy\" data-image-key=\"Turret_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/82/Turret_icon.png/revision/latest/scale-to-width-down/20?cb=20180701054101\" width=\"20\" class=\"lazyload\" decoding=\"async\" alt=\"Turret icon\" data-image-name=\"Turret icon.png\"></a> <a href=\"/wiki/Turret\" title=\"Turret\">turrets</a></span> and lingers for 0.<small>5</small> seconds after the channel ends.",
      "leveling": [
        [
          {
            "name": "Damage Reduction:",
            "values": {
              "Both": [
                [
                  45.0,
                  47.5,
                  50.0,
                  52.5,
                  0.0
                ],
                "45 / 47.5 / 50 / 52.5 / 55%"
              ]
            },
            "values_html": "45 / 47.<small>5</small> / 50 / 52.<small>5</small> / 55%"
          },
          {
            "name": "Turret Damage Reduction:",
            "values": {
              "Both": [
                [
                  22.5,
                  23.75,
                  25.0,
                  26.25,
                  0.0
                ],
                "22.5 / 23.75 / 25 / 26.25 / 27.5%"
              ]
            },
            "values_html": "22.<small>5</small> / 23.<small>75</small> / 25 / 26.<small>25</small> / 27.<small>5</small>%"
          }
        ]
      ]
    },
    {
      "icon": "",
      "blurb": "",
      "description": "<i>Meditate <span class=\"glossary\" data-tip=\"Basic attack reset\" style=\"white-space:pre; position:relative;\" data-game=\"lol\"><a title=\"Basic attack\" href=\"/wiki/Basic_attack#Resets\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" class=\"lazyload\" loading=\"lazy\" data-image-name=\"Fiora Bladework.png\" alt=\"Bladework\" decoding=\"async\" width=\"20\" data-image-key=\"Fiora_Bladework.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Fiora_Bladework.png/revision/latest/scale-to-width-down/20?cb=20150721193304\"></a> <a href=\"/wiki/Basic_attack#Resets\" title=\"Basic attack\">resets</a></span> <b>Master Yi's</b> basic attack timer, pauses <span data-game=\"lol\" style=\"display:inline;white-space:pre;\" data-param=\"\" data-champion=\"Master Yi\" class=\"inline-image label-after ability-icon\" data-ability=\"Wuju Style\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a title=\"Wuju Style's\" href=\"/wiki/Master_Yi/LoL#Wuju_Style\"><img data-relevant=\"0\" data-image-key=\"Master_Yi_Wuju_Style.png\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/fc/Master_Yi_Wuju_Style.png/revision/latest/scale-to-width-down/20?cb=20170818192025\" decoding=\"async\" alt=\"Wuju Style's\" data-image-name=\"Master Yi Wuju Style.png\" width=\"20\" height=\"20\" class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL#Wuju_Style\" title=\"Master Yi/LoL\">Wuju Style's</a></span></span> and <span style=\"display:inline;white-space:pre;\" data-param=\"\" data-ability=\"Highlander\" class=\"inline-image label-after ability-icon\" data-game=\"lol\" data-champion=\"Master Yi\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border\"><a title=\"Highlander's\" href=\"/wiki/Master_Yi/LoL#Highlander\"><img alt=\"Highlander's\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-relevant=\"0\" loading=\"lazy\" class=\"thumbborder lazyload\" data-image-name=\"Master Yi Highlander.png\" data-image-key=\"Master_Yi_Highlander.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/1/10/Master_Yi_Highlander.png/revision/latest/scale-to-width-down/20?cb=20170818191955\" decoding=\"async\" width=\"20\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL#Highlander\" title=\"Master Yi/LoL\">Highlander's</a></span></span> duration, and grants one stack of <span data-param=\"\" data-champion=\"Master Yi\" data-ability=\"Double Strike\" class=\"inline-image label-after ability-icon\" style=\"display:inline;white-space:pre;\" data-game=\"lol\"><span class=\"border\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Master_Yi/LoL#Double_Strike\" title=\"Double Strike\"><img width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" alt=\"Double Strike\" data-image-name=\"Master Yi Double Strike.png\" data-image-key=\"Master_Yi_Double_Strike.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/Master_Yi_Double_Strike.png/revision/latest/scale-to-width-down/20?cb=20170818191944\" decoding=\"async\" data-relevant=\"0\" class=\"thumbborder lazyload\" height=\"20\"></a></span> <span style=\"white-space:normal;\"><a title=\"Master Yi/LoL\" href=\"/wiki/Master_Yi/LoL#Double_Strike\">Double Strike</a></span></span> per second during the channel.</i>",
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
  "silence": "true",
  "additional": "",
  "notes": "* <i>Meditate's</i> healing amount updates dynamically as he heals himself, making <b>Master Yi</b> heal for less as his <b>current</b> health increases.\n<ul><li>The following table refers for interactions while <b>Master Yi</b> is <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Channel\" data-game=\"lol\"><a href=\"/wiki/Channel\" title=\"Channel\"><img decoding=\"async\" alt=\"Channeling icon\" loading=\"lazy\" width=\"20\" data-relevant=\"0\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-name=\"Channeling icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Channeling_icon.png/revision/latest/scale-to-width-down/20?cb=20180628192319\" data-image-key=\"Channeling_icon.png\"></a> <a title=\"Channel\" href=\"/wiki/Channel\">channeling</a></span>:</li></ul>\n<table class=\"article-table\" style=\"font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;\">\n<tbody><tr>\n<th colspan=\"2\">Type\n</th>\n<td style=\"width:275px;\">Channel\n</td></tr>\n<tr>\n<th colspan=\"2\">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan=\"2\">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan=\"2\">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan=\"3\">Items\n</th>\n<th>Usable\n</th>\n<td><span data-game=\"lol\" class=\"inline-image label-after item-icon\" data-param=\"\" style=\"display:inline;white-space:pre;\" data-item=\"Shurelya's Battlesong\"><span class=\"border\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a title=\"Shurelya's Battlesong\" href=\"/wiki/Shurelya%27s_Battlesong\"><img class=\"thumbborder lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" decoding=\"async\" data-image-name=\"Shurelya's Battlesong item.png\" width=\"20\" alt=\"Shurelya's Battlesong\" data-relevant=\"0\" loading=\"lazy\" data-image-key=\"Shurelya%27s_Battlesong_item.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d4/Shurelya%27s_Battlesong_item.png/revision/latest/scale-to-width-down/20?cb=20201110202228\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Shurelya%27s_Battlesong\" title=\"Shurelya's Battlesong\">Shurelya's Battlesong</a></span></span> <span style=\"display:inline;white-space:pre;\" data-item=\"Youmuu's Ghostblade\" data-param=\"\" class=\"inline-image label-after item-icon\" data-game=\"lol\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a title=\"Youmuu's Ghostblade\" href=\"/wiki/Youmuu%27s_Ghostblade\"><img loading=\"lazy\" width=\"20\" data-image-name=\"Youmuu's Ghostblade item.png\" data-image-key=\"Youmuu%27s_Ghostblade_item.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"thumbborder lazyload\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Youmuu%27s_Ghostblade_item.png/revision/latest/scale-to-width-down/20?cb=20201027220530\" alt=\"Youmuu's Ghostblade\" decoding=\"async\" height=\"20\"></a></span> <span style=\"white-space:normal;\"><a title=\"Youmuu's Ghostblade\" href=\"/wiki/Youmuu%27s_Ghostblade\">Youmuu's Ghostblade</a></span></span> <span class=\"inline-image label-after item-icon\" data-item=\"Randuin's Omen\" style=\"display:inline;white-space:pre;\" data-game=\"lol\" data-param=\"\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border\"><a title=\"Randuin's Omen\" href=\"/wiki/Randuin%27s_Omen\"><img class=\"thumbborder lazyload\" loading=\"lazy\" decoding=\"async\" data-relevant=\"0\" alt=\"Randuin's Omen\" width=\"20\" height=\"20\" data-image-name=\"Randuin's Omen item.png\" data-image-key=\"Randuin%27s_Omen_item.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/08/Randuin%27s_Omen_item.png/revision/latest/scale-to-width-down/20?cb=20201027213705\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a></span> <span style=\"white-space:normal;\"><a title=\"Randuin's Omen\" href=\"/wiki/Randuin%27s_Omen\">Randuin's Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class=\"inline-image label-after item-icon\" data-param=\"\" data-item=\"Hextech Rocketbelt\" data-game=\"lol\" style=\"display:inline;white-space:pre;\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Hextech_Rocketbelt\" title=\"Hextech Rocketbelt\"><img width=\"20\" data-image-name=\"Hextech Rocketbelt item.png\" height=\"20\" alt=\"Hextech Rocketbelt\" loading=\"lazy\" data-image-key=\"Hextech_Rocketbelt_item.png\" data-relevant=\"0\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"thumbborder lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/8c/Hextech_Rocketbelt_item.png/revision/latest/scale-to-width-down/20?cb=20201118204847\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Hextech_Rocketbelt\" title=\"Hextech Rocketbelt\">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan=\"2\">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan=\"3\">Spells\n</th>\n<th>Usable\n</th>\n<td><span data-game=\"lol\" data-spell=\"Barrier\" style=\"display:inline;white-space:pre;\" data-param=\"\" class=\"inline-image label-after spell-icon\"><span class=\"border icon-20\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Barrier\" title=\"Barrier\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-name=\"Barrier.png\" class=\"thumbborder lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/cc/Barrier.png/revision/latest/scale-to-width-down/20?cb=20180514002510\" loading=\"lazy\" width=\"20\" data-image-key=\"Barrier.png\" alt=\"Barrier\" decoding=\"async\" data-relevant=\"0\"></a></span> <span style=\"white-space:normal;\"><a title=\"Barrier\" href=\"/wiki/Barrier\">Barrier</a></span></span> <span data-spell=\"Clarity\" data-game=\"lol\" class=\"inline-image label-after spell-icon\" style=\"display:inline;white-space:pre;\" data-param=\"\"><span class=\"border icon-20\" style=\"display:inline-block;position:relative;\" data-width=\"20\"><a href=\"/wiki/Clarity\" title=\"Clarity\"><img width=\"20\" height=\"20\" data-image-key=\"Clarity.png\" data-relevant=\"0\" decoding=\"async\" alt=\"Clarity\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"thumbborder lazyload\" data-image-name=\"Clarity.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d7/Clarity.png/revision/latest/scale-to-width-down/20?cb=20180514002750\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Clarity\" title=\"Clarity\">Clarity</a></span></span> <span data-game=\"lol\" data-param=\"\" style=\"display:inline;white-space:pre;\" class=\"inline-image label-after spell-icon\" data-spell=\"Cleanse\"><span style=\"display:inline-block;position:relative;\" data-width=\"20\" class=\"border icon-20\"><a title=\"Cleanse\" href=\"/wiki/Cleanse\"><img data-image-name=\"Cleanse.png\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" width=\"20\" height=\"20\" data-image-key=\"Cleanse.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/95/Cleanse.png/revision/latest/scale-to-width-down/20?cb=20180514002812\" alt=\"Cleanse\" class=\"thumbborder lazyload\" data-relevant=\"0\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Cleanse\" title=\"Cleanse\">Cleanse</a></span></span> <span data-spell=\"Exhaust\" data-game=\"lol\" style=\"display:inline;white-space:pre;\" data-param=\"\" class=\"inline-image label-after spell-icon\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border icon-20\"><a href=\"/wiki/Exhaust\" title=\"Exhaust\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" alt=\"Exhaust\" data-relevant=\"0\" data-image-key=\"Exhaust.png\" height=\"20\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/4a/Exhaust.png/revision/latest/scale-to-width-down/20?cb=20180514003128\" width=\"20\" class=\"thumbborder lazyload\" data-image-name=\"Exhaust.png\"></a></span> <span style=\"white-space:normal;\"><a title=\"Exhaust\" href=\"/wiki/Exhaust\">Exhaust</a></span></span> <span class=\"inline-image label-after spell-icon\" data-param=\"\" data-game=\"lol\" data-spell=\"Ghost\" style=\"display:inline;white-space:pre;\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border icon-20\"><a title=\"Ghost\" href=\"/wiki/Ghost\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/20?cb=20180514003209\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"thumbborder lazyload\" data-image-key=\"Ghost.png\" width=\"20\" alt=\"Ghost\" decoding=\"async\" height=\"20\" data-image-name=\"Ghost.png\" data-relevant=\"0\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Ghost\" title=\"Ghost\">Ghost</a></span></span> <span class=\"inline-image label-after spell-icon\" data-param=\"\" data-spell=\"Heal\" data-game=\"lol\" style=\"display:inline;white-space:pre;\"><span style=\"display:inline-block;position:relative;\" data-width=\"20\" class=\"border icon-20\"><a href=\"/wiki/Heal\" title=\"Heal\"><img data-image-name=\"Heal.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"thumbborder lazyload\" loading=\"lazy\" data-relevant=\"0\" alt=\"Heal\" decoding=\"async\" height=\"20\" data-image-key=\"Heal.png\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/6e/Heal.png/revision/latest/scale-to-width-down/20?cb=20180514003319\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Heal\" title=\"Heal\">Heal</a></span></span> <span class=\"inline-image label-after spell-icon\" data-param=\"\" data-spell=\"Ignite\" style=\"display:inline;white-space:pre;\" data-game=\"lol\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border icon-20\"><a title=\"Ignite\" href=\"/wiki/Ignite\"><img height=\"20\" loading=\"lazy\" data-image-key=\"Ignite.png\" decoding=\"async\" data-image-name=\"Ignite.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" class=\"thumbborder lazyload\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Ignite.png/revision/latest/scale-to-width-down/20?cb=20180514003345\" alt=\"Ignite\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Ignite\" title=\"Ignite\">Ignite</a></span></span> <span data-game=\"lol\" data-spell=\"Smite\" style=\"display:inline;white-space:pre;\" class=\"inline-image label-after spell-icon\" data-param=\"\"><span class=\"border icon-20\" style=\"display:inline-block;position:relative;\" data-width=\"20\"><a title=\"Smite\" href=\"/wiki/Smite\"><img loading=\"lazy\" data-image-key=\"Smite.png\" data-relevant=\"0\" data-image-name=\"Smite.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/05/Smite.png/revision/latest/scale-to-width-down/20?cb=20180514003641\" alt=\"Smite\" width=\"20\" class=\"thumbborder lazyload\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Smite\" title=\"Smite\">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span data-param=\"\" data-spell=\"Flash\" style=\"display:inline;white-space:pre;\" class=\"inline-image label-after spell-icon\" data-game=\"lol\"><span data-width=\"20\" style=\"display:inline-block;position:relative;\" class=\"border icon-20\"><a href=\"/wiki/Flash\" title=\"Flash\"><img data-image-key=\"Flash.png\" data-relevant=\"0\" class=\"thumbborder lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149\" decoding=\"async\" width=\"20\" alt=\"Flash\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" height=\"20\" data-image-name=\"Flash.png\"></a></span> <span style=\"white-space:normal;\"><a title=\"Flash\" href=\"/wiki/Flash\">Flash</a></span></span> <span data-spell=\"Teleport\" data-game=\"lol\" class=\"inline-image label-after spell-icon\" style=\"display:inline;white-space:pre;\" data-param=\"\"><span data-width=\"20\" class=\"border icon-20\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Teleport\" title=\"Teleport\"><img alt=\"Teleport\" loading=\"lazy\" height=\"20\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Teleport.png/revision/latest/scale-to-width-down/20?cb=20180514003653\" decoding=\"async\" data-image-name=\"Teleport.png\" data-image-key=\"Teleport.png\" class=\"thumbborder lazyload\"></a></span> <span style=\"white-space:normal;\"><a title=\"Teleport\" href=\"/wiki/Teleport\">Teleport</a></span></span> <span data-param=\"\" data-spell=\"Recall\" style=\"display:inline;white-space:pre;\" data-game=\"lol\" class=\"inline-image label-after spell-icon\"><span style=\"display:inline-block;position:relative;\" class=\"border icon-20\" data-width=\"20\"><a title=\"Recall\" href=\"/wiki/Recall\"><img data-image-name=\"Recall.png\" decoding=\"async\" alt=\"Recall\" width=\"20\" data-relevant=\"0\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Recall.png\" class=\"thumbborder lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/43/Recall.png/revision/latest/scale-to-width-down/20?cb=20171227214733\" height=\"20\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Recall\" title=\"Recall\">Recall</a></span></span> <span data-param=\"\" class=\"inline-image label-after spell-icon\" data-game=\"lol\" style=\"display:inline;white-space:pre;\" data-spell=\"Hexflash\"><span class=\"border icon-20\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Hextech_Flashtraption#Hexflash\" title=\"Hexflash\"><img loading=\"lazy\" width=\"20\" alt=\"Hexflash\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" class=\"thumbborder lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/76/Hexflash.png/revision/latest/scale-to-width-down/20?cb=20180514003331\" data-image-name=\"Hexflash.png\" data-relevant=\"0\" height=\"20\" data-image-key=\"Hexflash.png\" decoding=\"async\"></a></span> <span style=\"white-space:normal;\"><a title=\"Hextech Flashtraption\" href=\"/wiki/Hextech_Flashtraption#Hexflash\">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan=\"2\">Interrupted by\n</th>\n<td><li>Death</li><li><img data-image-key=\"Silence_icon.png\" class=\"lazyload\" decoding=\"async\" alt=\"Silence icon\" loading=\"lazy\" width=\"20\" height=\"20\" data-image-name=\"Silence icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223938\"> Cast-inhibiting effects\n</li></td></tr></tbody></table>",
  "flavortext": "",
  "flavorsound": "<span><audio hidden=\"\" data-volume=\"1.0\" preload=\"none\" class=\"ext-audiobutton\"><source type=\"application/ogg\" src=\"https://static.wikia.nocookie.net/leagueoflegends/images/3/38/Master_Yi_Original_W_0.ogg/revision/latest?cb=20221209162137\"><a href=\"https://static.wikia.nocookie.net/leagueoflegends/images/3/38/Master_Yi_Original_W_0.ogg/revision/latest?cb=20221209162137\">Link</a></audio><a data-state=\"play\" title=\"Play/Pause\" class=\"ext-audiobutton\">▶️</a></span><sup><a href=\"/wiki/File:Master_Yi_Original_W_0.ogg\" title=\"File:Master Yi Original W 0.ogg\">&nbsp;&nbsp;</a></sup> <i>\"Mind and body.\"</i>"
},
'Wuju Style': {
  "name": "Wuju Style",
  "displayName": "",
  "champion": "Master Yi",
  "skill": "E",
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
  "cost": "None",
  "costtype": "",
  "static": "",
  "cooldown": {
    "Both": [
      [
        14.0
      ],
      "14\n"
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
      "icon": "Wuju Style.png",
      "blurb": "<span class=\"template_sbc\"><b>Active:</b></span> <span style=\"display:inline;white-space:pre;\" data-champion=\"Master Yi\" class=\"inline-image label-after champion-icon\" data-skin=\"Original\" data-game=\"lol\" data-param=\"\"><span class=\"border\" style=\"display:inline-block;position:relative;\" data-width=\"20\"><a href=\"/wiki/Master_Yi/LoL\" title=\"Master Yi\"><img data-relevant=\"0\" data-image-key=\"Master_Yi_OriginalSquare.png\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/73/Master_Yi_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220630\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" alt=\"Master Yi\" decoding=\"async\" height=\"20\" class=\"thumbborder lazyload\" data-image-name=\"Master Yi OriginalSquare.png\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL\" title=\"Master Yi/LoL\">Master Yi</a></span></span> empowers his sword, causing his basic attacks to deal <span style=\"white-space:nowrap\"><a href=\"/wiki/True_damage\" title=\"True damage\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" data-relevant=\"0\" data-image-key=\"Hybrid_penetration_icon.png\" data-image-name=\"Hybrid penetration icon.png\" alt=\"Hybrid penetration icon\" height=\"15\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/c0/Hybrid_penetration_icon.png/revision/latest/scale-to-width-down/15?cb=20171001102450\" class=\"lazyload\" loading=\"lazy\" width=\"15\"></a>&nbsp;<span style=\"color: #F9966B; white-space:normal\"><b>bonus</b> true damage</span></span> <span data-game=\"lol\" data-tip=\"On-hit\" style=\"white-space:pre; position:relative;\" class=\"glossary\"><a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\"><img height=\"20\" loading=\"lazy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106\" decoding=\"async\" alt=\"On-hit icon\" width=\"20\" data-image-key=\"On-hit_icon.png\" class=\"lazyload\" data-image-name=\"On-hit icon.png\" data-relevant=\"0\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\">on-hit</a></span> for a few seconds.",
      "description": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Master Yi</b> empowers his basic attacks within the next 5 seconds to deal <span style=\"white-space:nowrap\"><a title=\"True damage\" href=\"/wiki/True_damage\"><img alt=\"Hybrid penetration icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"15\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/c0/Hybrid_penetration_icon.png/revision/latest/scale-to-width-down/15?cb=20171001102450\" data-image-key=\"Hybrid_penetration_icon.png\" class=\"lazyload\" decoding=\"async\" data-image-name=\"Hybrid penetration icon.png\" width=\"15\" loading=\"lazy\"></a>&nbsp;<span style=\"color: #F9966B; white-space:normal\"><b>bonus</b> true damage</span></span> <span data-tip=\"On-hit\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\"><a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\"><img data-relevant=\"0\" data-image-name=\"On-hit icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106\" width=\"20\" data-image-key=\"On-hit_icon.png\" decoding=\"async\" class=\"lazyload\" alt=\"On-hit icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" height=\"20\"></a> <a href=\"/wiki/Attack_effects#On_Hitting\" title=\"Attack effects\">on-hit</a></span>.",
      "leveling": [
        [
          {
            "name": "Bonus True Damage:",
            "values": {
              "Both": [
                [
                  30.0,
                  35.0,
                  40.0,
                  45.0,
                  0.0
                ],
                "30 / 35 / 40 / 45 / 50 (+ 30% bonus AD)"
              ]
            },
            "values_html": "30 / 35 / 40 / 45 / 50 <span style=\"color:orange; white-space:normal\">(+ 30% <b>bonus</b> AD)</span>"
          }
        ]
      ]
    }
  ],
  "targeting": "Auto",
  "affects": "Self",
  "damagetype": "True",
  "spelleffects": "Proc",
  "spellshield": "",
  "projectile": "",
  "callforhelp": "",
  "grounded": "",
  "knockdown": "",
  "silence": "",
  "additional": "",
  "notes": "* <i>Wuju Style</i> can be cast during <span data-game=\"lol\" data-champion=\"Master Yi\" class=\"inline-image label-after ability-icon\" style=\"display:inline;white-space:pre;\" data-ability=\"Alpha Strike\" data-param=\"\"><span style=\"display:inline-block;position:relative;\" data-width=\"20\" class=\"border\"><a title=\"Alpha Strike\" href=\"/wiki/Master_Yi/LoL#Alpha_Strike\"><img class=\"thumbborder lazyload\" data-image-key=\"Master_Yi_Alpha_Strike.png\" width=\"20\" data-image-name=\"Master Yi Alpha Strike.png\" data-relevant=\"0\" loading=\"lazy\" height=\"20\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Alpha Strike\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/ce/Master_Yi_Alpha_Strike.png/revision/latest/scale-to-width-down/20?cb=20170818191917\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL#Alpha_Strike\" title=\"Master Yi/LoL\">Alpha Strike</a></span></span>.\n<ul><li><i>Wuju Style</i> can't be cast while it is already active.</li>\n<li><i>Wuju Style's</i> bonus true damage does not interact with <span data-game=\"lol\" style=\"white-space:pre; position:relative;\" class=\"glossary\" data-tip=\"Critical strike\"><a href=\"/wiki/Critical_strike\" title=\"Critical strike\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550\" alt=\"Critical strike icon\" data-image-key=\"Critical_strike_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" loading=\"lazy\" height=\"20\" data-relevant=\"1\" decoding=\"async\" class=\"lazyload\" data-image-name=\"Critical strike icon.png\"></a> <a title=\"Critical strike\" href=\"/wiki/Critical_strike\">critical strikes</a></span>.</li>\n<li><i>Wuju Style's</i> bonus true damage cannot be <span data-tip=\"Block\" data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\"><a href=\"/wiki/Attack_effects#Parrying\" title=\"Attack effects\"><img data-image-name=\"Shen Spirit's Refuge.png\" data-relevant=\"0\" loading=\"lazy\" width=\"20\" decoding=\"async\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Shen_Spirit%27s_Refuge.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Shen_Spirit%27s_Refuge.png/revision/latest/scale-to-width-down/20?cb=20170217191016\" alt=\"Spirit's Refuge\" class=\"lazyload\"></a> <a title=\"Attack effects\" href=\"/wiki/Attack_effects#Parrying\">blocked</a></span> but can be <span class=\"glossary\" data-tip=\"Dodge\" data-game=\"lol\" style=\"white-space:pre; position:relative;\"><a title=\"Attack effects\" href=\"/wiki/Attack_effects#Parrying\"><img alt=\"Jax Counter Strike old\" loading=\"lazy\" decoding=\"async\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Jax Counter Strike old.png\" data-image-key=\"Jax_Counter_Strike_old.png\" data-relevant=\"0\" height=\"20\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Jax_Counter_Strike_old.png/revision/latest/scale-to-width-down/20?cb=20171223030746\" class=\"lazyload\"></a> <a href=\"/wiki/Attack_effects#Parrying\" title=\"Attack effects\">dodged</a></span> and/or missed if <b>Master Yi</b> is <span data-tip=\"Blind\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\"><a href=\"/wiki/Blind\" title=\"Blind\"><img alt=\"Blind icon\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-name=\"Blind icon.png\" loading=\"lazy\" data-image-key=\"Blind_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/8/81/Blind_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224954\" class=\"lazyload\" width=\"20\" data-relevant=\"0\" decoding=\"async\"></a> <a href=\"/wiki/Blind\" class=\"mw-redirect\" title=\"Blind\">blinded</a></span>.</li>\n<li>The attacks do not deal the <b>bonus</b> damage against <a title=\"Structures\" href=\"/wiki/Structures\" class=\"mw-redirect\">structures</a>.</li></ul>",
  "flavortext": "",
  "flavorsound": ""
},
'Highlander': {
  "name": "Highlander",
  "displayName": "",
  "champion": "Master Yi",
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
  "costtype": "Mana",
  "static": "",
  "cooldown": {
    "Both": [
      [
        85.0
      ],
      "85\n"
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
      "blurb": "<span class=\"template_sbc\"><b>Passive:</b></span> Scoring a champion <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Takedown\" data-game=\"lol\"><a title=\"Takedown\" href=\"/wiki/Takedown\"><img height=\"20\" width=\"20\" data-relevant=\"0\" alt=\"Damage rating\" class=\"lazyload\" data-image-name=\"Damage rating.png\" data-image-key=\"Damage_rating.png\" loading=\"lazy\" decoding=\"async\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/07/Damage_rating.png/revision/latest/scale-to-width-down/20?cb=20170514053710\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\"></a> <a href=\"/wiki/Takedown\" title=\"Takedown\">takedown</a></span> massively <span style=\"white-space:nowrap\"><a href=\"/wiki/Cooldown_reduction\" title=\"Cooldown reduction\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" data-image-key=\"Cooldown_reduction_icon.png\" height=\"15\" decoding=\"async\" data-relevant=\"0\" class=\"lazyload\" data-image-name=\"Cooldown reduction icon.png\" width=\"15\" alt=\"Cooldown reduction icon\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/95/Cooldown_reduction_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203444\"></a>&nbsp;reduces</span> the <b>current</b> cooldowns of <span style=\"display:inline;white-space:pre;\" data-param=\"\" data-champion=\"Master Yi\" class=\"inline-image label-after champion-icon\" data-game=\"lol\" data-skin=\"Original\"><span class=\"border\" data-width=\"20\" style=\"display:inline-block;position:relative;\"><a title=\"Master Yi's\" href=\"/wiki/Master_Yi/LoL\"><img decoding=\"async\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Master_Yi_OriginalSquare.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/73/Master_Yi_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220630\" width=\"20\" height=\"20\" data-image-name=\"Master Yi OriginalSquare.png\" alt=\"Master Yi's\" class=\"thumbborder lazyload\" data-relevant=\"0\"></a></span> <span style=\"white-space:normal;\"><a href=\"/wiki/Master_Yi/LoL\" title=\"Master Yi/LoL\">Master Yi's</a></span></span> basic abilities.",
      "description": "<span class=\"template_sbc\"><b>Passive:</b></span> Scoring a champion <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Takedown\" class=\"glossary\"><a href=\"/wiki/Takedown\" title=\"Takedown\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/07/Damage_rating.png/revision/latest/scale-to-width-down/20?cb=20170514053710\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Damage rating.png\" data-relevant=\"0\" class=\"lazyload\" loading=\"lazy\" decoding=\"async\" data-image-key=\"Damage_rating.png\" alt=\"Damage rating\" height=\"20\" width=\"20\"></a> <a title=\"Takedown\" href=\"/wiki/Takedown\">takedown</a></span> reduces the <span style=\"white-space:nowrap\"><a title=\"Cooldown\" href=\"/wiki/Cooldown\"><img height=\"15\" data-image-key=\"Cooldown_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027\" class=\"lazyload\" data-image-name=\"Cooldown icon.png\" loading=\"lazy\" alt=\"Cooldown icon\" decoding=\"async\" width=\"15\"></a>&nbsp;<b>current</b> cooldowns</span> of <b>Master Yi's</b> basic <a title=\"Champion ability\" href=\"/wiki/Champion_ability\">abilities</a> by 70%.",
      "leveling": []
    },
    {
      "icon": "Highlander.png",
      "blurb": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Master Yi</b> <span style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\" data-tip=\"Cleanse\"><a title=\"Crowd control\" href=\"/wiki/Crowd_control#Removal\"><img data-image-name=\"Gangplank Remove Scurvy.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" loading=\"lazy\" data-image-key=\"Gangplank_Remove_Scurvy.png\" width=\"20\" alt=\"Remove Scurvy\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Gangplank_Remove_Scurvy.png/revision/latest/scale-to-width-down/20?cb=20150707190028\" class=\"lazyload\" data-relevant=\"0\"></a> <a title=\"Crowd control\" href=\"/wiki/Crowd_control#Removal\">cleanses</a></span> himself from all <span class=\"glossary\" data-tip=\"Slow\" data-game=\"lol\" style=\"white-space:pre; position:relative;\"><a href=\"/wiki/Slow\" title=\"Slow\"><img data-image-key=\"Slow_icon.png\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744\" data-image-name=\"Slow icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-relevant=\"0\" decoding=\"async\" height=\"20\" loading=\"lazy\" width=\"20\" alt=\"Slow icon\"></a> <a href=\"/wiki/Slow\" title=\"Slow\" class=\"mw-redirect\">slows</a></span> and <span data-tip=\"Cripple\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" class=\"glossary\"><a href=\"/wiki/Cripple\" title=\"Cripple\"><img loading=\"lazy\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/9f/Cripple_icon.png/revision/latest/scale-to-width-down/20?cb=20171202000853\" data-image-key=\"Cripple_icon.png\" decoding=\"async\" alt=\"Cripple icon\" height=\"20\" data-image-name=\"Cripple icon.png\" data-relevant=\"0\" class=\"lazyload\"></a> <a class=\"mw-redirect\" title=\"Cripple\" href=\"/wiki/Cripple\">cripples</a></span> and gains <span class=\"glossary\" data-game=\"lol\" data-tip=\"Ghosting\" style=\"white-space:pre; position:relative;\"><a title=\"Unit collision\" href=\"/wiki/Unit_collision\"><img width=\"20\" data-image-key=\"Ghost.png\" data-relevant=\"0\" class=\"lazyload\" data-image-name=\"Ghost.png\" loading=\"lazy\" height=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/20?cb=20180514003209\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" alt=\"Ghost\" decoding=\"async\"></a> <a href=\"/wiki/Unit_collision\" title=\"Unit collision\">ghosting</a></span>, <span style=\"white-space:nowrap\"><a href=\"/wiki/Attack_speed\" title=\"Attack speed\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Attack_speed_icon.png\" class=\"lazyload\" width=\"15\" loading=\"lazy\" alt=\"Attack speed icon\" data-relevant=\"0\" data-image-name=\"Attack speed icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443\" height=\"15\" decoding=\"async\"></a>&nbsp;<span style=\"color:orangered; white-space:normal\"><b>bonus</b> attack speed</span></span>, <span style=\"white-space:nowrap\"><a title=\"Movement speed\" href=\"/wiki/Movement_speed\"><img alt=\"Movement speed icon\" height=\"15\" data-image-name=\"Movement speed icon.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" class=\"lazyload\" decoding=\"async\" data-image-key=\"Movement_speed_icon.png\" width=\"15\"></a>&nbsp;<span style=\"color: #F5EE99; white-space:normal\"><b>bonus</b> movement speed</span></span>, <span data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Slow-immune\"><a href=\"/wiki/Slow_resist#Slow_Immunity\" title=\"Slow resist\"><img alt=\"Slow immune 2\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/a9/Slow_immune_2.png/revision/latest/scale-to-width-down/20?cb=20200327223234\" decoding=\"async\" data-image-key=\"Slow_immune_2.png\" loading=\"lazy\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" data-relevant=\"0\" data-image-name=\"Slow immune 2.png\" class=\"lazyload\"></a> <a title=\"Slow resist\" href=\"/wiki/Slow_resist#Slow_Immunity\">slow immunity</a></span>, and <span data-tip=\"Cripple-immune\" class=\"glossary\" data-game=\"lol\" style=\"white-space:pre; position:relative;\"><a title=\"Slow resist\" href=\"/wiki/Slow_resist#Cripple_Immunity\"><img data-relevant=\"0\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Cripple_immune.png/revision/latest/scale-to-width-down/20?cb=20201010064742\" class=\"lazyload\" decoding=\"async\" data-image-key=\"Cripple_immune.png\" alt=\"Cripple immune\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-name=\"Cripple immune.png\" loading=\"lazy\"></a> <a href=\"/wiki/Slow_resist#Cripple_Immunity\" title=\"Slow resist\">cripple immunity</a></span> all for the next few seconds.",
      "description": "<span class=\"template_sbc\"><b>Active:</b></span> <b>Master Yi</b> <span data-game=\"lol\" style=\"white-space:pre; position:relative;\" data-tip=\"Cleanse\" class=\"glossary\"><a title=\"Crowd control\" href=\"/wiki/Crowd_control#Removal\"><img alt=\"Remove Scurvy\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Gangplank_Remove_Scurvy.png/revision/latest/scale-to-width-down/20?cb=20150707190028\" height=\"20\" loading=\"lazy\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" width=\"20\" data-relevant=\"0\" data-image-name=\"Gangplank Remove Scurvy.png\" decoding=\"async\" class=\"lazyload\" data-image-key=\"Gangplank_Remove_Scurvy.png\"></a> <a title=\"Crowd control\" href=\"/wiki/Crowd_control#Removal\">cleanses</a></span> himself from all <span class=\"glossary\" data-game=\"lol\" data-tip=\"Slow\" style=\"white-space:pre; position:relative;\"><a title=\"Slow\" href=\"/wiki/Slow\"><img data-relevant=\"0\" alt=\"Slow icon\" decoding=\"async\" width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-key=\"Slow_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744\" loading=\"lazy\" height=\"20\" data-image-name=\"Slow icon.png\" class=\"lazyload\"></a> <a href=\"/wiki/Slow\" class=\"mw-redirect\" title=\"Slow\">slows</a></span> and <span style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Cripple\" class=\"glossary\"><a href=\"/wiki/Cripple\" title=\"Cripple\"><img data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/9f/Cripple_icon.png/revision/latest/scale-to-width-down/20?cb=20171202000853\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Cripple icon.png\" loading=\"lazy\" decoding=\"async\" width=\"20\" class=\"lazyload\" alt=\"Cripple icon\" height=\"20\" data-image-key=\"Cripple_icon.png\"></a> <a href=\"/wiki/Cripple\" title=\"Cripple\" class=\"mw-redirect\">cripples</a></span>. For the next 7 seconds, he gains <span data-tip=\"Ghosting\" style=\"white-space:pre; position:relative;\" class=\"glossary\" data-game=\"lol\"><a href=\"/wiki/Unit_collision\" title=\"Unit collision\"><img width=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-key=\"Ghost.png\" decoding=\"async\" alt=\"Ghost\" loading=\"lazy\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/20?cb=20180514003209\" class=\"lazyload\" data-image-name=\"Ghost.png\"></a> <a href=\"/wiki/Unit_collision\" title=\"Unit collision\">ghosting</a></span>, <span style=\"white-space:nowrap\"><a href=\"/wiki/Attack_speed\" title=\"Attack speed\"><img height=\"15\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443\" width=\"15\" alt=\"Attack speed icon\" class=\"lazyload\" loading=\"lazy\" data-relevant=\"0\" decoding=\"async\" data-image-key=\"Attack_speed_icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Attack speed icon.png\"></a>&nbsp;<span style=\"color:orangered; white-space:normal\"><b>bonus</b> attack speed</span></span>, <span style=\"white-space:nowrap\"><a href=\"/wiki/Movement_speed\" title=\"Movement speed\"><img data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540\" data-image-key=\"Movement_speed_icon.png\" data-image-name=\"Movement speed icon.png\" class=\"lazyload\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" loading=\"lazy\" alt=\"Movement speed icon\" width=\"15\" height=\"15\" data-relevant=\"0\"></a>&nbsp;<span style=\"color: #F5EE99; white-space:normal\"><b>bonus</b> movement speed</span></span>, <span data-game=\"lol\" class=\"glossary\" style=\"white-space:pre; position:relative;\" data-tip=\"Slow-immune\"><a href=\"/wiki/Slow_resist#Slow_Immunity\" title=\"Slow resist\"><img loading=\"lazy\" height=\"20\" data-image-name=\"Slow immune 2.png\" data-image-key=\"Slow_immune_2.png\" data-relevant=\"0\" width=\"20\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/a9/Slow_immune_2.png/revision/latest/scale-to-width-down/20?cb=20200327223234\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" class=\"lazyload\" alt=\"Slow immune 2\"></a> <a title=\"Slow resist\" href=\"/wiki/Slow_resist#Slow_Immunity\">slow immunity</a></span>, and <span data-game=\"lol\" style=\"white-space:pre; position:relative;\" data-tip=\"Cripple-immune\" class=\"glossary\"><a href=\"/wiki/Slow_resist#Cripple_Immunity\" title=\"Slow resist\"><img decoding=\"async\" class=\"lazyload\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Cripple_immune.png/revision/latest/scale-to-width-down/20?cb=20201010064742\" data-image-key=\"Cripple_immune.png\" width=\"20\" data-image-name=\"Cripple immune.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" alt=\"Cripple immune\" height=\"20\" data-relevant=\"0\"></a> <a title=\"Slow resist\" href=\"/wiki/Slow_resist#Cripple_Immunity\">cripple immunity</a></span>.",
      "leveling": [
        [
          {
            "name": "Bonus Attack Speed:",
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
        ],
        [
          {
            "name": "Bonus Movement Speed:",
            "values": {
              "Both": [
                [
                  35.0,
                  40.0,
                  45.0,
                  50.0,
                  0.0
                ],
                "35 / 40 / 45 / 50 / 55%"
              ]
            },
            "values_html": "35 / 40 / 45 / 50 / 55%"
          }
        ]
      ]
    },
    {
      "icon": "",
      "blurb": "While active, scoring a champion <span data-tip=\"Takedown\" class=\"glossary\" data-game=\"lol\" style=\"white-space:pre; position:relative;\"><a title=\"Takedown\" href=\"/wiki/Takedown\"><img loading=\"lazy\" alt=\"Damage rating\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" data-image-name=\"Damage rating.png\" data-image-key=\"Damage_rating.png\" decoding=\"async\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/07/Damage_rating.png/revision/latest/scale-to-width-down/20?cb=20170514053710\" width=\"20\" class=\"lazyload\"></a> <a title=\"Takedown\" href=\"/wiki/Takedown\">takedown</a></span> extends <i>Highlander's</i> duration by a few seconds.",
      "description": "While active, scoring a champion <span class=\"glossary\" data-game=\"lol\" style=\"white-space:pre; position:relative;\" data-tip=\"Takedown\"><a href=\"/wiki/Takedown\" title=\"Takedown\"><img data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/0/07/Damage_rating.png/revision/latest/scale-to-width-down/20?cb=20170514053710\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" height=\"20\" data-image-name=\"Damage rating.png\" alt=\"Damage rating\" decoding=\"async\" loading=\"lazy\" width=\"20\" class=\"lazyload\" data-image-key=\"Damage_rating.png\"></a> <a title=\"Takedown\" href=\"/wiki/Takedown\">takedown</a></span> extends <i>Highlander's</i> duration by 7 seconds.",
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
  "notes": "* <i>Highlander</i> can be cast during <span data-param=\"\" data-champion=\"Master Yi\" data-game=\"lol\" style=\"display:inline;white-space:pre;\" class=\"inline-image label-after ability-icon\" data-ability=\"Alpha Strike\"><span data-width=\"20\" class=\"border\" style=\"display:inline-block;position:relative;\"><a href=\"/wiki/Master_Yi/LoL#Alpha_Strike\" title=\"Alpha Strike\"><img decoding=\"async\" width=\"20\" alt=\"Alpha Strike\" height=\"20\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" loading=\"lazy\" class=\"thumbborder lazyload\" data-image-key=\"Master_Yi_Alpha_Strike.png\" data-relevant=\"0\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/c/ce/Master_Yi_Alpha_Strike.png/revision/latest/scale-to-width-down/20?cb=20170818191917\" data-image-name=\"Master Yi Alpha Strike.png\"></a></span> <span style=\"white-space:normal;\"><a title=\"Master Yi/LoL\" href=\"/wiki/Master_Yi/LoL#Alpha_Strike\">Alpha Strike</a></span></span>.\n<ul><li>There are two situations that can happen if <b>Master Yi</b> uses <i>Highlander</i> while <i>Highlander's</i> buff is active.\n<ul><li>If the buff's duration is under 7 seconds, the buff refreshes to 7 seconds.</li>\n<li>If the buff's duration is above 7 seconds, nothing happens.</li></ul></li></ul>",
  "flavortext": "",
  "flavorsound": "<span><audio data-volume=\"1.0\" hidden=\"\" class=\"ext-audiobutton\" preload=\"none\"><source src=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/aa/Master_Yi_Original_R_6.ogg/revision/latest?cb=20221209162119\" type=\"application/ogg\"><a href=\"https://static.wikia.nocookie.net/leagueoflegends/images/a/aa/Master_Yi_Original_R_6.ogg/revision/latest?cb=20221209162119\">Link</a></audio><a data-state=\"play\" title=\"Play/Pause\" class=\"ext-audiobutton\">▶️</a></span><sup><a title=\"File:Master Yi Original R 6.ogg\" href=\"/wiki/File:Master_Yi_Original_R_6.ogg\">&nbsp;&nbsp;</a></sup> <i>\"Speed of thought!\"</i>"
},
} satisfies { [n in SkillName]: SkillGenData };

