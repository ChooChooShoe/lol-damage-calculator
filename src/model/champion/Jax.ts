import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Jax';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Jax\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Relentless Assault</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> for 2.<small>5</small> seconds, refreshing on subsequent attacks and stacking up to 8 times. Stacks expire by one every 0.<small>25</small> seconds when the duration ends.',
    leveling: [],
  },
  {
    img: '/wiki/images/Jax_Relentless_Assault.png',
    description:
      '<span class="template_sbc"><b>Relentless Assault:</b></span> For each stack, <b>Jax</b> gains <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3.5;1" data-finish="11;16" data-bot_values="3.5;5;6.5;8;9.5;11" data-top_values="1;4;7;10;13;16" data-bot_key="%">3.<small>5</small>% − 11% (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span>, up to a maximum of <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="28;1" data-finish="88;16" data-bot_values="28;40;52;64;76;88" data-top_values="1;4;7;10;13;16" data-bot_key="%">28% − 88% (based on level)</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5% − 11% (based on level)  bonus attack speed, up to a maximum of 28% − 88% (based on level)',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: 'bonus attack speed, up to a maximum of 28% − 88%',
        pre: '5% − 11%',
        post: 'bonus attack speed, up to a maximum of 28% − 88%',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Jax_Leap_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target unit\'s location.',
    leveling: [],
  },
  {
    description:
      'If the target is an enemy and they are in range upon arrival, <b>Jax</b> deals them <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '65 / 105 / 145 / 185 / 225 (+ 100% bonus AD)',
        values: [65, 105, 145, 185, 225],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 105 / 145 / 185 / 225',
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
    ],
  },
  {
    description:
      '<i><b>Jax</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Jax_Empower.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Leap Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Leap_Strike" title="Leap Strike"><img alt="Leap Strike" src="/wiki/images/Jax_Leap_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Leap_Strike" title="Jax/LoL">Leap Strike</a></span></span></i> against an enemy within 10 seconds to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. If <i>Empower</i> is used on a basic attack, it will gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '50 / 85 / 120 / 155 / 190 (+ 60% AP)',
        values: [50, 85, 120, 155, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 85 / 120 / 155 / 190',
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
      '<i>Empower <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Jax\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Jax_Counter_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> enters <i>Evasion</i> for 2 seconds: a defensive stance that causes him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span> all incoming non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> basic attacks and take 25% reduced damage from all <a href="/wiki/Area_of_effect" title="Area of effect">area of effect</a> abilities from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. <br><br> <i>Counter Strike</i> can be recast after 1 second, and does so automatically after the duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Jax</b> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, with the <b>base</b> damage increased by 20% for each attack dodged, up to a 100% increase, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Minimum Magic Damage:',
        raw: "55 / 85 / 115 / 145 / 175 (+ 100% AP) (+ 4% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [55, 85, 115, 145, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 85 / 115 / 145 / 175',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
          {
            values: 4,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 4% of target's maximum health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Maximum Magic Damage:',
        raw: "110 / 170 / 230 / 290 / 350 (+ 100% AP) (+ 4% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [110, 170, 230, 290, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 170 / 230 / 290 / 350',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
          {
            values: 4,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 4% of target's maximum health",
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Jax\'s</b> <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> generate a stack of <i>Grandmaster-At-Arms</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for 2.<small>5</small> seconds, refreshing on subsequent hits and stacking up to 2 times. At 2 stacks, his next basic attack is empowered to consume them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. While <i>Grandmaster-At-Arms</i> is active, the empowered attack triggers at 1 stack instead.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '80 / 120 / 160 (+ 60% AP)',
        values: [80, 120, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160',
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
    img: '/wiki/images/Jax_Grandmaster-At-Arms.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> swings his lantern around, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits a champion, he gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, increased for each champion hit beyond the first, and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> equal to 60% of that amount as well as 10% increased <a href="/wiki/Size" title="Size">size</a> for 8 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 100% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
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
      {
        effectType: 'Unique',
        name: 'Bonus Armor:',
        raw: '25 / 45 / 65 (+ 40% bonus AD)',
        values: [25, 45, 65],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 45 / 65',
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
        name: 'Bonus Magic Resistance:',
        raw: '15 / 27 / 39 (+ 24% bonus AD)',
        values: [15, 27, 39],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 27 / 39',
        children: [
          {
            values: 24,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 24% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Armor per Champion Hit:',
        raw: '15 / 20 / 25 (+ 10% bonus AD)',
        values: [15, 20, 25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 10% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Magic Resistance per Champion Hit:',
        raw: '9 / 12 / 15 (+ 6% bonus AD)',
        values: [9, 12, 15],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '9 / 12 / 15',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 6% bonus AD',
          },
        ],
      },
    ],
  },
];
export const Jax = { I, Q, W, E, R };
