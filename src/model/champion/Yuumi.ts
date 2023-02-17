import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Yuumi';
export const skillsData = ChampionSkillsData['Yuumi'];

export const Yuumi = {
  "Bop 'n' Block": {
    effects: [
      {
        img: "Bop 'n' Block.png",
        description:
          'Innate: Periodically, Yuumi empowers her next basic attack against an enemy  champion to gain  25 bonus range, have an  uncancellable windup, become  non-projectile, restore  25 − 100 (based on level) (+ 8% maximum mana) mana and grant her a  shield for 45 − 300 (based on level) (+ 25% AP) that lasts until it is destroyed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Attached Bonus: The shield transfers to the Anchor.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Prowling Projectile': {
    effects: [
      {
        img: 'Prowling Projectile.png',
        description:
          'Active: Yuumi fires an errant missile in the target direction that deals magic damage to the first enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 80 / 110 / 140 / 170 / 200 (+ 30% AP)',
            damagetype: 'None',
            values: [50, 80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170 / 200',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If the missile is in flight for 1 second, it deals increased damage, and  slows by 20% for 1 second against  champions. The damage based on the target's health ratio is capped at 50 − 300 (based on level) against non-champions.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Increased Damage:',
            raw: "60 / 100 / 140 / 180 / 220 / 260 (+ 40% AP) (+ 3 / 4.2 / 5.4 / 6.6 / 7.8 / 9% of the target's current health)",
            healType: 'OutgoingHeals',
            values: [60, 100, 140, 180, 220, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220 / 260',
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
                values: [3, 4.2, 5.4, 6.6, 7.8, 9],
                valuesIsPercent: true,
                user: 'target',
                units: 'current_hp',
                unitsText: "of the target's current health",
                pre: "+ 3 / 4.2 / 5.4 / 6.6 / 7.8 / 9% of the target's current health",
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Prowling Projectile 2.png',
        description:
          'Attached Bonus: Yuumi will  channel for up to 2 seconds to steer the missile, after which it fizzles.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'You and Me!': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: The Anchor gains  bonus attack damage or  ability power based on which was already higher. The percentage bonus of You and Me! also benefits from its flat bonus.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: "7.2 / 8.4 / 9.6 / 10.8 / 12 (+ 6 / 7 / 8 / 9 / 10% of Anchor's bonus AD)",
            damagetype: 'None',
            values: [7.2, 8.4, 9.6, 10.8, 12],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7.2 / 8.4 / 9.6 / 10.8 / 12',
            children: [
              {
                values: [6, 7, 8, 9, 10],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: "of Anchor's bonus AD",
                pre: "+ 6 / 7 / 8 / 9 / 10% of Anchor's bonus AD",
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Ability Power:',
            raw: "12 / 14 / 16 / 18 / 20 (+ 6 / 7 / 8 / 9 / 10% of Anchor's AP)",
            damagetype: 'None',
            values: [12, 14, 16, 18, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 14 / 16 / 18 / 20',
            children: [
              {
                values: [6, 7, 8, 9, 10],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: "of Anchor's AP",
                pre: "+ 6 / 7 / 8 / 9 / 10% of Anchor's AP",
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
          "Yuumi gains flat  adaptive force plus an amount based on a portion of the Anchor's current bonus attack damage or ability power, whichever is higher. Additionally, Yuumi starts with a skill point in You and Me! and  Prowling Projectile instead has 6 ranks.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Adaptive Force:',
            raw: '12 / 14 / 16 / 18 / 20',
            values: [12, 14, 16, 18, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 14 / 16 / 18 / 20',
          },
          {
            effectType: 'Unique',
            name: 'Adaptive Force per 100 bonus AD:',
            raw: '10 / 11.67 / 13.33 / 15 / 16.67',
            values: [10, 11.67, 13.33, 15, 16.67],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 11.67 / 13.33 / 15 / 16.67',
          },
          {
            effectType: 'Unique',
            name: 'Adaptive Force per 100 AP:',
            raw: '6 / 7 / 8 / 9 / 10',
            values: [6, 7, 8, 9, 10],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'You and Me!.png',
        description:
          "Active: Yuumi  channels for 0.25 seconds, then  dashes to the target allied champion and  attaches to them upon arrival. While attached, Yuumi is  untargetable (except from  turrets and inbound  projectiles) and casts her spells from the Anchor's position. The cooldown starts upon completing the  channel. You and Me! can be recast after 0.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Yuumi will be  knocked down by any  immobilizing or  polymorphing crowd control during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Change of Plan.png',
        description:
          'Recast: Yuumi switches her Anchor to the target allied champion and  attaches to them, refreshing the recast. She will detach automatically if her Anchor dies or under certain circumstances. If recast without a valid target, Yuumi will detach from her Anchor and  dash 250-units in the target direction, placing You and Me! on a  0.25-second cooldown if it is not already on cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Zoomies: {
    effects: [
      {
        img: 'Zoomies.png',
        description:
          'Active: Yuumi  heals herself and gains  20% bonus movement speed and  bonus attack speed for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 30% AP)',
            damagetype: 'None',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
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
            name: 'Bonus Attack Speed:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Attached Bonus: Zoomies affects the Anchor instead of Yuumi.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Final Chapter': {
    effects: [
      {
        img: 'Final Chapter.png',
        description:
          'Active: Yuumi and Book  channel for up to 3.5 seconds, launching 7 waves in the target direction that each deal magic damage to enemies hit. Enemy  champions hit take only 50% damage from subsequent waves, and when they are struck by three waves, they become  rooted for 1.25 seconds. This may occur only once per target.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Wave:',
            raw: '60 / 70 / 80 / 90 / 100 (+ 20% AP)',
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
