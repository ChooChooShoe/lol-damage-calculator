import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Nasus';
export const skillsData = ChampionSkillsData['Nasus'];

export const Nasus = {
  'Soul Eater': {
    effects: [
      {
        img: 'Soul Eater.png',
        description:
          'Innate: Nasus gains  9 / 14 / 19% (based on level) life steal.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Siphoning Strike': {
    effects: [
      {
        img: 'Siphoning Strike.png',
        description:
          'Active: Nasus empowers his next basic attack within 10 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage.',
        leveling: [
          {
            effectType: 'Stacks',
            name: 'Bonus Physical Damage:',
            raw: '30 / 50 / 70 / 90 / 110 (+ Siphoning Strike stacks)',
            min: 0,
            max: 10,
            description: '30 / 50 / 70 / 90 / 110 (+ Siphoning Strike stacks)',
            values: [30, 50, 70, 90, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70 / 90 / 110',
            children: [
              {
                values: 0,
                user: 'player',
                units: 'siphoningStrikeStacks',
                unitsText: 'Siphoning Strike stacks',
                pre: '+ Siphoning Strike stacks',
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
          'If Siphoning Strike kills the target, Nasus permanently gains 3 stacks, increased to 12 if the target is a  champion, large  minion, or large  monster.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Siphoning Strike  resets Nasus' basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Wither: {
    effects: [
      {
        img: 'Wither.png',
        description:
          'Active: Nasus ages the target enemy champion for 5 seconds,  slowing them by 35% and  crippling them by「 75% of that amount, 」「 26.25%, 」both increasing every second over the duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum Slow:',
            raw: '47 / 59 / 71 / 83 / 95%',
            values: [47, 59, 71, 83, 95],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '47 / 59 / 71 / 83 / 95%',
          },
          {
            effectType: 'Unique',
            name: 'Maximum Cripple:',
            raw: '35.25 / 44.25 / 53.25 / 62.25 / 71.25%',
            values: [35.25, 44.25, 53.25, 62.25, 71.25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35.25 / 44.25 / 53.25 / 62.25 / 71.25%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spirit Fire': {
    effects: [
      {
        img: 'Spirit Fire.png',
        description:
          'Active: Nasus unleashes a spirit fire at the target location, granting  sight of the area for 2.5 seconds and, after a 0.264 seconds delay, dealing magic damage to enemies within.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 95 / 135 / 175 / 215 (+ 60% AP)',
            damagetype: 'None',
            values: [55, 95, 135, 175, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 95 / 135 / 175 / 215',
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
          'The fire then remains for 5 seconds, dealing magic damage each second to enemies within and inflicting them with  armor reduction, lingering for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '11 / 19 / 27 / 35 / 43 (+ 12% AP)',
            damagetype: 'None',
            values: [11, 19, 27, 35, 43],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '11 / 19 / 27 / 35 / 43',
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
            name: 'Armor Reduction:',
            raw: "25 / 30 / 35 / 40 / 45% of target's armor",
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText: "of target's armor",
            pre: "25 / 30 / 35 / 40 / 45% of target's armor",
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Fury of the Sands': {
    effects: [
      {
        img: 'Fury of the Sands.png',
        description:
          'Active: Nasus empowers himself for 15 seconds, gaining  bonus health,  bonus armor,  bonus magic resistance, increased size, and  50 bonus attack range for the duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Health:',
            raw: '300 / 375 / 450 / 525 / 600',
            values: [300, 375, 450, 525, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 375 / 450 / 525 / 600',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '40 / 47.5 / 55 / 62.5 / 70',
            values: [40, 47.5, 55, 62.5, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 47.5 / 55 / 62.5 / 70',
          },
          {
            effectType: 'Unique',
            name: 'Increased Size:',
            raw: '30 / 32.5 / 35 / 37.5 / 40%',
            values: [30, 32.5, 35, 37.5, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 32.5 / 35 / 37.5 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "While Nasus is empowered, he deals magic damage every 0.5 seconds to nearby enemies, capped at 240 per second, and  Siphoning Strike's  cooldown is halved.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage Per Tick:',
            raw: "1.5 / 1.75 / 2 / 2.25 / 2.5% (+ 0.5% per 100 AP) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [1.5, 1.75, 2, 2.25, 2.5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '1.5 / 1.75 / 2 / 2.25 / 2.5%',
            post: "of target's maximum health",
            children: [
              {
                values: 0.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.5% per 100 AP',
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
