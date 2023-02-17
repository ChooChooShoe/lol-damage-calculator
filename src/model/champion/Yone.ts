import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Yone';
export const skillsData = ChampionSkillsData['Yone'];

export const Yone = {
  'Way of the Hunter': {
    effects: [
      {
        img: 'Way of the Hunter.png',
        description:
          "Innate - Intent: Yone's  total critical strike chance is multiplied by 2.5 from all other sources, but his  critical strikes deal only「 (57.5% +  31.5%) AD bonus physical damage. 」「 90% of the normal  critical strike damage. 」Additionally,「 every 1% critical strike chance in excess of 100% is converted into 0.4 bonus AD. 」「 every 50% critical strike chance in excess of 100% is converted into 20 bonus AD. 」",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Innate - Steel and Spirit: Yone's basic attacks alternate between his Steel Sword and Azakana Sword on-attack. Yone begins attacking with Steel Sword, and basic attacks with Azakana Sword deal 50% AD physical damage and 50% AD magic damage.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Mortal Steel': {
    effects: [
      {
        img: 'Mortal Steel.png',
        description:
          "Active: Yone thrusts his Steel Sword in a line in the target direction that deals physical damage to enemies hit and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit. Mortal Steel's damage can  critically strike for「 (47% +  29.4%) AD bonus physical damage. 」「 84% of the  critical damage champions usually have. 」",
        leveling: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 40 / 60 / 80 / 100 (+ 105% AD)',
            damagetype: 'None',
            values: [20, 40, 60, 80, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 40 / 60 / 80 / 100',
            children: [
              {
                values: 105,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 105% AD',
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
          'If this hits at least one enemy, Yone generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next Mortal Steel consumes them all to become empowered with a new effect.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Mortal Steel 2.png',
        description:
          'Gathering Storm Bonus: Yone  dashes a fixed distance in the target direction and unleashes a whirlwind in the same direction, both dealing the same damage to enemies hit in their path and  knocking them up for 0.75 seconds, but being unable to affect the same target twice.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Mortal Steel's thrust is  interrupted if Yone is affected by  disarming crowd control during the cast time but its  cooldown is reset to 0.1 seconds.",
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Spirit Cleave': {
    effects: [
      {
        img: 'Spirit Cleave.png',
        description:
          'Active: Yone cleaves his Azakana Sword in a cone in the target direction, dealing equal parts physical and magic damage to enemies hit. The total mixed damage has a minimum threshold of 40 − 410 (based on level) against  minions and a maximum threshold of 150 − 320 (based on level) against  monsters.',
        leveling: [
          {
            effectType: 'Heal',
            name: 'Total Mixed Damage:',
            raw: "10 / 20 / 30 / 40 / 50 (+ 11 / 12 / 13 / 14 / 15% of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [10, 20, 30, 40, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 20 / 30 / 40 / 50',
            children: [
              {
                values: [11, 12, 13, 14, 15],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 11 / 12 / 13 / 14 / 15% of target's maximum health",
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
          'If this hits an enemy, Yone grants himself a  shield for 35 − 55 (based on level) (+ 55% bonus AD) for 1.5 seconds, increased by 100% if it hits a  champion and by 50% for each subsequent champion hit.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Soul Unbound': {
    effects: [
      {
        img: 'Soul Unbound.png',
        description:
          "Active: Yone  dashes a fixed distance in the target direction, discarding his body and entering Spirit Form for 5 seconds. Yone's body is  untargetable and is sent the same distance behind the cast location, though not through terrain, and is reclaimed when Soul Unbound ends.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Soul Unbound 3.png',
        description:
          'Spirit Form: Yone becomes  ghosted and gains  10% − 30% (based on time active) bonus movement speed. Enemy champions damaged by his basic attacks or abilities are marked. Each mark stores a portion of the post-mitigation damage that Yone deals to the target with his basic attacks and abilities.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Damage Stored:',
            raw: '25 / 27.5 / 30 / 32.5 / 35% of damage dealt',
            damagetype: 'None',
            values: [25, 27.5, 30, 32.5, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'of damage dealt',
            pre: '25 / 27.5 / 30 / 32.5 / 35% of damage dealt',
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          "Activation resets  Way of the Hunter's current sword state. Soul Unbound can be recast after 0.5 seconds, and automatically does so after the duration.",
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: 'Soul Unbound 2.png',
        description:
          'Recast: Yone remains in cast time for 0.25 seconds then  dashes back to his body with  displacement immunity, ending Spirit Form and detonating the marks on each champion to deal  true damage equal to the amount stored against each of them. After the cast time, he will  cleanse himself from all  immobilizing effects and  polymorphs* that were applied to him during it as well as all  blinds,  cripples and  drowsy effects.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'The automatic recast is delayed if Yone is winding up a basic attack or is unable to recast Soul Unbound under any circumstances, which includes if he cannot move or cast abilities. Soul Unbound will also immediately recast upon  death or entering  resurrection.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
  'Fate Sealed': {
    effects: [
      {
        img: 'Fate Sealed.png',
        description:
          'Active: Yone prepares a strike over the cast time, then marks all enemies within a line in the target direction,  knocking them down and  stunning them for 1 second. He  blinks 200 units beyond the center of the last enemy  champion struck, or else to maximum range instead.',
        leveling: [],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description:
          'After 0.3 seconds, a gust rushes along the same line that deals equal parts physical and magic damage to marked enemies within the area and  pulls them towards the location Yone blinked to, then  knocks them up for 0.75 seconds.',
        leveling: [
          {
            effectType: 'Damage',
            name: 'Total Mixed Damage:',
            raw: '200 / 300 / 400 / 500 / 600 (+ 80% AD)',
            damagetype: 'None',
            values: [200, 300, 400, 500, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 300 / 400 / 500 / 600',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 80% AD',
              },
            ],
          },
        ],
        hidden: false,
        locked: true,
      },
      {
        img: '',
        description: 'The  stun ends prematurely upon the knock up.',
        leveling: [],
        hidden: false,
        locked: true,
      },
    ],
  },
} satisfies { [skillName in string]: SkillModel };
