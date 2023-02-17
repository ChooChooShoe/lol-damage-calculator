import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Bard';
export const skillsData = ChampionSkillsData['Bard'];

export const Bard = {
  "Traveler's Call": {
    effects: [
      {
        img: "Traveler's Call.png",
        description:
          "Innate - Ancient Chimes: Bard's presence causes sacred  Chimes to appear at random locations on the map, lingering for up to 10 minutes. Collecting a Chime grants Bard  24% bonus movement speed out of combat for 7 seconds, stacking up to 5 times, with every other Chime collected beyond the first granting an additional 14% bonus movement speed, up to a total of 80% bonus movement speed,  20 + (1 per minute after 5 minutes) experience, and  12% maximum mana. Bard empowers his Meeps each time he collects 5 Chimes.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Traveler's Call 2.png",
        description:
          "Innate - Meeps: Bard's presence attracts Meeps, which are small spirits that come to his side. While he has Meeps, his basic attacks are empowered to each consume a Meep on-attack to deal 35 (+ 14 per 5 Chimes collected) (+ 30% AP) bonus magic damage.\nAt 5 Chimes, Meeps  slow damaged enemies by 25% − 75% (based on number of Chimes) for 1 second.\nAt 15 Chimes, Meeps deal the damage to enemies within 150 units of the primary target as well as those in a cone behind them.\nAt 35 Chimes, the cone's radius increases.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Meeps spawn every 8 − 4 (based on number of Chimes) seconds and Bard can have up to 1 − 9 (based on number of Chimes) of them at a time.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Cosmic Binding': {
    effects: [
      {
        img: 'Cosmic Binding.png',
        description:
          'Active: Bard fires an energy bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 60% for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 65% AP)',
            damagetype: 'None',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1 / 1.2 / 1.4 / 1.6 / 1.8',
            values: [1, 1.2, 1.4, 1.6, 1.8],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.2 / 1.4 / 1.6 / 1.8',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After Cosmic Binding hits an enemy, the bolt continues behind them for 300 units. If the bolt hits terrain or a second enemy, it  stuns both targets for the same duration, dealing the same damage to the secondary target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Caretaker's Shrine": {
    effects: [
      {
        img: "Caretaker's Shrine.png",
        description:
          'Active: Bard conjures a shrine at the target location that gathers power over 10 seconds, granting  sight of its surroundings for 1.8 seconds. Shrines last until they are consumed by champions moving over them. Up to 3 shrines may be active at a time.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If the champion was an ally or Bard himself, they are  healed for an amount based on the shrine's power and gain  30% bonus movement speed that decays over 1.5 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Heal:',
            raw: '25 / 50 / 75 / 100 / 125 (+ 30% AP)',
            damagetype: 'None',
            values: [25, 50, 75, 100, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 50 / 75 / 100 / 125',
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
    ],
  },
  'Magical Journey': {
    effects: [
      {
        img: 'Magical Journey.png',
        description:
          'Active: Bard opens a one-way magical corridor through a piece of terrain in the target direction for 10 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'A champion can  pass through the corridor by selecting it, becoming  revealed during the travel. Bard and allies travel through the portal at 33% increased speed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'A nearby valid piece of terrain is required to cast this ability. Magical Journey cannot be taken while  immobilized or  grounded.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tempered Fate': {
    effects: [
      {
        img: 'Tempered Fate.png',
        description:
          'Active: Bard sends magical energy arcing to the target location, granting  sight of the area during travel. Upon impact, it puts all units within into  stasis for 2.5 seconds, as well as  stunning all enemy  champions,  minions, and  turrets struck for the same duration. Enemies hit are  revealed for the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Epic  monsters and  turrets are affected by Tempered Fate despite being  immune to crowd control.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
