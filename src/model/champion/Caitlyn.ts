import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Caitlyn';
export const skillsData = ChampionSkillsData['Caitlyn'];

export const Caitlyn = {
  Headshot: {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Caitlyn's basic attacks generate a stack of Count on-attack, doubled if she is within  brush. At 6 stacks, or 5 while in brush, her next basic attack consumes all stacks to become a Headshot.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Headshot.png',
        description:
          "Headshot: Caitlyn's basic attack is empowered to have an  uncancellable windup and deal 60 / 90 / 120% (based on level) (+ (131.25% +  26.25%) critical strike chance) AD bonus physical damage, increased to 110 / 115 / 120% (based on level) (+ (131.25% +  26.25%) critical strike chance AD against non-champions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Caitlyn may fire more than one Headshot until it hits a target, which consumes all stacks.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Headshot 2.png',
        description:
          'Enemies that step over a  Yordle Snap Trap or are hit by  90 Caliber Net can grant an additional Headshot against them at  1300 range within 1.8 seconds, without consuming stacks. Each method grants only one Headshot at a time.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Piltover Peacemaker': {
    effects: [
      {
        img: 'Piltover Peacemaker.png',
        description:
          'Active: Caitlyn fires a piercing shot in the target direction that deals physical damage to the first enemy it passes through, after which it expands in width but deals only 50% damage to enemies it hits thereafter.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 90 / 130 / 170 / 210 (+ 125 / 145 / 165 / 185 / 205% AD)',
            damagetype: 'None',
            values: [50, 90, 130, 170, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 90 / 130 / 170 / 210',
            children: [
              {
                values: [125, 145, 165, 185, 205],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 125 / 145 / 165 / 185 / 205% AD',
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
          'Enemies  revealed by  Yordle Snap Trap always take  full damage from Piltover Peacemaker.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Yordle Snap Trap': {
    effects: [
      {
        img: 'Yordle Snap Trap.png',
        description:
          'Active: Caitlyn sets a visible trap at the target location that is  untargetable and arms after 1 second, lasting for a duration. The trap grants  sight of the area for 1 second after being placed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Trap Duration:',
            raw: '30 / 35 / 40 / 45 / 50',
            values: [30, 35, 40, 45, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Caitlyn periodically stocks a Yordle Snap Trap charge, up to a maximum amount. Deploying traps beyond the maximum destroys the oldest one.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum Traps:',
            raw: '3 / 3 / 4 / 4 / 5',
            values: [3, 3, 4, 4, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3 / 4 / 4 / 5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The next enemy champion that springs the trap is  rooted for 1.5 seconds and  revealed for 3 seconds, as well as takes additional damage from  Headshot. Trapped targets become immune to further Yordle Snap Traps for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Headshot Damage Increase:',
            raw: '40 / 85 / 130 / 175 / 220 (+ 40 / 50 / 60 / 70 / 80% bonus AD)',
            damagetype: 'None',
            values: [40, 85, 130, 175, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 85 / 130 / 175 / 220',
            children: [
              {
                values: [40, 50, 60, 70, 80],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40 / 50 / 60 / 70 / 80% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  '90 Caliber Net': {
    effects: [
      {
        img: '90 Caliber Net.png',
        description:
          'Active: Caitlyn fires a net in the target direction and  recoils 390 units in the opposite direction. The net deals magic damage to the first enemy hit and  slows them by 50% for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 130 / 180 / 230 / 280 (+ 80% AP)',
            damagetype: 'None',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
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
          'Caitlyn will not dash backwards if she is  immobilized or  grounded during the cast time. She can cast any of her abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ace in the Hole': {
    effects: [
      {
        img: 'Ace in the Hole.png',
        description:
          'Active: Caitlyn locks onto the target enemy champion and  channels for 1 second,  revealing them as well as  revealing herself.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Ace in the Hole is placed on a 5-second  cooldown if canceled.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Once Caitlyn completes the channel, she fires a homing bullet toward the target that deals physical damage to the first enemy champion it hits, increased by 0% − 25% (based on critical strike chance).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical damage:',
            raw: '300 / 412.5 / 525 / 637.5 / 750 (+ 200% bonus AD)',
            damagetype: 'None',
            values: [300, 412.5, 525, 637.5, 750],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 412.5 / 525 / 637.5 / 750',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 200% bonus AD',
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
