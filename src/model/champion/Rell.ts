import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Rell';
export const skillsData = ChampionSkillsData['Rell'];

export const Rell = {
  'Break the Mold': {
    effects: [
      {
        img: 'Break the Mold.png',
        description:
          "Innate: Rell's basic attacks are empowered to deal 8 − 16 (based on level) bonus magic damage before reducing the target's  armor and  magic resistance by 10% for 4 seconds, refreshing on subsequent hits. Basic attacks against enemy  champions will refresh the duration for all nearby afflicted enemies.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Rell gains bonus armor and bonus magic resistance equal to the sum resistances reduced from all afflicted enemies, and Break the Mold's bonus damage is increased equal to the sum resistances reduced from the target.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Break the Mold will reduce the target's armor and magic resistance by a minimum of 5 − 12 (based on level), or 0.5 / 1.25 / 2 (based on level) versus  minions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Rell's attack windup is reduced「 by 0% − 7.14% (based on level). 」「 to 42% − 39% (based on level). 」",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shattering Strike': {
    effects: [
      {
        img: 'Shattering Strike.png',
        description:
          'Active: Rell thrusts her lance in the target direction that completely destroys damage-mitigating  shields of enemies hit before dealing magic damage, reduced to 50% against enemies beyond the first. The first enemy hit is also afflicted with  Break the Mold.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
          'If Rell is tethered with  Attract and Repel, she and the bound ally  heal for each enemy  champion hit.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Heal Per Champion Hit:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 30% AP) (+ 4% of missing health)',
            healType: 'BonusHealth',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'missing_hp',
                unitsText: 'of missing health',
                pre: '+ 4% of missing health',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ferromancy: Crash Down': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: While Rell is Mounted, she gains  5% − 15% (based on level) bonus movement speed, which is only 20% − 40% (based on level) as effective for 3 seconds when she takes damage from non- minions and is removed for 4 seconds when she becomes  immobilized or  polymorphed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Ferromancy Crash Down.png',
        description:
          'Active: Rell becomes Dismounted and  leaps to the target location over the cast time, granting herself a  shield that lasts until destroyed or casting  Ferromancy: Mount Up. Upon arrival, she deals magic damage to nearby enemies and  knocks them up for 1 second. She will continue  sliding forward another 300 units over 0.5 seconds, though not through terrain, affecting further enemies along her path.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '35 / 60 / 85 / 110 / 135 (+ 12% of maximum health)',
            healType: 'BonusHealth',
            values: [35, 60, 85, 110, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 60 / 85 / 110 / 135',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: 'of maximum health',
                pre: '+ 12% of maximum health',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 60% AP)',
            damagetype: 'None',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
      {
        img: '',
        description:
          "While Rell is Dismounted, she can cast  Ferromancy: Mount Up. Upon completing a  Recall channel or respawning, Rell will automatically revert to Mounted form without casting the ability and reset  Ferromancy: Mount Up's  cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'This ability can be cast only while Rell is Mounted. Rell can cast  Attract and Repel and  Magnet Storm during the dash, and is not considered to be dismounted until after the leap ends. Ferromancy: Crash Down will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ferromancy: Mount Up': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: While Rell is Dismounted, she gains  10% bonus armor and  10% bonus magic resistance, but her base movement speed is modified to 280. She has a movement speed cap of 290 − 400 (based on level).',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Ferromancy Mount Up.png',
        description:
          'Active: Rell becomes Mounted and gains  15% bonus movement speed for 3.5 seconds, increased while moving towards enemy  champions.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Increased Movement Speed:',
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
      {
        img: '',
        description:
          "During this time, Rell empowers her next basic attack to consume the bonus movement speed to have a 0.2-second cast time, gain  100 bonus attack range and cause her to  charge at the target's location. Upon arrival or collision, she deals bonus magic damage,  stuns the target for 1 second, and  flings them 150 units over herself, though not through terrain.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '10 / 25 / 40 / 55 / 70 (+ 40% AP)',
            damagetype: 'None',
            values: [10, 25, 40, 55, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 25 / 40 / 55 / 70',
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
        img: '',
        description:
          'While Rell is Mounted, she can cast  Ferromancy: Crash Down.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Ferromancy: Mount Up  resets Rell's basic attack timer. This ability can be cast only while Rell is Dismounted.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Attract and Repel': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Rell forms a  tether between her and the ally bound by Attract and Repel, and grants the ally 10% of her total armor and 10% of her total magic resistance while they are nearby.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Attract and Repel.png',
        description:
          'Active: Rell binds herself and the target allied champion nearest to the cursor with Attract and Repel. Rell can then recast Attract and Repel while the tether persists.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Rell erupts the tether, dealing magic damage and  stunning enemies between and around both herself and the bound ally for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 30% AP)',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
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
          'Rell can self-target to dispel the current bind if she and her bound ally are not near enemy champions, and if she has not casted an ability nor taken damage from or attacked enemy champions within the last 3 seconds. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.Attract and Repel will incur a  2.75-second cooldown with no cost if Rell binds to an ally and a  1-second cooldown with no cost if she self-targets.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Magnet Storm': {
    effects: [
      {
        img: 'Magnet Storm.png',
        description:
          'Active: Rell erupts with magnetic fury,  pulling nearby enemies inward. She then creates a gravitational field around her for the next 2 seconds that deals magic damage every 0.25 seconds to nearby enemies and  drags them towards her over the duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 13.75% AP)',
            damagetype: 'None',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 13.75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 13.75% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
