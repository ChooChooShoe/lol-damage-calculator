import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = "K'Sante";
export const skillsData = ChampionSkillsData["K'Sante"];

export const KSante = {
  'Dauntless Instinct': {
    effects: [
      {
        img: 'Dauntless Instinct.png',
        description:
          "Innate: K'Sante's abilities mark enemies hit for 4 seconds. His basic attacks against marked enemies are empowered to gain  25 bonus range and consume the mark on-hit, dealing 5 − 20 (based on level) (+ 1 / 1.33 / 1.66 / 2% (based on level) of target's maximum health) bonus physical damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "All Out Bonus: Both the attack's damage and the mark damage are increased by 35% (+ 20% per 100 bonus armor) (+ 20% per 100 bonus magic resistance). The bonus damage dealt by consuming a mark is converted to  true damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ntofo Strikes': {
    effects: [
      {
        img: "K'Sante Ntofo Strikes.png",
        description:
          "Active: K'Sante slams his ntofo down in the target direction that deals physical damage to enemies hit and  slows them by 80% for 0.5 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 40% AD) (+ 30% bonus armor) (+ 30% bonus magic resistance)',
            damagetype: 'Magic',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 30% bonus armor',
              },
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 30% bonus magic resistance',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: "K'Sante Ntofo Strikes 2.png",
        description:
          "If this hits at least one enemy, K'Sante generates a stack for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next Ntofo Strikes consumes them all to become empowered with a new effect.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "K'Sante Ntofo Strikes 3.png",
        description:
          "Empowered Active: K'Sante fires a shockwave in the target direction that applies the same effects to enemies hit, but also  pulls them towards him over 0.65 seconds and  stuns them for 1 second.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "All Out Bonus: Ntofo Strikes's  cooldown is reduced by 1 second, up to a minimum of 1.33 seconds, but it will no longer slow all targets hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Ntofo Strikes partially  resets K'Sante's basic attack timer. While  All Out, it fully resets the timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Path Maker': {
    effects: [
      {
        img: 'Path Maker.png',
        description:
          "Active: K'Sante  charges for up to 1 second, during which he increases Path Maker's range, damage, and  stun duration over the first 0.85 seconds of the channel. During this time, he gains  displacement immunity and 25% (+ 10% per 100 bonus armor) (+ 10% per 100 bonus magic resistance) (+ 1% per 100 bonus health) damage reduction.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Path Maker can be recast within the duration, and does so automatically afterwards. Path Maker's charge cannot be  interrupted by  crowd control.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Recast: K'Sante  dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through,  carrying them alongside him, and  stunning them for a duration. This damage is capped at 50 − 475 (based on level) against  monsters.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Minimum Physical Damage:',
            raw: "2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
            healType: 'OutgoingHeals',
            values: [2, 2.25, 2.5, 2.75, 3],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
          },
          {
            effectType: 'Unique',
            name: 'Minimum Stun Duration:',
            raw: '0.3 / 0.35 / 0.4 / 0.45 / 0.5',
            values: [0.3, 0.35, 0.4, 0.45, 0.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.3 / 0.35 / 0.4 / 0.45 / 0.5',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "All Out Bonus: Path Maker no longer applies its  knock back and  stun, but it deals bonus physical damage and its damage reduction is increased to 30% (+ 12% per 100 bonus armor) (+ 12% per 100 bonus magic resistance) (+ 1.2% per 100 bonus health), and has twice the charge speed and dash speed. Upon entering All Out, Path Maker's  cooldown is refreshed.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Bonus Physical Damage:',
            raw: '25 / 35 / 45 / 55 / 65 (+ 50% AD)',
            damagetype: 'None',
            values: [25, 35, 45, 55, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Minimum Total Physical Damage:',
            raw: "25 / 35 / 45 / 55 / 65 (+ 50% AD) (+ 2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [25, 35, 45, 55, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
              {
                values: [2, 2.25, 2.5, 2.75, 3],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
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
          "Ntofo Strikes and  All Out can be cast during the dash. Path Maker's recast can be used while affected by  cast-inhibiting crowd control.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Footwork: {
    effects: [
      {
        img: 'Footwork.png',
        description:
          "Active: K'Sante  dashes to the target location, though not through terrain, and grants himself a  shield for 2 seconds. Footwork can be cast on allies to dash to them at an increased range and speed. If the ally is a  champion upon arrival, they receive the  shield as well.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '45 / 65 / 85 / 105 / 125 (+ 15% bonus health)',
            healType: 'BonusHealth',
            values: [45, 65, 85, 105, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 65 / 85 / 105 / 125',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 15% bonus health',
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
          "All Out Bonus: Footwork's dash speed and location range are increased, and it can dash through terrain.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Footwork partially  resets K'Sante's basic attack timer. While  All Out, it fully resets the timer. K'Sante can cast any of his abilities during the dash. Footwork will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'All Out': {
    effects: [
      {
        img: 'All Out.png',
        description:
          "Active: K'Sante  roots the target enemy  champion for 0.5 seconds and gains  displacement immunity over the cast time, then shatters his ntofos to  knock them back, during which they are  revealed, and  blinks to the end location. The target is dealt physical damage near the end of the displacement and is  stunned for 0.25 seconds afterwards.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '35 / 52.5 / 70 / 87.5 / 105 (+ 20% AD)',
            damagetype: 'None',
            values: [35, 52.5, 70, 87.5, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 52.5 / 70 / 87.5 / 105',
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
          "If the target hits terrain during the displacement, they are knocked back through the terrain and dealt the physical damage once they emerge. At the end of the displacement, they remain  airborne for 0.5 seconds and K'Sante strikes them to deal additional physical damage, after which they are  stunned for 0.25 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Additional Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 20% AD)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '185 / 252.5 / 320 / 387.5 / 455 (+ 40% AD)',
            damagetype: 'None',
            values: [185, 252.5, 320, 387.5, 455],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '185 / 252.5 / 320 / 387.5 / 455',
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
          "After K'Sante  blinks, he enters All Out for 20 seconds, and the ability can be recast after 1.5 seconds within the duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "All Out: K'Sante gains a health threshold equal to  55% maximum health which cannot be modified nor exceeded by any means. Upon entering All Out, his current health is reduced to this threshold. Additionally, his  base armor and  base magic resistance are reduced by 85% bonus armor and 85% bonus magic resistance, respectively. In return, he gains  5 (+ 32.5% bonus armor) (+ 32.5% bonus magic resistance) bonus attack damage and  10% (+ 0.75% per 100 bonus health) omnivamp and modifies his basic abilities, which can be cast at no cost.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'All Out 2.png',
        description: "Recast: K'Sante ends All Out early.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
