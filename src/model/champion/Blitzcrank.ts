import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Blitzcrank';
export const skillsData = ChampionSkillsData['Blitzcrank'];

export const Blitzcrank = {
  'Mana Barrier': {
    effects: [
      {
        img: 'Mana Barrier.png',
        description:
          'Innate: Periodically, when damaged to  30% maximum health, Blitzcrank generates a  shield equal to  15% − 45% (based on level) of maximum mana, lasting up to 10 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Rocket Grab': {
    effects: [
      {
        img: 'Rocket Grab.png',
        description:
          'Active: Blitzcrank fires their right hand in the target direction that catches the first enemy hit, dealing them magic damage,  stunning them for 0.65 seconds, and  pulling them towards Blitzcrank, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '105 / 150 / 195 / 240 / 285 (+ 120% AP)',
            damagetype: 'None',
            values: [105, 150, 195, 240, 285],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '105 / 150 / 195 / 240 / 285',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
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
          'Blitzcrank is  unable to move or attack while Rocket Grab is in flight.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Overdrive: {
    effects: [
      {
        img: 'Overdrive.png',
        description:
          "Active: Blitzcrank shifts into overdrive, gaining  bonus attack speed for 5 seconds and  bonus movement speed that decays to 10% over the first 2.9 seconds. While active, their basic attacks deal bonus magic damage  on-hit equal to 1% of the target's maximum health, increased by 60 − 220 (based on level) against non-champions.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '30 / 43 / 56 / 69 / 82%',
            values: [30, 43, 56, 69, 82],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 43 / 56 / 69 / 82%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '70 / 75 / 80 / 85 / 90%',
            values: [70, 75, 80, 85, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 75 / 80 / 85 / 90%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'When Overdrive ends, Blitzcrank is  slowed by 30% for 1.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Power Fist': {
    effects: [
      {
        img: 'Power Fist.png',
        description:
          'Active: Blitzcrank empowers their next basic attack within 5 seconds to have an  uncancellable windup, deal 75% AD (+ 25% AP) bonus physical damage, increased to 250% AD (+ 150% AP) against non-champions, and  knock up the target for 1 second. This damage is affected by  critical strike modifiers.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Power Fist  resets Blitzcrank's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Static Field': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: While Static Field is not on cooldown, Blitzcrank's basic attacks apply a stack to the target  on-hit. After every 1 second, one stack is consumed to deal them magic damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 30 / 35 / 40 / 45 / 50% AP)',
            damagetype: 'None',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: [30, 35, 40, 45, 50],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30 / 35 / 40 / 45 / 50% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Static Field.png',
        description:
          'Active: Blitzcrank detonates a static field, completely destroying damage-mitigating  shields of nearby enemies before dealing them magic damage and  silencing them for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '275 / 337.5 / 400 / 462.5 / 525 (+ 100% AP)',
            damagetype: 'None',
            values: [275, 337.5, 400, 462.5, 525],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '275 / 337.5 / 400 / 462.5 / 525',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
