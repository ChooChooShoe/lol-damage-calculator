import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Gragas';
export const skillsData = ChampionSkillsData['Gragas'];

export const Gragas = {
  'Happy Hour': {
    effects: [
      {
        img: 'Happy Hour.png',
        description:
          'Innate: Periodically, after casting an ability, Gragas  heals himself for  6.5% of his maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Barrel Roll': {
    effects: [
      {
        img: 'Barrel Roll.png',
        description:
          'Active: Gragas rolls a cask to the target location, remaining there for 4 seconds, granting  sight of the area, and fermenting over 2 seconds to increase its  damage and  slow effectiveness, up to a maximum of 150%. Barrel Roll can be recast at any time within its duration after the cask has fully travelled, and does so automatically after its duration ends.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Barrel Roll 2.png',
        description:
          'Recast: Gragas detonates the cask, dealing magic damage to nearby enemies, reduced by 30% against  minions, and  slowing them for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
            effectType: 'Damage',
            name: 'Minimum Minion Damage:',
            raw: '56 / 84 / 112 / 140 / 168 (+ 56% AP)',
            damagetype: 'None',
            values: [56, 84, 112, 140, 168],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '56 / 84 / 112 / 140 / 168',
            children: [
              {
                values: 56,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 56% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Minimum Slow:',
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
    ],
  },
  'Drunken Rage': {
    effects: [
      {
        img: 'Drunken Rage.png',
        description:
          'Active: Gragas  channels for 0.75 seconds, drinking out of his brew, and gains damage reduction for 2.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Damage Reduction:',
            raw: '10 / 12 / 14 / 16 / 18% (+ 4% per 100 AP)',
            damagetype: 'None',
            values: [10, 12, 14, 16, 18],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 12 / 14 / 16 / 18%',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Drunken Rage 2.png',
        description:
          'Upon completing the channel, Gragas empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range and deal bonus magic damage to the target and nearby enemies, capped at 300 against  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "20 / 50 / 80 / 110 / 140 (+ 7% of target's maximum health) (+ 70% AP)",
            healType: 'OutgoingHeals',
            values: [20, 50, 80, 110, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 50 / 80 / 110 / 140',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 7% of target's maximum health",
              },
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Capped Monster Damage:',
            raw: '320 / 350 / 380 / 410 / 440 (+ 70% AP)',
            damagetype: 'None',
            values: [320, 350, 380, 410, 440],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '320 / 350 / 380 / 410 / 440',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Body Slam': {
    effects: [
      {
        img: 'Body Slam.png',
        description:
          'Active: Gragas  charges in the target direction and stops upon colliding with an enemy, dealing magic damage to all nearby enemies,  knocking them back, though not through terrain, and  stunning them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 60% AP)',
            damagetype: 'None',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
        description:
          "Body Slam's  current cooldown is reduced by 3 seconds if Gragas hits an enemy.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Barrel Roll and  Explosive Cask can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Explosive Cask': {
    effects: [
      {
        img: 'Explosive Cask.png',
        description:
          'Active: Gragas hurls a cask that travels to the target location over 0.55 seconds, exploding on impact to deal magic damage to all enemies within the area and  knock them back 900 units, though not through terrain, from the epicenter of the explosion, as well as granting  sight of the area for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
