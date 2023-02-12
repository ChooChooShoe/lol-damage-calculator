import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Pantheon';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Pantheon_Mortal_Will.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Pantheon</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Mortal Will</i> whenever he lands a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> or casts an <a href="/wiki/Ability" class="mw-redirect" title="Ability">ability</a>, stacking up to 5 times. At 5 stacks, <b>Pantheon\'s</b> next basic ability consumes the stacks to become empowered with an additional effect.',
    leveling: [],
  },
  {
    description:
      '<b>Pantheon</b> gains maximum stacks of <i>Mortal Will</i> upon starting the game, completing a <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> channel, and <a href="/wiki/Death" title="Death">respawning</a>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Pantheon_Comet_Spear.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 10% for up to 4 seconds to increase <i>Comet Spear\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> after 0.<small>35</small> seconds of channeling. <i>Comet Spear</i> can be recast within the duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Pantheon</b> hurls his spear in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased</span> against enemies <span style="color: #1F995C; white-space:normal">below 20% of their <b>maximum</b> health</span> but reduced by 50% against enemies beyond the first. Total damage is increased to 105% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and reduced to 70% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '70 / 100 / 130 / 160 / 190 (+ 115% bonus AD)',
        values: [70, 100, 130, 160, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 100 / 130 / 160 / 190',
        children: [
          {
            values: 115,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 115% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '155 / 230 / 305 / 380 / 455 (+ 230% bonus AD)',
        values: [155, 230, 305, 380, 455],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '155 / 230 / 305 / 380 / 455',
        children: [
          {
            values: 230,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 230% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Secondary Physical Damage:',
        raw: '35 / 50 / 65 / 80 / 95 (+ 57.5% bonus AD)',
        values: [35, 50, 65, 80, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 50 / 65 / 80 / 95',
        children: [
          {
            values: 57.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 57.5% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Secondary Damage:',
        raw: '77.5 / 115 / 152.5 / 190 / 227.5 (+ 115% bonus AD)',
        values: [77.5, 115, 152.5, 190, 227.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '77.5 / 115 / 152.5 / 190 / 227.5',
        children: [
          {
            values: 115,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 115% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Releasing the ability within 0.<small>35</small> seconds causes <b>Pantheon</b> to instead thrust his spear in the target direction, dealing the same <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and refunding 60% of <i>Comet Spear\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>. The thrust\'s damage is not reduced against enemies beyond the first.',
    leveling: [],
  },
  {
    description:
      'If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> or completes without reactivation, <i>Comet Spear</i> is cancelled and the ability is put on full cooldown but refunds <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">half the mana cost</span></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Pantheon_Comet_Spear_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span>:</b></span> <i>Comet Spear</i> gains <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="240;" data-bot_values="20;32.94;45.88;58.82;71.76;84.71;97.65;110.59;123.53;136.47;149.41;162.35;175.29;188.24;201.18;214.12;227.06;240" data-top_values="">20 − 240 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;115% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, affected by the previous damage reductions. Consumes the stacks upon recasting.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Comet Spear gains 20 − 240 (based on level) (+ 115% bonus AD) bonus physical damage, affected by the previous damage reductions',
        values: [
          20, 32.94, 45.88, 58.82, 71.76, 84.71, 97.65, 110.59, 123.53, 136.47,
          149.41, 162.35, 175.29, 188.24, 201.18, 214.12, 227.06, 240,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'bonus physical damage, affected by the previous damage reductions',
        pre: 'Comet Spear gains 20 − 240',
        post: 'bonus physical damage, affected by the previous damage reductions',
        children: [
          {
            values: 115,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 115% bonus AD',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Pantheon_Shield_Vault.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the front of the target enemy\'s location. If the target is within 800 units upon arrival, he deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 100% AP)',
        values: [60, 100, 140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220',
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
    img: '/wiki/images/Pantheon_Shield_Vault_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span>:</b></span> <b>Pantheon</b> empowers his next basic attack within 4 seconds to have a cast time and strike the target 3 times over a brief period, dealing <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="55;" data-bot_values="40;40.88;41.76;42.65;43.53;44.41;45.29;46.18;47.06;47.94;48.82;49.71;50.59;51.47;52.35;53.24;54.12;55" data-top_values="" data-bot_key="%">40% − 55% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> per hit, up to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="120;" data-finish="165;" data-bot_values="120;122.65;125.29;127.94;130.59;133.24;135.88;138.53;141.18;143.82;146.47;149.12;151.76;154.41;157.06;159.71;162.35;165" data-top_values="" data-bot_key="%">120% − 165% (based on level)</span> AD</span>. Each hit is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Pantheon empowers his next basic attack within 4 seconds to have a cast time and strike the target 3 times over a brief period, dealing 40% − 55% (based on level) AD physical damage per hit, up to 120% − 165% (based on level) AD',
        damagetype: 'Physical',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD physical damage per hit, up to 120% − 165%',
        pre: 'Pantheon empowers his next basic attack within 4 seconds to have a cast time and strike the target 3 times over a brief period, dealing 40% − 55%',
        post: 'AD physical damage per hit, up to 120% − 165%',
      },
    ],
  },
  {
    description:
      '<i>Empowered Shield Vault <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Pantheon\'s</b> basic attack timer. <b>Pantheon</b> will attempt to basic attack the target at the end of the leap.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Pantheon_Aegis_Assault.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Pantheon</b> braces his shield in the target direction and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>5</small> seconds, during which he becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> against non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> damage dealt by enemies from the target direction. He also continually performs strikes in a cone in front of him, dealing <span style="color:orange; white-space:normal">8.<small><span style="text-decoration: overline;">3</span></small>% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> every 0.<small>125</small> seconds to enemies hit, reduced by 50% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and up to <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal"><b>total</b> physical damage</span>.',
    leveling: [],
  },
  {
    description:
      '<i>Aegis Assault</i> can be recast after 0.<small>3</small> seconds, and does so automatically after the duration. <i>Aegis Assault\'s</i> channel cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Pantheon</b> slams with his shield in a cone in front of him, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '55 / 105 / 155 / 205 / 255 (+ 150% bonus AD)',
        values: [55, 105, 155, 205, 255],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 105 / 155 / 205 / 255',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 150% bonus AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Pantheon_Aegis_Assault_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span>:</b></span> After recasting, <b>Pantheon</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">60% <b>bonus</b> movement speed</span></span> for 1.<small>5</small> seconds.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Pantheon</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor penetration</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Armor Penetration:',
        raw: '10 / 20 / 30%',
        values: [10, 20, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30%',
      },
    ],
  },
  {
    img: '/wiki/images/Pantheon_Grand_Starfall.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 2 seconds, then leaps high into the air, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishing</a></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span> until he reappears. While in the air, <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> again for 2.<small>2</small> seconds and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around the target location 0.<small>5</small> seconds into the channel.',
    leveling: [],
  },
  {
    description:
      'After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>8</small></span> seconds into the channel, <b>Pantheon</b> prepares for landing by hurling his spear to the target location over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>2</small></span> seconds that deals <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Comet Spear.png|20px|border]] Comet Spear\'s rank" data-start="40;0" data-finish="190;5" data-bot_values="40;70;100;130;160;190" data-top_values="0;1;2;3;4;5">40 − 190 (based on <a href="https://static.wikia.nocookie.net/leagueoflegends/images/0/0c/Pantheon_Comet_Spear.png/revision/latest?cb=20190730164444" class="image"><img alt="Comet Spear.png" src="/wiki/images/Pantheon_Comet_Spear.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> Comet Spear\'s rank)</span> <span style="color:orange; white-space:normal">(+&nbsp;115% <b>bonus</b> AD)</span> physical damage</span> to enemies near its landing point and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 2 seconds.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 3:',
        raw: "2 seconds that deals 40 − 190 (based on  Comet Spear's rank) (+ 115% bonus AD) physical damage to enemies near its landing point and  slows them by 50% for 2 seconds",
        damagetype: 'Physical',
        values: [2, 190],
        user: 'none',
        units: '',
        unitsText:
          'physical damage to enemies near its landing point and  slows them by 50% for 2 seconds',
        pre: '2 seconds that deals 40 − 190',
        post: 'physical damage to enemies near its landing point and  slows them by 50% for 2 seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on  Comet Spear's rank",
            pre: "based on  Comet Spear's rank",
          },
          {
            values: 115,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 115% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Over the remaining <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1.<small>2</small></span> seconds, <b>Pantheon</b> crashes down and creates a shockwave alongside himself that travels toward the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, reduced by up to 50% for those hit at the edge of the area. Upon completion of the channel, <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">reappears</a></span> at the target location and gains full stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '300 / 500 / 700 (+ 100% AP)',
        values: [300, 500, 700],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 500 / 700',
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
        name: 'Reduced Damage:',
        raw: '150 / 250 / 350 (+ 50% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Grand Starfall</i> is put on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;30-second</span> cooldown if the first channel is canceled.',
    leveling: [],
  },
  {
    description:
      '<i>Grand Starfall will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Pantheon = { I, Q, W, E, R };
