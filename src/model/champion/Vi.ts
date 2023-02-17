import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Vi';
export const skillsData = ChampionSkillsData['Vi'];

export const Vi = {
  'Blast Shield': {
    effects: [
      {
        img: 'Blast Shield.png',
        description:
          "Innate: Periodically, Vi's next ability hit grants her a  shield equal to 13% of her maximum health for 3 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Blast Shield's  cooldown is reduced by 3 seconds each time  Denting Blows is consumed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Vault Breaker': {
    effects: [
      {
        img: 'Vault Breaker.png',
        description:
          "Active: Vi  charges while being  slowed by 15% for up to 4 seconds to increase Vault Breaker's  range, speed, and damage over the first 1.25 seconds of the channel.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Vault Breaker can be recast within the duration. If the charge completes without reactivation, Vault Breaker is cancelled and put on  full cooldown. If the charge is  interrupted, it will be put on a 3-second cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Vi  dashes in the target direction to deal physical damage to enemies within her path, increased by 0% − 100% (based on channel time), and  pull all non-champions hit towards her.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 70% bonus AD)',
            damagetype: 'None',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 70% bonus AD',
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
          'She stops upon hitting an enemy  champion,  knocking them back over 0.75 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Relentless Force and  Cease and Desist can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Denting Blows': {
    effects: [
      {
        img: 'Denting Blows.png',
        description:
          "Passive: Vi's basic attacks  on-hit and  Vault Breaker apply a stack of Denting Blows to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack consumes them all to deal bonus physical damage, capped at 300 against non-champions, and inflict  20% armor reduction for 4 seconds.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "4 / 5.5 / 7 / 8.5 / 10% (+「 1% per 35 」「 2.86% per 100 」bonus AD) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [4, 5.5, 7, 8.5, 10],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '4 / 5.5 / 7 / 8.5 / 10%',
            post: "of target's maximum health",
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 35 」「 2.86undefined',
                pre: '+「 1% per 35 」「 2.86% per 100 」bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Denting Blows 2.png',
        description:
          'After consuming Denting Blows, Vi gains  bonus attack speed for 4 seconds, which refreshes on subsequent triggers.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '30 / 37.5 / 45 / 52.5 / 60%',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Relentless Force': {
    effects: [
      {
        img: 'Relentless Force 2.png',
        description:
          "Active: Vi empowers her next basic attack within 6 seconds to have an  uncancellable windup, gain  50 bonus range and trigger a blast in the target's direction that deals modified physical damage to enemies hit in a cone. Relentless Force can  critically strike for (75% +  35%) AD bonus physical damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '10 / 30 / 50 / 70 / 90 (+ 110% AD) (+ 90% AP)',
            damagetype: 'None',
            values: [10, 30, 50, 70, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 30 / 50 / 70 / 90',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 110% AD',
              },
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Relentless Force.png',
        description:
          'Vi periodically stocks a Relentless Force charge, up to a maximum of 2.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Relentless Force  resets Vi's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Cease and Desist': {
    effects: [
      {
        img: 'Cease and Desist.png',
        description:
          'Active: Vi singles out the target enemy  champion and  dashes with  displacement immunity towards them, during which they are  revealed. Upon approaching within 300-units, she  dashes through and grabs them,  knocking them up for 1.3 seconds and dealing physical damage after 0.75 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '150 / 237.5 / 325 / 412.5 / 500 (+ 110% bonus AD)',
            damagetype: 'None',
            values: [150, 237.5, 325, 412.5, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 237.5 / 325 / 412.5 / 500',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110% bonus AD',
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
          'Enemies she dashes through are dealt the same damage,  knocked aside by 350 units over 0.25 seconds, and  stunned for 0.75 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
