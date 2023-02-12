import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Lee Sin';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Lee_Sin_Flurry.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <b>Lee Sin\'s</b> next 2 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 3 seconds gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">40% <b>bonus</b> attack speed</span></span> and restore <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">energy</span></span>.',
    leveling: [],
  },
  {
    description:
      'The first attack restores <span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;1" data-finish="40;13" data-bot_values="20;30;40" data-top_values="1;7;13">20 / 30 / 40 (based on level)</span> energy</span> and the second attack restores<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;half of that amount.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="20;13" data-bot_values="10;15;20" data-top_values="1;7;13">10 / 15 / 20 (based on level)</span> energy</span>.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: 'The first attack restores 20 / 30 / 40 (based on level) energy and the second attack restores「 half of that amount',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText:
          'energy and the second attack restores「 half of that amount',
        pre: 'The first attack restores 20 / 30 / 40',
        post: 'energy and the second attack restores「 half of that amount',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' 」「 10 / 15 / 20 (based on level) energy',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'energy',
        pre: '」「 10 / 15 / 20',
        post: 'energy',
      },
    ],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Lee_Sin_Sonic_Wave.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> fires a sonic blast in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and marks them for 3 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '55 / 80 / 105 / 130 / 155 (+ 110% bonus AD)',
        values: [55, 80, 105, 130, 155],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 80 / 105 / 130 / 155',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 110% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'While the target is marked, <b>Lee Sin</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Resonating Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Resonating_Strike" title="Resonating Strike"><img alt="Resonating Strike" src="/wiki/images/Lee_Sin_Resonating_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Resonating_Strike" title="Lee Sin/LoL">Resonating Strike</a></span></span></i>.',
    leveling: [],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Lee_Sin_Resonating_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the nearby enemy marked by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Sonic Wave" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Sonic_Wave" title="Sonic Wave"><img alt="Sonic Wave" src="/wiki/images/Lee_Sin_Sonic_Wave.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Sonic_Wave" title="Lee Sin/LoL">Sonic Wave</a></span></span></i>. Upon arrival, he consumes the mark and deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#1F995C;" data-top_label="target\'s missing health" data-displayformula="1% per 1% of target\'s \'\'\'missing\'\'\' health" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on target\'s <b>missing</b> health)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '55 / 80 / 105 / 130 / 155 (+ 110% bonus AD)',
        values: [55, 80, 105, 130, 155],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 80 / 105 / 130 / 155',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 110% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '110 / 160 / 210 / 260 / 310 (+ 220% bonus AD)',
        values: [110, 160, 210, 260, 310],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 160 / 210 / 260 / 310',
        children: [
          {
            values: 220,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 220% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Iron Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Iron Will"><img alt="Iron Will" src="/wiki/images/Lee_Sin_Iron_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Lee Sin/LoL">Iron Will</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Cripple" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Cripple"><img alt="Cripple" src="/wiki/images/Lee_Sin_Cripple.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Lee Sin/LoL">Cripple</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const W1: SubSkill[] = [
  {
    img: '/wiki/images/Lee_Sin_Safeguard.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target allied unit\'s location. If the ally is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> upon arrival, both they and <b>Lee Sin</b> gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds and <i>Safeguard\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is halved.<br>\n<b>Lee Sin</b> can <a href="/wiki/Self-targeted" title="Self-targeted">self-cast</a> <i>Safeguard</i> to shield himself.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '50 / 100 / 150 / 200 / 250 (+ 80% AP)',
        values: [50, 100, 150, 200, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 100 / 150 / 200 / 250',
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
  },
  {
    description:
      'After <i>Safeguard</i> is cast, <b>Lee Sin</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Iron Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Iron Will"><img alt="Iron Will" src="/wiki/images/Lee_Sin_Iron_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Lee Sin/LoL">Iron Will</a></span></span></i> within the next 3 seconds.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Iron Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Iron Will"><img alt="Iron Will" src="/wiki/images/Lee_Sin_Iron_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Lee Sin/LoL">Iron Will</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Cripple" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Cripple"><img alt="Cripple" src="/wiki/images/Lee_Sin_Cripple.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Lee Sin/LoL">Cripple</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const W2: SubSkill[] = [
  {
    img: '/wiki/images/Lee_Sin_Iron_Will.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> gains <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> and <span style="white-space:nowrap"><a href="/wiki/Spell_vamp" title="Spell vamp"><img alt="Spell vamp icon.png" src="/wiki/images/Spell_vamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Spell_vamp" class="mw-redirect" title="Spell vamp">spell vamp</a></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Drain:',
        raw: '5 / 10.5 / 16 / 21.5 / 27%',
        values: [5, 10.5, 16, 21.5, 27],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 10.5 / 16 / 21.5 / 27%',
      },
    ],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Lee_Sin_Tempest.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> smashes the ground beneath him, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, marking them for 4 seconds and, if they are not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> when struck, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for the same duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '35 / 65 / 95 / 125 / 155 (+ 100% AD)',
        values: [35, 65, 95, 125, 155],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 65 / 95 / 125 / 155',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Tempest</i> hits an enemy, <b>Lee Sin</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Cripple" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Cripple"><img alt="Cripple" src="/wiki/images/Lee_Sin_Cripple.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Lee Sin/LoL">Cripple</a></span></span></i> within the next 3 seconds after a 0.<small>1</small>-second delay.',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Lee_Sin_Cripple.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> sends a wave to nearby enemies marked by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Tempest"><img alt="Tempest" src="/wiki/images/Lee_Sin_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Lee Sin/LoL">Tempest</a></span></span></i>, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 4 seconds, decaying over the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '20 / 35 / 50 / 65 / 80%',
        values: [20, 35, 50, 65, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80%',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Lee_Sin_Dragon%27s_Rage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> the target enemy champion over the cast time, then roundhouse kicks them to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="see notes">up to 800 units</span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">over 0.<small>8</small> seconds</span>, rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '175 / 400 / 625 (+ 200% bonus AD)',
        values: [175, 400, 625],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 400 / 625',
        children: [
          {
            values: 200,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 200% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies that collide with the displaced enemy while it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> take the same damage plus <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 1 second.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Collision Physical Damage:',
        raw: "175 / 400 / 625 (+ 200% bonus AD) (+ 12 / 15 / 18% of primary target's bonus health)",
        healType: 'OutgoingHeals',
        values: [175, 400, 625],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 400 / 625',
        children: [
          {
            values: 200,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 200% bonus AD',
          },
          {
            values: [12, 15, 18],
            valuesIsPercent: true,
            user: 'target',
            units: 'bonus_hp',
            unitsText: "of primary target's bonus health",
            pre: "+ 12 / 15 / 18% of primary target's bonus health",
          },
        ],
      },
    ],
  },
];
export const LeeSin = { I, Q1, Q2, W1, W2, E1, E2, R };
