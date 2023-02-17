import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Kassadin';
export const skillsData = ChampionSkillsData['Kassadin'];

export const Kassadin = {
  'Void Stone': {
    effects: [
      {
        img: 'Void Stone.png',
        description:
          'Innate: Kassadin is permanently  ghosted and takes 10% reduced  magic damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Null Sphere': {
    effects: [
      {
        img: 'Null Sphere.png',
        description:
          'Active: Kassadin fires an orb of void energy at the target enemy that deals magic damage and  disrupts their ongoing  channels.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '65 / 95 / 125 / 155 / 185 (+ 70% AP)',
            damagetype: 'None',
            values: [65, 95, 125, 155, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 95 / 125 / 155 / 185',
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
      {
        img: '',
        description:
          'He also gains a  shield that absorbs magic damage for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Shield Strength:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 30% AP)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
    ],
  },
  'Nether Blade': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Kassadin's basic attacks deal 20 (+ 10% AP) bonus magic damage  on-hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Nether Blade.png',
        description:
          'Active: Kassadin empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal increased bonus magic damage, and restore  mana, with the restoration amount quintupled against  champions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Bonus Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 80% AP)',
            damagetype: 'None',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '4 / 4.5 / 5 / 5.5 / 6% of missing mana',
            values: [4, 4.5, 5, 5.5, 6],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_mana',
            unitsText: 'of missing mana',
            pre: '4 / 4.5 / 5 / 5.5 / 6% of missing mana',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Nether Blade  resets Kassadin's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Force Pulse': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Each time Kassadin or a nearby  champion casts an ability, Force Pulse's  current cooldown is reduced by 0.75 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Force Pulse.png',
        description:
          'Active: Kassadin emits a pulse of void energy in a cone in the target direction that deals magic damage to enemies hit and  slows them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 85% AP)',
            damagetype: 'None',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 85% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '50 / 60 / 70 / 80 / 90%',
            values: [50, 60, 70, 80, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Riftwalk: {
    effects: [
      {
        img: 'Riftwalk.png',
        description:
          'Active: Kassadin  blinks toward the target location, dealing magic damage to all nearby enemies upon arrival. He then gains a stack of Riftwalk for 5 seconds, refreshing on subsequent casts and stacking up to 4 times.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 80 / 90 / 100 / 110 (+ 40% AP) (+ 2% maximum mana)',
            damagetype: 'None',
            values: [70, 80, 90, 100, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 80 / 90 / 100 / 110',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_mana',
                unitsText: 'maximum mana',
                pre: '+ 2% maximum mana',
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
          'Riftwalk: For each stack, Riftwalk deals bonus magic damage at an increased  mana cost.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Damage Per Stack:',
            raw: '35 / 40 / 45 / 50 / 55 (+ 10% AP) (+ 1% maximum mana)',
            damagetype: 'None',
            values: [35, 40, 45, 50, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
              {
                values: 1,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_mana',
                unitsText: 'maximum mana',
                pre: '+ 1% maximum mana',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Riftwalk will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
