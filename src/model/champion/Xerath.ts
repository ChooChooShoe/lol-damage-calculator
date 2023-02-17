import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Xerath';
export const skillsData = ChampionSkillsData['Xerath'];

export const Xerath = {
  'Mana Surge': {
    effects: [
      {
        img: 'Mana Surge.png',
        description:
          'Innate: Periodically, Xerath empowers his next basic attack to restore  30 − 195 (based on level) mana, doubled to 60 − 390 (based on level) against enemy  champions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Mana Surge does not trigger if Xerath would restore above his maximum mana.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Arcanopulse: {
    effects: [
      {
        img: 'Arcanopulse.png',
        description:
          "Active: Xerath  charges while being  slowed by 0% − 40% (based on channel time) for up to 3 seconds to increase Arcanopulse's  range over the first 1.5 to 1.75 seconds of the channel.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Arcanopulse can be recast within the duration. If the charge is  interrupted or completes without reactivation, Arcanopulse is cancelled and refunds  half the mana cost.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Mana Refunded:',
            raw: '40 / 45 / 50 / 55 / 60',
            values: [40, 45, 50, 55, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: After a 0.528 seconds delay, Xerath fires a beam of energy in a line in the target direction that deals magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 85% AP)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 85% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Eye of Destruction': {
    effects: [
      {
        img: 'Eye of Destruction.png',
        description:
          'Active: Xerath casts down a blast of arcane energy that strikes the target location after 0.528 seconds, briefly granting  sight of the area and dealing magic damage to enemies hit and  slowing them by 25% for 2.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 60% AP)',
            damagetype: 'None',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
          'Enemies in the epicenter take 66.7% increased damage and are  slowed by a greater amount, decaying to 25% over the duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '100.02 / 158.365 / 216.71 / 275.055 / 333.4 (+ 100.02% AP)',
            damagetype: 'None',
            values: [100.02, 158.365, 216.71, 275.055, 333.4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100.02 / 158.365 / 216.71 / 275.055 / 333.4',
            children: [
              {
                values: 100.02,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100.02% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Increased Slow:',
            raw: '60 / 65 / 70 / 75 / 80%',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 65 / 70 / 75 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shocking Orb': {
    effects: [
      {
        img: 'Shocking Orb.png',
        description:
          'Active: Xerath fires an orb of energy in the target direction that deals magic damage to the first enemy hit and  stuns them for 0.75 − 2.25 (based on orb travel distance) seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 45% AP)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
  'Rite of the Arcane': {
    effects: [
      {
        img: 'Rite of the Arcane.png',
        description:
          'Active: Xerath  channels for up to 10 seconds, gaining the ability to recast Rite of the Arcane multiple times after 0.5 seconds within the duration. If Rite of the Arcane ends without any of the recasts being used, half of its  cooldown is refunded.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Number of Recasts:',
            raw: '3 / 3.5 / 4 / 4.5 / 5',
            values: [3, 3.5, 4, 4.5, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3.5 / 4 / 4.5 / 5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast - Arcane Barrage: Xerath catapults an arcane missile that strikes the target location after a 0.627 seconds delay, briefly granting  sight of the area and dealing magic damage to enemies hit. Each cast has a static cooldown of 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 225 / 250 / 275 / 300 (+ 45% AP)',
            damagetype: 'None',
            values: [200, 225, 250, 275, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 225 / 250 / 275 / 300',
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
      {
        img: '',
        description:
          'Xerath will  reveal himself if a missile strikes near an enemy.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Distance:',
            raw: '175 / 187.5 / 200 / 212.5 / 225',
            values: [175, 187.5, 200, 212.5, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 187.5 / 200 / 212.5 / 225',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Rite of the Arcane's recast will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
