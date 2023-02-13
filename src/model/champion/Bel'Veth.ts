import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = "Bel'Veth";

import ChampionSkillsData from '../ChampionSkillsData';
const x = ChampionSkillsData["Bel'Veth"]['Above and Below'];

const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Bel\'Veth</b> attacks 36% faster than the median champion and her attack speed cap is modified to 90, but all sources of damage (including <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects) dealt by her basic attacks are reduced to 75%. Her <span style="color:orangered; white-space:normal">attack speed</span> does not increase through <a href="/wiki/Growth#Increasing_Statistics" class="mw-redirect" title="Growth">growth (per level)</a>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Bel'Veth attacks 36% faster than the median champion and her attack speed cap is modified to 90, but all sources of damage (including  on-hit effects) dealt by her basic attacks are reduced to 75%",
        damagetype: 'None',
        values: 3,
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'dealt by her basic attacks are reduced to 75%',
        pre: "Bel'Veth attacks 36% faster than the median champion and her attack speed cap is modified to 90, but all sources of damage",
        post: 'dealt by her basic attacks are reduced to 75%',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'including  on-hit effects',
            pre: 'including  on-hit effects',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Bel\'Veth\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> casts each generate 2 <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Death in Lavender</i>, lasting for 5 seconds, refreshing on basic attacks and subsequent casts, and stacking up to 6 times. While <b>Bel\'Veth</b> has stacks, she becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;" data-finish="50;" data-bot_values="25;26.47;27.94;29.41;30.88;32.35;33.82;35.29;36.76;38.24;39.71;41.18;42.65;44.12;45.59;47.06;48.53;50" data-top_values="" data-bot_key="%">25% − 50% (based on level)</span> <b>bonus</b> attack speed</span></span>. Her <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> each consume 1 stack.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: " While Bel'Veth has stacks, she becomes  ghosted and gains  25% − 50% (based on level) bonus attack speed",
        increasedStat: 'bonus_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'bonus attack speed',
        pre: "While Bel'Veth has stacks, she becomes  ghosted and gains  25% − 50%",
        post: 'bonus attack speed',
      },
    ],
  },
  {
    img: '/wiki/images/Bel%27Veth_Death_in_Lavender.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Bel\'Veth</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> within 3 seconds of damaging them, she generates a permanent stack of <i>Lavender</i>. Minions and monsters that are large generate 1 stack, champions and epic monsters generate 2 stacks.<br><br>\n<span class="template_sbc"><b>Lavender:</b></span> For each stack, <b>Bel\'Veth</b> gains <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0.28;" data-finish="1;" data-bot_values="0.28;0.34;0.4;0.46;0.52;0.58;0.64;0.7;0.76;0.82;0.88;0.94;1" data-top_values="" data-bot_key="%">0.<small>28</small>% − 1% (based on level)</span> <b>bonus</b> attack speed</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '28% − 1% (based on level) bonus attack speed',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: 'bonus attack speed',
        pre: '28% − 1%',
        post: 'bonus attack speed',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Bel%27Veth_Void_Surge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Bel\'Veth</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the designated direction, though not through terrain, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies she passes through and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 75% effectiveness to the first target hit. <i>Void Surge</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span> against the first target and deals 120% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and modified damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '10 / 15 / 20 / 25 / 30 (+ 110% AD)',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 110% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Monster Damage:',
        raw: '12 / 18 / 24 / 30 / 36 (+ 132% AD)',
        values: [12, 18, 24, 30, 36],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 18 / 24 / 30 / 36',
        children: [
          {
            values: 132,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 132% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Modified Minion Damage:',
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
    img: '/wiki/images/Bel%27Veth_Void_Surge_2.png',
    description:
      '<i>Void Surge</i> can be cast only within a cardinal direction that is off cooldown, and incurs a cooldown between casts. Each cardinal direction has a unique <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> that is reduced equivalent to 0.<small>25</small> <a href="/wiki/Ability_haste" class="mw-redirect" title="Ability haste">ability haste</a> per <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Benefits from all sources of bonus attack speed except the temporary bonus from Death in Lavender"><span style="color:orangered; white-space:normal">1% <b>bonus</b> attack speed</span></span>. These cooldowns reset upon <a href="/wiki/Death" title="Death">respawning</a>.',
    leveling: [],
  },
  {
    description:
      '<i>Void Surge <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Bel\'Veth\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Bel%27Veth_Above_and_Below.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Bel\'Veth</b> slams her tail down in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 0.<small>75</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 110 / 150 / 190 / 230 (+ 100% bonus AD) (+ 125% AP)',
        values: [70, 110, 150, 190, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150 / 190 / 230',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
          {
            values: 125,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 125% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow Duration:',
        raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
        values: [1.25, 1.5, 1.75, 2, 2.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
      },
    ],
  },
  {
    description:
      'If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, it resets <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Void Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Void Surge\'s"><img alt="Void Surge\'s" src="/wiki/images/Bel%27Veth_Void_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Bel\'Veth/LoL">Void Surge\'s</a></span></span></i> dash <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> of the target direction.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Bel%27Veth_Royal_Maelstrom.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Bel\'Veth</b> enters a defensive stance for 1.<small>5</small> seconds, during which she is unable to move, but gains <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;20%</span> (+ <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Does not apply to the life steal gained from Royal Maelstrom">100% life steal</span>) <a href="/wiki/Life_steal" title="Life steal">life steal</a> and 70% damage reduction.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: '5 seconds, during which she is unable to move, but gains  20% (+ 100% life steal) life steal and 70% damage reduction',
        increasedStat: 'lifesteal',
        values: 5,
        valuesIsPercent: true,
        user: 'player',
        units: '',
        unitsText: 'life steal and 70% damage reduction',
        pre: '5 seconds, during which she is unable to move, but gains  20%',
        post: 'life steal and 70% damage reduction',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'lifesteal',
            unitsText: 'life steal',
            pre: '+ 100% life steal',
          },
        ],
      },
    ],
  },
  {
    description:
      'While active, she rapidly slashes at the nearest enemy with the lowest <span style="color: #1F995C; white-space:normal"><b>current</b> health</span> percentage for up to 6 (+ 1 per <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Benefits from all sources of bonus attack speed except the temporary bonus from Death in Lavender"><span style="color:orangered; white-space:normal">33.<small><span style="text-decoration: overline;">3</span></small>% <b>bonus</b> attack speed</span></span>) times over the duration. Each slash deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="3% per 1% of target\'s \'\'\'missing\'\'\' health" data-bot_values="0;30;60;90;120;150;180;210;240;270;300" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 300% (based on target\'s <b>missing</b> health)</span></span>, and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>, and <a href="/wiki/Ability_effects" title="Ability effects">spell</a> effects at <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="0.18% per 1% of target\'s \'\'\'missing\'\'\' health" data-bot_values="6;7.8;9.6;11.4;13.2;15;16.8;18.6;20.4;22.2;24" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">6% − 24% (based on target\'s <b>missing</b> health)</span></span> effectiveness. <br><i>Royal Maelstrom</i> deals 150% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness, and cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. <b>Bel\'Veth</b> cannot perform slashes while unable to declare basic attacks.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage per hit:',
        raw: '8 / 10 / 12 / 14 / 16 (+ 6% AD)',
        values: [8, 10, 12, 14, 16],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 10 / 12 / 14 / 16',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 6% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage per hit:',
        raw: '32 / 40 / 48 / 56 / 64 (+ 24% AD)',
        values: [32, 40, 48, 56, 64],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '32 / 40 / 48 / 56 / 64',
        children: [
          {
            values: 24,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 24% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Monster Damage per hit:',
        raw: '12 / 15 / 18 / 21 / 24 (+ 9% AD)',
        values: [12, 15, 18, 21, 24],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 15 / 18 / 21 / 24',
        children: [
          {
            values: 9,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 9% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Monster Damage per hit:',
        raw: '48 / 60 / 72 / 84 / 96 (+ 36% AD)',
        values: [48, 60, 72, 84, 96],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '48 / 60 / 72 / 84 / 96',
        children: [
          {
            values: 36,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 36% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      "<i>Royal Maelstrom</i> can be recast after 0.<small>75</small> seconds within the duration, and does so automatically after the duration or when <b>Bel'Veth</b> casts an ability.",
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Bel\'Veth</b> ends <i>Royal Maelstrom</i>.',
    leveling: [],
  },
  {
    description:
      '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Bel\'Veth\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> apply a mark to the target for 5 seconds, refreshing on subsequent hits. Every second attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> against the marked target deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> and generates a stack of <i>Endless Banquet</i> that increases this damage by the same value. This effect stacks infinitely, but is capped at 5 stacks against epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. The mark and stacks expire upon attacking a new target.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus True Damage:',
        raw: '6 / 8 / 10 (+ 12% bonus AD)',
        values: [6, 8, 10],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 8 / 10',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 12% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Monster Damage:',
        raw: '30 / 40 / 50 (+ 60% bonus AD)',
        values: [30, 40, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50',
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
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> When <b>Bel\'Veth</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> while alive, a <i>Void Coral</i> is spawned from their corpse for 15 seconds. <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor"><img alt="Baron Nashor" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor</a></span></span> and pit <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span> spawn an <i>Enhanced Void Coral</i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Bel\'Veth</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target <i>Void Coral</i> to consume it over the cast time, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies by 25% ramping to 99% over the duration. She then creates an explosion at the location to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span> to enemies within, capped at <span style="color: #F9966B; white-space:normal">1500</span> versus monsters, and assumes her <span class="template_sbc"><b>True Form</b></span> for 60 seconds.<br>\n<b>Bel\'Veth</b> consumes all existing <i>Void Corals</i> at once, generating a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Death in Lavender" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Death_in_Lavender" title="Lavender"><img alt="Lavender" src="/wiki/images/Bel%27Veth_Death_in_Lavender.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Death_in_Lavender" title="Bel\'Veth/LoL">Lavender</a></span></span></i> for each one consumed.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'True Damage:',
        raw: "150 / 200 / 250 (+ 100% AP) (+ 25% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [150, 200, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 200 / 250',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
          {
            values: 25,
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 25% of target's missing health",
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Bel%27Veth_Endless_Banquet.png',
    description:
      '<span class="template_sbc"><b>True Form:</b></span> <b>Bel\'Veth</b> evolves into a monster, gaining <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> <a href="/wiki/Combat_status" title="Combat status">out-of-combat</a>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> attack range</span>, as well as increased <span style="color:orangered; white-space:normal"><b>total</b> attack speed</span>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Void Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Void Surge"><img alt="Void Surge" src="/wiki/images/Bel%27Veth_Void_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Bel\'Veth/LoL">Void Surge</a></span></span></i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> through <a href="/wiki/Terrain" title="Terrain">terrain</a>. Consuming a <i>Void Coral</i> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">refreshes</span> the duration of <span class="template_sbc"><b>True Form</b></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Bel\'Veth</b>.<br><br>\n<span class="template_sbc"><b>Enhanced Void Coral Bonus:</b></span> <span class="template_sbc"><b>True Form</b></span> is empowered to last 180 seconds and causes <i>Void Remora</i> to spawn from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> that die nearby.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Health:',
        raw: '100 / 150 / 200 (+ 120% bonus AD) (+ 90% AP)',
        values: [100, 150, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 120% bonus AD',
          },
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '25 / 50 / 75',
        values: [25, 50, 75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 50 / 75',
      },
      {
        effectType: 'Unique',
        name: 'Increased Total Attack Speed:',
        raw: '10 / 15 / 20%',
        values: [10, 15, 20],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20%',
      },
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '100 / 150 / 200 (+ 120% bonus AD) (+ 90% AP)',
        values: [100, 150, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 120% bonus AD',
          },
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>A nearby Void Coral is required to cast this ability. The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> modifiers from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Death in Lavender" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Death_in_Lavender" title="Death in Lavender"><img alt="Death in Lavender" src="/wiki/images/Bel%27Veth_Death_in_Lavender.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Death_in_Lavender" title="Bel\'Veth/LoL">Death in Lavender</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Void Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Void Surge"><img alt="Void Surge" src="/wiki/images/Bel%27Veth_Void_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Bel\'Veth/LoL">Void Surge</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Royal Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Royal_Maelstrom" title="Royal Maelstrom"><img alt="Royal Maelstrom" src="/wiki/images/Bel%27Veth_Royal_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Royal_Maelstrom" title="Bel\'Veth/LoL">Royal Maelstrom</a></span></span> affect the <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span> applied by Endless Banquet\'s passive. See <a href="/wiki/Bel%27Veth/LoL#Pets" title="Bel\'Veth/LoL">Pets</a> for details about Void Remora and Void Corals.</i>',
    leveling: [],
  },
];
export const BelVeth = { I, Q, W, E, R };
