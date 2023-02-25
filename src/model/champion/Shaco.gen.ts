import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Shaco';

export default {
  Backstab: {
    name: 'Backstab',
    display_name: 'Backstab',
    champion: 'Shaco',
    skill: 'I',
    image: {
      full: 'Jester_CarefulStrikes.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL" title="Shaco\'s"><img alt="Shaco\'s" src="/wiki/images/Shaco_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL" title="Shaco/LoL">Shaco\'s</a></span></span> basic attacks deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> when hitting an enemy from behind.',
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Deceive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Deceive" title="Deceive"><img alt="Deceive" src="/wiki/images/Shaco_Deceive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Deceive" title="Shaco/LoL">Deceive</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Two-Shiv Poison" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Two-Shiv Poison"><img alt="Two-Shiv Poison" src="/wiki/images/Shaco_Two-Shiv_Poison.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Shaco/LoL">Two-Shiv Poison</a></span></span></i> have additional effects when they hit an enemy from behind.',
    ],
    description: [
      {
        icon: '/wiki/images/Backstab.png',
        description:
          "Innate: Shaco's basic attacks are empowered to deal 20 − 35 (based on level) (+ 25% bonus AD) bonus physical damage when hitting an enemy from behind. Backstab is affected by  critical strike modifiers.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Shaco\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="35;" data-bot_values="20;20.88;21.76;22.65;23.53;24.41;25.29;26.18;27.06;27.94;28.82;29.71;30.59;31.47;32.35;33.24;34.12;35" data-top_values="">20 − 35 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;25% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> when hitting an enemy from behind. <i>Backstab</i> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: "Shaco's basic attacks are empowered to deal 20 − 35 (based on level) (+ 25% bonus AD) bonus physical damage when hitting an enemy from behind",
            damagetype: 'Physical',
            values: [
              20, 20.88, 21.76, 22.65, 23.53, 24.41, 25.29, 26.18, 27.06, 27.94,
              28.82, 29.71, 30.59, 31.47, 32.35, 33.24, 34.12, 35,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus physical damage when hitting an enemy from behind',
            pre: "Shaco's basic attacks are empowered to deal 20 − 35",
            post: 'bonus physical damage when hitting an enemy from behind',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 25% bonus AD',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Deceive and  Two-Shiv Poison have additional effects when they hit an enemy from behind.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Deceive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Deceive" title="Deceive"><img alt="Deceive" src="/wiki/images/Shaco_Deceive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Deceive" title="Shaco/LoL">Deceive</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Two-Shiv Poison" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Two-Shiv Poison"><img alt="Two-Shiv Poison" src="/wiki/images/Shaco_Two-Shiv_Poison.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Shaco/LoL">Two-Shiv Poison</a></span></span></i> have additional effects when they hit an enemy from behind.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'basic',
    spellshield: false,
    notes:
      '* <i>Backstab\'s</i> bonus damage adds to the damage instance of the original basic attack.\n<ul><li>The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  Deceive: {
    name: 'Deceive',
    display_name: 'Deceive',
    champion: 'Shaco',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'Deceive.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '400',
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">12 / 11.<small>5</small> / 11 / 10.<small>5</small> / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL" title="Shaco"><img alt="Shaco" src="/wiki/images/Shaco_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL" title="Shaco/LoL">Shaco</a></span></span> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> for a short time and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location.',
      'After breaking the invisibility, his next basic attack within a brief moment will deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Backstab" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Backstab" title="Backstab"><img alt="Backstab" src="/wiki/images/Shaco_Backstab.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Backstab" title="Shaco/LoL">Backstab</a></span></span> Bonus:</b></span> The attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Deceive.png',
        description:
          'Active: Shaco becomes  invisible for a duration, and after a 0.125-second delay, he  blinks to the target location.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shaco</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> for a duration, and after a 0.<small>125</small>-second delay, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Invisibility Duration:',
            values: '2.5 / 2.75 / 3 / 3.25 / 3.5',
            valuesHTML:
              '2.<small>5</small> / 2.<small>75</small> / 3 / 3.<small>25</small> / 3.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Invisibility Duration:',
            raw: '2.5 / 2.75 / 3 / 3.25 / 3.5',
            values: [2.5, 2.75, 3, 3.25, 3.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2.5 / 2.75 / 3 / 3.25 / 3.5',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Deceive's  invisibility breaks when Shaco uses a basic attack or casts  Two-Shiv Poison, but not from casting  Jack in the Box or  Hallucinate.",
        descriptionHTML:
          '<i>Deceive\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> breaks when <b>Shaco</b> uses a basic attack or casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Two-Shiv Poison" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Two-Shiv Poison"><img alt="Two-Shiv Poison" src="/wiki/images/Shaco_Two-Shiv_Poison.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Shaco/LoL">Two-Shiv Poison</a></span></span></i>, but not from casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Jack in the Box"><img alt="Jack in the Box" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">Jack in the Box</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Hallucinate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Hallucinate" title="Hallucinate"><img alt="Hallucinate" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Hallucinate" title="Shaco/LoL">Hallucinate</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After breaking the invisibility, Shaco empowers his next basic attack within 0.25 seconds to deal bonus physical damage, which is affected by  critical strike modifiers.',
        descriptionHTML:
          'After breaking the invisibility, <b>Shaco</b> empowers his next basic attack within 0.<small>25</small> seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, which is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '25 / 35 / 45 / 55 / 65 (+ 50% bonus AD)',
            valuesHTML:
              '25 / 35 / 45 / 55 / 65 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '25 / 35 / 45 / 55 / 65 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [25, 35, 45, 55, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Backstab Bonus: The attack will  critically strike for (40% +  35%) bonus physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Backstab" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Backstab" title="Backstab"><img alt="Backstab" src="/wiki/images/Shaco_Backstab.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Backstab" title="Shaco/LoL">Backstab</a></span></span> Bonus:</b></span> The attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(40%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Backstab Bonus:',
            raw: 'The attack will  critically strike for (40% +  35%) bonus physical damage.',
            damagetype: 'Physical',
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'bonus physical damage.',
            pre: 'The attack will  critically strike for',
            post: 'bonus physical damage.',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '40% +  35%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Deceive will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Deceive will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self',
    damagetype: 'physical',
    spelleffects: 'basic',
    notes:
      "* <i>Deceive's</i> bonus damage adds directly to the damage instance of the basic attack.",
  },
  'Jack in the Box': {
    name: 'Jack in the Box',
    display_name: 'Jack in the Box',
    champion: 'Shaco',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'JackInTheBox.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '425',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '15',
    customlabel: 'Detection Radius',
    custominfo: '300',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL" title="Shaco"><img alt="Shaco" src="/wiki/images/Shaco_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL" title="Shaco/LoL">Shaco</a></span></span> summons a <i>box</i> at the target location that becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> after a short time.',
      'The <i>box</i> will spring out upon enemy contact, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fearing"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> nearby enemies for a short time. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit are also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.',
      'The <i>box</i> will remain for a few seconds to automatically fire at nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> that is increased when attacking only one enemy.',
    ],
    description: [
      {
        icon: '/wiki/images/Jack_in_the_Box.png',
        description:
          'Active: Shaco summons a box at the target location that becomes  stealthed after arming over 2 seconds, lasting for up to 40 (+ 10% AP) seconds. The box is  invulnerable and  untargetable to enemies while stealthed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shaco</b> summons a <i>box</i> at the target location that becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> after arming over 2 seconds, lasting for up to 40 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> seconds. The <i>box</i> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to enemies while stealthed.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Shaco summons a box at the target location that becomes  stealthed after arming over 2 seconds, lasting for up to 40 (+ 10% AP) seconds',
            damagetype: 'None',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'seconds',
            pre: 'Shaco summons a box at the target location that becomes  stealthed after arming over 2 seconds, lasting for up to 40',
            post: 'seconds',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The box will spring out upon enemy contact,  fearing nearby enemies and reducing their  movement speed for 2 seconds, modified against  champions, who are also  rooted for 0.5 seconds. Enemy champions have their movement speed set to a static 100, reduced to a static 60 for non-champions.',
        descriptionHTML:
          'The <i>box</i> will spring out upon enemy contact, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fearing"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> nearby enemies and reducing their <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> for 2 seconds, modified against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, who are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 0.<small>5</small> seconds. Enemy champions have their <span style="color: #F5EE99; white-space:normal">movement speed</span> set to a <span style="color: #F5EE99; white-space:normal">static 100</span>, reduced to a <span style="color: #F5EE99; white-space:normal">static 60</span> for non-champions.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The box will spring out upon enemy contact,  fearing nearby enemies and reducing their  movement speed for 2 seconds, modified against  champions, who are also  rooted for 0.5 seconds',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'box will spring out upon enemy contact,  fearing nearby enemies and reducing their  movement speed for 2 seconds, modified against  champions, who are also  rooted for 0.5 seconds',
            pre: 'The box will spring out upon enemy contact,  fearing nearby enemies and reducing their  movement speed for 2 seconds, modified against  champions, who are also  rooted for 0.5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Enemy champions have their movement speed set to a static 100, reduced to a static 60 for non-champions.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'champions have their movement speed set to a static 100, reduced to a static 60 for non-champions.',
            pre: 'Enemy champions have their movement speed set to a static 100, reduced to a static 60 for non-champions.',
          },
        ],
        leveling: [
          {
            name: 'Champion Disable Duration:',
            values: '0.5 / 0.75 / 1 / 1.25 / 1.5',
            valuesHTML:
              '0.<small>5</small> / 0.<small>75</small> / 1 / 1.<small>25</small> / 1.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Champion Disable Duration:',
            raw: '0.5 / 0.75 / 1 / 1.25 / 1.5',
            values: [0.5, 0.75, 1, 1.25, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.5 / 0.75 / 1 / 1.25 / 1.5',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Once sprung, the box will remain for 5 seconds, during which it will automatically fire at nearby  visible enemies every 0.5 seconds, dealing magic damage with each attack. If the box attacks only one target, it deals increased damage. Boxes deal bonus magic damage to  monsters and 50% reduced damage to  structures.',
        descriptionHTML:
          'Once sprung, the <i>box</i> will remain for 5 seconds, during which it will automatically fire at nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies every 0.<small>5</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> with each attack. If the <i>box</i> attacks only one target, it deals increased damage. <i>Boxes</i> deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and 50% reduced damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Once sprung, the box will remain for 5 seconds, during which it will automatically fire at nearby  visible enemies every 0.5 seconds, dealing magic damage with each attack',
            damagetype: 'Magic',
            values: 5,
            units: 'total_ad',
            unitsText:
              'sprung, the box will remain for 5 seconds, during which it will automatically fire at nearby  visible enemies every 0.5 seconds, dealing magic damage with each attack',
            pre: 'Once sprung, the box will remain for 5 seconds, during which it will automatically fire at nearby  visible enemies every 0.5 seconds, dealing magic damage with each attack',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'Boxes deal bonus magic damage to  monsters and 50% reduced damage to  structures.',
            damagetype: 'Magic',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'reduced damage to  structures.deal bonus magic damage to  monsters and 50',
            pre: 'Boxes deal bonus magic damage to  monsters and 50% reduced damage to  structures.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '10 / 15 / 20 / 25 / 30 (+ 12% AP)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;12% AP)</span>',
          },
          {
            name: 'Bonus Monster Damage:',
            values: '10 / 20 / 30 / 40 / 50',
            valuesHTML: '10 / 20 / 30 / 40 / 50',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 12% AP)',
            damagetype: 'Magic',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Monster Damage:',
            raw: '10 / 20 / 30 / 40 / 50',
            damagetype: 'None',
            values: [10, 20, 30, 40, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 20 / 30 / 40 / 50',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'See Pets for more details about boxes.',
        descriptionHTML:
          '<i>See <a href="/wiki/Shaco/LoL#Pets" title="Shaco/LoL">Pets</a> for more details about boxes.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* The <i>flee</i> starts at the same time as the <i>root</i>, but since the target cannot move while <i>rooted</i> the effective duration of the <i>flee</i> is reduced by the <i>root</i>.\n<ul><li><i>Static movement speed</i> cannot be modified (e.g. with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span> or <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> <a href="/wiki/Movement_speed" title="Movement speed">movement speed</a></span>).\n<ul><li>This effect can be negated if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow-immune</a></span>.</li></ul></li>\n<li>The box is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> so long as it is in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealth</a></span>. Effects that reveal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed traps</a></span> will render the box targetable and vulnerable while it can be seen.</li></ul>',
  },
  'Two-Shiv Poison': {
    name: 'Two-Shiv Poison',
    display_name: 'Two-Shiv Poison',
    champion: 'Shaco',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'TwoShivPoison.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '625',
    cast_time: '0.<small>25</small>',
    cost: '65',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> While <i>Two-Shiv Poison</i> is not on cooldown, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL" title="Shaco\'s"><img alt="Shaco\'s" src="/wiki/images/Shaco_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL" title="Shaco/LoL">Shaco\'s</a></span></span> basic attacks will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies for a short time.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Shaco</b> throws a dagger at the target enemy that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for a short time, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> that is increased if they are <span style="color: #1F995C; white-space:normal">at low health</span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Backstab" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Backstab" title="Backstab"><img alt="Backstab" src="/wiki/images/Shaco_Backstab.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Backstab" title="Shaco/LoL">Backstab</a></span></span> Bonus:</b></span> The dagger deals additional <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    ],
    description: [
      {
        description:
          "Passive: Shaco's basic attacks  slow enemies for 2 seconds while Two-Shiv Poison is not on cooldown.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Shaco\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies for 2 seconds while <i>Two-Shiv Poison</i> is not on cooldown.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Passive:',
            raw: "Shaco's basic attacks  slow enemies for 2 seconds while Two-Shiv Poison is not on cooldown.",
            values: 2,
            units: 'total_ad',
            unitsText:
              'basic attacks  slow enemies for 2 seconds while Two-Shiv Poison is not on cooldown.',
            pre: "Shaco's basic attacks  slow enemies for 2 seconds while Two-Shiv Poison is not on cooldown.",
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '20 / 22.5 / 25 / 27.5 / 30%',
            valuesHTML:
              '20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
      },
      {
        icon: '/wiki/images/Two-Shiv_Poison.png',
        description:
          'Active: Shaco throws a dagger at the target enemy that deals magic damage,  increased by 50% if they are below 30% of their maximum health, and  slows them for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shaco</b> throws a dagger at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased by 50%</span> if they are <span style="color: #1F995C; white-space:normal"><b>below</b> 30% of their <b>maximum</b> health</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: 'Shaco throws a dagger at the target enemy that deals magic damage,  increased by 50% if they are below 30% of their maximum health, and  slows them for 3 seconds.',
            healType: 'OutgoingHeals',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'if they are below 30throws a dagger at the target enemy that deals magic damage,  increased by 50',
            pre: 'Shaco throws a dagger at the target enemy that deals magic damage,  increased by 50% if they are below 30% of their maximum health, and  slows them for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 95 / 120 / 145 / 170 (+ 80% bonus AD) (+ 60% AP)',
            valuesHTML:
              '70 / 95 / 120 / 145 / 170 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '20 / 22.5 / 25 / 27.5 / 30%',
            valuesHTML:
              '20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 80% bonus AD) (+ 60% AP)',
            damagetype: 'Magic',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Backstab Bonus: The dagger deals an additional 15 − 50 (based on level) (+ 10% AP) bonus magic damage, increased to 22.5 − 75 (based on level) (+ 15% AP) if the target is below 30% of their maximum health.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Backstab" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Backstab" title="Backstab"><img alt="Backstab" src="/wiki/images/Shaco_Backstab.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Backstab" title="Shaco/LoL">Backstab</a></span></span> Bonus:</b></span> The dagger deals an additional <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="50;" data-bot_values="15;17.06;19.12;21.18;23.24;25.29;27.35;29.41;31.47;33.53;35.59;37.65;39.71;41.76;43.82;45.88;47.94;50" data-top_values="">15 − 50 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, increased to <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="22.5;" data-finish="75;" data-bot_values="22.5;25.59;28.68;31.76;34.85;37.94;41.03;44.12;47.21;50.29;53.38;56.47;59.56;62.65;65.74;68.82;71.91;75" data-top_values="">22.<small>5</small> − 75 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> if the target is <span style="color: #1F995C; white-space:normal"><b>below</b> 30% of their <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Backstab Bonus:',
            raw: 'The dagger deals an additional 15 − 50 (based on level) (+ 10% AP) bonus magic damage, increased to 22.5 − 75 (based on level) (+ 15% AP) if the target is below 30% of their maximum health.',
            healType: 'OutgoingHeals',
            values: [
              15, 17.06, 19.12, 21.18, 23.24, 25.29, 27.35, 29.41, 31.47, 33.53,
              35.59, 37.65, 39.71, 41.76, 43.82, 45.88, 47.94, 50,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage, increased to 22.5 − 75',
            pre: 'The dagger deals an additional 15 − 50',
            post: 'bonus magic damage, increased to 22.5 − 75',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
  },
  Hallucinate: {
    name: 'Hallucinate',
    display_name: 'Hallucinate',
    champion: 'Shaco',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'HallucinateFull.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Detonation">250</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">100 / 95 / 90 / 85 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL" title="Shaco"><img alt="Shaco" src="/wiki/images/Shaco_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL" title="Shaco/LoL">Shaco</a></span></span> briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanishes"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishes</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> in the target direction, creating a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of himself for some time.',
      'The clone will explode upon dying or expiring, which deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and deploys three <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="mini-boxes"><img alt="mini-boxes" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">mini-boxes</a></span></span> that activate instantly, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fearing"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> nearby enemies.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Shaco</b> commands the clone to move to the target location.',
    ],
    description: [
      {
        icon: '/wiki/images/Hallucinate.png',
        description:
          'Active: Shaco  vanishes for 0.5 seconds and  blinks in the target direction while creating a  clone of himself that is summoned in the opposite direction, remaining within control range of him as a controllable  clone for up to 18 seconds. Hallucinate can be recast at any time while the clone is alive, and can be used while affected by  cast-inhibiting crowd control.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shaco</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishes</a></span> for 0.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> in the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="150 units">target direction</span> while creating a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of himself that is summoned in the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="150 units">opposite direction</span>, remaining within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1125 units">control range</span> of him as a controllable <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> for up to 18 seconds. <br><br><i>Hallucinate</i> can be recast at any time while the clone is alive, and can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Command_Hallucinate.png',
        description:
          'Recast: Shaco commands the  clone to move to the target location.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Shaco</b> commands the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> to move to the target location.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The clone will explode upon dying or expiring to deal magic damage to nearby enemies and deploy three  mini-boxes that activate instantly,  fearing nearby enemies for 1 second.',
        descriptionHTML:
          'The clone will explode upon dying or expiring to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and deploy three <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="mini-boxes"><img alt="mini-boxes" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">mini-boxes</a></span></span></i> that activate instantly, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fearing"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> nearby enemies for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The clone will explode upon dying or expiring to deal magic damage to nearby enemies and deploy three  mini-boxes that activate instantly,  fearing nearby enemies for 1 second.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'clone will explode upon dying or expiring to deal magic damage to nearby enemies and deploy three  mini-boxes that activate instantly,  fearing nearby enemies for 1 second.',
            pre: 'The clone will explode upon dying or expiring to deal magic damage to nearby enemies and deploy three  mini-boxes that activate instantly,  fearing nearby enemies for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 187.5 / 225 / 262.5 / 300 (+ 70% AP)',
            valuesHTML:
              '150 / 187.<small>5</small> / 225 / 262.<small>5</small> / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 187.5 / 225 / 262.5 / 300 (+ 70% AP)',
            damagetype: 'Magic',
            values: [150, 187.5, 225, 262.5, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 187.5 / 225 / 262.5 / 300',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The boxes possess  Jack in the Box's effects, except they have a doubled, but shared  health, and deal modified magic damage with each attack, increased when attacking a single unit.",
        descriptionHTML:
          'The <i>boxes</i> possess <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Jack in the Box\'s"><img alt="Jack in the Box\'s" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">Jack in the Box\'s</a></span></span></i> effects, except they have a doubled, but shared <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span>, and deal <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span> with each attack, increased when attacking a single unit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Modified Magic Damage:',
            values: '10 / 15 / 20 / 25 / 30 (+ 10% AP)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Modified Magic Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 10% AP)',
            damagetype: 'Magic',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "See Pets for more details about Shaco's clone.",
        descriptionHTML:
          '<i>See <a href="/wiki/Shaco/LoL#Pets" title="Shaco/LoL">Pets</a> for more details about <b>Shaco\'s</b> clone.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'Special',
    spellshield: true,
    notes:
      '* <b>Shaco</b> and the <i>Hallucination</i> will face each other the moment of their appearance.\n<ul><li>The explosion and the <i>boxes</i> apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>, while the clone deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet damage"><a href="/wiki/Damage" title="Damage"><img alt="Void Swarm.png" src="/wiki/images/Malzahar_Void_Swarm.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">pet damage</a></span>.</li>\n<li><i>Hallucinate</i> will cast from wherever <b>Shaco</b> is at the end of the cast time.</li>\n<li>The clone will automatically begin attacking the nearest enemy when <b>Shaco</b> dies, unless it loses vision of the target.</li>\n<li>The clone will always spawn in the opposite direction of the cursor.\n<ul><li>If <i>Deceive</i> and <i>Hallucinate</i> are used in quick succession, the clone will spawn in the direction of the cursor instead.</li></ul></li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
