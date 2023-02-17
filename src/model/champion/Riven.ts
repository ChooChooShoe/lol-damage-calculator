import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Riven';
export const skillsData = ChampionSkillsData['Riven'];

export const Riven = {
  'Runic Blade': {
    effects: [
      {
        img: 'Runic Blade.png',
        description:
          "Innate: Riven's ability casts generate a stack of Charge for 6 seconds, refreshing on subsequent casts and stacking up to 3 times. Riven's basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% − 60% (based on level) AD.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The bonus damage is affected by  critical strike modifiers and applies  life steal at 100% effectiveness.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Broken Wings': {
    effects: [
      {
        img: 'Broken Wings.png',
        description:
          'Active: Riven can activate Broken Wings three times before the ability goes on cooldown, with a 0.3125-second static cooldown between casts. If Riven does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Riven slashes with her sword for each of the three casts, dealing physical damage to enemies struck within an area,  resetting her basic attack timer, and ordering her to basic attack the target of Broken Wings if there are any.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '15 / 35 / 55 / 75 / 95 (+ 45 / 50 / 55 / 60 / 65% AD)',
            damagetype: 'None',
            values: [15, 35, 55, 75, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 35 / 55 / 75 / 95',
            children: [
              {
                values: [45, 50, 55, 60, 65],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 45 / 50 / 55 / 60 / 65% AD',
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
          'First Cast: Riven  dashes up to 225 units towards the target enemy or in the direction she is currently facing, striking enemies in the target area 100 units away. This cast cannot cross terrain.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Second Cast: Riven mimics the first cast's effects.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Third Cast: Riven mimics the first cast's effects in a larger area while also  knocking back enemies hit 75 units over 0.5 seconds. This cast can cross terrain.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ki Burst': {
    effects: [
      {
        img: 'Ki Burst.png',
        description:
          'Active: Riven emits a flash of runic energy before the cast time, dealing physical damage to nearby enemies and  stunning them for 0.75 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 95 / 125 / 155 / 185 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [65, 95, 125, 155, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 95 / 125 / 155 / 185',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Valor: {
    effects: [
      {
        img: 'Valor.png',
        description:
          'Active: Riven  dashes to the target location, though not through terrain, while granting herself a  shield for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '80 / 105 / 130 / 155 / 180 (+ 110% bonus AD)',
            damagetype: 'None',
            values: [80, 105, 130, 155, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 105 / 130 / 155 / 180',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110% bonus AD',
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
          'Riven can cast any of her abilities during the dash. Valor will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blade of the Exile': {
    effects: [
      {
        img: 'Blade of the Exile.png',
        description:
          'Active: Riven empowers her blade for 15 seconds, gaining 20% AD  bonus attack damage,  75 bonus attack range, and increased range on  Broken Wings and  Ki Burst. After 0.5 seconds, she can cast  Wind Slash within the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wind Slash': {
    effects: [
      {
        img: 'Wind Slash.png',
        description:
          'Active: Riven unleashes a wave of energy in a cone in the target direction that deals physical damage to enemies hit, increased by 0% − 200% (based on missing health).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 60% bonus AD)',
            damagetype: 'None',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
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
