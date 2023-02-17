import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Malphite';
export const skillsData = ChampionSkillsData['Malphite'];

export const Malphite = {
  'Granite Shield': {
    effects: [
      {
        img: 'false',
        description:
          'Innate - Shard of the Monolith: Malphite gains increased percentage size equal to 8% of his total armor, capped at 35% increased size at 437.5 armor.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Granite Shield.png',
        description:
          'Innate: Malphite grants himself a  shield for 9% of his maximum health. The shield lasts until it is broken, and refreshes after a few seconds of not taking damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Seismic Shard': {
    effects: [
      {
        img: 'Seismic Shard.png',
        description:
          'Active: Malphite sends a shard to the target enemy that deals magic damage and  slows them for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 60% AP)',
            damagetype: 'None',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
            name: 'Slow:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Malphite also gains  bonus movement speed equal to the raw amount the target lost from the slow for the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Thunderclap: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Malphite gains  bonus armor, tripled while  Granite Shield is active.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: '10 / 15 / 20 / 25 / 30% armor',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_armor',
            unitsText: 'armor',
            pre: '10 / 15 / 20 / 25 / 30% armor',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Thunderclap.png',
        description:
          'Active: Malphite empowers his next basic attack within 6 seconds to gain  50 bonus range and deal  bonus physical damage  on-hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 20% AP) (+ 10% armor)',
            damagetype: 'None',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_armor',
                unitsText: 'armor',
                pre: '+ 10% armor',
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
          "Additionally, Malphite's basic attacks  on-hit for the next 5 seconds are empowered to trigger a cone in the direction of the target that deals physical damage to enemies hit.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '15 / 25 / 35 / 45 / 55 (+ 30% AP) (+ 15% armor)',
            damagetype: 'None',
            values: [15, 25, 35, 45, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_armor',
                unitsText: 'armor',
                pre: '+ 15% armor',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Thunderclap  resets Malphite's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ground Slam': {
    effects: [
      {
        img: 'Ground Slam.png',
        description:
          'Active: Malphite slams the ground beneath him, dealing magic damage to nearby enemies and  crippling them for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 60% AP) (+ 40% armor)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
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
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_armor',
                unitsText: 'armor',
                pre: '+ 40% armor',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Cripple:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Unstoppable Force': {
    effects: [
      {
        img: 'Unstoppable Force.png',
        description:
          'Active: Malphite  dashes with  displacement immunity to the target location. Upon arrival, he deals magic damage to nearby enemies and  knocks them up for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 300 / 400 (+ 90% AP)',
            damagetype: 'None',
            values: [200, 300, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 300 / 400',
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
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Unstoppable Force will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
