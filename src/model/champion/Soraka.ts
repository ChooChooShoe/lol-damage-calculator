import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Soraka';
export const skillsData = ChampionSkillsData['Soraka'];

export const Soraka = {
  Salvation: {
    effects: [
      {
        img: 'Salvation.png',
        description:
          'Innate: Soraka gains  70% bonus movement speed while facing nearby allied  champions that are below 40% of their maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Starcall: {
    effects: [
      {
        img: 'Starcall.png',
        description:
          'Active: Soraka calls down a star upon the target location that grants  sight of the area before landing after 0.25 − 1 (based on target range) seconds, dealing magic damage to enemies hit and  slowing them by 30% for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '85 / 120 / 155 / 190 / 225 (+ 35% AP)',
            damagetype: 'None',
            values: [85, 120, 155, 190, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '85 / 120 / 155 / 190 / 225',
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
      {
        img: '',
        description:
          'If this hits at least one enemy  champion, the star dust returns to Soraka to grant her Rejuvenation for 2.5 seconds. While Soraka has Rejuvenation,  Astral Infusion will also grant the effects of Rejuvenation to the target ally for the same duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Rejuvenation: The target  heals every 0.5 seconds and gains  bonus movement speed that decays over the duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Heal:',
            raw: '50 / 65 / 80 / 95 / 110 (+ 30% AP)',
            damagetype: 'None',
            values: [50, 65, 80, 95, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 65 / 80 / 95 / 110',
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
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Astral Infusion': {
    effects: [
      {
        img: 'Astral Infusion.png',
        description: 'Active: Soraka  heals the target allied champion.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '90 / 110 / 130 / 150 / 170 (+ 50% AP)',
            damagetype: 'None',
            values: [90, 110, 130, 150, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 110 / 130 / 150 / 170',
            children: [
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
          'If cast while under  Rejuvenation, the health cost will be reduced by a percentage.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Health Cost Reduction:',
            raw: '80 / 85 / 90 / 95 / 100%',
            values: [80, 85, 90, 95, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 85 / 90 / 95 / 100%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Astral Infusion cannot be cast if Soraka is  below 5% of her maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Equinox: {
    effects: [
      {
        img: 'Equinox.png',
        description:
          'Active: Soraka creates a celestial zone at the target location that deals magic damage to enemy champions within at the time of cast. The zone then persists for 1.5 seconds and  silences enemies within.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 40% AP)',
            damagetype: 'None',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
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
          'Afterwards, the zone erupts to deal the same damage to enemy champions within and  root them for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '140 / 190 / 240 / 290 / 340 (+ 80% AP)',
            damagetype: 'None',
            values: [140, 190, 240, 290, 340],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '140 / 190 / 240 / 290 / 340',
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
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Wish: {
    effects: [
      {
        img: 'Wish.png',
        description:
          'Active: Soraka calls upon the stars,  healing herself and all allied champions, increased by 50% on targets below 40% of their maximum health.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 50% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
