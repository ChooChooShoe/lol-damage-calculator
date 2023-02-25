import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Riven';

export default {
  'Runic Blade': {
    name: 'Runic Blade',
    display_name: 'Runic Blade',
    champion: 'Riven',
    skill: 'I',
    image: {
      full: 'RivenRunicBlades.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL" title="Riven\'s"><img alt="Riven\'s" src="/wiki/images/Riven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL" title="Riven/LoL">Riven\'s</a></span></span> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> casts generate stacks of <i>Charge</i>, which stacks up to a cap. <b>Riven\'s</b> basic attacks consume a stack to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Runic Blade.png',
        description:
          "Innate: Riven's ability casts generate a stack of Charge for 6 seconds, refreshing on subsequent casts and stacking up to 3 times. Riven's basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% − 60% (based on level) AD.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Riven\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> casts generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Charge</i> for 6 seconds, refreshing on subsequent casts and stacking up to 3 times. <b>Riven\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to each consume a stack to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="30% +&nbsp;6% at level 6, then +&nbsp;6% every 3 levels" data-bot_values="30;36;42;48;54;60" data-top_values="1;6;9;12;15;18" data-bot_key="%">30% − 60% (based on level)</span> AD</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: " Riven's ability casts generate a stack of Charge for 6 seconds, refreshing on subsequent casts and stacking up to 3 times",
            min: 0,
            max: 10,
            description:
              " Riven's ability casts generate a stack of Charge for 6 seconds, refreshing on subsequent casts and stacking up to 3 times",
            values: 6,
            units: 'feastStacks',
            unitsText:
              'ability casts generate a stack of Charge for 6 seconds, refreshing on subsequent casts and stacking up to 3 times',
            pre: "Riven's ability casts generate a stack of Charge for 6 seconds, refreshing on subsequent casts and stacking up to 3 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: "Riven's basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% − 60% (based on level) AD.",
            min: 0,
            max: 10,
            description:
              "Riven's basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% − 60% (based on level) AD.",
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ad',
            unitsText: 'AD.',
            pre: "Riven's basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% − 60%",
            post: 'AD.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The bonus damage is affected by  critical strike modifiers and applies  life steal at 100% effectiveness.',
        descriptionHTML:
          'The <b>bonus</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The bonus damage is affected by  critical strike modifiers and applies  life steal at 100% effectiveness.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText:
              'effectiveness.bonus damage is affected by  critical strike modifiers and applies  life steal at 100',
            pre: 'The bonus damage is affected by  critical strike modifiers and applies  life steal at 100% effectiveness.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'Proc',
    notes:
      '* <i>Runic Blade\'s</i> duration also refreshes when <b>Riven</b> consumes a stack.\n<ul><li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  'Broken Wings': {
    name: 'Broken Wings',
    display_name: 'Broken Wings',
    champion: 'Riven',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RivenTriCleave.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Standard first cast\'s radius">150</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Standard final cast\'s radius">250</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enhanced first cast\'s radius">200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enhanced final cast\'s radius">300</span>',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after first cast">13</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL" title="Riven"><img alt="Riven" src="/wiki/images/Riven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL" title="Riven/LoL">Riven</a></span></span> can cast this ability with brief delays up to three times in quick succession, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit in an area.\n<ul><li><span class="template_sbc"><b>First Cast:</b></span> <b>Riven</b> dashes forward and slashes her sword in a circle.</li>\n<li><span class="template_sbc"><b>Second Cast:</b></span> <b>Riven</b> mimics the first cast.</li>\n<li><span class="template_sbc"><b>Third Cast:</b></span> <b>Riven</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> forward and slams her sword in a large circle, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> enemies hit.</li></ul>',
    ],
    description: [
      {
        icon: '/wiki/images/Broken Wings.png',
        description:
          'Active: Riven can activate Broken Wings three times before the ability goes on cooldown, with a 0.3125-second static cooldown between casts. If Riven does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> can activate <i>Broken Wings</i> three times before the ability goes on cooldown, with a 0.<small>3125</small>-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> between casts. If <b>Riven</b> does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If Riven does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
            values: 4,
            units: 'total_ap',
            unitsText:
              'Riven does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
            pre: 'If Riven does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Riven slashes with her sword for each of the three casts, dealing physical damage to enemies struck within an area,  resetting her basic attack timer, and ordering her to basic attack the target of Broken Wings if there are any.',
        descriptionHTML:
          '<b>Riven</b> slashes with her sword for each of the three casts, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies struck within an area, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resetting</a></span> her basic attack timer, and ordering her to basic attack the target of <i>Broken Wings</i> if there are any.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '15 / 35 / 55 / 75 / 95 (+ 45 / 50 / 55 / 60 / 65% AD)',
            valuesHTML:
              '15 / 35 / 55 / 75 / 95 <span style="color:orange; white-space:normal">(+&nbsp;45 / 50 / 55 / 60 / 65% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '15 / 35 / 55 / 75 / 95 (+ 45 / 50 / 55 / 60 / 65% AD)',
            damagetype: 'Physical',
            values: [15, 35, 55, 75, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 35 / 55 / 75 / 95',
            children: [
              {
                values: [45, 50, 55, 60, 65],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 45 / 50 / 55 / 60 / 65% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'First Cast: Riven  dashes up to 225 units towards the target enemy or in the direction she is currently facing, striking enemies in the target area 100 units away. This cast cannot cross terrain.',
        descriptionHTML:
          '<span class="template_sbc"><b>First Cast:</b></span> <b>Riven</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> up to 225 units towards the target enemy or in the direction she is currently facing, striking enemies in the target area 100 units away. This cast cannot cross terrain.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'First Cast:',
            raw: ' Riven  dashes up to 225 units towards the target enemy or in the direction she is currently facing, striking enemies in the target area 100 units away',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'dashes up to 225 units towards the target enemy or in the direction she is currently facing, striking enemies in the target area 100 units away',
            pre: 'Riven  dashes up to 225 units towards the target enemy or in the direction she is currently facing, striking enemies in the target area 100 units away',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "Second Cast: Riven mimics the first cast's effects.",
        descriptionHTML:
          '<span class="template_sbc"><b>Second Cast:</b></span> <b>Riven</b> mimics the first cast\'s effects.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Third Cast: Riven mimics the first cast's effects in a larger area while also  knocking back enemies hit 75 units over 0.5 seconds. This cast can cross terrain.",
        descriptionHTML:
          '<span class="template_sbc"><b>Third Cast:</b></span> <b>Riven</b> mimics the first cast\'s effects in a larger area while also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> enemies hit 75 units over 0.<small>5</small> seconds. This cast can cross terrain.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Third Cast:',
            raw: " Riven mimics the first cast's effects in a larger area while also  knocking back enemies hit 75 units over 0.5 seconds",
            values: 7,
            user: 'none',
            units: '',
            unitsText:
              "mimics the first cast's effects in a larger area while also  knocking back enemies hit 75 units over 0.5 seconds",
            pre: "Riven mimics the first cast's effects in a larger area while also  knocking back enemies hit 75 units over 0.5 seconds",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* Each cast counts as a single ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>The basic attack reset is not considered one for <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span>.</li>\n<li>After using this ability, <b>Riven</b> is able to use <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Valor" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Valor" title="Valor"><img alt="Valor" src="/wiki/images/Riven_Valor.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Valor" title="Riven/LoL">Valor</a></span></span></i> sooner than basic attacks and other abilities.</li>\n<li>The <span class="template_sbc"><b>Third Cast</b></span> prevents <b>Riven</b> from using basic attacks and abilities for longer than the other 2 casts.</li></ul>',
  },
  'Ki Burst': {
    name: 'Ki Burst',
    display_name: 'Ki Burst',
    champion: 'Riven',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RivenMartyr.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Standard range">250</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enhanced range">300</span>',
    cast_time: '0.<small>25</small>',
    cooldown: '11 / 10 / 9 / 8 / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> Riven emits a flash of runic energy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Ki Burst.png',
        description:
          'Active: Riven emits a flash of runic energy before the cast time, dealing physical damage to nearby enemies and  stunning them for 0.75 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> emits a flash of runic energy before the cast time, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '65 / 95 / 125 / 155 / 185 (+ 100% bonus AD)',
            valuesHTML:
              '65 / 95 / 125 / 155 / 185 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 95 / 125 / 155 / 185 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [65, 95, 125, 155, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 95 / 125 / 155 / 185',
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
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <b>Riven</b> is briefly unable to basic attack after the cast time.',
  },
  Valor: {
    name: 'Valor',
    display_name: 'Valor',
    champion: 'Riven',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RivenFeint.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '250',
    cast_time: 'none',
    cooldown: '10 / 9 / 8 / 7 / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL" title="Riven"><img alt="Riven" src="/wiki/images/Riven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL" title="Riven/LoL">Riven</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location and gains a brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Valor.png',
        description:
          'Active: Riven  dashes to the target location, though not through terrain, while granting herself a  shield for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, though not through terrain, while granting herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Riven  dashes to the target location, though not through terrain, while granting herself a  shield for 1.5 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'dashes to the target location, though not through terrain, while granting herself a  shield for 1.5 seconds.',
            pre: 'Riven  dashes to the target location, though not through terrain, while granting herself a  shield for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '80 / 105 / 130 / 155 / 180 (+ 110% bonus AD)',
            valuesHTML:
              '80 / 105 / 130 / 155 / 180 <span style="color:orange; white-space:normal">(+&nbsp;110% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '80 / 105 / 130 / 155 / 180 (+ 110% bonus AD)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [80, 105, 130, 155, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 105 / 130 / 155 / 180',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'Riven can cast any of her abilities during the dash. Valor will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i><b>Riven</b> can cast any of her abilities during the dash. Valor will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self',
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Broken Wings" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Broken_Wings" title="Broken Wings"><img alt="Broken Wings" src="/wiki/images/Riven_Broken_Wings.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Broken_Wings" title="Riven/LoL">Broken Wings</a></span></span> may be cast during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Ki Burst" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Ki_Burst" title="Ki Burst"><img alt="Ki Burst" src="/wiki/images/Riven_Ki_Burst.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Ki_Burst" title="Riven/LoL">Ki Burst</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Blade of the Exile" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Blade_of_the_Exile" title="Blade of the Exile"><img alt="Blade of the Exile" src="/wiki/images/Riven_Blade_of_the_Exile.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Blade_of_the_Exile" title="Riven/LoL">Blade of the Exile</a></span></span> cast times if they\'re used at the end or briefly after the dash.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>',
  },
  'Blade of the Exile': {
    name: 'Blade of the Exile',
    display_name: 'Blade of the Exile',
    champion: 'Riven',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RivenFengShuiEngine.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>25</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">120 / 90 / 60</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL" title="Riven"><img alt="Riven" src="/wiki/images/Riven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL" title="Riven/LoL">Riven</a></span></span> empowers her blade for some time, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and increased <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> on her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attacks"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Broken Wings" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Broken_Wings" title="Broken Wings"><img alt="Broken Wings" src="/wiki/images/Riven_Broken_Wings.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Broken_Wings" title="Riven/LoL">Broken Wings</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Ki Burst" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Ki_Burst" title="Ki Burst"><img alt="Ki Burst" src="/wiki/images/Riven_Ki_Burst.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Ki_Burst" title="Riven/LoL">Ki Burst</a></span></span></i>.',
      'During this time, <b>Riven</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Wind Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Wind_Slash" title="Wind Slash"><img alt="Wind Slash" src="/wiki/images/Riven_Wind_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Wind_Slash" title="Riven/LoL">Wind Slash</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Blade of the Exile.png',
        description:
          'Active: Riven empowers her blade for 15 seconds, gaining 20% AD  bonus attack damage,  75 bonus attack range, and increased range on  Broken Wings and  Ki Burst. After 0.5 seconds, she can cast  Wind Slash within the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> empowers her blade for 15 seconds, gaining <span style="color:orange; white-space:normal">20% AD</span> <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> attack range</span>, and increased range on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Broken Wings" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Broken_Wings" title="Broken Wings"><img alt="Broken Wings" src="/wiki/images/Riven_Broken_Wings.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Broken_Wings" title="Riven/LoL">Broken Wings</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Ki Burst" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Ki_Burst" title="Ki Burst"><img alt="Ki Burst" src="/wiki/images/Riven_Ki_Burst.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Ki_Burst" title="Riven/LoL">Ki Burst</a></span></span></i>.<br><br> After 0.<small>5</small> seconds, she can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Wind Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Wind_Slash" title="Wind Slash"><img alt="Wind Slash" src="/wiki/images/Riven_Wind_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Wind_Slash" title="Riven/LoL">Wind Slash</a></span></span></i> within the duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Riven empowers her blade for 15 seconds, gaining 20% AD  bonus attack damage,  75 bonus attack range, and increased range on  Broken Wings and  Ki Burst',
            increasedStat: 'bonus_ad',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'AD  bonus attack damage,  75 bonus attack range, and increased range on  Broken Wings and  Ki Burstempowers her blade for 15 seconds, gaining 20',
            pre: 'Riven empowers her blade for 15 seconds, gaining 20% AD  bonus attack damage,  75 bonus attack range, and increased range on  Broken Wings and  Ki Burst',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* All bonuses are gained after 0.<small>5</small> seconds of the ability starting its cast.\n<ul><li><ul><li>The <span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span> amount is factored upon cast, and does not change.</li></ul></li>\n<li>If <b>Riven</b> has a basic attack buffered before the end of <i>Blade of the Exile\'s</i> cast time, the buffered basic attack will start 0.<small>33</small> seconds after the end of the cast time.\n<ul><li>The delay will not apply to basic attack commands input after <i>Blade of the Exile\'s</i> cast time.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Riven_Original_R_0.ogg   "I am awakened."',
  },
  'Wind Slash': {
    name: 'Wind Slash',
    display_name: 'Wind Slash',
    champion: 'Riven',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RivenFengShuiEngine.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Width of each missile (see notes)">200</span>',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Right and left missiles at 9° to their side, respectively (see notes)">18°</span>',
    speed: '1600',
    cast_time: '0.<small>25</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL" title="Riven"><img alt="Riven" src="/wiki/images/Riven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL" title="Riven/LoL">Riven</a></span></span> unleashes a wave of energy in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Wind Slash.png',
        description:
          'Active: Riven unleashes a wave of energy in a cone in the target direction that deals physical damage to enemies hit, increased by 0% − 200% (based on missing health).',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> unleashes a wave of energy in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="missing health" data-displayformula="2.667% per 1% missing health. \'\'This is capped at 200% bonus damage at 75% missing health.\'\'" data-bot_values="0;25;50;75;100;125;150;175;200" data-top_values="0;9.38;18.75;28.13;37.5;46.88;56.25;65.63;75" data-bot_key="%" data-top_key="%">0% − 200% (based on <b>missing</b> health)</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values: '100 / 125 / 150 / 175 / 200 (+ 60% bonus AD)',
            valuesHTML:
              '100 / 125 / 150 / 175 / 200 <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 60% bonus AD)',
            damagetype: 'Physical',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
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
      '* <i>Wind Slash</i> counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><i>Wind Slash\'s</i> wave is made up of three individual missiles spread in a cone.\n<ul><li>Each enemy can be damaged by only one missile.</li></ul></li>\n<li>If <i>Wind Slash</i> hits an enemy while <i>Riven</i> is not visible, it will briefly grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around her to enemies.</li>\n<li>If <b>Riven</b> has a basic attack buffered before the end of <i>Wind Slash\'s</i> cast time, the buffered basic attack will start 0.<small>528</small> seconds after the end of the cast time.\n<ul><li>The delay is not applied if a basic attack command is input after the cast time.</li></ul></li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
