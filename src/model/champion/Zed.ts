import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Zed';
export const skillsData = ChampionSkillsData['Zed'];

export const Zed = {
  'Contempt for the Weak': {
    effects: [
      {
        img: 'Contempt for the Weak.png',
        description:
          "Innate: Zed's basic attacks against targets below 50% maximum health are empowered to deal 6 / 8 / 10% (based on level) of the target's maximum health as bonus magic damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Against  monsters, Contempt for the Weak deals 200% damage, capped at 300.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Contempt for the Weak cannot occur on the same  champion more than once every few seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Razor Shuriken': {
    effects: [
      {
        img: 'Razor Shuriken.png',
        description:
          'Active: Zed throws a shuriken in the target direction that deals physical damage to enemies hit, reduced to 60% against targets beyond the first.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 110% bonus AD)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Living Shadow': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Zed restores  energy whenever he and his  Shadows or multiple Shadows hit an ability on the same target. This may only occur once per cast ability.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Energy Restored:',
            raw: '30 / 35 / 40 / 45 / 50',
            values: [30, 35, 40, 45, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Living Shadow.png',
        description:
          'Active: Zed creates a  Shadow that dashes to the target location and remains there for 5.25 seconds, being able to mimic  Razor Shuriken and  Shadow Slash regardless of range. Living Shadow can be recast while within range of the Shadow.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Living Shadow 2.png',
        description:
          'Recast: Zed and the  Shadow  blink to swap places. If Living Shadow was recast while the Shadow is dashing, the recast will instead occur once it has been placed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If an ability is cast while the Shadow is dashing, it will cast that ability once it has been placed. See Pets for more details about Shadows. Living Shadow will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shadow Slash': {
    effects: [
      {
        img: 'Shadow Slash.png',
        description:
          'Active: Zed slashes to deal physical damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 85 / 105 / 125 / 145 (+ 65% bonus AD)',
            damagetype: 'None',
            values: [65, 85, 105, 125, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 85 / 105 / 125 / 145',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 65% bonus AD',
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
          "Enemies hit by a  Shadow's slash are  slowed for 1.5 seconds, with multiple slashes dealing no additional damage but the slow's effectiveness being increased by 50%.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Living Shadow's  current cooldown is reduced by 2 seconds for each enemy  champion hit by Zed's slash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Death Mark': {
    effects: [
      {
        img: 'Death Mark.png',
        description:
          'Active: Zed becomes  untargetable and, after 0.6 seconds, he  dashes 125 units through the target enemy champion over 0.35 seconds. Afterwards, he becomes targetable again, renders them Marked for Death for 3 seconds, and gains  ghosting for the same duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Zed also spawns a  Shadow at his casting position for 9 seconds which is able to mimic  Razor Shuriken and  Shadow Slash regardless of range. Death Mark can be recast after 0.5 seconds of his reappearance while the  Shadow is active, though not in the last 1.25 seconds of its duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Marked for Death: Zed stores a portion of all pre-mitigation physical damage and magic damage he and his  Shadows deal to the target, detonating at the end of the duration to deal physical damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65% AD (+ 25 / 40 / 55% of damage dealt)',
            damagetype: 'Physical',
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '65% AD',
            children: [
              {
                values: [25, 40, 55],
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'of damage dealt',
                pre: '+ 25 / 40 / 55% of damage dealt',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Death Mark 2.png',
        description: 'Recast: Zed and the  Shadow  blink to swap places.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the target dies or is 1950 or more units away before the dash begins, Death Mark is cancelled, goes on a  0.5-second cooldown, and Zed reappears at the cast location. The  Shadow spawned also disappears.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
