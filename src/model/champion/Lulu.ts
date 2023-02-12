import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Lulu';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Lulu_Pix%2C_Faerie_Companion.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Lulu</b> is assisted by <i>Pix</i>, an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> faerie, who follows her around and fires a barrage of 3 bolts towards her target whenever she uses a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>. Each bolt deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="39;" data-bot_values="5;7;9;11;13;15;17;19;21;23;25;27;29;31;33;35;37;39" data-top_values="">5 − 39 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy it collides with, for a total of <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="117;" data-bot_values="15;21;27;33;39;45;51;57;63;69;75;81;87;93;99;105;111;117" data-top_values="">15 − 117 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> on hitting a single target with all three bolts.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' Each bolt deals 5 − 39 (based on level) (+ 5% AP) magic damage to the first enemy it collides with, for a total of 15 − 117 (based on level) (+ 15% AP) on hitting a single target with all three bolts',
        damagetype: 'Magic',
        values: [
          5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'magic damage to the first enemy it collides with, for a total of 15 − 117',
        pre: 'Each bolt deals 5 − 39',
        post: 'magic damage to the first enemy it collides with, for a total of 15 − 117',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 5% AP',
          },
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Help, Pix!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Help,_Pix!" title="Help, Pix!"><img alt="Help, Pix!" src="/wiki/images/Lulu_Help%2C_Pix%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Help,_Pix!" title="Lulu/LoL">Help, Pix!</a></span></span></i> on an ally champion transfers <i>Pix\'s</i> help to them, causing him to fire the bolts dependent on their basic attacks.',
    leveling: [],
  },
  {
    description: '<i>Pix snaps back to <b>Lulu</b> if she is too far away.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Lulu_Glitterlance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lulu</b> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span></i> each fire a magic bolt towards the target point, each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, reduced to 70% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 80% decaying over 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
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
        effectType: 'Unique',
        name: 'Minion Damage:',
        raw: '49 / 73.5 / 98 / 122.5 / 147 (+ 28% AP)',
        values: [49, 73.5, 98, 122.5, 147],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '49 / 73.5 / 98 / 122.5 / 147',
        children: [
          {
            values: 28,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 28% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">25% damage</span> from a second bolt.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '17.5 / 26.25 / 35 / 43.75 / 52.5 (+ 10% AP)',
        values: [17.5, 26.25, 35, 43.75, 52.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '17.5 / 26.25 / 35 / 43.75 / 52.5',
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
        name: 'Total Magic Damage:',
        raw: '87.5 / 131.25 / 175 / 218.75 / 262.5 (+ 50% AP)',
        values: [87.5, 131.25, 175, 218.75, 262.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '87.5 / 131.25 / 175 / 218.75 / 262.5',
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
        name: 'Reduced Minion Damage:',
        raw: '12.25 / 18.375 / 24.5 / 30.625 / 36.75 (+ 7% AP)',
        values: [12.25, 18.375, 24.5, 30.625, 36.75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12.25 / 18.375 / 24.5 / 30.625 / 36.75',
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
      {
        effectType: 'Unique',
        name: 'Total Minion Damage:',
        raw: '61.25 / 91.875 / 122.5 / 153.125 / 183.75 (+ 35% AP)',
        values: [61.25, 91.875, 122.5, 153.125, 183.75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '61.25 / 91.875 / 122.5 / 153.125 / 183.75',
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
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Lulu_Whimsy.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lulu</b> can cast <i>Whimsy</i> on herself or the target champion.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Enemy Cast:</b></span> <b>Lulu</b> launches a spell onto the target enemy champion that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphs</a></span> them into a harmless critter for a duration, during which their <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> is reduced by <span style="color: #F5EE99; white-space:normal">60</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarming</a></span> them for the same duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Disable Duration:',
        raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
        values: [1.2, 1.4, 1.6, 1.8, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Self / Ally Cast:</b></span> <b>Lulu</b> instantly casts erratic magic upon the target allied champion or herself, granting the target <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for the duration.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Lulu instantly casts erratic magic upon the target allied champion or herself, granting the target  bonus attack speed and  25% (+ 5% per 100 AP) bonus movement speed for the duration',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed for the duration',
        pre: 'Lulu instantly casts erratic magic upon the target allied champion or herself, granting the target  bonus attack speed and  25%',
        post: 'bonus movement speed for the duration',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 5% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '25 / 27.5 / 30 / 32.5 / 35%',
        values: [25, 27.5, 30, 32.5, 35],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 27.5 / 30 / 32.5 / 35%',
      },
      {
        effectType: 'Unique',
        name: 'Duration:',
        raw: '3 / 3.25 / 3.5 / 3.75 / 4',
        values: [3, 3.25, 3.5, 3.75, 4],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 3.25 / 3.5 / 3.75 / 4',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Lulu_Help%2C_Pix%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lulu</b> can cast <i>Help, Pix!</i> on herself or the target unit.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Enemy Cast:</b></span> <b>Lulu</b> sends <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span></i> to the far side of the target enemy for 4 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for the same duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 40% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
  },
  {
    description:
      '<span class="template_sbc"><b>Self / Ally Cast:</b></span> <b>Lulu</b> sends <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span></i> to the target ally for 6.<small>25</small> seconds. If the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, they are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '75 / 110 / 145 / 180 / 215 (+ 55% AP)',
        values: [75, 110, 145, 180, 215],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 110 / 145 / 180 / 215',
        children: [
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
const R: SubSkill[] = [
  {
    img: '/wiki/images/Lulu_Wild_Growth.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lulu</b> enlarges herself or the target allied champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> nearby enemies for 0.<small>75</small> seconds. For the next 7 seconds, the target gains <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> health</span></span> and 40% increased <a href="/wiki/Size" title="Size">size</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies, which lingers for 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Health:',
        raw: '275 / 425 / 575 (+ 45% AP)',
        values: [275, 425, 575],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '275 / 425 / 575',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '30 / 45 / 60%',
        values: [30, 45, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60%',
      },
    ],
  },
];
export const Lulu = { I, Q, W, E, R };
