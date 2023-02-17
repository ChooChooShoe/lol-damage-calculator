import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Elise';
export const skillsData = ChampionSkillsData['Elise'];

export const Elise = {
  'Spider Queen': {
    effects: [
      {
        img: 'Spider Queen.png',
        description:
          "Innate - Human Form: Elise gains one dormant Spiderling whenever she hits an enemy with an ability, storing up to 2 / 3 / 4 / 5 (based on  Human Form's Rank) at a time.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate - Spider Form: Elise's basic attacks deal 10 / 20 / 30 / 40 (based on  Spider Form's Rank) (+ 20% AP) bonus magic damage and  heal her for 4 / 6 / 8 / 10 (based on  Spider Form's Rank) (+ 8% AP)  on-hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about Spiderlings.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Neurotoxin: {
    effects: [
      {
        img: 'Neurotoxin.png',
        description:
          "Active: Elise fires a toxin at the target enemy that deals magic damage, with the damage based on the target's health ratio being capped against  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "40 / 75 / 110 / 145 / 180 (+ 4% (+ 3% per 100 AP) of target's current health)",
            healType: 'OutgoingHeals',
            values: [40, 75, 110, 145, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 75 / 110 / 145 / 180',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'target',
                units: 'current_hp',
                unitsText: "of target's current health",
                pre: '+ 4%',
                post: "of target's current health",
                children: [
                  {
                    values: 3,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 3% per 100 AP',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Capped Monster Damage:',
            raw: '75 / 100 / 125 / 150 / 175',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Venomous Bite': {
    effects: [
      {
        img: 'Venomous Bite.png',
        description:
          'Active: Elise  pounces at the target enemy with her fangs and bites them, dealing magic damage, capped against  monsters, and applying  on-hit effects at 100% effectiveness.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "70 / 105 / 140 / 175 / 210 (+ 8% (+ 3% per 100 AP) of target's missing health)",
            healType: 'OutgoingHeals',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
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
                    values: 3,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 3% per 100 AP',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Maximum Monster Damage:',
            raw: '145 / 205 / 265 / 325 / 385',
            values: [145, 205, 265, 325, 385],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '145 / 205 / 265 / 325 / 385',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If there are active  Spiderlings or  Volatile Spiderlings nearby, they will  dash alongside Elise towards Venomous Bite's target and reprioritize them.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Volatile Spiderling': {
    effects: [
      {
        img: 'Volatile Spiderling.png',
        description:
          'Active: Elise summons a venom-gorged spider for 3 seconds, which is  untargetable and crawls to the target location, navigating its path upon encountering terrain.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The spider explodes upon contact with an enemy or at the end of its lifespan, dealing magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 95% AP)',
            damagetype: 'None',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
            children: [
              {
                values: 95,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 95% AP',
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
          'If the spider does not hit an enemy before reaching the target location, it chases down a nearby enemy, prioritizing  champions and gaining  bonus movement speed based on its proximity to the target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Skittering Frenzy': {
    effects: [
      {
        img: 'false',
        description: "Passive: Elise's  Spiderlings gain  bonus attack speed.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Spiderling Bonus Attack Speed:',
            raw: '5 / 10 / 15 / 20 / 25%',
            values: [5, 10, 15, 20, 25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Skittering Frenzy.png',
        description:
          'Active: Elise and her  Spiderlings gain bonus attack speed for 3 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '60 / 70 / 80 / 90 / 100%',
            values: [60, 70, 80, 90, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 70 / 80 / 90 / 100%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Skittering Frenzy  resets Elise's basic attack timer. Elise loses Skittering Frenzy immediately when she switches to  Human Form.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Cocoon: {
    effects: [
      {
        img: 'Cocoon.png',
        description:
          'Active: Elise fires a web in the target direction,  stunning the first enemy hit for a few seconds, during which they are also  revealed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
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
  Rappel: {
    effects: [
      {
        img: 'Rappel.png',
        description:
          'Active: Elise and her  Spiderlings lift up into the air,  vanishing and becoming  unable to act for up to 2 seconds and granting  sight of the area for the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Rappel can be recast on a target enemy within the duration, and does so automatically after the duration without a target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Elise and her  Spiderlings instantly  descend behind the target, or their current position if there is no target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If cast directly on an enemy, Elise and her  Spiderlings automatically recast on the target after 1 second. Upon landing this way,  Spider Queen's bonuses are increased for 5 seconds.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Spider Effects Increase:',
            raw: '40 / 55 / 70 / 85 / 100%',
            values: [40, 55, 70, 85, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Rappel's recast can be used while affected by  cast-inhibiting crowd control.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spider Form / Human Form': {
    effects: [
      {
        img: 'false',
        description: "Passive:  Spider Queen's bonuses are increased.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Spider Form.png',
        description:
          'Toggle: Elise switches between her  Human Form and  Spider Form.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Spider Form: Elise transforms into a spider, gaining  25 bonus movement speed,  melee basic attacks with  125 range, and access to her arachnid abilities. Additionally, Elise unleashes all stored  Spiderlings.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Human Form: Elise transforms into a human, gaining  ranged basic attacks, and access to her human abilities. Additionally, Elise stores all unleashed Spiderlings.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Elise begins with one rank in Spider Form / Human Form and can increase it at levels 6, 11, and 16.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
