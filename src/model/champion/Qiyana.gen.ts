import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Qiyana';

export default {
  'Royal Privilege': {
    name: 'Royal Privilege',
    display_name: 'Royal Privilege',
    champion: 'Qiyana',
    skill: 'I',
    image: {
      full: 'Qiyana_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    ontargetcdstatic: '25',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL" title="Qiyana\'s"><img alt="Qiyana\'s" src="/wiki/images/Qiyana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL" title="Qiyana/LoL">Qiyana\'s</a></span></span> basic attacks and basic abilities deal <span style="color: #FF8C34; white-space:normal"><b>additional</b> physical damage</span>.',
      'This effect cannot recur on the same target for a period of time. Gathering an <span style="color: #AF1AAF; white-space:normal">Element</span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Terrashape"><img alt="Terrashape" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Terrashape</a></span></span></i> will <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span> the cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Royal Privilege.png',
        description:
          "Innate: Qiyana's basic attacks and basic abilities deal 15 − 83 (based on level) (+ 30% bonus AD) (+ 30% AP) additional physical damage. This effect cannot occur on the same target more than once every few seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Qiyana\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">basic abilities</a> deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#FF8C34;" data-start="15;" data-finish="83;" data-bot_values="15;19;23;27;31;35;39;43;47;51;55;59;63;67;71;75;79;83" data-top_values="">15 − 83 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;30% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color: #FF8C34; white-space:normal"><b>additional</b> physical damage</span>. <br><br>This effect cannot occur on the same target more than once every few seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: " Qiyana's basic attacks and basic abilities deal 15 − 83 (based on level) (+ 30% bonus AD) (+ 30% AP) additional physical damage",
            damagetype: 'Physical',
            values: [
              15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75,
              79, 83,
            ],
            basedOn: 'level',
            units: 'total_ad',
            unitsText: 'additional physical damage',
            pre: "Qiyana's basic attacks and basic abilities deal 15 − 83",
            post: 'additional physical damage',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
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
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Gathering an Element with  Terrashape resets Royal Privilege's per-target  cooldown for enemies affected by Royal Privilege using a different Element (or no Element).",
        descriptionHTML:
          'Gathering an <span style="color: #AF1AAF; white-space:normal">Element</span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Terrashape"><img alt="Terrashape" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Terrashape</a></span></span></i> resets <i>Royal Privilege\'s</i> per-target <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> for enemies affected by <i>Royal Privilege</i> using a different <span style="color: #AF1AAF; white-space:normal">Element</span> (or no <span style="color: #AF1AAF; white-space:normal">Element</span>).',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Gathering an Element with  Terrashape resets Royal Privilege's per-target  cooldown for enemies affected by Royal Privilege using a different Element (or no Element).",
            damagetype: 'None',
            values: 0,
            user: 'none',
            units: '',
            unitsText: '.',
            pre: "Gathering an Element with  Terrashape resets Royal Privilege's per-target  cooldown for enemies affected by Royal Privilege using a different Element",
            post: '.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'or no Element',
                pre: 'or no Element',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'proc',
    notes:
      '* <i>Royal Privilege\'s</i> trigger from a basic attack can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> (bonus damage is negated and the on-target cooldown does not apply).\n<ul><li><i>Royal Privilege</i> will not apply a cooldown to targets that are hit with an <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Elemental Wrath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Elemental_Wrath" title="Elemental Wrath"><img alt="Elemental Wrath" src="/wiki/images/Qiyana_Edge_of_Ixtal_Rock.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Elemental_Wrath" title="Qiyana/LoL">Elemental Wrath</a></span></span> that has a different <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Element"><img alt="Element" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Element</a></span></span> than the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Element"><img alt="Element" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Element</a></span></span> <b>Qiyana</b> currently holds.\n<ul><li>This does not occur if a new <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Elemental Wrath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Elemental_Wrath" title="Elemental Wrath"><img alt="Elemental Wrath" src="/wiki/images/Qiyana_Edge_of_Ixtal_Rock.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Elemental_Wrath" title="Qiyana/LoL">Elemental Wrath</a></span></span> with a different <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Element"><img alt="Element" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Element</a></span></span> is cast before the first one lands.</li></ul></li>\n<li>The effect will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Royal Privilege\'s</i> interaction with <i>parrying</i> effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li></ul>',
    yvideo: 'Qiyana - Passive',
  },
  'Edge of Ixtal': {
    name: 'Edge of Ixtal',
    display_name: 'Edge of Ixtal',
    champion: 'Qiyana',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'QiyanaQ.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '525 / -40',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rectangle width">140</span>',
    cast_time: '0.<small>25</small>',
    cost: '35',
    costtype: 'mana',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL" title="Qiyana"><img alt="Qiyana" src="/wiki/images/Qiyana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL" title="Qiyana/LoL">Qiyana</a></span></span> slashes forward in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit in a line.',
      'Gathering an <span style="color: #AF1AAF; white-space:normal">Element</span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Terrashape"><img alt="Terrashape" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Terrashape</a></span></span></i> will <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span> the cooldown and upgrades <i>Edge of Ixtal</i> into <i>Elemental Wrath</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Edge of Ixtal.png',
        description:
          'Active: Qiyana slashes forward in the target direction, dealing physical damage to enemies in a line, reduced to 75% damage against targets beyond the first. Edge of Ixtal deals 150% damage against  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> slashes forward in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies in a line, reduced to 75% damage against targets beyond the first. <i>Edge of Ixtal</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Qiyana slashes forward in the target direction, dealing physical damage to enemies in a line, reduced to 75% damage against targets beyond the first',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage against targets beyond the firstslashes forward in the target direction, dealing physical damage to enemies in a line, reduced to 75',
            pre: 'Qiyana slashes forward in the target direction, dealing physical damage to enemies in a line, reduced to 75% damage against targets beyond the first',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Edge of Ixtal deals 150% damage against  monsters.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage against  monsters.of Ixtal deals 150',
            pre: 'Edge of Ixtal deals 150% damage against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '50 / 80 / 110 / 140 / 170 (+ 75% bonus AD)',
            valuesHTML:
              '50 / 80 / 110 / 140 / 170 <span style="color:orange; white-space:normal">(+&nbsp;75% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 75% bonus AD)',
            damagetype: 'Physical',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          "Gathering an Element with  Terrashape resets Edge of Ixtal's  cooldown and upgrades it into Elemental Wrath.",
        descriptionHTML:
          'Gathering an <span style="color: #AF1AAF; white-space:normal">Element</span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Terrashape"><img alt="Terrashape" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Terrashape</a></span></span></i> resets <i>Edge of Ixtal\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and upgrades it into <i>Elemental Wrath</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "If cast during  Audacity's dash towards an enemy  champion and the target is within 150 units of Qiyana at the end of the dash, Edge of Ixtal will autonomously aim at the target.",
        descriptionHTML:
          'If cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Audacity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Audacity" title="Audacity\'s"><img alt="Audacity\'s" src="/wiki/images/Qiyana_Audacity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Audacity" title="Qiyana/LoL">Audacity\'s</a></span></span></i> dash towards an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and the target is within 150 units of <b>Qiyana</b> at the end of the dash, <i>Edge of Ixtal</i> will autonomously aim at the target.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "If cast during  Audacity's dash towards an enemy  champion and the target is within 150 units of Qiyana at the end of the dash, Edge of Ixtal will autonomously aim at the target.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "cast during  Audacity's dash towards an enemy  champion and the target is within 150 units of Qiyana at the end of the dash, Edge of Ixtal will autonomously aim at the target.",
            pre: "If cast during  Audacity's dash towards an enemy  champion and the target is within 150 units of Qiyana at the end of the dash, Edge of Ixtal will autonomously aim at the target.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'False',
    notes:
      '* If cast during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Audacity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Audacity" title="Audacity"><img alt="Audacity" src="/wiki/images/Qiyana_Audacity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Audacity" title="Qiyana/LoL">Audacity</a></span></span> and the target uses a dash or blink or is no longer in vision, <i>Edge of Ixtal</i> will aim at the target\'s last location prior to them starting the dash or blink or being in vision.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    yvideo: 'Qiyana - Q',
  },
  'Elemental Wrath': {
    name: 'Elemental Wrath',
    display_name: 'Elemental Wrath',
    champion: 'Qiyana',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'QiyanaQ.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '865 / -50',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial sidewards check">250</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Hurl missile and explosion missile width">200</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Hurl missile speed">1600</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Explosion missile speed">2000</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL" title="Qiyana"><img alt="Qiyana" src="/wiki/images/Qiyana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL" title="Qiyana/LoL">Qiyana</a></span></span> hurls her blade in the target direction that blasts in a line upon hitting an enemy or max range, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, reduced against enemies beyond the closest. This consumes the current <span style="color: #AF1AAF; white-space:normal">Element</span> to empower the blade with an additional effect.\n<ul><li><span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span>:</b></span> The blade creates a grass field around <b>Qiyana</b> that lasts a short time, granting her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> until she attacks or exits the field.</li>\n<li><span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span>:</b></span> The blast briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> enemies hit, then briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them.</li>\n<li><span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span>:</b></span> The blast deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><b>bonus</b> damage</span> against enemies <span style="color: #1F995C; white-space:normal">below half health</span>.</li></ul>',
    ],
    description: [
      {
        icon: '/wiki/images/Qiyana Elemental Wrath.gif',
        description:
          'Active: Qiyana hurls her blade in the target direction that blasts in a line upon hitting an enemy or maximum range, consuming the current Element to empower the blade with an additional effect.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> hurls her blade in the target direction that blasts in a line upon hitting an enemy or maximum range, consuming the current <span style="color: #AF1AAF; white-space:normal">Element</span> to empower the blade with an additional effect.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Enemies hit are dealt Edge of Ixtal's damage, reduced to 75% against subsequent enemies beyond the closest. Elemental Wrath deals 150% damage against  monsters.",
        descriptionHTML:
          'Enemies hit are dealt <i>Edge of Ixtal\'s</i> damage, reduced to 75% against subsequent enemies beyond the closest. <i>Elemental Wrath</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Enemies hit are dealt Edge of Ixtal's damage, reduced to 75% against subsequent enemies beyond the closest",
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "against subsequent enemies beyond the closesthit are dealt Edge of Ixtal's damage, reduced to 75",
            pre: "Enemies hit are dealt Edge of Ixtal's damage, reduced to 75% against subsequent enemies beyond the closest",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Elemental Wrath deals 150% damage against  monsters.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage against  monsters.Wrath deals 150',
            pre: 'Elemental Wrath deals 150% damage against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '50 / 80 / 110 / 140 / 170 (+ 75% bonus AD)',
            valuesHTML:
              '50 / 80 / 110 / 140 / 170 <span style="color:orange; white-space:normal">(+&nbsp;75% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 75% bonus AD)',
            damagetype: 'Physical',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Qiyana Terrashape Brush.png',
        description:
          'Brush: The blade creates a grass field around Qiyana that lasts for up to 3 seconds, granting her  invisibility and  20% bonus movement speed until she attacks, casts an ability other than  Terrashape, or exits the field.',
        descriptionHTML:
          '<span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span>:</b></span> The blade creates a grass field around <b>Qiyana</b> that lasts for up to 3 seconds, granting her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span> until she attacks, casts an ability other than <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Terrashape"><img alt="Terrashape" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Terrashape</a></span></span></i>, or exits the field.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Brush:',
            raw: ' The blade creates a grass field around Qiyana that lasts for up to 3 seconds, granting her  invisibility and  20% bonus movement speed until she attacks, casts an ability other than  Terrashape, or exits the field.',
            increasedStat: 'total_ap',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus movement speed until she attacks, casts an ability other than  Terrashape, or exits the field.blade creates a grass field around Qiyana that lasts for up to 3 seconds, granting her  invisibility and  20',
            pre: 'The blade creates a grass field around Qiyana that lasts for up to 3 seconds, granting her  invisibility and  20% bonus movement speed until she attacks, casts an ability other than  Terrashape, or exits the field.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Qiyana Terrashape River.png',
        description:
          'River: The blast  roots enemies hit for 0.5 seconds, then  slows them by 20% for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span>:</b></span> The blast <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> enemies hit for 0.<small>5</small> seconds, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 20% for 1 second.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Qiyana Terrashape Rock.png',
        description:
          'Terrain: The blast deals  60% increased damage against enemies below 50% of their maximum health.',
        descriptionHTML:
          '<span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span>:</b></span> The blast deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">60% increased damage</span> against enemies below <span style="color: #1F995C; white-space:normal">50% of their <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Terrain:',
            raw: ' The blast deals  60% increased damage against enemies below 50% of their maximum health.',
            healType: 'BonusHealth',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'increased damage against enemies below 50blast deals  60',
            pre: 'The blast deals  60% increased damage against enemies below 50% of their maximum health.',
          },
        ],
        leveling: [
          {
            name: 'Increased Damage:',
            values: '80 / 128 / 176 / 224 / 272 (+ 120% bonus AD)',
            valuesHTML:
              '80 / 128 / 176 / 224 / 272 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '80 / 128 / 176 / 224 / 272 (+ 120% bonus AD)',
            damagetype: 'None',
            values: [80, 128, 176, 224, 272],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 128 / 176 / 224 / 272',
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
    ],
    targeting: 'Direction',
    affects: 'Enemies, Self',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'true',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
    yvideo: 'Qiyana - Q',
  },
  Terrashape: {
    name: 'Terrashape',
    display_name: 'Terrashape',
    champion: 'Qiyana',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'QiyanaW.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Element targeting range">366</span>',
    speed:
      '440 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span>',
    cast_time: 'none',
    cost: '25 / 30 / 35 / 40 / 45',
    costtype: 'mana',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> While holding an <span style="color: #AF1AAF; white-space:normal">Element</span>, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL" title="Qiyana"><img alt="Qiyana" src="/wiki/images/Qiyana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL" title="Qiyana/LoL">Qiyana</a></span></span> gains <b>bonus</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>, as well as <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> on her basic attacks and basic abilities. <b>Qiyana</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> speed while moving near the current <span style="color: #AF1AAF; white-space:normal">Element</span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction to gather the <span style="color: #AF1AAF; white-space:normal">Element</span> of the nearest <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape Brush.png" src="/wiki/images/Qiyana_Terrashape_Brush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span></b></span>, <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape River.png" src="/wiki/images/Qiyana_Terrashape_River.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span></b></span> or <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape Rock.png" src="/wiki/images/Qiyana_Terrashape_Rock.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span> she targeted.',
    ],
    description: [
      {
        description:
          'Passive: While holding an Element, Qiyana gains  bonus attack speed,  25 bonus attack range and bonus magic damage on her basic attacks  on-hit and basic abilities. While out-of-combat and moving near the Element currently being held, she gains  bonus movement speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> While holding an <span style="color: #AF1AAF; white-space:normal">Element</span>, <b>Qiyana</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> attack range</span> and <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> on her basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and basic abilities. While <a href="/wiki/Combat_status" title="Combat status">out-of-combat</a> and moving near the <span style="color: #AF1AAF; white-space:normal">Element</span> currently being held, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: ' While holding an Element, Qiyana gains  bonus attack speed,  25 bonus attack range and bonus magic damage on her basic attacks  on-hit and basic abilities',
            increasedStat: 'bonus_ad',
            values: 2,
            units: '',
            unitsText:
              'holding an Element, Qiyana gains  bonus attack speed,  25 bonus attack range and bonus magic damage on her basic attacks  on-hit and basic abilities',
            pre: 'While holding an Element, Qiyana gains  bonus attack speed,  25 bonus attack range and bonus magic damage on her basic attacks  on-hit and basic abilities',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '5 / 10 / 15 / 20 / 25%',
            valuesHTML: '5 / 10 / 15 / 20 / 25%',
          },
          {
            name: 'Bonus Magic Damage:',
            values: '8 / 22 / 36 / 50 / 64 (+ 10% bonus AD) (+ 45% AP)',
            valuesHTML:
              '8 / 22 / 36 / 50 / 64 <span style="color:orange; white-space:normal">(+&nbsp;10% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '3 / 5 / 7 / 9 / 11%',
            valuesHTML: '3 / 5 / 7 / 9 / 11%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '5 / 10 / 15 / 20 / 25%',
            values: [5, 10, 15, 20, 25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '8 / 22 / 36 / 50 / 64 (+ 10% bonus AD) (+ 45% AP)',
            damagetype: 'Magic',
            values: [8, 22, 36, 50, 64],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 22 / 36 / 50 / 64',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 10% bonus AD',
              },
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '3 / 5 / 7 / 9 / 11%',
            values: [3, 5, 7, 9, 11],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 5 / 7 / 9 / 11%',
          },
        ],
      },
      {
        icon: '/wiki/images/Terrashape.png',
        description:
          'Active: Qiyana  dashes up to 300 units towards the target location to gather the Element of the nearest  Brush,  River or  Terrain she targeted.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> up to 300 units towards the target location to gather the <span style="color: #AF1AAF; white-space:normal">Element</span> of the nearest <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape Brush.png" src="/wiki/images/Qiyana_Terrashape_Brush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span></b></span>, <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape River.png" src="/wiki/images/Qiyana_Terrashape_River.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span></b></span> or <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape Rock.png" src="/wiki/images/Qiyana_Terrashape_Rock.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span> she targeted.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Qiyana  dashes up to 300 units towards the target location to gather the Element of the nearest  Brush,  River or  Terrain she targeted.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'dashes up to 300 units towards the target location to gather the Element of the nearest  Brush,  River or  Terrain she targeted.',
            pre: 'Qiyana  dashes up to 300 units towards the target location to gather the Element of the nearest  Brush,  River or  Terrain she targeted.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'A target Element is required to cast this ability.',
        descriptionHTML:
          '<i>A target Element is required to cast this ability</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Once Terrashape has been learned, Qiyana is automatically given the  Terrain element upon respawning.',
        descriptionHTML:
          'Once <i>Terrashape</i> has been learned, <b>Qiyana</b> is automatically given the <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape Rock.png" src="/wiki/images/Qiyana_Terrashape_Rock.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span> element upon <a href="/wiki/Death" title="Death">respawning</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Qiyana can cast any of her abilities during the dash.',
        descriptionHTML:
          '<i><b>Qiyana</b> can cast any of her abilities during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self',
    damagetype: 'proc',
    notes:
      '* <i>Terrashape</i> does not interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.\n<ul><li>The water puddles formed by the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ocean_Drake" title="Ocean Rift"><img alt="Ocean Rift" src="/wiki/images/Ocean_DrakeSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ocean_Drake" title="Ocean Drake">Ocean Rift</a></span></span> on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Summoner\'s rift"><a href="/wiki/Summoner%27s_Rift_(League_of_Legends)" title="Summoner\'s Rift (League of Legends)"><img alt="Summoner\'s Rift icon.png" src="/wiki/images/Summoner%27s_Rift_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Summoner%27s_Rift_(League_of_Legends)" title="Summoner\'s Rift (League of Legends)">Summoner\'s Rift</a></span> count as valid terrain for obtaining the <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape River.png" src="/wiki/images/Qiyana_Terrashape_River.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span></b></span> element.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brushes</a></span> grown by <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ivern" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ivern/LoL" title="Ivern\'s"><img alt="Ivern\'s" src="/wiki/images/Ivern_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ivern/LoL" title="Ivern/LoL">Ivern\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ivern" data-ability="Brushmaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ivern/LoL#Brushmaker" title="Brushmaker"><img alt="Brushmaker" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ivern/LoL#Brushmaker" title="Ivern/LoL">Brushmaker</a></span></span></span> count for gathering the <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape Brush.png" src="/wiki/images/Qiyana_Terrashape_Brush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span></b></span> element.</li>\n<li>Passive bonus damage from basic attacks can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li>\n<li>The passive damage works with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade\'s"><img alt="Guinsoo\'s Rageblade\'s" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade\'s</a></span></span> <i>Phantom Hit</i>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Passive bonus damage interaction with <i>parrying</i> effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li></ul>',
    yvideo: 'Qiyana - W',
  },
  Audacity: {
    name: 'Audacity',
    display_name: 'Audacity',
    champion: 'Qiyana',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'QiyanaE.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '650',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Capped at 1200">600 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span></span>',
    cast_time: 'none',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL" title="Qiyana"><img alt="Qiyana" src="/wiki/images/Qiyana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL" title="Qiyana/LoL">Qiyana</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward the target enemy and deals <span style="color: #FF8C34; white-space:normal">physical damage</span> upon arrival.',
    ],
    description: [
      {
        icon: '/wiki/images/Audacity.png',
        description:
          'Active: Qiyana  dashes a fixed distance in the direction of the target enemy. If they are in range upon arrival, she deals physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target enemy. If they are in range upon arrival, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '50 / 90 / 130 / 170 / 210 (+ 50% bonus AD)',
            valuesHTML:
              '50 / 90 / 130 / 170 / 210 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 90 / 130 / 170 / 210 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [50, 90, 130, 170, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 90 / 130 / 170 / 210',
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
        description: 'Qiyana can cast any of her abilities during the dash.',
        descriptionHTML:
          '<i><b>Qiyana</b> can cast any of her abilities during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies, Self',
    damagetype: 'physical',
    spelleffects: 'Single',
    spellshield: true,
    notes:
      '* <i>Audacity</i> only damages targets if within 250 range upon completion of the dash.',
    yvideo: 'Qiyana - E',
  },
  'Supreme Display of Talent': {
    name: 'Supreme Display of Talent',
    display_name: 'Supreme Display of Talent',
    champion: 'Qiyana',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'QiyanaR.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '875',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Border limit">11000</span>',
    width:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Windblast">280</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Terrain Shockwave">120</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Windblast">2000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shockwave">2840</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '120',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL" title="Qiyana"><img alt="Qiyana" src="/wiki/images/Qiyana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL" title="Qiyana/LoL">Qiyana</a></span></span> sweeps a windblast in the target direction that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> enemies hit and stops upon hitting <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span>.',
      'The windblast creates a cascading shockwave across any <span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span></b></span> or <span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span></b></span> it passes, as well as around the borders of <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span> it hits. The shockwave briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> enemies hit and deals <span style="color: #FF8C34; white-space:normal">physical damage</span> based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Supreme Display of Talent.png',
        description:
          'Active: Qiyana sweeps a windblast in the target direction that  knocks back enemies hit, though not through terrain, and stops upon hitting Terrain.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> sweeps a windblast in the target direction that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> enemies hit, though not through terrain, and stops upon hitting <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "The windblast creates a cascading shockwave across any River or Brush it passes through, as well as around the borders of Terrain it reaches, dealing physical damage to enemies hit,  stunning them for 0.5 − 1 (based on proximity) seconds, and briefly granting  sight of the area along its path. The damage based on the target's health ratio is capped against  monsters.",
        descriptionHTML:
          'The windblast creates a cascading shockwave across any <span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span></b></span> or <span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span></b></span> it passes through, as well as around the borders of <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span> it reaches, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="proximity" data-bot_values="0.5;1" data-top_values="0;X">0.<small>5</small> − 1 (based on proximity)</span> seconds, and briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area along its path. The damage based on the target\'s health ratio is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The windblast creates a cascading shockwave across any River or Brush it passes through, as well as around the borders of Terrain it reaches, dealing physical damage to enemies hit,  stunning them for 0.5 − 1 (based on proximity) seconds, and briefly granting  sight of the area along its path',
            values: [0, 1],
            basedOn: 'proximity',
            user: 'none',
            units: '',
            unitsText:
              'seconds, and briefly granting  sight of the area along its path',
            pre: 'The windblast creates a cascading shockwave across any River or Brush it passes through, as well as around the borders of Terrain it reaches, dealing physical damage to enemies hit,  stunning them for 0.5 − 1',
            post: 'seconds, and briefly granting  sight of the area along its path',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              "100 / 150 / 200 / 250 / 300 (+ 170% bonus AD) (+ 10% of target's maximum health)",
            valuesHTML:
              '100 / 150 / 200 / 250 / 300 <span style="color:orange; white-space:normal">(+&nbsp;170% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;10% of target\'s <b>maximum</b> health)</span>',
          },
          {
            name: 'Capped Monster Health Damage:',
            values: '500 / 625 / 750 / 875 / 1000',
            valuesHTML: '500 / 625 / 750 / 875 / 1000',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "100 / 150 / 200 / 250 / 300 (+ 170% bonus AD) (+ 10% of target's maximum health)",
            healType: 'PhysicalVamp',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
            children: [
              {
                values: 170,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 170% bonus AD',
              },
              {
                values: 10,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 10% of target's maximum health",
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Capped Monster Health Damage:',
            raw: '500 / 625 / 750 / 875 / 1000',
            healType: 'BonusHealth',
            values: [500, 625, 750, 875, 1000],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '500 / 625 / 750 / 875 / 1000',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies, Terrain',
    damagetype: 'physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'special',
    notes:
      '* The windblast needs only to reach near terrain to trigger the terrain shockwave.\n<ul><li>The shockwave grants sight along each part of its path for 0.<small>75</small> seconds.</li>\n<li>Artificial terrain (e.g, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL" title="Anivia\'s"><img alt="Anivia\'s" src="/wiki/images/Anivia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL" title="Anivia/LoL">Anivia\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Crystallize" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Crystallize" title="Crystallize"><img alt="Crystallize" src="/wiki/images/Anivia_Crystallize.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Crystallize" title="Anivia/LoL">Crystallize</a></span></span></span>, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taliyah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taliyah/LoL" title="Taliyah\'s"><img alt="Taliyah\'s" src="/wiki/images/Taliyah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taliyah/LoL" title="Taliyah/LoL">Taliyah\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taliyah" data-ability="Weaver\'s Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taliyah/LoL#Weaver\'s_Wall" title="Weaver\'s Wall"><img alt="Weaver\'s Wall" src="/wiki/images/Taliyah_Weaver%27s_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taliyah/LoL#Weaver\'s_Wall" title="Taliyah/LoL">Weaver\'s Wall</a></span></span></span>, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL" title="Trundle\'s"><img alt="Trundle\'s" src="/wiki/images/Trundle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL" title="Trundle/LoL">Trundle\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-ability="Pillar of Ice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL#Pillar_of_Ice" title="Pillar of Ice"><img alt="Pillar of Ice" src="/wiki/images/Trundle_Pillar_of_Ice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL#Pillar_of_Ice" title="Trundle/LoL">Pillar of Ice</a></span></span></span>) touching map terrain will be treated as a single piece of terrain, even when bridging two pieces of map terrain together; the shockwave will wrap around all connecting terrain. The shockwave\'s path is determined once it initially spreads; any expired terrain will be treated as if it were still there.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">Projectile-intercepting</a></span> effects will block the windblast but not the shockwave.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    yvideo: 'Qiyana - R',
  },
} satisfies { [skillName in string]: SkillData };
