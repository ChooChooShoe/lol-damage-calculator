import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = "Kai'Sa";
export const skillsData = ChampionSkillsData["Kai'Sa"];

export const KaiSa = {
  'Second Skin': {
    effects: [
      {
        img: 'Second Skin.png',
        description:
          "Innate - Living Weapon: Kai'Sa can evolve each of her basic abilities by gaining a set amount of permanent stats from items and stat growth, granting them additional effects. Evolving an ability causes her to enter a 2-second cast time. The upgrade is lost if the stat requirement is no longer met.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Kai'Sa Plasma.png",
        description:
          "Innate - Plasma: Kai'Sa's basic attacks  on-hit and  Void Seeker apply stacks of Plasma to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 5 times. Basic attacks each apply 1 stack and  Void Seeker applies 2 stacks, increased to 3 if it is  evolved. Her and nearby allies'  immobilizing effects and  polymorphs against enemy  champions will also apply a stack of Plasma.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate - Caustic Wounds: Plasma stacks applied by Kai'Sa's basic attacks or  Void Seeker deal 5 − 23 (based on level) (+ 1 − 12 (based on level) per Plasma stack before application) (+ 15% − 25% (based on Plasma stacks before application) AP) bonus magic damage. The fifth stack against a target consumes them all to deal additional bonus magic damage equal to 15% (+ 6% per 100 AP) of the target's missing health, capped at 400 against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Icathian Rain': {
    effects: [
      {
        img: 'Icathian Rain.png',
        description:
          "Active: Kai'Sa releases a swarm of 6 missiles that evenly distributes among nearby  visible enemies, each one hitting their target after 0.4 seconds to deal physical damage.  Minions below  35% health take double damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Missile:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 50% bonus AD) (+ 30% AP)',
            damagetype: 'None',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
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
          'Non-minions take 25% damage from missiles beyond their first.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage Per Missile:',
            raw: '10 / 13.75 / 17.5 / 21.25 / 25 (+ 12.5% bonus AD) (+ 7.5% AP)',
            damagetype: 'None',
            values: [10, 13.75, 17.5, 21.25, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 13.75 / 17.5 / 21.25 / 25',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 12.5% bonus AD',
              },
              {
                values: 7.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7.5% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Icathian Rain 2.png',
        description:
          'Evolution: Requires「  100 − 66 (based on level) attack damage from items 」「  100 attack damage from items and stat growth 」to upgrade – Icathian Rain instead fires 12 missiles.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Evolved Single-Target Damage:',
            raw: '150 / 206.25 / 262.5 / 318.75 / 375 (+ 187.5% bonus AD) (+ 112.5% AP)',
            damagetype: 'None',
            values: [150, 206.25, 262.5, 318.75, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 206.25 / 262.5 / 318.75 / 375',
            children: [
              {
                values: 187.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 187.5% bonus AD',
              },
              {
                values: 112.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 112.5% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'A nearby enemy is required to cast this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Void Seeker': {
    effects: [
      {
        img: 'Void Seeker.png',
        description:
          "Active: Kai'Sa fires a void bolt in the target direction that briefly grants  sight around its trajectory as it travels, deals magic damage to the first enemy hit, applies 2 Plasma, and  reveals them for 4 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 55 / 80 / 105 / 130 (+ 130% AD) (+ 45% AP)',
            damagetype: 'None',
            values: [30, 55, 80, 105, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 55 / 80 / 105 / 130',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 130% AD',
              },
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Void Seeker 2.png',
        description:
          'Evolution: Requires  100 ability power from items to upgrade – Void Seeker applies 3 Plasma instead and refunds 77% of its  cooldown it hits an enemy  champion.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Supercharge: {
    effects: [
      {
        img: 'Supercharge.png',
        description:
          "Active: Kai'Sa charges up over the cast time, during which she is still allowed to move, becomes  ghosted, and gains  bonus movement speed, with the effectiveness increased by 0% − 100% (based on bonus attack speed).",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Minimum Movement Speed:',
            raw: '55 / 60 / 65 / 70 / 75%',
            values: [55, 60, 65, 70, 75],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 60 / 65 / 70 / 75%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After completing the charge, she gains  bonus attack speed and reduces her basic attack windup percentage by 6.44% for 4 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
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
        img: '',
        description:
          "Supercharge's  current cooldown is reduced by 0.5 seconds on-attack.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Supercharge 2.png',
        description:
          'Evolution: Requires「  100% − 70% (based on level) attack speed from items 」「  100% attack speed from items and stat growth 」to upgrade – Supercharge grants  invisibility at the start of the cast time for 0.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Killer Instinct': {
    effects: [
      {
        img: 'Killer Instinct.png',
        description:
          "Active: Kai'Sa grants herself a  shield for 2 seconds and  dashes to a target location near a  visible enemy champion that was affected by Plasma within the last 4 seconds. The shield's duration is refreshed when the dash ends.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '70 / 80 / 90 / 100 / 110 (+ 90 / 112.5 / 135 / 157.5 / 180% AD) (+ 120% AP)',
            damagetype: 'None',
            values: [70, 80, 90, 100, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 80 / 90 / 100 / 110',
            children: [
              {
                values: [90, 112.5, 135, 157.5, 180],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 90 / 112.5 / 135 / 157.5 / 180% AD',
              },
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
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
          "A nearby enemy champion affected by Plasma is required to cast this ability. Killer Instinct  resets Kai'Sa's basic attack timer. Kai'Sa can cast any of her abilities during the dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
