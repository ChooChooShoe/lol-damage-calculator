import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Ornn';
export const skillsData = ChampionSkillsData['Ornn'];

export const Ornn = {
  'Living Forge': {
    effects: [
      {
        img: 'false',
        description:
          'Innate: Ornn increases his  bonus armor,  bonus magic resistance and  bonus health by 10% from all sources, further increased by 4% each time he upgrades a Mythic item into a Masterwork item.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Living Forge.png',
        description:
          'Innate - Living Forge: Ornn can purchase non-consumable items from anywhere on the field by forging them himself, and is also presented a Forge Menu with his recommended items to select to be forged.  Forging takes 4 seconds and the process is  interrupted if Ornn takes damage from enemy  champions or  turrets, disabling Living Forge for a few seconds.  Gold is only expended upon completing the forge.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate - Master Craftsman: When Ornn reaches level 13, the Mythic item he owns or purchases is upgraded for free. Additionally, for each level after 13 (levels 14, 15, 16 and 17, excluding 18), Ornn can upgrade one of an allied champion's Mythic item by selecting them within 600 range. Each Masterwork item has roughly  1000-worth of additional stats.\nMasterwork items:\nAssassin:  Draktharr's Shadowcarver,  Sandshrike's Claw,  Syzygy.\nFighter:  Ceaseless Hunger,  Deicide,  Dreamshatter,  Infinity Force.\nMage:  Caesura,  Eternal Winter,  Eye of Luden,  Icathia's Curse,  Infinite Convergence,  Liandry's Lament,  Upgraded Aeropack,  Vespertide.\nMarksman:  Bloodward,  Typhoon,  Wyrmfallen Sacrifice.\nSupport:  Equinox,  Reliquary of the Golden Dawn,  Seat of Command,  Shurelya's Requiem,  Starcaster.\nTank:  Frozen Fist,  Leviathan,  Primordial Dawn,  The Unspoken Parasite.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate - Temper: Ornn's basic attacks against  Brittle enemies  knock them back a short distance.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Ornn's and allies'  immobilizing effects against enemies afflicted by Brittle will consume the debuff to deal bonus magic damage equal to 10% − 18% (based on Ornn's level) of the target's maximum health, capped at 250 against  monsters, and last 30% longer (if applicable).",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Volcanic Rupture': {
    effects: [
      {
        img: 'Volcanic Rupture.png',
        description:
          'Active: Ornn sends a fissure in the target direction that deals physical damage to enemies hit and  slows them by 40% for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 110% AD)',
            damagetype: 'None',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 110% AD',
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
          'The fissure stops at maximum range or 200 units behind the first enemy champion struck. After 1.125-seconds, a magma pillar then erupts to  knock aside enemies, though not through terrain, and linger as impassible terrain for 4 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'The pillar will not expire while Ornn is  charging.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bellows Breath': {
    effects: [
      {
        img: 'Bellows Breath.png',
        description:
          'Active: Ornn marches in the target direction over 0.75 seconds, gaining  displacement immunity, becoming  unable to act, and reducing his  movement speed by 35% for the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Over the march he belches fire over a cone in front of him, dealing magic damage every 0.15 seconds to enemies hit. The final gout of flame will apply  Brittle for 3 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Total Magic Damage:',
            raw: "12 / 13 / 14 / 15 / 16% of target's maximum health",
            healType: 'OutgoingHeals',
            values: [12, 13, 14, 15, 16],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "12 / 13 / 14 / 15 / 16% of target's maximum health",
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Bellows Breath has a minimum damage threshold, which is also the damage dealt to  minions.  Monsters take modified damage as well.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Total Minimum/Minion Damage:',
            raw: '80 / 130 / 180 / 230 / 280',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
          },
          {
            effectType: 'Unique',
            name: 'Total Monster Damage:',
            raw: '155 / 180 / 205 / 230 / 255',
            values: [155, 180, 205, 230, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '155 / 180 / 205 / 230 / 255',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Searing Charge': {
    effects: [
      {
        img: 'Searing Charge.png',
        description:
          'Active: Ornn  charges in the target direction, dealing physical damage to enemies he passes through and stopping upon colliding with terrain.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 40% bonus armor) (+ 40% bonus magic resistance)',
            damagetype: 'Magic',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 40% bonus armor',
              },
              {
                values: 40,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 40% bonus magic resistance',
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
          'If Ornn collides with terrain during the charge, he creates a shockwave that  knocks up and  stuns nearby enemies for 1.25 seconds and deals the same damage if they were not already hit by the charge.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The shockwave destructs the pillar formed by  Volcanic Rupture and partially destroys terrain created by enemy  champions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Call of the Forge God': {
    effects: [
      {
        img: 'Call of the Forge God.png',
        description:
          'Active: Ornn sounds his horn, summoning a lava elemental at maximum range from the target direction that stampedes towards his casting position at increasing speed. The elemental deals magic damage to enemies it passes through and  slows them for 2 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '125 / 175 / 225 (+ 20% AP)',
            damagetype: 'None',
            values: [125, 175, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 175 / 225',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Call of the Forge God can be recast after 1.25 seconds while the elemental is active.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Call of the Forge God 2.png',
        description:
          'Recast: Ornn  dashes in the target direction, though not through terrain. If he collides with the elemental, he sends it stampeding in the same direction. The elemental deals the same damage to enemies it passes through and  knocks them up and  stuns them for 1 second, reduced to 0.5 seconds after the first enemy  champion hit.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '250 / 350 / 450 (+ 40% AP)',
            damagetype: 'None',
            values: [250, 350, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 350 / 450',
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
          'Each pass applies  Brittle to targets for 3 seconds and can affect enemies only once. The elemental briefly grants  sight around its trajectory as it travels.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
