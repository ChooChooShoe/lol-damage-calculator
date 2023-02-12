import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Galio';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Galio_Colossal_Smash.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Galio\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="15;" data-finish="200;" data-bot_values="15;25.88;36.76;47.65;58.53;69.41;80.29;91.18;102.06;112.94;123.82;134.71;145.59;156.47;167.35;178.24;189.12;200" data-top_values="">15 − 200 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;60% <b>bonus</b> magic resistance)</span> <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span> to the target and all enemies near them.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Periodically, Galio's next basic attack is empowered to have an  uncancellable windup and deal 15 − 200 (based on level) (+ 100% AD) (+ 50% AP) (+ 60% bonus magic resistance) modified magic damage to the target and all enemies near them",
        damagetype: 'Magic',
        values: [
          15, 25.88, 36.76, 47.65, 58.53, 69.41, 80.29, 91.18, 102.06, 112.94,
          123.82, 134.71, 145.59, 156.47, 167.35, 178.24, 189.12, 200,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'modified magic damage to the target and all enemies near them',
        pre: "Periodically, Galio's next basic attack is empowered to have an  uncancellable windup and deal 15 − 200",
        post: 'modified magic damage to the target and all enemies near them',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'bonus magic resistance',
            pre: '+ 60% bonus magic resistance',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Colossal Smash</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) AD</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to all targets hit.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Galio_Winds_of_War.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Galio</b> creates two windblasts 250 units to either side of him that arc out before converging to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies they pass through.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 75% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
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
  {
    description:
      'When the blasts meet, the gusts form a tornado that persists for 2 seconds, slowly moving forward and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to enemies within the area. The damage based on the target\'s health ratio is capped at 150 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage Per Tick:',
        raw: "2.5% (+ 1% per 100 AP) of target's maximum health",
        healType: 'OutgoingHeals',
        values: 2.5,
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '2.5%',
        post: "of target's maximum health",
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
        name: 'Total Magic Damage:',
        raw: "10% (+ 4% per 100 AP) of target's maximum health",
        healType: 'OutgoingHeals',
        values: 10,
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '10%',
        post: "of target's maximum health",
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 4% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Winds of War will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Galio_Shield_of_Durand_2.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Galio</b> gains <i>Anti-Magic Bulwark</i>, and restores it after 12 seconds without taking damage.<br><br><span class="template_sbc"><b>Anti-Magic Bulwark:</b></span> Gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that absorbs <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Shield Strength:',
        raw: '7.5 / 9 / 10.5 / 12 / 13.5% of maximum health',
        healType: 'BonusHealth',
        values: [7.5, 9, 10.5, 12, 13.5],
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of maximum health',
        pre: '7.5 / 9 / 10.5 / 12 / 13.5% of maximum health',
      },
    ],
  },
  {
    img: '/wiki/images/Galio_Shield_of_Durand.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Galio</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 2 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> himself by 15%, and gaining <span style="color: #00B0F0; white-space:normal">magic damage</span> reduction and half of that amount as <span style="color: #FF8C34; white-space:normal">physical damage</span> reduction; charging increases <i>Shield of Durand\'s</i> radius, damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunt</a></span> duration over the first 1.<small>5</small> seconds of the channel.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Reduction:',
        raw: '20 / 25 / 30 / 35 / 40% (+ 5% per 100 AP) (+ 8% per 100 bonus magic resistance)',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 5% per 100 AP',
          },
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'per 100 bonus magic resistance',
            pre: '+ 8% per 100 bonus magic resistance',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage Reduction:',
        raw: '10 / 12.5 / 15 / 17.5 / 20% (+ 2.5% per 100 AP) (+ 4% per 100 bonus magic resistance)',
        values: [10, 12.5, 15, 17.5, 20],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 12.5 / 15 / 17.5 / 20%',
        children: [
          {
            values: 2.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2.5% per 100 AP',
          },
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'per 100 bonus magic resistance',
            pre: '+ 4% per 100 bonus magic resistance',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Shield of Durand</i> can be recast within the duration and does so automatically afterwards or if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Galio</b> refreshes the <a href="/wiki/Damage_modifier" title="Damage modifier">damage reduction</a> for 2 seconds and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemy champions, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="100%+(25% per 0.25 seconds channeled)." data-bot_values="0;25;50;75;100;125;150;175;200" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2" data-bot_key="%">0% − 200% (based on channel time)</span>, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunts</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="0.5+(0.125 per 0.25 seconds channeled)." data-bot_values="0.5;0.63;0.75;0.88;1;1.13;1.25;1.38;1.5" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2">0.<small>5</small> − 1.<small>5</small> (based on channel time)</span> seconds during which their <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> is set to a <span style="color: #F5EE99; white-space:normal">static 60</span> for the same duration.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Galio refreshes the damage reduction for 2 seconds and deals magic damage to nearby enemy champions, increased by 0% − 200% (based on channel time), as well as  taunts them for 0',
        damagetype: 'Magic',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: ', as well as  taunts them for 0',
        pre: 'Galio refreshes the damage reduction for 2 seconds and deals magic damage to nearby enemy champions, increased by 0% − 200%',
        post: ', as well as  taunts them for 0',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 − 1',
        values: [5, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 − 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '5 (based on channel time) seconds during which their  movement speed is set to a static 60 for the same duration',
        values: 5,
        user: 'none',
        units: '',
        unitsText:
          'seconds during which their  movement speed is set to a static 60 for the same duration',
        pre: '5',
        post: 'seconds during which their  movement speed is set to a static 60 for the same duration',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '20 / 35 / 50 / 65 / 80 (+ 30% AP)',
        values: [20, 35, 50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80',
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
        name: 'Maximum Magic Damage:',
        raw: '60 / 105 / 150 / 195 / 240 (+ 90% AP)',
        values: [60, 105, 150, 195, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 105 / 150 / 195 / 240',
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
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Galio_Justice_Punch.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> During the cast time, <b>Galio</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">steps</a></span> backwards in the opposite direction. He then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location until he hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <a href="/wiki/Terrain" title="Terrain">terrain</a>.',
    leveling: [],
  },
  {
    description:
      '<b>Galio</b> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he passes through, reduced by 50% against non-champions, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 0.<small>75</small> seconds as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for the same duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '90 / 130 / 170 / 210 / 250 (+ 90% AP)',
        values: [90, 130, 170, 210, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 130 / 170 / 210 / 250',
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
      {
        effectType: 'Unique',
        name: 'Non-Champion Damage:',
        raw: '45 / 65 / 85 / 105 / 125 (+ 45% AP)',
        values: [45, 65, 85, 105, 125],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 65 / 85 / 105 / 125',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Justice Punch will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Galio_Hero%27s_Entrance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Galio</b> prepares to make an entrance, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> for 2.<small>75</small> seconds and designating the target allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion\'s</a></span> location at the time of cast as his landing spot. Additionally, he resets <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Galio" data-ability="Shield of Durand 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galio/LoL#Shield_of_Durand_2" title="Shield of Durand\'s"><img alt="Shield of Durand\'s" src="/wiki/images/Galio_Shield_of_Durand_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galio/LoL#Shield_of_Durand_2" title="Galio/LoL">Shield of Durand\'s</a></span></span></i> passive shield for himself and grants it to all allied champions within the area for 5 seconds.',
    leveling: [],
  },
  {
    description:
      'After channeling for 1.<small>25</small> seconds, he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span> for the remaining duration, becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and leaps into the air for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>85</small> seconds</span> before <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> to his destination over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>25</small> seconds</span>. Afterwards, he lands and becomes targetable again, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies upon impact, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span> 100 units over 0.<small>75</small> seconds, and remaining in place for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>4</small> seconds</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 70% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
    ],
  },
];
export const Galio = { I, Q, W, E, R };
