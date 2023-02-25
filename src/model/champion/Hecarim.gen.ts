import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Hecarim';

export default {
  Warpath: {
    name: 'Warpath',
    display_name: 'Warpath',
    champion: 'Hecarim',
    skill: 'I',
    image: {
      full: 'Hecarim_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL" title="Hecarim"><img alt="Hecarim" src="/wiki/images/Hecarim_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL" title="Hecarim/LoL">Hecarim</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> equal to a portion of his <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Warpath.png',
        description:
          'Innate: Hecarim gains  bonus attack damage equal to 12% − 24% (based on level) of his  bonus movement speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Hecarim</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> equal to <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="12%+2% every 3 levels starting from level 3" data-bot_values="12;14;16;18;20;22;24" data-top_values="1;3;6;9;12;15;18" data-bot_key="%">12% − 24% (based on level)</span> of his <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'Hecarim gains  bonus attack damage equal to 12% − 24% (based on level) of his  bonus movement speed.',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'of his  bonus movement speed.',
            pre: 'Hecarim gains  bonus attack damage equal to 12% − 24%',
            post: 'of his  bonus movement speed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Warpath\'s</i> <b>bonus</b> attack damage will adjust itself to any temporary movement speed <a href="/wiki/Buff" title="Buff">buffs</a> and <a href="/wiki/Debuff" title="Debuff">debuffs</a> <b>Hecarim</b> is affected by.\n<ul><li><ul><li>Since this only affects <b>bonus</b> values <b>Hecarim</b> will not dip below his regular attack damage if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> below his <b>base</b> movement speed.</li></ul></li>\n<li>The amount of movement speed scaling to <b>bonus</b> attack damage is refreshed every 0.<small>25</small> seconds.</li></ul>',
  },
  Rampage: {
    name: 'Rampage',
    display_name: 'Rampage',
    champion: 'Hecarim',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'HecarimRapidSlash.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 375',
    cast_time: 'none',
    cost: '30',
    costtype: 'Mana',
    cooldown: '4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL" title="Hecarim"><img alt="Hecarim" src="/wiki/images/Hecarim_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL" title="Hecarim/LoL">Hecarim</a></span></span> cleaves his glaive to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
      'Whenever <i>Rampage</i> hits at least one enemy, he gains a stack, up to a cap.',
      '<span class="template_sbc"><b>Rampage:</b></span> For each stack, <i>Rampage\'s</i> damage is increased and the cooldown is <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Rampage.png',
        description:
          'Active: Hecarim cleaves his glaive around himself, dealing physical damage to nearby enemies, reduced to 60% against  minions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Hecarim</b> cleaves his glaive around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, reduced to 60% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Hecarim cleaves his glaive around himself, dealing physical damage to nearby enemies, reduced to 60% against  minions.',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against  minions.cleaves his glaive around himself, dealing physical damage to nearby enemies, reduced to 60',
            pre: 'Hecarim cleaves his glaive around himself, dealing physical damage to nearby enemies, reduced to 60% against  minions.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 85 / 110 / 135 / 160 (+ 90% bonus AD)',
            valuesHTML:
              '60 / 85 / 110 / 135 / 160 <span style="color:orange; white-space:normal">(+&nbsp;90% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 90% bonus AD)',
            damagetype: 'Physical',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If this damages an enemy, Hecarim gains a stack of Rampage for 8 seconds,  refreshing on subsequent damage and stacking up to 3 times. Each stack increases Rampage's damage by 3% (+ 4% per 100 bonus AD) and reduces its  base cooldown by 0.75 seconds, up to a 9% (+ 12% per 100 bonus AD) damage increase and a 2.25-second reduction of the base cooldown at maximum stacks. Stacks expire by one every 1 second when the duration ends.",
        descriptionHTML:
          'If this damages an enemy, <b>Hecarim</b> gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Rampage</i> for 8 seconds,  refreshing on subsequent damage and stacking up to 3 times. Each stack increases <i>Rampage\'s</i> damage by 3% <span style="color:orange; white-space:normal">(+&nbsp;4% per 100 <b>bonus</b> AD)</span> and reduces its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>base</b> cooldown</span> by 0.<small>75</small> seconds, up to a 9% <span style="color:orange; white-space:normal">(+&nbsp;12% per 100 <b>bonus</b> AD)</span> damage increase and a 2.<small>25</small>-second reduction of the <b>base</b> cooldown at maximum stacks. Stacks expire by one every 1 second when the duration ends.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'If this damages an enemy, Hecarim gains a stack of Rampage for 8 seconds,  refreshing on subsequent damage and stacking up to 3 times',
            min: 0,
            max: 3,
            description:
              'If this damages an enemy, Hecarim gains a stack of Rampage for 8 seconds,  refreshing on subsequent damage and stacking up to 3 times',
            values: 8,
            units: 'genericStacks',
            unitsText:
              'this damages an enemy, Hecarim gains a stack of Rampage for 8 seconds,  refreshing on subsequent damage and stacking up to 3 times',
            pre: 'If this damages an enemy, Hecarim gains a stack of Rampage for 8 seconds,  refreshing on subsequent damage and stacking up to 3 times',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: "Each stack increases Rampage's damage by 3% (+ 4% per 100 bonus AD) and reduces its  base cooldown by 0.75 seconds, up to a 9% (+ 12% per 100 bonus AD) damage increase and a 2.25-second reduction of the base cooldown at maximum stacks",
            min: 0,
            max: 10,
            description:
              "Each stack increases Rampage's damage by 3% (+ 4% per 100 bonus AD) and reduces its  base cooldown by 0.75 seconds, up to a 9% (+ 12% per 100 bonus AD) damage increase and a 2.25-second reduction of the base cooldown at maximum stacks",
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'and reduces its  base cooldown by 0.75 seconds, up to a 9%',
            pre: "Each stack increases Rampage's damage by 3%",
            post: 'and reduces its  base cooldown by 0.75 seconds, up to a 9%',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 4% per 100 bonus AD',
              },
              {
                values: 12,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 12% per 100 bonus AD',
              },
            ],
          },
          {
            effectType: 'Stacks',
            name: 'Line 3:',
            raw: 'Stacks expire by one every 1 second when the duration ends.',
            min: 0,
            max: 10,
            description:
              'Stacks expire by one every 1 second when the duration ends.',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'expire by one every 1 second when the duration ends.',
            pre: 'Stacks expire by one every 1 second when the duration ends.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes: '* No additional notes.',
  },
  'Spirit of Dread': {
    name: 'Spirit of Dread',
    display_name: 'Spirit of Dread',
    champion: 'Hecarim',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'HecarimW.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 525',
    cast_time: 'none',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">16 / 15.<small>5</small> / 15 / 14.<small>5</small> / 14</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL" title="Hecarim"><img alt="Hecarim" src="/wiki/images/Hecarim_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL" title="Hecarim/LoL">Hecarim</a></span></span> continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies for a short time.',
      'During this time, he gains <b>bonus</b> resistances and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for a portion of any damage he and his allies deal to nearby enemies, with reduced healing on ally damage.',
    ],
    description: [
      {
        icon: '/wiki/images/Spirit_of_Dread.png',
        description:
          'Active: Hecarim surrounds himself with the Spirit of Dread for 4 seconds, dealing magic damage every second to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Hecarim</b> surrounds himself with the Spirit of Dread for 4 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every second to nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Hecarim surrounds himself with the Spirit of Dread for 4 seconds, dealing magic damage every second to nearby enemies.',
            damagetype: 'Magic',
            values: 4,
            units: 'total_ad',
            unitsText:
              'surrounds himself with the Spirit of Dread for 4 seconds, dealing magic damage every second to nearby enemies.',
            pre: 'Hecarim surrounds himself with the Spirit of Dread for 4 seconds, dealing magic damage every second to nearby enemies.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '20 / 30 / 40 / 50 / 60 (+ 20% AP)',
            valuesHTML:
              '20 / 30 / 40 / 50 / 60 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 20% AP)',
            damagetype: 'Magic',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
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
        icon: '/wiki/images/undefined',
        description:
          'While active, Hecarim gains  bonus armor and  bonus magic resistance and is  healed for 25% (+ 2% of 100 bonus AD) of the post-mitigation damage dealt to enemies within the area, halved to 12.5% (+ 1% of 100 bonus AD) for damage dealt by allies. The healing is capped against  minions and  monsters.',
        descriptionHTML:
          'While active, <b>Hecarim</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> for 25% <span style="color:orange; white-space:normal">(+&nbsp;2% of 100 <b>bonus</b> AD)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt to enemies within the area, halved to 12.<small>5</small>% <span style="color:orange; white-space:normal">(+&nbsp;1% of 100 <b>bonus</b> AD)</span> for damage dealt by allies. The healing is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'While active, Hecarim gains  bonus armor and  bonus magic resistance and is  healed for 25% (+ 2% of 100 bonus AD) of the post-mitigation damage dealt to enemies within the area, halved to 12.5% (+ 1% of 100 bonus AD) for damage dealt by allies',
            healType: 'BonusHealth',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of the post-mitigation damage dealt to enemies within the area, halved to 12.5%',
            pre: 'While active, Hecarim gains  bonus armor and  bonus magic resistance and is  healed for 25%',
            post: 'of the post-mitigation damage dealt to enemies within the area, halved to 12.5%',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'of 100 bonus AD',
                pre: '+ 2% of 100 bonus AD',
              },
              {
                values: 1,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'of 100 bonus AD',
                pre: '+ 1% of 100 bonus AD',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Bonus Resistances:',
            values: '15 / 20 / 25 / 30 / 35',
            valuesHTML: '15 / 20 / 25 / 30 / 35',
          },
          {
            name: 'Capped Healing:',
            values: '120 / 150 / 180 / 210 / 240',
            valuesHTML: '120 / 150 / 180 / 210 / 240',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '15 / 20 / 25 / 30 / 35',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
          },
          {
            effectType: 'Heal',
            name: 'Capped Healing:',
            raw: '120 / 150 / 180 / 210 / 240',
            healType: 'DrainEffect',
            values: [120, 150, 180, 210, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 150 / 180 / 210 / 240',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'AoeDoT',
    spellshield: false,
    notes:
      '* The healing cap against minions accounts for every single one regardless of how many are present and/or affected by <i>Spirit of Dread</i> at the time of cast.',
  },
  'Devastating Charge': {
    name: 'Devastating Charge',
    display_name: 'Devastating Charge',
    champion: 'Hecarim',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'HecarimRamp.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">18</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL" title="Hecarim"><img alt="Hecarim" src="/wiki/images/Hecarim_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL" title="Hecarim/LoL">Hecarim</a></span></span> ignores unit collision and builds up <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> over a short time.',
      'During this time, <b>Hecarim\'s</b> next basic attack will gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and cause him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span>. Upon arrival, he deals <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> the target, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them afterward.',
      'The effects are increased based on the distance he traveled in the duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Devastating_Charge.png',
        description:
          'Active: Hecarim becomes  ghosted and gains  25% − 65% (based on time active) bonus total movement speed for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Hecarim</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="time active" data-displayformula="3.3% \'\'\'total bonus\'\'\' movement speed every 0.25 seconds. \'\'This is capped at 3 seconds.\'\'" data-bot_values="25;28.33;31.67;35;38.33;41.67;45;48.33;51.67;55;58.33;61.67;65" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3" data-bot_key="%">25% − 65% (based on time active)</span> <b>bonus total</b> movement speed</span></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Hecarim becomes  ghosted and gains  25% − 65% (based on time active) bonus total movement speed for 4 seconds.',
            values: 2,
            valuesIsPercent: true,
            basedOn: 'time active',
            user: 'none',
            units: '',
            unitsText: 'bonus total movement speed for 4 seconds.',
            pre: 'Hecarim becomes  ghosted and gains  25% − 65%',
            post: 'bonus total movement speed for 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "During this time, Hecarim empowers his next basic attack to gain 50 − 250 (based on distance traveled)  bonus range and cause him to  dash in the target's direction,  revealing them for 1 second. If the target remains nearby during the dash, the  ghosting and bonus movement speed ends prematurely and Hecarim  knocks them back 150 − 350 (based on distance traveled) units, though not through terrain,  stuns them for 0.25 seconds, and deals them modified physical damage, increased by 0% − 100% (based on distance traveled).",
        descriptionHTML:
          'During this time, <b>Hecarim</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to gain <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="50;0" data-finish="250;1200" data-bot_values="50;75;100;125;150;175;200;225;250" data-top_values="0;150;300;450;600;750;900;1050;1200">50 − 250 (based on distance traveled)</span> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and cause him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> in the target\'s direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 1 second. If the target remains nearby during the dash, the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> ends prematurely and <b>Hecarim</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="150;0" data-finish="350;1200" data-bot_values="150;175;200;225;250;275;300;325;350" data-top_values="0;150;300;450;600;750;900;1050;1200">150 − 350 (based on distance traveled)</span> units, though not through terrain, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 0.<small>25</small> seconds, and deals them <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="0;0" data-finish="100;1200" data-bot_values="0;12.5;25;37.5;50;62.5;75;87.5;100" data-top_values="0;150;300;450;600;750;900;1050;1200" data-bot_key="%">0% − 100% (based on distance traveled)</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "During this time, Hecarim empowers his next basic attack to gain 50 − 250 (based on distance traveled)  bonus range and cause him to  dash in the target's direction,  revealing them for 1 second",
            values: [5, 250],
            basedOn: 'distance traveled',
            user: 'none',
            units: '',
            unitsText:
              "bonus range and cause him to  dash in the target's direction,  revealing them for 1 second",
            pre: 'During this time, Hecarim empowers his next basic attack to gain 50 − 250',
            post: "bonus range and cause him to  dash in the target's direction,  revealing them for 1 second",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If the target remains nearby during the dash, the  ghosting and bonus movement speed ends prematurely and Hecarim  knocks them back 150 − 350 (based on distance traveled) units, though not through terrain,  stuns them for 0.25 seconds, and deals them modified physical damage, increased by 0% − 100% (based on distance traveled).',
            damagetype: 'Physical',
            values: [1, 350],
            basedOn: 'distance traveled',
            user: 'none',
            units: '',
            unitsText:
              'units, though not through terrain,  stuns them for 0.25 seconds, and deals them modified physical damage, increased by 0% − 100%',
            pre: 'If the target remains nearby during the dash, the  ghosting and bonus movement speed ends prematurely and Hecarim  knocks them back 150 − 350',
            post: 'units, though not through terrain,  stuns them for 0.25 seconds, and deals them modified physical damage, increased by 0% − 100%',
          },
        ],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values: '30 / 45 / 60 / 75 / 90 (+ 50% bonus AD)',
            valuesHTML:
              '30 / 45 / 60 / 75 / 90 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
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
        icon: '/wiki/images/undefined',
        description:
          'Devastating Charge can  critically strike for (75% +  35%) AD bonus physical damage.',
        descriptionHTML:
          '<i>Devastating Charge</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Devastating Charge can  critically strike for (75% +  35%) AD bonus physical damage.',
            damagetype: 'Physical',
            values: 0,
            units: 'bonus_ad',
            unitsText: 'AD bonus physical damage.',
            pre: 'Devastating Charge can  critically strike for',
            post: 'AD bonus physical damage.',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '75% +  35%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Devastating Charge  resets Hecarim's basic attack timer. Hecarim can cast any of his abilities during the dash. Devastating Charge's duration is paused during  Onslaught of Shadows.",
        descriptionHTML:
          '<i>Devastating Charge <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Hecarim\'s</b> basic attack timer. <b>Hecarim</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Devastating Charge\'s duration is paused during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-ability="Onslaught of Shadows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL#Onslaught_of_Shadows" title="Onslaught of Shadows"><img alt="Onslaught of Shadows" src="/wiki/images/Hecarim_Onslaught_of_Shadows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL#Onslaught_of_Shadows" title="Hecarim/LoL">Onslaught of Shadows</a></span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    notes:
      '* <b>Hecarim</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span>.\n<ul><li><ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-ability="Onslaught of Shadows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL#Onslaught_of_Shadows" title="Onslaught of Shadows"><img alt="Onslaught of Shadows" src="/wiki/images/Hecarim_Onslaught_of_Shadows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL#Onslaught_of_Shadows" title="Hecarim/LoL">Onslaught of Shadows</a></span></span> will interrupt the dash.</li></ul></li>\n<li>If the target does not remain nearby during the dash, <i>Devastating Charge\'s</i> effect will not be consumed.</li>\n<li>The <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks multiplicatively"><a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking#Stacks multiplicatively"><img alt="Multiple stacking icon.png" src="/wiki/images/Multiple_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking">stacks multiplicatively</a></span> with other sources of movement speed boosts.</li>\n<li>The bonus attack range stacks additively with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span>.</li>\n<li><i>Devastating Charge</i> will still apply its effects to the target even if the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>, but not if he goes into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li><i>Devastating Charge\'s</i> damage will apply <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> and will affect structures.</li>\n<li><i>"Distance traveled"</i> can be simple movement as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinking</a></span>.</li>\n<li><i>Devastating Charge\'s</i> damage will not bypass <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span> but the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> will still be applied.\n<ul><li><i>Devastating Charge</i> will still deal damage while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li></ul></li>\n<li>While <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>, <b>Hecarim</b> loses the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> from <i>Devastating Charge</i>.\n<ul><li><b>Hecarim</b> will not use the empowered attack while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li></ul></li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> does not follow targets. The target\'s position at the time of the enhanced attack is the direction <b>Hecarim</b> will leap to.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li></ul>',
  },
  'Onslaught of Shadows': {
    name: 'Onslaught of Shadows',
    display_name: 'Onslaught of Shadows',
    champion: 'Hecarim',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'HecarimUlt.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1510',
    target_range: '1000 / 300',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Fear radius around dash end">315</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Individual spectral riders missile width">80</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Width of full effect given by outermost riders">480</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both dash and spectral riders missile speed">1100</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown: '140 / 120 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL" title="Hecarim"><img alt="Hecarim" src="/wiki/images/Hecarim_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL" title="Hecarim/LoL">Hecarim</a></span></span> summons spectral riders and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">charges</a></span> in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies they pass through.',
      'Upon arrival, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> and gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies for a duration based on the distance traveled.',
    ],
    description: [
      {
        icon: '/wiki/images/Onslaught_of_Shadows.png',
        description:
          'Active: Hecarim  dashes with  displacement immunity to the target location and summons 5 spectral riders in an arrow formation that charge alongside him in the target direction, dealing magic damage to all enemies in their path and  revealing them for 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Hecarim</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location and summons 5 spectral riders <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="see notes">in an arrow formation</span> that charge alongside him in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies in their path and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Hecarim  dashes with  displacement immunity to the target location and summons 5 spectral riders in an arrow formation that charge alongside him in the target direction, dealing magic damage to all enemies in their path and  revealing them for 2.5 seconds.',
            damagetype: 'Magic',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'dashes with  displacement immunity to the target location and summons 5 spectral riders in an arrow formation that charge alongside him in the target direction, dealing magic damage to all enemies in their path and  revealing them for 2.5 seconds.',
            pre: 'Hecarim  dashes with  displacement immunity to the target location and summons 5 spectral riders in an arrow formation that charge alongside him in the target direction, dealing magic damage to all enemies in their path and  revealing them for 2.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 100% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 100% AP)',
            damagetype: 'Magic',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Upon arrival, he  fears nearby enemies for 0.75 − 1.5 (based on distance traveled) seconds and  slows them, ramping to 99% over the duration.',
        descriptionHTML:
          'Upon arrival, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> nearby enemies for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="0.75;0" data-finish="1.5;1000" data-bot_values="0.75;0.83;0.9;0.98;1.05;1.13;1.2;1.27;1.35;1.43;1.5" data-top_values="0;100;200;300;400;500;600;700;800;900;1000">0.<small>75</small> − 1.<small>5</small> (based on distance traveled)</span> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them, ramping to 99% over the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Upon arrival, he  fears nearby enemies for 0.75 − 1.5 (based on distance traveled) seconds and  slows them, ramping to 99% over the duration.',
            values: [0, 1.5],
            basedOn: 'distance traveled',
            user: 'none',
            units: '',
            unitsText:
              'seconds and  slows them, ramping to 99% over the duration.',
            pre: 'Upon arrival, he  fears nearby enemies for 0.75 − 1.5',
            post: 'seconds and  slows them, ramping to 99% over the duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The wave of spectral riders travels independently of Hecarim and will always charge at the same distance. The slow's strength cannot be reduced and is increased based on how far away the affected units are from Hecarim. Onslaught of Shadows will cast at max range if cast beyond that.",
        descriptionHTML:
          "<i>The wave of spectral riders travels independently of <b>Hecarim</b> and will always charge at the same distance. The slow's strength cannot be reduced and is increased based on how far away the affected units are from <b>Hecarim</b>. Onslaught of Shadows will cast at max range if cast beyond that.</i>",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: '',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      "* The spectral rider missiles originate at <b>Hecarim's</b> location, 145 units behind and 100 units to either side of him, and 290 units behind and 200 units to either side. They travel 1510 units forward parallel to Hecarim from their origin each.\n<ul><li>Only the spectral riders deal damage to enemies they pierce, <b>Hecarim</b> only dashes and fears enemies at the end of it.</li></ul>",
  },
} satisfies { [skillName in string]: SkillData };
