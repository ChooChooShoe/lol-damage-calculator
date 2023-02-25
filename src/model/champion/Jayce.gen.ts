import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Jayce';

export default {
  'Hextech Capacitor': {
    name: 'Hextech Capacitor',
    display_name: 'Hextech Capacitor',
    champion: 'Jayce',
    skill: 'I',
    image: {
      full: 'Jayce_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce"><img alt="Jayce" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce</a></span></span> switches between <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Hammer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Hammer Stance"><img alt="Hammer Stance" src="/wiki/images/Jayce_Transform_Mercury_Hammer.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Jayce/LoL">Hammer Stance</a></span></span></b></span> and <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Cannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Cannon Stance"><img alt="Cannon Stance" src="/wiki/images/Jayce_Transform_Mercury_Cannon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Jayce/LoL">Cannon Stance</a></span></span></b></span>, he briefly gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ignores</a></span> unit collision.',
    ],
    description: [
      {
        icon: '/wiki/images/Hextech Capacitor.png',
        description:
          'Innate: Whenever Jayce switches between either  Hammer Stance or  Cannon Stance, he gains  ghosting and  40 bonus movement speed for 0.75 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Jayce</b> switches between either <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Hammer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Hammer Stance"><img alt="Hammer Stance" src="/wiki/images/Jayce_Transform_Mercury_Hammer.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Jayce/LoL">Hammer Stance</a></span></span></b></span> or <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Cannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Cannon Stance"><img alt="Cannon Stance" src="/wiki/images/Jayce_Transform_Mercury_Cannon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Jayce/LoL">Cannon Stance</a></span></span></b></span>, he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40 <b>bonus</b> movement speed</span></span> for 0.<small>75</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' Whenever Jayce switches between either  Hammer Stance or  Cannon Stance, he gains  ghosting and  40 bonus movement speed for 0.75 seconds.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'Jayce switches between either  Hammer Stance or  Cannon Stance, he gains  ghosting and  40 bonus movement speed for 0.75 seconds.',
            pre: 'Whenever Jayce switches between either  Hammer Stance or  Cannon Stance, he gains  ghosting and  40 bonus movement speed for 0.75 seconds.',
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
  'To the Skies!': {
    name: 'To the Skies!',
    display_name: 'To the Skies!',
    champion: 'Jayce',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'JayceToTheSkies.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '600',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius in front of Jayce">300</span>',
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown: '16 / 14 / 12 / 10 / 8 / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce"><img alt="Jayce" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce</a></span></span> leaps to the target enemy\'s location and smashes his hammer to the ground, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/To the Skies!.png',
        description:
          "Active: Jayce  leaps to the target enemy's location. Upon arrival, he deals physical damage to all enemies within an area and  slows them for 2 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target enemy\'s location. Upon arrival, he deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies within an area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Upon arrival, he deals physical damage to all enemies within an area and  slows them for 2 seconds.',
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'arrival, he deals physical damage to all enemies within an area and  slows them for 2 seconds.',
            pre: 'Upon arrival, he deals physical damage to all enemies within an area and  slows them for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 110 / 160 / 210 / 260 / 310 (+ 120% bonus AD)',
            valuesHTML:
              '60 / 110 / 160 / 210 / 260 / 310 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50 / 55%',
            valuesHTML: '30 / 35 / 40 / 45 / 50 / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 110 / 160 / 210 / 260 / 310 (+ 120% bonus AD)',
            damagetype: 'Physical',
            values: [60, 110, 160, 210, 260, 310],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210 / 260 / 310',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50 / 55%',
            values: [30, 35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50 / 55%',
          },
        ],
      },
      {
        description: 'Lightning Field can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Lightning Field" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Lightning_Field" title="Lightning Field"><img alt="Lightning Field" src="/wiki/images/Jayce_Lightning_Field.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Lightning_Field" title="Jayce/LoL">Lightning Field</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    callforhelp: 'true',
    notes:
      "* <i>To The Skies!</i> will always direct <b>Jayce</b> linearly to his target's location.",
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Jayce_Original_QHammer_4.ogg   "To the skies!"',
  },
  'Shock Blast': {
    name: 'Shock Blast',
    display_name: 'Shock Blast',
    champion: 'Jayce',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'JayceToTheSkies.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1050 / 1600',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Standard Blast Radius">175</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enhanced Blast Radius">250</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Standard Blast Sight Radius">160</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enhanced Blast Sight Radius">250</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both standard and enhanced missile">140</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Standard Speed">1450</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enhanced Speed">2350</span>',
    cast_time: '0.<small>2143</small>',
    cost: '55 / 60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce"><img alt="Jayce" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce</a></span></span> fires an electric bolt in the target direction that detonates upon hitting an enemy or max range, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
      'If the bolt passes through <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Acceleration Gate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Acceleration_Gate" title="Acceleration Gate"><img alt="Acceleration Gate" src="/wiki/images/Jayce_Acceleration_Gate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Acceleration_Gate" title="Jayce/LoL">Acceleration Gate</a></span></span></i>, it supercharges: instantly increasing its speed, travel distance and detonation.',
    ],
    description: [
      {
        icon: '/wiki/images/Shock Blast.png',
        description:
          'Active: Jayce fires an electric bolt in the target direction that detonates upon hitting an enemy or reaching maximum range, dealing physical damage to nearby enemies and granting  sight of the area for 1.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> fires an electric bolt in the target direction that detonates upon hitting an enemy or reaching maximum range, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Jayce fires an electric bolt in the target direction that detonates upon hitting an enemy or reaching maximum range, dealing physical damage to nearby enemies and granting  sight of the area for 1.25 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'fires an electric bolt in the target direction that detonates upon hitting an enemy or reaching maximum range, dealing physical damage to nearby enemies and granting  sight of the area for 1.25 seconds.',
            pre: 'Jayce fires an electric bolt in the target direction that detonates upon hitting an enemy or reaching maximum range, dealing physical damage to nearby enemies and granting  sight of the area for 1.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '55 / 110 / 165 / 220 / 275 / 330 (+ 120% bonus AD)',
            valuesHTML:
              '55 / 110 / 165 / 220 / 275 / 330 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 110 / 165 / 220 / 275 / 330 (+ 120% bonus AD)',
            damagetype: 'Physical',
            values: [55, 110, 165, 220, 275, 330],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 110 / 165 / 220 / 275 / 330',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
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
          'If the bolt passes through  Acceleration Gate, it becomes supercharged: increasing its damage by 40% as well as its speed, range and explosion radius.',
        descriptionHTML:
          'If the bolt passes through <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Acceleration Gate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Acceleration_Gate" title="Acceleration Gate"><img alt="Acceleration Gate" src="/wiki/images/Jayce_Acceleration_Gate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Acceleration_Gate" title="Jayce/LoL">Acceleration Gate</a></span></span>, it becomes supercharged: increasing its damage by 40% as well as its speed, range and explosion radius.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'If the bolt passes through  Acceleration Gate, it becomes supercharged:',
            raw: ' increasing its damage by 40% as well as its speed, range and explosion radius.',
            damagetype: 'None',
            values: 4,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'as well as its speed, range and explosion radius.its damage by 40',
            pre: 'increasing its damage by 40% as well as its speed, range and explosion radius.',
          },
        ],
        leveling: [
          {
            name: 'Increased Damage:',
            values: '77 / 154 / 231 / 308 / 385 / 462 (+ 168% bonus AD)',
            valuesHTML:
              '77 / 154 / 231 / 308 / 385 / 462 <span style="color:orange; white-space:normal">(+&nbsp;168% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '77 / 154 / 231 / 308 / 385 / 462 (+ 168% bonus AD)',
            damagetype: 'None',
            values: [77, 154, 231, 308, 385, 462],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '77 / 154 / 231 / 308 / 385 / 462',
            children: [
              {
                values: 168,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 168% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>Upon touching <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Acceleration Gate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Acceleration_Gate" title="Acceleration Gate"><img alt="Acceleration Gate" src="/wiki/images/Jayce_Acceleration_Gate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Acceleration_Gate" title="Jayce/LoL">Acceleration Gate</a></span></span>, the enhanced missile gains its remaining range equal to [ 1600 units - travelled distance of the standard missile ].\n<ul><li>This means that the range of the enhanced <i>Shock Blast</i> is always the same, regardless of how early or late it interacted with <i>Acceleration Gate</i>.</li>\n<li>Supercharging the <i>Shock Blast</i> as soon as possible, however, will improve its average speed significantly.\n<ul><li>For this, <b>Jayce</b> must stand inside or very close to the <i>Acceleration Gate</i>, or place it very close to himself right after <i>Shock Blast\'s</i> cast time.</li></ul></li></ul></li>\n<li><i>Shock Blast\'s</i> effect radius is centered around the location of the missile as it collides.\n<ul><li><i>Shock Blast</i> will <b>always</b> damage the enemy it collided with, even if it is so large that it is outside the effect radius.</li></ul></li>\n<li>The non-enhanced <i>Shock Blast</i> detonation has a slightly smaller sight radius than the radius in which it deals damage.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Jayce_Original_QCannon_EActivate_Hit_2.ogg   "Feel the thunder!"',
  },
  'Lightning Field': {
    name: 'Lightning Field',
    display_name: 'Lightning Field',
    champion: 'Jayce',
    skill: 'W',
    maxrank: 6,
    image: {
      full: 'JayceStaticField.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">10</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce\'s"><img alt="Jayce\'s" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce\'s</a></span></span> basic attacks restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> surrounds himself with an electric field for a few seconds, continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    ],
    description: [
      {
        description: "Passive: Jayce's basic attacks restore  mana  on-hit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Jayce\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Mana Restored:',
            values: '10 / 12 / 14 / 16 / 18 / 20',
            valuesHTML:
              '<span style="color: #0099CC; white-space:normal">10 / 12 / 14 / 16 / 18 / 20</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '10 / 12 / 14 / 16 / 18 / 20',
            values: [10, 12, 14, 16, 18, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 12 / 14 / 16 / 18 / 20',
          },
        ],
      },
      {
        icon: '/wiki/images/Lightning Field.png',
        description:
          'Active: Jayce surrounds himself with an electric field for 4 seconds that deals magic damage every second to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> surrounds himself with an electric field for 4 seconds that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every second to nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Jayce surrounds himself with an electric field for 4 seconds that deals magic damage every second to nearby enemies.',
            damagetype: 'Magic',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'surrounds himself with an electric field for 4 seconds that deals magic damage every second to nearby enemies.',
            pre: 'Jayce surrounds himself with an electric field for 4 seconds that deals magic damage every second to nearby enemies.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '35 / 50 / 65 / 80 / 95 / 110 (+ 25% AP)',
            valuesHTML:
              '35 / 50 / 65 / 80 / 95 / 110 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '35 / 50 / 65 / 80 / 95 / 110 (+ 25% AP)',
            damagetype: 'Magic',
            values: [35, 50, 65, 80, 95, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95 / 110',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'aoedot',
    notes:
      '* The <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Mana" title="Mana">mana</a></span> restore triggers on <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
  },
  'Hyper Charge': {
    name: 'Hyper Charge',
    display_name: 'Hyper Charge',
    champion: 'Jayce',
    skill: 'W',
    maxrank: 6,
    image: {
      full: 'JayceStaticField.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">13 / 11.<small>4</small> / 9.<small>8</small> / 8.<small>2</small> / 6.<small>6</small> / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce"><img alt="Jayce" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce</a></span></span> gains a massive burst of <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> on his next few basic attacks, each one dealing <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Hyper Charge.png',
        description:
          "Active: Jayce empowers his next 3 basic attacks within 4 seconds to deal modified physical damage and gain  300% bonus attack speed.Hyper Charge's total damage is affected by  critical strike modifiers.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> empowers his next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 4 seconds to deal <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">300% <b>bonus</b> attack speed</span></span>.<br><br><i>Hyper Charge\'s</i> <b>total</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: " Jayce empowers his next 3 basic attacks within 4 seconds to deal modified physical damage and gain  300% bonus attack speed.Hyper Charge's total damage is affected by  critical strike modifiers.",
            increasedStat: 'total_ad',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              "bonus attack speed.Hyper Charge's total damage is affected by  critical strike modifiers.empowers his next 3 basic attacks within 4 seconds to deal modified physical damage and gain  300",
            pre: "Jayce empowers his next 3 basic attacks within 4 seconds to deal modified physical damage and gain  300% bonus attack speed.Hyper Charge's total damage is affected by  critical strike modifiers.",
          },
        ],
        leveling: [
          {
            name: 'Damage Modifier:',
            values: '70 / 78 / 86 / 94 / 102 / 110% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">70 / 78 / 86 / 94 / 102 / 110% AD</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Damage Modifier:',
            raw: '70 / 78 / 86 / 94 / 102 / 110% AD',
            damagetype: 'None',
            values: [70, 78, 86, 94, 102, 110],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '70 / 78 / 86 / 94 / 102 / 110% AD',
          },
        ],
      },
      {
        description: "Hyper Charge  resets Jayce's basic attack timer.",
        descriptionHTML:
          '<i>Hyper Charge <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Jayce\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'physical',
    spelleffects: 'Proc',
    onhiteffects: 'Special',
    notes:
      '* The last basic attack is checked <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> rather than <a href="/wiki/On-attack" class="mw-redirect" title="On-attack">on-attack</a>.\n<ul><li><ul><li>If <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade"><img alt="Guinsoo\'s Rageblade" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade</a></span></span> hit the target before the basic attack does, the basic attack damage will not be modified.</li></ul></li></ul>',
  },
  'Thundering Blow': {
    name: 'Thundering Blow',
    display_name: 'Thundering Blow',
    champion: 'Jayce',
    skill: 'E',
    maxrank: 6,
    image: {
      full: 'JayceThunderingBlow.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '240',
    cast_time: '0.<small>25</small>',
    cost: '55',
    costtype: 'Mana',
    cooldown: '20 / 18 / 16 / 14 / 12 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce"><img alt="Jayce" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce</a></span></span> swings his hammer at the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> based on the <span style="color: #1F995C; white-space:normal"><b>target\'s</b> maximum health</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking</a></span> them back.',
    ],
    description: [
      {
        icon: '/wiki/images/Thundering Blow.png',
        description:
          'Active: Jayce swings his hammer at the target enemy, dealing magic damage, capped against  monsters, while also  displacing them to a location 500 units in front of him.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> swings his hammer at the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, while also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacing</a></span> them to a location 500 units in front of him.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Jayce swings his hammer at the target enemy, dealing magic damage, capped against  monsters, while also  displacing them to a location 500 units in front of him.',
            increasedStat: 'total_ap',
            values: 5,
            units: '',
            unitsText:
              'swings his hammer at the target enemy, dealing magic damage, capped against  monsters, while also  displacing them to a location 500 units in front of him.',
            pre: 'Jayce swings his hammer at the target enemy, dealing magic damage, capped against  monsters, while also  displacing them to a location 500 units in front of him.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "8 / 10.8 / 13.6 / 16.4 / 19.2 / 22% of target's maximum health (+ 100% bonus AD)",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">8 / 10.<small>8</small> / 13.<small>6</small> / 16.<small>4</small> / 19.<small>2</small> / 22% of target\'s <b>maximum</b> health</span> <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "8 / 10.8 / 13.6 / 16.4 / 19.2 / 22% of target's maximum health (+ 100% bonus AD)",
            healType: 'OutgoingHeals',
            values: [8, 10.8, 13.6, 16.4, 19.2, 22],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "8 / 10.8 / 13.6 / 16.4 / 19.2 / 22% of target's maximum health",
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
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'single',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
  },
  'Acceleration Gate': {
    name: 'Acceleration Gate',
    display_name: 'Acceleration Gate',
    champion: 'Jayce',
    skill: 'E',
    maxrank: 6,
    image: {
      full: 'JayceThunderingBlow.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '650',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 750',
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown: '16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce"><img alt="Jayce" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce</a></span></span> deploys an energy gate centered at the target location for a few seconds. All allied champions that touch the gate will gain a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Acceleration Gate.png',
        description:
          'Active: Jayce deploys an energy gate centered at the target location, lasting for 4 seconds and granting  sight of its surroundings. Jayce and all allied champions can move through it to gain  bonus movement speed that decays over 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> deploys an energy gate centered at the target location, lasting for 4 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. <b>Jayce</b> and all allied champions can move through it to gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Jayce deploys an energy gate centered at the target location, lasting for 4 seconds and granting  sight of its surroundings',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'deploys an energy gate centered at the target location, lasting for 4 seconds and granting  sight of its surroundings',
            pre: 'Jayce deploys an energy gate centered at the target location, lasting for 4 seconds and granting  sight of its surroundings',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Jayce and all allied champions can move through it to gain  bonus movement speed that decays over 3 seconds.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'and all allied champions can move through it to gain  bonus movement speed that decays over 3 seconds.',
            pre: 'Jayce and all allied champions can move through it to gain  bonus movement speed that decays over 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '30 / 35 / 40 / 45 / 50 / 55%',
            valuesHTML: '30 / 35 / 40 / 45 / 50 / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '30 / 35 / 40 / 45 / 50 / 55%',
            values: [30, 35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50 / 55%',
          },
        ],
      },
      {
        description:
          'The buff is continuously refreshed while inside the gate. Acceleration Gate will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>The buff is continuously refreshed while inside the gate. Acceleration Gate will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Allies',
    notes:
      '* The <i>Gate</i> grants the bonus in an area <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 750 units wide and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 100 units thick.',
  },
  'Transform Mercury Cannon': {
    name: 'Transform Mercury Cannon',
    display_name: 'Transform Mercury Cannon',
    champion: 'Jayce',
    skill: 'R',
    maxrank: 1,
    image: {
      full: 'JayceStanceHtG.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce"><img alt="Jayce" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce</a></span></span> transforms into <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Cannon Stance" src="/wiki/images/Jayce_Transform_Mercury_Cannon.png" decoding="async" loading="lazy" title="Cannon Stance" width="20" height="20" class="thumbborder lazyload"></span> <span style="white-space:normal;"><span class="template_sbc"><b>Cannon Stance</b></span></span></span>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> with greater <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> and gaining new abilities.',
      'His next basic attack will reduce the target\'s <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span> for a few seconds.',
      '<b>Jayce</b> begins the game with <i>Transform</i> but cannot increase its rank. Instead, his basic abilities each have 6 ranks.',
    ],
    description: [
      {
        icon: '/wiki/images/Transform Mercury Cannon.png',
        description:
          "Active: Jayce transforms into  Cannon Stance, receiving access to its abilities, becoming  ranged with  500 attack range, and empowering his next basic attack to reduce the target's  armor and  magic resistance by 10 / 15 / 20 / 25% (based on level) for 5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> transforms into <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Cannon Stance" src="/wiki/images/Jayce_Transform_Mercury_Cannon.png" decoding="async" loading="lazy" title="Cannon Stance" width="20" height="20" class="thumbborder lazyload"></span> <span style="white-space:normal;"><span class="template_sbc"><b>Cannon Stance</b></span></span></span>, receiving access to its <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;500 attack range</span>, and empowering his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to reduce the target\'s <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="25;16" data-bot_values="10;15;20;25" data-top_values="1;6;11;16" data-bot_key="%">10 / 15 / 20 / 25% (based on level)</span> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: " Jayce transforms into  Cannon Stance, receiving access to its abilities, becoming  ranged with  500 attack range, and empowering his next basic attack to reduce the target's  armor and  magic resistance by 10 / 15 / 20 / 25% (based on level) for 5 seconds.",
            damagetype: 'Magic',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'for 5 seconds.',
            pre: "Jayce transforms into  Cannon Stance, receiving access to its abilities, becoming  ranged with  500 attack range, and empowering his next basic attack to reduce the target's  armor and  magic resistance by 10 / 15 / 20 / 25%",
            post: 'for 5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Jayce begins the game with Transform but cannot increase its rank. Instead, his basic abilities each have 6 ranks.',
        descriptionHTML:
          '<b>Jayce</b> begins the game with <i>Transform</i> but cannot increase its rank. Instead, his basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> each have 6 ranks.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Instead, his basic abilities each have 6 ranks.',
            damagetype: 'None',
            values: 6,
            user: 'none',
            units: '',
            unitsText: 'his basic abilities each have 6 ranks.',
            pre: 'Instead, his basic abilities each have 6 ranks.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* Transformations do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>The resistance reduction does not apply to structures.</li>\n<li>Both <i>Transform</i> on-hit effects have no set duration and will only be consumed when <i>Jayce</i> either lands a basic attack or switches stances.</li>\n<li>The enhanced attack will not be consumed if it is parried (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Riposte" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Riposte" title="Riposte"><img alt="Riposte" src="/wiki/images/Fiora_Riposte.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Riposte" title="Fiora/LoL">Riposte</a></span></span>).</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Jayce_Original_R_HammerToCannon_1.ogg   "Cannon engaged."',
  },
  'Transform Mercury Hammer': {
    name: 'Transform Mercury Hammer',
    display_name: 'Transform Mercury Hammer',
    champion: 'Jayce',
    skill: 'R',
    maxrank: 1,
    image: {
      full: 'JayceStanceHtG.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce"><img alt="Jayce" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce</a></span></span> transforms into <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Hammer Stance" src="/wiki/images/Jayce_Transform_Mercury_Hammer.png" decoding="async" loading="lazy" title="Hammer Stance" width="20" height="20" class="thumbborder lazyload"></span> <span style="white-space:normal;"><span class="template_sbc"><b>Hammer Stance</b></span></span></span>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> and gaining new abilities.',
      'His next basic attack will deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
      '<b>Jayce</b> begins the game with <i>Transform</i> but cannot increase its rank. Instead, his basic abilities each have 6 ranks.',
    ],
    description: [
      {
        icon: '/wiki/images/Transform Mercury Hammer.png',
        description:
          'Active: Jayce transforms into  Hammer Stance, receiving access to its abilities, becoming  melee with  125 attack range, gaining 5 / 15 / 25 / 35 (based on level) (+ 7.5% bonus AD)  bonus armor and  bonus magic resistance, and empowering his next basic attack to deal 25 / 65 / 105 / 145 (based on level) (+ 25% bonus AD) bonus magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> transforms into <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Hammer Stance" src="/wiki/images/Jayce_Transform_Mercury_Hammer.png" decoding="async" loading="lazy" title="Hammer Stance" width="20" height="20" class="thumbborder lazyload"></span> <span style="white-space:normal;"><span class="template_sbc"><b>Hammer Stance</b></span></span></span>, receiving access to its <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125 attack range</span>, gaining <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;1" data-finish="35;16" data-bot_values="5;15;25;35" data-top_values="1;6;11;16">5 / 15 / 25 / 35 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;7.5% <b>bonus</b> AD)</span> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>, and empowering his next basic attack to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;1" data-finish="145;16" data-bot_values="25;65;105;145" data-top_values="1;6;11;16">25 / 65 / 105 / 145 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;25% <b>bonus</b> AD)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Jayce transforms into  Hammer Stance, receiving access to its abilities, becoming  melee with  125 attack range, gaining 5 / 15 / 25 / 35 (based on level) (+ 7.5% bonus AD)  bonus armor and  bonus magic resistance, and empowering his next basic attack to deal 25 / 65 / 105 / 145 (based on level) (+ 25% bonus AD) bonus magic damage.',
            increasedStat: 'bonus_ad',
            values: [],
            basedOn: 'level',
            units: '',
            unitsText:
              'bonus armor and  bonus magic resistance, and empowering his next basic attack to deal 25 / 65 / 105 / 145',
            pre: 'Jayce transforms into  Hammer Stance, receiving access to its abilities, becoming  melee with  125 attack range, gaining 5 / 15 / 25 / 35',
            post: 'bonus armor and  bonus magic resistance, and empowering his next basic attack to deal 25 / 65 / 105 / 145',
            children: [
              {
                values: 7.5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 7.5% bonus AD',
              },
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
        description:
          'Jayce begins the game with Transform but cannot increase its rank. Instead, his basic abilities each have 6 ranks.',
        descriptionHTML:
          '<b>Jayce</b> begins the game with <i>Transform</i> but cannot increase its rank. Instead, his basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> each have 6 ranks.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Instead, his basic abilities each have 6 ranks.',
            damagetype: 'None',
            values: 6,
            user: 'none',
            units: '',
            unitsText: 'his basic abilities each have 6 ranks.',
            pre: 'Instead, his basic abilities each have 6 ranks.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    onhiteffects: 'Special',
    notes:
      '*Transformations do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>The enhanced attack will not be consumed if it is parried (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Riposte" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Riposte" title="Riposte"><img alt="Riposte" src="/wiki/images/Fiora_Riposte.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Riposte" title="Fiora/LoL">Riposte</a></span></span>).</li>\n<li>The <i>Mercury Hammer\'s</i> bonus damage can affect structures.</li>\n<li>Both <i>Transform</i> on-hit effects have no set duration and will only be consumed when <b>Jayce</b> either lands a basic attack or switches stances.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Jayce_Original_R_CannonToHammer_1.ogg   "Hammer time!"',
  },
} satisfies { [skillName in string]: SkillData };
