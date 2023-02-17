import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Taliyah';
export const skillsData = ChampionSkillsData['Taliyah'];

export const Taliyah = {
  'Rock Surfing': {
    effects: [
      {
        img: 'Rock Surfing.png',
        description:
          'Innate: While near terrain, Taliyah gains  10 / 15 / 25 / 40% (based on level) bonus movement speed, which builds up over 1 second while in range for at least 0.4 seconds, and decays at the same rate once out of range for at least 3 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If Taliyah is casting an ability or enters champion combat, Rock Surfing cannot occur again for a few seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Threaded Volley': {
    effects: [
      {
        img: 'Threaded Volley.png',
        description:
          'Active: Taliyah throws a volley of 5 Stone Shards in the target direction over 1.5 seconds that each shatter upon the first enemy hit, dealing magic damage to nearby enemies and  revealing them for 0.5 seconds. Subsequent hits deal 40% damage.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '45 / 65 / 85 / 105 / 125 (+ 50% AP)',
            damagetype: 'None',
            values: [45, 65, 85, 105, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 65 / 85 / 105 / 125',
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
          'Taliyah can move and cast other abilities while launching Stone Shards, and is unable to basic attack until she launches the third Stone Shard.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Casting Threaded Volley creates a 400-unit area of Worked Ground at Taliyah's cast location that lasts 30 seconds. While on Worked Ground, Threaded Volley's cast consumes the area to become empowered with a new effect, costing  20 mana and having 50% reduced  cooldown, though not below 0.75 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Threaded Volley 2.png',
        description:
          'Empowered Active: Taliyah hurls a Boulder that explodes upon the first enemy hit, dealing  190% damage to them and normal damage to nearby enemies,  slowing all targets hit for 1.5 seconds, and  revealing them for 0.5 seconds.  Monsters hit are also  stunned for 3 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage:',
            raw: '85.5 / 123.5 / 161.5 / 199.5 / 237.5 (+ 95% AP)',
            damagetype: 'None',
            values: [85.5, 123.5, 161.5, 199.5, 237.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '85.5 / 123.5 / 161.5 / 199.5 / 237.5',
            children: [
              {
                values: 95,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 95% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
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
          'Against  monsters, Threaded Volley deals 25 (+ 10% AP) bonus magic damage per Stone Shard, and the Boulder deals 47.5 (+ 19% AP) bonus magic damage against the primary target. This bonus damage is unaffected by the damage modifier from subsequent hits.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Seismic Shove': {
    effects: [
      {
        img: 'Seismic Shove.png',
        description:
          'Active: Taliyah marks the target location and selects a direction. After 0.792 seconds, a ledge erupts from the area that  knocks enemies hit 400 units in the target direction over 1 second.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Unraveled Earth': {
    effects: [
      {
        img: 'Unraveled Earth.png',
        description:
          'Active: Taliyah scatters a field of 22 stones across the ground in the target direction that deals magic damage to enemies hit while they erupt. The stones then remain for 4 seconds and  slow enemies within the area by 20%.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 60% AP)',
            damagetype: 'None',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
            children: [
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
          'Enemies that  dash or are  knocked into a stone will detonate it, dealing magic damage and  stunning them for 2 seconds, which is set to 0.75 seconds for non- monsters after the movement ends.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Detonation Magic Damage:',
            raw: '25 / 45 / 65 / 85 / 105 (+ 30% AP)',
            damagetype: 'None',
            values: [25, 45, 65, 85, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 45 / 65 / 85 / 105',
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
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'An enemy can detonate up to 4 stones, but the damage is reduced by 0% − 75% (based on stones detonated). Unraveled Earth can affect targets only once per cast; the stones will still detonate but not apply their effects.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Maximum Detonation Damage:',
            raw: '62.5 / 112.5 / 162.5 / 212.5 / 262.5 (+ 82.5% AP)',
            damagetype: 'None',
            values: [62.5, 112.5, 162.5, 212.5, 262.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '62.5 / 112.5 / 162.5 / 212.5 / 262.5',
            children: [
              {
                values: 82.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 82.5% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Unraveled Earth deals 150% damage against  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Weaver's Wall": {
    effects: [
      {
        img: "Weaver's Wall.png",
        description:
          'Active: Taliyah summons a torrent of spiraling rocks that cascades in the target direction,  knocking aside champions hit and erecting a wall of terrain in its wake. The wall lasts for 4 seconds after completion, then slowly disintegrates from its starting point.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Taliyah also  channels for 1 second, during which Weaver's Wall can be recast and she  reveals herself.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Weaver's Wall 2.png",
        description:
          'Recast: Upon completing the  channel, Taliyah  surfs on the wall as it emerges,  revealing herself in the process. After 0.75 seconds, she may input a movement command to  jump off the wall to the target location, and automatically does so upon being  immobilized or  polymorphed or reaching maximum range.Once the wall has fully formed, Taliyah can recast to destroy the wall instantly.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Weaver's Wall is placed on a  3-second static cooldown upon dealing  basic or ability damage, or upon taking  champion or  turret damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
