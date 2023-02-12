import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Olaf';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Olaf_Berserker_Rage.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Olaf</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span> based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>, up to <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="60;" data-finish="100;" data-bot_values="60;62.35;64.71;67.06;69.41;71.76;74.12;76.47;78.82;81.18;83.53;85.88;88.24;90.59;92.94;95.29;97.65;100" data-top_values="" data-bot_key="%">60% − 100% (based on level)</span> <b>bonus</b> attack speed</span> and <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;" data-finish="25;" data-bot_values="8;9;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25" data-top_values="" data-bot_key="%">8% − 25% (based on level)</span> life steal at <span style="color: #1F995C; white-space:normal">70% <b>missing</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Olaf gains  bonus attack speed and  life steal based on his missing health, up to 60% − 100% (based on level) bonus attack speed and 8% − 25% (based on level) life steal at 70% missing health',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: 'bonus attack speed and 8% − 25%',
        pre: 'Olaf gains  bonus attack speed and  life steal based on his missing health, up to 60% − 100%',
        post: 'bonus attack speed and 8% − 25%',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Olaf_Undertow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> throws an axe to the target location that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-displayformula="1.5+(0.125 per 75 units traveled)" data-bot_values="1.5;1.63;1.75;1.88;2;2.13;2.25;2.38;2.5" data-top_values="400;475;550;625;700;775;850;925;1000">1.<small>5</small> − 2.<small>5</small> (based on distance traveled)</span> seconds. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit are also inflicted with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">20% armor reduction</span></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 − 2',
        values: [5, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 − 2',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '5 (based on distance traveled) seconds',
        values: 5,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '5',
        post: 'seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance traveled',
            pre: 'based on distance traveled',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+ 100% bonus AD)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '25 / 30 / 35 / 40 / 45%',
        values: [25, 30, 35, 40, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45%',
      },
    ],
  },
  {
    description:
      'The axe remains in place for a duration equal to <i>Undertow\'s</i> cooldown, briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. <b>Olaf</b> can pick up the axe to reduce <i>Undertow\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">2.<small>5</small> seconds</span>, which resets the cooldown if that has already elapsed.',
    leveling: [],
  },
  {
    description:
      '<i>Undertow will cast at max range if cast beyond that. Nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> are granted <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> upon Undertow\'s cast.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Olaf_Tough_It_Out.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 4 seconds and grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds with an amount that is capped at <span style="color: #1F995C; white-space:normal">70% <b>missing</b> health</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '40 / 50 / 60 / 70 / 80%',
        values: [40, 50, 60, 70, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60 / 70 / 80%',
      },
      {
        effectType: 'Heal',
        name: 'Shield Strength:',
        raw: '10 / 40 / 70 / 100 / 130 (+ 17.5% missing health)',
        healType: 'BonusHealth',
        values: [10, 40, 70, 100, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 40 / 70 / 100 / 130',
        children: [
          {
            values: 17.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'missing health',
            pre: '+ 17.5% missing health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Tough It Out <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Olaf\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Olaf_Reckless_Swing.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> strikes thunder onto the target enemy, dealing <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'True Damage:',
        raw: '70 / 115 / 160 / 205 / 250 (+ 50% AD)',
        values: [70, 115, 160, 205, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 115 / 160 / 205 / 250',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Reckless Swing</i> kills the target, <b>Olaf</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself equal to the <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;health cost</span></span>.',
    leveling: [],
  },
  {
    description:
      'Basic attacks reduce <i>Reckless Swing\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by 1 second.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Olaf</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Resistances:',
        raw: '10 / 20 / 30',
        values: [10, 20, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30',
      },
    ],
  },
  {
    img: '/wiki/images/Olaf_Ragnarok.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> becomes enraged for 3 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> himself of all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to them</a></span>, as well as gaining <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and 10% increased <a href="/wiki/Size" title="Size">size</a>. For the first second of <i>Ragnarok</i>, he also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within 2000 units.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: '10 / 20 / 30 (+ 25% AD)',
        values: [10, 20, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 25% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '20 / 45 / 70%',
        values: [20, 45, 70],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 45 / 70%',
      },
    ],
  },
  {
    description:
      '<i>Ragnarok\'s</i> duration is increased by and up to 2.<small>5</small> seconds for each basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> or cast of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Olaf" data-ability="Reckless Swing" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Reckless Swing"><img alt="Reckless Swing" src="/wiki/images/Olaf_Reckless_Swing.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Olaf/LoL">Reckless Swing</a></span></span></i> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
    leveling: [],
  },
];
export const Olaf = { I, Q, W, E, R };
