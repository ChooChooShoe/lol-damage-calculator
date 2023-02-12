import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Camille';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Camille_Adaptive_Defenses.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Camille\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against an enemy champion is enhanced to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> grant her a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">20% of her <b>maximum</b> health</span></span> for 2 seconds from either exclusively <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage"><span style="color: #FF8C34; white-space:normal">physical damage</span></a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage"><span style="color: #00B0F0; white-space:normal">magic damage</span></a></span>, based on which type the target has previously dealt most of against champions as well as on <b>Camille\'s</b> <b>current</b> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Camille_Precision_Protocol.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> empowers her next basic attack within 4 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and grant her <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span> for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '20 / 25 / 30 / 35 / 40% AD',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '20 / 25 / 30 / 35 / 40% AD',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '20 / 25 / 30 / 35 / 40%',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
      },
    ],
  },
  {
    img: '/wiki/images/Camille_Precision_Protocol_2.png',
    description:
      'After 0.<small>25</small> seconds, <i>Precision Protocol</i> can then be recast within the next 3.<small>5</small> seconds at no additional cost.',
    leveling: [],
  },
  {
    img: '/wiki/images/Camille_Precision_Protocol_3.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Camille</b> mimics the first cast\'s effects. If <i>Precision Protocol</i> is recast after 1.<small>5</small> seconds of the first attack, then the <b>bonus</b> damage is doubled, and <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="36%+(4%*level). \'\'Capped at level 16\'\'" data-bot_values="40;44;48;52;56;60;64;68;72;76;80;84;88;92;96;100" data-top_values="" data-bot_key="%">40% − 100% (based on level)</span> of the attack\'s <b>total</b> damage will be dealt as <span style="color: #F9966B; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;true damage</span></span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 3:',
        raw: "5 seconds of the first attack, then the bonus damage is doubled, and 40% − 100% (based on level) of the attack's total damage will be dealt as  true damage",
        damagetype: 'True',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText: "of the attack's total damage will be dealt as  true damage",
        pre: '5 seconds of the first attack, then the bonus damage is doubled, and 40% − 100%',
        post: "of the attack's total damage will be dealt as  true damage",
      },
      {
        effectType: 'Unique',
        name: 'Increased Mixed Damage:',
        raw: '40 / 50 / 60 / 70 / 80% AD',
        values: [40, 50, 60, 70, 80],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '40 / 50 / 60 / 70 / 80% AD',
      },
    ],
  },
  {
    description:
      '<i>Both casts of Precision Protocol <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">reset</a></span> <b>Camille\'s</b> basic attack timer. <b>Camille</b> is able to cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="Tactical Sweep" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#Tactical_Sweep" title="Tactical Sweep"><img alt="Tactical Sweep" src="/wiki/images/Camille_Tactical_Sweep.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#Tactical_Sweep" title="Camille/LoL">Tactical Sweep</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="Hookshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#Hookshot" title="Hookshot"><img alt="Hookshot" src="/wiki/images/Camille_Hookshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#Hookshot" title="Camille/LoL">Hookshot</a></span></span>, or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span> during the windup of Precision Protocol\'s empowered attack without cancelling it.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Camille_Tactical_Sweep.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> sweeps her leg in a cone in the target direction over 1.<small>1</small> seconds, during which she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and unable to declare basic attacks. Afterwards, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies within.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '70 / 100 / 130 / 160 / 190 (+ 60% bonus AD)',
        values: [70, 100, 130, 160, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 100 / 130 / 160 / 190',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 60% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies hit by the outer half of the cone take <span style="color:orange; white-space:normal"><b>additional</b> physical damage</span>, capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 80% decaying over 2 seconds. <b>Camille</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> for 100% of this <b>additional</b> damage <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="After modifiers such as resistances">post-mitigation</span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> in the outer half.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Outer Cone Bonus Damage:',
        raw: "5 / 5.5 / 6 / 6.5 / 7% (+ 2.5% per 100 bonus AD) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [5, 5.5, 6, 6.5, 7],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '5 / 5.5 / 6 / 6.5 / 7%',
        post: "of target's maximum health",
        children: [
          {
            values: 2.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 2.5% per 100 bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Non-epic monsters take 50% damage from <i>Tactical Sweep</i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Non-Epic Monster Damage:',
        raw: '35 / 50 / 65 / 80 / 95 (+ 30% bonus AD)',
        values: [35, 50, 65, 80, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 50 / 65 / 80 / 95',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 30% bonus AD',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Bonus Non-Epic Monster Damage:',
        raw: "2.5 / 2.75 / 3 / 3.25 / 3.5% (+ 1.25% per 100 bonus AD) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [2.5, 2.75, 3, 3.25, 3.5],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '2.5 / 2.75 / 3 / 3.25 / 3.5%',
        post: "of target's maximum health",
        children: [
          {
            values: 1.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 1.25% per 100 bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Other abilities can be cast during the animation without cancelling it.</i>',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Camille_Hookshot.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> fires a grapple in the target direction. If the grapple collides with terrain, <b>Camille</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> toward and attach to the terrain for 0.<small>75</small> seconds, during which she gains the ability to cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="Wall Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#Wall_Dive" title="Wall Dive"><img alt="Wall Dive" src="/wiki/images/Camille_Wall_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#Wall_Dive" title="Camille/LoL">Wall Dive</a></span></span>.',
    leveling: [],
  },
  {
    description:
      '<i><b>Camille</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during the dash.</i>',
    leveling: [],
  },
  {
    description:
      '<i>Other abilities can be cast during the ability. Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span> will cause the grapple to disappear if it is in flight.</i>',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Camille_Wall_Dive.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies near the landing location. <i>Wall Dive\'s</i> range is doubled towards enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within 1400 units. <b>Camille</b> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> to non-champions she passes through for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 90% bonus AD)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 90% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Camille</b> stops prematurely upon colliding with an enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> all nearby enemy champions, though not through terrain, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds, while also gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '40 / 45 / 50 / 55 / 60%',
        values: [40, 45, 50, 55, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50 / 55 / 60%',
      },
    ],
  },
  {
    description:
      '<i>Wall Dive may be also cast with movement or attack commands. Other abilities besides <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span> can be cast while grappled or during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Camille_The_Hextech_Ultimatum.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> towards the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> over 0.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for the duration and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupting</a></span> their ongoing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span>.',
    leveling: [],
  },
  {
    description:
      'Upon landing on the target, she becomes targetable again and creates a hexagonal zone around her current location for a duration, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking away</a></span> all other nearby enemies on impact, though not through terrain.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Zone Duration:',
        raw: '2.5 / 3.25 / 4',
        values: [2.5, 3.25, 4],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2.5 / 3.25 / 4',
      },
    ],
  },
  {
    description:
      'The target cannot escape the zone through any means. While within the zone, <b>Camille\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Magic Damage:',
        raw: "5 / 10 / 15 (+ 4 / 6 / 8% of target's current health)",
        healType: 'OutgoingHeals',
        values: [5, 10, 15],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 10 / 15',
        children: [
          {
            values: [4, 6, 8],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: "+ 4 / 6 / 8% of target's current health",
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>The Hextech Ultimatum</i> ends automatically within 1 second if <b>Camille</b> leaves the area or dies.',
    leveling: [],
  },
];
export const Camille = { I, Q, W, E1, E2, R };
