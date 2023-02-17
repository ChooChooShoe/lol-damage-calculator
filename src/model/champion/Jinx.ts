import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Jinx';
export const skillsData = ChampionSkillsData['Jinx'];

export const Jinx = {
  'Get Excited!': {
    effects: [
      {
        img: 'Get Excited!.png',
        description:
          'Innate: Whenever Jinx scores a  takedown against an enemy  champion, epic  monster,  turret, or inhibitor within 3 seconds of damaging them, she gains  175% bonus movement speed decaying over 6 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally, she gains  25% total attack speed and is allowed to exceed the attack speed cap for the same duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Switcheroo!': {
    effects: [
      {
        img: 'false',
        description:
          'Toggle: Jinx switches between  Pow-Pow, her minigun, and  Fishbones, her rocket launcher.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Pow-Pow.png',
        description:
          "Pow-Pow: Basic attacks with Pow-Pow generate a stack of  Rev'd up for 2.5 seconds, refreshing on subsequent attacks with Pow-Pow and stacking up to 3 times. Each stack of Rev'd up grants  bonus attack speed, with all stacks beyond the first one being 50% effective. Stacks expire by one when the duration ends.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '15 / 27.5 / 40 / 52.5 / 65%',
            values: [15, 27.5, 40, 52.5, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 27.5 / 40 / 52.5 / 65%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Switcheroo!.png',
        description:
          'Fishbones: Basic attacks with Fishbones cost  mana on-attack to deal 110% AD modified physical damage to the target and nearby enemies. The damage is affected by  critical strike modifiers. While Fishbones is equipped, Jinx gains  bonus range but loses  10% of her bonus attack speed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Range:',
            raw: '80 / 110 / 140 / 170 / 200',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Only the first attack after switching to Fishbones will benefit from  Rev'd up.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Zap!': {
    effects: [
      {
        img: 'Zap!.png',
        description:
          'Active: Jinx fires a shock blast in the target direction that deals physical damage to the first enemy it hits and  reveals and  slows them for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '10 / 60 / 110 / 160 / 210 (+ 160% AD)',
            damagetype: 'None',
            values: [10, 60, 110, 160, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 60 / 110 / 160 / 210',
            children: [
              {
                values: 160,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 160% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 40 / 50 / 60 / 70%',
            values: [30, 40, 50, 60, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Flame Chompers!': {
    effects: [
      {
        img: 'Flame Chompers!.png',
        description:
          'Active: Jinx tosses out 3 Chompers centered at the target location, landing after 0.4 seconds, arming after 0.5 seconds, and exploding after 5 seconds to deal magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 100% AP)',
            damagetype: 'None',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
        img: 'Flame Chompers! 2.png',
        description:
          'Each Chomper explodes on contact with an enemy  champion,  knocking them down and  rooting them for 1.5 seconds. Enemy champions can be affected by only one Chomper.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Flame Chompers! will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Super Mega Death Rocket!': {
    effects: [
      {
        img: 'Super Mega Death Rocket!.png',
        description:
          'Active: Jinx fires a massive rocket in the target direction, briefly granting  sight of its surroundings and exploding upon colliding with an enemy champion. The explosion deals physical damage to nearby enemies and grants  sight of the area for 2 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Super Mega Death Rocket! deals 10% − 100% (based on distance traveled) damage. This does not affect the bonus damage based on the target's missing health.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Maximum Physical Damage:',
            raw: "300 / 375 / 450 / 525 / 600 (+ 150% bonus AD) (+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health)",
            healType: 'OutgoingHeals',
            values: [300, 375, 450, 525, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 375 / 450 / 525 / 600',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 150% bonus AD',
              },
              {
                values: [25, 27.5, 30, 32.5, 35],
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: "+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health",
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
          "Enemies surrounding the primary target take 80% damage. The bonus damage based on the target's missing health is capped at 800 against  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Maximum Secondary Damage:',
            raw: "240 / 300 / 360 / 420 / 480 (+ 120% bonus AD) (+ 20 / 22 / 24 / 26 / 28% of target's missing health)",
            healType: 'OutgoingHeals',
            values: [240, 300, 360, 420, 480],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '240 / 300 / 360 / 420 / 480',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
              {
                values: [20, 22, 24, 26, 28],
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: "+ 20 / 22 / 24 / 26 / 28% of target's missing health",
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
