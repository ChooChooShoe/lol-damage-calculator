import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Pyke';
export const skillsData = ChampionSkillsData['Pyke'];

export const Pyke = {
  'Gift of the Drowned Ones': {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Pyke's  maximum health cannot increase except through growth (per level), instead he gains「  1 bonus attack damage per 14 bonus health. 」「  bonus attack damage equal to 7.143% of bonus health. 」",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Innate: Pyke gains 1 bonus movement speed while in the river.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Gift of the Drowned Ones.png',
        description:
          'Innate: Pyke stores 9% (+ 0.2% per 1 Lethality) of the post-mitigation damage he takes from enemy  champions as grey health on his health bar, increased to 40% (+ 0.4% per 1 Lethality) while there are two or more  visible enemy champions nearby. He can store up to 80 (+ 800% bonus AD) grey health, with an upper cap of 55% of his maximum health.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While Pyke is not  visible to enemies, he rapidly consumes his grey health to  heal for the same amount.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bone Skewer': {
    effects: [
      {
        img: 'Bone Skewer.png',
        description:
          "Active: Pyke  charges while being  slowed by 20% for up to 3 seconds to increase Bone Skewer's  range over the first second of the channel. Bone Skewer can be recast within the duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Pyke hurls his harpoon in the target direction that deals physical damage to the first enemy hit and  pulls them, during which they are also  revealed, then  slows them by 90% for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 60% bonus AD)',
            damagetype: 'None',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
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
          'Releasing the ability within 0.4 seconds causes Pyke to instead thrust his blade in the target direction, dealing the same damage to the closest enemy  champion, or closest enemy otherwise.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If the charge is  interrupted or completes without reactivation, Bone Skewer is cancelled and the ability is put on  full cooldown but refunds  75% of the mana cost. Bone Skewer's mana cost is fully refunded if it hits an enemy champion.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ghostwater Dive': {
    effects: [
      {
        img: 'Ghostwater Dive.png',
        description:
          'Active: Pyke submerges into water for 5 seconds, entering  camouflage and gaining  40% (+ 1.5% per 1 Lethality) bonus movement speed that decays over the duration. Attacking or casting abilities ends Ghostwater Dive immediately.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemy champions within 1500 units of Pyke are alerted of his presence and whether he can execute them with  Death from Below.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Phantom Undertow': {
    effects: [
      {
        img: 'Phantom Undertow.png',
        description:
          'Active: Pyke  dashes in the target direction, leaving behind a Phantom.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After 1 second, the Phantom homes back to Pyke to  stun enemies around it and those it passes through along the way for 1.25 (+ 0.1 per 10 Lethality) seconds. Enemy champions hit also take physical damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '105 / 145 / 185 / 225 / 265 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [105, 145, 185, 225, 265],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '105 / 145 / 185 / 225 / 265',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Death from Below': {
    effects: [
      {
        img: 'Death from Below.png',
        description:
          'Active: Pyke marks the target location with an X before striking it,  executing enemy  champions within the area that are below 250 − 550 (based on level) (+ 80% bonus AD) (+ 1.5 per 1 Lethality)  health. Other enemies hit and enemy champions above the threshold are instead dealt「 50% of the amount as physical damage. 」「 125 − 275 (based on level) (+ 40% bonus AD) (+ 0.75 per 1 Lethality) physical damage. 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Death from Below hits an enemy  champion or at least one is killed inside the X by the execution or an ally, Pyke will  blink to the center of the X. For the latter case Pyke can also recast the ability within 20 seconds at no cost.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Death from Below 2.png',
        description:
          "Each successful execution grants one  Your Cut to the last assisting ally, instead of its natural assist  gold. In addition, Pyke is granted a  Your Cut for each enemy champion killed inside the X by an ally during Death from Below's cast time.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
