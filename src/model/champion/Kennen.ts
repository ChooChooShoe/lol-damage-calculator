import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Kennen';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Kennen_Mark_of_the_Storm.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Kennen\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Mark of the Storm</i> to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.',
    leveling: [],
  },
  {
    description:
      'The third stack against a target consumes them all to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for 1.<small>25</small> seconds and restore <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">25 energy</span></span>. The stun duration is reduced to 0.<small>5</small> seconds if this occurs on the same target again within 6 seconds.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Slicing Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Slicing Maelstrom"><img alt="Slicing Maelstrom" src="/wiki/images/Kennen_Slicing_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Kennen/LoL">Slicing Maelstrom</a></span></span> can apply only up to 3 stacks on a target.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Kennen_Thundering_Shuriken.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kennen</b> throws a shuriken in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 120 / 165 / 210 / 255 (+ 75% AP)',
        values: [75, 120, 165, 210, 255],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 120 / 165 / 210 / 255',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kennen\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> generate a stack of <i>Electrical Surge</i>, stacking up to 4 times. At 4 stacks, his next basic attack is empowered to consume them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and apply a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Mark of the Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Mark of the Storm"><img alt="Mark of the Storm" src="/wiki/images/Kennen_Mark_of_the_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Kennen/LoL">Mark of the Storm</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '35 / 45 / 55 / 65 / 75 (+ 80 / 90 / 100 / 110 / 120% bonus AD) (+ 35% AP)',
        values: [35, 45, 55, 65, 75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 45 / 55 / 65 / 75',
        children: [
          {
            values: [80, 90, 100, 110, 120],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80 / 90 / 100 / 110 / 120% bonus AD',
          },
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
    ],
  },
  {
    img: '/wiki/images/Kennen_Electrical_Surge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kennen</b> sends out a surge of electricity that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies afflicted by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Mark of the Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Mark of the Storm"><img alt="Mark of the Storm" src="/wiki/images/Kennen_Mark_of_the_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Kennen/LoL">Mark of the Storm</a></span></span></i> or within <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Slicing Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Slicing Maelstrom"><img alt="Slicing Maelstrom" src="/wiki/images/Kennen_Slicing_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Kennen/LoL">Slicing Maelstrom</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 95 / 120 / 145 / 170 (+ 80% AP)',
        values: [70, 95, 120, 145, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 95 / 120 / 145 / 170',
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
    ],
  },
  {
    description:
      '<i>An enemy within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 775 units with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Mark of the Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Mark of the Storm"><img alt="Mark of the Storm" src="/wiki/images/Kennen_Mark_of_the_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Kennen/LoL">Mark of the Storm</a></span></span> or inside <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Slicing Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Slicing Maelstrom"><img alt="Slicing Maelstrom" src="/wiki/images/Kennen_Slicing_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Kennen/LoL">Slicing Maelstrom</a></span></span> is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be targeted by this ability.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Kennen_Lightning_Rush.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kennen</b> turns into lightning for 2 seconds, becoming unable to declare basic attacks but gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">100% <b>bonus</b> movement speed</span></span>. He deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he passes through, halved against non-champions, and restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">40 energy</span></span> upon damaging at least one enemy.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
        name: 'Non-Champion Damage:',
        raw: '40 / 60 / 80 / 100 / 120 (+ 40% AP)',
        values: [40, 60, 80, 100, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 60 / 80 / 100 / 120',
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
      '<i>Lightning Rush</i> can be recast after 0.<small>5</small> seconds, and does so automatically after the duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Kennen</b> ends <i>Lightning Rush</i> to gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and be allowed to exceed the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="normally 2.5 attacks per second">attack speed cap</span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '40 / 50 / 60 / 70 / 80%',
        values: [40, 50, 60, 70, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60 / 70 / 80%',
      },
    ],
  },
  {
    description:
      '<i>Lightning Rush\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Kennen_Slicing_Maelstrom.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kennen</b> summons a storm around himself for 3 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> for the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Resistances:',
        raw: '20 / 40 / 60',
        values: [20, 40, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 40 / 60',
      },
    ],
  },
  {
    description:
      'The storm strikes lightning bolts down on nearby enemies every 0.<small>5</small> seconds, each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Bolt:',
        raw: '40 / 75 / 110 (+ 22.5% AP)',
        values: [40, 75, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 75 / 110',
        children: [
          {
            values: 22.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 22.5% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Slicing Maelstrom</i> deals 10% increased damage against a target with each successive strike, up to a maximum of 150% damage with one strike.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Single-Target Damage:',
        raw: '300 / 562.5 / 825 (+ 168.75% AP)',
        values: [300, 562.5, 825],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 562.5 / 825',
        children: [
          {
            values: 168.75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 168.75% AP',
          },
        ],
      },
    ],
  },
];
export const Kennen = { I, Q, W, E, R };
