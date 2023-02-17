import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Aurelion Sol';
export const skillsData = ChampionSkillsData['Aurelion Sol'];

export const AurelionSol = {
  'Cosmic Creator': {
    effects: [
      {
        img: 'Cosmic Creator.png',
        description:
          "Innate: Aurelion Sol's damaging abilities against enemies grant him stacks of Stardust, which improve each of his abilities. The amount of Stardust collected by each ability may vary by target.\n Breath of Light: Bursts deal bonus magic damage equal to (0.031% Stardust stacks) of the target's maximum health.\n Astral Flight: Range is increased by 62.5% Stardust stacks.\n Singularity: Outer and inner radius increased by 15% Stardust stacks, and execution threshold increased by 2.6% Stardust stacks.\n Falling Star and  The Skies Descend: Effect radius increased by 15% Stardust stacks.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Breath of Light': {
    effects: [
      {
        img: 'Breath of Light.png',
        description:
          'Active: Aurelion Sol  charges for up to 3.25 seconds to exhale a beam of starfire, during which he can steer the beam in the target direction. The beam collides with the first enemy hit,  reveals them, and deals them magic damage every 0.125 seconds, reduced to 50% for other surrounding enemies hit by the beam.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '3.75 − 11.25 (based on level) (+ 1.875 / 3.125 / 4.375 / 5.625 / 6.875) (+ 7.5% AP)',
            damagetype: 'None',
            values: [
              3.75, 4.19, 4.63, 5.07, 5.51, 5.96, 6.4, 6.84, 7.28, 7.72, 8.16,
              8.6, 9.04, 9.49, 9.93, 10.37, 10.81, 11.25,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3.75 − 11.25',
            children: [
              {
                values: [1.875, 3.125, 4.375, 5.625, 6.875],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 1.875 / 3.125 / 4.375 / 5.625 / 6.875',
              },
              {
                values: 7.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7.5% AP',
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
          'Breath of Light can be recast within the duration, and does so automatically afterwards.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "For each second that the beam continuously damages the same enemy, it bursts to deal  bonus magic damage and grants 1 Stardust if the target is a  champion. The damage based on the target's health ratio is capped at 300 against  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "20 − 40 (based on level) (+ 40 / 50 / 60 / 70 / 80) (+ 40% AP) (+ (0.031% Stardust stacks) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [
              20, 21.18, 22.35, 23.53, 24.71, 25.88, 27.06, 28.24, 29.41, 30.59,
              31.76, 32.94, 34.12, 35.29, 36.47, 37.65, 38.82, 40,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '+',
            pre: '20 − 40',
            post: '+',
            children: [
              {
                values: [40, 50, 60, 70, 80],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 40 / 50 / 60 / 70 / 80',
              },
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: 0.031,
                valuesIsPercent: true,
                user: 'player',
                units: 'feastStacks',
                unitsText: 'Stardust stacks',
                pre: '0.031% Stardust stacks',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Recast: Aurelion Sol ends Breath of Light early.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "At rank 5, Breath of Light's channel duration lasts for as long as Aurelion Sol can pay its mana cost.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Astral Flight': {
    effects: [
      {
        img: 'Astral Flight.png',
        description:
          "Active: Aurelion Sol  dashes in the target direction and resets  Breath of Light's  cooldown. While in flight, he has  unobstructed vision and  Breath of Light has no cooldown and maximum channel duration and its flat damage is increased, but Astral Flight's dash speed is reduced by 50% during its channel.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Breath of Light Flat Damage Modifier:',
            raw: '114 / 115.5 / 117 / 118.5 / 120%',
            values: [114, 115.5, 117, 118.5, 120],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '114 / 115.5 / 117 / 118.5 / 120%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Aurelion Sol will be  knocked down by any  immobilizing crowd control during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Astral Flight can be recast after 0.5 seconds during the dash, and does so automatically after reaching the destination.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Astral Flight 2.png',
        description: 'Recast: Aurelion Sol ends Astral Flight early.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Scoring a champion  takedown within 3 seconds of damaging them reduces Astral Flight's  current cooldown by 90% of its total cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Singularity: {
    effects: [
      {
        img: 'Singularity.png',
        description:
          'Active: Aurelion Sol blasts the target location, conjuring a black hole after a 0.5-second delay that lasts for 5 seconds, grants  sight of the area, and deals magic damage every 0.25 seconds to enemies within the area.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '2.5 / 3.75 / 5 / 6.25 / 7.5 (+ 6.25% AP)',
            damagetype: 'None',
            values: [2.5, 3.75, 5, 6.25, 7.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2.5 / 3.75 / 5 / 6.25 / 7.5',
            children: [
              {
                values: 6.25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 6.25% AP',
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
          'Enemies in the black hole are  dragged toward its center over the duration. Non-epic monster targets within the center that are below 5% (+ 2.6% Stardust stacks) of their maximum health are also  executed. Additionally, non-champions affected have their movement speed reduced to 0.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After Singularity ends, Aurelion Sol is granted 1 Stardust for each continuous second that enemy champions were inside it, and a varying amount of Stardust for enemies that died while within the area:\nChampions and epic monsters grant 5 Stardust.\nLarge minions and monsters grant 3 Stardust.\nSmall minions and monsters grant 1 Stardust.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Falling Star': {
    effects: [
      {
        img: 'Falling Star.png',
        description:
          'Active: Aurelion Sol calls down a star to impact the target location after 1.25 seconds, dealing magic damage to enemies hit and  stunning them for 1.25 seconds. Falling Star grants 5 Stardust for each enemy champion hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 65% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
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
          'Once Falling Star has been learned, gathering 75 Stardust causes the next cast of Falling Star to transform into  The Skies Descend instead, empowering the impact with new effects.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
