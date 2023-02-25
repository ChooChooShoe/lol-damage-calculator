import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Nami';

export default {
  'Surging Tides': {
    name: 'Surging Tides',
    display_name: 'Surging Tides',
    champion: 'Nami',
    skill: 'I',
    image: {
      full: 'NamiPassive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL" title="Nami\'s"><img alt="Nami\'s" src="/wiki/images/Nami_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL" title="Nami/LoL">Nami\'s</a></span></span> abilities grant a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> to allied champions hit. The bonus is doubled from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-ability="Tidal Wave" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL#Tidal_Wave" title="Tidal Wave"><img alt="Tidal Wave" src="/wiki/images/Nami_Tidal_Wave.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL#Tidal_Wave" title="Nami/LoL">Tidal Wave</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Surging Tides.png',
        description:
          "Innate: Nami's abilities grant  90 (+ 20% AP) bonus movement speed to allied  champions hit, decaying over 1.5 seconds. The bonus is「 doubled 」「 increased to 180 (+ 40% AP) 」from  Tidal Wave.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Nami\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> grant <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">90</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> to allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit, decaying over 1.<small>5</small> seconds. The bonus is<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;doubled&nbsp;」</span><span class="flipText2">「&nbsp;increased to <span style="color: #F5EE99; white-space:normal">180</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>&nbsp;」</span></span>from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-ability="Tidal Wave" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL#Tidal_Wave" title="Tidal Wave"><img alt="Tidal Wave" src="/wiki/images/Nami_Tidal_Wave.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL#Tidal_Wave" title="Nami/LoL">Tidal Wave</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: " Nami's abilities grant  90 (+ 20% AP) bonus movement speed to allied  champions hit, decaying over 1.5 seconds",
            values: 9,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed to allied  champions hit, decaying over 1.5 seconds',
            pre: "Nami's abilities grant  90",
            post: 'bonus movement speed to allied  champions hit, decaying over 1.5 seconds',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The bonus is「 doubled 」「 increased to 180 (+ 40% AP) 」from  Tidal Wave.',
            damagetype: 'None',
            values: 1,
            user: 'none',
            units: '',
            unitsText: '」from  Tidal Wave.',
            pre: 'The bonus is「 doubled 」「 increased to 180',
            post: '」from  Tidal Wave.',
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
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Allies',
    notes: '* No additional notes',
  },
  'Aqua Prison': {
    name: 'Aqua Prison',
    display_name: 'Aqua Prison',
    champion: 'Nami',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'NamiQ.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '850*',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effect radius for enemies">200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effect radius for Surging Tides on allies, could also be 160 + edge radius, this is pending for test">225</span>',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL" title="Nami"><img alt="Nami" src="/wiki/images/Nami_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL" title="Nami/LoL">Nami</a></span></span> tosses a bubble that lands at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within as well as briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suspension"><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control">suspending</a></span> them.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suspension"><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Suspension</span></b></span> The target is stunned, but also marked as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>. Suspension can be reduced by <span style="white-space:nowrap"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;Tenacity</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Aqua Prison.png',
        description:
          'Active: Nami launches a bubble at the target location that lands after 0.726 seconds, dealing magic damage to enemies hit and  suspending them for 1.5 seconds, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nami</b> launches a bubble at the target location that lands <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="after the cast time ends">after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.7 seconds, but rounded up to the next game tick.">0.<small>726</small> seconds</span></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suspension"><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control">suspending</a></span> them for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 130 / 185 / 240 / 295 (+ 50% AP)',
            valuesHTML:
              '75 / 130 / 185 / 240 / 295 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 130 / 185 / 240 / 295 (+ 50% AP)',
            damagetype: 'Magic',
            values: [75, 130, 185, 240, 295],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 130 / 185 / 240 / 295',
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
        ],
      },
      {
        description:
          'Allied champions are granted  Surging Tides in a slightly larger area.',
        descriptionHTML:
          '<i>Allied champions are granted <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-ability="Surging Tides" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL#Surging_Tides" title="Surging Tides"><img alt="Surging Tides" src="/wiki/images/Nami_Surging_Tides.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL#Surging_Tides" title="Nami/LoL">Surging Tides</a></span></span> in a slightly larger area.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The combined time from the start of the cast time to the bubble landing is <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> + <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.7 seconds, but rounded up to the next game tick.">0.<small>726</small> seconds</span> = 0.99 seconds.\n<ul><li><i>Aqua Prison</i> provides the status effect that allows <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Last Breath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Last Breath"><img alt="Last Breath" src="/wiki/images/Yasuo_Last_Breath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Yasuo/LoL">Last Breath</a></span></span> to be cast.<sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup></li></ul>',
  },
  'Ebb and Flow': {
    name: 'Ebb and Flow',
    display_name: 'Ebb and Flow',
    champion: 'Nami',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'NamiW.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '725',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bounce range">800</span>',
    cast_time: '0.<small>25</small>',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'mana',
    cooldown: '10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL" title="Nami"><img alt="Nami" src="/wiki/images/Nami_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL" title="Nami/LoL">Nami</a></span></span> unleashes a stream of water onto the target champion or herself, which then bounces to nearby champions up to twice, alternating between enemies and allies and Nami.',
      '<i>Ebb and Flow</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> allies and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies, with subsequent bounces becoming less potent.',
    ],
    description: [
      {
        icon: '/wiki/images/Ebb and Flow.png',
        description:
          'Active: Nami unleashes a stream of water onto the target champion or herself, which then bounces to nearby unaffected champions up to twice, alternating between enemies and allies and Nami.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nami</b> unleashes a stream of water onto the target champion or herself, which then bounces to nearby unaffected champions up to twice, alternating between enemies and allies and <b>Nami</b>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Ebb and Flow  heals allies and deals magic damage to enemies, with each bounce modifying the effectiveness of the next by -15% (+ 7.5% per 100 AP).',
        descriptionHTML:
          '<i>Ebb and Flow</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> allies and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies, with each bounce modifying the effectiveness of the next by -15% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7.<small>5</small>% per 100 AP)</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Ebb and Flow  heals allies and deals magic damage to enemies, with each bounce modifying the effectiveness of the next by -15% (+ 7.5% per 100 AP).',
            healType: 'DrainEffect',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Ebb and Flow  heals allies and deals magic damage to enemies, with each bounce modifying the effectiveness of the next by -15%',
            post: '.',
            children: [
              {
                values: 7.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 7.5% per 100 AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Heal:',
            values: '55 / 75 / 95 / 115 / 135 (+ 25% AP)',
            valuesHTML:
              '55 / 75 / 95 / 115 / 135 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
          {
            name: 'Magic Damage:',
            values: '60 / 100 / 140 / 180 / 220 (+ 55% AP)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '55 / 75 / 95 / 115 / 135 (+ 25% AP)',
            healType: 'DrainEffect',
            values: [55, 75, 95, 115, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 75 / 95 / 115 / 135',
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
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 55% AP)',
            damagetype: 'Magic',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
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
    ],
    targeting: 'Unit',
    affects: 'Enemies, Allies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* If cast on an enemy with a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> they will not take damage but <i>Ebb and Flow</i> will still continue to bounce, and the target who blocked the ability may be targeted again by the final bounce.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  "Tidecaller's Blessing": {
    name: "Tidecaller's Blessing",
    display_name: "Tidecaller's Blessing",
    champion: 'Nami',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'NamiE.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '800',
    cast_time: 'none',
    cost: '55 / 60 / 65 / 70 / 75',
    costtype: 'mana',
    cooldown: '11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL" title="Nami"><img alt="Nami" src="/wiki/images/Nami_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL" title="Nami/LoL">Nami</a></span></span> blesses herself or the target allied champion for a few seconds, causing the target\'s next three basic attacks or abilities to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.',
    ],
    description: [
      {
        icon: "/wiki/images/Tidecaller's Blessing.png",
        description:
          "Active: Nami blesses herself or the target allied champion for 6 seconds, empowering the target's next 3 basic attacks or abilities to each deal bonus magic damage and  slow their target for 1 second.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nami</b> blesses herself or the target allied champion for 6 seconds, empowering the target\'s next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> or <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> to each deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> their target for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: " Nami blesses herself or the target allied champion for 6 seconds, empowering the target's next 3 basic attacks or abilities to each deal bonus magic damage and  slow their target for 1 second.",
            damagetype: 'Magic',
            values: 6,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              "blesses herself or the target allied champion for 6 seconds, empowering the target's next 3 basic attacks or abilities to each deal bonus magic damage and  slow their target for 1 second.",
            pre: "Nami blesses herself or the target allied champion for 6 seconds, empowering the target's next 3 basic attacks or abilities to each deal bonus magic damage and  slow their target for 1 second.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage Per Hit:',
            values: '20 / 35 / 50 / 65 / 80 (+ 20% AP)',
            valuesHTML:
              '20 / 35 / 50 / 65 / 80 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '15 / 20 / 25 / 30 / 35% (+ 5% per 100 AP)',
            valuesHTML:
              '15 / 20 / 25 / 30 / 35% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% per 100 AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage Per Hit:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 20% AP)',
            damagetype: 'Magic',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Slow:',
            raw: '15 / 20 / 25 / 30 / 35% (+ 5% per 100 AP)',
            damagetype: 'None',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 5% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Empowered abilities that apply  area damage only deal 33% − 66% (based on level) of the bonus damage to non-champions.',
        descriptionHTML:
          'Empowered abilities that apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> only deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="33;" data-finish="66;" data-bot_values="33;34.94;36.88;38.82;40.76;42.71;44.65;46.59;48.53;50.47;52.41;54.35;56.29;58.24;60.18;62.12;64.06;66" data-top_values="" data-bot_key="%">33% − 66% (based on level)</span> of the <b>bonus</b> damage to non-champions.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Empowered abilities that apply  area damage only deal 33% − 66% (based on level) of the bonus damage to non-champions.',
            damagetype: 'None',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'of the bonus damage to non-champions.',
            pre: 'Empowered abilities that apply  area damage only deal 33% − 66%',
            post: 'of the bonus damage to non-champions.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Allies',
    damagetype: 'Magic',
    spelleffects: 'proc',
    spellshield: false,
    notes:
      '* The enhanced attacks will apply other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal (the <b>bonus</b> damage does not).\n<ul><li>The <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> benefits from the allied target\'s <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:turquoise; white-space:normal">magic penetration</span></span>, not <b>Nami\'s</b>.</li>\n<li>The effect will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li>\n<li>Damage instances of <i>Tidecaller\'s Blessing</i> beyond the first do not count as separate applications for the purposes of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span> and <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Phase Rush" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Phase_Rush_(Rune)" title="Phase Rush"><img alt="Phase Rush" src="/wiki/images/Phase_Rush_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Phase_Rush_(Rune)" class="mw-redirect" title="Phase Rush (Rune)">Phase Rush</a></span></span>.</li>\n<li>Allies with the buff can both apply and trigger <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Imperial Mandate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Imperial_Mandate" title="Imperial Mandate\'s"><img alt="Imperial Mandate\'s" src="/wiki/images/Imperial_Mandate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Imperial_Mandate" title="Imperial Mandate">Imperial Mandate\'s</a></span></span> <a href="/wiki/Named_item_effect#Coordinated_Fire" title="Named item effect">Coordinated Fire</a> if <b>Nami</b> has the item.</li></ul>',
  },
  'Tidal Wave': {
    name: 'Tidal Wave',
    display_name: 'Tidal Wave',
    champion: 'Nami',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'NamiR.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '2750',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="vision radius">750</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 500',
    speed: '850',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '120 / 110 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL" title="Nami"><img alt="Nami" src="/wiki/images/Nami_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL" title="Nami/LoL">Nami</a></span></span> surges a tidal wave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly knocks up enemies hit. The wave also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies based on the distance traveled.',
    ],
    description: [
      {
        icon: '/wiki/images/Tidal Wave.png',
        description:
          'Active: Nami surges a tidal wave in the target direction, granting  sight around its trajectory as it travels, dealing magic damage to enemies hit,  knocking them up for 0.5 seconds, and  slowing them for 2 − 4 (based on distance traveled) seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nami</b> surges a tidal wave in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its trajectory as it travels, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>5</small></span> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-displayformula="\'\'Capped at 2750 range.\'\'" data-bot_values="2;2.2;2.4;2.6;2.8;3;3.2;3.4;3.6;3.8;4" data-top_values="0;275;550;825;1100;1375;1650;1925;2200;2475;2750">2 − 4 (based on distance traveled)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Nami surges a tidal wave in the target direction, granting  sight around its trajectory as it travels, dealing magic damage to enemies hit,  knocking them up for 0.5 seconds, and  slowing them for 2 − 4 (based on distance traveled) seconds.',
            values: [0, 4],
            basedOn: 'distance traveled',
            user: 'none',
            units: '',
            unitsText: 'seconds.',
            pre: 'Nami surges a tidal wave in the target direction, granting  sight around its trajectory as it travels, dealing magic damage to enemies hit,  knocking them up for 0.5 seconds, and  slowing them for 2 − 4',
            post: 'seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 250 / 350 (+ 60% AP)',
            valuesHTML:
              '150 / 250 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '50 / 60 / 70%',
            valuesHTML: '50 / 60 / 70%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 250 / 350 (+ 60% AP)',
            damagetype: 'Magic',
            values: [150, 250, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 250 / 350',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '50 / 60 / 70%',
            values: [50, 60, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><ul><li>Despite the visuals, <i>Tidal Wave</i> spawns at <b>Nami\'s</b> center, not at an offset behind her.</li></ul></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-ability="Surging Tides" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL#Surging_Tides" title="Surging Tides"><img alt="Surging Tides" src="/wiki/images/Nami_Surging_Tides.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL#Surging_Tides" title="Nami/LoL">Surging Tides</a></span></span> will trigger immediately on <b>Nami</b> on-cast.</li>\n<li>The wave travels over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="3.2353 seconds, but rounded up to the next game tick.">3.<small>267</small> seconds</span>.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Nami_Original_R_5.ogg   "Oceans, spill forth!"',
  },
} satisfies { [skillName in string]: SkillData };
