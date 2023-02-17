import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Maokai';
export const skillsData = ChampionSkillsData['Maokai'];

export const Maokai = {
  'Sap Magic': {
    effects: [
      {
        img: 'Sap Magic.png',
        description:
          'Innate: Periodically, Maokai empowers his next basic attack to have an  uncancellable windup and  heal him for 4 − 34 (based on level) (+ 4% − 12% (based on level) maximum health) after a 0.25-second delay.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sap Magic 2.png',
        description:
          "Each time Maokai casts an ability, hits at least one enemy champion or epic monster with  Sapling Toss, or is struck by an enemy's ability, Sap Magic's  cooldown is reduced by 4 seconds, modified to 1.5 if he is hit by a large  monster's basic attack or ability.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Sap Magic  resets Maokai's basic attack timer, and will not trigger if he is above 95% maximum  health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bramble Smash': {
    effects: [
      {
        img: 'Bramble Smash.png',
        description:
          'Active: Maokai sends a shockwave in the target direction that deals magic damage to enemies hit and  slows them by 99% for 0.25 seconds. Bramble Smash deals bonus magic damage to  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "70 / 120 / 170 / 220 / 270 (+ 2 / 2.25 / 2.5 / 2.75 / 3% of the target's maximum health) (+ 40% AP)",
            healType: 'OutgoingHeals',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
            children: [
              {
                values: [2, 2.25, 2.5, 2.75, 3],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of the target's maximum health",
                pre: "+ 2 / 2.25 / 2.5 / 2.75 / 3% of the target's maximum health",
              },
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Monster Damage:',
            raw: '100 / 120 / 140 / 160 / 180',
            values: [100, 120, 140, 160, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 120 / 140 / 160 / 180',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies near Maokai are also  stunned for 0.5 seconds and  knocked back up to 300 units based on their proximity to him.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Twisted Advance': {
    effects: [
      {
        img: 'Twisted Advance.png',
        description:
          'Active: Maokai  dashes to the target enemy while being  untargetable. Upon arrival, he deals magic damage and  roots them for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 40% AP)',
            damagetype: 'None',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1 / 1.1 / 1.2 / 1.3 / 1.4',
            values: [1, 1.1, 1.2, 1.3, 1.4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.1 / 1.2 / 1.3 / 1.4',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Sapling Toss': {
    effects: [
      {
        img: 'Sapling Toss.png',
        description:
          'Active: Maokai  flings a Sapling to the target location, granting  sight of the area.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Once landed, a Sapling remains stationary for 30 seconds or until it reacts to the first nearby visible enemy, chasing them for up to 2.5 seconds. The Sapling explodes upon colliding with an enemy or when it expires, dealing magic damage to nearby enemies, capped at 300 against non-champions, and  slowing them by 45% for 2 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 5% bonus health) (+ 35% AP)',
            healType: 'BonusHealth',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 5% bonus health',
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
          'A Sapling placed in  brush instead lasts 30 (+ 2.5% bonus health) seconds, deals double damage to struck non- minion targets over 3 bursts, and  slows them by 45% (+ 0.9% per 100 bonus health) (+ 4% per 100 AP), as well as  reveals them for 3 seconds. The first instance of damage is dealt instantly and the second and third instances occur each 0.75 seconds thereafter. The total damage is capped at 600 against non-champions.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Total Enhanced Damage:',
            raw: '110 / 160 / 210 / 260 / 310 (+ 10% bonus health) (+ 70% AP)',
            healType: 'BonusHealth',
            values: [110, 160, 210, 260, 310],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '110 / 160 / 210 / 260 / 310',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 10% bonus health',
              },
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
        description: 'See Pets for more details about Saplings.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Nature's Grasp": {
    effects: [
      {
        img: "Nature's Grasp.png",
        description:
          'Active: Maokai summons a colossal wall of five thorny brambles that slowly advances in the target direction, accelerating over time, each stopping when they collide with an enemy  champion. Hitting at least one enemy champion grants Maokai  bonus movement speed decaying over 2 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
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
          'Each bramble deals magic damage to enemies hit and  roots them for 0.8 − 2.6 (based on distance traveled) seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 225 / 300 (+ 75% AP)',
            damagetype: 'None',
            values: [150, 225, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 225 / 300',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
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
