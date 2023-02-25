import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Camille';

export default {
  'Adaptive Defenses': {
    name: 'Adaptive Defenses',
    display_name: 'Adaptive Defenses',
    champion: 'Camille',
    skill: 'I',
    image: {
      full: 'Camille_Passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;1" data-finish="10;13" data-bot_values="20;15;10" data-top_values="1;7;13">20 / 15 / 10 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL" title="Camille\'s"><img alt="Camille\'s" src="/wiki/images/Camille_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL" title="Camille/LoL">Camille\'s</a></span></span> next basic attack against a champion will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> grant her a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> against their damage type (<span style="color: #FF8C34; white-space:normal">physical</span> or <span style="color: #00B0F0; white-space:normal">magical</span>) for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Adaptive_Defenses.png',
        description:
          "Innate: Periodically, Camille's next basic attack against an enemy champion is enhanced to  on-hit grant her a  shield equal to  20% of her maximum health for 2 seconds from either exclusively  physical damage or  magic damage, based on which type the target has previously dealt most of against champions as well as on Camille's current  armor and  magic resistance.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Camille\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against an enemy champion is enhanced to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> grant her a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">20% of her <b>maximum</b> health</span></span> for 2 seconds from either exclusively <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage"><span style="color: #FF8C34; white-space:normal">physical damage</span></a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage"><span style="color: #00B0F0; white-space:normal">magic damage</span></a></span>, based on which type the target has previously dealt most of against champions as well as on <b>Camille\'s</b> <b>current</b> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: "Periodically, Camille's next basic attack against an enemy champion is enhanced to  on-hit grant her a  shield equal to  20% of her maximum health for 2 seconds from either exclusively  physical damage or  magic damage, based on which type the target has previously dealt most of against champions as well as on Camille's current  armor and  magic resistance.",
            healType: 'PhysicalVamp',
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'base_ad',
            unitsText:
              "of her maximum health for 2 seconds from either exclusively  physical damage or  magic damage, based on which type the target has previously dealt most of against champions as well as on Camille's current  armor and  magic resistance.Camille's next basic attack against an enemy champion is enhanced to  on-hit grant her a  shield equal to  20",
            pre: "Periodically, Camille's next basic attack against an enemy champion is enhanced to  on-hit grant her a  shield equal to  20% of her maximum health for 2 seconds from either exclusively  physical damage or  magic damage, based on which type the target has previously dealt most of against champions as well as on Camille's current  armor and  magic resistance.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Shield',
    occurrence: 'On-hit',
    notes:
      '* <i>Adaptive Defenses</i> goes on cooldown after the shield expires or is destroyed.\n<ul><li>The shield-typing is determined based on the <b>total</b> damage the target has dealt to champions that game (as a percentage) versus <b>Camille\'s</b> <b>current</b> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span>.\n<ul><li>For example, with little <b>bonus</b> resistances <b>Camille</b> would likely gain the most obvious shield-typing - i.e. <a href="/wiki/Shield#Physical_shields" title="Shield">physical shield</a> versus champions primarily dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <a href="/wiki/Shield#Magic_shields" title="Shield">magic shield</a> versus champions primarily dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. However, if she has a sufficient amount of <span style="color:yellow; white-space:normal">armor</span> against a champion dealing both alternates of <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color: #00B0F0; white-space:normal">magic damage</span>, she will receive a magic shield as the <span style="color: #FF8C34; white-space:normal">physical damage</span> threat is already being mitigated by her <span style="color:yellow; white-space:normal">armor</span>, and vice versa.</li></ul></li>\n<li>The type of shield that will be granted to <b>Camille</b> when she attacks any one enemy champion is shown as an icon beneath their <a href="/wiki/Health_bar" title="Health bar">health bar</a>: <span style="color: #FF8C34; white-space:normal">orange</span> for physical shield and <span style="color: #00B0F0; white-space:normal">blue</span> for magic shield.</li>\n<li><i>Adaptive Defenses</i> takes priority over all other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> except <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-ability="Black Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL#Black_Shield" title="Black Shield"><img alt="Black Shield" src="/wiki/images/Morgana_Black_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL#Black_Shield" title="Morgana/LoL">Black Shield</a></span></span>.</li>\n<li><i>Adaptive Defenses</i> Will not grant <b>Camille</b> the shield is the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, or if she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Camille_Original_PassiveReady_0.ogg   "Adapt or perish."',
    video: 'Camille - Passive',
  },
  'Precision Protocol': {
    name: 'Precision Protocol',
    display_name: 'Precision Protocol',
    champion: 'Camille',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'CamilleQ.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '25',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on first attack">9 / 8.<small>25</small> / 7.<small>5</small> / 6.<small>75</small> / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL" title="Camille\'s"><img alt="Camille\'s" src="/wiki/images/Camille_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL" title="Camille/LoL">Camille\'s</a></span></span> next basic attack deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and grants her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
      '<i>Precision Protocol</i> can be recast for a short time, dealing significantly increased damage if <b>Camille</b> delays the recast. A portion of the increased damage is dealt as <span style="color: #F9966B; white-space:normal">true damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Precision_Protocol.png',
        description:
          'Active: Camille empowers her next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage and grant her  bonus movement speed for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> empowers her next basic attack within 4 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and grant her <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span> for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Camille empowers her next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage and grant her  bonus movement speed for 1 second.',
            increasedStat: 'bonus_ad',
            values: 4,
            units: '',
            unitsText:
              'empowers her next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage and grant her  bonus movement speed for 1 second.',
            pre: 'Camille empowers her next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage and grant her  bonus movement speed for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '20 / 25 / 30 / 35 / 40% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">20 / 25 / 30 / 35 / 40% AD</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '20 / 25 / 30 / 35 / 40% AD',
            damagetype: 'Physical',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
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
        icon: '/wiki/images/Precision_Protocol_2.png',
        description:
          'After 0.25 seconds, Precision Protocol can then be recast within the next 3.5 seconds at no additional cost.',
        descriptionHTML:
          'After 0.<small>25</small> seconds, <i>Precision Protocol</i> can then be recast within the next 3.<small>5</small> seconds at no additional cost.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Precision_Protocol_3.png',
        description:
          "Recast: Camille mimics the first cast's effects. If Precision Protocol is recast after 1.5 seconds of the first attack, then the bonus damage is doubled, and 40% − 100% (based on level) of the attack's total damage will be dealt as  true damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Camille</b> mimics the first cast\'s effects. If <i>Precision Protocol</i> is recast after 1.<small>5</small> seconds of the first attack, then the <b>bonus</b> damage is doubled, and <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="36%+(4%*level). \'\'Capped at level 16\'\'" data-bot_values="40;44;48;52;56;60;64;68;72;76;80;84;88;92;96;100" data-top_values="" data-bot_key="%">40% − 100% (based on level)</span> of the attack\'s <b>total</b> damage will be dealt as <span style="color: #F9966B; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;true damage</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "If Precision Protocol is recast after 1.5 seconds of the first attack, then the bonus damage is doubled, and 40% − 100% (based on level) of the attack's total damage will be dealt as  true damage.",
            damagetype: 'True',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ad',
            unitsText:
              "of the attack's total damage will be dealt as  true damage.",
            pre: 'If Precision Protocol is recast after 1.5 seconds of the first attack, then the bonus damage is doubled, and 40% − 100%',
            post: "of the attack's total damage will be dealt as  true damage.",
          },
        ],
        leveling: [
          {
            name: 'Increased Mixed Damage:',
            values: '40 / 50 / 60 / 70 / 80% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">40 / 50 / 60 / 70 / 80% AD</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Mixed Damage:',
            raw: '40 / 50 / 60 / 70 / 80% AD',
            damagetype: 'None',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '40 / 50 / 60 / 70 / 80% AD',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Both casts of Precision Protocol  reset Camille's basic attack timer. Camille is able to cast  Tactical Sweep,  Hookshot, or  The Hextech Ultimatum during the windup of Precision Protocol's empowered attack without cancelling it.",
        descriptionHTML:
          '<i>Both casts of Precision Protocol <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">reset</a></span> <b>Camille\'s</b> basic attack timer. <b>Camille</b> is able to cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="Tactical Sweep" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#Tactical_Sweep" title="Tactical Sweep"><img alt="Tactical Sweep" src="/wiki/images/Camille_Tactical_Sweep.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#Tactical_Sweep" title="Camille/LoL">Tactical Sweep</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="Hookshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#Hookshot" title="Hookshot"><img alt="Hookshot" src="/wiki/images/Camille_Hookshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#Hookshot" title="Camille/LoL">Hookshot</a></span></span>, or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span> during the windup of Precision Protocol\'s empowered attack without cancelling it.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage"><span style="color: #FF8C34; white-space:normal">Physical damage</span></a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage"><span style="color: #F9966B; white-space:normal">True damage</span></a></span>',
    spelleffects: 'spell',
    occurrence: 'On-hit',
    spellshield: false,
    notes:
      '* Both casts count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>Both enhanced attacks <b>cannot</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.</li>\n<li>The 1.<small>5</small>-second delay is "fuzzy", meaning it may take up to another 0.<small>25</small> seconds to ready the window for the empowered attack.\n<ul><li>This syncs up perfectly with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Sheen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sheen" title="Sheen\'s"><img alt="Sheen\'s" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sheen" title="Sheen">Sheen\'s</a></span></span> cooldown between casts at 0 Item Haste, which is also "fuzzy".</li></ul></li>\n<li>The second attack will also become empowered if it simply starts after the 1.<small>5</small>-second delay, even if the recast was consumed earlier.</li>\n<li>Because <i>Precision Protocol</i> resets <b>Camille\'s</b> attack timer, it is possible to do an extra basic attack between the two special attacks.</li>\n<li>The empowered <span class="template_sbc"><b>recast</b></span>\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>:\n<ul><li>Has a special case to factor <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> into the true damage conversion of part of her attack\'s damage.</li>\n<li>Other <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effects do not interact with the true damage conversion.</li>\n<li>Is not amplified by modifiers that do not increase true damage such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Coup de Grace" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Coup_de_Grace_(Rune)" title="Coup de Grace"><img alt="Coup de Grace" src="/wiki/images/Coup_de_Grace_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Coup_de_Grace_(Rune)" class="mw-redirect" title="Coup de Grace (Rune)">Coup de Grace</a></span></span>.</li>\n<li>Is dealt just prior to the physical damage portion of the attack.</li></ul></li>\n<li><i>Precision Protocol</i> applies to <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> but the recast does not convert to true damage.</li>\n<li>The enhanced attack will still complete and hit the target even if they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> during the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack\'s windup</a></span>.</li></ul>',
    video: 'Camille - Q',
  },
  'Tactical Sweep': {
    name: 'Tactical Sweep',
    display_name: 'Tactical Sweep',
    champion: 'Camille',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'CamilleW.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner radius">325</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outer radius">650</span>',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pending for test">70°</span>',
    cast_time: 'none',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '17 / 15.<small>5</small> / 14 / 12.<small>5</small> / 11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL" title="Camille"><img alt="Camille" src="/wiki/images/Camille_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL" title="Camille/LoL">Camille</a></span></span> sweeps her leg after a delay, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit in a cone. Enemies in the outer half are slowed and take increased damage, while also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> her.',
    ],
    description: [
      {
        icon: '/wiki/images/Tactical_Sweep.png',
        description:
          'Active: Camille sweeps her leg in a cone in the target direction over 1.1 seconds, during which she is  ghosted and unable to declare basic attacks. Afterwards, she deals physical damage to all enemies within.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> sweeps her leg in a cone in the target direction over 1.<small>1</small> seconds, during which she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and unable to declare basic attacks. Afterwards, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies within.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Camille sweeps her leg in a cone in the target direction over 1.1 seconds, during which she is  ghosted and unable to declare basic attacks',
            values: 1,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'sweeps her leg in a cone in the target direction over 1.1 seconds, during which she is  ghosted and unable to declare basic attacks',
            pre: 'Camille sweeps her leg in a cone in the target direction over 1.1 seconds, during which she is  ghosted and unable to declare basic attacks',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '70 / 100 / 130 / 160 / 190 (+ 60% bonus AD)',
            valuesHTML:
              '70 / 100 / 130 / 160 / 190 <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 60% bonus AD)',
            damagetype: 'Physical',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
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
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies hit by the outer half of the cone take additional physical damage, capped at 300 against  monsters, and are  slowed by 80% decaying over 2 seconds. Camille is  healed for 100% of this additional damage post-mitigation against enemy  champions in the outer half.',
        descriptionHTML:
          'Enemies hit by the outer half of the cone take <span style="color:orange; white-space:normal"><b>additional</b> physical damage</span>, capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 80% decaying over 2 seconds. <b>Camille</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> for 100% of this <b>additional</b> damage <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="After modifiers such as resistances">post-mitigation</span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> in the outer half.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Enemies hit by the outer half of the cone take additional physical damage, capped at 300 against  monsters, and are  slowed by 80% decaying over 2 seconds',
            increasedStat: 'total_ap',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'decaying over 2 secondshit by the outer half of the cone take additional physical damage, capped at 300 against  monsters, and are  slowed by 80',
            pre: 'Enemies hit by the outer half of the cone take additional physical damage, capped at 300 against  monsters, and are  slowed by 80% decaying over 2 seconds',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Camille is  healed for 100% of this additional damage post-mitigation against enemy  champions in the outer half.',
            healType: 'DrainEffect',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'of this additional damage post-mitigation against enemy  champions in the outer half.is  healed for 100',
            pre: 'Camille is  healed for 100% of this additional damage post-mitigation against enemy  champions in the outer half.',
          },
        ],
        leveling: [
          {
            name: 'Outer Cone Bonus Damage:',
            values:
              "5 / 5.5 / 6 / 6.5 / 7% (+ 2.5% per 100 bonus AD) of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">5 / 5.<small>5</small> / 6 / 6.<small>5</small> / 7% <span style="color:orange; white-space:normal">(+&nbsp;2.<small>5</small>% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
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
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 2.5% per 100 bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Non-epic monsters take 50% damage from Tactical Sweep.',
        descriptionHTML:
          'Non-epic monsters take 50% damage from <i>Tactical Sweep</i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Non-epic monsters take 50% damage from Tactical Sweep.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage from Tactical Sweep.monsters take 50',
            pre: 'Non-epic monsters take 50% damage from Tactical Sweep.',
          },
        ],
        leveling: [
          {
            name: 'Non-Epic Monster Damage:',
            values: '35 / 50 / 65 / 80 / 95 (+ 30% bonus AD)',
            valuesHTML:
              '35 / 50 / 65 / 80 / 95 <span style="color:orange; white-space:normal">(+&nbsp;30% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Bonus Non-Epic Monster Damage:',
            values:
              "2.5 / 2.75 / 3 / 3.25 / 3.5% (+ 1.25% per 100 bonus AD) of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">2.<small>5</small> / 2.<small>75</small> / 3 / 3.<small>25</small> / 3.<small>5</small>% <span style="color:orange; white-space:normal">(+&nbsp;1.<small>25</small>% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Non-Epic Monster Damage:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 30% bonus AD)',
            damagetype: 'None',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
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
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 1.25% per 100 bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Other abilities can be cast during the animation without cancelling it.',
        descriptionHTML:
          '<i>Other abilities can be cast during the animation without cancelling it.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <b>Camille</b> can move during the delay, but the hitbox and <b>Camille\'s</b> visuals are fixed to the initial target direction.\n<ul><li><ul><li><b>Camille\'s</b> facing-direction, for effects such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-ability="Petrifying Gaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL#Petrifying_Gaze" title="Petrifying Gaze"><img alt="Petrifying Gaze" src="/wiki/images/Cassiopeia_Petrifying_Gaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL#Petrifying_Gaze" title="Cassiopeia/LoL">Petrifying Gaze</a></span></span>, is the direction she is moving, and not the direction the model is facing.</li></ul></li>\n<li>The 50% damage reduction against non-epic monsters applies after the cap. Because of this, the actual cap against non-epic monsters is 150 damage.</li>\n<li>Because the increased damage in the outer range of the cone is dealt as an <b>additional</b> instance of damage (as opposed to <b>bonus</b> damage to the original instance), it will trigger effects twice such as being reduced by <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Bone Plating" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bone_Plating_(Rune)" title="Bone Plating"><img alt="Bone Plating" src="/wiki/images/Bone_Plating_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Bone_Plating_(Rune)" class="mw-redirect" title="Bone Plating (Rune)">Bone Plating</a></span></span> an extra time.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li>It still belongs to the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span>, therefore it does not trigger additional stacks of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span> or <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>.</li></ul></li></ul>',
    video: 'Camille - W',
  },
  Hookshot: {
    name: 'Hookshot',
    display_name: 'Hookshot',
    champion: 'Camille',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'CamilleE.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '800',
    width: '100',
    cast_time: 'none',
    cost: '70',
    costtype: 'Mana',
    cooldown: '16 / 15 / 14 / 13 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL" title="Camille"><img alt="Camille" src="/wiki/images/Camille_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL" title="Camille/LoL">Camille</a></span></span> fires a grapple, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> onto any terrain she hits and briefly perching onto it.',
      'While perched, she gains the ability to cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="Wall Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#Wall_Dive" title="Wall Dive"><img alt="Wall Dive" src="/wiki/images/Camille_Wall_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#Wall_Dive" title="Camille/LoL">Wall Dive</a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Hookshot.png',
        description:
          'Active: Camille fires a grapple in the target direction. If the grapple collides with terrain, Camille will  dash toward and attach to the terrain for 0.75 seconds, during which she gains the ability to cast  Wall Dive.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> fires a grapple in the target direction. If the grapple collides with terrain, <b>Camille</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> toward and attach to the terrain for 0.<small>75</small> seconds, during which she gains the ability to cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="Wall Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#Wall_Dive" title="Wall Dive"><img alt="Wall Dive" src="/wiki/images/Camille_Wall_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#Wall_Dive" title="Camille/LoL">Wall Dive</a></span></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Camille will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during the dash.',
        descriptionHTML:
          '<i><b>Camille</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during the dash.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Camille will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during the dash.',
            values: 0,
            user: 'none',
            units: '',
            unitsText: ', during the dash.',
            pre: 'Camille will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep',
            post: ', during the dash.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'bug',
                pre: 'bug',
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
          'Other abilities can be cast during the ability. Casting  The Hextech Ultimatum will cause the grapple to disappear if it is in flight.',
        descriptionHTML:
          '<i>Other abilities can be cast during the ability. Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span> will cause the grapple to disappear if it is in flight.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Terrain, Self',
    projectile: 'true',
    notes:
      '* <b>Camille</b> may move while the grapple is in flight.\n<ul><li><i>Hookshot</i> can be cast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> but not while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>.</li>\n<li><b>Camille</b> will grapple to terrain even if she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>.</li>\n<li><i>Hookshot</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li></ul>',
    video: 'Camille - E',
  },
  'Wall Dive': {
    name: 'Wall Dive',
    display_name: 'Wall Dive',
    champion: 'Camille',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'CamilleE.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '400 / 800',
    effect_radius: '130',
    speed:
      '1050 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span>',
    cast_time: 'none',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL" title="Camille"><img alt="Camille" src="/wiki/images/Camille_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL" title="Camille/LoL">Camille</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies near the landing location. Dash range is doubled towards enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
      'Upon colliding with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> all nearby enemy champions, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Wall_Dive.png',
        description:
          "Active: Camille  dashes in the target direction, dealing physical damage to enemies near the landing location. Wall Dive's range is doubled towards enemy  champions within 1400 units. Camille grants  ghosting to non-champions she passes through for 4 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies near the landing location. <i>Wall Dive\'s</i> range is doubled towards enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within 1400 units. <b>Camille</b> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> to non-champions she passes through for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: "Wall Dive's range is doubled towards enemy  champions within 1400 units",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "Dive's range is doubled towards enemy  champions within 1400 units",
            pre: "Wall Dive's range is doubled towards enemy  champions within 1400 units",
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Camille grants  ghosting to non-champions she passes through for 4 seconds.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'grants  ghosting to non-champions she passes through for 4 seconds.',
            pre: 'Camille grants  ghosting to non-champions she passes through for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '80 / 110 / 140 / 170 / 200 (+ 90% bonus AD)',
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color:orange; white-space:normal">(+&nbsp;90% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 90% bonus AD)',
            damagetype: 'Physical',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
          'Camille stops prematurely upon colliding with an enemy champion,  knocking back all nearby enemy champions, though not through terrain, as well as  stunning them for 0.75 seconds, while also gaining  bonus attack speed for 5 seconds.',
        descriptionHTML:
          '<b>Camille</b> stops prematurely upon colliding with an enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> all nearby enemy champions, though not through terrain, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds, while also gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
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
        icon: '/wiki/images/undefined',
        description:
          'Wall Dive may be also cast with movement or attack commands. Other abilities besides  The Hextech Ultimatum can be cast while grappled or during the dash.',
        descriptionHTML:
          '<i>Wall Dive may be also cast with movement or attack commands. Other abilities besides <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span> can be cast while grappled or during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Wall Dive</i> count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>Despite what one might assume from a wall-jumping ability, <i>Wall Dive</i> <b>can</b> be used to go through terrain (including the terrain she is bound to).</li>\n<li>Casting <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during <i>Wall Dive\'s</i> dash will interrupt it but <b>Camille</b> will affect enemies around the new location.</li>\n<li><i>Wall Dive</i> is disabled while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.\n<ul><li><i>Wall Dive</i> will not automatically cast from movement or attack commands in both cases. While grounded, however, <b>Camille</b> is able to move while bound. She may still dash away from her current location once the grounding finishes.</li></ul></li>\n<li><b>Camille</b> will only gain a range indicator towards each valid champion within the extended dash range (800), but will still gain the extended dash range without the indicator against enemies within the 1400 range.\n<ul><li>She does not have to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">see</a></span> any enemy champions to gain the range indicator or extended range.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>The following table refers for interactions while <b>Camille</b> is bound to terrain:\n<ul><li>When <b>Camille</b> is interrupted, she will automatically cast <i>Wall Dive</i>. The only exception is if she was interrupted by casting <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> or <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>, in which case <i>Wall Dive</i> cancels.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Initiates the dash towards attack target.\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="Precision Protocol" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#Precision_Protocol" title="Precision Protocol"><img alt="Precision Protocol" src="/wiki/images/Camille_Precision_Protocol.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#Precision_Protocol" title="Camille/LoL">Precision Protocol</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="Tactical Sweep" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#Tactical_Sweep" title="Tactical Sweep"><img alt="Tactical Sweep" src="/wiki/images/Camille_Tactical_Sweep.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#Tactical_Sweep" title="Camille/LoL">Tactical Sweep</a></span></span> are usable. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span> is disabled.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Initiates the dash towards the commanded location.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All items interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    video: 'Camille - E',
  },
  'The Hextech Ultimatum': {
    name: 'The Hextech Ultimatum',
    display_name: 'The Hextech Ultimatum',
    champion: 'Camille',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'CamilleR.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '475',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">425</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown: '140 / 115 / 90',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL" title="Camille"><img alt="Camille" src="/wiki/images/Camille_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL" title="Camille/LoL">Camille</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dives</a></span> onto an enemy champion, creating a zone around the target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking away</a></span> all other enemies.',
      'While within the zone, the target cannot escape through any means, and <b>Camille\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> against them.',
      'The zone will disappear if <b>Camille</b> leaves or dies.',
    ],
    description: [
      {
        icon: '/wiki/images/The_Hextech_Ultimatum.png',
        description:
          'Active: Camille becomes  untargetable and  leaps with  displacement immunity towards the target enemy  champion over 0.5 seconds,  revealing them for the duration and  disrupting their ongoing  channels.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Camille</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> towards the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> over 0.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for the duration and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupting</a></span> their ongoing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Upon landing on the target, she becomes targetable again and creates a hexagonal zone around her current location for a duration,  knocking away all other nearby enemies on impact, though not through terrain.',
        descriptionHTML:
          'Upon landing on the target, she becomes targetable again and creates a hexagonal zone around her current location for a duration, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking away</a></span> all other nearby enemies on impact, though not through terrain.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Zone Duration:',
            values: '2.5 / 3.25 / 4',
            valuesHTML: '2.<small>5</small> / 3.<small>25</small> / 4',
          },
        ],
        levelingRatios: [
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
        icon: '/wiki/images/undefined',
        description:
          "The target cannot escape the zone through any means. While within the zone, Camille's basic attacks deal bonus magic damage.",
        descriptionHTML:
          'The target cannot escape the zone through any means. While within the zone, <b>Camille\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: "5 / 10 / 15 (+ 4 / 6 / 8% of target's current health)",
            valuesHTML:
              '5 / 10 / 15 <span style="color: #1F995C; white-space:normal">(+&nbsp;4 / 6 / 8% of target\'s <b>current</b> health)</span>',
          },
        ],
        levelingRatios: [
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
        icon: '/wiki/images/undefined',
        description:
          'The Hextech Ultimatum ends automatically within 1 second if Camille leaves the area or dies.',
        descriptionHTML:
          '<i>The Hextech Ultimatum</i> ends automatically within 1 second if <b>Camille</b> leaves the area or dies.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The Hextech Ultimatum ends automatically within 1 second if Camille leaves the area or dies.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Hextech Ultimatum ends automatically within 1 second if Camille leaves the area or dies.',
            pre: 'The Hextech Ultimatum ends automatically within 1 second if Camille leaves the area or dies.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: true,
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupt</a></span> is \'nested\' into a 0.<small>4</small>-second <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">Silence debuff</a></span> on the target, but unlike normal silences, this debuff does not actually make the target <i>unable to cast</i>. Instead, this makes sure that the <i>disrupt</i> is prevented by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immunity to silences</a></span>.\n<ul><li><b>Camille</b> will attempt to basic attack the target upon landing.</li>\n<li><b>Camille</b> will track the target if they change locations.\n<ul><li>She will always land and create the zone after 0.<small>5</small> seconds.</li></ul></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or moves <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2000</span> or more units away during the dash, it will be interrupted and the ability\'s <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> cost will not be refunded.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">Knockaway</a></span> speed is 1000.</li>\n<li>If the target manages to be outside of the boundaries, they will immediately be pulled back towards the center of the hexagon.</li>\n<li>The boundaries are not considered terrain (<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-ability="Unstoppable Onslaught" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL#Unstoppable_Onslaught" title="Unstoppable Onslaught"><img alt="Unstoppable Onslaught" src="/wiki/images/Sion_Unstoppable_Onslaught.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL#Unstoppable_Onslaught" title="Sion/LoL">Unstoppable Onslaught</a></span></span> exception), and enemies that try to move out of the area will be displaced back inside.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">Dashes</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacements</a></span>, and other forms of movement will cap their effect range to the boundary. Targets will stop at the boundary even after it expired.</li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL" title="Ekko\'s"><img alt="Ekko\'s" src="/wiki/images/Ekko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL" title="Ekko/LoL">Ekko\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-ability="Chronobreak" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL#Chronobreak" title="Chronobreak"><img alt="Chronobreak" src="/wiki/images/Ekko_Chronobreak.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL#Chronobreak" title="Ekko/LoL">Chronobreak</a></span></span></span> will still deal damage at the hologram\'s location.</li>\n<li>An active <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Cease and Desist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Cease and Desist"><img alt="Cease and Desist" src="/wiki/images/Vi_Cease_and_Desist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Vi/LoL">Cease and Desist</a></span></span> on a target outside the perimeter will cause <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL" title="Vi"><img alt="Vi" src="/wiki/images/Vi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL" title="Vi/LoL">Vi</a></span></span> to continue her charge until <i>The Hextech Ultimatum</i> ends. She can knockback and damage secondary targets multiple times.</li>\n<li>If the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaches</a></span> to a unit, they will only be displaced back inside once they detach. <i>The Hextech Ultimatum</i> does not end nor break the bind to the victim.\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Kayn\'s"><img alt="Kayn\'s" src="/wiki/images/Kayn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Kayn\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="Umbral Trespass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Umbral Trespass"><img alt="Umbral Trespass" src="/wiki/images/Kayn_Umbral_Trespass.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Kayn/LoL">Umbral Trespass</a></span></span></span> allows him to cast it even if his target is outside the area, dashing through the borders and attaching despite being unable to escape.</li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL" title="Yuumi\'s"><img alt="Yuumi\'s" src="/wiki/images/Yuumi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL" title="Yuumi/LoL">Yuumi\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="You and Me!"><img alt="You and Me!" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">You and Me!</a></span></span></span> allows her to bypass the borders if the unit she attaches to leaves the area.</li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL" title="Sett\'s"><img alt="Sett\'s" src="/wiki/images/Sett_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL" title="Sett/LoL">Sett\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-ability="The Show Stopper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL#The_Show_Stopper" title="The Show Stopper"><img alt="The Show Stopper" src="/wiki/images/Sett_The_Show_Stopper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL#The_Show_Stopper" title="Sett/LoL">The Show Stopper</a></span></span></span> does not allow him to pass through the borders and the dash will end prematurely when he encounters them.\n<ul><li>If the target of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-ability="The Show Stopper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL#The_Show_Stopper" title="The Show Stopper"><img alt="The Show Stopper" src="/wiki/images/Sett_The_Show_Stopper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL#The_Show_Stopper" title="Sett/LoL">The Show Stopper</a></span></span> is also the target of <i>The Hextech Ultimatum</i>, they can go through the borders while attached to him.</li></ul></li></ul></li></ul></li>\n<li>If <b>Camille</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> during the initial cast, the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is stopped and the zone is formed immediately.\n<ul><li><i>The Hextech Ultimatum</i> ends if the target enters <i>resurrection</i>, but not if <b>Camille</b> does.</li></ul></li>\n<li><i>The Hextech Ultimatum</i> ends immediately if the target is dragged by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Fear Beyond Death 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Fear_Beyond_Death_2" title="Fear Beyond Death"><img alt="Fear Beyond Death" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Fear_Beyond_Death_2" title="Urgot/LoL">Fear Beyond Death</a></span></span>.</li>\n<li>The following table refers for interactions while <b>Camille</b> is dashing.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Camille_Original_R_0.ogg   "You will stay where I want you to stay!"',
    video: 'Camille - R',
  },
} satisfies { [skillName in string]: SkillData };
