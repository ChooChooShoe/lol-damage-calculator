import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Evelynn';
export const skillsData = ChampionSkillsData['Evelynn'];

export const Evelynn = {
  'Demon Shade': {
    effects: [
      {
        img: 'Demon Shade.png',
        description:
          'Innate: Evelynn gains Demon Shade after not performing actions that break stealth for 4 seconds. Attacking or casting abilities ends Demon Shade immediately and places it on a 4-second static cooldown, reduced to 1.25 seconds from casting  Last Caress. Taking damage from  champions or  turrets interrupts Demon Shade and places it on a 1.5-second static cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Demon Shade: While below  250 − 590 (based on level) (+ 250% AP) health, Evelynn  heals herself for 15 − 150 (based on level) every second. From level 6 onward, Demon Shade also grants  camouflage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Hate Spike': {
    effects: [
      {
        img: 'Hate Spike.png',
        description:
          'Active: Evelynn launches a dart in the target direction, dealing magic damage to the first enemy hit and marking them for 4 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '25 / 30 / 35 / 40 / 45 (+ 30% AP)',
            damagetype: 'None',
            values: [25, 30, 35, 40, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45',
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
      {
        img: '',
        description:
          "Evelynn's next 3 basic attacks or abilities against the marked target deal bonus magic damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '15 / 25 / 35 / 45 / 55 (+ 25% AP)',
            damagetype: 'None',
            values: [15, 25, 35, 45, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55',
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
          'Hate Spike may be recast up to 3 times at no cost until the ability comes off cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Hate Spike 2.png',
        description:
          "Recast: Evelynn unleashes a line of deadly spikes in the direction of her attack target if they are in range, dealing magic damage to all enemies struck. Hate Spike will first prioritize Evelynn's attack target, then the nearest  visible enemy champion.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '25 / 30 / 35 / 40 / 45 (+ 30% AP)',
            damagetype: 'None',
            values: [25, 30, 35, 40, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45',
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
      {
        img: '',
        description:
          'A nearby  visible enemy is required to recast this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Allure: {
    effects: [
      {
        img: 'Allure.png',
        description:
          'Active: Evelynn curses the target enemy  champion or  monster for 5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Evelynn's next basic attack or ability against the accursed target expunges them,  slowing them by 65% for 0.75 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Expunging a target will refund Allure's  mana cost. If the target is cursed for at least 2.5 seconds, the expunge also  charms them for a few seconds and the duration of the  slow is increased to last for this time, as well as applying additional effects based on the target type.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Charm Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Against champions, the expunge also inflicts  magic resistance reduction for 4 seconds.Against monsters, the expunge deals bonus magic damage and the  charm lasts 2 seconds longer.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Magic Resistance Reduction:',
            raw: '35 / 37.5 / 40 / 42.5 / 45%',
            values: [35, 37.5, 40, 42.5, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 37.5 / 40 / 42.5 / 45%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '250 / 300 / 350 / 400 / 450 (+ 60% AP)',
            damagetype: 'None',
            values: [250, 300, 350, 400, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 300 / 350 / 400 / 450',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Casting Allure does not break  Demon Shade nor its fade into it.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Whiplash: {
    effects: [
      {
        img: 'Whiplash.png',
        description:
          'Active: Evelynn whips the target enemy with her lashers, dealing magic damage and applying  on-hit effects at 100% effectiveness.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "55 / 70 / 85 / 100 / 115 (+ 3% (+ 1.5% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [55, 70, 85, 100, 115],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 70 / 85 / 100 / 115',
            children: [
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
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Whiplash 2.png',
        description:
          'Evelynn also gains  30% bonus movement speed for 2 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Gaining  Demon Shade resets Whiplash's  cooldown and  empowers its next cast. The damage based on the target's health ratio for both Whiplash and its  empowered cast deals a minimum of 25 and is capped at 450 against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Empowered Whiplash': {
    effects: [
      {
        img: 'Empowered Whiplash.png',
        description:
          'Active: Evelynn  dashes toward the target enemy with her lashers, dealing  increased damage to them upon completion as well as to all enemies within her path.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Empowered Magic Damage:',
            raw: "75 / 100 / 125 / 150 / 175 (+ 4% (+ 2.5% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 4%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 2.5,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 2.5% per 100 AP',
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
          'Empowered Whiplash only applies  on-hit effects to the primary target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Last Caress': {
    effects: [
      {
        img: 'Last Caress.png',
        description:
          'Active: Evelynn reveals her true form, becoming  untargetable at the start of the cast time and then unleashing her lashers in a cone in the target direction, dealing magic damage to enemies struck within. After 0.5 seconds, she  blinks 700 units in the opposite direction and becomes targetable again.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '125 / 187.5 / 250 / 312.5 / 375 (+ 75% AP)',
            damagetype: 'None',
            values: [125, 187.5, 250, 312.5, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 187.5 / 250 / 312.5 / 375',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Last Caress 2.png',
        description:
          'Last Caress deals  140% increased damage to enemies below  30% of their maximum health.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage:',
            raw: '300 / 450 / 600 / 750 / 900 (+ 180% AP)',
            damagetype: 'None',
            values: [300, 450, 600, 750, 900],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 450 / 600 / 750 / 900',
            children: [
              {
                values: 180,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 180% AP',
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
