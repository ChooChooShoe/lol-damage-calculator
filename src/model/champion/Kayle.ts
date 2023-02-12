import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Kayle';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Kayle_Divine_Ascent.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Kayle</b> ascends through four forms that each grant additional bonuses. She ascends upon spending a skill point at <a href="/wiki/Experience_(champion)" title="Experience (champion)">levels</a> 1, 6, 11, and 16.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kayle_Zealous.png',
    description:
      '<span class="template_sbc"><b>Level 1 - Zealous:</b></span> <b>Kayle\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Zeal</i> for 5 seconds, refreshing on subsequent hits and stacking up to 5 times. For each stack, she gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">6%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% per 100 AP)</span> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, up to a maximum <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">30%</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% per 100 AP)</span>. At max stacks, she becomes <i>Exalted</i>, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' For each stack, she gains  6% (+ 1% per 100 AP) bonus attack speed, up to a maximum  30% (+ 5% per 100 AP)',
        increasedStat: 'bonus_ad',
        values: 6,
        valuesIsPercent: true,
        user: 'player',
        units: '',
        unitsText: 'bonus attack speed, up to a maximum  30%',
        pre: 'For each stack, she gains  6%',
        post: 'bonus attack speed, up to a maximum  30%',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 1% per 100 AP',
          },
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
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
      '<span class="template_sbc"><b>Level 6 - Arisen:</b></span> <b>Kayle</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;350 <b>bonus</b> attack range</span> for a total of <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;525</span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Level 11 - Aflame:</b></span> <b>Kayle</b> gains 10% bonus <a href="/wiki/Size" title="Size">size</a>. While <b>Kayle</b> is <i>Exalted</i>, her basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> also launch a <i>wave</i> of fire forward that deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Starfire Spellblade.png|20px|link=]] Starfire Spellblade\'s Rank" data-bot_values="15;15;20;25;30;35" data-top_values="0;1;2;3;4;5">15 − 35 (based on <img alt="Starfire Spellblade.png" src="/wiki/images/Kayle_Starfire_Spellblade.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> Starfire Spellblade\'s Rank)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;10% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies it passes through. The <i>wave</i> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: " While Kayle is Exalted, her basic attacks on-attack also launch a wave of fire forward that deals 15 − 35 (based on  Starfire Spellblade's Rank) (+ 10% bonus AD) (+ 25% AP) magic damage to all enemies it passes through",
        damagetype: 'Magic',
        values: [1, 35],
        user: 'none',
        units: '',
        unitsText: 'magic damage to all enemies it passes through',
        pre: 'While Kayle is Exalted, her basic attacks on-attack also launch a wave of fire forward that deals 15 − 35',
        post: 'magic damage to all enemies it passes through',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'base_ad',
            unitsText: "based on  Starfire Spellblade's Rank",
            pre: "based on  Starfire Spellblade's Rank",
          },
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 10% bonus AD',
          },
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
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
      '<span class="template_sbc"><b>Level 16 - Transcendent:</b></span> <b>Kayle</b> gains an additional <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;100 <b>bonus</b> attack range</span> for a total of <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;625</span>, and permanently gains the full effects of <i>Zealous</i>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Kayle_Radiant_Blast.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayle</b> conjures a portal in front of her that faces the target direction, from which a celestial sword launches forward. The sword expands upon hitting an enemy, targets struck in the area are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 2 seconds, and inflicted with 15% <b>reduced</b> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 60% bonus AD) (+ 50% AP)',
        values: [60, 100, 140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 60% bonus AD',
          },
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '26 / 32 / 38 / 44 / 50%',
        values: [26, 32, 38, 44, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '26 / 32 / 38 / 44 / 50%',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Kayle_Celestial_Blessing.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayle</b> and the target allied champion are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> and gain <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '55 / 80 / 105 / 130 / 155 (+ 25% AP)',
        values: [55, 80, 105, 130, 155],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 80 / 105 / 130 / 155',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '24 / 28 / 32 / 36 / 40% (+ 8% per 100 AP)',
        values: [24, 28, 32, 36, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '24 / 28 / 32 / 36 / 40%',
        children: [
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 8% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If cast without a valid target, or <a href="/wiki/Self-targeted" title="Self-targeted">self-cast</a>, <i>Celestial Blessing</i> will automatically target the closest allied champion in range, prioritizing the one with the lowest <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kayle</b> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. The <i>waves</i> from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Divine Ascent"><img alt="Divine Ascent" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Divine Ascent</a></span></span></i> have base damage equal to this effect\'s base damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Passive Damage:',
        raw: '15 / 20 / 25 / 30 / 35 (+ 10% bonus AD) (+ 25% AP)',
        values: [15, 20, 25, 30, 35],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 10% bonus AD',
          },
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Kayle_Starfire_Spellblade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayle</b> kindles her blade, empowering her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 6 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and deal additional <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> that is capped at 400 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. If <b>Kayle</b> is not yet <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Arisen"><img alt="Arisen" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Arisen</a></span></span></i>, this attack becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;525 range</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Magic Damage:',
        raw: "8 / 8.5 / 9 / 9.5 / 10% (+ 1.5% per 100 AP) of target's missing health",
        healType: 'OutgoingHeals',
        values: [8, 8.5, 9, 9.5, 10],
        valuesIsPercent: true,
        user: 'target',
        units: 'missing_hp',
        unitsText: "of target's missing health",
        pre: '8 / 8.5 / 9 / 9.5 / 10%',
        post: "of target's missing health",
        children: [
          {
            values: 1.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 1.5% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Kayle_Starfire_Spellblade_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Aflame"><img alt="Aflame" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Aflame</a></span></span> Bonus:</b></span> The attack explodes upon the target, dealing its damage to surrounding enemies and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects. This is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [],
  },
  {
    description:
      '<i>Starfire Spellblade <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Kayle\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Kayle_Divine_Judgment.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayle</b> grants herself or a target allied champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerability</a></span> for a few seconds and conjures swords of fire.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Invulnerability Duration:',
        raw: '2 / 2.5 / 3',
        values: [2, 2.5, 3],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 / 2.5 / 3',
      },
    ],
  },
  {
    description:
      'When she finishes the cast, she rains the swords down around the target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 350 / 500 (+ 100% bonus AD) (+ 80% AP)',
        values: [200, 350, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 350 / 500',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
        ],
      },
    ],
  },
];
export const Kayle = { I, Q, W, E, R };
