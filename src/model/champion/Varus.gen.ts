import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Varus';

export default {
  'Living Vengeance': {
    name: 'Living Vengeance',
    display_name: 'Living Vengeance',
    champion: 'Varus',
    skill: 'I',
    image: {
      full: 'VarusPassive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> When <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL" title="Varus"><img alt="Varus" src="/wiki/images/Varus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL" title="Varus/LoL">Varus</a></span></span> kills an enemy, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds. The amount is based on his other sources of <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, and is increased on an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Living Vengeance.png',
        description:
          'Innate: When Varus kills an enemy, he gains  10 / 15 / 20% (based on level) (+ 20% bonus attack speed) bonus attack speed for 5 / 7 / 9 / 11 (based on level) seconds, increased to 40% (+ 40% bonus attack speed) upon scoring an enemy  champion  takedown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> When <b>Varus</b> kills an enemy, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="20;13" data-bot_values="10;15;20" data-top_values="1;7;13" data-bot_key="%">10 / 15 / 20% (based on level)</span> <span style="color:orangered; white-space:normal">(+&nbsp;20% <b>bonus</b> attack speed)</span> <b>bonus</b> attack speed</span></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;1" data-finish="11;16" data-bot_values="5;7;9;11" data-top_values="1;6;11;16">5 / 7 / 9 / 11 (based on level)</span> seconds, increased to <span style="color:orangered; white-space:normal">40%</span> <span style="color:orangered; white-space:normal">(+&nbsp;40% <b>bonus</b> attack speed)</span> upon scoring an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' When Varus kills an enemy, he gains  10 / 15 / 20% (based on level) (+ 20% bonus attack speed) bonus attack speed for 5 / 7 / 9 / 11 (based on level) seconds, increased to 40% (+ 40% bonus attack speed) upon scoring an enemy  champion  takedown.',
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'bonus attack speed for 5 / 7 / 9 / 11',
            pre: 'When Varus kills an enemy, he gains  10 / 15 / 20%',
            post: 'bonus attack speed for 5 / 7 / 9 / 11',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus attack speed',
                pre: '+ 20% bonus attack speed',
              },
              {
                values: 40,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus attack speed',
                pre: '+ 40% bonus attack speed',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      "* <i>Living Vengeance's</i> buff can be refreshed and is triggered when <b>Varus</b> kills any unit.\n<ul><li><ul><li>The increased bonus gained from taking down an enemy champion takes priority over the lesser bonus. That bonus can only be refreshed by scoring another takedown.</li></ul></li></ul>",
    yvideo: 'Varus - Passive',
  },
  'Piercing Arrow': {
    name: 'Piercing Arrow',
    display_name: 'Piercing Arrow',
    champion: 'Varus',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'VarusQ.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '895 − 1595 (based on channel time)',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">1900</span>',
    cast_time: 'none',
    cost: '65 / 70 / 75 / 80 / 85',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect, after charge ends the cooldown is reduced equal to the charge duration">16 / 15 / 14 / 13 / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL" title="Varus"><img alt="Varus" src="/wiki/images/Varus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL" title="Varus/LoL">Varus</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> up to a few seconds, increasing the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> of his shot. <i>Piercing Arrow</i> can be recast within the duration and will cancel automatically afterwards, refunding a portion of the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Varus</b> fires a piercing arrow in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on channel time.',
    ],
    description: [
      {
        icon: '/wiki/images/Piercing Arrow.png',
        description:
          "Active: Varus  charges while being  slowed by 20% for up to 4 seconds to increase Piercing Arrow's  range and damage over the first 1.25 seconds of the channel.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Varus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 20% for up to 4 seconds to increase <i>Piercing Arrow\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> and damage over the first 1.<small>25</small> seconds of the channel.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: " Varus  charges while being  slowed by 20% for up to 4 seconds to increase Piercing Arrow's  range and damage over the first 1.25 seconds of the channel.",
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "for up to 4 seconds to increase Piercing Arrow's  range and damage over the first 1.25 seconds of the channel. charges while being  slowed by 20",
            pre: "Varus  charges while being  slowed by 20% for up to 4 seconds to increase Piercing Arrow's  range and damage over the first 1.25 seconds of the channel.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Piercing Arrow can be recast within the duration. If the charge completes without reactivation, Piercing Arrow is cancelled and refunds  50% of the mana cost.',
        descriptionHTML:
          '<i>Piercing Arrow</i> can be recast within the duration. If the charge completes without reactivation, <i>Piercing Arrow</i> is cancelled and refunds <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">50% of the mana cost</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If the charge completes without reactivation, Piercing Arrow is cancelled and refunds  50% of the mana cost.',
            values: 5,
            valuesIsPercent: true,
            units: 'total_mana',
            unitsText:
              'of the mana cost.the charge completes without reactivation, Piercing Arrow is cancelled and refunds  50',
            pre: 'If the charge completes without reactivation, Piercing Arrow is cancelled and refunds  50% of the mana cost.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Recast: Varus fires a piercing arrow in the target direction that deals physical damage to enemies hit. The damage of the arrow as well as any detonated  Blight stacks are   increased by 0% − 50% (based on channel time), and the arrow's damage is reduced by 0% − 67% (based on enemies hit).",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Varus</b> fires a piercing arrow in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. The damage of the arrow as well as any detonated <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Blighted Quiver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Blight"><img alt="Blight" src="/wiki/images/Varus_Blighted_Quiver.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Varus/LoL">Blight</a></span></span></i> stacks are <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"></span><a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased</span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="2% per 0.05 seconds. \'\'This is capped at 1.25 seconds.\'\'" data-bot_values="0;10;20;30;40;50" data-top_values="0;0.25;0.5;0.75;1;1.25" data-bot_key="%">0% − 50% (based on channel time)</span>, and the arrow\'s damage is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="enemies hit" data-displayformula="0% + (15% per enemy hit). \'\'This is capped at a maximum of 67%.\'\'" data-bot_values="0;15;30;45;60;67" data-top_values="0;1;2;3;4;5" data-bot_key="%">0% − 67% (based on enemies hit)</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values:
              '10 / 46.67 / 83.33 / 120 / 156.67 (+ 83.33 / 86.67 / 90 / 93.33 / 96.67% AD)',
            valuesHTML:
              '10 / 46.<small>67</small> / 83.<small>33</small> / 120 / 156.<small>67</small> <span style="color:orange; white-space:normal">(+&nbsp;83.<small>33</small> / 86.<small>67</small> / 90 / 93.<small>33</small> / 96.<small>67</small>% AD)</span>',
          },
          {
            name: 'Minimum Reduced Damage:',
            values:
              '3.3 / 15.4 / 27.5 / 39.6 / 51.7 (+ 27.5 / 28.6 / 29.7 / 30.8 / 31.9% AD)',
            valuesHTML:
              '3.<small>3</small> / 15.<small>4</small> / 27.<small>5</small> / 39.<small>6</small> / 51.<small>7</small> <span style="color:orange; white-space:normal">(+&nbsp;27.<small>5</small> / 28.<small>6</small> / 29.<small>7</small> / 30.<small>8</small> / 31.<small>9</small>% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '10 / 46.67 / 83.33 / 120 / 156.67 (+ 83.33 / 86.67 / 90 / 93.33 / 96.67% AD)',
            damagetype: 'Physical',
            values: [10, 46.67, 83.33, 120, 156.67],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 46.67 / 83.33 / 120 / 156.67',
            children: [
              {
                values: [83.33, 86.67, 90, 93.33, 96.67],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 83.33 / 86.67 / 90 / 93.33 / 96.67% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Reduced Damage:',
            raw: '3.3 / 15.4 / 27.5 / 39.6 / 51.7 (+ 27.5 / 28.6 / 29.7 / 30.8 / 31.9% AD)',
            damagetype: 'None',
            values: [3.3, 15.4, 27.5, 39.6, 51.7],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3.3 / 15.4 / 27.5 / 39.6 / 51.7',
            children: [
              {
                values: [27.5, 28.6, 29.7, 30.8, 31.9],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 27.5 / 28.6 / 29.7 / 30.8 / 31.9% AD',
              },
            ],
          },
        ],
      },
    ],
    targeting:
      '<a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a>',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The arrow missile range is 825 to 1525; The range increases by 140 per 0.<small>25</small> seconds for the first 1.<small>25</small> seconds. Upon reaching its maximum range, it also strikes additional targets in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 70 radius, rounding off the struck area.\n<ul><li>The indicator for the range of the spell will be displayed for the entire channel.</li>\n<li><i>Piercing Arrow</i> will cast from wherever <b>Varus</b> is at the end of the channel.</li>\n<li><i>Piercing Arrow\'s</i> damage will display a <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike">cosmetic critical strike</a> when fully charged.</li>\n<li>The following table refers for interactions while <b>Varus</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Charge channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Blighted Quiver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Blighted Quiver"><img alt="Blighted Quiver" src="/wiki/images/Varus_Blighted_Quiver.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Varus/LoL">Blighted Quiver</a></span></span> is usable during the first 0.<small>25</small> seconds, otherwise, it\'s disabled. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Hail of Arrows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Hail_of_Arrows" title="Hail of Arrows"><img alt="Hail of Arrows" src="/wiki/images/Varus_Hail_of_Arrows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Hail_of_Arrows" title="Varus/LoL">Hail of Arrows</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Chain of Corruption" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Chain_of_Corruption" title="Chain of Corruption"><img alt="Chain of Corruption" src="/wiki/images/Varus_Chain_of_Corruption.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Chain_of_Corruption" title="Varus/LoL">Chain of Corruption</a></span></span> are disabled. This ability recasts to end channel.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled, but can still use trinkets.\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> (Recasts)\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    yvideo: 'Varus - Q',
  },
  'Blighted Quiver': {
    name: 'Blighted Quiver',
    display_name: 'Blighted Quiver',
    champion: 'Varus',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'VarusW.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the effect is used with Piercing Arrow">40</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL" title="Varus\'"><img alt="Varus\'" src="/wiki/images/Varus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL" title="Varus/LoL">Varus\'</a></span></span> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and apply a stack of <i>Blight</i>, which stacks up to 3 times. <b>Varus\' </b>abilities consume all <i>Blight</i> stacks on enemies hit to apply the effect.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Varus\' </b>next <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow"><img alt="Piercing Arrow" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow</a></span></span></i> within a few seconds is empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to enemies based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>, increased based on charge time. If he does not cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow"><img alt="Piercing Arrow" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow</a></span></span></i>, <i>Blighted Quiver</i> can be recast within the duration, and does so automatically afterwards.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Varus</b> ends <i>Blighted Quiver</i>, placing it on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;brief</span> cooldown.',
      '<span class="template_sbc"><b>Blight:</b></span> For each stack consumed, the target is dealt <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. Against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, this also <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduces</span> his basic abilities\' cooldowns.',
    ],
    description: [
      {
        description:
          "Passive: Varus' basic attacks are empowered to deal bonus magic damage and apply a stack of Blight  on-hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times. Varus'  abilities consume all Blight stacks on enemies hit to apply the effect.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Varus\'</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Blight</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for 6 seconds, refreshing on subsequent applications and stacking up to 3 times. <b>Varus\' </b> abilities consume all <i>Blight</i> stacks on enemies hit to apply the effect.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " Varus' basic attacks are empowered to deal bonus magic damage and apply a stack of Blight  on-hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times",
            min: 0,
            max: 10,
            description:
              " Varus' basic attacks are empowered to deal bonus magic damage and apply a stack of Blight  on-hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times",
            values: 6,
            units: 'total_ap',
            unitsText:
              'basic attacks are empowered to deal bonus magic damage and apply a stack of Blight  on-hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times',
            pre: "Varus' basic attacks are empowered to deal bonus magic damage and apply a stack of Blight  on-hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times",
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '7 / 12 / 17 / 22 / 27 (+ 30% AP)',
            valuesHTML:
              '7 / 12 / 17 / 22 / 27 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '7 / 12 / 17 / 22 / 27 (+ 30% AP)',
            damagetype: 'Magic',
            values: [7, 12, 17, 22, 27],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 12 / 17 / 22 / 27',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Blighted Quiver.png',
        description:
          "Blight: For each stack consumed, the target is dealt bonus magic damage. Against a  champion or epic  monster, this also reduces his basic abilities'  current cooldowns by 12% of the total cooldown for each stack, up to 36% per target. This damage is capped at 360 against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Blight:</b></span> For each stack consumed, the target is dealt <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. Against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, this also reduces his basic abilities\' <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> by 12% of the <b>total</b> cooldown for each stack, up to 36% per target. This damage is capped at 360 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: "Against a  champion or epic  monster, this also reduces his basic abilities'  current cooldowns by 12% of the total cooldown for each stack, up to 36% per target",
            increasedStat: 'feastStacks',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              "of the total cooldown for each stack, up to 36a  champion or epic  monster, this also reduces his basic abilities'  current cooldowns by 12",
            pre: "Against a  champion or epic  monster, this also reduces his basic abilities'  current cooldowns by 12% of the total cooldown for each stack, up to 36% per target",
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'This damage is capped at 360 against  monsters.',
            increasedStat: 'total_ap',
            values: 3,
            units: '',
            unitsText: 'damage is capped at 360 against  monsters.',
            pre: 'This damage is capped at 360 against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage per Stack:',
            values:
              "3 / 3.5 / 4 / 4.5 / 5% (+ 2.5% per 100 AP) of the target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">3 / 3.<small>5</small> / 4 / 4.<small>5</small> / 5% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2.<small>5</small>% per 100 AP)</span> of the target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage per Stack:',
            raw: "3 / 3.5 / 4 / 4.5 / 5% (+ 2.5% per 100 AP) of the target's maximum health",
            healType: 'OutgoingHeals',
            values: [3, 3.5, 4, 4.5, 5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '3 / 3.5 / 4 / 4.5 / 5%',
            post: "of the target's maximum health",
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2.5% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Blighted Quiver 2.png',
        description:
          "Active: Varus' next  Piercing Arrow within 5.5 seconds is empowered to deal 6% − 14% (based on level) of the target's missing health bonus magic damage, increased by 0% − 50% (based on Piercing Arrow's channel time), for a maximum of 9% − 21% (based on level) of the target's missing health. This damage is capped at 360 against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Varus\'</b> next <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow"><img alt="Piercing Arrow" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow</a></span></span></i> within 5.<small>5</small> seconds is empowered to deal <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="6;1" data-finish="14;13" data-bot_values="6;8;10;12;14" data-top_values="1;4;7;10;13" data-bot_key="%">6% − 14% (based on level)</span> of the target\'s <b>missing</b> health</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Piercing Arrow\'s channel time" data-displayformula="5% per 0.2 seconds. \'\'This is capped at 2 seconds.\'\'" data-bot_values="0;5;10;15;20;25;30;35;40;45;50" data-top_values="0;0.2;0.4;0.6;0.8;1;1.2;1.4;1.6;1.8;2" data-bot_key="%">0% − 50% (based on <i>Piercing Arrow\'s</i> channel time)</span>, for a maximum of <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;1" data-finish="21;13" data-bot_values="9;12;15;18;21" data-top_values="1;4;7;10;13" data-bot_key="%">9% − 21% (based on level)</span> of the target\'s <b>missing</b> health</span>. This damage is capped at 360 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: " Varus' next  Piercing Arrow within 5.5 seconds is empowered to deal 6% − 14% (based on level) of the target's missing health bonus magic damage, increased by 0% − 50% (based on Piercing Arrow's channel time), for a maximum of 9% − 21% (based on level) of the target's missing health",
            healType: 'OutgoingHeals',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'target',
            units: 'missing_hp',
            unitsText:
              "of the target's missing health bonus magic damage, increased by 0% − 50%",
            pre: "Varus' next  Piercing Arrow within 5.5 seconds is empowered to deal 6% − 14%",
            post: "of the target's missing health bonus magic damage, increased by 0% − 50%",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'This damage is capped at 360 against  monsters.',
            increasedStat: 'total_ap',
            values: 3,
            units: '',
            unitsText: 'damage is capped at 360 against  monsters.',
            pre: 'This damage is capped at 360 against  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "If Varus does not cast  Piercing Arrow, Blighted Quiver can be recast after 1 second within the duration, and does so automatically afterwards or when he dies. Blighted Quiver can be cast during the first 0.25 seconds of  Piercing Arrow's charge, and will be placed on full cooldown even if  Piercing Arrow is not recast.",
        descriptionHTML:
          'If <b>Varus</b> does not cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow"><img alt="Piercing Arrow" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow</a></span></span></i>, <i>Blighted Quiver</i> can be recast after 1 second within the duration, and does so automatically afterwards or when he dies. <i>Blighted Quiver</i> can be cast during the first 0.<small>25</small> seconds of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow\'s"><img alt="Piercing Arrow\'s" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow\'s</a></span></span></i> charge, and will be placed on full cooldown even if <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow"><img alt="Piercing Arrow" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow</a></span></span></i> is not recast.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If Varus does not cast  Piercing Arrow, Blighted Quiver can be recast after 1 second within the duration, and does so automatically afterwards or when he dies',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Varus does not cast  Piercing Arrow, Blighted Quiver can be recast after 1 second within the duration, and does so automatically afterwards or when he dies',
            pre: 'If Varus does not cast  Piercing Arrow, Blighted Quiver can be recast after 1 second within the duration, and does so automatically afterwards or when he dies',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Recast: Varus ends Blighted Quiver and places it on a 1-second cooldown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Varus</b> ends <i>Blighted Quiver</i> and places it on a 1-second cooldown.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Recast:',
            raw: ' Varus ends Blighted Quiver and places it on a 1-second cooldown.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'ends Blighted Quiver and places it on a 1-second cooldown.',
            pre: 'Varus ends Blighted Quiver and places it on a 1-second cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not block the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> damage but will block the consuming damage if the target is hit by his abilities.\n<ul><li><i>Blighted Quiver\'s</i> active damage is dealt after the damage of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow"><img alt="Piercing Arrow" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow</a></span></span>.</li>\n<li><i>Blighted Quiver</i> does not count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.</li>\n<li>The attacks do not affect <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Blighted Quiver\'s</i> on-hit interaction with <i>parrying</i> effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li></ul>',
    yvideo: 'Varus - W',
  },
  'Hail of Arrows': {
    name: 'Hail of Arrows',
    display_name: 'Hail of Arrows',
    champion: 'Varus',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'VarusE.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '925',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 300',
    cast_time: '0.<small>2419</small>',
    cost: '80',
    costtype: 'mana',
    cooldown: '18 / 16 / 14 / 12 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL" title="Varus"><img alt="Varus" src="/wiki/images/Varus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL" title="Varus/LoL">Varus</a></span></span> fires a hail of arrows to the target location that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
      'The area then becomes desecrated for a few seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies within and inflicting them with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grievous Wounds</span>:</b></span> The target receives reduced <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> and <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;health regeneration</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Hail of Arrows.png',
        description:
          'Active: Varus fires a hail of arrows at the target location that land after 0.5 seconds, dealing physical damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Varus</b> fires a hail of arrows at the target location that land after 0.<small>5</small> seconds, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 100 / 140 / 180 / 220 (+ 90% bonus AD)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color:orange; white-space:normal">(+&nbsp;90% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 90% bonus AD)',
            damagetype: 'Physical',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'The area then becomes desecrated for 4 seconds,  slowing enemies within and inflicting them with  Grievous Wounds.',
        descriptionHTML:
          'The area then becomes desecrated for 4 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies within and inflicting them with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The area then becomes desecrated for 4 seconds,  slowing enemies within and inflicting them with  Grievous Wounds.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'area then becomes desecrated for 4 seconds,  slowing enemies within and inflicting them with  Grievous Wounds.',
            pre: 'The area then becomes desecrated for 4 seconds,  slowing enemies within and inflicting them with  Grievous Wounds.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '25 / 30 / 35 / 40 / 45%',
            valuesHTML: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        levelingRatios: [
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
        description:
          'Hail of Arrows will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Hail of Arrows will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slow</a></span> lingers for 0.<small>25</small> seconds after leaving the marked area.\n<ul><li><i>Hail of Arrows</i> consumes <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Blighted Quiver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Blighted Quiver"><img alt="Blighted Quiver" src="/wiki/images/Varus_Blighted_Quiver.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Varus/LoL">Blighted Quiver</a></span></span> stacks for bonus damage a second time after ~0.<small>3</small> seconds of hitting, allowing stacks applied during this time to be triggered.</li></ul>',
    yvideo: 'Varus - E',
  },
  'Chain of Corruption': {
    name: 'Chain of Corruption',
    display_name: 'Chain of Corruption',
    champion: 'Varus',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'VarusR.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1370',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Tether forming radius">650</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">240</span>',
    tether_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="center-to-edge">650</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">1500</span>',
    cast_time: '0.<small>2419</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '100 / 90 / 80 / 70 / 60',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL" title="Varus"><img alt="Varus" src="/wiki/images/Varus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL" title="Varus/LoL">Varus</a></span></span> unleashes a tendril in the target direction that infects the first enemy champion hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for a short time. They are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> and rapidly inflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Blighted Quiver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Blight"><img alt="Blight" src="/wiki/images/Varus_Blighted_Quiver.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Varus/LoL">Blight</a></span></span></i> stacks.',
      'Upon impact, the tendril roots into the ground from which it <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tethers"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethers</a></span> to nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. If a target stays within range after its duration, they become infected and a new tendril will spread from them.',
      "<i>Chain of Corruption's</i> spread can repeat indefinitely until there are no new targets.",
    ],
    description: [
      {
        icon: '/wiki/images/Chain of Corruption.png',
        description:
          'Active: Varus unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing magic damage and  rooting them for 2 seconds, during which they are  revealed. Over the first 1.5 seconds, they are also inflicted with maximum stacks of  Blight.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Varus</b> unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for 2 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>. Over the first 1.<small>5</small> seconds, they are also inflicted with maximum stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Blighted Quiver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Blight"><img alt="Blight" src="/wiki/images/Varus_Blighted_Quiver.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Varus/LoL">Blight</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Varus unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing magic damage and  rooting them for 2 seconds, during which they are  revealed',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing magic damage and  rooting them for 2 seconds, during which they are  revealed',
            pre: 'Varus unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing magic damage and  rooting them for 2 seconds, during which they are  revealed',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Over the first 1.5 seconds, they are also inflicted with maximum stacks of  Blight.',
            min: 0,
            max: 10,
            description:
              'Over the first 1.5 seconds, they are also inflicted with maximum stacks of  Blight.',
            values: 1,
            units: 'feastStacks',
            unitsText:
              'the first 1.5 seconds, they are also inflicted with maximum stacks of  Blight.',
            pre: 'Over the first 1.5 seconds, they are also inflicted with maximum stacks of  Blight.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 100% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 100% AP)',
            damagetype: 'Magic',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Chain of Corruption 2.png',
        description:
          'Upon impact, the tendril roots into the ground from which it seeks out nearby enemy  champions. If a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects. A new tendril is then spread out from the infected target that is closest to a nearby uninfected enemy champion. The infection can spread repeatedly until there are no new targets.',
        descriptionHTML:
          'Upon impact, the tendril roots into the ground from which it seeks out nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. If a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects. A new tendril is then spread out from the infected target that is closest to a nearby uninfected enemy champion. The infection can spread repeatedly until there are no new targets.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects',
            damagetype: 'None',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects',
            pre: 'If a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The target does not have to be  visible to be caught by the tendril.',
        descriptionHTML:
          '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be caught by the tendril.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Enemy champions can be targeted again by the corruption\'s tether if they were not infected the previous time, even if they were targeted and got out of range.\n<ul><li>A tendril that roots into the ground will only seek nearby enemy champions that were already in the area.</li>\n<li><i>Chain of Corruption</i> will not infect <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immune</a></span> targets or those protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span> (but will still seek them).</li>\n<li><b>Varus</b> will turn to face the target direction at the start of the cast.</li>\n<li>The tendril cannot seek enemy champions that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>Consuming the <i>Blight\'s</i> stacks applied by <i>Chain of Corruption</i> will deal bonus magic damage based on <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Blighted Quiver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Blighted Quiver\'s"><img alt="Blighted Quiver\'s" src="/wiki/images/Varus_Blighted_Quiver.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Varus/LoL">Blighted Quiver\'s</a></span></span> rank. If the ability hasn\'t been ranked yet, the three <i>Blight</i> stacks will still be applied but they will be considered to be at rank 0, dealing <span style="color: #1F995C; white-space:normal">1.<small>25</small>% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> of the target\'s <b>maximum</b> health</span> per stack.</li></ul>',
    yvideo: 'Varus - R',
  },
} satisfies { [skillName in string]: SkillData };
