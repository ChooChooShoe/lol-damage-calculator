import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Varus';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Varus_Living_Vengeance.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> When <b>Varus</b> kills an enemy, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="20;13" data-bot_values="10;15;20" data-top_values="1;7;13" data-bot_key="%">10 / 15 / 20% (based on level)</span> <span style="color:orangered; white-space:normal">(+&nbsp;20% <b>bonus</b> attack speed)</span> <b>bonus</b> attack speed</span></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;1" data-finish="11;16" data-bot_values="5;7;9;11" data-top_values="1;6;11;16">5 / 7 / 9 / 11 (based on level)</span> seconds, increased to <span style="color:orangered; white-space:normal">40%</span> <span style="color:orangered; white-space:normal">(+&nbsp;40% <b>bonus</b> attack speed)</span> upon scoring an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' When Varus kills an enemy, he gains  10 / 15 / 20% (based on level) (+ 20% bonus attack speed) bonus attack speed for 5 / 7 / 9 / 11 (based on level) seconds, increased to 40% (+ 40% bonus attack speed) upon scoring an enemy  champion  takedown',
        increasedStat: 'bonus_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'bonus attack speed for 5 / 7 / 9 / 11',
        pre: 'When Varus kills an enemy, he gains  10 / 15 / 20%',
        post: 'bonus attack speed for 5 / 7 / 9 / 11',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus attack speed',
            pre: '+ 20% bonus attack speed',
          },
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus attack speed',
            pre: '+ 40% bonus attack speed',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Varus_Piercing_Arrow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Varus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 20% for up to 4 seconds to increase <i>Piercing Arrow\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> and damage over the first 1.<small>25</small> seconds of the channel.',
    leveling: [],
  },
  {
    description:
      '<i>Piercing Arrow</i> can be recast within the duration. If the charge completes without reactivation, <i>Piercing Arrow</i> is cancelled and refunds <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">50% of the mana cost</span></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Varus</b> fires a piercing arrow in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. The damage of the arrow as well as any detonated <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Blighted Quiver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Blight"><img alt="Blight" src="/wiki/images/Varus_Blighted_Quiver.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Varus/LoL">Blight</a></span></span></i> stacks are <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"></span><a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased</span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="2% per 0.05 seconds. \'\'This is capped at 1.25 seconds.\'\'" data-bot_values="0;10;20;30;40;50" data-top_values="0;0.25;0.5;0.75;1;1.25" data-bot_key="%">0% − 50% (based on channel time)</span>, and the arrow\'s damage is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="enemies hit" data-displayformula="0% + (15% per enemy hit). \'\'This is capped at a maximum of 67%.\'\'" data-bot_values="0;15;30;45;60;67" data-top_values="0;1;2;3;4;5" data-bot_key="%">0% − 67% (based on enemies hit)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '10 / 46.67 / 83.33 / 120 / 156.67 (+ 83.33 / 86.67 / 90 / 93.33 / 96.67% AD)',
        values: [10, 46.67, 83.33, 120, 156.67],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 46.67 / 83.33 / 120 / 156.67',
        children: [
          {
            values: [83.33, 86.67, 90, 93.33, 96.67],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 83.33 / 86.67 / 90 / 93.33 / 96.67% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '15 / 70 / 125 / 180 / 235 (+ 125 / 130 / 135 / 140 / 145% AD)',
        values: [15, 70, 125, 180, 235],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 70 / 125 / 180 / 235',
        children: [
          {
            values: [125, 130, 135, 140, 145],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 125 / 130 / 135 / 140 / 145% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Reduced Damage:',
        raw: '3.3 / 15.4 / 27.5 / 39.6 / 51.7 (+ 27.5 / 28.6 / 29.7 / 30.8 / 31.9% AD)',
        values: [3.3, 15.4, 27.5, 39.6, 51.7],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3.3 / 15.4 / 27.5 / 39.6 / 51.7',
        children: [
          {
            values: [27.5, 28.6, 29.7, 30.8, 31.9],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 27.5 / 28.6 / 29.7 / 30.8 / 31.9% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Reduced Damage:',
        raw: '4.95 / 23.1 / 41.25 / 59.4 / 77.55 (+ 41.25 / 42.9 / 44.55 / 46.2 / 47.85% AD)',
        values: [4.95, 23.1, 41.25, 59.4, 77.55],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4.95 / 23.1 / 41.25 / 59.4 / 77.55',
        children: [
          {
            values: [41.25, 42.9, 44.55, 46.2, 47.85],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 41.25 / 42.9 / 44.55 / 46.2 / 47.85% AD',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Varus\'</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Blight</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for 6 seconds, refreshing on subsequent applications and stacking up to 3 times. <b>Varus\' </b> abilities consume all <i>Blight</i> stacks on enemies hit to apply the effect.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '7 / 12 / 17 / 22 / 27 (+ 30% AP)',
        values: [7, 12, 17, 22, 27],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7 / 12 / 17 / 22 / 27',
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
  {
    img: '/wiki/images/Varus_Blighted_Quiver.png',
    description:
      '<span class="template_sbc"><b>Blight:</b></span> For each stack consumed, the target is dealt <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. Against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, this also reduces his basic abilities\' <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> by 12% of the <b>total</b> cooldown for each stack, up to 36% per target. This damage is capped at 360 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Magic Damage per Stack:',
        raw: "3 / 3.5 / 4 / 4.5 / 5% (+ 2.5% per 100 AP) of the target's maximum health",
        healType: 'OutgoingHeals',
        values: [3, 3.5, 4, 4.5, 5],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health",
        pre: '3 / 3.5 / 4 / 4.5 / 5%',
        post: "of the target's maximum health",
        children: [
          {
            values: 2.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2.5% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Maximum Bonus Magic Damage:',
        raw: "9 / 10.5 / 12 / 13.5 / 15% (+ 7.5% per 100 AP) of the target's maximum health",
        healType: 'OutgoingHeals',
        values: [9, 10.5, 12, 13.5, 15],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health",
        pre: '9 / 10.5 / 12 / 13.5 / 15%',
        post: "of the target's maximum health",
        children: [
          {
            values: 7.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 7.5% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Varus_Blighted_Quiver_2.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Varus\'</b> next <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow"><img alt="Piercing Arrow" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow</a></span></span></i> within 5.<small>5</small> seconds is empowered to deal <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="6;1" data-finish="14;13" data-bot_values="6;8;10;12;14" data-top_values="1;4;7;10;13" data-bot_key="%">6% − 14% (based on level)</span> of the target\'s <b>missing</b> health</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Piercing Arrow\'s channel time" data-displayformula="5% per 0.2 seconds. \'\'This is capped at 2 seconds.\'\'" data-bot_values="0;5;10;15;20;25;30;35;40;45;50" data-top_values="0;0.2;0.4;0.6;0.8;1;1.2;1.4;1.6;1.8;2" data-bot_key="%">0% − 50% (based on <i>Piercing Arrow\'s</i> channel time)</span>, for a maximum of <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;1" data-finish="21;13" data-bot_values="9;12;15;18;21" data-top_values="1;4;7;10;13" data-bot_key="%">9% − 21% (based on level)</span> of the target\'s <b>missing</b> health</span>. This damage is capped at 360 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: "5 seconds is empowered to deal 6% − 14% (based on level) of the target's missing health bonus magic damage, increased by 0% − 50% (based on Piercing Arrow's channel time), for a maximum of 9% − 21% (based on level) of the target's missing health",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'missing_hp',
        unitsText:
          "of the target's missing health bonus magic damage, increased by 0% − 50%",
        pre: '5 seconds is empowered to deal 6% − 14%',
        post: "of the target's missing health bonus magic damage, increased by 0% − 50%",
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on Piercing Arrow's channel time",
            pre: "based on Piercing Arrow's channel time",
          },
        ],
      },
    ],
  },
  {
    description:
      'If <b>Varus</b> does not cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow"><img alt="Piercing Arrow" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow</a></span></span></i>, <i>Blighted Quiver</i> can be recast after 1 second within the duration, and does so automatically afterwards or when he dies. <i>Blighted Quiver</i> can be cast during the first 0.<small>25</small> seconds of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow\'s"><img alt="Piercing Arrow\'s" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow\'s</a></span></span></i> charge, and will be placed on full cooldown even if <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Piercing Arrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Piercing Arrow"><img alt="Piercing Arrow" src="/wiki/images/Varus_Piercing_Arrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Piercing_Arrow" title="Varus/LoL">Piercing Arrow</a></span></span></i> is not recast.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Varus</b> ends <i>Blighted Quiver</i> and places it on a 1-second cooldown.',
    leveling: [],
  },
  {
    description:
      '<i>Blighted Quiver\'s active and recast can both be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Varus_Hail_of_Arrows.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Varus</b> fires a hail of arrows at the target location that land after 0.<small>5</small> seconds, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 90% bonus AD)',
        values: [60, 100, 140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 90% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'The area then becomes desecrated for 4 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies within and inflicting them with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '25 / 30 / 35 / 40 / 45%',
        values: [25, 30, 35, 40, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45%',
      },
    ],
  },
  {
    description:
      '<i>Hail of Arrows will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Varus_Chain_of_Corruption.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Varus</b> unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for 2 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>. Over the first 1.<small>5</small> seconds, they are also inflicted with maximum stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Varus" data-ability="Blighted Quiver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Blight"><img alt="Blight" src="/wiki/images/Varus_Blighted_Quiver.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Varus/LoL#Blighted_Quiver" title="Varus/LoL">Blight</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 100% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
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
    img: '/wiki/images/Varus_Chain_of_Corruption_2.png',
    description:
      'Upon impact, the tendril roots into the ground from which it seeks out nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. If a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects. A new tendril is then spread out from the infected target that is closest to a nearby uninfected enemy champion. The infection can spread repeatedly until there are no new targets.',
    leveling: [],
  },
  {
    description:
      '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be caught by the tendril.</i>',
    leveling: [],
  },
];
export const Varus = { I, Q, W, E, R };
