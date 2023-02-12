import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Xin Zhao';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Xin_Zhao_Determination.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Xin Zhao\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Wind Becomes Lightning" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Wind Becomes Lightning"><img alt="Wind Becomes Lightning" src="/wiki/images/Xin_Zhao_Wind_Becomes_Lightning.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Xin Zhao/LoL">Wind Becomes Lightning</a></span></span></i> strikes generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Determination</i>, stacking up to 3 times. The third stack consumes them all to deal <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="15% +&nbsp;15% every 5 levels" data-bot_values="15;30;45;60" data-top_values="1;6;11;16" data-bot_key="%">15 / 30 / 45 / 60% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> <b>Xin Zhao</b> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="6;" data-finish="74;" data-bot_values="6;10;14;18;22;26;30;34;38;42;46;50;54;58;62;66;70;74" data-top_values="">6 − 74 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;10% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;65% AP)</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' The third stack consumes them all to deal 15 / 30 / 45 / 60% (based on level) AD bonus physical damage and  heal Xin Zhao for 6 − 74 (based on level) (+ 10% AD) (+ 65% AP)',
        healType: 'PhysicalVamp',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: 'AD bonus physical damage and  heal Xin Zhao for 6 − 74',
        pre: 'The third stack consumes them all to deal 15 / 30 / 45 / 60%',
        post: 'AD bonus physical damage and  heal Xin Zhao for 6 − 74',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 10% AD',
          },
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 65% AP',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Xin_Zhao_Three_Talon_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xin Zhao</b> empowers his next three basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> to each have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and reduce his other <a href="/wiki/Champion_ability" title="Champion ability">abilities\'</a> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> by 1 second. Each attack refreshes the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '16 / 25 / 34 / 43 / 52 (+ 40% bonus AD)',
        values: [16, 25, 34, 43, 52],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '16 / 25 / 34 / 43 / 52',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 40% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Bonus Physical Damage:',
        raw: '48 / 75 / 102 / 129 / 156 (+ 120% bonus AD)',
        values: [48, 75, 102, 129, 156],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '48 / 75 / 102 / 129 / 156',
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
      'The third attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> the target for 0.<small>75</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i>Three Talon Strike\'s</i> <b>bonus</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [],
  },
  {
    description:
      '<i>Three Talon Strike <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Xin Zhao\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Xin_Zhao_Wind_Becomes_Lightning.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xin Zhao</b> slashes in an arc and, after the cast time, thrusts his spear in a line in the target direction. Each strike deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, modified to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="100;" data-bot_values="50;53.33;56.67;60;63.33;66.67;70;73.33;76.67;80;83.33;86.67;90;93.33;96.67;100" data-top_values="" data-bot_key="%">50% − 100% (based on level)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.<br><br>\nThe thrust deals increased damage, further by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.33 * critical strike chance" data-bot_values="0;3.33;6.66;9.99;13.32;16.65;19.98;23.31;26.64;29.97;33.3" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 33.<small>3</small>% (based on critical strike chance)</span></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit by 50% for 1.<small>5</small> seconds. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit are also marked <img alt="Xin Zhao Challenged Mark.png" src="/wiki/images/Xin_Zhao_Challenged_Mark.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"><i>Challenged</i> for 3 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' Each strike deals physical damage to enemies hit, modified to 50% − 100% (based on level) against  minions',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'against  minions',
        pre: 'Each strike deals physical damage to enemies hit, modified to 50% − 100%',
        post: 'against  minions',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '3% (based on critical strike chance), and  slows enemies hit by 50% for 1',
        values: 3,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: ', and  slows enemies hit by 50% for 1',
        pre: '3%',
        post: ', and  slows enemies hit by 50% for 1',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'base_critchance',
            unitsText: 'based on critical strike chance',
            pre: 'based on critical strike chance',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slash Physical Damage:',
        raw: '30 / 40 / 50 / 60 / 70 (+ 30% AD)',
        values: [30, 40, 50, 60, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50 / 60 / 70',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 30% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Thrust Physical Damage:',
        raw: '50 / 85 / 120 / 155 / 190 (+ 90% AD) (+ 65% AP)',
        values: [50, 85, 120, 155, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 85 / 120 / 155 / 190',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 90% AD',
          },
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 65% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '80 / 125 / 170 / 215 / 260 (+ 120% AD) (+ 65% AP)',
        values: [80, 125, 170, 215, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 125 / 170 / 215 / 260',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 120% AD',
          },
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 65% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'The durations of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Three Talon Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Three_Talon_Strike" title="Three Talon Strike"><img alt="Three Talon Strike" src="/wiki/images/Xin_Zhao_Three_Talon_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Three_Talon_Strike" title="Xin Zhao/LoL">Three Talon Strike</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Audacious Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Audacious Charge\'s"><img alt="Audacious Charge\'s" src="/wiki/images/Xin_Zhao_Audacious_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Xin Zhao/LoL">Audacious Charge\'s</a></span></span></i> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span>, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Crescent Guard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Crescent_Guard" title="Crescent Guard"><img alt="Crescent Guard" src="/wiki/images/Xin_Zhao_Crescent_Guard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Crescent_Guard" title="Xin Zhao/LoL">Crescent Guard</a></span></span></i> are delayed relative to <i>Wind Becomes Lightning\'s</i> cast time after 0.<small>2</small> seconds of its activation.',
    leveling: [],
  },
  {
    description:
      '<i>Wind Becomes Lightning\'s</i> damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Xin Zhao</b> for 33.<small><span style="text-decoration: overline;">3</span></small>% of his <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Xin_Zhao_Audacious_Charge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xin Zhao</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies near them and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 30% for 0.<small>5</small> seconds. <i>Audacious Charge\'s</i> range is increased against <span style="white-space:nowrap"><img alt="Xin Zhao Challenged Mark.png" src="/wiki/images/Xin_Zhao_Challenged_Mark.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"><i>Challenged</i></span> targets.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 60% AP)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
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
      '<b>Xin Zhao</b> then gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '40 / 45 / 50 / 55 / 60%',
        values: [40, 45, 50, 55, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50 / 55 / 60%',
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Three Talon Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Three_Talon_Strike" title="Three Talon Strike"><img alt="Three Talon Strike" src="/wiki/images/Xin_Zhao_Three_Talon_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Three_Talon_Strike" title="Xin Zhao/LoL">Three Talon Strike</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Crescent Guard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Crescent_Guard" title="Crescent Guard"><img alt="Crescent Guard" src="/wiki/images/Xin_Zhao_Crescent_Guard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Crescent_Guard" title="Xin Zhao/LoL">Crescent Guard</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Xin_Zhao_Challenged_Mark.png',
    description:
      '<span class="template_sbc"><b>Passive - Challenge:</b></span> The last enemy champion hit by <b>Xin Zhao\'s</b> basic attacks or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Audacious Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Audacious Charge"><img alt="Audacious Charge" src="/wiki/images/Xin_Zhao_Audacious_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Xin Zhao/LoL">Audacious Charge</a></span></span></i> is marked <i>Challenged</i> for 3 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Xin_Zhao_Crescent_Guard.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xin Zhao</b> sweeps his spear around him, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, capped at 600 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> all non-<i>Challenged</i> targets hit up-to 700 units over 0.<small>75</small> seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for the same duration.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: "75 / 175 / 275 (+ 100% bonus AD) (+ 110% AP) (+ 15% of target's current health)",
        healType: 'OutgoingHeals',
        values: [75, 175, 275],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 175 / 275',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 110% AP',
          },
          {
            values: 15,
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: "+ 15% of target's current health",
          },
        ],
      },
    ],
  },
  {
    description:
      'For the next 4 seconds, <b>Xin Zhao</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> far away from him.',
    leveling: [],
  },
];
export const XinZhao = { I, Q, W, E, R };
