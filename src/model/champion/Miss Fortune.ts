import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Miss Fortune';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Miss_Fortune_Love_Tap.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Miss Fortune\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to apply a mark that expires upon attacking a new enemy. If the enemy was unmarked, this also deals <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="50% +&nbsp;10% every 3 levels up to 7, then +&nbsp;10% every 2 levels up to 13" data-bot_values="50;60;70;80;90;100" data-top_values="1;4;7;9;11;13" data-bot_key="%">50% − 100% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, halved to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="25% +&nbsp;5% every 3 levels up to 7, then +&nbsp;5% every 2 levels up to 13" data-bot_values="25;30;35;40;45;50" data-top_values="1;4;7;9;11;13" data-bot_key="%">25% − 50% (based on level)</span> AD</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' If the enemy was unmarked, this also deals 50% − 100% (based on level) AD bonus physical damage, halved to 25% − 50% (based on level) AD against  minions',
        increasedStat: 'bonus_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'AD bonus physical damage, halved to 25% − 50%',
        pre: 'If the enemy was unmarked, this also deals 50% − 100%',
        post: 'AD bonus physical damage, halved to 25% − 50%',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Miss_Fortune_Double_Up.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> fires a shot at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, which then bounces to hit another enemy behind them. This applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects to the first enemy hit, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects to both enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 45 / 70 / 95 / 120 (+ 100% AD) (+ 35% AP)',
        values: [20, 45, 70, 95, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 45 / 70 / 95 / 120',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
          {
            values: 35,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 35% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Double Up\'s</i> bounce is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers. If <i>Double Up</i> kills the primary target, the bounce will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i>The bounce prioritizes units directly behind the primary target. A target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> be hit by the bounce.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Miss_Fortune_Strut.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25 <b>bonus</b> movement speed</span></span> after 5 seconds without taking non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent</a></span> damage. This bonus is increased after another 5 seconds, and is granted instantly whenever <i>Strut</i> is cast or upon <a href="/wiki/Death" title="Death">respawning</a>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Bonus Movement Speed:',
        raw: '55 / 65 / 75 / 85 / 95',
        values: [55, 65, 75, 85, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 65 / 75 / 85 / 95',
      },
    ],
  },
  {
    img: '/wiki/images/Miss_Fortune_Guns_Blazing.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '40 / 55 / 70 / 85 / 100%',
        values: [40, 55, 70, 85, 100],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70 / 85 / 100%',
      },
    ],
  },
  {
    description:
      'Marking a new target with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Miss Fortune" data-ability="Love Tap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Love Tap"><img alt="Love Tap" src="/wiki/images/Miss_Fortune_Love_Tap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Miss Fortune/LoL">Love Tap</a></span></span></i> reduces <i>Strut\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">2 seconds</span>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Miss_Fortune_Make_It_Rain.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> casts a storm of bullets at the target location for 2 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to enemies within, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 40% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% per 100 AP)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '25 seconds to enemies within, and  slowing them by 40% (+ 6% per 100 AP)',
        values: 25,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'seconds to enemies within, and  slowing them by 40',
        pre: '25 seconds to enemies within, and  slowing them by 40%',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 6% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '8.75 / 12.5 / 16.25 / 20 / 23.75 (+ 15% AP)',
        values: [8.75, 12.5, 16.25, 20, 23.75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8.75 / 12.5 / 16.25 / 20 / 23.75',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '70 / 100 / 130 / 160 / 190 (+ 120% AP)',
        values: [70, 100, 130, 160, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 100 / 130 / 160 / 190',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 120% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Make It Rain will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Miss_Fortune_Bullet_Time.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 3 seconds, firing a number of waves of bullets in the target direction. Each wave is in a spread of 6 projectiles that deals <span style="color:orange; white-space:normal">75% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' Each wave is in a spread of 6 projectiles that deals 75% AD (+ 25% AP) physical damage to enemies hit',
        damagetype: 'Physical',
        values: 6,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'physical damage to enemies hit',
        pre: 'Each wave is in a spread of 6 projectiles that deals 75% AD',
        post: 'physical damage to enemies hit',
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
      {
        effectType: 'Unique',
        name: 'Total Waves:',
        raw: '14 / 16 / 18',
        values: [14, 16, 18],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '14 / 16 / 18',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Total Physical Damage:',
        raw: '1050 / 1200 / 1350% AD (+ 350 / 400 / 450% AP)',
        values: [1050, 1200, 1350],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '1050 / 1200 / 1350% AD',
        children: [
          {
            values: [350, 400, 450],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 350 / 400 / 450% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Wave Interval Time:',
        raw: ' 0.2036 / 0.1781 / 0.1583',
        values: [0.2036, 0.1781, 0.1583],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0.2036 / 0.1781 / 0.1583',
      },
    ],
  },
  {
    description:
      'Each of the waves can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(20%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="7%"><img alt="7%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">7%</a></span></span>) <b>bonus</b> physical damage</span>.',
    leveling: [],
  },
];
export const MissFortune = { I, Q, W, E, R };
