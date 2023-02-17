import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Varus';
export const skillsData = ChampionSkillsData['Varus'];

export const Varus = {
  'Living Vengeance': {
    effects: [
      {
        img: 'Living Vengeance.png',
        description:
          'Innate: When Varus kills an enemy, he gains  10 / 15 / 20% (based on level) (+ 20% bonus attack speed) bonus attack speed for 5 / 7 / 9 / 11 (based on level) seconds, increased to 40% (+ 40% bonus attack speed) upon scoring an enemy  champion  takedown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Piercing Arrow': {
    effects: [
      {
        img: 'Piercing Arrow.png',
        description:
          "Active: Varus  charges while being  slowed by 20% for up to 4 seconds to increase Piercing Arrow's  range and damage over the first 1.25 seconds of the channel.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Piercing Arrow can be recast within the duration. If the charge completes without reactivation, Piercing Arrow is cancelled and refunds  50% of the mana cost.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Recast: Varus fires a piercing arrow in the target direction that deals physical damage to enemies hit. The damage of the arrow as well as any detonated  Blight stacks are   increased by 0% − 50% (based on channel time), and the arrow's damage is reduced by 0% − 67% (based on enemies hit).",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '10 / 46.67 / 83.33 / 120 / 156.67 (+ 83.33 / 86.67 / 90 / 93.33 / 96.67% AD)',
            damagetype: 'None',
            values: [10, 46.67, 83.33, 120, 156.67],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 46.67 / 83.33 / 120 / 156.67',
            children: [
              {
                values: [83.33, 86.67, 90, 93.33, 96.67],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 83.33 / 86.67 / 90 / 93.33 / 96.67% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Reduced Damage:',
            raw: '3.3 / 15.4 / 27.5 / 39.6 / 51.7 (+ 27.5 / 28.6 / 29.7 / 30.8 / 31.9% AD)',
            damagetype: 'None',
            values: [3.3, 15.4, 27.5, 39.6, 51.7],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3.3 / 15.4 / 27.5 / 39.6 / 51.7',
            children: [
              {
                values: [27.5, 28.6, 29.7, 30.8, 31.9],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 27.5 / 28.6 / 29.7 / 30.8 / 31.9% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blighted Quiver': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Varus' basic attacks are empowered to deal bonus magic damage and apply a stack of Blight  on-hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times. Varus'  abilities consume all Blight stacks on enemies hit to apply the effect.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '7 / 12 / 17 / 22 / 27 (+ 30% AP)',
            damagetype: 'None',
            values: [7, 12, 17, 22, 27],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 12 / 17 / 22 / 27',
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
        img: 'Blighted Quiver.png',
        description:
          "Blight: For each stack consumed, the target is dealt bonus magic damage. Against a  champion or epic  monster, this also reduces his basic abilities'  current cooldowns by 12% of the total cooldown for each stack, up to 36% per target. This damage is capped at 360 against  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage per Stack:',
            raw: "3 / 3.5 / 4 / 4.5 / 5% (+ 2.5% per 100 AP) of the target's maximum health",
            healType: 'OutgoingHeals',
            values: [3, 3.5, 4, 4.5, 5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '3 / 3.5 / 4 / 4.5 / 5%',
            post: "of the target's maximum health",
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
        hidden: false,
        locked: true,
      },
      {
        img: 'Blighted Quiver 2.png',
        description:
          "Active: Varus' next  Piercing Arrow within 5.5 seconds is empowered to deal 6% − 14% (based on level) of the target's missing health bonus magic damage, increased by 0% − 50% (based on Piercing Arrow's channel time), for a maximum of 9% − 21% (based on level) of the target's missing health. This damage is capped at 360 against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If Varus does not cast  Piercing Arrow, Blighted Quiver can be recast after 1 second within the duration, and does so automatically afterwards or when he dies. Blighted Quiver can be cast during the first 0.25 seconds of  Piercing Arrow's charge, and will be placed on full cooldown even if  Piercing Arrow is not recast.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Varus ends Blighted Quiver and places it on a 1-second cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Hail of Arrows': {
    effects: [
      {
        img: 'Hail of Arrows.png',
        description:
          'Active: Varus fires a hail of arrows at the target location that land after 0.5 seconds, dealing physical damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 90% bonus AD)',
            damagetype: 'None',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90% bonus AD',
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
          'The area then becomes desecrated for 4 seconds,  slowing enemies within and inflicting them with  Grievous Wounds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Hail of Arrows will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Chain of Corruption': {
    effects: [
      {
        img: 'Chain of Corruption.png',
        description:
          'Active: Varus unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing magic damage and  rooting them for 2 seconds, during which they are  revealed. Over the first 1.5 seconds, they are also inflicted with maximum stacks of  Blight.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 100% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
        img: 'Chain of Corruption 2.png',
        description:
          'Upon impact, the tendril roots into the ground from which it seeks out nearby enemy  champions. If a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects. A new tendril is then spread out from the infected target that is closest to a nearby uninfected enemy champion. The infection can spread repeatedly until there are no new targets.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The target does not have to be  visible to be caught by the tendril.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
