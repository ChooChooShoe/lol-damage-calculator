import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Ekko';
export const skillsData = ChampionSkillsData['Ekko'];

export const Ekko = {
  'Z-Drive Resonance': {
    effects: [
      {
        img: 'Z-Drive Resonance.png',
        description:
          "Innate - Resonance: Ekko's basic attacks  on-hit and damaging abilities apply a stack of Resonance to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. The third stack consumes them all to deal 30 − 140 (based on level) (+ 90% AP) bonus magic damage. Z-Drive Resonance deals 300% damage against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Resonance cannot affect the same target more than once every few seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Z-Drive Resonance 2.png',
        description:
          'Innate - Stolen Time: Triggering Resonance against a  champion grants Ekko 50 / 60 / 70 / 80% (based on level)  bonus movement speed for 2 / 2.5 / 3 (based on level) seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Timewinder: {
    effects: [
      {
        img: 'Timewinder.png',
        description:
          'Active: Ekko throws a temporal grenade in the target direction that deals magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 75 / 90 / 105 / 120 (+ 30% AP)',
            damagetype: 'None',
            values: [60, 75, 90, 105, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 75 / 90 / 105 / 120',
            children: [
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
          'At 700 units or upon hitting an enemy  champion, the grenade slows down for 1.75 seconds to gradually expand into a Temporal Sickness field that  slows nearby enemies, travelling for another 190 units.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '32 / 39 / 46 / 53 / 60%',
            values: [32, 39, 46, 53, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '32 / 39 / 46 / 53 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Afterwards, the grenade contracts and homes back to Ekko at an increased speed, dealing magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 60% AP)',
            damagetype: 'None',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
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
        description: 'Enemies can be hit only once per pass.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Parallel Convergence': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Ekko's basic attacks deal bonus magic damage equal to 3% (+ 3% per 100 AP) of the target's missing health against enemies below  30% of their maximum health. The damage has a minimum threshold of 15 and is capped at 150 against  minions and  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Parallel Convergence.png',
        description:
          'Active: Ekko creates an afterimage of himself that, after 2 seconds, bats a device to the target location and grants  sight of the area for 2.5 seconds. After travelling over 1.25 seconds, the device expands into a chronosphere for 1.5 seconds that  slows enemies within by 40%.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Ekko enters the sphere, it detonates to grant him a  shield for 2 seconds and  stun enemies within for 2.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 150% AP)',
            damagetype: 'None',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
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
          'Enemies can see the indicator for Parallel Convergence after 2 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Phase Dive': {
    effects: [
      {
        img: 'Phase Dive.png',
        description:
          'Active: Ekko  dashes in the target direction, then empowers his next basic attack within 3 seconds to have a 0.25-second cast time, gain  300 bonus range, cause him to  blink within 125 range of the target, and deal bonus magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 40% AP)',
            damagetype: 'None',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
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
          "Phase Dive  resets Ekko's basic attack timer. Ekko can cast any of his abilities during the dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Chronobreak: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Upon learning Chronobreak or if its current cooldown is lower than 4 seconds, Ekko reveals a time-delayed afterimage of himself that constantly tracks where he was 4 seconds ago.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Chronobreak.png',
        description:
          "Active: Ekko enters  stasis at the start of the cast time, and afterwards  heals himself and  dashes to his afterimage's current location over 0.5 seconds. Upon arrival, the stasis ends and he creates an explosion that deals magic damage to nearby enemies.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 275 / 350 / 425 / 500 (+ 175% AP)',
            damagetype: 'None',
            values: [200, 275, 350, 425, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 275 / 350 / 425 / 500',
            children: [
              {
                values: 175,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 175% AP',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 60% AP) (+ 3% per 1% of health lost in the past 4 seconds)',
            healType: 'BonusHealth',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
              {
                values: 3,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 1',
                pre: '+ 3% per 1% of health lost in the past 4 seconds',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Ekko is immune to all  displacements during Chronobreak.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
