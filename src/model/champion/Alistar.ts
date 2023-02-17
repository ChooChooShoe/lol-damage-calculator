import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Alistar';
export const skillsData = ChampionSkillsData['Alistar'];

export const Alistar = {
  'Triumphant Roar': {
    effects: [
      {
        img: 'Triumphant Roar.png',
        description:
          'Innate: Alistar generates a stack of Triumph for each enemy  champion he  stuns or  displaces with his abilities, and each time a nearby enemy  minion or non-epic  monster dies. He generates 7 stacks if a nearby enemy champion or epic monster dies.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'At 7 stacks, Alistar consumes them all to  heal himself for 5% of his maximum health and nearby allied champions for 6% of his maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Triumphant Roar can occur only once every few seconds, though Alistar may still generate stacks before then.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Pulverize: {
    effects: [
      {
        img: 'Pulverize.png',
        description:
          'Active: Alistar smashes the ground, dealing magic damage to nearby enemies and  stunning and  knocking them up simultaneously for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 70% AP)',
            damagetype: 'None',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
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
  Headbutt: {
    effects: [
      {
        img: 'Headbutt.png',
        description:
          "Active: Alistar  dashes to the target enemy's location. If they are within 400 units upon arrival, he deals them magic damage and  knocks them back 700 units over 0.5 seconds while also  stunning them for 0.75 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 110 / 165 / 220 / 275 (+ 90% AP)',
            damagetype: 'None',
            values: [55, 110, 165, 220, 275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 110 / 165 / 220 / 275',
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
    ],
  },
  Trample: {
    effects: [
      {
        img: 'Trample.png',
        description:
          'Active: Alistar tramples the ground around him every 0.5 seconds over 5 seconds, becoming  ghosted and dealing magic damage to nearby enemies. Each time this damages at least one enemy champion, he generates a stack of Trample that lasts for the remaining duration, stacking up to 5 times.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '8 / 11 / 14 / 17 / 20 (+ 7% AP)',
            damagetype: 'None',
            values: [8, 11, 14, 17, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 11 / 14 / 17 / 20',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Trample 2.png',
        description:
          "At 5 stacks, Alistar's next basic attack against a  champion within 6 seconds is empowered to deal 20 − 275 (based on level) bonus magic damage and  stun the target for 1 second. This will end Trample prematurely.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Unbreakable Will': {
    effects: [
      {
        img: 'Unbreakable Will.png',
        description:
          'Active: Alistar  cleanses himself of all  crowd control. For the next 7 seconds, he reduces incoming damage taken.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Damage Reduction:',
            raw: '55 / 65 / 75%',
            values: [55, 65, 75],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 65 / 75%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
