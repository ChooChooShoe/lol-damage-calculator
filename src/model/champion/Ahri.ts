import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Ahri';
export const skillsData = ChampionSkillsData['Ahri'];

export const Ahri = {
  'Essence Theft': {
    effects: [
      {
        img: 'Essence Theft.png',
        description:
          'Innate: Ahri generates a stack of Essence Fragment whenever she kills a  minion or  monster. At 9 stacks, she consumes them to  heal herself for 35 − 95 (based on level) (+ 20% AP).',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally, whenever Ahri scores a champion  takedown within 3 seconds of damaging them, she consumes their essence to heal herself for 75 − 165 (based on level) (+ 30% AP).',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Orb of Deception': {
    effects: [
      {
        img: 'Orb of Deception.png',
        description:
          'Active: Ahri sends her orb in the target direction that deals magic damage to enemies hit. At maximum range, the orb homes back to her to deal the same in  true damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Damage Per Pass:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 45% AP)',
            damagetype: 'None',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
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
        description: 'Enemies can be hit only once per pass.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Fox-Fire': {
    effects: [
      {
        img: 'Fox-Fire.png',
        description:
          'Active: Ahri gains  40% bonus movement speed that decays over 2 seconds and conjures three flames which orbit her clockwise for up to 2.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After 0.25 seconds, each flame targets a  visible enemy, or after 0.4 seconds targets the closest visible enemy in range, dealing magic damage. The damage is doubled against  minions below  20% maximum health.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 30% AP)',
            damagetype: 'None',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
        description: 'Subsequent flames on a single target deal 30% damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Additional Magic Damage:',
            raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 9% AP)',
            damagetype: 'None',
            values: [15, 22.5, 30, 37.5, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45',
            children: [
              {
                values: 9,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 9% AP',
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
          "Flames prioritize enemy champions hit by  Charm, then enemy  champions, then minions that would die to Fox-Fire's damage, and then the target of Ahri's last basic attack within 3 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Charm: {
    effects: [
      {
        img: 'Charm.png',
        description:
          'Active: Ahri blows forth a kiss in the target direction that deals magic damage to the first enemy hit,  knocking them down and  charming and  slowing them by 65% for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 60% AP)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            values: [1.2, 1.4, 1.6, 1.8, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spirit Rush': {
    effects: [
      {
        img: 'Spirit Rush.png',
        description:
          "Active: Ahri  dashes to the target location and then fires essence bolts to up to 3 nearby  visible enemies, each dealing magic damage. Spirit Rush can be recast twice more within 15 seconds of the activation at no additional cost, with a 1 second static cooldown between casts. Consuming a champion's essence with  Essence Theft while Spirit Rush is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '60 / 90 / 120 (+ 35% AP)',
            damagetype: 'None',
            values: [60, 90, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Recast: Ahri mimics the first cast's effects.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Spirit Rush's recast duration will persist even after having used all recasts.  Fox-Fire can be cast during the dash. Spirit Rush will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
