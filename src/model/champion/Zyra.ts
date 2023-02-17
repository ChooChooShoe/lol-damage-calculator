import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Zyra';
export const skillsData = ChampionSkillsData['Zyra'];

export const Zyra = {
  'Garden of Thorns': {
    effects: [
      {
        img: 'Garden of Thorns.png',
        description:
          'Innate: Periodically, Zyra spawns one or two Seeds nearby that last for 30 seconds, granting  sight over the surrounding area for 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After 1 second, enemy  champions can destroy Seeds by stepping on them.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Zyra can only have a total of 8 Seeds planted at a time, preserving Seeds spawned by  Rampant Growth over Seeds spawned by Garden of Thorns.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Deadly Spines': {
    effects: [
      {
        img: 'Deadly Spines.png',
        description:
          'Active: Zyra sprouts thorny spines at the target location that appear after a 0.625-seconds delay, dealing magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 60% AP)',
            damagetype: 'None',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
          'If Deadly Spine hits a Seed, it sprouts into a  Thorn Spitter that remains for 8 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Rampant Growth': {
    effects: [
      {
        img: 'Rampant Growth.png',
        description:
          'Active: Zyra plants a Seed at the target location that remains for 60 seconds and grants  sight over the surrounding area, though decreasing in radius after 1 second. After 1.5 seconds, enemy champions can destroy the Seed by stepping on it, which  reveals them for 2 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Zyra periodically stocks a Seed charge, up to a maximum of 2. Killing an enemy generates 20% charge toward a Seed, increased to 100% for large enemies and whenever scoring an enemy  champion  takedown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Grasping Roots': {
    effects: [
      {
        img: 'Grasping Roots.png',
        description:
          'Active: Zyra shoots a surge of vines in the target direction that deals magic damage to enemies hit and  roots them for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 50% AP)',
            damagetype: 'None',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
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
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Grasping Roots hits a Seed, it sprouts into a  Vine Lasher, which remains on the battlefield for 8 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Stranglethorns: {
    effects: [
      {
        img: 'Stranglethorns.png',
        description:
          'Active: Zyra summons a monstrous thicket at the target location that deals magic damage to enemies hit as it expands.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '180 / 222.5 / 265 / 307.5 / 350 (+ 70% AP)',
            damagetype: 'None',
            values: [180, 222.5, 265, 307.5, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '180 / 222.5 / 265 / 307.5 / 350',
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
        img: '',
        description:
          'After 2 seconds, the thicket snaps upward to  knock up enemies within for 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Plants hit by the thicket become enraged, restoring  50% of their current health, increasing their  maximum health by 50%, gaining 25% increased size and refreshing their duration while the thicket expands. Additionally they attack in a flurry, launching two shots per attack, dealing 「 150% damage per flurry. 」「 75% damage per shot. 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
