import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Lucian';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Lucian_Lightslinger.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <b>Lucian\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 3.<small>5</small> seconds fires an additional shot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> after 0.<small>25</small> seconds, which deals <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="50;55;60" data-top_values="1;7;13" data-bot_key="%">50 / 55 / 60% (based on level)</span> AD <span style="color: #FF8C34; white-space:normal">physical damage</span></span>, increased to <span style="color:orange; white-space:normal">100% AD</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 3:',
        raw: '25 seconds, which deals 50 / 55 / 60% (based on level) AD physical damage, increased to 100% AD against  minions',
        increasedStat: 'total_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'AD physical damage, increased to 100% AD against  minions',
        pre: '25 seconds, which deals 50 / 55 / 60%',
        post: 'AD physical damage, increased to 100% AD against  minions',
      },
    ],
  },
  {
    description:
      'The second shot applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness and is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [],
  },
  {
    description:
      "If <b>Lucian's</b> primary target is killed before the second shot can go off, he automatically shoots another enemy in range.",
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Vigilance:</b></span> Whenever <b>Lucian</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielded</a></span> or granted a <a href="/wiki/Buff" title="Buff">buff</a> by an ally, his next two shots within 6 seconds are empowered to deal <span style="color: #00B0F0; white-space:normal">14</span> <span style="color:orange; white-space:normal">(+&nbsp;20% AD)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. The empowered shots can <a href="/wiki/Stack" title="Stack">stack</a> up to 4 times.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Whenever Lucian is  healed,  shielded or granted a buff by an ally, his next two shots within 6 seconds are empowered to deal 14 (+ 20% AD) bonus magic damage  on-hit',
        healType: 'BonusHealth',
        values: 6,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage  on-hit',
        pre: 'Whenever Lucian is  healed,  shielded or granted a buff by an ally, his next two shots within 6 seconds are empowered to deal 14',
        post: 'bonus magic damage  on-hit',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 20% AD',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Lucian_Piercing_Light.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lucian</b> fires a laser in a line in the direction of the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '95 / 125 / 155 / 185 / 215 (+ 60 / 75 / 90 / 105 / 120% bonus AD)',
        values: [95, 125, 155, 185, 215],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '95 / 125 / 155 / 185 / 215',
        children: [
          {
            values: [60, 75, 90, 105, 120],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 60 / 75 / 90 / 105 / 120% bonus AD',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Lucian_Ardent_Blaze.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lucian</b> fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 110 / 145 / 180 / 215 (+ 90% AP)',
        values: [75, 110, 145, 180, 215],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 110 / 145 / 180 / 215',
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
    img: '/wiki/images/Lucian_Ardent_Blaze_2.png',
    description: 'Enemies hit are marked for 6 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Lucian_Ardent_Blaze_3.png',
    description:
      '<b>Lucian</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 1 second when he or allied champions damage a marked target. Allied champions triggering this effect grant <b>Lucian</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Lightslinger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Lightslinger" title="Vigilance"><img alt="Vigilance" src="/wiki/images/Lucian_Lightslinger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Lightslinger" title="Lucian/LoL">Vigilance</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '60 / 65 / 70 / 75 / 80',
        values: [60, 65, 70, 75, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 65 / 70 / 75 / 80',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <i>Relentless Pursuit\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 1 second for each <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Lightslinger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Lightslinger" title="Lightslinger"><img alt="Lightslinger" src="/wiki/images/Lucian_Lightslinger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Lightslinger" title="Lucian/LoL">Lightslinger</a></span></span></i> shot hit, doubled to 2 seconds against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Lucian_Relentless_Pursuit.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lucian</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction.',
    leveling: [],
  },
  {
    description:
      '<i>Relentless Pursuit <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Lucian\'s</b> basic attack timer. <b>Lucian</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Relentless Pursuit will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Lucian_The_Culling.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lucian</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 3 seconds, rapidly firing up to 22 <span style="color: #E56013; white-space:normal">(+&nbsp;1 per 4% critical strike chance)</span> shots in the target direction. Each shot deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>. <i>The Culling</i> can be recast after 0.<small>75</small> seconds during the channel, and does so automatically when the channel ends.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: ' Lucian  channels for up to 3 seconds, rapidly firing up to 22 (+ 1 per 4% critical strike chance) shots in the target direction',
        values: 3,
        user: 'none',
        units: '',
        unitsText: 'shots in the target direction',
        pre: 'Lucian  channels for up to 3 seconds, rapidly firing up to 22',
        post: 'shots in the target direction',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_critchance',
            unitsText: 'critical strike chanceper 4',
            pre: '+ 1 per 4% critical strike chance',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Shot:',
        raw: '15 / 30 / 45 (+ 25% AD) (+ 15% AP)',
        values: [15, 30, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 30 / 45',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 25% AD',
          },
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
        name: 'Additional Damage per 20% Crit Chance:',
        raw: '75 / 150 / 225 (+ 125% AD) (+ 75% AP)',
        values: [75, 150, 225],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 150 / 225',
        children: [
          {
            values: 125,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 125% AD',
          },
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '330 / 660 / 990 (+ 550% AD) (+ 330% AP) + 15 / 30 / 45 (+ 25% AD) (+ 15% AP) per 4% critical strike chance',
        values: [330, 660, 990],
        user: 'none',
        units: '',
        unitsText: '+ 15 / 30 / 45',
        pre: '330 / 660 / 990',
        post: '+ 15 / 30 / 45',
        children: [
          {
            values: 550,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 550% AD',
          },
          {
            values: 330,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 330% AP',
          },
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 25% AD',
          },
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
        name: 'Minion Damage Per Shot:',
        raw: '30 / 60 / 90 (+ 50% AD) (+ 30% AP)',
        values: [30, 60, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 60 / 90',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
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
        effectType: 'Unique',
        name: 'Additional Minion Damage per 20% Crit Chance:',
        raw: '150 / 300 / 450 (+ 250% AD) (+ 150% AP)',
        values: [150, 300, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 300 / 450',
        children: [
          {
            values: 250,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 250% AD',
          },
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Minion Damage:',
        raw: '660 / 1320 / 1980 (+ 1100% AD) (+ 660% AP) + 30 / 60 / 90 (+ 50% AD) (+ 30% AP) per 4% critical strike chance',
        values: [660, 1320, 1980],
        user: 'none',
        units: '',
        unitsText: '+ 30 / 60 / 90',
        pre: '660 / 1320 / 1980',
        post: '+ 30 / 60 / 90',
        children: [
          {
            values: 1100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 1100% AD',
          },
          {
            values: 660,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 660% AP',
          },
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
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
    ],
  },
  {
    description:
      'While channeling, <b>Lucian</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and may still move and cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Relentless Pursuit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Relentless_Pursuit" title="Relentless Pursuit"><img alt="Relentless Pursuit" src="/wiki/images/Lucian_Relentless_Pursuit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Relentless_Pursuit" title="Lucian/LoL">Relentless Pursuit</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Lucian</b> ends <i>The Culling</i>.',
    leveling: [],
  },
];
export const Lucian = { I, Q, W, E, R };
