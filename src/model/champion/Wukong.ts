import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Wukong';
export const skillsData = ChampionSkillsData['Wukong'];

export const Wukong = {
  'Stone Skin': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Whenever Wukong or his  clone damage an enemy  champion or  monster, he generates a stack of Strength of Stone for 5 seconds, refreshing on subsequent hits and stacking up to 10 times.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Stone Skin.png',
        description:
          'Strength of Stone: Wukong gains  5 − 9 (based on level) bonus armor and  bonus health regeneration equal to 0.35% of his maximum health, increased by 50% for each stack up to a maximum of 30 − 54 (based on level) bonus armor and 2.1% maximum health regeneration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Crushing Blow': {
    effects: [
      {
        img: 'Crushing Blow.png',
        description:
          'Active: Wukong empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  bonus range, deal bonus physical damage, and inflict  armor reduction for 3 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Range:',
            raw: '75 / 100 / 125 / 150 / 175',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 45% bonus AD)',
            damagetype: 'None',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 45% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Armor Reduction:',
            raw: "10 / 15 / 20 / 25 / 30% of target's armor",
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText: "of target's armor",
            pre: "10 / 15 / 20 / 25 / 30% of target's armor",
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Crushing Blow's  cooldown is reduced by 0.5 seconds whenever Wukong or his  clone damage an enemy.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Crushing Blow  resets Wukong's and his  clone's basic attack timer. Other abilities can be used during the attack's animation.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Warrior Trickster': {
    effects: [
      {
        img: 'Warrior Trickster.png',
        description:
          'Active: Wukong enters  invisibility for 1 second and  dashes to the target location, leaving behind a  clone of himself at his casting position for 3.25 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The clone is  untargetable to allies and can basic attack autonomously, prioritizing the last enemy Wukong damaged. It can also gain the effects of  Crushing Blow and  Nimbus Strike's bonus attack speed, and casts  Cyclone whenever Wukong does.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'The clone deals reduced outgoing damage.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Clone Outgoing Damage:',
            raw: '35 / 40 / 45 / 50 / 55%',
            values: [35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "See Pets for more details about Wukong's clone. Wukong can cast any of his abilities during the dash. Warrior Trickster will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Nimbus Strike': {
    effects: [
      {
        img: 'Nimbus Strike.png',
        description:
          "Active: Wukong  dashes to the target enemy's location and sends out  untargetable clones to strike up to two additional enemies near the target's location, dealing magic damage. Nimbus Strike deals 120% damage to  monsters.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 100% AP)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
      {
        img: '',
        description:
          'Upon arrival, Wukong gains  bonus attack speed for 5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Crushing Blow can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Cyclone: {
    effects: [
      {
        img: 'Cyclone.png',
        description:
          'Active: Wukong spins his staff around for up to 2 seconds, becoming  ghosted and gaining  20% bonus movement speed. The staff deals physical damage every 0.25 seconds to enemies hit, and can  knock them up once for 0.6 seconds. Cyclone will not  knock up enemies who were already hit by either Wukong or his  clone within the same cast.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage Per Tick:',
            raw: "1 / 1.25 / 1.5 / 1.75 / 2% of target's maximum health (+ 34.375% AD)",
            healType: 'OutgoingHeals',
            values: [1, 1.25, 1.5, 1.75, 2],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "1 / 1.25 / 1.5 / 1.75 / 2% of target's maximum health",
            children: [
              {
                values: 34.375,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 34.375% AD',
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
          'Cyclone can be recast after 0.5 seconds within the duration, and does so automatically afterwards or by casting another ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Cyclone 2.png',
        description:
          'Recast: Wukong ends Cyclone. After 1 second, he can cast Cyclone a second time within 8 seconds of the first cast.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Maximum Total Physical Damage:',
            raw: "16 / 20 / 24 / 28 / 32% of target's maximum health (+ 550% AD)",
            healType: 'OutgoingHeals',
            values: [16, 20, 24, 28, 32],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "16 / 20 / 24 / 28 / 32% of target's maximum health",
            children: [
              {
                values: 550,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 550% AD',
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
          "Nimbus Strike's bonus attack speed duration is continuously refreshed while spinning.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Cyclone's damage is capped at 200 / 400 / 600 (based on level) per second against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
