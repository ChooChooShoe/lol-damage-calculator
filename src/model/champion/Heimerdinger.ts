import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Heimerdinger';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Heimerdinger_Hextech_Affinity.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Heimerdinger</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span> while near an allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> or a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="H-28G Evolution Turret"><img alt="H-28G Evolution Turret" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL">H-28G Evolution Turret</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28Q Apex Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="H-28Q Apex Turret"><img alt="H-28Q Apex Turret" src="/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="Heimerdinger/LoL">H-28Q Apex Turret</a></span></span></i> deployed by him.',
    leveling: [],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Heimerdinger</b> deploys a <i>H-28G Evolution Turret</i> at the target location, which lasts until destroyed.',
    leveling: [],
  },
  {
    description:
      '<b>Heimerdinger</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> a <i>Turret Kit</i> charge, up to a maximum of 3.',
    leveling: [],
  },
  {
    description:
      'Up to 3 <i>H-28G Evolution Turrets</i> can be deployed at a time, with those deployed beyond the maximum destroying the oldest one.',
    leveling: [],
  },
  {
    description:
      '<i>See <a href="/wiki/Heimerdinger/LoL#Pets" title="Heimerdinger/LoL">Pets</a> for more details about H-28G Evolution Turrets.</i>',
    leveling: [],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!"><img alt="UPGRADE!!!" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!</a></span></span> - Active:</b></span> <b>Heimerdinger</b> deploys a <i>H-28Q Apex Turret</i> at the target location, which lasts for 8 seconds.',
    leveling: [],
  },
  {
    description:
      '<i>H-28Q Apex Turret</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!\'s"><img alt="UPGRADE!!!\'s" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!\'s</a></span></span></i> rank.',
    leveling: [],
  },
  {
    description:
      '<i>See <a href="/wiki/Heimerdinger/LoL#Pets" title="Heimerdinger/LoL">Pets</a> for more details about the H-28Q Apex Turret.</i>',
    leveling: [],
  },
];
const W1: SubSkill[] = [
  {
    img: '/wiki/images/Heimerdinger_Hextech_Micro-Rockets.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Heimerdinger</b> unleashes a wave of 5 rockets that converge to the target location and fan beyond it up to a maximum range, with each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy it hits. Every rocket hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> grants 20% beam charge to all <i><span class="inline-image ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL#H-28G Evolution Turret"><img alt="Heimerdinger H-28G Evolution Turret.png" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28Q Apex Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="turrets"><img alt="turrets" src="/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="Heimerdinger/LoL">turrets</a></span></span></i> within 1000 range, up to a maximum of 100% beam charge when hitting 5 rockets on an enemy champion.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Initial Magic Damage:',
        raw: '40 / 65 / 90 / 115 / 140 (+ 55% AP)',
        values: [40, 65, 90, 115, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 65 / 90 / 115 / 140',
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
      'Enemies can be hit by multiple rockets, with each one beyond the first dealing 20% damage, increased to 40% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Additional Magic Damage:',
        raw: '8 / 13 / 18 / 23 / 28 (+ 11% AP)',
        values: [8, 13, 18, 23, 28],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 13 / 18 / 23 / 28',
        children: [
          {
            values: 11,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 11% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '72 / 117 / 162 / 207 / 252 (+ 99% AP)',
        values: [72, 117, 162, 207, 252],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '72 / 117 / 162 / 207 / 252',
        children: [
          {
            values: 99,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 99% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Additional Minion Damage:',
        raw: '24 / 39 / 54 / 69 / 84 (+ 33% AP)',
        values: [24, 39, 54, 69, 84],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '24 / 39 / 54 / 69 / 84',
        children: [
          {
            values: 33,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 33% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Minion Damage:',
        raw: '136 / 221 / 306 / 391 / 476 (+ 187% AP)',
        values: [136, 221, 306, 391, 476],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '136 / 221 / 306 / 391 / 476',
        children: [
          {
            values: 187,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 187% AP',
          },
        ],
      },
    ],
  },
];
const W2: SubSkill[] = [
  {
    img: '/wiki/images/Heimerdinger_Hextech_Rocket_Swarm.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!"><img alt="UPGRADE!!!" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!</a></span></span> - Active:</b></span> <b>Heimerdinger</b> launches 4 waves of 5 rockets in quick succession to the target location, each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> are dealt reduced damage from rockets beyond the first, and further reduced beyond the fifth. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> take 100% damage from every rocket.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Initial Rocket Damage:',
        raw: '135 / 180 / 225 (+ 45% AP)',
        values: [135, 180, 225],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '135 / 180 / 225',
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
        name: '2-5 Rocket Magic Damage:',
        raw: '32 / 45 / 58 (+ 12% AP)',
        values: [32, 45, 58],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '32 / 45 / 58',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 12% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: '6-20 Rocket Damage:',
        raw: '16 / 22.5 / 29 (+ 6% AP)',
        values: [16, 22.5, 29],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '16 / 22.5 / 29',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 6% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Damage:',
        raw: '503 / 697.5 / 892 (+ 183% AP)',
        values: [503, 697.5, 892],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '503 / 697.5 / 892',
        children: [
          {
            values: 183,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 183% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minion Rocket Damage:',
        raw: '135 / 180 / 225 (+ 45% AP)',
        values: [135, 180, 225],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '135 / 180 / 225',
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
        name: 'Total Minion Damage:',
        raw: '2700 / 3600 / 4500 (+ 900% AP)',
        values: [2700, 3600, 4500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2700 / 3600 / 4500',
        children: [
          {
            values: 900,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 900% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Hextech Rocket Swarm</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!\'s"><img alt="UPGRADE!!!\'s" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!\'s</a></span></span></i> rank.',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Heimerdinger_CH-2_Electron_Storm_Grenade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Heimerdinger</b> hurls a grenade at the target location that detonates upon impact, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 35% for 2 seconds. If the grenade hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, all <i><span class="inline-image ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL#H-28G Evolution Turret"><img alt="Heimerdinger H-28G Evolution Turret.png" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28Q Apex Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="turrets"><img alt="turrets" src="/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="Heimerdinger/LoL">turrets</a></span></span></i> within 1000 range of the impact gain 100% beam charge.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 60% AP)',
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
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies hit at the center of the grenade\'s impact are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds.',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Heimerdinger_CH-3X_Lightning_Grenade.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!"><img alt="UPGRADE!!!" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!</a></span></span> - Active:</b></span> <b>Heimerdinger</b> hurls a massive grenade at the target location that bounces <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="540 range">a fixed distance</span> 3 times, exploding each time at <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="420 explosion radius, 270 stun radius">twice the radius</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 200 / 300 (+ 60% AP)',
        values: [100, 200, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 200 / 300',
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
    ],
  },
  {
    description:
      'Enemy champions can only be damaged once per cast, but can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> multiple times if circumstances permit.',
    leveling: [],
  },
  {
    description:
      '<i>CH-3X Lightning Grenade</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!\'s"><img alt="UPGRADE!!!\'s" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!\'s</a></span></span></i> rank.',
    leveling: [],
  },
  {
    description:
      '<i>CH-3X Lightning Grenade will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Heimerdinger_UPGRADE%21%21%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Heimerdinger</b> empowers his next <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> for an additional effect. These empowered abilities have the same cooldowns as their basic forms, deal modified damage, and do not have a <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> cost. <br><br><i>UPGRADE!!!</i> can be recast after 3 seconds, and does so automatically upon casting another ability.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Heimerdinger</b> ends <i>UPGRADE!!!</i> and puts it on a 3-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [],
  },
  {
    description:
      '<i>UPGRADE!!! can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
export const Heimerdinger = { I, Q1, Q2, W1, W2, E1, E2, R };
