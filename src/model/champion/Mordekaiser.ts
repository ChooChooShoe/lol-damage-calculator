import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Mordekaiser';
export const skillsData = ChampionSkillsData['Mordekaiser'];

export const Mordekaiser = {
  'Darkness Rise': {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Mordekaiser's basic attacks are empowered to deal 40% AP bonus magic damage  on-hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Morderkaiser generates a stack for each enemy  champion or large  monster hit by his damaging basic attacks or basic abilities, lasting for 4 seconds, refreshing on subsequent hits, and stacking up to 3 times. At 3 stacks, he gains Darkness Rise.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Darkness Rise.png',
        description:
          "Darkness Rise: Mordekaiser gains  3 / 6 / 9% (based on level) bonus movement speed and deals「 5 − 15.2 (based on level) (+ 30% AP) (+ 1% − 5% (based on level) of target's maximum health) magic damage every second 」「 0.63 − 1.9 (based on level) (+ 3.75% AP) (+ 0.13% − 0.63% (based on level) of target's maximum health) magic damage every 0.125 seconds 」to nearby enemies. Against monsters, the damage is capped at「 28 − 164 (based on level) per second. 」「 3.5 − 20.5 (based on level) per 0.125 seconds. 」",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Obliterate: {
    effects: [
      {
        img: 'Obliterate.png',
        description:
          'Active: Mordekaiser strikes his mace down in a line in the target direction, dealing magic damage to enemies within,  increased if only one enemy is hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '5 − 139 (based on level) (+ 75 / 95 / 115 / 135 / 155) (+ 60% AP)',
            damagetype: 'None',
            values: [
              5, 12.88, 20.76, 28.65, 36.53, 44.41, 52.29, 60.18, 68.06, 75.94,
              83.82, 91.71, 99.59, 107.47, 115.35, 123.24, 131.12, 139,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 − 139',
            children: [
              {
                values: [75, 95, 115, 135, 155],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 75 / 95 / 115 / 135 / 155',
              },
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Damage Increase:',
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
    ],
  },
  Indestructible: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Mordekaiser stores 45% of the post-mitigation damage he deals and 15% of the pre-mitigation damage he takes,「 reduced by 75% for non-champion sources, 」「 reduced to 11.25% of damage dealt and 3.75% of damage taken for non-champion sources, 」as Potential Shield on his secondary resource bar, up to  30% of his maximum health. The Potential Shield decays by 8 − 25 (based on level) every second after not dealing or taking damage for 1 second. While Indestructible is not on cooldown, the Potential Shield will not decay below a minimum of 5% of his maximum health, and it will be set to that amount when it comes off cooldown if it was previously below it.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Indestructible.png',
        description:
          'Active: Mordekaiser consumes his Potential Shield to grant himself a  shield for the same amount for 4 seconds. The shield decays exponentially over the duration. Indestructible can be recast after 0.5 seconds while the shield is active.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Indestructible 2.png',
        description:
          'Recast: Mordekaiser consumes the remaining shield,  healing for a portion of the amount.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Shield to Healing:',
            raw: '35 / 37.5 / 40 / 42.5 / 45%',
            values: [35, 37.5, 40, 42.5, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 37.5 / 40 / 42.5 / 45%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Death's Grasp": {
    effects: [
      {
        img: 'false',
        description: 'Passive: Mordekaiser gains  magic penetration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Magic Penetration:',
            raw: '5 / 7.5 / 10 / 12.5 / 15%',
            values: [5, 7.5, 10, 12.5, 15],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 7.5 / 10 / 12.5 / 15%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: "Death's Grasp.png",
        description:
          'Active: Mordekaiser summons a claw in the target direction that grants  sight of the area. After 0.5 seconds, it deals magic damage to enemies within and  pulls them 250 units.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 95 / 110 / 125 / 140 (+ 60% AP)',
            damagetype: 'None',
            values: [80, 95, 110, 125, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 95 / 110 / 125 / 140',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Realm of Death': {
    effects: [
      {
        img: 'Realm of Death.png',
        description:
          "Active: Mordekaiser  slows the target enemy champion by 75% over the cast time, then banishes them with him to the Death Realm for 7 seconds. Mordekaiser also consumes the target's soul for 7 seconds,  healing himself for 10% of their maximum health and reducing their current  attack damage,  ability power,  total attack speed,  maximum health,  armor,  magic resist, and size by 10%, in addition to gaining them for himself. If the target dies while inside the Death Realm, Mordekaiser keeps their partial stats until they respawn.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Units between realms see each other as spirits, considering each other dead and negating any interactions between each other. Only Mordekaiser and the target will enter the realm; other champions cannot follow them. Everything that occurs inside the Death Realm is hidden to units outside of it, and vice versa. All  pets still inside the realm are killed at its end.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If one of the two affected champions leave the Death Realm, because of having died or having it dispelled, the other will do so as well.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
