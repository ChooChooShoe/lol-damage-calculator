import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Rengar';
export const skillsData = ChampionSkillsData['Rengar'];

export const Rengar = {
  'Unseen Predator': {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Rengar generates 1 Ferocity upon casting a basic ability or using  Savagery's first attack. At 4 Ferocity, his next basic ability consumes them all to become empowered with an additional effect and grant him an additional cast along with  30 / 40 / 50% (based on level) bonus movement speed for 1.5 seconds. Reaching 4 Ferocity with  Savagery or  Bola Strike locks them from use for 0.1 seconds before and after casting. All Ferocity is lost after 10 seconds of being out of combat.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Innate: While in  brush, Rengar gains Unseen Predator.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Unseen Predator.png',
        description:
          "Unseen Predator: Rengar's basic attacks have massively increased range and cause him to  leap to the target's location, attacking the target upon arrival and landing closer than his normal  melee range. This generates 1 Ferocity if Rengar had 0 Ferocity at one point. Unseen Predator lingers for 0.35 seconds upon exiting brush but is lost immediately if Rengar casts  Flash or  Hexflash to do so.Rengar can cast any of his abilities during the dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Bonetooth Necklace.png',
        description:
          "Innate - Bonetooth Necklace: Scoring a  takedown against an enemy  champion within 3 seconds of damaging them grants Rengar a Trophy, once per unique champion and up to 5. An additional Trophy is made available through the event The Hunt is On! with the  Head of Kha'Zix. Trophies grant  bonus attack damage equal to 1% − 36% (based on  Trophies) bonus AD.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Savagery: {
    effects: [
      {
        img: 'Savagery.png',
        description:
          'Active: Rengar empowers his next two basic attacks within 3 seconds to gain  40% bonus attack speed. His first attack has an  uncancellable windup, gains  25 bonus range, and deals bonus physical damage, reduced by 40% against structures. This attack will  critically strike, though is not affected by critical strike damage, and its damage is increased by 0% − 66% (based on critical strike chance).',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 60 / 90 / 120 / 150 (+ 0 / 5 / 10 / 15 / 20% AD)',
            damagetype: 'None',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
            children: [
              {
                values: [0, 5, 10, 15, 20],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 0 / 5 / 10 / 15 / 20% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Savagery 2.png',
        description:
          "Ferocity Bonus: Savagery's damage is modified. Rengar gains 50% − 101% (based on level) bonus attack speed for 5 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Empowered Bonus Damage:',
            raw: '30 − 235 (based on level) (+ 40% AD)',
            damagetype: 'None',
            values: [
              30, 42.06, 54.12, 66.18, 78.24, 90.29, 102.35, 114.41, 126.47,
              138.53, 150.59, 162.65, 174.71, 186.76, 198.82, 210.88, 222.94,
              235,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 − 235',
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
        description: "Savagery  resets Rengar's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Battle Roar': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Rengar stores 50% of the post-mitigation damage he has taken in the last 1.5 seconds as grey health on his health bar, increased to 100% of damage taken from  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Battle Roar.png',
        description:
          'Active: Rengar roars, dealing magic damage to nearby enemies and 65 − 130 (based on level) bonus magic damage to  monsters, and consuming his grey health to  heal for the same amount.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 80% AP)',
            damagetype: 'None',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
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
        img: 'Battle Roar 2.png',
        description:
          "Ferocity Bonus: Battle Roar's damage is modified. Rengar  cleanses himself from all  crowd control.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage:',
            raw: '50 − 220 (based on level) (+ 80% AP)',
            damagetype: 'None',
            values: [
              50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
              190, 200, 210, 220,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 − 220',
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
    ],
  },
  'Bola Strike': {
    effects: [
      {
        img: 'Bola Strike.png',
        description:
          'Active: Rengar throws a bola in the target direction that deals physical damage to the first enemy hit and  slows them for 1.75 seconds, as well as  revealing them for 2 seconds and granting  sight of a 150-unit radius around them for the same duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 100 / 145 / 190 / 235 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [55, 100, 145, 190, 235],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 100 / 145 / 190 / 235',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 45 / 60 / 75 / 90%',
            values: [30, 45, 60, 75, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Bola Strike 2.png',
        description:
          "Ferocity Bonus: Bola Strike's damage is modified. The target is  rooted instead of  slowed.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage:',
            raw: '50 − 305 (based on level) (+ 80% bonus AD)',
            damagetype: 'None',
            values: [
              50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245,
              260, 275, 290, 305,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 − 305',
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
    ],
  },
  'Thrill of the Hunt': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Rengar also gains  Unseen Predator while  camouflaged from any source.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Thrill of the Hunt.png',
        description:
          'Active: Rengar prowls for a duration, gaining  bonus movement speed. After a 2-second delay, he also becomes  camouflaged.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '12 / 14 / 16 / 18 / 20',
            values: [12, 14, 16, 18, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 14 / 16 / 18 / 20',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '40 / 50 / 60%',
            values: [40, 50, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Thrill of the Hunt 3.png',
        description:
          'During this time, Rengar will detect the nearest enemy champion in range,  revealing and gaining  sight of a 100-unit radius around them. Enemies detected are  revealed for the remaining full duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Thrill of the Hunt 2.png',
        description:
          "The nearest detected enemy within 1600 range is also marked, alerting all of their allies within 1200 range about Rengar's presence.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Rengar's next basic attack within normal attack range against any enemy or with Unseen Predator to the marked enemy deals 50% AD bonus physical damage and inflicts  armor reduction for 4 seconds.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Armor Reduction:',
            raw: '12 / 15 / 18 / 21 / 24',
            values: [12, 15, 18, 21, 24],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 15 / 18 / 21 / 24',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
