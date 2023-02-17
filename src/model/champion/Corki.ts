import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Corki';
export const skillsData = ChampionSkillsData['Corki'];

export const Corki = {
  'Hextech Munitions': {
    effects: [
      {
        img: 'Hextech Munitions.png',
        description:
          "Innate - Hextech Shrapnel Shells: Corki's basic attacks are modified to deal 80% AD magic damage and 20% AD physical damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'The Package.png',
        description:
          'Innate - The Package: After 10:00,  The Package is delivered to both corners of the allied fountain, which can be selected by Corki to pick up after  channeling for 1 second. Upon completion of the channel, Corki gains one cast of  Special Delivery for 60 seconds, replacing  Valkyrie for the duration. While holding the  The Package, Corki gains  40% bonus movement speed out of combat and  ghosting.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Corki cannot start the  channel to pick up the package while he is unable to cast abilities.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Phosphorus Bomb': {
    effects: [
      {
        img: 'Phosphorus Bomb.png',
        description:
          'Active: Corki launches a bomb at the target location that explodes upon impact, dealing magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 120 / 165 / 210 / 255 (+ 70% bonus AD) (+ 50% AP)',
            damagetype: 'None',
            values: [75, 120, 165, 210, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 120 / 165 / 210 / 255',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 70% bonus AD',
              },
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The bomb also grants  sight of the area for 6 seconds and  reveals enemy  champions hit for the same duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Valkyrie: {
    effects: [
      {
        img: 'Valkyrie.png',
        description:
          'Active: Corki  dashes to the target location and drops bombs that leave up to 3 blazing patches along his path, depending on the distance traveled. Each patch lasts 2.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies within the patches are dealt magic damage every 0.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 10% AP)',
            damagetype: 'None',
            values: [15, 22.5, 30, 37.5, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45',
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
        description:
          'Gatling Gun can be cast during the dash. Valkyrie will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Special Delivery': {
    effects: [
      {
        img: 'Special Delivery.png',
        description:
          'Active: Corki  dashes with  displacement immunity to the target location,  knocking aside all enemies in his path 500 units and leaving behind a trail of fire for 5 seconds, which grants  sight of the area for its duration and for 3 seconds afterwards.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Enemies hit by Corki's dash or within the trail are burned and  slowed by 90% for 2 seconds, refreshing every 0.25 seconds while inside the area. The burn deals 7.5 − 25 (based on level) (+ 50% bonus AD) (+ 6% AP) magic damage every 0.25 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Casting Special Delivery instantly resets  Valkyrie's  cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Special Delivery will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Gatling Gun': {
    effects: [
      {
        img: 'Gatling Gun.png',
        description:
          'Active: Corki sprays bullets in a cone toward his facing direction for 4 seconds, dealing equal parts physical and magic damage every 0.25 seconds to all enemies hit as well as reducing their  armor and  magic resistance with each tick, lasting for 2 seconds, refreshing on subsequent ticks, and stacking up to 8 times.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Mixed Damage Per Tick:',
            raw: '7.5 / 10.625 / 13.75 / 16.875 / 20 (+ 15% bonus AD)',
            damagetype: 'None',
            values: [7.5, 10.625, 13.75, 16.875, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7.5 / 10.625 / 13.75 / 16.875 / 20',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 15% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Resistance Reduction Per Tick:',
            raw: '1 / 1.375 / 1.75 / 2.125 / 2.5',
            values: [1, 1.375, 1.75, 2.125, 2.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.375 / 1.75 / 2.125 / 2.5',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Missile Barrage': {
    effects: [
      {
        img: 'Missile Barrage.png',
        description:
          'Active: Corki fires a missile in the target direction that explodes upon the first enemy hit, dealing magic damage to enemies within the area.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 97.5 / 115 / 132.5 / 150 (+ 15 / 30 / 45 / 60 / 75% AD) (+ 12% AP)',
            damagetype: 'None',
            values: [80, 97.5, 115, 132.5, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 97.5 / 115 / 132.5 / 150',
            children: [
              {
                values: [15, 30, 45, 60, 75],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 15 / 30 / 45 / 60 / 75% AD',
              },
              {
                values: 12,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12% AP',
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
          'Corki periodically stocks a Missile Barrage charge, up to a maximum of 7. He gains maximum charges upon respawning.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Big One.png',
        description:
          'Every third missile Corki fires is a  Big One, dealing 100% increased damage as well as gaining increased range and explosion radius.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Big One Magic Damage:',
            raw: '160 / 195 / 230 / 265 / 300 (+ 30 / 60 / 90 / 120 / 150% AD) (+ 24% AP)',
            damagetype: 'None',
            values: [160, 195, 230, 265, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '160 / 195 / 230 / 265 / 300',
            children: [
              {
                values: [30, 60, 90, 120, 150],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 30 / 60 / 90 / 120 / 150% AD',
              },
              {
                values: 24,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 24% AP',
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
