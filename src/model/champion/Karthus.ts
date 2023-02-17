import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Karthus';
export const skillsData = ChampionSkillsData['Karthus'];

export const Karthus = {
  'Death Defied': {
    effects: [
      {
        img: 'Death Defied.png',
        description:
          "Innate: Upon taking  fatal damage, Karthus enters a  zombie state for 7 seconds, during which he can cast his abilities at no cost. If  Defile has been learned, it will remain toggled on for Death Defied's entire duration.  Requiem becomes disabled after Death Defied has lasted 4 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While under this state, Karthus becomes  untargetable and  immune to crowd control as well as prevents all incoming damage, but is also rendered unable to move, declare basic attacks, use summoner spells, and activate items.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Lay Waste': {
    effects: [
      {
        img: 'Lay Waste.png',
        description:
          'Active: Karthus conjures a blast at the target location that detonates after 0.528 seconds to 0.759 seconds, granting  sight of the area and dealing magic damage to all enemies within,  doubled when only one target is struck.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '45 / 62.5 / 80 / 97.5 / 115 (+ 35% AP)',
            damagetype: 'None',
            values: [45, 62.5, 80, 97.5, 115],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 62.5 / 80 / 97.5 / 115',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Lay Waste deals 95% damage to  monsters.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Monster Damage:',
            raw: '42.75 / 59.375 / 76 / 92.625 / 109.25 (+ 29.75% AP)',
            damagetype: 'None',
            values: [42.75, 59.375, 76, 92.625, 109.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '42.75 / 59.375 / 76 / 92.625 / 109.25',
            children: [
              {
                values: 29.75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 29.75% AP',
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
          'During  Death Defied, Lay Waste will cast at maximum range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wall of Pain': {
    effects: [
      {
        img: 'Wall of Pain.png',
        description:
          'Active: Karthus erects a wall of pain at the target location perpendicular to his facing that lasts 5 seconds, granting  sight around its pillars and center.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Wall Length:',
            raw: '800 / 900 / 1000 / 1100 / 1200',
            values: [800, 900, 1000, 1100, 1200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '800 / 900 / 1000 / 1100 / 1200',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies that touch the wall are inflicted with  15% magic resistance reduction and become  slowed for 4 seconds, decaying over the duration. Enemies can be affected by Wall of Pain only once per cast.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Defile: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Karthus restores  mana whenever he kills an enemy.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '15 / 25 / 35 / 45 / 55',
            values: [15, 25, 35, 45, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Defile.png',
        description:
          'Toggle: Karthus surrounds himself in a necrotic aura that deals magic damage every 0.25 seconds to all nearby enemies. Toggling Defile off triggers a final tick of damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '7.5 / 12.5 / 17.5 / 22.5 / 27.5 (+ 5% AP)',
            damagetype: 'None',
            values: [7.5, 12.5, 17.5, 22.5, 27.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7.5 / 12.5 / 17.5 / 22.5 / 27.5',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Defile cannot be toggled off during  Death Defied.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Requiem: {
    effects: [
      {
        img: 'Requiem.png',
        description:
          'Active: Karthus  channels for 3 seconds, then deals magic damage to all targetable enemy champions upon completion.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 275 / 350 / 425 / 500 (+ 75% AP)',
            damagetype: 'None',
            values: [200, 275, 350, 425, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 275 / 350 / 425 / 500',
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
} satisfies { [skillName in string]: SkillModel };
