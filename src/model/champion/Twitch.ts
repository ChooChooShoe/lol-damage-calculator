import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Twitch';
export const skillsData = ChampionSkillsData['Twitch'];

export const Twitch = {
  'Deadly Venom': {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Twitch's basic attacks  on-hit apply a stack of Deadly Venom for 6 seconds, refreshing on subsequent applications and stacking up to 6 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Deadly Venom.png',
        description:
          'Deadly Venom: For each stack, the target is dealt「  1 / 2 / 3 / 4 / 5 (based on level) (+ 3% AP) true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) total true damage over the duration, 」for a maximum of「 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) true damage with each tick. 」「 36 / 72 / 108 / 144 / 180 (based on level) (+ 108% AP) total true damage over the duration. 」This effect is considered a  poison.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Ambush: {
    effects: [
      {
        img: 'Ambush.png',
        description:
          'Active: After a 1-second delay, Twitch becomes  camouflaged for a duration. Attacking or casting  Venom Cask or  Contaminate ends Ambush immediately.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Stealth Duration:',
            raw: '10 / 11 / 12 / 13 / 14',
            values: [10, 11, 12, 13, 14],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 11 / 12 / 13 / 14',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Ambush 2.png',
        description:
          'During this time, Twitch gains  10% bonus movement speed, increased to 30% while facing enemy  champions within a 1000-unit radius who cannot see him.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Ambush 3.png',
        description:
          'Upon breaking stealth, Twitch gains  bonus attack speed for 5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "When an enemy  champion dies while afflicted with  Deadly Venom, Ambush's  cooldown is reset.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Venom Cask': {
    effects: [
      {
        img: 'Venom Cask.png',
        description:
          'Active: Twitch hurls a cask of venom that explodes at the target location, applying  Deadly Venom to enemies hit and granting  sight of the area.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The area then becomes contaminated for 3 seconds, applying a  Deadly Venom stack each second to enemies within and  slowing them.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50% (+ 6% per 100 AP)',
            damagetype: 'None',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 6% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Contaminate: {
    effects: [
      {
        img: 'Contaminate.png',
        description:
          'Active: Twitch sends out a lethal toxin to each nearby enemy afflicted by  Deadly Venom, dealing them physical damage.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Base Physical Damage:',
            raw: '20 / 30 / 40 / 50 / 60',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Contaminate deals additional physical damage and 35% AP magic damage for each stack of  Deadly Venom on the target.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Stack:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 35% bonus AD)',
            damagetype: 'None',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 35% bonus AD',
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
          'A nearby enemy with  Deadly Venom is required to cast this ability. The target does not have to be  visible to be targeted by this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spray and Pray': {
    effects: [
      {
        img: 'Spray and Pray.png',
        description:
          'Active: Twitch gains  bonus attack damage and  300 bonus attack range for 6 seconds, during which his basic attacks are replaced by bolts that travel slightly further than his attack range in a straight line, dealing damage to every enemy unit hit.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Damage:',
            raw: '40 / 47.5 / 55 / 62.5 / 70',
            values: [40, 47.5, 55, 62.5, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 47.5 / 55 / 62.5 / 70',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The bolts deal 100% − 60% (based on enemies hit) of the attack's damage, apply  on-hit effects at 100% effectiveness, and can  critically strike.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
