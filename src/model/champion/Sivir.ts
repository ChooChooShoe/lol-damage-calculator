import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Sivir';
export const skillsData = ChampionSkillsData['Sivir'];

export const Sivir = {
  'Fleet of Foot': {
    effects: [
      {
        img: 'Fleet of Foot.png',
        description:
          "Innate: Sivir's basic attacks and ability hits against enemy  champions grant her  55 − 75 (based on level) bonus movement speed decaying over 1.5 seconds, refreshing on subsequent hits.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Boomerang Blade': {
    effects: [
      {
        img: 'Boomerang Blade.png',
        description:
          'Active: Sivir hurls her crossblade in the target direction, dealing physical damage to enemies within its path, increased by 0% − 50% (based on critical strike chance).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '15 / 30 / 45 / 60 / 75 (+ 80 / 85 / 90 / 95 / 100% AD) (+ 60% AP)',
            damagetype: 'None',
            values: [15, 30, 45, 60, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 30 / 45 / 60 / 75',
            children: [
              {
                values: [80, 85, 90, 95, 100],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 80 / 85 / 90 / 95 / 100% AD',
              },
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
          "Boomerang Blade's damage is reduced by 0% − 60% (based on non-champions hit). Upon reaching maximum range, the crossblade returns to her, resetting the damage modifier and dealing the same damage to enemies on its way back.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Damage:',
            raw: '6 / 12 / 18 / 24 / 30 (+ 32 / 34 / 36 / 38 / 40% AD) (+ 24% AP)',
            damagetype: 'None',
            values: [6, 12, 18, 24, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 12 / 18 / 24 / 30',
            children: [
              {
                values: [32, 34, 36, 38, 40],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 32 / 34 / 36 / 38 / 40% AD',
              },
              {
                values: 24,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 24% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Maximum Champion Damage:',
            raw: '30 / 60 / 90 / 120 / 150 (+ 160 / 170 / 180 / 190 / 200% AD) (+ 120% AP)',
            damagetype: 'None',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
            children: [
              {
                values: [160, 170, 180, 190, 200],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 160 / 170 / 180 / 190 / 200% AD',
              },
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
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Enemies can be hit only once per pass.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Ricochet: {
    effects: [
      {
        img: 'Ricochet.png',
        description:
          'Active: Sivir empowers her crossblade for the next 4 seconds, gaining  bonus attack speed and causing her basic attacks to bounce to additional surrounding enemies, dealing them physical damage. If the triggering attack  critically strikes, the bounces will do so as well. Ricochet deals 65% damage against  minions and executes them if they would be left below  15 health.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
          {
            effectType: 'Damage',
            name: 'Bounce Damage:',
            raw: '25 / 30 / 35 / 40 / 45% AD',
            damagetype: 'None',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '25 / 30 / 35 / 40 / 45% AD',
          },
          {
            effectType: 'Damage',
            name: 'Minion Bounce Damage:',
            raw: '16.25 / 19.5 / 22.75 / 26 / 29.25% AD',
            damagetype: 'None',
            values: [16.25, 19.5, 22.75, 26, 29.25],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '16.25 / 19.5 / 22.75 / 26 / 29.25% AD',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack. They prioritize the nearest new target, then the nearest target if no new targets are available.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Ricochet  resets Sivir's basic attack timer. The target does not have to be  visible to be bounced to.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spell Shield': {
    effects: [
      {
        img: 'Spell Shield.png',
        description:
          'Active: Sivir gains a  spell shield for 1.5 seconds. Upon successfully blocking a hostile effect, she  heals herself and activates  Fleet of Foot after 0.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '60 / 65 / 70 / 75 / 80% AD (+ 50% AP)',
            damagetype: 'None',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '60 / 65 / 70 / 75 / 80% AD',
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
  'On the Hunt': {
    effects: [
      {
        img: 'On the Hunt.png',
        description:
          'Active: Sivir gains On the Hunt for a duration and grants it to nearby allied champions for the remaining duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Buff Duration:',
            raw: '8 / 9 / 10 / 11 / 12',
            values: [8, 9, 10, 11, 12],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 9 / 10 / 11 / 12',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'On the Hunt: Gain  bonus movement speed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "While active, Sivir's basic attacks on-attack reduce her basic abilities'  current cooldowns by 0.5 seconds each.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "On the Hunt's duration is refreshed whenever Sivir scores a  takedown against an enemy  champion within 3 seconds of damaging them.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
