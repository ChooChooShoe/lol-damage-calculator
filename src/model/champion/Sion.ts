import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Sion';
export const skillsData = ChampionSkillsData['Sion'];

export const Sion = {
  'Glory in Death': {
    effects: [
      {
        img: 'Glory in Death.png',
        description:
          "Innate: Upon taking  fatal damage, Sion enters  stasis for 1.5 seconds to  reanimate into a frenzy, restoring 100% of his maximum health but losing 2 − 19 (based on level) health every 0.264 seconds, increasing by「 70% of the base value 」「 1.4 − 13.3 (based on level) 」per subsequent tick. Sion's  health regeneration and any  healing (except life steal) he receives during this time is 0% effective.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Sion can only move and use his basic attacks and item actives, and empowers himself with the following effects:\n 1.75 attack speed minimum and maximum\n 100% life steal\nDeals bonus physical damage  on-hit equal to 10% of the target's maximum health, capped at 75 against non-champions\n Ghosting\nOne cast of  Death Surge, which replaces all of his abilities",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Sion's damage to structures is reduced to 40% under the effects of Glory in Death.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Death Surge': {
    effects: [
      {
        img: 'Death Surge.png',
        description:
          "Active: Sion gains  67% bonus movement speed(bug) that decays over 2.376 seconds.\nOnce at least one ability has been learned, Death Surge can be cast using any ability key, even for the abilities that haven't been learned yet.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Decimating Smash': {
    effects: [
      {
        img: 'Decimating Smash.png',
        description:
          "Active: Sion  charges for up to 2 seconds to increase Decimating Smash's  range over an area,  knock up duration,  stun duration, and damage every 0.25 seconds, which has up to a maximum bonus for the base damage and up to a 200% bonus for the scaling damage.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum Base Damage Increase:',
            raw: '125 / 158.33 / 175 / 185 / 191.67%',
            values: [125, 158.33, 175, 185, 191.67],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 158.33 / 175 / 185 / 191.67%',
          },
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '40 / 60 / 80 / 100 / 120 (+ 45 / 52.5 / 60 / 67.5 / 75% AD)',
            damagetype: 'None',
            values: [40, 60, 80, 100, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 60 / 80 / 100 / 120',
            children: [
              {
                values: [45, 52.5, 60, 67.5, 75],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 45 / 52.5 / 60 / 67.5 / 75% AD',
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
          'Decimating Smash can be recast within the duration, and does so automatically afterwards. If the charge is  interrupted, Decimating Smash is placed on a  2-second cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Sion flails his axe in the target direction, dealing physical damage to enemies hit and  slowing them by 50% for 0.25 seconds. Decimating Smash deals 150% damage against  monsters and 60% damage against  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Monster Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 67.5 / 78.75 / 90 / 101.25 / 112.5% AD)',
            damagetype: 'None',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
            children: [
              {
                values: [67.5, 78.75, 90, 101.25, 112.5],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 67.5 / 78.75 / 90 / 101.25 / 112.5% AD',
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
          'If Decimating Smash was charged for at least 1 second, Sion instead slams his axe down in the target direction, dealing physical damage to enemies hit,  knocking them up for 0.5 − 1 (based on channel time) seconds, and  stunning them for 1.25 − 2.25 (based on channel time) seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Soul Furnace': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Sion gains  4 bonus health whenever he kills an enemy, increased to 15 for large enemies and  takedowns against enemy  champions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Soul Furnace.png',
        description:
          'Active: Sion grants himself a  shield that lasts for up to 6 seconds. Soul Furnace can be recast after 3 seconds while the shield holds, and does so automatically at the end of the duration.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 40% AP) (+ 8 / 9 / 10 / 11 / 12% maximum health)',
            healType: 'BonusHealth',
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
              {
                values: [8, 9, 10, 11, 12],
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 8 / 9 / 10 / 11 / 12% maximum health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Soul Furnace 2.png',
        description:
          'Recast: Sion consumes the shield to deal magic damage to nearby enemies, capped at 400 against  minions and  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "40 / 65 / 90 / 115 / 140 (+ 40% AP) (+ 10 / 11 / 12 / 13 / 14% of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: [10, 11, 12, 13, 14],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 10 / 11 / 12 / 13 / 14% of target's maximum health",
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
          "Both of Soul Furnace's casts can be activated during Sion's other abilities.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Roar of the Slayer': {
    effects: [
      {
        img: 'Roar of the Slayer.png',
        description:
          'Active: Sion bellows a shockwave in the target direction that deals magic damage to the first enemy hit,  slows them for 2.5 seconds and inflicts them with  20% armor reduction for 4 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '65 / 100 / 135 / 170 / 205 (+ 55% AP)',
            damagetype: 'None',
            values: [65, 100, 135, 170, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 100 / 135 / 170 / 205',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If the target is a  minion or non-epic  monster, they are also  stunned for 0.75 seconds and  knocked back for up to 1350 units further, though not through terrain, applying Roar of the Slayer's effects to enemies they pass through as well as briefly granting  sight of the area around their trajectory.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Unstoppable Onslaught': {
    effects: [
      {
        img: 'Unstoppable Onslaught.png',
        description:
          'Active: Sion becomes  immune to crowd control and  ghosted and, after a brief delay,  charges forward in the direction of the cursor for up to 8 seconds, during which he is able to steer at a slow turn rate while automatically navigating his movement. Unstoppable Onslaught can be recast after 0.4 seconds during the channel.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The charge ramps up Sion's movement speed at the time of cast by 40 movement speed every 0.1 seconds, up to 950 total movement speed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Unstoppable Onslaught 2.png',
        description:
          "At the end of the charge's duration, Sion  leaps forward 300 units, landing after 0.55 seconds and slamming the ground beneath him. Sion will stop upon colliding with an enemy champion or terrain during the charge, ending Unstoppable Onslaught with a slam. Crashing into terrain  stuns Sion for 0.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Enemies hit by Sion's charge are dealt physical damage. The base damage increases by 0% − 166.67% (based on channel time) and the scaling increases by 0% − 100% (based on channel time).",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '150 / 300 / 450 (+ 40% bonus AD)',
            damagetype: 'None',
            values: [150, 300, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 300 / 450',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40% bonus AD',
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
          'Enemies, including  turrets, hit by the slam are dealt the same damage and are  slowed for 3 seconds. Enemies in a smaller radius are also  pulled towards Sion over 0.5 seconds and become  stunned after a brief delay for 0.25 − 1.75 (based on channel time) seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 45 / 50%',
            values: [40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
