import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Braum';
export const skillsData = ChampionSkillsData['Braum'];

export const Braum = {
  'Concussive Blows': {
    effects: [
      {
        img: 'Concussive Blows.png',
        description:
          "Innate: Braum's basic attacks and  Winter's Bite each apply a stack of Concussive Blows to their target for 4 seconds, refreshing on subsequent applications and stacking up to 4 times. Once the first stack has been applied, any allied  champion's basic attack applies an additional stack to the target  on-hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The fourth stack against a target consumes them all to deal 26 − 196 (based on level) magic damage and  stun them for 1.25 − 1.75 (based on level) seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "This effect cannot apply to the same target more than once every few seconds. During this immunity period, affected targets take「 bonus magic damage equal to 20% of the trigger damage 」「 5.2 − 39.2 (based on level) bonus magic damage 」from Braum's basic attacks.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Winter's Bite": {
    effects: [
      {
        img: "Winter's Bite.png",
        description:
          'Active: Braum propels ice from his shield in the target direction, dealing magic damage to the first enemy hit and  slowing them by 70% decaying over 2 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "75 / 125 / 175 / 225 / 275 (+ 2.5% of Braum's maximum health)",
            healType: 'BonusHealth',
            values: [75, 125, 175, 225, 275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 125 / 175 / 225 / 275',
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: "of Braum's maximum health",
                pre: "+ 2.5% of Braum's maximum health",
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Stand Behind Me': {
    effects: [
      {
        img: 'Stand Behind Me.png',
        description:
          'Active: Braum  dashes to put himself between the target ally and the closest  visible enemy  champion within 1500 units, and upon arrival grants himself and the ally  bonus armor and  bonus magic resistance for 3 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Ally Bonus Armor:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 12% bonus armor)',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 12% bonus armor',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Ally Bonus Magic Resistance:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 12% bonus magic resistance)',
            damagetype: 'Magic',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 12% bonus magic resistance',
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
          'Stand Behind Me can be self cast to instantly grant Braum the bonus resistances.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Self Bonus Armor:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 36% bonus armor)',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 36,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 36% bonus armor',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Self Bonus Magic Resistance:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 36% bonus magic resistance)',
            damagetype: 'Magic',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 36,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 36% bonus magic resistance',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Unbreakable can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Unbreakable: {
    effects: [
      {
        img: 'Unbreakable.png',
        description:
          'Active: Braum sets his shield in the target direction for a few seconds, creating a barrier that intercepts all incoming hostile  projectiles and reduces the damage Braum takes through it. The first instance of damage dealt by a  champion from this direction is reduced by 100%. Unbreakable does not affect  turrets.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Damage reduction:',
            raw: '35 / 40 / 45 / 50 / 55%',
            values: [35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55%',
          },
          {
            effectType: 'Unique',
            name: 'Barrier Duration:',
            raw: '3 / 3.25 / 3.5 / 3.75 / 4',
            values: [3, 3.25, 3.5, 3.75, 4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3.25 / 3.5 / 3.75 / 4',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While his shield is raised, Braum also gains  10% bonus movement speed and  ghosting.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Glacial Fissure': {
    effects: [
      {
        img: 'Glacial Fissure.png',
        description:
          'Active: Braum leaps into the air and slams his shield into the ground, creating a fissure that travels forth in the target direction, dealing magic damage to enemies within its path as well as those around Braum.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 225 / 300 / 375 / 450 (+ 60% AP)',
            damagetype: 'None',
            values: [150, 225, 300, 375, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 225 / 300 / 375 / 450',
            children: [
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
        img: '',
        description:
          'The first target hit is  knocked up for at least 0.3 seconds, increased if they are further away from Braum. All other enemies hit are  knocked up for 0.3 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum Knockup Duration:',
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
        img: '',
        description:
          "A field of ice is created along the fissure's path, lasting for 4 seconds and  slowing enemies within the area every 0.25 seconds. The field disappears after the duration ends in the same order and speed it was created with.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
