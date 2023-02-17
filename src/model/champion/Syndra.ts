import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Syndra';
export const skillsData = ChampionSkillsData['Syndra'];

export const Syndra = {
  Transcendent: {
    effects: [
      {
        img: 'Transcendent.png',
        description:
          'Innate: Syndra collects Splinters of Wrath that enhance each of her abilities based on the number of them collected, stacking up to 120 times. She gains Splinters of Wrath from the following:\nDealing two instances of ability damage to an enemy champion within 4 seconds grants 1 / 2 / 3 (based on level) Splinters. This cannot occur on the same target more than once every 8 seconds.\nRanking up an ability with any skill points beyond level 1 grants 5 Splinters, up to 85.\nKilling a large minion grants 1 Splinter.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Collecting a Splinter of Wrath from an enemy restores  20 − 215 (based on level) mana. Splinters of Wrath are brought to Syndra from enemies over 0.6 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Transcendent 2.png',
        description:
          'At 120 Splinters of Wrath, Syndra achieves Transcendence, increasing her  ability power by 15%.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Syndra can collect Splinters of Wrath from enemies even if she is at maximum stacks. These Splinters do not grant any stacks, but will still restore mana for Syndra.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dark Sphere': {
    effects: [
      {
        img: 'Dark Sphere.png',
        description:
          'Active: Syndra conjures a Dark Sphere at the target location that appears after a 0.6-second delay, dealing magic damage to nearby enemies. The Dark Sphere then remains on the ground for 6 seconds.',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Dark Sphere 2.png',
        description:
          'Transcendent Bonus: Collecting 40 Splinters of Wrath causes Syndra to periodically stock a Dark Sphere charge, up to a maximum of 2.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Dark Sphere will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Force of Will': {
    effects: [
      {
        img: 'Force of Will.png',
        description:
          'Active: Syndra grabs the nearest  Dark Sphere, enemy  minion or non-epic  monster within 500 units from the target location, and holds the target for 5 seconds. If a Dark Sphere is grabbed, its duration is refreshed; if a minion or monster is grabbed, it is put in  stasis. She prioritizes grabbing the nearest unit, then  Dark Spheres.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Force of Will can be recast while the target is being held.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Force of Will 2.png',
        description:
          'Recast: Syndra throws the grabbed target towards the target location, granting  sight of their surroundings as they fall and dealing magic damage to them and nearby enemies. All targets hit are  slowed for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 70% AP)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
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
            name: 'Slow:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Force of Will 4.png',
        description:
          'Transcendent Bonus: Collecting 60 Splinters of Wrath enhances Force of Will to deal  12% (+ 2% per 100 AP) bonus true damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Scatter the Weak': {
    effects: [
      {
        img: 'Scatter the Weak.png',
        description:
          'Active: Syndra propels a wave of force in a cone in the target direction that deals magic damage to enemies hit and  knocks them back for 400 units and up to 800 units away from Syndra based on proximity, though not through terrain.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 115 / 155 / 195 / 235 (+ 45% AP)',
            damagetype: 'None',
            values: [75, 115, 155, 195, 235],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 115 / 155 / 195 / 235',
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
          "Dark Spheres can be knocked back for 950 units and up to 1200 units away from Syndra based on proximity,  knocking back enemies they hit over 70 units, though not through terrain. Targets hit are also  stunned for 1.25 seconds, during which they are also  revealed, and dealt Scatter the Weak's damage if they were not damaged by the initial cast.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Scatter the Weak 2.png',
        description:
          'Transcendent Bonus: Collecting 80 Splinters of Wrath enhances Scatter the Weak to have an increased scatter angle and  slow enemies hit by 70% for 1.25 seconds starting after the  knock back ends or if the target was hit by a pushed Dark Sphere, after the  stun has ended.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Unleashed Power': {
    effects: [
      {
        img: 'false',
        description: 'Passive:  Dark Sphere gains ability haste.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Ability Haste:',
            raw: '10 / 15 / 20 / 25 / 30',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Unleashed Power.png',
        description:
          'Active: Syndra enters a 0.264 seconds cast time, creating  3 Dark Spheres and grabbing up to 4 nearby Dark Spheres that were last spawned. Afterwards, the collected Dark Spheres are hurled in a volley at the target enemy champion, each dealing magic damage upon hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Sphere:',
            raw: '90 / 110 / 130 / 150 / 170 (+ 17% AP)',
            damagetype: 'None',
            values: [90, 110, 130, 150, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 110 / 130 / 150 / 170',
            children: [
              {
                values: 17,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 17% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '270 / 330 / 390 / 450 / 510 (+ 51% AP)',
            damagetype: 'None',
            values: [270, 330, 390, 450, 510],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '270 / 330 / 390 / 450 / 510',
            children: [
              {
                values: 51,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 51% AP',
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
          'The  Dark Spheres will then remain on the ground for 6 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Unleashed Power 2.png',
        description:
          'Transcendent Bonus: Collecting 100 Splinters of Wrath enhances Unleashed Power to  execute the target if it would damage them to below  15% of their maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
