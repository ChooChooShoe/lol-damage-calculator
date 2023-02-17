import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Rammus';
export const skillsData = ChampionSkillsData['Rammus'];

export const Rammus = {
  'Spiked Shell': {
    effects: [
      {
        img: 'Spiked Shell.png',
        description:
          "Innate: Rammus'  basic attacks deal 10 (+ 10% armor) bonus magic damage  on-hit, increased to 15 (+ 15% armor) during  Defensive Ball Curl.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Powerball: {
    effects: [
      {
        img: 'Powerball.png',
        description:
          'Active: Rammus  channels for up to 6 seconds to roll into a ball, gaining  25% − 39.17% (based on level) bonus total movement speed per second over the duration, up to a maximum of 150% − 235% (based on level). Powerball can be recast after 1 second within the duration, and does so automatically afterwards or when  interrupted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Rammus stops rolling upon colliding with an enemy, dealing magic damage to all nearby enemies and  knocking them back 125 units, though not through terrain. Enemies hit are then  stunned and  revealed for 0.4 seconds, as well as  slowed for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 130 / 160 / 190 / 220 (+ 100% AP)',
            damagetype: 'None',
            values: [100, 130, 160, 190, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 130 / 160 / 190 / 220',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Recast: Rammus ends Powerball.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Defensive Ball Curl': {
    effects: [
      {
        img: 'Defensive Ball Curl.png',
        description:
          "Active: Rammus enters a defensive stance for 6 seconds, gaining  bonus armor and  bonus magic resistance. While active, enemies that use a basic attack  on-hit against Rammus are dealt magic damage equal to  Spiked Shell's bonus damage.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: '35 (+ 40 / 55 / 70 / 85 / 100% total armor)',
            values: 35,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35',
            children: [
              {
                values: [40, 55, 70, 85, 100],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_armor',
                unitsText: 'total armor',
                pre: '+ 40 / 55 / 70 / 85 / 100% total armor',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Resistance:',
            raw: '10 (+ 30 / 35 / 40 / 45 / 50% total magic resistance)',
            damagetype: 'Magic',
            values: 10,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10',
            children: [
              {
                values: [30, 35, 40, 45, 50],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_mr',
                unitsText: 'total magic resistance',
                pre: '+ 30 / 35 / 40 / 45 / 50% total magic resistance',
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
          "Rammus'  basic attacks extend the remaining duration of Defensive Ball Curl by 0.4 seconds, up to a maximum of 4 additional seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Defensive Ball Curl can be recast after 1 second within the duration, and does so automatically upon casting  Powerball.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Recast: Rammus ends Defensive Ball Curl.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Frenzying Taunt': {
    effects: [
      {
        img: 'Frenzying Taunt.png',
        description:
          'Active: Rammus  taunts the target enemy  champion or  monster for a duration and gains  bonus attack speed for the same duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Taunt Duration:',
            raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            values: [1.2, 1.4, 1.6, 1.8, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed Duration:',
            raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            values: [1.2, 1.4, 1.6, 1.8, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
          },
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The duration of the bonus attack speed continuously refreshes during  Powerball,  Defensive Ball Curl and  Soaring Slam.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Soaring Slam': {
    effects: [
      {
        img: 'Soaring Slam.png',
        description:
          'Active: Rammus  leaps to the target location with  immunity to crowd control. Upon arrival, he creates an impact that deals magic damage to nearby enemies and  slows them for 1.5 seconds. The impact deals increased damage at the epicenter if Soaring Slam was cast further than 800 units, capped at 1700 units with 50% increased damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 137.5 / 175 / 212.5 / 250 (+ 60% AP)',
            damagetype: 'None',
            values: [100, 137.5, 175, 212.5, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 137.5 / 175 / 212.5 / 250',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 16.25 / 17.5 / 18.75 / 20%',
            values: [15, 16.25, 17.5, 18.75, 20],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 16.25 / 17.5 / 18.75 / 20%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If Soaring Slam was cast during  Powerball, enemies within the epicenter are also  knocked up for 0.75 seconds and are dealt  Powerball's damage.  Powerball will not collide with enemies during the dash, and its channel will be maintained for the dash and end afterwards.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Center Minimum Damage:',
            raw: '100 / 137.5 / 175 / 212.5 / 250 (+ 60% AP) (+  100 / 130 / 160 / 190 / 220 (+ 100% AP))',
            damagetype: 'None',
            values: [100, 137.5, 175, 212.5, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 137.5 / 175 / 212.5 / 250',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
              {
                values: [100, 130, 160, 190, 220],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+  100 / 130 / 160 / 190 / 220',
                children: [
                  {
                    values: 100,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'AP',
                    pre: '+ 100% AP',
                  },
                ],
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
          'The impact causes 3 aftershocks to burst from the area over 3.5 seconds, each one dealing magic damage to enemies within and applying the initial  slow, which stacks up to 4 times.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Hit:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 10% AP)',
            damagetype: 'None',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Maximum Slow:',
            raw: '60 / 65 / 70 / 75 / 80%',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 65 / 70 / 75 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Soaring Slam's damage affects structures and is doubled against  turrets.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Soaring Slam will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
