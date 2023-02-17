import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Gangplank';
export const skillsData = ChampionSkillsData['Gangplank'];

export const Gangplank = {
  'Trial by Fire': {
    effects: [
      {
        img: 'Gangplank Trial by Fire.png',
        description:
          'Innate: Periodically, Gangplank empowers his next basic attack to set the target on fire, dealing them「 55 − 310 (based on level) (+ 100% bonus AD)  bonus true damage over 2.5 seconds, increased by 0 − 200 (based on critical strike chance). 」「 5.5 − 31 (based on level) (+ 10% bonus AD)  bonus true damage every 0.25 seconds over 2.5 seconds, increased by 0 − 20 (based on critical strike chance). 」 Turrets are dealt 50% damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Gangplank Trial by Fire 2.png',
        description:
          'If Gangplank successfully hits a target with Trial by Fire, he gains  15% − 30% (based on level) bonus movement speed for 2 seconds. Every time a  Powder Keg explodes, the  cooldown for Trial by Fire resets and Gangplank gains its bonus movement speed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Trial by Fire cannot be applied with  Parrrley nor  Powder Keg.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Parrrley: {
    effects: [
      {
        img: 'Parrrley.png',
        description:
          'Active: Gangplank fires a shot at the target enemy that deals physical damage and applies  on-hit and on-attack effects at 100% effectiveness as a  ranged attack. Parrrley can  critically strike for (175% +  35%) total damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '10 / 40 / 70 / 100 / 130 (+ 100% AD)',
            damagetype: 'None',
            values: [10, 40, 70, 100, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 40 / 70 / 100 / 130',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Silver Serpents.png',
        description:
          'If Parrrley kills the target, Gangplank plunders  gold and  Silver Serpents. Each enemy killed by a  Powder Keg explosion that was originally set off by Parrrley also counts for the plunder.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Gold Plunder:',
            raw: '3 / 4 / 5 / 6 / 7',
            values: [3, 4, 5, 6, 7],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 4 / 5 / 6 / 7',
          },
          {
            effectType: 'Unique',
            name: 'Silver Serpent Plunder:',
            raw: '4 / 5 / 6 / 7 / 8',
            values: [4, 5, 6, 7, 8],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 5 / 6 / 7 / 8',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Silver Serpents can be spent in the shop to upgrade  Cannon Barrage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Remove Scurvy': {
    effects: [
      {
        img: 'Remove Scurvy.png',
        description:
          'Active: Gangplank consumes a large quantity of citrus fruit,  cleansing himself from all  crowd control and  healing himself.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '45 / 70 / 95 / 120 / 145 (+ 90% AP) (+ 13% missing health)',
            healType: 'BonusHealth',
            values: [45, 70, 95, 120, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 70 / 95 / 120 / 145',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
              {
                values: 13,
                valuesIsPercent: true,
                user: 'player',
                units: 'missing_hp',
                unitsText: 'missing health',
                pre: '+ 13% missing health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Powder Keg': {
    effects: [
      {
        img: 'Powder Keg.png',
        description:
          'Active: Gangplank consumes a charge to place a powder keg at the target location that lasts for 25 seconds and will connect to other kegs with overlapping connection radius through a trail of black powder. The keg starts with 3 health and loses 1 every 2 / 1 / 0.5 (based on level) seconds until it is left with 1 health. Gangplank periodically stocks a Powder Keg charge, up to a maximum amount.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum charges:',
            raw: '3 / 3 / 4 / 4 / 5',
            values: [3, 3, 4, 4, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3 / 4 / 4 / 5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Kegs can be basic attacked by enemies or Gangplank (including his  Parrrley), dealing 1 damage to it. When an enemy destroys it, it is safely defused. When Gangplank destroys it, it explodes and also triggers a chain reaction that explodes other nearby connected kegs with a 0.33 seconds-delay between explosions. The explosions also grant  sight of their radiuses for 2 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Enemies caught in an explosion are  slowed for 2 seconds, and are dealt the triggering attack's damage, dealing bonus physical damage against  champions. Each enemy can only be hit once per chain and the damage dealt ignores  40% of the target's armor.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 37.5 / 45 / 52.5 / 60% (+ 0% − 25% (based on critical strike chance)',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '+ 0',
            pre: '30 / 37.5 / 45 / 52.5 / 60% + 0% − 25%',
            children: [
              {
                values: 0,
                user: 'player',
                units: 'base_critchance',
                unitsText: 'based on critical strike chance',
                pre: 'based on critical strike chance',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Champion Damage:',
            raw: '75 / 105 / 135 / 165 / 195',
            values: [75, 105, 135, 165, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 105 / 135 / 165 / 195',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the triggering attack was a  critical strike, the explosions deal 5% more damage on top of the critical damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Cannon Barrage': {
    effects: [
      {
        img: 'Cannon Barrage.png',
        description:
          'Active: Gangplank shoots a flare into the air, signaling his ship off-shore to fire upon the target location for 8 seconds, calling down 12 waves of cannonballs in clusters of 3 every 2 seconds, and granting  sight of the area for the duration. Each wave deals magic damage to all enemies within the area and  slows them by 30% for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Wave:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 10% AP)',
            damagetype: 'None',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '480 / 660 / 840 / 1020 / 1200 (+ 120% AP)',
            damagetype: 'None',
            values: [480, 660, 840, 1020, 1200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '480 / 660 / 840 / 1020 / 1200',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
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
          'Gangplank can purchase upgrades for his ship in the store at the cost of 500  Silver Serpents each, which improve Cannon Barrage:',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Death's Daughter item.png",
        description:
          "Death's Daughter: A large cannonball lands in the center of the barrage after the first cluster of waves occur, dealing a cluster's worth of true damage to enemies within the impact and  slowing them by 60% for 1.5 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: "True Damage with  Death's Daughter:",
            raw: '120 / 165 / 210 / 255 / 300 (+ 30% AP)',
            damagetype: 'None',
            values: [120, 165, 210, 255, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 165 / 210 / 255 / 300',
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
            effectType: 'Damage',
            name: "Total Mixed Damage with  Death's Daughter:",
            raw: '600 / 825 / 1050 / 1275 / 1500 (+ 150% AP)',
            damagetype: 'None',
            values: [600, 825, 1050, 1275, 1500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '600 / 825 / 1050 / 1275 / 1500',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Fire at Will item.png',
        description:
          'Fire at Will: Cannon Barrage fires「 6 additional waves 」「 2 additional clusters 」 over its duration; 18 waves of cannonballs are called down in clusters of 3 every 1.33 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage with  Fire at Will:',
            raw: '720 / 990 / 1260 / 1530 / 1800 (+ 180% AP)',
            damagetype: 'None',
            values: [720, 990, 1260, 1530, 1800],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '720 / 990 / 1260 / 1530 / 1800',
            children: [
              {
                values: 180,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 180% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: "Maximum Mixed Total Damage with  Fire at Will and  Death's Daughter:",
            raw: '840 / 1155 / 1470 / 1785 / 2100 (+ 210% AP)',
            damagetype: 'None',
            values: [840, 1155, 1470, 1785, 2100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '840 / 1155 / 1470 / 1785 / 2100',
            children: [
              {
                values: 210,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 210% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Raise Morale item.png',
        description:
          'Raise Morale: Cannon Barrage grants Gangplank and all allies within the area  30% bonus movement speed, lingering for 2 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
