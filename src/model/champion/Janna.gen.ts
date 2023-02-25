import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Janna';

export default {
  Tailwind: {
    name: 'Tailwind',
    display_name: 'Tailwind',
    champion: 'Janna',
    skill: 'I',
    image: {
      full: 'Janna_Tailwind.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1200',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Janna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Janna/LoL" title="Janna"><img alt="Janna" src="/wiki/images/Janna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Janna/LoL" title="Janna/LoL">Janna</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and grants the same amount to nearby allied champions moving toward her.',
      'Her basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Janna" data-ability="Zephyr" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Janna/LoL#Zephyr" title="Zephyr"><img alt="Zephyr" src="/wiki/images/Janna_Zephyr.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Janna/LoL#Zephyr" title="Janna/LoL">Zephyr</a></span></span></i> deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to a portion of her <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Tailwind.png',
        description:
          'Innate: Janna gains  6% bonus movement speed while facing nearby allied  champions, and grants them the same amount while they are facing her.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Janna</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">6% <b>bonus</b> movement speed</span></span> while facing nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, and grants them the same amount while they are facing her.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'Janna gains  6% bonus movement speed while facing nearby allied  champions, and grants them the same amount while they are facing her.',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed while facing nearby allied  champions, and grants them the same amount while they are facing her.gains  6',
            pre: 'Janna gains  6% bonus movement speed while facing nearby allied  champions, and grants them the same amount while they are facing her.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'proc',
    notes: '* No additional notes.',
  },
  'Howling Gale': {
    name: 'Howling Gale',
    display_name: 'Howling Gale',
    champion: 'Janna',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'HowlingGale.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '1100 − 1760 (based on seconds charged)',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 240',
    speed:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="seconds charged" data-displayformula="Always travels for 1.25 seconds." data-bot_values="880;1056;1232;1408" data-top_values="0;1;2;3">880 − 1408 (based on seconds charged)</span>',
    cast_time: 'none',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Janna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Janna/LoL" title="Janna"><img alt="Janna" src="/wiki/images/Janna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Janna/LoL" title="Janna/LoL">Janna</a></span></span> summons a whirlwind at her current location that matures over a short time, increasing its range, speed, damage, and knock up duration.',
      '<i>Howling Gale</i> can be recast at any time within the duration, and does so automatically after the duration.',
      '<span class="template_sbc"><b>Recast:</b></span> The whirlwind flies in the target direction over a short time, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> enemies hit. The effects are increased based on maturity.',
    ],
    description: [
      {
        icon: '/wiki/images/Howling_Gale.png',
        description:
          "Active: Janna summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and  knock up duration every second over the duration. Howling Gale's direction is determined by this cast.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Janna</b> summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> duration every second over the duration. <i>Howling Gale\'s</i> direction is determined by this cast.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Janna summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and  knock up duration every second over the duration',
            damagetype: 'None',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and  knock up duration every second over the duration',
            pre: 'Janna summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and  knock up duration every second over the duration',
          },
        ],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values: '60 / 85 / 110 / 135 / 160 (+ 35% AP)',
            valuesHTML:
              '60 / 85 / 110 / 135 / 160 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
          {
            name: 'Bonus Damage Per Second:',
            values: '15 / 20 / 25 / 30 / 35 (+ 10% AP)',
            valuesHTML:
              '15 / 20 / 25 / 30 / 35 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 35% AP)',
            damagetype: 'Magic',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Damage Per Second:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 10% AP)',
            damagetype: 'None',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
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
        description:
          'Howling Gale can be recast at any time within the duration, and does so automatically after the duration.',
        descriptionHTML:
          '<i>Howling Gale</i> can be recast at any time within the duration, and does so automatically after the duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Janna launches the whirlwind in the direction she targeted over 1.25 seconds, dealing magic damage to enemies hit and  knocking them up for 0.5 − 1.25 (based on seconds charged) seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Janna</b> launches the whirlwind in the direction she targeted over 1.<small>25</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="seconds charged" data-start="0.5;0" data-finish="1.25;1.5" data-bot_values="0.5;0.55;0.6;0.65;0.7;0.75;0.8;0.85;0.9;0.95;1;1.05;1.1;1.15;1.2;1.25" data-top_values="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1;1.1;1.2;1.3;1.4;1.5">0.<small>5</small> − 1.<small>25</small> (based on seconds charged)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Recast:',
            raw: 'Janna launches the whirlwind in the direction she targeted over 1.25 seconds, dealing magic damage to enemies hit and  knocking them up for 0.5 − 1.25 (based on seconds charged) seconds.',
            damagetype: 'Magic',
            values: [1, 1.25],
            basedOn: 'seconds charged',
            user: 'none',
            units: '',
            unitsText: 'seconds.',
            pre: 'Janna launches the whirlwind in the direction she targeted over 1.25 seconds, dealing magic damage to enemies hit and  knocking them up for 0.5 − 1.25',
            post: 'seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'area of effect',
    spellshield: true,
    projectile: 'true',
    notes:
      '* The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>The storm does not interact with enemy units that stand on top of it while it is charging.</li></ul>',
  },
  Zephyr: {
    name: 'Zephyr',
    display_name: 'Zephyr',
    champion: 'Janna',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SowTheWind.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '650',
    cast_time: '0.<small>245</small>',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> While <i>Zephyr</i> is available, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Janna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Janna/LoL" title="Janna"><img alt="Janna" src="/wiki/images/Janna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Janna/LoL" title="Janna/LoL">Janna</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed.</span></span> and ignores unit collision.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Janna</b> sends an air elemental to the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
    ],
    description: [
      {
        description:
          'Passive: While Zephyr is not on cooldown, Janna is  ghosted and gains  bonus movement speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> While <i>Zephyr</i> is not on cooldown, <b>Janna</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '6 / 7 / 8 / 9 / 10% (+ 2% per 100 AP)',
            valuesHTML:
              '6 / 7 / 8 / 9 / 10% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '6 / 7 / 8 / 9 / 10% (+ 2% per 100 AP)',
            damagetype: 'None',
            values: [6, 7, 8, 9, 10],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10%',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Zephyr.png',
        description:
          'Active: Janna sends an air elemental at the target enemy that deals magic damage and  slows them for 3 seconds, capped at 99%.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Janna</b> sends an air elemental at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 3 seconds, capped at 99%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Janna sends an air elemental at the target enemy that deals magic damage and  slows them for 3 seconds, capped at 99%.',
            damagetype: 'Magic',
            values: 3,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              '.sends an air elemental at the target enemy that deals magic damage and  slows them for 3 seconds, capped at 99',
            pre: 'Janna sends an air elemental at the target enemy that deals magic damage and  slows them for 3 seconds, capped at 99%.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 100 / 130 / 160 / 190 (+ 50% AP)',
            valuesHTML:
              '70 / 100 / 130 / 160 / 190 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '20 / 24 / 28 / 32 / 36% (+ 6% per 100 AP)',
            valuesHTML:
              '20 / 24 / 28 / 32 / 36% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% per 100 AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 50% AP)',
            damagetype: 'Magic',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Slow:',
            raw: '20 / 24 / 28 / 32 / 36% (+ 6% per 100 AP)',
            damagetype: 'None',
            values: [20, 24, 28, 32, 36],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 24 / 28 / 32 / 36%',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 6% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'true',
    callforhelp: 'True',
    notes:
      '* The maximum slow (99%) is reached with 1316.<small>67</small> / 1250 / 1183.<small>33</small> / 1116.<small>67</small> / 1050 ability power.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Eye of the Storm': {
    name: 'Eye of the Storm',
    display_name: 'Eye of the Storm',
    champion: 'Janna',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'EyeOfTheStorm.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '800',
    cast_time: 'none',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'mana',
    cooldown: '15 / 13.<small>5</small> / 12 / 10.<small>5</small> / 9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Janna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Janna/LoL" title="Janna"><img alt="Janna" src="/wiki/images/Janna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Janna/LoL" title="Janna/LoL">Janna</a></span></span> can target an allied champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, or herself to place a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that decays over a short time.',
      'While the shield holds, the target gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>.',
      'Whenever <b>Janna\'s</b> abilities <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <i>Eye of the Storm\'s</i> cooldown is reduced. This can occur only once per cast.',
    ],
    description: [
      {
        description:
          "Passive: Whenever Janna's abilities  slow or  knock up at least one enemy  champion, she gains 15%  heal and shield power for 4 seconds. This may occur only once per cast.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Whenever <b>Janna\'s</b> abilities <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, she gains 15% <span style="white-space:nowrap"><a href="/wiki/Heal_and_shield_power" title="Heal and shield power"><img alt="Heal and shield power icon.png" src="/wiki/images/Heal_and_shield_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Heal_and_shield_power" title="Heal and shield power">heal and shield power</a></span> for 4 seconds. This may occur only once per cast.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Passive:',
            raw: "Whenever Janna's abilities  slow or  knock up at least one enemy  champion, she gains 15%  heal and shield power for 4 seconds",
            healType: 'DrainEffect',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "heal and shield power for 4 secondsJanna's abilities  slow or  knock up at least one enemy  champion, she gains 15",
            pre: "Whenever Janna's abilities  slow or  knock up at least one enemy  champion, she gains 15%  heal and shield power for 4 seconds",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Eye_of_the_Storm.png',
        description:
          'Active: Janna grants the target allied champion,  turret, or herself a  shield for 5 seconds, decaying after 1.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Janna</b> grants the target allied champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, or herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 5 seconds, decaying after 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Janna grants the target allied champion,  turret, or herself a  shield for 5 seconds, decaying after 1.25 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'grants the target allied champion,  turret, or herself a  shield for 5 seconds, decaying after 1.25 seconds.',
            pre: 'Janna grants the target allied champion,  turret, or herself a  shield for 5 seconds, decaying after 1.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '75 / 100 / 125 / 150 / 175 (+ 55% AP)',
            valuesHTML:
              '75 / 100 / 125 / 150 / 175 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '75 / 100 / 125 / 150 / 175 (+ 55% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'While the shield holds, the target gains  bonus attack damage.',
        descriptionHTML:
          'While the shield holds, the target gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values: '10 / 15 / 20 / 25 / 30 (+ 10% AP)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 10% AP)',
            damagetype: 'None',
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
    ],
    targeting: 'Unit',
    affects: 'Allies, Allied turrets, Self',
    spelleffects: 'Shield',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">Attack speed slows</a></span> applied to enemy champions by <b>Janna</b> (e.g. <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Frozen Heart" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Frozen_Heart" title="Frozen Heart"><img alt="Frozen Heart" src="/wiki/images/Frozen_Heart_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Frozen_Heart" title="Frozen Heart">Frozen Heart</a></span></span>) also trigger the passive.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li><b>Janna</b> receives kill credit on enemy champions that are killed by turrets shielded by <i>Eye of the Storm</i>.</li>\n<li>Allied turrets will benefit from the bonus attack damage when targeted by <i>Eye of the Storm</i>.</li></ul>',
  },
  Monsoon: {
    name: 'Monsoon',
    display_name: 'Monsoon',
    champion: 'Janna',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ReapTheWhirlwind.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both knockback and healing zone radius">700</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">150 / 142.<small>5</small> / 135 / 127.<small>5</small> / 120</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Janna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Janna/LoL" title="Janna"><img alt="Janna" src="/wiki/images/Janna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Janna/LoL" title="Janna/LoL">Janna</a></span></span> unleashes a blast that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> nearby enemies, though not through terrain.',
      'She also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> the winds for a short time, continually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> nearby allies.',
    ],
    description: [
      {
        icon: '/wiki/images/Monsoon.png',
        description:
          'Active: Janna unleashes a blast that  knocks back all nearby enemies to up to 875 units over 0.5 seconds based on their proximity, though not through terrain.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Janna</b> unleashes a blast that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> all nearby enemies to up to 875 units over 0.<small>5</small> seconds based on their proximity, though not through terrain.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Janna unleashes a blast that  knocks back all nearby enemies to up to 875 units over 0.5 seconds based on their proximity, though not through terrain.',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'unleashes a blast that  knocks back all nearby enemies to up to 875 units over 0.5 seconds based on their proximity, though not through terrain.',
            pre: 'Janna unleashes a blast that  knocks back all nearby enemies to up to 875 units over 0.5 seconds based on their proximity, though not through terrain.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Janna also  channels for up to 3 seconds,  healing nearby allies every 0.25 seconds.',
        descriptionHTML:
          '<b>Janna</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 3 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> nearby allies every 0.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Janna also  channels for up to 3 seconds,  healing nearby allies every 0.25 seconds.',
            healType: 'DrainEffect',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'also  channels for up to 3 seconds,  healing nearby allies every 0.25 seconds.',
            pre: 'Janna also  channels for up to 3 seconds,  healing nearby allies every 0.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Heal Per Tick:',
            values: '25 / 31.25 / 37.5 / 43.75 / 50 (+ 12.5% AP)',
            valuesHTML:
              '25 / 31.<small>25</small> / 37.<small>5</small> / 43.<small>75</small> / 50 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;12.<small>5</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal Per Tick:',
            raw: '25 / 31.25 / 37.5 / 43.75 / 50 (+ 12.5% AP)',
            healType: 'DrainEffect',
            values: [25, 31.25, 37.5, 43.75, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 31.25 / 37.5 / 43.75 / 50',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12.5% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies, Allies',
    spelleffects: 'Heal',
    spellshield: true,
    notes:
      '<div style="clear:both"></div>\n<ul><li>The following table refers for interactions while <b>Janna</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
