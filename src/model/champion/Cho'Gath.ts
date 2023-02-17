import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = "Cho'Gath";
export const skillsData = ChampionSkillsData["Cho'Gath"];

export const ChoGath = {
  Carnivore: {
    effects: [
      {
        img: 'Carnivore.png',
        description:
          "Innate: Whenever Cho'Gath kills an enemy, it  heals for 18 − 52 (based on level) and restores  4.72 − 9.48 (based on level) mana.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Rupture: {
    effects: [
      {
        img: 'Rupture.png',
        description:
          "Active: Cho'Gath ruptures the target location after a 0.627 seconds-second delay, granting  sight of the area before dealing magic damage to enemies within and  knocking them up for 1 second, and afterwards  slowing them by 60% for 1.5 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 100% AP)',
            damagetype: 'None',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
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
    ],
  },
  'Feral Scream': {
    effects: [
      {
        img: 'Feral Scream.png',
        description:
          "Active: Cho'Gath roars in a cone in the target direction, dealing magic damage to enemies hit.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 70% AP)',
            damagetype: 'None',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
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
          'Enemy  champions and  Rift Scuttlers hit are also  silenced for a duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Silence Duration:',
            raw: '1.6 / 1.7 / 1.8 / 1.9 / 2',
            values: [1.6, 1.7, 1.8, 1.9, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.6 / 1.7 / 1.8 / 1.9 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Vorpal Spikes': {
    effects: [
      {
        img: 'Vorpal Spikes.png',
        description:
          "Active: Cho'Gath empowers its next 3 basic attacks within 6 seconds to gain  50 bonus range and launch a blast of spikes on-attack in the target's direction. Enemies struck are dealt magic damage and  slowed by an amount that decays over 1.5 seconds. The damage based on the target's health ratio is capped against  minions and  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "22 / 34 / 46 / 58 / 70 (+ 30% AP) (+ 3% (+ 0.5% per  Feast stack) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [22, 34, 46, 58, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '22 / 34 / 46 / 58 / 70',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
              {
                values: 3,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 3%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 0.5,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'feastStacks',
                    unitsText: 'per  Feast stack',
                    pre: '+ 0.5% per  Feast stack',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Capped Monster Percent Damage:',
            raw: '60 / 80 / 100 / 120 / 140',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Vorpal Spikes  resets Cho'Gath's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Feast: {
    effects: [
      {
        img: 'Feast.png',
        description:
          "Active: Cho'Gath attempts to eat the target enemy, dealing them  true damage. Against non-champions, the base damage is modified.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Champion True Damage:',
            raw: '300 / 475 / 650 (+ 50% AP) (+ 10% bonus health)',
            healType: 'BonusHealth',
            values: [300, 475, 650],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 475 / 650',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 10% bonus health',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Non-Champion True Damage:',
            raw: '1200 (+ 50% AP) (+ 10% bonus health)',
            healType: 'BonusHealth',
            values: 1200,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1200',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 10% bonus health',
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
          "If the target is killed, Cho'Gath gains a stack of Feast. Only 6 stacks can be gained from non-epic  monsters or  minions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Each stack of Feast grants Cho'Gath  bonus health as well as  bonus attack range and increased size, capping at  75 bonus attack range and 100% increased size.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Health Per Stack:',
            raw: '80 / 100 / 120 / 140 / 160',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Attack Range Per Stack:',
            raw: '4.62 / 5.38 / 6.15 / 6.92 / 7.69',
            values: [4.62, 5.38, 6.15, 6.92, 7.69],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4.62 / 5.38 / 6.15 / 6.92 / 7.69',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Size Per Stack:',
            raw: '6 / 7 / 8 / 9 / 10%',
            values: [6, 7, 8, 9, 10],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
