import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Seraphine';
export const skillsData = ChampionSkillsData['Seraphine'];

export const Seraphine = {
  'Stage Presence': {
    effects: [
      {
        img: 'Stage Presence.png',
        description:
          "Innate - Echo: Seraphine basic abilities generate a stack of Echo, stacking up to 2 times. At 2 stacks, Seraphine's next basic ability casts an additional time at no cost after a 0.033 seconds delay, consuming all Echo stacks after the cast time of the second cast.Seraphine gains maximum stacks of Echo when the game starts and upon respawning.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate - Harmony: Seraphine's ability casts grant a Note to herself and nearby allied  champions that lasts 6 seconds, refreshes on subsequent Notes and stacks up to 4 times on each unit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "While any amount of Notes are active, Seraphine's next basic attack is empowered to have an  uncancellable windup, gain  25 bonus attack range per Note, and fire all Notes at the target, with each one dealing 4 / 8 / 14 / 24 (based on level) (+ 7% AP) magic damage, reduced by 75% for Notes from allies and increased by 200% against  minions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'High Note': {
    effects: [
      {
        img: 'High Note.png',
        description:
          "Active: Seraphine hurls a soundwave to the target location that quickly expands in a radius upon arrival, dealing magic damage to enemies within the area,  increased by 0% − 50% (based on target's missing health).",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 70 / 85 / 100 / 115 (+ 45 / 50 / 55 / 60 / 65% AP)',
            damagetype: 'None',
            values: [55, 70, 85, 100, 115],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 70 / 85 / 100 / 115',
            children: [
              {
                values: [45, 50, 55, 60, 65],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45 / 50 / 55 / 60 / 65% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'High Note will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Surround Sound': {
    effects: [
      {
        img: 'Surround Sound.png',
        description:
          'Active: Seraphine grants a  shield to herself and nearby allied champions for 2.5 seconds. For the same duration, she also gains  20% (+ 4% per 100 AP) decaying bonus movement speed and grants allies 8% (+ 1.6% per 100 AP) bonus movement speed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 25% AP)',
            damagetype: 'None',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Seraphine already had a  shield at the time of cast, Surround Sound will pulse after the duration,  healing herself and nearby allied champions, increased for each ally.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Heal Per Ally:',
            raw: "5 / 5.5 / 6 / 6.5 / 7% (+ 0.4% per 100 AP) of target's missing health",
            healType: 'OutgoingHeals',
            values: [5, 5.5, 6, 6.5, 7],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: '5 / 5.5 / 6 / 6.5 / 7%',
            post: "of target's missing health",
            children: [
              {
                values: 0.4,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.4% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Surround Sound's effects can stack up to 2 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Beat Drop': {
    effects: [
      {
        img: 'Beat Drop.png',
        description:
          'Active: Seraphine fires a heavy soundwave in the target direction that deals magic damage to enemies hit and  slows them by 99% for 1.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 35% AP)',
            damagetype: 'None',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
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
        img: 'Beat Drop 4.png',
        description:
          'Enemies that are already  slowed are also  rooted for the same duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Beat Drop 5.png',
        description:
          'Enemies that are  immobilized or  grounded are also  stunned for the same duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Encore: {
    effects: [
      {
        img: 'Encore.png',
        description:
          'Active: Seraphine projects a captivating force in the target direction that deals magic damage to enemies hit,  charms them, during which they are  revealed, and  slows them by 40% for a duration, increasing by 15% every 0.25 seconds over the duration up to 99%.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 175 / 200 / 225 / 250 (+ 60% AP)',
            damagetype: 'None',
            values: [150, 175, 200, 225, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 175 / 200 / 225 / 250',
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
            raw: '1.25 / 1.375 / 1.5 / 1.625 / 1.75',
            values: [1.25, 1.375, 1.5, 1.625, 1.75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.375 / 1.5 / 1.625 / 1.75',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Encore's projectile resets its remaining travel distance whenever it hits an allied or enemy  champion, excluding Seraphine. Allied champions hit gain  4 Notes.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
