import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = "Rek'Sai";
export const skillsData = ChampionSkillsData["Rek'Sai"];

export const RekSai = {
  "Fury of the Xer'Sai": {
    effects: [
      {
        img: "Fury of the Xer'Sai.png",
        description:
          "Innate: Rek'Sai basic attacks and ability hits generate  25 Fury. After 8 seconds of being out of combat, she loses 20 Fury per second.  Prey Seeker will not generate Fury against non- champions.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "When Rek'Sai becomes  Burrowed, she consumes her current Fury over 3 seconds to  heal for up to 20 − 190 (based on level) at 100 Fury, stopping once fully consumed or she reaches  full health. If she starts generating Fury while Burrowed, the consumption occurs after 5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Queen's Wrath": {
    effects: [
      {
        img: "Queen's Wrath.png",
        description:
          "Active: Rek'Sai empowers her next three basic attacks within 5 seconds to have a 0.25-second cast time and deal bonus physical damage to the target and surrounding enemies. The damage to the primary target is affected by  critical strike modifiers.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '21 / 27 / 33 / 39 / 45 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [21, 27, 33, 39, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '21 / 27 / 33 / 39 / 45',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
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
          "Queen's Wrath  resets Rek'Sai's basic attack timer, and ends prematurely if Rek'Sai is  Burrowed for more than 1.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Prey Seeker': {
    effects: [
      {
        img: 'Prey Seeker.png',
        description:
          "Active: Rek'Sai fires a void bolt in the target direction that detonates on the first enemy hit, dealing physical damage to all nearby enemies and  revealing them for 2.5 seconds.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 50% bonus AD) (+ 70% AP)',
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
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Burrow: {
    effects: [
      {
        img: 'Burrow.png',
        description:
          "Active: Rek'Sai becomes Burrowed, reducing her  attack range to 75 and her  sight radius to 250 units while gaining access to her Burrowed abilities. She also becomes  ghosted and gains  15 / 20 / 25 / 30 (based on level) bonus movement speed, as well as Tremor Sense.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Tremor Sense: Rek'Sai and her allies gain  obscured vision of nearby enemy units that are moving every 1.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Once Burrow has been learned, Rek'Sai automatically becomes Burrowed upon completing a  Recall channel or respawning.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Unburrow: {
    effects: [
      {
        img: 'Unburrow.png',
        description:
          "Active: Rek'Sai becomes Un-Burrowed, gaining access to her Un-Burrowed abilities. Additionally, she deals physical damage to nearby enemies and  knocks them aside. The enemy closest to the center is instead  knocked up for 1 second, and cannot be affected by Unburrow again for some time.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 70 / 85 / 100 / 115 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [55, 70, 85, 100, 115],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 70 / 85 / 100 / 115',
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
          "Rek'Sai can also trigger Unburrow by issuing an attack command, applying the  knock up against the target.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Furious Bite': {
    effects: [
      {
        img: 'Furious Bite.png',
        description:
          "Active: Rek'Sai bites the target enemy, dealing physical damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 60 / 65 / 70 / 75 (+ 85% bonus AD)',
            damagetype: 'None',
            values: [55, 60, 65, 70, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 60 / 65 / 70 / 75',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 85% bonus AD',
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
          "At maximum  Fury, Furious Bite's damage is doubled and converted to  true damage.",
        leveling: [
          {
            effectType: 'Damage',
            name: 'True Damage:',
            raw: '110 / 120 / 130 / 140 / 150 (+ 170% bonus AD)',
            damagetype: 'None',
            values: [110, 120, 130, 140, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '110 / 120 / 130 / 140 / 150',
            children: [
              {
                values: 170,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 170% bonus AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Tunnel: {
    effects: [
      {
        img: 'Tunnel.png',
        description:
          "Active: Rek'Sai  dashes in the target direction, leaving behind a Tunnel with two interconnected entrances that lasts up to 10 minutes. The Tunnel can be traversed again when Rek'Sai targets either entrance, shutting down the Tunnel for a few seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Rek'Sai can have up to 8 Tunnels active on the map at once, but deploying beyond the maximum destroys the oldest one. Enemy  champions can destroy a Tunnel by standing on either entrance for 1.5 seconds, granting them  5 upon successfully destroying the Tunnel.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "An Un-Burrowed Rek'Sai will automatically  Burrow before entering the Tunnel and automatically  Unburrow after exiting it. This does not put  Burrow on cooldown nor trigger  Fury of the Xer'Sai, but does trigger other Burrow effects and  Unburrow.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Rek'Sai cannot enter a tunnel while  immobilized,  grounded, or  silenced.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Void Rush': {
    effects: [
      {
        img: 'Void Rush Mark.png',
        description:
          "Passive: Rek'Sai applies Marked as Prey to enemy champions she damages, lasting for 5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Void Rush.png',
        description:
          "Active: Rek'Sai selects the target Marked as Prey, becoming  displacement immune and  unable to act and  vanishing into the ground. After 1.5 seconds, she becomes targetable again and emerges from the ground  Un-Burrowed near the target and  pounces at them, dealing physical damage and  dashing 125 units through them.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "100 / 175 / 250 / 325 / 400 (+ 175% bonus AD) (+ 20 / 22.5 / 25 / 27.5 / 30% of target's missing health)",
            healType: 'OutgoingHeals',
            values: [100, 175, 250, 325, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 175 / 250 / 325 / 400',
            children: [
              {
                values: 175,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 175% bonus AD',
              },
              {
                values: [20, 22.5, 25, 27.5, 30],
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: "+ 20 / 22.5 / 25 / 27.5 / 30% of target's missing health",
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
          "If the target dies or is too far away before Rek'Sai vanishes, Void Rush is canceled with a  10-second cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
