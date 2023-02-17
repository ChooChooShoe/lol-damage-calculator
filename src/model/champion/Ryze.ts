import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Ryze';
export const skillsData = ChampionSkillsData['Ryze'];

export const Ryze = {
  'Arcane Mastery': {
    effects: [
      {
        img: 'Arcane Mastery.png',
        description:
          'Innate: Ryze increases his  maximum mana by (6% per 100 AP).',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Overload: {
    effects: [
      {
        img: 'Overload 5.png',
        description:
          "Passive: Ryze's other basic ability casts reset Overload's  cooldown and charge a  Rune stack for 4 seconds, refreshing on subsequent casts and stacking up to 2 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Overload.png',
        description:
          'Active: Ryze unleashes a runic blast in the target direction that deals magic damage to the first enemy hit and consumes all  Rune stacks.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 55% AP) (+ 2% bonus mana)',
            damagetype: 'None',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mana',
                unitsText: 'bonus mana',
                pre: '+ 2% bonus mana',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Overload 4.png',
        description:
          'If Ryze consumed 2 stacks, he gains  bonus movement speed for 2 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '28 / 32 / 36 / 40 / 44%',
            values: [28, 32, 36, 40, 44],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '28 / 32 / 36 / 40 / 44%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Flux Bonus: Overload deals 10 / 40 / 70 / 100% (based on  Realm Warp's Rank)  increased damage and spreads to surrounding Fluxed enemies.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Rune Prison': {
    effects: [
      {
        img: 'Rune Prison.png',
        description:
          'Active: Ryze seizes the target enemy, dealing magic damage and  slowing them by 35% for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 70% AP) (+ 4% bonus mana)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mana',
                unitsText: 'bonus mana',
                pre: '+ 4% bonus mana',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Flux Bonus: The target is  rooted instead of  slowed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spell Flux': {
    effects: [
      {
        img: 'Spell Flux.png',
        description:
          "Active: Ryze projects an orb upon the target enemy that deals magic damage.\nThe target and surrounding enemies are also marked with Flux for 3 seconds. Ryze's basic abilities against Flux targets consume the mark to become empowered with an additional effect.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 45% AP) (+ 2% bonus mana)',
            damagetype: 'None',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mana',
                unitsText: 'bonus mana',
                pre: '+ 2% bonus mana',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Flux Bonus: Spell Flux spreads farther.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Realm Warp': {
    effects: [
      {
        img: 'false',
        description:
          "Passive:  Overload's  Flux empowered damage is increased.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Overload Damage:',
            raw: '40 / 55 / 70 / 85 / 100%',
            values: [40, 55, 70, 85, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Realm Warp.png',
        description:
          'Active: Ryze  channels for 2 seconds to open a portal beneath him, marking the target location as its destination and gaining  sight of the area. Ryze is able to act while channeling, but the portal will cancel if he is  interrupted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Upon completion, Ryze and allied units within will  blink to the location and become  rooted,  disarmed,  silenced and  untargetable for 0.75 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Realm Warp will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
