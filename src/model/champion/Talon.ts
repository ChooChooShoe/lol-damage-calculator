import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Talon';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Talon_Blade%27s_End.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Talon\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Wound</i> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.',
    leveling: [],
  },
  {
    description:
      '<b>Talon\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against an enemy with 3 <i>Wound</i> stacks is empowered to consume them all to cause the target to bleed, dealing<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="75;" data-finish="255;" data-bot_values="75;85.59;96.18;106.76;117.35;127.94;138.53;149.12;159.71;170.29;180.88;191.47;202.06;212.65;223.24;233.82;244.41;255" data-top_values="">75 − 255 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;200% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>total</b> physical damage</span> over 2 seconds,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="4.6875;" data-finish="15.9375;" data-bot_values="4.69;5.35;6.01;6.67;7.33;8;8.66;9.32;9.98;10.64;11.31;11.97;12.63;13.29;13.95;14.61;15.28;15.94" data-top_values="">4.<small>69</small> − 15.<small>94</small> (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;12.<small>5</small>% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> every 0.<small>125</small> seconds over 2 seconds,&nbsp;」</span></span>increased to 120% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. The target cannot gain <i>Wound</i> stacks during this time.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "Talon's next basic attack against an enemy with 3 Wound stacks is empowered to consume them all to cause the target to bleed, dealing「 75 − 255 (based on level) (+ 200% bonus AD) total physical damage over 2 seconds, 」「 4",
        values: [
          75, 85.59, 96.18, 106.76, 117.35, 127.94, 138.53, 149.12, 159.71,
          170.29, 180.88, 191.47, 202.06, 212.65, 223.24, 233.82, 244.41, 255,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'total physical damage over 2 seconds, 」「 4',
        pre: "Talon's next basic attack against an enemy with 3 Wound stacks is empowered to consume them all to cause the target to bleed, dealing「 75 − 255",
        post: 'total physical damage over 2 seconds, 」「 4',
        children: [
          {
            values: 200,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 200% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '69 − 15',
        values: [69, 15],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '69 − 15',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '94 (based on level) (+ 12',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 12',
        pre: '94',
        post: '+ 12',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Talon_Noxian_Diplomacy.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Talon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> towards the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> upon arrival. If <i>Noxian Diplomacy</i> is cast within close range, <b>Talon</b> instead stabs the target to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(50%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span>, as well as gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> attack range</span> on his next basic attack within 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '65 / 85 / 105 / 125 / 145 (+ 100% bonus AD)',
        values: [65, 85, 105, 125, 145],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 85 / 105 / 125 / 145',
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
      'If <i>Noxian Diplomacy</i> kills the target, <b>Talon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;" data-finish="55;" data-bot_values="9;11.71;14.41;17.12;19.82;22.53;25.24;27.94;30.65;33.35;36.06;38.76;41.47;44.18;46.88;49.59;52.29;55" data-top_values="">9 − 55 (based on level)</span> and the ability\'s <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 50%.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "If Noxian Diplomacy kills the target, Talon  heals for 9 − 55 (based on level) and the ability's  cooldown is reduced by 50%",
        healType: 'OutgoingHeals',
        values: [
          9, 11.71, 14.41, 17.12, 19.82, 22.53, 25.24, 27.94, 30.65, 33.35,
          36.06, 38.76, 41.47, 44.18, 46.88, 49.59, 52.29, 55,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ap',
        unitsText: "and the ability's  cooldown is reduced by 50%",
        pre: 'If Noxian Diplomacy kills the target, Talon  heals for 9 − 55',
        post: "and the ability's  cooldown is reduced by 50%",
      },
    ],
  },
  {
    description:
      '<i>Noxian Diplomacy\'s stab <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Talon\'s</b> basic attack timer. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-ability="Shadow Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Shadow Assault"><img alt="Shadow Assault" src="/wiki/images/Talon_Shadow_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Talon/LoL">Shadow Assault</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Talon_Rake.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Talon</b> throws a fan of daggers in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '40 / 50 / 60 / 70 / 80 (+ 40% bonus AD)',
        values: [40, 50, 60, 70, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60 / 70 / 80',
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
    ],
  },
  {
    description:
      'At maximum range, the daggers linger for 0.<small>75</small> seconds before homing back to <b>Talon</b>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 80 / 110 / 140 / 170 (+ 80% bonus AD)',
        values: [50, 80, 110, 140, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 80 / 110 / 140 / 170',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '90 / 130 / 170 / 210 / 250 (+ 120% bonus AD)',
        values: [90, 130, 170, 210, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 130 / 170 / 210 / 250',
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
      {
        effectType: 'Unique',
        name: 'Slow:',
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
      '<i>Rake</i> deals 105% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
  {
    description: '<i>Enemies can be hit only once per pass.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Talon_Assassin%27s_Path.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Talon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> up to 800 units over the target area of <a href="/wiki/Terrain" title="Terrain">terrain</a>, during which he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span>.',
    leveling: [],
  },
  {
    description:
      "<b>Talon</b> cannot cast <i>Assassin's Path</i> on the same area of terrain for a set duration.",
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-ability="Shadow Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Shadow Assault"><img alt="Shadow Assault" src="/wiki/images/Talon_Shadow_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Talon/LoL">Shadow Assault</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Talon_Shadow_Assault.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Talon</b> disperses a ring of blades around him that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for up to 2.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '90 / 135 / 180 (+ 100% bonus AD)',
        values: [90, 135, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 135 / 180',
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
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '40 / 55 / 70%',
        values: [40, 55, 70],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70%',
      },
    ],
  },
  {
    description:
      '<i>Shadow Assault</i> can be recast after 1 second within the duration, and does so automatically after the duration or if <b>Talon</b> emerges from invisibility.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Talon</b> ends <i>Shadow Assault</i>, breaking the invisibility and causing the blades to converge to him, dealing the same damage to enemies hit. Breaking invisibility with a basic attack or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-ability="Noxian Diplomacy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL#Noxian_Diplomacy" title="Noxian Diplomacy"><img alt="Noxian Diplomacy" src="/wiki/images/Talon_Noxian_Diplomacy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL#Noxian_Diplomacy" title="Talon/LoL">Noxian Diplomacy</a></span></span></i> causes the blades to converge to the target instead.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '180 / 270 / 360 (+ 200% bonus AD)',
        values: [180, 270, 360],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '180 / 270 / 360',
        children: [
          {
            values: 200,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 200% bonus AD',
          },
        ],
      },
    ],
  },
];
export const Talon = { I, Q, W, E, R };
