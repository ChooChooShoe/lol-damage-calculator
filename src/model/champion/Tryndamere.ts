import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Tryndamere';
export const skillsData = ChampionSkillsData['Tryndamere'];

export const Tryndamere = {
  'Battle Fury': {
    effects: [
      {
        img: 'Battle Fury.png',
        description:
          'Innate: Tryndamere generates  5 Fury on his basic attacks, and 10 Fury on  critical strikes and each time he kills an enemy. After 8 seconds without dealing or taking damage, Tryndamere loses 5 Fury per second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Tryndamere gains  0% − 40% (based on Fury) critical strike chance.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Bloodlust: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Tryndamere gains  bonus attack damage, plus an additional amount based on his missing health.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Damage:',
            raw: '10 / 15 / 20 / 25 / 30',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
          },
          {
            effectType: 'Heal',
            name: 'Additional Bonus AD:',
            raw: '0.15 / 0.25 / 0.35 / 0.45 / 0.55 per 1% missing health',
            healType: 'BonusHealth',
            values: [0.15, 0.25, 0.35, 0.45, 0.55],
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'missing healthper 1',
            pre: '0.15 / 0.25 / 0.35 / 0.45 / 0.55 per 1% missing health',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Bloodlust.png',
        description:
          'Active: Tryndamere consumes all of his  Fury to  heal himself, increased for every point of Fury consumed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Heal:',
            raw: '30 / 40 / 50 / 60 / 70 (+ 30% AP)',
            damagetype: 'None',
            values: [30, 40, 50, 60, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70',
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
        hidden: false,
        locked: true,
      },
    ],
  },
  'Mocking Shout': {
    effects: [
      {
        img: 'Mocking Shout.png',
        description:
          'Active: Tryndamere reduces the  attack damage of nearby enemy champions for 4 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Attack Damage Reduction:',
            raw: '20 / 35 / 50 / 65 / 80',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Targets facing in the opposite direction of Tryndamere are also  slowed for the duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 37.5 / 45 / 52.5 / 60%',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'A nearby enemy champion is required to cast this ability. The target does not have to be  visible to be targeted by this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spinning Slash': {
    effects: [
      {
        img: 'Spinning Slash.png',
        description:
          'Active: Tryndamere  dashes to the target location, dealing physical damage to enemies hit and generating  2 Fury per enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 130% bonus AD) (+ 80% AP)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 130% bonus AD',
              },
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
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Critical strikes reduce Spinning Slash's  current cooldown by 0.75 seconds, doubled to 1.5 seconds against  champions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Bloodlust and  Undying Rage can be cast during the dash. Spinning Slash will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Undying Rage': {
    effects: [
      {
        img: 'Undying Rage.png',
        description:
          'Active: Tryndamere becomes enraged, instantly gaining  Fury and a  minimum health threshold for 5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Fury Gained:',
            raw: '50 / 75 / 100',
            values: [50, 75, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100',
          },
          {
            effectType: 'Unique',
            name: 'Minimum Health Threshold:',
            raw: '30 / 50 / 70',
            values: [30, 50, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Undying Rage can be used while affected by  cast-inhibiting crowd control.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
