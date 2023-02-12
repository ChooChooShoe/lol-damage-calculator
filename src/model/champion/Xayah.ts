import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Xayah';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Xayah_Clean_Cuts.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <span style="color: #AF1AAF; white-space:normal">Feathers</span> shot by <b>Xayah</b> will linger in the ground at maximum range for 6 seconds.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Xayah\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> casts generate 3 <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Clean Cuts</i>, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times. <b>Xayah\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to each consume a stack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> to instead shoot a <span style="color: #AF1AAF; white-space:normal">Feather</span> that deals the <span style="color:orange; white-space:normal">attack\'s damage</span> to the primary target and <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;1" data-finish="50;13" data-bot_values="30;40;50" data-top_values="1;7;13" data-bot_key="%">30 / 40 / 50% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to other enemies hit, with the secondary damage also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span> if the main attack does.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 2:',
        raw: " Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the attack's damage to the primary target and 30 / 40 / 50% (based on level) AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does",
        min: 0,
        max: 10,
        description:
          " Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the attack's damage to the primary target and 30 / 40 / 50% (based on level) AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does",
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText:
          'AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does',
        pre: "Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the attack's damage to the primary target and 30 / 40 / 50%",
        post: 'AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does',
      },
    ],
  },
  {
    img: '/wiki/images/Blazing_Feathers_profileicon.png',
    description:
      '<span class="template_sbc"><b>Innate - Lover\'s Leap:</b></span> If either <b>Xayah</b> or <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> is channeling <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>, the other may move nearby and channel their own to join alongside them. <b>Both</b> reach base at the time of which the initiator\'s <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> completes.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Xayah_Double_Daggers.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xayah</b> throws a volley of two <span style="color: #AF1AAF; white-space:normal">Feathers</span> in the target direction that each deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Hit:',
        raw: '45 / 60 / 75 / 90 / 105 (+ 50% bonus AD)',
        values: [45, 60, 75, 90, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 60 / 75 / 90 / 105',
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
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '90 / 120 / 150 / 180 / 210 (+ 100% bonus AD)',
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
  },
  {
    description: 'Targets hit after the first take 50% reduced damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Reduced Damage per Hit:',
        raw: '22.5 / 30 / 37.5 / 45 / 52.5 (+ 25% bonus AD)',
        values: [22.5, 30, 37.5, 45, 52.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '22.5 / 30 / 37.5 / 45 / 52.5',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 25% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Reduced Damage:',
        raw: '45 / 60 / 75 / 90 / 105 (+ 50% bonus AD)',
        values: [45, 60, 75, 90, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 60 / 75 / 90 / 105',
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
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Xayah_Deadly_Plumage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xayah</b> enters a frenzy for 4 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and empowering her basic attacks to strike a second time, dealing 20% damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '35 / 40 / 45 / 50 / 55%',
        values: [35, 40, 45, 50, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 40 / 45 / 50 / 55%',
      },
    ],
  },
  {
    description:
      'Whenever <b>Xayah</b> hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> with the strike, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> for 1.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i>If <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> is nearby upon cast, he also becomes empowered, and gains the <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> at the same time as <b>Xayah</b>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Xayah_Bladecaller.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xayah</b> recalls all planted <span style="color: #AF1AAF; white-space:normal">Feathers</span> to shoot back to her, each dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.75 × critical strike chance" data-bot_values="0;7.5;15;22.5;30;37.5;45;52.5;60;67.5;75" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 75% (based on critical strike chance)</span></span>. <i>Bladecaller</i> deals 50% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Feather:',
        raw: '55 / 65 / 75 / 85 / 95 (+ 60% bonus AD)',
        values: [55, 65, 75, 85, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 65 / 75 / 85 / 95',
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
      {
        effectType: 'Unique',
        name: 'Minion Damage Per Feather:',
        raw: '27.5 / 32.5 / 37.5 / 42.5 / 47.5 (+ 30% bonus AD)',
        values: [27.5, 32.5, 37.5, 42.5, 47.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '27.5 / 32.5 / 37.5 / 42.5 / 47.5',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 30% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'An enemy takes <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="previous feathers hit" data-displayformula="100%-(5% per previous feather hit). \'\'This is capped at 10% damage.\'\'" data-bot_values="100;95;90;85;80;75;70;65;60;55;50;45;40;35;30;25;20;15;10" data-top_values="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18" data-bot_key="%">100% − 10% (based on previous feathers hit)</span> damage from a <span style="color: #AF1AAF; white-space:normal">Feather</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: 'An enemy takes 100% − 10% (based on previous feathers hit) damage from a Feather',
        damagetype: 'None',
        values: 1,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'damage from a Feather',
        pre: 'An enemy takes 100% − 10%',
        post: 'damage from a Feather',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on previous feathers hit',
            pre: 'based on previous feathers hit',
          },
        ],
      },
    ],
  },
  {
    description:
      'A target hit by at least three <span style="color: #AF1AAF; white-space:normal">Feathers</span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 1.<small>25</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i>Enemies can be hit by an individual <span style="color: #AF1AAF; white-space:normal">Feather</span> only once per pass.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Xayah_Featherstorm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xayah</b> leaps into the air, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for 1.<small>5</small> seconds. After 1 second, she shoots 5 <span style="color: #AF1AAF; white-space:normal">Feathers</span> in a cone in the target direction that deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '200 / 300 / 400 (+ 100% bonus AD)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
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
  },
  {
    description:
      '<i><b>Xayah</b> is unable to basic attack or cast abilities during Featherstorm, but can still move.</i>',
    leveling: [],
  },
];
export const Xayah = { I, Q, W, E, R };
