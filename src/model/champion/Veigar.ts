import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Veigar';
export const skillsData = ChampionSkillsData['Veigar'];

export const Veigar = {
  'Phenomenal Evil Power': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Veigar generates a stack of Phenomenal Evil for each enemy  champion hit by his abilities, and 5 stacks whenever he scores an enemy champion  takedown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Phenomenal Evil Power.png',
        description:
          'Phenomenal Evil: For each stack, Veigar gains  1 ability power.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Baleful Strike': {
    effects: [
      {
        img: 'Baleful Strike.png',
        description:
          'Active: Veigar blasts a dark bolt in the target direction that deals magic damage to the first two enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 60% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If this kills an enemy, it generates 1 stack of  Phenomenal Evil, tripled against large  minions and  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dark Matter': {
    effects: [
      {
        img: 'Dark Matter.png',
        description:
          'Active: Veigar casts down a mass of dark matter that strikes the target location after a 1.221 seconds delay, dealing magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 100% AP)',
            damagetype: 'None',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
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
          "Dark Matter's  cooldown is reduced based on stacks of  Phenomenal Evil.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Event Horizon': {
    effects: [
      {
        img: 'Event Horizon.png',
        description:
          'Active: Veigar forms a cage at the target location that erects after a 0.5 second delay, remaining there for 3 seconds. Enemies that collide with the edges of the cage are  knocked down and  stunned for a duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1.5 / 1.75 / 2 / 2.25 / 2.5',
            values: [1.5, 1.75, 2, 2.25, 2.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.5 / 1.75 / 2 / 2.25 / 2.5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Enemies can be affected by Event Horizon's effects only once per cast.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Primordial Burst': {
    effects: [
      {
        img: 'Primordial Burst.png',
        description:
          "Active: Veigar sends a primordial burst at the target enemy champion that deals magic damage, increased by 0% − 100% (based on target's missing health).",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '175 / 212.5 / 250 / 287.5 / 325 (+ 75% AP)',
            damagetype: 'None',
            values: [175, 212.5, 250, 287.5, 325],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 212.5 / 250 / 287.5 / 325',
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
