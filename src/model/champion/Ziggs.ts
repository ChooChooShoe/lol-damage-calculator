import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Ziggs';
export const skillsData = ChampionSkillsData['Ziggs'];

export const Ziggs = {
  'Short Fuse': {
    effects: [
      {
        img: 'Short Fuse.png',
        description:
          'Innate: Periodically, Ziggs empowers his next basic attack to deal 20 − 160 (based on level) (+ 50% AP) bonus magic damage,「 increased by 150% against structures. 」「 increased to 50 − 400 (based on level) (+ 125% AP) against structures. 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Short Fuse's  cooldown is reduced by 4 / 5 / 6 (based on level) seconds whenever Ziggs casts an ability.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bouncing Bomb': {
    effects: [
      {
        img: 'Bouncing Bomb.png',
        description:
          'Active: Ziggs throws a bomb to the target location that bounces forward up to two times, the distance traveled each time being based on how far it was originally thrown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The bomb explodes upon landing near an enemy, within terrain, or the final bounce, dealing magic damage to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '95 / 145 / 195 / 245 / 295 (+ 65% AP)',
            damagetype: 'None',
            values: [95, 145, 195, 245, 295],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '95 / 145 / 195 / 245 / 295',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
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
          'Bouncing Bomb will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Satchel Charge': {
    effects: [
      {
        img: 'Satchel Charge.png',
        description:
          'Active: Ziggs hurls a charge to the target location, remaining there for 4 seconds and granting  sight of the area. Satchel Charge can be recast within the duration, and does so automatically afterwards. If recast while in flight, the charge will explode immediately upon landing.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Ziggs detonates the charge, causing it to explode to deal magic damage to nearby enemies and  knock them back up to 500 units away from the center of the explosion, though not through terrain. If this hits Ziggs, he will  dash up to 825 units away from the center.',
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
          'Turret Explosion: The explosion also   executes enemy  turrets within that are below a maximum health threshold.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Demolition Threshold:',
            raw: "25 / 27.5 / 30 / 32.5 / 35% of turret's maximum health",
            healType: 'BonusHealth',
            values: [25, 27.5, 30, 32.5, 35],
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: "of turret's maximum health",
            pre: "25 / 27.5 / 30 / 32.5 / 35% of turret's maximum health",
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Ziggs does not  dash if he is  immobilized or  grounded. He can cast any of his abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Hexplosive Minefield': {
    effects: [
      {
        img: 'Hexplosive Minefield.png',
        description:
          'Active: Ziggs scatters a cluster of 11 proximity mines over the target location that grant  sight of the area for 2 seconds, arming after 0.5 seconds and lasting for up to 10 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Each mine within the area explodes upon contact with terrain or an enemy, dealing magic damage and  slowing them for 1.5 seconds, as well as granting  sight of the area around the explosion for 2 seconds. An enemy takes 40% damage from subsequent mines.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Mine:',
            raw: '30 / 70 / 110 / 150 / 190 (+ 30% AP)',
            damagetype: 'None',
            values: [30, 70, 110, 150, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 70 / 110 / 150 / 190',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '10 / 20 / 30 / 40 / 50%',
            values: [10, 20, 30, 40, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 20 / 30 / 40 / 50%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Mega Inferno Bomb': {
    effects: [
      {
        img: 'Mega Inferno Bomb.png',
        description:
          'Active: Ziggs catapults the Mega Inferno Bomb to the target location, granting  sight within a 600 radius around its destination for 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Mega Inferno Bomb Minimap.png',
        description:
          'The bomb explodes upon arrival to deal magic damage to enemies hit, increased by 50% against those in the epicenter.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 73.33% AP)',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
            children: [
              {
                values: 73.33,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 73.33% AP',
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
