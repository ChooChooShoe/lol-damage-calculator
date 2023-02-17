import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Zilean';
export const skillsData = ChampionSkillsData['Zilean'];

export const Zilean = {
  'Time in a Bottle': {
    effects: [
      {
        img: 'Time in a Bottle.png',
        description:
          'Innate: Zilean generates  2 / 3.5 / 5 / 6 / 12 (based on level) experience (does not count towards his own level up) every 5 seconds. Time in a Bottle is on cooldown when the game starts and becomes disabled when Zilean reaches level 18.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'When he has enough to level up an allied  champion, he can select them to  channel for 1.2 seconds after a 0.5-second cast time. The channel is  interrupted and disabled upon entering combat with enemy champions or taking damage from  turrets, placing it on a  10-second cooldown. If Zilean interrupts it himself, it is placed on a 1-second cooldown, increased to 2 if he used a basic attack against a turret to do so.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'A successful channel levels up the target and rewards Zilean the same amount of experience for himself as well.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Time Bomb': {
    effects: [
      {
        img: 'Time Bomb.png',
        description:
          'Active: Zilean throws a ticking time bomb to the target location that grants  sight of its surroundings. The bomb will attach itself to units that move within the epicenter, or those hit directly,  revealing them.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After 3 seconds, or when the attached unit dies, the bomb explodes to deal magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 115 / 165 / 230 / 300 (+ 90% AP)',
            damagetype: 'None',
            values: [75, 115, 165, 230, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 115 / 165 / 230 / 300',
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
          'The bomb detonates immediately if another bomb attaches itself to the same unit,  stunning nearby enemies for a duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
            values: [1.1, 1.2, 1.3, 1.4, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Rewind: {
    effects: [
      {
        img: 'Rewind.png',
        description:
          'Active: Zilean reduces the  current cooldowns of  Time Bomb and  Time Warp by 10 seconds each.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Time Warp': {
    effects: [
      {
        img: 'Time Warp.png',
        description:
          'Active: Zilean applies Time Warp to the target champion which lasts for 2.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Time Warp: If the target is an ally, they gain  bonus movement speed. If the target is an enemy, they are  slowed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Movement Speed Modifier:',
            raw: '40 / 55 / 70 / 85 / 99%',
            values: [40, 55, 70, 85, 99],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 99%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Chronoshift: {
    effects: [
      {
        img: 'Chronoshift.png',
        description:
          'Active: Zilean places a protective time rune on the target allied  champion or himself for 5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the target takes  fatal damage within the duration, they enter  resurrection for 3 seconds, becoming  invulnerable,  untargetable, and  unable to act. Afterwards, they revive while being  healed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '600 / 725 / 850 / 975 / 1100 (+ 200% AP)',
            damagetype: 'None',
            values: [600, 725, 850, 975, 1100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '600 / 725 / 850 / 975 / 1100',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 200% AP',
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
