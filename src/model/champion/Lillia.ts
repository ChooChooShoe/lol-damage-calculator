import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Lillia';
export const skillsData = ChampionSkillsData['Lillia'];

export const Lillia = {
  'Dream-Laden Bough': {
    effects: [
      {
        img: 'Dream-Laden Bough.png',
        description:
          "Innate: Lillia's abilities apply Dream Dust to enemies hit, which deals「 5% (+ 1.5% per 100 AP) of the target's maximum health total magic damage over 3 seconds, capped at 50 − 150 (based on level) 」「 0.83% (+ 0.25% per 100 AP) of the target's maximum health magic damage every 0.5 seconds over 3 seconds, capped at 8.33 − 25 (based on level) per tick 」against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Lillia  heals for 24 − 75 (based on level) (+ 5.4% AP) against large  monsters and 6 − 120 (based on level) (+ 18% AP) against  champions over the duration of Dream Dust, reduced to 33% effectiveness for each target beyond the first. She may only heal against 1 monster at a time.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blooming Blows': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Whenever Lillia's abilities hit at least one enemy, she generates a stack of Prance for 6.5 seconds, refreshing on subsequent hits and stacking up to 4 times. Stacks expire by one every 1.5 seconds when the duration ends.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Prance.png',
        description:
          'Prance: For each stack, Lillia gains  bonus movement speed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '3 / 4 / 5 / 6 / 7% (+ 3% per 100 AP)',
            damagetype: 'None',
            values: [3, 4, 5, 6, 7],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 4 / 5 / 6 / 7%',
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 3% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Blooming Blows.png',
        description:
          'Active: Lillia swings her censer around her, dealing magic damage to nearby enemies. Enemies hit within the outer edge of the area additionally take the same amount as  bonus true damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 45 / 55 / 65 / 75 (+ 45% AP)',
            damagetype: 'None',
            values: [35, 45, 55, 65, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 45 / 55 / 65 / 75',
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
  'Watch Out! Eep!': {
    effects: [
      {
        img: 'Watch Out! Eep!.png',
        description:
          'Active: Lillia  dashes to 150 units in front of the target location over 0.759 seconds, though not through terrain, and deals magic damage in an area around the target spot. Enemies hit within the epicenter are dealt  200% increased damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 100 / 120 / 140 / 160 (+ 35% AP)',
            damagetype: 'None',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Watch Out! Eep! deals 50% damage to  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minion Damage:',
            raw: '40 / 50 / 60 / 70 / 80 (+ 17.5% AP)',
            damagetype: 'None',
            values: [40, 50, 60, 70, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Watch Out! Eep! will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Swirlseed: {
    effects: [
      {
        img: 'Swirlseed.png',
        description:
          'Active: Lillia lobs a seed at the target location that rolls forward indefinitely. The seed detonates upon hitting an enemy or terrain while on the ground, dealing magic damage to enemies in a cone,  slowing them by 40% for 3 seconds and  revealing them for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 60% AP)',
            damagetype: 'None',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
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
        description: 'Swirlseed will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Lilting Lullaby': {
    effects: [
      {
        img: 'Lilting Lullaby.png',
        description:
          'Active: Lillia casts a magical lullaby over all enemy  champions affected by  Dream Dust, which arrives after 0.3 seconds and renders them  drowsy for 1.5 seconds,  slowing them by 10%. After the duration, they fall  asleep for a duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Sleep Duration:',
            raw: '2 / 2.125 / 2.25 / 2.375 / 2.5',
            values: [2, 2.125, 2.25, 2.375, 2.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.125 / 2.25 / 2.375 / 2.5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Lilting Lullaby 2.png',
        description:
          'The next instance of non- persistent non- minion non-small and medium  monster damage against a  sleeping target consumes the debuff to deal additional magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 40% AP)',
            damagetype: 'None',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
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
          'An enemy champion affected by  Dream Dust is required to cast this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
