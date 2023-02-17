import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Lissandra';
export const skillsData = ChampionSkillsData['Lissandra'];

export const Lissandra = {
  'Iceborn Subjugation': {
    effects: [
      {
        img: 'Iceborn Subjugation.png',
        description:
          'Innate: Whenever a nearby enemy champion dies, Lissandra spawns a Frozen Thrall from their corpse.Frozen Thralls are  invulnerable and  untargetable ice spirits that have 33.48 − 325 (based on seconds) movement speed and  slow nearby enemies by 25%. They will chase nearby  visible enemies for 4 seconds, prioritizing  champions, after which they shatter to deal 120 − 520 (based on level) (+ 50% AP) magic damage to nearby enemies.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ice Shard': {
    effects: [
      {
        img: 'Ice Shard.png',
        description:
          'Active: Lissandra launches a shard of ice in the target direction that deals magic damage to enemies hit. The first target hit is  slowed for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 80% AP)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 24 / 28 / 32 / 36%',
            values: [20, 24, 28, 32, 36],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 24 / 28 / 32 / 36%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Ice Shard hits an enemy, it will shatter, increasing its width and maximum range.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ring of Frost': {
    effects: [
      {
        img: 'Ring of Frost.png',
        description:
          'Active: Lissandra freezes nearby enemies, dealing magic damage and  rooting them for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
            values: [1.1, 1.2, 1.3, 1.4, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Glacial Path': {
    effects: [
      {
        img: 'Glacial Path.png',
        description:
          'Active: Lissandra sends a claw of ice in the target direction that deals magic damage to enemies it passes through, decelerating over 1.25 seconds. Glacial Path can be recast after 0.5 seconds while the claw is active.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 60% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
        description:
          'Recast: Lissandra consumes the claw and  blinks to its current location.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Frozen Tomb': {
    effects: [
      {
        img: 'Frozen Tomb.png',
        description:
          'Active: Lissandra can cast Frozen Tomb on herself or a target enemy champion.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemy Cast: Lissandra freezes the target enemy champion,  knocking them down and  stunning them for 1.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Self Cast: Lissandra instantly entombs herself, placing herself in  stasis for 2.5 seconds while  healing herself every 0.25 seconds over the duration, which is increased by 0% − 100% (based on missing health) at time of cast.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Heal per Tick:',
            raw: '9 / 11.5 / 14 / 16.5 / 19 (+ 2.5% AP)',
            damagetype: 'None',
            values: [9, 11.5, 14, 16.5, 19],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '9 / 11.5 / 14 / 16.5 / 19',
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 2.5% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Total Heal:',
            raw: '90 / 115 / 140 / 165 / 190 (+ 25% AP)',
            damagetype: 'None',
            values: [90, 115, 140, 165, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 115 / 140 / 165 / 190',
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
        img: '',
        description:
          'Frozen Tomb creates a field of ice that spreads out from the target over 1.5 seconds and covers the surrounding area for 3 seconds, dealing magic damage to enemies and  slowing them for 0.5 seconds, refreshing every 0.25 seconds while they remain.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 75% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 41.25 / 52.5 / 63.75 / 75%',
            values: [30, 41.25, 52.5, 63.75, 75],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 41.25 / 52.5 / 63.75 / 75%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
