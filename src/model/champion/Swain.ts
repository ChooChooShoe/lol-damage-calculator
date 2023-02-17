import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Swain';
export const skillsData = ChampionSkillsData['Swain'];

export const Swain = {
  'Ravenous Flock': {
    effects: [
      {
        img: 'Ravenous Flock.png',
        description:
          "Innate: Enemy champions that  die will leave behind a Soul Fragment for 16 seconds, which can be collected by Swain after 1 second. Swain's ravens collect nearby Soul Fragments, as well as with  Vision of Empire and  Nevermove.\nSoul Fragment: For each stack, Swain gains 12 bonus health. Upon collection, he will  heal for 3 / 4 / 5 / 6% (based on level) of his maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Death's Hand": {
    effects: [
      {
        img: "Death's Hand.png",
        description:
          'Active: Swain unleashes five bolts of eldritch power over 0.264 seconds in a cone in the target direction that deal magic damage to enemies hit. Subsequent bolts against an enemy deal bonus magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 38% AP)',
            damagetype: 'None',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
            children: [
              {
                values: 38,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 38% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Damage Per Bolt:',
            raw: '12 / 22 / 32 / 42 / 52 (+ 8% AP)',
            damagetype: 'None',
            values: [12, 22, 32, 42, 52],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 22 / 32 / 42 / 52',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 8% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Vision of Empire': {
    effects: [
      {
        img: 'Vision of Empire.png',
        description:
          'Active: Swain summons a demonic eye at the target location that grants  sight of the area for 2 seconds and explodes after 1.5 seconds, dealing magic damage to enemies within, halved against  minions, and  slowing them for 2.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 55% AP)',
            damagetype: 'None',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '25 / 35 / 45 / 55 / 65%',
            values: [25, 35, 45, 55, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemy  champions hit are also  revealed for a duration and have a Soul Fragment collected from them.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Reveal Duration:',
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
    ],
  },
  Nevermove: {
    effects: [
      {
        img: 'Nevermove.png',
        description:
          'Active: Swain launches a demonic wave in the target direction that deals magic damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 70 / 105 / 140 / 175 (+ 25% AP)',
            damagetype: 'None',
            values: [35, 70, 105, 140, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 70 / 105 / 140 / 175',
            children: [
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'At maximum range, the wave homes back to Swain and detonates upon the first enemy hit, dealing magic damage to nearby enemies and  rooting them for 1.5 seconds, during which they are  revealed. Nevermove can be recast while  champions hit are rooted.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 45 / 55 / 65 / 75 (+ 25% AP)',
            damagetype: 'None',
            values: [35, 45, 55, 65, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 45 / 55 / 65 / 75',
            children: [
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Nevermove 2.png',
        description:
          'Recast: Swain  pulls the rooted champions over 290 units and collects a Soul Fragment from each of them. If the targets would be brought past Swain, they are instead  knocked back the excess distance.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Demonic Ascension': {
    effects: [
      {
        img: 'Demonic Ascension.png',
        description:
          'Active: Swain frees the demon within, gaining Demonic Ascension and generating 50 Demonic Energy. Demonic Ascension is maintained with Demonic Energy, which decays by 5 every 0.5 seconds, increased to 7.5 after 5 seconds have elapsed. Swain generates 10 Demonic Energy every 0.5 seconds while draining from at least one enemy  champion, and fully restores it to the maximum of 50 upon scoring a  champion  takedown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Demonic Ascension: Swain is  ghosted and drains the lifeforce of nearby enemies, both dealing magic damage and  healing himself each second per target affected. The heal is reduced by 90% against  minions and  monsters.  Nevermove's  cooldown is also reduced by 20%.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 10% AP)',
            damagetype: 'None',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
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
            name: 'Heal per Tick:',
            raw: '15 / 21.25 / 27.5 / 33.75 / 40 (+ 18% AP)',
            damagetype: 'None',
            values: [15, 21.25, 27.5, 33.75, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 21.25 / 27.5 / 33.75 / 40',
            children: [
              {
                values: 18,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 18% AP',
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
          'After 2 seconds, Swain can cast  Demonflare, and does so automatically when Demonic Ascension expires.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The targets do not have to be  visible to be hit by this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Demonflare: {
    effects: [
      {
        img: 'Demonflare.png',
        description:
          'Active: Swain releases a nova of soulfire that deals magic damage to nearby enemies and  slows them by 60%, decaying over 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 187.5 / 225 / 262.5 / 300 (+ 60% AP)',
            damagetype: 'None',
            values: [150, 187.5, 225, 262.5, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 187.5 / 225 / 262.5 / 300',
            children: [
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
    ],
  },
} satisfies { [skillName in string]: SkillModel };
