import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Lucian';
export const skillsData = ChampionSkillsData['Lucian'];

export const Lucian = {
  Lightslinger: {
    effects: [
      {
        img: 'Lightslinger.png',
        description:
          "Innate: After casting an ability, Lucian's next basic attack within 3.5 seconds fires an additional shot on-attack after 0.25 seconds, which deals 50 / 55 / 60% (based on level) AD physical damage, increased to 100% AD against  minions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The second shot applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "If Lucian's primary target is killed before the second shot can go off, he automatically shoots another enemy in range.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Innate - Vigilance: Whenever Lucian is  healed,  shielded or granted a buff by an ally, his next two shots within 6 seconds are empowered to deal 14 (+ 20% AD) bonus magic damage  on-hit. The empowered shots can stack up to 4 times.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Piercing Light': {
    effects: [
      {
        img: 'Piercing Light.png',
        description:
          'Active: Lucian fires a laser in a line in the direction of the target enemy that deals physical damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '95 / 125 / 155 / 185 / 215 (+ 60 / 75 / 90 / 105 / 120% bonus AD)',
            damagetype: 'None',
            values: [95, 125, 155, 185, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '95 / 125 / 155 / 185 / 215',
            children: [
              {
                values: [60, 75, 90, 105, 120],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60 / 75 / 90 / 105 / 120% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Ardent Blaze': {
    effects: [
      {
        img: 'Ardent Blaze.png',
        description:
          'Active: Lucian fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing magic damage to enemies hit and granting  sight of the area for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 110 / 145 / 180 / 215 (+ 90% AP)',
            damagetype: 'None',
            values: [75, 110, 145, 180, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 110 / 145 / 180 / 215',
            children: [
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
        img: 'Ardent Blaze 2.png',
        description: 'Enemies hit are marked for 6 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Ardent Blaze 3.png',
        description:
          'Lucian gains  bonus movement speed for 1 second when he or allied champions damage a marked target. Allied champions triggering this effect grant Lucian  Vigilance.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '60 / 65 / 70 / 75 / 80',
            values: [60, 65, 70, 75, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 65 / 70 / 75 / 80',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Relentless Pursuit': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Relentless Pursuit's  current cooldown is reduced by 1 second for each  Lightslinger shot hit, doubled to 2 seconds against enemy  champions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Relentless Pursuit.png',
        description: 'Active: Lucian  dashes in the target direction.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Relentless Pursuit  resets Lucian's basic attack timer. Lucian can cast any of his abilities during the dash. Relentless Pursuit will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'The Culling': {
    effects: [
      {
        img: 'The Culling.png',
        description:
          'Active: Lucian  channels for up to 3 seconds, rapidly firing up to 22 (+ 1 per 4% critical strike chance) shots in the target direction. Each shot deals physical damage to the first enemy hit, doubled against  minions. The Culling can be recast after 0.75 seconds during the channel, and does so automatically when the channel ends.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Shot:',
            raw: '15 / 30 / 45 (+ 25% AD) (+ 15% AP)',
            damagetype: 'None',
            values: [15, 30, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 30 / 45',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 25% AD',
              },
              {
                values: 15,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minion Damage Per Shot:',
            raw: '30 / 60 / 90 (+ 50% AD) (+ 30% AP)',
            damagetype: 'None',
            values: [30, 60, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90',
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
          'While channeling, Lucian is  ghosted and may still move and cast  Relentless Pursuit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Recast: Lucian ends The Culling.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
