import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Zoe';
export const skillsData = ChampionSkillsData['Zoe'];

export const Zoe = {
  'More Sparkles!': {
    effects: [
      {
        img: 'More Sparkles!.png',
        description:
          'Innate: After casting an ability, Zoe empowers her next basic attack or  Spell Thief bolt within 5 seconds to become  non-projectile and deal 16 − 130 (based on level) (+ 20% AP) bonus magic damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Paddle Star': {
    effects: [
      {
        img: 'Paddle Star.png',
        description:
          'Active: Zoe shoots a star in the target direction that explodes upon hitting an enemy, dealing magic damage to nearby enemies hit, reduced to 80% for enemies hit beyond the first. The total damage is increased by 0% − 150% (based on distance traveled).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '7 − 50 (based on level) (+ 50 / 80 / 110 / 140 / 170) (+ 60% AP)',
            damagetype: 'None',
            values: [
              7, 9.53, 12.06, 14.59, 17.12, 19.65, 22.18, 24.71, 27.24, 29.76,
              32.29, 34.82, 37.35, 39.88, 42.41, 44.94, 47.47, 50,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 − 50',
            children: [
              {
                values: [50, 80, 110, 140, 170],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 50 / 80 / 110 / 140 / 170',
              },
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
          'The star lingers at maximum range for 1 second, during which Paddle Star can be recast after 0.25 seconds in the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Paddle Star 2.png',
        description:
          'Recast: Zoe redirects the star in the target path, empowering it with increased speed and radius, and resetting its damage modifier on cast. The redirected star can travel until it reaches 800-units outbound from Zoe.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Paddle Star's recast can be used while affected by  cast-inhibiting crowd control.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spell Thief': {
    effects: [
      {
        img: 'Zoe Spell Thief 2.png',
        description:
          'Passive - Wheeeee: Whenever Zoe casts Spell Thief or a summoner spell, she gains  bonus movement speed for a duration, and summons three bolts that orbit her for the next 10 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '30 / 40 / 50 / 60 / 70%',
            values: [30, 40, 50, 60, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed Duration:',
            raw: '2 / 2.25 / 2.5 / 2.75 / 3',
            values: [2, 2.25, 2.5, 2.75, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.25 / 2.5 / 2.75 / 3',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Zoe is not affected by  complete crowd control, she shoots one bolt at a time at the nearest non- sleeping enemy in range, prioritizing her attack target, dealing magic damage with each bolt.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Bolt:',
            raw: '25 / 35 / 45 / 55 / 65 (+ 13.3% AP)',
            damagetype: 'None',
            values: [25, 35, 45, 55, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
            children: [
              {
                values: 13.3,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 13.3% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Spell Thief.png',
        description:
          'Passive: Whenever an enemy champion casts a  summoner spell or  item active, they drop the corresponding  Spell Shard onto the ground that grants  sight over a 100-radius area and remains for 40 seconds. Enemy  minions have a 10% chance to spawn with a random Spell Shard that drops and remains for 20 seconds if Zoe kills them. Allied champions that kill them will cause the orb to drop only if Zoe is nearby.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Zoe can collect a Spell Shard for 60 seconds, and replace it by moving directly onto another Spell Shard.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Active: Zoe mimics the active of the collected Spell Shard.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Sleepy Trouble Bubble': {
    effects: [
      {
        img: 'Sleepy Trouble Bubble.png',
        description:
          'Active: Zoe kicks a bubble in the target direction that bursts upon the first enemy hit, otherwise lingering at maximum range over 1 second, then becoming a trap for 5 seconds that bursts upon contact with an enemy. The bubble can move through terrain only once, but travels the entire distance as bonus range, and will fall short if it would enter terrain again.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The burst deals magic damage to the target and inflicts them with  drowsy for 1.4 seconds, which gradually  slows them until they fall  asleep for 2.25 seconds. While the target is  asleep, they are inflicted with  magic resistance reduction.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 45% AP)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
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
          {
            effectType: 'Unique',
            name: 'Maximum Slow:',
            raw: '10 / 15 / 20 / 25 / 30%',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
          },
          {
            effectType: 'Unique',
            name: 'Magic Resistance Reduction:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The next instance of non- persistent damage that the  sleeping target takes from  champions, large  monsters or  structures consumes the debuff to deal  bonus true damage equal to the post-mitigation damage dealt, capped at Sleepy Trouble Bubble's damage. The bonus damage is dealt before the triggering damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Damage Cap:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 45% AP)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
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
  'Portal Jump': {
    effects: [
      {
        img: 'Portal Jump.png',
        description:
          'Active: Zoe  blinks in the target direction and remains there for 0.75 seconds, during which she sets her movement speed to a static 0 and has  unobstructed vision. Afterwards, she  blinks back to her casting position.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Portal Jump  resets Zoe's basic attack timer. Zoe is unable to basic attack and cast her abilities and movement spells for 0.75 seconds after casting Portal Jump and for 0.5 seconds after blinking back.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
