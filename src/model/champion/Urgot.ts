import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Urgot';
export const skillsData = ChampionSkillsData['Urgot'];

export const Urgot = {
  'Echoing Flames': {
    effects: [
      {
        img: 'Echoing Flames.png',
        description:
          "Innate: Urgot's six legs each conceal a shotgun that covers an arc, together forming a full circle of cover around him. Each shotgun can fire once before incurring a unique  cooldown.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Urgot's next basic attack  on-hit within the arc of a shotgun will cause it to fire in a cone, dealing 40% − 100% (based on level) AD (+ 2% − 6% (based on level) of target's maximum health) physical damage to enemies hit, capped at 100 − 360 (based on level) against  monsters.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Corrosive Charge': {
    effects: [
      {
        img: 'Corrosive Charge.png',
        description:
          'Active: Urgot launches a canister at the target location. Upon landing, it explodes after 0.3 seconds to deal physical damage to enemies hit and  slow them for 1.25 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '25 / 70 / 115 / 160 / 205 (+ 70% AD)',
            damagetype: 'None',
            values: [25, 70, 115, 160, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 70 / 115 / 160 / 205',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 70% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '45 / 50 / 55 / 60 / 65%',
            values: [45, 50, 55, 60, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 50 / 55 / 60 / 65%',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Purge: {
    effects: [
      {
        img: 'false',
        description:
          "Passive: Urgot's other abilities mark enemy  champions hit for 5 seconds. Only one enemy can be marked at a time. Additionally, at maximum rank, Purge lasts indefinitely and becomes a toggled ability.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Purge.png',
        description:
          'Active: Urgot equips his machine gun for 4 seconds, granting  ghosting to minions and non-epic monsters around him and autonomously firing at the nearest enemy at a fixed  3.0 attack speed, prioritizing marked enemy champions and refreshing the mark with every attack. While firing, Urgot is able to move and gains 40%  slow resist, but his base movement speed is reduced by 125.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Attacks with Purge deal modified physical damage, with a minimum threshold of 50 against  monsters and  minions, and apply  on-hit and on-attack damage at 50% effectiveness, but they cannot  critically strike. Urgot cannot perform attacks while unable to declare basic attacks.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Modified Physical Damage:',
            raw: '12 (+ 20 / 23.5 / 27 / 30.5 / 34% AD)',
            damagetype: 'None',
            values: 12,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12',
            children: [
              {
                values: [20, 23.5, 27, 30.5, 34],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20 / 23.5 / 27 / 30.5 / 34% AD',
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
          'Purge can be recast after 0.5 seconds within the duration, and does so automatically afterwards.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Purge 2.png',
        description: 'Recast: Urgot ends Purge.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Disdain: {
    effects: [
      {
        img: 'Disdain.png',
        description: 'Active: Urgot grants himself a  shield for 4 seconds.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '55 / 75 / 95 / 115 / 135 (+ 135% bonus AD) (+ 13.5% bonus health)',
            healType: 'BonusHealth',
            values: [55, 75, 95, 115, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 75 / 95 / 115 / 135',
            children: [
              {
                values: 135,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 135% bonus AD',
              },
              {
                values: 13.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 13.5% bonus health',
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
          'After the cast time, Urgot  dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through,  knocking them aside and  stunning them for 1 second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '90 / 120 / 150 / 180 / 210 (+ 100% bonus AD)',
            damagetype: 'None',
            values: [90, 120, 150, 180, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 120 / 150 / 180 / 210',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
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
          'Urgot will stop upon hitting an enemy  champion,  stunning them for 1.5 seconds and, after 0.25 seconds, also  flinging them to the location 100 units behind him, though not through terrain.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'Purge can be cast during the dash.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Fear Beyond Death': {
    effects: [
      {
        img: 'Fear Beyond Death.png',
        description:
          "Active: Urgot fires a chem-drill in the target direction that impales the first enemy champion hit, dealing physical damage and leashing the target for 4 seconds, during which they are  revealed and  slowed by 0% − 75% (based on target's missing health).",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '100 / 162.5 / 225 / 287.5 / 350 (+ 50% bonus AD)',
            damagetype: 'None',
            values: [100, 162.5, 225, 287.5, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 162.5 / 225 / 287.5 / 350',
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
        img: 'Fear Beyond Death 3.png',
        description:
          'Fear Beyond Death can be recast if the leashed target is below  25% of their maximum health, and does so automatically if the chem-drill would kill the target, the ability is cast again while the target was above the threshold and is then brought within it, or the target is within the threshold at the end of the duration.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Fear Beyond Death 2.png',
        description:
          'Recast - Mercy: Urgot launches chains at the leashed target, then  channels for 1.5 seconds once they latch on. During this time, he reels them toward him,  suppressing them,  revealing them, rendering them  untargetable, and preventing them from taking damage from other sources. If the target is near Urgot when the chains connect, they are pushed up to 1000 units away based on their proximity to him. This channel cannot be  interrupted by  crowd control.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Upon completing the channel, the target is   executed. If the execution is successful, he  fears nearby enemies for 1.5 seconds, during which they are  slowed by 75%.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Fear Beyond Death's recast can be used while affected by  cast-inhibiting crowd control.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
