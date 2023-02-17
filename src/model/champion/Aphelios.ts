import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Aphelios';
export const skillsData = ChampionSkillsData['Aphelios'];

export const Aphelios = {
  'The Hitman and the Seer': {
    effects: [
      {
        img: 'The Hitman and the Seer.png',
        description:
          'Innate: Aphelios has access to an arsenal of 5 Moonstone Weapons, created by his sister Alune. He equips two weapons at any one time, one as his main weapon and one as his off-hand. Each weapon has a unique basic attack and passive effect.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Aphelios begins the game with  Calibrum as his main weapon and  Severum in his off-hand, with  Gravitum,  Infernum, and  Crescendum queued in reserve. The queue order can be rearranged based on weapon usage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'The Hitman and the Seer 2.png',
        description:
          'Innate - Moonlight: Weapons spawn with 50 Moonlight for ammunition, which is consumed on basic attacks on-attack or to cast his  abilities. Abilities that cause Aphelios to attack do not cost additional Moonlight on top of their ability cost. Once his main weapon is exhausted of Moonlight, it is moved to the end of the queue and Aphelios assembles his next available weapon over 1 second to equip it from his reserve, with its  ability being placed on a 1.5-second  cooldown before that time. Aphelios cannot cast  Phase during the assembly.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Innate - Weapon Master: Aphelios cannot improve his abilities with skill points. He starts the game with  Phase and gains access to  abilities at level 2 and  Moonlight Vigil at level 6, with the latter improving automatically at levels 11 and 16. Instead, Aphelios may spend his skill points to gain  bonus attack damage,  bonus attack speed or  lethality.',
        leveling: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Damage:',
            raw: '5 / 10 / 15 / 20 / 25 / 30',
            values: [5, 10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25 / 30',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '7.5 / 15 / 22.5 / 30 / 37.5 / 45%',
            values: [7.5, 15, 22.5, 30, 37.5, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7.5 / 15 / 22.5 / 30 / 37.5 / 45%',
          },
          {
            effectType: 'Unique',
            name: 'Lethality:',
            raw: '5.5 / 11 / 16.5 / 22 / 27.5 / 33',
            values: [5.5, 11, 16.5, 22, 27.5, 33],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5.5 / 11 / 16.5 / 22 / 27.5 / 33',
          },
        ],
        hidden: false,
        locked: true,
      },
    ],
  },
  Calibrum: {
    effects: [
      {
        img: 'Calibrum.png',
        description:
          "Aphelios gains  100 bonus attack range while Calibrum is his main weapon. Enemies damaged by Calibrum through an ability are marked for 4.5 seconds,  revealing them for the duration. Aphelios'  next basic attack against a marked target uses the current off-hand weapon and has  1800 range, increased missile speed, and a brief cast time that lasts shorter based on Aphelios'  proximity to the target.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The empowered attack will consume the marks from all targets, dealing 15 (+ 20% bonus AD) bonus physical damage to the main target for each mark consumed. If Calibrum is the current off-hand weapon, the main weapon is used for the attack instead.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Severum: {
    effects: [
      {
        img: 'Severum.png',
        description:
          "Basic attacks with Severum are  non-projectile and have an  uncancellable windup. Severum's attacks  heal Aphelios for 2.5% − 9% (based on level) of the post-mitigation damage dealt, increased to 8.33% − 30% (based on level) for attacks from abilities.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Healing from Severum in excess of Aphelios'   maximum health is converted into a  shield for an amount of up to 10 − 140 (based on level) (+ 6% maximum health), lingering for up to 30 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Gravitum: {
    effects: [
      {
        img: 'Gravitum.png',
        description:
          'Basic attacks with Gravitum  slow enemies by 30% for 3.5 seconds, decaying to 10% after 0.7 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Infernum: {
    effects: [
      {
        img: 'Infernum.png',
        description:
          'Basic attacks with Infernum shoot a fire bolt that upon arrival splits into a cone of 4 lesser bolts behind the target, dealing damage to enemies they pass through. The fire bolt deals 110% AD physical damage to the primary target. Secondary targets hit by any bolt are dealt 82.5 / 110% (based on level) AD physical damage, reduced to 25.3 / 33% (based on level) AD against  minions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Critical strikes also apply to damage dealt to secondary targets and instead spray 6 missiles in a 50% wider cone that deals  critical damage.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Crescendum: {
    effects: [
      {
        img: 'Crescendum.png',
        description:
          'Basic attacks with Crescendum hurl the blade at the target, which lingers for 0.25 seconds before homing back to Aphelios. He is unable to declare basic attacks until he retrieves Crescendum, but the attack timer is reset once caught.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Crescendum 2.png',
        description:
          'Whenever Aphelios casts an ability that would require him to throw Crescendum, he instead fires a spectral Chakram at the target that similarly returns to him. Aphelios accumulates the Chakrams he catches, up to 20, which last for 5 seconds or until Crescendum is depleted of Moonlight. Attacks with Crescendum against  champions will refresh the duration of Chakrams.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Basic attacks with Crescendum are empowered to deal 0% − 138.5% (based on number of Chakrams) AD bonus physical damage and have a 10.67% wind up percentage, decreased to 6.67% when  critically striking. The bonus damage from Chakrams is affected by  critical strike modifiers.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Weapons of the Faithful': {
    effects: [
      {
        img: 'Weapons of the Faithful.png',
        description:
          "The active effect of Aphelios'  varies based on his current main weapon.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'The individual actives do not share a cooldown.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Moonshot: {
    effects: [
      {
        img: 'Moonshot.png',
        description:
          'Active: Aphelios fires a bolt of energy in the target direction that deals 60 − 160 (based on level) (+ 42% − 60% (based on level) bonus AD) (+ 100% AP) physical damage to the first enemy hit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Onslaught: {
    effects: [
      {
        img: 'Onslaught.png',
        description:
          'Active: Aphelios enters an onslaught for 1.75 seconds, gaining  20% (+ 10% per 100 AP) bonus movement speed and automatically performing up to 6 (+ 2 per 100% bonus attack speed) attacks over the duration against the nearest  visible enemy, prioritizing enemy  champions.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Attacks alternate between Severum and his current off-hand weapon, each dealing 10 − 40 (based on level) (+ 20% − 35% (based on level) bonus AD) physical damage, affected by  critical strike modifiers, and applying  on-hit damage at 25% effectiveness.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Aphelios cannot cast  Phase nor  Moonlight Vigil during Onslaught, but he is still able to move. He cannot perform attacks while unable to declare basic attacks.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Binding Eclipse': {
    effects: [
      {
        img: 'Binding Eclipse.png',
        description:
          "Gravitum - Active: Aphelios expunges all enemies with Gravitum's  slow debuff, dealing 50 − 110 (based on level) (+ 26% − 35% (based on level) bonus AD) (+ 70% AP) magic damage and  rooting them for 1 second.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Binding Eclipse also empowers in-flight Gravitum projectiles to instantly affect their targets upon applying the slow successively.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Duskwave: {
    effects: [
      {
        img: 'Duskwave.png',
        description:
          'Active: Aphelios unleashes a wave of energy in a cone in the target direction, dealing 25 − 65 (based on level) (+ 56% − 80% (based on level) bonus AD) (+ 70% AP) physical damage to all enemies hit and locking onto each of them. After 0.25 seconds, Aphelios then fires a volley of attacks at each locked-on target from his current off-hand weapon, dealing 100% AD physical damage and applying  on-hit effects at 100% effectiveness. The damage is affected by  critical strike modifiers. There is no  range limit for locked-on targets.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Sentry: {
    effects: [
      {
        img: 'Sentry.png',
        description:
          'Active: Aphelios deploys a lunar sentry at the target location that arms after 0.35 seconds, lasting for up to 20 seconds, during which it is inactive and  untargetable. The sentry activates if an enemy is within range of it, reducing its duration to 4 seconds and becoming targetable. Sentries have 6 health and take 3 damage per  ranged basic attack and 4 damage per hit by abilities.  Turret attacks destroy sentries instantly.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "The sentry grants  sight of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of Aphelios'  current off-hand weapon, dealing 31 − 100 (based on level) (+ 40% − 60% (based on level) bonus AD) (+ 50% AP) physical damage per hit. The sentry can  critically strike and benefits from both Aphelios'  attack speed and  critical strike chance at 100% effectiveness.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'See Pets for more details about the sentry. Sentry will cast at max range if cast beyond that.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  Phase: {
    effects: [
      {
        img: 'Phase.png',
        description:
          'Active: Aphelios switches between his main weapon and off-hand weapon over 0.25 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Weapon Queue System': {
    effects: [
      {
        img: 'false',
        description:
          'The icon of this ability reflects the next weapon that is in reserve.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'Active: Aphelios receives a text prompt of the weapon Alune will create next.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Moonlight Vigil': {
    effects: [
      {
        img: 'Moonlight Vigil.png',
        description:
          'Active: Aphelios casts forth a lunar spotlight in the target direction that briefly grants  sight of the area along its path and stops upon illuminating an enemy  champion. Alune smites the area centered on the illuminated target, dealing 125 / 175 / 225 (based on level) (+ 20% bonus AD) (+ 100% AP) physical damage to enemy champions struck and locking-on to each target hit, as well as granting  sight of the area for 2 seconds.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "After 0.3 seconds of the illumination, attacks based on Aphelios'  current main weapon will launch from the sky against each locked-on target, dealing 100% AD physical damage and applying  on-hit effects at 100% effectiveness. These attacks can  critically strike for (20% +  35%) AD bonus physical damage. There is no  range limit for locked-on targets.\n Calibrum: Applies an empowered mark that deals 50 / 80 / 110 (based on level) bonus physical damage per mark consumed.\n Severum:  Heals Aphelios for 250 / 350 / 450 (based on level) if at least one enemy champion is hit.\n Gravitum: Increases the initial  slow to 99% and empowers  Binding Eclipse to  root targets affected by the enhanced slow for 1.35 seconds.\n Infernum: Deals 50 / 100 / 150 (based on level) (+ 25% bonus AD) bonus physical damage on the initial blast. Attacks splash in a 400 radius instead of a cone, dealing「 90% of that damage. 」「 45 / 90 / 135 (based on level) (+ 22.5% bonus AD) physical damage. 」Enemy champions will take damage from overlapping areas.\n Crescendum: Generates 5 additional spectral Chakrams that return to Aphelios from the first enemy champion hit, for a total of 6, on top of those from other targets hit.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
