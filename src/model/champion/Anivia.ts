import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Anivia';
export const skillsData = ChampionSkillsData['Anivia'];

export const Anivia = {
  Rebirth: {
    effects: [
      {
        img: 'Rebirth.png',
        description:
          'Innate: Periodically, upon taking  fatal damage, Anivia enters  resurrection for 6 seconds and restores all of her  health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While under resurrection, Anivia is  unable to act and gains -40 − 20 (based on level)  bonus armor and  bonus magic resistance.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Anivia remains alive by the end of the duration, she is revived with her current health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Flash Frost': {
    effects: [
      {
        img: 'Flash Frost.png',
        description:
          "Active: Anivia launches a chunk of ice in the target direction that deals magic damage to enemies hit and  slows them by 20% − 40% (based on  Glacial Storm's Rank) for 3 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 25% AP)',
            damagetype: 'None',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
          'Flash Frost can be recast while the ice is in flight after its cast time, and does so automatically at maximum range.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Anivia shatters the ice, dealing magic damage to nearby enemies and  stunning them for a duration, as well as refreshing the  slow.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 45% AP)',
            damagetype: 'None',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
  Crystallize: {
    effects: [
      {
        img: 'Crystallize.png',
        description:
          'Active: Anivia summons a wall of ice at the target location perpendicular to her facing,  knocking all units away from it, though not through terrain. The wall lingers as impassable terrain for 5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Width:',
            raw: '600 / 700 / 800 / 900 / 1000 units',
            values: [600, 700, 800, 900, 1000],
            user: 'none',
            units: '',
            unitsText: 'units',
            pre: '600 / 700 / 800 / 900 / 1000 units',
          },
          {
            effectType: 'Unique',
            name: 'Number of ice segments:',
            raw: '4 / 5 / 6 / 7 / 8 chunks of ice',
            values: [4, 5, 6, 7, 8],
            user: 'none',
            units: '',
            unitsText: 'chunks of ice',
            pre: '4 / 5 / 6 / 7 / 8 chunks of ice',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Frostbite: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Enemies hit by  Flash Frost or a fully formed  Glacial Storm become Chilled for 3 seconds, refreshing on subsequent hits.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Frostbite.png',
        description:
          'Active: Anivia blasts a freezing wind at the target enemy that deals magic damage,  doubled if they were Chilled.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 60% AP)',
            damagetype: 'None',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
    ],
  },
  'Glacial Storm': {
    effects: [
      {
        img: 'Glacial Storm.png',
        description:
          'Active: Anivia calls forth a driving rain of ice and hail at the target location, dealing magic damage every 0.5 seconds to enemies within and  slowing them for 1 second, refreshing every 0.5 seconds while they remain inside.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '15 / 18.75 / 22.5 / 26.25 / 30 (+ 6.25% AP)',
            damagetype: 'None',
            values: [15, 18.75, 22.5, 26.25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 18.75 / 22.5 / 26.25 / 30',
            children: [
              {
                values: 6.25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 6.25% AP',
              },
            ],
          },
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
          'The blizzard increases in size over 1.5 seconds. At maximum size, Glacial Storm is empowered to deal 300% damage and increase the effectiveness of its slow by 50%, which also instead lasts 1.5 seconds and refreshes every 0.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage per Tick:',
            raw: '45 / 56.25 / 67.5 / 78.75 / 90 (+ 18.75% AP)',
            damagetype: 'None',
            values: [45, 56.25, 67.5, 78.75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 56.25 / 67.5 / 78.75 / 90',
            children: [
              {
                values: 18.75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 18.75% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Empowered Slow:',
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
      {
        img: '',
        description:
          'Glacial Storm can be recast after 1 second, and does so automatically if Anivia is no longer in range or unable to pay the  mana cost, or becomes affected by any form of  interrupting  crowd control.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Anivia ends Glacial Storm, dealing one last tick of damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
