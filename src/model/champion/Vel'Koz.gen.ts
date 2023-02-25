import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = "Vel'Koz";

export default {
  'Organic Deconstruction': {
    name: 'Organic Deconstruction',
    display_name: 'Organic Deconstruction',
    champion: "Vel'Koz",
    skill: 'I',
    image: {
      full: 'VelKoz_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz"><img alt="Vel\'Koz" src="/wiki/images/Vel%27Koz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz/LoL">Vel\'Koz</a></span></span> abilities apply a stack of <i>Deconstruction</i> to enemies hit for a few seconds.',
      'The third stack consumes them all to deal <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Organic Deconstruction.png',
        description:
          "Innate: Vel'Koz's abilities apply a stack of Deconstruction to enemies hit for 7 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Vel\'Koz\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Deconstruction</i> to enemies hit for 7 seconds, refreshing on <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and subsequent applications and stacking up to 3 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: " Vel'Koz's abilities apply a stack of Deconstruction to enemies hit for 7 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
            min: 0,
            max: 10,
            description:
              " Vel'Koz's abilities apply a stack of Deconstruction to enemies hit for 7 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
            values: 7,
            units: 'total_ap',
            unitsText:
              'abilities apply a stack of Deconstruction to enemies hit for 7 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.',
            pre: "Vel'Koz's abilities apply a stack of Deconstruction to enemies hit for 7 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The third stack consumes them all to deal  33 − 169 (based on level) (+ 50% AP) bonus true damage.',
        descriptionHTML:
          'The third stack consumes them all to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="33;" data-finish="169;" data-bot_values="33;41;49;57;65;73;81;89;97;105;113;121;129;137;145;153;161;169" data-top_values="">33 − 169 (based on level)</span></span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'The third stack consumes them all to deal  33 − 169 (based on level) (+ 50% AP) bonus true damage.',
            min: 0,
            max: 10,
            description:
              'The third stack consumes them all to deal  33 − 169 (based on level) (+ 50% AP) bonus true damage.',
            values: [
              33, 41, 49, 57, 65, 73, 81, 89, 97, 105, 113, 121, 129, 137, 145,
              153, 161, 169,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus true damage.',
            pre: 'The third stack consumes them all to deal  33 − 169',
            post: 'bonus true damage.',
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
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies / Self',
    damagetype: 'True',
    spelleffects: 'Proc',
    spellshield: true,
    notes: '* No additional notes.',
  },
  'Plasma Fission': {
    name: 'Plasma Fission',
    display_name: 'Plasma Fission',
    champion: "Vel'Koz",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'VelkozQ.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1100 / 1100',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Primary missile width">100</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Split missile width">90</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Primary missile speed">1300</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Split missile speed">2100</span>',
    cast_time: '0.<small>25</small>',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">7</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz"><img alt="Vel\'Koz" src="/wiki/images/Vel%27Koz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz/LoL">Vel\'Koz</a></span></span> fires a plasma bolt that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for a short time.<br>\n<p><i>Plasma Fission</i> can be recast while the bolt is in flight, and does so automatically upon hitting an enemy or max range.\n</p>',
      '<span class="template_sbc"><b>Recast:</b></span> The bolt splits in two, each firing in perpendicular opposite directions.',
      'Whenever <i>Plasma Fission</i> kills an enemy, <b>Vel\'Koz</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Plasma Fission.png',
        description:
          "Active: Vel'Koz fires a plasma bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 70% decaying over a duration.\nPlasma Fission can be recast after 0.25 seconds while the bolt is in flight, and does so automatically upon hitting an enemy or maximum range.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vel\'Koz</b> fires a plasma bolt in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 70% decaying over a duration.<br><br>\n<p><i>Plasma Fission</i> can be recast after 0.<small>25</small> seconds while the bolt is in flight, and does so automatically upon hitting an enemy or maximum range.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: " Vel'Koz fires a plasma bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 70% decaying over a duration.\nPlasma Fission can be recast after 0.25 seconds while the bolt is in flight, and does so automatically upon hitting an enemy or maximum range.",
            damagetype: 'Magic',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'decaying over a duration.\nPlasma Fission can be recast after 0.25 seconds while the bolt is in flight, and does so automatically upon hitting an enemy or maximum range.fires a plasma bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 70',
            pre: "Vel'Koz fires a plasma bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 70% decaying over a duration.\nPlasma Fission can be recast after 0.25 seconds while the bolt is in flight, and does so automatically upon hitting an enemy or maximum range.",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 90% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
          {
            name: 'Slow Duration:',
            values: '1 / 1.4 / 1.8 / 2.2 / 2.6',
            valuesHTML:
              '1 / 1.<small>4</small> / 1.<small>8</small> / 2.<small>2</small> / 2.<small>6</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 90% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow Duration:',
            raw: '1 / 1.4 / 1.8 / 2.2 / 2.6',
            values: [1, 1.4, 1.8, 2.2, 2.6],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.4 / 1.8 / 2.2 / 2.6',
          },
        ],
      },
      {
        icon: '/wiki/images/Plasma Fission 2.png',
        description:
          "Recast: Vel'Koz splits the bolt in two over 0.25 seconds, each part firing perpendicularly in opposite directions and applying the same effects to enemies hit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Vel\'Koz</b> splits the bolt in two <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">over 0.<small>25</small> seconds</span>, each part firing perpendicularly in opposite directions and applying the same effects to enemies hit.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Whenever Plasma Fission kills an enemy, Vel'Koz restores  mana.",
        descriptionHTML:
          'Whenever <i>Plasma Fission</i> kills an enemy, <b>Vel\'Koz</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Mana Restored per Kill:',
            values: '20 / 22.5 / 25 / 27.5 / 30',
            valuesHTML:
              '<span style="color: #0099CC; white-space:normal">20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Mana Restored per Kill:',
            raw: '20 / 22.5 / 25 / 27.5 / 30',
            values: [20, 22.5, 25, 27.5, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30',
          },
        ],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of Effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The initial cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>Detonating the ability manually does not.</li></ul></li>\n<li>An enemy cannot be hit by multiple bolts even when having blocked one with a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li>\n<li>The split occurs at a location 55 units in front of the primary bolt\'s final location.</li>\n<li><i>Plasma Fission</i> can reach a maximum 1595 units diagonally (ignoring the split missile\'s width and enemy hitbox radius), reaching this distance after a total of about ~1.<small>65</small> seconds.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  'Void Rift': {
    name: 'Void Rift',
    display_name: 'Void Rift',
    champion: "Vel'Koz",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'VelkozW.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1105 /  1105 / -95',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ripple missile width">175</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rift collapse width">175</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ripple missile speed">1700</span>',
    cast_time: 'none',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana + 1 Charge',
    static: '1.<small>5</small>',
    recharge: '19 / 18 / 17 / 16 / 15',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz"><img alt="Vel\'Koz" src="/wiki/images/Vel%27Koz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz/LoL">Vel\'Koz</a></span></span> cracks a rift in the target direction that opens after a brief delay, cascading through the area to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
      'After a brief delay, the rift collapses, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
      "<b>Vel'Koz</b> periodically stocks a charge of <i>Void Rift</i>, up to a maximum of 2.",
    ],
    description: [
      {
        icon: '/wiki/images/Void Rift.png',
        description:
          "Active: Vel'Koz cracks a rift in the target direction that opens after a 0.25-second delay, cascading through the area over 0.65 seconds to deal magic damage to enemies within.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vel\'Koz</b> cracks a rift in the target direction that opens after a 0.<small>25</small>-second delay, cascading through the area over 0.<small>65</small> seconds to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '30 / 50 / 70 / 90 / 110 (+ 20% AP)',
            valuesHTML:
              '30 / 50 / 70 / 90 / 110 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 50 / 70 / 90 / 110 (+ 20% AP)',
            damagetype: 'Magic',
            values: [30, 50, 70, 90, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70 / 90 / 110',
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
        ],
      },
      {
        description:
          'After 0.75 seconds, the rift violently collapses, dealing magic damage to enemies within and granting  sight of the surrounding area for 0.25 seconds.',
        descriptionHTML:
          'After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>75</small> seconds</span>, the rift violently collapses, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the surrounding area for 0.<small>25</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '45 / 75 / 105 / 135 / 165 (+ 25% AP)',
            valuesHTML:
              '45 / 75 / 105 / 135 / 165 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '45 / 75 / 105 / 135 / 165 (+ 25% AP)',
            damagetype: 'Magic',
            values: [45, 75, 105, 135, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 75 / 105 / 135 / 165',
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
        description:
          "Vel'Koz periodically stocks a Void Rift charge, up to a maximum of 2.",
        descriptionHTML:
          '<b>Vel\'Koz</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Void Rift</i> charge, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Vel'Koz periodically stocks a Void Rift charge, up to a maximum of 2.",
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Void Rift charge, up to a maximum of 2.',
            pre: "Vel'Koz periodically stocks a Void Rift charge, up to a maximum of 2.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'Special',
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> will block the ripple and prevent the rift from forming further, but they will not destroy the section that was created already.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> only blocks one instance of damage.</li></ul>',
  },
  'Tectonic Disruption': {
    name: 'Tectonic Disruption',
    display_name: 'Tectonic Disruption',
    champion: "Vel'Koz",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'VelkozE.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 225',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.55 seconds travel time">Fixed</span>',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '16 / 15 / 14 / 13 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz"><img alt="Vel\'Koz" src="/wiki/images/Vel%27Koz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz/LoL">Vel\'Koz</a></span></span> hurls a disruptive anomaly at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Tectonic Disruption.png',
        description:
          "Active: Vel'Koz hurls a disruptive anomaly that lands to the target location after 0.75 seconds, dealing magic damage to enemies hit and  knocking them up and  stunning them for 0.75 seconds, as well as granting  sight of the area briefly.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vel\'Koz</b> hurls a disruptive anomaly that lands to the target location <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="After cast start, estimated">after 0.<small>75</small> seconds</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds, as well as granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area briefly.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 100 / 130 / 160 / 190 (+ 30% AP)',
            valuesHTML:
              '70 / 100 / 130 / 160 / 190 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 30% AP)',
            damagetype: 'Magic',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
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
          "If Tectonic Disruption is cast in close proximity of Vel'Koz, the anomaly will also slightly  knock back enemies hit in the direction of the cast.",
        descriptionHTML:
          'If <i>Tectonic Disruption</i> is cast in close proximity of <b>Vel\'Koz</b>, the anomaly will also slightly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> enemies hit in the direction of the cast.',
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
    projectile: 'Special',
    notes:
      '* The required proximity for the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> is relative to <b>Vel\'Koz\'s</b> position when casting and not his current one.\n<ul><li>While the effect is fully prevented by blocking the missile (e.g. with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span>), the missile may not be destroyed <i>visually</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>The area of effect indicator appears at the start of the cast time.\n<ul><li>It will persist even if the cast cancels (e.g. <b>Vel\'Koz</b> dies before cast time completes) despite the projectile not firing.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will also resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li></ul>',
  },
  'Life Form Disintegration Ray': {
    name: 'Life Form Disintegration Ray',
    display_name: 'Life Form Disintegration Ray',
    champion: "Vel'Koz",
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'VelkozR.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1555',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 175',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive - Researched:</b></span> Applying 3 <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Organic Deconstruction" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Deconstruction"><img alt="Deconstruction" src="/wiki/images/Vel%27Koz_Organic_Deconstruction.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Vel\'Koz/LoL"><i>Deconstruction</i></a></span></span> stacks will mark the target <i>Researched</i> for a few seconds, which refreshes on basic attacks and ability hits.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz"><img alt="Vel\'Koz" src="/wiki/images/Vel%27Koz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL" title="Vel\'Koz/LoL">Vel\'Koz</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a short time to project an energy beam that continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, applies <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Organic Deconstruction" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Deconstruction"><img alt="Deconstruction" src="/wiki/images/Vel%27Koz_Organic_Deconstruction.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Vel\'Koz/LoL">Deconstruction</a></span></span></i>, and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit. During this time, <b>Vel\'Koz</b> can steer the beam in the target direction.<br>\n<p><i>Life Form Disintegration Ray</i> can be recast within the duration, and does so automatically afterwards.\n</p>',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Vel\'Koz</b> ends <i>Life Form Disintegration Ray</i>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Researched" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Researched" title="Researched"><img alt="Researched" src="/wiki/images/Vel%27Koz_Researched.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Researched" title="Vel\'Koz/LoL">Researched</a></span></span> Bonus:</b></span> The beam deals <span style="color: #F9966B; white-space:normal">true damage</span> instead.',
    ],
    description: [
      {
        icon: '/wiki/images/Researched.png',
        description:
          'Passive - Researched: Applying 3  Deconstruction stacks to an enemy  champion marks them as Researched for 7 seconds, refreshing on basic attacks and ability hits against them.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive - Researched:</b></span> Applying 3 <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Organic Deconstruction" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Deconstruction"><img alt="Deconstruction" src="/wiki/images/Vel%27Koz_Organic_Deconstruction.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Vel\'Koz/LoL"><i>Deconstruction</i></a></span></span> stacks to an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> marks them as <i>Researched</i> for 7 seconds, refreshing on basic attacks and ability hits against them.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive - Researched:',
            raw: ' Applying 3  Deconstruction stacks to an enemy  champion marks them as Researched for 7 seconds, refreshing on basic attacks and ability hits against them.',
            increasedStat: 'kindredMarks',
            values: 3,
            units: '',
            unitsText:
              '3  Deconstruction stacks to an enemy  champion marks them as Researched for 7 seconds, refreshing on basic attacks and ability hits against them.',
            pre: 'Applying 3  Deconstruction stacks to an enemy  champion marks them as Researched for 7 seconds, refreshing on basic attacks and ability hits against them.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Lifeform Disintegration Ray.png',
        description:
          "Active: After a 0.2-second delay, Vel'Koz  channels for up to 2.6 seconds to project an energy beam, during which he can steer the beam in the target direction. Life Form Disintegration Ray can be recast after 1 second during the channel, and does so automatically after the duration.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> After a 0.<small>2</small>-second delay, <b>Vel\'Koz</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2.<small>6</small> seconds to project an energy beam, during which he can steer the beam in the target direction. <i>Life Form Disintegration Ray</i> can be recast after 1 second during the channel, and does so automatically after the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Life Form Disintegration Ray can be recast after 1 second during the channel, and does so automatically after the duration.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Form Disintegration Ray can be recast after 1 second during the channel, and does so automatically after the duration.',
            pre: 'Life Form Disintegration Ray can be recast after 1 second during the channel, and does so automatically after the duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The beam deals magic damage to enemies hit every 0.2 seconds, and  slows them by 20%, lingering for 1 second.  Deconstruction is applied every 0.7 seconds to enemies hit.  Researched enemies take true damage instead.',
        descriptionHTML:
          'The beam deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit every 0.<small>2</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 20%, lingering for 1 second. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Organic Deconstruction" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Deconstruction"><img alt="Deconstruction" src="/wiki/images/Vel%27Koz_Organic_Deconstruction.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Vel\'Koz/LoL">Deconstruction</a></span></span></i> is applied every 0.<small>7</small> seconds to enemies hit. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Researched" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Researched" title="Researched"><img alt="Researched" src="/wiki/images/Vel%27Koz_Researched.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Researched" title="Vel\'Koz/LoL"><i>Researched</i></a></span></span> enemies take <span style="color: #F9966B; white-space:normal">true damage</span> instead.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Damage Per Tick:',
            values: '34.62 / 41.35 / 48.08 / 54.81 / 61.54 (+ 9.62% AP)',
            valuesHTML:
              '34.<small>62</small> / 41.<small>35</small> / 48.<small>08</small> / 54.<small>81</small> / 61.<small>54</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;9.<small>62</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Damage Per Tick:',
            raw: '34.62 / 41.35 / 48.08 / 54.81 / 61.54 (+ 9.62% AP)',
            damagetype: 'None',
            values: [34.62, 41.35, 48.08, 54.81, 61.54],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '34.62 / 41.35 / 48.08 / 54.81 / 61.54',
            children: [
              {
                values: 9.62,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 9.62% AP',
              },
            ],
          },
        ],
      },
      {
        description: "Recast: Vel'Koz ends Life Form Disintegration Ray.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Vel\'Koz</b> ends <i>Life Form Disintegration Ray</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage"><span style="color:inherit; white-space:normal">Magic</span></a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage"><span style="color:inherit; white-space:normal">True</span></a></span>',
    spelleffects: 'aoedot',
    projectile: 'False',
    notes:
      '* <i>Life Form Disintegration Ray\'s</i> direction updates gradually (moving the cursor from one side of <b>Vel\'Koz</b> to the other will not make him rotate instantly).\n<ul><li><b>Vel\'Koz</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span> himself if the ray is near an enemy champion.</li>\n<li>The beam hits in a rectangular shape, intersecting with the edge of an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">gameplay radius</a></span>.\n<ul><li>Because of this, the effect will hit enemies whose center location is to the sides and/or slightly behind Vel\'Koz, as long as their radius intersects with the area.</li></ul></li>\n<li>The following table refers for interactions while <b>Vel\'Koz</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>   <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
