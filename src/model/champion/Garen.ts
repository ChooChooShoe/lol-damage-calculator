import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Garen';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Garen_Perseverance.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Garen</b> <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">regenerates</a></span><span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="1.3%+0.2 per level up to level 6, then+0.8% up to level 13, then+0.4%" data-bot_values="1.5;1.7;1.9;2.1;2.3;2.5;3.3;4.1;4.9;5.7;6.5;7.3;8.1;8.5;8.9;9.3;9.7;10.1" data-top_values="" data-bot_key="%">1.<small>5</small>% − 10.<small>1</small>% (based on level)</span> of his <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health</span></span> every 5 seconds.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="0.13%+0.02% per level up to level 6, then+0.08% up to level 13, then+0.04%" data-bot_values="0.15;0.17;0.19;0.21;0.23;0.25;0.33;0.41;0.49;0.57;0.65;0.73;0.81;0.85;0.89;0.93;0.97;1.01" data-top_values="" data-bot_key="%">0.<small>15</small>% − 1.<small>01</small>% (based on level)</span> of his <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health</span></span> every 0.<small>5</small> seconds.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: '1% (based on level) of his  maximum health every 5 seconds',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of his  maximum health every 5 seconds',
        pre: '1%',
        post: 'of his  maximum health every 5 seconds',
      },
      {
        effectType: 'Heal',
        name: 'Line 6:',
        raw: '01% (based on level) of his  maximum health every 0',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of his  maximum health every 0',
        pre: '01%',
        post: 'of his  maximum health every 0',
      },
    ],
  },
  {
    description:
      '<i>Perseverance</i> is lost for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Not a cooldown, unaffected by ability haste">8 seconds</span> if <b>Garen</b> takes damage from epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, or if he is hit by an enemy <a href="/wiki/Champion_ability" title="Champion ability">ability</a> or affected by an enemy <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spell</a>, refreshing on subsequent damage and hits taken from them.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Garen_Decisive_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Garen</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself of all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">35% <b>bonus</b> movement speed</span></span> for a few seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Movement Speed Duration:',
        raw: '1 / 1.65 / 2.3 / 2.95 / 3.6',
        values: [1, 1.65, 2.3, 2.95, 3.6],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.65 / 2.3 / 2.95 / 3.6',
      },
    ],
  },
  {
    description:
      'Additionally, <b>Garen</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 4.<small>5</small> seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">lunge</a></span> at the target, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silence</a></span> the target for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '30 / 60 / 90 / 120 / 150 (+ 50% AD)',
        values: [30, 60, 90, 120, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 60 / 90 / 120 / 150',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Decisive Strike <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Garen\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Whenever <b>Garen</b> kills an enemy, he generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Courage</i>, stacking up to 150 times.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Courage:</b></span> For each stack, <b>Garen</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">0.<small>2</small> <b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">0.<small>2</small> <b>bonus</b> magic resistance</span></span>, up to a maximum of 30 <b>bonus</b> resistances. After reaching maximum stacks, <b>Garen</b> gains <span style="color:yellow; white-space:normal">10% <b>bonus</b> armor</span> and <span style="color: #00FFFF; white-space:normal">10% <b>bonus</b> magic resistance</span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Garen_Courage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Garen</b> reduces incoming damage by 30% for a few seconds. For the first 0.<small>75</small> seconds, <b>Garen</b> additionally grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> and 60% <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">tenacity</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Duration:',
        raw: '2 / 2.75 / 3.5 / 4.25 / 5',
        values: [2, 2.75, 3.5, 4.25, 5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 / 2.75 / 3.5 / 4.25 / 5',
      },
      {
        effectType: 'Heal',
        name: 'Shield Strength:',
        raw: '65 / 85 / 105 / 125 / 145 (+ 18% bonus health)',
        healType: 'BonusHealth',
        values: [65, 85, 105, 125, 145],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 85 / 105 / 125 / 145',
        children: [
          {
            values: 18,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 18% bonus health',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Garen_Judgment.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Garen</b> rapidly spins his sword around himself 7 (+ 1 per <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Only bonus attack speed from item stats, mythic item passives, and growth (per level)"><span style="color:orangered; white-space:normal">25% <b>bonus</b> attack speed</span></span>) times over 3 seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and unable to basic attack and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies periodically. <i>Judgment</i> can be recast after 1 second for its duration, and does so automatically after it ends.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Garen rapidly spins his sword around himself 7 (+ 1 per 25% bonus attack speed) times over 3 seconds, becoming  ghosted and unable to basic attack and dealing physical damage to nearby enemies periodically',
        damagetype: 'Physical',
        values: 7,
        user: 'player',
        units: 'total_ad',
        unitsText:
          'times over 3 seconds, becoming  ghosted and unable to basic attack and dealing physical damage to nearby enemies periodically',
        pre: 'Garen rapidly spins his sword around himself 7',
        post: 'times over 3 seconds, becoming  ghosted and unable to basic attack and dealing physical damage to nearby enemies periodically',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus attack speedper 25',
            pre: '+ 1 per 25% bonus attack speed',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Spin:',
        raw: '4 / 8 / 12 / 16 / 20 (+ 0 − 8.2 (based on level)) (+ 32 / 34 / 36 / 38 / 40% AD)',
        values: [4, 8, 12, 16, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4 / 8 / 12 / 16 / 20',
        children: [
          {
            values: [
              0, 0.48, 0.96, 1.45, 1.93, 2.41, 2.89, 3.38, 3.86, 4.34, 4.82,
              5.31, 5.79, 6.27, 6.75, 7.24, 7.72, 8.2,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 0 − 8.2',
          },
          {
            values: [32, 34, 36, 38, 40],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 32 / 34 / 36 / 38 / 40% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemy champions hit 6 times by <i>Judgment</i> are inflicted with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">25% armor reduction</span></span> for 6 seconds, with the duration refreshing upon the 7th hit and every 6th hit thereafter.',
    leveling: [],
  },
  {
    img: '/wiki/images/Judgment_3.png',
    description:
      '<i>Judgment</i> deals 25% increased damage against the nearest enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Damage Per Spin:',
        raw: '5 / 10 / 15 / 20 / 25 (+ 0 − 10.25 (based on level)) (+ 40 / 42.5 / 45 / 47.5 / 50% AD)',
        values: [5, 10, 15, 20, 25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 10 / 15 / 20 / 25',
        children: [
          {
            values: [
              0, 0.6, 1.21, 1.81, 2.41, 3.01, 3.62, 4.22, 4.82, 5.43, 6.03,
              6.63, 7.24, 7.84, 8.44, 9.04, 9.65, 10.25,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 0 − 10.25',
          },
          {
            values: [40, 42.5, 45, 47.5, 50],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 40 / 42.5 / 45 / 47.5 / 50% AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Garen_Judgment_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Garen</b> ends <i>Judgment</i> prematurely, reducing its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by its remaining duration.',
    leveling: [],
  },
  {
    description:
      '<i>Judgment</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for  <span style="color: #FF8C34; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span>. Additionally, <i>Judgment</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Garen_Demacian_Justice.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Garen</b> calls upon the might of <i>Demacia</i> onto the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing them <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span> as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for 1 second at the start of the cast time.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'True Damage:',
        raw: "150 / 300 / 450 (+ 25 / 30 / 35% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [150, 300, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 300 / 450',
        children: [
          {
            values: [25, 30, 35],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 25 / 30 / 35% of target's missing health",
          },
        ],
      },
    ],
  },
];
export const Garen = { I, Q, W, E, R };
