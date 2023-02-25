import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = "Bel'Veth";

export default {
  'Death in Lavender': {
    name: 'Death in Lavender',
    display_name: 'Death in Lavender',
    champion: "Bel'Veth",
    skill: 'I',
    image: {
      full: 'Belveth_Passive.Belveth.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL" title="Bel\'Veth\'s"><img alt="Bel\'Veth\'s" src="/wiki/images/Bel%27Veth_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL" title="Bel\'Veth/LoL">Bel\'Veth\'s</a></span></span> attack speed cap is greatly increased, but her <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack speed</span></span> does not grow by <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;leveling up</span>. The damage dealt by her basic attacks (including <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects) is reduced.',
      '<span class="template_sbc"><b>Innate:</b></span> <b>Bel\'Veth\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> casts generate stacks of <i>Death in Lavender</i>, which lasts a few seconds and stacks up to a cap. While <b>Bel\'Veth</b> has stacks, she becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span>. Her basic attacks consume stacks.',
      '<span class="template_sbc"><b>Innate:</b></span> When <b>Bel\'Veth</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, she generates a permanent stack of <i>Lavender</i>.',
      '<span class="template_sbc"><b>Lavender:</b></span> For each stack, <b>Bel\'Veth</b> gains <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span>.',
    ],
    description: [
      {
        description:
          "Innate: Bel'Veth attacks 36% faster than the median champion and her attack speed cap is modified to 90, but all sources of damage (including  on-hit effects) dealt by her basic attacks are reduced to 75%. Her attack speed does not increase through growth (per level).",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Bel\'Veth</b> attacks 36% faster than the median champion and her attack speed cap is modified to 90, but all sources of damage (including <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects) dealt by her basic attacks are reduced to 75%. Her <span style="color:orangered; white-space:normal">attack speed</span> does not increase through <a href="/wiki/Growth#Increasing_Statistics" class="mw-redirect" title="Growth">growth (per level)</a>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: " Bel'Veth attacks 36% faster than the median champion and her attack speed cap is modified to 90, but all sources of damage (including  on-hit effects) dealt by her basic attacks are reduced to 75%",
            damagetype: 'None',
            values: 3,
            valuesIsPercent: true,
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
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Her attack speed does not increase through growth (per level).',
            values: 0,
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Her attack speed does not increase through growth',
            post: '.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'per level',
                pre: 'per level',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Innate: Bel'Veth's ability casts each generate 2 stacks of Death in Lavender, lasting for 5 seconds, refreshing on basic attacks and subsequent casts, and stacking up to 6 times. While Bel'Veth has stacks, she becomes  ghosted and gains  25% − 50% (based on level) bonus attack speed. Her basic attacks each consume 1 stack.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Bel\'Veth\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> casts each generate 2 <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Death in Lavender</i>, lasting for 5 seconds, refreshing on basic attacks and subsequent casts, and stacking up to 6 times. While <b>Bel\'Veth</b> has stacks, she becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;" data-finish="50;" data-bot_values="25;26.47;27.94;29.41;30.88;32.35;33.82;35.29;36.76;38.24;39.71;41.18;42.65;44.12;45.59;47.06;48.53;50" data-top_values="" data-bot_key="%">25% − 50% (based on level)</span> <b>bonus</b> attack speed</span></span>. Her <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> each consume 1 stack.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: " Bel'Veth's ability casts each generate 2 stacks of Death in Lavender, lasting for 5 seconds, refreshing on basic attacks and subsequent casts, and stacking up to 6 times",
            min: 0,
            max: 10,
            description:
              " Bel'Veth's ability casts each generate 2 stacks of Death in Lavender, lasting for 5 seconds, refreshing on basic attacks and subsequent casts, and stacking up to 6 times",
            values: 2,
            units: 'feastStacks',
            unitsText:
              'ability casts each generate 2 stacks of Death in Lavender, lasting for 5 seconds, refreshing on basic attacks and subsequent casts, and stacking up to 6 times',
            pre: "Bel'Veth's ability casts each generate 2 stacks of Death in Lavender, lasting for 5 seconds, refreshing on basic attacks and subsequent casts, and stacking up to 6 times",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: "While Bel'Veth has stacks, she becomes  ghosted and gains  25% − 50% (based on level) bonus attack speed",
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'bonus attack speed',
            pre: "While Bel'Veth has stacks, she becomes  ghosted and gains  25% − 50%",
            post: 'bonus attack speed',
          },
          {
            effectType: 'Stacks',
            name: 'Line 3:',
            raw: 'Her basic attacks each consume 1 stack.',
            min: 0,
            max: 10,
            description: 'Her basic attacks each consume 1 stack.',
            values: 1,
            units: 'feastStacks',
            unitsText: 'basic attacks each consume 1 stack.',
            pre: 'Her basic attacks each consume 1 stack.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Bel'Veth Death in Lavender.png",
        description:
          "Innate: Whenever Bel'Veth scores a  takedown against a  champion,  monster, or  minion within 3 seconds of damaging them, she generates a permanent stack of Lavender. Minions and monsters that are large generate 1 stack, champions and epic monsters generate 2 stacks.\nLavender: For each stack, Bel'Veth gains 0.28% − 1% (based on level) bonus attack speed.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Bel\'Veth</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> within 3 seconds of damaging them, she generates a permanent stack of <i>Lavender</i>. Minions and monsters that are large generate 1 stack, champions and epic monsters generate 2 stacks.<br><br>\n<p><span class="template_sbc"><b>Lavender:</b></span> For each stack, <b>Bel\'Veth</b> gains <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0.28;" data-finish="1;" data-bot_values="0.28;0.34;0.4;0.46;0.52;0.58;0.64;0.7;0.76;0.82;0.88;0.94;1" data-top_values="" data-bot_key="%">0.<small>28</small>% − 1% (based on level)</span> <b>bonus</b> attack speed</span>.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: " Whenever Bel'Veth scores a  takedown against a  champion,  monster, or  minion within 3 seconds of damaging them, she generates a permanent stack of Lavender",
            increasedStat: 'feastStacks',
            values: 3,
            units: '',
            unitsText:
              "Bel'Veth scores a  takedown against a  champion,  monster, or  minion within 3 seconds of damaging them, she generates a permanent stack of Lavender",
            pre: "Whenever Bel'Veth scores a  takedown against a  champion,  monster, or  minion within 3 seconds of damaging them, she generates a permanent stack of Lavender",
          },
          {
            effectType: 'Gain',
            name: 'Minions and monsters that are large generate 1 stack, champions and epic monsters generate 2 stacks.\nLavender:',
            raw: " For each stack, Bel'Veth gains 0.28% − 1% (based on level) bonus attack speed.",
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'bonus attack speed.',
            pre: "For each stack, Bel'Veth gains 0.28% − 1%",
            post: 'bonus attack speed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    notes:
      '* <i>Death in Lavender\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> effect will not trigger against monsters if they were slain by an enemy.\n<ul><li><i>Death in Lavender</i> stacks are indicated on <b>Bel\'Veth\'s</b> health bar.</li>\n<li><b>Bel\'Veth\'s</b> basic attack damage modifier will reduce the damage dealt by on-hit effects even if they aren\'t applied on-hit.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  'Void Surge': {
    name: 'Void Surge',
    display_name: 'Void Surge',
    champion: "Bel'Veth",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'BelvethQ.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '400',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Center-to-edge">100</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">800 / 850 / 900 / 950 / 1000 <span style="color: #F5EE99; white-space:normal">+&nbsp;100% movement speed</span></span>',
    cast_time: 'None',
    cooldown: '1',
    customlabel: 'Per-Direction Cooldown',
    custominfo:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">16 / 15 / 14 / 13 / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL" title="Bel\'Veth"><img alt="Bel\'Veth" src="/wiki/images/Bel%27Veth_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL" title="Bel\'Veth/LoL">Bel\'Veth</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, though not through <a href="/wiki/Terrain" title="Terrain">terrain</a>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies she passes through and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <a href="/wiki/Ability_effects" title="Ability effects">spell</a> effects only to the first target hit.',
      '<i>Void Surge</i> can be cast only within a cardinal direction that is off cooldown, each direction has a unique <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    ],
    description: [
      {
        icon: "/wiki/images/Bel'Veth Void Surge.png",
        description:
          "Active: Bel'Veth  dashes in the designated direction, though not through terrain, dealing physical damage to enemies she passes through and applying  on-hit effects at 75% effectiveness to the first target hit. Void Surge can  critically strike for (75% +  35%) bonus physical damage against the first target and deals 120% damage to  monsters and modified damage against  minions.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Bel\'Veth</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the designated direction, though not through terrain, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies she passes through and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 75% effectiveness to the first target hit. <i>Void Surge</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span> against the first target and deals 120% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and modified damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: " Bel'Veth  dashes in the designated direction, though not through terrain, dealing physical damage to enemies she passes through and applying  on-hit effects at 75% effectiveness to the first target hit",
            damagetype: 'Physical',
            values: 7,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness to the first target hit dashes in the designated direction, though not through terrain, dealing physical damage to enemies she passes through and applying  on-hit effects at 75',
            pre: "Bel'Veth  dashes in the designated direction, though not through terrain, dealing physical damage to enemies she passes through and applying  on-hit effects at 75% effectiveness to the first target hit",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Void Surge can  critically strike for (75% +  35%) bonus physical damage against the first target and deals 120% damage to  monsters and modified damage against  minions.',
            values: 0,
            user: 'none',
            units: '',
            unitsText:
              'bonus physical damage against the first target and deals 120% damage to  monsters and modified damage against  minions.',
            pre: 'Void Surge can  critically strike for',
            post: 'bonus physical damage against the first target and deals 120% damage to  monsters and modified damage against  minions.',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '75% +  35%',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '10 / 15 / 20 / 25 / 30 (+ 110% AD)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color:orange; white-space:normal">(+&nbsp;110% AD)</span>',
          },
          {
            name: 'Modified Minion Damage:',
            values: '60 / 70 / 80 / 90 / 100%',
            valuesHTML: '60 / 70 / 80 / 90 / 100%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 110% AD)',
            damagetype: 'Physical',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 110% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Modified Minion Damage:',
            raw: '60 / 70 / 80 / 90 / 100%',
            damagetype: 'None',
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
        icon: "/wiki/images/Bel'Veth Void Surge 2.png",
        description:
          'Void Surge can be cast only within a cardinal direction that is off cooldown, and incurs a cooldown between casts. Each cardinal direction has a unique  cooldown that is reduced equivalent to 0.25 ability haste per 1% bonus attack speed. These cooldowns reset upon respawning.',
        descriptionHTML:
          '<i>Void Surge</i> can be cast only within a cardinal direction that is off cooldown, and incurs a cooldown between casts. Each cardinal direction has a unique <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> that is reduced equivalent to 0.<small>25</small> <a href="/wiki/Ability_haste" class="mw-redirect" title="Ability haste">ability haste</a> per <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Benefits from all sources of bonus attack speed except the temporary bonus from Death in Lavender"><span style="color:orangered; white-space:normal">1% <b>bonus</b> attack speed</span></span>. These cooldowns reset upon <a href="/wiki/Death" title="Death">respawning</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "Void Surge  resets Bel'Veth's basic attack timer.",
        descriptionHTML:
          '<i>Void Surge <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Bel\'Veth\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* The icon partially darkens based on the combination of dashes available. When all dashes are expended, the cooldown indicates the next available dash.\n<ul><li>While in <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Endless Banquet" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Endless_Banquet" title="True Form"><img alt="True Form" src="/wiki/images/Bel%27Veth_Endless_Banquet.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Endless_Banquet" title="Bel\'Veth/LoL">True Form</a></span></span>, <i>Void Surge\'s</i> dash distance is extended up to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pending for test">225</span> units when targeted across terrain.</li>\n<li>The basic attack reset is not considered one for <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span>.</li>\n<li><i>Void Surge</i> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> only as the first enemy hit.</li></ul>',
  },
  'Above and Below': {
    name: 'Above and Below',
    display_name: 'Above and Below',
    champion: "Bel'Veth",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'BelvethW.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '0 -  660',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200',
    cast_time: '0.<small>5</small>',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL" title="Bel\'Veth"><img alt="Bel\'Veth" src="/wiki/images/Bel%27Veth_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL" title="Bel\'Veth/LoL">Bel\'Veth</a></span></span> slams her tail in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
      'If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, it <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;resets</span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Void Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Void Surge\'s"><img alt="Void Surge\'s" src="/wiki/images/Bel%27Veth_Void_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Bel\'Veth/LoL">Void Surge\'s</a></span></span></i> dash cooldown of the target direction.',
    ],
    description: [
      {
        icon: "/wiki/images/Bel'Veth Above and Below.png",
        description:
          "Active: Bel'Veth slams her tail down in the target direction that deals magic damage to enemies hit,  knocks them up for 0.75 seconds, and  slows them by 50% for a duration.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Bel\'Veth</b> slams her tail down in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 0.<small>75</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 110 / 150 / 190 / 230 (+ 100% bonus AD) (+ 125% AP)',
            valuesHTML:
              '70 / 110 / 150 / 190 / 230 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;125% AP)</span>',
          },
          {
            name: 'Slow Duration:',
            values: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            valuesHTML:
              '1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 100% bonus AD) (+ 125% AP)',
            damagetype: 'Magic',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 125,
                valuesIsPercent: true,
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
          "If this hits an enemy  champion, it resets  Void Surge's dash  cooldown of the target direction.",
        descriptionHTML:
          'If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, it resets <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Void Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Void Surge\'s"><img alt="Void Surge\'s" src="/wiki/images/Bel%27Veth_Void_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Bel\'Veth/LoL">Void Surge\'s</a></span></span></i> dash <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> of the target direction.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><i>Above and Below</i> can reset the cooldown of each dash from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Void Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Void Surge"><img alt="Void Surge" src="/wiki/images/Bel%27Veth_Void_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Bel\'Veth/LoL">Void Surge</a></span></span>.\n<ul><li>More than one cooldown can be reset if enemy champions were hit within multiple directions.</li></ul></li></ul>',
  },
  'Royal Maelstrom': {
    name: 'Royal Maelstrom',
    display_name: 'Royal Maelstrom',
    champion: "Bel'Veth",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'BelvethE.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slash radius">500</span>',
    cast_time: 'None',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">24 / 22.<small>5</small> / 21 / 19.<small>5</small> / 18</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL" title="Bel\'Veth"><img alt="Bel\'Veth" src="/wiki/images/Bel%27Veth_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL" title="Bel\'Veth/LoL">Bel\'Veth</a></span></span> enters a brief defensive stance, gaining <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span> and damage reduction.<br>\n<p>During this time, <b>Bel\'Veth</b> rapidly slashes at the most wounded enemy, with the max number of slashes increased based on <span style="color:orangered; white-space:normal">her <b>bonus</b> attack speed</span>. Each slash deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <a href="/wiki/Ability_effects" title="Ability effects">spell</a> effects based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.\n</p>',
      "<i>Royal Maelstrom</i> can be recast within the duration, and does so automatically afterwards or when <b>Bel'Veth</b> casts an ability.",
      '<span class="template_sbc"><b>Recast:</b></span> <b>Bel\'Veth</b> ends <i>Royal Maelstrom</i>.',
    ],
    description: [
      {
        icon: "/wiki/images/Bel'Veth Royal Maelstrom.png",
        description:
          "Active: Bel'Veth enters a defensive stance for 1.5 seconds, during which she is unable to move, but gains  20% (+ 100% life steal) life steal and 70% damage reduction.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Bel\'Veth</b> enters a defensive stance for 1.<small>5</small> seconds, during which she is unable to move, but gains <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;20%</span> (+ <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Does not apply to the life steal gained from Royal Maelstrom">100% life steal</span>) <a href="/wiki/Life_steal" title="Life steal">life steal</a> and 70% damage reduction.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: " Bel'Veth enters a defensive stance for 1.5 seconds, during which she is unable to move, but gains  20% (+ 100% life steal) life steal and 70% damage reduction.",
            increasedStat: 'lifesteal',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText: 'life steal and 70% damage reduction.',
            pre: "Bel'Veth enters a defensive stance for 1.5 seconds, during which she is unable to move, but gains  20%",
            post: 'life steal and 70% damage reduction.',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'lifesteal',
                unitsText: 'life steal',
                pre: '+ 100% life steal',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "While active, she rapidly slashes at the nearest enemy with the lowest current health percentage for up to 6 (+ 1 per 33.3% bonus attack speed) times over the duration. Each slash deals physical damage, increased by 0% − 300% (based on target's missing health), and applies  on-hit, on-attack, and spell effects at 6% − 24% (based on target's missing health) effectiveness. Royal Maelstrom deals 150% damage to  monsters, applies  life steal at 100% effectiveness, and cannot  critically strike. Bel'Veth cannot perform slashes while unable to declare basic attacks.",
        descriptionHTML:
          'While active, she rapidly slashes at the nearest enemy with the lowest <span style="color: #1F995C; white-space:normal"><b>current</b> health</span> percentage for up to 6 (+ 1 per <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Benefits from all sources of bonus attack speed except the temporary bonus from Death in Lavender"><span style="color:orangered; white-space:normal">33.<small><span style="text-decoration: overline;">3</span></small>% <b>bonus</b> attack speed</span></span>) times over the duration. Each slash deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="3% per 1% of target\'s \'\'\'missing\'\'\' health" data-bot_values="0;30;60;90;120;150;180;210;240;270;300" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 300% (based on target\'s <b>missing</b> health)</span></span>, and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>, and <a href="/wiki/Ability_effects" title="Ability effects">spell</a> effects at <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="0.18% per 1% of target\'s \'\'\'missing\'\'\' health" data-bot_values="6;7.8;9.6;11.4;13.2;15;16.8;18.6;20.4;22.2;24" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">6% − 24% (based on target\'s <b>missing</b> health)</span></span> effectiveness. <br><i>Royal Maelstrom</i> deals 150% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness, and cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. <b>Bel\'Veth</b> cannot perform slashes while unable to declare basic attacks.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'While active, she rapidly slashes at the nearest enemy with the lowest current health percentage for up to 6 (+ 1 per 33.3% bonus attack speed) times over the duration',
            healType: 'BonusHealth',
            values: 6,
            user: 'none',
            units: '',
            unitsText: 'times over the duration',
            pre: 'While active, she rapidly slashes at the nearest enemy with the lowest current health percentage for up to 6',
            post: 'times over the duration',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus attack speedper 33.3',
                pre: '+ 1 per 33.3% bonus attack speed',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'Royal Maelstrom deals 150% damage to  monsters, applies  life steal at 100% effectiveness, and cannot  critically strike',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText:
              'damage to  monsters, applies  life steal at 100Maelstrom deals 150',
            pre: 'Royal Maelstrom deals 150% damage to  monsters, applies  life steal at 100% effectiveness, and cannot  critically strike',
          },
        ],
        leveling: [
          {
            name: 'Minimum Physical Damage per hit:',
            values: '8 / 10 / 12 / 14 / 16 (+ 6% AD)',
            valuesHTML:
              '8 / 10 / 12 / 14 / 16 <span style="color:orange; white-space:normal">(+&nbsp;6% AD)</span>',
          },
          {
            name: 'Minimum Monster Damage per hit:',
            values: '12 / 15 / 18 / 21 / 24 (+ 9% AD)',
            valuesHTML:
              '12 / 15 / 18 / 21 / 24 <span style="color:orange; white-space:normal">(+&nbsp;9% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage per hit:',
            raw: '8 / 10 / 12 / 14 / 16 (+ 6% AD)',
            damagetype: 'Physical',
            values: [8, 10, 12, 14, 16],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 10 / 12 / 14 / 16',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 6% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Monster Damage per hit:',
            raw: '12 / 15 / 18 / 21 / 24 (+ 9% AD)',
            damagetype: 'None',
            values: [12, 15, 18, 21, 24],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 15 / 18 / 21 / 24',
            children: [
              {
                values: 9,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 9% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          "Royal Maelstrom can be recast after 0.75 seconds within the duration, and does so automatically after the duration or when Bel'Veth casts an ability.",
        descriptionHTML:
          "<i>Royal Maelstrom</i> can be recast after 0.<small>75</small> seconds within the duration, and does so automatically after the duration or when <b>Bel'Veth</b> casts an ability.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "Recast: Bel'Veth ends Royal Maelstrom.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Bel\'Veth</b> ends <i>Royal Maelstrom</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The target does not have to be  visible to be hit by this ability.',
        descriptionHTML:
          '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: false,
    callforhelp: 'true',
    notes:
      '* <i>Royal Maelstrom</i> does not prioritize champions over other units.\n<ul><li><b>Bel\'Veth</b> cannot attack <a href="/wiki/Structure" class="mw-redirect" title="Structure">structures</a>, <a href="/wiki/Ward" title="Ward">wards</a>, nor <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a> with <i>Royal Maelstrom</i>.</li>\n<li>If <b>Bel\'Veth</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Berserk"><a href="/wiki/Berserk" title="Berserk"><img alt="Berserk icon.png" src="/wiki/images/Berserk_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Berserk" class="mw-redirect" title="Berserk">berserked</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunted</a></span>, she will slash at the unit she is forced to attack.</li>\n<li>Each slash\'s damage triggers a stack of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span>.</li>\n<li>Despite this ability\'s cooldown starts on cast, it cannot be reduced by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Navori Quickblades" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades\'"><img alt="Navori Quickblades\'" src="/wiki/images/Navori_Quickblades_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades">Navori Quickblades\'</a></span></span> <a href="/wiki/Named_item_effect#Transcendence" title="Named item effect">Transcendence</a> during the effect of this ability.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup> Cooldowns of the other basic abilities can be normally reduced during this ability, though.</li>\n<li>The following table refers for interactions while <b>Bel\'Veth</b> is performing <i>Royal Maelstrom</i>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All items interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>    <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
  'Endless Banquet': {
    name: 'Endless Banquet',
    display_name: 'Endless Banquet',
    champion: "Bel'Veth",
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'BelvethR.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '350',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slow and explosion radius">500</span>',
    cast_time: '1',
    cooldown: '1',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Every second basic attack on the same target deals <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span> and generates a stack that increases the damage. This can stack infinitely, and expires after a short time or upon switching targets.',
      '<span class="template_sbc"><b>Passive:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedowns"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">Takedowns</a></span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> spawn a <i>Void Coral</i> for some time. <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor"><img alt="Baron Nashor" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor</a></span></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span> spawn an <i>Enhance Void Coral</i>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Bel\'Veth</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target <i>Void Coral</i>, gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies before violently exploding, dealing <span style="color: #F9966B; white-space:normal">true damage</span> based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span> and assuming her <span class="template_sbc"><b>True Form</b></span> for a while. Consuming an <i>Enhanced Void Coral</i> enhances her <span class="template_sbc"><b>True Form</b></span>.',
      '<span class="template_sbc"><b>True Form:</b></span> <b>Bel\'Veth</b> gains bonus <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span>, out of combat <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>, and increased <span style="color:orangered; white-space:normal"><b>total</b> attack speed</span>. During this time, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Void Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Void Surge"><img alt="Void Surge" src="/wiki/images/Bel%27Veth_Void_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Bel\'Veth/LoL">Void Surge</a></span></span></i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> through terrain, consuming more <i>Void Corals</i> renews the form\'s duration and <span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #60E08F; white-space:normal">heals her</span></span> instead.<br><br>\n<p><span class="template_sbc"><b>Enhanced Void Coral Bonus:</b></span> <span class="template_sbc"><b>True Form</b></span> is empowered with a longer duration and causes <i>Void Remora</i> to spawn from minions that die nearby.\n</p>',
    ],
    description: [
      {
        description:
          "Passive: Bel'Veth's basic attacks  on-hit apply a mark to the target for 5 seconds, refreshing on subsequent hits. Every second attack  on-hit against the marked target deals  bonus true damage and generates a stack of Endless Banquet that increases this damage by the same value. This effect stacks infinitely, but is capped at 5 stacks against epic  monsters. The mark and stacks expire upon attacking a new target.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Bel\'Veth\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> apply a mark to the target for 5 seconds, refreshing on subsequent hits. Every second attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> against the marked target deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> and generates a stack of <i>Endless Banquet</i> that increases this damage by the same value. This effect stacks infinitely, but is capped at 5 stacks against epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. The mark and stacks expire upon attacking a new target.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: " Bel'Veth's basic attacks  on-hit apply a mark to the target for 5 seconds, refreshing on subsequent hits",
            damagetype: 'None',
            values: 5,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit apply a mark to the target for 5 seconds, refreshing on subsequent hits',
            pre: "Bel'Veth's basic attacks  on-hit apply a mark to the target for 5 seconds, refreshing on subsequent hits",
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'This effect stacks infinitely, but is capped at 5 stacks against epic  monsters',
            increasedStat: 'total_ap',
            values: 5,
            units: '',
            unitsText:
              'effect stacks infinitely, but is capped at 5 stacks against epic  monsters',
            pre: 'This effect stacks infinitely, but is capped at 5 stacks against epic  monsters',
          },
        ],
        leveling: [
          {
            name: 'Bonus True Damage:',
            values: '6 / 7 / 8 / 9 / 10 (+ 12% bonus AD)',
            valuesHTML:
              '6 / 7 / 8 / 9 / 10 <span style="color:orange; white-space:normal">(+&nbsp;12% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Maximum Monster Damage:',
            values: '30 / 35 / 40 / 45 / 50 (+ 60% bonus AD)',
            valuesHTML:
              '30 / 35 / 40 / 45 / 50 <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus True Damage:',
            raw: '6 / 7 / 8 / 9 / 10 (+ 12% bonus AD)',
            damagetype: 'True',
            values: [6, 7, 8, 9, 10],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 12% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Maximum Monster Damage:',
            raw: '30 / 35 / 40 / 45 / 50 (+ 60% bonus AD)',
            damagetype: 'None',
            values: [30, 35, 40, 45, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
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
          "Passive: When Bel'Veth scores a  takedown against an enemy  champion or epic  monster while alive, a Void Coral is spawned from their corpse for 15 seconds.  Baron Nashor and pit  Rift Herald spawn an Enhanced Void Coral.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> When <b>Bel\'Veth</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> while alive, a <i>Void Coral</i> is spawned from their corpse for 15 seconds. <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor"><img alt="Baron Nashor" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor</a></span></span> and pit <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span> spawn an <i>Enhanced Void Coral</i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: " When Bel'Veth scores a  takedown against an enemy  champion or epic  monster while alive, a Void Coral is spawned from their corpse for 15 seconds",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "Bel'Veth scores a  takedown against an enemy  champion or epic  monster while alive, a Void Coral is spawned from their corpse for 15 seconds",
            pre: "When Bel'Veth scores a  takedown against an enemy  champion or epic  monster while alive, a Void Coral is spawned from their corpse for 15 seconds",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Active: Bel'Veth  dashes to the target Void Coral to consume it over the cast time,  slowing nearby enemies by 25% ramping to 99% over the duration. She then creates an explosion at the location to deal  true damage to enemies within, capped at 1500 versus monsters, and assumes her True Form for 60 seconds.\nBel'Veth consumes all existing Void Corals at once, generating a stack of  Lavender for each one consumed.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Bel\'Veth</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target <i>Void Coral</i> to consume it over the cast time, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies by 25% ramping to 99% over the duration. She then creates an explosion at the location to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span> to enemies within, capped at <span style="color: #F9966B; white-space:normal">1500</span> versus monsters, and assumes her <span class="template_sbc"><b>True Form</b></span> for 60 seconds.<br>\n<p><b>Bel\'Veth</b> consumes all existing <i>Void Corals</i> at once, generating a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Death in Lavender" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Death_in_Lavender" title="Lavender"><img alt="Lavender" src="/wiki/images/Bel%27Veth_Death_in_Lavender.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Death_in_Lavender" title="Bel\'Veth/LoL">Lavender</a></span></span></i> for each one consumed.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: " Bel'Veth  dashes to the target Void Coral to consume it over the cast time,  slowing nearby enemies by 25% ramping to 99% over the duration",
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'ramping to 99 dashes to the target Void Coral to consume it over the cast time,  slowing nearby enemies by 25',
            pre: "Bel'Veth  dashes to the target Void Coral to consume it over the cast time,  slowing nearby enemies by 25% ramping to 99% over the duration",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: "She then creates an explosion at the location to deal  true damage to enemies within, capped at 1500 versus monsters, and assumes her True Form for 60 seconds.\nBel'Veth consumes all existing Void Corals at once, generating a stack of  Lavender for each one consumed.",
            min: 0,
            max: 10,
            description:
              "She then creates an explosion at the location to deal  true damage to enemies within, capped at 1500 versus monsters, and assumes her True Form for 60 seconds.\nBel'Veth consumes all existing Void Corals at once, generating a stack of  Lavender for each one consumed.",
            values: 1,
            units: 'total_ap',
            unitsText:
              'then creates an explosion at the location to deal  true damage to enemies within, capped at 1500 versus monsters, and assumes her True Form for 60 seconds.',
            pre: "She then creates an explosion at the location to deal  true damage to enemies within, capped at 1500 versus monsters, and assumes her True Form for 60 seconds.\nBel'Veth consumes all existing Void Corals at once, generating a stack of  Lavender for each one consumed.",
          },
        ],
        leveling: [
          {
            name: 'True Damage:',
            values:
              "150 / 175 / 200 / 225 / 250 (+ 100% AP) (+ 25% of target's missing health)",
            valuesHTML:
              '150 / 175 / 200 / 225 / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;25% of target\'s <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'True Damage:',
            raw: "150 / 175 / 200 / 225 / 250 (+ 100% AP) (+ 25% of target's missing health)",
            healType: 'OutgoingHeals',
            values: [150, 175, 200, 225, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 175 / 200 / 225 / 250',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
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
        icon: "/wiki/images/Bel'Veth Endless Banquet.png",
        description:
          "True Form: Bel'Veth evolves into a monster, gaining  bonus health,  bonus movement speed out-of-combat,  50 bonus attack range, as well as increased total attack speed.  Void Surge can  dash through terrain. Consuming a Void Coral refreshes the duration of True Form and  heals Bel'Veth.\nEnhanced Void Coral Bonus: True Form is empowered to last 180 seconds and causes Void Remora to spawn from enemy  minions that die nearby.",
        descriptionHTML:
          '<span class="template_sbc"><b>True Form:</b></span> <b>Bel\'Veth</b> evolves into a monster, gaining <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> <a href="/wiki/Combat_status" title="Combat status">out-of-combat</a>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> attack range</span>, as well as increased <span style="color:orangered; white-space:normal"><b>total</b> attack speed</span>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Void Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Void Surge"><img alt="Void Surge" src="/wiki/images/Bel%27Veth_Void_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Bel\'Veth/LoL">Void Surge</a></span></span></i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> through <a href="/wiki/Terrain" title="Terrain">terrain</a>. Consuming a <i>Void Coral</i> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">refreshes</span> the duration of <span class="template_sbc"><b>True Form</b></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Bel\'Veth</b>.<br><br>\n<p><span class="template_sbc"><b>Enhanced Void Coral Bonus:</b></span> <span class="template_sbc"><b>True Form</b></span> is empowered to last 180 seconds and causes <i>Void Remora</i> to spawn from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> that die nearby.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'True Form:',
            raw: " Bel'Veth evolves into a monster, gaining  bonus health,  bonus movement speed out-of-combat,  50 bonus attack range, as well as increased total attack speed",
            healType: 'BonusHealth',
            values: 5,
            units: 'total_ad',
            unitsText:
              'evolves into a monster, gaining  bonus health,  bonus movement speed out-of-combat,  50 bonus attack range, as well as increased total attack speed',
            pre: "Bel'Veth evolves into a monster, gaining  bonus health,  bonus movement speed out-of-combat,  50 bonus attack range, as well as increased total attack speed",
          },
          {
            effectType: 'Damage',
            name: "Consuming a Void Coral refreshes the duration of True Form and  heals Bel'Veth.\nEnhanced Void Coral Bonus:",
            raw: ' True Form is empowered to last 180 seconds and causes Void Remora to spawn from enemy  minions that die nearby.',
            damagetype: 'True',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Form is empowered to last 180 seconds and causes Void Remora to spawn from enemy  minions that die nearby.',
            pre: 'True Form is empowered to last 180 seconds and causes Void Remora to spawn from enemy  minions that die nearby.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Health:',
            values: '100 / 125 / 150 / 175 / 200 (+ 120% bonus AD) (+ 90% AP)',
            valuesHTML:
              '100 / 125 / 150 / 175 / 200 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '25 / 37.5 / 50 / 62.5 / 75',
            valuesHTML:
              '25 / 37.<small>5</small> / 50 / 62.<small>5</small> / 75',
          },
          {
            name: 'Increased Total Attack Speed:',
            values: '10 / 12.5 / 15 / 17.5 / 20%',
            valuesHTML:
              '10 / 12.<small>5</small> / 15 / 17.<small>5</small> / 20%',
          },
          {
            name: 'Heal:',
            values: '100 / 125 / 150 / 175 / 200 (+ 120% bonus AD) (+ 90% AP)',
            valuesHTML:
              '100 / 125 / 150 / 175 / 200 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Health:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 120% bonus AD) (+ 90% AP)',
            healType: 'BonusHealth',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '25 / 37.5 / 50 / 62.5 / 75',
            values: [25, 37.5, 50, 62.5, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 37.5 / 50 / 62.5 / 75',
          },
          {
            effectType: 'Unique',
            name: 'Increased Total Attack Speed:',
            raw: '10 / 12.5 / 15 / 17.5 / 20%',
            values: [10, 12.5, 15, 17.5, 20],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 12.5 / 15 / 17.5 / 20%',
          },
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 120% bonus AD) (+ 90% AP)',
            healType: 'BonusHealth',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
              {
                values: 90,
                valuesIsPercent: true,
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
          "A nearby Void Coral is required to cast this ability. The  on-hit modifiers from  Death in Lavender,  Void Surge and  Royal Maelstrom affect the bonus true damage applied by Endless Banquet's passive. See Pets for details about Void Remora and Void Corals.",
        descriptionHTML:
          '<i>A nearby Void Coral is required to cast this ability. The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> modifiers from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Death in Lavender" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Death_in_Lavender" title="Death in Lavender"><img alt="Death in Lavender" src="/wiki/images/Bel%27Veth_Death_in_Lavender.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Death_in_Lavender" title="Bel\'Veth/LoL">Death in Lavender</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Void Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Void Surge"><img alt="Void Surge" src="/wiki/images/Bel%27Veth_Void_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Void_Surge" title="Bel\'Veth/LoL">Void Surge</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bel\'Veth" data-ability="Royal Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bel%27Veth/LoL#Royal_Maelstrom" title="Royal Maelstrom"><img alt="Royal Maelstrom" src="/wiki/images/Bel%27Veth_Royal_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bel%27Veth/LoL#Royal_Maelstrom" title="Bel\'Veth/LoL">Royal Maelstrom</a></span></span> affect the <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span> applied by Endless Banquet\'s passive. See <a href="/wiki/Bel%27Veth/LoL#Pets" title="Bel\'Veth/LoL">Pets</a> for details about Void Remora and Void Corals.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies',
    damagetype: 'True',
    spelleffects: 'special',
    spellshield: true,
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> on the bonus true damage and deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> on the explosion.\n<ul><li><i>Endless Banquet\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> effect will not trigger against monsters if they were slain by an enemy.</li>\n<li><i>Endless Banquet\'s</i> true damage based on the target\'s missing health is calculated <i>before</i> the base damage is dealt.</li>\n<li><i>True Form\'s</i> duration is refreshed based on the type of <i>Void Coral</i> that <b>Bel\'Veth</b> consumes.\n<ul><li>Consuming a normal <i>Void Coral</i> in a normal <i>True Form</i> state refreshes the duration to 60 seconds.</li>\n<li>Consuming an enhanced <i>Void Coral</i> refreshes the duration to 180 seconds and grants the enhanced effects regardless of current <i>True Form</i> state.</li>\n<li>If she consumes a normal <i>Void Coral</i> while in an enhanced <i>True Form</i> state, the current duration is extended by 60 seconds.\n<ul><li>The enhanced effects are <b>not</b> lost in this case.</li></ul></li></ul></li>\n<li><b>Bel\'Veth</b> will consume all existing <i>Void Corals</i> at once, therefore she is able to acquire the enhanced effects of <i>True Form</i> even if she does not physically consume an enhanced <i>Void Coral</i>.</li>\n<li>The <i>Void Coral</i> that <b>Bel\'Veth</b> consumes herself will not expire in the process of her doing so.</li>\n<li><b>Bel\'Veth</b> will consume all other <i>Void Corals</i> upon consumption regardless of range.</li>\n<li>Ranking up <i>Endless Banquet</i> will update the bonuses dynamically; if <b>Bel\'Veth</b> has <i>True Form</i> upon the level-up, she will receive the upgraded stats.</li>\n<li><b>Bel\'Veth</b> gains the <b>bonus</b> health and heal from <i>Endless Banquet</i> at the start of the cast time.</li>\n<li><b>Bel\'Veth</b> will be able to consume the target <i>Void Coral</i> even if her dash is interrupted.\n<ul><li>She dashes at the start of the cast time.</li></ul></li>\n<li>A <i>Void Coral</i> will <b>not</b> spawn when scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against a summoned <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span>.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li>The following table refers for interactions while <b>Bel\'Veth</b> is in cast time:\n<ul><li>She remains locked out for 0.<small>5</small> seconds after the cast time completes.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
