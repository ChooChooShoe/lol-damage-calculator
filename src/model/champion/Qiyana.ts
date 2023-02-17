import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Qiyana';
export const skillsData = ChampionSkillsData['Qiyana'];

export const Qiyana = {
  'Royal Privilege': {
    effects: [
      {
        img: 'Royal Privilege.png',
        description:
          "Innate: Qiyana's basic attacks and basic abilities deal 15 − 83 (based on level) (+ 30% bonus AD) (+ 30% AP) additional physical damage. This effect cannot occur on the same target more than once every few seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Gathering an Element with  Terrashape resets Royal Privilege's per-target  cooldown for enemies affected by Royal Privilege using a different Element (or no Element).",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Edge of Ixtal': {
    effects: [
      {
        img: 'Edge of Ixtal.png',
        description:
          'Active: Qiyana slashes forward in the target direction, dealing physical damage to enemies in a line, reduced to 75% damage against targets beyond the first. Edge of Ixtal deals 150% damage against  monsters.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 75% bonus AD)',
            damagetype: 'None',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
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
          "Gathering an Element with  Terrashape resets Edge of Ixtal's  cooldown and upgrades it into Elemental Wrath.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If cast during  Audacity's dash towards an enemy  champion and the target is within 150 units of Qiyana at the end of the dash, Edge of Ixtal will autonomously aim at the target.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Elemental Wrath': {
    effects: [
      {
        img: 'Qiyana Elemental Wrath.gif',
        description:
          'Active: Qiyana hurls her blade in the target direction that blasts in a line upon hitting an enemy or maximum range, consuming the current Element to empower the blade with an additional effect.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Enemies hit are dealt Edge of Ixtal's damage, reduced to 75% against subsequent enemies beyond the closest. Elemental Wrath deals 150% damage against  monsters.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 75% bonus AD)',
            damagetype: 'None',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Qiyana Terrashape Brush.png',
        description:
          'Brush: The blade creates a grass field around Qiyana that lasts for up to 3 seconds, granting her  invisibility and  20% bonus movement speed until she attacks, casts an ability other than  Terrashape, or exits the field.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Qiyana Terrashape River.png',
        description:
          'River: The blast  roots enemies hit for 0.5 seconds, then  slows them by 20% for 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Qiyana Terrashape Rock.png',
        description:
          'Terrain: The blast deals  60% increased damage against enemies below 50% of their maximum health.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '80 / 128 / 176 / 224 / 272 (+ 120% bonus AD)',
            damagetype: 'None',
            values: [80, 128, 176, 224, 272],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 128 / 176 / 224 / 272',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Terrashape: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: While holding an Element, Qiyana gains  bonus attack speed,  25 bonus attack range and bonus magic damage on her basic attacks  on-hit and basic abilities. While out-of-combat and moving near the Element currently being held, she gains  bonus movement speed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '5 / 10 / 15 / 20 / 25%',
            values: [5, 10, 15, 20, 25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '8 / 22 / 36 / 50 / 64 (+ 10% bonus AD) (+ 45% AP)',
            damagetype: 'None',
            values: [8, 22, 36, 50, 64],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 22 / 36 / 50 / 64',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 10% bonus AD',
              },
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
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '3 / 5 / 7 / 9 / 11%',
            values: [3, 5, 7, 9, 11],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 5 / 7 / 9 / 11%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Terrashape.png',
        description:
          'Active: Qiyana  dashes up to 300 units towards the target location to gather the Element of the nearest  Brush,  River or  Terrain she targeted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'A target Element is required to cast this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Once Terrashape has been learned, Qiyana is automatically given the  Terrain element upon respawning.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Qiyana can cast any of her abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Audacity: {
    effects: [
      {
        img: 'Audacity.png',
        description:
          'Active: Qiyana  dashes a fixed distance in the direction of the target enemy. If they are in range upon arrival, she deals physical damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 90 / 130 / 170 / 210 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [50, 90, 130, 170, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 90 / 130 / 170 / 210',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Qiyana can cast any of her abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Supreme Display of Talent': {
    effects: [
      {
        img: 'Supreme Display of Talent.png',
        description:
          'Active: Qiyana sweeps a windblast in the target direction that  knocks back enemies hit, though not through terrain, and stops upon hitting Terrain.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The windblast creates a cascading shockwave across any River or Brush it passes through, as well as around the borders of Terrain it reaches, dealing physical damage to enemies hit,  stunning them for 0.5 − 1 (based on proximity) seconds, and briefly granting  sight of the area along its path. The damage based on the target's health ratio is capped against  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "100 / 150 / 200 / 250 / 300 (+ 170% bonus AD) (+ 10% of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
            children: [
              {
                values: 170,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 170% bonus AD',
              },
              {
                values: 10,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 10% of target's maximum health",
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Capped Monster Health Damage:',
            raw: '500 / 625 / 750 / 875 / 1000',
            values: [500, 625, 750, 875, 1000],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '500 / 625 / 750 / 875 / 1000',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
