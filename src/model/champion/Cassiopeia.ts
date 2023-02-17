import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Cassiopeia';
export const skillsData = ChampionSkillsData['Cassiopeia'];

export const Cassiopeia = {
  'Serpentine Grace': {
    effects: [
      {
        img: 'Serpentine Grace.png',
        description:
          'Innate: Cassiopeia gains 4 − 72 (based on level)  bonus movement speed, but she cannot purchase Boots.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Noxious Blast': {
    effects: [
      {
        img: 'Noxious Blast.png',
        description:
          'Active: Cassiopeia creates a blast at the target location that explodes after a 0.4-second delay. Enemies within the blast are  poisoned for 3 seconds, taking magic damage every second over the duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '75 / 110 / 145 / 180 / 215 (+ 90% AP)',
            damagetype: 'None',
            values: [75, 110, 145, 180, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 110 / 145 / 180 / 215',
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
          'If Noxious Blast hits an enemy  champion, Cassiopeia gains  bonus movement speed that decays over 3 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
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
  Miasma: {
    effects: [
      {
        img: 'Miasma.png',
        description:
          'Active: Cassiopeia spews forth 8 bolts of venom in an arc at the target location, creating toxic clouds at the area for 5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Enemies within the clouds are  poisoned to take magic damage every second and become  grounded and  slowed by an amount that decays over the area's duration.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 15% AP)',
            damagetype: 'None',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Miasma will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Twin Fang': {
    effects: [
      {
        img: 'Twin Fang.png',
        description:
          "Active: Cassiopeia launches her fangs at the target enemy that deal 52 − 120 (based on level) (+ 10% AP) magic damage. If this kills the target, Twin Fang's  mana cost is refunded.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Against a  poisoned target, Twin Fang deals bonus magic damage and  heals Cassiopeia. The heal is reduced by 75% against  minions and small and medium  monsters.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '20 / 40 / 60 / 80 / 100 (+ 60% AP)',
            damagetype: 'None',
            values: [20, 40, 60, 80, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 40 / 60 / 80 / 100',
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
            effectType: 'Damage',
            name: 'Heal:',
            raw: '10 / 11.5 / 13 / 14.5 / 16% AP',
            damagetype: 'None',
            values: [10, 11.5, 13, 14.5, 16],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '10 / 11.5 / 13 / 14.5 / 16% AP',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Petrifying Gaze': {
    effects: [
      {
        img: 'Petrifying Gaze.png',
        description:
          'Active: Cassiopeia blasts enemies in a cone in the target direction, dealing magic damage to enemies struck within and  slowing them by 40% for 2 seconds. Enemies with their facing direction towards her are instead  stunned for the same duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 50% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
