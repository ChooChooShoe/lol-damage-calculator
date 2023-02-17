import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Hecarim';
export const skillsData = ChampionSkillsData['Hecarim'];

export const Hecarim = {
  Warpath: {
    effects: [
      {
        img: 'Warpath.png',
        description:
          'Innate: Hecarim gains  bonus attack damage equal to 12% − 24% (based on level) of his  bonus movement speed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Rampage: {
    effects: [
      {
        img: 'Rampage.png',
        description:
          'Active: Hecarim cleaves his glaive around himself, dealing physical damage to nearby enemies, reduced to 60% against  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 90% bonus AD)',
            damagetype: 'None',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90% bonus AD',
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
          "If this damages an enemy, Hecarim gains a stack of Rampage for 8 seconds,  refreshing on subsequent damage and stacking up to 3 times. Each stack increases Rampage's damage by 3% (+ 4% per 100 bonus AD) and reduces its  base cooldown by 0.75 seconds, up to a 9% (+ 12% per 100 bonus AD) damage increase and a 2.25-second reduction of the base cooldown at maximum stacks. Stacks expire by one every 1 second when the duration ends.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spirit of Dread': {
    effects: [
      {
        img: 'Spirit of Dread.png',
        description:
          'Active: Hecarim surrounds himself with the Spirit of Dread for 4 seconds, dealing magic damage every second to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 20% AP)',
            damagetype: 'None',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
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
          'While active, Hecarim gains  bonus armor and  bonus magic resistance and is  healed for 25% (+ 2% of 100 bonus AD) of the post-mitigation damage dealt to enemies within the area, halved to 12.5% (+ 1% of 100 bonus AD) for damage dealt by allies. The healing is capped against  minions and  monsters.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '15 / 20 / 25 / 30 / 35',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
          },
          {
            effectType: 'Unique',
            name: 'Capped Healing:',
            raw: '120 / 150 / 180 / 210 / 240',
            values: [120, 150, 180, 210, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 150 / 180 / 210 / 240',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Devastating Charge': {
    effects: [
      {
        img: 'Devastating Charge.png',
        description:
          'Active: Hecarim becomes  ghosted and gains  25% − 65% (based on time active) bonus total movement speed for 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "During this time, Hecarim empowers his next basic attack to gain 50 − 250 (based on distance traveled)  bonus range and cause him to  dash in the target's direction,  revealing them for 1 second. If the target remains nearby during the dash, the  ghosting and bonus movement speed ends prematurely and Hecarim  knocks them back 150 − 350 (based on distance traveled) units, though not through terrain,  stuns them for 0.25 seconds, and deals them modified physical damage, increased by 0% − 100% (based on distance traveled).",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
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
          'Devastating Charge can  critically strike for (75% +  35%) AD bonus physical damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Devastating Charge  resets Hecarim's basic attack timer. Hecarim can cast any of his abilities during the dash. Devastating Charge's duration is paused during  Onslaught of Shadows.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Onslaught of Shadows': {
    effects: [
      {
        img: 'Onslaught of Shadows.png',
        description:
          'Active: Hecarim  dashes with  displacement immunity to the target location and summons 5 spectral riders in an arrow formation that charge alongside him in the target direction, dealing magic damage to all enemies in their path and  revealing them for 2.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 100% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
          'Upon arrival, he  fears nearby enemies for 0.75 − 1.5 (based on distance traveled) seconds and  slows them, ramping to 99% over the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The wave of spectral riders travels independently of Hecarim and will always charge at the same distance. The slow's strength cannot be reduced and is increased based on how far away the affected units are from Hecarim. Onslaught of Shadows will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
