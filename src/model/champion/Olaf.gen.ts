import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Olaf';

export default {
  'Berserker Rage': {
    name: 'Berserker Rage',
    display_name: 'Berserker Rage',
    champion: 'Olaf',
    skill: 'I',
    image: {
      full: 'Olaf_Passive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Olaf" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL" title="Olaf"><img alt="Olaf" src="/wiki/images/Olaf_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span> based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Berserker_Rage.png',
        description:
          'Innate: Olaf gains  bonus attack speed and  life steal based on his missing health, up to 60% − 100% (based on level) bonus attack speed and 8% − 25% (based on level) life steal at 70% missing health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Olaf</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span> based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>, up to <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="60;" data-finish="100;" data-bot_values="60;62.35;64.71;67.06;69.41;71.76;74.12;76.47;78.82;81.18;83.53;85.88;88.24;90.59;92.94;95.29;97.65;100" data-top_values="" data-bot_key="%">60% − 100% (based on level)</span> <b>bonus</b> attack speed</span> and <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;" data-finish="25;" data-bot_values="8;9;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25" data-top_values="" data-bot_key="%">8% − 25% (based on level)</span> life steal at <span style="color: #1F995C; white-space:normal">70% <b>missing</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Olaf gains  bonus attack speed and  life steal based on his missing health, up to 60% − 100% (based on level) bonus attack speed and 8% − 25% (based on level) life steal at 70% missing health.',
            healType: 'BonusHealth',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'bonus_ad',
            unitsText: 'bonus attack speed and 8% − 25%',
            pre: 'Olaf gains  bonus attack speed and  life steal based on his missing health, up to 60% − 100%',
            post: 'bonus attack speed and 8% − 25%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional details.',
  },
  Undertow: {
    name: 'Undertow',
    display_name: 'Undertow',
    champion: 'Olaf',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'OlafAxeThrowCast.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '425 / 1000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Impact additional radius">100</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Axe retrieval radius">250</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Axe landing brief sight radius">300</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">180</span>',
    speed: '1600',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">9</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Olaf" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL" title="Olaf"><img alt="Olaf" src="/wiki/images/Olaf_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf</a></span></span> throws an axe to the target location that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them based on distance travelled. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit also have <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">reduced armor</span></span> for a few seconds.',
      'The axe remains in place during the cooldown, and <b>Olaf</b> can pick up the axe to reduce the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> cooldown</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Undertow.png',
        description:
          'Active: Olaf throws an axe to the target location that deals physical damage to enemies it passes through and  slows them for 1.5 − 2.5 (based on distance traveled) seconds. Enemy  champions hit are also inflicted with  20% armor reduction for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> throws an axe to the target location that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-displayformula="1.5+(0.125 per 75 units traveled)" data-bot_values="1.5;1.63;1.75;1.88;2;2.13;2.25;2.38;2.5" data-top_values="400;475;550;625;700;775;850;925;1000">1.<small>5</small> − 2.<small>5</small> (based on distance traveled)</span> seconds. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit are also inflicted with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">20% armor reduction</span></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Olaf throws an axe to the target location that deals physical damage to enemies it passes through and  slows them for 1.5 − 2.5 (based on distance traveled) seconds',
            damagetype: 'Physical',
            values: [1, 2.5],
            basedOn: 'distance traveled',
            user: 'none',
            units: '',
            unitsText: 'seconds',
            pre: 'Olaf throws an axe to the target location that deals physical damage to enemies it passes through and  slows them for 1.5 − 2.5',
            post: 'seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Enemy  champions hit are also inflicted with  20% armor reduction for 4 seconds.',
            values: 2,
            valuesIsPercent: true,
            units: 'total_armor',
            unitsText:
              'armor reduction for 4 seconds. champions hit are also inflicted with  20',
            pre: 'Enemy  champions hit are also inflicted with  20% armor reduction for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '70 / 120 / 170 / 220 / 270 (+ 100% bonus AD)',
            valuesHTML:
              '70 / 120 / 170 / 220 / 270 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Slow:',
            values: '25 / 30 / 35 / 40 / 45%',
            valuesHTML: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The axe remains in place for a duration equal to Undertow's cooldown, briefly granting  sight of its surroundings. Olaf can pick up the axe to reduce Undertow's  current cooldown to 2.5 seconds, which resets the cooldown if that has already elapsed.",
        descriptionHTML:
          'The axe remains in place for a duration equal to <i>Undertow\'s</i> cooldown, briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. <b>Olaf</b> can pick up the axe to reduce <i>Undertow\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">2.<small>5</small> seconds</span>, which resets the cooldown if that has already elapsed.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "Olaf can pick up the axe to reduce Undertow's  current cooldown to 2.5 seconds, which resets the cooldown if that has already elapsed.",
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              "can pick up the axe to reduce Undertow's  current cooldown to 2.5 seconds, which resets the cooldown if that has already elapsed.",
            pre: "Olaf can pick up the axe to reduce Undertow's  current cooldown to 2.5 seconds, which resets the cooldown if that has already elapsed.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Undertow will cast at max range if cast beyond that. Nearby  monsters are granted  ghosting upon Undertow's cast.",
        descriptionHTML:
          '<i>Undertow will cast at max range if cast beyond that. Nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> are granted <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> upon Undertow\'s cast.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Aoe',
    spellshield: true,
    projectile: 'special',
    notes:
      '* <i>Undertow</i> may hit additional targets upon landing, but not targets already struck in-flight.\n<ul><li><ul><li>The axe will land approximately 50 units further than <i>Undertow\'s</i> target range if cast below maximum range.</li></ul></li>\n<li>The axe is stopped prematurely upon encountering <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>, remaining on the ground upon collision.</li>\n<li>The timer for how long an axe stays on the ground does not begin until it has landed, thus it is possible to throw another axe before retrieving the first.</li>\n<li><b>Olaf</b> cannot pick up an enemy <b>Olaf\'s</b> axe on the ground.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
  },
  'Tough It Out': {
    name: 'Tough It Out',
    display_name: 'Tough It Out',
    champion: 'Olaf',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'OlafFrenziedStrikes.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '30',
    costtype: 'Mana',
    cooldown: '16 / 15 / 14 / 13 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Olaf" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL" title="Olaf"><img alt="Olaf" src="/wiki/images/Olaf_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf</a></span></span> gains tremendous <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span> for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Olaf_Tough_It_Out.png',
        description:
          'Active: Olaf gains  bonus attack speed for 4 seconds and grants himself a  shield for 2.5 seconds with an amount that is capped at 70% missing health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 4 seconds and grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds with an amount that is capped at <span style="color: #1F995C; white-space:normal">70% <b>missing</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: 'Olaf gains  bonus attack speed for 4 seconds and grants himself a  shield for 2.5 seconds with an amount that is capped at 70% missing health.',
            healType: 'BonusHealth',
            values: 4,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'missing health.gains  bonus attack speed for 4 seconds and grants himself a  shield for 2.5 seconds with an amount that is capped at 70',
            pre: 'Olaf gains  bonus attack speed for 4 seconds and grants himself a  shield for 2.5 seconds with an amount that is capped at 70% missing health.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '40 / 50 / 60 / 70 / 80%',
            valuesHTML: '40 / 50 / 60 / 70 / 80%',
          },
          {
            name: 'Shield Strength:',
            values: '10 / 40 / 70 / 100 / 130 (+ 17.5% missing health)',
            valuesHTML:
              '10 / 40 / 70 / 100 / 130 <span style="color: #1F995C; white-space:normal">(+&nbsp;17.<small>5</small>% <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '10 / 40 / 70 / 100 / 130 (+ 17.5% missing health)',
            healType: 'BonusHealth',
            values: [10, 40, 70, 100, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 40 / 70 / 100 / 130',
            children: [
              {
                values: 17.5,
                valuesIsPercent: true,
                units: 'missing_hp',
                unitsText: 'missing health',
                pre: '+ 17.5% missing health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Tough It Out  resets Olaf's basic attack timer.",
        descriptionHTML:
          '<i>Tough It Out <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Olaf\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes: '* No additional details.',
  },
  'Reckless Swing': {
    name: 'Reckless Swing',
    display_name: 'Reckless Swing',
    champion: 'Olaf',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'OlafRecklessStrike.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '325',
    cast_time: '0.<small>25</small>',
    cost: '<span style="color: #1F995C; white-space:normal">21 / 34.<small>5</small> / 48 / 61.<small>5</small> / 75 <span style="color:orange; white-space:normal">(+&nbsp;15% AD)</span></span>',
    costtype: '<span style="color: #1F995C; white-space:normal">Health</span>',
    cooldown: '11 / 10 / 9 / 8 / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Olaf" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL" title="Olaf"><img alt="Olaf" src="/wiki/images/Olaf_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf</a></span></span> consumes <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;health</span></span> to strike thunder onto the target enemy, dealing <span style="color: #F9966B; white-space:normal">true damage</span>. If this kills the target, <b>Olaf</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> the <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health cost</span></span>.',
      'Basic attacks <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> <i>Reckless Swing\'s</i> cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Reckless_Swing.png',
        description:
          'Active: Olaf strikes thunder onto the target enemy, dealing  true damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> strikes thunder onto the target enemy, dealing <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'True Damage:',
            values: '70 / 115 / 160 / 205 / 250 (+ 50% AD)',
            valuesHTML:
              '70 / 115 / 160 / 205 / 250 <span style="color:orange; white-space:normal">(+&nbsp;50% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'True Damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 50% AD)',
            damagetype: 'True',
            values: [70, 115, 160, 205, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Reckless Swing kills the target, Olaf  heals himself equal to the  health cost.',
        descriptionHTML:
          'If <i>Reckless Swing</i> kills the target, <b>Olaf</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself equal to the <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;health cost</span></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Basic attacks reduce Reckless Swing's  cooldown by 1 second.",
        descriptionHTML:
          'Basic attacks reduce <i>Reckless Swing\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by 1 second.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Basic attacks reduce Reckless Swing's  cooldown by 1 second.",
            values: 1,
            units: 'total_ad',
            unitsText: "attacks reduce Reckless Swing's  cooldown by 1 second.",
            pre: "Basic attacks reduce Reckless Swing's  cooldown by 1 second.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'True',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* The health cost is equal to 30% of the <b>total</b> damage dealt by the ability.\n<ul><li><i>Reckless Swing</i> can be cast even if <b>Olaf</b> doesn\'t have the sufficient amount of health to pay for the health cost.\n<ul><li>As with all abilities with health costs, <i>Reckless Swing</i> will not reduce <b>Olaf\'s</b> health below <span style="color: #1F995C; white-space:normal">1</span>.</li></ul></li>\n<li><i>Reckless Swing\'s</i> health refund is considered a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> therefore it is affected by healing modifiers.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  Ragnarok: {
    name: 'Ragnarok',
    display_name: 'Ragnarok',
    champion: 'Olaf',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'OlafRagnarok.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Olaf" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL" title="Olaf"><img alt="Olaf" src="/wiki/images/Olaf_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resist</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> becomes enraged for a short time, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> himself and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">cc-immune</a></span>, as well as gaining <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and increased <a href="/wiki/Size" title="Size">size</a>. For a brief moment, he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
      '<i>Ragnarok\'s</i> duration can be extended by hitting <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Olaf" data-ability="Reckless Swing" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Reckless Swing"><img alt="Reckless Swing" src="/wiki/images/Olaf_Reckless_Swing.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Olaf/LoL">Reckless Swing</a></span></span></i> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cc-immunity</span></b></span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">Crowd control</a></span> cannot be applied during this time.',
    ],
    description: [
      {
        description:
          'Passive: Olaf gains  bonus armor and  bonus magic resistance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Olaf</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Resistances:',
            values: '10 / 15 / 20 / 25 / 30',
            valuesHTML: '10 / 15 / 20 / 25 / 30',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '10 / 15 / 20 / 25 / 30',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
          },
        ],
      },
      {
        icon: '/wiki/images/Ragnarok.png',
        description:
          'Active: Olaf becomes enraged for 3 seconds,  cleansing himself of all  crowd control and becoming  immune to them, as well as gaining  bonus attack damage and 10% increased size. For the first second of Ragnarok, he also gains  bonus movement speed while facing  visible enemy  champions within 2000 units.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> becomes enraged for 3 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> himself of all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to them</a></span>, as well as gaining <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and 10% increased <a href="/wiki/Size" title="Size">size</a>. For the first second of <i>Ragnarok</i>, he also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within 2000 units.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Olaf becomes enraged for 3 seconds,  cleansing himself of all  crowd control and becoming  immune to them, as well as gaining  bonus attack damage and 10% increased size',
            increasedStat: 'bonus_ad',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'increased sizebecomes enraged for 3 seconds,  cleansing himself of all  crowd control and becoming  immune to them, as well as gaining  bonus attack damage and 10',
            pre: 'Olaf becomes enraged for 3 seconds,  cleansing himself of all  crowd control and becoming  immune to them, as well as gaining  bonus attack damage and 10% increased size',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'For the first second of Ragnarok, he also gains  bonus movement speed while facing  visible enemy  champions within 2000 units.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'the first second of Ragnarok, he also gains  bonus movement speed while facing  visible enemy  champions within 2000 units.',
            pre: 'For the first second of Ragnarok, he also gains  bonus movement speed while facing  visible enemy  champions within 2000 units.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values: '10 / 15 / 20 / 25 / 30 (+ 25% AD)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color:orange; white-space:normal">(+&nbsp;25% AD)</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '20 / 45 / 70%',
            valuesHTML: '20 / 45 / 70%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 25% AD)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 25% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 45 / 70%',
            values: [20, 45, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Ragnarok's duration is increased by and up to 2.5 seconds for each basic attack  on-hit or cast of  Reckless Swing against an enemy  champion.",
        descriptionHTML:
          '<i>Ragnarok\'s</i> duration is increased by and up to 2.<small>5</small> seconds for each basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> or cast of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Olaf" data-ability="Reckless Swing" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Reckless Swing"><img alt="Reckless Swing" src="/wiki/images/Olaf_Reckless_Swing.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Olaf/LoL">Reckless Swing</a></span></span></i> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Ragnarok's duration is increased by and up to 2.5 seconds for each basic attack  on-hit or cast of  Reckless Swing against an enemy  champion.",
            increasedStat: 'total_ad',
            values: 2,
            units: '',
            unitsText:
              'duration is increased by and up to 2.5 seconds for each basic attack  on-hit or cast of  Reckless Swing against an enemy  champion.',
            pre: "Ragnarok's duration is increased by and up to 2.5 seconds for each basic attack  on-hit or cast of  Reckless Swing against an enemy  champion.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <i>Ragnarok</i> removes the underlying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> effects, but not the forced displacement, which requires him to use a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> ability to override it.\n<ul><li><i>Ragnarok</i> does not bypass self or ally applied effects, unless otherwise stated. Some examples include <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guardian Angel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guardian_Angel" title="Guardian Angel"><img alt="Guardian Angel" src="/wiki/images/Guardian_Angel_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guardian_Angel" title="Guardian Angel">Guardian Angel</a></span></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Fate\'s Call" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Fate\'s Call"><img alt="Fate\'s Call" src="/wiki/images/Kalista_Fate%27s_Call.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Kalista/LoL">Fate\'s Call</a></span></span>.\n<ul><li>He prevents both ally and enemy <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL" title="Bard"><img alt="Bard" src="/wiki/images/Bard_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL" title="Bard/LoL">Bard</a></span></span> from putting him in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-ability="Tempered Fate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL#Tempered_Fate" title="Tempered Fate"><img alt="Tempered Fate" src="/wiki/images/Bard_Tempered_Fate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL#Tempered_Fate" title="Bard/LoL">Tempered Fate</a></span></span>.</li>\n<li>The ability will remain for its full duration regardless.</li>\n<li>He cannot be knocked <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> by the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blast_Cone" title="Blast Cone"><img alt="Blast Cone" src="/wiki/images/Blast_ConeSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blast_Cone" class="mw-redirect" title="Blast Cone">Blast Cone</a></span></span> regardless of ally or enemy.</li></ul></li>\n<li><i>Ragnarok</i> does not negate any <a href="/wiki/Debuff" title="Debuff">debuffs</a> other than <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> from being applied unless absolutely necessary.</li>\n<li>The <span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span> updates dynamically over the duration; Increases or reductions in <span style="color:orange; white-space:normal">attack damage</span> after the effect has been applied will still be amplified.</li>\n<li>The <span style="color:orange; white-space:normal">25% attack damage</span> scaling amplifies the flat <span style="color:orange; white-space:normal">attack damage <b>bonus</b></span> as well.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
