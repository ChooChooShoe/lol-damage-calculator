import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Leona';
export const skillsData = ChampionSkillsData['Leona'];

export const Leona = {
  Sunlight: {
    effects: [
      {
        img: 'Sunlight.png',
        description:
          "Innate: Leona's abilities mark enemies hit for 1.5 seconds, refreshing on subsequent hits. Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal 32 − 168 (based on level) bonus magic damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shield of Daybreak': {
    effects: [
      {
        img: 'Shield of Daybreak.png',
        description:
          'Active: Leona illuminates her shield, empowering her next basic attack within 6 seconds to have a 0.25-second cast time, gain  50 bonus range, deal bonus magic damage and  stun the target for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '10 / 35 / 60 / 85 / 110 (+ 30% AP)',
            damagetype: 'None',
            values: [10, 35, 60, 85, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 35 / 60 / 85 / 110',
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
        description: "Shield of Daybreak  resets Leona's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Eclipse: {
    effects: [
      {
        img: 'Eclipse.png',
        description:
          'Active: Leona raises her guard for 3 seconds, gaining flat damage reduction of up to 50% of the damage instance and  bonus armor and  bonus magic resistance.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Flat Damage Reduction:',
            raw: '8 / 12 / 16 / 20 / 24',
            values: [8, 12, 16, 20, 24],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 12 / 16 / 20 / 24',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 20% bonus armor)',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 20% bonus armor',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Resistance:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 20% bonus magic resistance)',
            damagetype: 'Magic',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 20% bonus magic resistance',
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
          "Her shield detonates after the duration, dealing magic damage to nearby enemies. If this hits an enemy, Leona's guard is extended for an additional 3 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '45 / 80 / 115 / 150 / 185 (+ 40% AP)',
            damagetype: 'None',
            values: [45, 80, 115, 150, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 80 / 115 / 150 / 185',
            children: [
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
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Zenith Blade': {
    effects: [
      {
        img: 'Zenith Blade.png',
        description:
          'Active: Leona projects her sword in the target direction that deals magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 90 / 130 / 170 / 210 (+ 40% AP)',
            damagetype: 'None',
            values: [50, 90, 130, 170, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 90 / 130 / 170 / 210',
            children: [
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If she hits at least one enemy  champion, she will  dash 225 units behind the last one struck within 3000 range and  root them for 0.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Leona is  unable to move or attack while Zenith Blade is in flight. She can cast any of her abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Solar Flare': {
    effects: [
      {
        img: 'Solar Flare.png',
        description:
          'Active: Leona calls down a solar flare that strikes upon the target location after 0.625 seconds, granting  sight of the area before impact and for another 3 seconds afterwards. Enemies hit are dealt magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 137.5 / 175 / 212.5 / 250 (+ 80% AP)',
            damagetype: 'None',
            values: [100, 137.5, 175, 212.5, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 137.5 / 175 / 212.5 / 250',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
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
          'Targets are also  slowed by 80% for 1.75 seconds, or  stunned for the same duration if they are hit by the epicenter.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
