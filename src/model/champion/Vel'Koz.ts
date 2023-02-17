import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = "Vel'Koz";
export const skillsData = ChampionSkillsData["Vel'Koz"];

export const VelKoz = {
  'Organic Deconstruction': {
    effects: [
      {
        img: 'Organic Deconstruction.png',
        description:
          "Innate: Vel'Koz's abilities apply a stack of Deconstruction to enemies hit for 7 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The third stack consumes them all to deal  33 − 169 (based on level) (+ 50% AP) bonus true damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Plasma Fission': {
    effects: [
      {
        img: 'Plasma Fission.png',
        description:
          "Active: Vel'Koz fires a plasma bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 70% decaying over a duration.\nPlasma Fission can be recast after 0.25 seconds while the bolt is in flight, and does so automatically upon hitting an enemy or maximum range.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 90% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow Duration:',
            raw: '1 / 1.4 / 1.8 / 2.2 / 2.6',
            values: [1, 1.4, 1.8, 2.2, 2.6],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.4 / 1.8 / 2.2 / 2.6',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Plasma Fission 2.png',
        description:
          "Recast: Vel'Koz splits the bolt in two over 0.25 seconds, each part firing perpendicularly in opposite directions and applying the same effects to enemies hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Whenever Plasma Fission kills an enemy, Vel'Koz restores  mana.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Mana Restored per Kill:',
            raw: '20 / 22.5 / 25 / 27.5 / 30',
            values: [20, 22.5, 25, 27.5, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Void Rift': {
    effects: [
      {
        img: 'Void Rift.png',
        description:
          "Active: Vel'Koz cracks a rift in the target direction that opens after a 0.25-second delay, cascading through the area over 0.65 seconds to deal magic damage to enemies within.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 50 / 70 / 90 / 110 (+ 20% AP)',
            damagetype: 'None',
            values: [30, 50, 70, 90, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70 / 90 / 110',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
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
          'After 0.75 seconds, the rift violently collapses, dealing magic damage to enemies within and granting  sight of the surrounding area for 0.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '45 / 75 / 105 / 135 / 165 (+ 25% AP)',
            damagetype: 'None',
            values: [45, 75, 105, 135, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 75 / 105 / 135 / 165',
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
          "Vel'Koz periodically stocks a Void Rift charge, up to a maximum of 2.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tectonic Disruption': {
    effects: [
      {
        img: 'Tectonic Disruption.png',
        description:
          "Active: Vel'Koz hurls a disruptive anomaly that lands to the target location after 0.75 seconds, dealing magic damage to enemies hit and  knocking them up and  stunning them for 0.75 seconds, as well as granting  sight of the area briefly.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 30% AP)',
            damagetype: 'None',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
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
        img: '',
        description:
          "If Tectonic Disruption is cast in close proximity of Vel'Koz, the anomaly will also slightly  knock back enemies hit in the direction of the cast.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Life Form Disintegration Ray': {
    effects: [
      {
        img: 'Researched.png',
        description:
          'Passive - Researched: Applying 3  Deconstruction stacks to an enemy  champion marks them as Researched for 7 seconds, refreshing on basic attacks and ability hits against them.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Lifeform Disintegration Ray.png',
        description:
          "Active: After a 0.2-second delay, Vel'Koz  channels for up to 2.6 seconds to project an energy beam, during which he can steer the beam in the target direction. Life Form Disintegration Ray can be recast after 1 second during the channel, and does so automatically after the duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The beam deals magic damage to enemies hit every 0.2 seconds, and  slows them by 20%, lingering for 1 second.  Deconstruction is applied every 0.7 seconds to enemies hit.  Researched enemies take true damage instead.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Damage Per Tick:',
            raw: '34.62 / 41.35 / 48.08 / 54.81 / 61.54 (+ 9.62% AP)',
            damagetype: 'None',
            values: [34.62, 41.35, 48.08, 54.81, 61.54],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '34.62 / 41.35 / 48.08 / 54.81 / 61.54',
            children: [
              {
                values: 9.62,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 9.62% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Recast: Vel'Koz ends Life Form Disintegration Ray.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
