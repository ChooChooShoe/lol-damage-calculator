import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Pantheon';
export const skillsData = ChampionSkillsData['Pantheon'];

export const Pantheon = {
  'Mortal Will': {
    effects: [
      {
        img: 'Mortal Will.png',
        description:
          "Innate: Pantheon generates a stack of Mortal Will whenever he lands a basic attack  on-hit or casts an ability, stacking up to 5 times. At 5 stacks, Pantheon's next basic ability consumes the stacks to become empowered with an additional effect.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Pantheon gains maximum stacks of Mortal Will upon starting the game, completing a  Recall channel, and respawning.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Comet Spear': {
    effects: [
      {
        img: 'Comet Spear.png',
        description:
          "Active: Pantheon  charges while being  slowed by 10% for up to 4 seconds to increase Comet Spear's  range after 0.35 seconds of channeling. Comet Spear can be recast within the duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Pantheon hurls his spear in the target direction that deals physical damage to enemies hit,  increased against enemies below 20% of their maximum health but reduced by 50% against enemies beyond the first. Total damage is increased to 105% against  monsters and reduced to 70% against  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 115% bonus AD)',
            damagetype: 'None',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
            children: [
              {
                values: 115,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 115% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Secondary Physical Damage:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 57.5% bonus AD)',
            damagetype: 'None',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 57.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 57.5% bonus AD',
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
          "Releasing the ability within 0.35 seconds causes Pantheon to instead thrust his spear in the target direction, dealing the same physical damage to enemies hit and refunding 60% of Comet Spear's  cooldown. The thrust's damage is not reduced against enemies beyond the first.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the charge is  interrupted or completes without reactivation, Comet Spear is cancelled and the ability is put on full cooldown but refunds  half the mana cost.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Comet Spear 2.png',
        description:
          'Mortal Will: Comet Spear gains 20 − 240 (based on level) (+ 115% bonus AD) bonus physical damage, affected by the previous damage reductions. Consumes the stacks upon recasting.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Shield Vault': {
    effects: [
      {
        img: 'Shield Vault.png',
        description:
          "Active: Pantheon  leaps to the front of the target enemy's location. If the target is within 800 units upon arrival, he deals physical damage and  stuns them for 1 second.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 100% AP)',
            damagetype: 'None',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
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
        img: 'Shield Vault 2.png',
        description:
          'Mortal Will: Pantheon empowers his next basic attack within 4 seconds to have a cast time and strike the target 3 times over a brief period, dealing 40% − 55% (based on level) AD physical damage per hit, up to 120% − 165% (based on level) AD. Each hit is affected by  critical strike modifiers and applies  on-hit effects at 100% effectiveness.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Empowered Shield Vault  resets Pantheon's basic attack timer. Pantheon will attempt to basic attack the target at the end of the leap.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Aegis Assault': {
    effects: [
      {
        img: 'Aegis Assault.png',
        description:
          'Active: Pantheon braces his shield in the target direction and  channels for 1.5 seconds, during which he becomes  invulnerable against non- turret damage dealt by enemies from the target direction. He also continually performs strikes in a cone in front of him, dealing 8.3% AD physical damage every 0.125 seconds to enemies hit, reduced by 50% against  minions and up to 100% AD total physical damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Aegis Assault can be recast after 0.3 seconds, and does so automatically after the duration. Aegis Assault's channel cannot be  interrupted by  crowd control.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Pantheon slams with his shield in a cone in front of him, dealing physical damage to enemies hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 105 / 155 / 205 / 255 (+ 150% bonus AD)',
            damagetype: 'None',
            values: [55, 105, 155, 205, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 105 / 155 / 205 / 255',
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
        img: 'Aegis Assault 2.png',
        description:
          'Mortal Will: After recasting, Pantheon gains  60% bonus movement speed for 1.5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Grand Starfall': {
    effects: [
      {
        img: 'false',
        description: 'Passive: Pantheon gains  armor penetration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Armor Penetration:',
            raw: '10 / 15 / 20 / 25 / 30%',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Grand Starfall.png',
        description:
          'Active: Pantheon  channels for 2 seconds, then leaps high into the air,  vanishing and becoming  immune to crowd control until he reappears. While in the air, Pantheon  channels again for 2.2 seconds and grants  sight around the target location 0.5 seconds into the channel.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "After 0.8 seconds into the channel, Pantheon prepares for landing by hurling his spear to the target location over 0.2 seconds that deals 40 − 190 (based on  Comet Spear's rank) (+ 115% bonus AD) physical damage to enemies near its landing point and  slows them by 50% for 2 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Over the remaining 1.2 seconds, Pantheon crashes down and creates a shockwave alongside himself that travels toward the target location, dealing magic damage to enemies hit, reduced by up to 50% for those hit at the edge of the area. Upon completion of the channel, Pantheon  reappears at the target location and gains full stacks of  Mortal Will.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '300 / 400 / 500 / 600 / 700 (+ 100% AP)',
            damagetype: 'None',
            values: [300, 400, 500, 600, 700],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 400 / 500 / 600 / 700',
            children: [
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
        description:
          'Grand Starfall is put on a  30-second cooldown if the first channel is canceled.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
