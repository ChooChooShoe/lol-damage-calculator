import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Lux';
export const skillsData = ChampionSkillsData['Lux'];

export const Lux = {
  Illumination: {
    effects: [
      {
        img: 'Illumination.png',
        description:
          "Innate: Lux's abilities apply a mark to enemies hit for 6 seconds, refeshing on subsequent hits. Lux's basic attacks and  Final Spark consume the mark to deal 20 − 190 (based on level) (+ 20% AP) bonus magic damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Light Binding': {
    effects: [
      {
        img: 'Light Binding.png',
        description:
          'Active: Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and  roots them for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 60% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
    ],
  },
  'Prismatic Barrier': {
    effects: [
      {
        img: 'Prismatic Barrier.png',
        description:
          'Active: Lux throws her wand in the target direction that homes back to her after reaching maximum range. Allied champions hit by the wand gain a  shield for 2.5 seconds, which can stack up to 2 times, stacking with the previous shield and refreshing its duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 35% AP)',
            damagetype: 'None',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
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
        description:
          'Lux receives the shield upon throwing the wand and upon its return.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Lucent Singularity': {
    effects: [
      {
        img: 'Lucent Singularity.png',
        description:
          'Active: Lux sends a lucent singularity to the target location, remaining there for 5 seconds to grant  sight of the area and  slow nearby enemies.',
        leveling: [
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
        img: '',
        description:
          'Lucent Singularity can be recast at any time while it is in flight or within the duration, and does so automatically after the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Lux detonates the singularity, dealing magic damage to enemies within. If Lucent Singularity was recast while in flight, it will detonate upon arrival.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 80% AP)',
            damagetype: 'None',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
          "The slow lingers for 1 second after leaving the area. Enemies hit by Lucent Singularity's detonation are also slowed by the same amount for 1 second.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Final Spark': {
    effects: [
      {
        img: 'Final Spark.png',
        description:
          'Active: Lux fires a massive laser in a line in the target direction that deals magic damage to enemies hit and  reveals them for 1.5 seconds, as well as granting  sight of the surrounding area.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '300 / 350 / 400 / 450 / 500 (+ 120% AP)',
            damagetype: 'None',
            values: [300, 350, 400, 450, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 350 / 400 / 450 / 500',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
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
