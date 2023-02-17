import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Volibear';
export const skillsData = ChampionSkillsData['Volibear'];

export const Volibear = {
  'The Relentless Storm': {
    effects: [
      {
        img: 'The Relentless Storm.png',
        description:
          'Innate: Whenever Volibear damages at least one enemy with a basic attack or ability, he generates a stack of The Relentless Storm for 6 seconds, refreshing on subsequent damage and stacking up to 5 times. At 5 stacks, Volibear gains Lightning Claws.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The Relentless Storm: For each stack, Volibear gains  5% (+ 4% per 100 AP) bonus attack speed, up to 25% (+ 20% per 100 AP).',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Lightning Claws: Volibear's claws ignite with lightning, empowering his basic attacks  on-hit to deal 11 − 60 (based on level) (+ 40% AP) bonus magic damage to the target and the nearest  visible enemy within 450 units of the target, chaining up to 4 subsequent targets.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Thundering Smash': {
    effects: [
      {
        img: 'Thundering Smash.png',
        description:
          'Active: Volibear drops on all fours, becoming  ghosted and gaining  bonus movement speed for 4 seconds, doubled while facing a  visible enemy  champion within 2000 units.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '8 / 12 / 16 / 20 / 24%',
            values: [8, 12, 16, 20, 24],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 12 / 16 / 20 / 24%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "During this time, Volibear's next basic attack is empowered to consume the bonus movement speed to have an  uncancellable windup and  pounce on the target, dealing bonus physical damage and  stunning them for 1 second.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '10 / 30 / 50 / 70 / 90 (+ 120% bonus AD)',
            damagetype: 'None',
            values: [10, 30, 50, 70, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 30 / 50 / 70 / 90',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
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
          'If Volibear becomes  immobilized or  polymorphed by an enemy during Thundering Smash, the effect ends prematurely and the  cooldown is reset.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Thundering Smash's bonus damage is affected by  critical strike modifiers and applies  life steal at 100% effectiveness.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Thundering Smash  resets Volibear's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Frenzied Maul': {
    effects: [
      {
        img: 'Frenzied Maul.png',
        description:
          'Active: Volibear strikes the target enemy to deal physical damage, apply  on-hit and on-attack effects at 100% effectiveness, and mark them Wounded for 8 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '5 / 30 / 55 / 80 / 105 (+ 100% AD) (+ 5% of his bonus health)',
            healType: 'BonusHealth',
            values: [5, 30, 55, 80, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 30 / 55 / 80 / 105',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'of his bonus health',
                pre: '+ 5% of his bonus health',
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
          'Wounded Bonus: Frenzied Maul deals  50% increased damage and  heals Volibear. The heal is halved against  minions.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 7 / 8.5 / 10 / 11.5 / 13% of his missing health)',
            healType: 'BonusHealth',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
            children: [
              {
                values: [7, 8.5, 10, 11.5, 13],
                valuesIsPercent: true,
                user: 'player',
                units: 'missing_hp',
                unitsText: 'of his missing health',
                pre: '+ 7 / 8.5 / 10 / 11.5 / 13% of his missing health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Frenzied Maul applies  life steal at 100% effectiveness.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Sky Splitter': {
    effects: [
      {
        img: 'Sky Splitter.png',
        description:
          'Active: Volibear summons a lightning bolt to strike at the target location after a 2-second delay. If Volibear is within the strike, he gains a  shield equal to 14% of his maximum health (+ 75% AP) for 3 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sky Splitter 2.png',
        description:
          'The bolt deals magic damage to enemies hit, capped at 650 against non-champions,  slows them by 40% for 2 seconds, and grants  sight of the area for 1 second.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "80 / 110 / 140 / 170 / 200 (+ 80% AP) (+ 11 / 12 / 13 / 14 / 15% of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
              {
                values: [11, 12, 13, 14, 15],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 11 / 12 / 13 / 14 / 15% of target's maximum health",
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Stormbringer: {
    effects: [
      {
        img: 'Stormbringer.png',
        description:
          'Active: Volibear gains Stormbringer for 12 seconds and  leaps to the target location with  crowd control immunity, granting  sight of the area in a 500 radius during the travel.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Stormbringer: Volibear gains  ghosting,  bonus health,  50 bonus attack range, 25 increased range on  Frenzied Maul, and 35% increased size.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Health:',
            raw: '175 / 262.5 / 350 / 437.5 / 525',
            values: [175, 262.5, 350, 437.5, 525],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 262.5 / 350 / 437.5 / 525',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Volibear impacts after 1 second,  slowing nearby enemies by 50% decaying over 1 second. Enemies within the epicenter are also dealt  physical damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '300 / 400 / 500 / 600 / 700 (+ 250% bonus AD) (+ 125% AP)',
            damagetype: 'None',
            values: [300, 400, 500, 600, 700],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 400 / 500 / 600 / 700',
            children: [
              {
                values: 250,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 250% bonus AD',
              },
              {
                values: 125,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 125% AP',
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
          'Volibear also disables enemy  turrets in an area for a duration, rendering them unable to attack, as well as dealing them the  same damage.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Turret Disable Duration:',
            raw: '3 / 3.5 / 4 / 4.5 / 5',
            values: [3, 3.5, 4, 4.5, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3.5 / 4 / 4.5 / 5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Stormbringer will cast at max range if cast beyond that.  Thundering Smash's duration will be paused for the  leap.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
