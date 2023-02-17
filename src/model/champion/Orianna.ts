import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Orianna';
export const skillsData = ChampionSkillsData['Orianna'];

export const Orianna = {
  'Clockwork Windup': {
    effects: [
      {
        img: 'Clockwork Windup.png',
        description:
          'Innate - The Ball: Orianna is accompanied by The Ball, which she commands with her abilities. The Ball incurs a  0.15-second global cooldown on all of her abilities between casts. Additionally, The Ball attaches to Orianna if she is near it, and snaps back to her if she moves too far away from it, which incurs a  0.5-second global cooldown on all of her abilities.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Clockwork Winding.png',
        description:
          "Innate: Orianna's basic attacks generate a stack of Clockwork Winding for 4 seconds, refreshing on subsequent attacks and stacking up to 2 times. All stacks are lost when attacking a new enemy.\nClockwork Winding: Orianna's basic attacks are empowered to deal 10 − 50 (based on level) (+ 15% AP) bonus magic damage  on-hit, increased by「 20% 」「 2 − 10 (based on level) (+ 3% AP) 」per stack, up to 14 − 70 (based on level) (+ 21% AP) total bonus magic damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about The Ball.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Command: Attack': {
    effects: [
      {
        img: 'Command Attack.png',
        description:
          'Active: Orianna commands  The Ball to fly to the target location and remain there, dealing magic damage to enemies it passes through and nearby enemies upon arrival, reduced to 70% against those hit beyond the first.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 50% AP)',
            damagetype: 'None',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
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
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Command: Dissonance': {
    effects: [
      {
        img: 'Command Dissonance.png',
        description:
          'Active: Orianna commands  The Ball to emit an electric pulse that deals magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 70% AP)',
            damagetype: 'None',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
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
          'The pulse leaves behind an electric field that last 3 seconds, granting  bonus movement speed to Orianna and her allies when they move within. Enemies that move within the field are  slowed by the same amount, decaying over 2 seconds after leaving.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Movement Speed Modifier:',
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
    ],
  },
  'Command: Protect': {
    effects: [
      {
        img: 'false',
        description:
          'Passive:  The Ball grants  bonus armor and  bonus magic resistance to the unit it is attached to.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '6 / 12 / 18 / 24 / 30',
            values: [6, 12, 18, 24, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 12 / 18 / 24 / 30',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Command Protect.png',
        description:
          'Active: Orianna commands The Ball to fly to herself or the target allied  champion and attach itself to the target, dealing magic damage to enemies it passes through and granting the target a  shield for 2.5 seconds upon arrival.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 30% AP)',
            damagetype: 'None',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
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
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '55 / 90 / 125 / 160 / 195 (+ 45% AP)',
            damagetype: 'None',
            values: [55, 90, 125, 160, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 90 / 125 / 160 / 195',
            children: [
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
    ],
  },
  'Command: Shockwave': {
    effects: [
      {
        img: 'Command Shockwave.png',
        description:
          'Active: Orianna commands  The Ball to unleash a shockwave that deals magic damage to nearby enemies,  stunning them for 0.75 seconds, and  pulling them over 325 − 700 (based on proximity to ball) units, though not through terrain.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '250 / 300 / 350 / 400 / 450 (+ 90% AP)',
            damagetype: 'None',
            values: [250, 300, 350, 400, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 300 / 350 / 400 / 450',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
