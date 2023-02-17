import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Draven';
export const skillsData = ChampionSkillsData['Draven'];

export const Draven = {
  'League of Draven': {
    effects: [
      {
        img: 'League of Draven.png',
        description:
          'Innate: When Draven catches a  Spinning Axe, kills a non-champion, or destroys a  turret, he gains a stack of Adoration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally, whenever Draven kills a  minion or destroys a  ward or  trap, he generates a  Strike stack for 10 seconds, refreshing on subsequent kills and stacking up to 6 times. All Strike stacks are lost if he drops an  axe or a nearby  minion dies without him killing it. The sixth stack consumes all stacks to grant him 2 Adoration stacks.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'When Draven kills an enemy  champion, he consumes all of his Adoration stacks and gains  40 + (2.5 × stacks) bonus gold.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Draven loses 75% of his Adoration stacks upon death.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spinning Axe': {
    effects: [
      {
        img: 'Spinning Axe.png',
        description:
          'Active: Draven starts spinning his axe, empowering his next basic attack within 5.8 seconds to deal bonus physical damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '40 / 45 / 50 / 55 / 60 (+ 75 / 85 / 95 / 105 / 115% bonus AD)',
            damagetype: 'None',
            values: [40, 45, 50, 55, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60',
            children: [
              {
                values: [75, 85, 95, 105, 115],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75 / 85 / 95 / 105 / 115% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Draven Axe Indicator.png',
        description:
          "Upon hitting the target, the axe then ricochets off of them to land after 2 seconds, with the location being determined by Draven's current movement. If Draven catches the axe, he gains Spinning Axe's empowered attack again.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Draven can hold up to two Spinning Axes at once.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blood Rush': {
    effects: [
      {
        img: 'Blood Rush.png',
        description:
          'Active: Draven enters an adrenaline rush, gaining  bonus attack speed for 3 seconds as well as decaying  bonus movement speed and  ghosting for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '50 / 55 / 60 / 65 / 70%',
            values: [50, 55, 60, 65, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 55 / 60 / 65 / 70%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Catching a  Spinning Axe resets Blood Rush's  cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Stand Aside': {
    effects: [
      {
        img: 'Stand Aside.png',
        description:
          'Active: Draven throws a fan of axes in a line in the target direction, dealing physical damage to enemies hit,  knocking them aside, though not through terrain, and  slowing them for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '75 / 110 / 145 / 180 / 215 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [75, 110, 145, 180, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 110 / 145 / 180 / 215',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Whirling Death': {
    effects: [
      {
        img: 'Whirling Death.png',
        description:
          'Active: Draven hurls two massive axes in the target direction that briefly grant  sight of their surroundings and deal physical damage to enemies hit. Enemy  champions that would have  health left within the current number of  League of Draven stacks are  executed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '175 / 225 / 275 / 325 / 375 (+ 110 / 120 / 130 / 140 / 150% bonus AD)',
            damagetype: 'None',
            values: [175, 225, 275, 325, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 225 / 275 / 325 / 375',
            children: [
              {
                values: [110, 120, 130, 140, 150],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110 / 120 / 130 / 140 / 150% bonus AD',
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
          'Whirling Death can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy  champion or the edge of the map.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Whirling Death 2.png',
        description:
          'Recast: Draven forces the axes to reverse direction, slowly coming to a stop before homing back to him, dealing the same damage to enemies hit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Whirling Death deals 100% − 40% (based on enemies hit) damage, resetting upon reversing direction.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 44 / 48 / 52 / 56 / 60% bonus AD)',
            damagetype: 'None',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
            children: [
              {
                values: [44, 48, 52, 56, 60],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 44 / 48 / 52 / 56 / 60% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Enemies can be hit only once per pass.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
