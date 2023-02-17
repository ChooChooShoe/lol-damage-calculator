import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Teemo';
export const skillsData = ChampionSkillsData['Teemo'];

export const Teemo = {
  'Guerrilla Warfare': {
    effects: [
      {
        img: 'Guerrilla Warfare.png',
        description:
          'Innate: Teemo gains  invisibility after 1.5 seconds without moving, taking damage, performing actions that break stealth,  channeling, or being in  stasis. Teemo will maintain stealth so long as he remains idle and is not  displaced. While in  brush, Teemo gains the stealth even while moving and can move without breaking stealth.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Element of Surprise.png',
        description:
          'Innate - Element of Surprise: When Teemo breaks the stealth, he gains  20 / 40 / 60 / 80% (based on level) bonus attack speed for 5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blinding Dart': {
    effects: [
      {
        img: 'Blinding Dart.png',
        description:
          'Active: Teemo shoots a dart at the target enemy that deals magic damage and  blinds them for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
            damagetype: 'None',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
            name: 'Blind Duration:',
            raw: '2 / 2.25 / 2.5 / 2.75 / 3',
            values: [2, 2.25, 2.5, 2.75, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.25 / 2.5 / 2.75 / 3',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The duration of the  blind is doubled against  minions and  monsters.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Increased Blind Duration:',
            raw: '4 / 4.5 / 5 / 5.5 / 6',
            values: [4, 4.5, 5, 5.5, 6],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 4.5 / 5 / 5.5 / 6',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Move Quick': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Teemo gains  bonus movement speed after 5 seconds without taking damage from enemy  champions or  turrets.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '10 / 14 / 18 / 22 / 26%',
            values: [10, 14, 18, 22, 26],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 14 / 18 / 22 / 26%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Move Quick.png',
        description:
          'Active: Teemo gains bonus movement speed for 3 seconds. This overrides the passive bonus, but prevents the passive effect from being removed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 28 / 36 / 44 / 52%',
            values: [20, 28, 36, 44, 52],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 28 / 36 / 44 / 52%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Casting Move Quick does not interrupt  Guerrilla Warfare.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Toxic Shot': {
    effects: [
      {
        img: 'Toxic Shot.png',
        description:
          "Passive: Teemo's basic attacks are empowered to deal bonus magic damage  on-hit and inflict  poison.\n poison: The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage On-Hit:',
            raw: '14 / 25 / 36 / 47 / 58 (+ 30% AP)',
            damagetype: 'None',
            values: [14, 25, 36, 47, 58],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '14 / 25 / 36 / 47 / 58',
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
            name: 'Magic Damage per Tick:',
            raw: '6 / 12 / 18 / 24 / 30 (+ 10% AP)',
            damagetype: 'None',
            values: [6, 12, 18, 24, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 12 / 18 / 24 / 30',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Toxic Shot deals 150% damage against  monsters.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Monster Damage On-Hit:',
            raw: '21 / 37.5 / 54 / 70.5 / 87 (+ 45% AP)',
            damagetype: 'None',
            values: [21, 37.5, 54, 70.5, 87],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '21 / 37.5 / 54 / 70.5 / 87',
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
          {
            effectType: 'Damage',
            name: 'Monster Damage per Tick:',
            raw: '9 / 18 / 27 / 36 / 45 (+ 15% AP)',
            damagetype: 'None',
            values: [9, 18, 27, 36, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '9 / 18 / 27 / 36 / 45',
            children: [
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
    ],
  },
  'Noxious Trap': {
    effects: [
      {
        img: 'Noxious Trap.png',
        description:
          'Active: Teemo tosses a poisonous mushroom to the target location that becomes  stealthed after arming over 1 second, lasting for up to 5 minutes and granting  sight of its surroundings. If the mushroom lands on an already-placed one, it will bounce forward again for its cast distance, up to a cap, which can happen repeatedly.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bounce Distance Cap:',
            raw: '350 / 400 / 450 / 500 / 550',
            values: [350, 400, 450, 500, 550],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '350 / 400 / 450 / 500 / 550',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Teemo periodically stocks a Noxious Trap charge, up to a maximum amount.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum Charges:',
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
          'The mushroom will explode upon enemy contact, inflicting  poison to nearby enemies and  slowing them for 4 seconds, as well as  revealing them.',
        leveling: [
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
        description:
          'poison: The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '50 / 65.625 / 81.25 / 96.875 / 112.5 (+ 13.75% AP)',
            damagetype: 'None',
            values: [50, 65.625, 81.25, 96.875, 112.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 65.625 / 81.25 / 96.875 / 112.5',
            children: [
              {
                values: 13.75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 13.75% AP',
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
          'A mushroom has  6 maximum health and can be damaged only by  champions basic attacks (2 damage from  ranged and 3 from  melee).',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
