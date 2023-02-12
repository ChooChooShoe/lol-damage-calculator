import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Blitzcrank';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Blitzcrank_Mana_Barrier.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, when damaged to <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;30% <b>maximum</b> health</span></span>, <b>Blitzcrank</b> generates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="45;" data-bot_values="15;16.76;18.53;20.29;22.06;23.82;25.59;27.35;29.12;30.88;32.65;34.41;36.18;37.94;39.71;41.47;43.24;45" data-top_values="" data-bot_key="%">15% − 45% (based on level)</span> of <b>maximum</b> mana</span></span>, lasting up to 10 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Periodically, when damaged to  30% maximum health, Blitzcrank generates a  shield equal to  15% − 45% (based on level) of maximum mana, lasting up to 10 seconds',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_mana',
        unitsText: 'of maximum mana, lasting up to 10 seconds',
        pre: 'Periodically, when damaged to  30% maximum health, Blitzcrank generates a  shield equal to  15% − 45%',
        post: 'of maximum mana, lasting up to 10 seconds',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Blitzcrank_Rocket_Grab.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Blitzcrank</b> fires their right hand in the target direction that catches the first enemy hit, dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>65</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> them towards <b>Blitzcrank</b>, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '105 / 150 / 195 / 240 / 285 (+ 120% AP)',
        values: [105, 150, 195, 240, 285],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '105 / 150 / 195 / 240 / 285',
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
    ],
  },
  {
    description:
      '<i><b>Blitzcrank</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move or attack while Rocket Grab is in flight.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Blitzcrank_Overdrive.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Blitzcrank</b> shifts into overdrive, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays to 10% over the first 2.<small>9</small> seconds. While active, their basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> equal to <span style="color: #1F995C; white-space:normal">1% of the target\'s <b>maximum</b> health</span>, increased by <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="60 +&nbsp;20 per level, then +&nbsp;5 per level starting at level 7" data-bot_values="60;80;100;120;140;160;165;170;175;180;185;190;195;200;205;210;215;220" data-top_values="">60 − 220 (based on level)</span></span> against non-champions.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: " While active, their basic attacks deal bonus magic damage  on-hit equal to 1% of the target's maximum health, increased by 60 − 220 (based on level) against non-champions",
        healType: 'OutgoingHeals',
        values: [
          60, 69.41, 78.82, 88.24, 97.65, 107.06, 116.47, 125.88, 135.29,
          144.71, 154.12, 163.53, 172.94, 182.35, 191.76, 201.18, 210.59, 220,
        ],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'against non-champions',
        pre: "While active, their basic attacks deal bonus magic damage  on-hit equal to 1% of the target's maximum health, increased by 60 − 220",
        post: 'against non-champions',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '30 / 43 / 56 / 69 / 82%',
        values: [30, 43, 56, 69, 82],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 43 / 56 / 69 / 82%',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '70 / 75 / 80 / 85 / 90%',
        values: [70, 75, 80, 85, 90],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 75 / 80 / 85 / 90%',
      },
    ],
  },
  {
    description:
      'When <i>Overdrive</i> ends, <b>Blitzcrank</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 30% for 1.<small>5</small> seconds.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Blitzcrank_Power_Fist.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Blitzcrank</b> empowers their next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 5 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, deal <span style="color:orange; white-space:normal">75% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, increased to <span style="color:orange; white-space:normal">250% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;150% AP)</span> against non-champions, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> the target for 1 second. This damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Blitzcrank empowers their next basic attack within 5 seconds to have an  uncancellable windup, deal 75% AD (+ 25% AP) bonus physical damage, increased to 250% AD (+ 150% AP) against non-champions, and  knock up the target for 1 second',
        increasedStat: 'bonus_ad',
        values: 5,
        valuesIsPercent: true,
        user: 'player',
        units: '',
        unitsText: 'bonus physical damage, increased to 250% AD',
        pre: 'Blitzcrank empowers their next basic attack within 5 seconds to have an  uncancellable windup, deal 75% AD',
        post: 'bonus physical damage, increased to 250% AD',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Power Fist <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Blitzcrank\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> While <i>Static Field</i> is not on cooldown, <b>Blitzcrank\'s</b> basic attacks apply a <a href="/wiki/Stack" title="Stack">stack</a> to the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. After every 1 second, one stack is consumed to deal them <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 100 / 150 (+ 30 / 40 / 50% AP)',
        values: [50, 100, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 100 / 150',
        children: [
          {
            values: [30, 40, 50],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30 / 40 / 50% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Blitzcrank_Static_Field.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Blitzcrank</b> detonates a static field, completely destroying damage-mitigating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> of nearby enemies before dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silencing</a></span> them for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '275 / 400 / 525 (+ 100% AP)',
        values: [275, 400, 525],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '275 / 400 / 525',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
        ],
      },
    ],
  },
];
export const Blitzcrank = { I, Q, W, E, R };
