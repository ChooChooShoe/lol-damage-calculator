import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Janna';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Janna_Tailwind.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Janna</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">6% <b>bonus</b> movement speed</span></span> while facing nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, and grants them the same amount while they are facing her.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Janna_Howling_Gale.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Janna</b> summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> duration every second over the duration. <i>Howling Gale\'s</i> direction is determined by this cast.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '60 / 85 / 110 / 135 / 160 (+ 35% AP)',
        values: [60, 85, 110, 135, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 85 / 110 / 135 / 160',
        children: [
          {
            values: 35,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 35% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Damage Per Second:',
        raw: '15 / 20 / 25 / 30 / 35 (+ 10% AP)',
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
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Magic Damage:',
        raw: '105 / 145 / 185 / 225 / 265 (+ 65% AP)',
        values: [105, 145, 185, 225, 265],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '105 / 145 / 185 / 225 / 265',
        children: [
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 65% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Howling Gale</i> can be recast at any time within the duration, and does so automatically after the duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Janna</b> launches the whirlwind in the direction she targeted over 1.<small>25</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="seconds charged" data-start="0.5;0" data-finish="1.25;1.5" data-bot_values="0.5;0.55;0.6;0.65;0.7;0.75;0.8;0.85;0.9;0.95;1;1.05;1.1;1.15;1.2;1.25" data-top_values="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1;1.1;1.2;1.3;1.4;1.5">0.<small>5</small> − 1.<small>25</small> (based on seconds charged)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '5 − 1',
        values: [5, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 − 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '25 (based on seconds charged) seconds',
        values: 25,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '25',
        post: 'seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on seconds charged',
            pre: 'based on seconds charged',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> While <i>Zephyr</i> is not on cooldown, <b>Janna</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '6 / 7 / 8 / 9 / 10% (+ 2% per 100 AP)',
        values: [6, 7, 8, 9, 10],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 7 / 8 / 9 / 10%',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Janna_Zephyr.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Janna</b> sends an air elemental at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 3 seconds, capped at 99%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 100 / 130 / 160 / 190 (+ 50% AP)',
        values: [70, 100, 130, 160, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 100 / 130 / 160 / 190',
        children: [
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
        raw: '20 / 24 / 28 / 32 / 36% (+ 6% per 100 AP)',
        values: [20, 24, 28, 32, 36],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 24 / 28 / 32 / 36%',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 6% per 100 AP',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Whenever <b>Janna\'s</b> abilities <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, she gains 15% <span style="white-space:nowrap"><a href="/wiki/Heal_and_shield_power" title="Heal and shield power"><img alt="Heal and shield power icon.png" src="/wiki/images/Heal_and_shield_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Heal_and_shield_power" title="Heal and shield power">heal and shield power</a></span> for 4 seconds. This may occur only once per cast.',
    leveling: [],
  },
  {
    img: '/wiki/images/Janna_Eye_of_the_Storm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Janna</b> grants the target allied champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, or herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 5 seconds, decaying after 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '75 / 100 / 125 / 150 / 175 (+ 55% AP)',
        values: [75, 100, 125, 150, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 100 / 125 / 150 / 175',
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
    ],
  },
  {
    description:
      'While the shield holds, the target gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: '10 / 15 / 20 / 25 / 30 (+ 10% AP)',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
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
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Janna_Monsoon.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Janna</b> unleashes a blast that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> all nearby enemies to up to 875 units over 0.<small>5</small> seconds based on their proximity, though not through terrain.',
    leveling: [],
  },
  {
    description:
      '<b>Janna</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 3 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> nearby allies every 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal Per Tick:',
        raw: '25 / 37.5 / 50 (+ 12.5% AP)',
        values: [25, 37.5, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 37.5 / 50',
        children: [
          {
            values: 12.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 12.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Heal:',
        raw: '300 / 450 / 600 (+ 150% AP)',
        values: [300, 450, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 450 / 600',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
    ],
  },
];
export const Janna = { I, Q, W, E, R };
