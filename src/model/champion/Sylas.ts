import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Sylas';
export const skillsData = ChampionSkillsData['Sylas'];

export const Sylas = {
  'Petricite Burst': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Whenever Sylas casts an ability, he generate a stack of Unshackled for 4 seconds, refreshing on subsequent casts and stacking up to 3 times. While Sylas has stacks, he gains  125% bonus attack speed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Petricite Burst.png',
        description:
          "Unshackled: Sylas' next basic attack is empowered to consume a stack to whirl his chains around him, which has an  uncancellable windup and deals 130% AD (+ 25% AP) magic damage to the primary target and 40% AD (+ 20% AP) magic damage to nearby enemies.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Damage to secondary targets executes  minions that would be left below  25 health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The empowered attack applies on-hit effects only to the primary target but disables the bonus damage from  critical strikes. Ability effects only apply to secondary targets.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Chain Lash': {
    effects: [
      {
        img: 'Chain Lash.png',
        description:
          'Active: Sylas lashes out two chains that converge to the target location and extend beyond it up to a maximum range, dealing magic damage to enemies hit and  slowing them for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 60 / 80 / 100 / 120 (+ 40% AP)',
            damagetype: 'None',
            values: [40, 60, 80, 100, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 60 / 80 / 100 / 120',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "After a 0.6-second delay, the chains' intersection explodes to deal magic damage to enemies within, reduced by 60% against  minions and  monsters.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 125 / 180 / 235 / 290 (+ 90% AP)',
            damagetype: 'None',
            values: [70, 125, 180, 235, 290],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 125 / 180 / 235 / 290',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Champion Damage:',
            raw: '110 / 185 / 260 / 335 / 410 (+ 130% AP)',
            damagetype: 'None',
            values: [110, 185, 260, 335, 410],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '110 / 185 / 260 / 335 / 410',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 130% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Chain Lash will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Kingslayer: {
    effects: [
      {
        img: 'Kingslayer.png',
        description:
          "Active: Sylas  dashes to the front of the target enemy's location then strikes them to deal magic damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 90% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
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
          'If this damages a  champion, Sylas is also  healed, increased by 0% − 100% (based on his missing health).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Heal:',
            raw: '20 / 40 / 60 / 80 / 100 (+ 40% AP)',
            damagetype: 'None',
            values: [20, 40, 60, 80, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 40 / 60 / 80 / 100',
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
    ],
  },
  Abscond: {
    effects: [
      {
        img: 'Abscond.png',
        description:
          'Active: Sylas  dashes to the target location. Within 3.5 seconds, he can cast  Abduct after a 0.2-second delay from casting Abscond.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Kingslayer can be cast during the dash. Abscond will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Abduct: {
    effects: [
      {
        img: 'Abduct.png',
        description:
          'Active: Sylas whips out his chains in the target direction that deal magic damage to the first enemy hit and  reveal and  stun them for 0.5 seconds. Upon hitting the target, Sylas  dashes to their location and  knocks them up for 0.5 seconds upon arrival.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 130 / 180 / 230 / 280 (+ 100% AP)',
            damagetype: 'None',
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
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Sylas is  unable to cast  Chain Lash while the chains are in flight.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Hijack: {
    effects: [
      {
        img: 'Hijack.png',
        description:
          'Active: Sylas launches his chains at the target enemy champion, gaining a copy of their ultimate ability and  revealing them for 0.825 seconds at the start of the cast time. Sylas cannot select the same champion again for a set duration, and can hold the hijacked ultimate for up to 90 seconds, during which he can recast Hijack.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Recast: Sylas casts his hijacked ultimate ability at no cost, scaling based on Hijack's rank and his own statistics.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Hijacked ultimates and abilities that do not scale with  ability power have their  attack damage ratios converted to ability power ratios, scaling with 0.6% AP per 1% total AD, and 0.4% AP per 1% bonus AD respectively.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
