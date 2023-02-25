import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Leona';

export default {
  Sunlight: {
    name: 'Sunlight',
    display_name: 'Sunlight',
    champion: 'Leona',
    skill: 'I',
    image: {
      full: 'LeonaSunlight.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL" title="Leona\'s"><img alt="Leona\'s" src="/wiki/images/Leona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL" title="Leona/LoL">Leona\'s</a></span></span> abilities briefly mark enemies hit.',
      'Allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions\'</a></span> damaging attacks and abilities against a marked target will consume the mark to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Sunlight.png',
        description:
          "Innate: Leona's abilities mark enemies hit for 1.5 seconds, refreshing on subsequent hits. Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal 32 − 168 (based on level) bonus magic damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Leona\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> mark enemies hit for 1.<small>5</small> seconds, refreshing on subsequent hits. <br><br>Allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions\'</a></span> damaging attacks and abilities against a marked target will consume the mark to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="32;" data-finish="168;" data-bot_values="32;40;48;56;64;72;80;88;96;104;112;120;128;136;144;152;160;168" data-top_values="">32 − 168 (based on level)</span></span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: "Leona's abilities mark enemies hit for 1.5 seconds, refreshing on subsequent hits",
            values: 1,
            units: 'kindredMarks',
            unitsText:
              'abilities mark enemies hit for 1.5 seconds, refreshing on subsequent hits',
            pre: "Leona's abilities mark enemies hit for 1.5 seconds, refreshing on subsequent hits",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: "Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal 32 − 168 (based on level) bonus magic damage.",
            values: [
              32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144,
              152, 160, 168,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage.',
            pre: "Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal 32 − 168",
            post: 'bonus magic damage.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spell',
    spellshield: true,
    notes:
      '* <i>Sunlight\'s</i> mark damage is credited to the allied champion and not to <b>Leona</b>.\n<ul><li><ul><li>The damage will benefit from allies\' <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:turquoise; white-space:normal">magic penetration</span></span> and will apply any <a href="/wiki/Ability_effects" title="Ability effects">spell effects</a> and <span style="white-space:nowrap"><a href="/wiki/Spell_vamp" title="Spell vamp"><img alt="Spell vamp icon.png" src="/wiki/images/Spell_vamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Spell_vamp" class="mw-redirect" title="Spell vamp">spell vamp</a></span> they have.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <a href="/wiki/Omnivamp" class="mw-redirect" title="Omnivamp">Omnivamp</a></li></ul></li>\n<li><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL" title="Zyra"><img alt="Zyra" src="/wiki/images/Zyra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL" title="Zyra/LoL">Zyra</a></span></span> has a hidden passive that grants her 10% increased size for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">33 seconds</span> after having <i>Sunlight</i> applied to her.</li></ul>',
  },
  'Shield of Daybreak': {
    name: 'Shield of Daybreak',
    display_name: 'Shield of Daybreak',
    champion: 'Leona',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'LeonaShieldOfDaybreak.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '35 / 40 / 45 / 50 / 55',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL" title="Leona"><img alt="Leona" src="/wiki/images/Leona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL" title="Leona/LoL">Leona</a></span></span> illuminates her shield, causing her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within a few seconds to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Shield_of_Daybreak.png',
        description:
          'Active: Leona illuminates her shield, empowering her next basic attack within 6 seconds to have a 0.25-second cast time, gain  50 bonus range, deal bonus magic damage and  stun the target for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Leona</b> illuminates her shield, empowering her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 6 seconds to have a 0.<small>25</small>-second cast time, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Leona illuminates her shield, empowering her next basic attack within 6 seconds to have a 0.25-second cast time, gain  50 bonus range, deal bonus magic damage and  stun the target for 1 second.',
            damagetype: 'Magic',
            shieldType: 'OutgoingShields',
            values: 6,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              'illuminates her shield, empowering her next basic attack within 6 seconds to have a 0.25-second cast time, gain  50 bonus range, deal bonus magic damage and  stun the target for 1 second.',
            pre: 'Leona illuminates her shield, empowering her next basic attack within 6 seconds to have a 0.25-second cast time, gain  50 bonus range, deal bonus magic damage and  stun the target for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '10 / 35 / 60 / 85 / 110 (+ 30% AP)',
            valuesHTML:
              '10 / 35 / 60 / 85 / 110 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '10 / 35 / 60 / 85 / 110 (+ 30% AP)',
            damagetype: 'Magic',
            values: [10, 35, 60, 85, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 35 / 60 / 85 / 110',
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
        description: "Shield of Daybreak  resets Leona's basic attack timer.",
        descriptionHTML:
          '<i>Shield of Daybreak <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Leona\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spell',
    spellshield: true,
    notes:
      '* The enhanced attack will apply other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal.\n<ul><li><ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strikes</a></span> do not interact with <i>Shield of Daybreak\'s</i> bonus damage.</li></ul></li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Shield of Daybreak\'s</i> interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li>\n<li><i>Shield of Daybreak\'s</i> attack does not put <b>Leona\'s</b> basic attack on cooldown.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li>This effectively performs a second <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">attack reset</a></span>.</li>\n<li>This is unlike other empowered attacks (including those which, similar to <i>Shield of Daybreak</i>, use a more unconventional spell cast rather than an attack override).</li>\n<li><b>Leona</b> will wait out <i>Shield of Daybreak\'s</i> wind-down before automatically attacking, anyway. The player must issue the next attack themselves to gain the full benefit of the second reset.</li>\n<li>Probably not a bug because her High Noon skin gives the second attack a new distinguishable attack animation, which means that it\'s designed so.</li></ul></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away during the empowered attack\'s cast time, it is cancelled but not consumed.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Buildings" class="mw-redirect" title="Buildings">buildings</a>.</li></ul>',
  },
  Eclipse: {
    name: 'Eclipse',
    display_name: 'Eclipse',
    champion: 'Leona',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'LeonaSolarBarrier.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 450',
    cast_time: 'none',
    cost: '60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">14 / 13 / 12 / 11 / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL" title="Leona"><img alt="Leona" src="/wiki/images/Leona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL" title="Leona/LoL">Leona</a></span></span> raises her <i>guard</i> for a short time, gaining flat damage reduction, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>.',
      'Her shield detonates afterward, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies. If this hits an enemy, <b>Leona\'s</b> <i>guard</i> is extended for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Eclipse.png',
        description:
          'Active: Leona raises her guard for 3 seconds, gaining flat damage reduction of up to 50% of the damage instance and  bonus armor and  bonus magic resistance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Leona</b> raises her <i>guard</i> for 3 seconds, gaining flat damage reduction of up to 50% of the damage instance and <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Leona raises her guard for 3 seconds, gaining flat damage reduction of up to 50% of the damage instance and  bonus armor and  bonus magic resistance.',
            increasedStat: 'bonus_armor',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'of the damage instance and  bonus armor and  bonus magic resistance.raises her guard for 3 seconds, gaining flat damage reduction of up to 50',
            pre: 'Leona raises her guard for 3 seconds, gaining flat damage reduction of up to 50% of the damage instance and  bonus armor and  bonus magic resistance.',
          },
        ],
        leveling: [
          {
            name: 'Flat Damage Reduction:',
            values: '8 / 12 / 16 / 20 / 24',
            valuesHTML: '8 / 12 / 16 / 20 / 24',
          },
          {
            name: 'Bonus Armor:',
            values: '15 / 20 / 25 / 30 / 35 (+ 20% bonus armor)',
            valuesHTML:
              '15 / 20 / 25 / 30 / 35 <span style="color:yellow; white-space:normal">(+&nbsp;20% <b>bonus</b> armor)</span>',
          },
          {
            name: 'Bonus Magic Resistance:',
            values: '15 / 20 / 25 / 30 / 35 (+ 20% bonus magic resistance)',
            valuesHTML:
              '15 / 20 / 25 / 30 / 35 <span style="color: #00FFFF; white-space:normal">(+&nbsp;20% <b>bonus</b> magic resistance)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Flat Damage Reduction:',
            raw: '8 / 12 / 16 / 20 / 24',
            damagetype: 'None',
            values: [8, 12, 16, 20, 24],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 12 / 16 / 20 / 24',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 20% bonus armor)',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 20% bonus armor',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Resistance:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 20% bonus magic resistance)',
            damagetype: 'Magic',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 20% bonus magic resistance',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Her shield detonates after the duration, dealing magic damage to nearby enemies. If this hits an enemy, Leona's guard is extended for an additional 3 seconds.",
        descriptionHTML:
          'Her shield detonates after the duration, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits an enemy, <b>Leona\'s</b> <i>guard</i> is extended for an additional 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "If this hits an enemy, Leona's guard is extended for an additional 3 seconds.",
            damagetype: 'None',
            values: 3,
            units: 'total_ad',
            unitsText:
              "this hits an enemy, Leona's guard is extended for an additional 3 seconds.",
            pre: "If this hits an enemy, Leona's guard is extended for an additional 3 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '45 / 80 / 115 / 150 / 185 (+ 40% AP)',
            valuesHTML:
              '45 / 80 / 115 / 150 / 185 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '45 / 80 / 115 / 150 / 185 (+ 40% AP)',
            damagetype: 'Magic',
            values: [45, 80, 115, 150, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 80 / 115 / 150 / 185',
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
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    notes:
      '* Neither the cast nor detonation of <i>Eclipse</i> interrupts any of <b>Leona\'s</b> previous orders or ongoing attack windups.\n<ul><li>The resistance scaling will factor from all other sources, excluding <i>Eclipse\'s</i> flat bonus. This will recalculate over the duration.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the damage but <i>Eclipse\'s</i> extended duration will not be prevented.</li></ul>',
  },
  'Zenith Blade': {
    name: 'Zenith Blade',
    display_name: 'Zenith Blade',
    champion: 'Leona',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'LeonaZenithBlade.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '900',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '2000',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'Mana',
    cooldown: '12 / 10.<small>5</small> / 9 / 7.<small>5</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL" title="Leona"><img alt="Leona" src="/wiki/images/Leona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL" title="Leona/LoL">Leona</a></span></span> projects her sword in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      'If she hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, she will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> to the last one struck and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Zenith_Blade.png',
        description:
          'Active: Leona projects her sword in the target direction that deals magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Leona</b> projects her sword in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 90 / 130 / 170 / 210 (+ 40% AP)',
            valuesHTML:
              '50 / 90 / 130 / 170 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 90 / 130 / 170 / 210 (+ 40% AP)',
            damagetype: 'Magic',
            values: [50, 90, 130, 170, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 90 / 130 / 170 / 210',
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
        icon: '/wiki/images/undefined',
        description:
          'If she hits at least one enemy  champion, she will  dash 225 units behind the last one struck within 3000 range and  root them for 0.5 seconds.',
        descriptionHTML:
          'If she hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, she will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> 225 units behind the last one struck within 3000 range and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> them for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If she hits at least one enemy  champion, she will  dash 225 units behind the last one struck within 3000 range and  root them for 0.5 seconds.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'she hits at least one enemy  champion, she will  dash 225 units behind the last one struck within 3000 range and  root them for 0.5 seconds.',
            pre: 'If she hits at least one enemy  champion, she will  dash 225 units behind the last one struck within 3000 range and  root them for 0.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Leona is  unable to move or attack while Zenith Blade is in flight. She can cast any of her abilities during the dash.',
        descriptionHTML:
          '<i><b>Leona</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move or attack while Zenith Blade is in flight. She can cast any of her abilities during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* <b>Leona</b> will be ordered to basic attack the target.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block <i>Zenith Blade\'s</i> effects as well as preventing <b>Leona</b> from dashing as the last target hit.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  'Solar Flare': {
    name: 'Solar Flare',
    display_name: 'Solar Flare',
    champion: 'Leona',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'LeonaSolarFlare.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1200',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">325</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Epicenter radius">175</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Area reveal radius">800</span>',
    inner_radius: '100',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '90 / 75 / 60',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL" title="Leona"><img alt="Leona" src="/wiki/images/Leona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL" title="Leona/LoL">Leona</a></span></span> calls down a solar flare that strikes upon the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      'Enemies hit are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration if they are hit by the epicenter.',
    ],
    description: [
      {
        icon: '/wiki/images/Solar_Flare.png',
        description:
          'Active: Leona calls down a solar flare that strikes upon the target location after 0.625 seconds, granting  sight of the area before impact and for another 3 seconds afterwards. Enemies hit are dealt magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Leona</b> calls down a solar flare that strikes upon the target location after 0.<small>625</small> seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before impact and for another 3 seconds afterwards. Enemies hit are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 137.5 / 175 / 212.5 / 250 (+ 80% AP)',
            valuesHTML:
              '100 / 137.<small>5</small> / 175 / 212.<small>5</small> / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 137.5 / 175 / 212.5 / 250 (+ 80% AP)',
            damagetype: 'Magic',
            values: [100, 137.5, 175, 212.5, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 137.5 / 175 / 212.5 / 250',
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
      {
        icon: '/wiki/images/undefined',
        description:
          'Targets are also  slowed by 80% for 1.75 seconds, or  stunned for the same duration if they are hit by the epicenter.',
        descriptionHTML:
          'Targets are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 80% for 1.<small>75</small> seconds, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration if they are hit by the epicenter.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Targets are also  slowed by 80% for 1.75 seconds, or  stunned for the same duration if they are hit by the epicenter.',
            values: 8,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1.75 seconds, or  stunned for the same duration if they are hit by the epicenter.are also  slowed by 80',
            pre: 'Targets are also  slowed by 80% for 1.75 seconds, or  stunned for the same duration if they are hit by the epicenter.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* <i>Solar Flare\'s</i> visual effects are only visible to enemies if they have <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area it was cast upon.\n<ul><li>The cast indicator shows 300 radius for the <a href="/wiki/Area_of_effect" title="Area of effect">area of effect</a> and 120 radius for the epicenter, however the actual hitbox radii are larger than those values.</li>\n<li>The revealed radius is not obstructed by <a href="/wiki/Terrain" title="Terrain">terrain</a> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
