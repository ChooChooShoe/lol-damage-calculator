import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Renata Glasc';
export const skillsData = ChampionSkillsData['Renata Glasc'];

export const RenataGlasc = {
  Leverage: {
    effects: [
      {
        img: 'Renata Glasc Leverage.png',
        description:
          "Innate: Renata's basic attacks are empowered to apply a mark that lasts 6 seconds, refreshes on subsequent hits and expires when attacking a new enemy. If the enemy was unmarked, the attack also deals bonus magic damage equal to 1% − 2% (based on level) (+ 2% per 100 AP) of the target's maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal additional bonus magic damage equal to 1% − 2% (based on level) (+ 2% per 100 AP) of the target's maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Leverage's damage is capped at 150 against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Handshake: {
    effects: [
      {
        img: 'Renata Glasc Handshake.png',
        description:
          'Active: Renata fires a hook in the target direction that deals magic damage to the first enemy hit and  roots them for 1 second, during which they are  revealed.If the  root was applied, Renata forms a  tether between her and the target for the same duration, causing Renata to become unable to declare attacks and have her movement speed reduced by 30%.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
            damagetype: 'None',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
        description: 'Handshake can be recast while the tether is active.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Renata Glasc Handshake 2.png',
        description:
          'Recast: Renata breaks the tether to  knock the target in the target direction, though not through terrain, dealing the same damage to enemies they pass through. If the thrown target is a  champion, all secondary targets hit are  stunned for 0.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Bailout: {
    effects: [
      {
        img: 'Renata Glasc Bailout.png',
        description:
          "Active: Renata infuses herself or the target allied champion with a chemtech formula for 5 seconds, granting the target  bonus attack speed in addition to  bonus movement speed while they are facing nearby  visible enemy champions and minions, both increasing in effectiveness by 100% over the duration. Bailout's duration resets whenever the target scores a  takedown against an enemy champion within 6 seconds of damaging them.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Speed:',
            raw: '10 / 15 / 20 / 25 / 30% (+ 1% per 100 AP)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '10 / 12.5 / 15 / 17.5 / 20% (+ 1% per 100 AP)',
            damagetype: 'None',
            values: [10, 12.5, 15, 17.5, 20],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 12.5 / 15 / 17.5 / 20%',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
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
          "If the target takes  fatal damage while Bailout is active, they are restored to 100% of their maximum health but suffer a  true damage burn equal to 10% of their maximum health every 0.264 seconds until they die from reaching 0 health, during which Bailout's duration resets every 0.25 seconds. This effect may occur only once per application of Bailout while the target already has the buff and is not burning.During this time, if they score a  takedown against an enemy champion within 6 seconds of damaging them, the burn is stopped prematurely and they are set to 20% of their maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Loyalty Program': {
    effects: [
      {
        img: 'Renata Glasc Loyalty Program.png',
        description:
          'Active: Renata sends out chemtech rockets from either side of her that instantly strike targets around her. After 0.429 seconds they converge and travel to the target location as a single missile, striking targets along its path and exploding upon reaching the target location.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Renata and allies struck are granted a  shield for 3 seconds and enemies struck are dealt magic damage and  slowed by 30% for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '65 / 95 / 125 / 155 / 185 (+ 55% AP)',
            damagetype: 'None',
            values: [65, 95, 125, 155, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 95 / 125 / 155 / 185',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '50 / 65 / 80 / 95 / 110 (+ 50% AP)',
            damagetype: 'None',
            values: [50, 65, 80, 95, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 65 / 80 / 95 / 110',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Loyalty Program will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Hostile Takeover': {
    effects: [
      {
        img: 'Renata Glasc Hostile Takeover.png',
        description:
          'Active: Renata launches a cloud of potent chemicals that travels in the target direction, granting  sight of its surroundings. Enemy champions and minions hit become  berserk for a duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Berserk Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Berserked units gain 100% bonus attack speed and 25% increased size. Within their targeting radius, they prioritize attacking the closest unit by the following categories in descending order:\nTheir allied champions\nAllied non-champions\nAllied  wards\nEnemy units (including  monsters)',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
