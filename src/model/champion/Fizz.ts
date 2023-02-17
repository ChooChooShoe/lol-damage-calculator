import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Fizz';
export const skillsData = ChampionSkillsData['Fizz'];

export const Fizz = {
  'Nimble Fighter': {
    effects: [
      {
        img: 'Nimble Fighter.png',
        description:
          'Innate: Fizz gains  ghosting and takes 4 (+ 1% AP) reduced damage from every instance of damage, up to a maximum of 50% reduction.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Urchin Strike': {
    effects: [
      {
        img: 'Urchin Strike.png',
        description:
          'Active: Fizz  dashes a fixed distance in the direction of the target enemy. If they are in range upon arrival, he deals magic damage plus 100% AD physical damage and applies  on-hit effects at 100% effectiveness.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '10 / 25 / 40 / 55 / 70 (+ 55% AP)',
            damagetype: 'None',
            values: [10, 25, 40, 55, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 25 / 40 / 55 / 70',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Seastone Trident and  Chum the Waters can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Seastone Trident': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Fizz's basic attacks rend enemies  on-hit, dealing magic damage every 0.5 seconds over 3 seconds, refreshing  on-hit.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 40% AP)',
            damagetype: 'None',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
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
        img: 'Seastone Trident.png',
        description:
          'Active: Fizz empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus magic damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 50% AP)',
            damagetype: 'None',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
          "If Seastone Trident kills its target, the  cooldown is reduced to 1 second and Fizz restores  mana. Otherwise, if the target is not killed, Fizz's basic attacks deal bonus magic damage  on-hit for the next 5 seconds.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '20 / 28 / 36 / 44 / 52',
            values: [20, 28, 36, 44, 52],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 28 / 36 / 44 / 52',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage On-Hit:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 35% AP)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Seastone Trident  resets Fizz's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Playful: {
    effects: [
      {
        img: 'Playful.png',
        description:
          'Active: Fizz  dashes to the target location while becoming  untargetable, balancing on his trident for 0.75 seconds, during which he can cast  Trickster after 0.15 seconds into the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'He then begins to hop off of his trident over 0.5 seconds, afterwards becoming targetable and landing to create a splash that deals magic damage to all nearby enemies and  slows them for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 90% AP)',
            damagetype: 'None',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
            name: 'Slow:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While hopping off of the trident, Fizz may input movement commands to direct his landing. Playful will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Trickster: {
    effects: [
      {
        img: 'Trickster.png',
        description:
          'Active: Fizz  dashes to the target location, hopping down and splashing onto the ground prematurely upon arrival to deal the same damage in a smaller radius but not applying the slow.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Trickster will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Chum the Waters': {
    effects: [
      {
        img: 'Chum the Waters.png',
        description:
          "Active: Fizz throws down a lure at the target location that attracts a shark, granting  sight of the area before it emerges to chomp at the lure after 2 seconds, dealing magic damage to nearby enemies,  knocking them back, though not through terrain, and  slowing them for 2 seconds. The further the lure travels in its initial flight, the larger the shark that is attracted; increasing Chum the Waters'  damage, slow, eruption radius and knock back distance.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Guppy (<455): 40% slow, 200 eruption radius and 150 unit knock back distance.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Guppy Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 80% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
          'Chomper (455-910): 60% slow, 325 eruption radius and 250 unit knock back distance.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Chomper Damage:',
            raw: '225 / 275 / 325 / 375 / 425 (+ 100% AP)',
            damagetype: 'None',
            values: [225, 275, 325, 375, 425],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '225 / 275 / 325 / 375 / 425',
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
          'Gigalodon (>910): 80% slow, 450 eruption radius and 350 unit knock back distance.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Gigalodon Damage:',
            raw: '300 / 350 / 400 / 450 / 500 (+ 120% AP)',
            damagetype: 'None',
            values: [300, 350, 400, 450, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 350 / 400 / 450 / 500',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
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
          "Enemy  champions can intercept the lure while it is in flight, which attaches to them upon contact and causes the shark to emerge at their position after the same delay. The lure's holder is  slowed and  revealed for the duration and afterwards is impacted by the eruption but is  knocked up for 1 second instead of knocked back.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
