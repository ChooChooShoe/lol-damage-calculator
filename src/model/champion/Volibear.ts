import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Volibear';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Volibear_The_Relentless_Storm.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Volibear</b> damages at least one enemy with a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, he generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>The Relentless Storm</i> for 6 seconds, refreshing on subsequent damage and stacking up to 5 times. At 5 stacks, <b>Volibear</b> gains <i>Lightning Claws</i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>The Relentless Storm:</b></span> For each stack, <b>Volibear</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">5%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, up to <span style="color:orangered; white-space:normal">25%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% per 100 AP)</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' For each stack, Volibear gains  5% (+ 4% per 100 AP) bonus attack speed, up to 25% (+ 20% per 100 AP)',
        increasedStat: 'bonus_ad',
        values: 5,
        valuesIsPercent: true,
        user: 'player',
        units: '',
        unitsText: 'bonus attack speed, up to 25%',
        pre: 'For each stack, Volibear gains  5%',
        post: 'bonus attack speed, up to 25%',
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 4% per 100 AP',
          },
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 20% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Lightning Claws:</b></span> <b>Volibear\'s</b> claws ignite with lightning, empowering his basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="10+1 per level until lvl 3, then+2 until lvl 6, then+3 per level until lvl 13, then+4 per level" data-bot_values="11;12;13;15;17;19;22;25;28;31;34;37;40;44;48;52;56;60" data-top_values="">11 − 60 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span> <b>bonus</b> magic damage</span> to the target and the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy within 450 units of the target, chaining up to 4 subsequent targets.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Volibear's claws ignite with lightning, empowering his basic attacks  on-hit to deal 11 − 60 (based on level) (+ 40% AP) bonus magic damage to the target and the nearest  visible enemy within 450 units of the target, chaining up to 4 subsequent targets",
        damagetype: 'Magic',
        values: [
          11, 13.88, 16.76, 19.65, 22.53, 25.41, 28.29, 31.18, 34.06, 36.94,
          39.82, 42.71, 45.59, 48.47, 51.35, 54.24, 57.12, 60,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'bonus magic damage to the target and the nearest  visible enemy within 450 units of the target, chaining up to 4 subsequent targets',
        pre: "Volibear's claws ignite with lightning, empowering his basic attacks  on-hit to deal 11 − 60",
        post: 'bonus magic damage to the target and the nearest  visible enemy within 450 units of the target, chaining up to 4 subsequent targets',
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
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Volibear_Thundering_Smash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Volibear</b> drops on all fours, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 4 seconds, doubled while facing a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 2000 units.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '8 / 12 / 16 / 20 / 24%',
        values: [8, 12, 16, 20, 24],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 12 / 16 / 20 / 24%',
      },
      {
        effectType: 'Unique',
        name: 'Increased Bonus Movement Speed:',
        raw: '16 / 24 / 32 / 40 / 48%',
        values: [16, 24, 32, 40, 48],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '16 / 24 / 32 / 40 / 48%',
      },
    ],
  },
  {
    description:
      'During this time, <b>Volibear\'s</b> next basic attack is empowered to consume the <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="to 25 to 150 units closer than attack range, if Volibear is not closer already"><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pounce</a></span> on the target</span>, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '10 / 30 / 50 / 70 / 90 (+ 120% bonus AD)',
        values: [10, 30, 50, 70, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 30 / 50 / 70 / 90',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 120% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <b>Volibear</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span> by an enemy during <i>Thundering Smash</i>, the effect ends prematurely and the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reset.',
    leveling: [],
  },
  {
    description:
      '<i>Thundering Smash\'s</i> <b>bonus</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
    leveling: [],
  },
  {
    description:
      '<i>Thundering Smash <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Volibear\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Volibear_Frenzied_Maul.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Volibear</b> strikes the target enemy to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>, apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness, and mark them <i>Wounded</i> for 8 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: '5 / 30 / 55 / 80 / 105 (+ 100% AD) (+ 5% of his bonus health)',
        healType: 'BonusHealth',
        values: [5, 30, 55, 80, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 30 / 55 / 80 / 105',
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
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'of his bonus health',
            pre: '+ 5% of his bonus health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Increased Damage:',
        raw: '7.5 / 45 / 82.5 / 120 / 157.5 (+ 150% AD) (+ 7.5% of his bonus health)',
        healType: 'BonusHealth',
        values: [7.5, 45, 82.5, 120, 157.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7.5 / 45 / 82.5 / 120 / 157.5',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 150% AD',
          },
          {
            values: 7.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'of his bonus health',
            pre: '+ 7.5% of his bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Wounded Bonus:</b></span> <i>Frenzied Maul</i> deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">50% increased damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Volibear</b>. The heal is halved against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Heal:',
        raw: '20 / 35 / 50 / 65 / 80 (+ 7 / 8.5 / 10 / 11.5 / 13% of his missing health)',
        healType: 'BonusHealth',
        values: [20, 35, 50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80',
        children: [
          {
            values: [7, 8.5, 10, 11.5, 13],
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'of his missing health',
            pre: '+ 7 / 8.5 / 10 / 11.5 / 13% of his missing health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Minion Heal:',
        raw: '10 / 17.5 / 25 / 32.5 / 40 (+ 3.5 / 4.25 / 5 / 5.75 / 6.5% of his missing health)',
        healType: 'BonusHealth',
        values: [10, 17.5, 25, 32.5, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 17.5 / 25 / 32.5 / 40',
        children: [
          {
            values: [3.5, 4.25, 5, 5.75, 6.5],
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'of his missing health',
            pre: '+ 3.5 / 4.25 / 5 / 5.75 / 6.5% of his missing health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Frenzied Maul</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Volibear_Sky_Splitter.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Volibear</b> summons a lightning bolt to strike at the target location after a 2-second delay. If <b>Volibear</b> is within the strike, he gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to <span style="color: #1F995C; white-space:normal">14% of his <b>maximum</b> health</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' If Volibear is within the strike, he gains a  shield equal to 14% of his maximum health (+ 75% AP) for 3 seconds',
        healType: 'BonusHealth',
        values: 1,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'for 3 seconds',
        pre: 'If Volibear is within the strike, he gains a  shield equal to 14% of his maximum health',
        post: 'for 3 seconds',
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
    img: '/wiki/images/Volibear_Sky_Splitter_2.png',
    description:
      'The bolt deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, capped at 650 against non-champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 40% for 2 seconds, and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1 second.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "80 / 110 / 140 / 170 / 200 (+ 80% AP) (+ 11 / 12 / 13 / 14 / 15% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
          {
            values: [11, 12, 13, 14, 15],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 11 / 12 / 13 / 14 / 15% of target's maximum health",
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Volibear_Stormbringer.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Volibear</b> gains <i>Stormbringer</i> for 12 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immunity"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span>, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area in a 500 radius during the travel.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Stormbringer:</b></span> <b>Volibear</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>, <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> attack range</span>, 25 increased range on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-ability="Frenzied Maul" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL#Frenzied_Maul" title="Frenzied Maul"><img alt="Frenzied Maul" src="/wiki/images/Volibear_Frenzied_Maul.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL#Frenzied_Maul" title="Volibear/LoL">Frenzied Maul</a></span></span></i>, and 35% increased <a href="/wiki/Size" title="Size">size</a>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Health:',
        raw: '175 / 350 / 525',
        values: [175, 350, 525],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 350 / 525',
      },
    ],
  },
  {
    description:
      '<b>Volibear</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="centered on Volibear\'s location when the dash ends in any way">impacts</span> after 1 second, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies by 50% decaying over 1 second. Enemies within the epicenter are also dealt <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #FF8C34; white-space:normal">physical damage</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '300 / 500 / 700 (+ 250% bonus AD) (+ 125% AP)',
        values: [300, 500, 700],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 500 / 700',
        children: [
          {
            values: 250,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 250% bonus AD',
          },
          {
            values: 125,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 125% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Volibear</b> also disables enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> in an area for a duration, rendering them unable to attack, as well as dealing them the <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">same damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Turret Disable Duration:',
        raw: '3 / 4 / 5',
        values: [3, 4, 5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 4 / 5',
      },
    ],
  },
  {
    description:
      '<i>Stormbringer will cast at max range if cast beyond that. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-ability="Thundering Smash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL#Thundering_Smash" title="Thundering Smash\'s"><img alt="Thundering Smash\'s" src="/wiki/images/Volibear_Thundering_Smash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL#Thundering_Smash" title="Volibear/LoL">Thundering Smash\'s</a></span></span> duration will be paused for the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leap</a></span>.</i>',
    leveling: [],
  },
];
export const Volibear = { I, Q, W, E, R };
