import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Warwick';
export const skillsData = ChampionSkillsData['Warwick'];

export const Warwick = {
  'Eternal Hunger': {
    effects: [
      {
        img: 'Eternal Hunger.png',
        description:
          'Innate: Warwick deals 12 − 46 (based on level) (+ 15% bonus AD) (+ 10% AP) bonus magic damage  on-hit.\nWhile below 50% maximum health, Warwick also  heals for 100% of the post-mitigation damage dealt by Eternal Hunger, increased to 250% while below 25% maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Jaws of the Beast': {
    effects: [
      {
        img: 'Jaws of the Beast.png',
        description:
          "Active: Warwick  lunges at the target enemy over 0.264 seconds and bites them, dealing magic damage,  healing himself for a percentage of the post-mitigation damage dealt, as well as applying  on-hit and on-attack effects, and  life steal at 100% effectiveness. The damage based on the target's health ratio is capped against  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "6 / 7 / 8 / 9 / 10% of target's maximum health (+ 120% AD) (+ 100% AP)",
            healType: 'OutgoingHeals',
            values: [6, 7, 8, 9, 10],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "6 / 7 / 8 / 9 / 10% of target's maximum health",
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 120% AD',
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
            name: 'Healing Percentage:',
            raw: '25 / 37.5 / 50 / 62.5 / 75%',
            values: [25, 37.5, 50, 62.5, 75],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 37.5 / 50 / 62.5 / 75%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While Jaws of the Beast is active, Warwick is  displacement immune and clamps his jaw on the target, following all of their movement. The ability can be held for additional effects.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Hold: Warwick performs the bite, and then begins to  charge for 0.5 seconds, extended if the target is under effects of a  dash or  displacement. During the charge, he  leaps behind the target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blood Hunt': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Warwick gains  bonus attack speed upon basic attacking an enemy who is below  50% of their maximum health, but loses it when not attacking them or switching to a target above the threshold.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '70 / 80 / 90 / 100 / 110%',
            values: [70, 80, 90, 100, 110],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 80 / 90 / 100 / 110%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Passive: Warwick senses all enemy  champions on the map who are damaged below  50% of their maximum health by an allied source, marking them with Blood Hunt until they regenerate or  heal above this threshold again. He sees trails leading toward them and gains  bonus movement speed while following a trail. This bonus is lost for 0.5 seconds upon entering champion combat, but will build up again over 3.5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
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
          'The attack speed and movement speed Passive bonuses are increased to 250% against enemies who are below  20% of their maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Blood Hunt.png',
        description:
          'Active: Warwick senses the nearest enemy champion in the area, marking them with Blood Hunt for 8 seconds, gaining both passive bonuses against them regardless of their  current health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Blood Hunt is placed on a  3-second static cooldown during champion combat. Additionally, while no enemy champions are marked, the current cooldown of Blood Hunt runs out twice as quickly - it is reduced by an additional second for each second passed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Primal Howl': {
    effects: [
      {
        img: 'Primal Howl.png',
        description:
          'Active: Warwick gains damage reduction for up to 2.5 seconds. Primal Howl can be recast after 1 second, and does so automatically after the duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Damage Reduction:',
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
        img: 'Primal Howl 2.png',
        description:
          "Recast: Warwick howls, ending Primal Howl's effects and  fearing nearby enemies for 1 second,  slowing them by 90%.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Starting  Infinite Duress' channel while Primal Howl is active will initiate the recast without ending the damage reduction buff prematurely.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Infinite Duress': {
    effects: [
      {
        img: 'Infinite Duress.png',
        description:
          'Active: Warwick  leaps in the target direction with  crowd control immunity, stopping upon hitting an enemy champion. He then  knocks them down and  channels for up to 1.5 seconds to  suppress,  reveal, and deal magic damage every 0.25 seconds,  revealing himself in the process.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '175 / 262.5 / 350 / 437.5 / 525 (+ 167% bonus AD)',
            damagetype: 'None',
            values: [175, 262.5, 350, 437.5, 525],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 262.5 / 350 / 437.5 / 525',
            children: [
              {
                values: 167,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 167% bonus AD',
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
          'Warwick  heals for 100% of all post-mitigation damage he deals to the target during Infinite Duress.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Infinite Duress applies  on-hit and on-attack effects 3 times, and  life steal at 100% effectiveness.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Primal Howl can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
