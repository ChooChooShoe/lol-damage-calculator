import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Graves';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Graves_New_Destiny.png',
    description:
      '<span class="template_sbc"><b>Innate - Double Barrel:</b></span> <b>Graves\'</b> <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> consume <a href="/wiki/Ammunition" title="Ammunition">ammunition</a> within <span style="color: #E34D4C; white-space:normal">2 shells</span>. He will <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Graves is unable to declare basic attacks during this time.">reload</span> over a few seconds immediately after expending all shells or withholding leftover shells for a while. The reload time is reduced by <b>Graves\'</b> level and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, and can be interrupted by declaring an attack or casting an ability.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - 12-Gauge:</b></span> <b>Graves\'</b> basic attack sprays <span style="color: #56C456; white-space:normal">4 pellets</span> in a cone, each colliding with the first enemy unit or structure in their path, dealing <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))" data-bot_values="70;71.13;72.34;73.63;75;76.44;77.97;79.58;81.26;83.03;84.87;86.79;88.8;90.88;93.04;95.28;97.6;100.01" data-top_values="" data-bot_key="%">70% − 100.<small>01</small>% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> plus<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))*0.33302" data-bot_values="23.31;23.69;24.09;24.52;24.97;25.46;25.97;26.5;27.06;27.65;28.26;28.9;29.57;30.26;30.98;31.73;32.5;33.3" data-top_values="" data-bot_key="%">23.<small>31</small>% − 33.<small>3</small>% (based on level)</span> AD</span> damage&nbsp;」</span><span class="flipText2">「&nbsp;about one-third of the damage&nbsp;」</span></span>for each subsequent <span style="color: #56C456; white-space:normal">pellet</span> hitting the same target, up to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))*(1+3*0.33302)" data-bot_values="139.93;142.19;144.61;147.19;149.92;152.81;155.87;159.08;162.45;165.97;169.66;173.51;177.51;181.67;186;190.48;195.12;199.92" data-top_values="" data-bot_key="%">139.<small>93</small>% − 199.<small>92</small>% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> against a single target. Pellets deal 25% reduced damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: '01% (based on level) AD physical damage plus「 23',
        damagetype: 'Physical',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD physical damage plus「 23',
        pre: '01%',
        post: 'AD physical damage plus「 23',
      },
      {
        effectType: 'Damage',
        name: 'Line 4:',
        raw: '3% (based on level) AD damage 」「 about one-third of the damage 」for each subsequent pellet hitting the same target, up to 139',
        damagetype: 'None',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'total_ad',
        unitsText:
          'AD damage 」「 about one-third of the damage 」for each subsequent pellet hitting the same target, up to 139',
        pre: '3%',
        post: 'AD damage 」「 about one-third of the damage 」for each subsequent pellet hitting the same target, up to 139',
      },
      {
        effectType: 'Gain',
        name: 'Line 6:',
        raw: '92% (based on level) AD physical damage against a single target',
        increasedStat: 'total_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: '',
        unitsText: 'AD physical damage against a single target',
        pre: '92%',
        post: 'AD physical damage against a single target',
      },
    ],
  },
  {
    description:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strikes</a></span> spray <span style="color: #56C456; white-space:normal">6 pellets</span> over a 25% wider cone, with each <span style="color: #56C456; white-space:normal">pellet</span> dealing <span style="color: #FF8C34; white-space:normal">(20%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="9.33345%"><img alt="9.33345%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">9.<small>33345</small>%</a></span></span>) <b>bonus</b> physical damage</span>, resulting in<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">59.<small>98</small>% (+&nbsp;<span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge item.png" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span>12.<small>44</small>%)</span></span> <b>bonus</b> damage to attacks where all pellets hit.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))*2*1.5998" data-bot_values="223.97;227.59;231.46;235.58;239.95;244.59;249.47;254.61;260;265.65;271.55;277.71;284.12;290.78;297.7;304.87;312.3;319.98" data-top_values="" data-bot_key="%">223.<small>97</small>% − 319.<small>98</small>% (based on level)</span></span> <span style="color:orange; white-space:normal">(+<span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge item.png" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))*2*0.1244" data-bot_values="17.42;17.7;18;18.32;18.66;19.02;19.4;19.8;20.22;20.66;21.12;21.59;22.09;22.61;23.15;23.71;24.28;24.88" data-top_values="" data-bot_key="%">17.<small>42</small>% − 24.<small>88</small>% (based on level)</span>) AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> if all pellets hit.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 7:',
        raw: '98% (based on level) (+17',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+17',
        pre: '98%',
        post: '+17',
      },
      {
        effectType: 'Damage',
        name: 'Line 9:',
        raw: '88% (based on level)) AD physical damage if all pellets hit',
        damagetype: 'Physical',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD physical damage if all pellets hit',
        pre: '88%',
        post: 'AD physical damage if all pellets hit',
      },
    ],
  },
  {
    description:
      '<span style="color: #56C456; white-space:normal">Pellets</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">apply</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness. Only the first <span style="color: #56C456; white-space:normal">pellet</span> to hit each enemy applies <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Buckshot:</b></span> Non-champion units hit by more than one <span style="color: #56C456; white-space:normal">pellet</span> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span>, though not through terrain.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Graves_End_of_the_Line.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Graves</b> fires a round in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through and leaves behind a powder trail.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '45 / 60 / 75 / 90 / 105 (+ 80% bonus AD)',
        values: [45, 60, 75, 90, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 60 / 75 / 90 / 105',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'After 2 seconds, or <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.2 seconds, but rounded up to the next game tick.">0.<small>231</small> seconds</span> upon colliding with terrain, the round detonates to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies within a wide perpendicular area and in a reverse wave along the powder trail.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '85 / 120 / 155 / 190 / 225 (+ 40 / 70 / 100 / 130 / 160% bonus AD)',
        values: [85, 120, 155, 190, 225],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '85 / 120 / 155 / 190 / 225',
        children: [
          {
            values: [40, 70, 100, 130, 160],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 40 / 70 / 100 / 130 / 160% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '130 / 180 / 230 / 280 / 330 (+ 120 / 150 / 180 / 210 / 240% bonus AD)',
        values: [130, 180, 230, 280, 330],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '130 / 180 / 230 / 280 / 330',
        children: [
          {
            values: [120, 150, 180, 210, 240],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 120 / 150 / 180 / 210 / 240% bonus AD',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Graves_Smoke_Screen.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Graves</b> fires a smoke canister at the target location that upon impact deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 110 / 160 / 210 / 260 (+ 60% AP)',
        values: [60, 110, 160, 210, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 110 / 160 / 210 / 260',
        children: [
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
  {
    img: '/wiki/images/Smoke_Screen_2.png',
    description:
      'The canister creates a cloud of smoke for 4 seconds that applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span> of outside the area to all enemies within every 0.<small>25</small> seconds, reducing their <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> radius relative to the center.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Graves_Quickdraw.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Graves</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, reloading one <span style="color: #E34D4C; white-space:normal">shell</span> while generating a <a href="/wiki/Stack" title="Stack">stack</a> of <i>True Grit</i> for 4 seconds, stacking up to 8 times. Dashing towards an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> generates 2 stacks of <i>True Grit</i>.',
    leveling: [],
  },
  {
    description:
      '<i>Quickdraw\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 0.<small>5</small> seconds for every <span style="color: #56C456; white-space:normal">pellet</span> impacting an enemy.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>True Grit:</b></span> For each stack, <b>Graves</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>. Subsequent casts of <i>Quickdraw</i> and attacks versus non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> will refresh the duration of <i>True Grit</i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Armor:',
        raw: '4 / 7 / 10 / 13 / 16',
        values: [4, 7, 10, 13, 16],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4 / 7 / 10 / 13 / 16',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Bonus Armor:',
        raw: '32 / 56 / 80 / 104 / 128',
        values: [32, 56, 80, 104, 128],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '32 / 56 / 80 / 104 / 128',
      },
    ],
  },
  {
    description:
      '<i>Quickdraw <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Graves\'</b> basic attack timer. If <b>Graves</b> dashes while reloading, he can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup> Quickdraw will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Graves_Collateral_Damage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Graves</b> fires an explosive shell in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and causes him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">recoil</a></span> 300 units in the opposite direction.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '275 / 425 / 575 (+ 150% bonus AD)',
        values: [275, 425, 575],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '275 / 425 / 575',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 150% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or reaching the end of its range, the shell explodes in a cone to deal 80% damage to additional enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '220 / 340 / 460 (+ 120% bonus AD)',
        values: [220, 340, 460],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '220 / 340 / 460',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 120% bonus AD',
          },
        ],
      },
    ],
  },
];
export const Graves = { I, Q, W, E, R };
