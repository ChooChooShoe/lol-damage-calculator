import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Yasuo';
export const skillsData = ChampionSkillsData['Yasuo'];

export const Yasuo = {
  'Way of the Wanderer': {
    effects: [
      {
        img: 'Way of the Wanderer.png',
        description:
          "Innate - Intent: Yasuo's  total critical strike chance is multiplied by 2.5 from all other sources, but his  critical strikes deal only「 (57.5% +  31.5%) AD bonus physical damage. 」「 90% of the normal  critical strike damage. 」Additionally,「 every 1% critical strike chance in excess of 100% is converted into 0.4 bonus AD. 」「 every 50% critical strike chance in excess of 100% is converted into 20 bonus AD. 」",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Innate - Resolve: Yasuo generates  Flow for every 59 / 52.5 / 46 (based on level) units he travels by any means. At「 100 stacks 」「 5900 / 5250 / 4600 (based on level) units traveled 」and upon taking damage from an enemy  champion or  monster, Yasuo consumes all  Flow to grant himself a  shield for 100 − 475 (based on level) that lasts up to 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Steel Tempest': {
    effects: [
      {
        img: 'Steel Tempest.png',
        description:
          "Active: Yasuo thrusts his sword in a line in the target direction that deals physical damage to enemies hit and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit. Steel Tempest's damage can  critically strike for「 (47% +  29.4%) AD bonus physical damage. 」「 84% of the  critical damage champions usually have. 」",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 105% AD)',
            damagetype: 'None',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 105,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 105% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Steel Tempest 2.png',
        description:
          'If this hits at least one enemy, Yasuo generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next Steel Tempest consumes them all to become empowered with a new effect.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Steel Tempest 3.png',
        description:
          'Gathering Storm Bonus: Yasuo unleashes a whirlwind in the target direction that deals the same damage to enemies hit and  knocks them up for 0.75 seconds, or 0.9 seconds in combination with  Sweeping Blade.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Steel Tempest's thrust is  interrupted if Yasuo is affected by  disarming crowd control during the cast time, but its  cooldown is reset to 0.1 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Steel Tempest is cast during  Sweeping Blade, it will instead affect enemies around Yasuo at the end of the dash, or doing so immediately at his landing location after  blinking while ending the dash prematurely.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wind Wall': {
    effects: [
      {
        img: 'Wind Wall.png',
        description:
          'Active: Yasuo raises a wall of wind that travels in the target direction over 0.25 seconds. It then drifts another 50 units over 3.75 seconds, blocking all hostile non- turret  projectiles that hit it and granting  sight of its surroundings.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Wall Width:',
            raw: '320 / 390 / 460 / 530 / 600',
            values: [320, 390, 460, 530, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '320 / 390 / 460 / 530 / 600',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Sweeping Blade': {
    effects: [
      {
        img: 'Sweeping Blade.png',
        description:
          'Active: Yasuo  dashes a fixed distance in the direction of the target enemy. Upon impact, he deals them magic damage, becomes  ghosted for 2 seconds, and generates a stack of Ride the Wind for 5 seconds, which refreshes on subsequent hits and stacks up to 2 times.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 70 / 80 / 90 / 100 (+ 20% bonus AD) (+ 60% AP)',
            damagetype: 'None',
            values: [60, 70, 80, 90, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 70 / 80 / 90 / 100',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% bonus AD',
              },
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
          "Ride the Wind: For each stack, Sweeping Blade's base damage is increased by 25%, up to a 50% increase at maximum stacks.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Increased Base Damage:',
            raw: '15 / 17.5 / 20 / 22.5 / 25',
            values: [15, 17.5, 20, 22.5, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17.5 / 20 / 22.5 / 25',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Sweeping Blade can be cast on the same target only once every few seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Yasuo will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during Sweeping Blade.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Last Breath can be cast during the dash. If  Steel Tempest has been buffered,  Wind Wall may also be cast during it. (bug)',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Last Breath': {
    effects: [
      {
        img: 'Last Breath.png',
        description:
          'Active: Yasuo  blinks to the other side of a  visible  airborne enemy champion nearest to the cursor, instantly generating maximum  Flow while resetting  Gathering Storm stacks.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Upon arrival, he  knocks up all nearby  airborne enemy champions for 1 second,  revealing them and slashing them with his sword over the duration, dealing physical damage thereafter. Surrounding enemy champions that become  airborne during this time will also be affected by Last Breath through the remaining duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '200 / 350 / 500 (+ 150% bonus AD)',
            damagetype: 'None',
            values: [200, 350, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 350 / 500',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 150% bonus AD',
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
          "For the next 15 seconds, Yasuo's  critical strikes gain  50% bonus-armor penetration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'A nearby  airborne enemy champion is required to cast this ability. If Yasuo would blink inside the  attack range of an enemy  turret (excluding the  Nexus Obelisk), Last Breath will instead attempt to position him outside of it.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
