import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Akali';

export default {
  "Assassin's Mark": {
    name: "Assassin's Mark",
    display_name: "Assassin's Mark",
    champion: 'Akali',
    skill: 'I',
    image: {
      full: 'Akali_P.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ring radius">500</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL" title="Akali\'s"><img alt="Akali\'s" src="/wiki/images/Akali_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL" title="Akali/LoL">Akali\'s</a></span></span> damage with abilities against a champion create a ring around them for a few seconds, and she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span> while moving away from the ring.',
      'Once <b>Akali</b> exits the ring, she regains the <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span> towards enemy champions and empowers her next <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span> with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: "/wiki/images/Assassin's Mark.png",
        description:
          'Innate: When Akali damages an enemy  champion with an ability, she creates a ring around them for 4 seconds, refreshing on subsequent damaging abilities against champions. For 2 seconds, she gains 30 / 40 / 50 / 60% (based on level)  bonus movement speed while moving away from the center of the ring. Only one ring may be active at a time.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> When <b>Akali</b> damages an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> with an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, she creates a ring around them for 4 seconds, refreshing on subsequent damaging abilities against champions. For 2 seconds, she gains <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;1" data-finish="60;16" data-bot_values="30;40;50;60" data-top_values="1;6;11;16" data-bot_key="%">30 / 40 / 50 / 60% (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span> while moving away from the center of the ring. Only one ring may be active at a time.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' When Akali damages an enemy  champion with an ability, she creates a ring around them for 4 seconds, refreshing on subsequent damaging abilities against champions',
            increasedStat: 'total_ap',
            values: 4,
            units: '',
            unitsText:
              'Akali damages an enemy  champion with an ability, she creates a ring around them for 4 seconds, refreshing on subsequent damaging abilities against champions',
            pre: 'When Akali damages an enemy  champion with an ability, she creates a ring around them for 4 seconds, refreshing on subsequent damaging abilities against champions',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'For 2 seconds, she gains 30 / 40 / 50 / 60% (based on level)  bonus movement speed while moving away from the center of the ring',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed while moving away from the center of the ring',
            pre: 'For 2 seconds, she gains 30 / 40 / 50 / 60%',
            post: 'bonus movement speed while moving away from the center of the ring',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'When Akali exits the ring, for 2 seconds, she regains the bonus movement speed while facing nearby enemy champions and becomes empowered with Swinging Kama for 4 seconds, during which she cannot create another ring.',
        descriptionHTML:
          'When <b>Akali</b> exits the ring, for 2 seconds, she regains the <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> while facing nearby enemy champions and becomes empowered with <i>Swinging Kama</i> for 4 seconds, during which she cannot create another ring.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'When Akali exits the ring, for 2 seconds, she regains the bonus movement speed while facing nearby enemy champions and becomes empowered with Swinging Kama for 4 seconds, during which she cannot create another ring.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'Akali exits the ring, for 2 seconds, she regains the bonus movement speed while facing nearby enemy champions and becomes empowered with Swinging Kama for 4 seconds, during which she cannot create another ring.',
            pre: 'When Akali exits the ring, for 2 seconds, she regains the bonus movement speed while facing nearby enemy champions and becomes empowered with Swinging Kama for 4 seconds, during which she cannot create another ring.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Swinging Kama: Akali's next basic attack is empowered to have its  range doubled and deal 35 − 182 (based on level) (+ 60% bonus AD) (+ 55% AP) bonus magic damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Swinging Kama:</b></span> <b>Akali\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to have its <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> doubled and deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-displayformula="+3 per level until lvl 7; then +9 until lvl 13, then +15" data-bot_values="35;38;41;44;47;50;53;62;71;80;89;98;107;122;137;152;167;182" data-top_values="">35 − 182 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Swinging Kama:',
            raw: " Akali's next basic attack is empowered to have its  range doubled and deal 35 − 182 (based on level) (+ 60% bonus AD) (+ 55% AP) bonus magic damage.",
            damagetype: 'Magic',
            values: [
              35, 43.65, 52.29, 60.94, 69.59, 78.24, 86.88, 95.53, 104.18,
              112.82, 121.47, 130.12, 138.76, 147.41, 156.06, 164.71, 173.35,
              182,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage.',
            pre: "Akali's next basic attack is empowered to have its  range doubled and deal 35 − 182",
            post: 'bonus magic damage.',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
              },
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
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: false,
    notes:
      '* Enemies cannot see the ring, but can see the empower effect.\n<ul><li><i>Swinging Kama</i> gives a static <b>bonus</b> range which doesn\'t change if <b>Akali\'s</b> range changes during it (i.e <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span>):\n<ul><li>If <i>Rapid Firecannon</i> fully charges within <i>Swinging Kama\'s</i> duration, <b>Akali\'s</b> total range increases to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="125&nbsp;×&nbsp;2&nbsp;×&nbsp;1.35">337.5</span>.</li>\n<li>If <i>Rapid Firecannon</i> fully charges before gaining <i>Swinging Kama</i>, <b>Akali\'s</b> total range is increased to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="125&nbsp;×&nbsp;1.35&nbsp;×&nbsp;2 + 125&nbsp;×&nbsp;1.35 (which is the bonus range Swinging Kama gives)&nbsp;×&nbsp;0.35 (further increased by Rapid Firecannon)">395</span>.</li></ul></li>\n<li>The ring will be created around the last target hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Five Point Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Five_Point_Strike" title="Five Point Strike"><img alt="Five Point Strike" src="/wiki/images/Akali_Five_Point_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Five_Point_Strike" title="Akali/LoL">Five Point Strike</a></span></span></i>.</li>\n<li>The ring\'s center is offset 120 units away from the enemy\'s center, towards Akali.</li>\n<li>The empowered attack can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, and will be mitigated by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinds</a></span>.</li>\n<li>The empowered attack will trigger but not be consumed nor apply its effects against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
    video: 'Akali - Passive',
  },
  'Five Point Strike': {
    name: 'Five Point Strike',
    display_name: 'Five Point Strike',
    champion: 'Akali',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'AkaliQ.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '500 / 120',
    width:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Maximum width. Estimated.">350</span>',
    angle: '20°',
    cast_time: '0.<small>25</small>',
    cost: '130 / 115 / 100 / 85 / 70',
    costtype: 'energy',
    cooldown: '1.<small>5</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL" title="Akali"><img alt="Akali" src="/wiki/images/Akali_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL" title="Akali/LoL">Akali</a></span></span> throws out a cone of kunai that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Targets hit at maximum range are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Five Point Strike.png',
        description:
          'Active: Akali unleashes kunais in a cone in the target direction, dealing magic damage to enemies hit. Targets at maximum range are also  slowed by 50% for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Akali</b> unleashes kunais in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Targets at maximum range are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 50% for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Targets at maximum range are also  slowed by 50% for 0.5 seconds.',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.5 seconds.at maximum range are also  slowed by 50',
            pre: 'Targets at maximum range are also  slowed by 50% for 0.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '30 / 55 / 80 / 105 / 130 (+ 65% AD) (+ 60% AP)',
            valuesHTML:
              '30 / 55 / 80 / 105 / 130 <span style="color:orange; white-space:normal">(+&nbsp;65% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 55 / 80 / 105 / 130 (+ 65% AD) (+ 60% AP)',
            damagetype: 'Magic',
            values: [30, 55, 80, 105, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 55 / 80 / 105 / 130',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 65% AD',
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
        ],
      },
      {
        icon: '/wiki/images/Five Point Strike 2.png',
        description: '',
        descriptionHTML: '',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
    video: 'Akali - Q',
  },
  'Twilight Shroud': {
    name: 'Twilight Shroud',
    display_name: 'Twilight Shroud',
    champion: 'Akali',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'AkaliW.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '250',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Minimum radius. Estimated.">350</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Maximum radius. Estimated.">1175</span>',
    cast_time: '0.<small>25</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">20</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL" title="Akali"><img alt="Akali" src="/wiki/images/Akali_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL" title="Akali/LoL">Akali</a></span></span> restores <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;energy</span></span> and gains a brief burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span>. She also drops a smoke shroud that makes her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span>, attacking or using abilities will briefly reveal her.',
      'The shroud will expand into a ring over a few seconds, during which <b>Akali</b> gains increased <span style="color:yellow; white-space:normal">energy</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Twilight Shroud.png',
        description:
          "Active: Akali restores  100 energy over 0.4 seconds and gains  bonus movement speed that decays over 2 seconds. She also detonates a smoke bomb a fixed distance away in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring. The shroud does not permeate terrain, and will expand toward nearby enemy champions. While the shroud is active, Akali's maximum energy is increased by 100.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Akali</b> restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">100 energy</span></span> over 0.<small>4</small> seconds and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 2 seconds. She also detonates a smoke bomb a fixed distance away in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring. The shroud does not permeate terrain, and will expand toward nearby enemy champions. While the shroud is active, <b>Akali\'s</b> <span style="color:yellow; white-space:normal"><b>maximum</b> energy</span> is increased by <span style="color:yellow; white-space:normal">100</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Akali restores  100 energy over 0.4 seconds and gains  bonus movement speed that decays over 2 seconds',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'restores  100 energy over 0.4 seconds and gains  bonus movement speed that decays over 2 seconds',
            pre: 'Akali restores  100 energy over 0.4 seconds and gains  bonus movement speed that decays over 2 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'She also detonates a smoke bomb a fixed distance away in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'also detonates a smoke bomb a fixed distance away in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring',
            pre: 'She also detonates a smoke bomb a fixed distance away in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring',
          },
          {
            effectType: 'Unique',
            name: 'Line 4:',
            raw: "While the shroud is active, Akali's maximum energy is increased by 100.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "the shroud is active, Akali's maximum energy is increased by 100.",
            pre: "While the shroud is active, Akali's maximum energy is increased by 100.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
          {
            name: 'Shroud Duration:',
            values: '5 / 5.5 / 6 / 6.5 / 7',
            valuesHTML: '5 / 5.<small>5</small> / 6 / 6.<small>5</small> / 7',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
          {
            effectType: 'Unique',
            name: 'Shroud Duration:',
            raw: '5 / 5.5 / 6 / 6.5 / 7',
            values: [5, 5.5, 6, 6.5, 7],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 5.5 / 6 / 6.5 / 7',
          },
        ],
      },
      {
        description:
          'Entering the shroud renders Akali  invisible, unless she is  dashing.',
        descriptionHTML:
          'Entering the shroud renders <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span>, unless she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Declaring a basic attack or casting an ability will break the invisibility and prevent Akali from entering it for 1 − 0.625 (based on minutes) seconds, refreshing on subsequent attacks and casts.',
        descriptionHTML:
          'Declaring a basic attack or casting an ability will break the invisibility and prevent <b>Akali</b> from entering it for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="minutes" data-bot_values="1;0.9;0.825;0.725;0.625" data-top_values="1;8;11;20;30">1 − 0.<small>625</small> (based on minutes)</span> seconds, refreshing on subsequent attacks and casts.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Declaring a basic attack or casting an ability will break the invisibility and prevent Akali from entering it for 1 − 0.625 (based on minutes) seconds, refreshing on subsequent attacks and casts.',
            values: [1, 0.625],
            basedOn: 'minutes',
            units: 'total_ad',
            unitsText: 'seconds, refreshing on subsequent attacks and casts.',
            pre: 'Declaring a basic attack or casting an ability will break the invisibility and prevent Akali from entering it for 1 − 0.625',
            post: 'seconds, refreshing on subsequent attacks and casts.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "The  marked section of Twilight Shroud will linger for the mark's duration, even after the shroud ends.",
        descriptionHTML:
          '<i>The <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Shuriken Flip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Shuriken_Flip" title="marked"><img alt="marked" src="/wiki/images/Akali_Shuriken_Flip.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Shuriken_Flip" title="Akali/LoL">marked</a></span></span> section of Twilight Shroud will linger for the mark\'s duration, even after the shroud ends.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    notes:
      '* <b>Akali</b> will also not gain the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> if she is <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recalling"><img alt="Recalling" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recalling</a></span></span>.\n<ul><li>It is possible for <b>Akali</b> to detonate the smoke bomb on the far side of terrain from her current location.</li>\n<li>The effects are applied before the cast time, and <b>Akali</b> can move during the cast time.</li></ul>',
    video: 'Akali WVideo.ogv',
  },
  'Shuriken Flip': {
    name: 'Shuriken Flip',
    display_name: 'Shuriken Flip',
    champion: 'Akali',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'AkaliE.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '825',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast range">Global</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shuriken missile width">120</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shuriken missile speed">1800</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="First and second dash speed">1500</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Active">0.<small>4</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast">0.<small>25</small></span>',
    cost: '30',
    costtype: 'energy',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">16 / 14.<small>5</small> / 13 / 11.<small>5</small> / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL" title="Akali"><img alt="Akali" src="/wiki/images/Akali_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL" title="Akali/LoL">Akali</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> backward and throws a shuriken forward that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and marks the first enemy or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Twilight Shroud" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="smoke cloud"><img alt="smoke cloud" src="/wiki/images/Akali_Twilight_Shroud.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Akali/LoL">smoke cloud</a></span></span> hit for a short time.',
      'While <i>Shuriken Flip</i> marks a target, it can be recast.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the marked target across any distance, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Shuriken Flip.png',
        description:
          'Active: Akali  flips backward and, after the cast time, throws a shuriken in the target direction that deals magic damage to the first enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">flips</a></span> backward and, after the cast time, throws a shuriken in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '30 / 56.25 / 82.5 / 108.75 / 135 (+ 25.5% AD) (+ 36% AP)',
            valuesHTML:
              '30 / 56.<small>25</small> / 82.<small>5</small> / 108.<small>75</small> / 135 <span style="color:orange; white-space:normal">(+&nbsp;25.<small>5</small>% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;36% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 56.25 / 82.5 / 108.75 / 135 (+ 25.5% AD) (+ 36% AP)',
            damagetype: 'Magic',
            values: [30, 56.25, 82.5, 108.75, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 56.25 / 82.5 / 108.75 / 135',
            children: [
              {
                values: 25.5,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 25.5% AD',
              },
              {
                values: 36,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 36% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'The shuriken marks and  reveals the enemy or the last  smoke section hit for 3 seconds, during which Shuriken Flip can be recast to consume the mark.',
        descriptionHTML:
          'The shuriken <i>marks</i> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> the enemy or the last <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Twilight Shroud" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="smoke"><img alt="smoke" src="/wiki/images/Akali_Twilight_Shroud.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Akali/LoL">smoke</a></span></span></i> section hit for 3 seconds, during which <i>Shuriken Flip</i> can be recast to consume the mark.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The shuriken marks and  reveals the enemy or the last  smoke section hit for 3 seconds, during which Shuriken Flip can be recast to consume the mark.',
            values: 3,
            units: 'kindredMarks',
            unitsText:
              'shuriken marks and  reveals the enemy or the last  smoke section hit for 3 seconds, during which Shuriken Flip can be recast to consume the mark.',
            pre: 'The shuriken marks and  reveals the enemy or the last  smoke section hit for 3 seconds, during which Shuriken Flip can be recast to consume the mark.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Shuriken Flip 2.png',
        description:
          'Recast: Akali  dashes towards the marked target or smoke section, regardless of distance. Against enemies she deals magic damage upon arrival.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> towards the marked target or smoke section, regardless of distance. Against enemies she deals <span style="color: #00B0F0; white-space:normal">magic damage</span> upon arrival.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              '70 / 131.25 / 192.5 / 253.75 / 315 (+ 59.5% AD) (+ 84% AP)',
            valuesHTML:
              '70 / 131.<small>25</small> / 192.<small>5</small> / 253.<small>75</small> / 315 <span style="color:orange; white-space:normal">(+&nbsp;59.<small>5</small>% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;84% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 131.25 / 192.5 / 253.75 / 315 (+ 59.5% AD) (+ 84% AP)',
            damagetype: 'Magic',
            values: [70, 131.25, 192.5, 253.75, 315],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 131.25 / 192.5 / 253.75 / 315',
            children: [
              {
                values: 59.5,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 59.5% AD',
              },
              {
                values: 84,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 84% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "Akali will not flip backwards if she is  immobilized or  grounded during the cast time.  Twilight Shroud and  Perfect Execution can be cast during the recast's dash.",
        descriptionHTML:
          '<i><b>Akali</b> will not flip backwards if she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilized"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> during the cast time. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Twilight Shroud" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Twilight Shroud"><img alt="Twilight Shroud" src="/wiki/images/Akali_Twilight_Shroud.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Akali/LoL">Twilight Shroud</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Perfect Execution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Perfect_Execution" title="Perfect Execution"><img alt="Perfect Execution" src="/wiki/images/Akali_Perfect_Execution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Perfect_Execution" title="Akali/LoL">Perfect Execution</a></span></span> can be cast during the recast\'s dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies, Self',
    damagetype: 'magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <b>Akali</b> will track the target if they change locations.\n<ul><li><ul><li>She will not stop tracking the target until she reaches them, as there is no maximum tracking distance.</li></ul></li>\n<li>Both casts count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.</li>\n<li><i>Shuriken Flip</i> does not interrupt <b>Akali\'s</b> previous move or attack orders.\n<ul><li>The recast does.</li></ul></li>\n<li><i>Shuriken Flip</i> cannot be recast if the target is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> or is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><b>Akali</b> will be ordered to basic attack the target after the recast\'s dash ends.</li>\n<li><b>Akali</b> will dash backwards up-to 400 units in a straight line. This dash can cross terrain if the end point is beyond it. If she would end the dash inside terrain, she will instead look for a location  in either direction left or right that is outside of terrain and dash there. If there is no such location, she will dash only up to the wall at her normal speed, ending the dash early.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>The shuriken missile will fire from wherever <b>Akali</b> is at the end of the cast time (usually mid-dash), but always towards and reaching the location that was 825 units in front of her at the start of cast. The only exception is if she moves via <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>, in which case the range of the missile is decreased relative to the distance she blinked.</li></ul></li>\n<li>Killing an enemy with the shuriken will still mark the last area of the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Twilight Shroud" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="shroud"><img alt="shroud" src="/wiki/images/Akali_Twilight_Shroud.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Akali/LoL">shroud</a></span></span> hit.</li>\n<li>Attempting to cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Five Point Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Five_Point_Strike" title="Five Point Strike"><img alt="Five Point Strike" src="/wiki/images/Akali_Five_Point_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Five_Point_Strike" title="Akali/LoL">Five Point Strike</a></span></span> during either dash will buffer it to cast as soon as the dash ends.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Twilight Shroud" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Twilight Shroud"><img alt="Twilight Shroud" src="/wiki/images/Akali_Twilight_Shroud.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Akali/LoL">Twilight Shroud</a></span></span> is usable. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Shuriken Flip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Shuriken_Flip" title="Shuriken Flip"><img alt="Shuriken Flip" src="/wiki/images/Akali_Shuriken_Flip.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Shuriken_Flip" title="Akali/LoL">Shuriken Flip</a></span></span> is disabled for 10 seconds and then interrupts. Both dashes of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Perfect Execution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Perfect_Execution" title="Perfect Execution"><img alt="Perfect Execution" src="/wiki/images/Akali_Perfect_Execution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Perfect_Execution" title="Akali/LoL">Perfect Execution</a></span></span> interrupt.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>  <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    video: 'Akali - E',
  },
  'Perfect Execution': {
    name: 'Perfect Execution',
    display_name: 'Perfect Execution',
    champion: 'Akali',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'AkaliR.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '675',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both casts dash collision, estimated">110</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial dash speed">1500</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Second dash speed">3000</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial cast">None</span> (<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="During the dash, prevents the cast of other abilities">0.<small>25</small></span>) / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast">None</span>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">100 / 90 / 80 / 70 / 60</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL" title="Akali"><img alt="Akali" src="/wiki/images/Akali_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL" title="Akali/LoL">Akali</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the direction of the target enemy champion, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies she passes through.',
      '<i>Perfect Execution</i> can be recast within a period.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Perfect Execution.png',
        description:
          'Active: Akali  dashes 750 units in the direction of the target enemy  champion, dealing magic damage to enemies she passes through. If this hits an enemy, she flips over them to continue the dash up to the normal range but for at least another 150 units.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> 750 units in the direction of the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through. If this hits an enemy, she flips over them to continue the dash up to the normal range but for at least another 150 units.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Akali  dashes 750 units in the direction of the target enemy  champion, dealing magic damage to enemies she passes through',
            damagetype: 'Magic',
            values: 7,
            user: 'none',
            units: '',
            unitsText:
              'dashes 750 units in the direction of the target enemy  champion, dealing magic damage to enemies she passes through',
            pre: 'Akali  dashes 750 units in the direction of the target enemy  champion, dealing magic damage to enemies she passes through',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If this hits an enemy, she flips over them to continue the dash up to the normal range but for at least another 150 units.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'this hits an enemy, she flips over them to continue the dash up to the normal range but for at least another 150 units.',
            pre: 'If this hits an enemy, she flips over them to continue the dash up to the normal range but for at least another 150 units.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 150 / 220 / 290 / 360 (+ 50% bonus AD) (+ 30% AP)',
            valuesHTML:
              '80 / 150 / 220 / 290 / 360 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 150 / 220 / 290 / 360 (+ 50% bonus AD) (+ 30% AP)',
            damagetype: 'Magic',
            values: [80, 150, 220, 290, 360],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 150 / 220 / 290 / 360',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
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
          'Perfect Execution can be recast after a 2.5-second static cooldown within 10 seconds of the first activation.',
        descriptionHTML:
          '<i>Perfect Execution</i> can be recast after a 2.<small>5</small>-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> within 10 seconds of the first activation.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Perfect Execution can be recast after a 2.5-second static cooldown within 10 seconds of the first activation.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'Execution can be recast after a 2.5-second static cooldown within 10 seconds of the first activation.',
            pre: 'Perfect Execution can be recast after a 2.5-second static cooldown within 10 seconds of the first activation.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Perfect Execution 2.png',
        description:
          "Recast: Akali  dashes 800 units in the target direction, dealing magic damage to enemies she passes through, increased by 0% − 200% (based on target's missing health).",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">800</span> units in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="2.86% per 1% of target\'s \'\'\'missing\'\'\' health, capped at 70% \'\'\'missing\'\'\' health" data-bot_values="0;20;40;60;80;100;120;140;160;180;200" data-top_values="0;7;14;21;28;35;42;49;56;63;70" data-bot_key="%" data-top_key="%">0% − 200% (based on target\'s <b>missing</b> health)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Recast:',
            raw: " Akali  dashes 800 units in the target direction, dealing magic damage to enemies she passes through, increased by 0% − 200% (based on target's missing health).",
            healType: 'OutgoingHeals',
            values: 8,
            valuesIsPercent: true,
            basedOn: "target's missing health",
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Akali  dashes 800 units in the target direction, dealing magic damage to enemies she passes through, increased by 0% − 200%',
            post: '.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values: '60 / 95 / 130 / 165 / 200 (+ 30% AP)',
            valuesHTML:
              '60 / 95 / 130 / 165 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 30% AP)',
            damagetype: 'Magic',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '*Both casts count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>With the first cast, <b>Akali</b> can dash up to a maximum of 900 units if the first enemy she hit was at the maximum dash range.</li>\n<li>Casting <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during either dashes will interrupt them, but <b>Akali</b> will deal damage to any enemies she comes in contact with at the new location.\n<ul><li>Enemies already hit by either of <i>Perfect Execution\'s</i> casts cannot be affected more than once by the same cast.</li></ul></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Shuriken Flip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Shuriken_Flip" title="Shuriken Flip"><img alt="Shuriken Flip" src="/wiki/images/Akali_Shuriken_Flip.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Shuriken_Flip" title="Akali/LoL">Shuriken Flip</a></span></span> can be used during the initial dash if it is cast after <b>Perfect Execution\'s</b> cast time finishes.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
