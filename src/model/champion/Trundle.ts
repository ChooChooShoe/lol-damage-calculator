import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Trundle';
export const skillsData = ChampionSkillsData['Trundle'];

export const Trundle = {
  "King's Tribute": {
    effects: [
      {
        img: "King's Tribute.png",
        description:
          "Innate: Whenever a nearby enemy dies, Trundle  heals himself for 1.8% − 5.5% (based on level) of the target's maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Chomp: {
    effects: [
      {
        img: 'Chomp.png',
        description:
          'Active: Trundle empowers his next basic attack within 7 seconds to have an  uncancellable windup, deal bonus physical damage and  slow the target by 75% for 0.1 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '20 / 40 / 60 / 80 / 100 (+ 15 / 25 / 35 / 45 / 55% AD)',
            damagetype: 'None',
            values: [20, 40, 60, 80, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 40 / 60 / 80 / 100',
            children: [
              {
                values: [15, 25, 35, 45, 55],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 15 / 25 / 35 / 45 / 55% AD',
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
          "After using the empowered attack, Trundle gains  bonus attack damage for 5 seconds and reduces the target's attack damage by half that amount for the same duration.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Damage:',
            raw: '20 / 25 / 30 / 35 / 40',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
          },
          {
            effectType: 'Unique',
            name: 'Attack Damage Reduction:',
            raw: '10 / 12.5 / 15 / 17.5 / 20',
            values: [10, 12.5, 15, 17.5, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 12.5 / 15 / 17.5 / 20',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Chomp  resets Trundle's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Frozen Domain': {
    effects: [
      {
        img: 'Frozen Domain.png',
        description:
          'Active: Trundle coats the target location in ice for 8 seconds. While he is within the area, he gains  bonus attack speed,  bonus movement speed, and 25% increased  healing from all sources.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '30 / 50 / 70 / 90 / 110%',
            values: [30, 50, 70, 90, 110],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70 / 90 / 110%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 28 / 36 / 44 / 52%',
            values: [20, 28, 36, 44, 52],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 28 / 36 / 44 / 52%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Frozen Domain will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Pillar of Ice': {
    effects: [
      {
        img: 'Pillar of Ice.png',
        description:
          'Active: Trundle erects a pillar of ice at the target location for 6 seconds, which  knocks back units hit to 225 units from its center. The pillar acts as terrain and  slows nearby enemies.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 34 / 38 / 42 / 46%',
            values: [30, 34, 38, 42, 46],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 34 / 38 / 42 / 46%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Subjugate: {
    effects: [
      {
        img: 'Subjugate.png',
        description:
          "Active: Trundle drains the life force out of the target enemy champion, dealing magic damage and  healing himself for the same amount. He also steals 40% of their current  armor and  magic resistance, and increases in size by 18% while reducing the target's size by 9.9%.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Total Magic Damage:',
            raw: "20 / 22.5 / 25 / 27.5 / 30% (+ 2% per 100 AP) of the target's maximum health",
            healType: 'OutgoingHeals',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
            post: "of the target's maximum health",
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
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
          'Half of the total damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has  died.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Initial Magic Damage:',
            raw: "10 / 11.25 / 12.5 / 13.75 / 15% (+ 1% per 100 AP) of the target's maximum health",
            healType: 'OutgoingHeals',
            values: [10, 11.25, 12.5, 13.75, 15],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '10 / 11.25 / 12.5 / 13.75 / 15%',
            post: "of the target's maximum health",
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
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
          'The armor and magic resistance will remain stolen for 4 seconds after the drain has ended.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
