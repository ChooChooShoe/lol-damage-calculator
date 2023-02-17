import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Samira';
export const skillsData = ChampionSkillsData['Samira'];

export const Samira = {
  'Daredevil Impulse': {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Samira's damaging basic attacks and abilities against at least one enemy  champion different from the previous damaging hit made against champions generate a stack of Style for 6 seconds, refreshing on subsequent hits and stacking up to 6 times.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Samira Style.gif',
        description:
          'Style: For each stack, Samira gains  3.5% bonus movement speed, up to a maximum of 21%. At maximum stacks, Samira can cast  Inferno Trigger.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Daredevil Impulse.png',
        description:
          "Innate: Samira's basic attacks against targets in  200 range use her blade, becoming  non-projectile. Blade attacks  on-hit,  Blade Whirl,  Wild Rush, and the slash and explosives of  Flair deal 2 − 19 (based on level) (+ 3.5% − 10.5% (based on level) AD) bonus magic damage, increased by 0% − 100% (based on target's missing health).",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Samira's basic attack against an  immobilized target is empowered to have an  uncancellable windup and deal the attack's damage over 6 strikes in 0.5 seconds. If the target is a  monster or is  airborne, the attack also  knocks them up for 0.5 seconds. Samira will  dash into her  attack range of the target if they are nearby, though not through terrain.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The empowered attack  resets Samira's basic attack timer, is affected by  critical strike modifiers, applies  on-hit effects only once, and cannot occur on the same target more than once every few seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Flair: {
    effects: [
      {
        img: 'Flair.png',
        description:
          'Active: Samira fires a shot in the target direction that deals physical damage to the first enemy hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '0 / 5 / 10 / 15 / 20 (+ 85 / 95 / 105 / 115 / 125% AD)',
            damagetype: 'None',
            values: [0, 5, 10, 15, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0 / 5 / 10 / 15 / 20',
            children: [
              {
                values: [85, 95, 105, 115, 125],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 85 / 95 / 105 / 115 / 125% AD',
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
          'If a targetable enemy is in front of Samira at the time of cast, she will instead slash with her blade in a cone, dealing the same damage to enemies hit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Flair is cast during  Wild Rush, Samira deploys explosives in her wake that detonate upon the end of the dash, dealing the same damage to enemies hit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Flair can  critically strike for (25% +  35%) bonus physical damage and will apply  life steal at 66.6% effectiveness.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Blade Whirl': {
    effects: [
      {
        img: 'Blade Whirl.png',
        description:
          'Active: Samira spins her blade over 0.75 seconds, destroying all hostile non- turret  projectiles within the area for the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Samira slashes twice during Blade Whirl, each one dealing physical damage to all nearby enemies. The first slash occurs immediately and the second one occurs after the duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
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
      {
        img: '',
        description:
          'Samira cannot attack nor cast  Flair during Blade Whirl. Casting  Inferno Trigger will end Blade Whirl early.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Wild Rush': {
    effects: [
      {
        img: 'Wild Rush.png',
        description:
          'Active: Samira  dashes a fixed distance in the direction of the target enemy or enemy  structure, dealing magic damage to enemies she passes through. She also gains  bonus attack speed for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 60 / 70 / 80 / 90 (+ 20% bonus AD)',
            damagetype: 'None',
            values: [50, 60, 70, 80, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Scoring a  takedown against an enemy  champion within 3 seconds of damaging them resets Wild Rush's  cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Flair and  Inferno Trigger can be cast during the dash. Casting  Blade Whirl will buffer it to cast at the end of the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Inferno Trigger': {
    effects: [
      {
        img: 'Samira Rank S.png',
        description:
          'Active: Samira unleashes a torrent of shots for 2.277 seconds, reducing her movement speed by 30% and rapidly shooting at  nearby enemies over 2.013 seconds at sporadic times in 0.2-second intervals each, dealing physical damage with each shot, reduced by 75% against  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Shot:',
            raw: '5 / 10 / 15 / 20 / 25 (+ 50% AD)',
            damagetype: 'None',
            values: [5, 10, 15, 20, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25',
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
            effectType: 'Damage',
            name: 'Minion Damage Per Shot:',
            raw: '1.25 / 2.5 / 3.75 / 5 / 6.25 (+ 12.5% AD)',
            damagetype: 'None',
            values: [1.25, 2.5, 3.75, 5, 6.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 2.5 / 3.75 / 5 / 6.25',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 12.5% AD',
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
          'Each shot can  critically strike for (75% +  35%) bonus physical damage and applies  life steal at 66.6% effectiveness.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Inferno Trigger 2.png',
        description:
          'A nearby  visible enemy is required to cast this ability, and targets do not have to be visible to be shot at.  Style stacks are consumed at the end of the effect.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Samira cannot attack nor cast  Flair and  Blade Whirl during Inferno Trigger, but she can still move. Inferno Trigger will end prematurely by all forms of  cast-inhibiting crowd control as well as  disarm.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Taunt: {
    effects: [
      {
        img: 'Samira_splash_coin.png',
        description:
          "Samira's taunt  prevents her from inputting attack commands and casting non-movement abilities, and she may only interrupt it herself with a movement command. After 3 seconds without interruption, she will toss a  coin in the direction she is facing.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If she has at least  1, the coin deals   1 true damage to the first enemy champion hit and granting them  1 of Samira's gold.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If cast within 1200 units of a  visible enemy champion, Samira will turn to face towards the closest one to perform the animation.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Samira's Taunt can target and hit dead enemy champions, granting them  1 but not triggering other effects.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
