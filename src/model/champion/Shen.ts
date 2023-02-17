import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Shen';
export const skillsData = ChampionSkillsData['Shen'];

export const Shen = {
  'Ki Barrier': {
    effects: [
      {
        img: 'Ki Barrier.png',
        description:
          "Innate: After completing an ability's effects, Shen grants himself a  shield for 50 − 101 (based on level) (+ 12% bonus health) for 2.5 seconds. If the triggering ability successfully affected at least one enemy  champion, Ki Barrier's  cooldown is reduced by 4 − 7.5 (based on level) seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Shen manifests a Spirit Blade that he can control with  Twilight Assault and  Spirit's Refuge.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Twilight Assault': {
    effects: [
      {
        img: 'Twilight Assault.png',
        description:
          'Active: Shen recalls his Spirit Blade to his location. Enemy champions hit are  slowed for the next 2 seconds while moving away from Shen.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Twilight Assault 2.png',
        description:
          'Once it arrives, Shen empowers his next 3 basic attacks within 8 seconds to gain  75 bonus range and deal bonus magic damage.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "10 − 40 (based on level) (+ 2 / 2.5 / 3 / 3.5 / 4% (+ 1.5% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [
              10, 11.76, 13.53, 15.29, 17.06, 18.82, 20.59, 22.35, 24.12, 25.88,
              27.65, 29.41, 31.18, 32.94, 34.71, 36.47, 38.24, 40,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 − 40',
            children: [
              {
                values: [2, 2.5, 3, 3.5, 4],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 2 / 2.5 / 3 / 3.5 / 4%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 1.5,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 1.5% per 100 AP',
                  },
                ],
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Twilight Assault 3.png',
        description:
          'If the Spirit Blade hit at least one enemy  champion during the travel, the empowerment is enhanced to deal increased bonus magic damage and additionally grant Shen  50% bonus attack speed.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Increased Bonus Damage:',
            raw: "10 − 40 (based on level) (+ 4 / 4.5 / 5 / 5.5 / 6% (+ 2% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [
              10, 11.76, 13.53, 15.29, 17.06, 18.82, 20.59, 22.35, 24.12, 25.88,
              27.65, 29.41, 31.18, 32.94, 34.71, 36.47, 38.24, 40,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 − 40',
            children: [
              {
                values: [4, 4.5, 5, 5.5, 6],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 4 / 4.5 / 5 / 5.5 / 6%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 2,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 2% per 100 AP',
                  },
                ],
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
          'Empowered attacks against  monsters deal 100% bonus damage, but their total damage is capped.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum Monster Damage:',
            raw: '120 / 140 / 160 / 180 / 200',
            values: [120, 140, 160, 180, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 140 / 160 / 180 / 200',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Spirit's Refuge": {
    effects: [
      {
        img: "Spirit's Refuge.png",
        description:
          'Active: Shen primes his Spirit Blade, creating an area around it. After 2 seconds, or when Shen or an allied champion enter the area, the Spirit Blade erupts a protective zone for 1.75 seconds,  blocking all non- turret basic attacks that hit Shen or allied champions in the area.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shadow Dash': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Dealing damage with  Twilight Assault or Shadow Dash restores  30 / 40 / 50 (based on level) energy.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Shadow Dash.png',
        description:
          'Active: Shen  dashes to the target location, dealing physical damage to enemy  champions and  monsters he passes through and  taunting them for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 15% bonus health)',
            healType: 'BonusHealth',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 15% bonus health',
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
          "Twilight Assault and  Spirit's Refuge can be cast during the dash. Shadow Dash will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Stand United': {
    effects: [
      {
        img: 'Stand United.png',
        description:
          "Active: Shen  channels for 3 seconds and granting a  shield to the target allied champion at the time of cast for up to 5 seconds, increased by 0% − 60% (based on target's missing health).",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Minimum Shield Strength:',
            raw: '130 / 210 / 290 / 370 / 450 (+ 135% AP) (+ 16% bonus health)',
            healType: 'BonusHealth',
            values: [130, 210, 290, 370, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '130 / 210 / 290 / 370 / 450',
            children: [
              {
                values: 135,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 135% AP',
              },
              {
                values: 16,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 16% bonus health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Stand United 2.png',
        description:
          "Upon completing the channel, Shen and his Spirit Blade  blink to the target ally's location, placed between them and the nearest enemy champion. Shen also  destroys any  projectiles targeting him at the time of completion.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
