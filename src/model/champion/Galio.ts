import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Galio';
export const skillsData = ChampionSkillsData['Galio'];

export const Galio = {
  'Colossal Smash': {
    effects: [
      {
        img: 'Colossal Smash.png',
        description:
          "Innate: Periodically, Galio's next basic attack is empowered to have an  uncancellable windup and deal 15 − 200 (based on level) (+ 100% AD) (+ 50% AP) (+ 60% bonus magic resistance) modified magic damage to the target and all enemies near them.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Colossal Smash can  critically strike for (75% +  35%) AD bonus magic damage to all targets hit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Winds of War': {
    effects: [
      {
        img: 'Winds of War.png',
        description:
          'Active: Galio creates two windblasts 250 units to either side of him that arc out before converging to the target location, dealing magic damage to all enemies they pass through.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 75% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
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
          "When the blasts meet, the gusts form a tornado that persists for 2 seconds, slowly moving forward and dealing magic damage every 0.5 seconds to enemies within the area. The damage based on the target's health ratio is capped at 150 against  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage Per Tick:',
            raw: "2.5% (+ 1% per 100 AP) of target's maximum health",
            healType: 'OutgoingHeals',
            values: 2.5,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '2.5%',
            post: "of target's maximum health",
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Winds of War will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shield of Durand': {
    effects: [
      {
        img: 'Shield of Durand 2.png',
        description:
          'Passive: Galio gains Anti-Magic Bulwark, and restores it after 12 seconds without taking damage.Anti-Magic Bulwark: Gain a  shield that absorbs magic damage.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Shield Strength:',
            raw: '7.5 / 9 / 10.5 / 12 / 13.5% of maximum health',
            healType: 'BonusHealth',
            values: [7.5, 9, 10.5, 12, 13.5],
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'of maximum health',
            pre: '7.5 / 9 / 10.5 / 12 / 13.5% of maximum health',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Shield of Durand.png',
        description:
          "Active: Galio  charges for up to 2 seconds,  slowing himself by 15%, and gaining magic damage reduction and half of that amount as physical damage reduction; charging increases Shield of Durand's radius, damage and  taunt duration over the first 1.5 seconds of the channel.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Reduction:',
            raw: '20 / 25 / 30 / 35 / 40% (+ 5% per 100 AP) (+ 8% per 100 bonus magic resistance)',
            damagetype: 'Magic',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 5% per 100 AP',
              },
              {
                values: 8,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mr',
                unitsText: 'per 100 bonus magic resistance',
                pre: '+ 8% per 100 bonus magic resistance',
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
          'Shield of Durand can be recast within the duration and does so automatically afterwards or if it is  interrupted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Galio refreshes the damage reduction for 2 seconds and deals magic damage to nearby enemy champions, increased by 0% − 200% (based on channel time), as well as  taunts them for 0.5 − 1.5 (based on channel time) seconds during which their  movement speed is set to a static 60 for the same duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 30% AP)',
            damagetype: 'None',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
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
    ],
  },
  'Justice Punch': {
    effects: [
      {
        img: 'Justice Punch.png',
        description:
          'Active: During the cast time, Galio  steps backwards in the opposite direction. He then  dashes to the target location until he hits an enemy  champion or terrain.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Galio deals magic damage to enemies he passes through, reduced by 50% against non-champions, and  knocks them up for 0.75 seconds as well as  reveals them for the same duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '90 / 130 / 170 / 210 / 250 (+ 90% AP)',
            damagetype: 'None',
            values: [90, 130, 170, 210, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 130 / 170 / 210 / 250',
            children: [
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
        img: '',
        description:
          'Justice Punch will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Hero's Entrance": {
    effects: [
      {
        img: "Hero's Entrance.png",
        description:
          "Active: Galio prepares to make an entrance,  channeling for 2.75 seconds and designating the target allied  champion's location at the time of cast as his landing spot. Additionally, he resets  Shield of Durand's passive shield for himself and grants it to all allied champions within the area for 5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After channeling for 1.25 seconds, he gains  crowd control immunity for the remaining duration, becomes  untargetable, and leaps into the air for 0.85 seconds before  dashing to his destination over 0.25 seconds. Afterwards, he lands and becomes targetable again, dealing magic damage to all nearby enemies upon impact,  knocking them back 100 units over 0.75 seconds, and remaining in place for 0.4 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 250 / 350 (+ 70% AP)',
            damagetype: 'None',
            values: [150, 250, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 250 / 350',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
