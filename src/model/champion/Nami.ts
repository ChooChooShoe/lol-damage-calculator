import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Nami';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Nami_Surging_Tides.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Nami\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> grant <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">90</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> to allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit, decaying over 1.<small>5</small> seconds. The bonus is<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;doubled&nbsp;」</span><span class="flipText2">「&nbsp;increased to <span style="color: #F5EE99; white-space:normal">180</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>&nbsp;」</span></span>from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-ability="Tidal Wave" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL#Tidal_Wave" title="Tidal Wave"><img alt="Tidal Wave" src="/wiki/images/Nami_Tidal_Wave.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL#Tidal_Wave" title="Nami/LoL">Tidal Wave</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: " Nami's abilities grant  90 (+ 20% AP) bonus movement speed to allied  champions hit, decaying over 1",
        values: 9,
        user: 'none',
        units: '',
        unitsText:
          'bonus movement speed to allied  champions hit, decaying over 1',
        pre: "Nami's abilities grant  90",
        post: 'bonus movement speed to allied  champions hit, decaying over 1',
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
        name: 'Line 3:',
        raw: ' The bonus is「 doubled 」「 increased to 180 (+ 40% AP) 」from  Tidal Wave',
        values: 1,
        user: 'none',
        units: '',
        unitsText: '」from  Tidal Wave',
        pre: 'The bonus is「 doubled 」「 increased to 180',
        post: '」from  Tidal Wave',
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
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Nami_Aqua_Prison.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nami</b> launches a bubble at the target location that lands <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="after the cast time ends">after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.7 seconds, but rounded up to the next game tick.">0.<small>726</small> seconds</span></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suspension"><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control">suspending</a></span> them for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 130 / 185 / 240 / 295 (+ 50% AP)',
        values: [75, 130, 185, 240, 295],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 130 / 185 / 240 / 295',
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
      '<i>Allied champions are granted <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nami" data-ability="Surging Tides" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nami/LoL#Surging_Tides" title="Surging Tides"><img alt="Surging Tides" src="/wiki/images/Nami_Surging_Tides.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nami/LoL#Surging_Tides" title="Nami/LoL">Surging Tides</a></span></span> in a slightly larger area.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Nami_Ebb_and_Flow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nami</b> unleashes a stream of water onto the target champion or herself, which then bounces to nearby unaffected champions up to twice, alternating between enemies and allies and <b>Nami</b>.',
    leveling: [],
  },
  {
    description:
      '<i>Ebb and Flow</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> allies and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies, with each bounce modifying the effectiveness of the next by -15% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7.<small>5</small>% per 100 AP)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '55 / 75 / 95 / 115 / 135 (+ 25% AP)',
        values: [55, 75, 95, 115, 135],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 75 / 95 / 115 / 135',
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
        name: 'Minimum Heal:',
        raw: '38.5 / 52.5 / 66.5 / 80.5 / 94.5 (+ 17.5% AP)',
        values: [38.5, 52.5, 66.5, 80.5, 94.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '38.5 / 52.5 / 66.5 / 80.5 / 94.5',
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
        name: 'Magic Damage:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 55% AP)',
        values: [60, 100, 140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220',
        children: [
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 55% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Damage:',
        raw: '42 / 70 / 98 / 126 / 154 (+ 38.5% AP)',
        values: [42, 70, 98, 126, 154],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '42 / 70 / 98 / 126 / 154',
        children: [
          {
            values: 38.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 38.5% AP',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Nami_Tidecaller%27s_Blessing.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nami</b> blesses herself or the target allied champion for 6 seconds, empowering the target\'s next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> or <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> to each deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> their target for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage Per Hit:',
        raw: '20 / 35 / 50 / 65 / 80 (+ 20% AP)',
        values: [20, 35, 50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80',
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
        name: 'Total Bonus Magic Damage:',
        raw: '60 / 105 / 150 / 195 / 240 (+ 60% AP)',
        values: [60, 105, 150, 195, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 105 / 150 / 195 / 240',
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
        name: 'Slow:',
        raw: '15 / 20 / 25 / 30 / 35% (+ 5% per 100 AP)',
        values: [15, 20, 25, 30, 35],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35%',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 5% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Empowered abilities that apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> only deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="33;" data-finish="66;" data-bot_values="33;34.94;36.88;38.82;40.76;42.71;44.65;46.59;48.53;50.47;52.41;54.35;56.29;58.24;60.18;62.12;64.06;66" data-top_values="" data-bot_key="%">33% − 66% (based on level)</span> of the <b>bonus</b> damage to non-champions.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: 'Empowered abilities that apply  area damage only deal 33% − 66% (based on level) of the bonus damage to non-champions',
        damagetype: 'None',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'of the bonus damage to non-champions',
        pre: 'Empowered abilities that apply  area damage only deal 33% − 66%',
        post: 'of the bonus damage to non-champions',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Nami_Tidal_Wave.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nami</b> surges a tidal wave in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its trajectory as it travels, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>5</small></span> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-displayformula="\'\'Capped at 2750 range.\'\'" data-bot_values="2;2.2;2.4;2.6;2.8;3;3.2;3.4;3.6;3.8;4" data-top_values="0;275;550;825;1100;1375;1650;1925;2200;2475;2750">2 − 4 (based on distance traveled)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 seconds, and  slowing them for 2 − 4 (based on distance traveled) seconds',
        values: [5, 4],
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '5 seconds, and  slowing them for 2 − 4',
        post: 'seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance traveled',
            pre: 'based on distance traveled',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 60% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
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
        name: 'Slow:',
        raw: '50 / 60 / 70%',
        values: [50, 60, 70],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 60 / 70%',
      },
    ],
  },
];
export const Nami = { I, Q, W, E, R };
