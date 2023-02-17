import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Nocturne';
export const skillsData = ChampionSkillsData['Nocturne'];

export const Nocturne = {
  'Umbra Blades': {
    effects: [
      {
        img: 'Umbra Blades.png',
        description:
          "Innate: Periodically, Nocturne empowers his next basic attack to slash in a circle, dealing 120% AD physical damage to the target and nearby enemies and  healing himself for 13 − 30 (based on level) (+ 30% AP) per enemy hit. Against  minions, Umbra Blade's damage to secondary targets and healing are reduced by 50% and it applies  on-hit effects(bug) to all targets at 100% effectiveness.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Umbra Blades can  critically strike against the primary target, modifying the physical damage dealt to「 (192.5% +  38.5%) AD. 」「 110% of the  critical damage of his basic attacks. 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Steel Blades.png',
        description:
          "Basic attacks reduce Umbra Blades'   cooldown by 1 second, increased to 3 against enemy  champions and  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Duskbringer: {
    effects: [
      {
        img: 'Duskbringer.png',
        description:
          'Active: Nocturne casts out a shadow blade in the target direction that leaves a Dusk Trail in its wake, dealing physical damage to enemies hit. Enemy  champions hit will leave a Dusk Trail behind while moving. Dusk Trails last 5 seconds and will slowly disappear afterwards.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical damage:',
            raw: '65 / 110 / 155 / 200 / 245 (+ 85% bonus AD)',
            damagetype: 'None',
            values: [65, 110, 155, 200, 245],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 110 / 155 / 200 / 245',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 85% bonus AD',
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
          'While on the Dusk Trail, Nocturne is  ghosted and gains  bonus attack damage and  bonus total movement speed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Damage:',
            raw: '20 / 30 / 40 / 50 / 60',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shroud of Darkness': {
    effects: [
      {
        img: 'false',
        description: 'Passive: Nocturne gains  bonus attack speed.',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Shroud of Darkness.png',
        description:
          "Active: Nocturne gains a  spell shield for 1.5 seconds. Upon successfully blocking a hostile effect, Shroud of Darkness' bonus attack speed is doubled for 5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Unspeakable Horror': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Nocturne gains  90% bonus movement speed while facing nearby  feared targets.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Unspeakable Horror.png',
        description:
          'Active: Nocturne torments the target, forming a  tether between himself and the target for 2 seconds, during which the target takes magic damage every 0.5 seconds over the duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 100% AP)',
            damagetype: 'None',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
          'If the tether is not broken by the end of its duration, the target is  feared for a duration while being  slowed by 90%.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Paranoia: {
    effects: [
      {
        img: 'Paranoia.png',
        description:
          'Active: Nocturne terrorizes all enemy champions,  nearsighting them for 6 seconds. He can recast Paranoia for the same duration after 0.25 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Nocturne  dashes with  displacement immunity to the target enemy champion, dealing physical damage upon arrival.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '150 / 275 / 400 (+ 120% bonus AD)',
            damagetype: 'None',
            values: [150, 275, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 275 / 400',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Nocturne can cast any of his abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
