import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Viego';
export const skillsData = ChampionSkillsData['Viego'];

export const Viego = {
  "Sovereign's Domination": {
    effects: [
      {
        img: "Sovereign's Domination 2.png",
        description:
          "Innate: Whenever Viego scores an enemy champion  takedown while alive and within 3 seconds of damaging them, a Mist Wraith spawns from that champion's corpse for 8 seconds. Viego can basic attack a Mist Wraith to consume it: causing him to  blink to its location after winding up for 1 second, during which he is  untargetable (except to  turrets) and  unable to act. He then gains Possession and  heals himself for 2% (+ 2.5% per 100 bonus AD) (+ 2% per 100 AP) (+ 5% per 100% bonus attack speed) of the target's maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Sovereign's Domination.png",
        description:
          "Possession: For 10 seconds, Viego assumes the enemy champion's form and gains their basic attacks, basic abilities, items, and base stats (based on Viego's level). He also gains a free cast of  Heartbreaker, which is initially placed on a  1.5-second cooldown, and  10% bonus movement speed while facing enemy champions within 2500 units.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Viego cannot use item actives, consumable items, nor the shop during Possession. Casting  Heartbreaker or attacking a Mist Wraith ends Possession immediately.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Viego will preserve his current health percentage between transformations.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blade of the Ruined King': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Viego's basic attacks are empowered to deal bonus physical damage  on-hit, which has a minimum threshold and is capped at 80 against  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "2 / 3 / 4 / 5 / 6% of target's current health",
            healType: 'OutgoingHeals',
            values: [2, 3, 4, 5, 6],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: "2 / 3 / 4 / 5 / 6% of target's current health",
          },
          {
            effectType: 'Unique',
            name: 'Minimum Bonus Damage:',
            raw: '10 / 15 / 20 / 25 / 30',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Additionally, his damaging abilities apply a mark to enemies hit for 4 seconds. Viego's next basic attack against a marked target is empowered to consume the mark  on-hit to strike a second time, dealing 20% AD (+ 15% AP) physical damage and  healing him for 135% of the post-mitigation damage dealt, increased to 145% against monsters and reduced to 10% against  minions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The second strike can  critically strike for 35% (+  7%) AD (+ 26.25% (+ 5.25%) AP) physical damage and applies  on-hit effects at 100% effectiveness.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Blade of the Ruined King.png',
        description:
          'Active: Viego stabs in a line in the target direction that deals physical damage to enemies hit, increased by 0% − 100% (based on critical strike chance), and 20 bonus physical damage against monsters.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '15 / 30 / 45 / 60 / 75 (+ 70% AD) × (1 + (100% +  0%) critical strike chance)',
            damagetype: 'None',
            values: [15, 30, 45, 60, 75],
            user: 'none',
            units: '',
            unitsText: '×',
            pre: '15 / 30 / 45 / 60 / 75',
            post: '×',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 70% AD',
              },
              {
                values: 1,
                user: 'player',
                units: 'total_critchance',
                unitsText: 'critical strike chance',
                pre: '1 +',
                post: 'critical strike chance',
                children: [
                  {
                    values: 100,
                    valuesIsPercent: true,
                    user: 'none',
                    units: '',
                    unitsText: '+  0',
                    pre: '100% +  0%',
                  },
                ],
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
          "Blade of the Ruined King's passive remains under  Possession, and while transformed, the second strike is instead converted to bonus damage on-hit which no longer applies on-hit effects but can still  critically strike (based on possessed stats).",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spectral Maw': {
    effects: [
      {
        img: 'Spectral Maw.png',
        description:
          "Active: Viego  charges while being  slowed by 10% for up to 3 seconds to increase Spectral Maw's missile range and  stun duration over the first second of the channel.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Spectral Maw can be recast within the duration. If the charge completes without reactivation, Spectral Maw is cancelled and placed on  full cooldown. If the charge is  interrupted, it will be placed on a 3-second cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Viego hurls a blast of mist in the target direction and  dashes a fixed distance in the same direction, though not through terrain. The mist deals magic damage to the first enemy hit and  stuns them for 0.25 − 1.25 (based on channel time) seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 100% AP)',
            damagetype: 'None',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
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
          "Spectral Maw  resets Viego's basic attack timer. Viego can cast any of his abilities during the dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Harrowed Path': {
    effects: [
      {
        img: 'Harrowed Path.png',
        description:
          'Active: Viego sends a spectre in the target direction that creates a trail of mist in its wake which lasts 8 seconds. If it hits terrain, the mist will spread further around either side.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Harrowed Path 2.png',
        description:
          'While inside the mist, Viego gains  bonus attack speed. If he does not attack or cast abilities, he also gains  bonus movement speed and  camouflage.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '25 / 27.5 / 30 / 32.5 / 35% (+ 4% per 100 AP)',
            damagetype: 'None',
            values: [25, 27.5, 30, 32.5, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 27.5 / 30 / 32.5 / 35%',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4% per 100 AP',
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
          'Declaring a basic attack or casting an ability will break the camouflage and remove the bonus movement speed, preventing Viego from gaining them again for 1 second, reduced to 0.6 seconds if he recasted  Spectral Maw and increased to 2 seconds if he attacked a  monster. This duration refreshes on subsequent attacks and ability casts.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Harrowed Path can be cast during any of Viego's abilities. He cannot gain the camouflage nor bonus movement speed from Harrowed Path for 0.75 seconds after starting the channel of  Spectral Maw, recasting ends this duration prematurely.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Heartbreaker: {
    effects: [
      {
        img: 'Heartbreaker.png',
        description:
          'Active: Viego gains  displacement immunity over the cast time, then  blinks to the target location. Upon arrival, he strikes the most wounded enemy champion nearby, dealing physical damage,  slowing them by 99% for 0.25 seconds, and applying  on-hit effects at 100% effectiveness. Other nearby enemies are  knocked back up to 400-units away based on proximity, though not through terrain.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "12 / 14 / 16 / 18 / 20% (+ 3% per 100 bonus AD) of target's missing health",
            healType: 'OutgoingHeals',
            values: [12, 14, 16, 18, 20],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: '12 / 14 / 16 / 18 / 20%',
            post: "of target's missing health",
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 3% per 100 bonus AD',
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
          'All targets hit are dealt 120% AD physical damage, increased by 0% − 100% (based on critical strike chance).',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If a  Possession is discarded, Heartbreaker will be placed on a  1.5-second cooldown if it is not already on cooldown. Heartbreaker will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
