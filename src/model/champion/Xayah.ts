import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Xayah';
export const skillsData = ChampionSkillsData['Xayah'];

export const Xayah = {
  'Clean Cuts': {
    effects: [
      {
        img: 'Clean Cuts.png',
        description:
          'Innate: Feathers shot by Xayah will linger in the ground at maximum range for 6 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate: Xayah's ability casts generate 3 stacks of Clean Cuts, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times. Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the attack's damage to the primary target and 30 / 40 / 50% (based on level) AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'ProfileIcon1634 Blazing Feathers.png',
        description:
          "Innate - Lover's Leap: If either Xayah or  Rakan is channeling  Recall, the other may move nearby and channel their own to join alongside them. Both reach base at the time of which the initiator's  Recall completes.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Double Daggers': {
    effects: [
      {
        img: 'Double Daggers.png',
        description:
          'Active: Xayah throws a volley of two Feathers in the target direction that each deal physical damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Hit:',
            raw: '45 / 60 / 75 / 90 / 105 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [45, 60, 75, 90, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 60 / 75 / 90 / 105',
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
        description: 'Targets hit after the first take 50% reduced damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage per Hit:',
            raw: '22.5 / 30 / 37.5 / 45 / 52.5 (+ 25% bonus AD)',
            damagetype: 'None',
            values: [22.5, 30, 37.5, 45, 52.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '22.5 / 30 / 37.5 / 45 / 52.5',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 25% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Deadly Plumage': {
    effects: [
      {
        img: 'Deadly Plumage.png',
        description:
          'Active: Xayah enters a frenzy for 4 seconds, gaining  bonus attack speed and empowering her basic attacks to strike a second time, dealing 20% damage.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '35 / 40 / 45 / 50 / 55%',
            values: [35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Whenever Xayah hits an enemy  champion with the strike, she gains  30% bonus movement speed for 1.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If  Rakan is nearby upon cast, he also becomes empowered, and gains the  bonus movement speed at the same time as Xayah.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Bladecaller: {
    effects: [
      {
        img: 'Bladecaller.png',
        description:
          'Active: Xayah recalls all planted Feathers to shoot back to her, each dealing physical damage to enemies hit, increased by 0% − 75% (based on critical strike chance). Bladecaller deals 50% damage to  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Feather:',
            raw: '55 / 65 / 75 / 85 / 95 (+ 60% bonus AD)',
            damagetype: 'None',
            values: [55, 65, 75, 85, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 65 / 75 / 85 / 95',
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
      {
        img: '',
        description:
          'An enemy takes 100% − 10% (based on previous feathers hit) damage from a Feather.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'A target hit by at least three Feathers is  rooted for 1.25 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies can be hit by an individual Feather only once per pass.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Featherstorm: {
    effects: [
      {
        img: 'Featherstorm.png',
        description:
          'Active: Xayah leaps into the air, becoming  untargetable and  ghosted for 1.5 seconds. After 1 second, she shoots 5 Feathers in a cone in the target direction that deal physical damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
      {
        img: '',
        description:
          'Xayah is unable to basic attack or cast abilities during Featherstorm, but can still move.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
