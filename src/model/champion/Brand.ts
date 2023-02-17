import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Brand';
export const skillsData = ChampionSkillsData['Brand'];

export const Brand = {
  Blaze: {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Brand's abilities apply a stack of Ablaze to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. Subsequent abilities used against a target with Ablaze are empowered. Killing an enemy afflicted with Ablaze or with an ability restores 20 − 40 (based on level)  mana.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Blaze.png',
        description:
          'Ablaze: While afflicted with Ablaze, the target is dealt magic damage equal to「 2.5% of their maximum health over 3.25 seconds. 」「 0.83% of their maximum health every 1.083 seconds over 3.25 seconds. 」Ablaze deals 120% damage per tick to  monsters, capped at 80.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Blaze 2.png',
        description:
          'Upon applying 3 stacks of Ablaze to a large  monster or enemy  champion, the fire becomes unstable, forming an area around the target that grants  sight and explodes after 2 seconds, consuming all stacks. All enemies within the detonation are dealt magic damage equal to 9% − 13% (based on level) of their maximum health (+ 2% per 100 AP) and applied a stack of Ablaze. The explosion will still occur if the target dies to the ability applying the third stack or during the delay.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Brand cannot stack Ablaze more than once on enemies who have exploded in the last 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Sear: {
    effects: [
      {
        img: 'Sear.png',
        description:
          'Active: Brand launches a fireball in the target direction that deals magic damage to the first enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 55% AP)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Ablaze Bonus: The target is  stunned for 1.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Pillar of Flame': {
    effects: [
      {
        img: 'Pillar of Flame.png',
        description:
          'Active: After a 0.627 seconds delay, Brand erupts a pillar of flame at the target location that deals magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 120 / 165 / 210 / 255 (+ 60% AP)',
            damagetype: 'None',
            values: [75, 120, 165, 210, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 120 / 165 / 210 / 255',
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
        description: 'Ablaze Bonus: The target takes 25% increased damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '93.75 / 150 / 206.25 / 262.5 / 318.75 (+ 75% AP)',
            damagetype: 'None',
            values: [93.75, 150, 206.25, 262.5, 318.75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '93.75 / 150 / 206.25 / 262.5 / 318.75',
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
  Conflagration: {
    effects: [
      {
        img: 'Conflagration.png',
        description:
          'Active: Brand sets the target enemy aflame, which creates a blast that deals magic damage to them and nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 45% AP)',
            damagetype: 'None',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
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
      {
        img: '',
        description: "Ablaze Bonus: Conflagration's spread range is doubled.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Pyroclasm: {
    effects: [
      {
        img: 'Pyroclasm.png',
        description:
          'Active: Brand launches a fireball at the target enemy that bounces between nearby enemies and Brand up to four times, dealing magic damage to enemies each time.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 25% AP)',
            damagetype: 'None',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
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
          'Pyroclasm prioritizes  ablazed enemy champions, then other enemy champions, then any valid bounce target, then Brand.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The target does not have to be  visible for the fireball to bounce to them.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Ablaze Bonus: The target is  slowed for 0.25 seconds. This can affect the same enemy more than once.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: '',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 37.5 / 45 / 52.5 / 60%',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
