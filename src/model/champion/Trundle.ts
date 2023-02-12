import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Trundle';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Trundle_King%27s_Tribute.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever a nearby enemy dies, <b>Trundle</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself for <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.8;" data-finish="5.5;" data-bot_values="1.8;2.02;2.24;2.45;2.67;2.89;3.11;3.32;3.54;3.76;3.98;4.19;4.41;4.63;4.85;5.06;5.28;5.5" data-top_values="" data-bot_key="%">1.<small>8</small>% − 5.<small>5</small>% (based on level)</span> of the target\'s <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: "5% (based on level) of the target's maximum health",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health",
        pre: '5%',
        post: "of the target's maximum health",
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Trundle_Chomp.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Trundle</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 7 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> the target by 75% for 0.<small>1</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '20 / 40 / 60 / 80 / 100 (+ 15 / 25 / 35 / 45 / 55% AD)',
        values: [20, 40, 60, 80, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 40 / 60 / 80 / 100',
        children: [
          {
            values: [15, 25, 35, 45, 55],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 15 / 25 / 35 / 45 / 55% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'After using the empowered attack, <b>Trundle</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> for 5 seconds and reduces the target\'s <span style="color:orange; white-space:normal">attack damage</span> by half that amount for the same duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: '20 / 25 / 30 / 35 / 40',
        values: [20, 25, 30, 35, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40',
      },
      {
        effectType: 'Unique',
        name: 'Attack Damage Reduction:',
        raw: '10 / 12.5 / 15 / 17.5 / 20',
        values: [10, 12.5, 15, 17.5, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 12.5 / 15 / 17.5 / 20',
      },
    ],
  },
  {
    description:
      '<i>Chomp <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Trundle\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Trundle_Frozen_Domain.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Trundle</b> coats the target location in ice for 8 seconds. While he is within the area, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, and 25% increased <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> from all sources.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '30 / 50 / 70 / 90 / 110%',
        values: [30, 50, 70, 90, 110],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 50 / 70 / 90 / 110%',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '20 / 28 / 36 / 44 / 52%',
        values: [20, 28, 36, 44, 52],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 28 / 36 / 44 / 52%',
      },
    ],
  },
  {
    description:
      '<i>Frozen Domain will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Trundle_Pillar_of_Ice.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Trundle</b> erects a pillar of ice at the target location for 6 seconds, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> units hit to 225 units from its center. The pillar acts as <a href="/wiki/Terrain" title="Terrain">terrain</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '30 / 34 / 38 / 42 / 46%',
        values: [30, 34, 38, 42, 46],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 34 / 38 / 42 / 46%',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Trundle_Subjugate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Trundle</b> drains the life force out of the target enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for the same amount. He also steals 40% of their <b>current</b> <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span>, and increases in <a href="/wiki/Size" title="Size">size</a> by 18% while reducing the target\'s <a href="/wiki/Size" title="Size">size</a> by 9.<small>9</small>%.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Total Magic Damage:',
        raw: "20 / 25 / 30% (+ 2% per 100 AP) of the target's maximum health",
        healType: 'OutgoingHeals',
        values: [20, 25, 30],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health",
        pre: '20 / 25 / 30%',
        post: "of the target's maximum health",
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Half of the <b>total</b> damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">died</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Initial Magic Damage:',
        raw: "10 / 12.5 / 15% (+ 1% per 100 AP) of the target's maximum health",
        healType: 'OutgoingHeals',
        values: [10, 12.5, 15],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health",
        pre: '10 / 12.5 / 15%',
        post: "of the target's maximum health",
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 1% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Magic Damage Per Second:',
        raw: "2.5 / 3.125 / 3.75% (+ 0.25% per 100 AP) of the target's maximum health",
        healType: 'OutgoingHeals',
        values: [2.5, 3.125, 3.75],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health",
        pre: '2.5 / 3.125 / 3.75%',
        post: "of the target's maximum health",
        children: [
          {
            values: 0.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 0.25% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'The <span style="color:yellow; white-space:normal">armor</span> and <span style="color: #00FFFF; white-space:normal">magic resistance</span> will remain stolen for 4 seconds after the drain has ended.',
    leveling: [],
  },
];
export const Trundle = { I, Q, W, E, R };
