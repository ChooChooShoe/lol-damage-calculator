import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Senna';
export const skillsData = ChampionSkillsData['Senna'];

export const Senna = {
  'Basic Attack': {
    effects: [
      {
        img: 'Basic Attack.png',
        description:
          'Basic Attack: Senna blasts the target with her relic cannon that uses a  non-projectile beam, dealing 100% AD physical damage and applying  on-hit and on-attack effects.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Senna's basic attacks can  critically strike, but they deal only 「 (160.125% +  32.025%) AD physical damage. 」「 91.5% of the  critical damage champions usually have. 」",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Senna has an attack ratio of 0.3, meaning she only gains「 + 0.3 attack speed per  100% bonus attack speed. 」「 48% of the attack speed she would gain if her attack speed ratio was the same as her base attack speed. 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Additionally, Senna's base attack windup is reduced「 to 31.25% − 21.875% (based on level), 」「 by 0% − 30% (based on level), 」but is only reduced by 60% of the expected value given attack speed bonuses.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Absolution: {
    effects: [
      {
        img: 'Absolution.png',
        description:
          "Innate - Weakened Soul: Senna's basic attacks  on-hit and damaging abilities on enemy champions apply a stack of Mist for 4 seconds, modified to 0.75 seconds if Senna starts winding up a basic attack on them. Subsequent hits will collect Mist and deal bonus physical damage equal to 1% − 10% (based on level) of target's current health, rendering the target immune to further Mist applications for a few seconds. This damage applies  life steal at 100% effectiveness.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'MistWraithSquare.png',
        description:
          'Enemies that die near Senna may spawn a Mist Wraith from their corpse. A Mist Wraith lasts 8 seconds and Senna can basic attack or hit it with  Piercing Darkness or  Dawning Shadow to kill them instantly, granting her  8 and collecting their Mist.\nEnemy  champions and large  monsters will spawn a Mist Wraith.\nEpic  monsters will spawn 2 Mist Wraiths.\n Minions and lesser  monsters that Senna kills have a 8.3% chance to spawn a Mist Wraith.\nLarge  minions that Senna does not kill will spawn a Mist Wraith, while lesser  minions and lesser  monsters that Senna does not kill have a 28% chance to spawn.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Mist: For each stack of Mist, Senna gains  0.75 bonus attack damage. For every 20 stacks, she also gains  20 bonus attack range and  10% critical strike chance, capped at 100% critical strike chance. Additionally, 35% of the generated excess critical strike chance is converted into  life steal.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Absolution 2.png',
        description:
          "Innate - Relic Cannon: Senna's basic attacks  on-hit deal 20% AD bonus physical damage and grant her 10 / 15 / 20% (based on level) of the target's movement speed as  bonus movement speed for 0.5 seconds. This damage applies  life steal at 100% effectiveness.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Piercing Darkness': {
    effects: [
      {
        img: 'Piercing Darkness.png',
        description:
          'Active: Senna fires a spectral laser in the direction of the target unit,  healing herself and allied  champions hit, and dealing physical damage to enemies hit in a thinner line. Enemies hit are  slowed by 15% (+ 10% per 100 bonus AD) (+ 6% per 100 AP) for a duration. The damage against champions applies  life steal at 100% effectiveness.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Healing:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 30% bonus AD) (+ 40% AP) (+ 1.6 per 1 Lethality)',
            damagetype: 'None',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
              },
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: 1.6,
                user: 'none',
                units: '',
                unitsText: 'per 1 Lethality',
                pre: '+ 1.6 per 1 Lethality',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '30 / 65 / 100 / 135 / 170 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [30, 65, 100, 135, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 65 / 100 / 135 / 170',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Upon being hit, enemy  turrets,  wards, jungle plants,  Mist Wraiths and any other attack-interactive units are considered basic attacked once, while  champions and  turrets* are applied  on-hit effects at 100% effectiveness.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Piercing Darkness'   current cooldown is reduced by 1 second  on-hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Last Embrace': {
    effects: [
      {
        img: 'Last Embrace.png',
        description:
          'Active: Senna throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and attaches to them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 70% bonus AD)',
            damagetype: 'None',
            values: [70, 115, 160, 205, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 70% bonus AD',
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
          'After the duration or when the target dies, the Black Mist spreads out of the target,  rooting them and surrounding enemies for a few seconds.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Curse of the Black Mist': {
    effects: [
      {
        img: 'Curse of the Black Mist.png',
        description:
          'Active: Senna surrounds herself with an aura of mist and gains  camouflage for a duration. If Senna breaks the camouflage, she regains it after 1.75 seconds without performing actions that break stealth.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Effect Duration:',
            raw: '6 / 6.5 / 7 / 7.5 / 8',
            values: [6, 6.5, 7, 7.5, 8],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 6.5 / 7 / 7.5 / 8',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Allied champions who enter the mist gain Wraith Form for a duration equal to the remaining duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Curse of the Black Mist 2.png',
        description:
          "Wraith Form: Gain  camouflage. Enemies will have  obscured vision of camouflaged Wraiths moving outside of the mist. Wraith Form can be regained if lost by breaking the camouflage after 1.75 seconds without performing actions that break stealth. Wraith Form ends immediately upon Senna's  death.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Senna and allies camouflaged by Curse of the Black Mist also gain  20% (+ 5% per 100 AP) bonus movement speed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dawning Shadow': {
    effects: [
      {
        img: 'Dawning Shadow.png',
        description:
          'Active: Senna fires two waves of spectral light in the target direction, granting  sight of the area briefly along the path. The center wave deals physical damage to enemy  champions hit and  reveals them for 3 seconds. It also collects  Mist Wraiths it hits.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '250 / 312.5 / 375 / 437.5 / 500 (+ 100% bonus AD) (+ 70% AP)',
            damagetype: 'None',
            values: [250, 312.5, 375, 437.5, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 312.5 / 375 / 437.5 / 500',
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
        img: 'Dawning Shadow 2.png',
        description:
          'The broad wave grants a  shield to Senna and allied champions hit for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 40% AP)(+ 1.5 per  Mist collected)',
            damagetype: 'None',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: 1.5,
                user: 'none',
                units: '',
                unitsText: 'per  Mist collected',
                pre: '+ 1.5 per  Mist collected',
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
