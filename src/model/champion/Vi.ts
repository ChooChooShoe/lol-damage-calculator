import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Vi';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Vi_Blast_Shield.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Vi\'s</b> next <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hit grants her a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to <span style="color: #1F995C; white-space:normal">13% of her <b>maximum</b> health</span> for 3 seconds.',
    leveling: [],
  },
  {
    description:
      '<i>Blast Shield\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 3 seconds each time <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Denting Blows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Denting_Blows" title="Denting Blows"><img alt="Denting Blows" src="/wiki/images/Vi_Denting_Blows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Denting_Blows" title="Vi/LoL">Denting Blows</a></span></span></i> is consumed.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Vi_Vault_Breaker.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 15% for up to 4 seconds to increase <i>Vault Breaker\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span>, speed, and damage over the first 1.<small>25</small> seconds of the channel.',
    leveling: [],
  },
  {
    description:
      '<i>Vault Breaker</i> can be recast within the duration. If the charge completes without reactivation, <i>Vault Breaker</i> is cancelled and put on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;full</span> cooldown. If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>, it will be put on a 3-second cooldown.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Vi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies within her path, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="10% per 0.125 seconds. \'\'This is capped at 1.25 seconds.\'\'" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1;1.125;1.25" data-bot_key="%">0% − 100% (based on channel time)</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pull</a></span> all non-champions hit towards her.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '55 / 80 / 105 / 130 / 155 (+ 70% bonus AD)',
        values: [55, 80, 105, 130, 155],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 80 / 105 / 130 / 155',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 70% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '110 / 160 / 210 / 260 / 310 (+ 140% bonus AD)',
        values: [110, 160, 210, 260, 310],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 160 / 210 / 260 / 310',
        children: [
          {
            values: 140,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 140% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'She stops upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span> over 0.<small>75</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Relentless Force" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Relentless_Force" title="Relentless Force"><img alt="Relentless Force" src="/wiki/images/Vi_Relentless_Force.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Relentless_Force" title="Vi/LoL">Relentless Force</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Cease and Desist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Cease and Desist"><img alt="Cease and Desist" src="/wiki/images/Vi_Cease_and_Desist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Vi/LoL">Cease and Desist</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Vi_Denting_Blows.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Vi\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Vault Breaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Vault_Breaker" title="Vault Breaker"><img alt="Vault Breaker" src="/wiki/images/Vi_Vault_Breaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Vault_Breaker" title="Vi/LoL">Vault Breaker</a></span></span></i> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Denting Blows</i> to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack consumes them all to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, capped at 300 against non-champions, and inflict <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">20% armor reduction</span></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Physical Damage:',
        raw: "4 / 5.5 / 7 / 8.5 / 10% (+「 1% per 35 」「 2.86% per 100 」bonus AD) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [4, 5.5, 7, 8.5, 10],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '4 / 5.5 / 7 / 8.5 / 10%',
        post: "of target's maximum health",
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'per 35 」「 2.86undefined',
            pre: '+「 1% per 35 」「 2.86% per 100 」bonus AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Vi_Denting_Blows_2.png',
    description:
      'After consuming <i>Denting Blows</i>, <b>Vi</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 4 seconds, which refreshes on subsequent triggers.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '30 / 37.5 / 45 / 52.5 / 60%',
        values: [30, 37.5, 45, 52.5, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 37.5 / 45 / 52.5 / 60%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Vi_Relentless_Force_2.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vi</b> empowers her next basic attack within 6 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and trigger a blast in the target\'s direction that deals <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> to enemies hit in a cone. <i>Relentless Force</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '10 / 30 / 50 / 70 / 90 (+ 110% AD) (+ 90% AP)',
        values: [10, 30, 50, 70, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 30 / 50 / 70 / 90',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 110% AD',
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
    img: '/wiki/images/Vi_Relentless_Force.png',
    description:
      '<b>Vi</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Relentless Force</i> charge, up to a maximum of 2.',
    leveling: [],
  },
  {
    description:
      '<i>Relentless Force <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Vi\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Vi_Cease_and_Desist.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vi</b> singles out the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> towards them, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>. Upon approaching within 300-units, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> through and grabs them, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for 1.<small>3</small> seconds and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> after 0.<small>75</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '150 / 325 / 500 (+ 110% bonus AD)',
        values: [150, 325, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 325 / 500',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 110% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies she dashes through are dealt the same damage, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked aside</a></span> by 350 units over 0.<small>25</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>75</small> seconds.',
    leveling: [],
  },
];
export const Vi = { I, Q, W, E, R };
