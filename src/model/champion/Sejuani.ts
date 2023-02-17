import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Sejuani';
export const skillsData = ChampionSkillsData['Sejuani'];

export const Sejuani = {
  'Fury of the North': {
    effects: [
      {
        img: 'Fury of the North.png',
        description:
          "Innate - Icebreaker: Enemies  stunned by Sejuani are marked Frozen for the disable's duration. Sejuani's next basic attack or ability against a Frozen enemy will consume the mark to deal bonus magic damage equal to 10% of their maximum health, capped at 300 against epic monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Innate - Frost Armor: Sejuani gains Frost Armor, which lingers for 3 seconds after taking damage from enemy  champions or  monsters. She restores it after 12 − 6 (based on level) seconds without taking damage from them.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sejuani Frost Armor.png',
        description:
          'Frost Armor: Sejuani gains  slow immunity,  cripple immunity,  10 (+ 50% bonus armor) bonus armor, and  10 (+ 50% bonus magic resistance) bonus magic resistance.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Arctic Assault': {
    effects: [
      {
        img: 'Arctic Assault.png',
        description:
          'Active:  Bristle  dashes to the target location until he collides with an enemy  champion, dealing magic damage to enemies he passes through and  knocking them up for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '90 / 140 / 190 / 240 / 290 (+ 60% AP)',
            damagetype: 'None',
            values: [90, 140, 190, 240, 290],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 140 / 190 / 240 / 290',
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
      {
        img: '',
        description:
          'Sejuani can cast any of her abilities during the dash. Arctic Assault will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Winter's Wrath": {
    effects: [
      {
        img: "Winter's Wrath.png",
        description:
          'Active: After 0.25 seconds into the cast time, Sejuani swings her flail in a cone in the target direction that deals physical damage to enemies hit and  knocks back  minions and  monsters hit.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 20% AP) (+ 2% of her maximum health)',
            healType: 'BonusHealth',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'of her maximum health',
                pre: '+ 2% of her maximum health',
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
          'After the cast time, Sejuani lashes out with her flail in a line in the same direction, dealing physical damage to enemies hit and  slowing them by 75% for 0.25 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '30 / 70 / 110 / 150 / 190 (+ 60% AP) (+ 6% of her maximum health)',
            healType: 'BonusHealth',
            values: [30, 70, 110, 150, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 70 / 110 / 150 / 190',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
              {
                values: 6,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'of her maximum health',
                pre: '+ 6% of her maximum health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Sejuani can move during Winter's Wrath's cast time.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Permafrost: {
    effects: [
      {
        img: 'Sejuani Frost Stack.png',
        description:
          "Passive:  Winter's Wrath and both Sejuani's and nearby allied  melee champions' attacks  on-hit apply stacks of Frost to enemy  champions, medium or large  monsters, and large  minions for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is  Frozen. Enemies hit by Permafrost or  Glacial Prison's bola have all of their Frost stacks consumed. Enemy champions cannot be affected by Frost for 10 seconds after having it consumed. Sejuani can cast Permafrost against an enemy with 4 stacks.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Permafrost.png',
        description:
          'Active: Sejuani hurls a trap at the  visible enemy with 4 stacks of Frost closest to the cursor, which deals magic damage,  knocks them down, and  stuns them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 105 / 155 / 205 / 255 (+ 60% AP)',
            damagetype: 'None',
            values: [55, 105, 155, 205, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 105 / 155 / 205 / 255',
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
      {
        img: '',
        description: "Permafrost  resets Sejuani's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Glacial Prison': {
    effects: [
      {
        img: 'Glacial Prison.png',
        description:
          'Active: Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and  stunning them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '125 / 137.5 / 150 / 162.5 / 175 (+ 40% AP)',
            damagetype: 'None',
            values: [125, 137.5, 150, 162.5, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 137.5 / 150 / 162.5 / 175',
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
          'If the bola travels over 400 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased damage and  stunning for 1.5 seconds instead. For the same duration, a frost storm is created that  slows enemies within by 30% and grants  sight of the area in a smaller radius.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
          'Afterwards, the storm shatters to deal magic damage to enemies hit and  slow them by 80% for 1 second, as well as  revealing them and granting  sight of the area for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
          "The enemy hit by the bola is not affected by the storm's effects.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
