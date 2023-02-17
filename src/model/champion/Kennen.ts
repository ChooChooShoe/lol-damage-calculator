import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Kennen';
export const skillsData = ChampionSkillsData['Kennen'];

export const Kennen = {
  'Mark of the Storm': {
    effects: [
      {
        img: 'Mark of the Storm.png',
        description:
          "Innate: Kennen's abilities apply a stack of Mark of the Storm to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The third stack against a target consumes them all to  stun them for 1.25 seconds and restore  25 energy. The stun duration is reduced to 0.5 seconds if this occurs on the same target again within 6 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Slicing Maelstrom can apply only up to 3 stacks on a target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Thundering Shuriken': {
    effects: [
      {
        img: 'Thundering Shuriken.png',
        description:
          'Active: Kennen throws a shuriken in the target direction that deals magic damage to the first enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 120 / 165 / 210 / 255 (+ 75% AP)',
            damagetype: 'None',
            values: [75, 120, 165, 210, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 120 / 165 / 210 / 255',
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
    ],
  },
  'Electrical Surge': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Kennen's basic attacks on-attack generate a stack of Electrical Surge, stacking up to 4 times. At 4 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage and apply a stack of  Mark of the Storm.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '35 / 45 / 55 / 65 / 75 (+ 80 / 90 / 100 / 110 / 120% bonus AD) (+ 35% AP)',
            damagetype: 'None',
            values: [35, 45, 55, 65, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 45 / 55 / 65 / 75',
            children: [
              {
                values: [80, 90, 100, 110, 120],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80 / 90 / 100 / 110 / 120% bonus AD',
              },
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
        img: 'Electrical Surge.png',
        description:
          'Active: Kennen sends out a surge of electricity that deals magic damage to all nearby enemies afflicted by  Mark of the Storm or within  Slicing Maelstrom.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 80% AP)',
            damagetype: 'None',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
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
          'An enemy within  775 units with  Mark of the Storm or inside  Slicing Maelstrom is required to cast this ability. The target does not have to be  visible to be targeted by this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Lightning Rush': {
    effects: [
      {
        img: 'Lightning Rush.png',
        description:
          'Active: Kennen turns into lightning for 2 seconds, becoming unable to declare basic attacks but gaining  ghosting and  100% bonus movement speed. He deals magic damage to enemies he passes through, halved against non-champions, and restores  40 energy upon damaging at least one enemy.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
          'Lightning Rush can be recast after 0.5 seconds, and does so automatically after the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Kennen ends Lightning Rush to gain  bonus attack speed and be allowed to exceed the attack speed cap for 4 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Lightning Rush's recast can be used while affected by  cast-inhibiting crowd control.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Slicing Maelstrom': {
    effects: [
      {
        img: 'Slicing Maelstrom.png',
        description:
          'Active: Kennen summons a storm around himself for 3 seconds, gaining  bonus armor and  bonus magic resistance for the duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '20 / 30 / 40 / 50 / 60',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The storm strikes lightning bolts down on nearby enemies every 0.5 seconds, each one dealing magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Bolt:',
            raw: '40 / 57.5 / 75 / 92.5 / 110 (+ 22.5% AP)',
            damagetype: 'None',
            values: [40, 57.5, 75, 92.5, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 57.5 / 75 / 92.5 / 110',
            children: [
              {
                values: 22.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 22.5% AP',
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
          'Slicing Maelstrom deals 10% increased damage against a target with each successive strike, up to a maximum of 150% damage with one strike.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Single-Target Damage:',
            raw: '300 / 431.25 / 562.5 / 693.75 / 825 (+ 168.75% AP)',
            damagetype: 'None',
            values: [300, 431.25, 562.5, 693.75, 825],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 431.25 / 562.5 / 693.75 / 825',
            children: [
              {
                values: 168.75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 168.75% AP',
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
