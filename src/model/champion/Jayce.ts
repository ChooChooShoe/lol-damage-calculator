import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Jayce';
export const skillsData = ChampionSkillsData['Jayce'];

export const Jayce = {
  'Hextech Capacitor': {
    effects: [
      {
        img: 'Hextech Capacitor.png',
        description:
          'Innate: Whenever Jayce switches between either  Hammer Stance or  Cannon Stance, he gains  ghosting and  40 bonus movement speed for 0.75 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'To the Skies!': {
    effects: [
      {
        img: 'To the Skies!.png',
        description:
          "Active: Jayce  leaps to the target enemy's location. Upon arrival, he deals physical damage to all enemies within an area and  slows them for 2 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 110 / 160 / 210 / 260 / 310 (+ 120% bonus AD)',
            damagetype: 'None',
            values: [60, 110, 160, 210, 260, 310],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210 / 260 / 310',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50 / 55%',
            values: [30, 35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Lightning Field can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shock Blast': {
    effects: [
      {
        img: 'Shock Blast.png',
        description:
          'Active: Jayce fires an electric bolt in the target direction that detonates upon hitting an enemy or reaching maximum range, dealing physical damage to nearby enemies and granting  sight of the area for 1.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 110 / 165 / 220 / 275 / 330 (+ 120% bonus AD)',
            damagetype: 'None',
            values: [55, 110, 165, 220, 275, 330],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 110 / 165 / 220 / 275 / 330',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
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
          'If the bolt passes through  Acceleration Gate, it becomes supercharged: increasing its damage by 40% as well as its speed, range and explosion radius.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '77 / 154 / 231 / 308 / 385 / 462 (+ 168% bonus AD)',
            damagetype: 'None',
            values: [77, 154, 231, 308, 385, 462],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '77 / 154 / 231 / 308 / 385 / 462',
            children: [
              {
                values: 168,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 168% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Lightning Field': {
    effects: [
      {
        img: 'false',
        description: "Passive: Jayce's basic attacks restore  mana  on-hit.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '10 / 12 / 14 / 16 / 18 / 20',
            values: [10, 12, 14, 16, 18, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 12 / 14 / 16 / 18 / 20',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Lightning Field.png',
        description:
          'Active: Jayce surrounds himself with an electric field for 4 seconds that deals magic damage every second to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '35 / 50 / 65 / 80 / 95 / 110 (+ 25% AP)',
            damagetype: 'None',
            values: [35, 50, 65, 80, 95, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95 / 110',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Hyper Charge': {
    effects: [
      {
        img: 'Hyper Charge.png',
        description:
          "Active: Jayce empowers his next 3 basic attacks within 4 seconds to deal modified physical damage and gain  300% bonus attack speed.Hyper Charge's total damage is affected by  critical strike modifiers.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Damage Modifier:',
            raw: '70 / 78 / 86 / 94 / 102 / 110% AD',
            damagetype: 'None',
            values: [70, 78, 86, 94, 102, 110],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '70 / 78 / 86 / 94 / 102 / 110% AD',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Hyper Charge  resets Jayce's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Thundering Blow': {
    effects: [
      {
        img: 'Thundering Blow.png',
        description:
          'Active: Jayce swings his hammer at the target enemy, dealing magic damage, capped against  monsters, while also  displacing them to a location 500 units in front of him.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "8 / 10.8 / 13.6 / 16.4 / 19.2 / 22% of target's maximum health (+ 100% bonus AD)",
            healType: 'OutgoingHeals',
            values: [8, 10.8, 13.6, 16.4, 19.2, 22],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "8 / 10.8 / 13.6 / 16.4 / 19.2 / 22% of target's maximum health",
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
  'Acceleration Gate': {
    effects: [
      {
        img: 'Acceleration Gate.png',
        description:
          'Active: Jayce deploys an energy gate centered at the target location, lasting for 4 seconds and granting  sight of its surroundings. Jayce and all allied champions can move through it to gain  bonus movement speed that decays over 3 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '30 / 35 / 40 / 45 / 50 / 55%',
            values: [30, 35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The buff is continuously refreshed while inside the gate. Acceleration Gate will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Transform Mercury Cannon': {
    effects: [
      {
        img: 'Transform Mercury Cannon.png',
        description:
          "Active: Jayce transforms into  Cannon Stance, receiving access to its abilities, becoming  ranged with  500 attack range, and empowering his next basic attack to reduce the target's  armor and  magic resistance by 10 / 15 / 20 / 25% (based on level) for 5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Jayce begins the game with Transform but cannot increase its rank. Instead, his basic abilities each have 6 ranks.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Transform Mercury Hammer': {
    effects: [
      {
        img: 'Transform Mercury Hammer.png',
        description:
          'Active: Jayce transforms into  Hammer Stance, receiving access to its abilities, becoming  melee with  125 attack range, gaining 5 / 15 / 25 / 35 (based on level) (+ 7.5% bonus AD)  bonus armor and  bonus magic resistance, and empowering his next basic attack to deal 25 / 65 / 105 / 145 (based on level) (+ 25% bonus AD) bonus magic damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Jayce begins the game with Transform but cannot increase its rank. Instead, his basic abilities each have 6 ranks.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
