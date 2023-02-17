import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Xin Zhao';
export const skillsData = ChampionSkillsData['Xin Zhao'];

export const XinZhao = {
  Determination: {
    effects: [
      {
        img: 'Determination.png',
        description:
          "Innate: Xin Zhao's basic attacks and  Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times. The third stack consumes them all to deal 15 / 30 / 45 / 60% (based on level) AD bonus physical damage and  heal Xin Zhao for 6 − 74 (based on level) (+ 10% AD) (+ 65% AP).",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Three Talon Strike': {
    effects: [
      {
        img: 'Three Talon Strike.png',
        description:
          "Active: Xin Zhao empowers his next three basic attacks on-attack to each have an  uncancellable windup, deal bonus physical damage and reduce his other abilities'  current cooldowns by 1 second. Each attack refreshes the duration.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '16 / 25 / 34 / 43 / 52 (+ 40% bonus AD)',
            damagetype: 'None',
            values: [16, 25, 34, 43, 52],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '16 / 25 / 34 / 43 / 52',
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
        description: 'The third attack  knocks up the target for 0.75 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Three Talon Strike's bonus damage is affected by  critical strike modifiers.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Three Talon Strike  resets Xin Zhao's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wind Becomes Lightning': {
    effects: [
      {
        img: 'Wind Becomes Lightning.png',
        description:
          'Active: Xin Zhao slashes in an arc and, after the cast time, thrusts his spear in a line in the target direction. Each strike deals physical damage to enemies hit, modified to 50% − 100% (based on level) against  minions.\nThe thrust deals increased damage, further by 0% − 33.3% (based on critical strike chance), and  slows enemies hit by 50% for 1.5 seconds. Enemy  champions and  monsters hit are also marked Challenged for 3 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Slash Physical Damage:',
            raw: '30 / 40 / 50 / 60 / 70 (+ 30% AD)',
            damagetype: 'None',
            values: [30, 40, 50, 60, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 30% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Thrust Physical Damage:',
            raw: '50 / 85 / 120 / 155 / 190 (+ 90% AD) (+ 65% AP)',
            damagetype: 'None',
            values: [50, 85, 120, 155, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 85 / 120 / 155 / 190',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 90% AD',
              },
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 120% AD) (+ 65% AP)',
            damagetype: 'None',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 120% AD',
              },
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
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
          "The durations of  Three Talon Strike,  Audacious Charge's bonus attack speed, and  Crescent Guard are delayed relative to Wind Becomes Lightning's cast time after 0.2 seconds of its activation.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Wind Becomes Lightning's damage  heals Xin Zhao for 33.3% of his  life steal.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Audacious Charge': {
    effects: [
      {
        img: 'Audacious Charge.png',
        description:
          "Active: Xin Zhao  dashes to the target enemy's location, dealing magic damage to enemies near them and  slowing them by 30% for 0.5 seconds. Audacious Charge's range is increased against Challenged targets.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 60% AP)',
            damagetype: 'None',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
        description: 'Xin Zhao then gains  bonus attack speed for 5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
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
          'Three Talon Strike and  Crescent Guard can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Crescent Guard': {
    effects: [
      {
        img: 'Xin Zhao Challenged Mark.png',
        description:
          "Passive - Challenge: The last enemy champion hit by Xin Zhao's basic attacks or  Audacious Charge is marked Challenged for 3 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Crescent Guard.png',
        description:
          'Active: Xin Zhao sweeps his spear around him, dealing physical damage to nearby enemies, capped at 600 against  monsters, and  knocking back all non-Challenged targets hit up-to 700 units over 0.75 seconds, as well as  stunning them for the same duration.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "75 / 125 / 175 / 225 / 275 (+ 100% bonus AD) (+ 110% AP) (+ 15% of target's current health)",
            healType: 'OutgoingHeals',
            values: [75, 125, 175, 225, 275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 125 / 175 / 225 / 275',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 110% AP',
              },
              {
                values: 15,
                valuesIsPercent: true,
                user: 'target',
                units: 'current_hp',
                unitsText: "of target's current health",
                pre: "+ 15% of target's current health",
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
          'For the next 4 seconds, Xin Zhao is  invulnerable against enemy  champions far away from him.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
