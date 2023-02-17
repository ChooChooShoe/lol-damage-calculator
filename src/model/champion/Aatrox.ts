import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Aatrox';
export const skillsData = ChampionSkillsData['Aatrox'];

export const Aatrox = {
  'Deathbringer Stance': {
    effects: [
      {
        img: 'Deathbringer Stance.png',
        description:
          "Innate: Periodically, Aatrox empowers his next basic attack to gain  50 bonus range and deal bonus physical damage equal to 4% − 10% (based on level) of the target's maximum health, capped at 100 against  monsters. Aatrox  heals for 80% of the post-mitigation bonus damage dealt, reduced to 25% against  minions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Whenever Aatrox hits at least one enemy  champion or large  monster with a basic attack  on-hit or an ability, the  cooldown of Deathbringer Stance is reduced by 2 seconds, modified to 4 if he hits with the Sweetspot of  The Darkin Blade.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'The Darkin Blade': {
    effects: [
      {
        img: 'false',
        description:
          'Active: Aatrox can activate The Darkin Blade three times before the ability goes on cooldown, with a 1 second static cooldown between casts. If Aatrox does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Aatrox performs a strike with his greatsword for each of the three casts, dealing physical damage to enemies hit within an area. Enemies hit within a Sweetspot of the area take  60% bonus damage and also  knocked up for 0.25 seconds. Each subsequent cast increases The Darkin Blade's damage by 25%.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'The Darkin Blade.png',
        description:
          "First Cast: Aatrox's first strike affects a 625 × 180-unit rectangular area in the target direction, with him centered on the back line and the Sweetspot at the farthest edge.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'First Cast Damage:',
            raw: '10 / 30 / 50 / 70 / 90 (+ 60 / 65 / 70 / 75 / 80% AD)',
            damagetype: 'None',
            values: [10, 30, 50, 70, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 30 / 50 / 70 / 90',
            children: [
              {
                values: [60, 65, 70, 75, 80],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 60 / 65 / 70 / 75 / 80% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'The Darkin Blade 2.png',
        description:
          "Second Cast: Aatrox's second strike affects a trapezoidal area in the target direction, with the Sweetspot at the farthest edge. The hitbox begins 100-units behind Aatrox and extends 475-units in front of him, measuring between 300 and 500-units wide from behind to in front.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Second Cast Damage:',
            raw: '12.5 / 37.5 / 62.5 / 87.5 / 112.5 (+ 75 / 81.25 / 87.5 / 93.75 / 100% AD)',
            damagetype: 'None',
            values: [12.5, 37.5, 62.5, 87.5, 112.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12.5 / 37.5 / 62.5 / 87.5 / 112.5',
            children: [
              {
                values: [75, 81.25, 87.5, 93.75, 100],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 75 / 81.25 / 87.5 / 93.75 / 100% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'The Darkin Blade 3.png',
        description:
          "Third Cast: Aatrox's third strike affects a 300-radius circular area centered on a target location that is 200 units in front of him, with a 180-radius Sweetspot within.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Third Cast Damage:',
            raw: '15 / 45 / 75 / 105 / 135 (+ 90 / 97.5 / 105 / 112.5 / 120% AD)',
            damagetype: 'None',
            values: [15, 45, 75, 105, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 45 / 75 / 105 / 135',
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
    ],
  },
  'Infernal Chains': {
    effects: [
      {
        img: 'Infernal Chains.png',
        description:
          'Active: Aatrox sends a chain in the target direction that deals physical damage to the first enemy hit, doubled against  minions, and  slowing them by 25% for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '30 / 40 / 50 / 60 / 70 (+ 40% AD)',
            damagetype: 'None',
            values: [30, 40, 50, 60, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70',
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
          'If this hits an enemy  champion or large  monster, a  tether is formed between the target and the ground beneath them for 1.5 seconds, during which they are  revealed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the tether is not broken by the end of its duration, the target is dealt the same physical damage again and  pulled to the center of the area.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Damage:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 80% AD)',
            damagetype: 'None',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 80% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Umbral Dash': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Aatrox  heals for a portion of the non- persistent post-mitigation damage he deals against enemy champions, increased during  World Ender.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Healing:',
            raw: '18 / 19.5 / 21 / 22.5 / 24%',
            values: [18, 19.5, 21, 22.5, 24],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '18 / 19.5 / 21 / 22.5 / 24%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Umbral Dash.png',
        description: 'Active: Aatrox  dashes in the target direction.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Umbral Dash  resets Aatrox's basic attack timer and can be cast during his other abilities without cancelling them and vice versa.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'World Ender': {
    effects: [
      {
        img: 'World Ender.png',
        description:
          'Active: Aatrox unleashes his true form for 10 seconds,  fearing nearby enemy  minions and  monsters for 3 seconds, during which they are gradually  slowed by up to 99% over the duration. He also gains  ghosting and  bonus movement speed that decays by 10% of the current bonus every 0.25 seconds, lasting until World Ender has ended.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '50 / 57.5 / 65 / 72.5 / 80%',
            values: [50, 57.5, 65, 72.5, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 57.5 / 65 / 72.5 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Whenever Aatrox scores a champion  takedown, he extends the duration by 5 seconds and becomes unleashed again.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'During World Ender, Aatrox gains  bonus attack damage and 5% increased size, and receives increased  self-healing from all sources.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '20 / 25 / 30 / 35 / 40% AD',
            damagetype: 'None',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '20 / 25 / 30 / 35 / 40% AD',
          },
          {
            effectType: 'Unique',
            name: 'Increased Healing:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
