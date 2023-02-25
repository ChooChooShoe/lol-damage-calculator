import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Shyvana';

export default {
  'Fury of the Dragonborn': {
    name: 'Fury of the Dragonborn',
    display_name: 'Fury of the Dragonborn',
    champion: 'Shyvana',
    skill: 'I',
    image: {
      full: 'ShyvanaReinforcedScales.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL" title="Shyvana"><img alt="Shyvana" src="/wiki/images/Shyvana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL" title="Shyvana/LoL">Shyvana</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resist</span></span>, which is permanently increased for every <img alt="Elemental Drakes icon.png" src="/wiki/images/Elemental_Drakes_icon.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"> <a href="/wiki/Elemental_drake" class="mw-redirect" title="Elemental drake">elemental drake</a> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elder_Dragon" title="Elder Dragon"><img alt="Elder Dragon" src="/wiki/images/Elder_DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elder_Dragon" title="Elder Dragon">Elder Dragon</a></span></span> her team slays.',
      'Additionally, <b>Shyvana</b> deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to Dragons.',
    ],
    description: [
      {
        icon: '/wiki/images/Fury of the Dragonborn.png',
        description:
          'Innate: Shyvana gains  5 bonus armor and  5 bonus magic resistance, which are each increased by 5 for every  elemental drake and  Elder Dragon her team slays.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Shyvana</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">5 <b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">5 <b>bonus</b> magic resistance</span></span>, which are each increased by 5 for every <img alt="Elemental Drakes icon.png" src="/wiki/images/Elemental_Drakes_icon.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"> <a href="/wiki/Elemental_drake" class="mw-redirect" title="Elemental drake">elemental drake</a> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elder_Dragon" title="Elder Dragon"><img alt="Elder Dragon" src="/wiki/images/Elder_DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elder_Dragon" title="Elder Dragon">Elder Dragon</a></span></span> her team slays.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' Shyvana gains  5 bonus armor and  5 bonus magic resistance, which are each increased by 5 for every  elemental drake and  Elder Dragon her team slays.',
            increasedStat: 'bonus_armor',
            values: 5,
            units: '',
            unitsText:
              'gains  5 bonus armor and  5 bonus magic resistance, which are each increased by 5 for every  elemental drake and  Elder Dragon her team slays.',
            pre: 'Shyvana gains  5 bonus armor and  5 bonus magic resistance, which are each increased by 5 for every  elemental drake and  Elder Dragon her team slays.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Additionally, Shyvana deals 20% increased damage to  Dragons.',
        descriptionHTML:
          'Additionally, <b>Shyvana</b> deals 20% increased damage to <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragons"><img alt="Dragons" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragons</a></span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Additionally, Shyvana deals 20% increased damage to  Dragons.',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'increased damage to  Dragons.Shyvana deals 20',
            pre: 'Additionally, Shyvana deals 20% increased damage to  Dragons.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Fury of the Dragonborn\'s</i> increased damage modifier to <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragons"><img alt="Dragons" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragons</a></span></span> does not affect <a href="/wiki/True_damage" title="True damage">true damage</a>.',
  },
  'Twin Bite': {
    name: 'Twin Bite',
    display_name: 'Twin Bite',
    champion: 'Shyvana',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ShyvanaDoubleAttack.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dragon Form second strike around primary target">325</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dragon Form first strike in front of caster">250</span>',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dragon Form first strike cone">180</span>°',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">7 / 6.<small>5</small> / 6 / 5.<small>5</small> / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL" title="Shyvana\'s"><img alt="Shyvana\'s" src="/wiki/images/Shyvana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL" title="Shyvana/LoL">Shyvana\'s</a></span></span> next basic attack within a few seconds will cause her to quickly strike again, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
      'Basic attacks <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> <i>Twin Bite\'s</i> coldown.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> Bonus:</b></span> <b>Shyvana</b> also hits enemies in a cone around the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Twin Bite.png',
        description:
          'Active: Shyvana empowers her next basic attack within 6 seconds to gain  25 bonus range, deal 100% AD (+ 35% AP) physical damage, and cause her to strike again after 0.25 seconds to deal bonus physical damage.The second strike applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shyvana</b> empowers her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 6 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span>, deal <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, and cause her to strike again after 0.<small>25</small> seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.<br><br>The second strike applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness and is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Shyvana empowers her next basic attack within 6 seconds to gain  25 bonus range, deal 100% AD (+ 35% AP) physical damage, and cause her to strike again after 0.25 seconds to deal bonus physical damage.The second strike applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
            increasedStat: 'total_ap',
            values: 6,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'physical damage, and cause her to strike again after 0.25 seconds to deal bonus physical damage.The second strike applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
            pre: 'Shyvana empowers her next basic attack within 6 seconds to gain  25 bonus range, deal 100% AD',
            post: 'physical damage, and cause her to strike again after 0.25 seconds to deal bonus physical damage.The second strike applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
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
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '20 / 35 / 50 / 65 / 80% AD (+ 25% AP)',
            valuesHTML:
              '<span style="color:orange; white-space:normal">20 / 35 / 50 / 65 / 80% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '20 / 35 / 50 / 65 / 80% AD (+ 25% AP)',
            damagetype: 'Physical',
            values: [20, 35, 50, 65, 80],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '20 / 35 / 50 / 65 / 80% AD',
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
          "Basic attacks reduce Twin Bite's  current cooldown by 0.5 seconds  on-hit.",
        descriptionHTML:
          'Basic attacks reduce <i>Twin Bite\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 0.<small>5</small> seconds <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Dragon Form Bonus: Shyvana attacks enemies in a cone in front of her and applies the second strike to enemies surrounding the primary target. Both the attack and the strike occur at the same time and each of them apply Twin Strike's respective effects to all targets hit, with the exception of the second strike not applying on-attack effects and being unable to  critically strike. The attack is affected by  critical strike modifiers, applies  on-hit effects to enemies hit, and triggers on-attack effects against only the primary target. Additionally, Twin Bite's empowered attack has an  uncancellable windup.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> Bonus:</b></span> <b>Shyvana</b> attacks enemies in a cone in front of her and applies the second strike to enemies surrounding the primary target. Both the attack and the strike occur at the same time and each of them apply <i>Twin Strike\'s</i> respective effects to all targets hit, with the exception of the second strike not applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects and being unable to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. The attack is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects to enemies hit, and triggers <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects against only the primary target. Additionally, <i>Twin Bite\'s</i> empowered attack has an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "Twin Bite  resets Shyvana's basic attack timer.",
        descriptionHTML:
          '<i>Twin Bite <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Shyvana\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    occurrence: 'On-hit',
    spellshield: true,
    notes:
      '*<i>Dragon Form\'s</i> <i>Twin Bite</i> cannot apply <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tiamat" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tiamat" title="Tiamat\'s"><img alt="Tiamat\'s" src="/wiki/images/Tiamat_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tiamat" title="Tiamat">Tiamat\'s</a></span></span> <a href="/wiki/Named_item_effect#Cleave" title="Named item effect">Cleave</a> on each target hit because of <a href="/wiki/Named_item_effect#Cleave" title="Named item effect">Cleave\'s</a> internal 0.<small>05</small> seconds interval during which it cannot be applied on a different target.\n<ul><li><i>Dragon Form\'s</i> <i>Twin Bite</i> only applies the attack to enemies that would be hit by the second strike.</li>\n<li>Both strikes belong to the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span>.</li>\n<li>Since the second strike applies after the ability goes on cooldown, it will reduce its own cooldown.</li>\n<li>Unlike most <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effects, the one reducing the cooldown of <i>Twin Bite</i> also triggers against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>.</li>\n<li>In <i>Dragon Form</i>, <i>Twin Bite</i> consumes an additional stack of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span>. <sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
    yvideo: 'Shyvana - Q',
  },
  Burnout: {
    name: 'Burnout',
    display_name: 'Burnout',
    champion: 'Shyvana',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ShyvanaImmolationAura.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Human form range">162.5</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dragon form range, scales with Dragon\'s Descent">350 / 365 / 380</span>',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL" title="Shyvana"><img alt="Shyvana" src="/wiki/images/Shyvana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL" title="Shyvana/LoL">Shyvana</a></span></span> creates a flame aura, gaining a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> and continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
      'During this time, her basic attacks deal additional <span style="color: #00B0F0; white-space:normal">magic damage</span> to surrounding enemies and extend the duration, up to a cap.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> Bonus:</b></span> The aura is enlarged.',
    ],
    description: [
      {
        icon: '/wiki/images/Burnout.png',
        description:
          'Active: Shyvana surrounds herself in flames for 3 seconds, gaining  decaying bonus movement speed and dealing magic damage every 0.5 seconds to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shyvana</b> surrounds herself in flames for 3 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">decaying <b>bonus</b> movement speed</span></span> and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Shyvana surrounds herself in flames for 3 seconds, gaining  decaying bonus movement speed and dealing magic damage every 0.5 seconds to nearby enemies.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'surrounds herself in flames for 3 seconds, gaining  decaying bonus movement speed and dealing magic damage every 0.5 seconds to nearby enemies.',
            pre: 'Shyvana surrounds herself in flames for 3 seconds, gaining  decaying bonus movement speed and dealing magic damage every 0.5 seconds to nearby enemies.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '30 / 35 / 40 / 45 / 50% (+ 8% per 100 AP)',
            valuesHTML:
              '30 / 35 / 40 / 45 / 50% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;8% per 100 AP)</span>',
          },
          {
            name: 'Magic Damage Per Tick:',
            values: '10 / 16.25 / 22.5 / 28.75 / 35 (+ 15% bonus AD)',
            valuesHTML:
              '10 / 16.<small>25</small> / 22.<small>5</small> / 28.<small>75</small> / 35 <span style="color:orange; white-space:normal">(+&nbsp;15% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '30 / 35 / 40 / 45 / 50% (+ 8% per 100 AP)',
            damagetype: 'None',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 8% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '10 / 16.25 / 22.5 / 28.75 / 35 (+ 15% bonus AD)',
            damagetype: 'Magic',
            values: [10, 16.25, 22.5, 28.75, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 16.25 / 22.5 / 28.75 / 35',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 15% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          "During this time, Shyvana's basic attacks deal additional magic damage  on-hit equal to 50% of Burnout's per-tick damage to surrounding enemies and extend the duration of Burnout by 1 second, which can occur up to 4 times for a total of 4 additional seconds.",
        descriptionHTML:
          'During this time, <b>Shyvana\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>additional</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> equal to 50% of <i>Burnout\'s</i> per-tick damage to surrounding enemies and extend the duration of <i>Burnout</i> by 1 second, which can occur up to 4 times for a total of 4 additional seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "During this time, Shyvana's basic attacks deal additional magic damage  on-hit equal to 50% of Burnout's per-tick damage to surrounding enemies and extend the duration of Burnout by 1 second, which can occur up to 4 times for a total of 4 additional seconds.",
            damagetype: 'Magic',
            values: 5,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              "of Burnout's per-tick damage to surrounding enemies and extend the duration of Burnout by 1 second, which can occur up to 4 times for a total of 4 additional seconds.this time, Shyvana's basic attacks deal additional magic damage  on-hit equal to 50",
            pre: "During this time, Shyvana's basic attacks deal additional magic damage  on-hit equal to 50% of Burnout's per-tick damage to surrounding enemies and extend the duration of Burnout by 1 second, which can occur up to 4 times for a total of 4 additional seconds.",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '5 / 8.125 / 11.25 / 14.375 / 17.5 (+ 7.5% bonus AD)',
            valuesHTML:
              '5 / 8.<small>125</small> / 11.<small>25</small> / 14.<small>375</small> / 17.<small>5</small> <span style="color:orange; white-space:normal">(+&nbsp;7.<small>5</small>% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '5 / 8.125 / 11.25 / 14.375 / 17.5 (+ 7.5% bonus AD)',
            damagetype: 'Magic',
            values: [5, 8.125, 11.25, 14.375, 17.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 8.125 / 11.25 / 14.375 / 17.5',
            children: [
              {
                values: 7.5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 7.5% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          "Dragon Form Bonus: Burnout's radius increases, scaling with  Dragon's Descent's rank.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> Bonus:</b></span> <i>Burnout\'s</i> radius increases, scaling with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon\'s Descent\'s"><img alt="Dragon\'s Descent\'s" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon\'s Descent\'s</a></span></span></i> rank.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes:
      '* <span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <span style="color: #00B0F0; white-space:normal">Magic damage</span> on-hit\'s interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.',
    yvideo: 'Shyvana - W',
  },
  'Flame Breath': {
    name: 'Flame Breath',
    display_name: 'Flame Breath',
    champion: 'Shyvana',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ShyvanaFireball.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '925',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Explosion and Scorched Ground Radius">345</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Human fireball missile">120</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Human form">1600</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dragon form">1575</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Human form">0.<small>25</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dragon form">0.<small>3333</small></span>',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL" title="Shyvana"><img alt="Shyvana" src="/wiki/images/Shyvana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL" title="Shyvana/LoL">Shyvana</a></span></span> unleashes a fireball in the target direction that stops upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>. The fireball deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and marks them for a few seconds.',
      '<b>Shyvana\'s</b> basic attacks against marked enemies deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> Bonus:</b></span> The fireball deals increased <span style="color: #00B0F0; white-space:normal">magic damage</span> and explodes upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or reaching the target location, creating a scorched field for a few seconds that continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
    ],
    description: [
      {
        icon: '/wiki/images/Flame Breath.png',
        description:
          'Active: Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy  champion, dealing magic damage to all enemies hit and marking them for 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shyvana</b> unleashes a fireball in the target direction that stops upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies hit and marking them for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy  champion, dealing magic damage to all enemies hit and marking them for 5 seconds.',
            damagetype: 'Magic',
            values: 5,
            units: 'kindredMarks',
            unitsText:
              'unleashes a fireball in the target direction that stops upon hitting an enemy  champion, dealing magic damage to all enemies hit and marking them for 5 seconds.',
            pre: 'Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy  champion, dealing magic damage to all enemies hit and marking them for 5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 100 / 140 / 180 / 220 (+ 40% AD) (+ 90% AP)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color:orange; white-space:normal">(+&nbsp;40% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 40% AD) (+ 90% AP)',
            damagetype: 'Magic',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "Shyvana's basic attacks against marked enemies are empowered to deal bonus magic damage  on-hit equal to  3% of the target's maximum health, capped at 150 against monsters.",
        descriptionHTML:
          '<b>Shyvana\'s</b> basic attacks against marked enemies are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> equal to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">3% of the target\'s <b>maximum</b> health</span></span>, capped at 150 against monsters.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Shyvana's basic attacks against marked enemies are empowered to deal bonus magic damage  on-hit equal to  3% of the target's maximum health, capped at 150 against monsters.",
            healType: 'OutgoingHeals',
            values: 3,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              "of the target's maximum health, capped at 150 against monsters.basic attacks against marked enemies are empowered to deal bonus magic damage  on-hit equal to  3",
            pre: "Shyvana's basic attacks against marked enemies are empowered to deal bonus magic damage  on-hit equal to  3% of the target's maximum health, capped at 150 against monsters.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Dragon Form Bonus: The fireball deals increased magic damage and explodes upon hitting an enemy  champion or reaching the target location, creating a scorched field for 4 seconds. Enemies within the field are marked once and dealt 30 − 60 (based on level) (+ 5% AD) (+ 10% AP) magic damage every 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> Bonus:</b></span> The fireball deals increased <span style="color: #00B0F0; white-space:normal">magic damage</span> and explodes upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or reaching the target location, creating a scorched field for 4 seconds. Enemies within the field are marked once and dealt <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-displayformula="30 + 2.5 per level" data-bot_values="30;32.5;35;37.5;40;42.5;45;47.5;50;52.5;55;57.5;60" data-top_values="6;7;8;9;10;11;12;13;14;15;16;17;18">30 − 60 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;5% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Dragon Form Bonus:',
            raw: ' The fireball deals increased magic damage and explodes upon hitting an enemy  champion or reaching the target location, creating a scorched field for 4 seconds',
            damagetype: 'Magic',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'fireball deals increased magic damage and explodes upon hitting an enemy  champion or reaching the target location, creating a scorched field for 4 seconds',
            pre: 'The fireball deals increased magic damage and explodes upon hitting an enemy  champion or reaching the target location, creating a scorched field for 4 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies within the field are marked once and dealt 30 − 60 (based on level) (+ 5% AD) (+ 10% AP) magic damage every 0.5 seconds.',
            damagetype: 'Magic',
            values: [
              30, 31.76, 33.53, 35.29, 37.06, 38.82, 40.59, 42.35, 44.12, 45.88,
              47.65, 49.41, 51.18, 52.94, 54.71, 56.47, 58.24, 60,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage every 0.5 seconds.',
            pre: 'Enemies within the field are marked once and dealt 30 − 60',
            post: 'magic damage every 0.5 seconds.',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 5% AD',
              },
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
        leveling: [
          {
            name: 'Increased Damage:',
            values:
              '75 − 135 (based on level) (+ 60 / 100 / 140 / 180 / 220) (+ 70% AD) (+ 120% AP)',
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="75 at level 1, then + 5 per level starting at level 7" data-bot_values="75;80;85;90;95;100;105;110;115;120;125;130;135" data-top_values="1;7;8;9;10;11;12;13;14;15;16;17;18">75 − 135 (based on level)</span> (+ 60 / 100 / 140 / 180 / 220) <span style="color:orange; white-space:normal">(+&nbsp;70% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;120% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '75 − 135 (based on level) (+ 60 / 100 / 140 / 180 / 220) (+ 70% AD) (+ 120% AP)',
            damagetype: 'None',
            values: [
              75, 78.53, 82.06, 85.59, 89.12, 92.65, 96.18, 99.71, 103.24,
              106.76, 110.29, 113.82, 117.35, 120.88, 124.41, 127.94, 131.47,
              135,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 − 135',
            children: [
              {
                values: [60, 100, 140, 180, 220],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 60 / 100 / 140 / 180 / 220',
              },
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 70% AD',
              },
              {
                values: 120,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Flame Breath while in  Dragon Form will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Flame Breath while in <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon Form"><img alt="Dragon Form" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon Form</a></span></span> will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a>',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'true',
    notes:
      '* The fireball applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> and the <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effect against marked targets deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span>.\n<ul><li><ul><li>In <i>Dragon Form</i>, the fiery explosion applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> and the burning scorch deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent area damage"><a href="/wiki/Damage" title="Damage"><img alt="Poison Trail.png" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent area damage</a></span> to all enemies within the area of effect.</li></ul></li>\n<li>In <i>Dragon Form</i>, both areas of effect will be centered on the first champion struck, not at the location the missile collided with them.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>In <i>Dragon Form</i>, the visual mark will not be applied to non-champions, but the debuff will still be applied for gameplay purposes.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <span style="color: #00B0F0; white-space:normal">Magic damage</span> on-hit\'s interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li></ul>',
    yvideo: 'Shyvana - E',
  },
  "Dragon's Descent": {
    name: "Dragon's Descent",
    display_name: "Dragon's Descent",
    champion: 'Shyvana',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ShyvanaTransformCast.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '850',
    cast_time: '0.<small>25</small>',
    cost: '<span style="color: #FA6533; white-space:normal">2.<small>5</small></span>',
    costtype:
      '<span style="color: #FA6533; white-space:normal">Fury</span> every 0.<small>5</small> seconds',
    blurb: [
      '<span class="template_sbc"><b>Passive - Fury:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL" title="Shyvana"><img alt="Shyvana" src="/wiki/images/Shyvana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL" title="Shyvana/LoL">Shyvana</a></span></span> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span> per second while alive in <span class="template_sbc"><b>Human form</b></span>, and also generates <span style="color: #FA6533; white-space:normal">Fury</span> per basic attack in either form.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Shyvana</b> transforms into <span class="template_sbc"><b>Dragon Form</b></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">carrying</a></span> along enemies she passes through, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      '<span class="template_sbc"><b>Dragon Form</b></span>: <b>Shyvana</b> gains <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span>, and increased <a href="/wiki/Size" title="Size">size</a>. Her abilities are also empowered to apply an additional effect.',
      '<i>Dragon\'s Descent</i> requires <span style="color: #FA6533; white-space:normal">max Fury</span> to be cast, and has a recurring <span style="color: #FA6533; white-space:normal">Fury</span> cost.<br>\n<p><span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> displacement immunity</span>:</b></span> The dash cannot be deterred by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.\n</p>',
    ],
    description: [
      {
        description:
          "Passive - Fury: Dragon's Descent requires  100 Fury to be cast. Shyvana generates Fury per second while alive and in Human form and 2 Fury per basic attack  on-hit in either form. Shyvana gains 100 Fury upon learning Dragon's Descent.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive - Fury:</b></span> <i>Dragon\'s Descent</i> requires <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">100 Fury</span></a></span> to be cast. <b>Shyvana</b> generates <span style="color: #FA6533; white-space:normal">Fury</span> per second while alive and in <span class="template_sbc"><b>Human form</b></span> and <span style="color: #FA6533; white-space:normal">2 Fury</span> per basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> in either form. <b>Shyvana</b> gains <span style="color: #FA6533; white-space:normal">100 Fury</span> upon learning <i>Dragon\'s Descent</i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Passive - Fury:',
            raw: " Dragon's Descent requires  100 Fury to be cast",
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'Descent requires  100 Fury to be cast',
            pre: "Dragon's Descent requires  100 Fury to be cast",
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Shyvana generates Fury per second while alive and in Human form and 2 Fury per basic attack  on-hit in either form',
            values: 2,
            units: 'total_ad',
            unitsText:
              'generates Fury per second while alive and in Human form and 2 Fury per basic attack  on-hit in either form',
            pre: 'Shyvana generates Fury per second while alive and in Human form and 2 Fury per basic attack  on-hit in either form',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: "Shyvana gains 100 Fury upon learning Dragon's Descent.",
            values: 1,
            user: 'none',
            units: '',
            unitsText: "gains 100 Fury upon learning Dragon's Descent.",
            pre: "Shyvana gains 100 Fury upon learning Dragon's Descent.",
          },
        ],
        leveling: [
          {
            name: 'Fury Generation per Second:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '<span style="color: #FA6533; white-space:normal">1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Fury Generation per Second:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
      },
      {
        icon: "/wiki/images/Dragon's Descent.png",
        description:
          'Active: Shyvana transforms into Dragon Form and  dashes with  displacement immunity to the target location, dealing magic damage to enemies she passes through and  carrying them alongside her.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shyvana</b> transforms into <span class="template_sbc"><b>Dragon Form</b></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">carrying</a></span> them alongside her.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 130% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;130% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 130% AP)',
            damagetype: 'Magic',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 130% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Dragon Form: Shyvana gains  bonus health,  bonus attack range, and increased size. Her abilities are also empowered to apply an additional effect. She maintains Dragon Form at a recurring cost of Fury, returning to Human Form once all Fury has been depleted.',
        descriptionHTML:
          '<span class="template_sbc"><b>Dragon Form</b></span>: <b>Shyvana</b> gains <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span>, and increased <a href="/wiki/Size" title="Size">size</a>. Her abilities are also empowered to apply an additional effect. She maintains <span class="template_sbc"><b>Dragon Form</b></span> at a recurring cost of <span style="color: #FA6533; white-space:normal">Fury</span>, returning to <span class="template_sbc"><b>Human Form</b></span> once all <span style="color: #FA6533; white-space:normal">Fury</span> has been depleted.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Health:',
            values: '150 / 200 / 250 / 300 / 350',
            valuesHTML: '150 / 200 / 250 / 300 / 350',
          },
          {
            name: 'Bonus Range:',
            values: '50 / 57.5 / 65 / 72.5 / 80',
            valuesHTML:
              '50 / 57.<small>5</small> / 65 / 72.<small>5</small> / 80',
          },
          {
            name: 'Size Increase:',
            values: '0 / 8.5 / 16%',
            valuesHTML: '0 / 8.<small>5</small> / 16%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Health:',
            raw: '150 / 200 / 250 / 300 / 350',
            healType: 'BonusHealth',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Range:',
            raw: '50 / 57.5 / 65 / 72.5 / 80',
            values: [50, 57.5, 65, 72.5, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 57.5 / 65 / 72.5 / 80',
          },
          {
            effectType: 'Unique',
            name: 'Size Increase:',
            raw: '0 / 8.5 / 16%',
            values: [0, 8.5, 16],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0 / 8.5 / 16%',
          },
        ],
      },
      {
        description:
          "Dragon's Descent will cast at max range if cast beyond that.",
        descriptionHTML:
          "<i>Dragon's Descent will cast at max range if cast beyond that.</i>",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies, Self',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* <i>Dragon Descent\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> begins from the start of the cast time.\n<ul><li><i>Dragon\'s Descent</i> has a 100 / 80 / 66.<small>67</small> / 57.<small>14</small> / 50 seconds effective cooldown when not attacking.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Shyvana_Original_TransformLeap_Deactivate_3.ogg   "Behold my true form!"',
    yvideo: 'Shyvana - R',
  },
} satisfies { [skillName in string]: SkillData };
