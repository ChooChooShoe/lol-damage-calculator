import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Trundle';

export default {
  "King's Tribute": {
    name: "King's Tribute",
    display_name: "King's Tribute",
    champion: 'Trundle',
    skill: 'I',
    image: {
      full: 'Trundle_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1400',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Enemies that die near <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL" title="Trundle"><img alt="Trundle" src="/wiki/images/Trundle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL" title="Trundle/LoL">Trundle</a></span></span> cause him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: "/wiki/images/King's_Tribute.png",
        description:
          "Innate: Whenever a nearby enemy dies, Trundle  heals himself for 1.8% − 5.5% (based on level) of the target's maximum health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever a nearby enemy dies, <b>Trundle</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself for <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.8;" data-finish="5.5;" data-bot_values="1.8;2.02;2.24;2.45;2.67;2.89;3.11;3.32;3.54;3.76;3.98;4.19;4.41;4.63;4.85;5.06;5.28;5.5" data-top_values="" data-bot_key="%">1.<small>8</small>% − 5.<small>5</small>% (based on level)</span> of the target\'s <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: "Whenever a nearby enemy dies, Trundle  heals himself for 1.8% − 5.5% (based on level) of the target's maximum health.",
            healType: 'OutgoingHeals',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health.",
            pre: 'Whenever a nearby enemy dies, Trundle  heals himself for 1.8% − 5.5%',
            post: "of the target's maximum health.",
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
      "* <i>King's Tribute</i> does not trigger when an enemy structure is destroyed.",
  },
  Chomp: {
    name: 'Chomp',
    display_name: 'Chomp',
    champion: 'Trundle',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'TrundleTrollSmash.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '30',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">3.<small>5</small></span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL" title="Trundle\'s"><img alt="Trundle\'s" src="/wiki/images/Trundle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL" title="Trundle/LoL">Trundle\'s</a></span></span> next basic attack with a few seconds will deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> the target.',
      'Afterwards, <b>Trundle</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> for a few seconds, during which he reduces the target\'s <span style="color:orange; white-space:normal">attack damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Chomp.png',
        description:
          'Active: Trundle empowers his next basic attack within 7 seconds to have an  uncancellable windup, deal bonus physical damage and  slow the target by 75% for 0.1 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Trundle</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 7 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> the target by 75% for 0.<small>1</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Trundle empowers his next basic attack within 7 seconds to have an  uncancellable windup, deal bonus physical damage and  slow the target by 75% for 0.1 seconds.',
            damagetype: 'Physical',
            values: 7,
            valuesIsPercent: true,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              'for 0.1 seconds.empowers his next basic attack within 7 seconds to have an  uncancellable windup, deal bonus physical damage and  slow the target by 75',
            pre: 'Trundle empowers his next basic attack within 7 seconds to have an  uncancellable windup, deal bonus physical damage and  slow the target by 75% for 0.1 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '20 / 40 / 60 / 80 / 100 (+ 15 / 25 / 35 / 45 / 55% AD)',
            valuesHTML:
              '20 / 40 / 60 / 80 / 100 <span style="color:orange; white-space:normal">(+&nbsp;15 / 25 / 35 / 45 / 55% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '20 / 40 / 60 / 80 / 100 (+ 15 / 25 / 35 / 45 / 55% AD)',
            damagetype: 'Physical',
            values: [20, 40, 60, 80, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 40 / 60 / 80 / 100',
            children: [
              {
                values: [15, 25, 35, 45, 55],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 15 / 25 / 35 / 45 / 55% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "After using the empowered attack, Trundle gains  bonus attack damage for 5 seconds and reduces the target's attack damage by half that amount for the same duration.",
        descriptionHTML:
          'After using the empowered attack, <b>Trundle</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> for 5 seconds and reduces the target\'s <span style="color:orange; white-space:normal">attack damage</span> by half that amount for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "After using the empowered attack, Trundle gains  bonus attack damage for 5 seconds and reduces the target's attack damage by half that amount for the same duration.",
            increasedStat: 'bonus_ad',
            values: 5,
            user: 'target',
            units: '',
            unitsText:
              "using the empowered attack, Trundle gains  bonus attack damage for 5 seconds and reduces the target's attack damage by half that amount for the same duration.",
            pre: "After using the empowered attack, Trundle gains  bonus attack damage for 5 seconds and reduces the target's attack damage by half that amount for the same duration.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values: '20 / 25 / 30 / 35 / 40',
            valuesHTML: '20 / 25 / 30 / 35 / 40',
          },
          {
            name: 'Attack Damage Reduction:',
            values: '10 / 12.5 / 15 / 17.5 / 20',
            valuesHTML:
              '10 / 12.<small>5</small> / 15 / 17.<small>5</small> / 20',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '20 / 25 / 30 / 35 / 40',
            damagetype: 'None',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
          },
          {
            effectType: 'Damage',
            name: 'Attack Damage Reduction:',
            raw: '10 / 12.5 / 15 / 17.5 / 20',
            damagetype: 'None',
            values: [10, 12.5, 15, 17.5, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 12.5 / 15 / 17.5 / 20',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Chomp  resets Trundle's basic attack timer.",
        descriptionHTML:
          '<i>Chomp <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Trundle\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: 'Special',
    notes:
      '* <i>Chomp</i> will still incur the <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">attack damage</span></span> increase for <b>Trundle</b> even if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, missed while he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>, or it is blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block the attack damage reduction and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.</li></ul>',
  },
  'Frozen Domain': {
    name: 'Frozen Domain',
    display_name: 'Frozen Domain',
    champion: 'Trundle',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'trundledesecrate.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '750',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 775',
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown: '16 / 15 / 14 / 13 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL" title="Trundle"><img alt="Trundle" src="/wiki/images/Trundle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL" title="Trundle/LoL">Trundle</a></span></span> coats the target location in ice for a period. While he is within the area, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, and increased <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> from all sources.',
    ],
    description: [
      {
        icon: '/wiki/images/Frozen_Domain.png',
        description:
          'Active: Trundle coats the target location in ice for 8 seconds. While he is within the area, he gains  bonus attack speed,  bonus movement speed, and 25% increased  healing from all sources.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Trundle</b> coats the target location in ice for 8 seconds. While he is within the area, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, and 25% increased <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> from all sources.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Trundle coats the target location in ice for 8 seconds',
            values: 8,
            user: 'none',
            units: '',
            unitsText: 'coats the target location in ice for 8 seconds',
            pre: 'Trundle coats the target location in ice for 8 seconds',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'While he is within the area, he gains  bonus attack speed,  bonus movement speed, and 25% increased  healing from all sources.',
            healType: 'BonusHealth',
            values: 2,
            valuesIsPercent: true,
            units: 'bonus_ad',
            unitsText:
              'increased  healing from all sources.he is within the area, he gains  bonus attack speed,  bonus movement speed, and 25',
            pre: 'While he is within the area, he gains  bonus attack speed,  bonus movement speed, and 25% increased  healing from all sources.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '30 / 50 / 70 / 90 / 110%',
            valuesHTML: '30 / 50 / 70 / 90 / 110%',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '20 / 28 / 36 / 44 / 52%',
            valuesHTML: '20 / 28 / 36 / 44 / 52%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '30 / 50 / 70 / 90 / 110%',
            values: [30, 50, 70, 90, 110],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70 / 90 / 110%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 28 / 36 / 44 / 52%',
            values: [20, 28, 36, 44, 52],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 28 / 36 / 44 / 52%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Frozen Domain will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Frozen Domain will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self',
    notes:
      "* If <i>Frozen Domain</i> is attempted to be cast beyond 750 units away, it'll cast at the maximum range instead.",
  },
  'Pillar of Ice': {
    name: 'Pillar of Ice',
    display_name: 'Pillar of Ice',
    champion: 'Trundle',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'TrundleCircle.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slow zone radius">360</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knockback radius and destination">225</span>',
    cast_time: '0.<small>25</small>',
    cost: '75',
    costtype: 'Mana',
    cooldown: '24 / 22 / 20 / 18 / 16',
    customlabel: 'Pillar radius',
    custominfo:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pathing radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Pathing radius.png" src="/wiki/images/Pathing_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both pathing and hitbox radius for certain spells that can collide with player-generated terrain">150</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL" title="Trundle"><img alt="Trundle" src="/wiki/images/Trundle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL" title="Trundle/LoL">Trundle</a></span></span> erects an ice pillar at the target location that remains for a few seconds, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> units hit. The pillar acts as <a href="/wiki/Terrain" title="Terrain">terrain</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Pillar_of_Ice.png',
        description:
          'Active: Trundle erects a pillar of ice at the target location for 6 seconds, which  knocks back units hit to 225 units from its center. The pillar acts as terrain and  slows nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Trundle</b> erects a pillar of ice at the target location for 6 seconds, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> units hit to 225 units from its center. The pillar acts as <a href="/wiki/Terrain" title="Terrain">terrain</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Trundle erects a pillar of ice at the target location for 6 seconds, which  knocks back units hit to 225 units from its center',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'erects a pillar of ice at the target location for 6 seconds, which  knocks back units hit to 225 units from its center',
            pre: 'Trundle erects a pillar of ice at the target location for 6 seconds, which  knocks back units hit to 225 units from its center',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '30 / 34 / 38 / 42 / 46%',
            valuesHTML: '30 / 34 / 38 / 42 / 46%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 34 / 38 / 42 / 46%',
            values: [30, 34, 38, 42, 46],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 34 / 38 / 42 / 46%',
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spellshield: false,
    notes:
      '* <i>Pillar of Ice</i> displaces allied units away from the area but does not render them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>.\n<ul><li><ul><li>Allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> (e.g. <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>, <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>) will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> however.</li></ul></li>\n<li><i>Pillar of Ice</i> cannot be placed inside impassable terrain. Attempting to do so will cause the pillar to spawn in the nearest available spot of accessible terrain.</li>\n<li><i>Pillar Of Ice</i> triggers effects such as drawing turret aggro, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Sudden Impact" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sudden_Impact_(Rune)" title="Sudden Impact"><img alt="Sudden Impact" src="/wiki/images/Sudden_Impact_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Sudden_Impact_(Rune)" class="mw-redirect" title="Sudden Impact (Rune)">Sudden Impact</a></span></span> and applying <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Sorcery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery"><img alt="Elixir of Sorcery" src="/wiki/images/Elixir_of_Sorcery_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery">Elixir of Sorcery</a></span></span> by dealing 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>.</li></ul>',
  },
  Subjugate: {
    name: 'Subjugate',
    display_name: 'Subjugate',
    champion: 'Trundle',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'TrundlePain.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '650',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL" title="Trundle"><img alt="Trundle" src="/wiki/images/Trundle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL" title="Trundle/LoL">Trundle</a></span></span> drains the life force of the target enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> for the same amount. He also steals a portion of their <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span>, and increases in <a href="/wiki/Size" title="Size">size</a> while reducing their <a href="/wiki/Size" title="Size">size</a>.',
      'Half of the damage and stealing is applied instantly, and the other half is applied over a few seconds. The <span style="color:yellow; white-space:normal">armor</span> and <span style="color: #00FFFF; white-space:normal">magic resist</span> will remain stolen for a few seconds afterwards.',
    ],
    description: [
      {
        icon: '/wiki/images/Subjugate.png',
        description:
          "Active: Trundle drains the life force out of the target enemy champion, dealing magic damage and  healing himself for the same amount. He also steals 40% of their current  armor and  magic resistance, and increases in size by 18% while reducing the target's size by 9.9%.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Trundle</b> drains the life force out of the target enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for the same amount. He also steals 40% of their <b>current</b> <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span>, and increases in <a href="/wiki/Size" title="Size">size</a> by 18% while reducing the target\'s <a href="/wiki/Size" title="Size">size</a> by 9.<small>9</small>%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "He also steals 40% of their current  armor and  magic resistance, and increases in size by 18% while reducing the target's size by 9.9%.",
            damagetype: 'Magic',
            values: 4,
            valuesIsPercent: true,
            units: 'total_armor',
            unitsText:
              'of their current  armor and  magic resistance, and increases in size by 18also steals 40',
            pre: "He also steals 40% of their current  armor and  magic resistance, and increases in size by 18% while reducing the target's size by 9.9%.",
          },
        ],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values:
              "20 / 22.5 / 25 / 27.5 / 30% (+ 2% per 100 AP) of the target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> of the target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Total Magic Damage:',
            raw: "20 / 22.5 / 25 / 27.5 / 30% (+ 2% per 100 AP) of the target's maximum health",
            healType: 'OutgoingHeals',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
            post: "of the target's maximum health",
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Half of the total damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has  died.',
        descriptionHTML:
          'Half of the <b>total</b> damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">died</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Half of the total damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has  died.',
            damagetype: 'None',
            values: 4,
            units: 'total_ap',
            unitsText:
              'of the total damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has  died.',
            pre: 'Half of the total damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has  died.',
          },
        ],
        leveling: [
          {
            name: 'Initial Magic Damage:',
            values:
              "10 / 11.25 / 12.5 / 13.75 / 15% (+ 1% per 100 AP) of the target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">10 / 11.<small>25</small> / 12.<small>5</small> / 13.<small>75</small> / 15% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% per 100 AP)</span> of the target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Initial Magic Damage:',
            raw: "10 / 11.25 / 12.5 / 13.75 / 15% (+ 1% per 100 AP) of the target's maximum health",
            healType: 'OutgoingHeals',
            values: [10, 11.25, 12.5, 13.75, 15],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '10 / 11.25 / 12.5 / 13.75 / 15%',
            post: "of the target's maximum health",
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The armor and magic resistance will remain stolen for 4 seconds after the drain has ended.',
        descriptionHTML:
          'The <span style="color:yellow; white-space:normal">armor</span> and <span style="color: #00FFFF; white-space:normal">magic resistance</span> will remain stolen for 4 seconds after the drain has ended.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The armor and magic resistance will remain stolen for 4 seconds after the drain has ended.',
            damagetype: 'Magic',
            values: 4,
            units: 'total_armor',
            unitsText:
              'armor and magic resistance will remain stolen for 4 seconds after the drain has ended.',
            pre: 'The armor and magic resistance will remain stolen for 4 seconds after the drain has ended.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'dot',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* The <b>total</b> value of armor and magic resist stolen and damage dealt is determined at the time of cast. The stolen <a href="/wiki/Champion_statistic" title="Champion statistic">stats</a> do not update dynamically relative to the target\'s stats at any point during the effect, as the steal is applied to the <b>current</b> value of armor and magic resistance.\n<ul><li><b>Trundle</b> gains 11.<small>7</small> extra <a href="/wiki/Range" title="Range">range</a> on his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> (relative to his and enemy center) as a consequence of his increased <a href="/wiki/Size" title="Size">size</a>.\n<ul><li>So do his enemies.</li>\n<li>He gains 3.<small>78</small> to 6.<small>255</small> range against the target he <i>subjugated</i>, depending on their base size, and so does the target against him.</li></ul></li>\n<li>The debuff on the target also <i>persists through death</i>.</li>\n<li><b>Trundle</b> will lose the buff if the target loses the debuff, for example if it enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
