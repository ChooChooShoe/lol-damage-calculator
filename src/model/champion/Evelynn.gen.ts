import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Evelynn';

export default {
  'Demon Shade': {
    name: 'Demon Shade',
    display_name: 'Demon Shade',
    champion: 'Evelynn',
    skill: 'I',
    image: {
      full: 'Evelynn_Passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    customlabel: 'Detection Radius',
    custominfo: '700',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> While <a href="/wiki/Combat_status" title="Combat status">out of combat</a>, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL" title="Evelynn"><img alt="Evelynn" src="/wiki/images/Evelynn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL" title="Evelynn/LoL">Evelynn</a></span></span> gains <i>Demon Shade</i>.',
      '<span class="template_sbc"><b>Demon Shade:</b></span> <b>Evelynn</b> rapidly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> while she is <span style="color: #1F995C; white-space:normal">at low health</span>. After level 6, <i>Demon Shade</i> also grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Demon_Shade.png',
        description:
          'Innate: Evelynn shrouds herself in Demon Shade after not performing actions that break stealth for 4 seconds. Attacking or casting abilities ends Demon Shade immediately and places it on a 4-second static cooldown, reduced to 1.25 seconds from casting  Last Caress. Taking damage from  champions or  turrets interrupts Demon Shade and places it on a 1.5-second static cooldown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Evelynn</b> shrouds herself in <i>Demon Shade</i> after not performing actions that <a href="/wiki/Stealth#Breaking_stealth" title="Stealth">break stealth</a> for 4 seconds. Attacking or casting abilities ends <i>Demon Shade</i> immediately and places it on a 4-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span>, reduced to 1.<small>25</small> seconds from casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Last Caress" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Last_Caress" title="Last Caress"><img alt="Last Caress" src="/wiki/images/Evelynn_Last_Caress.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Last_Caress" title="Evelynn/LoL">Last Caress</a></span></span>. Taking damage from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> interrupts <i>Demon Shade</i> and places it on a 1.<small>5</small>-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: 'Evelynn shrouds herself in Demon Shade after not performing actions that break stealth for 4 seconds',
            damagetype: 'None',
            values: 4,
            units: 'total_ad',
            unitsText:
              'shrouds herself in Demon Shade after not performing actions that break stealth for 4 seconds',
            pre: 'Evelynn shrouds herself in Demon Shade after not performing actions that break stealth for 4 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Attacking or casting abilities ends Demon Shade immediately and places it on a 4-second static cooldown, reduced to 1.25 seconds from casting  Last Caress',
            damagetype: 'None',
            values: 4,
            units: 'total_ad',
            unitsText:
              'or casting abilities ends Demon Shade immediately and places it on a 4-second static cooldown, reduced to 1.25 seconds from casting  Last Caress',
            pre: 'Attacking or casting abilities ends Demon Shade immediately and places it on a 4-second static cooldown, reduced to 1.25 seconds from casting  Last Caress',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'Taking damage from  champions or  turrets interrupts Demon Shade and places it on a 1.5-second static cooldown.',
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              'damage from  champions or  turrets interrupts Demon Shade and places it on a 1.5-second static cooldown.',
            pre: 'Taking damage from  champions or  turrets interrupts Demon Shade and places it on a 1.5-second static cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Demon Shade: While below  250 − 590 (based on level) (+ 250% AP) health, Evelynn  heals herself for 15 − 150 (based on level) every second. From level 6 onward, Demon Shade also grants  camouflage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Demon Shade:</b></span> While below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="250;" data-finish="590;" data-bot_values="250;270;290;310;330;350;370;390;410;430;450;470;490;510;530;550;570;590" data-top_values="">250 − 590 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;250% AP)</span> health</span></span>, <b>Evelynn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="150;" data-bot_values="15;22.94;30.88;38.82;46.76;54.71;62.65;70.59;78.53;86.47;94.41;102.35;110.29;118.24;126.18;134.12;142.06;150" data-top_values="">15 − 150 (based on level)</span> every second. From <a href="/wiki/Experience_(champion)" title="Experience (champion)">level</a> 6 onward, <i>Demon Shade</i> also grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Demon Shade:',
            raw: 'While below  250 − 590 (based on level) (+ 250% AP) health, Evelynn  heals herself for 15 − 150 (based on level) every second',
            healType: 'BonusHealth',
            values: [
              250, 270, 290, 310, 330, 350, 370, 390, 410, 430, 450, 470, 490,
              510, 530, 550, 570, 590,
            ],
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText: 'health, Evelynn  heals herself for 15 − 150',
            pre: 'While below  250 − 590',
            post: 'health, Evelynn  heals herself for 15 − 150',
            children: [
              {
                values: 250,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 250% AP',
              },
            ],
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'From level 6 onward, Demon Shade also grants  camouflage.',
            increasedStat: 'total_ad',
            values: 6,
            units: '',
            unitsText: 'level 6 onward, Demon Shade also grants  camouflage.',
            pre: 'From level 6 onward, Demon Shade also grants  camouflage.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Heal',
    notes:
      '* <i>Demon Shade</i> is also placed on a 1.<small>5</small> second cooldown upon <a href="/wiki/Death" title="Death">respawning</a>.\n<ul><li><i>Demon Shade\'s</i> cooldown incurs upon starting the attack windup of the basic attack and upon the cast time of the ability.</li>\n<li><i>Demon Shade</i> activates even if <b>Evelynn</b> is <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recalling"><img alt="Recalling" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recalling</a></span></span>.</li>\n<li>Whenever <i>Demon Shade</i> activates, a puff of purple smoke will briefly appear around her.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Evelynn_Original_Stealth_Activate_10.ogg   "It\'s better in the dark."',
    video: 'Evelynn - Passive',
    yvideo: 'Evelynn - Passive',
  },
  'Hate Spike': {
    name: 'Hate Spike',
    display_name: 'Hate Spike',
    champion: 'Evelynn',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'EvelynnQ.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '800',
    speed: '2400',
    cast_time: '0.<small>3</small>',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">4</span>',
    customlabel:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cooldown in between each spike cast, affected by ability haste">Barrage Cooldown</span>',
    custominfo: '0.<small>5</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL" title="Evelynn"><img alt="Evelynn" src="/wiki/images/Evelynn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL" title="Evelynn/LoL">Evelynn</a></span></span> fires her Lasher, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and marking them. <b>Evelynn\'s </b>next few attacks against the marked target will deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Evelynn</b> shoots a line of spikes toward the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies hit. She may recast up to 3 times.',
    ],
    description: [
      {
        icon: '/wiki/images/Hate_Spike.png',
        description:
          'Active: Evelynn launches a dart in the target direction, dealing magic damage to the first enemy hit and marking them for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> launches a dart in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and marking them for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Evelynn launches a dart in the target direction, dealing magic damage to the first enemy hit and marking them for 4 seconds.',
            damagetype: 'Magic',
            values: 4,
            units: 'kindredMarks',
            unitsText:
              'launches a dart in the target direction, dealing magic damage to the first enemy hit and marking them for 4 seconds.',
            pre: 'Evelynn launches a dart in the target direction, dealing magic damage to the first enemy hit and marking them for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '25 / 30 / 35 / 40 / 45 (+ 30% AP)',
            valuesHTML:
              '25 / 30 / 35 / 40 / 45 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '25 / 30 / 35 / 40 / 45 (+ 30% AP)',
            damagetype: 'Magic',
            values: [25, 30, 35, 40, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45',
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
        icon: '/wiki/images/undefined',
        description:
          "Evelynn's next 3 basic attacks or abilities against the marked target deal bonus magic damage.",
        descriptionHTML:
          '<b>Evelynn\'s</b> next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> or <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against the marked target deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Evelynn's next 3 basic attacks or abilities against the marked target deal bonus magic damage.",
            increasedStat: 'kindredMarks',
            values: 3,
            units: '',
            unitsText:
              'next 3 basic attacks or abilities against the marked target deal bonus magic damage.',
            pre: "Evelynn's next 3 basic attacks or abilities against the marked target deal bonus magic damage.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '15 / 25 / 35 / 45 / 55 (+ 25% AP)',
            valuesHTML:
              '15 / 25 / 35 / 45 / 55 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '15 / 25 / 35 / 45 / 55 (+ 25% AP)',
            damagetype: 'Magic',
            values: [15, 25, 35, 45, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55',
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
      {
        icon: '/wiki/images/undefined',
        description:
          'Hate Spike may be recast up to 3 times at no cost until the ability comes off cooldown.',
        descriptionHTML:
          '<i>Hate Spike</i> may be recast up to 3 times at no cost until the ability comes off cooldown.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Hate Spike may be recast up to 3 times at no cost until the ability comes off cooldown.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Spike may be recast up to 3 times at no cost until the ability comes off cooldown.',
            pre: 'Hate Spike may be recast up to 3 times at no cost until the ability comes off cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Hate_Spike_2.png',
        description:
          'Recast: Evelynn unleashes a line of deadly spikes in the direction of the nearest  visible enemy that deals magic damage to all enemies struck.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Evelynn</b> unleashes a line of deadly spikes in the direction of the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies struck.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '25 / 30 / 35 / 40 / 45 (+ 30% AP)',
            valuesHTML:
              '25 / 30 / 35 / 40 / 45 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '25 / 30 / 35 / 40 / 45 (+ 30% AP)',
            damagetype: 'Magic',
            values: [25, 30, 35, 40, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45',
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
        icon: '/wiki/images/undefined',
        description:
          "Hate Spike's recast prioritizes targeting Evelynn's attack target, then the nearest enemy champion, then the nearest non-champion.",
        descriptionHTML:
          "<i>Hate Spike's</i> recast prioritizes targeting <b>Evelynn's</b> attack target, then the nearest enemy champion, then the nearest non-champion.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Special',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Each cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><i>Hate Spike</i> prioritizes:\n<ol><li>The last champion <b>Evelynn</b> hit</li>\n<li>The last non-champion <b>Evelynn</b> hit</li>\n<li>The lowest-health champion</li>\n<li>The lowest-health non-champion</li></ol></li>\n<li>The dart applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> and the spikes deal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li>Recasts can be buffered up to 0.<small>5</small> seconds before becoming castable at a maximum range of approximately 500 units.</li></ul>',
    video: 'Evelynn - Q',
    yvideo: 'Evelynn - Q',
  },
  Allure: {
    name: 'Allure',
    display_name: 'Allure',
    champion: 'Evelynn',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'EvelynnW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1200 / 1300 / 1400 / 1500 / 1600',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">15 / 14 / 13 / 12 / 11</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL" title="Evelynn"><img alt="Evelynn" src="/wiki/images/Evelynn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL" title="Evelynn/LoL">Evelynn</a></span></span> <i>curses</i> the target enemy, causing her next attack against the target to <i>expunge</i> the <i>curse</i>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> the target and refunding the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span>.',
      'If the <i>curse</i> matures long enough, the <i>expunge</i> will increase the slow, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charm</a></span> the target, and apply an additional effect based on the target type.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">Champions</a></span> have <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">reduced magic resist</span></span> for a few seconds.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">Monsters</a></span> are dealt <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and increased <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charm</a></span> duration.</li></ul>',
    ],
    description: [
      {
        icon: '/wiki/images/Allure.png',
        description:
          'Active: Evelynn curses the target enemy  champion or  monster for 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> <i>curses</i> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Evelynn curses the target enemy  champion or  monster for 5 seconds.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'curses the target enemy  champion or  monster for 5 seconds.',
            pre: 'Evelynn curses the target enemy  champion or  monster for 5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Evelynn's next basic attack or ability against the accursed target expunges them,  slowing them by 65% for 0.75 seconds.",
        descriptionHTML:
          '<b>Evelynn\'s</b> next basic attack or ability against the <i>accursed</i> target <i>expunges</i> them, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 65% for 0.<small>75</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Evelynn's next basic attack or ability against the accursed target expunges them,  slowing them by 65% for 0.75 seconds.",
            increasedStat: 'total_ad',
            values: 6,
            valuesIsPercent: true,
            user: 'target',
            units: '',
            unitsText:
              'for 0.75 seconds.next basic attack or ability against the accursed target expunges them,  slowing them by 65',
            pre: "Evelynn's next basic attack or ability against the accursed target expunges them,  slowing them by 65% for 0.75 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Expunging a target will refund Allure's  mana cost. If the target is cursed for at least 2.5 seconds, the expunge also  charms them for a few seconds and the duration of the  slow is increased to last for this time, as well as applying additional effects based on the target type.",
        descriptionHTML:
          '<i>Expunging</i> a target will refund <i>Allure\'s</i> <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span>. If the target is <i>cursed</i> for at least 2.<small>5</small> seconds, the <i>expunge</i> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charms</a></span> them for a few seconds and the duration of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> is increased to last for this time, as well as applying additional effects based on the target type.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If the target is cursed for at least 2.5 seconds, the expunge also  charms them for a few seconds and the duration of the  slow is increased to last for this time, as well as applying additional effects based on the target type.',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              'the target is cursed for at least 2.5 seconds, the expunge also  charms them for a few seconds and the duration of the  slow is increased to last for this time, as well as applying additional effects based on the target type.',
            pre: 'If the target is cursed for at least 2.5 seconds, the expunge also  charms them for a few seconds and the duration of the  slow is increased to last for this time, as well as applying additional effects based on the target type.',
          },
        ],
        leveling: [
          {
            name: 'Charm Duration:',
            values: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            valuesHTML:
              '1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Charm Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Against champions, the expunge also inflicts  magic resistance reduction for 4 seconds.Against monsters, the expunge deals bonus magic damage and the  charm lasts 2 seconds longer.',
        descriptionHTML:
          'Against champions, the <i>expunge</i> also inflicts <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance reduction</span></span> for 4 seconds.<br>Against monsters, the <i>expunge</i> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charm</a></span> lasts 2 seconds longer.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Against champions, the expunge also inflicts  magic resistance reduction for 4 seconds.Against monsters, the expunge deals bonus magic damage and the  charm lasts 2 seconds longer.',
            increasedStat: 'bonus_mr',
            values: 4,
            units: '',
            unitsText:
              'champions, the expunge also inflicts  magic resistance reduction for 4 seconds.Against monsters, the expunge deals bonus magic damage and the  charm lasts 2 seconds longer.',
            pre: 'Against champions, the expunge also inflicts  magic resistance reduction for 4 seconds.Against monsters, the expunge deals bonus magic damage and the  charm lasts 2 seconds longer.',
          },
        ],
        leveling: [
          {
            name: 'Magic Resistance Reduction:',
            values: '35 / 37.5 / 40 / 42.5 / 45%',
            valuesHTML:
              '<span style="color: #00FFFF; white-space:normal">35 / 37.<small>5</small> / 40 / 42.<small>5</small> / 45%</span>',
          },
          {
            name: 'Bonus Magic Damage:',
            values: '250 / 300 / 350 / 400 / 450 (+ 60% AP)',
            valuesHTML:
              '250 / 300 / 350 / 400 / 450 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Resistance Reduction:',
            raw: '35 / 37.5 / 40 / 42.5 / 45%',
            damagetype: 'Magic',
            values: [35, 37.5, 40, 42.5, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 37.5 / 40 / 42.5 / 45%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '250 / 300 / 350 / 400 / 450 (+ 60% AP)',
            damagetype: 'Magic',
            values: [250, 300, 350, 400, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 300 / 350 / 400 / 450',
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
        icon: '/wiki/images/undefined',
        description:
          'Casting Allure does not break  Demon Shade nor its fade into it.',
        descriptionHTML:
          '<i>Casting Allure does not break <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Demon Shade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Demon Shade"><img alt="Demon Shade" src="/wiki/images/Evelynn_Demon_Shade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Evelynn/LoL">Demon Shade</a></span></span> nor its fade into it.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    occurrence: 'On-hit',
    spellshield: 'Special',
    notes:
      '* The mark fully forming signifies the 2.<small>5</small> seconds have elapsed, meaning the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charm</a></span> will be applied on the triggering attack or ability.\n<ul><li><ul><li>An enemy champion cursed by <i>Allure</i> is alarmed of her presence and after the mark has fully formed, an arrow will appear next to them pointing towards <b>Evelynn\'s</b> direction. This is visible to both teams.</li></ul></li>\n<li>The <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Magic_penetration" title="Magic penetration">magic penetration</a></span> will be applied to the attack or ability that triggers it.</li>\n<li><i>Allure\'s</i> mark application on a target cannot be blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.\n<ul><li>The expunge will not occur if the ability is blocked by a spell shield. The mark does not trigger and will remain on the target in this case.</li></ul></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but still go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and pay its cost.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li><i>Allure</i> will restart its cooldown whenever the mark debuff is removed.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Evelynn_Original_W_6.ogg   "Go on, touch me."',
    video: 'Evelynn - W',
    yvideo: 'Evelynn - W',
  },
  Whiplash: {
    name: 'Whiplash',
    display_name: 'Whiplash',
    champion: 'Evelynn',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'EvelynnE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '210',
    cast_time: '0.<small>25</small>',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL" title="Evelynn"><img alt="Evelynn" src="/wiki/images/Evelynn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL" title="Evelynn/LoL">Evelynn</a></span></span> whips the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects. She then gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time.',
      'Whenever <b>Evelynn</b> enters <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Demon Shade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Demon Shade"><img alt="Demon Shade" src="/wiki/images/Evelynn_Demon_Shade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Evelynn/LoL">Demon Shade</a></span></span></i>, <i>Whiplash\'s</i> cooldown will <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span> and the next cast is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Empowered Whiplash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="empowered"><img alt="empowered" src="/wiki/images/Evelynn_Empowered_Whiplash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="Evelynn/LoL">empowered</a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Whiplash.png',
        description:
          'Active: Evelynn whips the target enemy with her lashers, dealing magic damage and applying  on-hit effects at 100% effectiveness.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> whips the target enemy with her lashers, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Evelynn whips the target enemy with her lashers, dealing magic damage and applying  on-hit effects at 100% effectiveness.',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness.whips the target enemy with her lashers, dealing magic damage and applying  on-hit effects at 100',
            pre: 'Evelynn whips the target enemy with her lashers, dealing magic damage and applying  on-hit effects at 100% effectiveness.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "55 / 70 / 85 / 100 / 115 (+ 3% (+ 1.5% per 100 AP) of target's maximum health)",
            valuesHTML:
              '55 / 70 / 85 / 100 / 115 <span style="color: #1F995C; white-space:normal">(+&nbsp;3% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1.<small>5</small>% per 100 AP)</span> of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "55 / 70 / 85 / 100 / 115 (+ 3% (+ 1.5% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [55, 70, 85, 100, 115],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 70 / 85 / 100 / 115',
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 3%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 1.5,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 1.5% per 100 AP',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Whiplash_2.png',
        description:
          'Evelynn also gains  30% bonus movement speed for 2 seconds.',
        descriptionHTML:
          '<b>Evelynn</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Evelynn also gains  30% bonus movement speed for 2 seconds.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed for 2 seconds.also gains  30',
            pre: 'Evelynn also gains  30% bonus movement speed for 2 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Gaining  Demon Shade resets Whiplash's  cooldown and  empowers its next cast. The damage based on the target's health ratio for both Whiplash and its  empowered cast deals a minimum of 25 and is capped at 450 against  monsters.",
        descriptionHTML:
          'Gaining <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Demon Shade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Demon Shade"><img alt="Demon Shade" src="/wiki/images/Evelynn_Demon_Shade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Evelynn/LoL">Demon Shade</a></span></span> resets <i>Whiplash\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Empowered Whiplash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="empowers"><img alt="empowers" src="/wiki/images/Evelynn_Empowered_Whiplash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="Evelynn/LoL">empowers</a></span></span> its next cast. The damage based on the target\'s health ratio for both <i>Whiplash</i> and its <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Empowered Whiplash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="empowered"><img alt="empowered" src="/wiki/images/Evelynn_Empowered_Whiplash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="Evelynn/LoL">empowered</a></span></span> cast deals a minimum of 25 and is capped at 450 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "The damage based on the target's health ratio for both Whiplash and its  empowered cast deals a minimum of 25 and is capped at 450 against  monsters.",
            healType: 'OutgoingHeals',
            values: 2,
            units: 'total_ap',
            unitsText:
              "damage based on the target's health ratio for both Whiplash and its  empowered cast deals a minimum of 25 and is capped at 450 against  monsters.",
            pre: "The damage based on the target's health ratio for both Whiplash and its  empowered cast deals a minimum of 25 and is capped at 450 against  monsters.",
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
    onhiteffects: 'True',
    spellshield: true,
    projectile: 'False',
    callforhelp: 'true',
    notes:
      '* <i>Whiplash</i> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> but may not miss if <b>Evelynn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    video: 'Evelynn - E',
    yvideo: 'Evelynn - E',
  },
  'Empowered Whiplash': {
    name: 'Empowered Whiplash',
    display_name: 'Empowered Whiplash',
    champion: 'Evelynn',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'EvelynnE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL" title="Evelynn"><img alt="Evelynn" src="/wiki/images/Evelynn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL" title="Evelynn/LoL">Evelynn</a></span></span> casts <i>Whiplash</i>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> to the target enemy and dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased damage</span> to them and enemies she passes through.',
    ],
    description: [
      {
        icon: '/wiki/images/Empowered_Whiplash.png',
        description:
          'Active: Evelynn  dashes toward the target enemy with her lashers, dealing  increased damage to them upon completion as well as to all enemies within her path.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward the target enemy with her lashers, dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased damage</span> to them upon completion as well as to all enemies within her path.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Empowered Magic Damage:',
            values:
              "75 / 100 / 125 / 150 / 175 (+ 4% (+ 2.5% per 100 AP) of target's maximum health)",
            valuesHTML:
              '75 / 100 / 125 / 150 / 175 <span style="color: #1F995C; white-space:normal">(+&nbsp;4% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2.<small>5</small>% per 100 AP)</span> of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Empowered Magic Damage:',
            raw: "75 / 100 / 125 / 150 / 175 (+ 4% (+ 2.5% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 4%',
                post: "of target's maximum health",
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
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Empowered Whiplash only applies  on-hit effects to the primary target.',
        descriptionHTML:
          '<i>Empowered Whiplash</i> only applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects to the primary target.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    onhiteffects: 'Special',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <b>Evelynn</b> will track the target if they change locations.\n<ul><li><ul><li>She will dash to the target\'s previous location if the target moves <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2000</span> or more units away.</li>\n<li>She will not stop tracking the target until she reaches them, as there is no maximum tracking distance.</li></ul></li>\n<li>There is no time-out period on <i>Empowered Whiplash</i>.</li>\n<li><i>Empowered Whiplash</i> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> but cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and/or missed if <b>Evelynn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    yvideo: 'Evelynn - E',
  },
  'Last Caress': {
    name: 'Last Caress',
    display_name: 'Last Caress',
    champion: 'Evelynn',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'EvelynnR.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">500</span>',
    angle: '180°',
    cast_time: '0.<small>35</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL" title="Evelynn"><img alt="Evelynn" src="/wiki/images/Evelynn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL" title="Evelynn/LoL">Evelynn</a></span></span> briefly goes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and decimates the area in front of her, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within, increased against <span style="color: #1F995C; white-space:normal">low-health targets</span>. She then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> backwards over a distance.',
    ],
    description: [
      {
        icon: '/wiki/images/Last_Caress.png',
        description:
          'Active: Evelynn reveals her true form, becoming  untargetable at the start of the cast time and then unleashing her lashers in a cone in the target direction, dealing magic damage to enemies struck within. After 0.5 seconds, she  blinks 700 units in the opposite direction and becomes targetable again.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> reveals her true form, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> at the start of the cast time and then unleashing her lashers in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies struck within. After 0.<small>5</small> seconds, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> 700 units in the opposite direction and becomes targetable again.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '125 / 187.5 / 250 / 312.5 / 375 (+ 75% AP)',
            valuesHTML:
              '125 / 187.<small>5</small> / 250 / 312.<small>5</small> / 375 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '125 / 187.5 / 250 / 312.5 / 375 (+ 75% AP)',
            damagetype: 'Magic',
            values: [125, 187.5, 250, 312.5, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 187.5 / 250 / 312.5 / 375',
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
        icon: '/wiki/images/Last_Caress_2.png',
        description:
          'Last Caress deals  140% increased damage to enemies below  30% of their maximum health.',
        descriptionHTML:
          '<i>Last Caress</i> deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">140% increased damage</span> to enemies below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;30% of their <b>maximum</b> health</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Last Caress deals  140% increased damage to enemies below  30% of their maximum health.',
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'increased damage to enemies below  30Caress deals  140',
            pre: 'Last Caress deals  140% increased damage to enemies below  30% of their maximum health.',
          },
        ],
        leveling: [
          {
            name: 'Empowered Damage:',
            values: '300 / 450 / 600 / 750 / 900 (+ 180% AP)',
            valuesHTML:
              '300 / 450 / 600 / 750 / 900 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;180% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage:',
            raw: '300 / 450 / 600 / 750 / 900 (+ 180% AP)',
            damagetype: 'None',
            values: [300, 450, 600, 750, 900],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 450 / 600 / 750 / 900',
            children: [
              {
                values: 180,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 180% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies / Self',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <i>Last Caress</i> can be buffered during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Empowered Whiplash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="Empowered Whiplash"><img alt="Empowered Whiplash" src="/wiki/images/Evelynn_Empowered_Whiplash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="Evelynn/LoL">Empowered Whiplash</a></span></span>.\n<ul><li>The casting input controls the direction <i>Last Caress\' </i> damage is dealt from, with the movement automatically happening in the reverse direction.</li>\n<li>Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> below the health threshold are marked for <b>Evelynn</b>, indicating the target will receive <i>Last Caress\' </i> increased damage.</li>\n<li>The screen will direct to <b>Evelynn\'s</b> position after she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span>.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    video: 'Evelynn - R',
    yvideo: 'Evelynn - R',
  },
} satisfies { [skillName in string]: SkillData };
