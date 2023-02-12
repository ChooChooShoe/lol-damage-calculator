import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Kalista';
const A: SubSkill[] = [
  {
    img: '/wiki/images/Basic_Attack.png',
    description:
      '<a href="/wiki/Basic_Attack" class="mw-redirect" title="Basic Attack"><span class="template_sbc"><b>Basic Attack:</b></span></a> <b>Kalista</b> hurls a spear at her target, dealing <span style="color:orange; white-space:normal">90% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects. Basic attacks can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> to deal <span style="color:orange; white-space:normal">(157.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="23.625%"><img alt="23.625%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">23.<small>625</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [],
  },
  {
    description:
      '<b>Kalista\'s</b> basic attack windup is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable</a></span> except by casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Rend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Rend" title="Rend"><img alt="Rend" src="/wiki/images/Kalista_Rend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Rend" title="Kalista/LoL">Rend</a></span></span>, although she can input a new attack command to change her target during the windup. Her basic attacks have no effect if she loses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the target at any point before it <i>hits</i>.',
    leveling: [],
  },
  {
    description:
      'Additionally, <b>Kalista\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack windup</a></span> is only reduced by 0.<small>75</small>% per <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Compared to the standard 1% per 1%"><span style="color:orangered; white-space:normal">1% <b>bonus</b> attack speed</span></span></span>.',
    leveling: [],
  },
];
const I: SubSkill[] = [
  {
    img: '/wiki/images/Kalista_Martial_Poise.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Kalista</b> inputs a movement command during her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Basic Attack" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Basic_Attack" title="basic attack"><img alt="basic attack" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Basic_Attack" title="Kalista/LoL">basic attack</a></span></span></i> windup or the cast time of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span></i>, she will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> in the target direction.<br><br><i><b>Kalista\'s</b> dash from Martial Poise will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>.</i>',
    leveling: [],
  },
  {
    description:
      'The range and speed of <i>Martial Poise</i> are modified by the tier of <b>Kalista\'s</b> <a href="/wiki/Boots" title="Boots">Boots</a>. The base range when dashing from a basic attack is <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Boots Tier" data-bot_values="250;265;280" data-top_values="None;Basic;Finished">250 / 265 / 280 (based on Boots Tier)</span> units. This base distance is reduced when dashing toward the direction of her attack, to a minimum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Boots Tier" data-bot_values="150;165;180" data-top_values="None;Basic;Finished">150 / 165 / 180 (based on Boots Tier)</span> units.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' The base range when dashing from a basic attack is 250 / 265 / 280 (based on Boots Tier) units',
        values: [2, 265, 280],
        user: 'none',
        units: '',
        unitsText: 'units',
        pre: 'The base range when dashing from a basic attack is 250 / 265 / 280',
        post: 'units',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on Boots Tier',
            pre: 'based on Boots Tier',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: ' This base distance is reduced when dashing toward the direction of her attack, to a minimum of 150 / 165 / 180 (based on Boots Tier) units',
        values: [1, 165, 180],
        user: 'none',
        units: '',
        unitsText: 'units',
        pre: 'This base distance is reduced when dashing toward the direction of her attack, to a minimum of 150 / 165 / 180',
        post: 'units',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on Boots Tier',
            pre: 'based on Boots Tier',
          },
        ],
      },
    ],
  },
  {
    description:
      'The base range when dashing from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce\'s"><img alt="Pierce\'s" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce\'s</a></span></span></i> cast is increased<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;by 50 units.&nbsp;」</span><span class="flipText2">「&nbsp;to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Boots Tier" data-bot_values="300;315;330" data-top_values="None;Basic;Finished">300 / 315 / 330 (based on Boots Tier)</span> units.&nbsp;」</span></span>If dashing <i>away</i> from the point of cast, the dash range is reduced, to a minimum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Boots Tier" data-bot_values="165;180;195" data-top_values="None;Basic;Finished">165 / 180 / 195 (based on Boots Tier)</span> units.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' 」「 to 300 / 315 / 330 (based on Boots Tier) units',
        values: [3, 315, 330],
        user: 'none',
        units: '',
        unitsText: 'units',
        pre: '」「 to 300 / 315 / 330',
        post: 'units',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on Boots Tier',
            pre: 'based on Boots Tier',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: ' 」If dashing away from the point of cast, the dash range is reduced, to a minimum of 165 / 180 / 195 (based on Boots Tier) units',
        values: [1, 180, 195],
        user: 'none',
        units: '',
        unitsText: 'units',
        pre: '」If dashing away from the point of cast, the dash range is reduced, to a minimum of 165 / 180 / 195',
        post: 'units',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on Boots Tier',
            pre: 'based on Boots Tier',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Oathsworn Bond:</b></span> <b>Kalista</b> begins the game with an exclusive <i><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Spear" title="Black Spear"><img alt="Black Spear" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Spear" title="Black Spear">Black Spear</a></span></span></i>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Kalista_Pierce.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> launches a spear in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 85 / 150 / 215 / 280 (+ 100% AD)',
        values: [20, 85, 150, 215, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 85 / 150 / 215 / 280',
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
  {
    description:
      'If <i>Pierce</i> kills the target, the spear continues onward to transfer all of the target\'s <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Rend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Rend" title="Rend"><img alt="Rend" src="/wiki/images/Kalista_Rend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Rend" title="Kalista/LoL">Rend</a></span></span></i> stacks to the next enemy it hits. This can repeat indefinitely until the spear reaches its maximum range.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Sentinel_2.png',
    description:
      '<span class="template_sbc"><b>Passive - Soul-Marked:</b></span> While <b>Kalista</b> and her <i><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="The Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/The_Black_Spear" title="Oathsworn"><img alt="Oathsworn" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/The_Black_Spear" class="mw-redirect" title="The Black Spear">Oathsworn</a></span></span></i> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethered</a></span>, their basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span></i> apply a <i>Soul-Mark</i> to their targets.',
    leveling: [],
  },
  {
    img: '/wiki/images/Sentinel_3.png',
    description:
      'If both <i>Soul-Marks</i> are applied to the same target within 4 seconds, they take <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, capped against non-champions, and cannot be <i>Soul-Marked</i> again for a few seconds. <i>Soul-Mark</i> deals a minimum of 75 damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, executes them if they\'re below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125 health</span></span>, and is capped against non-champions. <b>Kalista</b> applies the damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> while the <i>Oathsworn</i> does so <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Magic Damage:',
        raw: "14 / 15 / 16 / 17 / 18% of target's maximum health",
        healType: 'OutgoingHeals',
        values: [14, 15, 16, 17, 18],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "14 / 15 / 16 / 17 / 18% of target's maximum health",
      },
      {
        effectType: 'Unique',
        name: 'Maximum Non-Champion Damage:',
        raw: '100 / 125 / 150 / 175 / 200',
        values: [100, 125, 150, 175, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 125 / 150 / 175 / 200',
      },
    ],
  },
  {
    img: '/wiki/images/Kalista_Sentinel.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> summons a <i>Sentinel</i> that patrols back and forth on a path along the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings as it travels.',
    leveling: [],
  },
  {
    description:
      '<b>Kalista</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Sentinel</i> charge, up to a maximum of 2.',
    leveling: [],
  },
  {
    description:
      '<i>See <a href="/wiki/Kalista/LoL#Pets" title="Kalista/LoL">Pets</a> for more details about Sentinels.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kalista\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span></i> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Rend</i> to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kalista_Rend.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> rips all lodged spears from nearby enemies, consuming all of their stacks to deal them <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them for 2 seconds. Each additional spear on the target deals reduced damage. <i>Rend</i> deals 50% reduced damage against epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 30 / 40 / 50 / 60 (+ 70% AD)',
        values: [20, 30, 40, 50, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 70% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Damage per Additional Stack:',
        raw: '10 / 16 / 22 / 28 / 34 (+ 23.2 / 27.55 / 31.9 / 36.25 / 40.6% AD)',
        values: [10, 16, 22, 28, 34],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 16 / 22 / 28 / 34',
        children: [
          {
            values: [23.2, 27.55, 31.9, 36.25, 40.6],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 23.2 / 27.55 / 31.9 / 36.25 / 40.6% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '10 / 18 / 26 / 34 / 42%',
        values: [10, 18, 26, 34, 42],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 18 / 26 / 34 / 42%',
      },
    ],
  },
  {
    description:
      'If <i>Rend</i> <a href="/wiki/Kill" title="Kill">kills</a> at least one target, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reset and <b>Kalista</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Mana Restored:',
        raw: '10 / 15 / 20 / 25 / 30',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
      },
    ],
  },
  {
    description:
      '<i>A nearby enemy with a Rend stack is required to cast this ability. Rend can be used during the dash of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Martial Poise" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Martial_Poise" title="Martial Poise"><img alt="Martial Poise" src="/wiki/images/Kalista_Martial_Poise.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Martial_Poise" title="Kalista/LoL">Martial Poise</a></span></span> and the cast time of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span>. In-flight spears and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span> if in cast will be empowered to apply Rend\'s effects to their targets. These empowered spears can also trigger Rend\'s refund.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Kalista_Fate%27s_Call.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> invokes her <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="The Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/The_Black_Spear" title="tether"><img alt="tether" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/The_Black_Spear" class="mw-redirect" title="The Black Spear">tether</a></span></span> to retrieve her <i>Oathsworn</i> and hold them for 4 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pulling</a></span> them to her over 1 second and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> them from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>, as well as rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> for the duration.',
    leveling: [],
  },
  {
    description:
      'While held, the <i>Oathsworn</i> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanished</a></span> and may <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to end <i>Fate\'s Call\'s</i> effects and reappear at the target location; after the duration, they will automatically do so at maximum range from <b>Kalista\'s</b> facing direction. <br>The <i>Oathsworn</i> stops upon colliding with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking</a></span> up all nearby enemies for a duration and landing to their <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;basic attack range</span> from the target collided with.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Knockup Duration:',
        raw: '1 / 1.5 / 2',
        values: [1, 1.5, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.5 / 2',
      },
    ],
  },
  {
    description:
      '<i>The Oathsworn must be nearby to cast this ability, and is also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> and unable to perform movement or attack commands while Fate\'s Call is in effect.</i>',
    leveling: [],
  },
];
export const Kalista = { A, I, Q, W, E, R };
