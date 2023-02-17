import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Tahm Kench';
export const skillsData = ChampionSkillsData['Tahm Kench'];

export const TahmKench = {
  'An Acquired Taste': {
    effects: [
      {
        img: 'An Acquired Taste.png',
        description:
          "Innate: Tahm Kench's basic attacks  on-hit and  Tongue Lash are empowered to deal 8 − 60 (based on level) (+ 2% AP per 100 bonus health) (+ 3% of his bonus health) bonus magic damage and apply a stack of An Acquired Taste against enemy  champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times. Stacks expire by one every 0.67 seconds when the duration ends.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Tongue Lash and  Devour gain additional effects against enemies with 3 stacks, consuming them all.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tongue Lash': {
    effects: [
      {
        img: 'Tongue Lash.png',
        description:
          'Active: Tahm Kench lashes his tongue in the target direction that deals magic damage to the first enemy hit and  slows them by 50% for 2 seconds. If this hits an enemy  champion, Tahm Kench also  heals himself.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: '80 / 130 / 180 / 230 / 280 (+ 100% AP) (+ 8 − 60 (based on level) (+ 2% AP per 100 bonus health) (+ 3% bonus health))',
            healType: 'BonusHealth',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
              {
                values: [
                  8, 11.06, 14.12, 17.18, 20.24, 23.29, 26.35, 29.41, 32.47,
                  35.53, 38.59, 41.65, 44.71, 47.76, 50.82, 53.88, 56.94, 60,
                ],
                valuesIsBasedOnLevel: true,
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 8 − 60',
                children: [
                  {
                    values: 2,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'AP per 100 bonus health',
                    pre: '+ 2% AP per 100 bonus health',
                  },
                  {
                    values: 3,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'bonus_hp',
                    unitsText: 'bonus health',
                    pre: '+ 3% bonus health',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 5 / 5.5 / 6 / 6.5 / 7% of missing health)',
            healType: 'BonusHealth',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: [5, 5.5, 6, 6.5, 7],
                valuesIsPercent: true,
                user: 'player',
                units: 'missing_hp',
                unitsText: 'of missing health',
                pre: '+ 5 / 5.5 / 6 / 6.5 / 7% of missing health',
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
          'An Acquired Taste Bonus: The target is  stunned for 1.5 seconds.  Devour can be cast during Tongue Lash at no cost to pull the target to Tahm Kench before swallowing them.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Tahm Kench is  unable to move, attack, or cast  Abyssal Dive or  Devour on a different target while his tongue is in flight. Tongue Lash's range and travel speed can be increased by Tahm Kench's size.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Abyssal Dive': {
    effects: [
      {
        img: 'Abyssal Dive.png',
        description:
          'Active: Tahm Kench  channels for 1.35 seconds as he dives into the waters, then  blinks to the target location after a 0.15-second delay and remains  unable to act for 0.65 seconds after the channel completes. Abyssal Dive grants  sight of the area during the channel.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Tahm Kench emerges to deal magic damage to nearby enemies, as well as  knock up and  stun them for 1 second. If this hits at least one enemy  champion, 40% of Abyssal Dive's  cooldown and  mana cost are refunded.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 135 / 170 / 205 / 240 (+ 150% AP)',
            damagetype: 'None',
            values: [100, 135, 170, 205, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 135 / 170 / 205 / 240',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
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
          "Enemies can see the indicator for Tahm Kench's destination after he has channeled for 0.75 seconds. Abyssal Dive will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Thick Skin': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Tahm Kench stores a portion of the post-mitigation damage he takes as grey health on his health bar, increased while there are at least 2 nearby  visible enemy champions either dead or alive. He can store up to 300% of his maximum health.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Damage Stored into Grey Health:',
            raw: '13 / 21 / 29 / 37 / 45%',
            values: [13, 21, 29, 37, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '13 / 21 / 29 / 37 / 45%',
          },
          {
            effectType: 'Unique',
            name: 'Increased Damage Stored into Grey Health:',
            raw: '40 / 42.5 / 45 / 47.5 / 50%',
            values: [40, 42.5, 45, 47.5, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 42.5 / 45 / 47.5 / 50%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While Thick Skin is not on cooldown, and after 4 seconds without taking damage, Tahm Kench rapidly consumes his grey health to restore 45% − 100% (based on level) of the amount,  healing for 10% of his maximum health every 0.264 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Thick Skin.png',
        description:
          'Active: Tahm Kench converts his current grey health into a  shield that lasts for 2.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Devour: {
    effects: [
      {
        img: 'Devour.png',
        description:
          'Active: Tahm Kench swallows the target  champion for up to 3 seconds, rendering them  untargetable and  displacement immune. Devour can be cast on enemies only with 3 stacks of  An Acquired Taste.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the target is an ally, they become  unable to act and are granted a  shield, which decays in strength by 50 every 0.25 seconds after they are  Regurgitated. Tahm Kench will also gain  40% bonus movement speed for 3 seconds and is unable to cast movement spells besides  Abyssal Dive while an ally is swallowed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '650 / 725 / 800 / 875 / 950 (+ 150% AP)',
            damagetype: 'None',
            values: [650, 725, 800, 875, 950],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '650 / 725 / 800 / 875 / 950',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
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
          'After 1 second, Tahm Kench can cast  Regurgitate within the duration, and automatically does so afterwards. The swallowed ally can also input a movement command to force this cast in the target direction, unless they are  immobilized.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'An Acquired Taste Bonus: The target is  suppressed while swallowed. Tahm Kench will also be  grounded and  slowed by 40% while an enemy is swallowed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Tahm Kench is performing  Abyssal Dive,  Regurgitate will not automatically cast until after he finishes.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Regurgitate: {
    effects: [
      {
        img: 'Regurgitate.png',
        description:
          'Active: Tahm Kench  spits the swallowed champion in the target direction. If they are an enemy, he deals magic damage to them at the end of the displacement.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "100 / 175 / 250 / 325 / 400 (+ 15% (+ 7% per 100 AP) of the target's maximum health)",
            healType: 'OutgoingHeals',
            values: [100, 175, 250, 325, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 175 / 250 / 325 / 400',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of the target's maximum health",
                pre: '+ 15%',
                post: "of the target's maximum health",
                children: [
                  {
                    values: 7,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 7% per 100 AP',
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
} satisfies { [skillName in string]: SkillModel };
