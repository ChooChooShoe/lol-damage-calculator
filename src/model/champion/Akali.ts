import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Akali';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Akali_Assassin%27s_Mark.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> When <b>Akali</b> damages an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> with an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, she creates a ring around them for 4 seconds, refreshing on subsequent damaging abilities against champions. For 2 seconds, she gains <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;1" data-finish="60;16" data-bot_values="30;40;50;60" data-top_values="1;6;11;16" data-bot_key="%">30 / 40 / 50 / 60% (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span> while moving away from the center of the ring. Only one ring may be active at a time.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' For 2 seconds, she gains 30 / 40 / 50 / 60% (based on level)  bonus movement speed while moving away from the center of the ring',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'bonus movement speed while moving away from the center of the ring',
        pre: 'For 2 seconds, she gains 30 / 40 / 50 / 60%',
        post: 'bonus movement speed while moving away from the center of the ring',
      },
    ],
  },
  {
    description:
      'When <b>Akali</b> exits the ring, for 2 seconds, she regains the <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> while facing nearby enemy champions and becomes empowered with <i>Swinging Kama</i> for 4 seconds, during which she cannot create another ring.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Swinging Kama:</b></span> <b>Akali\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to have its <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> doubled and deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-displayformula="+3 per level until lvl 7; then +9 until lvl 13, then +15" data-bot_values="35;38;41;44;47;50;53;62;71;80;89;98;107;122;137;152;167;182" data-top_values="">35 − 182 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Akali's next basic attack is empowered to have its  range doubled and deal 35 − 182 (based on level) (+ 60% bonus AD) (+ 55% AP) bonus magic damage",
        damagetype: 'Magic',
        values: [
          35, 43.65, 52.29, 60.94, 69.59, 78.24, 86.88, 95.53, 104.18, 112.82,
          121.47, 130.12, 138.76, 147.41, 156.06, 164.71, 173.35, 182,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage',
        pre: "Akali's next basic attack is empowered to have its  range doubled and deal 35 − 182",
        post: 'bonus magic damage',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 60% bonus AD',
          },
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 55% AP',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Akali_Five_Point_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Akali</b> unleashes kunais in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Targets at maximum range are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 50% for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '30 / 55 / 80 / 105 / 130 (+ 65% AD) (+ 60% AP)',
        values: [30, 55, 80, 105, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 55 / 80 / 105 / 130',
        children: [
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 65% AD',
          },
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
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Akali_Twilight_Shroud.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Akali</b> restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">100 energy</span></span> over 0.<small>4</small> seconds and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 2 seconds. She also detonates a smoke bomb a fixed distance away in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring. The shroud does not permeate terrain, and will expand toward nearby enemy champions. While the shroud is active, <b>Akali\'s</b> <span style="color:yellow; white-space:normal"><b>maximum</b> energy</span> is increased by <span style="color:yellow; white-space:normal">100</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '30 / 35 / 40 / 45 / 50%',
        values: [30, 35, 40, 45, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50%',
      },
      {
        effectType: 'Unique',
        name: 'Shroud Duration:',
        raw: '5 / 5.5 / 6 / 6.5 / 7',
        values: [5, 5.5, 6, 6.5, 7],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 5.5 / 6 / 6.5 / 7',
      },
    ],
  },
  {
    description:
      'Entering the shroud renders <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span>, unless she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span>.',
    leveling: [],
  },
  {
    description:
      'Declaring a basic attack or casting an ability will break the invisibility and prevent <b>Akali</b> from entering it for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="minutes" data-bot_values="1;0.9;0.825;0.725;0.625" data-top_values="1;8;11;20;30">1 − 0.<small>625</small> (based on minutes)</span> seconds, refreshing on subsequent attacks and casts.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: 'Declaring a basic attack or casting an ability will break the invisibility and prevent Akali from entering it for 1 − 0',
        values: [1, 0],
        user: 'player',
        units: 'total_ad',
        unitsText:
          'a basic attack or casting an ability will break the invisibility and prevent Akali from entering it for 1',
        pre: 'Declaring a basic attack or casting an ability will break the invisibility and prevent Akali from entering it for 1 − 0',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '625 (based on minutes) seconds, refreshing on subsequent attacks and casts',
        values: 625,
        user: 'player',
        units: 'total_ad',
        unitsText: 'seconds, refreshing on subsequent attacks and casts',
        pre: '625',
        post: 'seconds, refreshing on subsequent attacks and casts',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on minutes',
            pre: 'based on minutes',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>The <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Shuriken Flip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Shuriken_Flip" title="marked"><img alt="marked" src="/wiki/images/Akali_Shuriken_Flip.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Shuriken_Flip" title="Akali/LoL">marked</a></span></span> section of Twilight Shroud will linger for the mark\'s duration, even after the shroud ends.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Akali_Shuriken_Flip.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">flips</a></span> backward and, after the cast time, throws a shuriken in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '30 / 56.25 / 82.5 / 108.75 / 135 (+ 25.5% AD) (+ 36% AP)',
        values: [30, 56.25, 82.5, 108.75, 135],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 56.25 / 82.5 / 108.75 / 135',
        children: [
          {
            values: 25.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 25.5% AD',
          },
          {
            values: 36,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 36% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'The shuriken <i>marks</i> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> the enemy or the last <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Twilight Shroud" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="smoke"><img alt="smoke" src="/wiki/images/Akali_Twilight_Shroud.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Akali/LoL">smoke</a></span></span></i> section hit for 3 seconds, during which <i>Shuriken Flip</i> can be recast to consume the mark.',
    leveling: [],
  },
  {
    img: '/wiki/images/Akali_Shuriken_Flip_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> towards the marked target or smoke section, regardless of distance. Against enemies she deals <span style="color: #00B0F0; white-space:normal">magic damage</span> upon arrival.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 131.25 / 192.5 / 253.75 / 315 (+ 59.5% AD) (+ 84% AP)',
        values: [70, 131.25, 192.5, 253.75, 315],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 131.25 / 192.5 / 253.75 / 315',
        children: [
          {
            values: 59.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 59.5% AD',
          },
          {
            values: 84,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 84% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '100 / 187.5 / 275 / 362.5 / 450 (+ 85% AD) (+ 120% AP)',
        values: [100, 187.5, 275, 362.5, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 187.5 / 275 / 362.5 / 450',
        children: [
          {
            values: 85,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 85% AD',
          },
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 120% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><b>Akali</b> will not flip backwards if she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilized"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> during the cast time. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Twilight Shroud" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Twilight Shroud"><img alt="Twilight Shroud" src="/wiki/images/Akali_Twilight_Shroud.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Twilight_Shroud" title="Akali/LoL">Twilight Shroud</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akali" data-ability="Perfect Execution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akali/LoL#Perfect_Execution" title="Perfect Execution"><img alt="Perfect Execution" src="/wiki/images/Akali_Perfect_Execution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akali/LoL#Perfect_Execution" title="Akali/LoL">Perfect Execution</a></span></span> can be cast during the recast\'s dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Akali_Perfect_Execution.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> 750 units in the direction of the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through. If this hits an enemy, she flips over them to continue the dash up to the normal range but for at least another 150 units.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 220 / 360 (+ 50% bonus AD) (+ 30% AP)',
        values: [80, 220, 360],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 220 / 360',
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
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Perfect Execution</i> can be recast after a 2.<small>5</small>-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> within 10 seconds of the first activation.',
    leveling: [],
  },
  {
    img: '/wiki/images/Akali_Perfect_Execution_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Akali</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">800</span> units in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="2.86% per 1% of target\'s \'\'\'missing\'\'\' health, capped at 70% \'\'\'missing\'\'\' health" data-bot_values="0;20;40;60;80;100;120;140;160;180;200" data-top_values="0;7;14;21;28;35;42;49;56;63;70" data-bot_key="%" data-top_key="%">0% − 200% (based on target\'s <b>missing</b> health)</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Akali  dashes 800 units in the target direction, dealing magic damage to enemies she passes through, increased by 0% − 200% (based on target's missing health)",
        healType: 'OutgoingHeals',
        values: 8,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText:
          '− 200 dashes 800 units in the target direction, dealing magic damage to enemies she passes through, increased by 0',
        pre: 'Akali  dashes 800 units in the target direction, dealing magic damage to enemies she passes through, increased by 0% − 200%',
        children: [
          {
            values: 0,
            user: 'target',
            units: 'missing_hp',
            unitsText: "based on target's missing health",
            pre: "based on target's missing health",
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '60 / 130 / 200 (+ 30% AP)',
        values: [60, 130, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 130 / 200',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Magic Damage:',
        raw: '180 / 390 / 600 (+ 90% AP)',
        values: [180, 390, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '180 / 390 / 600',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
    ],
  },
];
export const Akali = { I, Q, W, E, R };
