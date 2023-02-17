import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Fiora';
export const skillsData = ChampionSkillsData['Fiora'];

export const Fiora = {
  "Duelist's Dance": {
    effects: [
      {
        img: "Duelist's Dance.png",
        description:
          'Innate: Fiora identifies the Vitals of nearby  visible enemy champions, marked as an arc around them in North-, East-, South- or Westward direction. Vitals take 1.75 seconds to become targetable and linger for 13.25 seconds afterwards while Fiora remains near the target, otherwise the Vital will disappear. After a Vital ends, Fiora identifies a new one on her target.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: "Duelist's Dance 2.png",
        description:
          "Dealing damage in the direction of a Vital will trigger it to deal  bonus true damage equal to 3% (+ 4% per 100 bonus AD) of target's maximum health,  heal Fiora for 35 − 100 (based on level), and grant her 20 / 30 / 40 / 50% (based on  Grand Challenge's Rank)  bonus movement speed that decays over 1.5 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Lunge: {
    effects: [
      {
        img: 'Lunge.png',
        description:
          "Active: Fiora  dashes in the target direction, then stabs a nearby enemy. Lunge can hit structures and  wards. Stabbing a target reduces Lunge's  cooldown by 50%.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The stab deals physical damage and applies  on-hit effects at 100% effectiveness.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 80 / 90 / 100 / 110 (+ 90 / 95 / 100 / 105 / 110% bonus AD)',
            damagetype: 'None',
            values: [70, 80, 90, 100, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 80 / 90 / 100 / 110',
            children: [
              {
                values: [90, 95, 100, 105, 110],
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90 / 95 / 100 / 105 / 110% bonus AD',
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
          'Fiora can cast any of her abilities during the dash. The target does not have to be  visible to be hit by this ability.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Riposte: {
    effects: [
      {
        img: 'Riposte.png',
        description:
          'Active: Fiora enters a defensive stance for 0.75 seconds, becoming  unable to act, preventing all incoming non- turret damage, and gaining debuff immunity and  crowd control immunity.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Additionally, over the first 0.6 seconds of the duration, Fiora poises to strike, after which she sends a shock with her sword in a line in the target direction, dealing magic damage to all enemies hit until colliding with an enemy champion.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '110 / 150 / 190 / 230 / 270 (+ 100% AP)',
            damagetype: 'None',
            values: [110, 150, 190, 230, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '110 / 150 / 190 / 230 / 270',
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
          'The enemy champion struck is also  slowed and  crippled by 50% for 2 seconds. If Riposte negates at least one hostile  immobilizing effect, Fiora  stuns the target for the same duration instead.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Bladework: {
    effects: [
      {
        img: 'Bladework.png',
        description:
          'Active: Fiora empowers her next two basic attacks on-attack within 4 seconds to gain  25 bonus range and  bonus attack speed.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '50 / 60 / 70 / 80 / 90%',
            values: [50, 60, 70, 80, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The first attack  slows the target by 30% for 1 second but cannot  critically strike. The second attack will  critically strike for  modified critical damage, including to  structures.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Critical damage:',
            raw: '160 / 170 / 180 / 190 / 200%',
            values: [160, 170, 180, 190, 200],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '160 / 170 / 180 / 190 / 200%',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: "Bladework  resets Fiora's basic attack timer.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Grand Challenge': {
    effects: [
      {
        img: 'false',
        description:
          "Passive:  Duelist's Dance's  bonus movement speed is increased.",
        leveling: [
          {
            effectType: 'Unique',
            name: 'Additional Bonus Movement Speed:',
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
        img: 'Grand Challenge.png',
        description:
          "Active: Fiora challenges the target enemy champion for 8 seconds, highlighting all four of their Vitals after a 0.5-second delay. While in effect,  Duelist's Dance does not identify new Vitals on Fiora's target.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "While near the target, Fiora gains  Duelist's Dance's  bonus movement speed.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Grand Challenge 2.png',
        description:
          'If Fiora triggers at least one Vital before the target  dies, or triggers all four, she creates a  Victory Zone at their location for 2 − 5 (based on Vitals hit) seconds, which  heals Fiora and all allies within the area every second.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Heal per Tick:',
            raw: '75 / 87.5 / 100 / 112.5 / 125 (+ 60% bonus AD)',
            damagetype: 'None',
            values: [75, 87.5, 100, 112.5, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 87.5 / 100 / 112.5 / 125',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
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
          "Unlike  Duelist's Dance, the Vitals will continue to linger even if Fiora is not nearby.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
