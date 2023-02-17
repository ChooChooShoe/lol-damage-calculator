import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Ashe';
export const skillsData = ChampionSkillsData['Ashe'];

export const Ashe = {
  'Frost Shot': {
    effects: [
      {
        img: 'Frost Shot.png',
        description:
          "Innate - Frost Shot: Ashe's basic attacks and ability hits apply Frost to enemies for 2 seconds, which  slows them by 20% − 30% (based on level) for the duration. Basic attacks against enemies with Frost are modified to deal 110% (+ (75% +  35%) of critical strike chance) damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Frost Shot 2.png',
        description:
          "Innate - Critical Slow: Ashe's  critical strikes do not deal any additional damage, instead they double Frost's slow strength to 40% − 60% (based on level), decaying over 1 second to its normal strength.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Ranger's Focus": {
    effects: [
      {
        img: 'Focus.png',
        description:
          "Passive: While Ranger's Focus is inactive, Ashe's basic attacks on-attack generate a stack of Focus for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times. Stacks expire by one every 1 second.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Ranger's Focus.png",
        description:
          'Active: For 4 seconds, Ashe gains  bonus attack speed and empowers her basic attacks to fire a flurry of five arrows.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '25 / 32.5 / 40 / 47.5 / 55%',
            values: [25, 32.5, 40, 47.5, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 32.5 / 40 / 47.5 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: "Ranger's Focus 2.png",
        description:
          'Each arrow deals modified physical damage that benefits from  Frost Shot and  life steal. Flurries apply on-hit effects only once.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Arrow:',
            raw: '21 / 22 / 23 / 24 / 25% AD',
            damagetype: 'None',
            values: [21, 22, 23, 24, 25],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '21 / 22 / 23 / 24 / 25% AD',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Ranger's Focus  resets Ashe's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Volley: {
    effects: [
      {
        img: 'Volley.png',
        description:
          'Active: Ashe shoots a volley of arrows in a cone in the target direction, each dealing physical damage to the first enemy hit, and applying  Critical Slow to enemy  champions hit.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Arrows:',
            raw: '7 / 8 / 9 / 10 / 11',
            values: [7, 8, 9, 10, 11],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 8 / 9 / 10 / 11',
          },
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 100% AD)',
            damagetype: 'None',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
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
          'Enemies can intercept multiple arrows but do not take damage from any beyond the first.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Hawkshot: {
    effects: [
      {
        img: 'Hawkshot.png',
        description:
          'Active: Ashe sends a hawk spirit toward the target location, granting  sight of the area along its path「 repeatedly for 0.5 seconds after every 100 units traveled 」「 for effectively up-to 1.8 seconds at any location 」and at its destination for 5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Ashe periodically stocks a Hawkshot charge, up to a maximum of 2.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Enchanted Crystal Arrow': {
    effects: [
      {
        img: 'Enchanted Crystal Arrow.png',
        description:
          'Active: Ashe fires a massive arrow of ice in the target direction, granting  sight of the area it flies through each for 1 second. The arrow shatters upon hitting an enemy  champion, dealing them magic damage,  stunning them for 1 − 3.5 (based on distance traveled) seconds, and granting  sight of the area around them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 300 / 400 / 500 / 600 (+ 100% AP)',
            damagetype: 'None',
            values: [200, 300, 400, 500, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 300 / 400 / 500 / 600',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
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
          'Enemies surrounding the primary target are dealt 50% damage and afflicted with  Frost Shot.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 50% AP)',
            damagetype: 'None',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
