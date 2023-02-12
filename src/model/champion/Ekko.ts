import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Ekko';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Ekko_Z-Drive_Resonance.png',
    description:
      '<span class="template_sbc"><b>Innate - Resonance:</b></span> <b>Ekko\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Resonance</i> to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. The third stack consumes them all to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-bot_values="30;40;50;60;70;80;85;90;95;100;105;110;115;120;125;130;135;140" data-top_values="">30 − 140 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. <i>Z-Drive Resonance</i> deals 300% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 2:',
        raw: ' The third stack consumes them all to deal 30 − 140 (based on level) (+ 90% AP) bonus magic damage',
        min: 0,
        max: 10,
        description:
          ' The third stack consumes them all to deal 30 − 140 (based on level) (+ 90% AP) bonus magic damage',
        values: [
          30, 36.47, 42.94, 49.41, 55.88, 62.35, 68.82, 75.29, 81.76, 88.24,
          94.71, 101.18, 107.65, 114.12, 120.59, 127.06, 133.53, 140,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage',
        pre: 'The third stack consumes them all to deal 30 − 140',
        post: 'bonus magic damage',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
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
      '<i>Resonance</i> cannot affect the same target more than once every few seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Ekko_Z-Drive_Resonance_2.png',
    description:
      '<span class="template_sbc"><b>Innate - Stolen Time:</b></span> Triggering <i>Resonance</i> against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> grants <b>Ekko</b> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="50;1" data-finish="80;16" data-bot_values="50;60;70;80" data-top_values="1;6;11;16" data-bot_key="%">50 / 60 / 70 / 80% (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2;1" data-finish="3;11" data-bot_values="2;2.5;3" data-top_values="1;6;11">2 / 2.<small>5</small> / 3 (based on level)</span> seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Triggering Resonance against a  champion grants Ekko 50 / 60 / 70 / 80% (based on level)  bonus movement speed for 2 / 2',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed for 2 / 2',
        pre: 'Triggering Resonance against a  champion grants Ekko 50 / 60 / 70 / 80%',
        post: 'bonus movement speed for 2 / 2',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 / 3 (based on level) seconds',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '5 / 3',
        post: 'seconds',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Ekko_Timewinder.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> throws a temporal grenade in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 75 / 90 / 105 / 120 (+ 30% AP)',
        values: [60, 75, 90, 105, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 75 / 90 / 105 / 120',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'At 700 units or upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, the grenade slows down for 1.<small>75</small> seconds to gradually expand into a <i>Temporal Sickness</i> field that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies, travelling for another 190 units.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '32 / 39 / 46 / 53 / 60%',
        values: [32, 39, 46, 53, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '32 / 39 / 46 / 53 / 60%',
      },
    ],
  },
  {
    description:
      'Afterwards, the grenade contracts and homes back to <b>Ekko</b> at an increased speed, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '40 / 65 / 90 / 115 / 140 (+ 60% AP)',
        values: [40, 65, 90, 115, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 65 / 90 / 115 / 140',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '100 / 140 / 180 / 220 / 260 (+ 90% AP)',
        values: [100, 140, 180, 220, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 140 / 180 / 220 / 260',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
    ],
  },
  {
    description: '<i>Enemies can be hit only once per pass.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Ekko\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal">3% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% per 100 AP)</span> of the target\'s <b>missing</b> health</span> against enemies below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">30% of their <b>maximum</b> health</span></span>. The damage has a minimum threshold of 15 and is capped at 150 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Ekko's basic attacks deal bonus magic damage equal to 3% (+ 3% per 100 AP) of the target's missing health against enemies below  30% of their maximum health",
        healType: 'OutgoingHeals',
        values: 3,
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText:
          "of the target's missing health against enemies below  30% of their maximum health",
        pre: "Ekko's basic attacks deal bonus magic damage equal to 3%",
        post: "of the target's missing health against enemies below  30% of their maximum health",
        children: [
          {
            values: 3,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 3% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Ekko_Parallel_Convergence.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> creates an afterimage of himself that, after 2 seconds, bats a device to the target location and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 2.<small>5</small> seconds. After travelling over 1.<small>25</small> seconds, the device expands into a chronosphere for 1.<small>5</small> seconds that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within by 40%.',
    leveling: [],
  },
  {
    description:
      'If <b>Ekko</b> enters the sphere, it detonates to grant him a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> enemies within for 2.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '70 / 90 / 110 / 130 / 150 (+ 150% AP)',
        values: [70, 90, 110, 130, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 90 / 110 / 130 / 150',
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
  {
    description:
      '<i>Enemies can see the indicator for Parallel Convergence after 2 seconds.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Ekko_Phase_Dive.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, then empowers his next basic attack within 3 seconds to have a 0.<small>25</small>-second cast time, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;300 <b>bonus</b> range</span>, cause him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">125</span> range of the target, and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 40% AP)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Phase Dive <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Ekko\'s</b> basic attack timer. <b>Ekko</b> can cast any of his abilities during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Upon learning <i>Chronobreak</i> or if its <b>current</b> cooldown is lower than 4 seconds, <b>Ekko</b> reveals a time-delayed <i>afterimage</i> of himself that constantly tracks where he was 4 seconds ago.',
    leveling: [],
  },
  {
    img: '/wiki/images/Ekko_Chronobreak.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span> at the start of the cast time, and afterwards <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to his <i>afterimage\'s</i> current location over 0.<small>5</small> seconds. Upon arrival, the stasis ends and he creates an explosion that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 350 / 500 (+ 175% AP)',
        values: [200, 350, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 350 / 500',
        children: [
          {
            values: 175,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 175% AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Heal:',
        raw: '100 / 150 / 200 (+ 60% AP) (+ 3% per 1% of health lost in the past 4 seconds)',
        healType: 'BonusHealth',
        values: [100, 150, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
          {
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'per 1',
            pre: '+ 3% per 1% of health lost in the past 4 seconds',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><b>Ekko</b> is immune to all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacements</a></span> during Chronobreak</i>.',
    leveling: [],
  },
];
export const Ekko = { I, Q, W, E, R };
