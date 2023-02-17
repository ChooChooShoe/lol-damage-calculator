import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Twisted Fate';
export const skillsData = ChampionSkillsData['Twisted Fate'];

export const TwistedFate = {
  'Loaded Dice': {
    effects: [
      {
        img: 'Loaded Dice.png',
        description:
          'Innate: Whenever Twisted Fate kills an enemy, he generates 1 − 6 (based on probability).',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Since his dice are loaded, Twisted Fate has an increased chance of gaining  6.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wild Cards': {
    effects: [
      {
        img: 'Wild Cards.png',
        description:
          'Active: Twisted Fate throws a fan of three cards in a cone in the target direction that each deal magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 80% AP)',
            damagetype: 'None',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
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
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Enemies can be damaged only once per pass.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Pick a Card': {
    effects: [
      {
        img: 'Pick a Card.png',
        description:
          'Active: Twisted Fate cycles through three cards for 6 seconds, hovering each for 0.5 seconds at a time. Pick a Card can be recast within the duration, which selects the current card hovered.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Twisted Fate Pick a Card.gif',
        description:
          'Recast: Twisted Fate empowers his next basic attack within 6 seconds to have a 0.25-second cast time, deal modified magic damage, and apply an additional effect based on the card selected, though not being able to  critically strike.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Blue Card.png',
        description: 'Blue Card Bonus: Restores  mana.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 60 / 80 / 100 / 120 (+ 100% AD) (+ 115% AP)',
            damagetype: 'None',
            values: [40, 60, 80, 100, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 60 / 80 / 100 / 120',
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
                values: 115,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 115% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '50 / 75 / 100 / 125 / 150',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Red Card.png',
        description:
          'Red Card Bonus: Deals magic damage to the target and surrounding enemies,  slowing them for 2.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 100% AD) (+ 70% AP)',
            damagetype: 'None',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
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
            name: 'Slow:',
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
      {
        img: 'Gold Card.png',
        description: 'Gold Card Bonus:  Stuns the target for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 100% AD) (+ 50% AP)',
            damagetype: 'None',
            values: [15, 22.5, 30, 37.5, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45',
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
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Stacked Deck': {
    effects: [
      {
        img: 'Stacked Deck.png',
        description:
          'Passive: Twisted Fate gains  bonus attack speed. His basic attacks generate a stack of Stacked Deck, stacking up to 3 times. At 3 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '10 / 17.5 / 25 / 32.5 / 40%',
            values: [10, 17.5, 25, 32.5, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 17.5 / 25 / 32.5 / 40%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '65 / 90 / 115 / 140 / 165 (+ 50% AP)',
            damagetype: 'None',
            values: [65, 90, 115, 140, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 90 / 115 / 140 / 165',
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
  Destiny: {
    effects: [
      {
        img: 'Destiny.png',
        description:
          'Active: Twisted Fate marks all targetable enemy champions,  revealing them for a duration. Destiny can be recast after 0.5 seconds within the duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '6 / 7 / 8 / 9 / 10',
            values: [6, 7, 8, 9, 10],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Gate.png',
        description:
          'Recast - Gate: Twisted Fate  channels for 1.5 seconds before  blinking to the target location,  destroying all  projectiles targeting him in the process.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
