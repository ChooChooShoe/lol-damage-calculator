import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Master Yi';
export const skillsData = ChampionSkillsData['Master Yi'];

export const MasterYi = {
  'Double Strike': {
    effects: [
      {
        img: 'Double Strike.png',
        description:
          "Innate: Master Yi's basic attacks  on-hit generate a stack of Double Strike for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. At 3 stacks, Master Yi's next basic attack on-attack is empowered to consume the stacks to strike twice, the second strike dealing 50% AD physical damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The second strike applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If Master Yi's primary target is killed before the second strike, he automatically attacks another enemy within 300 range.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'The second strike can  critically strike  structures.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Alpha Strike': {
    effects: [
      {
        img: 'Alpha Strike.png',
        description:
          'Active: Master Yi  vanishes and becomes  unable to act. After 0.231 seconds, he marks the target enemy and then proceeds to mark the nearest  visible un-marked enemy within 600 units, recurring every 0.231 seconds up to 3 times. If there are no other eligible targets before then, Master Yi can mark the same enemies again.\nUpon finishing marking, he  reappears 75 units in front of the target and becomes able to act again「 after 0.165 seconds. 」「 1.087 seconds after the start of the cast with 4 bounces. 」During Alpha Strike, Master Yi may choose a direction around the primary target to instead reappear 75 units in that direction. If the primary target  dies or is too far away during the delay, he will reappear at the cast location instead.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Master Yi then detonates the marks, dealing physical damage and applying  on-hit effects at 75% effectiveness. Subsequent marks on a target instantly deal 25% damage and apply  on-hit effects at 18.75% effectiveness. Alpha Strike deals bonus physical damage to  monsters per hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '30 / 60 / 90 / 120 / 150 (+ 50% AD)',
            damagetype: 'None',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Monster Bonus Damage:',
            raw: '75 / 100 / 125 / 150 / 175',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Alpha Strike's primary and lesser damage can  critically strike for bonus physical damage equal to (17.5% +  6.125%) AD and (4.375% +  1.53125%) AD respectively.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Basic attacks  on-hit reduce Alpha Strike's  current cooldown by 1 second.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Wuju Style and  Highlander can be cast during Alpha Strike. Each time Alpha Strike hits a target, the durations of  Wuju Style and  Highlander are refreshed by their current duration. Alpha Strike does not trigger its cooldown reduction nor grant a stack of  Double Strike when applying on-hit effects.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Meditate: {
    effects: [
      {
        img: 'Meditate.png',
        description:
          'Active: Master Yi  channels for up to 4 seconds,  healing himself every 0.5 seconds, increased by 0% − 100% (based on missing health).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Heal Per Tick:',
            raw: '15 / 25 / 35 / 45 / 55 (+ 12.5% AP)',
            damagetype: 'None',
            values: [15, 25, 35, 45, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12.5% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Total Heal:',
            raw: '120 / 200 / 280 / 360 / 440 (+ 100% AP)',
            damagetype: 'None',
            values: [120, 200, 280, 360, 440],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 200 / 280 / 360 / 440',
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
          "While channeling, Master Yi gains 90% damage reduction for the first 0.5 seconds, which is then modified to a reduced amount for the remaining duration of the channel. Meditate's damage reduction is halved against  turrets and lingers for 0.5 seconds after the channel ends.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Damage Reduction:',
            raw: '45 / 47.5 / 50 / 52.5 / 55%',
            values: [45, 47.5, 50, 52.5, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 47.5 / 50 / 52.5 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Meditate  resets Master Yi's basic attack timer, pauses  Wuju Style's and  Highlander's duration, and grants one stack of  Double Strike per second during the channel.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wuju Style': {
    effects: [
      {
        img: 'Wuju Style.png',
        description:
          'Active: Master Yi empowers his basic attacks within the next 5 seconds to deal  bonus true damage  on-hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus True Damage:',
            raw: '30 / 35 / 40 / 45 / 50 (+ 30% bonus AD)',
            damagetype: 'None',
            values: [30, 35, 40, 45, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Highlander: {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Scoring a champion  takedown reduces the  current cooldowns of Master Yi's basic abilities by 70%.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Highlander.png',
        description:
          'Active: Master Yi  cleanses himself from all  slows and  cripples. For the next 7 seconds, he gains  ghosting,  bonus attack speed,  bonus movement speed,  slow immunity, and  cripple immunity.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '35 / 40 / 45 / 50 / 55%',
            values: [35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "While active, scoring a champion  takedown extends Highlander's duration by 7 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
