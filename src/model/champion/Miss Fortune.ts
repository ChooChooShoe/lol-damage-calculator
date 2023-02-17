import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Miss Fortune';
export const skillsData = ChampionSkillsData['Miss Fortune'];

export const MissFortune = {
  'Love Tap': {
    effects: [
      {
        img: 'Love Tap.png',
        description:
          "Innate: Miss Fortune's basic attacks are empowered to apply a mark that expires upon attacking a new enemy. If the enemy was unmarked, this also deals 50% − 100% (based on level) AD bonus physical damage, halved to 25% − 50% (based on level) AD against  minions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Double Up': {
    effects: [
      {
        img: 'Double Up.png',
        description:
          'Active: Miss Fortune fires a shot at the target enemy that deals physical damage, which then bounces to hit another enemy behind them. This applies on-attack effects to the first enemy hit, and  on-hit effects to both enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 100% AD) (+ 35% AP)',
            damagetype: 'None',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
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
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Double Up's bounce is affected by  critical strike modifiers. If Double Up kills the primary target, the bounce will  critically strike.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The bounce prioritizes units directly behind the primary target. A target does not have to be  visible be hit by the bounce.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Strut: {
    effects: [
      {
        img: 'Strut.png',
        description:
          'Passive: Miss Fortune gains  25 bonus movement speed after 5 seconds without taking non- persistent damage. This bonus is increased after another 5 seconds, and is granted instantly whenever Strut is cast or upon respawning.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Increased Bonus Movement Speed:',
            raw: '55 / 65 / 75 / 85 / 95',
            values: [55, 65, 75, 85, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 65 / 75 / 85 / 95',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Guns Blazing.png',
        description:
          'Active: Miss Fortune gains  bonus attack speed for 4 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 55 / 70 / 85 / 100%',
            values: [40, 55, 70, 85, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Marking a new target with  Love Tap reduces Strut's  current cooldown by 2 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Make It Rain': {
    effects: [
      {
        img: 'Make It Rain.png',
        description:
          'Active: Miss Fortune casts a storm of bullets at the target location for 2 seconds, granting  sight of the area, dealing magic damage every 0.25 seconds to enemies within, and  slowing them by 40% (+ 6% per 100 AP).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '8.75 / 12.5 / 16.25 / 20 / 23.75 (+ 15% AP)',
            damagetype: 'None',
            values: [8.75, 12.5, 16.25, 20, 23.75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8.75 / 12.5 / 16.25 / 20 / 23.75',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Make It Rain will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bullet Time': {
    effects: [
      {
        img: 'Bullet Time.png',
        description:
          'Active: Miss Fortune  channels for up to 3 seconds, firing a number of waves of bullets in the target direction. Each wave is in a spread of 6 projectiles that deals 75% AD (+ 25% AP) physical damage to enemies hit.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Total Waves:',
            raw: '14 / 15 / 16 / 17 / 18',
            values: [14, 15, 16, 17, 18],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '14 / 15 / 16 / 17 / 18',
          },
          {
            effectType: 'Unique',
            name: 'Wave Interval Time:',
            raw: '0.2036 / 0.19 / 0.1781 / 0.1676 / 0.1583',
            values: [0.2036, 0.19, 0.1781, 0.1676, 0.1583],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.2036 / 0.19 / 0.1781 / 0.1676 / 0.1583',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Each of the waves can  critically strike for (20% +  7%) bonus physical damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
