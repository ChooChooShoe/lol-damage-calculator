import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Shaco';
export const skillsData = ChampionSkillsData['Shaco'];

export const Shaco = {
  Backstab: {
    effects: [
      {
        img: 'Backstab.png',
        description:
          "Innate: Shaco's basic attacks are empowered to deal 20 − 35 (based on level) (+ 25% bonus AD) bonus physical damage when hitting an enemy from behind. Backstab is affected by  critical strike modifiers.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Deceive and  Two-Shiv Poison have additional effects when they hit an enemy from behind.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Deceive: {
    effects: [
      {
        img: 'Deceive.png',
        description:
          'Active: Shaco becomes  invisible for a duration, and after a 0.125-second delay, he  blinks to the target location.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Invisibility Duration:',
            raw: '2.5 / 2.75 / 3 / 3.25 / 3.5',
            values: [2.5, 2.75, 3, 3.25, 3.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2.5 / 2.75 / 3 / 3.25 / 3.5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Deceive's  invisibility breaks when Shaco uses a basic attack or casts  Two-Shiv Poison, but not from casting  Jack in the Box or  Hallucinate.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After breaking the invisibility, Shaco empowers his next basic attack within 0.25 seconds to deal bonus physical damage, which is affected by  critical strike modifiers.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '25 / 35 / 45 / 55 / 65 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [25, 35, 45, 55, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
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
          'Backstab Bonus: The attack will  critically strike for (40% +  35%) bonus physical damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Deceive will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Jack in the Box': {
    effects: [
      {
        img: 'Jack in the Box.png',
        description:
          'Active: Shaco summons a box at the target location that becomes  stealthed after arming over 2 seconds, lasting for up to 40 (+ 10% AP) seconds. The box is  invulnerable and  untargetable to enemies while stealthed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The box will spring out upon enemy contact,  fearing nearby enemies and reducing their  movement speed for 2 seconds, modified against  champions, who are also  rooted for 0.5 seconds. Enemy champions have their movement speed set to a static 100, reduced to a static 60 for non-champions.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Champion Disable Duration:',
            raw: '0.5 / 0.75 / 1 / 1.25 / 1.5',
            values: [0.5, 0.75, 1, 1.25, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.5 / 0.75 / 1 / 1.25 / 1.5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Once sprung, the box will remain for 5 seconds, during which it will automatically fire at nearby  visible enemies every 0.5 seconds, dealing magic damage with each attack. If the box attacks only one target, it deals increased damage. Boxes deal bonus magic damage to  monsters and 50% reduced damage to  structures.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 12% AP)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Monster Damage:',
            raw: '10 / 20 / 30 / 40 / 50',
            values: [10, 20, 30, 40, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 20 / 30 / 40 / 50',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about boxes.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Two-Shiv Poison': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Shaco's basic attacks  slow enemies for 2 seconds while Two-Shiv Poison is not on cooldown.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Two-Shiv Poison.png',
        description:
          'Active: Shaco throws a dagger at the target enemy that deals magic damage,  increased by 50% if they are below 30% of their maximum health, and  slows them for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 80% bonus AD) (+ 60% AP)',
            damagetype: 'None',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
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
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Backstab Bonus: The dagger deals an additional 15 − 50 (based on level) (+ 10% AP) bonus magic damage, increased to 22.5 − 75 (based on level) (+ 15% AP) if the target is below 30% of their maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Hallucinate: {
    effects: [
      {
        img: 'Hallucinate.png',
        description:
          'Active: Shaco  vanishes for 0.5 seconds and  blinks in the target direction while creating a  clone of himself that is summoned in the opposite direction, remaining within control range of him as a controllable  clone for up to 18 seconds. Hallucinate can be recast at any time while the clone is alive, and can be used while affected by  cast-inhibiting crowd control.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Command Hallucinate.png',
        description:
          'Recast: Shaco commands the  clone to move to the target location.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The clone will explode upon dying or expiring to deal magic damage to nearby enemies and deploy three  mini-boxes that activate instantly,  fearing nearby enemies for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 187.5 / 225 / 262.5 / 300 (+ 70% AP)',
            damagetype: 'None',
            values: [150, 187.5, 225, 262.5, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 187.5 / 225 / 262.5 / 300',
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
        description:
          "The boxes possess  Jack in the Box's effects, except they have a doubled, but shared  health, and deal modified magic damage with each attack, increased when attacking a single unit.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Modified Magic Damage:',
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
      {
        img: '',
        description: "See Pets for more details about Shaco's clone.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
