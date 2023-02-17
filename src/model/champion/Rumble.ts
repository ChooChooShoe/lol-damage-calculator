import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Rumble';
export const skillsData = ChampionSkillsData['Rumble'];

export const Rumble = {
  'Junkyard Titan': {
    effects: [
      {
        img: 'Junkyard Titan.png',
        description:
          "Innate: Rumble's basic ability casts generate  Heat, which refreshes on subsequent casts and decays by  10 Heat per second after not using any basic ability within 4 seconds or  The Equalizer within 2 seconds. Rumble's mech enters the Danger Zone when at or above  50 Heat, and becomes Overheated while at  100 Heat.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Junkyard Titan 2.png',
        description:
          "Danger Zone: Rumble's mech enters the Danger Zone, empowering his basic abilities.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Junkyard Titan 3.png',
        description:
          "Overheated: Rumble's mech becomes Overheated, disabling his abilities as his  Heat decays back down to 0 over 5.25 seconds. During this time, he gains  20% − 80% (based on level) bonus attack speed and empowers his basic attacks to deal 5 − 40 (based on level) (+ 25% AP) (+ 6% of the target's maximum health) bonus magic damage  on-hit. The damage based on the target's health ratio is capped at 80 against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Flamespitter: {
    effects: [
      {
        img: 'Flamespitter.png',
        description:
          'Active: Rumble generates  20 Heat to activate his flamethrower for 3 seconds, dealing magic damage every 0.25 seconds to enemies hit in a frontal cone, reduced against  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '180 / 220 / 260 / 300 / 340 (+ 110% AP)',
            damagetype: 'None',
            values: [180, 220, 260, 300, 340],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '180 / 220 / 260 / 300 / 340',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 110% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Modified Minion Damage:',
            raw: '60 / 65 / 70 / 75 / 80%',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 65 / 70 / 75 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Danger Zone Bonus: Flamespitter's damage is increased by 50%.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Enhanced Damage:',
            raw: '270 / 330 / 390 / 450 / 510 (+ 165% AP)',
            damagetype: 'None',
            values: [270, 330, 390, 450, 510],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '270 / 330 / 390 / 450 / 510',
            children: [
              {
                values: 165,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 165% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Enhanced Minion Damage:',
            raw: '162 / 214.5 / 273 / 337.5 / 408 (+ 99 / 107.25 / 115.5 / 123.75 / 132% AP)',
            damagetype: 'None',
            values: [162, 214.5, 273, 337.5, 408],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '162 / 214.5 / 273 / 337.5 / 408',
            children: [
              {
                values: [99, 107.25, 115.5, 123.75, 132],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 99 / 107.25 / 115.5 / 123.75 / 132% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Scrap Shield': {
    effects: [
      {
        img: 'Scrap Shield.png',
        description:
          'Active: Rumble generates  20 Heat to grant himself a  shield for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 45% AP)',
            damagetype: 'None',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Scrap Shield 2.png',
        description:
          'Rumble also gains  bonus movement speed for 1 to 1.32 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '10 / 15 / 20 / 25 / 30%',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Danger Zone Bonus: Scrap Shield's shield strength and bonus movement speed are increased in effectiveness by 50%.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Enhanced Shield Strength:',
            raw: '90 / 135 / 180 / 225 / 270 (+ 67.5% AP)',
            damagetype: 'None',
            values: [90, 135, 180, 225, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 135 / 180 / 225 / 270',
            children: [
              {
                values: 67.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 67.5% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Enhanced Bonus Movement Speed:',
            raw: '15 / 22.5 / 30 / 37.5 / 45%',
            values: [15, 22.5, 30, 37.5, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Electro Harpoon': {
    effects: [
      {
        img: 'Electro Harpoon.png',
        description:
          'Active: Rumble generates  10 Heat to shoot a harpoon in the target direction that deals magic damage to the first enemy hit, inflicting them with  10% magic resistance reduction for 4 seconds and  slowing them for 2 seconds. These effects stack additively with multiple harpoons, refreshing their duration and stacking up to 2 times.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 40% AP)',
            damagetype: 'None',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Rumble periodically stocks an Electro Harpoon charge, up to a maximum of 2.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Danger Zone Bonus: Electro Harpoon's effects are increased by 50%. The magic resistance reduction is increased to 15%.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Enhanced Damage:',
            raw: '90 / 127.5 / 165 / 202.5 / 240 (+ 60% AP)',
            damagetype: 'None',
            values: [90, 127.5, 165, 202.5, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 127.5 / 165 / 202.5 / 240',
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
            name: 'Enhanced Slow:',
            raw: '22.5 / 30 / 37.5 / 45 / 52.5%',
            values: [22.5, 30, 37.5, 45, 52.5],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '22.5 / 30 / 37.5 / 45 / 52.5%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Rumble casts Electro Harpoon before his mech becomes  Overheated, he may still use another charge within 3 seconds of the initial cast.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'The Equalizer': {
    effects: [
      {
        img: 'The Equalizer.png',
        description:
          'Active: Rumble deploys a barrage of rockets along the target path that land in a line over 0.75 seconds, creating a field of fire for 4.5 seconds after the last rocket lands.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies struck by the impact or within the field are marked as Burning for 1 second, which deals magic damage every 0.5 seconds,  slows by 35%, and refreshes continuously while in the area.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '70 / 87.5 / 105 / 122.5 / 140 (+ 17.5% AP)',
            damagetype: 'None',
            values: [70, 87.5, 105, 122.5, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 87.5 / 105 / 122.5 / 140',
            children: [
              {
                values: 17.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 17.5% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '140 / 175 / 210 / 245 / 280 (+ 35% AP)',
            damagetype: 'None',
            values: [140, 175, 210, 245, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '140 / 175 / 210 / 245 / 280',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
