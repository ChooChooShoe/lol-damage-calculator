import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Nilah';
export const skillsData = ChampionSkillsData['Nilah'];

export const Nilah = {
  'Joy Unending': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Whenever Nilah kills a  minion, she and the nearest allied  champion gain an additional  50% of the experience they would have lost from sharing.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Nilah Joy Unending.png',
        description:
          'Innate: Whenever a nearby allied champion uses an ability to  heal or  shield either Nilah or themselves, both they and Nilah receive a bonus amount equal to 7.5% of the healing or 15% of the shielding after a 0.5-second delay. Bonus shielding lasts as long as the shield that triggered the effect, up to a maximum duration of 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Formless Blade': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Nilah gains  0% − 33% (based on critical strike chance) armor penetration. Her basic attacks and Formless Blade  heal her for 0% − 20% (based on critical strike chance) of the post-mitigation damage dealt to  champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Nilah Formless Blade.png',
        description:
          'Active: Nilah cracks her whip-blade in a line in the target direction that deals physical damage to enemies hit, increased by 0% − 120% (based on critical strike chance). Formless Blade can hit structures and applies  life steal at 100% effectiveness.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '5 / 10 / 15 / 20 / 25 (+ 90 / 97.5 / 105 / 112.5 / 120% AD)',
            damagetype: 'None',
            values: [5, 10, 15, 20, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25',
            children: [
              {
                values: [90, 97.5, 105, 112.5, 120],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 90 / 97.5 / 105 / 112.5 / 120% AD',
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
          'If Formless Blade is cast during  Slipstream, Nilah leaves behind a wave that is sent towards her location at the end of the dash, dealing the same damage to enemies hit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Formless Blade hits an enemy, Nilah empowers herself for 4 seconds: gaining  125 bonus attack range and  10% − 60% (based on level) bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit. Against secondary non-champion targets, this is reduced to 33% AD for  minions and 10% AD for  monsters, and additionally executes minions left below  20 health.  On-hit effects are applied only to the primary target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Jubilant Veil': {
    effects: [
      {
        img: 'Nilah Jubilant Veil.png',
        description:
          'Active: Nilah envelops herself in mist for 2.25 seconds, during which she becomes  ghosted, gains  bonus movement speed, reduces all incoming magic damage taken by 25%, and  dodges all non- turret basic attacks.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '15 / 17.5 / 20 / 22.5 / 25%',
            values: [15, 17.5, 20, 22.5, 25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17.5 / 20 / 22.5 / 25%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Allied champions she touches will also be enveloped for 1.5 seconds, gaining the same effects.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Slipstream: {
    effects: [
      {
        img: 'Nilah Slipstream.png',
        description:
          'Active: Nilah  dashes a fixed distance in the direction of the target unit, dealing physical damage to enemies she passes through.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 90 / 115 / 140 / 165 (+ 20% AD)',
            damagetype: 'None',
            values: [65, 90, 115, 140, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 90 / 115 / 140 / 165',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20% AD',
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
          'Nilah periodically stocks a Slipstream charge, up to a maximum of 2.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Slipstream  resets Nilah's basic attack timer.  Formless Blade and  Apotheosis can be cast during the dash.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Apotheosis: {
    effects: [
      {
        img: 'Nilah Apotheosis.png',
        description:
          'Active: Nilah whirls her whip-blade over 1 second, dealing physical damage to nearby enemies every 0.25 seconds. She then unleashes a burst that deals physical damage and  pulls them 250 units towards her. Each hit also  slows targets by 10% for 3 seconds, refreshing on subsequent hits.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage per Tick:',
            raw: '15 / 30 / 45 (+ 28% bonus AD)',
            damagetype: 'None',
            values: [15, 30, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 30 / 45',
            children: [
              {
                values: 28,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 28% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '125 / 225 / 325 (+ 120% bonus AD)',
            damagetype: 'None',
            values: [125, 225, 325],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 225 / 325',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Maximum Total Physical Damage:',
            raw: '185 / 345 / 505 (+ 232% bonus AD)',
            damagetype: 'None',
            values: [185, 345, 505],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '185 / 345 / 505',
            children: [
              {
                values: 232,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 232% bonus AD',
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
          'Nilah  heals herself and nearby allied champions for 20% − 50% (based on critical strike chance) of the post-mitigation damage dealt to  champions, reduced to 10% against non-champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Nilah is unable to basic attack and cast her other abilities during Apotheosis, but she is able to move.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
