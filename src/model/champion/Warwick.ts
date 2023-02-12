import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Warwick';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Warwick_Eternal_Hunger.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Warwick</b> deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="12;" data-finish="46;" data-bot_values="12;14;16;18;20;22;24;26;28;30;32;34;36;38;40;42;44;46" data-top_values="">12 − 46 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;15% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span></span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.<br><br>\nWhile <span style="color: #1F995C; white-space:normal">below 50% <b>maximum</b> health</span>, <b>Warwick</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for 100% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after resistances and modifiers.">post-mitigation damage</span> dealt by <i>Eternal Hunger</i>, increased to 250% while <span style="color: #1F995C; white-space:normal">below 25% <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Warwick deals 12 − 46 (based on level) (+ 15% bonus AD) (+ 10% AP) bonus magic damage  on-hit',
        damagetype: 'Magic',
        values: [
          12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44,
          46,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage  on-hit',
        pre: 'Warwick deals 12 − 46',
        post: 'bonus magic damage  on-hit',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 15% bonus AD',
          },
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
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Warwick_Jaws_of_the_Beast.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Warwick</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">lunges</a></span> at the target enemy over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.2475 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> and bites them, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for a percentage of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after resistances and most modifiers.">post-mitigation damage</span> dealt, as well as applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects, and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness. The damage based on the target\'s health ratio is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "6 / 7 / 8 / 9 / 10% of target's maximum health (+ 120% AD) (+ 100% AP)",
        healType: 'OutgoingHeals',
        values: [6, 7, 8, 9, 10],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "6 / 7 / 8 / 9 / 10% of target's maximum health",
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 120% AD',
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
        name: 'Maximum Monster Damage:',
        raw: '100 / 125 / 150 / 175 / 200 (+ 120% AD) (+ 100% AP)',
        values: [100, 125, 150, 175, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 125 / 150 / 175 / 200',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 120% AD',
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
        name: 'Healing Percentage:',
        raw: '25 / 37.5 / 50 / 62.5 / 75%',
        values: [25, 37.5, 50, 62.5, 75],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 37.5 / 50 / 62.5 / 75%',
      },
    ],
  },
  {
    description:
      'While <i>Jaws of the Beast</i> is active, <b>Warwick</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span> and clamps his jaw on the target, following <b>all</b> of their movement. The ability can be held for additional effects.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Hold:</b></span> <b>Warwick</b> performs the bite, and then begins to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charge</a></span> for 0.<small>5</small> seconds, extended if the target is under effects of a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacement</a></span>. During the charge, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> behind the target.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Warwick</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> upon basic attacking an enemy who is below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50% of their <b>maximum</b> health</span></span>, but loses it when not attacking them or switching to a target above the threshold.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '70 / 80 / 90 / 100 / 110%',
        values: [70, 80, 90, 100, 110],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 80 / 90 / 100 / 110%',
      },
      {
        effectType: 'Unique',
        name: 'Increased Attack Speed:',
        raw: '175 / 200 / 225 / 250 / 275%',
        values: [175, 200, 225, 250, 275],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 200 / 225 / 250 / 275%',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Warwick</b> senses all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> on the map who are damaged below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50% of their <b>maximum</b> health</span></span> by an allied source, marking them with <i>Blood Hunt</i> until they regenerate or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> above this threshold again. He sees trails leading toward them and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while following a trail. This bonus is lost for 0.<small>5</small> seconds upon <a href="/wiki/Combat_status" title="Combat status">entering champion combat</a>, but will build up again over 3.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '35 / 40 / 45 / 50 / 55%',
        values: [35, 40, 45, 50, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 40 / 45 / 50 / 55%',
      },
      {
        effectType: 'Unique',
        name: 'Increased Movement Speed:',
        raw: '87.5 / 100 / 112.5 / 125 / 137.5%',
        values: [87.5, 100, 112.5, 125, 137.5],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '87.5 / 100 / 112.5 / 125 / 137.5%',
      },
    ],
  },
  {
    description:
      'The <span style="color:orangered; white-space:normal">attack speed</span> and <span style="color: #F5EE99; white-space:normal">movement speed</span> Passive bonuses are increased to 250% against enemies who are below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;20% of their <b>maximum</b> health</span></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Warwick_Blood_Hunt.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Warwick</b> senses the nearest enemy champion in the area, marking them with <i>Blood Hunt</i> for 8 seconds, gaining both passive bonuses against them regardless of their <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> health</span></span>.',
    leveling: [],
  },
  {
    description:
      '<i>Blood Hunt</i> is placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Not reduced by Ability Haste">3-second static cooldown</span></span> during champion combat. Additionally, while no enemy champions are marked, the <b>current</b> cooldown of <i>Blood Hunt</i> runs out twice as quickly - it is reduced by an additional second for each second passed.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Warwick_Primal_Howl.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Warwick</b> gains damage reduction for up to 2.<small>5</small> seconds. <i>Primal Howl</i> can be recast after 1 second, and does so automatically after the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Reduction:',
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
    img: '/wiki/images/Warwick_Primal_Howl_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Warwick</b> howls, ending <i>Primal Howl\'s</i> effects and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> nearby enemies for 1 second, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 90%.',
    leveling: [],
  },
  {
    description:
      'Starting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Warwick" data-ability="Infinite Duress" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Warwick/LoL#Infinite_Duress" title="Infinite Duress\'"><img alt="Infinite Duress\'" src="/wiki/images/Warwick_Infinite_Duress.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Warwick/LoL#Infinite_Duress" title="Warwick/LoL">Infinite Duress\'</a></span></span></i> channel while <i>Primal Howl</i> is active will initiate the recast without ending the damage reduction buff prematurely.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Warwick_Infinite_Duress.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Warwick</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> in the target direction with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span>, stopping upon hitting an enemy champion. He then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocks them down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 1.<small>5</small> seconds to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppress</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span>, and deal <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> himself in the process.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '175 / 350 / 525 (+ 167% bonus AD)',
        values: [175, 350, 525],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 350 / 525',
        children: [
          {
            values: 167,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 167% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Warwick</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for 100% of all <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after resistances and modifiers.">post-mitigation damage</span> he deals to the target during <i>Infinite Duress</i>.',
    leveling: [],
  },
  {
    description:
      '<i>Infinite Duress</i> applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects 3 times, and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Warwick" data-ability="Primal Howl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Warwick/LoL#Primal_Howl" title="Primal Howl"><img alt="Primal Howl" src="/wiki/images/Warwick_Primal_Howl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Warwick/LoL#Primal_Howl" title="Warwick/LoL">Primal Howl</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
export const Warwick = { I, Q, W, E, R };
