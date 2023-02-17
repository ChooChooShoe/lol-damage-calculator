import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Graves';
export const skillsData = ChampionSkillsData['Graves'];

export const Graves = {
  'New Destiny': {
    effects: [
      {
        img: 'New Destiny.png',
        description:
          "Innate - Double Barrel: Graves' basic attacks consume ammunition within 2 shells. He will reload over a few seconds immediately after expending all shells or withholding leftover shells for a while. The reload time is reduced by Graves' level and  bonus attack speed, and can be interrupted by declaring an attack or casting an ability.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate - 12-Gauge: Graves' basic attack sprays 4 pellets in a cone, each colliding with the first enemy unit or structure in their path, dealing 70% − 100.01% (based on level) AD physical damage plus「 23.31% − 33.3% (based on level) AD damage 」「 about one-third of the damage 」for each subsequent pellet hitting the same target, up to 139.93% − 199.92% (based on level) AD physical damage against a single target. Pellets deal 25% reduced damage against structures.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Critical strikes spray 6 pellets over a 25% wider cone, with each pellet dealing (20% +  9.33345%) bonus physical damage, resulting in「  59.98% (+ 12.44%) bonus damage to attacks where all pellets hit. 」「 223.97% − 319.98% (based on level) (+17.42% − 24.88% (based on level)) AD physical damage if all pellets hit. 」',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Pellets apply  life steal at 100% effectiveness. Only the first pellet to hit each enemy applies on-hit effects.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Innate - Buckshot: Non-champion units hit by more than one pellet are  knocked back, though not through terrain.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'End of the Line': {
    effects: [
      {
        img: 'End of the Line.png',
        description:
          'Active: Graves fires a round in the target direction that deals physical damage to enemies it passes through and leaves behind a powder trail.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '45 / 60 / 75 / 90 / 105 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [45, 60, 75, 90, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 60 / 75 / 90 / 105',
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
          'After 2 seconds, or 0.231 seconds upon colliding with terrain, the round detonates to deal physical damage to enemies within a wide perpendicular area and in a reverse wave along the powder trail.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '85 / 120 / 155 / 190 / 225 (+ 40 / 70 / 100 / 130 / 160% bonus AD)',
            damagetype: 'None',
            values: [85, 120, 155, 190, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '85 / 120 / 155 / 190 / 225',
            children: [
              {
                values: [40, 70, 100, 130, 160],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40 / 70 / 100 / 130 / 160% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Smoke Screen': {
    effects: [
      {
        img: 'Smoke Screen.png',
        description:
          'Active: Graves fires a smoke canister at the target location that upon impact deals magic damage to enemies within the area and  slows them by 50% for 0.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 110 / 160 / 210 / 260 (+ 60% AP)',
            damagetype: 'None',
            values: [60, 110, 160, 210, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210 / 260',
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
        img: 'Smoke Screen 2.png',
        description:
          'The canister creates a cloud of smoke for 4 seconds that applies  nearsight of outside the area to all enemies within every 0.25 seconds, reducing their  sight radius relative to the center.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Quickdraw: {
    effects: [
      {
        img: 'Quickdraw.png',
        description:
          'Active: Graves  dashes to the target location, reloading one shell while generating a stack of True Grit for 4 seconds, stacking up to 8 times. Dashing towards an enemy  champion generates 2 stacks of True Grit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Quickdraw's  current cooldown is reduced by 0.5 seconds for every pellet impacting an enemy.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'True Grit: For each stack, Graves gains  bonus armor. Subsequent casts of Quickdraw and attacks versus non- minions will refresh the duration of True Grit.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: '4 / 7 / 10 / 13 / 16',
            values: [4, 7, 10, 13, 16],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 7 / 10 / 13 / 16',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Quickdraw  resets Graves' basic attack timer. If Graves dashes while reloading, he can cast any of his abilities during the dash.(bug) Quickdraw will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Collateral Damage': {
    effects: [
      {
        img: 'Collateral Damage.png',
        description:
          'Active: Graves fires an explosive shell in the target direction that deals physical damage to enemies hit and causes him to  recoil 300 units in the opposite direction.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '275 / 350 / 425 / 500 / 575 (+ 150% bonus AD)',
            damagetype: 'None',
            values: [275, 350, 425, 500, 575],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '275 / 350 / 425 / 500 / 575',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 150% bonus AD',
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
          'Upon hitting an enemy  champion or reaching the end of its range, the shell explodes in a cone to deal 80% damage to additional enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '220 / 280 / 340 / 400 / 460 (+ 120% bonus AD)',
            damagetype: 'None',
            values: [220, 280, 340, 400, 460],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '220 / 280 / 340 / 400 / 460',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
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
