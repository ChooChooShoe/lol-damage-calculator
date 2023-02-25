import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Wukong';

export default {
  'Stone Skin': {
    name: 'Stone Skin',
    display_name: 'Stone Skin',
    champion: 'Wukong',
    skill: 'I',
    image: {
      full: 'MonkeyKingStoneSkin.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL" title="Wukong"><img alt="Wukong" src="/wiki/images/Wukong_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL" title="Wukong/LoL">Wukong</a></span></span> or his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone"><img alt="clone" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone</a></span></span></i> damage an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, he generates a stack of <i>Strength of Stone</i>, which stacks up to 10 times.',
      '<span class="template_sbc"><b>Strength of Stone:</b></span> <b>Wukong</b> gains <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> armor</span></span> based on level and <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">health regeneration</a></span> equal to portion of <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span>, increased for each stack.',
    ],
    description: [
      {
        description:
          'Innate: Whenever Wukong or his  clone damage an enemy  champion or  monster, he generates a stack of Strength of Stone for 5 seconds, refreshing on subsequent hits and stacking up to 10 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Wukong</b> or his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone"><img alt="clone" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone</a></span></span></i> damage an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, he generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Strength of Stone</i> for 5 seconds, refreshing on subsequent hits and stacking up to 10 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: 'Whenever Wukong or his  clone damage an enemy  champion or  monster, he generates a stack of Strength of Stone for 5 seconds, refreshing on subsequent hits and stacking up to 10 times.',
            min: 0,
            max: 10,
            description:
              'Whenever Wukong or his  clone damage an enemy  champion or  monster, he generates a stack of Strength of Stone for 5 seconds, refreshing on subsequent hits and stacking up to 10 times.',
            values: 5,
            units: 'genericStacks',
            unitsText:
              'Wukong or his  clone damage an enemy  champion or  monster, he generates a stack of Strength of Stone for 5 seconds, refreshing on subsequent hits and stacking up to 10 times.',
            pre: 'Whenever Wukong or his  clone damage an enemy  champion or  monster, he generates a stack of Strength of Stone for 5 seconds, refreshing on subsequent hits and stacking up to 10 times.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Stone_Skin.png',
        description:
          'Strength of Stone: Wukong gains  5 − 9 (based on level) bonus armor and  bonus health regeneration equal to 0.35% of his maximum health, increased by 50% for each stack up to a maximum of 30 − 54 (based on level) bonus armor and 2.1% maximum health regeneration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Strength of Stone:</b></span> <b>Wukong</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="9;" data-bot_values="5;5.24;5.47;5.71;5.94;6.18;6.41;6.65;6.88;7.12;7.35;7.59;7.82;8.06;8.29;8.53;8.76;9" data-top_values="">5 − 9 (based on level)</span> <b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health regeneration</span></span> equal to <span style="color: #1F995C; white-space:normal">0.<small>35</small>% of his <b>maximum</b> health</span>, increased by 50% for each stack up to a maximum of <span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="54;" data-bot_values="30;31.41;32.82;34.24;35.65;37.06;38.47;39.88;41.29;42.71;44.12;45.53;46.94;48.35;49.76;51.18;52.59;54" data-top_values="">30 − 54 (based on level)</span> <b>bonus</b> armor</span> and <span style="color: #1F995C; white-space:normal">2.<small>1</small>% <b>maximum</b> health</span> regeneration.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Strength of Stone:',
            raw: 'Wukong gains  5 − 9 (based on level) bonus armor and  bonus health regeneration equal to 0.35% of his maximum health, increased by 50% for each stack up to a maximum of 30 − 54 (based on level) bonus armor and 2.1% maximum health regeneration.',
            healType: 'HealthRegen',
            values: [
              5, 5.24, 5.47, 5.71, 5.94, 6.18, 6.41, 6.65, 6.88, 7.12, 7.35,
              7.59, 7.82, 8.06, 8.29, 8.53, 8.76, 9,
            ],
            basedOn: 'level',
            units: 'genericStacks',
            unitsText:
              'bonus armor and  bonus health regeneration equal to 0.35% of his maximum health, increased by 50% for each stack up to a maximum of 30 − 54',
            pre: 'Wukong gains  5 − 9',
            post: 'bonus armor and  bonus health regeneration equal to 0.35% of his maximum health, increased by 50% for each stack up to a maximum of 30 − 54',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional details',
  },
  'Crushing Blow': {
    name: 'Crushing Blow',
    display_name: 'Crushing Blow',
    champion: 'Wukong',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'MonkeyKingDoubleAttack.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">8 / 7.<small>5</small> / 7 / 6.<small>5</small> / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL" title="Wukong\'s"><img alt="Wukong\'s" src="/wiki/images/Wukong_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL" title="Wukong/LoL">Wukong\'s</a></span></span> next basic attack within a few seconds will gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, and inflict <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> for a short time.',
      'The cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> whenever <b>Wukong</b> or his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone"><img alt="clone" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone</a></span></span></i> damage an enemy.',
    ],
    description: [
      {
        icon: '/wiki/images/Crushing_Blow.png',
        description:
          'Active: Wukong empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  bonus range, deal bonus physical damage, and inflict  armor reduction for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Wukong</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 5 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, and inflict <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Wukong empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  bonus range, deal bonus physical damage, and inflict  armor reduction for 3 seconds.',
            increasedStat: 'bonus_ad',
            values: 5,
            units: '',
            unitsText:
              'empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  bonus range, deal bonus physical damage, and inflict  armor reduction for 3 seconds.',
            pre: 'Wukong empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  bonus range, deal bonus physical damage, and inflict  armor reduction for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Range:',
            values: '75 / 100 / 125 / 150 / 175',
            valuesHTML: '75 / 100 / 125 / 150 / 175',
          },
          {
            name: 'Bonus Physical Damage:',
            values: '20 / 45 / 70 / 95 / 120 (+ 45% bonus AD)',
            valuesHTML:
              '20 / 45 / 70 / 95 / 120 <span style="color:orange; white-space:normal">(+&nbsp;45% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Armor Reduction:',
            values: "10 / 15 / 20 / 25 / 30% of target's armor",
            valuesHTML:
              '<span style="color:yellow; white-space:normal">10 / 15 / 20 / 25 / 30% of target\'s armor</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Range:',
            raw: '75 / 100 / 125 / 150 / 175',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 45% bonus AD)',
            damagetype: 'Physical',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 45% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Armor Reduction:',
            raw: "10 / 15 / 20 / 25 / 30% of target's armor",
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText: "of target's armor",
            pre: "10 / 15 / 20 / 25 / 30% of target's armor",
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Crushing Blow's  cooldown is reduced by 0.5 seconds whenever Wukong or his  clone damage an enemy.",
        descriptionHTML:
          '<i>Crushing Blow\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 0.<small>5</small> seconds whenever <b>Wukong</b> or his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone"><img alt="clone" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone</a></span></span></i> damage an enemy.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Crushing Blow  resets Wukong's and his  clone's basic attack timer. Other abilities can be used during the attack's animation.",
        descriptionHTML:
          '<i>Crushing Blow <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Wukong\'s</b> and his <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone\'s"><img alt="clone\'s" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone\'s</a></span></span> basic attack timer. Other abilities can be used during the attack\'s animation.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    notes:
      '* <i>Crushing Blow</i> triggers on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span> but the armor reduction is not applied.\n<ul><li>Pressing <i>S</i> will cancel the animation and the attack will still land, but <b>Wukong</b> will not be able to move until it lands.</li></ul>',
    yvideo: 'Wukong - Q',
  },
  'Warrior Trickster': {
    name: 'Warrior Trickster',
    display_name: 'Warrior Trickster',
    champion: 'Wukong',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'MonkeyKingDecoy.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '300',
    effect_radius:
      '<span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;Clone\'s attack range</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">1200</span>',
    cast_time: 'none',
    cost: '80 / 70 / 60 / 50 / 40',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">22 / 19.<small>5</small> / 17 / 14.<small>5</small> / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL" title="Wukong"><img alt="Wukong" src="/wiki/images/Wukong_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL" title="Wukong/LoL">Wukong</a></span></span> enters brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, leaving behind a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> that remains for a short time.',
      'The clone will basic attack autonomously and gain the effects of his other abilities, as well as cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Cyclone" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Cyclone" title="Cyclone"><img alt="Cyclone" src="/wiki/images/Wukong_Cyclone.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Cyclone" title="Wukong/LoL">Cyclone</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Warrior_Trickster.png',
        description:
          'Active: Wukong enters  invisibility for 1 second and  dashes to the target location, leaving behind a  clone of himself at his casting position for 3.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Wukong</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> for 1 second and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, leaving behind a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of himself at his casting position for 3.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Wukong enters  invisibility for 1 second and  dashes to the target location, leaving behind a  clone of himself at his casting position for 3.25 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'enters  invisibility for 1 second and  dashes to the target location, leaving behind a  clone of himself at his casting position for 3.25 seconds.',
            pre: 'Wukong enters  invisibility for 1 second and  dashes to the target location, leaving behind a  clone of himself at his casting position for 3.25 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The clone is  untargetable to allies and can basic attack autonomously, prioritizing the last enemy Wukong damaged. It can also gain the effects of  Crushing Blow and  Nimbus Strike's bonus attack speed, and casts  Cyclone whenever Wukong does.",
        descriptionHTML:
          'The clone is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to allies and can basic attack autonomously, prioritizing the last enemy <b>Wukong</b> damaged. It can also gain the effects of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Crushing Blow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Crushing Blow"><img alt="Crushing Blow" src="/wiki/images/Wukong_Crushing_Blow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Wukong/LoL">Crushing Blow</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Nimbus Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Nimbus Strike\'s"><img alt="Nimbus Strike\'s" src="/wiki/images/Wukong_Nimbus_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Wukong/LoL">Nimbus Strike\'s</a></span></span></i> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span>, and casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Cyclone" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Cyclone" title="Cyclone"><img alt="Cyclone" src="/wiki/images/Wukong_Cyclone.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Cyclone" title="Wukong/LoL">Cyclone</a></span></span></i> whenever <b>Wukong</b> does.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'The clone deals reduced outgoing damage.',
        descriptionHTML: 'The clone deals reduced outgoing damage.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Clone Outgoing Damage:',
            values: '35 / 40 / 45 / 50 / 55%',
            valuesHTML: '35 / 40 / 45 / 50 / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Clone Outgoing Damage:',
            raw: '35 / 40 / 45 / 50 / 55%',
            damagetype: 'None',
            values: [35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "See Pets for more details about Wukong's clone. Wukong can cast any of his abilities during the dash. Warrior Trickster will cast at max range if cast beyond that.",
        descriptionHTML:
          '<i>See <a href="/wiki/Wukong/LoL#Pets" title="Wukong/LoL">Pets</a> for more details about <b>Wukong\'s</b> clone. <b>Wukong</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Warrior Trickster will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'pet',
    spellshield: true,
    notes:
      '* Casting <i>Warrior Trickster</i> during an ability\'s effects will transfer them to the clone.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">Turret</a></span> shots instantly kill the clone.</li>\n<li>The clone is immune to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blast_Cone" title="Blast Cone"><img alt="Blast Cone" src="/wiki/images/Blast_ConeSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blast_Cone" class="mw-redirect" title="Blast Cone">Blast Cone</a></span></span>.</li>\n<li>The clone can still be targeted by allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Auto-targeted"><a href="/wiki/Auto-targeted" title="Auto-targeted"><img alt="Electrical Surge.png" src="/wiki/images/Kennen_Electrical_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">auto-targeted</a></span> effects (e.g. <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Celestial Blessing" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Celestial_Blessing" title="Celestial Blessing"><img alt="Celestial Blessing" src="/wiki/images/Kayle_Celestial_Blessing.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Celestial_Blessing" title="Kayle/LoL">Celestial Blessing</a></span></span>).</li></ul>',
    yvideo: 'Wukong - W',
  },
  'Nimbus Strike': {
    name: 'Nimbus Strike',
    display_name: 'Nimbus Strike',
    champion: 'Wukong',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'MonkeyKingNimbus.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '625',
    effect_radius: '187.<small>5</small>',
    cast_time: 'none',
    cost: '30 / 35 / 40 / 45 / 50',
    costtype: 'mana',
    cooldown: '10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL" title="Wukong"><img alt="Wukong" src="/wiki/images/Wukong_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL" title="Wukong/LoL">Wukong</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy and sends <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> clones to briefly attack up to two surrounding enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'Upon arrival, <b>Wukong</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Nimbus_Strike.png',
        description:
          "Active: Wukong  dashes to the target enemy's location and sends out  untargetable clones to strike up to two additional enemies near the target's location, dealing magic damage. Nimbus Strike deals 120% damage to  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Wukong</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location and sends out <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> <i>clones</i> to strike up to two additional enemies near the target\'s location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. <i>Nimbus Strike</i> deals 120% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Nimbus Strike deals 120% damage to  monsters.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage to  monsters.Strike deals 120',
            pre: 'Nimbus Strike deals 120% damage to  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 110 / 140 / 170 / 200 (+ 100% AP)',
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 100% AP)',
            damagetype: 'Magic',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
        icon: '/wiki/images/undefined',
        description:
          'Upon arrival, Wukong gains  bonus attack speed for 5 seconds.',
        descriptionHTML:
          'Upon arrival, <b>Wukong</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Upon arrival, Wukong gains  bonus attack speed for 5 seconds.',
            increasedStat: 'bonus_ad',
            values: 5,
            units: '',
            unitsText:
              'arrival, Wukong gains  bonus attack speed for 5 seconds.',
            pre: 'Upon arrival, Wukong gains  bonus attack speed for 5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
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
        icon: '/wiki/images/undefined',
        description: 'Crushing Blow can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Crushing Blow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Crushing Blow"><img alt="Crushing Blow" src="/wiki/images/Wukong_Crushing_Blow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Wukong/LoL">Crushing Blow</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'false',
    callforhelp: 'True',
    notes:
      '* The <i>clones</i> can block non-targeted attacks or abilities for 0.<small>25</small> seconds after hitting their targets.\n<ul><li><i>Nimbus Strike</i> has an offset distance of 75 units from the target dashed to.</li>\n<li>The ability applies a stack of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span> / <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Phase Rush" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Phase_Rush_(Rune)" title="Phase Rush"><img alt="Phase Rush" src="/wiki/images/Phase_Rush_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Phase_Rush_(Rune)" class="mw-redirect" title="Phase Rush (Rune)">Phase Rush</a></span></span> even if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>The created <i>clones</i> are considered champions for <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turret Plating" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turret_Plating" title="Turret Plating\'s"><img alt="Turret Plating\'s" src="/wiki/images/Turret_Plating.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turret_Plating" class="mw-redirect" title="Turret Plating">Turret Plating\'s</a></span></span> <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span> sharing.</li></ul>',
    yvideo: 'Wukong - E',
  },
  Cyclone: {
    name: 'Cyclone',
    display_name: 'Cyclone',
    champion: 'Wukong',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'MonkeyKingSpinToWin.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: '162.<small>5</small>',
    cast_time: 'none',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">130 / 120 / 110 / 100 / 90</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL" title="Wukong"><img alt="Wukong" src="/wiki/images/Wukong_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL" title="Wukong/LoL">Wukong</a></span></span> spins his staff around for a short time, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>. The staff continually deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>, and can briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them up</a></span> once.',
      '<i>Cyclone</i> can be recast within the duration, and does so automatically afterwards.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Wukong</b> ends <i>Cyclone</i>. He cast <i>Cyclone</i> a second time within a period after the first cast has ended.',
    ],
    description: [
      {
        icon: '/wiki/images/Cyclone.png',
        description:
          'Active: Wukong spins his staff around for up to 2 seconds, becoming  ghosted and gaining  20% bonus movement speed. The staff deals physical damage every 0.25 seconds to enemies hit, and can  knock them up once for 0.6 seconds. Cyclone will not  knock up enemies who were already hit by either Wukong or his  clone within the same cast.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Wukong</b> spins his staff around for up to 2 seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span>. The staff deals <span style="color: #FF8C34; white-space:normal">physical damage</span> every 0.<small>25</small> seconds to enemies hit, and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them up</a></span> once for 0.<small>6</small> seconds. <i>Cyclone</i> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> enemies who were already hit by either <b>Wukong</b> or his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone"><img alt="clone" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone</a></span></span></i> within the same cast.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Wukong spins his staff around for up to 2 seconds, becoming  ghosted and gaining  20% bonus movement speed',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speedspins his staff around for up to 2 seconds, becoming  ghosted and gaining  20',
            pre: 'Wukong spins his staff around for up to 2 seconds, becoming  ghosted and gaining  20% bonus movement speed',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage Per Tick:',
            values:
              "1 / 1.25 / 1.5 / 1.75 / 2% of target's maximum health (+ 34.375% AD)",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2% of target\'s <b>maximum</b> health</span> <span style="color:orange; white-space:normal">(+&nbsp;34.<small>375</small>% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage Per Tick:',
            raw: "1 / 1.25 / 1.5 / 1.75 / 2% of target's maximum health (+ 34.375% AD)",
            healType: 'PhysicalVamp',
            values: [1, 1.25, 1.5, 1.75, 2],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "1 / 1.25 / 1.5 / 1.75 / 2% of target's maximum health",
            children: [
              {
                values: 34.375,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 34.375% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Cyclone can be recast after 0.5 seconds within the duration, and does so automatically afterwards or by casting another ability.',
        descriptionHTML:
          '<i>Cyclone</i> can be recast after 0.<small>5</small> seconds within the duration, and does so automatically afterwards or by casting another <a href="/wiki/Champion_ability" title="Champion ability">ability</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Cyclone_2.png',
        description:
          'Recast: Wukong ends Cyclone. After 1 second, he can cast Cyclone a second time within 8 seconds of the first cast.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Wukong</b> ends Cyclone. After 1 second, he can cast <i>Cyclone</i> a second time within 8 seconds of the first cast.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After 1 second, he can cast Cyclone a second time within 8 seconds of the first cast.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              '1 second, he can cast Cyclone a second time within 8 seconds of the first cast.',
            pre: 'After 1 second, he can cast Cyclone a second time within 8 seconds of the first cast.',
          },
        ],
        leveling: [
          {
            name: 'Maximum Total Physical Damage:',
            values:
              "16 / 20 / 24 / 28 / 32% of target's maximum health (+ 550% AD)",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">16 / 20 / 24 / 28 / 32% of target\'s <b>maximum</b> health</span> <span style="color:orange; white-space:normal">(+&nbsp;550% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Maximum Total Physical Damage:',
            raw: "16 / 20 / 24 / 28 / 32% of target's maximum health (+ 550% AD)",
            healType: 'PhysicalVamp',
            values: [16, 20, 24, 28, 32],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "16 / 20 / 24 / 28 / 32% of target's maximum health",
            children: [
              {
                values: 550,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 550% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Nimbus Strike's bonus attack speed duration is continuously refreshed while spinning.",
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Nimbus Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Nimbus Strike\'s"><img alt="Nimbus Strike\'s" src="/wiki/images/Wukong_Nimbus_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Wukong/LoL">Nimbus Strike\'s</a></span></span></i> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> duration is continuously refreshed while spinning.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Cyclone's damage is capped at 200 / 400 / 600 (based on level) per second against  monsters.",
        descriptionHTML:
          '<i>Cyclone\'s</i> damage is capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="200;400;600" data-top_values="6;11;16">200 / 400 / 600 (based on level)</span> per second against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Cyclone's damage is capped at 200 / 400 / 600 (based on level) per second against  monsters.",
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'per second against  monsters.',
            pre: "Cyclone's damage is capped at 200 / 400 / 600",
            post: 'per second against  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies, Self',
    damagetype: 'physical',
    spelleffects: 'aoedot',
    spellshield: 'Special',
    notes:
      '* <i>Cyclone</i> is special cased to grant stacks of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span> for each tick of damage.\n<ul><li>Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Crushing Blow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Crushing Blow"><img alt="Crushing Blow" src="/wiki/images/Wukong_Crushing_Blow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Wukong/LoL">Crushing Blow</a></span></span> will cancel <i>Cyclone</i> for both <b>Wukong</b> and his clone. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Warrior Trickster"><img alt="Warrior Trickster" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">Warrior Trickster</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Nimbus Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Nimbus Strike"><img alt="Nimbus Strike" src="/wiki/images/Wukong_Nimbus_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Wukong/LoL">Nimbus Strike</a></span></span> will only interrupt <b>Wukong\'s</b> <i>Cyclone</i>.</li>\n<li><i>Cyclone\'s</i> remaining duration always stays the same even after the clone replicated the ability.</li>\n<li>During <i>Cyclone</i>, <b>Wukong</b> and his clone\'s <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack ranges</a></span> are reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to 50&nbsp;」</span><span class="flipText2">「&nbsp;by 125&nbsp;」</span></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block one instance of damage.\n<ul><li>Blocking the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> will still grant immunity to it from either of <i>Cyclone\'s</i> casts.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Other abilities are disabled for the first 0.<small>3</small> seconds, casting them afterwards interrupts.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    yvideo: 'Wukong - R',
  },
} satisfies { [skillName in string]: SkillData };
