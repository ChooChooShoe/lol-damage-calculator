import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Zac';
export const skillsData = ChampionSkillsData['Zac'];

export const Zac = {
  'Cell Division': {
    effects: [
      {
        img: 'false',
        description:
          "Innate - The Secret Weapon: Zac gains increased percentage size equal to 1.5% of his bonus health, capped at 35% increased size at 2333.33 bonus health. Zac's size also reduces based on his missing health, down to 70% total size while at 0% health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate - Goo: Whenever Zac damages at least one enemy with an ability, he sheds a number of chunks of himself to a nearby location, landing towards nearby  visible enemy  champions and lasting for 6 seconds.\n Stretching Strikes: 1 chunk for each strike hit (excluding the collision) on different targets, up to 2\n Unstable Matter: 1 chunk if it hits at least one target\n Elastic Slingshot: 1 chunk for each enemy champion hit\n Let's Bounce!: 1 chunk for each bounce that hits an enemy champion, up to 4",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Both Zac and enemy champions can interact with a chunk by being within 50 units of it: an enemy will destroy it, while Zac will consume it to  heal for 4 / 5 / 6 / 7% (based on  Let's Bounce!'s Rank) of his maximum health.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Cell Division.png',
        description:
          "Innate: Periodically, upon taking  fatal damage, Zac enters  resurrection for 8 / 7 / 6 / 5 / 4 (based on level) seconds and restores 50% of his maximum health, splitting into 4 uncontrollable  Bloblets. Each bloblet has 12% of his maximum health and moves towards Zac's location over the duration. Any damage the bloblets receive, excluding damage dealt in excess of their total health, is also redirected to Zac in  true damage. While in resurrection, Zac is  untargetable and  unable to act, and cannot take damage from sources other than the redirected damage from his bloblets.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After the duration, Zac is revived with 10 - 50% maximum health. Zac will die once all bloblets are killed.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Stretching Strikes': {
    effects: [
      {
        img: 'Stretching Strikes.png',
        description:
          'Active: Zac stretches his left arm in the target direction that catches the first enemy hit, dealing magic damage,  slowing them by 40% for 0.5 seconds, and forming a  tether between Zac and the target for 2 seconds, during which they are  revealed.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "40 / 55 / 70 / 85 / 100 (+ 30% AP) (+ 4% of Zac's maximum health)",
            healType: 'BonusHealth',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
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
                values: 4,
                valuesIsPercent: true,
                user: 'player',
                units: 'maximum_hp',
                unitsText: "of Zac's maximum health",
                pre: "+ 4% of Zac's maximum health",
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
          "While the tether persists, Zac's next basic attack is replaced by a second Stretching Strike, empowering it to have a 0.25-second cast time and gain  25 bonus attack range. This attack cannot  critically strike.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the two Stretching Strikes affect different targets, both are  rooted for 0.5 seconds and receive the same  slow. After a 0.4-second delay, Zac displaces them toward each other over 300-units, though not through terrain.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'If the two targets are near each other, they are instead slammed together through the displacement, dealing the initial magic damage and  knocking them up and  stunning them for 0.25 seconds upon impact. Surrounding enemies are also dealt the initial magic damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Both Stretching Strikes (the cast and the empowered attack)  reset Zac's basic attack timer. Zac is unable to move or attack while his left arm is in flight.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Unstable Matter': {
    effects: [
      {
        img: 'Unstable Matter.png',
        description:
          'Active: Zac explodes to deal magic damage to nearby enemies, capped against  minions and  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "35 / 50 / 65 / 80 / 95 (+ 4 / 5 / 6 / 7 / 8% (+ 3% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: [4, 5, 6, 7, 8],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 4 / 5 / 6 / 7 / 8%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 3,
                    valuesIsPercent: true,
                    user: 'player',
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 3% per 100 AP',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Capped Non-Champion Damage:',
            raw: '235 / 250 / 265 / 280 / 295',
            values: [235, 250, 265, 280, 295],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '235 / 250 / 265 / 280 / 295',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Zac grants  ghosting to monsters hit for 5 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Unstable Matter's  current cooldown is reduced by 1 second whenever Zac collects a  Cell Division chunk.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Elastic Slingshot': {
    effects: [
      {
        img: 'Elastic Slingshot.png',
        description:
          "Active: Zac  charges for up to 4.5 seconds to increase Elastic Slingshot's  range over a cone in the target direction.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Maximum Range Channel Duration:',
            raw: '0.9 / 1 / 1.1 / 1.2 / 1.3',
            values: [0.9, 1, 1.1, 1.2, 1.3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.9 / 1 / 1.1 / 1.2 / 1.3',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Elastic Slingshot can be recast within the duration. If Zac cancels the channel himself, or the charge completes without reactivation, 50% of Elastic Slingshot's  health cost and  cooldown are refunded.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Recast: Zac  leaps to the target location. Upon landing, he deals magic damage to nearby enemies and  knocks them up and  stuns them for 0.5 seconds, increased to 1 second if Elastic Slingshot was charged for more than 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 80% AP)',
            damagetype: 'None',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
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
          'Elastic Slingshot will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  "Let's Bounce!": {
    effects: [
      {
        img: 'false',
        description:
          'Passive: Healing from  Cell Division chunks is increased.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Chunk Healing:',
            raw: '5 / 5.5 / 6 / 6.5 / 7% of his maximum health',
            healType: 'BonusHealth',
            values: [5, 5.5, 6, 6.5, 7],
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'of his maximum health',
            pre: '5 / 5.5 / 6 / 6.5 / 7% of his maximum health',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: "Let's Bounce!.png",
        description:
          'Active: Zac bounces after the cast time, then bounces 3 additional times each second over 3 seconds, during which he also gains  20% − 50% (based on duration) bonus movement speed but becomes unable to declare basic attacks and cast  Stretching Strikes and  Elastic Slingshot.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Each bounce deals magic damage to enemies hit,  knocks them back over 1 second, and  slows them by 20% for the same duration.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '140 / 175 / 210 / 245 / 280 (+ 40% AP)',
            damagetype: 'None',
            values: [140, 175, 210, 245, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '140 / 175 / 210 / 245 / 280',
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
          'An enemy can be hit by multiple bounces, but ones beyond the first deal 50% damage to them and do not apply the  knock back.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '70 / 87.5 / 105 / 122.5 / 140 (+ 20% AP)',
            damagetype: 'None',
            values: [70, 87.5, 105, 122.5, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 87.5 / 105 / 122.5 / 140',
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
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
