import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Nocturne';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Nocturne_Umbra_Blades.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Nocturne</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to slash in a circle, dealing <span style="color:orange; white-space:normal">120% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to the target and nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="13;" data-finish="30;" data-bot_values="13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30" data-top_values="">13 − 30 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> per enemy hit. Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, <i>Umbra Blade\'s</i> damage to secondary targets and healing are reduced by 50% and it applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup> to all targets at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Periodically, Nocturne empowers his next basic attack to slash in a circle, dealing 120% AD physical damage to the target and nearby enemies and  healing himself for 13 − 30 (based on level) (+ 30% AP) per enemy hit',
        healType: 'PhysicalVamp',
        values: [
          13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
          30,
        ],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'per enemy hit',
        pre: 'Periodically, Nocturne empowers his next basic attack to slash in a circle, dealing 120% AD physical damage to the target and nearby enemies and  healing himself for 13 − 30',
        post: 'per enemy hit',
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
        effectType: 'Heal',
        name: 'Line 2:',
        raw: " Against  minions, Umbra Blade's damage to secondary targets and healing are reduced by 50% and it applies  on-hit effects(bug) to all targets at 100% effectiveness",
        healType: 'OutgoingHeals',
        values: 5,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'to all targets at 100% effectiveness',
        pre: "Against  minions, Umbra Blade's damage to secondary targets and healing are reduced by 50% and it applies  on-hit effects",
        post: 'to all targets at 100% effectiveness',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'bug',
            pre: 'bug',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Umbra Blades</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> against the primary target, modifying the <span style="color: #FF8C34; white-space:normal">physical damage</span> dealt to<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(192.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="38.5%"><img alt="38.5%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">38.<small>5</small>%</a></span></span>) AD</span>.&nbsp;」</span><span class="flipText2">「&nbsp;110% of the <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span> of his basic attacks.&nbsp;」</span></span>',
    leveling: [],
  },
  {
    img: '/wiki/images/Steel_Blades.png',
    description:
      'Basic attacks reduce <i>Umbra Blades\' </i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by 1 second, increased to 3 against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Nocturne_Duskbringer.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> casts out a shadow blade in the target direction that leaves a <i>Dusk Trail</i> in its wake, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit will leave a <i>Dusk Trail</i> behind while moving. <i>Dusk Trails</i> last 5 seconds and will slowly disappear afterwards.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical damage:',
        raw: '65 / 110 / 155 / 200 / 245 (+ 85% bonus AD)',
        values: [65, 110, 155, 200, 245],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 110 / 155 / 200 / 245',
        children: [
          {
            values: 85,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 85% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'While on the <i>Dusk Trail</i>, <b>Nocturne</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack damage</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus total</b> movement speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: '20 / 30 / 40 / 50 / 60',
        values: [20, 30, 40, 50, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
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
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Nocturne</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
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
        name: 'Enhanced Bonus Attack Speed:',
        raw: '60 / 70 / 80 / 90 / 100%',
        values: [60, 70, 80, 90, 100],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 70 / 80 / 90 / 100%',
      },
    ],
  },
  {
    img: '/wiki/images/Nocturne_Shroud_of_Darkness.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> for 1.<small>5</small> seconds. Upon successfully blocking a hostile effect, <i>Shroud of Darkness\' </i><span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> is doubled for 5 seconds.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Nocturne</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">90% <b>bonus</b> movement speed</span></span> while facing nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">feared</a></span> targets.',
    leveling: [],
  },
  {
    img: '/wiki/images/Nocturne_Unspeakable_Horror.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> torments the target, forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between himself and the target for 2 seconds, during which the target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '80 / 125 / 170 / 215 / 260 (+ 100% AP)',
        values: [80, 125, 170, 215, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 125 / 170 / 215 / 260',
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
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '20 / 31.25 / 42.5 / 53.75 / 65 (+ 25% AP)',
        values: [20, 31.25, 42.5, 53.75, 65],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 31.25 / 42.5 / 53.75 / 65',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the tether is not broken by the end of its duration, the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">feared</a></span> for a duration while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 90%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Disable Duration:',
        raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
        values: [1.25, 1.5, 1.75, 2, 2.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Nocturne_Paranoia.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> terrorizes all enemy champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsighting</a></span> them for 6 seconds. He can recast <i>Paranoia</i> for the same duration after 0.<small>25</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Nocturne</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target enemy champion, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> upon arrival.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '150 / 275 / 400 (+ 120% bonus AD)',
        values: [150, 275, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 275 / 400',
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
  {
    description:
      '<i><b>Nocturne</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
    leveling: [],
  },
];
export const Nocturne = { I, Q, W, E, R };
