import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Malzahar';
export const skillsData = ChampionSkillsData['Malzahar'];

export const Malzahar = {
  'Void Shift': {
    effects: [
      {
        img: 'Void Shift.png',
        description:
          'Innate: Periodically, Malzahar gains Void Shift until he takes non- minion damage or negates a  crowd control effect, to which it then lingers for 0.25 seconds before expiring. Void Shift: Malzahar gains  crowd control immunity and 90% damage reduction.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Void Shift's  cooldown refreshes whenever Malzahar takes non- minion damage or is affected by a  crowd control effect, and resets upon respawning.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Call of the Void': {
    effects: [
      {
        img: 'Call of the Void.png',
        description:
          'Active: Malzahar opens two portals to the void centered at the target location, granting  sight of the area in between. After 0.4 seconds, enemies between the portals are dealt magic damage and  silenced for a duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 55% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
            name: 'Silence Duration:',
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
  'Void Swarm': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Malzahar generates a stack of Zz'Rot Swarm when he casts another ability, up to a maximum of 2.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Void Swarm.png',
        description:
          "Active: Malzahar consumes all Zz'Rot Swarm stacks and, after a 0.5-second delay, summons a  Voidling at the target location. Additional Voidlings are then summoned for each Zz'Rot Swarm stack consumed.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Voidling Duration:',
            raw: '8 / 8 / 9 / 9 / 10',
            values: [8, 8, 9, 9, 10],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 8 / 9 / 9 / 10',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Voidlings deal magic damage with their attacks, reduced by 50% against epic monsters and increased by 200% to enemy  minions infected by  Malefic Visions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '5 − 64.5 (based on level) (+ 12 / 14 / 16 / 18 / 20) (+ 40% bonus AD) (+ 20% AP)',
            damagetype: 'None',
            values: [
              5, 8.5, 12, 15.5, 19, 22.5, 26, 29.5, 33, 36.5, 40, 43.5, 47,
              50.5, 54, 57.5, 61, 64.5,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 − 64.5',
            children: [
              {
                values: [12, 14, 16, 18, 20],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 12 / 14 / 16 / 18 / 20',
              },
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40% bonus AD',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about Voidlings.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Malefic Visions': {
    effects: [
      {
        img: 'Malefic Visions.png',
        description:
          "Active: Malzahar infects the target enemy's mind, dealing magic damage every 0.5 seconds over 4 seconds, which refreshes upon damaging them with  Call of the Void or  Nether Grasp. Malefic Visions executes  minions if they would be damaged below  15 − 45 (based on level) health.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 80% AP)',
            damagetype: 'None',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
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
      {
        img: '',
        description:
          'If the target dies while infected, they spread Malefic Visions onto the closest nearby enemy and Malzahar restores  2% of his maximum mana.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Nether Grasp': {
    effects: [
      {
        img: 'Nether Grasp.png',
        description:
          'Active: Malzahar  tethers to the target enemy champion,  knocking them down. He then  channels for up to 2.5 seconds,  suppressing and  revealing the target and dealing them magic damage every 0.25 seconds,  revealing himself in the process.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '125 / 162.5 / 200 / 237.5 / 275 (+ 80% AP)',
            damagetype: 'None',
            values: [125, 162.5, 200, 237.5, 275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 162.5 / 200 / 237.5 / 275',
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
      {
        img: '',
        description:
          'Malzahar will continue to channel as long as the tether is not broken, even if the suppression is removed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Null Zone.png',
        description:
          "Additionally, a Null Zone is opened beneath the target's location at the time of cast that lasts 5 seconds, dealing magic damage every 0.5 seconds to enemies within, capped at 120 per tick against  minions and  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Total Magic Damage:',
            raw: "10 / 12.5 / 15 / 17.5 / 20% (+ 2.5% per 100 AP) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [10, 12.5, 15, 17.5, 20],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '10 / 12.5 / 15 / 17.5 / 20%',
            post: "of target's maximum health",
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2.5% per 100 AP',
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
          'Null Zone will persist even if the channel is interrupted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
