import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Nami';
export const skillsData = ChampionSkillsData['Nami'];

export const Nami = {
  'Surging Tides': {
    effects: [
      {
        img: 'Surging Tides.png',
        description:
          "Innate: Nami's abilities grant  90 (+ 20% AP) bonus movement speed to allied  champions hit, decaying over 1.5 seconds. The bonus is「 doubled 」「 increased to 180 (+ 40% AP) 」from  Tidal Wave.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Aqua Prison': {
    effects: [
      {
        img: 'Aqua Prison.png',
        description:
          'Active: Nami launches a bubble at the target location that lands after 0.726 seconds, dealing magic damage to enemies hit and  suspending them for 1.5 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 130 / 185 / 240 / 295 (+ 50% AP)',
            damagetype: 'None',
            values: [75, 130, 185, 240, 295],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 130 / 185 / 240 / 295',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Allied champions are granted  Surging Tides in a slightly larger area.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ebb and Flow': {
    effects: [
      {
        img: 'Ebb and Flow.png',
        description:
          'Active: Nami unleashes a stream of water onto the target champion or herself, which then bounces to nearby unaffected champions up to twice, alternating between enemies and allies and Nami.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Ebb and Flow  heals allies and deals magic damage to enemies, with each bounce modifying the effectiveness of the next by -15% (+ 7.5% per 100 AP).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '55 / 75 / 95 / 115 / 135 (+ 25% AP)',
            damagetype: 'None',
            values: [55, 75, 95, 115, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 75 / 95 / 115 / 135',
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
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 55% AP)',
            damagetype: 'None',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Tidecaller's Blessing": {
    effects: [
      {
        img: "Tidecaller's Blessing.png",
        description:
          "Active: Nami blesses herself or the target allied champion for 6 seconds, empowering the target's next 3 basic attacks or abilities to each deal bonus magic damage and  slow their target for 1 second.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage Per Hit:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 20% AP)',
            damagetype: 'None',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Slow:',
            raw: '15 / 20 / 25 / 30 / 35% (+ 5% per 100 AP)',
            damagetype: 'None',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 5% per 100 AP',
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
          'Empowered abilities that apply  area damage only deal 33% − 66% (based on level) of the bonus damage to non-champions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tidal Wave': {
    effects: [
      {
        img: 'Tidal Wave.png',
        description:
          'Active: Nami surges a tidal wave in the target direction, granting  sight around its trajectory as it travels, dealing magic damage to enemies hit,  knocking them up for 0.5 seconds, and  slowing them for 2 − 4 (based on distance traveled) seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 250 / 350 (+ 60% AP)',
            damagetype: 'None',
            values: [150, 250, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 250 / 350',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '50 / 60 / 70%',
            values: [50, 60, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
