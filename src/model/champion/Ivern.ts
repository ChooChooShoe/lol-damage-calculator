import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Ivern';
export const skillsData = ChampionSkillsData['Ivern'];

export const Ivern = {
  'Friend of the Forest': {
    effects: [
      {
        img: 'Friend of the Forest.png',
        description:
          'Innate: Ivern cannot attack nor damage non-epic  monsters. Instead, targeting a jungle camp initiates a 2.5 second  channel that will plant a grove upon the camp. Placing a grove costs  98.25 − 0.14 (based on level) health and  90 − 0.37 (based on level) mana. The channel cannot be cancelled in the first 0.15 seconds and in the last 0.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Ivern cannot place a grove while he is unable to cast abilities.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The grove matures over 40 − 1 (based on level) seconds. When fully matured, Ivern can target the camp again to free it after a 0.5-second cast time, clearing the camp and receiving the  full gold and  full experience bounties. Using  Smite on a monster within the grove will instantly free the camp regardless of maturity.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If the camp's large monster has already been slain prior to planting a grove, Ivern will free the camp upon completing the channel at no cost. Similarly, the grove will instantly mature if the large monster is slain.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Starting at level 5, freeing the  Red Brambleback or the  Blue Sentinel leaves behind a sapling for 60 seconds that can be gathered by one allied  champion to gain the camp's respective buff, either the  Crest of Cinders or the  Crest of Insight. If an ally kills either monster, they also leave behind a sapling that only Ivern can consume.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Rootcaller: {
    effects: [
      {
        img: 'Rootcaller.png',
        description:
          'Active: Ivern throws a vine in the target direction, dealing magic damage to the first enemy hit and  rooting them for a duration, during which they are also  revealed. Rootcaller can be recast while the target is  rooted.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 70% AP)',
            damagetype: 'None',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            values: [1.2, 1.4, 1.6, 1.8, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Ivern and allied champions can select the target  rooted by Rootcaller to  dash to their location, with allies stopping at  their attack range and Ivern stopping within 125 units from the target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Recast: Ivern  dashes to the target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Brushmaker: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: While Ivern is in  brush, his basic attacks are empowered to deal bonus magic damage  on-hit. This bonus persists for 3 seconds after leaving brush.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '30 / 37.5 / 45 / 52.5 / 60 (+ 30% AP)',
            damagetype: 'None',
            values: [30, 37.5, 45, 52.5, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Brushmaker.png',
        description:
          'Active: Ivern grows a patch of  brush at the target location for 30 seconds, granting  sight of the area within and around it for 3 seconds. Spawning brush near terrain or other brush increases its radius.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Ivern periodically stocks a Brushmaker charge, up to a maximum of 3.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Triggerseed: {
    effects: [
      {
        img: 'Triggerseed.png',
        description:
          'Active: Ivern places a seed on the target allied champion,  Daisy, or himself, granting the target a  shield for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 75% AP)',
            damagetype: 'None',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
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
          'After 2 seconds, the seed explodes to deal magic damage to nearby enemies and  slow them for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 80% AP)',
            damagetype: 'None',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
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
            name: 'Slow:',
            raw: '50 / 55 / 60 / 65 / 70%',
            values: [50, 55, 60, 65, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 55 / 60 / 65 / 70%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Daisy!': {
    effects: [
      {
        img: 'Daisy!.png',
        description:
          'Active: Ivern summons his sentinel friend  Daisy to his side, who lands 350 units away from him in the target direction and remains on the field for up to 60 seconds as a controllable  pet.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Daisy! can be recast at any time while  Daisy is alive.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Daisy, wait!.png',
        description:
          'Recast: Ivern commands  Daisy to move to the target location. If cast on Ivern,  Daisy will follow him.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The recast of Daisy! can be used while affected by  cast-inhibiting crowd control. See Pets for more details about  Daisy.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
