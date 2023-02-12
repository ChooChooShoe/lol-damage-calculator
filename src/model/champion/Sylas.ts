import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Sylas';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Sylas</b> casts an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, he generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Unshackled</i> for 4 seconds, refreshing on subsequent casts and stacking up to 3 times. While <b>Sylas</b> has stacks, he gains <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125% <b>bonus</b> attack speed</span></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Sylas_Petricite_Burst.png',
    description:
      '<span class="template_sbc"><b>Unshackled:</b></span> <b>Sylas\'</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to consume a stack to whirl his chains around him, which has an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and deals <span style="color:orange; white-space:normal">130% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to the primary target and <span style="color:orange; white-space:normal">40% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 1:',
        raw: " Sylas' next basic attack is empowered to consume a stack to whirl his chains around him, which has an  uncancellable windup and deals 130% AD (+ 25% AP) magic damage to the primary target and 40% AD (+ 20% AP) magic damage to nearby enemies",
        min: 0,
        max: 10,
        description:
          " Sylas' next basic attack is empowered to consume a stack to whirl his chains around him, which has an  uncancellable windup and deals 130% AD (+ 25% AP) magic damage to the primary target and 40% AD (+ 20% AP) magic damage to nearby enemies",
        values: 1,
        valuesIsPercent: true,
        user: 'target',
        units: 'total_ad',
        unitsText: 'magic damage to the primary target and 40% AD',
        pre: "Sylas' next basic attack is empowered to consume a stack to whirl his chains around him, which has an  uncancellable windup and deals 130% AD",
        post: 'magic damage to the primary target and 40% AD',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Damage to secondary targets executes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> that would be left below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">25 health</span></span>.',
    leveling: [],
  },
  {
    description:
      '<i>The empowered attack applies <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> only to the primary target but disables the <b>bonus</b> damage from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span>. <a href="/wiki/Ability_effects" title="Ability effects">Ability effects</a> only apply to secondary targets.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Sylas_Chain_Lash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sylas</b> lashes out two chains that converge to the target location and extend beyond it up to a maximum range, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '40 / 60 / 80 / 100 / 120 (+ 40% AP)',
        values: [40, 60, 80, 100, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 60 / 80 / 100 / 120',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
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
      'After a 0.<small>6</small>-second delay, the chains\' intersection explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within, reduced by 60% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 125 / 180 / 235 / 290 (+ 90% AP)',
        values: [70, 125, 180, 235, 290],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 125 / 180 / 235 / 290',
        children: [
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
        name: 'Non-Champion Damage:',
        raw: '28 / 50 / 72 / 94 / 116 (+ 36% AP)',
        values: [28, 50, 72, 94, 116],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '28 / 50 / 72 / 94 / 116',
        children: [
          {
            values: 36,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 36% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Champion Damage:',
        raw: '110 / 185 / 260 / 335 / 410 (+ 130% AP)',
        values: [110, 185, 260, 335, 410],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 185 / 260 / 335 / 410',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 130% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Non-Champion Damage:',
        raw: '68 / 110 / 152 / 194 / 236 (+ 76% AP)',
        values: [68, 110, 152, 194, 236],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '68 / 110 / 152 / 194 / 236',
        children: [
          {
            values: 76,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 76% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Chain Lash will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Sylas_Kingslayer.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sylas</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the front of the target enemy\'s location then strikes them to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 90% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
        children: [
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
      'If this damages a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Sylas</b> is also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span>, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="his missing health" data-displayformula="1% per 0.6% of \'\'\'Sylas\'\'\'\' \'\'\'missing\'\'\' health" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;6;12;18;24;30;36;42;48;54;60" data-bot_key="%" data-top_key="%">0% − 100% (based on his <b>missing</b> health)</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Heal:',
        raw: '20 / 40 / 60 / 80 / 100 (+ 40% AP)',
        values: [20, 40, 60, 80, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 40 / 60 / 80 / 100',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Heal:',
        raw: '40 / 80 / 120 / 160 / 200 (+ 80% AP)',
        values: [40, 80, 120, 160, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 80 / 120 / 160 / 200',
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
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Sylas_Abscond.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sylas</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location. Within 3.<small>5</small> seconds, he can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sylas" data-ability="Abduct" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sylas/LoL#Abduct" title="Abduct"><img alt="Abduct" src="/wiki/images/Sylas_Abduct.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sylas/LoL#Abduct" title="Sylas/LoL">Abduct</a></span></span></i> after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast, not after completing the dash">0.<small>2</small>-second delay</span> from casting <i>Abscond</i>.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sylas" data-ability="Kingslayer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sylas/LoL#Kingslayer" title="Kingslayer"><img alt="Kingslayer" src="/wiki/images/Sylas_Kingslayer.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sylas/LoL#Kingslayer" title="Sylas/LoL">Kingslayer</a></span></span> can be cast during the dash. Abscond will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Sylas_Abduct.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sylas</b> whips out his chains in the target direction that deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for 0.<small>5</small> seconds. Upon hitting the target, <b>Sylas</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to their location and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 0.<small>5</small> seconds upon arrival.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 130 / 180 / 230 / 280 (+ 100% AP)',
        values: [80, 130, 180, 230, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 130 / 180 / 230 / 280',
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
    description:
      '<i><b>Sylas</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sylas" data-ability="Chain Lash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sylas/LoL#Chain_Lash" title="Chain Lash"><img alt="Chain Lash" src="/wiki/images/Sylas_Chain_Lash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sylas/LoL#Chain_Lash" title="Sylas/LoL">Chain Lash</a></span></span> while the chains are in flight.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Sylas_Hijack.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sylas</b> launches his chains at the target enemy champion, gaining a copy of their <a href="/wiki/Champion_ability" title="Champion ability">ultimate ability</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for 0.<small>825</small> seconds at the start of the cast time. <b>Sylas</b> cannot select the same champion again for a set duration, and can hold the <i>hijacked</i> ultimate for up to 90 seconds, during which he can recast <i>Hijack</i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Sylas</b> casts his hijacked ultimate ability at no cost, scaling based on <i>Hijack\'s</i> rank and his own <a href="/wiki/Champion_statistic" title="Champion statistic">statistics</a>.',
    leveling: [],
  },
  {
    description:
      '<i>Hijacked</i> ultimates and abilities that do not scale with <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;ability power</span></span> have their <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack damage</span></span> ratios converted to <span style="color: #7A6DFF; white-space:normal">ability power</span> ratios, scaling with <span style="color: #7A6DFF; white-space:normal">0.<small>6</small>% AP</span> per <span style="color:orange; white-space:normal">1% <b>total</b> AD</span>, and <span style="color: #7A6DFF; white-space:normal">0.<small>4</small>% AP</span> per <span style="color:orange; white-space:normal">1% <b>bonus</b> AD</span> respectively.',
    leveling: [],
  },
];
export const Sylas = { I, Q, W, E1, E2, R };
