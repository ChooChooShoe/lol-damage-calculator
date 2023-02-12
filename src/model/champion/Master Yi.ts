import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Master Yi';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Master_Yi_Double_Strike.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Master Yi\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Double Strike</i> for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. At 3 stacks, <b>Master Yi\'s</b> next basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> is empowered to consume the stacks to strike twice, the second strike dealing <span style="color:orange; white-space:normal">50% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [],
  },
  {
    description:
      'The second strike applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness and is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [],
  },
  {
    description:
      "If <b>Master Yi's</b> primary target is killed before the second strike, he automatically attacks another enemy within 300 range.",
    leveling: [],
  },
  {
    description:
      '<i>The second strike can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Master_Yi_Alpha_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Master Yi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishes</a></span> and becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>. After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.2 seconds, but rounded up to the next game tick.">0.<small>231</small> seconds</span>, he marks the target enemy and then proceeds to mark the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> un-marked enemy within 600 units, recurring every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.2 seconds, but rounded up to the next game tick.">0.<small>231</small> seconds</span> up to 3 times. If there are no other eligible targets before then, <b>Master Yi</b> can mark the same enemies again.<br><br>\nUpon finishing marking, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">reappears</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="before the target in their current facing direction">75 units in front of the target</span> and becomes able to act again<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.15 seconds, but rounded up to the next game tick.">0.<small>165</small> seconds</span>.&nbsp;」</span><span class="flipText2">「&nbsp;<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="effective time due to game ticks">1.<small>087</small> seconds</span> after the start of the cast with 4 bounces.&nbsp;」</span></span>During <i>Alpha Strike</i>, <b>Master Yi</b> may choose a direction around the primary target to instead reappear 75 units in that direction. If the primary target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> or is too far away during the delay, he will reappear at the cast location instead.',
    leveling: [],
  },
  {
    description:
      '<b>Master Yi</b> then detonates the marks, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 75% effectiveness. Subsequent marks on a target instantly deal 25% damage and apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 18.<small>75</small>% effectiveness. <i>Alpha Strike</i> deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> per hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '30 / 60 / 90 / 120 / 150 (+ 50% AD)',
        values: [30, 60, 90, 120, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 60 / 90 / 120 / 150',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Damage per hit:',
        raw: '7.5 / 15 / 22.5 / 30 / 37.5 (+ 12.5% AD)',
        values: [7.5, 15, 22.5, 30, 37.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7.5 / 15 / 22.5 / 30 / 37.5',
        children: [
          {
            values: 12.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 12.5% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Single-Target Damage:',
        raw: '52.5 / 105 / 157.5 / 210 / 262.5 (+ 87.5% AD)',
        values: [52.5, 105, 157.5, 210, 262.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '52.5 / 105 / 157.5 / 210 / 262.5',
        children: [
          {
            values: 87.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 87.5% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Monster Bonus Damage:',
        raw: '75 / 100 / 125 / 150 / 175',
        values: [75, 100, 125, 150, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 100 / 125 / 150 / 175',
      },
      {
        effectType: 'Unique',
        name: 'Monster Total Damage:',
        raw: '105 / 160 / 215 / 270 / 325 (+ 50% AD)',
        values: [105, 160, 215, 270, 325],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '105 / 160 / 215 / 270 / 325',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Monster Damage per hit:',
        raw: '26.25 / 40 / 53.75 / 67.5 / 81.25 (+ 12.5% AD)',
        values: [26.25, 40, 53.75, 67.5, 81.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '26.25 / 40 / 53.75 / 67.5 / 81.25',
        children: [
          {
            values: 12.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 12.5% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Max Monster Single-Target Damage:',
        raw: '183.75 / 280 / 376.25 / 472.5 / 568.75 (+ 87.5% AD)',
        values: [183.75, 280, 376.25, 472.5, 568.75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '183.75 / 280 / 376.25 / 472.5 / 568.75',
        children: [
          {
            values: 87.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 87.5% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Alpha Strike\'s</i> primary and lesser damage can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color:orange; white-space:normal">(17.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="6.125%"><img alt="6.125%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">6.<small>125</small>%</a></span></span>) AD</span> and <span style="color:orange; white-space:normal">(4.<small>375</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="1.53125%"><img alt="1.53125%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">1.<small>53125</small>%</a></span></span>) AD</span> respectively.',
    leveling: [],
  },
  {
    description:
      'Basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> reduce <i>Alpha Strike\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">1 second</span>.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Wuju Style" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Wuju Style"><img alt="Wuju Style" src="/wiki/images/Master_Yi_Wuju_Style.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Master Yi/LoL">Wuju Style</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Highlander" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Highlander" title="Highlander"><img alt="Highlander" src="/wiki/images/Master_Yi_Highlander.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Highlander" title="Master Yi/LoL">Highlander</a></span></span> can be cast during Alpha Strike. Each time Alpha Strike hits a target, the durations of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Wuju Style" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Wuju Style"><img alt="Wuju Style" src="/wiki/images/Master_Yi_Wuju_Style.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Master Yi/LoL">Wuju Style</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Highlander" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Highlander" title="Highlander"><img alt="Highlander" src="/wiki/images/Master_Yi_Highlander.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Highlander" title="Master Yi/LoL">Highlander</a></span></span> are refreshed by their <b>current</b> duration. Alpha Strike does not trigger its cooldown reduction nor grant a stack of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Double Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Double Strike"><img alt="Double Strike" src="/wiki/images/Master_Yi_Double_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Master Yi/LoL">Double Strike</a></span></span> when applying on-hit effects.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Master_Yi_Meditate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Master Yi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 4 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself every 0.<small>5</small> seconds, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="missing health" data-displayformula="1% per 1% missing health" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on <b>missing</b> health)</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: '5 seconds, increased by 0% − 100% (based on missing health)',
        healType: 'BonusHealth',
        values: 5,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '− 100seconds, increased by 0',
        pre: '5 seconds, increased by 0% − 100%',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'based on missing health',
            pre: 'based on missing health',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Heal Per Tick:',
        raw: '15 / 25 / 35 / 45 / 55 (+ 12.5% AP)',
        values: [15, 25, 35, 45, 55],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 25 / 35 / 45 / 55',
        children: [
          {
            values: 12.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 12.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Heal Per Tick:',
        raw: '30 / 50 / 70 / 90 / 110 (+ 25% AP)',
        values: [30, 50, 70, 90, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 50 / 70 / 90 / 110',
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
        name: 'Minimum Total Heal:',
        raw: '120 / 200 / 280 / 360 / 440 (+ 100% AP)',
        values: [120, 200, 280, 360, 440],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 200 / 280 / 360 / 440',
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
        name: 'Maximum Total Heal:',
        raw: '240 / 400 / 560 / 720 / 880 (+ 200% AP)',
        values: [240, 400, 560, 720, 880],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '240 / 400 / 560 / 720 / 880',
        children: [
          {
            values: 200,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 200% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'While channeling, <b>Master Yi</b> gains 90% damage reduction for the first 0.<small>5</small> seconds, which is then modified to a reduced amount for the remaining duration of the channel. <i>Meditate\'s</i> damage reduction is halved against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> and lingers for 0.<small>5</small> seconds after the channel ends.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Reduction:',
        raw: '45 / 47.5 / 50 / 52.5 / 55%',
        values: [45, 47.5, 50, 52.5, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 47.5 / 50 / 52.5 / 55%',
      },
      {
        effectType: 'Unique',
        name: 'Turret Damage Reduction:',
        raw: '22.5 / 23.75 / 25 / 26.25 / 27.5%',
        values: [22.5, 23.75, 25, 26.25, 27.5],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '22.5 / 23.75 / 25 / 26.25 / 27.5%',
      },
    ],
  },
  {
    description:
      '<i>Meditate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Master Yi\'s</b> basic attack timer, pauses <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Wuju Style" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Wuju Style\'s"><img alt="Wuju Style\'s" src="/wiki/images/Master_Yi_Wuju_Style.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Master Yi/LoL">Wuju Style\'s</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Highlander" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Highlander" title="Highlander\'s"><img alt="Highlander\'s" src="/wiki/images/Master_Yi_Highlander.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Highlander" title="Master Yi/LoL">Highlander\'s</a></span></span> duration, and grants one stack of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Double Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Double Strike"><img alt="Double Strike" src="/wiki/images/Master_Yi_Double_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Master Yi/LoL">Double Strike</a></span></span> per second during the channel.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Master_Yi_Wuju_Style.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Master Yi</b> empowers his basic attacks within the next 5 seconds to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus True Damage:',
        raw: '30 / 35 / 40 / 45 / 50 (+ 30% bonus AD)',
        values: [30, 35, 40, 45, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 30% bonus AD',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> reduces the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> of <b>Master Yi\'s</b> basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> by 70%.',
    leveling: [],
  },
  {
    img: '/wiki/images/Master_Yi_Highlander.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Master Yi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">cripples</a></span>. For the next 7 seconds, he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>, <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple-immune"><a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist#Cripple Immunity"><img alt="Cripple immune.png" src="/wiki/images/Cripple_immune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist">cripple immunity</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '25 / 35 / 45%',
        values: [25, 35, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 35 / 45%',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '35 / 45 / 55%',
        values: [35, 45, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 45 / 55%',
      },
    ],
  },
  {
    description:
      'While active, scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> extends <i>Highlander\'s</i> duration by 7 seconds.',
    leveling: [],
  },
];
export const MasterYi = { I, Q, W, E, R };
