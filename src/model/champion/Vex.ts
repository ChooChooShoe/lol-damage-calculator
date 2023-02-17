import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Vex';
export const skillsData = ChampionSkillsData['Vex'];

export const Vex = {
  "Doom 'n Gloom": {
    effects: [
      {
        img: 'false',
        description:
          "Passive - Doom: Periodically, Vex empowers her next basic ability to  knock down and  fear enemies hit for 0.75 / 1 / 1.25 / 1.5 (based on level) seconds, during which they are  slowed by 60% − 99% (based on distance from Vex). If  Looming Darkness triggers Doom, enemies hit will  flee from the epicenter instead.Doom's  cooldown resets upon respawning.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Vex Doom 'n Gloom.png",
        description:
          "Innate - Gloom: Nearby enemy  champions and  monsters that  dash or  blink will be marked with Gloom for 6 seconds. Vex's next basic attack, which becomes  non-projectile, or basic ability hit against an enemy with Gloom will detonate the mark.  Looming Darkness will also inflict Gloom, but cannot detonate it.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Gloom's detonation deals 30 − 140 (based on level) (+ 20% AP)  bonus magic damage and refunds 25% of Doom's cooldown. Against non-champions, this instead deals 40 / 45 / 50 / 55 / 60% (based on level) damage and refunds 10% of Doom's cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Mistral Bolt': {
    effects: [
      {
        img: 'Vex Mistral Bolt.png',
        description:
          'Active: Vex launches a wave of mist in the target direction that deals magic damage to enemies hit. After travelling 500 units, the wave accelerates but also narrows itself.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 70% AP)',
            damagetype: 'None',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
            children: [
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
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Personal Space': {
    effects: [
      {
        img: 'Vex Personal Space.png',
        description:
          'Active: Vex emits a shockwave around her before the cast time, dealing magic damage to nearby enemies and granting herself a  shield for 2.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 75% AP)',
            damagetype: 'None',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 30% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
  'Looming Darkness': {
    effects: [
      {
        img: 'Vex Looming Darkness.png',
        description:
          "Active: Vex tosses her Shadow to explode at the target location, dealing magic damage to enemies hit and  slowing them for 2 seconds. The explosion's radius increases based on cast distance.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 40 / 45 / 50 / 55 / 60% AP)',
            damagetype: 'None',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
            children: [
              {
                values: [40, 45, 50, 55, 60],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40 / 45 / 50 / 55 / 60% AP',
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
        img: '',
        description:
          'Looming Darkness will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shadow Surge': {
    effects: [
      {
        img: 'Vex Shadow Surge.png',
        description:
          'Active: Vex sends her Shadow in the target direction that grants  sight around its trajectory and deals magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 100 / 125 / 150 / 175 (+ 20% AP)',
            damagetype: 'None',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
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
          'Shadow stops upon hitting an enemy  champion to mark them for 4 seconds, during which they are  revealed. Shadow Surge can be recast while the target is marked.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Vex Shadow Surge 2.png',
        description:
          'Recast: Vex  dashes towards the marked target with  displacement immunity. Upon arrival, she consumes their mark and deals magic damage.',
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
      {
        img: '',
        description:
          'If the target dies within 6 seconds of being marked, Vex can cast Shadow Surge again within 12 seconds at no cost after 0.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
