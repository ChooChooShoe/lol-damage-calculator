import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Jarvan IV';
export const skillsData = ChampionSkillsData['Jarvan IV'];

export const JarvanIV = {
  'Martial Cadence': {
    effects: [
      {
        img: 'Martial Cadence.png',
        description:
          "Innate: Jarvan IV's basic attacks are empowered to deal additional physical damage equal to 8% of the target's current health, with a minimum threshold of 20 and capped at 400 against all targets.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'This effect cannot occur on the same target more than once every few seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dragon Strike': {
    effects: [
      {
        img: 'Dragon Strike.png',
        description:
          'Active: Jarvan IV extends his lance in the target direction, dealing physical damage to enemies hit and inflicting them with  armor reduction for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '90 / 130 / 170 / 210 / 250 (+ 140% bonus AD)',
            damagetype: 'None',
            values: [90, 130, 170, 210, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 130 / 170 / 210 / 250',
            children: [
              {
                values: 140,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 140% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Armor Reduction:',
            raw: "10 / 14 / 18 / 22 / 26% of target's armor",
            values: [10, 14, 18, 22, 26],
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText: "of target's armor",
            pre: "10 / 14 / 18 / 22 / 26% of target's armor",
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the lance connects with a deployed  Demacian Standard, Jarvan IV  dashes to its location,  knocking up nearby enemies around him and along his path for 0.75 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Jarvan IV can cast any of his abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Golden Aegis': {
    effects: [
      {
        img: 'Golden Aegis.png',
        description:
          'Active: Jarvan IV  slows all nearby enemies for 2 seconds.',
        leveling: [
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
          'Jarvan IV also grants himself a  shield for 4 seconds, increased by 1.3% of his maximum health for each enemy  champion hit by Golden Aegis.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Demacian Standard': {
    effects: [
      {
        img: 'false',
        description: 'Passive: Jarvan IV gains  bonus attack speed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Demacian Standard.png',
        description:
          'Active: Jarvan IV throws a Demacian flag to the target location, dealing magic damage to enemies within the area.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The flag then remains for 8 seconds, granting  sight of its surroundings and providing an aura that grants bonus attack speed equal to Demacian Standard's passive to Jarvan IV and all nearby allied champions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Demacian Standard will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Cataclysm: {
    effects: [
      {
        img: 'Cataclysm.png',
        description:
          "Active: Jarvan IV  leaps with  displacement immunity to the target enemy champion's location over 0.35 seconds, dealing physical damage to all nearby enemies upon arrival.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '200 / 262.5 / 325 / 387.5 / 450 (+ 180% bonus AD)',
            damagetype: 'None',
            values: [200, 262.5, 325, 387.5, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 262.5 / 325 / 387.5 / 450',
            children: [
              {
                values: 180,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 180% bonus AD',
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
          'Upon impact, he creates a circle of impassable terrain that initially pulls units inside it, though not rendering them  airborne. The terrain lasts for 3.5 seconds and grants  sight of the area. Cataclysm can be recast after 1 second while the terrain is active.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Jarvan IV destroys the terrain created by Cataclysm.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
