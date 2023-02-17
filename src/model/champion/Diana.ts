import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Diana';
export const skillsData = ChampionSkillsData['Diana'];

export const Diana = {
  'Moonsilver Blade': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Diana gains  15% − 40% (based on level) bonus attack speed. After casting an ability, this bonus is tripled to 45% − 120% (based on level) for 3 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Moonsilver Blade.png',
        description:
          "Innate: Diana's basic attacks generate a stack of Moonsilver Blade for 3.5 seconds, refreshing on subsequent attacks and stacking up to 2 times. At 2 stacks, Diana empowers her next basic attack to consume the stacks  on-hit to additionally cleave nearby enemies, dealing them 20 − 220 (based on level) (+ 50% AP) magic damage. Moonsilver Blade deals 300% damage against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Crescent Strike': {
    effects: [
      {
        img: 'Crescent Strike.png',
        description:
          'Active: Diana unleashes a bolt of lunar energy that travels in a counter-clockwise arc before exploding at the target location, granting  sight of the area for 0.5 seconds and dealing magic damage to enemies hit and afflicting them with Moonlight for 3 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 70% AP)',
            damagetype: 'None',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
      {
        img: '',
        description: 'Lunar Rush interacts with Moonlight.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Crescent Strike will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Pale Cascade': {
    effects: [
      {
        img: 'Pale Cascade.png',
        description:
          'Active: Diana grants herself a  shield for up to 5 seconds and creates three spheres that orbit her for the same duration, detonating upon contact with an enemy to deal magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 25% AP) (+ 9% bonus health)',
            healType: 'BonusHealth',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
              {
                values: 9,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 9% bonus health',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage per Orb:',
            raw: '18 / 30 / 42 / 54 / 66 (+ 15% AP)',
            damagetype: 'None',
            values: [18, 30, 42, 54, 66],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '18 / 30 / 42 / 54 / 66',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
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
          "If all three spheres detonate, Pale Cascade's shield is reapplied, stacking with its original shield and refreshing the duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Lunar Rush': {
    effects: [
      {
        img: 'Lunar Rush.png',
        description:
          "Active: Diana  dashes to the target enemy's location, and upon completion, she deals them magic damage and consumes  Moonlight from all enemies. If the target is within 400 range, Diana will dash through their location.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 50% AP)',
            damagetype: 'None',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
          "If Moonlight is consumed from the target, Lunar Rush's  current cooldown is reduced to 0.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Diana can cast any of her abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Moonfall: {
    effects: [
      {
        img: 'Moonfall.png',
        description:
          'Active: Diana  pulls in all nearby enemies, during which they are  revealed, then  slows them for 2 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If an enemy  champion is pulled in, she calls down a beam of moonlight to strike upon the area around her after 1 second, dealing magic damage to all nearby enemies, increased for each champion pulled beyond the first.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 60% AP)',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
            effectType: 'Damage',
            name: 'Bonus Damage Per Champion:',
            raw: '35 / 47.5 / 60 / 72.5 / 85 (+ 15% AP)',
            damagetype: 'None',
            values: [35, 47.5, 60, 72.5, 85],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 47.5 / 60 / 72.5 / 85',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
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
