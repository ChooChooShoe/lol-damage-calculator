import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Olaf';
export const skillsData = ChampionSkillsData['Olaf'];

export const Olaf = {
  'Berserker Rage': {
    effects: [
      {
        img: 'Berserker Rage.png',
        description:
          'Innate: Olaf gains  bonus attack speed and  life steal based on his missing health, up to 60% − 100% (based on level) bonus attack speed and 8% − 25% (based on level) life steal at 70% missing health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Undertow: {
    effects: [
      {
        img: 'Undertow.png',
        description:
          'Active: Olaf throws an axe to the target location that deals physical damage to enemies it passes through and  slows them for 1.5 − 2.5 (based on distance traveled) seconds. Enemy  champions hit are also inflicted with  20% armor reduction for 4 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The axe remains in place for a duration equal to Undertow's cooldown, briefly granting  sight of its surroundings. Olaf can pick up the axe to reduce Undertow's  current cooldown to 2.5 seconds, which resets the cooldown if that has already elapsed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Undertow will cast at max range if cast beyond that. Nearby  monsters are granted  ghosting upon Undertow's cast.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tough It Out': {
    effects: [
      {
        img: 'Olaf Tough It Out.png',
        description:
          'Active: Olaf gains  bonus attack speed for 4 seconds and grants himself a  shield for 2.5 seconds with an amount that is capped at 70% missing health.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '10 / 40 / 70 / 100 / 130 (+ 17.5% missing health)',
            healType: 'BonusHealth',
            values: [10, 40, 70, 100, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 40 / 70 / 100 / 130',
            children: [
              {
                values: 17.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'missing_hp',
                unitsText: 'missing health',
                pre: '+ 17.5% missing health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Tough It Out  resets Olaf's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Reckless Swing': {
    effects: [
      {
        img: 'Reckless Swing.png',
        description:
          'Active: Olaf strikes thunder onto the target enemy, dealing  true damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'True Damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 50% AD)',
            damagetype: 'None',
            values: [70, 115, 160, 205, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
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
          'If Reckless Swing kills the target, Olaf  heals himself equal to the  health cost.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Basic attacks reduce Reckless Swing's  cooldown by 1 second.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Ragnarok: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Olaf gains  bonus armor and  bonus magic resistance.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '10 / 15 / 20 / 25 / 30',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Ragnarok.png',
        description:
          'Active: Olaf becomes enraged for 3 seconds,  cleansing himself of all  crowd control and becoming  immune to them, as well as gaining  bonus attack damage and 10% increased size. For the first second of Ragnarok, he also gains  bonus movement speed while facing  visible enemy  champions within 2000 units.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 25% AD)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 25% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 45 / 70%',
            values: [20, 45, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Ragnarok's duration is increased by and up to 2.5 seconds for each basic attack  on-hit or cast of  Reckless Swing against an enemy  champion.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
