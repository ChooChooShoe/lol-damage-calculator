import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Shyvana';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Shyvana_Fury_of_the_Dragonborn.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Shyvana</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">5 <b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">5 <b>bonus</b> magic resistance</span></span>, which are each increased by 5 for every <img alt="Elemental Drakes icon.png" src="/wiki/images/Elemental_Drakes_icon.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"> <a href="/wiki/Elemental_drake" class="mw-redirect" title="Elemental drake">elemental drake</a> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elder_Dragon" title="Elder Dragon"><img alt="Elder Dragon" src="/wiki/images/Elder_DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elder_Dragon" title="Elder Dragon">Elder Dragon</a></span></span> her team slays.',
    leveling: [],
  },
  {
    description:
      'Additionally, <b>Shyvana</b> deals 20% increased damage to <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragons"><img alt="Dragons" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragons</a></span></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Shyvana_Twin_Bite.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shyvana</b> empowers her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 6 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span>, deal <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, and cause her to strike again after 0.<small>25</small> seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.<br><br>The second strike applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness and is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Shyvana empowers her next basic attack within 6 seconds to gain  25 bonus range, deal 100% AD (+ 35% AP) physical damage, and cause her to strike again after 0',
        values: 6,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'physical damage, and cause her to strike again after 0',
        pre: 'Shyvana empowers her next basic attack within 6 seconds to gain  25 bonus range, deal 100% AD',
        post: 'physical damage, and cause her to strike again after 0',
        children: [
          {
            values: 35,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 35% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '20 / 35 / 50 / 65 / 80% AD (+ 25% AP)',
        values: [20, 35, 50, 65, 80],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '20 / 35 / 50 / 65 / 80% AD',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Basic attacks reduce <i>Twin Bite\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 0.<small>5</small> seconds <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> Bonus:</b></span> <b>Shyvana</b> attacks enemies in a cone in front of her and applies the second strike to enemies surrounding the primary target. Both the attack and the strike occur at the same time and each of them apply <i>Twin Strike\'s</i> respective effects to all targets hit, with the exception of the second strike not applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects and being unable to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. The attack is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects to enemies hit, and triggers <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects against only the primary target. Additionally, <i>Twin Bite\'s</i> empowered attack has an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i>Twin Bite <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Shyvana\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Shyvana_Burnout.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shyvana</b> surrounds herself in flames for 3 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">decaying <b>bonus</b> movement speed</span></span> and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '30 / 35 / 40 / 45 / 50% (+ 8% per 100 AP)',
        values: [30, 35, 40, 45, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50%',
        children: [
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 8% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed Decay:',
        raw: '4.5 / 5.25 / 6 / 6.75 / 7.5%',
        values: [4.5, 5.25, 6, 6.75, 7.5],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4.5 / 5.25 / 6 / 6.75 / 7.5%',
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '10 / 16.25 / 22.5 / 28.75 / 35 (+ 15% bonus AD)',
        values: [10, 16.25, 22.5, 28.75, 35],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 16.25 / 22.5 / 28.75 / 35',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 15% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'During this time, <b>Shyvana\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>additional</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> equal to 50% of <i>Burnout\'s</i> per-tick damage to surrounding enemies and extend the duration of <i>Burnout</i> by 1 second, which can occur up to 4 times for a total of 4 additional seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '5 / 8.125 / 11.25 / 14.375 / 17.5 (+ 7.5% bonus AD)',
        values: [5, 8.125, 11.25, 14.375, 17.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 8.125 / 11.25 / 14.375 / 17.5',
        children: [
          {
            values: 7.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 7.5% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> Bonus:</b></span> <i>Burnout\'s</i> radius increases, scaling with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon\'s Descent\'s"><img alt="Dragon\'s Descent\'s" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon\'s Descent\'s</a></span></span></i> rank.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Shyvana_Flame_Breath.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shyvana</b> unleashes a fireball in the target direction that stops upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies hit and marking them for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 40% AD) (+ 90% AP)',
        values: [60, 100, 140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 40% AD',
          },
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Shyvana\'s</b> basic attacks against marked enemies are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> equal to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">3% of the target\'s <b>maximum</b> health</span></span>, capped at 150 against monsters.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> Bonus:</b></span> The fireball deals increased <span style="color: #00B0F0; white-space:normal">magic damage</span> and explodes upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or reaching the target location, creating a scorched field for 4 seconds. Enemies within the field are marked once and dealt <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-displayformula="30 + 2.5 per level" data-bot_values="30;32.5;35;37.5;40;42.5;45;47.5;50;52.5;55;57.5;60" data-top_values="6;7;8;9;10;11;12;13;14;15;16;17;18">30 − 60 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;5% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' Enemies within the field are marked once and dealt 30 − 60 (based on level) (+ 5% AD) (+ 10% AP) magic damage every 0',
        damagetype: 'Magic',
        values: [
          30, 31.76, 33.53, 35.29, 37.06, 38.82, 40.59, 42.35, 44.12, 45.88,
          47.65, 49.41, 51.18, 52.94, 54.71, 56.47, 58.24, 60,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage every 0',
        pre: 'Enemies within the field are marked once and dealt 30 − 60',
        post: 'magic damage every 0',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 5% AD',
          },
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '75 − 135 (based on level) (+ 60 / 100 / 140 / 180 / 220) (+ 70% AD) (+ 120% AP)',
        values: [
          75, 78.53, 82.06, 85.59, 89.12, 92.65, 96.18, 99.71, 103.24, 106.76,
          110.29, 113.82, 117.35, 120.88, 124.41, 127.94, 131.47, 135,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 − 135',
        children: [
          {
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 60 / 100 / 140 / 180 / 220',
          },
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 70% AD',
          },
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 120% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Flame Breath while in <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive - Fury:</b></span> <i>Dragon\'s Descent</i> requires <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">100 Fury</span></a></span> to be cast. <b>Shyvana</b> generates <span style="color: #FA6533; white-space:normal">Fury</span> per second while alive and in <span class="template_sbc"><b>Human form</b></span> and <span style="color: #FA6533; white-space:normal">2 Fury</span> per basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> in either form. <b>Shyvana</b> gains <span style="color: #FA6533; white-space:normal">100 Fury</span> upon learning <i>Dragon\'s Descent</i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Fury Generation per Second:',
        raw: '1 / 1.5 / 2',
        values: [1, 1.5, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.5 / 2',
      },
    ],
  },
  {
    img: '/wiki/images/Shyvana_Dragon%27s_Descent.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shyvana</b> transforms into <span class="template_sbc"><b>Dragon Form</b></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">carrying</a></span> them alongside her.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 130% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 130% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Dragon Form</b></span>: <b>Shyvana</b> gains <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span>, and increased <a href="/wiki/Size" title="Size">size</a>. Her abilities are also empowered to apply an additional effect. She maintains <span class="template_sbc"><b>Dragon Form</b></span> at a recurring cost of <span style="color: #FA6533; white-space:normal">Fury</span>, returning to <span class="template_sbc"><b>Human Form</b></span> once all <span style="color: #FA6533; white-space:normal">Fury</span> has been depleted.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Health:',
        raw: '150 / 250 / 350',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Range:',
        raw: '50 / 65 / 80',
        values: [50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 65 / 80',
      },
      {
        effectType: 'Unique',
        name: 'Size Increase:',
        raw: '0 / 8.5 / 16%',
        values: [0, 8.5, 16],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0 / 8.5 / 16%',
      },
    ],
  },
  {
    description:
      "<i>Dragon's Descent will cast at max range if cast beyond that.</i>",
    leveling: [],
  },
];
export const Shyvana = { I, Q, W, E, R };
