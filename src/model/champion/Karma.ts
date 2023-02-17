import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Karma';
export const skillsData = ChampionSkillsData['Karma'];

export const Karma = {
  'Gathering Fire': {
    effects: [
      {
        img: 'Gathering Fire.png',
        description:
          "Innate:  Mantra's  current cooldown is reduced by 5 seconds for each enemy champion hit by Karma's damaging abilities.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Inner Flame': {
    effects: [
      {
        img: 'Inner Flame.png',
        description:
          'Active: Karma fires a bolt in the target direction that explodes on the first enemy hit, dealing magic damage to nearby enemies and  slowing them by 35% for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 40% AP)',
            damagetype: 'None',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
  Soulflare: {
    effects: [
      {
        img: 'Soulflare.png',
        description:
          'Mantra Bonus: Inner Flame deals increased damage, and fires a larger bolt that also explodes at maximum range.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '40 / 100 / 160 / 220 (+ 30% AP)',
            damagetype: 'None',
            values: [40, 100, 160, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 100 / 160 / 220',
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
          'The explosion creates a field for 1.5 seconds that  slows enemies within by 50%, which then ruptures to deal magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 140 / 245 / 350 (+ 60% AP)',
            damagetype: 'None',
            values: [35, 140, 245, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 140 / 245 / 350',
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
        description: "Soulflare scales with  Mantra's rank.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Focused Resolve': {
    effects: [
      {
        img: 'Focused Resolve.png',
        description:
          'Active: Karma deals magic damage to the target enemy  champion or  monster and forms a  tether between her and them for 2 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 45% AP)',
            damagetype: 'None',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
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
          'If the tether is not broken by the end of its duration, the target is dealt the same magic damage again and is  rooted for a duration, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '80 / 130 / 180 / 230 / 280 (+ 90% AP)',
            damagetype: 'None',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
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
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1.4 / 1.55 / 1.7 / 1.85 / 2',
            values: [1.4, 1.55, 1.7, 1.85, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.4 / 1.55 / 1.7 / 1.85 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Renewal: {
    effects: [
      {
        img: 'Renewal.png',
        description:
          "Mantra Bonus: Focused Resolve's  root duration is increased. Karma  heals for  17% (+ 1% per 100 AP) of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Root Duration Increase:',
            raw: '0.5 / 0.75 / 1 / 1.25',
            values: [0.5, 0.75, 1, 1.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.5 / 0.75 / 1 / 1.25',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Renewal scales with  Mantra's rank.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Inspire: {
    effects: [
      {
        img: 'Inspire.png',
        description:
          'Active: Karma grants a  shield to herself or the target allied champion for 2.5 seconds as well as  40% bonus movement speed for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 45% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Defiance: {
    effects: [
      {
        img: 'Defiance.png',
        description:
          "Mantra - Active: Inspire's shield strength is increased. Inspire spreads to surrounding allied champions at 30% effectiveness.Secondary targets receive 12% bonus movement speed.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Shield:',
            raw: '25 / 75 / 125 / 175 (+ 45% AP)',
            damagetype: 'None',
            values: [25, 75, 125, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 75 / 125 / 175',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Reduced Bonus Shield:',
            raw: '7.5 / 24 / 40.5 / 57 (+ 13.5% AP)',
            damagetype: 'None',
            values: [7.5, 24, 40.5, 57],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7.5 / 24 / 40.5 / 57',
            children: [
              {
                values: 13.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 13.5% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Defiance scales with  Mantra's rank.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Mantra: {
    effects: [
      {
        img: 'Mantra.png',
        description:
          'Active: Karma empowers her next basic ability within 8 seconds for an additional effect. Mantra can be used while affected by  cast-inhibiting crowd control.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Karma begins the game with one rank in Mantra. Her empowered abilities scale based on Mantra's rank.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
