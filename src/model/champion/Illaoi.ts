import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Illaoi';
export const skillsData = ChampionSkillsData['Illaoi'];

export const Illaoi = {
  'Prophet of an Elder God': {
    effects: [
      {
        img: 'Prophet of an Elder God.png',
        description:
          "Innate: Periodically, Illaoi spawns a Tentacle on the nearest terrain perpendicular to her location, if no other Tentacles are already nearby it. Tentacles fully spawn after a 2 second delay and are  untargetable in the meantime.  Tentacles are commanded to attack by Illaoi's abilities.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about Tentacles.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Tentacle Smash': {
    effects: [
      {
        img: 'false',
        description: 'Passive: Tentacle damage is increased.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Damage Increase:',
            raw: '10 / 15 / 20 / 25 / 30%',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Tentacle Smash.png',
        description:
          'Active: Illaoi slams down a Tentacle in the target direction.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Harsh Lesson': {
    effects: [
      {
        img: 'Harsh Lesson.png',
        description:
          "Active: Illaoi's next basic attack within 6 seconds gains  225 bonus range and causes her to  leap to the target's location if they're beyond her normal basic attack range.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The attack deals bonus physical damage, with a minimum threshold, and capped at 300 against non-champions, and commands all Tentacles in range to attack the target. The minimum bonus damage can also be applied against  turrets.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "3 / 3.5 / 4 / 4.5 / 5% (+ 4% per 100 AD) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [3, 3.5, 4, 4.5, 5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '3 / 3.5 / 4 / 4.5 / 5%',
            post: "of target's maximum health",
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'per 100 AD',
                pre: '+ 4% per 100 AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Minimum Physical Damage:',
            raw: '20 / 30 / 40 / 50 / 60',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Harsh Lesson  resets Illaoi's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Harsh Lesson can be activated during Illaoi's other abilities, other than while  pulling a Spirit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Test of Spirit': {
    effects: [
      {
        img: 'Test of Spirit.png',
        description:
          "Active: Illaoi launches a tendril in the target direction that stops at the first enemy hit, pulling their Spirit out in front of Illaoi over 0.75 seconds if they're a  champion. The target is  tethered to the Spirit for 7 seconds,  revealing them in addition to granting  sight of the area around them while the tether remains.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The Spirit spawns with the target's  current health,  armor and  magic resist, and redirects a portion of the pre-mitigation damage received to the tethered champion.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Damage Transmission:',
            raw: '25 / 30 / 35 / 40 / 45% (+ 8% per 100 AD)',
            damagetype: 'None',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'per 100 AD',
                pre: '+ 8% per 100 AD',
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
          'When the Spirit is killed or the target leaves tether range, the tether is severed, marking the target as a Vessel for 10 seconds and  slowing them by 80% for 1.5 seconds once the tether returns back to them. Each Tentacle autonomously attacks the closest Vessel or Spirit, prioritizing the latter, once every 5.5 / 4.5 / 3.5 (based on level) seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Vessel.png',
        description:
          'Enemies made a Vessel also spawn a Tentacle near themselves every 5 / 4 / 3 (based on level) seconds. Tentacles can spawn 250 units closer to each other than when spawned by Illaoi.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Illaoi is  unable to act while firing the projectile and while the target's Spirit is being pulled.\nIllaoi cannot cast Test of Spirit again until the Spirit dies.\nVessels can dispel the debuff by scoring a  takedown against Illaoi.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Leap of Faith': {
    effects: [
      {
        img: 'Leap of Faith.png',
        description:
          'Active: Illaoi gains  displacement immunity and leaps into the air for the cast time. She then slams her idol into the ground, dealing physical damage to nearby enemies. For each enemy champion hit, a Tentacle is summoned for 8 seconds (up to a maximum of 6 summons).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
          "For the duration,  Harsh Lesson's  cooldown is halved, all Tentacles awakened by Illaoi are  untargetable, will not show their hitboxes, nor go dormant, and will take half the amount of time to make an attack. This however does not affect the Tentacle attack from  Tentacle Smash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
