import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Renekton';
export const skillsData = ChampionSkillsData['Renekton'];

export const Renekton = {
  'Reign of Anger': {
    effects: [
      {
        img: 'Reign of Anger.png',
        description:
          "Innate: Renekton's basic attacks generate  5 Fury. After 12 seconds of being out of combat, he loses 1 Fury every 0.25 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While Renekton has at least 50 Fury, his next basic ability consumes 50 Fury to become empowered with an additional effect. Empowered abilities do not generate Fury.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Renekton generates 50% bonus Fury from all sources while below 50% of his maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Cull the Meek': {
    effects: [
      {
        img: 'Cull the Meek.png',
        description:
          'Active: Renekton cleaves around himself, dealing physical damage to nearby enemies and  healing himself for each enemy hit, up to a cap.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Healing Cap:',
            raw: '50 / 75 / 100 / 125 / 150',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
          },
          {
            effectType: 'Damage',
            name: 'Non-Champion Healing:',
            raw: '2 / 3 / 4 / 5 / 6 (+ 2% bonus AD)',
            damagetype: 'None',
            values: [2, 3, 4, 5, 6],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 3 / 4 / 5 / 6',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 2% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Against  champions, the healing is increased by 300%.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Champion Healing:',
            raw: '12 / 18 / 24 / 30 / 36 (+ 15% bonus AD)',
            damagetype: 'None',
            values: [12, 18, 24, 30, 36],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 18 / 24 / 30 / 36',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 15% bonus AD',
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
          'Renekton generates  2.5 Fury for each non-champion hit and 10 Fury for each champion hit, with the Fury generated per cast capped at 30.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Reign of Anger Bonus: Cull the Meek has increased damage, tripled total healing, and a quadrupled healing cap.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Renekton cannot basic attack nor cast  Slice,  Dice, or  Dominus for 0.25 seconds after Cull the Meek's activation.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ruthless Predator': {
    effects: [
      {
        img: 'Ruthless Predator.png',
        description:
          'Active: Renekton empowers his next basic attack within 7 seconds to have a 0.2-second cast time, gain  50 bonus range and strike the target twice, dealing modified physical damage and  stunning them for 0.75 seconds. Each strike applies  on-hit effects at 100% effectiveness and generates  Fury. Hitting an enemy  champion generates 10 bonus Fury.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '10 / 40 / 70 / 100 / 130 (+ 150% AD)',
            damagetype: 'None',
            values: [10, 40, 70, 100, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 40 / 70 / 100 / 130',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 150% AD',
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
          'Reign of Anger Bonus: Renekton instead strikes 3 times, completely destroying damage-mitigating  shields on the target upon the first strike, as well as increasing the  stun duration to 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '15 / 60 / 105 / 150 / 195 (+ 225% AD)',
            damagetype: 'None',
            values: [15, 60, 105, 150, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 60 / 105 / 150 / 195',
            children: [
              {
                values: 225,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 225% AD',
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
          "Ruthless Predator  resets Renekton's basic attack timer. After Ruthless Predator's standard and empowered attack cast time, Renekton cannot move nor cast  Cull the Meek,  Slice, nor  Dice for 0.528 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Slice: {
    effects: [
      {
        img: 'Slice.png',
        description:
          'Active: Renekton  dashes a fixed distance in the target direction, dealing physical damage to enemies he passes through.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '40 / 70 / 100 / 130 / 160 (+ 90% bonus AD)',
            damagetype: 'None',
            values: [40, 70, 100, 130, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 70 / 100 / 130 / 160',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90% bonus AD',
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
          'If Renekton hits an enemy, he can cast Dice within the next 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Dice: {
    effects: [
      {
        img: 'Dice.png',
        description:
          'Active: Renekton  dashes a fixed distance in the target direction, dealing the same physical damage to enemies he passes through.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '80 / 140 / 200 / 260 / 320 (+ 180% bonus AD)',
            damagetype: 'None',
            values: [80, 140, 200, 260, 320],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 140 / 200 / 260 / 320',
            children: [
              {
                values: 180,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 180% bonus AD',
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
          'Both Slice and Dice generate  2 Fury for each non-champion hit, and 10 Fury for each champion hit, with the Fury generated per dash capped at 30.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Reign of Anger Bonus: Dice deals bonus physical damage and inflicts  armor reduction to enemies hit for 4 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 45% bonus AD)',
            damagetype: 'None',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 45% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Armor Reduction:',
            raw: "25 / 27.5 / 30 / 32.5 / 35% of target's armor",
            values: [25, 27.5, 30, 32.5, 35],
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText: "of target's armor",
            pre: "25 / 27.5 / 30 / 32.5 / 35% of target's armor",
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Dominus: {
    effects: [
      {
        img: 'Dominus.png',
        description:
          "Active: Renekton empowers himself for 15 seconds, gaining  bonus health, 20% increased size,  25 bonus attack range, and  20 Fury, as well as increasing  Cull the Meek's effect radius.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Health:',
            raw: '250 / 325 / 400 / 475 / 550',
            values: [250, 325, 400, 475, 550],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 325 / 400 / 475 / 550',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'During this time, he deals magic damage every 0.5 seconds to nearby enemies and generates 5 Fury per second, up to a maximum of 75 Fury.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '25 / 37.5 / 50 / 62.5 / 75 (+ 5% bonus AD) (+ 5% AP)',
            damagetype: 'None',
            values: [25, 37.5, 50, 62.5, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 37.5 / 50 / 62.5 / 75',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 5% bonus AD',
              },
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5% AP',
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
