import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Garen';
export const skillsData = ChampionSkillsData['Garen'];

export const Garen = {
  Perseverance: {
    effects: [
      {
        img: 'Perseverance.png',
        description:
          'Innate: Garen  regenerates「 1.5% − 10.1% (based on level) of his  maximum health every 5 seconds. 」「 0.15% − 1.01% (based on level) of his  maximum health every 0.5 seconds. 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Perseverance is lost for 8 seconds if Garen takes damage from epic  monsters,  turrets, or  champions, or if he is hit by an enemy ability or affected by an enemy summoner spell, refreshing on subsequent damage and hits taken from them.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Decisive Strike': {
    effects: [
      {
        img: 'Decisive Strike.png',
        description:
          'Active: Garen  cleanses himself of all  slows and gains  35% bonus movement speed for a few seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Movement Speed Duration:',
            raw: '1 / 1.65 / 2.3 / 2.95 / 3.6',
            values: [1, 1.65, 2.3, 2.95, 3.6],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.65 / 2.3 / 2.95 / 3.6',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally, Garen empowers his next basic attack within 4.5 seconds to have an  uncancellable windup,  lunge at the target, deal bonus physical damage, and  silence the target for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 60 / 90 / 120 / 150 (+ 50% AD)',
            damagetype: 'None',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Decisive Strike  resets Garen's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Courage: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Whenever Garen kills an enemy, he generates a stack of Courage, stacking up to 150 times.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Courage: For each stack, Garen gains  0.2 bonus armor and  0.2 bonus magic resistance, up to a maximum of 30 bonus resistances. After reaching maximum stacks, Garen gains 10% bonus armor and 10% bonus magic resistance.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Courage.png',
        description:
          'Active: Garen reduces incoming damage by 30% for a few seconds. For the first 0.75 seconds, Garen additionally grants himself a  shield and 60%  tenacity.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '2 / 2.75 / 3.5 / 4.25 / 5',
            values: [2, 2.75, 3.5, 4.25, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.75 / 3.5 / 4.25 / 5',
          },
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '65 / 85 / 105 / 125 / 145 (+ 18% bonus health)',
            healType: 'BonusHealth',
            values: [65, 85, 105, 125, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 85 / 105 / 125 / 145',
            children: [
              {
                values: 18,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 18% bonus health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Judgment: {
    effects: [
      {
        img: 'Judgment.png',
        description:
          'Active: Garen rapidly spins his sword around himself 7 (+ 1 per 25% bonus attack speed) times over 3 seconds, becoming  ghosted and unable to basic attack and dealing physical damage to nearby enemies periodically. Judgment can be recast after 1 second for its duration, and does so automatically after it ends.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Spin:',
            raw: '4 / 8 / 12 / 16 / 20 (+ 0 − 8.2 (based on level)) (+ 32 / 34 / 36 / 38 / 40% AD)',
            damagetype: 'None',
            values: [4, 8, 12, 16, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 8 / 12 / 16 / 20',
            children: [
              {
                values: [
                  0, 0.48, 0.96, 1.45, 1.93, 2.41, 2.89, 3.38, 3.86, 4.34, 4.82,
                  5.31, 5.79, 6.27, 6.75, 7.24, 7.72, 8.2,
                ],
                valuesIsBasedOnLevel: true,
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 0 − 8.2',
              },
              {
                values: [32, 34, 36, 38, 40],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 32 / 34 / 36 / 38 / 40% AD',
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
          'Enemy champions hit 6 times by Judgment are inflicted with  25% armor reduction for 6 seconds, with the duration refreshing upon the 7th hit and every 6th hit thereafter.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Judgment 3.png',
        description:
          'Judgment deals 25% increased damage against the nearest enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage Per Spin:',
            raw: '5 / 10 / 15 / 20 / 25 (+ 0 − 10.25 (based on level)) (+ 40 / 42.5 / 45 / 47.5 / 50% AD)',
            damagetype: 'None',
            values: [5, 10, 15, 20, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25',
            children: [
              {
                values: [
                  0, 0.6, 1.21, 1.81, 2.41, 3.01, 3.62, 4.22, 4.82, 5.43, 6.03,
                  6.63, 7.24, 7.84, 8.44, 9.04, 9.65, 10.25,
                ],
                valuesIsBasedOnLevel: true,
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 0 − 10.25',
              },
              {
                values: [40, 42.5, 45, 47.5, 50],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40 / 42.5 / 45 / 47.5 / 50% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Judgment 2.png',
        description:
          'Recast: Garen ends Judgment prematurely, reducing its  cooldown by its remaining duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Judgment can  critically strike for  (75% +  35%) bonus physical damage. Additionally, Judgment deals 150% damage against  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Demacian Justice': {
    effects: [
      {
        img: 'Demacian Justice.png',
        description:
          'Active: Garen calls upon the might of Demacia onto the target enemy  champion, dealing them  true damage as well as  revealing them for 1 second at the start of the cast time.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'True Damage:',
            raw: "150 / 225 / 300 / 375 / 450 (+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health)",
            healType: 'OutgoingHeals',
            values: [150, 225, 300, 375, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 225 / 300 / 375 / 450',
            children: [
              {
                values: [25, 27.5, 30, 32.5, 35],
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: "+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health",
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
