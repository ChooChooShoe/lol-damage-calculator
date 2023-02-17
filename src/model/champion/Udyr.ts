import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Udyr';
export const skillsData = ChampionSkillsData['Udyr'];

export const Udyr = {
  'Bridge Between': {
    effects: [
      {
        img: 'Udyr Bridge Between.png',
        description:
          'Innate - Awakened Spirit: Udyr has no ultimate ability and instead has 4 basic abilities that each incur a  1.5-second global cooldown when cast. Each ability grants a Stance that empowers his next two basic attacks, and switching Stances will replace the empowered attacks from the previous Stance.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Periodically, after Udyr enters a Stance, he can cast it again at no cost after 0.25 seconds to Awaken it, refreshing the cooldown and empowering the Stance with an additional effect.This effect is placed on cooldown at the start of the game.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Udyr Bridge Between 2.png',
        description:
          "Innate - Monk Training: After casting an ability, Udyr empowers his next two basic attacks within 4 seconds to gain  30% bonus attack speed and refund 5% of Awakened Spirit's total cooldown, though not if the remaining cooldown is less than 1 second.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wilding Claw': {
    effects: [
      {
        img: 'Udyr Wilding Claw.png',
        description:
          'Active - Stance: Udyr enters Claw Stance, empowering his next two basic attacks to gain  50 bonus range and deal bonus physical damage.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "3 / 4 / 5 / 6 / 7 / 8% (+ 4% per 100 bonus AD) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [3, 4, 5, 6, 7, 8],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '3 / 4 / 5 / 6 / 7 / 8%',
            post: "of target's maximum health",
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 4% per 100 bonus AD',
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
          'Additionally, Udyr gains bonus attack speed and deals bonus physical damage  on-hit for 4 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 32 / 44 / 56 / 68 / 80%',
            values: [20, 32, 44, 56, 68, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 32 / 44 / 56 / 68 / 80%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage On-Hit:',
            raw: '5 / 11 / 17 / 23 / 29 / 35 (+ 30% bonus AD)',
            damagetype: 'None',
            values: [5, 11, 17, 23, 29, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 11 / 17 / 23 / 29 / 35',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
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
          "Recast - Awaken: Udyr gains an additional 20% − 70% (based on level) bonus attack speed. The empowered attacks deal an additional 2% − 4% (based on level) (+ 2% per 100 bonus AD) of target's maximum health  bonus physical damage. Udyr's next two basic attacks in any Stance are empowered to strike with lightning 6 times, dealing  bonus magic damage equal to 1.5% − 3% (based on level) (+ 0.8% per 100 AP) of the target's maximum health per hit, chaining to up to 3 nearby  visible enemies and being able to hit the same target multiple times. This deals a minumum of 40 − 160 (based on level) against  minions and is capped at 20 (+ 100% bonus AD) (+ 50% AP) against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Iron Mantle': {
    effects: [
      {
        img: 'Udyr Iron Mantle.png',
        description:
          'Active - Stance: Udyr enters Mantle Stance, empowering his next two basic attacks to gain  life steal and  heal him for 1.2% of his maximum health (+ 8% AP) on-hit.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Life Steal:',
            raw: '15 / 16 / 17 / 18 / 19 / 20%',
            values: [15, 16, 17, 18, 19, 20],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 16 / 17 / 18 / 19 / 20%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally, Udyr grants himself a  shield for 4 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '45 / 60 / 75 / 90 / 105 / 120 (+ 40% AP) (+ 2 / 2.3 / 2.6 / 2.9 / 3.2 / 3.5% maximum health)',
            healType: 'BonusHealth',
            values: [45, 60, 75, 90, 105, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 60 / 75 / 90 / 105 / 120',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: [2, 2.3, 2.6, 2.9, 3.2, 3.5],
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 2 / 2.3 / 2.6 / 2.9 / 3.2 / 3.5% maximum health',
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
          "Recast - Awaken: Udyr increases the  shield's strength, stacking with the remaining shield from the first cast, and  heals every 0.25 seconds over the next 4 seconds, as well as causes the empowered attacks to instead gain doubled  life steal and  heal him for 2.4% of his maximum health (+ 16% AP) on-hit.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Increased Shield Strength:',
            raw: '20 − 150 (based on level) (+ 45 / 60 / 75 / 90 / 105 / 120) (+ 65% AP) (+ 8% maximum health)',
            healType: 'BonusHealth',
            values: [
              20, 27.65, 35.29, 42.94, 50.59, 58.24, 65.88, 73.53, 81.18, 88.82,
              96.47, 104.12, 111.76, 119.41, 127.06, 134.71, 142.35, 150,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 − 150',
            children: [
              {
                values: [45, 60, 75, 90, 105, 120],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 45 / 60 / 75 / 90 / 105 / 120',
              },
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
              {
                values: 8,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 8% maximum health',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Total Healing:',
            raw: '10 − 75 (based on level) (+ 22.5 / 30 / 37.5 / 45 / 52.5 / 60) (+ 32.5% AP) (+ 4% maximum health)',
            healType: 'BonusHealth',
            values: [
              10, 13.82, 17.65, 21.47, 25.29, 29.12, 32.94, 36.76, 40.59, 44.41,
              48.24, 52.06, 55.88, 59.71, 63.53, 67.35, 71.18, 75,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 − 75',
            children: [
              {
                values: [22.5, 30, 37.5, 45, 52.5, 60],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 22.5 / 30 / 37.5 / 45 / 52.5 / 60',
              },
              {
                values: 32.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 32.5% AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 4% maximum health',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Increased Life Steal:',
            raw: '30 / 32 / 34 / 36 / 38 / 40%',
            values: [30, 32, 34, 36, 38, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 32 / 34 / 36 / 38 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Healing on-hit is reduced to 60% against  minions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blazing Stampede': {
    effects: [
      {
        img: 'Udyr Blazing Stampede.png',
        description:
          'Active - Stance: Udyr enters Stampede Stance, empowering his basic attacks to have an  uncancellable windup and  pounce on the target to  stun them for 0.75 seconds. This cannot affect the same target more than once every few seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally, Udyr becomes  ghosted and gains  bonus movement speed for 4 seconds, which decays to 30% effectiveness over 1.5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '30 / 37 / 44 / 51 / 58 / 65%',
            values: [30, 37, 44, 51, 58, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37 / 44 / 51 / 58 / 65%',
          },
          {
            effectType: 'Unique',
            name: 'Decayed Bonus Movement Speed:',
            raw: '9 / 11.1 / 13.2 / 15.3 / 17.4 / 19.5%',
            values: [9, 11.1, 13.2, 15.3, 17.4, 19.5],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '9 / 11.1 / 13.2 / 15.3 / 17.4 / 19.5%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast - Awaken: Udyr gains  75 bonus attack range and an additional 30% − 40% (based on level) bonus movement speed. He also gains  immunity to crowd control for 1.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wingborne Storm': {
    effects: [
      {
        img: 'Udyr Wingborne Storm.png',
        description:
          'Active - Stance: Udyr enters Storm Stance, empowering his next two basic attacks to deal 10 − 30 (based on level) (+ 30% AP) magic damage to nearby enemies.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally, Udyr summons a blizzard around himself for 4 seconds that deals magic damage every 0.5 seconds to nearby enemies and  slows them.  Minions take 50 / 60 / 70 / 80% (based on level) damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '10 / 19 / 28 / 37 / 46 / 55 (+ 17.5% AP)',
            damagetype: 'None',
            values: [10, 19, 28, 37, 46, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 19 / 28 / 37 / 46 / 55',
            children: [
              {
                values: 17.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 17.5% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 18 / 21 / 24 / 27 / 30%',
            values: [15, 18, 21, 24, 27, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 18 / 21 / 24 / 27 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Recast - Awaken: Udyr ends the blizzard if it is active and unleashes a glacial storm for 4 seconds that is able to move on its own, as well as causes the empowered attacks to instead deal their damage to enemies within that storm. The storm follows the closest nearby  visible target and applies the same effects but deals  bonus magic damage equal to「 1% − 2% (based on level) (+ 0.4375% per 100 AP) of the target's maximum health per tick, capped at 10 − 50 (based on level) 」「 8% − 16% (based on level) (+ 3.5% per 100 AP) of the target's maximum health over the duration, capped at 80 − 400 (based on level) 」against  monsters, and  slows by an additional 10%.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Increased Slow:',
            raw: '25 / 28 / 31 / 34 / 37 / 40%',
            values: [25, 28, 31, 34, 37, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 28 / 31 / 34 / 37 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The unleashed storm grants  sight of its surroundings and prioritizes following the last enemy Udyr has attacked while he is nearby, then enemy  champions, then non-champions, then Udyr.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
