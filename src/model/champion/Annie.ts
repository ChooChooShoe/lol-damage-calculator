import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Annie';
export const skillsData = ChampionSkillsData['Annie'];

export const Annie = {
  Pyromania: {
    effects: [
      {
        img: 'Pyromania.png',
        description:
          'Innate - Pyromania: Annie generates a stack of Pyromania whenever she hits an enemy with  Disintegrate or casts her other abilities, stacking up to 4 times, at which she gains Energized.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Energized: Annie empowers her next cast of  Disintegrate,  Incinerate, or  Summon: Tibbers to consume all Pyromania stacks to  stun enemies hit for 1.25 / 1.5 / 1.75 (based on level) seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Annie gains maximum stacks of Pyromania when the game starts and upon respawning. She will lose Energized and all Pyromania stacks upon death.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Disintegrate: {
    effects: [
      {
        img: 'Disintegrate.png',
        description:
          'Active: Annie hurls a fireball at the target enemy that deals magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 80% AP)',
            damagetype: 'None',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If this kills the target, 50% of the  cooldown is reduced and the  mana cost is refunded.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Incinerate: {
    effects: [
      {
        img: 'Incinerate.png',
        description:
          'Active: Annie releases fire in a cone in the target direction, dealing magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 85% AP)',
            damagetype: 'None',
            values: [70, 115, 160, 205, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 85% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Molten Shield': {
    effects: [
      {
        img: 'Molten Shield.png',
        description:
          'Active: Annie grants herself or the target allied  champion and  Tibbers a  shield for 3 seconds and 20% − 50% (based on level)  bonus movement speed that decays over 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 40% AP)',
            damagetype: 'None',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
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
        description:
          'While Molten Shield is active, enemies that deal damage to it take magic damage. This may only occur once per enemy per cast for each active Molten Shield.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 40% AP)',
            damagetype: 'None',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
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
    ],
  },
  'Summon: Tibbers': {
    effects: [
      {
        img: 'Summon Tibbers.png',
        description:
          'Active: Annie summons  Tibbers to the target location in a burst of flame, dealing magic damage to enemies near him. Summon: Tibbers can be recast at any time while  Tibbers is alive.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Initial Magic Damage:',
            raw: '150 / 212.5 / 275 / 337.5 / 400 (+ 75% AP)',
            damagetype: 'None',
            values: [150, 212.5, 275, 337.5, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 212.5 / 275 / 337.5 / 400',
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
      {
        img: '',
        description:
          'Tibbers then remains on the field as a controllable  pet for up to 45 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Command- Tibbers.png',
        description: 'Recast: Annie directs  Tibbers to the target location.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Summon: Tibber's recast can be used while affected by  cast-inhibiting crowd control. See Pets for more details about  Tibbers.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
