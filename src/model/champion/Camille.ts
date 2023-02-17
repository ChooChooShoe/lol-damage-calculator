import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Camille';
export const skillsData = ChampionSkillsData['Camille'];

export const Camille = {
  'Adaptive Defenses': {
    effects: [
      {
        img: 'Adaptive Defenses.png',
        description:
          "Innate: Periodically, Camille's next basic attack against an enemy champion is enhanced to  on-hit grant her a  shield equal to  20% of her maximum health for 2 seconds from either exclusively  physical damage or  magic damage, based on which type the target has previously dealt most of against champions as well as on Camille's current  armor and  magic resistance.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Precision Protocol': {
    effects: [
      {
        img: 'Precision Protocol.png',
        description:
          'Active: Camille empowers her next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage and grant her  bonus movement speed for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '20 / 25 / 30 / 35 / 40% AD',
            damagetype: 'None',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '20 / 25 / 30 / 35 / 40% AD',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Precision Protocol 2.png',
        description:
          'After 0.25 seconds, Precision Protocol can then be recast within the next 3.5 seconds at no additional cost.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Precision Protocol 3.png',
        description:
          "Recast: Camille mimics the first cast's effects. If Precision Protocol is recast after 1.5 seconds of the first attack, then the bonus damage is doubled, and 40% − 100% (based on level) of the attack's total damage will be dealt as  true damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Mixed Damage:',
            raw: '40 / 50 / 60 / 70 / 80% AD',
            damagetype: 'None',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '40 / 50 / 60 / 70 / 80% AD',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Both casts of Precision Protocol  reset Camille's basic attack timer. Camille is able to cast  Tactical Sweep,  Hookshot, or  The Hextech Ultimatum during the windup of Precision Protocol's empowered attack without cancelling it.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tactical Sweep': {
    effects: [
      {
        img: 'Tactical Sweep.png',
        description:
          'Active: Camille sweeps her leg in a cone in the target direction over 1.1 seconds, during which she is  ghosted and unable to declare basic attacks. Afterwards, she deals physical damage to all enemies within.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 60% bonus AD)',
            damagetype: 'None',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
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
          'Enemies hit by the outer half of the cone take additional physical damage, capped at 300 against  monsters, and are  slowed by 80% decaying over 2 seconds. Camille is  healed for 100% of this additional damage post-mitigation against enemy  champions in the outer half.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Outer Cone Bonus Damage:',
            raw: "5 / 5.5 / 6 / 6.5 / 7% (+ 2.5% per 100 bonus AD) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [5, 5.5, 6, 6.5, 7],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '5 / 5.5 / 6 / 6.5 / 7%',
            post: "of target's maximum health",
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 2.5% per 100 bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Non-epic monsters take 50% damage from Tactical Sweep.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Non-Epic Monster Damage:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 30% bonus AD)',
            damagetype: 'None',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Bonus Non-Epic Monster Damage:',
            raw: "2.5 / 2.75 / 3 / 3.25 / 3.5% (+ 1.25% per 100 bonus AD) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [2.5, 2.75, 3, 3.25, 3.5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '2.5 / 2.75 / 3 / 3.25 / 3.5%',
            post: "of target's maximum health",
            children: [
              {
                values: 1.25,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 1.25% per 100 bonus AD',
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
          'Other abilities can be cast during the animation without cancelling it.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Hookshot: {
    effects: [
      {
        img: 'Hookshot.png',
        description:
          'Active: Camille fires a grapple in the target direction. If the grapple collides with terrain, Camille will  dash toward and attach to the terrain for 0.75 seconds, during which she gains the ability to cast  Wall Dive.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Camille will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Other abilities can be cast during the ability. Casting  The Hextech Ultimatum will cause the grapple to disappear if it is in flight.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wall Dive': {
    effects: [
      {
        img: 'Wall Dive.png',
        description:
          "Active: Camille  dashes in the target direction, dealing physical damage to enemies near the landing location. Wall Dive's range is doubled towards enemy  champions within 1400 units. Camille grants  ghosting to non-champions she passes through for 4 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 90% bonus AD)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
          'Camille stops prematurely upon colliding with an enemy champion,  knocking back all nearby enemy champions, though not through terrain, as well as  stunning them for 0.75 seconds, while also gaining  bonus attack speed for 5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
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
          'Wall Dive may be also cast with movement or attack commands. Other abilities besides  The Hextech Ultimatum can be cast while grappled or during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'The Hextech Ultimatum': {
    effects: [
      {
        img: 'The Hextech Ultimatum.png',
        description:
          'Active: Camille becomes  untargetable and  leaps with  displacement immunity towards the target enemy  champion over 0.5 seconds,  revealing them for the duration and  disrupting their ongoing  channels.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Upon landing on the target, she becomes targetable again and creates a hexagonal zone around her current location for a duration,  knocking away all other nearby enemies on impact, though not through terrain.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Zone Duration:',
            raw: '2.5 / 3.25 / 4',
            values: [2.5, 3.25, 4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2.5 / 3.25 / 4',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The target cannot escape the zone through any means. While within the zone, Camille's basic attacks deal bonus magic damage.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "5 / 10 / 15 (+ 4 / 6 / 8% of target's current health)",
            healType: 'OutgoingHeals',
            values: [5, 10, 15],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15',
            children: [
              {
                values: [4, 6, 8],
                valuesIsPercent: true,
                user: 'target',
                units: 'current_hp',
                unitsText: "of target's current health",
                pre: "+ 4 / 6 / 8% of target's current health",
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
          'The Hextech Ultimatum ends automatically within 1 second if Camille leaves the area or dies.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
