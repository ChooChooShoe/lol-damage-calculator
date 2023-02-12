import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Malphite';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate - Shard of the Monolith:</b></span> <b>Malphite</b> gains increased percentage <a href="/wiki/Size" title="Size">size</a> equal to <span style="color:yellow; white-space:normal">8% of his <b>total</b> armor</span>, capped at 35% increased size at <span style="color:yellow; white-space:normal">437.<small>5</small> armor</span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Malphite_Granite_Shield.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Malphite</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span style="color: #1F995C; white-space:normal">9% of his <b>maximum</b> health</span>. The shield lasts until it is broken, and refreshes after a few seconds of not taking damage.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Malphite_Seismic_Shard.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Malphite</b> sends a shard to the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+ 60% AP)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
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
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '20 / 25 / 30 / 35 / 40%',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
      },
    ],
  },
  {
    description:
      '<b>Malphite</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> equal to the raw amount the target lost from the slow for the duration.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Malphite</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, tripled while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Granite Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Granite_Shield" title="Granite Shield"><img alt="Granite Shield" src="/wiki/images/Malphite_Granite_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Granite_Shield" title="Malphite/LoL">Granite Shield</a></span></span> is active.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Armor:',
        raw: '10 / 15 / 20 / 25 / 30% armor',
        values: [10, 15, 20, 25, 30],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_armor',
        unitsText: 'armor',
        pre: '10 / 15 / 20 / 25 / 30% armor',
      },
      {
        effectType: 'Unique',
        name: 'Increased Bonus Armor:',
        raw: '30 / 45 / 60 / 75 / 90% armor',
        values: [30, 45, 60, 75, 90],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_armor',
        unitsText: 'armor',
        pre: '30 / 45 / 60 / 75 / 90% armor',
      },
    ],
  },
  {
    img: '/wiki/images/Malphite_Thunderclap.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Malphite</b> empowers his next basic attack within 6 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and deal <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '30 / 45 / 60 / 75 / 90 (+ 20% AP) (+ 10% armor)',
        values: [30, 45, 60, 75, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60 / 75 / 90',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_armor',
            unitsText: 'armor',
            pre: '+ 10% armor',
          },
        ],
      },
    ],
  },
  {
    description:
      'Additionally, <b>Malphite\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for the next 5 seconds are empowered to trigger a cone in the direction of the target that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '15 / 25 / 35 / 45 / 55 (+ 30% AP) (+ 15% armor)',
        values: [15, 25, 35, 45, 55],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 25 / 35 / 45 / 55',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_armor',
            unitsText: 'armor',
            pre: '+ 15% armor',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Thunderclap <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Malphite\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Malphite_Ground_Slam.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Malphite</b> slams the ground beneath him, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">crippling</a></span> them for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 110 / 150 / 190 / 230 (+ 60% AP) (+ 40% armor)',
        values: [70, 110, 150, 190, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150 / 190 / 230',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_armor',
            unitsText: 'armor',
            pre: '+ 40% armor',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Cripple:',
        raw: '30 / 35 / 40 / 45 / 50%',
        values: [30, 35, 40, 45, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50%',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Malphite_Unstoppable_Force.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Malphite</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location. Upon arrival, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 300 / 400 (+ 90% AP)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
        children: [
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
      '<i>Unstoppable Force will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Malphite = { I, Q, W, E, R };
