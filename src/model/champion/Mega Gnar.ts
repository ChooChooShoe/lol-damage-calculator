import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Mega Gnar';
const I1: SubSkill[] = [
  {
    img: '/wiki/images/Gnar_Rage_Gene.png',
    description:
      '<span class="template_sbc"><b>Innate - Rage Gene:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Mini Gnar</strong></span></span> generates <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="4;7;11" data-top_values="1;6;11">4 / 7 / 11 (based on level)</span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Rage Gene" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Rage_Gene" title="Rage"><img alt="Rage" src="/wiki/images/Gnar_Rage_Gene.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Rage_Gene" title="Gnar/LoL">Rage</a></span></span></i> over 2 seconds upon dealing or receiving damage. Against non-champions, <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Boomerang Throw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Boomerang Throw"><img alt="Boomerang Throw" src="/wiki/images/Gnar_Boomerang_Throw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Gnar/LoL">Boomerang Throw</a></span></span></i> instantly generate<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.5;0.875;1.375" data-top_values="1;6;11">0.<small>5</small> / 0.<small>875</small> / 1.<small>375</small> (based on level)</span> <i>Rage</i>.&nbsp;」</span><span class="flipText2">「&nbsp;12.<small>5</small>% of the amount.&nbsp;」</span></span> Against champions, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Boomerang Throw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Boomerang Throw"><img alt="Boomerang Throw" src="/wiki/images/Gnar_Boomerang_Throw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Gnar/LoL">Boomerang Throw</a></span></span></i> instantly generates<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="1;1.75;2.75" data-top_values="1;6;11">1 / 1.<small>75</small> / 2.<small>75</small> (based on level)</span> <i>Rage</i>,&nbsp;」</span><span class="flipText2">「&nbsp;25% of the amount,&nbsp;」</span></span>and basic attacks instantly generate<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="2;3.5;5.5" data-top_values="1;6;11">2 / 3.<small>5</small> / 5.<small>5</small> (based on level)</span>.&nbsp;」</span><span class="flipText2">「&nbsp;50% of the amount.&nbsp;」</span></span><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Boomerang Throw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Boomerang Throw"><img alt="Boomerang Throw" src="/wiki/images/Gnar_Boomerang_Throw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Gnar/LoL">Boomerang Throw</a></span></span></i> can only generate <i>Rage</i> once per cast, and grants <i>Rage</i> based on the first enemy hit. <b>Gnar\'s</b> <i>Rage</i> decays after being <a href="/wiki/Combat_status" title="Combat status">out of combat</a> for 13 seconds.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: '  Mini Gnar generates 4 / 7 / 11 (based on level)  Rage over 2 seconds upon dealing or receiving damage',
        damagetype: 'None',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'Rage over 2 seconds upon dealing or receiving damage',
        pre: 'Mini Gnar generates 4 / 7 / 11',
        post: 'Rage over 2 seconds upon dealing or receiving damage',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '5 / 0',
        values: [5, 0],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 0',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '875 / 1',
        values: [875, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '875 / 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 5:',
        raw: '375 (based on level) Rage',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'Rage',
        pre: '375',
        post: 'Rage',
      },
      {
        effectType: 'Gain',
        name: 'Line 8:',
        raw: ' 」 Against champions,  Boomerang Throw instantly generates「 1 / 1',
        values: [1, 1],
        user: 'none',
        units: '',
        unitsText:
          'Against champions,  Boomerang Throw instantly generates「 1',
        pre: '」 Against champions,  Boomerang Throw instantly generates「 1 / 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 9:',
        raw: '75 / 2',
        values: [75, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 2',
      },
      {
        effectType: 'Unique',
        name: 'Line 10:',
        raw: '75 (based on level) Rage, 」「 25% of the amount, 」and basic attacks instantly generate「 2 / 3',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText:
          'Rage, 」「 25% of the amount, 」and basic attacks instantly generate「 2 / 3',
        pre: '75',
        post: 'Rage, 」「 25% of the amount, 」and basic attacks instantly generate「 2 / 3',
      },
      {
        effectType: 'Unique',
        name: 'Line 11:',
        raw: '5 / 5',
        values: [5, 5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 5',
      },
      {
        effectType: 'Unique',
        name: 'Line 12:',
        raw: '5 (based on level)',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5',
      },
    ],
  },
  {
    img: '/wiki/images/Gnar_Rage_Gene_2.png',
    description:
      'At maximum <i>Rage</i>, <b>Gnar\'s</b> abilities are switched to <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar\'s"><img alt="Mega Gnar\'s" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar\'s</a></span></span> abilities for 4 seconds. Casting one of <b>Mega Gnar\'s</b> abilities will cause him to transform into <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar"><img alt="Mega Gnar" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar</a></span></span>, else he will transform automatically after the 4 seconds have elapsed.',
    leveling: [],
  },
  {
    description:
      '<b>Gnar\'s</b> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega"><img alt="Mega" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega</a></span></span> form lasts for 15 seconds, with his <i>Rage</i> bar depleting as an indication of remaining time. <i>Rage cannot be generated while in this form.</i> Afterwards, <b>Gnar</b> returns to <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Mini Gnar</strong></span></span>, retaining his <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>current</b> percentage health</span></span> and becoming too <a href="https://static.wikia.nocookie.net/leagueoflegends/images/f/f9/Gnar_Rage_Gene_4.png/revision/latest?cb=20170215215644" class="image"><img alt="Rage Gene 4.png" src="/wiki/images/Gnar_Rage_Gene_4.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i>tired</i> to generate <i>Rage</i> for 15 seconds.',
    leveling: [],
  },
  {
    description:
      '<b>Gnar</b> gains different stat bonuses based on whether he is in <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Mini Gnar" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Mini_Gnar" title="Mini"><img alt="Mini" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Mini_Gnar" title="Gnar/LoL">Mini</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Mega Gnar" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Mega_Gnar" title="Mega"><img alt="Mega" src="/wiki/images/Gnar_Rage_Gene_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Mega_Gnar" title="Gnar/LoL">Mega</a></span></span></i> form. Both of <b>Gnar\'s</b> forms share their ability cooldowns.',
    leveling: [],
  },
];
const I2: SubSkill[] = [
  {
    img: '/wiki/images/Gnar_OriginalSquare.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Gnar</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span>, <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span>, as well as <span style="color:orangered; white-space:normal">attack speed growth</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movespeed:',
        raw: '0 − 20 (based on level)',
        values: [
          0, 1.18, 2.35, 3.53, 4.71, 5.88, 7.06, 8.24, 9.41, 10.59, 11.76,
          12.94, 14.12, 15.29, 16.47, 17.65, 18.82, 20,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0 − 20',
      },
      {
        effectType: 'Unique',
        name: 'Total Movespeed:',
        raw: '335 − 355 (based on level)',
        values: [
          335, 336.18, 337.35, 338.53, 339.71, 340.88, 342.06, 343.24, 344.41,
          345.59, 346.76, 347.94, 349.12, 350.29, 351.47, 352.65, 353.82, 355,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '335 − 355',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Range:',
        raw: '0 − 100 (based on level)',
        values: [
          0, 5.88, 11.76, 17.65, 23.53, 29.41, 35.29, 41.18, 47.06, 52.94,
          58.82, 64.71, 70.59, 76.47, 82.35, 88.24, 94.12, 100,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0 − 100',
      },
    ],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Gnar_Boomerang_Throw.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> throws a boomerang in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies in its path and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds. <br><br>After reaching its maximum range or hitting an enemy, the boomerang flies back toward <b>Gnar</b> based on his current movement, dealing 50% damage to subsequent targets.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '5 / 45 / 85 / 125 / 165 (+ 115% AD)',
        values: [5, 45, 85, 125, 165],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 45 / 85 / 125 / 165',
        children: [
          {
            values: 115,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 115% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '2.5 / 22.5 / 42.5 / 62.5 / 82.5 (+ 57.5% AD)',
        values: [2.5, 22.5, 42.5, 62.5, 82.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2.5 / 22.5 / 42.5 / 62.5 / 82.5',
        children: [
          {
            values: 57.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 57.5% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '15 / 20 / 25 / 30 / 35%',
        values: [15, 20, 25, 30, 35],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35%',
      },
    ],
  },
  {
    description:
      'Catching the boomerang while it is returning back refunds 40% of the ability\'s <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> cooldown</span>.',
    leveling: [],
  },
  {
    description: '<i>Enemies can be hit only once per pass.</i>',
    leveling: [],
  },
];
const W1: SubSkill[] = [
  {
    img: '/wiki/images/Gnar_Hyper_2.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Gnar\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Hyper</i> to enemies for 3.<small>5</small> seconds, refreshing on subsequent applications and stacking up to 3 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Gnar_Hyper.png',
    description:
      'The third stack against a target consumes them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and grant <b>Gnar</b> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-top_label="[[File:GNAR!.png|20px|border]] GNAR!\'s rank" data-displayformula="20% + 20% per GNAR!\'s rank" data-bot_values="20;40;60;80" data-top_values="0;1;2;3" data-bot_key="%">20 / 40 / 60 / 80% (based on <a href="https://static.wikia.nocookie.net/leagueoflegends/images/3/31/Gnar_GNAR%21.png/revision/latest?cb=20170818002800" class="image"><img alt="GNAR!.png" src="/wiki/images/Gnar_GNAR%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>GNAR!\'s</i> rank)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 3 seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "The third stack against a target consumes them all to deal bonus magic damage, capped at 300 against  monsters, and grant Gnar 20 / 40 / 60 / 80% (based on  GNAR!'s rank)  bonus movement speed that decays over 3 seconds",
        values: [3, 40, 60, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed that decays over 3 seconds',
        pre: 'The third stack against a target consumes them all to deal bonus magic damage, capped at 300 against  monsters, and grant Gnar 20 / 40 / 60 / 80%',
        post: 'bonus movement speed that decays over 3 seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on  GNAR!'s rank",
            pre: "based on  GNAR!'s rank",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Bonus Magic Damage:',
        raw: "0 / 10 / 20 / 30 / 40 (+ 6 / 8 / 10 / 12 / 14% of target's maximum health) (+ 100% AP)",
        healType: 'OutgoingHeals',
        values: [0, 10, 20, 30, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0 / 10 / 20 / 30 / 40',
        children: [
          {
            values: [6, 8, 10, 12, 14],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 6 / 8 / 10 / 12 / 14% of target's maximum health",
          },
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
  },
  {
    description:
      '<b>Gnar</b> gains <i>Hyper\'s</i> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> when he leaves <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega"><img alt="Mega" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega</a></span></span> form.',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Gnar_Hop.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location, then gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 6 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '40 / 45 / 50 / 55 / 60%',
        values: [40, 45, 50, 55, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50 / 55 / 60%',
      },
    ],
  },
  {
    description:
      'If <b>Gnar</b> lands on a unit he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">bounce</a></span> 500 units further in the same direction.',
    leveling: [],
  },
  {
    description:
      'Landing on an enemy deals them <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 80% for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: '50 / 85 / 120 / 155 / 190 (+ 6% maximum health)',
        healType: 'BonusHealth',
        values: [50, 85, 120, 155, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 85 / 120 / 155 / 190',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '+ 6% maximum health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Gnar</b> will not bounce if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, excluding from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during the first leap.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Boomerang Throw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Boomerang Throw"><img alt="Boomerang Throw" src="/wiki/images/Gnar_Boomerang_Throw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Gnar/LoL">Boomerang Throw</a></span></span> can be cast during the dash. Hop will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const I3: SubSkill[] = [
  {
    img: '/wiki/images/Gnar_Rage_Gene_3.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Gnar</b> gains the following increases to his base statistics: <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="100 base +&nbsp;43 growth" data-bot_values="100;130.96;163.43;197.4;232.87;269.85;308.33;348.33;389.82;432.82;477.33;523.34;570.85;619.87;670.4;722.43;775.96;831" data-top_values="">100 − 831 (based on level)</span></span> <span style="color: #1F995C; white-space:normal"><b>base</b> health</span>, <span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="3.5 base +&nbsp;3 growth" data-bot_values="3.5;5.66;7.93;10.3;12.77;15.35;18.04;20.83;23.72;26.72;29.83;33.03;36.35;39.77;43.3;46.93;50.66;54.5" data-top_values="">3.<small>5</small> − 54.<small>5</small> (based on level)</span></span> <span style="color:yellow; white-space:normal"><b>base</b> armor</span>, <span style="color: #00FFFF; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="3.5 base +&nbsp;3.5 growth" data-bot_values="3.5;6.02;8.66;11.43;14.32;17.33;20.46;23.71;27.09;30.59;34.21;37.96;41.83;45.82;49.93;54.16;58.52;63" data-top_values="">3.<small>5</small> − 63 (based on level)</span></span> <span style="color: #00FFFF; white-space:normal"><b>base</b> magic resistance</span>, and <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="8 base +&nbsp;2.5 growth" data-bot_values="8;9.8;11.69;13.66;15.73;17.88;20.11;22.44;24.85;27.35;29.94;32.61;35.38;38.23;41.16;44.19;47.3;50.5" data-top_values="">8 − 50.<small>5</small> (based on level)</span></span> <span style="color:orange; white-space:normal"><b>base</b> attack damage</span>.  <b>Gnar\'s</b> base stats <b>including</b> these bonuses are provided at the top of <strong class="mw-selflink selflink">Gnar\'s</strong> gameplay article, and will appear separately as <b>Mega Gnar</b> on list articles.<i></i>',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Gnar gains the following increases to his base statistics: 100 − 831 (based on level) base health, 3',
        healType: 'BonusHealth',
        values: [
          100, 143, 186, 229, 272, 315, 358, 401, 444, 487, 530, 573, 616, 659,
          702, 745, 788, 831,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'base_hp',
        unitsText: 'base health, 3',
        pre: 'Gnar gains the following increases to his base statistics: 100 − 831',
        post: 'base health, 3',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 − 54',
        values: [5, 54],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 − 54',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '5 (based on level) base armor, 3',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'base_armor',
        unitsText: 'base armor, 3',
        pre: '5',
        post: 'base armor, 3',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '5 − 63 (based on level) base magic resistance, and 8 − 50',
        values: [
          5, 8.41, 11.82, 15.24, 18.65, 22.06, 25.47, 28.88, 32.29, 35.71,
          39.12, 42.53, 45.94, 49.35, 52.76, 56.18, 59.59, 63,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'base_mr',
        unitsText: 'base magic resistance, and 8 − 50',
        pre: '5 − 63',
        post: 'base magic resistance, and 8 − 50',
      },
      {
        effectType: 'Damage',
        name: 'Line 5:',
        raw: '5 (based on level) base attack damage',
        damagetype: 'None',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'base_ad',
        unitsText: 'base attack damage',
        pre: '5',
        post: 'base attack damage',
      },
    ],
  },
  {
    description:
      '<b>Gnar</b> restores health equal to the amount gained when transforming into <b>Mega Gnar</b>, but will only retain his <span style="color: #1F995C; white-space:normal"><b>current</b> percentage health</span> when returning to <b>Mini</b> form. This is not affected by healing modifiers.',
    leveling: [],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Gnar_Boulder_Toss.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> throws a boulder in the target direction that stops upon hitting an enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies upon impact and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds. The boulder then remains on the ground for 6 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '25 / 70 / 115 / 160 / 205 (+ 140% AD)',
        values: [25, 70, 115, 160, 205],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 70 / 115 / 160 / 205',
        children: [
          {
            values: 140,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 140% AD',
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
      'After 0.<small>3</small> seconds, <b>Gnar</b> can pick up the boulder by moving within 90 units of it, refunding 70% of the ability\'s <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> cooldown</span>.',
    leveling: [],
  },
];
const W2: SubSkill[] = [
  {
    img: '/wiki/images/Gnar_Wallop.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> slams his arm down in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies struck within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '25 / 55 / 85 / 115 / 145 (+ 100% AD)',
        values: [25, 55, 85, 115, 145],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 55 / 85 / 115 / 145',
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
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Gnar_Crunch.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location and deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies upon impact. After a 0.<small>25</small>-second delay, additional enemies in a larger radius also take the same damage.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: '80 / 115 / 150 / 185 / 220 (+ 6% maximum health)',
        healType: 'BonusHealth',
        values: [80, 115, 150, 185, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 115 / 150 / 185 / 220',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '+ 6% maximum health',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Gnar_Hop_and_Crunch.png',
    description:
      'If <i>Crunch</i> is used to transform, <b>Gnar</b> will still be able to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">bounce</a></span> as per <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Hop" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Hop" title="Hop"><img alt="Hop" src="/wiki/images/Gnar_Hop.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Hop" title="Gnar/LoL">Hop</a></span></span></i>. <i>Crunch\'s</i> area of effect occurs in both areas, though enemies can only be damaged once.',
    leveling: [],
  },
  {
    description:
      'Enemies <b>Gnar</b> lands directly on top of are affected by <i>Hop\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.',
    leveling: [],
  },
  {
    description: '<i>Crunch will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Mini Gnar</strong></span></span> - Passive:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Hyper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Hyper" title="Hyper\'s"><img alt="Hyper\'s" src="/wiki/images/Gnar_Hyper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Hyper" title="Gnar/LoL">Hyper\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> is increased.',
    leveling: [
      {
        effectType: 'Unique',
        name: ' Hyper Bonus Movement Speed:',
        raw: '40 / 60 / 80%',
        values: [40, 60, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 60 / 80%',
      },
    ],
  },
  {
    img: '/wiki/images/Gnar_GNAR%21.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar"><img alt="Mega Gnar" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar</a></span></span> - Active:</b></span> <b>Gnar</b> thrusts in the target direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking away</a></span> nearby enemies up to 590 units in that direction, though not through terrain, and afterwards dealing them <span style="color: #FF8C34; white-space:normal">physical damage</span>, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 45% after a 0.<small>4</small>-second delay for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '200 / 300 / 400 (+ 50% bonus AD) (+ 100% AP)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
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
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Disable Duration:',
        raw: '1.25 / 1.5 / 1.75',
        values: [1.25, 1.5, 1.75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 1.5 / 1.75',
      },
    ],
  },
  {
    description:
      'Enemies that collide with terrain take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">50% increased damage</span> instantly and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> instead of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '300 / 450 / 600 (+ 75% bonus AD) (+ 150% AP)',
        values: [300, 450, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 450 / 600',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 75% bonus AD',
          },
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
    ],
  },
];
export const MegaGnar = { I1, I2, Q1, W1, E1, I3, Q2, W2, E2, R };
