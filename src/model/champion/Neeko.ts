import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Neeko';
export const skillsData = ChampionSkillsData['Neeko'];

export const Neeko = {
  'Inherent Glamour': {
    effects: [
      {
        img: 'Inherent Glamour.png',
        description:
          'Innate: Neeko is offered a selection of allied  champions to take on their appearance. She can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing Inherent Glamour on a 2-second cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While disguised, Neeko can use basic attacks while keeping her form. Taking direct damage from enemy  champions or using a damaging ability, summoner spell, or item active puts Inherent Glamour on full  cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Neeko cannot activate Inherent Glamour while she is unable to cast abilities.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blooming Burst': {
    effects: [
      {
        img: 'Blooming Burst.png',
        description:
          'Active: Neeko tosses a seed that blooms at the target location, dealing magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 50% AP)',
            damagetype: 'None',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
          'If the bloom kills an enemy or hits a  champion or large  monster, it will bloom again after 0.75 seconds to deal magic damage. This may occur up to 2 times per cast.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 20% AP)',
            damagetype: 'None',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
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
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Shapesplitter: {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Neeko's basic attacks  on-hit generate a stack of Shapesplitter, stacking up to 2 times. At 2 stacks, her next basic attack on-attack is empowered to consume them all to become  non-projectile, deal bonus magic damage and grant her  bonus movement speed for 1 second.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 60% AP)',
            damagetype: 'None',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
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
            name: 'Bonus Movement Speed:',
            raw: '10 / 17.5 / 25 / 32.5 / 40%',
            values: [10, 17.5, 25, 32.5, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 17.5 / 25 / 32.5 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Shapesplitter.png',
        description:
          'Active: Neeko creates a  clone of her  current form, after which they both instantly become  invisible for 0.5 seconds and gain bonus movement speed for 3 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The clone lasts for 3 seconds, and starts running a fixed distance in the target direction. It is  untargetable to allies and for the first 0.5 seconds of its lifespan to enemies.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tangle-Barbs': {
    effects: [
      {
        img: 'Tangle-Barbs.png',
        description:
          'Active: Neeko slings a magical spiral in the target direction that deals magic damage to enemies hit and  roots them for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 60% AP)',
            damagetype: 'None',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
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
            name: 'Root Duration:',
            raw: '0.7 / 0.9 / 1.1 / 1.3 / 1.5',
            values: [0.7, 0.9, 1.1, 1.3, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.7 / 0.9 / 1.1 / 1.3 / 1.5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the spiral hits at least one enemy, it grows in size and its speed and root duration is increased.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Empowered Root Duration:',
            raw: '1.8 / 2.1 / 2.4 / 2.7 / 3',
            values: [1.8, 2.1, 2.4, 2.7, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.8 / 2.1 / 2.4 / 2.7 / 3',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Pop Blossom': {
    effects: [
      {
        img: 'Pop Blossom.png',
        description:
          'Active: Neeko winds up spiritual essence over 1.25 seconds and highlights an area around herself, which is visible to enemies unless Neeko is  disguised.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After winding up, the cast time begins and Neeko leaps into the air, granting herself a  shield for 2 seconds that is increased for each nearby enemy  champion.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '75 / 87.5 / 100 / 112.5 / 125 (+ 75% AP)',
            damagetype: 'None',
            values: [75, 87.5, 100, 112.5, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 87.5 / 100 / 112.5 / 125',
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
            effectType: 'Damage',
            name: 'Bonus Shield Per Champion:',
            raw: '40 / 50 / 60 / 70 / 80 (+ 40% AP)',
            damagetype: 'None',
            values: [40, 50, 60, 70, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80',
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
          'When the cast time ends, she lands to emit a burst of energy that deals magic damage to nearby enemies and  stuns them for 1.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 312.5 / 425 / 537.5 / 650 (+ 130% AP)',
            damagetype: 'None',
            values: [200, 312.5, 425, 537.5, 650],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 312.5 / 425 / 537.5 / 650',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 130% AP',
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
