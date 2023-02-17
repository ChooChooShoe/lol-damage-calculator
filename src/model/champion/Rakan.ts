import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Rakan';
export const skillsData = ChampionSkillsData['Rakan'];

export const Rakan = {
  'Fey Feathers': {
    effects: [
      {
        img: 'Fey Feathers.png',
        description:
          'Innate: Periodically, Rakan grants himself a  shield for 30 − 225 (based on level) (+ 95% AP) that lasts until broken. After being out of combat for 5 seconds, any leftover shield will be restored to maximum value.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Rakan's basic attacks and ability hits reduce Fey Feathers'   cooldown by 1 second for each enemy  champion hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'ProfileIcon1634 Blazing Feathers.png',
        description:
          "Innate - Lover's Leap: If either Rakan or  Xayah is channeling  Recall, the other may move nearby and channel their own to join alongside them. Both reach base at the time of which the initiator's  Recall completes.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Gleaming Quill': {
    effects: [
      {
        img: 'Gleaming Quill.png',
        description:
          'Active: Rakan slings an enchanted feather in the target direction that deals magic damage to the first enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 70% AP)',
            damagetype: 'None',
            values: [70, 115, 160, 205, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the target was an enemy  champion or epic  monster, a radius is marked around Rakan. After 3 seconds or if an allied champion enters the radius, Rakan  heals himself and nearby allied champions for 40 − 210 (based on level) (+ 55% AP).',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Grand Entrance': {
    effects: [
      {
        img: 'Grand Entrance.png',
        description:
          'Active: Rakan  dashes to the target location. After a 0.35-second delay upon arrival, he deals magic damage to nearby enemies and  knocks them up for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 80% AP)',
            damagetype: 'None',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
          'Rakan will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during Grand Entrance.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Grand Entrance will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Battle Dance': {
    effects: [
      {
        img: 'Battle Dance.png',
        description:
          'Active: Rakan grants a  shield to the target allied champion for 3 seconds and then  dashes to and around them. Battle Dance can be recast within 5 seconds at no additional cost.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 70% AP)',
            damagetype: 'None',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Battle Dance 2.png',
        description: "Recast: Rakan mimics the first cast's effects.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Rakan will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during Battle Dance.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If  Xayah is the target, Battle Dance can be cast from an increased range.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'The Quickness': {
    effects: [
      {
        img: 'The Quickness.png',
        description:
          'Active: Rakan breaks into a captivating sprint for 4 seconds, gaining  ghosting and  75% bonus movement speed for the duration. During this time, he deals magic damage to enemies he collides with and  charms and  slows them by 75% for a duration. This cannot affect the same enemy more than once.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 50% AP)',
            damagetype: 'None',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1 / 1.125 / 1.25 / 1.375 / 1.5',
            values: [1, 1.125, 1.25, 1.375, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.125 / 1.25 / 1.375 / 1.5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Colliding with an enemy  champion extends The Quickness' duration by 0.25 seconds, which can occur once per champion. When Rakan collides with his first enemy champion, he gains an additional 75% bonus movement speed that decays after 0.5 seconds by 20% every 0.5 seconds, then by 15% after decaying by 60% over 1.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'During The Quickness, Rakan cannot basic attack enemy champions he did not collide with, unless the attack command was inputted before the ability was activated.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
