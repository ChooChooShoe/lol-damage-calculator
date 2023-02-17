import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Akshan';
export const skillsData = ChampionSkillsData['Akshan'];

export const Akshan = {
  'Dirty Fighting': {
    effects: [
      {
        img: 'Dirty Fighting.png',
        description:
          'Innate: Whenever Akshan uses a basic attack, he fires an additional shot after a delay that deals 50% AD physical damage, increased to 100% AD against  minions. If this shot is cancelled, he gains 20 − 75 (based on level)  ×  (1 + 100% bonus attack speed)  bonus movement speed decaying over 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The additional shot applies  on-hit and on-attack effects at 100% effectiveness and can  critically strike for「 (61.25% +  12.25%) AD ( (122.5% +  24.5%) AD) 」「 70% total  critical damage 」physical damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate: Akshan's basic attacks  on-hit and ability hits apply a stack of Dirty Fighting to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal them 10 − 165 (based on level) bonus magic damage; if the target is a  champion, Akshan will also gain a 40 − 280 (based on level) (+ 35% bonus AD)  shield for 2 seconds. The shield may be gained only once every few seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Avengerang: {
    effects: [
      {
        img: 'Avengerang.png',
        description:
          'Active: Akshan throws a boomerang in the target direction that briefly grants  sight around its trajectory and deals physical damage to enemies hit,  revealing them for 1 second and extending its range each time it hits a target. If this hits an enemy  champion, Akshan gains  40% bonus movement speed that decays over 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '5 / 25 / 45 / 65 / 85 (+ 80% AD)',
            damagetype: 'None',
            values: [5, 25, 45, 65, 85],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 25 / 45 / 65 / 85',
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
      {
        img: '',
        description:
          'Once the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to Akshan and applies the same effects to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '10 / 50 / 90 / 130 / 170 (+ 160% AD)',
            damagetype: 'None',
            values: [10, 50, 90, 130, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 50 / 90 / 130 / 170',
            children: [
              {
                values: 160,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 160% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Avengerang's deals reduced damage against non-champions.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Non-Champion Damage:',
            raw: '40 / 52.5 / 65 / 77.5 / 90%',
            values: [40, 52.5, 65, 77.5, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 52.5 / 65 / 77.5 / 90%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Enemies can be hit only once per pass.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Going Rogue': {
    effects: [
      {
        img: 'Going Rogue 2.png',
        description:
          'Passive: Akshan marks enemy  champions that kill allied champions as Scoundrels for 60 seconds. If Akshan scores a  takedown against a Scoundrel while alive and within 3 seconds of damaging them, he receives an additional  100 and revives all  dead allied champions that they have slain after 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "When Akshan claims a Scoundrel's bounty he removes the marks of all other enemies. Scoundrels refresh their mark duration on subsequent kills, and will have their mark removed when they die by any means. Akshan cannot mark enemies as Scoundrels while they are dead. Allies are revived at their summoning platform.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Going Rogue.png',
        description:
          'Active: Akshan enters  camouflage, which lasts indefinitely while he is near terrain or inside  brush, and for 2 seconds otherwise. During this time. he can see trails leading toward Scoundrels, and while facing them if they are within 5000 units, he gains  bonus mana regeneration equal to 12% of his missing mana as well as  bonus movement speed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '80 / 90 / 100 / 110 / 120',
            values: [80, 90, 100, 110, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 90 / 100 / 110 / 120',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Going Rogue can be recast after 1 second, and does so automatically after its duration. Attacking or casting abilities ends Going Rogue immediately.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Recast: Akshan ends Going Rogue.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Heroic Swing': {
    effects: [
      {
        img: 'false',
        description:
          'Active: Akshan can activate Heroic Swing three times before the ability goes on cooldown, and can use the third cast only after 0.5 seconds of the second cast. Akshan may input a attack or movement command to use the second and third casts.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Heroic Swing.png',
        description:
          "First Cast: Akshan fires a hook in the target direction that embeds in the first terrain hit, and enters preparation for up to 2.125 seconds. Heroic Swing's second cast can be used while the hook is attached. If the hook fails to attach or Akshan is moved or becomes  immobilized,  grounded, or  polymorphed within the duration, the preparation will end prematurely, cancelling Heroic Swing in the process.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Heroic Swing 2.png',
        description:
          'Second Cast: Akshan  swings around the terrain in the target direction, stopping upon colliding with an enemy champion or terrain. While swinging, he rapidly fires at the nearest  visible enemy to deal them physical damage and apply  on-hit effects at 25% effectiveness per shot. Akshan will be  knocked down by any  immobilizing or  polymorphing crowd control during the dash.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage per Shot:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 17.5% bonus AD)  ×  (1 + 0.3 per 100% bonus attack speed)',
            damagetype: 'None',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '×',
            pre: '30 / 45 / 60 / 75 / 90',
            post: '×',
            children: [
              {
                values: 17.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 17.5% bonus AD',
              },
              {
                values: 1,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus attack speed+ 0.3 per 100',
                pre: '1 + 0.3 per 100% bonus attack speed',
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
          'Third Cast: Akshan ends the swing by  jumping to the target location, though not through terrain, and fires one last shot at a nearby  visible enemy.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Scoring an enemy champion  takedown reduces Heroic Swing's  current cooldown to 0.5 seconds. The shots can  critically strike for「 (57.5% +  31.5%) bonus damage 」「 90% total  critical damage 」and apply  life steal at 100% effectiveness.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Comeuppance: {
    effects: [
      {
        img: 'Comeuppance.png',
        description:
          'Active: Akshan locks onto the target enemy champion and begins  channeling for 2.5 seconds,  revealing them as well as  revealing himself. He gradually stores bullets into his weapon over the duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum Bullets Stored:',
            raw: '5 / 5.5 / 6 / 6.5 / 7',
            values: [5, 5.5, 6, 6.5, 7],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 5.5 / 6 / 6.5 / 7',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Comeuppance will recast after the duration, or can recast early after 0.5 seconds. Comeuppance is placed on a  5-second cooldown if the channel is cancelled.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Recast: Akshan fires all stored bullets at the target, each briefly granting  sight around their trajectory and dealing physical damage to the first enemy hit, increased by 0% − 300% (based on target's missing health). The shots can hit structures.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage per Bullet:',
            raw: '20 / 22.5 / 25 / 27.5 / 30 (+ 10% AD) ×  (1 + (0.5 +  0.175) per 100% critical strike chance)',
            damagetype: 'None',
            values: [20, 22.5, 25, 27.5, 30],
            user: 'none',
            units: '',
            unitsText: '×',
            pre: '20 / 22.5 / 25 / 27.5 / 30',
            post: '×',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 10% AD',
              },
              {
                values: 1,
                user: 'player',
                units: 'total_critchance',
                unitsText: 'per 100% critical strike chance',
                pre: '1 +',
                post: 'per 100% critical strike chance',
                children: [
                  {
                    values: 0,
                    user: 'none',
                    units: '',
                    unitsText: '0.175',
                    pre: '0.5 +  0.175',
                  },
                ],
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
          "Each bullet's damage applies  life steal at 100% effectiveness, and  executes  minions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Akshan can move while channeling Comeuppance.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
