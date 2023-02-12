import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Nasus';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Nasus_Soul_Eater.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Nasus</b> gains <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;1" data-finish="19;13" data-bot_values="9;14;19" data-top_values="1;7;13" data-bot_key="%">9 / 14 / 19% (based on level)</span> <a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Nasus gains  9 / 14 / 19% (based on level) life steal',
        increasedStat: 'lifesteal',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'life steal',
        pre: 'Nasus gains  9 / 14 / 19%',
        post: 'life steal',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Nasus_Siphoning_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nasus</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 10 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Bonus Physical Damage:',
        raw: '30 / 50 / 70 / 90 / 110 (+ Siphoning Strike stacks)',
        min: 0,
        max: 10,
        description: '30 / 50 / 70 / 90 / 110 (+ Siphoning Strike stacks)',
        values: [30, 50, 70, 90, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 50 / 70 / 90 / 110',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'siphoningStrikeStacks',
            unitsText: 'Siphoning Strike stacks',
            pre: '+ Siphoning Strike stacks',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Siphoning Strike</i> kills the target, <b>Nasus</b> permanently gains <span style="color: #5C58C9; white-space:normal">3 stacks</span>, increased to <span style="color: #5C58C9; white-space:normal">12</span> if the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span>, or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i>Siphoning Strike <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Nasus\'</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Nasus_Wither.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nasus</b> ages the target enemy champion for 5 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 35% and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">crippling</a></span> them by<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;75% of that amount,&nbsp;」</span><span class="flipText2">「&nbsp;26.<small>25</small>%,&nbsp;」</span></span>both increasing every second over the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Slow:',
        raw: '47 / 59 / 71 / 83 / 95%',
        values: [47, 59, 71, 83, 95],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '47 / 59 / 71 / 83 / 95%',
      },
      {
        effectType: 'Unique',
        name: 'Additional Slow Per Second:',
        raw: '3 / 6 / 9 / 12 / 15%',
        values: [3, 6, 9, 12, 15],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 6 / 9 / 12 / 15%',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Cripple:',
        raw: '35.25 / 44.25 / 53.25 / 62.25 / 71.25%',
        values: [35.25, 44.25, 53.25, 62.25, 71.25],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35.25 / 44.25 / 53.25 / 62.25 / 71.25%',
      },
      {
        effectType: 'Unique',
        name: 'Additional Cripple Per Second:',
        raw: '2.25 / 4.5 / 6.75 / 9 / 11.25%',
        values: [2.25, 4.5, 6.75, 9, 11.25],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2.25 / 4.5 / 6.75 / 9 / 11.25%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Nasus_Spirit_Fire.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nasus</b> unleashes a spirit fire at the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="centered at the location">area</span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2.<small>5</small> seconds</span> and, after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '55 / 95 / 135 / 175 / 215 (+ 60% AP)',
        values: [55, 95, 135, 175, 215],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 95 / 135 / 175 / 215',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'The fire then remains for 5 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> each second to enemies within and inflicting them with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span>, lingering for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '11 / 19 / 27 / 35 / 43 (+ 12% AP)',
        values: [11, 19, 27, 35, 43],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '11 / 19 / 27 / 35 / 43',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 12% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '110 / 190 / 270 / 350 / 430 (+ 120% AP)',
        values: [110, 190, 270, 350, 430],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 190 / 270 / 350 / 430',
        children: [
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
      {
        effectType: 'Unique',
        name: 'Armor Reduction:',
        raw: "25 / 30 / 35 / 40 / 45% of target's armor",
        values: [25, 30, 35, 40, 45],
        valuesIsPercent: true,
        user: 'target',
        units: 'total_armor',
        unitsText: "of target's armor",
        pre: "25 / 30 / 35 / 40 / 45% of target's armor",
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Nasus_Fury_of_the_Sands.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nasus</b> empowers himself for 15 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>, increased <a href="/wiki/Size" title="Size">size</a>, and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> attack range</span> for the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Health:',
        raw: '300 / 450 / 600',
        values: [300, 450, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 450 / 600',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Resistances:',
        raw: '40 / 55 / 70',
        values: [40, 55, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70',
      },
      {
        effectType: 'Unique',
        name: 'Increased Size:',
        raw: '30 / 35 / 40%',
        values: [30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40%',
      },
    ],
  },
  {
    description:
      'While <b>Nasus</b> is empowered, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to nearby enemies, capped at 240 per second, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nasus" data-ability="Siphoning Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nasus/LoL#Siphoning_Strike" title="Siphoning Strike\'s"><img alt="Siphoning Strike\'s" src="/wiki/images/Nasus_Siphoning_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nasus/LoL#Siphoning_Strike" title="Nasus/LoL">Siphoning Strike\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is halved.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage Per Tick:',
        raw: "1.5 / 2 / 2.5% (+ 0.5% per 100 AP) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [1.5, 2, 2.5],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '1.5 / 2 / 2.5%',
        post: "of target's maximum health",
        children: [
          {
            values: 0.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 0.5% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Magic Damage:',
        raw: "45 / 60 / 75% (+ 15% per 100 AP) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [45, 60, 75],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '45 / 60 / 75%',
        post: "of target's maximum health",
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 15% per 100 AP',
          },
        ],
      },
    ],
  },
];
export const Nasus = { I, Q, W, E, R };
