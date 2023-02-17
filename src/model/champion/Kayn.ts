import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Kayn';
export const skillsData = ChampionSkillsData['Kayn'];

export const Kayn = {
  'The Darkin Scythe': {
    effects: [
      {
        img: 'The Darkin Scythe.png',
        description:
          'Innate: Kayn has a secondary experience bar that tracks progress toward his  Darkin and  Shadow Assassin forms. He gathers orbs from champion  takedowns and each instance of damage (excluding damage over time) dealt against champions. Once he has earned enough orbs, he unlocks a form based on whether he earned more from  melee or  ranged champions (for  Darkin and  Shadow Assassin, respectively), with the other form unlocked later.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Kayn Form Selection UI.png',
        description:
          "Kayn can move near the summoning platform to transform over 6 seconds, during which he is  invulnerable,  untargetable, and unable to act. Kayn cannot choose a form if he is unable to cast abilities. The transformation will grant a passive bonus and permanently empower some of Kayn's abilities based on the form chosen. He gains a one-time Homeguard once the transformation is complete.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'The Darkin Scythe A.png',
        description:
          'Shadow Assassin Bonus: If Kayn has been out of combat with enemy champions for over 8 seconds, or he casts  Umbral Trespass, he deals 15% − 45% (based on level) of post-mitigation damage dealt against enemy champions as bonus magic damage, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt. If this effect is ready, it will not be lost by taking damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'The Darkin Scythe R.png',
        description:
          'Darkin Bonus: Rhaast  heals for 20% − 30% (based on level) of the post-mitigation  physical damage that he deals to enemy champions with his abilities.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Reaping Slash': {
    effects: [
      {
        img: 'Reaping Slash.png',
        description:
          'Active: Kayn  dashes in the target direction, dealing physical damage to enemies he passes through. He then swings his scythe, dealing the same damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '75 / 95 / 115 / 135 / 155 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [75, 95, 115, 135, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 95 / 115 / 135 / 155',
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
          'Both instances of Reaping Slash deal 40 bonus physical damage against  minions and  monsters.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Non-Champion Damage:',
            raw: '115 / 135 / 155 / 175 / 195 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [115, 135, 155, 175, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '115 / 135 / 155 / 175 / 195',
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
        img: 'Reaping Slash R.png',
        description:
          "Darkin Bonus: Reaping Slash's damage is modified to deal 65% AD (+ 5% (+ 3.5% per 100 bonus AD) of the target's maximum health) physical damage for both instances. This damage has a cap against monsters that does not include the bonus damage.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Capped Monster Damage per Hit:',
            raw: '200 / 250 / 300 / 350 / 400',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Reaping Slash's dash speed scales with Kayn's  total movement speed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Blade's Reach": {
    effects: [
      {
        img: "Blade's Reach.png",
        description:
          'Active: Kayn swings his scythe in the target direction, dealing physical damage to enemies hit and  slowing them by 90% decaying over 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '90 / 135 / 180 / 225 / 270 (+ 130% bonus AD)',
            damagetype: 'None',
            values: [90, 135, 180, 225, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 135 / 180 / 225 / 270',
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
        img: "Blade's Reach A.png",
        description:
          "Shadow Assassin Bonus: Blade's Reach's radius is extended by 200 units. Kayn conjures an  untargetable shadow at the casting position to perform Blade's Reach's sweep over 0.55 seconds in his stead, removing the ability's cast time.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Blade's Reach R.png",
        description:
          "Darkin Bonus: Blade's Reach  knocks up enemies hit for 1 second.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shadow Step': {
    effects: [
      {
        img: 'Shadow Step.png',
        description:
          'Active: Kayn gains  40% bonus total movement speed,  ghosting and the ability to ignore terrain collision for a duration. If he has been in combat with enemy champions within the last 3 seconds, Shadow Step will instead last 1.5 seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '7 / 7.5 / 8 / 8.5 / 9',
            values: [7, 7.5, 8, 8.5, 9],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 7.5 / 8 / 8.5 / 9',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Kayn  heals himself upon entering terrain for the first time from casting Shadow Step and he gains  unobstructed vision while inside.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '90 / 100 / 110 / 120 / 130 (+ 45% bonus AD)',
            damagetype: 'None',
            values: [90, 100, 110, 120, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 100 / 110 / 120 / 130',
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
          'Receiving damage from or dealing damage to an enemy  champion while Shadow Step is active reduces its remaining duration to 1.5 seconds. This effect also cannot remain active out of terrain for longer than 1.5 seconds and will cancel immediately if Kayn performs a basic attack or becomes  immobilized, excluding from  sleep(bug), or  polymorphed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Shadow Step A.png',
        description:
          "Shadow Assassin Bonus: Shadow Step's  cooldown is reduced to 8 seconds at all ranks. Kayn gains 100%  slow resist while active and, upon entering terrain, the bonus total movement speed is increased to 80% for the remaining duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Umbral Trespass': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Kayn marks enemy champions he damaged in the last 3.15 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Umbral Trespass.png',
        description:
          'Active: Kayn  vanishes and  dashes to a marked enemy champion. Upon arrival, he  channels for up to 2.5 seconds,  attaching to the target and  revealing them. Umbral Trespass can be recast after 0.75 seconds during the channel, and does so automatically after the duration or if it is  interrupted.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Umbral Trespass 2.png',
        description:
          'Recast: After a 0.75-second delay, Kayn deals physical damage to the target and  dashes out from their body in the target direction while still being  untargetable.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 175% bonus AD)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 175,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 175% bonus AD',
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
          "Shadow Assassin Bonus: Umbral Trespass gains 200 bonus cast range and emerge range. Additionally, emerging will reset  The Darkin Scythe's  cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Umbral Trespass 2 R.png',
        description:
          "Darkin Bonus: Umbral Trespass is modified to deal physical damage equal to 15% (+ 13% per 100 bonus AD) of the target's maximum health, and  heals him for 9.75% (+ 8.45% per 100 bonus AD) of target's maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
