import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Janna';
export const skillsData = ChampionSkillsData['Janna'];

export const Janna = {
  Tailwind: {
    effects: [
      {
        img: 'Tailwind.png',
        description:
          'Innate: Janna gains  6% bonus movement speed while facing nearby allied  champions, and grants them the same amount while they are facing her.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Howling Gale': {
    effects: [
      {
        img: 'Howling Gale.png',
        description:
          "Active: Janna summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and  knock up duration every second over the duration. Howling Gale's direction is determined by this cast.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 35% AP)',
            damagetype: 'None',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Damage Per Second:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 10% AP)',
            damagetype: 'None',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Howling Gale can be recast at any time within the duration, and does so automatically after the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Janna launches the whirlwind in the direction she targeted over 1.25 seconds, dealing magic damage to enemies hit and  knocking them up for 0.5 − 1.25 (based on seconds charged) seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Zephyr: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: While Zephyr is not on cooldown, Janna is  ghosted and gains  bonus movement speed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '6 / 7 / 8 / 9 / 10% (+ 2% per 100 AP)',
            damagetype: 'None',
            values: [6, 7, 8, 9, 10],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10%',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Zephyr.png',
        description:
          'Active: Janna sends an air elemental at the target enemy that deals magic damage and  slows them for 3 seconds, capped at 99%.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 50% AP)',
            damagetype: 'None',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
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
          {
            effectType: 'Damage',
            name: 'Slow:',
            raw: '20 / 24 / 28 / 32 / 36% (+ 6% per 100 AP)',
            damagetype: 'None',
            values: [20, 24, 28, 32, 36],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 24 / 28 / 32 / 36%',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 6% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Eye of the Storm': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Whenever Janna's abilities  slow or  knock up at least one enemy  champion, she gains 15%  heal and shield power for 4 seconds. This may occur only once per cast.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Eye of the Storm.png',
        description:
          'Active: Janna grants the target allied champion,  turret, or herself a  shield for 5 seconds, decaying after 1.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '75 / 100 / 125 / 150 / 175 (+ 55% AP)',
            damagetype: 'None',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
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
          'While the shield holds, the target gains  bonus attack damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 10% AP)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
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
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Monsoon: {
    effects: [
      {
        img: 'Monsoon.png',
        description:
          'Active: Janna unleashes a blast that  knocks back all nearby enemies to up to 875 units over 0.5 seconds based on their proximity, though not through terrain.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Janna also  channels for up to 3 seconds,  healing nearby allies every 0.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal Per Tick:',
            raw: '25 / 31.25 / 37.5 / 43.75 / 50 (+ 12.5% AP)',
            damagetype: 'None',
            values: [25, 31.25, 37.5, 43.75, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 31.25 / 37.5 / 43.75 / 50',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12.5% AP',
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
