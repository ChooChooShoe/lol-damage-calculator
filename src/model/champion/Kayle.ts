import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Kayle';
export const skillsData = ChampionSkillsData['Kayle'];

export const Kayle = {
  'Divine Ascent': {
    effects: [
      {
        img: 'Divine Ascent.png',
        description:
          'Innate: Kayle ascends through four forms that each grant additional bonuses. She ascends upon spending a skill point at levels 1, 6, 11, and 16.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Zealous.png',
        description:
          "Level 1 - Zealous: Kayle's basic attacks on-attack generate a stack of Zeal for 5 seconds, refreshing on subsequent hits and stacking up to 5 times. For each stack, she gains  6% (+ 1% per 100 AP) bonus attack speed, up to a maximum  30% (+ 5% per 100 AP). At max stacks, she becomes Exalted, gaining  10% bonus movement speed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Level 6 - Arisen: Kayle becomes  ranged and gains  350 bonus attack range for a total of  525.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Level 11 - Aflame: Kayle gains 10% bonus size. While Kayle is Exalted, her basic attacks on-attack also launch a wave of fire forward that deals 15 − 35 (based on  Starfire Spellblade's Rank) (+ 10% bonus AD) (+ 25% AP) magic damage to all enemies it passes through. The wave is affected by  critical strike modifiers.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Level 16 - Transcendent: Kayle gains an additional  100 bonus attack range for a total of  625, and permanently gains the full effects of Zealous.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Radiant Blast': {
    effects: [
      {
        img: 'Radiant Blast.png',
        description:
          'Active: Kayle conjures a portal in front of her that faces the target direction, from which a celestial sword launches forward. The sword expands upon hitting an enemy, targets struck in the area are dealt magic damage,  slowed for 2 seconds, and inflicted with 15% reduced  armor and  magic resistance for 4 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 60% bonus AD) (+ 50% AP)',
            damagetype: 'None',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
              },
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '26 / 32 / 38 / 44 / 50%',
            values: [26, 32, 38, 44, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '26 / 32 / 38 / 44 / 50%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Celestial Blessing': {
    effects: [
      {
        img: 'Celestial Blessing.png',
        description:
          'Active: Kayle and the target allied champion are  healed and gain bonus movement speed for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 25% AP)',
            damagetype: 'None',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '24 / 28 / 32 / 36 / 40% (+ 8% per 100 AP)',
            damagetype: 'None',
            values: [24, 28, 32, 36, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '24 / 28 / 32 / 36 / 40%',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 8% per 100 AP',
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
          'If cast without a valid target, or self-cast, Celestial Blessing will automatically target the closest allied champion in range, prioritizing the one with the lowest  health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Starfire Spellblade': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Kayle deals bonus magic damage  on-hit. The waves from  Divine Ascent have base damage equal to this effect's base damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Passive Damage:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 10% bonus AD) (+ 25% AP)',
            damagetype: 'None',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 10% bonus AD',
              },
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Starfire Spellblade.png',
        description:
          'Active: Kayle kindles her blade, empowering her next basic attack within 6 seconds to have an  uncancellable windup and deal additional bonus magic damage  on-hit that is capped at 400 against  monsters. If Kayle is not yet  Arisen, this attack becomes  ranged with  525 range.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "8 / 8.5 / 9 / 9.5 / 10% (+ 1.5% per 100 AP) of target's missing health",
            healType: 'OutgoingHeals',
            values: [8, 8.5, 9, 9.5, 10],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: '8 / 8.5 / 9 / 9.5 / 10%',
            post: "of target's missing health",
            children: [
              {
                values: 1.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1.5% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Starfire Spellblade 2.png',
        description:
          'Aflame Bonus: The attack explodes upon the target, dealing its damage to surrounding enemies and applying  on-hit effects. This is affected by  critical strike modifiers.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Starfire Spellblade  resets Kayle's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Divine Judgment': {
    effects: [
      {
        img: 'Divine Judgment.png',
        description:
          'Active: Kayle grants herself or a target allied champion  invulnerability for a few seconds and conjures swords of fire.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Invulnerability Duration:',
            raw: '2 / 2.25 / 2.5 / 2.75 / 3',
            values: [2, 2.25, 2.5, 2.75, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.25 / 2.5 / 2.75 / 3',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'When she finishes the cast, she rains the swords down around the target, dealing magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 275 / 350 / 425 / 500 (+ 100% bonus AD) (+ 80% AP)',
            damagetype: 'None',
            values: [200, 275, 350, 425, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 275 / 350 / 425 / 500',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
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
