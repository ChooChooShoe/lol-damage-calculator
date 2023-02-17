import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Skarner';
export const skillsData = ChampionSkillsData['Skarner'];

export const Skarner = {
  'Crystal Spires': {
    effects: [
      {
        img: 'Crystal Spires.png',
        description:
          "Innate: Skarner's presence spawns  6 Crystal Spires at set points across the battlefield:\nOne beside  Baron Nashor's pit\nOne beside  Dragon's pit\nOne near each of the camps for  Blue Sentinel and  Red Brambleback",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After  minions have spawned, a Crystal Spire can be captured by  champions by standing on it for 2 seconds, Once captured, the Crystal Spire is owned by the team until contested, and the defending team can stand on the spire to prevent the opposing team from capturing it.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Capturing a Crystal Spire grants  sight of its radius for 1.5 seconds and locks it out from capture for 15 seconds. Crystal Spires grant  30 split among its captors, or  15 for a single captor.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Skarner gains Crystal Charge while within range of a Crystal Spire controlled by his team, for 1.25 seconds after triggering  Crystal Venom, and for 1.75 seconds after stinging an enemy champion with  Impale.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Crystal Charge: Skarner gains  70 − 120 (based on level) bonus movement speed and  43% − 160% (based on level) bonus attack speed and restores  1% maximum mana every 0.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Crystal Slash': {
    effects: [
      {
        img: 'Crystal Slash.png',
        description:
          'Active: Skarner slashes around himself, dealing physical damage to nearby enemies. If at least one enemy is hit, he becomes charged for 5 seconds, empowering subsequent casts of Crystal Slash to deal bonus magic damage.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health (+ 20% AD)",
            healType: 'OutgoingHeals',
            values: [1, 1.5, 2, 2.5, 3],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health",
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20% AD',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health (+ 20% AD) (+ 30% AP)",
            healType: 'OutgoingHeals',
            values: [1, 1.5, 2, 2.5, 3],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health",
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20% AD',
              },
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
          'Each instance of damage is capped at 200 against epic  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Basic attacks reduce Crystal Slash's  current cooldown by 0.25 seconds, increased to 1 second against  champions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Crystalline Exoskeleton': {
    effects: [
      {
        img: 'Crystalline Exoskeleton.png',
        description:
          'Active: Skarner grants himself a  shield for up to 6 seconds, and while it holds, he gains  bonus movement speed that doubles over the first 3 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '9 / 10 / 11 / 12 / 13% maximum health (+ 80% AP)',
            healType: 'BonusHealth',
            values: [9, 10, 11, 12, 13],
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '9 / 10 / 11 / 12 / 13% maximum health',
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
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '8 / 10 / 12 / 14 / 16%',
            values: [8, 10, 12, 14, 16],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 10 / 12 / 14 / 16%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Fracture: {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Every time Skarner triggers Crystal Venom or stings an enemy with  Impale, Fracture's  current cooldown is reduced by the corresponding base duration of the disable.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Fracture.png',
        description:
          'Active: Skarner launches a blast of crystalline energy in the target direction that deals magic damage to enemies hit,  slows them for 2.5 seconds, and marks them with Crystal Venom for 5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 20% AP)',
            damagetype: 'None',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
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
        img: 'Crystal Venom.png',
        description:
          "Crystal Venom: Skarner's next basic attack against a marked target is empowered to consume the mark to deal bonus physical damage and  stun them for 1.25 seconds.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Physical Damage:',
            raw: '30 / 50 / 70 / 90 / 110',
            values: [30, 50, 70, 90, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70 / 90 / 110',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Impale: {
    effects: [
      {
        img: 'Impale.png',
        description:
          'Active: Skarner  roots the target enemy  champion over the cast time and attempts to impale them with his stinger. Upon impaling the target, he deals 60% AD physical damage plus magic damage and  suppresses them for 1.75 seconds, during which they are  revealed and Skarner can drag them with himself.\nAfterwards, the target takes the same damage again.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 40 / 60 / 80 / 100 (+ 50% AP)',
            damagetype: 'None',
            values: [20, 40, 60, 80, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 40 / 60 / 80 / 100',
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
          "Impale's drag ignores  displacement immunity. Skarner is unable to basic attack, cast  Fracture, or use  Flash during Impale.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
