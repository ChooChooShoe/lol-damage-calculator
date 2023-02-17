import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Darius';
export const skillsData = ChampionSkillsData['Darius'];

export const Darius = {
  Hemorrhage: {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Darius'  damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Hemorrhage.png',
        description:
          'Hemorrhage: For each stack, the target is dealt「 13 − 30 (based on level) (+ 30% bonus AD) total physical damage over the duration, 」「 3.25 − 7.5 (based on level) (+ 7.5% bonus AD) physical damage every 1.25 seconds over the duration, 」up to a maximum of「 65 − 150 (based on level) (+ 150% bonus AD) total physical damage over the duration. 」「 16.25 − 37.5 (based on level) (+ 37.5% bonus AD) physical damage with each tick. 」Hemorrhage deals 300% damage against  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Hemorrhage 3.png',
        description:
          'When Darius kills a champion with  Noxian Guillotine, or applies 5 stacks on an enemy  champion, he becomes empowered with Noxian Might for 5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Hemorrhage 2.png',
        description:
          'Noxian Might: Darius gains 30 − 230 (based on level)  bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Decimate: {
    effects: [
      {
        img: 'Decimate.png',
        description:
          'Active: Darius hefts his axe for 0.75 seconds, and then swings it around himself, dealing physical damage to nearby enemies, reduced to 35% against enemies hit by the handle.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 100 / 110 / 120 / 130 / 140% AD)',
            damagetype: 'None',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
            children: [
              {
                values: [100, 110, 120, 130, 140],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100 / 110 / 120 / 130 / 140% AD',
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
          "Against champions and large monsters hit, Darius  heals for  13% − 39% (based on enemies hit by the blade) of his missing health. The handle of Darius'  axe will not heal him nor apply nor refresh  Hemorrhage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Darius is unable to declare basic attacks or cast  Apprehend or  Noxian Guillotine during Decimate.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Crippling Strike': {
    effects: [
      {
        img: 'Crippling Strike.png',
        description:
          'Active: Darius empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  25 bonus range, deal modified physical damage and  slow the target by 90% for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '140 / 145 / 150 / 155 / 160% AD',
            damagetype: 'None',
            values: [140, 145, 150, 155, 160],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '140 / 145 / 150 / 155 / 160% AD',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If this attack kills the target, half of Crippling Strike's  cooldown is reduced and its  mana cost is refunded.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Crippling Strike's total damage is affected by  critical strike modifiers.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Crippling Strike  resets Darius'  basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Apprehend: {
    effects: [
      {
        img: 'false',
        description: 'Passive: Darius gains  armor penetration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Armor Penetration:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Apprehend.png',
        description:
          'Active: Darius sweeps his axe in a cone in the target direction, granting  sight of the area for 1 second while  pulling enemies hit towards him. Upon arrival, they rebound 150 units off of him, remaining  airborne and becoming  slowed by 40% for 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Darius is unable to move or cast  Decimate or  Noxian Guillotine for 0.4 seconds after Apprehend's cast time.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Noxian Guillotine': {
    effects: [
      {
        img: 'Noxian Guillotine.png',
        description:
          'Active: Darius attempts to execute the target enemy  champion,  leaping towards them to deal  true damage, increased by 0% − 100% (based on  Hemorrhage stacks), and granting  sight of the area around them for 2.5 seconds from the start of the cast time.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'True Damage:',
            raw: '125 / 187.5 / 250 / 312.5 / 375 (+ 75% bonus AD)',
            damagetype: 'None',
            values: [125, 187.5, 250, 312.5, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 187.5 / 250 / 312.5 / 375',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
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
          'If the target dies within 0.15 seconds after being hit by Noxian Guillotine, Darius  fears nearby  minions and  monsters for 3 seconds, during which they are gradually  slowed by up to 99% over the duration. He can also recast the ability within 20 seconds at no cost, which refreshes on further executions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'At rank 3, Noxian Guillotine has no  mana cost and recast timer.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Darius is unable to cast  Decimate or  Apprehend for 0.25 seconds after Noxian Guillotine's cast time.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
