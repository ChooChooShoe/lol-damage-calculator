import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'LeBlanc';

export default {
  'Mirror Image': {
    name: 'Mirror Image',
    display_name: 'Mirror Image',
    champion: 'LeBlanc',
    skill: 'I',
    image: {
      full: 'LeBlancP.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    static: '60',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> When <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL" title="LeBlanc"><img alt="LeBlanc" src="/wiki/images/LeBlanc_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL" title="LeBlanc/LoL">LeBlanc</a></span></span> reaches low health, she creates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of herself and together they enter brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span>.',
      'The clone will run forward to a random location, and lasts for a period.',
      '<i>Mirror Image</i> will go on cooldown upon triggering.',
    ],
    description: [
      {
        icon: '/wiki/images/Mirror Image.png',
        description:
          'Innate: Periodically, when LeBlanc is damaged to  40% maximum health, she creates a  clone of herself, after which they both instantly become  invisible for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, when <b>LeBlanc</b> is damaged to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">40% <b>maximum</b> health</span></span>, she creates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of herself, after which they both instantly become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: ' Periodically, when LeBlanc is damaged to  40% maximum health, she creates a  clone of herself, after which they both instantly become  invisible for 1 second.',
            healType: 'BonusHealth',
            values: 4,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              'maximum health, she creates a  clone of herself, after which they both instantly become  invisible for 1 second.when LeBlanc is damaged to  40',
            pre: 'Periodically, when LeBlanc is damaged to  40% maximum health, she creates a  clone of herself, after which they both instantly become  invisible for 1 second.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The clone can basic attack but deals no damage, lasts for 8 seconds, and starts running 1900 units towards a random place in front of LeBlanc decided the moment it spawns.',
        descriptionHTML:
          'The clone can basic attack but deals no damage, lasts for 8 seconds, and starts running 1900 units towards a random place in front of <b>LeBlanc</b> decided the moment it spawns.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The clone can basic attack but deals no damage, lasts for 8 seconds, and starts running 1900 units towards a random place in front of LeBlanc decided the moment it spawns.',
            damagetype: 'None',
            values: 8,
            units: 'total_ad',
            unitsText:
              'clone can basic attack but deals no damage, lasts for 8 seconds, and starts running 1900 units towards a random place in front of LeBlanc decided the moment it spawns.',
            pre: 'The clone can basic attack but deals no damage, lasts for 8 seconds, and starts running 1900 units towards a random place in front of LeBlanc decided the moment it spawns.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "See Pets for more details about LeBlanc's clone.",
        descriptionHTML:
          '<i>See <a href="/wiki/LeBlanc/LoL#Pets" title="LeBlanc/LoL">Pets</a> for more details about <b>LeBlanc\'s</b> clone.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> has a <a href="/wiki/Pets#Leash_ranges" title="Pets">leash range</a>.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:LeBlanc_Original_CloneDeath_1.ogg   "Looks can be deceiving."',
  },
  'Sigil of Malice': {
    name: 'Sigil of Malice',
    display_name: 'Sigil of Malice',
    champion: 'LeBlanc',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'LeblancQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '700',
    speed: '2000',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL" title="LeBlanc"><img alt="LeBlanc" src="/wiki/images/LeBlanc_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL" title="LeBlanc/LoL">LeBlanc</a></span></span> projects an orb at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and marks them for a short time.',
      'Her next damaging ability against the marked target will consume the mark to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Sigil of Malice.png',
        description:
          'Active: LeBlanc projects an orb at the target enemy that deals magic damage and marks them for 3.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>LeBlanc</b> projects an orb at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and marks them for 3.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' LeBlanc projects an orb at the target enemy that deals magic damage and marks them for 3.5 seconds.',
            damagetype: 'Magic',
            values: 3,
            units: 'kindredMarks',
            unitsText:
              'projects an orb at the target enemy that deals magic damage and marks them for 3.5 seconds.',
            pre: 'LeBlanc projects an orb at the target enemy that deals magic damage and marks them for 3.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '65 / 90 / 115 / 140 / 165 (+ 40% AP)',
            valuesHTML:
              '65 / 90 / 115 / 140 / 165 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '65 / 90 / 115 / 140 / 165 (+ 40% AP)',
            damagetype: 'Magic',
            values: [65, 90, 115, 140, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 90 / 115 / 140 / 165',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "Leblanc's next damaging ability against the marked target will consume the mark to deal them the  same damage again.",
        descriptionHTML:
          '<b>Leblanc\'s</b> next damaging <a href="/wiki/Champion_ability" title="Champion ability">ability</a> against the marked target will consume the mark to deal them the <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">same damage</span> again.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values: '130 / 180 / 230 / 280 / 330 (+ 80% AP)',
            valuesHTML:
              '130 / 180 / 230 / 280 / 330 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '130 / 180 / 230 / 280 / 330 (+ 80% AP)',
            damagetype: 'Magic',
            values: [130, 180, 230, 280, 330],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '130 / 180 / 230 / 280 / 330',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Spell',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'true',
    notes:
      '* <i>Sigil of Malice</i> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Sigil of Malice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="Mimic: Sigil of Malice"><img alt="Mimic: Sigil of Malice" src="/wiki/images/LeBlanc_Mimic-_Sigil_of_Malice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="LeBlanc/LoL">Mimic: Sigil of Malice</a></span></span> can detonate each other\'s marks.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  Distortion: {
    name: 'Distortion',
    display_name: 'Distortion',
    champion: 'LeBlanc',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'LeblancW.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '600 / Global',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">240</span>',
    speed: '1450',
    cast_time: 'none',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">18 / 16 / 14 / 12 / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL" title="LeBlanc"><img alt="LeBlanc" src="/wiki/images/LeBlanc_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL" title="LeBlanc/LoL">LeBlanc</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies upon arrival. She leaves behind a return pad at her original location that lasts a few seconds, during which she can recast.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>LeBlanc</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the return pad.',
    ],
    description: [
      {
        icon: '/wiki/images/Distortion.png',
        description:
          "Active: LeBlanc  dashes to the target location, dealing magic damage to all nearby enemies upon arrival and leaving a return pad at the cast location for 4 seconds. Distortion can be recast after 0.2 seconds of the dash ending for the pad's duration.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>LeBlanc</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies upon arrival and leaving a return pad at the cast location for 4 seconds. <i>Distortion</i> can be recast after 0.<small>2</small> seconds of the dash ending for the pad\'s duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' LeBlanc  dashes to the target location, dealing magic damage to all nearby enemies upon arrival and leaving a return pad at the cast location for 4 seconds',
            damagetype: 'Magic',
            values: 4,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'dashes to the target location, dealing magic damage to all nearby enemies upon arrival and leaving a return pad at the cast location for 4 seconds',
            pre: 'LeBlanc  dashes to the target location, dealing magic damage to all nearby enemies upon arrival and leaving a return pad at the cast location for 4 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 115 / 155 / 195 / 235 (+ 60% AP)',
            valuesHTML:
              '75 / 115 / 155 / 195 / 235 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 115 / 155 / 195 / 235 (+ 60% AP)',
            damagetype: 'Magic',
            values: [75, 115, 155, 195, 235],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 115 / 155 / 195 / 235',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Distortion 2.png',
        description:
          "Recast: LeBlanc  blinks to Distortion's return pad, regardless of range.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>LeBlanc</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to <i>Distortion\'s</i> return pad, regardless of range.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Distortion will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Distortion will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Distortion</i> will be buffered and cast as soon as the cooldown ends if the player attempts to cast it within 0.<small>5</small> seconds of the cooldown ending.\n<ul><li><ul><li>The <span class="template_sbc"><b>recast</b></span> will be buffered and cast as soon as it becomes available if the player attempts to cast it within 0.<small>3</small> seconds of it becoming available to cast.</li></ul></li>\n<li>The initial cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>Recasting the ability does not.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Distortion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Distortion" title="Mimic: Distortion"><img alt="Mimic: Distortion" src="/wiki/images/LeBlanc_Mimic-_Distortion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Distortion" title="LeBlanc/LoL">Mimic: Distortion</a></span></span> has the same properties.</li></ul></li>\n<li><i>Distortion</i> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Distortion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Distortion" title="Mimic: Distortion"><img alt="Mimic: Distortion" src="/wiki/images/LeBlanc_Mimic-_Distortion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Distortion" title="LeBlanc/LoL">Mimic: Distortion</a></span></span> have independent return pads and <b>LeBlanc</b> can travel to both while they are active.</li>\n<li><i>Distortion\'s</i> pad duration starts once the dash ends.</li></ul>',
  },
  'Ethereal Chains': {
    name: 'Ethereal Chains',
    display_name: 'Ethereal Chains',
    champion: 'LeBlanc',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'LeblancE.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '950',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 110',
    tether_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Equivalent to 995 center-to-center range against the average enemy champion">865</span>',
    speed: '1750',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown:
      '14 / 13.<small>25</small> / 12.<small>5</small> / 11.<small>75</small> / 11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL" title="LeBlanc"><img alt="LeBlanc" src="/wiki/images/LeBlanc_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL" title="LeBlanc/LoL">LeBlanc</a></span></span> flings an illusory chain in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethers</a></span> the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them.',
      'The tether lasts a brief time, after which the target is dealt <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>, and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Ethereal Chains.png',
        description:
          'Active: LeBlanc flings an illusory chain in the target direction that deals magic damage to the first enemy it hits and forms a  tether between LeBlanc and the target for 1.5 seconds, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>LeBlanc</b> flings an illusory chain in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy it hits and forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between <b>LeBlanc</b> and the target for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' LeBlanc flings an illusory chain in the target direction that deals magic damage to the first enemy it hits and forms a  tether between LeBlanc and the target for 1.5 seconds, during which they are  revealed.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'flings an illusory chain in the target direction that deals magic damage to the first enemy it hits and forms a  tether between LeBlanc and the target for 1.5 seconds, during which they are  revealed.',
            pre: 'LeBlanc flings an illusory chain in the target direction that deals magic damage to the first enemy it hits and forms a  tether between LeBlanc and the target for 1.5 seconds, during which they are  revealed.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 70 / 90 / 110 / 130 (+ 30% AP)',
            valuesHTML:
              '50 / 70 / 90 / 110 / 130 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 30% AP)',
            damagetype: 'Magic',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
        description:
          'If the tether is not broken by the end of its duration, the target is dealt magic damage and is  rooted for 1.5 seconds, during which they are  revealed.',
        descriptionHTML:
          'If the tether is not broken by the end of its duration, the target is dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If the tether is not broken by the end of its duration, the target is dealt magic damage and is  rooted for 1.5 seconds, during which they are  revealed.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'the tether is not broken by the end of its duration, the target is dealt magic damage and is  rooted for 1.5 seconds, during which they are  revealed.',
            pre: 'If the tether is not broken by the end of its duration, the target is dealt magic damage and is  rooted for 1.5 seconds, during which they are  revealed.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 70% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 70% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* Both the initial and the delayed damage can detonate <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Sigil of Malice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Sigil_of_Malice" title="Sigil of Malice"><img alt="Sigil of Malice" src="/wiki/images/LeBlanc_Sigil_of_Malice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Sigil_of_Malice" title="LeBlanc/LoL">Sigil of Malice</a></span></span>.\n<ul><li><i>Ethereal Chains</i> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Ethereal Chains" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Ethereal_Chains" title="Mimic: Ethereal Chains"><img alt="Mimic: Ethereal Chains" src="/wiki/images/LeBlanc_Mimic-_Ethereal_Chains.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Ethereal_Chains" title="LeBlanc/LoL">Mimic: Ethereal Chains</a></span></span> are separate debuffs, and can both be tethered to the same target without overriding each other. The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> duration for either one are unchanged.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the tether\'s application and initial damage but not the aftereffects of one already applied.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  Mimic: {
    name: 'Mimic',
    display_name: 'Mimic',
    champion: 'LeBlanc',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'LeblancR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    cooldown: '50 / 45 / 40 / 35 / 30',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL" title="LeBlanc"><img alt="LeBlanc" src="/wiki/images/LeBlanc_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL" title="LeBlanc/LoL">LeBlanc</a></span></span> casts a mimicked version of her most recent ability, which deals modified damage.',
    ],
    description: [
      {
        icon: '/wiki/images/Mimic.png',
        description:
          'Active: LeBlanc casts a mimicked version of her most recently used basic ability, applying the same effects and dealing modified magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>LeBlanc</b> casts a mimicked version of her most recently used basic ability, applying the same effects and dealing <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Mimic: Sigil of Malice: Deals modified damage and double damage upon triggering the mark.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Sigil of Malice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="Mimic: Sigil of Malice"><img alt="Mimic: Sigil of Malice" src="/wiki/images/LeBlanc_Mimic-_Sigil_of_Malice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="LeBlanc/LoL">Mimic: Sigil of Malice</a></span></span>:</b></span> Deals modified damage and double damage upon triggering the mark.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
      },
      {
        description: 'Mimic: Distortion: Deals modified damage.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Distortion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Distortion" title="Mimic: Distortion"><img alt="Mimic: Distortion" src="/wiki/images/LeBlanc_Mimic-_Distortion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Distortion" title="LeBlanc/LoL">Mimic: Distortion</a></span></span>:</b></span> Deals modified damage.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 225 / 300 / 375 / 450 (+ 75% AP)',
            valuesHTML:
              '150 / 225 / 300 / 375 / 450 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 225 / 300 / 375 / 450 (+ 75% AP)',
            damagetype: 'Magic',
            values: [150, 225, 300, 375, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 225 / 300 / 375 / 450',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Mimic: Ethereal Chains: Deals modified damage and double damage after the tether lasts its full duration.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Ethereal Chains" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Ethereal_Chains" title="Mimic: Ethereal Chains"><img alt="Mimic: Ethereal Chains" src="/wiki/images/LeBlanc_Mimic-_Ethereal_Chains.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Ethereal_Chains" title="LeBlanc/LoL">Mimic: Ethereal Chains</a></span></span>:</b></span> Deals modified damage and double damage after the tether lasts its full duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Varied',
    affects: 'Self',
    damagetype: 'Magic',
    notes:
      '* <i>Mimic</i> will default to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Sigil of Malice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="Mimic: Sigil of Malice"><img alt="Mimic: Sigil of Malice" src="/wiki/images/LeBlanc_Mimic-_Sigil_of_Malice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="LeBlanc/LoL">Mimic: Sigil of Malice</a></span></span> if <i>LeBlanc</i> ranks up <i>Mimic</i> without having used any abilities beforehand (even if she has not yet learned <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Sigil of Malice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Sigil_of_Malice" title="Sigil of Malice"><img alt="Sigil of Malice" src="/wiki/images/LeBlanc_Sigil_of_Malice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Sigil_of_Malice" title="LeBlanc/LoL">Sigil of Malice</a></span></span>).\n<ul><li>Both <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Ethereal Chains" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Ethereal_Chains" title="Mimic: Ethereal Chains"><img alt="Mimic: Ethereal Chains" src="/wiki/images/LeBlanc_Mimic-_Ethereal_Chains.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Ethereal_Chains" title="LeBlanc/LoL">Mimic: Ethereal Chains</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Sigil of Malice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="Mimic: Sigil of Malice"><img alt="Mimic: Sigil of Malice" src="/wiki/images/LeBlanc_Mimic-_Sigil_of_Malice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="LeBlanc/LoL">Mimic: Sigil of Malice</a></span></span> will apply damage twice if the original ability\'s condition to do so is met.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
