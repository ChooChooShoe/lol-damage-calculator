import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Viego';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Viego_Sovereign%27s_Domination_2.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Viego</b> scores an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> while alive and within 3 seconds of damaging them, a <i>Mist Wraith</i> spawns from that champion\'s corpse for 8 seconds. <b>Viego</b> can basic attack a <i>Mist Wraith</i> to consume it: causing him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to its location after winding up for 1 second, during which he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> (except to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>) and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>. He then gains <i>Possession</i> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself for <span style="color: #1F995C; white-space:normal">2%</span> <span style="color:orange; white-space:normal">(+&nbsp;2.<small>5</small>% per 100 <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color:orangered; white-space:normal">(+&nbsp;5% per 100% <b>bonus</b> attack speed)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' causing him to  blink to its location after winding up for 1 second, during which he is  untargetable (except to  turrets) and  unable to act',
        values: 1,
        user: 'none',
        units: '',
        unitsText: 'and  unable to act',
        pre: 'causing him to  blink to its location after winding up for 1 second, during which he is  untargetable',
        post: 'and  unable to act',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'except to  turrets',
            pre: 'except to  turrets',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Line 4:',
        raw: "5% per 100 bonus AD) (+ 2% per 100 AP) (+ 5% per 100% bonus attack speed) of the target's maximum health",
        healType: 'OutgoingHeals',
        values: 5,
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health",
        pre: '5% per 100 bonus AD',
        post: "of the target's maximum health",
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
          {
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'per 100',
            pre: '+ 5% per 100% bonus attack speed',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Viego_Sovereign%27s_Domination.png',
    description:
      '<span class="template_sbc"><b>Possession:</b></span> For 10 seconds, <b>Viego</b> assumes the enemy champion\'s form and gains their <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <a href="/wiki/Champion_ability" title="Champion ability">basic abilities</a>, <a href="/wiki/Item" class="mw-redirect" title="Item">items</a>, and base <a href="/wiki/Champion_statistic" title="Champion statistic">stats</a> (based on <b>Viego\'s</b> <a href="/wiki/Experience_(champion)" title="Experience (champion)">level</a>). He also gains a free cast of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span></i>, which is initially placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1.<small>5</small>-second</span> cooldown, and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span> while facing enemy champions within 2500 units.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: " For 10 seconds, Viego assumes the enemy champion's form and gains their basic attacks, basic abilities, items, and base stats (based on Viego's level)",
        increasedStat: 'base_ad',
        values: 1,
        user: 'player',
        units: '',
        unitsText:
          "10 seconds, Viego assumes the enemy champion's form and gains their basic attacks, basic abilities, items, and base stats",
        pre: "For 10 seconds, Viego assumes the enemy champion's form and gains their basic attacks, basic abilities, items, and base stats",
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on Viego's level",
            pre: "based on Viego's level",
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Viego</b> cannot use <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a>, <a href="/wiki/Consumable_item" title="Consumable item">consumable items</a>, nor the <a href="/wiki/Shop" title="Shop">shop</a> during <i>Possession</i>. Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span></i> or attacking a <i>Mist Wraith</i> ends <i>Possession</i> immediately.',
    leveling: [],
  },
  {
    description:
      '<i><b>Viego</b> will preserve his <span style="color: #1F995C; white-space:normal"><b>current</b> health percentage</span> between transformations.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Viego\'s</b> basic attacks are empowered to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, which has a minimum threshold and is capped at 80 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Physical Damage:',
        raw: "2 / 3 / 4 / 5 / 6% of target's current health",
        healType: 'OutgoingHeals',
        values: [2, 3, 4, 5, 6],
        valuesIsPercent: true,
        user: 'target',
        units: 'current_hp',
        unitsText: "of target's current health",
        pre: "2 / 3 / 4 / 5 / 6% of target's current health",
      },
      {
        effectType: 'Unique',
        name: 'Minimum Bonus Damage:',
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
      'Additionally, his damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a mark to enemies hit for 4 seconds. <b>Viego\'s</b> next basic attack against a marked target is empowered to consume the mark <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> to strike a second time, dealing <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Scales on current AD and AP"><span style="color:orange; white-space:normal">20% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span></span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> him for 135% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt, increased to 145% against monsters and reduced to 10% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: " Viego's next basic attack against a marked target is empowered to consume the mark  on-hit to strike a second time, dealing 20% AD (+ 15% AP) physical damage and  healing him for 135% of the post-mitigation damage dealt, increased to 145% against monsters and reduced to 10% against  minions",
        healType: 'PhysicalVamp',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText:
          'physical damage and  healing him for 135% of the post-mitigation damage dealt, increased to 145% against monsters and reduced to 10% against  minions',
        pre: "Viego's next basic attack against a marked target is empowered to consume the mark  on-hit to strike a second time, dealing 20% AD",
        post: 'physical damage and  healing him for 135% of the post-mitigation damage dealt, increased to 145% against monsters and reduced to 10% against  minions',
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
    ],
  },
  {
    description:
      'The second strike can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">35% (+&nbsp;<span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge item.png" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> 7%) AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;26.25% (+<span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge item.png" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> 5.25%) AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: 'The second strike can  critically strike for 35% (+  7%) AD (+ 26',
        values: 3,
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD + 26',
        pre: 'The second strike can  critically strike for 35%',
        post: 'AD + 26',
        children: [
          {
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+  7%',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Viego_Blade_of_the_Ruined_King.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Viego</b> stabs in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="1 × critical strike chance" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on critical strike chance)</span></span>, and <span style="color: #FF8C34; white-space:normal">20 <b>bonus</b> physical damage</span> against monsters.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '15 / 30 / 45 / 60 / 75 (+ 70% AD) × (1 + (100% +  0%) critical strike chance)',
        values: [15, 30, 45, 60, 75],
        user: 'none',
        units: '',
        unitsText: '×',
        pre: '15 / 30 / 45 / 60 / 75',
        post: '×',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 70% AD',
          },
          {
            values: 1,
            user: 'player',
            units: 'total_critchance',
            unitsText: 'critical strike chance',
            pre: '1 +',
            post: 'critical strike chance',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  0',
                pre: '100% +  0%',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Monster Damage:',
        raw: '35 / 50 / 65 / 80 / 95 (+ 70% AD) × (1 + (100% +  0%) critical strike chance)',
        values: [35, 50, 65, 80, 95],
        user: 'none',
        units: '',
        unitsText: '×',
        pre: '35 / 50 / 65 / 80 / 95',
        post: '×',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 70% AD',
          },
          {
            values: 1,
            user: 'player',
            units: 'total_critchance',
            unitsText: 'critical strike chance',
            pre: '1 +',
            post: 'critical strike chance',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  0',
                pre: '100% +  0%',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Blade of the Ruined King\'s passive remains under </i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Sovereign\'s Domination" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Possession"><img alt="Possession" src="/wiki/images/Viego_Sovereign%27s_Domination.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Viego/LoL">Possession</a></span></span><i>, and while transformed, the second strike is instead converted to <b>bonus</b> damage on-hit which no longer applies on-hit effects but can still <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> (based on possessed stats).</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Viego_Spectral_Maw.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Viego</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 10% for up to 3 seconds to increase <i>Spectral Maw\'s</i> missile range and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> duration over the first second of the channel.',
    leveling: [],
  },
  {
    description:
      '<i>Spectral Maw</i> can be recast within the duration. If the charge completes without reactivation, <i>Spectral Maw</i> is cancelled and placed on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;full cooldown</span>. If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>, it will be placed on a 3-second cooldown.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Viego</b> hurls a blast of mist in the target direction and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the same direction, though not through terrain. The mist deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="0.25 + (0.25 per 0.25 seconds channeled)." data-bot_values="0.25;0.5;0.75;1;1.25" data-top_values="0;0.25;0.5;0.75;1">0.<small>25</small> − 1.<small>25</small> (based on channel time)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '25 − 1',
        values: [25, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 − 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '25 (based on channel time) seconds',
        values: 25,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '25',
        post: 'seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 135 / 190 / 245 / 300 (+ 100% AP)',
        values: [80, 135, 190, 245, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 135 / 190 / 245 / 300',
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
      '<i>Spectral Maw <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Viego\'s</b> basic attack timer. <b>Viego</b> can cast any of his abilities during the dash.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Viego_Harrowed_Path.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Viego</b> sends a spectre in the target direction that creates a trail of mist in its wake which lasts 8 seconds. If it hits <a href="/wiki/Terrain" title="Terrain">terrain</a>, the mist will spread further around either side.',
    leveling: [],
  },
  {
    img: '/wiki/images/Viego_Harrowed_Path_2.png',
    description:
      'While inside the mist, <b>Viego</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>. If he does not attack or cast abilities, he also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>.',
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
        name: 'Bonus Movement Speed:',
        raw: '25 / 27.5 / 30 / 32.5 / 35% (+ 4% per 100 AP)',
        values: [25, 27.5, 30, 32.5, 35],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 27.5 / 30 / 32.5 / 35%',
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 4% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Declaring a basic attack or casting an ability will break the camouflage and remove the <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>, preventing <b>Viego</b> from gaining them again for 1 second, reduced to 0.<small>6</small> seconds if he recasted <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Spectral Maw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Spectral Maw"><img alt="Spectral Maw" src="/wiki/images/Viego_Spectral_Maw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Viego/LoL">Spectral Maw</a></span></span></i> and increased to 2 seconds if he attacked a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>. This duration refreshes on subsequent attacks and ability casts.',
    leveling: [],
  },
  {
    description:
      '<i>Harrowed Path can be cast during any of <b>Viego\'s</b> abilities. He cannot gain the camouflage nor <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> from Harrowed Path for 0.<small>75</small> seconds after starting the channel of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Spectral Maw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Spectral Maw"><img alt="Spectral Maw" src="/wiki/images/Viego_Spectral_Maw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Viego/LoL">Spectral Maw</a></span></span>, recasting ends this duration prematurely.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Viego_Heartbreaker.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Viego</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> over the cast time, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location. Upon arrival, he strikes the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Lowest health percent">most wounded</span> enemy champion <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Alternatively the closest one if all targets have the same percent health">nearby</span>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 99% for 0.<small>25</small> seconds, and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness. Other nearby enemies are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> up to 400-units away based on proximity, though not through terrain.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: "12 / 16 / 20% (+ 3% per 100 bonus AD) of target's missing health",
        healType: 'OutgoingHeals',
        values: [12, 16, 20],
        valuesIsPercent: true,
        user: 'target',
        units: 'missing_hp',
        unitsText: "of target's missing health",
        pre: '12 / 16 / 20%',
        post: "of target's missing health",
        children: [
          {
            values: 3,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 3% per 100 bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'All targets hit are dealt <span style="color:orange; white-space:normal">120% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="1 × critical strike chance" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on critical strike chance)</span></span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: 'All targets hit are dealt 120% AD physical damage, increased by 0% − 100% (based on critical strike chance)',
        damagetype: 'Physical',
        values: 1,
        valuesIsPercent: true,
        user: 'target',
        units: 'total_ad',
        unitsText:
          'AD physical damage, increased by 0targets hit are dealt 120',
        pre: 'All targets hit are dealt 120% AD physical damage, increased by 0% − 100%',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'base_critchance',
            unitsText: 'based on critical strike chance',
            pre: 'based on critical strike chance',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>If a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Sovereign\'s Domination" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Possession"><img alt="Possession" src="/wiki/images/Viego_Sovereign%27s_Domination.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Viego/LoL">Possession</a></span></span> is discarded, Heartbreaker will be placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1.<small>5</small>-second</span> cooldown if it is not already on cooldown. Heartbreaker will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Viego = { I, Q, W, E, R };
