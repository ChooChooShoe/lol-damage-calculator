import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Malzahar';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Malzahar_Void_Shift.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Malzahar</b> gains <i>Void Shift</i> until he takes non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> damage or negates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effect, to which it then lingers for 0.<small>25</small> seconds before expiring. <br><br><span class="template_sbc"><b>Void Shift:</b></span> <b>Malzahar</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span> and 90% damage reduction.',
    leveling: [],
  },
  {
    description:
      '<i>Void Shift\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> refreshes whenever <b>Malzahar</b> takes non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> damage or is affected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effect, and resets upon <a href="/wiki/Death" title="Death">respawning</a>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Malzahar_Call_of_the_Void.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> opens two portals to the void centered at the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area in between. After 0.<small>4</small> seconds, enemies between the portals are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 55% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
        children: [
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 55% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Silence Duration:',
        raw: '1 / 1.25 / 1.5 / 1.75 / 2',
        values: [1, 1.25, 1.5, 1.75, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.25 / 1.5 / 1.75 / 2',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Malzahar</b> generates a stack of <i>Zz\'Rot Swarm</i> when he casts another <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, up to a maximum of 2.',
    leveling: [],
  },
  {
    img: '/wiki/images/Malzahar_Void_Swarm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> consumes all <i>Zz\'Rot Swarm</i> stacks and, after a 0.<small>5</small>-second delay, summons a <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Voidling" title="Voidling"><img alt="Voidling" src="/wiki/images/VoidlingSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Voidling" class="mw-redirect" title="Voidling">Voidling</a></span></span> at the target location. Additional <i>Voidlings</i> are then summoned for each <i>Zz\'Rot Swarm</i> stack consumed.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Voidling Duration:',
        raw: '8 / 8 / 9 / 9 / 10',
        values: [8, 8, 9, 9, 10],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 8 / 9 / 9 / 10',
      },
    ],
  },
  {
    description:
      '<i>Voidlings</i> deal <span style="color: #00B0F0; white-space:normal">magic damage</span> with their attacks, reduced by 50% against epic <a href="/wiki/Monster" title="Monster">monsters</a> and increased by 200% to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> infected by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Malefic Visions" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malefic Visions"><img alt="Malefic Visions" src="/wiki/images/Malzahar_Malefic_Visions.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malzahar/LoL">Malefic Visions</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '5 − 64.5 (based on level) (+ 12 / 14 / 16 / 18 / 20) (+ 40% bonus AD) (+ 20% AP)',
        values: [
          5, 8.5, 12, 15.5, 19, 22.5, 26, 29.5, 33, 36.5, 40, 43.5, 47, 50.5,
          54, 57.5, 61, 64.5,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 − 64.5',
        children: [
          {
            values: [12, 14, 16, 18, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 12 / 14 / 16 / 18 / 20',
          },
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 40% bonus AD',
          },
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
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
      '<i>See <a href="/wiki/Malzahar/LoL#Pets" title="Malzahar/LoL">Pets</a> for more details about Voidlings.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Malzahar_Malefic_Visions.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> infects the target enemy\'s mind, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over 4 seconds, which refreshes upon damaging them with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Call of the Void" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Call_of_the_Void" title="Call of the Void"><img alt="Call of the Void" src="/wiki/images/Malzahar_Call_of_the_Void.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Call_of_the_Void" title="Malzahar/LoL">Call of the Void</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Nether Grasp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Nether Grasp"><img alt="Nether Grasp" src="/wiki/images/Malzahar_Nether_Grasp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Malzahar/LoL">Nether Grasp</a></span></span></i>. <i>Malefic Visions</i> executes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> if they would be damaged below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="15 +&nbsp;3 per level at level 1" data-bot_values="15;18;21;24;27;30;33;36;39;42;45" data-top_values="">15 − 45 (based on level)</span> health</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: ' Malefic Visions executes  minions if they would be damaged below  15 − 45 (based on level) health',
        healType: 'BonusHealth',
        values: [
          15, 16.76, 18.53, 20.29, 22.06, 23.82, 25.59, 27.35, 29.12, 30.88,
          32.65, 34.41, 36.18, 37.94, 39.71, 41.47, 43.24, 45,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_hp',
        unitsText: 'health',
        pre: 'Malefic Visions executes  minions if they would be damaged below  15 − 45',
        post: 'health',
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '80 / 115 / 150 / 185 / 220 (+ 80% AP)',
        values: [80, 115, 150, 185, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 115 / 150 / 185 / 220',
        children: [
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
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '10 / 14.375 / 18.75 / 23.125 / 27.5 (+ 10% AP)',
        values: [10, 14.375, 18.75, 23.125, 27.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 14.375 / 18.75 / 23.125 / 27.5',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the target dies while infected, they spread <i>Malefic Visions</i> onto the closest nearby enemy and <b>Malzahar</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">2% of his <b>maximum</b> mana</span></span>.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Malzahar_Nether_Grasp.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethers</a></span> to the target enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span>. He then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> the target and dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> himself in the process.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '125 / 200 / 275 (+ 80% AP)',
        values: [125, 200, 275],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 200 / 275',
        children: [
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
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '12.5 / 20 / 27.5 (+ 8% AP)',
        values: [12.5, 20, 27.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12.5 / 20 / 27.5',
        children: [
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 8% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><b>Malzahar</b> will continue to channel as long as the tether is not broken, even if the suppression is removed.</i>',
    leveling: [],
  },
  {
    img: '/wiki/images/Malzahar_Null_Zone.png',
    description:
      'Additionally, a <i>Null Zone</i> is opened beneath the target\'s location at the time of cast that lasts 5 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to enemies within, capped at 120 per tick against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Total Magic Damage:',
        raw: "10 / 15 / 20% (+ 2.5% per 100 AP) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [10, 15, 20],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '10 / 15 / 20%',
        post: "of target's maximum health",
        children: [
          {
            values: 2.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2.5% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Magic Damage Per Tick:',
        raw: "1 / 1.5 / 2% (+ 0.25% per 100 AP) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [1, 1.5, 2],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '1 / 1.5 / 2%',
        post: "of target's maximum health",
        children: [
          {
            values: 0.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 0.25% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Null Zone will persist even if the channel is interrupted.</i>',
    leveling: [],
  },
];
export const Malzahar = { I, Q, W, E, R };
