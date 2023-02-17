import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Irelia';
export const skillsData = ChampionSkillsData['Irelia'];

export const Irelia = {
  'Ionian Fervor': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Irelia generates a stack of Ionian Fervor for each enemy champion hit by her abilities, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy  champions and large  monsters, and stacking up to 4 times.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Ionian Fervor.png',
        description:
          "Ionian Fervor: For each stack, Irelia gains 7.5% − 20% (based on level)  bonus attack speed, up to a maximum of 30% − 80% (based on level). At maximum stacks, Irelia's basic attacks are empowered to deal 10 − 61 (based on level) (+ 20% bonus AD) bonus magic damage  on-hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Bladesurge 2.png',
        description:
          "Innate - Unsteady: Enemy  champions and large  monsters hit by  Flawless Duet and  Vanguard's Edge's initial barrage are marked as Unsteady for 5 seconds. The mark can be consumed by  Bladesurge.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Bladesurge: {
    effects: [
      {
        img: 'Bladesurge.png',
        description:
          "Active: Irelia  dashes 100 units through the target enemy's location, and upon collision or dash completion, she deals physical damage, applies  on-hit effects, and  heals herself. Bladesurge deals 55 − 259 (based on level) bonus physical damage to  minions.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '5 / 25 / 45 / 65 / 85 (+ 60% AD)',
            damagetype: 'None',
            values: [5, 25, 45, 65, 85],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 25 / 45 / 65 / 85',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 60% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '9 / 10 / 11 / 12 / 13% AD',
            damagetype: 'None',
            values: [9, 10, 11, 12, 13],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '9 / 10 / 11 / 12 / 13% AD',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Bladesurge's  current cooldown is reduced to 0.2 seconds upon collision of targets marked as  Unsteady, and is reset if the target dies to or during Bladesurge's dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Flawless Duet can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Defiant Dance': {
    effects: [
      {
        img: 'Defiant Dance.png',
        description:
          "Active: Irelia  charges for up to 1.5 seconds, during which she increases Defiant Dance's damage over the first 0.75 seconds of the channel and reduces incoming physical damage by 40% − 70% (based on level) (+ 7% per 100 AP) and incoming magic damage by 20% − 35% (based on level) (+ 3.5% per 100 AP).",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Defiant Dance can be recast within the duration, and does so automatically afterwards. Defiant Dance's charge cannot be  interrupted by  crowd control.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Irelia swipes her blades in the target direction, dealing physical damage to enemies around her and within a line, increased by 0% − 200% (based on channel time). She also retains the damage reduction for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '10 / 25 / 40 / 55 / 70 (+ 40% AD) (+ 40% AP)',
            damagetype: 'None',
            values: [10, 25, 40, 55, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 25 / 40 / 55 / 70',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
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
          "Defiant Dance's recast can be used while affected by  cast-inhibiting crowd control. If  Ionian Fervor would expire during the charge, it will instead refresh every 0.25 seconds for the remaining charge and be retained for 0.5 seconds after the recast is initiated.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Flawless Duet': {
    effects: [
      {
        img: 'Flawless Duet.png',
        description:
          'Active: Irelia sends a blade to the target location for 3.5 seconds. Flawless Duet can be recast after 0.15 seconds while the blade is active, and does so automatically at the end of its duration, though not if she is unable to cast abilities.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Irelia Flawless Duet 2.png',
        description:
          'Recast: Irelia sends a second blade to the target location, or to her current position if Flawless Duet was recast automatically.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Once both blades have been placed, they fly toward each other regardless of distance and converge over 0.25 seconds, afterwards dealing magic damage to all enemies within a line between them and  stunning them for 0.75 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
            damagetype: 'None',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
          "Flawless Duet's recast can be used during  Bladesurge and the cast time of  Vanguard's Edge. Each of the blades' travel times are 0.264 seconds. Flawless Duet will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Vanguard's Edge": {
    effects: [
      {
        img: 'false',
        description:
          "Passive:  Bladesurge's  total cooldown is reduced by a flat amount.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Flat Cooldown Reduction:',
            raw: '0.5 / 1 / 1.5 / 2 / 2.5',
            values: [0.5, 1, 1.5, 2, 2.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.5 / 1 / 1.5 / 2 / 2.5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: "Vanguard's Edge.png",
        description:
          'Active: Irelia launches a barrage of blades in the target direction, expanding outward upon hitting an enemy champion, dealing magic damage to all enemies hit and  revealing them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '125 / 187.5 / 250 / 312.5 / 375 (+ 70% AP)',
            damagetype: 'None',
            values: [125, 187.5, 250, 312.5, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 187.5 / 250 / 312.5 / 375',
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
          'After expanding, the blades drop on the ground, knocking all enemy units away from them, though not rendering them  airborne, and forming a spade-shaped perimeter around the enemy champion hit for 2.5 seconds that grants  sight of its surroundings. Enemies that pass through the blades for the first time are dealt the same magic damage and are  slowed by 90% for 1.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The perimeter will point at the same angle Irelia casted it from, but based on the target's center.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
