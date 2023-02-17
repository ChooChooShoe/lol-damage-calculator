import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Akali';
export const skillsData = ChampionSkillsData['Akali'];

export const Akali = {
  "Assassin's Mark": {
    effects: [
      {
        img: "Assassin's Mark.png",
        description:
          'Innate: When Akali damages an enemy  champion with an ability, she creates a ring around them for 4 seconds, refreshing on subsequent damaging abilities against champions. For 2 seconds, she gains 30 / 40 / 50 / 60% (based on level)  bonus movement speed while moving away from the center of the ring. Only one ring may be active at a time.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'When Akali exits the ring, for 2 seconds, she regains the bonus movement speed while facing nearby enemy champions and becomes empowered with Swinging Kama for 4 seconds, during which she cannot create another ring.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Swinging Kama: Akali's next basic attack is empowered to have its  range doubled and deal 35 − 182 (based on level) (+ 60% bonus AD) (+ 55% AP) bonus magic damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Five Point Strike': {
    effects: [
      {
        img: 'Five Point Strike.png',
        description:
          'Active: Akali unleashes kunais in a cone in the target direction, dealing magic damage to enemies hit. Targets at maximum range are also  slowed by 50% for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 55 / 80 / 105 / 130 (+ 65% AD) (+ 60% AP)',
            damagetype: 'None',
            values: [30, 55, 80, 105, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 55 / 80 / 105 / 130',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 65% AD',
              },
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
        img: 'Five Point Strike 2.png',
        description: '',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Twilight Shroud': {
    effects: [
      {
        img: 'Twilight Shroud.png',
        description:
          "Active: Akali restores  100 energy over 0.4 seconds and gains  bonus movement speed that decays over 2 seconds. She also detonates a smoke bomb a fixed distance away in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring. The shroud does not permeate terrain, and will expand toward nearby enemy champions. While the shroud is active, Akali's maximum energy is increased by 100.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
          {
            effectType: 'Unique',
            name: 'Shroud Duration:',
            raw: '5 / 5.5 / 6 / 6.5 / 7',
            values: [5, 5.5, 6, 6.5, 7],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 5.5 / 6 / 6.5 / 7',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Entering the shroud renders Akali  invisible, unless she is  dashing.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Declaring a basic attack or casting an ability will break the invisibility and prevent Akali from entering it for 1 − 0.625 (based on minutes) seconds, refreshing on subsequent attacks and casts.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The  marked section of Twilight Shroud will linger for the mark's duration, even after the shroud ends.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shuriken Flip': {
    effects: [
      {
        img: 'Shuriken Flip.png',
        description:
          'Active: Akali  flips backward and, after the cast time, throws a shuriken in the target direction that deals magic damage to the first enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 56.25 / 82.5 / 108.75 / 135 (+ 25.5% AD) (+ 36% AP)',
            damagetype: 'None',
            values: [30, 56.25, 82.5, 108.75, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 56.25 / 82.5 / 108.75 / 135',
            children: [
              {
                values: 25.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 25.5% AD',
              },
              {
                values: 36,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 36% AP',
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
          'The shuriken marks and  reveals the enemy or the last  smoke section hit for 3 seconds, during which Shuriken Flip can be recast to consume the mark.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Shuriken Flip 2.png',
        description:
          'Recast: Akali  dashes towards the marked target or smoke section, regardless of distance. Against enemies she deals magic damage upon arrival.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 131.25 / 192.5 / 253.75 / 315 (+ 59.5% AD) (+ 84% AP)',
            damagetype: 'None',
            values: [70, 131.25, 192.5, 253.75, 315],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 131.25 / 192.5 / 253.75 / 315',
            children: [
              {
                values: 59.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 59.5% AD',
              },
              {
                values: 84,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 84% AP',
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
          "Akali will not flip backwards if she is  immobilized or  grounded during the cast time.  Twilight Shroud and  Perfect Execution can be cast during the recast's dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Perfect Execution': {
    effects: [
      {
        img: 'Perfect Execution.png',
        description:
          'Active: Akali  dashes 750 units in the direction of the target enemy  champion, dealing magic damage to enemies she passes through. If this hits an enemy, she flips over them to continue the dash up to the normal range but for at least another 150 units.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 150 / 220 / 290 / 360 (+ 50% bonus AD) (+ 30% AP)',
            damagetype: 'None',
            values: [80, 150, 220, 290, 360],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 150 / 220 / 290 / 360',
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
          'Perfect Execution can be recast after a 2.5-second static cooldown within 10 seconds of the first activation.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Perfect Execution 2.png',
        description:
          "Recast: Akali  dashes 800 units in the target direction, dealing magic damage to enemies she passes through, increased by 0% − 200% (based on target's missing health).",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 30% AP)',
            damagetype: 'None',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
