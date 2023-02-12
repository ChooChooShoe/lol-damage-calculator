import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Soraka';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Soraka_Salvation.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Soraka</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">70% <b>bonus</b> movement speed</span></span> while facing nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that are <span style="color: #1F995C; white-space:normal">below 40% of their <b>maximum</b> health</span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Soraka_Starcall.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Soraka</b> calls down a star upon the target location that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before landing after <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target range" data-start="0.25;50" data-finish="1;800" data-bot_values="0.25;0.3;0.35;0.4;0.45;0.5;0.55;0.6;0.65;0.7;0.75;0.8;0.85;0.9;0.95;1" data-top_values="50;100;150;200;250;300;350;400;450;500;550;600;650;700;750;800">0.<small>25</small> − 1 (based on target range)</span> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 30% for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: '25 − 1 (based on target range) seconds, dealing magic damage to enemies hit and  slowing them by 30% for 1',
        damagetype: 'Magic',
        values: [25, 1],
        user: 'none',
        units: '',
        unitsText:
          'seconds, dealing magic damage to enemies hit and  slowing them by 30% for 1',
        pre: '25 − 1',
        post: 'seconds, dealing magic damage to enemies hit and  slowing them by 30% for 1',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on target range',
            pre: 'based on target range',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '85 / 120 / 155 / 190 / 225 (+ 35% AP)',
        values: [85, 120, 155, 190, 225],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '85 / 120 / 155 / 190 / 225',
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
    ],
  },
  {
    description:
      'If this hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, the star dust returns to <b>Soraka</b> to grant her <i>Rejuvenation</i> for 2.<small>5</small> seconds. While <b>Soraka</b> has <i>Rejuvenation</i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Astral Infusion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Astral_Infusion" title="Astral Infusion"><img alt="Astral Infusion" src="/wiki/images/Soraka_Astral_Infusion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Astral_Infusion" title="Soraka/LoL">Astral Infusion</a></span></span></i> will also grant the effects of <i>Rejuvenation</i> to the target ally for the same duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Rejuvenation</b></span>: The target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> every 0.<small>5</small> seconds and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Heal:',
        raw: '50 / 65 / 80 / 95 / 110 (+ 30% AP)',
        values: [50, 65, 80, 95, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 65 / 80 / 95 / 110',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Heal per Tick:',
        raw: '10 / 13 / 16 / 19 / 22 (+ 6% AP)',
        values: [10, 13, 16, 19, 22],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 13 / 16 / 19 / 22',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 6% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '20 / 22.5 / 25 / 27.5 / 30%',
        values: [20, 22.5, 25, 27.5, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 22.5 / 25 / 27.5 / 30%',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Soraka_Astral_Infusion.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Soraka</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> the target allied champion.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '90 / 110 / 130 / 150 / 170 (+ 50% AP)',
        values: [90, 110, 130, 150, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 110 / 130 / 150 / 170',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If cast while under <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Starcall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Starcall" title="Rejuvenation"><img alt="Rejuvenation" src="/wiki/images/Soraka_Starcall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Starcall" title="Soraka/LoL">Rejuvenation</a></span></span></i>, the <span style="color: #1F995C; white-space:normal">health cost</span> will be reduced by a percentage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Health Cost Reduction:',
        raw: '80 / 85 / 90 / 95 / 100%',
        values: [80, 85, 90, 95, 100],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 85 / 90 / 95 / 100%',
      },
      {
        effectType: 'Heal',
        name: 'Reduced Health Cost:',
        raw: '2 / 1.5 / 1 / 0.5 / 0% of maximum health',
        healType: 'BonusHealth',
        values: [2, 1.5, 1, 0.5, 0],
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of maximum health',
        pre: '2 / 1.5 / 1 / 0.5 / 0% of maximum health',
      },
    ],
  },
  {
    description:
      '<i>Astral Infusion</i> cannot be cast if <b>Soraka</b> is <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;below 5% of her <b>maximum</b> health</span></span>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Soraka_Equinox.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Soraka</b> creates a celestial zone at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemy champions within at the time of cast. The zone then persists for 1.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silences</a></span> enemies within.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 95 / 120 / 145 / 170 (+ 40% AP)',
        values: [70, 95, 120, 145, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 95 / 120 / 145 / 170',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Afterwards, the zone erupts to deal the same damage to enemy champions within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> them for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '140 / 190 / 240 / 290 / 340 (+ 80% AP)',
        values: [140, 190, 240, 290, 340],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 190 / 240 / 290 / 340',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Root Duration:',
        raw: '1 / 1.25 / 1.5 / 1.75 / 2',
        values: [1, 1.25, 1.5, 1.75, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.25 / 1.5 / 1.75 / 2',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Soraka_Wish.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Soraka</b> calls upon the stars, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself and all allied champions, increased by 50% on targets <span style="color: #1F995C; white-space:normal">below 40% of their <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '150 / 250 / 350 (+ 50% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Heal:',
        raw: '225 / 375 / 525 (+ 75% AP)',
        values: [225, 375, 525],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '225 / 375 / 525',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
        ],
      },
    ],
  },
];
export const Soraka = { I, Q, W, E, R };
