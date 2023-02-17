import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = "Bel'Veth";
export const skillsData = ChampionSkillsData["Bel'Veth"];

export const BelVeth = {
  'Death in Lavender': {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Bel'Veth attacks 36% faster than the median champion and her attack speed cap is modified to 90, but all sources of damage (including  on-hit effects) dealt by her basic attacks are reduced to 75%. Her attack speed does not increase through growth (per level).",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate: Bel'Veth's ability casts each generate 2 stacks of Death in Lavender, lasting for 5 seconds, refreshing on basic attacks and subsequent casts, and stacking up to 6 times. While Bel'Veth has stacks, she becomes  ghosted and gains  25% − 50% (based on level) bonus attack speed. Her basic attacks each consume 1 stack.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Bel'Veth Death in Lavender.png",
        description:
          "Innate: Whenever Bel'Veth scores a  takedown against a  champion,  monster, or  minion within 3 seconds of damaging them, she generates a permanent stack of Lavender. Minions and monsters that are large generate 1 stack, champions and epic monsters generate 2 stacks.\nLavender: For each stack, Bel'Veth gains 0.28% − 1% (based on level) bonus attack speed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Void Surge': {
    effects: [
      {
        img: "Bel'Veth Void Surge.png",
        description:
          "Active: Bel'Veth  dashes in the designated direction, though not through terrain, dealing physical damage to enemies she passes through and applying  on-hit effects at 75% effectiveness to the first target hit. Void Surge can  critically strike for (75% +  35%) bonus physical damage against the first target and deals 120% damage to  monsters and modified damage against  minions.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 110% AD)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 110% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Modified Minion Damage:',
            raw: '60 / 70 / 80 / 90 / 100%',
            values: [60, 70, 80, 90, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 70 / 80 / 90 / 100%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: "Bel'Veth Void Surge 2.png",
        description:
          'Void Surge can be cast only within a cardinal direction that is off cooldown, and incurs a cooldown between casts. Each cardinal direction has a unique  cooldown that is reduced equivalent to 0.25 ability haste per 1% bonus attack speed. These cooldowns reset upon respawning.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Void Surge  resets Bel'Veth's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Above and Below': {
    effects: [
      {
        img: "Bel'Veth Above and Below.png",
        description:
          "Active: Bel'Veth slams her tail down in the target direction that deals magic damage to enemies hit,  knocks them up for 0.75 seconds, and  slows them by 50% for a duration.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 100% bonus AD) (+ 125% AP)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 125,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 125% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If this hits an enemy  champion, it resets  Void Surge's dash  cooldown of the target direction.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Royal Maelstrom': {
    effects: [
      {
        img: "Bel'Veth Royal Maelstrom.png",
        description:
          "Active: Bel'Veth enters a defensive stance for 1.5 seconds, during which she is unable to move, but gains  20% (+ 100% life steal) life steal and 70% damage reduction.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "While active, she rapidly slashes at the nearest enemy with the lowest current health percentage for up to 6 (+ 1 per 33.3% bonus attack speed) times over the duration. Each slash deals physical damage, increased by 0% − 300% (based on target's missing health), and applies  on-hit, on-attack, and spell effects at 6% − 24% (based on target's missing health) effectiveness. Royal Maelstrom deals 150% damage to  monsters, applies  life steal at 100% effectiveness, and cannot  critically strike. Bel'Veth cannot perform slashes while unable to declare basic attacks.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage per hit:',
            raw: '8 / 10 / 12 / 14 / 16 (+ 6% AD)',
            damagetype: 'None',
            values: [8, 10, 12, 14, 16],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 10 / 12 / 14 / 16',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 6% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Monster Damage per hit:',
            raw: '12 / 15 / 18 / 21 / 24 (+ 9% AD)',
            damagetype: 'None',
            values: [12, 15, 18, 21, 24],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 15 / 18 / 21 / 24',
            children: [
              {
                values: 9,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 9% AD',
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
          "Royal Maelstrom can be recast after 0.75 seconds within the duration, and does so automatically after the duration or when Bel'Veth casts an ability.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Recast: Bel'Veth ends Royal Maelstrom.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The target does not have to be  visible to be hit by this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Endless Banquet': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Bel'Veth's basic attacks  on-hit apply a mark to the target for 5 seconds, refreshing on subsequent hits. Every second attack  on-hit against the marked target deals  bonus true damage and generates a stack of Endless Banquet that increases this damage by the same value. This effect stacks infinitely, but is capped at 5 stacks against epic  monsters. The mark and stacks expire upon attacking a new target.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus True Damage:',
            raw: '6 / 7 / 8 / 9 / 10 (+ 12% bonus AD)',
            damagetype: 'None',
            values: [6, 7, 8, 9, 10],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 12% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Maximum Monster Damage:',
            raw: '30 / 35 / 40 / 45 / 50 (+ 60% bonus AD)',
            damagetype: 'None',
            values: [30, 35, 40, 45, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
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
          "Passive: When Bel'Veth scores a  takedown against an enemy  champion or epic  monster while alive, a Void Coral is spawned from their corpse for 15 seconds.  Baron Nashor and pit  Rift Herald spawn an Enhanced Void Coral.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Active: Bel'Veth  dashes to the target Void Coral to consume it over the cast time,  slowing nearby enemies by 25% ramping to 99% over the duration. She then creates an explosion at the location to deal  true damage to enemies within, capped at 1500 versus monsters, and assumes her True Form for 60 seconds.\nBel'Veth consumes all existing Void Corals at once, generating a stack of  Lavender for each one consumed.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'True Damage:',
            raw: "150 / 175 / 200 / 225 / 250 (+ 100% AP) (+ 25% of target's missing health)",
            healType: 'OutgoingHeals',
            values: [150, 175, 200, 225, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 175 / 200 / 225 / 250',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
              {
                values: 25,
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: "+ 25% of target's missing health",
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: "Bel'Veth Endless Banquet.png",
        description:
          "True Form: Bel'Veth evolves into a monster, gaining  bonus health,  bonus movement speed out-of-combat,  50 bonus attack range, as well as increased total attack speed.  Void Surge can  dash through terrain. Consuming a Void Coral refreshes the duration of True Form and  heals Bel'Veth.\nEnhanced Void Coral Bonus: True Form is empowered to last 180 seconds and causes Void Remora to spawn from enemy  minions that die nearby.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Health:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 120% bonus AD) (+ 90% AP)',
            damagetype: 'None',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '25 / 37.5 / 50 / 62.5 / 75',
            values: [25, 37.5, 50, 62.5, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 37.5 / 50 / 62.5 / 75',
          },
          {
            effectType: 'Unique',
            name: 'Increased Total Attack Speed:',
            raw: '10 / 12.5 / 15 / 17.5 / 20%',
            values: [10, 12.5, 15, 17.5, 20],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 12.5 / 15 / 17.5 / 20%',
          },
          {
            effectType: 'Damage',
            name: 'Heal:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 120% bonus AD) (+ 90% AP)',
            damagetype: 'None',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
              {
                values: 90,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
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
          "A nearby Void Coral is required to cast this ability. The  on-hit modifiers from  Death in Lavender,  Void Surge and  Royal Maelstrom affect the bonus true damage applied by Endless Banquet's passive. See Pets for details about Void Remora and Void Corals.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
