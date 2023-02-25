import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Aurelion Sol';

export default {
  'Cosmic Creator': {
    name: 'Cosmic Creator',
    display_name: 'Cosmic Creator',
    champion: 'Aurelion Sol',
    skill: 'I',
    image: {
      full: 'AurelionSolP.ASolGU.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <b>Aurelion Sol’s</b> damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against enemies grant him stacks of <span style="color: #5C58C9; white-space:normal">Stardust</span>. Stardust improves each of his abilities.\n<ul><li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Breath of Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Breath of Light\'s"><img alt="Breath of Light\'s" src="/wiki/images/Aurelion_Sol_Breath_of_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Aurelion Sol/LoL">Breath of Light\'s</a></span></span></i> bursts deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Astral Flight" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Astral_Flight" title="Astral Flight\'s"><img alt="Astral Flight\'s" src="/wiki/images/Aurelion_Sol_Astral_Flight.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Astral_Flight" title="Aurelion Sol/LoL">Astral Flight\'s</a></span></span></i> distance is increased.</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Singularity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Singularity\'s"><img alt="Singularity\'s" src="/wiki/images/Aurelion_Sol_Singularity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Aurelion Sol/LoL">Singularity\'s</a></span></span></i> area and execute threshold are increased.</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Falling Star" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Falling_Star" title="Falling Star"><img alt="Falling Star" src="/wiki/images/Aurelion_Sol_Falling_Star.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Falling_Star" title="Aurelion Sol/LoL">Falling Star</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="The Skies Descend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="The Skies Descend"><img alt="The Skies Descend" src="/wiki/images/Aurelion_Sol_The_Skies_Descend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="Aurelion Sol/LoL">The Skies Descend</a></span></span></i> both have increased impact area.</li></ul>',
    ],
    description: [
      {
        icon: '/wiki/images/Cosmic Creator.png',
        description:
          "Innate: Aurelion Sol's damaging abilities against enemies grant him stacks of Stardust, which improve each of his abilities. The amount of Stardust collected by each ability may vary by target.\n Breath of Light: Bursts deal bonus magic damage equal to (0.031% Stardust stacks) of the target's maximum health.\n Astral Flight: Range is increased by 62.5% Stardust stacks.\n Singularity: Outer and inner radius increased by 15% Stardust stacks, and execution threshold increased by 2.6% Stardust stacks.\n Falling Star and  The Skies Descend: Effect radius increased by 15% Stardust stacks.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Aurelion Sol\'s</b> damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against enemies grant him stacks of <span style="color: #5C58C9; white-space:normal">Stardust</span>, which improve each of his abilities. The amount of <span style="color: #5C58C9; white-space:normal">Stardust</span> collected by each ability may vary by target.\n<ul><li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Breath of Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Breath of Light"><img alt="Breath of Light" src="/wiki/images/Aurelion_Sol_Breath_of_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Aurelion Sol/LoL">Breath of Light</a></span></span></i>: Bursts deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #5C58C9; white-space:normal">(0.<small>031</small>% Stardust stacks)</span> of the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Astral Flight" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Astral_Flight" title="Astral Flight"><img alt="Astral Flight" src="/wiki/images/Aurelion_Sol_Astral_Flight.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Astral_Flight" title="Aurelion Sol/LoL">Astral Flight</a></span></span></i>: Range is increased by <span style="color: #5C58C9; white-space:normal">62.<small>5</small>% Stardust stacks</span>.</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Singularity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Singularity"><img alt="Singularity" src="/wiki/images/Aurelion_Sol_Singularity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Aurelion Sol/LoL">Singularity</a></span></span></i>: Outer and inner radius increased by <span style="color: #5C58C9; white-space:normal">15% Stardust stacks</span>, and execution threshold increased by <span style="color: #5C58C9; white-space:normal">2.<small>6</small>% Stardust stacks</span>.</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Falling Star" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Falling_Star" title="Falling Star"><img alt="Falling Star" src="/wiki/images/Aurelion_Sol_Falling_Star.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Falling_Star" title="Aurelion Sol/LoL">Falling Star</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="The Skies Descend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="The Skies Descend"><img alt="The Skies Descend" src="/wiki/images/Aurelion_Sol_The_Skies_Descend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="Aurelion Sol/LoL">The Skies Descend</a></span></span></i>: Effect radius increased by <span style="color: #5C58C9; white-space:normal">15% Stardust stacks</span>.</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'The amount of Stardust collected by each ability may vary by target.\n Breath of Light:',
            raw: " Bursts deal bonus magic damage equal to (0.031% Stardust stacks) of the target's maximum health.\n Astral Flight: Range is increased by 62.5% Stardust stacks.\n Singularity: Outer and inner radius increased by 15% Stardust stacks, and execution threshold increased by 2.6% Stardust stacks.\n Falling Star and  The Skies Descend: Effect radius increased by 15% Stardust stacks.",
            healType: 'OutgoingHeals',
            values: 0,
            units: 'feastStacks',
            unitsText:
              "of the target's maximum health.\n Astral Flight: Range is increased by 62.5% Stardust stacks.\n Singularity: Outer and inner radius increased by 15% Stardust stacks, and execution threshold increased by 2.6% Stardust stacks.\n Falling Star and  The Skies Descend: Effect radius increased by 15% Stardust stacks.",
            pre: 'Bursts deal bonus magic damage equal to',
            post: "of the target's maximum health.\n Astral Flight: Range is increased by 62.5% Stardust stacks.\n Singularity: Outer and inner radius increased by 15% Stardust stacks, and execution threshold increased by 2.6% Stardust stacks.\n Falling Star and  The Skies Descend: Effect radius increased by 15% Stardust stacks.",
            children: [
              {
                values: 0.031,
                valuesIsPercent: true,
                units: 'feastStacks',
                unitsText: 'Stardust stacks',
                pre: '0.031% Stardust stacks',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Singularity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Singularity\'s"><img alt="Singularity\'s" src="/wiki/images/Aurelion_Sol_Singularity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Aurelion Sol/LoL">Singularity\'s</a></span></span> relative size and ratio stays the same when affected by <i>Cosmic Creator\'s</i> size modifier.',
  },
  'Breath of Light': {
    name: 'Breath of Light',
    display_name: 'Breath of Light',
    champion: 'Aurelion Sol',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'AurelionSolQ.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '750 − 920 (based on level)',
    cast_time: 'none',
    cost: '22.<small>5</small> / 25 / 27.<small>5</small> / 30 / 32.<small>5</small>',
    costtype: 'Mana per 0.<small>5</small> seconds',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">3</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> over a moderate period, exhaling a beam in the target direction that continuously deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and reduced damage to all other enemies. <b>Aurelion Sol</b> can steer the beam in any direction.',
      'The beam will deal a burst of <span style="color:inherit; white-space:normal"><b>additional</b> magic damage</span> for each full second that it damages an enemy, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and grant <span style="color: #5C58C9; white-space:normal">1 Stardust</span> if the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
      "At rank 5, <i>Breath of Light's</i> channel duration may last indefinitely.",
    ],
    description: [
      {
        icon: '/wiki/images/Breath of Light.png',
        description:
          'Active: Aurelion Sol  charges for up to 3.25 seconds to exhale a beam of starfire, during which he can steer the beam in the target direction. The beam collides with the first enemy hit,  reveals them, and deals them magic damage every 0.125 seconds, reduced to 50% for other surrounding enemies hit by the beam.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 3.<small>25</small> seconds to exhale a beam of starfire, during which he can steer the beam in the target direction. The beam collides with the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them, and deals them <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>125</small> seconds, reduced to 50% for other surrounding enemies hit by the beam.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Aurelion Sol  charges for up to 3.25 seconds to exhale a beam of starfire, during which he can steer the beam in the target direction',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Sol  charges for up to 3.25 seconds to exhale a beam of starfire, during which he can steer the beam in the target direction',
            pre: 'Aurelion Sol  charges for up to 3.25 seconds to exhale a beam of starfire, during which he can steer the beam in the target direction',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values:
              '3.75 − 11.25 (based on level) (+ 1.875 / 3.125 / 4.375 / 5.625 / 6.875) (+ 7.5% AP)',
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3.75;" data-finish="11.25;" data-bot_values="3.75;4.19;4.63;5.07;5.51;5.96;6.4;6.84;7.28;7.72;8.16;8.6;9.04;9.49;9.93;10.37;10.81;11.25" data-top_values="">3.<small>75</small> − 11.<small>25</small> (based on level)</span> (+ 1.<small>875</small> / 3.<small>125</small> / 4.<small>375</small> / 5.<small>625</small> / 6.<small>875</small>) <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7.<small>5</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '3.75 − 11.25 (based on level) (+ 1.875 / 3.125 / 4.375 / 5.625 / 6.875) (+ 7.5% AP)',
            damagetype: 'Magic',
            values: [
              3.75, 4.19, 4.63, 5.07, 5.51, 5.96, 6.4, 6.84, 7.28, 7.72, 8.16,
              8.6, 9.04, 9.49, 9.93, 10.37, 10.81, 11.25,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3.75 − 11.25',
            children: [
              {
                values: [1.875, 3.125, 4.375, 5.625, 6.875],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 1.875 / 3.125 / 4.375 / 5.625 / 6.875',
              },
              {
                values: 7.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7.5% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Breath of Light can be recast within the duration, and does so automatically afterwards.',
        descriptionHTML:
          '<i>Breath of Light</i> can be recast within the duration, and does so automatically afterwards.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "For each second that the beam continuously damages the same enemy, it bursts to deal  bonus magic damage and grants 1 Stardust if the target is a  champion. The damage based on the target's health ratio is capped at 300 against  monsters.",
        descriptionHTML:
          'For each second that the beam continuously damages the same enemy, it bursts to deal <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span></span> and grants <span style="color: #5C58C9; white-space:normal">1 Stardust</span> if the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>. The damage based on the target\'s health ratio is capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'For each second that the beam continuously damages the same enemy, it bursts to deal  bonus magic damage and grants 1 Stardust if the target is a  champion',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'each second that the beam continuously damages the same enemy, it bursts to deal  bonus magic damage and grants 1 Stardust if the target is a  champion',
            pre: 'For each second that the beam continuously damages the same enemy, it bursts to deal  bonus magic damage and grants 1 Stardust if the target is a  champion',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "The damage based on the target's health ratio is capped at 300 against  monsters.",
            healType: 'OutgoingHeals',
            values: 3,
            units: 'total_ap',
            unitsText:
              "damage based on the target's health ratio is capped at 300 against  monsters.",
            pre: "The damage based on the target's health ratio is capped at 300 against  monsters.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values:
              "20 − 40 (based on level) (+ 40 / 50 / 60 / 70 / 80) (+ 40% AP) (+ (0.031% Stardust stacks) of target's maximum health",
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="40;" data-bot_values="20;21.18;22.35;23.53;24.71;25.88;27.06;28.24;29.41;30.59;31.76;32.94;34.12;35.29;36.47;37.65;38.82;40" data-top_values="">20 − 40 (based on level)</span> (+ 40 / 50 / 60 / 70 / 80) <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span style="color: #5C58C9; white-space:normal">(0.<small>031</small>% Stardust stacks)</span> of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "20 − 40 (based on level) (+ 40 / 50 / 60 / 70 / 80) (+ 40% AP) (+ (0.031% Stardust stacks) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [
              20, 21.18, 22.35, 23.53, 24.71, 25.88, 27.06, 28.24, 29.41, 30.59,
              31.76, 32.94, 34.12, 35.29, 36.47, 37.65, 38.82, 40,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '+',
            pre: '20 − 40',
            post: '+',
            children: [
              {
                values: [40, 50, 60, 70, 80],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 40 / 50 / 60 / 70 / 80',
              },
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: 0.031,
                valuesIsPercent: true,
                units: 'feastStacks',
                unitsText: 'Stardust stacks',
                pre: '0.031% Stardust stacks',
              },
            ],
          },
        ],
      },
      {
        description: 'Recast: Aurelion Sol ends Breath of Light early.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Aurelion Sol</b> ends <i>Breath of Light</i> early.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "At rank 5, Breath of Light's channel duration lasts for as long as Aurelion Sol can pay its mana cost.",
        descriptionHTML:
          'At rank 5, <i>Breath of Light\'s</i> channel duration lasts for as long as <b>Aurelion Sol</b> can pay its <span style="color: #0099CC; white-space:normal">mana</span> cost.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "At rank 5, Breath of Light's channel duration lasts for as long as Aurelion Sol can pay its mana cost.",
            values: 5,
            units: 'total_mana',
            unitsText:
              "rank 5, Breath of Light's channel duration lasts for as long as Aurelion Sol can pay its mana cost.",
            pre: "At rank 5, Breath of Light's channel duration lasts for as long as Aurelion Sol can pay its mana cost.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'special',
    spellshield: 'Special',
    projectile: 'false',
    callforhelp: 'special',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> on the burst and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent area damage"><a href="/wiki/Damage" title="Damage"><img alt="Poison Trail.png" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent area damage</a></span> on the beam.\n<ul><li><i>Breath of Light\'s</i> bursts against an enemy champion will aggro nearby enemy minions.</li>\n<li><i>Breath of Light</i> places a timer on each target, which ticks in 0.<small>2</small> second intervals. Thus, at <span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;5 completed intervals&nbsp;」</span><span class="flipText2">「&nbsp;1 full second&nbsp;」</span></span>, the burst damage is procced.\n<ul><li>The timer\'s visuals themselves otherwise serve no other purpose than gameplay clarity.</li>\n<li>The timer falls off and resets to zero immediately upon no longer damaging affected targets.</li></ul></li>\n<li><i>Breath of Light</i> does not go on cooldown if it was charged for less than 0.<small>25</small> seconds.</li>\n<li>The listed \'indefinite duration\' at <i>Breath of Light\'s</i> rank 5, is functionally 9999 seconds of game time.</li>\n<li><i>Breath of Light\'s</i> rank 5 duration is determined based on his current mana and static mana regeneration.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block the burst damage.</li>\n<li>The following table refers to interactions while <b>Aurelion Sol</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charging</a></span>.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
  'Astral Flight': {
    name: 'Astral Flight',
    display_name: 'Astral Flight',
    champion: 'Aurelion Sol',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'AurelionSolW.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1200 + 7.5 per Stardust stack',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">335 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed while channeling Breath of Light">167.<small>5</small> + <span style="color: #F5EE99; white-space:normal">50% movement speed</span></span>',
    cast_time: '0.<small>4</small>',
    cost: '80 / 85 / 90 / 95 / 100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">22 / 20.<small>5</small> / 19 / 17.<small>5</small> / 16</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">flies</a></span> toward the target location. While flying, he can cast any of his abilities, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Breath of Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Breath of Light"><img alt="Breath of Light" src="/wiki/images/Aurelion_Sol_Breath_of_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Aurelion Sol/LoL">Breath of Light</a></span></span></i> has no <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, no maximum channel duration, and its flat damage is increased. <b>Aurelion Sol</b> flies at a reduced speed while channeling <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Breath of Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Breath of Light"><img alt="Breath of Light" src="/wiki/images/Aurelion_Sol_Breath_of_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Aurelion Sol/LoL">Breath of Light</a></span></span></i>.',
      '<i>Astral Flight</i> can be recast after 0.<small>5</small> seconds in flight, and does so automatically after reaching the destination.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Aurelion Sol</b> ends <i>Astral Flight</i> early.',
      'Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within 3 seconds of damaging them refunds a large portion of <i>Astral Flight\'s</i> cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Astral Flight.png',
        description:
          "Active: Aurelion Sol  dashes in the target direction and resets  Breath of Light's  cooldown. While in flight, he has  unobstructed vision and  Breath of Light has no cooldown and maximum channel duration and its flat damage is increased, but Astral Flight's dash speed is reduced by 50% during its channel.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction and resets <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Breath of Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Breath of Light\'s"><img alt="Breath of Light\'s" src="/wiki/images/Aurelion_Sol_Breath_of_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Aurelion Sol/LoL">Breath of Light\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>. While in flight, he has <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Breath of Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Breath of Light"><img alt="Breath of Light" src="/wiki/images/Aurelion_Sol_Breath_of_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Aurelion Sol/LoL">Breath of Light</a></span></span></i> has no cooldown and maximum channel duration and its flat damage is increased, but <i>Astral Flight\'s</i> dash speed is reduced by 50% during its channel.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "While in flight, he has  unobstructed vision and  Breath of Light has no cooldown and maximum channel duration and its flat damage is increased, but Astral Flight's dash speed is reduced by 50% during its channel.",
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "during its channel.in flight, he has  unobstructed vision and  Breath of Light has no cooldown and maximum channel duration and its flat damage is increased, but Astral Flight's dash speed is reduced by 50",
            pre: "While in flight, he has  unobstructed vision and  Breath of Light has no cooldown and maximum channel duration and its flat damage is increased, but Astral Flight's dash speed is reduced by 50% during its channel.",
          },
        ],
        leveling: [
          {
            name: 'Breath of Light Flat Damage Modifier:',
            values: '114 / 115.5 / 117 / 118.5 / 120%',
            valuesHTML:
              '114 / 115.<small>5</small> / 117 / 118.<small>5</small> / 120%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Breath of Light Flat Damage Modifier:',
            raw: '114 / 115.5 / 117 / 118.5 / 120%',
            damagetype: 'None',
            values: [114, 115.5, 117, 118.5, 120],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '114 / 115.5 / 117 / 118.5 / 120%',
          },
        ],
      },
      {
        description:
          'Aurelion Sol will be  knocked down by any  immobilizing crowd control during the dash.',
        descriptionHTML:
          '<i><b>Aurelion Sol</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> crowd control during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Astral Flight can be recast after 0.5 seconds during the dash, and does so automatically after reaching the destination.',
        descriptionHTML:
          '<i>Astral Flight</i> can be recast after 0.<small>5</small> seconds during the dash, and does so automatically after reaching the destination.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Astral Flight 2.png',
        description: 'Recast: Aurelion Sol ends Astral Flight early.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Aurelion Sol</b> ends <i>Astral Flight</i> early.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Scoring a champion  takedown within 3 seconds of damaging them reduces Astral Flight's  current cooldown by 90% of its total cooldown.",
        descriptionHTML:
          'Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within 3 seconds of damaging them reduces <i>Astral Flight\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 90% of its <b>total</b> cooldown.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Scoring a champion  takedown within 3 seconds of damaging them reduces Astral Flight's  current cooldown by 90% of its total cooldown.",
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "of its total cooldown.a champion  takedown within 3 seconds of damaging them reduces Astral Flight's  current cooldown by 90",
            pre: "Scoring a champion  takedown within 3 seconds of damaging them reduces Astral Flight's  current cooldown by 90% of its total cooldown.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    notes:
      '* If a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> is scored while <i>Astral Flight</i> is active, the cooldown will be reduced after it ends.\n<ul><li><i>Astral Flight</i> cannot be used in the first 15 seconds of the game.</li>\n<li>The following table refers for interactions while <b>Aurelion Sol</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span>.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>  <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>    <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects\n</li></td></tr></tbody></table>',
  },
  Singularity: {
    name: 'Singularity',
    display_name: 'Singularity',
    champion: 'Aurelion Sol',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'AurelionSolE.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '750 − 920 (based on level)',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius: First value under the root is the radius at 0 stacks of Stardust">√(275² + 16.<small>93</small>² &nbsp;×&nbsp; <span style="color: #5C58C9; white-space:normal">Stardust</span>)</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Kill radius: First value under the root is the radius at 0 stacks of Stardust">√(137.<small>5</small>² + 8.<small>46</small>² &nbsp;×&nbsp; <span style="color: #5C58C9; white-space:normal">Stardust</span>)</span> <br> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Kinematic pull radius: First value under the root is the radius at 0 stacks of Stardust">√(275² + 16.<small>93</small>² &nbsp;×&nbsp; <span style="color: #5C58C9; white-space:normal">Stardust</span>)</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Center no-pull radius: First value under the root is the radius at 0 stacks of Stardust">√(137.<small>5</small>² + 8.<small>46</small>² &nbsp;×&nbsp; <span style="color: #5C58C9; white-space:normal">Stardust</span>)</span>',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">12 / 11.<small>5</small> / 11 / 10.<small>5</small> / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> blasts the target location, summoning a black hole for a moderate period. Enemies in the black hole are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kinematics" class="mw-redirect" title="Kinematics">pulled</a></span> toward the center, and if they are below a certain percentage of their <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span> upon touching the center. Non-champions are additionally stopped in place while in the center.',
      '<i>Singularity</i> grants <span style="color: #5C58C9; white-space:normal">1 Stardust</span> for each second the black hole damages an enemy champion, and varying <span style="color: #5C58C9; white-space:normal">Stardust</span> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> inside it:\n<ul><li>Champions and epic monsters: <span style="color: #5C58C9; white-space:normal">5 Stardust</span></li>\n<li>Large minions and monsters: <span style="color: #5C58C9; white-space:normal">3 Stardust</span></li>\n<li>Small minions and monsters: <span style="color: #5C58C9; white-space:normal">1 Stardust</span></li></ul>',
    ],
    description: [
      {
        icon: '/wiki/images/Singularity.png',
        description:
          'Active: Aurelion Sol blasts the target location, conjuring a black hole after a 0.5-second delay that lasts for 5 seconds, grants  sight of the area, and deals magic damage every 0.25 seconds to enemies within the area.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> blasts the target location, conjuring a black hole after a 0.<small>5</small>-second delay that lasts for 5 seconds, grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area, and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to enemies within the area.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values: '2.5 / 3.75 / 5 / 6.25 / 7.5 (+ 6.25% AP)',
            valuesHTML:
              '2.<small>5</small> / 3.<small>75</small> / 5 / 6.<small>25</small> / 7.<small>5</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6.<small>25</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '2.5 / 3.75 / 5 / 6.25 / 7.5 (+ 6.25% AP)',
            damagetype: 'Magic',
            values: [2.5, 3.75, 5, 6.25, 7.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2.5 / 3.75 / 5 / 6.25 / 7.5',
            children: [
              {
                values: 6.25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 6.25% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Enemies in the black hole are  dragged toward its center over the duration. Non-epic monster targets within the center that are below 5% (+ 2.6% Stardust stacks) of their maximum health are also  executed. Additionally, non-champions affected have their movement speed reduced to 0.',
        descriptionHTML:
          'Enemies in the black hole are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kinematics" class="mw-redirect" title="Kinematics">dragged</a></span> toward its center over the duration. Non-epic monster targets within the center that are below <span style="color: #1F995C; white-space:normal">5% <span style="color: #5C58C9; white-space:normal">(+&nbsp;2.<small>6</small>% Stardust stacks)</span> of their <b>maximum</b> health</span> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span>. Additionally, non-champions affected have their <span style="color: #F5EE99; white-space:normal">movement speed</span> <b>reduced</b> to <span style="color: #F5EE99; white-space:normal">0</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Non-epic monster targets within the center that are below 5% (+ 2.6% Stardust stacks) of their maximum health are also  executed',
            healType: 'OutgoingHeals',
            values: 5,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText: 'of their maximum health are also  executed',
            pre: 'Non-epic monster targets within the center that are below 5%',
            post: 'of their maximum health are also  executed',
            children: [
              {
                values: 2.6,
                valuesIsPercent: true,
                units: 'feastStacks',
                unitsText: 'Stardust stacks',
                pre: '+ 2.6% Stardust stacks',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'After Singularity ends, Aurelion Sol is granted 1 Stardust for each continuous second that enemy champions were inside it, and a varying amount of Stardust for enemies that died while within the area:\nChampions and epic monsters grant 5 Stardust.\nLarge minions and monsters grant 3 Stardust.\nSmall minions and monsters grant 1 Stardust.',
        descriptionHTML:
          'After <i>Singularity</i> ends, <b>Aurelion Sol</b> is granted <span style="color: #5C58C9; white-space:normal">1 Stardust</span> for each continuous second that enemy champions were inside it, and a varying amount of <span style="color: #5C58C9; white-space:normal">Stardust</span> for enemies that died while within the area:\n<ul><li>Champions and epic monsters grant <span style="color: #5C58C9; white-space:normal">5 Stardust</span>.</li>\n<li>Large minions and monsters grant <span style="color: #5C58C9; white-space:normal">3 Stardust</span>.</li>\n<li>Small minions and monsters grant <span style="color: #5C58C9; white-space:normal">1 Stardust</span>.</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'After Singularity ends, Aurelion Sol is granted 1 Stardust for each continuous second that enemy champions were inside it, and a varying amount of Stardust for enemies that died while within the area:',
            raw: '\nChampions and epic monsters grant 5 Stardust.\nLarge minions and monsters grant 3 Stardust.\nSmall minions and monsters grant 1 Stardust.',
            values: 5,
            user: 'none',
            units: '',
            unitsText: 'and epic monsters grant 5 Stardust.',
            pre: 'Champions and epic monsters grant 5 Stardust.\nLarge minions and monsters grant 3 Stardust.\nSmall minions and monsters grant 1 Stardust.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: 'Special',
    callforhelp: 'special',
    notes:
      '* <i>Singularity</i> grants <span style="color: #5C58C9; white-space:normal">Stardust</span> only after the blast disappears.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block a single instance of damage.</li>\n<li><i>Singularity\'s</i> execute against an enemy champion will aggro nearby enemy minions.</li>\n<li>If the black hole expires while <b>Aurelion Sol</b> is inside <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL" title="Mordekaiser\'s"><img alt="Mordekaiser\'s" src="/wiki/images/Mordekaiser_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL" title="Mordekaiser/LoL">Mordekaiser\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span></span>, the damage over time will last for 1000 seconds.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><i>Singularity\'s</i> execute will trigger <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="League of Draven" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#League_of_Draven" title="League of Draven"><img alt="League of Draven" src="/wiki/images/Draven_League_of_Draven.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#League_of_Draven" title="Draven/LoL">League of Draven</a></span></span> if <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL" title="Draven"><img alt="Draven" src="/wiki/images/Draven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL" title="Draven/LoL">Draven</a></span></span> gets an assist.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  'Falling Star': {
    name: 'Falling Star',
    display_name: 'Falling Star',
    champion: 'Aurelion Sol',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'AurelionSolR.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1250',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Impact radius: First value under the root is the radius at 0 stacks of Stardust">√(275² + 16.<small>93</small>² &nbsp;×&nbsp; <span style="color: #5C58C9; white-space:normal">Stardust</span>)</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 115 / 110 / 105 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> calls down a star that strikes the target area, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> all enemies hit. <i>Falling Star</i> grants <span style="color: #5C58C9; white-space:normal">5 Stardust</span> for each enemy champion hit.',
      'After gathering <span style="color: #5C58C9; white-space:normal">75 Stardust</span>, the next cast of <i>Falling Star</i> transforms into <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="The Skies Descend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="The Skies Descend"><img alt="The Skies Descend" src="/wiki/images/Aurelion_Sol_The_Skies_Descend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="Aurelion Sol/LoL">The Skies Descend</a></span></span></i> instead, causing the impact to become greatly empowered.',
    ],
    description: [
      {
        icon: '/wiki/images/Falling Star.png',
        description:
          'Active: Aurelion Sol calls down a star to impact the target location after 1.25 seconds, dealing magic damage to enemies hit and  stunning them for 1.25 seconds. Falling Star grants 5 Stardust for each enemy champion hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> calls down a star to impact the target location after 1.<small>25</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>25</small> seconds. <i>Falling Star</i> grants <span style="color: #5C58C9; white-space:normal">5 Stardust</span> for each enemy champion hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Aurelion Sol calls down a star to impact the target location after 1.25 seconds, dealing magic damage to enemies hit and  stunning them for 1.25 seconds',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Sol calls down a star to impact the target location after 1.25 seconds, dealing magic damage to enemies hit and  stunning them for 1.25 seconds',
            pre: 'Aurelion Sol calls down a star to impact the target location after 1.25 seconds, dealing magic damage to enemies hit and  stunning them for 1.25 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Falling Star grants 5 Stardust for each enemy champion hit.',
            values: 5,
            user: 'none',
            units: '',
            unitsText: 'Star grants 5 Stardust for each enemy champion hit.',
            pre: 'Falling Star grants 5 Stardust for each enemy champion hit.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 65% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;65% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 65% AP)',
            damagetype: 'Magic',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Once Falling Star has been learned, gathering 75 Stardust causes the next cast of Falling Star to transform into  The Skies Descend instead, empowering the impact with new effects.',
        descriptionHTML:
          'Once <i>Falling Star</i> has been learned, gathering <span style="color: #5C58C9; white-space:normal">75 Stardust</span> causes the next cast of <i>Falling Star</i> to transform into <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="The Skies Descend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="The Skies Descend"><img alt="The Skies Descend" src="/wiki/images/Aurelion_Sol_The_Skies_Descend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="Aurelion Sol/LoL">The Skies Descend</a></span></span></i> instead, empowering the impact with new effects.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Once Falling Star has been learned, gathering 75 Stardust causes the next cast of Falling Star to transform into  The Skies Descend instead, empowering the impact with new effects.',
            damagetype: 'None',
            values: 7,
            units: 'total_ad',
            unitsText:
              'Falling Star has been learned, gathering 75 Stardust causes the next cast of Falling Star to transform into  The Skies Descend instead, empowering the impact with new effects.',
            pre: 'Once Falling Star has been learned, gathering 75 Stardust causes the next cast of Falling Star to transform into  The Skies Descend instead, empowering the impact with new effects.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'special',
    callforhelp: 'true',
    notes:
      '* There is a progress bar above <i>Falling Star\'s</i> ability icon in the HUD that displays the <span style="color: #5C58C9; white-space:normal">Stardust</span> required to transform into <i>The Skies Descend</i>.\n<ul><li><i>Falling Star\'s</i> cooldown does not affect <i>The Skies Descend\'s</i> <span style="color: #5C58C9; white-space:normal">Stardust</span> requirement.</li>\n<li><i>Falling Star</i> will impact immediately upon colliding with projectile-intercepting effects.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
