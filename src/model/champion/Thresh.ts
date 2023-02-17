import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Thresh';
export const skillsData = ChampionSkillsData['Thresh'];

export const Thresh = {
  Damnation: {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Thresh's armor cannot increase through growth (per level).",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Damnation.png',
        description:
          'Innate: Enemy  champions, large  minions and large  monsters that die near Thresh drop a Soul for 8 seconds. Epic monsters drop 2 Souls while lesser minions and monsters have a 33.3% chance to drop a Soul.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Thresh automatically collects Souls near him or a placed  Dark Passage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Soul: For each stack, Thresh gains  1 ability power and  1 bonus armor.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Death Sentence': {
    effects: [
      {
        img: 'Death Sentence.png',
        description:
          'Active: Thresh throws out his scythe in the target direction, becoming  unable to move or attack while it is in flight.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The scythe catches the first enemy hit to deal magic damage and  stun and  reveal them for 1.5 seconds, as well as reduce Death Sentence's  current cooldown by 3 seconds. Thresh will also mark the target Shackled for 1.5 seconds, during which he is unable to declare basic attacks, and is  slowed by 20% for 1 second.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 145 / 190 / 235 / 280 (+ 80% AP)',
            damagetype: 'None',
            values: [100, 145, 190, 235, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 145 / 190 / 235 / 280',
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
          'While the target is  stunned, Thresh tugs twice over 0.8 seconds,  pulling the target a short distance with each tug. After 0.5 seconds of hitting an enemy or instantly after hitting a  minion or  monster, Thresh can recast the ability while the target is Shackled, which will cause him to stop tugging.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Deathly Leap.png',
        description:
          'Recast - Deathly Leap: Thresh  dashes to the Shackled enemy, becoming able to attack again upon arrival. He can cast  Dark Passage and  Flay during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dark Passage': {
    effects: [
      {
        img: 'Dark Passage.png',
        description:
          'Active: Thresh throws his lantern to the target location over 0.5 seconds, lasting for 6 seconds while he remains nearby and granting  sight of its surroundings. If Thresh moves too far away from the lantern, it returns back to him immediately.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Thresh and the first allied champion to come near the lantern are granted a  shield for 4 seconds. An ally can select the lantern while in proximity of it,  dashing to Thresh and gaining the shield.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Shield Strength:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 1.5 per  Soul collected)',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: 1.5,
                user: 'player',
                units: 'darkHarvestStacks',
                unitsText: 'per  Soul collected',
                pre: '+ 1.5 per  Soul collected',
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
          'An ally cannot select the lantern while  immobilized,  grounded, or  silenced. The lantern will not expire from Thresh moving too far away if he is dashing with  Deathly Leap.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Flay: {
    effects: [
      {
        img: 'Flay.gif',
        description:
          "Passive: Thresh's basic attacks are empowered to deal bonus magic damage, with the  AD ratio increasing over 10 seconds without basic attacking enemies.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Bonus Magic Damage:',
            raw: '1.5 per  Soul collected (+ 0% AD)',
            damagetype: 'None',
            values: 1.5,
            user: 'player',
            units: 'darkHarvestStacks',
            unitsText: 'per  Soul collected',
            pre: '1.5 per  Soul collected',
            children: [
              {
                values: 0,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 0% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Maximum Bonus Magic Damage:',
            raw: '1.5 per  Soul collected (+ 80 / 110 / 140 / 170 / 200% AD)',
            damagetype: 'None',
            values: 1.5,
            user: 'player',
            units: 'darkHarvestStacks',
            unitsText: 'per  Soul collected',
            pre: '1.5 per  Soul collected',
            children: [
              {
                values: [80, 110, 140, 170, 200],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 80 / 110 / 140 / 170 / 200% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Flay.png',
        description:
          'Active: Thresh sweeps his chain across the ground in a broad line and a radius around him, starting behind him and towards the target direction. Enemies hit are dealt magic damage and  knocked 200 units in the target direction, and then are  slowed for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 110 / 145 / 180 / 215 (+ 60% AP)',
            damagetype: 'None',
            values: [75, 110, 145, 180, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 110 / 145 / 180 / 215',
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
    ],
  },
  'The Box': {
    effects: [
      {
        img: 'The Box.png',
        description:
          'Active: Thresh erects a pentagon of spectral walls around him that each last for 5 seconds. A wall will break upon enemy champion contact, dealing magic damage and  slowing them by 99% for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '250 / 400 / 550 (+ 100% AP)',
            damagetype: 'None',
            values: [250, 400, 550],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 400 / 550',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
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
          'Enemies that break a wall cannot do so again for 1 second. Subsequent walls they break will deal no damage and  slow for only 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
