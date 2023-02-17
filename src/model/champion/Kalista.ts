import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Kalista';
export const skillsData = ChampionSkillsData['Kalista'];

export const Kalista = {
  'Martial Poise': {
    effects: [
      {
        img: 'Martial Poise.png',
        description:
          "Innate: Whenever Kalista inputs a movement command during her  basic attack windup or the cast time of  Pierce, she will  dash in the target direction.Kalista's dash from Martial Poise will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug).",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The range and speed of Martial Poise are modified by the tier of Kalista's Boots. The base range when dashing from a basic attack is 250 / 265 / 280 (based on Boots Tier) units. This base distance is reduced when dashing toward the direction of her attack, to a minimum of 150 / 165 / 180 (based on Boots Tier) units.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The base range when dashing from  Pierce's cast is increased「 by 50 units. 」「 to 300 / 315 / 330 (based on Boots Tier) units. 」If dashing away from the point of cast, the dash range is reduced, to a minimum of 165 / 180 / 195 (based on Boots Tier) units.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Innate - Oathsworn Bond: Kalista begins the game with an exclusive  Black Spear.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Pierce: {
    effects: [
      {
        img: 'Pierce.png',
        description:
          'Active: Kalista launches a spear in the target direction that deals physical damage to the first enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 85 / 150 / 215 / 280 (+ 100% AD)',
            damagetype: 'None',
            values: [20, 85, 150, 215, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 85 / 150 / 215 / 280',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
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
          "If Pierce kills the target, the spear continues onward to transfer all of the target's  Rend stacks to the next enemy it hits. This can repeat indefinitely until the spear reaches its maximum range.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Sentinel: {
    effects: [
      {
        img: 'Sentinel 2.png',
        description:
          'Passive - Soul-Marked: While Kalista and her  Oathsworn are  tethered, their basic attacks and  Pierce apply a Soul-Mark to their targets.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sentinel 3.png',
        description:
          "If both Soul-Marks are applied to the same target within 4 seconds, they take bonus magic damage, capped against non-champions, and cannot be Soul-Marked again for a few seconds. Soul-Mark deals a minimum of 75 damage to  minions, executes them if they're below  125 health, and is capped against non-champions. Kalista applies the damage on-attack while the Oathsworn does so  on-hit.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "14 / 15 / 16 / 17 / 18% of target's maximum health",
            healType: 'OutgoingHeals',
            values: [14, 15, 16, 17, 18],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "14 / 15 / 16 / 17 / 18% of target's maximum health",
          },
          {
            effectType: 'Unique',
            name: 'Maximum Non-Champion Damage:',
            raw: '100 / 125 / 150 / 175 / 200',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sentinel.png',
        description:
          'Active: Kalista summons a Sentinel that patrols back and forth on a path along the target location, granting  sight of its surroundings as it travels.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Kalista periodically stocks a Sentinel charge, up to a maximum of 2.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about Sentinels.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Rend: {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Kalista's basic attacks  on-hit and  Pierce apply a stack of Rend to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Rend.png',
        description:
          'Active: Kalista rips all lodged spears from nearby enemies, consuming all of their stacks to deal them physical damage and  slow them for 2 seconds. Each additional spear on the target deals reduced damage. Rend deals 50% reduced damage against epic  monsters.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 70% AD)',
            damagetype: 'None',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 70% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '10 / 18 / 26 / 34 / 42%',
            values: [10, 18, 26, 34, 42],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 18 / 26 / 34 / 42%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Rend kills at least one target, the  cooldown is reset and Kalista restores  mana.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
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
        img: '',
        description:
          "A nearby enemy with a Rend stack is required to cast this ability. Rend can be used during the dash of  Martial Poise and the cast time of  Pierce. In-flight spears and  Pierce if in cast will be empowered to apply Rend's effects to their targets. These empowered spears can also trigger Rend's refund.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Fate's Call": {
    effects: [
      {
        img: "Fate's Call.png",
        description:
          'Active: Kalista invokes her  tether to retrieve her Oathsworn and hold them for 4 seconds,  pulling them to her over 1 second and  cleansing them from all  crowd control, as well as rendering them  invulnerable and  untargetable for the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "While held, the Oathsworn is  vanished and may  dash with  displacement immunity to end Fate's Call's effects and reappear at the target location; after the duration, they will automatically do so at maximum range from Kalista's facing direction. The Oathsworn stops upon colliding with an enemy  champion,  knocking up all nearby enemies for a duration and landing to their  basic attack range from the target collided with.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Knockup Duration:',
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
          "The Oathsworn must be nearby to cast this ability, and is also  silenced and unable to perform movement or attack commands while Fate's Call is in effect.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
