import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Fiddlesticks';
export const skillsData = ChampionSkillsData['Fiddlesticks'];

export const Fiddlesticks = {
  'A Harmless Scarecrow': {
    effects: [
      {
        img: 'A Harmless Scarecrow.png',
        description:
          'Innate - Scarecrow Effigy: Fiddlesticks begins the game with an exclusive  Scarecrow Effigy, which permanently occupies the trinket slot. Fiddlesticks can pretend to be an Effigy by standing still and not acting nor being acted upon for 2 seconds, during which it adjusts its body into a scarecrow and extends its arm out to expose its lantern.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'A Harmless Scarecrow 2.png',
        description:
          'Innate - A Harmless Scarecrow: From level 6 onward, placing an  Effigy also summons a  Sweeper Drone at the location for 6 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Terrify: {
    effects: [
      {
        img: 'false',
        description:
          'Passive: While Fiddlesticks has been out of combat for at least 2.5 seconds and is not  visible to the enemy team, or is pretending to be an  Effigy, its next damaging ability will additionally  fear targets hit for a duration.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Fear Duration:',
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
      {
        img: 'Terrify.png',
        description:
          'Active: Fiddlesticks launches a crow at the target enemy that deals magic damage and  fears them for a duration. Terrify has a minimum damage threshold and is capped at 400 against  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "6 / 7 / 8 / 9 / 10% (+ 2% per 100 AP) of target's current health",
            healType: 'OutgoingHeals',
            values: [6, 7, 8, 9, 10],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: '6 / 7 / 8 / 9 / 10%',
            post: "of target's current health",
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Minimum Damage:',
            raw: '40 / 60 / 80 / 100 / 120',
            values: [40, 60, 80, 100, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 60 / 80 / 100 / 120',
          },
          {
            effectType: 'Unique',
            name: 'Fear Duration:',
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
      {
        img: '',
        description:
          "Targets feared by Fiddlesticks by any means cannot be affected by it again for a duration equal to Terrify's cooldown. Against these targets, Terrify's  damage and minimum threshold are doubled.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Increased Magic Damage:',
            raw: "12 / 14 / 16 / 18 / 20% (+ 4% per 100 AP) of target's current health",
            healType: 'OutgoingHeals',
            values: [12, 14, 16, 18, 20],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: '12 / 14 / 16 / 18 / 20%',
            post: "of target's current health",
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Increased Minimum Damage:',
            raw: '80 / 120 / 160 / 200 / 240',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Terrify  slows affected targets by 90%.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Bountiful Harvest': {
    effects: [
      {
        img: 'Bountiful Harvest.png',
        description:
          'Active: Fiddlesticks forms a  tether between itself and each nearby enemy over the cast time, then  channels for up to 2 seconds to harvest their souls,  revealing them in the process.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'While Fiddlesticks is channeling, the tethered enemies are dealt magic damage every 0.25 seconds, with the final tick at the end of the channel dealing additional magic damage. Bountiful Harvest deals 135% damage against  monsters and 50% damage against  minions.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 8.75% AP)',
            damagetype: 'None',
            values: [15, 22.5, 30, 37.5, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45',
            children: [
              {
                values: 8.75,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 8.75% AP',
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
          'Fiddlesticks  heals itself for a percentage of the pre-mitigation damage dealt, modified to 45% against monsters and 15% against minions.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Champion Heal Percentage:',
            raw: '25 / 32.5 / 40 / 47.5 / 55%',
            values: [25, 32.5, 40, 47.5, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 32.5 / 40 / 47.5 / 55%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Bountiful Harvest ends if all targets have died or broken their tethers. If the channel was not interrupted, 60% of the  current cooldown is refunded.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'A nearby enemy is required to cast this ability. The target does not have to be  visible to be tethered by this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Reap: {
    effects: [
      {
        img: 'Reap.png',
        description:
          'Active: Fiddlesticks slashes the target location with its scythe, dealing magic damage to enemies within the area and  slowing them for 1.25 seconds.',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Enemies hit in the center of the area are also  silenced for 1.25 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Crowstorm: {
    effects: [
      {
        img: 'Crowstorm.png',
        description:
          'Active: Fiddlesticks  channels for 1.5 seconds, then  blinks to the target location upon completion with a murder of crows flying wildly around it for 5 seconds, dealing magic damage every 0.25 seconds to nearby enemies.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '37.5 / 50 / 62.5 / 75 / 87.5 (+ 12.5% AP)',
            damagetype: 'None',
            values: [37.5, 50, 62.5, 75, 87.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '37.5 / 50 / 62.5 / 75 / 87.5',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12.5% AP',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Crowstorm will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
