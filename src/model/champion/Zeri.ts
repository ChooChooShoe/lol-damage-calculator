import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Zeri';
export const skillsData = ChampionSkillsData['Zeri'];

export const Zeri = {
  'Basic Attack': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Zeri generates 1 charge for every 40 units she travels by any means and 10 charge every time she casts  Burst Fire, up to a maximum of 100 charge. Her basic attacks consume charge to deal modified damage.Zeri gains maximum charge when the game starts and upon respawning.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Basic Attack.png',
        description:
          'Basic Attack: Zeri zaps the target, applying spell effects as  spell damage, and triggering on-cast effects. This cannot  critically strike nor trigger  on-hit and on-attack effects.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Zeri Basic Attack.png',
        description:
          "While not at full charge, Zeri's attacks deal 10 − 25 (based on level) (+ 3% AP) magic damage, and  execute targets below 60 − 150 (based on level) (+ 18% AP) health. Each attack consumes 10 charge if she has enough already.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Zeri Basic Attack 2.png',
        description:
          "At full charge, Zeri's next attack is empowered to consume all charge to deal 90 − 200 (based on level) (+ 110% AP) (+ 1% − 15% (based on level) of target's maximum health) magic damage. The damage based on the target's health ratio is capped at 300 against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Living Battery': {
    effects: [
      {
        img: 'Zeri Living Battery.png',
        description:
          'Innate: Zeri absorbs the energy of  shields she damages, granting herself a shield equal to 60% of the post-mitigation damage dealt to the shield. Each instance of shield gained by Living Battery lasts for 3 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Zeri Living Battery 2.png',
        description:
          'Innate - Gotta Zip!: Whenever Zeri gains a shield, she gains  10% bonus movement speed for 2 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Burst Fire': {
    effects: [
      {
        img: 'Zeri Burst Fire.png',
        description:
          'Active: Zeri fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '15 / 17 / 19 / 21 / 23 (+ 104 / 108 / 112 / 116 / 120% AD)',
            damagetype: 'None',
            values: [15, 17, 19, 21, 23],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17 / 19 / 21 / 23',
            children: [
              {
                values: [104, 108, 112, 116, 120],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 104 / 108 / 112 / 116 / 120% AD',
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
          "Burst Fire's projectile is treated as a basic attack: it hits any enemy unit a typical basic attack can; deals  basic damage; can  critically strike for (75% +  35%) bonus damage; and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit. Burst Fire's  cooldown and cast time are reduced with  attack speed, with the maximum of 1.5 attacks per second. 70% of attack speed in excess of the cap is converted into  bonus attack damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ultrashock Laser': {
    effects: [
      {
        img: 'Zeri Ultrashock Laser.png',
        description:
          'Active: Zeri fires an electric pulse in the target direction that deals physical damage to the first enemy hit and  slows them for 2 seconds.If the pulse hits terrain, it transforms into a laser in a line that grants  sight of the area for 1.75 seconds and fires after 0.85 seconds, applying the same effects to enemies hit and  critically striking for (75% +  35%) bonus damage against  champions and  monsters.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 60 / 100 / 140 / 180 (+ 130% AD) (+ 25% AP)',
            damagetype: 'None',
            values: [20, 60, 100, 140, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 60 / 100 / 140 / 180',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 130% AD',
              },
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spark Surge': {
    effects: [
      {
        img: 'Zeri Spark Surge.png',
        description:
          'Active: Zeri  dashes in the target direction. She will dash farther across terrain if Spark Surge was cast within 50 units of any, gaining  unobstructed vision of the surrounding 800 units and  revealing herself while there are enemy champions within 1500 units of her.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Afterwards, she gains Lightning Rounds for 5 seconds, empowering  Burst Fire to deal bonus magic damage to the first enemy hit, increased by 0% − 65% (based on critical strike chance), and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor  life steal to secondary targets. This damage is affected by  critical strike modifiers.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Burst Fire Bonus Magic Damage:',
            raw: '20 / 22 / 24 / 26 / 28 (+ 12% bonus AD) (+ 20% AP)',
            damagetype: 'None',
            values: [20, 22, 24, 26, 28],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22 / 24 / 26 / 28',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 12% bonus AD',
              },
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
          {
            effectType: 'Unique',
            name: 'Burst Fire Modified Damage:',
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
          "Spark Surge's  current cooldown is reduced by 0.5 seconds for every  champion Zeri hits with  charged basic attacks or abilities, increased to 1.5 seconds if she does so with a cast of  Burst Fire or  Ultrashock Laser that  critically strikes.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Spark Surge  resets Zeri's basic attack timer and  Burst Fire's cooldown.  Ultrashock Laser and  Lightning Crash can be cast during the dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Lightning Crash': {
    effects: [
      {
        img: 'Zeri Lightning Crash.png',
        description:
          'Active: Zeri discharges an electric nova that deals magic damage to nearby enemies. If this hits at least one enemy champion, she enters Overcharged for 5 seconds. Hitting an enemy champion with an ability or  charged basic attack will extend the duration by 1.5 seconds, up to its original duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '175 / 225 / 275 / 325 / 375 (+ 100% bonus AD) (+ 110% AP)',
            damagetype: 'None',
            values: [175, 225, 275, 325, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 225 / 275 / 325 / 375',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 110% AP',
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
          'Overcharged: Zeri gains  30% bonus attack speed and  10% bonus movement speed.  Burst Fire is empowered to have a 20% shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest  visible enemy within 650 units of the target, up to 4 subsequent targets, to deal 25% AD physical damage. This damage can  critically strike for (18.75% +  8.75%) AD bonus physical damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'During Overcharged, Zeri can generate stacks of Hypercharged from enemy champions that last 1.5 seconds. She generates 1 stack for each one she hits with an ability or  charged basic attack, increased to 3 on abilities that  critically strike. Subsequent hits refresh the duration of Hypercharged.  Burst Fire grants stacks only against the first target hit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Hypercharged: For each stack, Zeri gains  0.5% bonus movement speed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
