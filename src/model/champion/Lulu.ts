import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Lulu';
export const skillsData = ChampionSkillsData['Lulu'];

export const Lulu = {
  'Pix, Faerie Companion': {
    effects: [
      {
        img: 'Pix, Faerie Companion.png',
        description:
          'Innate: Lulu is assisted by Pix, an  untargetable faerie, who follows her around and fires a barrage of 3 bolts towards her target whenever she uses a basic attack on-attack. Each bolt deals 5 − 39 (based on level) (+ 5% AP) magic damage to the first enemy it collides with, for a total of 15 − 117 (based on level) (+ 15% AP) on hitting a single target with all three bolts.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Casting  Help, Pix! on an ally champion transfers Pix's help to them, causing him to fire the bolts dependent on their basic attacks.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Pix snaps back to Lulu if she is too far away.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Glitterlance: {
    effects: [
      {
        img: 'Glitterlance.png',
        description:
          'Active: Lulu and  Pix each fire a magic bolt towards the target point, each one dealing magic damage to enemies hit, reduced to 70% against  minions, and  slowing them by 80% decaying over 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
        description: 'Enemies take  25% damage from a second bolt.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '17.5 / 26.25 / 35 / 43.75 / 52.5 (+ 10% AP)',
            damagetype: 'None',
            values: [17.5, 26.25, 35, 43.75, 52.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '17.5 / 26.25 / 35 / 43.75 / 52.5',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Reduced Minion Damage:',
            raw: '12.25 / 18.375 / 24.5 / 30.625 / 36.75 (+ 7% AP)',
            damagetype: 'None',
            values: [12.25, 18.375, 24.5, 30.625, 36.75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12.25 / 18.375 / 24.5 / 30.625 / 36.75',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Whimsy: {
    effects: [
      {
        img: 'Whimsy.png',
        description:
          'Active: Lulu can cast Whimsy on herself or the target champion.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemy Cast: Lulu launches a spell onto the target enemy champion that  polymorphs them into a harmless critter for a duration, during which their base movement speed is reduced by 60, and  disarming them for the same duration.',
        leveling: [
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
      {
        img: '',
        description:
          'Self / Ally Cast: Lulu instantly casts erratic magic upon the target allied champion or herself, granting the target  bonus attack speed and  25% (+ 5% per 100 AP) bonus movement speed for the duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '25 / 27.5 / 30 / 32.5 / 35%',
            values: [25, 27.5, 30, 32.5, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 27.5 / 30 / 32.5 / 35%',
          },
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '3 / 3.25 / 3.5 / 3.75 / 4',
            values: [3, 3.25, 3.5, 3.75, 4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3.25 / 3.5 / 3.75 / 4',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Help, Pix!': {
    effects: [
      {
        img: 'Help, Pix!.png',
        description:
          'Active: Lulu can cast Help, Pix! on herself or the target unit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemy Cast: Lulu sends  Pix to the far side of the target enemy for 4 seconds, dealing magic damage and  revealing them for the same duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 40% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
          'Self / Ally Cast: Lulu sends  Pix to the target ally for 6.25 seconds. If the target is a  champion, they are granted a  shield for 2.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '75 / 110 / 145 / 180 / 215 (+ 55% AP)',
            damagetype: 'None',
            values: [75, 110, 145, 180, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 110 / 145 / 180 / 215',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wild Growth': {
    effects: [
      {
        img: 'Wild Growth.png',
        description:
          'Active: Lulu enlarges herself or the target allied champion,  knocking up nearby enemies for 0.75 seconds. For the next 7 seconds, the target gains  bonus health and 40% increased size and  slows nearby enemies, which lingers for 0.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Health:',
            raw: '275 / 350 / 425 / 500 / 575 (+ 45% AP)',
            damagetype: 'None',
            values: [275, 350, 425, 500, 575],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '275 / 350 / 425 / 500 / 575',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 37.5 / 45 / 52.5 / 60%',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
