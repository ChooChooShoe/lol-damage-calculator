import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Katarina';
export const skillsData = ChampionSkillsData['Katarina'];

export const Katarina = {
  Voracity: {
    effects: [
      {
        img: 'Voracity.png',
        description:
          "Innate: Scoring a champion  takedown within 3 seconds of damaging them reduces the  current cooldowns of Katarina's abilities by 15 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Sinister Steel.png',
        description:
          "Innate - Sinister Steel: Whenever Katarina retrieves a Dagger, she uses it to slash around herself, dealing 68 − 240 (based on level) (+ 60% bonus AD) (+ 65 / 75 / 85 / 95% (based on level) AP) magic damage to nearby enemies and applying  on-hit effects at 100% effectiveness to enemy  champions hit, as well as reducing  Shunpo's current cooldown by 78 / 84 / 90 / 96% (based on level) of its total cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Daggers grant  sight of their radius and will disappear after being on the ground for 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bouncing Blade': {
    effects: [
      {
        img: 'Bouncing Blade.png',
        description:
          'Active: Katarina throws a Dagger at the target enemy that deals magic damage and can bounce to up to two additional nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 35% AP)',
            damagetype: 'None',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
        description:
          'The Dagger then lands onto the ground after 1 second, about 350 units opposite from where it struck the first target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The target does not have to be  visible for the Dagger to bounce to them.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Preparation: {
    effects: [
      {
        img: 'Preparation.png',
        description:
          'Active: Katarina tosses a Dagger into the air above her current location and gains  bonus movement speed that decays until it lands after 1.25 seconds, becoming  ghosted for the same duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement speed:',
            raw: '50 / 60 / 70 / 80 / 90%',
            values: [50, 60, 70, 80, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Shunpo: {
    effects: [
      {
        img: 'Shunpo.png',
        description:
          'Active: Katarina  blinks to the target location around the target unit or Dagger, dealing magic damage to the nearest enemy in range and applying  on-hit effects at 100% effectiveness.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 40% AD) (+ 25% AP)',
            damagetype: 'None',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
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
          "Shunpo  resets Katarina's basic attack timer. Upon blinking, Katarina enters a 0.15-second cast time.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Death Lotus': {
    effects: [
      {
        img: 'Death Lotus.png',
        description:
          'Active: Katarina  channels for up to 2.5 seconds, rapidly throwing a dagger every 0.166 seconds to up to 3 of the closest nearby enemy champions,  revealing herself in the process.Each dagger deals physical damage and magic damage, applies on-attack and  on-hit (without applying  life steal) effects, and inflicts  Grievous Wounds on the target for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Dagger:',
            raw: '18% (+ 30% per 100% bonus attack speed) bonus AD',
            damagetype: 'None',
            values: 18,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '18%',
            post: 'bonus AD',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 100',
                pre: '+ 30% per 100% bonus attack speed',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Dagger:',
            raw: '25 / 31.25 / 37.5 / 43.75 / 50 (+ 19% AP)',
            damagetype: 'None',
            values: [25, 31.25, 37.5, 43.75, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 31.25 / 37.5 / 43.75 / 50',
            children: [
              {
                values: 19,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 19% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'On-Attack/On-Hit Effectiveness:',
            raw: '30 / 32.5 / 35 / 37.5 / 40%',
            values: [30, 32.5, 35, 37.5, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 32.5 / 35 / 37.5 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'An enemy champion within  500 units is required to cast this ability. The target does not have to be  visible to be hit by this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
