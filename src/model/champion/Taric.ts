import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Taric';
export const skillsData = ChampionSkillsData['Taric'];

export const Taric = {
  Bravado: {
    effects: [
      {
        img: 'Bravado.png',
        description:
          'Innate: After casting an ability, Taric empowers his next two basic attacks within 5 seconds to each gain  100% total attack speed, deal 25 − 93 (based on level) (+ 15% bonus armor) bonus magic damage, and reduce the  current cooldowns of his basic abilities by 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Starlight's Touch": {
    effects: [
      {
        img: "Starlight's Touch.png",
        description:
          "Active: Taric  heals himself and nearby allied champions for 25 (+ 15% AP) (+ 1% of his maximum health) per charge of Starlight's Touch that he periodically stocks, up to a maximum amount.  Bravado's empowered attacks each grant one charge.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum Charges:',
            raw: '1 / 2 / 3 / 4 / 5',
            values: [1, 2, 3, 4, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 2 / 3 / 4 / 5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Starlight's Touch can heal up to a maximum of 125 (+ 75% AP) (+ 5% of Taric's maximum health) at 5 charges.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Bastion: {
    effects: [
      {
        img: 'Bastion.png',
        description:
          "Passive: Taric gains  bonus armor and forms a  tether between him and the ally bound by Bastion. While the tether persists, the ally also gains the bonus armor and Taric's abilities are mimicked to them, though the effects do not stack.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: "10 / 11 / 12 / 13 / 14% of Taric's armor",
            values: [10, 11, 12, 13, 14],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_armor',
            unitsText: "of Taric's armor",
            pre: "10 / 11 / 12 / 13 / 14% of Taric's armor",
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Bastion 2.png',
        description:
          'Active: Taric grants himself and the target allied champion a  shield for 2.5 seconds, binding them with Bastion.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: "7 / 8 / 9 / 10 / 11% of target's maximum health",
            healType: 'OutgoingHeals',
            values: [7, 8, 9, 10, 11],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "7 / 8 / 9 / 10 / 11% of target's maximum health",
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Taric can also self-cast to shield himself; if he is untethered, this will instead target the nearest ally. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Dazzle: {
    effects: [
      {
        img: 'Dazzle.png',
        description:
          'Active: Taric winds up over 1 second, then projects a beam of starlight in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '90 / 130 / 170 / 210 / 250 (+ 50% AP) (+ 50% bonus armor)',
            damagetype: 'None',
            values: [90, 130, 170, 210, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 130 / 170 / 210 / 250',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 50% bonus armor',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Taric can move during Dazzle's windup.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Cosmic Radiance': {
    effects: [
      {
        img: 'Cosmic Radiance.png',
        description:
          'Active: Taric calls down a star from above that descends to him over 2.5 seconds. Afterwards, he and nearby allied champions become  invulnerable for 2.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
