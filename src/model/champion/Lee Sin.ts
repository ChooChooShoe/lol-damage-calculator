import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Lee Sin';
export const skillsData = ChampionSkillsData['Lee Sin'];

export const LeeSin = {
  Flurry: {
    effects: [
      {
        img: 'Flurry.png',
        description:
          "Innate: After casting an ability, Lee Sin's next 2 basic attacks within 3 seconds gain  40% bonus attack speed and restore  energy.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The first attack restores 20 / 30 / 40 (based on level) energy and the second attack restores「 half of that amount. 」「 10 / 15 / 20 (based on level) energy. 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Sonic Wave': {
    effects: [
      {
        img: 'Sonic Wave.png',
        description:
          'Active: Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for 3 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 110% bonus AD)',
            damagetype: 'None',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110% bonus AD',
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
          'While the target is marked, Lee Sin can cast  Resonating Strike.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Resonating Strike': {
    effects: [
      {
        img: 'Resonating Strike.png',
        description:
          "Active: Lee Sin  dashes to the nearby enemy marked by  Sonic Wave. Upon arrival, he consumes the mark and deals physical damage, increased by 0% − 100% (based on target's missing health).",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 110% bonus AD)',
            damagetype: 'None',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Iron Will and  Cripple can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Safeguard: {
    effects: [
      {
        img: 'Safeguard.png',
        description:
          "Active: Lee Sin  dashes to the target allied unit's location. If the ally is a  champion upon arrival, both they and Lee Sin gain a  shield for 2 seconds and Safeguard's  cooldown is halved.\nLee Sin can self-cast Safeguard to shield himself.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '50 / 100 / 150 / 200 / 250 (+ 80% AP)',
            damagetype: 'None',
            values: [50, 100, 150, 200, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 100 / 150 / 200 / 250',
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
        description:
          'After Safeguard is cast, Lee Sin can cast  Iron Will within the next 3 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Iron Will and  Cripple can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Iron Will': {
    effects: [
      {
        img: 'Iron Will.png',
        description:
          'Active: Lee Sin gains  life steal and  spell vamp for 4 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Drain:',
            raw: '5 / 10.5 / 16 / 21.5 / 27%',
            values: [5, 10.5, 16, 21.5, 27],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10.5 / 16 / 21.5 / 27%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Tempest: {
    effects: [
      {
        img: 'Tempest.png',
        description:
          'Active: Lee Sin smashes the ground beneath him, dealing magic damage to nearby enemies, marking them for 4 seconds and, if they are not  invisible when struck,  revealing them for the same duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 65 / 95 / 125 / 155 (+ 100% AD)',
            damagetype: 'None',
            values: [35, 65, 95, 125, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 65 / 95 / 125 / 155',
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
          'If Tempest hits an enemy, Lee Sin can cast  Cripple within the next 3 seconds after a 0.1-second delay.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Cripple: {
    effects: [
      {
        img: 'Cripple.png',
        description:
          'Active: Lee Sin sends a wave to nearby enemies marked by  Tempest, which  slows them for 4 seconds, decaying over the duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 35 / 50 / 65 / 80%',
            values: [20, 35, 50, 65, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Dragon's Rage": {
    effects: [
      {
        img: "Dragon's Rage.png",
        description:
          'Active: Lee Sin  roots the target enemy champion over the cast time, then roundhouse kicks them to deal physical damage and  knock them back up to 800 units over 0.8 seconds, rendering them  airborne for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '175 / 287.5 / 400 / 512.5 / 625 (+ 200% bonus AD)',
            damagetype: 'None',
            values: [175, 287.5, 400, 512.5, 625],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 287.5 / 400 / 512.5 / 625',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 200% bonus AD',
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
          'Enemies that collide with the displaced enemy while it is  airborne take the same damage plus bonus physical damage and are  knocked up for 1 second.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Collision Physical Damage:',
            raw: "175 / 287.5 / 400 / 512.5 / 625 (+ 200% bonus AD) (+ 12 / 13.5 / 15 / 16.5 / 18% of primary target's bonus health)",
            healType: 'OutgoingHeals',
            values: [175, 287.5, 400, 512.5, 625],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 287.5 / 400 / 512.5 / 625',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 200% bonus AD',
              },
              {
                values: [12, 13.5, 15, 16.5, 18],
                valuesIsPercent: true,
                user: 'target',
                units: 'bonus_hp',
                unitsText: "of primary target's bonus health",
                pre: "+ 12 / 13.5 / 15 / 16.5 / 18% of primary target's bonus health",
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
