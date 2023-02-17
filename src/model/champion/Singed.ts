import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Singed';
export const skillsData = ChampionSkillsData['Singed'];

export const Singed = {
  'Noxious Slipstream': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Whenever Singed moves near a  champion, he gains a stack of Noxious Slipstream for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Noxious Slipstream.png',
        description:
          'Noxious Slipstream: For each stack, Singed gains  25% bonus movement speed, up to a maximum of 625%.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'This effect cannot occur on the same target more than once every few seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Poison Trail': {
    effects: [
      {
        img: 'Poison Trail.png',
        description:
          'Toggle: Singed continually creates a toxic cloud in his wake that lingers for 3.25 seconds. The cloud inflicts  poison to enemies within, and resets the duration every 0.5 seconds while they remain.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'poison: The target takes magic damage every 0.25 seconds over 2 seconds. Subsequent inflictions refresh the duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '5 / 7.5 / 10 / 12.5 / 15 (+ 11.25% AP)',
            damagetype: 'None',
            values: [5, 7.5, 10, 12.5, 15],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 7.5 / 10 / 12.5 / 15',
            children: [
              {
                values: 11.25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 11.25% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Mega Adhesive': {
    effects: [
      {
        img: 'Mega Adhesive.png',
        description:
          'Active: Singed spills a potent adhesive that lands at the target location over 0.264 seconds to 0.528 seconds, creating a field for 3 seconds that  grounds enemies within and  slows them.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '50 / 55 / 60 / 65 / 70%',
            values: [50, 55, 60, 65, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 55 / 60 / 65 / 70%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Fling: {
    effects: [
      {
        img: 'Fling.png',
        description:
          'Active: Singed  flings the target enemy 550 units over himself, dealing magic damage, capped against  minions and  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "50 / 60 / 70 / 80 / 90 (+ 6 / 6.5 / 7 / 7.5 / 8% of target's maximum health) (+ 60% AP)",
            healType: 'OutgoingHeals',
            values: [50, 60, 70, 80, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90',
            children: [
              {
                values: [6, 6.5, 7, 7.5, 8],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 6 / 6.5 / 7 / 7.5 / 8% of target's maximum health",
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the target lands on  Mega Adhesive, they are  rooted for a duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Insanity Potion': {
    effects: [
      {
        img: 'Insanity Potion.png',
        description:
          'Active: Singed empowers himself for 25 seconds with  ability power,  bonus armor,  bonus magic resistance,  bonus movement speed,  bonus health regeneration, and  bonus mana regeneration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Stats:',
            raw: '30 / 47.5 / 65 / 82.5 / 100',
            values: [30, 47.5, 65, 82.5, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 47.5 / 65 / 82.5 / 100',
          },
          {
            effectType: 'Unique',
            name: 'Regeneration per Second:',
            raw: '6 / 9.5 / 13 / 16.5 / 20',
            values: [6, 9.5, 13, 16.5, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 9.5 / 13 / 16.5 / 20',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'During this time,  Poison Trail additionally applies  Grievous Wounds for 1 second, which refreshes every 0.25 seconds while the  poison persists.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
