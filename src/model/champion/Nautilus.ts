import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Nautilus';
export const skillsData = ChampionSkillsData['Nautilus'];

export const Nautilus = {
  'Staggering Blow': {
    effects: [
      {
        img: 'Staggering Blow.png',
        description:
          "Innate: Nautilus'  basic attacks are empowered to deal 14 − 116 (based on level) bonus physical damage and  root the target for 0.75 − 1.5 (based on level) seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'This effect cannot occur on the same target more than once every few seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dredge Line': {
    effects: [
      {
        img: 'Dredge Line.png',
        description:
          'Active: Nautilus hurls his anchor in the target direction that stops on the first enemy or terrain hit.If the anchor hits an enemy, it deals magic damage and  reveals them,  dragging them toward Nautilus while he also  dashes toward them within 0.9 seconds. Afterwards, the target is  rooted for 0.1 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 90% AP)',
            damagetype: 'None',
            values: [70, 115, 160, 205, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
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
          "If the anchor hits terrain, Nautilus  dashes to that location and 50% of Dredge Line's  cooldown and  mana cost are refunded.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Nautilus is  unable to move or attack while Dredge Line is in flight. He can cast  Titan's Wrath and  Riptide during the dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Titan's Wrath": {
    effects: [
      {
        img: "Titan's Wrath.png",
        description:
          'Active: Nautilus grants himself a  shield for 6 seconds, and while it holds, his basic attacks are empowered to apply Pain of Wrath to the target and surrounding enemies.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '50 / 60 / 70 / 80 / 90 (+ 8 / 9 / 10 / 11 / 12% maximum health)',
            healType: 'BonusHealth',
            values: [50, 60, 70, 80, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90',
            children: [
              {
                values: [8, 9, 10, 11, 12],
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 8 / 9 / 10 / 11 / 12% maximum health',
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
          'Pain of Wrath: The target takes magic damage over time, half dealt immediately and the other half dealt after 1.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 40 / 50 / 60 / 70 (+ 40% AP)',
            damagetype: 'None',
            values: [30, 40, 50, 60, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Titan's Wrath  resets Nautilus'  basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Riptide: {
    effects: [
      {
        img: 'Riptide.png',
        description:
          'Active: Nautilus sends three waves of explosions that radiate from him over 0.561 seconds. Each wave deals magic damage to enemies hit, reduced to 50% against those hit by subsequent waves beyond the first, and  slows them by an amount that decays over 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 90 / 125 / 160 / 195 (+ 50% AP)',
            damagetype: 'None',
            values: [55, 90, 125, 160, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 90 / 125 / 160 / 195',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
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
        description: 'Riptide deals 150% damage against  monsters.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Monster Damage:',
            raw: '82.5 / 135 / 187.5 / 240 / 292.5 (+ 75% AP)',
            damagetype: 'None',
            values: [82.5, 135, 187.5, 240, 292.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '82.5 / 135 / 187.5 / 240 / 292.5',
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
    ],
  },
  'Depth Charge': {
    effects: [
      {
        img: 'Depth Charge.png',
        description:
          'Active: Nautilus sends out a  Depth Charge that chases the target enemy  champion, accelerating over time and creating eruptions every 0.264 seconds in its wake that also briefly grant  sight of the area. Enemies hit by the eruptions are dealt magic damage,  knocked up for 1 second, and  stunned for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '125 / 150 / 175 / 200 / 225 (+ 40% AP)',
            damagetype: 'None',
            values: [125, 150, 175, 200, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 150 / 175 / 200 / 225',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Depth Charge 2.png',
        description:
          'Upon reaching the primary target or when it moves too far away, the Depth Charge erupts a final time. The primary target takes increased damage, is  stunned for the same duration, and  knocked up for a modified duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '150 / 212.5 / 275 / 337.5 / 400 (+ 80% AP)',
            damagetype: 'None',
            values: [150, 212.5, 275, 337.5, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 212.5 / 275 / 337.5 / 400',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Knock Up Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
