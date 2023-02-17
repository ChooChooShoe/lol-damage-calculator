import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = "Kog'Maw";
export const skillsData = ChampionSkillsData["Kog'Maw"];

export const KogMaw = {
  'Icathian Surprise': {
    effects: [
      {
        img: 'Icathian Surprise.png',
        description:
          "Innate: Upon taking  fatal damage, Kog'Maw enters a  zombie state for 4 seconds, gaining up to  40% bonus movement speed over the duration. At the end of the duration, he explodes to deal  125 − 550 (based on level) true damage to nearby enemies.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "While under this state, Kog'Maw becomes  invulnerable,  untargetable, and  immune to crowd control, but is also rendered unable to declare basic attacks, cast abilities, use summoner spells, and activate items.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Caustic Spittle': {
    effects: [
      {
        img: 'false',
        description: "Passive: Kog'Maw gains  bonus attack speed.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
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
        img: 'Caustic Spittle.png',
        description:
          "Active: Kog'Maw ejects a wad of spittle in the target direction that deals magic damage to the first enemy hit and reduces their  armor and  magic resistance for 4 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '90 / 140 / 190 / 240 / 290 (+ 70% AP)',
            damagetype: 'None',
            values: [90, 140, 190, 240, 290],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 140 / 190 / 240 / 290',
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
          {
            effectType: 'Unique',
            name: 'Resistances Reduction:',
            raw: '23 / 25 / 27 / 29 / 31%',
            values: [23, 25, 27, 29, 31],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '23 / 25 / 27 / 29 / 31%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bio-Arcane Barrage': {
    effects: [
      {
        img: 'Bio-Arcane Barrage.png',
        description:
          "Active: Kog'Maw empowers his basic attacks for the next 8 seconds to gain  bonus attack range and deal bonus magic damage  on-hit, capped at 100 against  minions and  monsters.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Range:',
            raw: '130 / 150 / 170 / 190 / 210',
            values: [130, 150, 170, 190, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '130 / 150 / 170 / 190 / 210',
          },
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "3.5 / 4.25 / 5 / 5.75 / 6.5% (+ 1% per 100 AP) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [3.5, 4.25, 5, 5.75, 6.5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '3.5 / 4.25 / 5 / 5.75 / 6.5%',
            post: "of target's maximum health",
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Void Ooze': {
    effects: [
      {
        img: 'Void Ooze.png',
        description:
          "Active: Kog'Maw spews a gob of ooze in the target direction that deals magic damage to enemies hit.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 120 / 165 / 210 / 255 (+ 70% AP)',
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
          'A field of ooze is created in its wake for 4 seconds,  slowing enemies every 0.25 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 28 / 36 / 44 / 52%',
            values: [20, 28, 36, 44, 52],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 28 / 36 / 44 / 52%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Living Artillery': {
    effects: [
      {
        img: 'Living Artillery.png',
        description:
          "Active: Kog'Maw spits a globule of acid into the air that drops to the target location after 0.6 seconds, granting  sight of the area before dealing magic damage to enemies hit and  revealing them for 2 seconds. Living Artillery's damage is increased by 0% − 50% (based on target's missing health), or instead by  100% if the target is below 40% maximum health.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '100 / 120 / 140 / 160 / 180 (+ 65% bonus AD) (+ 35% AP)',
            damagetype: 'None',
            values: [100, 120, 140, 160, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 120 / 140 / 160 / 180',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 65% bonus AD',
              },
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
      {
        img: '',
        description:
          "Kog'Maw then gains a stack of Living Artillery for 8 seconds, refreshing on subsequent casts and stacking up to 9 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Living Artillery: For each stack, Living Artillery's  mana cost is increased by 40.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
