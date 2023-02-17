import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Yorick';
export const skillsData = ChampionSkillsData['Yorick'];

export const Yorick = {
  'Shepherd of Souls': {
    effects: [
      {
        img: 'Shepherd of Souls.png',
        description:
          'Innate - Final Service: Yorick raises a grave for every enemy he kills with  Last Rites, as well as for every enemy  champion and large  monster that dies near him. Additionally, Yorick raises a grave for every 12th / 6th / 2nd (based on level) enemy that dies otherwise near him. Up to 4 graves can exist at once, with the furthest ones being replaced by the newest.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Yorick can use  Awakening and  Mourning Mist's mark to raise a Mist Walker from each grave.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Innate - The Cursed Horde: Up to 4 Mist Walkers can be active at once, with the closest ones being replaced by the newest.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about Mist Walkers.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Last Rites': {
    effects: [
      {
        img: 'Last Rites.png',
        description:
          'Active: Yorick empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage, and  heal him for 10 − 68 (based on level). The heal is doubled to 20 − 136 (based on level) if he is below 50% maximum health.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 55 / 80 / 105 / 130 (+ 40% AD)',
            damagetype: 'None',
            values: [30, 55, 80, 105, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 55 / 80 / 105 / 130',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
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
          'While there are at least 3 graves nearby and Last Rites is active or on  cooldown, Yorick can cast  Awakening.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Last Rites  resets Yorick's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Awakening: {
    effects: [
      {
        img: 'Awakening.png',
        description:
          'Active: Yorick exhumes a Mist Walker under his command from each nearby grave.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dark Procession': {
    effects: [
      {
        img: 'Dark Procession.png',
        description:
          'Active: Yorick summons a ring of spirits around the target location that arises after a 0.75-second delay,  knocking aside enemies hit over 0.25 seconds, though not through terrain. Within 210-units, they are pulled inside; otherwise they are pushed away. The ring remains for 4 seconds as impassible terrain against enemies, granting  sight inside the ring.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Dark Procession can only be targeted by enemy  champion basic attacks and  turrets. The wall takes 1 damage per attack from champions and is destroyed instantly from turret attacks.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Wall Health:',
            raw: '2 / 2 / 3 / 3 / 4',
            values: [2, 2, 3, 3, 4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2 / 3 / 3 / 4',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Mourning Mist': {
    effects: [
      {
        img: 'Mourning Mist.png',
        description:
          "Active: Yorick hurls a globule of Black Mist that splashes across an area at the target location, dealing magic damage to enemies hit equal to 15% of the target's current health, down to a minimum threshold.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
          'Enemy  champions and  monsters hit are  slowed by 30% for 2 seconds, and marked as Cursed for 4 seconds. Cursed champions are also  revealed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Mourning Mist 2.png',
        description:
          'Cursed: The target takes 40% bonus damage from 8 attacks by Mist Walkers and continually raises a Mist Walker from each nearby grave, up to a maximum of 4.\nYorick, Mist Walkers and the  The Maiden gain  20% bonus movement speed while facing nearby Cursed enemies. Mist Walkers will  leap to nearby Cursed enemy champions and large monsters, dealing  100% of their AD upon arrival.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Mourning Mist will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Eulogy of the Isles': {
    effects: [
      {
        img: 'Eulogy of the Isles.png',
        description:
          'Active: Yorick summons the Maiden of the Mist surrounded by a number of Mist Walkers at the target location, which remain on the battlefield until she or Yorick dies. Eulogy of the Isles can be recast once while the Maiden is alive after 10 seconds of the activation.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Mist Walkers:',
            raw: '2 / 3 / 4',
            values: [2, 3, 4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 3 / 4',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Yorick sets the Maiden free, allowing her to push the nearest lane until she dies.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'See Pets for more details about The Maiden of the Mist. Eulogy of the Isles will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
