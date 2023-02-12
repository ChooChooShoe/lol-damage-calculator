import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Anivia';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Anivia_Rebirth.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span>, <b>Anivia</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> for 6 seconds and restores all of her <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span>.',
    leveling: [],
  },
  {
    description:
      'While under resurrection, <b>Anivia</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> and gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="-40;-25;-10;5;20" data-top_values="1;5;8;12;15">-40 − 20 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: 'While under resurrection, Anivia is  unable to act and gains -40 − 20 (based on level)  bonus armor and  bonus magic resistance',
        increasedStat: 'bonus_armor',
        values: [
          40, 38.82, 37.65, 36.47, 35.29, 34.12, 32.94, 31.76, 30.59, 29.41,
          28.24, 27.06, 25.88, 24.71, 23.53, 22.35, 21.18, 20,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'bonus armor and  bonus magic resistance',
        pre: 'While under resurrection, Anivia is  unable to act and gains -40 − 20',
        post: 'bonus armor and  bonus magic resistance',
      },
    ],
  },
  {
    description:
      'If <b>Anivia</b> remains alive by the end of the duration, she is revived with her <span style="color: #1F995C; white-space:normal"><b>current</b> health</span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Anivia_Flash_Frost.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Anivia</b> launches a chunk of ice in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Glacial Storm.png|20px|border|link=]] Glacial Storm\'s Rank" data-displayformula="20%+(10%*(\'\'Glacial Storm\'\' Rank-1))" data-bot_values="20;20;30;40" data-top_values="0;1;2;3" data-bot_key="%">20% − 40% (based on <img alt="Glacial Storm.png" src="/wiki/images/Anivia_Glacial_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <i>Glacial Storm\'s</i> Rank)</span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Anivia launches a chunk of ice in the target direction that deals magic damage to enemies hit and  slows them by 20% − 40% (based on  Glacial Storm's Rank) for 3 seconds",
        damagetype: 'Magic',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'for 3 seconds',
        pre: 'Anivia launches a chunk of ice in the target direction that deals magic damage to enemies hit and  slows them by 20% − 40%',
        post: 'for 3 seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on  Glacial Storm's Rank",
            pre: "based on  Glacial Storm's Rank",
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 70 / 90 / 110 / 130 (+ 25% AP)',
        values: [50, 70, 90, 110, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 70 / 90 / 110 / 130',
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
    ],
  },
  {
    description:
      '<i>Flash Frost</i> can be recast while the ice is in flight after its cast time, and does so automatically at maximum range.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Anivia</b> shatters the ice, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for a duration, as well as refreshing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 95 / 130 / 165 / 200 (+ 45% AP)',
        values: [60, 95, 130, 165, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 95 / 130 / 165 / 200',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '110 / 165 / 220 / 275 / 330 (+ 70% AP)',
        values: [110, 165, 220, 275, 330],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 165 / 220 / 275 / 330',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Stun Duration:',
        raw: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
        values: [1.1, 1.2, 1.3, 1.4, 1.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Anivia_Crystallize.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Anivia</b> summons a wall of ice at the target location perpendicular to her facing, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking</a></span> all units away from it, though not through terrain. The wall lingers as impassable terrain for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Width:',
        raw: ' 600 / 700 / 800 / 900 / 1000 units',
        values: [600, 700, 800, 900, 1000],
        user: 'none',
        units: '',
        unitsText: 'units',
        pre: '600 / 700 / 800 / 900 / 1000 units',
      },
      {
        effectType: 'Unique',
        name: 'Number of ice segments:',
        raw: '4 / 5 / 6 / 7 / 8 chunks of ice',
        values: [4, 5, 6, 7, 8],
        user: 'none',
        units: '',
        unitsText: 'chunks of ice',
        pre: '4 / 5 / 6 / 7 / 8 chunks of ice',
      },
      {
        effectType: 'Unique',
        name: 'Distance between outermost segments:',
        raw: '400 / 500 / 600 / 700 / 800 units',
        values: [400, 500, 600, 700, 800],
        user: 'none',
        units: '',
        unitsText: 'units',
        pre: '400 / 500 / 600 / 700 / 800 units',
      },
      {
        effectType: 'Unique',
        name: 'Distance between individual segments:',
        raw: '133.33 / 125 / 120 / 116.67 / 114.29 units',
        values: [133.33, 125, 120, 116.67, 114.29],
        user: 'none',
        units: '',
        unitsText: 'units',
        pre: '133.33 / 125 / 120 / 116.67 / 114.29 units',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Enemies hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Flash Frost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Flash_Frost" title="Flash Frost"><img alt="Flash Frost" src="/wiki/images/Anivia_Flash_Frost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Flash_Frost" title="Anivia/LoL">Flash Frost</a></span></span></i> or a fully formed <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Glacial Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Glacial_Storm" title="Glacial Storm"><img alt="Glacial Storm" src="/wiki/images/Anivia_Glacial_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Glacial_Storm" title="Anivia/LoL">Glacial Storm</a></span></span></i> become <i>Chilled</i> for 3 seconds, refreshing on subsequent hits.',
    leveling: [],
  },
  {
    img: '/wiki/images/Anivia_Frostbite.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Anivia</b> blasts a freezing wind at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">doubled</span> if they were <i>Chilled</i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 60% AP)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
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
        name: 'Enhanced Damage:',
        raw: '100 / 150 / 200 / 250 / 300 (+ 120% AP)',
        values: [100, 150, 200, 250, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200 / 250 / 300',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 120% AP',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Anivia_Glacial_Storm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Anivia</b> calls forth a driving rain of ice and hail at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 1 second, refreshing every 0.<small>5</small> seconds while they remain inside.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '15 / 22.5 / 30 (+ 6.25% AP)',
        values: [15, 22.5, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 22.5 / 30',
        children: [
          {
            values: 6.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 6.25% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '20 / 30 / 40%',
        values: [20, 30, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40%',
      },
    ],
  },
  {
    description:
      'The blizzard increases in size over 1.<small>5</small> seconds. At maximum size, <i>Glacial Storm</i> is empowered to deal 300% damage and increase the effectiveness of its slow by 50%, which also instead lasts 1.<small>5</small> seconds and refreshes every 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Empowered Damage per Tick:',
        raw: '45 / 67.5 / 90 (+ 18.75% AP)',
        values: [45, 67.5, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 67.5 / 90',
        children: [
          {
            values: 18.75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 18.75% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Empowered Slow:',
        raw: '30 / 45 / 60%',
        values: [30, 45, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60%',
      },
    ],
  },
  {
    description:
      '<i>Glacial Storm</i> can be recast after 1 second, and does so automatically if <b>Anivia</b> is no longer in range or unable to pay the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> cost, or becomes affected by any form of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupting</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Anivia</b> ends <i>Glacial Storm</i>, dealing one last tick of damage.',
    leveling: [],
  },
];
export const Anivia = { I, Q, W, E, R };
