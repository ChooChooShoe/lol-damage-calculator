import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Tristana';
export const skillsData = ChampionSkillsData['Tristana'];

export const Tristana = {
  'Draw a Bead': {
    effects: [
      {
        img: 'Draw a Bead.png',
        description:
          "Innate: Tristana's basic attacks,  Explosive Charge and  Buster Shot gain  0 − 136 (based on level) bonus range, for a total of 525 − 661 (based on level).",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Rapid Fire': {
    effects: [
      {
        img: 'Rapid Fire.png',
        description:
          'Active: Tristana empowers her cannon, gaining  bonus attack speed for 7 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '65 / 80 / 95 / 110 / 125%',
            values: [65, 80, 95, 110, 125],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 80 / 95 / 110 / 125%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Rocket Jump': {
    effects: [
      {
        img: 'Rocket Jump.png',
        description:
          'Active: Tristana  jumps to the target location. Upon landing, she deals magic damage to nearby enemies and  slows them by 60% for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '95 / 145 / 195 / 245 / 295 (+ 50% AP)',
            damagetype: 'None',
            values: [95, 145, 195, 245, 295],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '95 / 145 / 195 / 245 / 295',
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
            effectType: 'Unique',
            name: 'Slow Duration:',
            raw: '1 / 1.5 / 2 / 2.5 / 3',
            values: [1, 1.5, 2, 2.5, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.5 / 2 / 2.5 / 3',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Scoring an enemy  champion  takedown or detonating  Explosive Charge at maximum stacks on a  champion will reset Rocket Jump's  cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Tristana can cast any of her abilities during the dash. Rocket Jump will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Explosive Charge': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Tristana's basic attacks are empowered to trigger an explosion when they kill the target, dealing magic damage to nearby enemies.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 25% AP)',
            damagetype: 'None',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
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
        img: 'Explosive Charge.png',
        description:
          'Active: Tristana tosses an explosive charge at the target enemy that attaches to them for 4 seconds. The charge then detonates, dealing physical damage to nearby enemies. Explosive Charge can target and damage  turrets, and explodes in a larger radius on a turret.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '70 / 80 / 90 / 100 / 110 (+ 50 / 75 / 100 / 125 / 150% bonus AD) (+ 50% AP)',
            damagetype: 'None',
            values: [70, 80, 90, 100, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 80 / 90 / 100 / 110',
            children: [
              {
                values: [50, 75, 100, 125, 150],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50 / 75 / 100 / 125 / 150% bonus AD',
              },
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
          "Tristana's basic attacks  on-hit and abilities against the target increase Explosive Charge's damage by 30%, stacking up to 4 times for a maximum 120% increase, upon which the charge also detonates instantly.The charge's total damage is additionally increased by 0% − 33.3% (based on critical strike chance).",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Damage Per Stack:',
            raw: '21 / 24 / 27 / 30 / 33 (+ 15 / 22.5 / 30 / 37.5 / 45% bonus AD) (+ 15% AP)',
            damagetype: 'None',
            values: [21, 24, 27, 30, 33],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '21 / 24 / 27 / 30 / 33',
            children: [
              {
                values: [15, 22.5, 30, 37.5, 45],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 15 / 22.5 / 30 / 37.5 / 45% bonus AD',
              },
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
          'If  Buster Shot is used to apply the last stack, the detonation will instead be delayed until the end of the  knock back or the 4 seconds expire.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Tristana will attempt to basic attack the target afterwards.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Buster Shot': {
    effects: [
      {
        img: 'Buster Shot.png',
        description:
          'Active: Tristana fires a massive cannonball at the target enemy that deals magic damage. They and surrounding enemies are also  knocked back and  stunned for up-to 0.75 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '300 / 400 / 500 (+ 100% AP)',
            damagetype: 'None',
            values: [300, 400, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 400 / 500',
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
            name: 'Knock Back Distance:',
            raw: '600 / 800 / 1000',
            values: [600, 800, 1000],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '600 / 800 / 1000',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
