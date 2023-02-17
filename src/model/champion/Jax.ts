import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Jax';
export const skillsData = ChampionSkillsData['Jax'];

export const Jax = {
  'Relentless Assault': {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Jax's basic attacks generate a stack of Relentless Assault on-attack for 2.5 seconds, refreshing on subsequent attacks and stacking up to 8 times. Stacks expire by one every 0.25 seconds when the duration ends.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Relentless Assault.png',
        description:
          'Relentless Assault: For each stack, Jax gains 3.5% − 11% (based on level)  bonus attack speed, up to a maximum of 28% − 88% (based on level).',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Leap Strike': {
    effects: [
      {
        img: 'Leap Strike.png',
        description: "Active: Jax  dashes to the target unit's location.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the target is an enemy and they are in range upon arrival, Jax deals them physical damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 105 / 145 / 185 / 225 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [65, 105, 145, 185, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 105 / 145 / 185 / 225',
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
        description: 'Jax can cast any of his abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Empower: {
    effects: [
      {
        img: 'Empower.png',
        description:
          'Active: Jax empowers his next basic attack or  Leap Strike against an enemy within 10 seconds to deal bonus magic damage. If Empower is used on a basic attack, it will gain  50 bonus range.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '50 / 85 / 120 / 155 / 190 (+ 60% AP)',
            damagetype: 'None',
            values: [50, 85, 120, 155, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 85 / 120 / 155 / 190',
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
        description: "Empower  resets Jax's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Counter Strike': {
    effects: [
      {
        img: 'Counter Strike.png',
        description:
          'Active: Jax enters Evasion for 2 seconds: a defensive stance that causes him to  dodge all incoming non- turret basic attacks and take 25% reduced damage from all area of effect abilities from  champions.  Counter Strike can be recast after 1 second, and does so automatically after the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Jax deals magic damage to nearby enemies, with the base damage increased by 20% for each attack dodged, up to a 100% increase, and  stuns them for 1 second.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Minimum Magic Damage:',
            raw: "55 / 85 / 115 / 145 / 175 (+ 100% AP) (+ 4% of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [55, 85, 115, 145, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 85 / 115 / 145 / 175',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 4% of target's maximum health",
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Grandmaster-At-Arms': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Jax's basic attacks generate a stack of Grandmaster-At-Arms  on-hit for 2.5 seconds, refreshing on subsequent hits and stacking up to 2 times. At 2 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage. While Grandmaster-At-Arms is active, the empowered attack triggers at 1 stack instead.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '80 / 100 / 120 / 140 / 160 (+ 60% AP)',
            damagetype: 'None',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
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
        img: 'Jax Grandmaster-At-Arms.png',
        description:
          'Active: Jax swings his lantern around, dealing magic damage to nearby enemies. If this hits a champion, he gains  bonus armor, increased for each champion hit beyond the first, and  bonus magic resistance equal to 60% of that amount as well as 10% increased size for 8 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 100% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
            effectType: 'Damage',
            name: 'Bonus Armor:',
            raw: '25 / 35 / 45 / 55 / 65 (+ 40% bonus AD)',
            damagetype: 'None',
            values: [25, 35, 45, 55, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Armor per Champion Hit:',
            raw: '15 / 17.5 / 20 / 22.5 / 25 (+ 10% bonus AD)',
            damagetype: 'None',
            values: [15, 17.5, 20, 22.5, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17.5 / 20 / 22.5 / 25',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 10% bonus AD',
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
