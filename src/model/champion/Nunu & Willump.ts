import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Nunu & Willump';
export const skillsData = ChampionSkillsData['Nunu & Willump'];

export const NunuWillump = {
  'Call of the Freljord': {
    effects: [
      {
        img: 'Call of the Freljord.png',
        description:
          'Innate: When Nunu and Willump deal damage against an enemy  champion, large  monster or  structure, they and a nearby allied champion gain Call of the Freljord for 4 seconds, prioritizing the ally with  highest attack speed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Call of the Freljord: Gain  20% bonus attack speed and  10% bonus movement speed. Willump's basic attacks additionally deal 30% AD physical damage to secondary targets in a cone in front of him.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Nunu and Willump cannot trigger Call of the Freljord from the same enemy again for a time. Successive triggers of Call of the Freljord while it is active will extend the duration by 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Consume: {
    effects: [
      {
        img: 'Consume.png',
        description:
          'Active: Willump takes a bite out of the target enemy, dealing damage and  healing himself. The heal is increased by 50% while he is below 50% maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Against  minions and  monsters, he deals  true damage. Additionally, if Consume would kill the target minion or small or medium monster, the target is  stunned and  pulled towards Willump over the cast time.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Non-Champion True Damage:',
            raw: '400 / 600 / 800 / 1000 / 1200',
            values: [400, 600, 800, 1000, 1200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '400 / 600 / 800 / 1000 / 1200',
          },
          {
            effectType: 'Heal',
            name: 'Base Non-Champion Heal:',
            raw: '65 / 95 / 125 / 155 / 185 (+ 90% AP) (+ 10% bonus health)',
            healType: 'BonusHealth',
            values: [65, 95, 125, 155, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 95 / 125 / 155 / 185',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 10% bonus health',
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
          'Against  champions, he deals magic damage and the heal is reduced to 60%.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Champion Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 65% AP) (+ 5% bonus health)',
            healType: 'BonusHealth',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 5% bonus health',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Base Champion Heal:',
            raw: '39 / 57 / 75 / 93 / 111 (+ 54% AP) (+ 6% bonus health)',
            healType: 'BonusHealth',
            values: [39, 57, 75, 93, 111],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '39 / 57 / 75 / 93 / 111',
            children: [
              {
                values: 54,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 54% AP',
              },
              {
                values: 6,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 6% bonus health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Biggest Snowball Ever!': {
    effects: [
      {
        img: 'Biggest Snowball Ever!.png',
        description:
          'Active: Willump  cleanses himself from all  slows and  channels for up to 10 seconds, becoming  ghosted and  slow-immune and creating a rolling  snowball. Willump automatically navigates his movement and can steer the snowball with a slow turn rate that increases over time, resetting upon changing direction. The duo have their  movement speed reduced by 50% for the first 1 second, but after a delay they start gaining 14 movement speed every 0.25 seconds, up to a cap.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The snowball increases in size and power over 5 seconds. Biggest Snowball Ever! can be recast after 0.5 seconds during the channel, and does so automatically after the channel or if  interrupted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The snowball explodes upon hitting an enemy  champion,  large pet, medium / large  monster or terrain, dealing magic damage to nearby enemies, increased by 0% − 400% (based on charge time),  knocking them up for 0.5 − 0.75 (based on charge time) seconds and subsequently  stunning them for 0 − 0.5 (based on charge time) seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '36 / 45 / 54 / 63 / 72 (+ 30% AP)',
            damagetype: 'None',
            values: [36, 45, 54, 63, 72],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '36 / 45 / 54 / 63 / 72',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
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
          'The snowball rolls over enemy  minions and small monsters hit, dealing 33.3% of the damage as magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Reduced Damage:',
            raw: '11.988 / 14.985 / 17.982 / 20.979 / 23.976 (+ 9.99% AP)',
            damagetype: 'None',
            values: [11.988, 14.985, 17.982, 20.979, 23.976],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '11.988 / 14.985 / 17.982 / 20.979 / 23.976',
            children: [
              {
                values: 9.99,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 9.99% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Biggest Snowball Ever! 2.png',
        description:
          'Recast: Willump releases the snowball, sending it rolling forward up to a maximum distance during which it will not grow any larger and will explode upon hitting an enemy.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Snowball Barrage': {
    effects: [
      {
        img: 'Snowball Barrage.png',
        description:
          'Active: Nunu swiftly throws a volley of 3 snowballs in the target direction over 0.4 seconds that each shatter upon hitting an enemy, dealing magic damage to enemies in a cone.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Hit:',
            raw: '16 / 24 / 32 / 40 / 48 (+ 10% AP)',
            damagetype: 'None',
            values: [16, 24, 32, 40, 48],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '16 / 24 / 32 / 40 / 48',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
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
          'Enemies hit 3 times are  slowed for 1 second.  Champions and large  monsters hit once are marked Snowbound for 4 seconds, refreshing on each hit. Snowball Barrage can be recast twice within 3 seconds at no additional cost and with a cooldown in between casts.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Recast: Nunu hurls another volley of snowballs, mimicking the first cast's effects. An enemy may only be  slowed once for being hit by snowballs.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Maximum Total Magic Damage:',
            raw: '144 / 216 / 288 / 360 / 432 (+ 90% AP)',
            damagetype: 'None',
            values: [144, 216, 288, 360, 432],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '144 / 216 / 288 / 360 / 432',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
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
          'After 3 seconds from the first cast, Snowbound enemies near Willump take magic damage and are  rooted for 0.5 − 1.5 (based on level) seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 80% AP)',
            damagetype: 'None',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
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
    ],
  },
  'Absolute Zero': {
    effects: [
      {
        img: 'Absolute Zero.png',
        description:
          'Active: Nunu and Willump  channel a blizzard for up to 3 seconds, granting themself a  shield and  slowing nearby enemies by 0% − 95% (based on channel time).',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '65 / 70 / 75 / 80 / 85 (+ 150% AP) (+ 30 / 35 / 40 / 45 / 50% bonus health)',
            healType: 'BonusHealth',
            values: [65, 70, 75, 80, 85],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 70 / 75 / 80 / 85',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
              },
              {
                values: [30, 35, 40, 45, 50],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 30 / 35 / 40 / 45 / 50% bonus health',
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
          'Absolute Zero can be recast after 0.5 seconds during the channel, and does so automatically when the channel ends by any means.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Absolute Zero 2.png',
        description:
          "Recast: Nunu and Willump explode, dealing magic damage to nearby enemies, modified to 0% − 100% (based on channel time). Affected enemies will remain  slowed for 0 − 3 (based on channel time) seconds and any of the duo's remaining shield will decay over 3 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '625 / 787.5 / 950 / 1112.5 / 1275 (+ 300% AP)',
            damagetype: 'None',
            values: [625, 787.5, 950, 1112.5, 1275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '625 / 787.5 / 950 / 1112.5 / 1275',
            children: [
              {
                values: 300,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 300% AP',
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
