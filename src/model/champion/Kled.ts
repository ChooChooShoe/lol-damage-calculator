import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Kled';
export const skillsData = ChampionSkillsData['Kled'];

export const Kled = {
  'Skaarl the Cowardly Lizard': {
    effects: [
      {
        img: 'Skaarl the Cowardly Lizard.png',
        description:
          "Innate: Kled rides his semi-trusty mount, Skaarl. While Mounted, all damage dealt to the duo is suffered by Skaarl, who has 810 − 3258 (based on level) (+ 100% bonus health) base health. Effects based on percentage health consider Kled and Skaarl's combined maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Dismounted Skaarl the Cowardly Lizard.png',
        description:
          "Being reduced to  0 health causes Skaarl to flee, forcing Kled to be Dismounted, with all damage in excess of Skaarl's health being ignored. Upon dismounting, Kled  dashes in the direction of the allied Nexus, though not through terrain,  cleanses himself of all  crowd control and becomes  unable to act,  untargetable, and  immune to crowd control for 0.5 seconds, during which he also reduces all incoming damage received by 100%.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While Kled is Dismounted, his base health and base movement speed are reduced, his  base attack range is increased,  Bear Trap on a Rope is replaced with  Pocket Pistol, and  Jousting and  Chaaaaaaaarge!!! become unusable.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dismounted Skaarl the Cowardly Lizard': {
    effects: [
      {
        img: 'Dismounted Skaarl the Cowardly Lizard.png',
        description:
          "Innate: Kled is only vulnerable to  death while Dismounted. Kled has  410 − 1838 (based on level) base health, which is not improved by sources of bonus health, as well as reduced base movement speed and increased  attack range. Effects based on percentage health consider Kled and Skaarl's combined maximum health, meaning that a Dismounted Kled is always considered to be low health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Kled gains 100 − 185 (based on level)  bonus movement speed while moving towards  visible enemy  champions within 1000 units, but his basic attacks against them are reduced to 80% AD physical damage. Additionally, he gains the ability to restore Skaarl's  Courage to  reunite again.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Skaarl the Cowardly Lizard 3.png',
        description:
          "Innate - Courage: Kled gains 15 Courage when basic attacking an enemy champion, 20 Courage whenever he scores a  takedown against an enemy  champion within 3 seconds of damaging them, 4 Courage for  minion kills, and 5 Courage when basic attacking a structure or epic  monster. At 100 Courage, Skaarl returns with 45 / 55 / 65 / 75% (based on level) of Skaarl's maximum health and Kled becomes Mounted after 0.7 seconds.  Mounting up resets the  cooldowns of  Bear Trap on a Rope and  Jousting.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While at the allied fountain, 25 Courage is generated every 0.25 seconds. If reuniting outside of base, Skaarl gets Frayed Nerves, which prevents him from gaining Courage for 30 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The current status of Kled's own health is preserved between subsequent dismounts. While Mounted,  healing and  health regeneration will first replenish Skaarl's health and will only apply to Kled's health while Skaarl is at full health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bear Trap on a Rope': {
    effects: [
      {
        img: 'Bear Trap on a Rope.png',
        description:
          'Active: Kled throws a bear trap in the target direction that deals physical damage to enemies hit, increased by 50% against  minions and small  monsters. The bear trap collides against the first enemy  champion or large  monster hit, forming a  tether between Kled and the target for 1.75 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '30 / 55 / 80 / 105 / 130 (+ 65% bonus AD)',
            damagetype: 'None',
            values: [30, 55, 80, 105, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 55 / 80 / 105 / 130',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 65% bonus AD',
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
          "The tether's radius shrinks over its duration, and if it is not broken before then, Kled  pulls the target 100 units toward him, deals physical damage, inflicts  Grievous Wounds for 5 seconds, and  slows them for 1.5 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 110 / 160 / 210 / 260 (+ 130% bonus AD)',
            damagetype: 'None',
            values: [60, 110, 160, 210, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210 / 260',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 130% bonus AD',
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
        description: 'Bear Trap on a Rope can be cast while  Jousting.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Pocket Pistol': {
    effects: [
      {
        img: 'Pocket Pistol.png',
        description:
          'Active: Kled sprays a cone of five pellets in the target direction while  recoiling 300 units in the opposite direction, dealing physical damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
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
          'Kled periodically stocks a Pocket Pistol charge, up to a maximum of 2. He will store charges even while  mounted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Pellets collide with the first enemy champion they hit, and deal 20% damage per pellet beyond the first. Each pellet that hits an enemy  champion or epic  monster restores  Courage, by 5 and 2.5 respectively.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '7 / 10 / 13 / 16 / 19 (+ 16% bonus AD)',
            damagetype: 'None',
            values: [7, 10, 13, 16, 19],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 10 / 13 / 16 / 19',
            children: [
              {
                values: 16,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 16% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Violent Tendencies': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Kled periodically gains Violent Tendencies, which starts expiring upon his next basic attack.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Violent Tendencies.png',
        description:
          'Violent Tendencies: Kled gains  150% bonus attack speed on his next 4 basic attacks within 4 seconds. The fourth attack deals bonus physical damage, capped against  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "20 / 30 / 40 / 50 / 60 (+ 4.5 / 5 / 5.5 / 6 / 6.5% (+ 5% per 100 bonus AD) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
            children: [
              {
                values: [4.5, 5, 5.5, 6, 6.5],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 4.5 / 5 / 5.5 / 6 / 6.5%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 5,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'bonus_ad',
                    unitsText: 'per 100 bonus AD',
                    pre: '+ 5% per 100 bonus AD',
                  },
                ],
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Turrets are only affected by the base damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Jousting: {
    effects: [
      {
        img: 'Jousting.png',
        description:
          'Active: Skaarl  dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through and  pulling  minions and small  monsters hit towards them.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '35 / 60 / 85 / 110 / 135 (+ 65% bonus AD)',
            damagetype: 'None',
            values: [35, 60, 85, 110, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 60 / 85 / 110 / 135',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 65% bonus AD',
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
          'Upon hitting an enemy  champion or large  monster, Skaarl  dashes a fixed 200-units through them, marking them for 3 seconds, during which they are  revealed. After the dash ends, the duo gain  50% bonus movement speed for 1 second. Jousting can be recast after 0.5 seconds of the first dash ending while the target is marked.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Jousting 2.png',
        description:
          'Recast: Skaarl consumes the mark to  dash through the marked target, applying the same effects as the first cast.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 130% bonus AD)',
            damagetype: 'None',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 130% bonus AD',
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
          'The mark will remain even if the target dies, and ends prematurely if the duo are too far away or Kled  dismounts.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Bear Trap on a Rope and  Chaaaaaaaarge!!! can be cast during either of the dashes.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Unmounted Jousting': {
    effects: [
      {
        img: 'Unmounted Jousting.png',
        description: 'This ability is unusable while  unmounted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Chaaaaaaaarge!!!': {
    effects: [
      {
        img: 'Chaaaaaaaarge!!!.png',
        description:
          "Active: Kled & Skaarl charge toward the target location, automatically navigating terrain along the way, during which they're  ghosted and  immune to crowd control. If the charge does not complete within 15 seconds, it will end prematurely. The charge is interrupted instantly if Kled  dismounts during it.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Chaaaaaaaarge!!! 2.png',
        description:
          "While charging, the duo gain  bonus movement speed and a  shield for every 0.25 seconds of traveling, up to 950 total movement speed over 3 seconds and 10% − 100% (based on time traveling) of the maximum shield amount over 2.25 seconds respectively. The shield lasts for 2 seconds upon finishing the charge. The duo trails a directional draft in their wake, lasting 9 seconds. Allied champions following the draft gain Mr. Kled's Wild Ride.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Shield:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 30% bonus AD)',
            damagetype: 'None',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Mr. Kled's Wild Ride: Gain 650 total movement speed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Skaarl  dashes toward the first enemy champion in range, colliding with the first  visible enemy champion in his path to deal physical damage, increased by 0% − 200% (based on time traveling), and  knock them back 100 units, though not through terrain.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Minimum Physical Damage:',
            raw: "4 / 4.5 / 5 / 5.5 / 6% (+ 4% per 100 bonus AD) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [4, 4.5, 5, 5.5, 6],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '4 / 4.5 / 5 / 5.5 / 6%',
            post: "of target's maximum health",
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 4% per 100 bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Unmounted Chaaaaaaaarge!!!': {
    effects: [
      {
        img: 'Unmounted Chaaaaaaaarge!!!.png',
        description: 'This ability is unusable while  unmounted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
