import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Shyvana';
export const skillsData = ChampionSkillsData['Shyvana'];

export const Shyvana = {
  'Fury of the Dragonborn': {
    effects: [
      {
        img: 'Fury of the Dragonborn.png',
        description:
          'Innate: Shyvana gains  5 bonus armor and  5 bonus magic resistance, which are each increased by 5 for every  elemental drake and  Elder Dragon her team slays.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally, Shyvana deals 20% increased damage to  Dragons.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Twin Bite': {
    effects: [
      {
        img: 'Twin Bite.png',
        description:
          'Active: Shyvana empowers her next basic attack within 6 seconds to gain  25 bonus range, deal 100% AD (+ 35% AP) physical damage, and cause her to strike again after 0.25 seconds to deal bonus physical damage.The second strike applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '20 / 35 / 50 / 65 / 80% AD (+ 25% AP)',
            damagetype: 'None',
            values: [20, 35, 50, 65, 80],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '20 / 35 / 50 / 65 / 80% AD',
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
      {
        img: '',
        description:
          "Basic attacks reduce Twin Bite's  current cooldown by 0.5 seconds  on-hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Dragon Form Bonus: Shyvana attacks enemies in a cone in front of her and applies the second strike to enemies surrounding the primary target. Both the attack and the strike occur at the same time and each of them apply Twin Strike's respective effects to all targets hit, with the exception of the second strike not applying on-attack effects and being unable to  critically strike. The attack is affected by  critical strike modifiers, applies  on-hit effects to enemies hit, and triggers on-attack effects against only the primary target. Additionally, Twin Bite's empowered attack has an  uncancellable windup.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Twin Bite  resets Shyvana's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Burnout: {
    effects: [
      {
        img: 'Burnout.png',
        description:
          'Active: Shyvana surrounds herself in flames for 3 seconds, gaining  decaying bonus movement speed and dealing magic damage every 0.5 seconds to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '30 / 35 / 40 / 45 / 50% (+ 8% per 100 AP)',
            damagetype: 'None',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 8% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '10 / 16.25 / 22.5 / 28.75 / 35 (+ 15% bonus AD)',
            damagetype: 'None',
            values: [10, 16.25, 22.5, 28.75, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 16.25 / 22.5 / 28.75 / 35',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 15% bonus AD',
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
          "During this time, Shyvana's basic attacks deal additional magic damage  on-hit equal to 50% of Burnout's per-tick damage to surrounding enemies and extend the duration of Burnout by 1 second, which can occur up to 4 times for a total of 4 additional seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '5 / 8.125 / 11.25 / 14.375 / 17.5 (+ 7.5% bonus AD)',
            damagetype: 'None',
            values: [5, 8.125, 11.25, 14.375, 17.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 8.125 / 11.25 / 14.375 / 17.5',
            children: [
              {
                values: 7.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 7.5% bonus AD',
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
          "Dragon Form Bonus: Burnout's radius increases, scaling with  Dragon's Descent's rank.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Flame Breath': {
    effects: [
      {
        img: 'Flame Breath.png',
        description:
          'Active: Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy  champion, dealing magic damage to all enemies hit and marking them for 5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 40% AD) (+ 90% AP)',
            damagetype: 'None',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
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
          "Shyvana's basic attacks against marked enemies are empowered to deal bonus magic damage  on-hit equal to  3% of the target's maximum health, capped at 150 against monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Dragon Form Bonus: The fireball deals increased magic damage and explodes upon hitting an enemy  champion or reaching the target location, creating a scorched field for 4 seconds. Enemies within the field are marked once and dealt 30 − 60 (based on level) (+ 5% AD) (+ 10% AP) magic damage every 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '75 − 135 (based on level) (+ 60 / 100 / 140 / 180 / 220) (+ 70% AD) (+ 120% AP)',
            damagetype: 'None',
            values: [
              75, 78.53, 82.06, 85.59, 89.12, 92.65, 96.18, 99.71, 103.24,
              106.76, 110.29, 113.82, 117.35, 120.88, 124.41, 127.94, 131.47,
              135,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 − 135',
            children: [
              {
                values: [60, 100, 140, 180, 220],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 60 / 100 / 140 / 180 / 220',
              },
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 70% AD',
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
        description:
          'Flame Breath while in  Dragon Form will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Dragon's Descent": {
    effects: [
      {
        img: 'false',
        description:
          "Passive - Fury: Dragon's Descent requires  100 Fury to be cast. Shyvana generates Fury per second while alive and in Human form and 2 Fury per basic attack  on-hit in either form. Shyvana gains 100 Fury upon learning Dragon's Descent.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Fury Generation per Second:',
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
      {
        img: "Dragon's Descent.png",
        description:
          'Active: Shyvana transforms into Dragon Form and  dashes with  displacement immunity to the target location, dealing magic damage to enemies she passes through and  carrying them alongside her.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 130% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 130% AP',
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
          'Dragon Form: Shyvana gains  bonus health,  bonus attack range, and increased size. Her abilities are also empowered to apply an additional effect. She maintains Dragon Form at a recurring cost of Fury, returning to Human Form once all Fury has been depleted.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Health:',
            raw: '150 / 200 / 250 / 300 / 350',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Range:',
            raw: '50 / 57.5 / 65 / 72.5 / 80',
            values: [50, 57.5, 65, 72.5, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 57.5 / 65 / 72.5 / 80',
          },
          {
            effectType: 'Unique',
            name: 'Size Increase:',
            raw: '0 / 8.5 / 16%',
            values: [0, 8.5, 16],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0 / 8.5 / 16%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Dragon's Descent will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
