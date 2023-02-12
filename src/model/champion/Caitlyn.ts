import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Caitlyn';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Caitlyn\'s</b> basic attacks generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Count</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>, doubled if she is within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>. At 6 stacks, or 5 while in <i>brush</i>, her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> consumes all stacks to become a <i>Headshot</i>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Caitlyn_Headshot.png',
    description:
      '<span class="template_sbc"><b>Headshot:</b></span> <b>Caitlyn\'s</b> basic attack is empowered to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and deal <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="60;1" data-finish="120;13" data-bot_values="60;90;120" data-top_values="1;7;13" data-bot_key="%">60 / 90 / 120% (based on level)</span></span> <span style="color: #E56013; white-space:normal">(+&nbsp;(<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="75% multiplied by standard critical damage factor">131.<small>25</small></span>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="26.25%"><img alt="26.25%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">26.<small>25</small>%</a></span></span>) critical strike chance)</span> <span style="color:orange; white-space:normal">AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, increased to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="110;1" data-finish="120;13" data-bot_values="110;115;120" data-top_values="1;7;13" data-bot_key="%">110 / 115 / 120% (based on level)</span></span> <span style="color: #E56013; white-space:normal">(+&nbsp;(<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="75% multiplied by standard critical damage factor">131.<small>25</small></span>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="26.25%"><img alt="26.25%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">26.<small>25</small>%</a></span></span>) critical strike chance</span> <span style="color:orange; white-space:normal">AD</span> against non-champions.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: " Caitlyn's basic attack is empowered to have an  uncancellable windup and deal 60 / 90 / 120% (based on level) (+ (131",
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 131',
        pre: "Caitlyn's basic attack is empowered to have an  uncancellable windup and deal 60 / 90 / 120%",
        post: '+ 131',
      },
      {
        effectType: 'Damage',
        name: 'Line 3:',
        raw: '25%) critical strike chance) AD bonus physical damage, increased to 110 / 115 / 120% (based on level) (+ (131',
        damagetype: 'Physical',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 131',
        pre: '25% critical strike chance AD bonus physical damage, increased to 110 / 115 / 120%',
        post: '+ 131',
      },
    ],
  },
  {
    description:
      '<b>Caitlyn</b> may fire more than one <i>Headshot</i> until it hits a target, which consumes all stacks.',
    leveling: [],
  },
  {
    img: '/wiki/images/Headshot_2.png',
    description:
      'Enemies that step over a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Yordle Snap Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Yordle Snap Trap"><img alt="Yordle Snap Trap" src="/wiki/images/Caitlyn_Yordle_Snap_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Caitlyn/LoL">Yordle Snap Trap</a></span></span></i> or are hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="90 Caliber Net" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="90 Caliber Net"><img alt="90 Caliber Net" src="/wiki/images/Caitlyn_90_Caliber_Net.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="Caitlyn/LoL">90 Caliber Net</a></span></span></i> can grant an additional <i>Headshot</i> against them at <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1300 range</span> within 1.<small>8</small> seconds, without consuming stacks. Each method grants only one <i>Headshot</i> at a time.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Caitlyn_Piltover_Peacemaker.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Caitlyn</b> fires a piercing shot in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy it passes through, after which it expands in width but deals only 50% damage to enemies it hits thereafter.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 90 / 130 / 170 / 210 (+ 125 / 145 / 165 / 185 / 205% AD)',
        values: [50, 90, 130, 170, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 90 / 130 / 170 / 210',
        children: [
          {
            values: [125, 145, 165, 185, 205],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 125 / 145 / 165 / 185 / 205% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '25 / 45 / 65 / 85 / 105 (+ 62.5 / 72.5 / 82.5 / 92.5 / 102.5% AD)',
        values: [25, 45, 65, 85, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 45 / 65 / 85 / 105',
        children: [
          {
            values: [62.5, 72.5, 82.5, 92.5, 102.5],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 62.5 / 72.5 / 82.5 / 92.5 / 102.5% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Yordle Snap Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Yordle Snap Trap"><img alt="Yordle Snap Trap" src="/wiki/images/Caitlyn_Yordle_Snap_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Caitlyn/LoL">Yordle Snap Trap</a></span></span></i> always take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">full damage</span> from <i>Piltover Peacemaker</i>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Caitlyn_Yordle_Snap_Trap.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Caitlyn</b> sets a visible trap at the target location that is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and arms after 1 second, lasting for a duration. The trap grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1 second after being placed.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Trap Duration:',
        raw: '30 / 35 / 40 / 45 / 50',
        values: [30, 35, 40, 45, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50',
      },
    ],
  },
  {
    description:
      '<b>Caitlyn</b> periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a> a <i>Yordle Snap Trap</i> charge, up to a maximum amount. Deploying traps beyond the maximum destroys the oldest one.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Traps:',
        raw: '3 / 3 / 4 / 4 / 5',
        values: [3, 3, 4, 4, 5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 3 / 4 / 4 / 5',
      },
    ],
  },
  {
    description:
      'The next enemy champion that springs the trap is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 1.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> for 3 seconds, as well as takes additional damage from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Headshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Headshot" title="Headshot"><img alt="Headshot" src="/wiki/images/Caitlyn_Headshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Headshot" title="Caitlyn/LoL">Headshot</a></span></span></i>. Trapped targets become immune to further <i>Yordle Snap Traps</i> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: ' Headshot Damage Increase:',
        raw: '40 / 85 / 130 / 175 / 220 (+ 40 / 50 / 60 / 70 / 80% bonus AD)',
        values: [40, 85, 130, 175, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 85 / 130 / 175 / 220',
        children: [
          {
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 40 / 50 / 60 / 70 / 80% bonus AD',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Caitlyn_90_Caliber_Net.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Caitlyn</b> fires a net in the target direction and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">recoils</a></span> 390 units in the opposite direction. The net deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 130 / 180 / 230 / 280 (+ 80% AP)',
        values: [80, 130, 180, 230, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 130 / 180 / 230 / 280',
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
      '<i><b>Caitlyn</b> will not dash backwards if she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> during the cast time. She can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Caitlyn_Ace_in_the_Hole.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Caitlyn</b> locks onto the target enemy champion and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1 second, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> herself.',
    leveling: [],
  },
  {
    description:
      '<i>Ace in the Hole</i> is placed on a 5-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> if canceled.',
    leveling: [],
  },
  {
    description:
      'Once <b>Caitlyn</b> completes the channel, she fires a homing bullet toward the target that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy champion it hits, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-start="0;0" data-finish="25;100" data-bot_values="0;2.5;5;7.5;10;12.5;15;17.5;20;22.5;25" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 25% (based on critical strike chance)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical damage:',
        raw: '300 / 525 / 750 (+ 200% bonus AD)',
        values: [300, 525, 750],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 525 / 750',
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
];
export const Caitlyn = { I, Q, W, E, R };
