import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Talon';
export const skillsData = ChampionSkillsData['Talon'];

export const Talon = {
  "Blade's End": {
    effects: [
      {
        img: "Blade's End.png",
        description:
          "Innate: Talon's abilities apply a stack of Wound to enemy  champions and large  monsters hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Talon's next basic attack against an enemy with 3 Wound stacks is empowered to consume them all to cause the target to bleed, dealing「 75 − 255 (based on level) (+ 200% bonus AD) total physical damage over 2 seconds, 」「 4.69 − 15.94 (based on level) (+ 12.5% bonus AD) physical damage every 0.125 seconds over 2 seconds, 」increased to 120% damage against  monsters. The target cannot gain Wound stacks during this time.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Noxian Diplomacy': {
    effects: [
      {
        img: 'Noxian Diplomacy.png',
        description:
          'Active: Talon  dashes towards the target enemy, dealing physical damage upon arrival. If Noxian Diplomacy is cast within close range, Talon instead stabs the target to  critically strike for (50% +  35%) bonus physical damage, as well as gain  75 bonus attack range on his next basic attack within 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 85 / 105 / 125 / 145 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [65, 85, 105, 125, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 85 / 105 / 125 / 145',
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
          "If Noxian Diplomacy kills the target, Talon  heals for 9 − 55 (based on level) and the ability's  cooldown is reduced by 50%.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Noxian Diplomacy's stab  resets Talon's basic attack timer.  Shadow Assault can be cast during the dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Rake: {
    effects: [
      {
        img: 'Rake.png',
        description:
          'Active: Talon throws a fan of daggers in a cone in the target direction that deals physical damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '40 / 50 / 60 / 70 / 80 (+ 40% bonus AD)',
            damagetype: 'None',
            values: [40, 50, 60, 70, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'At maximum range, the daggers linger for 0.75 seconds before homing back to Talon, dealing physical damage to enemies hit and  slowing them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
            ],
          },
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
        description: 'Rake deals 105% damage against  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Enemies can be hit only once per pass.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Assassin's Path": {
    effects: [
      {
        img: "Assassin's Path.png",
        description:
          'Active: Talon  dashes up to 800 units over the target area of terrain, during which he gains  unobstructed vision.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Talon cannot cast Assassin's Path on the same area of terrain for a set duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Shadow Assault can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shadow Assault': {
    effects: [
      {
        img: 'Shadow Assault.png',
        description:
          'Active: Talon disperses a ring of blades around him that deals physical damage to nearby enemies, and gains  invisibility and  bonus movement speed for up to 2.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '90 / 112.5 / 135 / 157.5 / 180 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [90, 112.5, 135, 157.5, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 112.5 / 135 / 157.5 / 180',
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
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '40 / 47.5 / 55 / 62.5 / 70%',
            values: [40, 47.5, 55, 62.5, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 47.5 / 55 / 62.5 / 70%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Shadow Assault can be recast after 1 second within the duration, and does so automatically after the duration or if Talon emerges from invisibility.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Talon ends Shadow Assault, breaking the invisibility and causing the blades to converge to him, dealing the same damage to enemies hit. Breaking invisibility with a basic attack or  Noxian Diplomacy causes the blades to converge to the target instead.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '180 / 225 / 270 / 315 / 360 (+ 200% bonus AD)',
            damagetype: 'None',
            values: [180, 225, 270, 315, 360],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '180 / 225 / 270 / 315 / 360',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 200% bonus AD',
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
