import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Gnar';
export const skillsData = ChampionSkillsData['Gnar'];

export const Gnar = {
  'Rage Gene': {
    effects: [
      {
        img: 'Rage Gene.png',
        description:
          "Innate - Rage Gene:  Mini Gnar generates 4 / 7 / 11 (based on level)  Rage over 2 seconds upon dealing or receiving damage. Against non-champions, basic attacks and  Boomerang Throw instantly generate「 0.5 / 0.875 / 1.375 (based on level) Rage. 」「 12.5% of the amount. 」 Against champions,  Boomerang Throw instantly generates「 1 / 1.75 / 2.75 (based on level) Rage, 」「 25% of the amount, 」and basic attacks instantly generate「 2 / 3.5 / 5.5 (based on level). 」「 50% of the amount. 」 Boomerang Throw can only generate Rage once per cast, and grants Rage based on the first enemy hit. Gnar's Rage decays after being out of combat for 13 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Rage Gene 2.png',
        description:
          "At maximum Rage, Gnar's abilities are switched to  Mega Gnar's abilities for 4 seconds. Casting one of Mega Gnar's abilities will cause him to transform into  Mega Gnar, else he will transform automatically after the 4 seconds have elapsed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Gnar's  Mega form lasts for 15 seconds, with his Rage bar depleting as an indication of remaining time. Rage cannot be generated while in this form. Afterwards, Gnar returns to  Mini Gnar, retaining his  current percentage health and becoming too  tired to generate Rage for 15 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Gnar gains different stat bonuses based on whether he is in  Mini or  Mega form. Both of Gnar's forms share their ability cooldowns.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Boomerang Throw': {
    effects: [
      {
        img: 'Boomerang Throw.png',
        description:
          'Active: Gnar throws a boomerang in a line in the target direction that deals physical damage to enemies in its path and  slows them for 2 seconds. After reaching its maximum range or hitting an enemy, the boomerang flies back toward Gnar based on his current movement, dealing 50% damage to subsequent targets.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '5 / 45 / 85 / 125 / 165 (+ 115% AD)',
            damagetype: 'None',
            values: [5, 45, 85, 125, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 45 / 85 / 125 / 165',
            children: [
              {
                values: 115,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 115% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Catching the boomerang while it is returning back refunds 40% of the ability's  total cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Enemies can be hit only once per pass.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Boulder Toss': {
    effects: [
      {
        img: 'Boulder Toss.png',
        description:
          'Active: Gnar throws a boulder in the target direction that stops upon hitting an enemy, dealing physical damage to nearby enemies upon impact and  slowing them for 2 seconds. The boulder then remains on the ground for 6 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '25 / 70 / 115 / 160 / 205 (+ 140% AD)',
            damagetype: 'None',
            values: [25, 70, 115, 160, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 70 / 115 / 160 / 205',
            children: [
              {
                values: 140,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 140% AD',
              },
            ],
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
        description:
          "After 0.3 seconds, Gnar can pick up the boulder by moving within 90 units of it, refunding 70% of the ability's  total cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Hyper: {
    effects: [
      {
        img: 'Hyper 2.png',
        description:
          "Passive: Gnar's basic attacks  on-hit and ability hits apply a stack of Hyper to enemies for 3.5 seconds, refreshing on subsequent applications and stacking up to 3 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Hyper.png',
        description:
          "The third stack against a target consumes them all to deal bonus magic damage, capped at 300 against  monsters, and grant Gnar 20 / 40 / 60 / 80% (based on  GNAR!'s rank)  bonus movement speed that decays over 3 seconds.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "0 / 10 / 20 / 30 / 40 (+ 6 / 8 / 10 / 12 / 14% of target's maximum health) (+ 100% AP)",
            healType: 'OutgoingHeals',
            values: [0, 10, 20, 30, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0 / 10 / 20 / 30 / 40',
            children: [
              {
                values: [6, 8, 10, 12, 14],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 6 / 8 / 10 / 12 / 14% of target's maximum health",
              },
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
          "Gnar gains Hyper's  bonus movement speed when he leaves  Mega form.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Wallop: {
    effects: [
      {
        img: 'Wallop.png',
        description:
          'Active: Gnar slams his arm down in the target direction, dealing physical damage to all enemies struck within the area and  stunning them for 1.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '25 / 55 / 85 / 115 / 145 (+ 100% AD)',
            damagetype: 'None',
            values: [25, 55, 85, 115, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 55 / 85 / 115 / 145',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Hop: {
    effects: [
      {
        img: 'Hop.png',
        description:
          'Active: Gnar  leaps to the target location, then gains  bonus attack speed for 6 seconds.',
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
        description:
          'If Gnar lands on a unit he will  bounce 500 units further in the same direction.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Landing on an enemy deals them physical damage and  slows them by 80% for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '50 / 85 / 120 / 155 / 190 (+ 6% maximum health)',
            healType: 'BonusHealth',
            values: [50, 85, 120, 155, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 85 / 120 / 155 / 190',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 6% maximum health',
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
          'Gnar will not bounce if he is  immobilized, excluding from  sleep(bug), during the first leap.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Boomerang Throw can be cast during the dash. Hop will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Crunch: {
    effects: [
      {
        img: 'Crunch.png',
        description:
          'Active: Gnar  leaps to the target location and deals physical damage to nearby enemies upon impact. After a 0.25-second delay, additional enemies in a larger radius also take the same damage.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 6% maximum health)',
            healType: 'BonusHealth',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 6% maximum health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Hop and Crunch.png',
        description:
          "If Crunch is used to transform, Gnar will still be able to  bounce as per  Hop. Crunch's area of effect occurs in both areas, though enemies can only be damaged once.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Enemies Gnar lands directly on top of are affected by Hop's  slow.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Crunch will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'GNAR!': {
    effects: [
      {
        img: 'false',
        description:
          "Mini Gnar - Passive:  Hyper's  bonus movement speed is increased.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Hyper Bonus Movement Speed:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'GNAR!.png',
        description:
          'Mega Gnar - Active: Gnar thrusts in the target direction,  knocking away nearby enemies up to 590 units in that direction, though not through terrain, and afterwards dealing them physical damage, as well as  slowing them by 45% after a 0.4-second delay for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 50% bonus AD) (+ 100% AP)',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
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
          'Enemies that collide with terrain take  50% increased damage instantly and are  stunned instead of  slowed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '300 / 375 / 450 / 525 / 600 (+ 75% bonus AD) (+ 150% AP)',
            damagetype: 'None',
            values: [300, 375, 450, 525, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 375 / 450 / 525 / 600',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
              },
              {
                values: 150,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
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
