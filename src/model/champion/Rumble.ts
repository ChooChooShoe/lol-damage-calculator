import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Rumble';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Rumble_Junkyard_Titan.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Rumble\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> casts generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">Heat</a></span>, which refreshes on subsequent casts and decays by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">10 Heat</a></span> per second after not using any basic ability within 4 seconds or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="The Equalizer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#The_Equalizer" title="The Equalizer"><img alt="The Equalizer" src="/wiki/images/Rumble_The_Equalizer.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#The_Equalizer" title="Rumble/LoL">The Equalizer</a></span></span></i> within 2 seconds. <b>Rumble\'s</b> mech enters the <i>Danger Zone</i> when at or above <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">50 Heat</a></span>, and becomes <i>Overheated</i> while at <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">100 Heat</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Rumble_Junkyard_Titan_2.png',
    description:
      '<span class="template_sbc"><b>Danger Zone:</b></span> <b>Rumble\'s</b> mech enters the <i>Danger Zone</i>, empowering his basic abilities.',
    leveling: [],
  },
  {
    img: '/wiki/images/Rumble_Junkyard_Titan_3.png',
    description:
      '<span class="template_sbc"><b>Overheated:</b></span> <b>Rumble\'s</b> mech becomes <i>Overheated</i>, disabling his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> as his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">Heat</a></span> decays back down to 0 over 5.<small>25</small> seconds. During this time, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="80;" data-bot_values="20;23.53;27.06;30.59;34.12;37.65;41.18;44.71;48.24;51.76;55.29;58.82;62.35;65.88;69.41;72.94;76.47;80" data-top_values="" data-bot_key="%">20% − 80% (based on level)</span> <b>bonus</b> attack speed</span></span> and empowers his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="5;" data-finish="40;" data-bot_values="5;7.06;9.12;11.18;13.24;15.29;17.35;19.41;21.47;23.53;25.59;27.65;29.71;31.76;33.82;35.88;37.94;40" data-top_values="">5 − 40 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;6% of the target\'s <b>maximum</b> health)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. The damage based on the target\'s health ratio is capped at 80 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: " During this time, he gains  20% − 80% (based on level) bonus attack speed and empowers his basic attacks to deal 5 − 40 (based on level) (+ 25% AP) (+ 6% of the target's maximum health) bonus magic damage  on-hit",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText:
          'bonus attack speed and empowers his basic attacks to deal 5 − 40',
        pre: 'During this time, he gains  20% − 80%',
        post: 'bonus attack speed and empowers his basic attacks to deal 5 − 40',
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
            values: 6,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: "+ 6% of the target's maximum health",
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Rumble_Flamespitter.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rumble</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">20 Heat</a></span> to activate his flamethrower for 3 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to enemies hit in a frontal cone, reduced against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '180 / 220 / 260 / 300 / 340 (+ 110% AP)',
        values: [180, 220, 260, 300, 340],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '180 / 220 / 260 / 300 / 340',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 110% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '15 / 18.333 / 21.667 / 25 / 28.333 (+ 9.17% AP)',
        values: [15, 18.333, 21.667, 25, 28.333],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 18.333 / 21.667 / 25 / 28.333',
        children: [
          {
            values: 9.17,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 9.17% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Modified Minion Damage:',
        raw: '60 / 65 / 70 / 75 / 80%',
        values: [60, 65, 70, 75, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 65 / 70 / 75 / 80%',
      },
      {
        effectType: 'Unique',
        name: 'Total Minion Damage:',
        raw: '108 / 143 / 182 / 225 / 272 (+ 66 / 71.5 / 77 / 82.5 / 88% AP)',
        values: [108, 143, 182, 225, 272],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '108 / 143 / 182 / 225 / 272',
        children: [
          {
            values: [66, 71.5, 77, 82.5, 88],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 66 / 71.5 / 77 / 82.5 / 88% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minion Damage Per Tick:',
        raw: '9 / 11.917 / 15.167 / 18.75 / 22.667 (+ 5.5 / 5.958 / 6.417 / 6.875 / 7.333% AP)',
        values: [9, 11.917, 15.167, 18.75, 22.667],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '9 / 11.917 / 15.167 / 18.75 / 22.667',
        children: [
          {
            values: [5.5, 5.958, 6.417, 6.875, 7.333],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 5.5 / 5.958 / 6.417 / 6.875 / 7.333% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span> Bonus:</b></span> <i>Flamespitter\'s</i> <a href="/wiki/Damage" title="Damage">damage</a> is increased by 50%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Enhanced Damage:',
        raw: '270 / 330 / 390 / 450 / 510 (+ 165% AP)',
        values: [270, 330, 390, 450, 510],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '270 / 330 / 390 / 450 / 510',
        children: [
          {
            values: 165,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 165% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Enhanced Damage Per Tick:',
        raw: '22.5 / 27.5 / 32.5 / 37.5 / 42.5 (+ 13.75% AP)',
        values: [22.5, 27.5, 32.5, 37.5, 42.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '22.5 / 27.5 / 32.5 / 37.5 / 42.5',
        children: [
          {
            values: 13.75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 13.75% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Enhanced Minion Damage:',
        raw: '162 / 214.5 / 273 / 337.5 / 408 (+ 99 / 107.25 / 115.5 / 123.75 / 132% AP)',
        values: [162, 214.5, 273, 337.5, 408],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '162 / 214.5 / 273 / 337.5 / 408',
        children: [
          {
            values: [99, 107.25, 115.5, 123.75, 132],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 99 / 107.25 / 115.5 / 123.75 / 132% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minion Damage Per Tick:',
        raw: '13.5 / 17.875 / 22.75 / 28.125 / 34 (+ 8.25 / 8.9375 / 9.625 / 10.3125 / 11% AP)',
        values: [13.5, 17.875, 22.75, 28.125, 34],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '13.5 / 17.875 / 22.75 / 28.125 / 34',
        children: [
          {
            values: [8.25, 8.9375, 9.625, 10.3125, 11],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 8.25 / 8.9375 / 9.625 / 10.3125 / 11% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Rumble_Scrap_Shield.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rumble</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">20 Heat</a></span> to grant himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 45% AP)',
        values: [60, 90, 120, 150, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120 / 150 / 180',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Rumble_Scrap_Shield_2.png',
    description:
      '<b>Rumble</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">1 to 1.<small>32</small> seconds.</span>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '10 / 15 / 20 / 25 / 30%',
        values: [10, 15, 20, 25, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30%',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span> Bonus:</b></span> <i>Scrap Shield\'s</i> shield strength and <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> are increased in effectiveness by 50%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Enhanced Shield Strength:',
        raw: '90 / 135 / 180 / 225 / 270 (+ 67.5% AP)',
        values: [90, 135, 180, 225, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 135 / 180 / 225 / 270',
        children: [
          {
            values: 67.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 67.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Enhanced Bonus Movement Speed:',
        raw: '15 / 22.5 / 30 / 37.5 / 45%',
        values: [15, 22.5, 30, 37.5, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 22.5 / 30 / 37.5 / 45%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Rumble_Electro_Harpoon.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rumble</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">10 Heat</a></span> to shoot a harpoon in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, inflicting them with <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">10% magic resistance reduction</span></span> for 4 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds. These effects <a href="/wiki/Stack" title="Stack">stack</a> additively with multiple harpoons, refreshing their duration and stacking up to 2 times.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 85 / 110 / 135 / 160 (+ 40% AP)',
        values: [60, 85, 110, 135, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 85 / 110 / 135 / 160',
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
        name: 'Total Magic Damage:',
        raw: '120 / 170 / 220 / 270 / 320 (+ 80% AP)',
        values: [120, 170, 220, 270, 320],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 170 / 220 / 270 / 320',
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
      {
        effectType: 'Unique',
        name: 'Total Slow:',
        raw: '30 / 40 / 50 / 60 / 70%',
        values: [30, 40, 50, 60, 70],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50 / 60 / 70%',
      },
    ],
  },
  {
    description:
      '<b>Rumble</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> an <i>Electro Harpoon</i> charge, up to a maximum of 2.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span> Bonus:</b></span> <i>Electro Harpoon\'s</i> effects are increased by 50%. The <span style="color: #00FFFF; white-space:normal">magic resistance reduction</span> is increased to <span style="color: #00FFFF; white-space:normal">15%</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Enhanced Damage:',
        raw: '90 / 127.5 / 165 / 202.5 / 240 (+ 60% AP)',
        values: [90, 127.5, 165, 202.5, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 127.5 / 165 / 202.5 / 240',
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
        effectType: 'Unique',
        name: 'Total Enhanced Damage:',
        raw: '180 / 255 / 330 / 405 / 480 (+ 120% AP)',
        values: [180, 255, 330, 405, 480],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '180 / 255 / 330 / 405 / 480',
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
      {
        effectType: 'Unique',
        name: 'Enhanced Slow:',
        raw: '22.5 / 30 / 37.5 / 45 / 52.5%',
        values: [22.5, 30, 37.5, 45, 52.5],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '22.5 / 30 / 37.5 / 45 / 52.5%',
      },
      {
        effectType: 'Unique',
        name: 'Total Enhanced Slow:',
        raw: '45 / 60 / 75 / 90 / 105%',
        values: [45, 60, 75, 90, 105],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 60 / 75 / 90 / 105%',
      },
    ],
  },
  {
    description:
      '<i>If <b>Rumble</b> casts Electro Harpoon before his mech becomes <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_3" title="Overheated"><img alt="Overheated" src="/wiki/images/Rumble_Junkyard_Titan_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_3" title="Rumble/LoL">Overheated</a></span></span>, he may still use another charge within 3 seconds of the initial cast.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Rumble_The_Equalizer.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rumble</b> deploys a barrage of rockets along the target path that land in a line over 0.<small>75</small> seconds, creating a field of fire for 4.<small>5</small> seconds after the last rocket lands.',
    leveling: [],
  },
  {
    description:
      'Enemies struck by the impact or within the field are marked as <i>Burning</i> for 1 second, which deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> by 35%, and refreshes continuously while in the area.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '70 / 105 / 140 (+ 17.5% AP)',
        values: [70, 105, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140',
        children: [
          {
            values: 17.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 17.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '140 / 210 / 280 (+ 35% AP)',
        values: [140, 210, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 210 / 280',
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
        effectType: 'Unique',
        name: 'Maximum Magic Damage:',
        raw: '700 / 1050 / 1400 (+ 175% AP)',
        values: [700, 1050, 1400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '700 / 1050 / 1400',
        children: [
          {
            values: 175,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 175% AP',
          },
        ],
      },
    ],
  },
];
export const Rumble = { I, Q, W, E, R };
