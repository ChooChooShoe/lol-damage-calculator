import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Dr. Mundo';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Dr. Mundo</b> <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">regenerates</a></span> an additional<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="0.4% +&nbsp;0.05% per level at level 1, then +&nbsp;0.1% per level starting at level 7, then +&nbsp;0.15% per level starting at level 13, then +&nbsp;0.2% per level starting at level 16" data-bot_values="0.4;0.45;0.5;0.55;0.6;0.65;0.75;0.85;0.95;1.05;1.15;1.25;1.4;1.55;1.7;1.9;2.1;2.3" data-top_values="1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18" data-bot_key="%">0.<small>4</small>% − 2.<small>3</small>% (based on level)</span> of his <b>maximum</b> health</span> every 5 seconds.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.08;0.09;0.1;0.11;0.12;0.13;0.15;0.17;0.19;0.21;0.23;0.25;0.28;0.31;0.34;0.38;0.42;0.46" data-top_values="" data-bot_key="%">0.<small>08</small>% − 0.<small>46</small>% (based on level)</span> of his <b>maximum</b> health</span> each second.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 4:',
        raw: '3% (based on level) of his maximum health every 5 seconds',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of his maximum health every 5 seconds',
        pre: '3%',
        post: 'of his maximum health every 5 seconds',
      },
      {
        effectType: 'Heal',
        name: 'Line 7:',
        raw: '46% (based on level) of his maximum health each second',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of his maximum health each second',
        pre: '46%',
        post: 'of his maximum health each second',
      },
    ],
  },
  {
    img: '/wiki/images/Dr._Mundo_Goes_Where_He_Pleases.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Periodically, <b>Dr. Mundo</b> gains immunity to the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effects of the next hostile spell to affect him. Upon resisting one, <b>Dr. Mundo</b> pays a <span style="color: #1F995C; white-space:normal">health cost</span> equal to <span style="color: #1F995C; white-space:normal">4% of his <b>current</b> health</span> and propels a canister that lands 525 units in the general direction of its source, remaining on the ground for 7 seconds.',
    leveling: [],
  },
  {
    description:
      '<b>Dr. Mundo</b> can move near the canister to consume it, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for <span style="color: #1F995C; white-space:normal">4% of his <b>maximum</b> health</span> and reducing the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> of <i>Goes Where He Pleases</i> by 15 seconds. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can move near it to destroy it.',
    leveling: [],
  },
  {
    description:
      '<i>Goes Where He Pleases\' </i> cooldown resets upon <a href="/wiki/Respawn" class="mw-redirect" title="Respawn">respawning</a>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Dr._Mundo_Infected_Bonesaw.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Dr. Mundo</b> throws an infected bonesaw in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 40% for 2 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "20 / 22.5 / 25 / 27.5 / 30% of target's current health",
        healType: 'OutgoingHeals',
        values: [20, 22.5, 25, 27.5, 30],
        valuesIsPercent: true,
        user: 'target',
        units: 'current_hp',
        unitsText: "of target's current health",
        pre: "20 / 22.5 / 25 / 27.5 / 30% of target's current health",
      },
    ],
  },
  {
    description:
      '<i>Infected Bonesaw</i> has a minimum damage threshold, and is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Damage:',
        raw: '80 / 130 / 180 / 230 / 280',
        values: [80, 130, 180, 230, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 130 / 180 / 230 / 280',
      },
      {
        effectType: 'Unique',
        name: 'Capped Monster Damage:',
        raw: '350 / 425 / 500 / 575 / 650',
        values: [350, 425, 500, 575, 650],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '350 / 425 / 500 / 575 / 650',
      },
    ],
  },
  {
    description:
      'If the bonesaw hits an enemy, <b>Dr. Mundo</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for 50% of the <span style="color: #1F995C; white-space:normal">health cost</span>, increased to 100% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Dr._Mundo_Heart_Zapper.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Dr. Mundo</b> charges up a defibrillator for up to 3 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to nearby enemies and storing <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="80;" data-finish="95;" data-bot_values="80;80.88;81.76;82.65;83.53;84.41;85.29;86.18;87.06;87.94;88.82;89.71;90.59;91.47;92.35;93.24;94.12;95" data-top_values="" data-bot_key="%">80% − 95% (based on level)</span> of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> he takes as <a href="/wiki/Health#Grey_health" title="Health">grey health</a> on his <a href="/wiki/Health_bar" title="Health bar">health bar</a>, reduced to 25% after the first 0.<small>75</small> seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: '25 seconds to nearby enemies and storing 80% − 95% (based on level) of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_hp',
        unitsText:
          'of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0',
        pre: '25 seconds to nearby enemies and storing 80% − 95%',
        post: 'of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0',
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '5 / 8.75 / 12.5 / 16.25 / 20',
        values: [5, 8.75, 12.5, 16.25, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 8.75 / 12.5 / 16.25 / 20',
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '80 / 140 / 200 / 260 / 320',
        values: [80, 140, 200, 260, 320],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 140 / 200 / 260 / 320',
      },
    ],
  },
  {
    description:
      '<i>Heart Zapper</i> can be recast after 1 second within the duration, and does so automatically after the duration.',
    leveling: [],
  },
  {
    img: '/wiki/images/Dr._Mundo_Heart_Zapper_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Dr. Mundo</b> detonates the defibrillator, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> for 50% of <a href="/wiki/Health#Grey_health" title="Health">grey health</a>, increased to 100% if at least one enemy champion or large monster is hit.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: '20 / 35 / 50 / 65 / 80 (+ 7% bonus health)',
        healType: 'BonusHealth',
        values: [20, 35, 50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80',
        children: [
          {
            values: 7,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 7% bonus health',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Dr. Mundo</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Attack Damage:',
        raw: '2 / 2.5 / 3 / 3.5 / 4% maximum health',
        healType: 'BonusHealth',
        values: [2, 2.5, 3, 3.5, 4],
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'maximum health',
        pre: '2 / 2.5 / 3 / 3.5 / 4% maximum health',
      },
    ],
  },
  {
    img: '/wiki/images/Dr._Mundo_Blunt_Force_Trauma.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Dr. Mundo</b> empowers his next basic attack within 4 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#1F995C;" data-top_label="missing health" data-displayformula="1.5% per 1% of \'\'\'missing\'\'\' health, capped at 40% \'\'\'missing\'\'\' health" data-bot_values="0;6;12;18;24;30;36;42;48;54;60" data-top_values="0;4;8;12;16;20;24;28;32;36;40" data-bot_key="%" data-top_key="%">0% − 60% (based on <b>missing</b> health)</span>. If the target dies or is a small monster, they are sent flying away in a line, though not through terrain, causing all enemies they pass through to take <span style="color:orange; white-space:normal">100% AD</span> plus <i>Blunt Force Trauma\'s</i> minimum <b>bonus</b> damage.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' Mundo empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage, increased by 0% − 60% (based on missing health)',
        healType: 'PhysicalVamp',
        values: 4,
        valuesIsPercent: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText:
          '− 60empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage, increased by 0',
        pre: 'Mundo empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage, increased by 0% − 60%',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'based on missing health',
            pre: 'based on missing health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Minimum Bonus Physical Damage:',
        raw: '5 / 15 / 25 / 35 / 45 (+ 7% bonus health)',
        healType: 'BonusHealth',
        values: [5, 15, 25, 35, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 15 / 25 / 35 / 45',
        children: [
          {
            values: 7,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 7% bonus health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Maximum Bonus Physical Damage:',
        raw: '8 / 24 / 40 / 56 / 72 (+ 11.2% bonus health)',
        healType: 'BonusHealth',
        values: [8, 24, 40, 56, 72],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 24 / 40 / 56 / 72',
        children: [
          {
            values: 11.2,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 11.2% bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Blunt Force Trauma</i> as well as the triggering <span style="color:orange; white-space:normal">attack\'s damage</span> is increased to 140% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and 150% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i>Blunt Force Trauma <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Dr. Mundo\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Dr._Mundo_Maximum_Dosage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Dr. Mundo</b> injects himself with chemicals to become enhanced for 10 seconds, gaining increased <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>base</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health regeneration</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Increased Base Health:',
        raw: '15 / 20 / 25% missing health',
        healType: 'BonusHealth',
        values: [15, 20, 25],
        valuesIsPercent: true,
        user: 'player',
        units: 'missing_hp',
        unitsText: 'missing health',
        pre: '15 / 20 / 25% missing health',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '15 / 25 / 35%',
        values: [15, 25, 35],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 25 / 35%',
      },
      {
        effectType: 'Heal',
        name: 'Bonus Health Regeneration:',
        raw: '20 / 40 / 60% maximum health',
        healType: 'BonusHealth',
        values: [20, 40, 60],
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'maximum health',
        pre: '20 / 40 / 60% maximum health',
      },
      {
        effectType: 'Heal',
        name: 'Health Regenerated per Second:',
        raw: '2 / 4 / 6% maximum health',
        healType: 'BonusHealth',
        values: [2, 4, 6],
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'maximum health',
        pre: '2 / 4 / 6% maximum health',
      },
    ],
  },
  {
    description:
      'At rank 3, <i>Maximum Dosage\'s</i> increased <span style="color: #1F995C; white-space:normal"><b>base</b> health</span> and <span style="color: #1F995C; white-space:normal"><b>bonus</b> health regeneration</span> are both increased by 5% for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 1200 units at the time of cast.',
    leveling: [],
  },
];
export const DrMundo = { I, Q, W, E, R };
