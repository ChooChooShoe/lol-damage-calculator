import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Amumu';
export const skillsData = ChampionSkillsData['Amumu'];

export const Amumu = {
  'Cursed Touch': {
    effects: [
      {
        img: 'Cursed Touch.png',
        description:
          "Innate: Amumu's basic attacks and  Curse of the Sad Mummy are empowered to mark enemies with Curse for 3 seconds, refreshing on subsequent applications and  Despair's per-tick damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Cursed targets receive  10% bonus true damage from all incoming pre-mitigation magic damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bandage Toss': {
    effects: [
      {
        img: 'Bandage Toss.png',
        description:
          'Active: Amumu throws a bandage in the target direction that deals magic damage to the first enemy hit,  stunning them for 1 second and  pulling him to them, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 85% AP)',
            damagetype: 'None',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 85% AP',
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
          'Amumu periodically stocks a Bandage Toss charge, up to a maximum of 2.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Despair can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Despair: {
    effects: [
      {
        img: 'Despair.png',
        description:
          'Toggle: Amumu cries a continuous pool of tears, dealing magic damage every 0.5 seconds to nearby enemies.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage Per Tick:',
            raw: "6 / 8 / 10 / 12 / 14 (+ 1 / 1.25 / 1.5 / 1.75 / 2% (+ 0.25% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [6, 8, 10, 12, 14],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 8 / 10 / 12 / 14',
            children: [
              {
                values: [1, 1.25, 1.5, 1.75, 2],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 1 / 1.25 / 1.5 / 1.75 / 2%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 0.25,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 0.25% per 100 AP',
                  },
                ],
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Tantrum: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Amumu reduces every instance of post-mitigation physical damage taken, capped at 50% of the damage instance.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Reduction:',
            raw: '5 / 7 / 9 / 11 / 13 (+ 3% bonus armor) (+ 3% bonus magic resistance)',
            damagetype: 'Magic',
            values: [5, 7, 9, 11, 13],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 7 / 9 / 11 / 13',
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 3% bonus armor',
              },
              {
                values: 3,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 3% bonus magic resistance',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Tantrum.png',
        description:
          'Active: Amumu releases his anger, dealing magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '65 / 100 / 135 / 170 / 205 (+ 50% AP)',
            damagetype: 'None',
            values: [65, 100, 135, 170, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 100 / 135 / 170 / 205',
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
          "Tantrum's  current cooldown is reduced by 0.75 seconds whenever Amumu is hit by a basic attack.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Curse of the Sad Mummy': {
    effects: [
      {
        img: 'Curse of the Sad Mummy.png',
        description:
          'Active: Amumu entangles nearby enemies in bandages, dealing magic damage as well as  knocking down and  stunning them for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
