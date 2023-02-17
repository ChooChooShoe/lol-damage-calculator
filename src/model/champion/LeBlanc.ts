import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'LeBlanc';
export const skillsData = ChampionSkillsData['LeBlanc'];

export const LeBlanc = {
  'Mirror Image': {
    effects: [
      {
        img: 'Mirror Image.png',
        description:
          'Innate: Periodically, when LeBlanc is damaged to  40% maximum health, she creates a  clone of herself, after which they both instantly become  invisible for 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The clone can basic attack but deals no damage, lasts for 8 seconds, and starts running 1900 units towards a random place in front of LeBlanc decided the moment it spawns.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "See Pets for more details about LeBlanc's clone.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Sigil of Malice': {
    effects: [
      {
        img: 'Sigil of Malice.png',
        description:
          'Active: LeBlanc projects an orb at the target enemy that deals magic damage and marks them for 3.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '65 / 90 / 115 / 140 / 165 (+ 40% AP)',
            damagetype: 'None',
            values: [65, 90, 115, 140, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 90 / 115 / 140 / 165',
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
          "Leblanc's next damaging ability against the marked target will consume the mark to deal them the  same damage again.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '130 / 180 / 230 / 280 / 330 (+ 80% AP)',
            damagetype: 'None',
            values: [130, 180, 230, 280, 330],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '130 / 180 / 230 / 280 / 330',
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
    ],
  },
  Distortion: {
    effects: [
      {
        img: 'Distortion.png',
        description:
          "Active: LeBlanc  dashes to the target location, dealing magic damage to all nearby enemies upon arrival and leaving a return pad at the cast location for 4 seconds. Distortion can be recast after 0.2 seconds of the dash ending for the pad's duration.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 115 / 155 / 195 / 235 (+ 60% AP)',
            damagetype: 'None',
            values: [75, 115, 155, 195, 235],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 115 / 155 / 195 / 235',
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
        img: 'Distortion 2.png',
        description:
          "Recast: LeBlanc  blinks to Distortion's return pad, regardless of range.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Distortion will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ethereal Chains': {
    effects: [
      {
        img: 'Ethereal Chains.png',
        description:
          'Active: LeBlanc flings an illusory chain in the target direction that deals magic damage to the first enemy it hits and forms a  tether between LeBlanc and the target for 1.5 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 30% AP)',
            damagetype: 'None',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
        description:
          'If the tether is not broken by the end of its duration, the target is dealt magic damage and is  rooted for 1.5 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 70% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
  Mimic: {
    effects: [
      {
        img: 'Mimic.png',
        description:
          'Active: LeBlanc casts a mimicked version of her most recently used basic ability, applying the same effects and dealing modified magic damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Mimic: Sigil of Malice: Deals modified damage and double damage upon triggering the mark.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
        description: 'Mimic: Distortion: Deals modified damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 225 / 300 / 375 / 450 (+ 75% AP)',
            damagetype: 'None',
            values: [150, 225, 300, 375, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 225 / 300 / 375 / 450',
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
          'Mimic: Ethereal Chains: Deals modified damage and double damage after the tether lasts its full duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
} satisfies { [skillName in string]: SkillModel };
