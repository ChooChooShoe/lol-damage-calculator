import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Sett';
export const skillsData = ChampionSkillsData['Sett'];

export const Sett = {
  'Pit Grit': {
    effects: [
      {
        img: 'false',
        description:
          'Innate - Heart of the Half-Beast: Sett  regenerates「 an additional 0.15 / 0.5 / 1 / 2 (based on level) health per second for every  5% of his missing health. 」「 up-to 2.85 / 9.5 / 19 / 38 (based on level) health per second (maximum reached at  95% missing health). 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Pit Grit.png',
        description:
          "Innate - Heavy Hands: Sett's basic attacks alternate between his Left Punch and a Right Punch on-attack. Sett begins attacking with his Left Punch, and will reset back to it after 2 seconds of not performing a Right Punch.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Sett's Right Punch is empowered to gain  50 bonus range (unless  Knuckle Down is active), attack at 8 times the Left Punch's attack speed, and deal 5 − 90 (based on level) (+ 55% bonus AD) bonus physical damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Knuckle Down': {
    effects: [
      {
        img: 'Knuckle Down.png',
        description:
          'Active: Sett empowers his next two basic attacks within 5 seconds to gain  50 bonus range and deal bonus physical damage, capped at 400 total damage of each attack against  monsters.(bug)',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "10 / 20 / 30 / 40 / 50 (+ 1% (+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [10, 20, 30, 40, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 20 / 30 / 40 / 50',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 1%',
                post: "of target's maximum health",
                children: [
                  {
                    values: [1, 1.5, 2, 2.5, 3],
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ad',
                    unitsText: 'per 100 AD',
                    pre: '+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD',
                  },
                ],
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Looking for a Fight.png',
        description:
          'For 1.5 seconds, Sett also gains  30% bonus movement speed while facing  visible enemy  champions within 2000 units.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Knuckle Down  resets Sett's basic attack timer. The empowered attacks are guaranteed to be a Left Punch followed by a Right Punch, resetting Sett's current  Pit Grit state (if applicable) and ignoring the usual time-out period for a follow-up Right Punch.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Haymaker: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Sett stores 100% of post-mitigation damage taken as Grit on his resource bar, up to 50% of his maximum health. Each instance of stored Grit decays by 30% every second after 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Haymaker.png',
        description:
          'Active: Sett immediately grants himself a  shield equal to his expended Grit for 3 seconds, decaying after 0.75 seconds, and charges up a strike over the cast time.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After the cast time, he unleashes a blast in a cone in the target direction that deals physical damage to enemies hit; those hit in a center line are dealt   true damage instead.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Damage:',
            raw: '80 / 100 / 120 / 140 / 160 (+ 25% (+ 25% per 100 bonus AD) of expended Grit)',
            damagetype: 'None',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'of expended Grit',
                pre: '+ 25%',
                post: 'of expended Grit',
                children: [
                  {
                    values: 25,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'bonus_ad',
                    unitsText: 'per 100 bonus AD',
                    pre: '+ 25% per 100 bonus AD',
                  },
                ],
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Facebreaker: {
    effects: [
      {
        img: 'Facebreaker.png',
        description:
          'Active: Sett  pulls in enemies at his front and back along the target direction, dealing physical damage and  slowing them by 70% for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 60% AD)',
            damagetype: 'None',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 60% AD',
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
          'If Facebreaker affects at least one enemy on each side, all enemies are  stunned for 1 second upon landing.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Sett is unable to move or attack for 0.25 seconds after Facebreaker's cast time.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'The Show Stopper': {
    effects: [
      {
        img: 'The Show Stopper.png',
        description:
          'Active: Sett  suppresses and  reveals the target enemy  champion while  dashing with  displacement immunity to their location and  attaching them to himself upon arrival. He leaps another 600 units in the same direction to slam the target into the ground, creating a massive shockwave and quickly  sliding forward 250 units beyond the impact.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies within the epicenter take  physical damage, and other enemies hit by the shockwave take physical damage that is reduced by up to 75% based on proximity. All targets hit are  slowed by 99% for 1 second.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "200 / 250 / 300 / 350 / 400 (+ 120% bonus AD) (+ 40 / 45 / 50 / 55 / 60% of primary target's bonus health)",
            healType: 'OutgoingHeals',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
              {
                values: [40, 45, 50, 55, 60],
                valuesIsPercent: true,
                user: 'target',
                units: 'bonus_hp',
                unitsText: "of primary target's bonus health",
                pre: "+ 40 / 45 / 50 / 55 / 60% of primary target's bonus health",
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
          'The dash will end and create the impact prematurely upon encountering terrain that cannot be dashed through, whether by distance or invalid space.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
