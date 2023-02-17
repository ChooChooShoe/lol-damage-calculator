import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Nidalee';
export const skillsData = ChampionSkillsData['Nidalee'];

export const Nidalee = {
  Prowl: {
    effects: [
      {
        img: 'Prowl.png',
        description:
          'Innate - Prowl: While in  brush, Nidalee gains  10% bonus movement speed, increased to 30% when facing a nearby  visible enemy  champion, and persisting for 2 seconds after leaving brush.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate - Hunt: Hitting  monsters or enemy champions with  Javelin Toss, or  Bushwhack while they are nearby, applies a Hunted mark and  reveals them for 4 seconds. During this time, Nidalee gains  10% bonus movement speed, increased to 30% when facing a nearby Hunted target.  Additionally, Nidalee's first use of  Takedown and  Pounce against Hunted targets are empowered.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The bonus movement speed from Prowl and Hunt can stack, but cannot exceed 30%.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Javelin Toss': {
    effects: [
      {
        img: 'Javelin Toss.png',
        description:
          'Active: Nidalee hurls a javelin in the target direction that deals magic damage to the first enemy hit, increased by 0% − 200% (based on distance traveled).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 50% AP)',
            damagetype: 'None',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
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
    ],
  },
  Takedown: {
    effects: [
      {
        img: 'Takedown.png',
        description:
          "Active: Nidalee empowers her next basic attack within 10 seconds to have an  uncancellable windup, gain  75 bonus range and deal modified magic damage that is increased by an amount for every 1% of the target's missing health.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '5 / 30 / 55 / 80 (+ 75% AD) (+ 40% AP)',
            damagetype: 'None',
            values: [5, 30, 55, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 30 / 55 / 80',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 75% AD',
              },
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Increased Damage Modifier:',
            raw: '1 / 1.25 / 1.5 / 1.75%',
            values: [1, 1.25, 1.5, 1.75],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Hunt Bonus: Hitting a Hunted target  increases Takedown's damage by 40%.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Prowl-Enhanced Minimum Damage:',
            raw: '7 / 42 / 77 / 112 (+ 105% AD) (+ 56% AP)',
            damagetype: 'None',
            values: [7, 42, 77, 112],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 42 / 77 / 112',
            children: [
              {
                values: 105,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 105% AD',
              },
              {
                values: 56,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 56% AP',
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
          "Takedown  resets Nidalee's basic attack timer. Other damage converted to magic damage by Takedown are not increased by Takedown's respective effects. Nidalee loses Takedown's empowered attack immediately when she switches to  Human Form.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Bushwhack: {
    effects: [
      {
        img: 'Bushwhack.png',
        description:
          'Active: Nidalee lays a trap at the target location that becomes  stealthed after arming over 1.5 seconds, lasting for up to 120 seconds and granting  sight within its radius. The trap will spring upon contact with an enemy, dealing magic damage every second over 4 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '10 / 20 / 30 / 40 / 50 (+ 5% AP)',
            damagetype: 'None',
            values: [10, 20, 30, 40, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 20 / 30 / 40 / 50',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5% AP',
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
          'Traps have  6 maximum health and can only be damaged by champion basic attacks (2 hit points from  ranged and 3 hit points from  melee). Up to a maximum of 4 / 6 / 8 / 10 (based on level) traps may be active at once.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about traps.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Pounce: {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Killing an enemy while in Cougar Form or using Pounce's Hunt bonus reduces Pounce's  current cooldown to a minimum value.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Reduced Cooldown:',
            raw: '3 / 2.5 / 2 / 1.5',
            values: [3, 2.5, 2, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 2.5 / 2 / 1.5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Pounce.png',
        description:
          'Active: Nidalee  leaps a fixed distance in the target direction. Upon arrival, she deals magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 110 / 160 / 210 (+ 30% AP)',
            damagetype: 'None',
            values: [60, 110, 160, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210',
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
      {
        img: '',
        description:
          'Hunted Bonus: Nidalee can perform Pounce from an increased range on a Hunted enemy closest to the cursor. She can Pounce to a target location near a Hunted enemy if she is close to them.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Takedown and  Aspect of the Cougar can be cast during the dash. Pounce will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Primal Surge': {
    effects: [
      {
        img: 'Primal Surge.png',
        description:
          "Active: Nidalee revitalizes herself or the target allied champion, granting the target  bonus attack speed for 7 seconds and  healing them for an amount that is increased by 0% − 100% (based on target's missing health).",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 30 / 40 / 50 / 60%',
            values: [20, 30, 40, 50, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60%',
          },
          {
            effectType: 'Damage',
            name: 'Minimum Heal:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 27.5% AP)',
            damagetype: 'None',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 27.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 27.5% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Swipe: {
    effects: [
      {
        img: 'Swipe.png',
        description:
          'Active: Nidalee slashes in an arc in the target direction, dealing magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 140 / 200 / 260 (+ 45% AP)',
            damagetype: 'None',
            values: [80, 140, 200, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 140 / 200 / 260',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Aspect of the Cougar': {
    effects: [
      {
        img: 'false',
        description:
          'Active: Nidalee switches between her Human Form and Cougar Form.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Aspect of the Cougar.png',
        description:
          'Cougar Form: Nidalee transforms into a cougar, gaining  melee attacks with  125 range and access to her cougar abilities.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Aspect of the Cougar 2.png',
        description:
          "Human Form: Nidalee transforms into a human, gaining  ranged attacks with  525 range and access to her human abilities. While in this form, applying a  Hunted mark will reset Aspect of the Cougar's  cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Nidalee begins with one rank in Aspect of the Cougar and can increase it at levels 6, 11, and 16. Cougar Form's abilities scale based on Aspect of the Cougar's rank.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
