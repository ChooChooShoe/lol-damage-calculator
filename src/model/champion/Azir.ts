import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Azir';
export const skillsData = ChampionSkillsData['Azir'];

export const Azir = {
  "Shurima's Legacy": {
    effects: [
      {
        img: 'false',
        description:
          "Innate: Whenever a  turret outside the enemy team's base is destroyed, a marker is placed above its ruins which can be targeted by Azir.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Shurima's Legacy.png",
        description:
          'Innate - Disc of the Sun: Azir can select a marker to construct the Sun Disc above the ruins after a 0.5-second cast time. The Sun Disc will activate after being assembled over 5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The Sun Disc functions the same as a standard inner turret, gains 15% AP  bonus attack damage, and grants its kill credit to Azir. The Sun Disc's  health decays over 60 seconds and loses  100 armor while Azir is not alive or is too far away.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Azir cannot construct a Sun Disc with the marker while he is unable to cast abilities.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'See Pets for more details about the Sun Disc.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Conquering Sands': {
    effects: [
      {
        img: 'Conquering Sands.png',
        description:
          'Active: Azir orders all Sand Soldiers to dash toward the target location, dealing magic damage to all enemies they pass through and  slowing them by 25% for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 30% AP)',
            damagetype: 'None',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
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
          'Enemies hit by subsequent soldiers take no additional damage and are instead  slowed by an additional 25% per soldier.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Conquering Sands will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Arise!': {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Azir gains  bonus attack speed, doubled for 5 seconds if he summons a third concurrent soldier with Arise!',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '15 / 25 / 35 / 45 / 55%',
            values: [15, 25, 35, 45, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Arise!.png',
        description:
          'Active: Azir summons a Sand Soldier at the target location that is  untargetable, lasts 10 seconds, and grants  sight of its surroundings. The Sand Soldier expires twice as fast while within range of an enemy  turret, and does so instantly if Azir is too far away.Azir periodically stocks a Sand Soldier, up to a maximum of 2.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "When Azir declares a basic attack against an enemy in a soldier's  attack range, the Sand Soldier attacks in his stead, thrusting their spear in the target's direction to deal 50 − 150 (based on level) (+ 55% AP) magic damage to enemies struck in a line. Targets hit beyond the closest take 25 / 50 / 75 / 100% (based on level) damage. Subsequent Sand Soldiers against the same target deal 25% damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Sand Soldiers cannot attack  structures,  wards, nor  traps.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Arise! will cast at max range if cast beyond that. See Pets for more details about Sand Soldiers.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shifting Sands': {
    effects: [
      {
        img: 'Shifting Sands.png',
        description:
          'Active: Azir grants himself a  shield for 1.5 seconds and  dashes to the target Sand Soldier, dealing magic damage to enemies within his path.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Shield Strength:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 60% AP)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
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
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 40% AP)',
            damagetype: 'None',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
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
          'If Azir dashes into an enemy  champion, he stops and gains a charge of  Arise!.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Azir can cast of any of his abilities during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Emperor's Divide": {
    effects: [
      {
        img: "Emperor's Divide.png",
        description:
          'Active: Azir calls forth a phalanx of soldiers from 175 units behind him, catching enemies from up to 325 units behind him and charging forward 575 units in the target direction.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Width:',
            raw: '6 / 6.5 / 7 / 7.5 / 8 soldiers',
            values: [6, 6.5, 7, 7.5, 8],
            user: 'none',
            units: '',
            unitsText: 'soldiers',
            pre: '6 / 6.5 / 7 / 7.5 / 8 soldiers',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies impacted by the charge are dealt magic damage and  knocked away over 1 second to a line 650 units in front of Azir.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '175 / 250 / 325 / 400 / 475 (+ 60% AP)',
            damagetype: 'None',
            values: [175, 250, 325, 400, 475],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 250 / 325 / 400 / 475',
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
          'Upon finishing their charge, the soldiers stand as a wall for 5 seconds, acting as impassible terrain against enemies and granting  sight of their surroundings. Azir and his allies can move through these soldiers.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
