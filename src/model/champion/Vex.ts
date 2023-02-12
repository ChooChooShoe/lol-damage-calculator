import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Vex';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive - Doom:</b></span> Periodically, <b>Vex</b> empowers her next <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knock down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fear</a></span> enemies hit for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.75;1;1.25;1.5" data-top_values="1;6;9;13">0.<small>75</small> / 1 / 1.<small>25</small> / 1.<small>5</small> (based on level)</span> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance from Vex" data-displayformula="60% + 3.9% for every 55 units away from Vex" data-bot_values="60;63.9;67.8;71.7;75.6;79.5;83.4;87.3;91.2;95.1;99" data-top_values="250;305;360;415;470;525;580;635;690;745;800" data-bot_key="%">60% − 99% (based on distance from <b>Vex</b>)</span>. If <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-ability="Looming Darkness 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL#Looming_Darkness_2" title="Looming Darkness"><img alt="Looming Darkness" src="/wiki/images/Vex_Looming_Darkness_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL#Looming_Darkness_2" title="Vex/LoL">Looming Darkness</a></span></span></i> triggers <i>Doom</i>, enemies hit will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flee"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">flee</a></span> from the epicenter instead.<br><i>Doom\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> resets upon <a href="/wiki/Death" title="Death">respawning</a>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '75 / 1 / 1',
        values: [75, 1, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 1 / 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '25 / 1',
        values: [25, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '5 (based on level) seconds, during which they are  slowed by 60% − 99% (based on distance from Vex)',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds, during which they are  slowed by 60% − 99%',
        pre: '5',
        post: 'seconds, during which they are  slowed by 60% − 99%',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance from Vex',
            pre: 'based on distance from Vex',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Vex_Doom_%27n_Gloom.png',
    description:
      '<span class="template_sbc"><b>Innate - Gloom:</b></span> Nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> will be marked with <i>Gloom</i> for 6 seconds. <b>Vex\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a>, which becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>, or basic ability hit against an enemy with <i>Gloom</i> will detonate the mark. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-ability="Looming Darkness" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL#Looming_Darkness" title="Looming Darkness"><img alt="Looming Darkness" src="/wiki/images/Vex_Looming_Darkness.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL#Looming_Darkness" title="Vex/LoL">Looming Darkness</a></span></span></i> will also inflict <i>Gloom</i>, but cannot detonate it.',
    leveling: [],
  },
  {
    description:
      '<i>Gloom\'s</i> detonation deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="30;" data-finish="140;" data-bot_values="30;36.47;42.94;49.41;55.88;62.35;68.82;75.29;81.76;88.24;94.71;101.18;107.65;114.12;120.59;127.06;133.53;140" data-top_values="">30 − 140 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span></span> and refunds 25% of <i>Doom\'s</i> cooldown. Against non-champions, this instead deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="40;45;50;55;60" data-top_values="1;6;9;13;16" data-bot_key="%">40 / 45 / 50 / 55 / 60% (based on level)</span> damage and refunds 10% of <i>Doom\'s</i> cooldown.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: "Gloom's detonation deals 30 − 140 (based on level) (+ 20% AP)  bonus magic damage and refunds 25% of Doom's cooldown",
        damagetype: 'Magic',
        values: [
          30, 36.47, 42.94, 49.41, 55.88, 62.35, 68.82, 75.29, 81.76, 88.24,
          94.71, 101.18, 107.65, 114.12, 120.59, 127.06, 133.53, 140,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: "bonus magic damage and refunds 25% of Doom's cooldown",
        pre: "Gloom's detonation deals 30 − 140",
        post: "bonus magic damage and refunds 25% of Doom's cooldown",
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
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: " Against non-champions, this instead deals 40 / 45 / 50 / 55 / 60% (based on level) damage and refunds 10% of Doom's cooldown",
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: "damage and refunds 10% of Doom's cooldown",
        pre: 'Against non-champions, this instead deals 40 / 45 / 50 / 55 / 60%',
        post: "damage and refunds 10% of Doom's cooldown",
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Vex_Mistral_Bolt.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vex</b> launches a wave of mist in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. After travelling 500 units, the wave accelerates but also narrows itself.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 105 / 150 / 195 / 240 (+ 70% AP)',
        values: [60, 105, 150, 195, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 105 / 150 / 195 / 240',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Vex_Personal_Space.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vex</b> emits a shockwave around her before the cast time, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and granting herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 75% AP)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 30% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Vex_Looming_Darkness.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vex</b> tosses her <i>Shadow</i> to explode at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds. The explosion\'s radius increases based on cast distance.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 70 / 90 / 110 / 130 (+ 40 / 45 / 50 / 55 / 60% AP)',
        values: [50, 70, 90, 110, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 70 / 90 / 110 / 130',
        children: [
          {
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40 / 45 / 50 / 55 / 60% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '30 / 35 / 40 / 45 / 50%',
        values: [30, 35, 40, 45, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50%',
      },
    ],
  },
  {
    description:
      '<i>Looming Darkness will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Vex_Shadow_Surge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vex</b> sends her <i>Shadow</i> in the target direction that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Does not see into bush or across terrain">trajectory</span> and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 125 / 175 (+ 20% AP)',
        values: [75, 125, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 125 / 175',
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
  },
  {
    description:
      '<i>Shadow</i> stops upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> to mark them for 4 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>. <i>Shadow Surge</i> can be recast while the target is marked.',
    leveling: [],
  },
  {
    img: '/wiki/images/Vex_Shadow_Surge_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Vex</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> towards the marked target with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span>. Upon arrival, she consumes their mark and deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 50% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
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
        name: 'Total Magic Damage:',
        raw: '225 / 375 / 525 (+ 70% AP)',
        values: [225, 375, 525],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '225 / 375 / 525',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the target dies within 6 seconds of being marked, <b>Vex</b> can cast <i>Shadow Surge</i> again within 12 seconds at no cost after 0.<small>5</small> seconds.',
    leveling: [],
  },
];
export const Vex = { I, Q, W, E, R };
