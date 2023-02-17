import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Quinn';
export const skillsData = ChampionSkillsData['Quinn'];

export const Quinn = {
  Harrier: {
    effects: [
      {
        img: 'Harrier.png',
        description:
          "Innate: Quinn's  Blinding Assault against the primary target,  Vault, and  Skystrike mark enemies hit with Vulnerable for 4 seconds, during which they are  revealed. If no Vulnerable target exists for 1 second,  Valor automatically marks a nearby  visible enemy. He cannot do this again for 8 − 2.93 (based on critical strike chance) seconds after the mark expired or was consumed or overwritten by another mark.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Quinn's basic attacks against Vulnerable targets are empowered to consume the mark to deal 10 − 95 (based on level) (+ 16% − 50% (based on level) AD) bonus physical damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While  Behind Enemy Lines is active, Harrier is disabled and all Vulnerable marks are removed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blinding Assault': {
    effects: [
      {
        img: 'Blinding Assault.png',
        description:
          'Active: Quinn sends  Valor in the target direction who stops upon hitting an enemy, marking them as  Vulnerable and dealing physical damage to all nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 80 / 90 / 100 / 110 / 120% AD) (+ 50% AP)',
            damagetype: 'None',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: [80, 90, 100, 110, 120],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 80 / 90 / 100 / 110 / 120% AD',
              },
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
          'If the primary target was a  champion, they become  nearsighted for 1.75 seconds, otherwise they are  disarmed instead.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Heightened Senses': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Whenever Quinn uses a basic attack on-attack against a  Vulnerable target or consumes their mark, she gains  bonus attack speed and  bonus movement speed for 2 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '28 / 36 / 44 / 52 / 60%',
            values: [28, 36, 44, 52, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '28 / 36 / 44 / 52 / 60%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Heightened Senses.png',
        description:
          'Active:  Valor grants  sight of the surrounding area for 2 seconds and  reveals enemy champions within for the same duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Vault: {
    effects: [
      {
        img: 'Vault.png',
        description:
          'Active: Quinn  dashes to the target enemy, marking them as  Vulnerable, dealing physical damage,  knocking them back, though not through terrain, and  slowing them by 50% decaying over 1.5 seconds. She then  leaps back 525 units away from them.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical damage:',
            raw: '40 / 70 / 100 / 130 / 160 (+ 20% bonus AD)',
            damagetype: 'None',
            values: [40, 70, 100, 130, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 70 / 100 / 130 / 160',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% bonus AD',
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
          'Heightened Senses can be cast during either of the dashes.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Behind Enemy Lines': {
    effects: [
      {
        img: 'Behind Enemy Lines.png',
        description:
          'Active: Quinn  channels for 2 seconds, signaling  Valor to pair up. Upon completion, he picks her up and they unite, increasing her  total movement speed, granting her  ghosting, and allowing her to cast  Skystrike. Behind Enemy Lines can be recast after 0.5 seconds during the channel.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Total Movement Speed Increase:',
            raw: '70 / 85 / 100 / 115 / 130%',
            values: [70, 85, 100, 115, 130],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 85 / 100 / 115 / 130%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Taking damage from non- minions while Behind Enemy Lines is active or while Quinn is  channeling the ability causes her to lose the bonus total movement speed for 3 seconds. Becoming  immobilized,  grounded, or  silenced ends Behind Enemy Lines immediately and puts it on  cooldown without performing  Skystrike.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Once Behind Enemy Lines has been learned, respawning or returning to the allied summoning platform will spawn  Valor instantly.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Quinn cancels the channel, placing Behind Enemy Lines on cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Skystrike: {
    effects: [
      {
        img: 'Skystrike.png',
        description:
          "Active: Quinn detaches from Valor, ending  Behind Enemy Lines' effects and raining arrows down around her, dealing 70% AD physical damage to nearby enemies and marking them as  Vulnerable.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Declaring a basic attack or casting  Blinding Assault or  Vault during  Behind Enemy Lines automatically activates Skystrike.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
