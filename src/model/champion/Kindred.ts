import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Kindred';
export const skillsData = ChampionSkillsData['Kindred'];

export const Kindred = {
  'Mark of the Kindred': {
    effects: [
      {
        img: 'Mark of the Kindred.png',
        description:
          'Innate: Both Lamb and Wolf mark targets to hunt. Scoring a  takedown against a hunted target collects a stack of Mark of the Kindred. Mark of the Kindred: Lamb gains 75 − 250 (based on marks)  bonus range on her basic attacks and  Mounting Dread.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Lamb's Mask profileicon.png",
        description:
          'Innate - Lamb: Lamb is offered a selection of enemy  champions to hunt if she has not been in combat with them in the last 6 seconds. Once selected, the mark is applied after an 8-second delay and thereafter it can be collected by Kindred. Lamb gains the ability to select a new target every 75 seconds. Targets successfully hunted cannot be marked again for 4 minutes.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Wolf's Mask profileicon.png",
        description:
          "Innate - Wolf: Starting at 3:15, Wolf periodically marks a random large  monster within the enemy team's jungle for 180 seconds. The hunted camp is highlighted on the mini map to both teams. Once the hunted target is slain or the mark expires, Wolf will wait 45 seconds before selecting a new target. The type of monster that Wolf can mark changes based on Kindred's current Mark of the Kindred stacks:\n0 :  Rift Scuttler\n1 – 3:  Rift Scuttler,  Crimson Raptor,  Gromp\n4 – 7:  Ancient Krug,  Blue Sentinel,  Greater Murk Wolf, or  Red Brambleback\n8 + :  Rift Herald or  Baron Nashor,  Dragon or  Elder Dragon",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dance of Arrows': {
    effects: [
      {
        img: 'Dance of Arrows.png',
        description:
          'Active: Lamb  dashes toward the target location, gaining  35% (+ 5% per  mark) bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby  visible enemies that deals physical damage. Her current attack target within any proximity will be prioritized by one of the arrows.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 75% bonus AD)',
            damagetype: 'None',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
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
          "Dance of Arrows'   total cooldown is reduced to an amount while Lamb is within the area of  Wolf's Frenzy. Casting  Wolf's Frenzy reduces Dance of Arrows'  current cooldown to the same amount.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Static Cooldown:',
            raw: '4 / 3.5 / 3 / 2.5 / 2',
            values: [4, 3.5, 3, 2.5, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 3.5 / 3 / 2.5 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Dance of Arrows  resets Lamb's basic attack timer. Lamb can cast any of her abilities during the dash. Dance of Arrows will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Wolf's Frenzy": {
    effects: [
      {
        img: 'false',
        description:
          "Passive: As Kindred move and attack, they build up to 100 stacks of Hunter's Vigor. At maximum stacks, Lamb's next basic attack  heals her for 0% − 100% (based on Kindred's missing health) of 47 − 81 (based on level). The heal is not triggered if Kindred is at full health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Wolf's Frenzy.png",
        description:
          'Active: Wolf  dashes to the target location, then claims the surrounding area as his territory for the next 8.5 seconds, separating from Lamb. He automatically attacks the closest nearby  visible enemy within the area, prioritizing the last enemy Lamb has attacked, then enemy champions, then non-champions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Wolf's attacks deal magic damage and scale with 25% of Kindred's bonus attack speed. Against monsters, his attacks deal 150% damage and  slow the target by 50% for 2 seconds.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "25 / 30 / 35 / 40 / 45 (+ 20% bonus AD) (+ 1.5% (+ 1% per  mark) of target's current health)",
            healType: 'OutgoingHeals',
            values: [25, 30, 35, 40, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% bonus AD',
              },
              {
                values: 1.5,
                valuesIsPercent: true,
                user: 'target',
                units: 'current_hp',
                unitsText: "of target's current health",
                pre: '+ 1.5%',
                post: "of target's current health",
                children: [
                  {
                    values: 1,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'kindredMarks',
                    unitsText: 'per  mark',
                    pre: '+ 1% per  mark',
                  },
                ],
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
          "Wolf's Frenzy ends immediately if Lamb leaves the area or dies.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Mounting Dread': {
    effects: [
      {
        img: 'Mounting Dread.png',
        description:
          'Active: Lamb fires a shot at the target enemy that  slows them by 50% for 1 second and applies a stack of Mounting Dread for 4 seconds. Her basic attacks each apply an additional stack, refreshing the duration and stacking up to 4 times.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Her next basic attack against a target with 3 stacks directs Wolf to pounce on the target, consuming all stacks to deal additional physical damage, capped at 300 against  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Additional Physical Damage:',
            raw: "80 / 100 / 120 / 140 / 160 (+ 80% bonus AD) (+ 8% (+ 0.5% per  Mark) of target's missing health)",
            healType: 'OutgoingHeals',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
              {
                values: 8,
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: '+ 8%',
                post: "of target's missing health",
                children: [
                  {
                    values: 0.5,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'kindredMarks',
                    unitsText: 'per  Mark',
                    pre: '+ 0.5% per  Mark',
                  },
                ],
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
          'The additional damage will  critically strike against targets below 15% − 65% (based on critical strike chance) of their  maximum health, increasing the missing health portion by (50% +  35%), and cannot  critically strike otherwise. The base damage of the pounce can independently  critically strike.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Lamb's Respite": {
    effects: [
      {
        img: "Lamb's Respite.png",
        description:
          'Active: Lamb blesses the ground under herself for 4 seconds and enters a 0.264 seconds cast time. All units inside the zone gain a  minimum health threshold of  10% of their maximum health, and will become  invulnerable for the remaining duration when they reach or are at the threshold, during which they also cannot be  healed, but can still  regenerate health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'All targetable units within the zone are  healed when the blessing ends.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Heal:',
            raw: '225 / 262.5 / 300 / 337.5 / 375',
            values: [225, 262.5, 300, 337.5, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '225 / 262.5 / 300 / 337.5 / 375',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
