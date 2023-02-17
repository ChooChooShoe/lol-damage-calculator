import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = "Kha'Zix";
export const skillsData = ChampionSkillsData["Kha'Zix"];

export const KhaZix = {
  'Unseen Threat': {
    effects: [
      {
        img: 'Unseen Threat.png',
        description:
          "Innate: Kha'Zix gains Unseen Threat whenever the enemy loses  sight of him or he activates  Void Assault. Unseen Threat: Kha'Zix empowers his next basic attack against an enemy champion to deal 14 − 116 (based on level) (+ 40% bonus AD) bonus magic damage and  slow them by 25% for 2 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Taste Their Fear': {
    effects: [
      {
        img: 'Unseen Threat 2.png',
        description:
          "Passive: Kha'Zix considers any enemy unit to be Isolated if they are not nearby to one of their allies.  Taste Their Fear,  Evolved Reaper Claws, and  Evolved Spike Racks have special interactions against Isolated targets.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Taste Their Fear.png',
        description:
          "Active: Kha'Zix slashes the target enemy, dealing physical damage, increased by 110% against Isolated targets.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 115% bonus AD)',
            damagetype: 'None',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 115,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 115% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Evolved Reaper Claws': {
    effects: [
      {
        img: 'Evolved Reaper Claws.png',
        description:
          "Passive: Kha'Zix gains  50 bonus range on his basic attacks and Taste Their Fear. Evolved Bonus: If the target is Isolated, the  cooldown is reduced by 45%.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Void Spike': {
    effects: [
      {
        img: 'Void Spike.png',
        description:
          "Active: Kha'Zix fires a bolt of spikes in the target direction that explodes upon hitting an enemy, dealing physical damage to nearby enemies.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '85 / 115 / 145 / 175 / 205 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [85, 115, 145, 175, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '85 / 115 / 145 / 175 / 205',
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
      {
        img: '',
        description: "Kha'Zix  heals himself if he is within the explosion.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '55 / 75 / 95 / 115 / 135 (+ 50% AP)',
            damagetype: 'None',
            values: [55, 75, 95, 115, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 75 / 95 / 115 / 135',
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
  'Evolved Spike Racks': {
    effects: [
      {
        img: 'Evolved Spike Racks.png',
        description:
          "Evolved Bonus: Void Spike now fires three clusters in a cone,  slows by 60% and  reveals enemy champions hit for 2 seconds. Multiple explosions do not deal extra damage to the same target nor provide Kha'Zix with additional healing.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Isolated targets hit by Evolved Spike Racks are  slowed by 90% instead.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Leap: {
    effects: [
      {
        img: 'Leap.png',
        description:
          "Active: Kha'Zix  leaps to the target location, dealing physical damage to nearby enemies upon arrival.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 100 / 135 / 170 / 205 (+ 20% bonus AD)',
            damagetype: 'None',
            values: [65, 100, 135, 170, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 100 / 135 / 170 / 205',
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
          'Taste Their Fear can be cast during the dash. Leap will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Evolved Wings': {
    effects: [
      {
        img: 'Evolved Wings.png',
        description:
          'Evolved Bonus: Leap gains 200 bonus cast range, and the  cooldown resets upon scoring a champion  takedown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Void Assault': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Each rank in Void Assault allows Kha'Zix to evolve one of his abilities, granting it additional effects. Evolving an ability causes him to enter a 2-second cast time. Kha'Zix cannot evolve while he is unable to cast abilities.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Void Assault.png',
        description:
          "Active: Kha'Zix becomes  invisible for 1.25 seconds, during which he gains  40% bonus movement speed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Void Assault 2.png',
        description:
          'After 2 seconds of leaving  invisibility, and for the next 10 seconds, Void Assault can be recast at no additional cost.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Recast: Kha'Zix mimics the first cast's effects.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Evolved Adaptive Cloaking': {
    effects: [
      {
        img: 'Evolved Adaptive Cloaking.png',
        description:
          'Evolved Bonus: The  invisibility now lasts 2 seconds, and Void Assault can be recast twice.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
