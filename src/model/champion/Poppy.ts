import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Poppy';
export const skillsData = ChampionSkillsData['Poppy'];

export const Poppy = {
  'Iron Ambassador': {
    effects: [
      {
        img: 'Iron Ambassador.png',
        description:
          "Innate: Periodically, Poppy's next basic attack is empowered to throw her buckler, gaining  350 bonus range and dealing 20 − 180 (based on level) bonus magic damage. After it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Iron Ambassador 2.png',
        description:
          'Poppy can move over the buckler to retrieve it, gaining a  shield for  13 / 15.5 / 18% (based on level) of her maximum health for 3 seconds. If the buckler kills the target, it bounces back to Poppy instead of falling. Enemy  champions can move over the buckler to destroy it.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Hammer Shock': {
    effects: [
      {
        img: 'Hammer Shock.png',
        description:
          'Active: Poppy smashes the area in the target direction, dealing physical damage to enemies hit. Against  monsters, the damage based on their health ratio is capped.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "40 / 60 / 80 / 100 / 120 (+ 90% bonus AD) (+ 8% of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [40, 60, 80, 100, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 60 / 80 / 100 / 120',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90% bonus AD',
              },
              {
                values: 8,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 8% of target's maximum health",
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Capped Monster Health Damage:',
            raw: '30 / 60 / 90 / 120 / 150',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The impact creates a field for 1 second that  slows enemies within, which then ruptures to deal the same physical damage.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
          {
            effectType: 'Heal',
            name: 'Total Physical Damage:',
            raw: "80 / 120 / 160 / 200 / 240 (+ 180% bonus AD) (+ 16% of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 180,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 180% bonus AD',
              },
              {
                values: 16,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 16% of target's maximum health",
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Steadfast Presence': {
    effects: [
      {
        img: 'Stubborn to a Fault.png',
        description:
          'Passive: Poppy increases her  total armor and  total magic resistance by 10%, doubled to 20% while she is below 40% maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Steadfast Presence.png',
        description:
          'Active: Poppy gains  40% bonus movement speed and creates an aura around herself for 2 seconds, causing all enemies who attempt to  dash into or within it to be dealt magic damage and  knocked up for 0.5 seconds. If a target was successfully interrupted, they become  grounded and  slowed by 25% for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 70% AP)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
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
          'Steadfast Presence can only block a single dash per enemy per cast.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Heroic Charge': {
    effects: [
      {
        img: 'Heroic Charge.png',
        description:
          "Active: Poppy  dashes to the target enemy's location. If they are in range upon arrival, she deals physical damage and  carries them along with her for up to 400 units.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
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
          'If the target hits terrain, she stops to deal the same physical damage again and  stuns them for a duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1.6 / 1.7 / 1.8 / 1.9 / 2',
            values: [1.6, 1.7, 1.8, 1.9, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.6 / 1.7 / 1.8 / 1.9 / 2',
          },
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '120 / 160 / 200 / 240 / 280 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [120, 160, 200, 240, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 160 / 200 / 240 / 280',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Keeper's Verdict": {
    effects: [
      {
        img: "Keeper's Verdict.png",
        description:
          "Active: Poppy  charges while being  slowed by 15% for up to 4 seconds to increase Keeper's Verdict's  range and  knock back distance over 0.5 seconds after the first 0.5 seconds of the channel. Keeper's Verdict can be recast within the duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Poppy releases the charge to launch her hammer upwards, dealing physical damage to enemies nearby and in an area in front of her and  knocking them up for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '100 / 150 / 200 (+ 45% bonus AD)',
            damagetype: 'None',
            values: [100, 150, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 45% bonus AD',
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
          "If Keeper's Verdict was charged for at least 0.5 seconds, it deals 100% increased damage and enemies hit are  knocked back up-to 3400 units toward the enemy team's fountain. Additionally, if no enemies are hit in front of Poppy, she sends a shockwave that travels in the target direction until it collides with an enemy champion, which causes a hammer to erupt. Targets hit by the shockwave or the eruption receive the charged effects.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '200 / 300 / 400 (+ 90% bonus AD)',
            damagetype: 'None',
            values: [200, 300, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 300 / 400',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90% bonus AD',
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
          "If the charge is  interrupted or completes without reactivation, Keeper's Verdict is cancelled and the ability is put on a  15-second cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Enemies knocked  airborne are  revealed and are rendered  untargetable while being displaced if Keeper's Verdict was charged for more than 0.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
