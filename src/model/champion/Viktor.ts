import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Viktor';
export const skillsData = ChampionSkillsData['Viktor'];

export const Viktor = {
  'Glorious Evolution': {
    effects: [
      {
        img: skillsData['Glorious Evolution'].description[0].icon,
        description:
          'Innate: Viktor can augment each of his basic abilities at the cost of 100 Hex Fragments, which he gains from killing enemies:\n Minions and  monsters generate 1 Hex Fragment.\nSiege minions, super minions, and epic monsters generate 5 Hex Fragments.\nEnemy  champion  takedowns generate 25 Hex Fragments.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Chaos Storm becomes augmented once all of Viktor's basic abilities have been augmented.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Siphon Power': {
    effects: [
      {
        img: 'Siphon Power.png',
        description:
          'Active: Viktor throws a device at the target enemy that deals magic damage. He also grants himself a  shield for 27 − 105 (based on level) (+ 18% AP) for 2.5 seconds and gains Discharge for 3.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 75 / 90 / 105 / 120 (+ 40% AP)',
            damagetype: 'None',
            values: [60, 75, 90, 105, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 75 / 90 / 105 / 120',
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
        img: 'Discharge.png',
        description:
          "Discharge: Viktor's next basic attack is empowered to become  non-projectile and deal modified magic damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Modified Magic Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 100% AD) (+ 60% AP)',
            damagetype: 'None',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
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
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 100% AD) (+ 100% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
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
        img: 'Augment- Turbocharge.png',
        description:
          "Augment: Turbocharge: After the device hits, Viktor gains  30% bonus movement speed for 2.5 seconds and the shield's strength is increased by 60%, up to 48 − 184 (based on level) (+ 32% AP).",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Gravity Field': {
    effects: [
      {
        img: 'Gravity Field.png',
        description:
          'Active: Viktor deploys a gravity field at the target location for 4 seconds. After a 0.75-second delay, it activates to  slow enemies within, persisting for 0.25 seconds after leaving the area or generating 3 stacks.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 34 / 38 / 42 / 45%',
            values: [30, 34, 38, 42, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 34 / 38 / 42 / 45%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The field applies a stack to enemies within every 0.5 seconds, stacking up to 3 times. The third stack consumes them all to  knock down and  stun the target for 1.5 seconds. The target then becomes immune to Gravity Field's effects, occurring once per cast.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Augment- Magnetize.png',
        description:
          "Augment: Magnetize: Viktor's other abilities, excluding  Chaos Storm's persistent damage,  slow enemies hit by 20% for 1 second.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Death Ray': {
    effects: [
      {
        img: 'Death Ray.png',
        description:
          'Active: Viktor fires an energy beam along the target path that deals magic damage to enemies hit and briefly grants  sight of the area.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 50% AP)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
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
        img: 'Augment- Aftershock.png',
        description:
          "Augment: Aftershock: The path explodes along the beam's wake after 1 second, dealing magic damage to enemies hit.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 50 / 80 / 110 / 140 (+ 80% AP)',
            damagetype: 'None',
            values: [20, 50, 80, 110, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 50 / 80 / 110 / 140',
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
  'Chaos Storm': {
    effects: [
      {
        img: 'Chaos Storm.png',
        description:
          'Active: Viktor conjures an arcane singularity at the target location, dealing magic damage to enemies within the area and  disrupting their  channeled abilities.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 137.5 / 175 / 212.5 / 250 (+ 50% AP)',
            damagetype: 'None',
            values: [100, 137.5, 175, 212.5, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 137.5 / 175 / 212.5 / 250',
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
          'The singularity then remains active for 6.5 seconds, dealing magic damage to enemies within it every second and granting  sight of the area. The singularity targets the nearest champion hit by its initial damage and will follow them, moving faster based on its proximity to Viktor.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '65 / 85 / 105 / 125 / 145 (+ 45% AP)',
            damagetype: 'None',
            values: [65, 85, 105, 125, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 85 / 105 / 125 / 145',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
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
          'Chaos Storm can be recast at any time while the singularity is active.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Chaos Storm 2.png',
        description:
          'Recast: Viktor directs the singularity to the target location or enemy champion.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Augment- Perfect Storm.png',
        description:
          'Augment: Perfect Storm: The singularity moves 25% faster.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
