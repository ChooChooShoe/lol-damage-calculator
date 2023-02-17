import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Dr. Mundo';
export const skillsData = ChampionSkillsData['Dr. Mundo'];

export const DrMundo = {
  'Goes Where He Pleases': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Dr. Mundo  regenerates an additional「 0.4% − 2.3% (based on level) of his maximum health every 5 seconds. 」「 0.08% − 0.46% (based on level) of his maximum health each second. 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Goes Where He Pleases.png',
        description:
          'Passive: Periodically, Dr. Mundo gains immunity to the  immobilizing effects of the next hostile spell to affect him. Upon resisting one, Dr. Mundo pays a health cost equal to 4% of his current health and propels a canister that lands 525 units in the general direction of its source, remaining on the ground for 7 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Dr. Mundo can move near the canister to consume it,  healing himself for 4% of his maximum health and reducing the  cooldown of Goes Where He Pleases by 15 seconds. Enemy  champions can move near it to destroy it.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Goes Where He Pleases'  cooldown resets upon respawning.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Infected Bonesaw': {
    effects: [
      {
        img: 'Infected Bonesaw.png',
        description:
          'Active: Dr. Mundo throws an infected bonesaw in the target direction that deals magic damage to the first enemy hit and  slows them by 40% for 2 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "20 / 22.5 / 25 / 27.5 / 30% of target's current health",
            healType: 'OutgoingHeals',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: "20 / 22.5 / 25 / 27.5 / 30% of target's current health",
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Infected Bonesaw has a minimum damage threshold, and is capped against  monsters.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Minimum Damage:',
            raw: '80 / 130 / 180 / 230 / 280',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
          },
          {
            effectType: 'Unique',
            name: 'Capped Monster Damage:',
            raw: '350 / 425 / 500 / 575 / 650',
            values: [350, 425, 500, 575, 650],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '350 / 425 / 500 / 575 / 650',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the bonesaw hits an enemy, Dr. Mundo  heals for 50% of the health cost, increased to 100% against  champions or  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Heart Zapper': {
    effects: [
      {
        img: 'Heart Zapper.png',
        description:
          'Active: Dr. Mundo charges up a defibrillator for up to 3 seconds, dealing magic damage every 0.25 seconds to nearby enemies and storing 80% − 95% (based on level) of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0.75 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Magic Damage per Tick:',
            raw: '5 / 8.75 / 12.5 / 16.25 / 20',
            values: [5, 8.75, 12.5, 16.25, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 8.75 / 12.5 / 16.25 / 20',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Heart Zapper can be recast after 1 second within the duration, and does so automatically after the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Heart Zapper 2.png',
        description:
          'Recast: Dr. Mundo detonates the defibrillator, dealing magic damage to nearby enemies and  healing for 50% of grey health, increased to 100% if at least one enemy champion or large monster is hit.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 7% bonus health)',
            healType: 'BonusHealth',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 7% bonus health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blunt Force Trauma': {
    effects: [
      {
        img: 'false',
        description: 'Passive: Dr. Mundo gains  bonus attack damage.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Attack Damage:',
            raw: '2 / 2.5 / 3 / 3.5 / 4% maximum health',
            healType: 'BonusHealth',
            values: [2, 2.5, 3, 3.5, 4],
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '2 / 2.5 / 3 / 3.5 / 4% maximum health',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Blunt Force Trauma.png',
        description:
          "Active: Dr. Mundo empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage, increased by 0% − 60% (based on missing health). If the target dies or is a small monster, they are sent flying away in a line, though not through terrain, causing all enemies they pass through to take 100% AD plus Blunt Force Trauma's minimum bonus damage.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Minimum Bonus Physical Damage:',
            raw: '5 / 15 / 25 / 35 / 45 (+ 7% bonus health)',
            healType: 'BonusHealth',
            values: [5, 15, 25, 35, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 15 / 25 / 35 / 45',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 7% bonus health',
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
          "Blunt Force Trauma as well as the triggering attack's damage is increased to 140% against  minions and 150% against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Blunt Force Trauma  resets Dr. Mundo's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Maximum Dosage': {
    effects: [
      {
        img: 'Maximum Dosage.png',
        description:
          'Active: Dr. Mundo injects himself with chemicals to become enhanced for 10 seconds, gaining increased  base health,  bonus movement speed, and  bonus health regeneration.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Increased Base Health:',
            raw: '15 / 17.5 / 20 / 22.5 / 25% missing health',
            healType: 'BonusHealth',
            values: [15, 17.5, 20, 22.5, 25],
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'missing health',
            pre: '15 / 17.5 / 20 / 22.5 / 25% missing health',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
          {
            effectType: 'Heal',
            name: 'Bonus Health Regeneration:',
            raw: '20 / 30 / 40 / 50 / 60% maximum health',
            healType: 'BonusHealth',
            values: [20, 30, 40, 50, 60],
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '20 / 30 / 40 / 50 / 60% maximum health',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "At rank 3, Maximum Dosage's increased base health and bonus health regeneration are both increased by 5% for each enemy  champion within 1200 units at the time of cast.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
