import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Jhin';
export const skillsData = ChampionSkillsData['Jhin'];

export const Jhin = {
  'Basic Attack': {
    effects: [
      {
        img: 'Basic Attack.png',
        description:
          'Basic Attack: Jhin fires at the target with  Whisper, dealing 100% AD physical damage and applying  on-hit and on-attack effects.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Jhin's basic attacks can  critically strike. These attacks have slightly increased missile speed, but deal only「 (150.5% +  30.1%) AD physical damage. 」「 86% of the  critical damage champions usually have. 」",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Jhin's attack speed cannot be improved at all except through growth.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Whisper: {
    effects: [
      {
        img: 'Whisper.png',
        description:
          "Innate - Death In 4 Acts: Jhin's basic attacks consume ammunition within 4 rounds. He will reload over 2.5 seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being out of combat and not being affected by  crowd control. The latter reload can be interrupted by declaring an attack or casting an ability.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Jhin's final round attack has an  uncancellable windup versus champions, always  critically strikes, including against  structures, and deals bonus physical damage equal to 15 / 20 / 25% (based on level) of the target's  missing health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Innate - Every Moment Matters: Jhin gains  bonus attack damage equal to 4% − 44% (based on level)「 (+ 0.3% per 1% critical strike chance) (+ 0.25% per 1% bonus attack speed) 」「 (+ 30% critical strike chance) (+ 25% bonus attack speed) 」AD.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally,  critical strikes grant Jhin 10% (+ 0.4% per 1% bonus attack speed)  bonus movement speed for 2 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Dancing Grenade': {
    effects: [
      {
        img: 'Dancing Grenade.png',
        description:
          'Active: Jhin throws a grenade at the target enemy that deals physical damage and can bounce to up to three additional nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '45 / 70 / 95 / 120 / 145 (+ 35 / 42.5 / 50 / 57.5 / 65% AD) (+ 60% AP)',
            damagetype: 'None',
            values: [45, 70, 95, 120, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 70 / 95 / 120 / 145',
            children: [
              {
                values: [35, 42.5, 50, 57.5, 65],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 35 / 42.5 / 50 / 57.5 / 65% AD',
              },
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
          'The damage is increased by 35% of the base damage if the enemy the grenade last bounced off of dies.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Deadly Flourish': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Enemy  champions that trigger a  Lotus Trap to bloom or are damaged by Jhin or allied champions are marked for 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Deadly Flourish.png',
        description:
          'Active: Jhin fires a shot in the target direction that deals physical damage to all enemies in a line until colliding with an enemy champion, reduced by 25% against  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 50% AD)',
            damagetype: 'None',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Hitting a marked champion  roots them for a duration and grants Jhin  Every Moment Matters'  bonus movement speed.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Root Duration:',
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
    ],
  },
  'Captive Audience': {
    effects: [
      {
        img: 'false',
        description:
          'Passive - Beauty in Death: Whenever Jhin kills an enemy champion, he summons a Blooming Lotus Trap on their corpse.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Captive Audience.png',
        description:
          'Active: Jhin places a Lotus Trap at the target location which, upon landing, becomes  stealthed after arming over 1 second, lasting for up to 180 seconds and granting  sight within its radius. The Lotus Trap blooms upon enemy contact, with enemies in the area at the time of its trigger becoming  revealed for 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Jhin periodically stocks a Lotus Trap charge, up to a maximum of 2.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Blooming Lotus Traps  slow enemies within the area by 35% for 2 seconds before exploding, dealing magic damage to enemies. Lotus Traps deal 65% damage against  minions as well as  champions who have been struck by another Lotus Trap in the last 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 80 / 140 / 200 / 260 (+ 120% AD) (+ 100% AP)',
            damagetype: 'None',
            values: [20, 80, 140, 200, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 80 / 140 / 200 / 260',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 120% AD',
              },
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about Lotus Traps.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Curtain Call': {
    effects: [
      {
        img: 'Curtain Call.png',
        description:
          'Active: Jhin  channels for up to 10 seconds, transforming his weapon into a cannon and gaining the ability to recast Curtain Call 4 times within the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Curtain Call 2.png',
        description:
          "Recast: After 0.25 seconds, Jhin fires a round in the target direction that grants  sight around its trajectory for 0.5 seconds and deals physical damage to enemies hit, increased by 0% − 300% (based on target's missing health). The bullet stops upon hitting an enemy champion,  slowing them by 80% for 0.5 seconds and  revealing them for 2 seconds. Each cast has a static cooldown of 1 second.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '50 / 87.5 / 125 / 162.5 / 200 (+ 25% AD)',
            damagetype: 'None',
            values: [50, 87.5, 125, 162.5, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 87.5 / 125 / 162.5 / 200',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 25% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Curtain Call 3.png',
        description:
          'The fourth shot  critically strikes for (100% +  35%) bonus physical damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
