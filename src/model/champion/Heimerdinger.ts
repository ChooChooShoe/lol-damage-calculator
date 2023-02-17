import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Heimerdinger';
export const skillsData = ChampionSkillsData['Heimerdinger'];

export const Heimerdinger = {
  'Hextech Affinity': {
    effects: [
      {
        img: 'Hextech Affinity.png',
        description:
          'Innate: Heimerdinger gains  20% bonus movement speed while near an allied  turret or a  H-28G Evolution Turret or  H-28Q Apex Turret deployed by him.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'H-28G Evolution Turret': {
    effects: [
      {
        img: 'H-28G Evolution Turret.png',
        description:
          'Active: Heimerdinger deploys a H-28G Evolution Turret at the target location, which lasts until destroyed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Heimerdinger periodically stocks a Turret Kit charge, up to a maximum of 3.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Up to 3 H-28G Evolution Turrets can be deployed at a time, with those deployed beyond the maximum destroying the oldest one.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about H-28G Evolution Turrets.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'H-28Q Apex Turret': {
    effects: [
      {
        img: 'H-28Q Apex Turret.png',
        description:
          'UPGRADE!!! - Active: Heimerdinger deploys a H-28Q Apex Turret at the target location, which lasts for 8 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "H-28Q Apex Turret scales with  UPGRADE!!!'s rank.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about the H-28Q Apex Turret.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Hextech Micro-Rockets': {
    effects: [
      {
        img: 'Hextech Micro-Rockets.png',
        description:
          'Active: Heimerdinger unleashes a wave of 5 rockets that converge to the target location and fan beyond it up to a maximum range, with each one dealing magic damage to the first enemy it hits. Every rocket hitting an enemy  champion grants 20% beam charge to all   turrets within 1000 range, up to a maximum of 100% beam charge when hitting 5 rockets on an enemy champion.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Initial Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 55% AP)',
            damagetype: 'None',
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
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies can be hit by multiple rockets, with each one beyond the first dealing 20% damage, increased to 40% against  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Additional Magic Damage:',
            raw: '8 / 13 / 18 / 23 / 28 (+ 11% AP)',
            damagetype: 'None',
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
            effectType: 'Damage',
            name: 'Additional Minion Damage:',
            raw: '24 / 39 / 54 / 69 / 84 (+ 33% AP)',
            damagetype: 'None',
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
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Hextech Rocket Swarm': {
    effects: [
      {
        img: 'Hextech Rocket Swarm.png',
        description:
          'UPGRADE!!! - Active: Heimerdinger launches 4 waves of 5 rockets in quick succession to the target location, each one dealing magic damage. Enemy  champions and  monsters are dealt reduced damage from rockets beyond the first, and further reduced beyond the fifth.  Minions take 100% damage from every rocket.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Initial Rocket Damage:',
            raw: '135 / 180 / 225 (+ 45% AP)',
            damagetype: 'None',
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
            effectType: 'Damage',
            name: 'Minion Rocket Damage:',
            raw: '135 / 180 / 225 (+ 45% AP)',
            damagetype: 'None',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Hextech Rocket Swarm scales with  UPGRADE!!!'s rank.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'CH-2 Electron Storm Grenade': {
    effects: [
      {
        img: 'CH-2 Electron Storm Grenade.png',
        description:
          'Active: Heimerdinger hurls a grenade at the target location that detonates upon impact, dealing magic damage to nearby enemies and  slowing them by 35% for 2 seconds. If the grenade hits an enemy  champion, all   turrets within 1000 range of the impact gain 100% beam charge.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 60% AP)',
            damagetype: 'None',
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
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Enemies hit at the center of the grenade's impact are also  stunned for 1.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'CH-3X Lightning Grenade': {
    effects: [
      {
        img: 'CH-3X Lightning Grenade.png',
        description:
          'UPGRADE!!! - Active: Heimerdinger hurls a massive grenade at the target location that bounces a fixed distance 3 times, exploding each time at twice the radius.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 200 / 300 (+ 60% AP)',
            damagetype: 'None',
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
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemy champions can only be damaged once per cast, but can be  slowed and  stunned multiple times if circumstances permit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "CH-3X Lightning Grenade scales with  UPGRADE!!!'s rank.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'CH-3X Lightning Grenade will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'UPGRADE!!!': {
    effects: [
      {
        img: 'UPGRADE!!!.png',
        description:
          'Active: Heimerdinger empowers his next basic ability for an additional effect. These empowered abilities have the same cooldowns as their basic forms, deal modified damage, and do not have a  mana cost. UPGRADE!!! can be recast after 3 seconds, and does so automatically upon casting another ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Heimerdinger ends UPGRADE!!! and puts it on a 3-second  cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'UPGRADE!!! can be used while affected by  cast-inhibiting crowd control.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
