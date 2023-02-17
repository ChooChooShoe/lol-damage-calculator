import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Ezreal';
export const skillsData = ChampionSkillsData['Ezreal'];

export const Ezreal = {
  'Rising Spell Force': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Rising Spell Force.png',
        description:
          'Rising Spell Force: For each stack, Ezreal gains  10% bonus attack speed, up to a maximum of 50%.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Mystic Shot': {
    effects: [
      {
        img: 'Mystic Shot.png',
        description:
          'Active: Ezreal fires a bolt of energy in the target direction that deals physical damage to the first enemy hit and applies  on-hit and on-attack effects at 100% effectiveness.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 130% AD) (+ 15% AP)',
            damagetype: 'None',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
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
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
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
          "If Mystic Shot successfully hits an enemy, the  current cooldowns of Ezreal's abilities, including Mystic Shot's, are reduced by 1.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Essence Flux': {
    effects: [
      {
        img: 'Essence Flux.png',
        description:
          'Active: Ezreal fires an orb in the target direction that marks the first enemy  champion, epic  monster, or structure hit for 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'His next basic attack or ability against the target detonates the mark to deal them bonus magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 60% bonus AD) (+ 70 / 75 / 80 / 85 / 90% AP)',
            damagetype: 'None',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
              },
              {
                values: [70, 75, 80, 85, 90],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70 / 75 / 80 / 85 / 90% AP',
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
          'If the mark was detonated with an ability, Ezreal restores  60 mana plus the mana cost of that ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Arcane Shift': {
    effects: [
      {
        img: 'Arcane Shift.png',
        description:
          'Active: Ezreal  blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and  reveals them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 130 / 180 / 230 / 280 (+ 50% bonus AD) (+ 75% AP)',
            damagetype: 'None',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
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
      {
        img: '',
        description:
          'Arcane Shift prioritizes firing at the nearest enemy marked by  Essence Flux.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The target does not have to be  visible to be hit by this ability. Arcane Shift will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Trueshot Barrage': {
    effects: [
      {
        img: 'Trueshot Barrage.png',
        description:
          'Active: Ezreal fires an energy projectile in the target direction, which briefly grants  sight of its surroundings and deals magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '350 / 425 / 500 / 575 / 650 (+ 100% bonus AD) (+ 90% AP)',
            damagetype: 'None',
            values: [350, 425, 500, 575, 650],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '350 / 425 / 500 / 575 / 650',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
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
        description: 'Minions and non-epic  monsters take 50% reduced damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '175 / 212.5 / 250 / 287.5 / 325 (+ 50% bonus AD) (+ 45% AP)',
            damagetype: 'None',
            values: [175, 212.5, 250, 287.5, 325],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 212.5 / 250 / 287.5 / 325',
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
} satisfies { [skillName in string]: SkillModel };
