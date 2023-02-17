import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Morgana';
export const skillsData = ChampionSkillsData['Morgana'];

export const Morgana = {
  'Soul Siphon': {
    effects: [
      {
        img: 'Soul Siphon.png',
        description:
          'Innate: Morgana  heals herself for 18% of the post-mitigation damage dealt by her abilities against  champions, large  minions, and medium and large  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dark Binding': {
    effects: [
      {
        img: 'Dark Binding.png',
        description:
          'Active: Morgana throws a sphere of dark magic in the target direction that deals magic damage to the first enemy hit and  roots them for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 90% AP)',
            damagetype: 'None',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '2 / 2.25 / 2.5 / 2.75 / 3',
            values: [2, 2.25, 2.5, 2.75, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.25 / 2.5 / 2.75 / 3',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tormented Shadow': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Tormented Shadow's  current cooldown is reduced by 5% of its total cooldown whenever  Soul Siphon triggers. Simultaneous triggers from multiple targets will stack the cooldown reduction.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Tormented Shadow.png',
        description:
          "Active: Morgana torments the soil at the target location, causing the area to become desecrated for 5 seconds. Enemies within take magic damage on-cast and every 0.5 seconds, increased by 0% − 170% (based on target's missing health). Tormented Shadow deals 155% damage against  monsters.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Damage Per Tick:',
            raw: '6 / 11 / 16 / 21 / 26 (+ 7% AP)',
            damagetype: 'None',
            values: [6, 11, 16, 21, 26],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 11 / 16 / 21 / 26',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Total Damage:',
            raw: '60 / 110 / 160 / 210 / 260 (+ 70% AP)',
            damagetype: 'None',
            values: [60, 110, 160, 210, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210 / 260',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Black Shield': {
    effects: [
      {
        img: 'Black Shield.png',
        description:
          'Active: Morgana grants a  shield to the target allied  champion or herself for 5 seconds, which absorbs incoming magic damage and grants  crowd control immunity while it holds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Shield Strength:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 70% AP)',
            damagetype: 'None',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Soul Shackles': {
    effects: [
      {
        img: 'Soul Shackles.png',
        description:
          'Active: Morgana latches chains of energy onto nearby enemy champions over the cast time, dealing magic damage and forming a  tether between herself and each target for 3 seconds, during which the targets are  revealed and  slowed by 20%.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 187.5 / 225 / 262.5 / 300 (+ 70% AP)',
            damagetype: 'None',
            values: [150, 187.5, 225, 262.5, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 187.5 / 225 / 262.5 / 300',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
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
          'Morgana gains  bonus movement speed while facing enemies tethered to her.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '5 / 17.5 / 30 / 42.5 / 55%',
            values: [5, 17.5, 30, 42.5, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 17.5 / 30 / 42.5 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If a target does not break their tether by the ends of its duration, they are dealt the same magic damage again and become  stunned for 1.5 seconds, during which they are  revealed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'A nearby enemy champion is required to cast this ability. The target does not have to be  visible to be tethered by this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
