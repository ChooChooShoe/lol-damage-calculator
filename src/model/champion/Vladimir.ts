import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Vladimir';
export const skillsData = ChampionSkillsData['Vladimir'];

export const Vladimir = {
  'Crimson Pact': {
    effects: [
      {
        img: 'Crimson Pact.png',
        description:
          'Innate: Vladimir gains (3.3% bonus health) as  ability power and (160% AP) as  bonus health. These two bonuses do not stack with each other.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Transfusion: {
    effects: [
      {
        img: 'Transfusion.png',
        description:
          'Active: Vladimir drains blood from the target enemy, dealing magic damage and  healing himself. He then generates a stack of  Bloodthirst over the  cooldown, which is displayed in his secondary resource bar.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 100 / 120 / 140 / 160 (+ 60% AP)',
            damagetype: 'None',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
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
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 35% AP)',
            damagetype: 'None',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
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
          'At 2 stacks, Vladimir gains  10% / 20% / 30% / 40% (based on level) bonus movement speed for 0.5 seconds, and enters Crimson Rush while the  Bloodthirst depletes over 2.5 seconds. The  Bloodthirst depletes 75% slower during  Sanguine Pool,  Tides of Blood, or  stasis.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Crimson Rush.png',
        description:
          'Crimson Rush Bonus: Transfusion consumes all  Bloodthirst to deal  85% increased damage and heal Vladimir for an additional 30 − 200 (based on level) (+ 5% (+ 4% per 100 AP) missing health), reduced to 35% against  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '148 / 185 / 222 / 259 / 296 (+ 111% AP)',
            damagetype: 'None',
            values: [148, 185, 222, 259, 296],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '148 / 185 / 222 / 259 / 296',
            children: [
              {
                values: 111,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 111% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Sanguine Pool': {
    effects: [
      {
        img: 'Sanguine Pool.png',
        description:
          'Active: Vladimir sinks into a pool of blood, becoming  untargetable and  ghosted for 2 seconds. He also gains  37.5% bonus movement speed that decays exponentially over 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies within the pool are dealt magic damage every 0.5 seconds over the duration and are  slowed by 40%. Vladimir  heals himself for 15% of the pre-mitigation damage dealt.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage Per Tick:',
            raw: '20 / 33.75 / 47.5 / 61.25 / 75 (+ 2.5% bonus health)',
            healType: 'BonusHealth',
            values: [20, 33.75, 47.5, 61.25, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 33.75 / 47.5 / 61.25 / 75',
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 2.5% bonus health',
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
          "Vladimir cannot use basic attacks nor abilities during Sanguine Pool, but he can still move. If  Tides of Blood is charging at the time of Sanguine Pool's activation, that ability may still be recast.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tides of Blood': {
    effects: [
      {
        img: 'Tides of Blood.png',
        description:
          "Active: Vladimir  charges for up to 1.5 seconds, during which he increases Tides of Blood's damage over the first second of the channel, and becomes  slowed by 20% afterwards for the remaining duration. Tides of Blood can be recast within the duration, and does so automatically afterwards or if it is  interrupted.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Vladimir unleashes a nova of 15 blood bolts around himself that each deal magic damage to the first enemy hit, increased based on charge time, up to the first second.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Minimum Magic Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 1.5% maximum health) (+ 35% AP)',
            healType: 'BonusHealth',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 1.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 1.5% maximum health',
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
        img: '',
        description:
          'If Tides of Blood was charged for at least 1 second, enemies hit are also  slowed for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies can intercept multiple bolts, but can be damaged only once.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Vladimir is below 12% of his maximum health, Tides of Blood will not cost any health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Hemoplague: {
    effects: [
      {
        img: 'Hemoplague.png',
        description:
          'Active: Vladimir spreads a virulent plague at the target location that infects enemies hit for 4 seconds, increasing the damage they take from all sources by 10%.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After the duration, the infection bursts to deal magic damage to all affected targets and, after a 0.4-second delay,  heal Vladimir for each infected champion, reduced by 40% for subsequent champions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 70% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
            effectType: 'Damage',
            name: 'Heal:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 70% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
