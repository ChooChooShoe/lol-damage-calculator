import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Vayne';
export const skillsData = ChampionSkillsData['Vayne'];

export const Vayne = {
  'Night Hunter': {
    effects: [
      {
        img: 'Night Hunter.png',
        description:
          'Innate: Vayne gains  30 bonus movement speed while facing a nearby  visible enemy champion.\n Final Hour Bonus: The bonus movement speed is tripled to 90.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Tumble: {
    effects: [
      {
        img: 'Tumble.png',
        description:
          'Active: Vayne  dashes a fixed distance in the target direction, though not through terrain, and empowers her next basic attack within 7 seconds to deal bonus physical damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '60 / 65 / 70 / 75 / 80% AD',
            damagetype: 'None',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '60 / 65 / 70 / 75 / 80% AD',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Tumble  resets Vayne's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Silver Bolts': {
    effects: [
      {
        img: 'Silver Bolts.png',
        description:
          "Passive: Vayne's basic attacks  on-hit and  Condemn apply a stack of Silver Bolts for 3.5 seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The third stack consumes them all to deal  bonus true damage, with a minimum threshold. This damage is capped at 200 against  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus True Damage:',
            raw: "4 / 6 / 8 / 10 / 12% of target's maximum health",
            healType: 'OutgoingHeals',
            values: [4, 6, 8, 10, 12],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "4 / 6 / 8 / 10 / 12% of target's maximum health",
          },
          {
            effectType: 'Unique',
            name: 'Minimum Bonus Damage:',
            raw: '50 / 65 / 80 / 95 / 110',
            values: [50, 65, 80, 95, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 65 / 80 / 95 / 110',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Condemn: {
    effects: [
      {
        img: 'Condemn.png',
        description:
          'Active: Vayne fires a heavy bolt at the target enemy that deals physical damage and  knocks them back 475 units, though not through terrain.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 85 / 120 / 155 / 190 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [50, 85, 120, 155, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 85 / 120 / 155 / 190',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
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
          'If the target collides with terrain, they take  bonus physical damage and become  stunned for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '75 / 127.5 / 180 / 232.5 / 285 (+ 75% bonus AD)',
            damagetype: 'None',
            values: [75, 127.5, 180, 232.5, 285],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 127.5 / 180 / 232.5 / 285',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Final Hour': {
    effects: [
      {
        img: 'Final Hour.png',
        description:
          "Active: Vayne equips her crossbow, gaining  bonus attack damage and tripling  Night Hunter's bonus for a duration.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '8 / 9 / 10 / 11 / 12',
            values: [8, 9, 10, 11, 12],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 9 / 10 / 11 / 12',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Attack Damage:',
            raw: '25 / 40 / 55',
            values: [25, 40, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 40 / 55',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally,  Tumble becomes empowered with a reduced  cooldown, and grants Vayne  invisibility for 1 second. Attacking or casting  Condemn breaks the stealth immediately.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Tumble Cooldown Reduction:',
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
        img: '',
        description:
          "Scoring an enemy champion  takedown within 3 seconds of damaging them will extend Final Hour's duration by 4 seconds, up to its original duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
