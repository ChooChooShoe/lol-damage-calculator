import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Gwen';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Gwen_Thousand_Cuts.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Gwen\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, the center of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-ability="Snip Snip!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL#Snip_Snip!" title="Snip Snip!"><img alt="Snip Snip!" src="/wiki/images/Gwen_Snip_Snip%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL#Snip_Snip!" title="Gwen/LoL">Snip Snip!</a></span></span></i>, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-ability="Needlework" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL#Needlework" title="Needlework"><img alt="Needlework" src="/wiki/images/Gwen_Needlework.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL#Needlework" title="Gwen/LoL">Needlework</a></span></span></i> deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal">1% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;0.<small>8</small>% per 100 AP)</span> of the target\'s <b>maximum</b> health</span>.',
    leveling: [],
  },
  {
    description: '<i>Thousand Cuts</i> is modified based on the target:\n',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Gwen\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Snippy</i> <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.',
    leveling: [],
  },
  {
    img: '/wiki/images/Gwen_Snip_Snip%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gwen</b> snips at least twice with her scissors in a cone in the target direction over the cast time, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> per snip to all enemies within the area, with the final snip dealing increased damage. The center of each snip applies <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-ability="Thousand Cuts" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="Thousand Cuts"><img alt="Thousand Cuts" src="/wiki/images/Gwen_Thousand_Cuts.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="Gwen/LoL">Thousand Cuts</a></span></span></i> and converts 50% of the damage to <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span></span> instead. <i>Snip Snip!</i> deals 75% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executes</a></span> them on the first damage instance if they are <span style="color: #1F995C; white-space:normal"><b>below</b> 20% health</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage per Snip:',
        raw: '10 / 15 / 20 / 25 / 30 (+ 5% AP)',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 5% AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Center Damage per Snip:',
        raw: "10 / 15 / 20 / 25 / 30 (+ 5% AP) (+ 1% (+ 0.8% per 100 AP) of the target's maximum health)",
        healType: 'OutgoingHeals',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 5% AP',
          },
          {
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '+ 1%',
            post: "of the target's maximum health",
            children: [
              {
                values: 0.8,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.8% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Final Snip Damage:',
        raw: '60 / 85 / 110 / 135 / 160 (+ 35% AP)',
        values: [60, 85, 110, 135, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 85 / 110 / 135 / 160',
        children: [
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
      {
        effectType: 'Heal',
        name: 'Final Snip Center Damage:',
        raw: "60 / 85 / 110 / 135 / 160 (+ 35% AP) (+ 1% (+ 0.8% per 100 AP) of the target's maximum health)",
        healType: 'OutgoingHeals',
        values: [60, 85, 110, 135, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 85 / 110 / 135 / 160',
        children: [
          {
            values: 35,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 35% AP',
          },
          {
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '+ 1%',
            post: "of the target's maximum health",
            children: [
              {
                values: 0.8,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.8% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    description:
      'If <b>Gwen</b> has any <i>Snippy</i> stacks, she consumes them to snip an additional time for each.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Damage:',
        raw: '70 / 100 / 130 / 160 / 190 (+ 40% AP)',
        values: [70, 100, 130, 160, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 100 / 130 / 160 / 190',
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
        effectType: 'Heal',
        name: 'Minimum Center Damage:',
        raw: "70 / 100 / 130 / 160 / 190 (+ 40% AP) (+ 2% (+ 1.6% per 100 AP) of the target's maximum health)",
        healType: 'OutgoingHeals',
        values: [70, 100, 130, 160, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 100 / 130 / 160 / 190',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
          {
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '+ 2%',
            post: "of the target's maximum health",
            children: [
              {
                values: 1.6,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1.6% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Damage:',
        raw: '110 / 160 / 210 / 260 / 310 (+ 60% AP)',
        values: [110, 160, 210, 260, 310],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 160 / 210 / 260 / 310',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Maximum Center Damage:',
        raw: "110 / 160 / 210 / 260 / 310 (+ 60% AP) (+ 6% (+ 4.8% per 100 AP) of the target's maximum health)",
        healType: 'OutgoingHeals',
        values: [110, 160, 210, 260, 310],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 160 / 210 / 260 / 310',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
          {
            values: 6,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '+ 6%',
            post: "of the target's maximum health",
            children: [
              {
                values: 4.8,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4.8% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Gwen_Hallowed_Mist.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gwen</b> summons the Hallowed Mist upon her current location, lasting for 4 seconds. <i>Hallowed Mist</i> can be recast after 0.<small>5</small> seconds, and does so automatically if <b>Gwen</b> attempts to leave the area.',
    leveling: [],
  },
  {
    img: '/wiki/images/Hallowed_Mist_2.png',
    description:
      'While inside the mist, <b>Gwen</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to all enemies (except <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>) outside of the mist.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Resistances:',
        raw: '17 / 19 / 21 / 23 / 25 (+ 7% AP)',
        values: [17, 19, 21, 23, 25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '17 / 19 / 21 / 23 / 25',
        children: [
          {
            values: 7,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 7% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Gwen</b> commands the mist to move to her current location.',
    leveling: [],
  },
  {
    description:
      '<i><b>Gwen</b> negates all attacks by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> outside of the mist.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Gwen_Skip_%27n_Slash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gwen</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, then empowers her basic attacks within the next 4 seconds to deal <span style="color: #00B0F0; white-space:normal">15</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> attack range</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Gwen  dashes to the target location, then empowers her basic attacks within the next 4 seconds to deal 15 (+ 20% AP) bonus magic damage  on-hit and gain  bonus attack speed and  75 bonus attack range',
        increasedStat: 'bonus_ad',
        values: 4,
        user: 'player',
        units: '',
        unitsText:
          'bonus magic damage  on-hit and gain  bonus attack speed and  75 bonus attack range',
        pre: 'Gwen  dashes to the target location, then empowers her basic attacks within the next 4 seconds to deal 15',
        post: 'bonus magic damage  on-hit and gain  bonus attack speed and  75 bonus attack range',
        children: [
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
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '20 / 35 / 50 / 65 / 80%',
        values: [20, 35, 50, 65, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80%',
      },
    ],
  },
  {
    description:
      '<b>Gwen\'s</b> first basic attack within the duration refunds a portion of <i>Skip \'n Slash\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Cooldown Refund:',
        raw: '25 / 35 / 45 / 55 / 65%',
        values: [25, 35, 45, 55, 65],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 35 / 45 / 55 / 65%',
      },
    ],
  },
  {
    description:
      '<i>Skip \'n Slash <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Gwen\'s</b> basic attack timer, and can be cast during any of her abilities, and vice versa. Skip \'n Slash will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Gwen_Needlework.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gwen</b> launches a needle in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Needle:',
        raw: '35 / 65 / 95 (+ 10% AP)',
        values: [35, 65, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 65 / 95',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Damage with  Thousand Cuts:',
        raw: "35 / 65 / 95 (+ 10% AP) (+ 1% (+ 0.8% per 100 AP) of the target's maximum health)",
        healType: 'OutgoingHeals',
        values: [35, 65, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 65 / 95',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
          {
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '+ 1%',
            post: "of the target's maximum health",
            children: [
              {
                values: 0.8,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.8% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '40 / 50 / 60%',
        values: [40, 50, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60%',
      },
    ],
  },
  {
    img: '/wiki/images/Gwen_Needlework_2.png',
    description:
      '<i>Needlework</i> can be recast twice more within 6 seconds of the activation at no additional cost, with a 1-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> between casts. Each subsequent cast refreshes the duration and increases the number of needles launched by 2. Needle hits beyond the first <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> by a reduced amount against each individual target.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Reduced Slow:',
        raw: '15 / 20 / 25%',
        values: [15, 20, 25],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25%',
      },
    ],
  },
  {
    img: '/wiki/images/Gwen_Needlework_3.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Gwen</b> mimics the first cast\'s effects, while launching three needles on the second cast and five on the third cast.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Second Cast Total Damage:',
        raw: "105 / 195 / 285 (+ 30% AP) (+ 3% (+ 2.4% per 100 AP) of the target's maximum health)",
        healType: 'OutgoingHeals',
        values: [105, 195, 285],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '105 / 195 / 285',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
          {
            values: 3,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '+ 3%',
            post: "of the target's maximum health",
            children: [
              {
                values: 2.4,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2.4% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Third Cast Total Damage:',
        raw: "175 / 325 / 475 (+ 50% AP) (+ 5% (+ 4% per 100 AP) of the target's maximum health)",
        healType: 'OutgoingHeals',
        values: [175, 325, 475],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 325 / 475',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
          {
            values: 5,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '+ 5%',
            post: "of the target's maximum health",
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
        effectType: 'Heal',
        name: 'Maximum Total Damage:',
        raw: "315 / 585 / 855 (+ 90% AP) (+ 9% (+ 7.2% per 100 AP) of the target's maximum health)",
        healType: 'OutgoingHeals',
        values: [315, 585, 855],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '315 / 585 / 855',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
          {
            values: 9,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '+ 9%',
            post: "of the target's maximum health",
            children: [
              {
                values: 7.2,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 7.2% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
  },
];
export const Gwen = { I, Q, W, E, R };
