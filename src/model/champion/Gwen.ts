import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Gwen';
export const skillsData = ChampionSkillsData['Gwen'];

export const Gwen = {
  'Thousand Cuts': {
    effects: [
      {
        img: 'Thousand Cuts.png',
        description:
          "Innate: Gwen's basic attacks  on-hit, the center of  Snip Snip!, and  Needlework deal bonus magic damage equal to 1% (+ 0.8% per 100 AP) of the target's maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Thousand Cuts is modified based on the target:\n Heals Gwen for 50% of post-mitigation damage dealt against  champions, capped at 10 − 25 (based on level) (+ 6.5% AP) per instance.\nDeals an additional 8 − 30 (based on level) bonus magic damage against  minions that are below 40% health.\nDeals a maximum of 6 (+ 10% AP) magic damage against  monsters.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Snip Snip!': {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Gwen's basic attacks generate a stack of Snippy on-hit for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Snip Snip!.png',
        description:
          'Active: Gwen snips at least twice with her scissors in a cone in the target direction over the cast time, dealing magic damage per snip to all enemies within the area, with the final snip dealing increased damage. The center of each snip applies  Thousand Cuts and converts 50% of the damage to   true damage instead. Snip Snip! deals 75% damage against  minions, and  executes them on the first damage instance if they are below 20% health.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Damage per Snip:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 5% AP)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Final Snip Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 35% AP)',
            damagetype: 'None',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
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
          'If Gwen has any Snippy stacks, she consumes them to snip an additional time for each.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Minimum Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 40% AP)',
            damagetype: 'None',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
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
          {
            effectType: 'Damage',
            name: 'Maximum Damage:',
            raw: '110 / 160 / 210 / 260 / 310 (+ 60% AP)',
            damagetype: 'None',
            values: [110, 160, 210, 260, 310],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '110 / 160 / 210 / 260 / 310',
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
    ],
  },
  'Hallowed Mist': {
    effects: [
      {
        img: 'Hallowed Mist.png',
        description:
          'Active: Gwen summons the Hallowed Mist upon her current location, lasting for 4 seconds. Hallowed Mist can be recast after 0.5 seconds, and does so automatically if Gwen attempts to leave the area.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Hallowed Mist 2.png',
        description:
          'While inside the mist, Gwen gains  bonus armor and  bonus magic resistance and is  untargetable to all enemies (except  turrets and  monsters) outside of the mist.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Bonus Resistances:',
            raw: '17 / 19 / 21 / 23 / 25 (+ 7% AP)',
            damagetype: 'None',
            values: [17, 19, 21, 23, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '17 / 19 / 21 / 23 / 25',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7% AP',
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
          'Recast: Gwen commands the mist to move to her current location.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Gwen negates all attacks by  monsters outside of the mist.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Skip 'n Slash": {
    effects: [
      {
        img: "Skip 'n Slash.png",
        description:
          'Active: Gwen  dashes to the target location, then empowers her basic attacks within the next 4 seconds to deal 15 (+ 20% AP) bonus magic damage  on-hit and gain  bonus attack speed and  75 bonus attack range.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 35 / 50 / 65 / 80%',
            values: [20, 35, 50, 65, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Gwen's first basic attack within the duration refunds a portion of Skip 'n Slash's  cooldown.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Cooldown Refund:',
            raw: '25 / 35 / 45 / 55 / 65%',
            values: [25, 35, 45, 55, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Skip 'n Slash  resets Gwen's basic attack timer, and can be cast during any of her abilities, and vice versa. Skip 'n Slash will cast at max range if cast beyond that.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Needlework: {
    effects: [
      {
        img: 'Gwen Needlework.png',
        description:
          'Active: Gwen launches a needle in the target direction that deals magic damage to enemies hit and  slows them for 1.5 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Needle:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 10% AP)',
            damagetype: 'None',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
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
        img: 'Gwen Needlework 2.png',
        description:
          'Needlework can be recast twice more within 6 seconds of the activation at no additional cost, with a 1-second static cooldown between casts. Each subsequent cast refreshes the duration and increases the number of needles launched by 2. Needle hits beyond the first  slow by a reduced amount against each individual target.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Reduced Slow:',
            raw: '15 / 17.5 / 20 / 22.5 / 25%',
            values: [15, 17.5, 20, 22.5, 25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17.5 / 20 / 22.5 / 25%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: 'Gwen Needlework 3.png',
        description:
          "Recast: Gwen mimics the first cast's effects, while launching three needles on the second cast and five on the third cast.",
        leveling: [
          {
            effectType: 'Heal',
            name: 'Second Cast Total Damage:',
            raw: "105 / 150 / 195 / 240 / 285 (+ 30% AP) (+ 3% (+ 2.4% per 100 AP) of the target's maximum health)",
            healType: 'OutgoingHeals',
            values: [105, 150, 195, 240, 285],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '105 / 150 / 195 / 240 / 285',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
              {
                values: 3,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of the target's maximum health",
                pre: '+ 3%',
                post: "of the target's maximum health",
                children: [
                  {
                    values: 2.4,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 2.4% per 100 AP',
                  },
                ],
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
