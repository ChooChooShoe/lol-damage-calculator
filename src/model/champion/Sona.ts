import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Sona';
export const skillsData = ChampionSkillsData['Sona'];

export const Sona = {
  'Power Chord': {
    effects: [
      {
        img: 'Sona Power Chord.png',
        description:
          'Innate - Accelerando: Sona generates a stack of Accelerando each time she hits an enemy  champion with  Hymn of Valor and each time she mitigates sufficient damage or heals damaged allies with  Aria of Perseverance, stacking up to 120 times. At maximum stacks, she instead reduces the  current cooldown of  Crescendo by 1.5 seconds each time.\n Accelerando: For each stack, Sona gains  0.5 basic ability haste, up to 60 at maximum stacks.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sona Power Chord 3.gif',
        description:
          'Innate - Melody: Whenever Sona casts a basic ability, her other basic abilities incur a  0.5-second global cooldown and she generates a unique aura for 3 seconds that empowers herself and nearby allied champions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sona Power Chord 2.png',
        description:
          "Innate - Power Chord: Sona's basic abilities generate a stack of Power Chord, stacking up to 3 times. At 3 stacks, her next basic attack is empowered to consume them all to have an  uncancellable windup, deal 20 − 240 (based on level) (+ 20% AP) bonus magic damage, and apply an additional effect based on the last basic ability she casted:\n Hymn of Valor - Staccato: Deals 28 − 336 (based on level) (+ 28% AP) modified magic damage.\n Aria of Perseverance - Diminuendo: Reduces the target's size by 8% and damage dealt by 25% (+ 4% per 100 AP) for 3 seconds.\n Song of Celerity - Tempo:  Slows the target by 50% (+ 4% per 100 AP) for 2 seconds, capped at a maximum of 99%.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Gaining Power Chord's empowered attack  resets Sona's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Hymn of Valor': {
    effects: [
      {
        img: 'Hymn of Valor.png',
        description:
          'Active: Sona sends out bolts of sound to the two nearest  visible enemies, prioritizing champions. Each bolt deals magic damage and grants  sight of the area around the target for 1 second.Sona gains a stack of  Accelerando for each bolt that hits an enemy  champion.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 40% AP)',
            damagetype: 'None',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
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
        img: 'Sona Hymn of Valor 2.png',
        description:
          'Melody Bonus: Sona and tagged allied champions deal bonus magic damage on their next basic attack within 5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 20% AP)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
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
  'Aria of Perseverance': {
    effects: [
      {
        img: 'Aria of Perseverance.png',
        description:
          'Active: Sona  heals herself and sends out a tone to heal the most wounded allied champion nearby.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 15% AP)',
            damagetype: 'None',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sona Aria of Perseverance 2.png',
        description:
          'Melody Bonus: Sona and tagged allied champions are granted a  shield for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '25 / 45 / 65 / 85 / 105 (+ 25% AP)',
            damagetype: 'None',
            values: [25, 45, 65, 85, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 45 / 65 / 85 / 105',
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
          'Sona gains a stack of  Accelerando whenever she  heals a wounded ally or  shields a minimum amount of damage for an ally with Aria of Perseverance.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Minimum Damage Mitigated:',
            raw: '25 / 45 / 65 / 85 / 105',
            values: [25, 45, 65, 85, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 45 / 65 / 85 / 105',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Song of Celerity': {
    effects: [
      {
        img: 'Song of Celerity.png',
        description:
          'Active: Sona gains  20% (+ 2% per 100 AP) bonus movement speed for 7 seconds. If she takes damage during this time, the duration ends prematurely once or if 3 seconds have elapsed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sona Song of Celerity 2.png',
        description:
          'Melody Bonus: Tagged allied champions gain bonus movement speed for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '10 / 11 / 12 / 13 / 14% (+ 2% per 100 AP)',
            damagetype: 'None',
            values: [10, 11, 12, 13, 14],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 11 / 12 / 13 / 14%',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Crescendo: {
    effects: [
      {
        img: 'Crescendo.png',
        description:
          'Active: Sona strikes an irresistible chord in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 250 / 350 (+ 50% AP)',
            damagetype: 'None',
            values: [150, 250, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 250 / 350',
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
