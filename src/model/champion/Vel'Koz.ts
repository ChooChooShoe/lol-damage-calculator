import type { SubSkill} from '@/api/DataTypes';
      import type { ChampionName } from '../ChampionListData';
      import ChampionListData from '../ChampionListData';
      export const name: ChampionName = 'Vel'Koz';
      const I: SubSkill[] = [
  {
    img: '/wiki/images/Vel%27Koz_Organic_Deconstruction.png',
    description: '<span class="template_sbc"><b>Innate:</b></span> <b>Vel\'Koz\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Deconstruction</i> to enemies hit for 7 seconds, refreshing on <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and subsequent applications and stacking up to 3 times.',
    leveling: [],
  },
  {
    description: 'The third stack consumes them all to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="33;" data-finish="169;" data-bot_values="33;41;49;57;65;73;81;89;97;105;113;121;129;137;145;153;161;169" data-top_values="">33 − 169 (based on level)</span></span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span>.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 1:',
        raw: 'The third stack consumes them all to deal  33 − 169 (based on level) (+ 50% AP) bonus true damage',
        min: 0,
        max: 10,
        description: 'The third stack consumes them all to deal  33 − 169 (based on level) (+ 50% AP) bonus true damage',
        values: [
          33,
          41,
          49,
          57,
          65,
          73,
          81,
          89,
          97,
          105,
          113,
          121,
          129,
          137,
          145,
          153,
          161,
          169,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus true damage',
        pre: 'The third stack consumes them all to deal  33 − 169',
        post: 'bonus true damage',
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
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Vel%27Koz_Plasma_Fission.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Vel\'Koz</b> fires a plasma bolt in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 70% decaying over a duration.<br><br>\n<i>Plasma Fission</i> can be recast after 0.<small>25</small> seconds while the bolt is in flight, and does so automatically upon hitting an enemy or maximum range.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 90% AP)',
        values: [
          80,
          120,
          160,
          200,
          240,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
        name: 'Slow Duration:',
        raw: '1 / 1.4 / 1.8 / 2.2 / 2.6',
        values: [
          1,
          1.4,
          1.8,
          2.2,
          2.6,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.4 / 1.8 / 2.2 / 2.6',
      },
    ],
  },
  {
    img: '/wiki/images/Vel%27Koz_Plasma_Fission_2.png',
    description: '<span class="template_sbc"><b>Recast:</b></span> <b>Vel\'Koz</b> splits the bolt in two <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">over 0.<small>25</small> seconds</span>, each part firing perpendicularly in opposite directions and applying the same effects to enemies hit.',
    leveling: [],
  },
  {
    description: 'Whenever <i>Plasma Fission</i> kills an enemy, <b>Vel\'Koz</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Mana Restored per Kill:',
        raw: '20 / 22.5 / 25 / 27.5 / 30',
        values: [
          20,
          22.5,
          25,
          27.5,
          30,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 22.5 / 25 / 27.5 / 30',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Mana Restored:',
        raw: '60 / 67.5 / 75 / 82.5 / 90',
        values: [
          60,
          67.5,
          75,
          82.5,
          90,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 67.5 / 75 / 82.5 / 90',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Vel%27Koz_Void_Rift.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Vel\'Koz</b> cracks a rift in the target direction that opens after a 0.<small>25</small>-second delay, cascading through the area over 0.<small>65</small> seconds to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '30 / 50 / 70 / 90 / 110 (+ 20% AP)',
        values: [
          30,
          50,
          70,
          90,
          110,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 50 / 70 / 90 / 110',
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
    ],
  },
  {
    description: 'After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>75</small> seconds</span>, the rift violently collapses, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the surrounding area for 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '45 / 75 / 105 / 135 / 165 (+ 25% AP)',
        values: [
          45,
          75,
          105,
          135,
          165,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 75 / 105 / 135 / 165',
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
        name: 'Total Magic Damage:',
        raw: '75 / 125 / 175 / 225 / 275 (+ 45% AP)',
        values: [
          75,
          125,
          175,
          225,
          275,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 125 / 175 / 225 / 275',
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
    description: '<b>Vel\'Koz</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Void Rift</i> charge, up to a maximum of 2.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Vel%27Koz_Tectonic_Disruption.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Vel\'Koz</b> hurls a disruptive anomaly that lands to the target location <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="After cast start, estimated">after 0.<small>75</small> seconds</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds, as well as granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area briefly.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 100 / 130 / 160 / 190 (+ 30% AP)',
        values: [
          70,
          100,
          130,
          160,
          190,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 100 / 130 / 160 / 190',
        children: [
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
    description: 'If <i>Tectonic Disruption</i> is cast in close proximity of <b>Vel\'Koz</b>, the anomaly will also slightly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> enemies hit in the direction of the cast.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Vel%27Koz_Researched.png',
    description: '<span class="template_sbc"><b>Passive - Researched:</b></span> Applying 3 <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Organic Deconstruction" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Deconstruction"><img alt="Deconstruction" src="/wiki/images/Vel%27Koz_Organic_Deconstruction.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Vel\'Koz/LoL"><i>Deconstruction</i></a></span></span> stacks to an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> marks them as <i>Researched</i> for 7 seconds, refreshing on basic attacks and ability hits against them.',
    leveling: [],
  },
  {
    img: '/wiki/images/Vel%27Koz_Life_Form_Disintegration_Ray.png',
    description: '<span class="template_sbc"><b>Active:</b></span> After a 0.<small>2</small>-second delay, <b>Vel\'Koz</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2.<small>6</small> seconds to project an energy beam, during which he can steer the beam in the target direction. <i>Life Form Disintegration Ray</i> can be recast after 1 second during the channel, and does so automatically after the duration.',
    leveling: [],
  },
  {
    description: 'The beam deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit every 0.<small>2</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 20%, lingering for 1 second. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Organic Deconstruction" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Deconstruction"><img alt="Deconstruction" src="/wiki/images/Vel%27Koz_Organic_Deconstruction.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Organic_Deconstruction" title="Vel\'Koz/LoL">Deconstruction</a></span></span></i> is applied every 0.<small>7</small> seconds to enemies hit. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Researched" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Researched" title="Researched"><img alt="Researched" src="/wiki/images/Vel%27Koz_Researched.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Researched" title="Vel\'Koz/LoL"><i>Researched</i></a></span></span> enemies take <span style="color: #F9966B; white-space:normal">true damage</span> instead.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Per Tick:',
        raw: '34.62 / 48.08 / 61.54 (+ 9.62% AP)',
        values: [
          34.62,
          48.08,
          61.54,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '34.62 / 48.08 / 61.54',
        children: [
          {
            values: 9.62,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 9.62% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Damage:',
        raw: '450 / 625 / 800 (+ 125% AP)',
        values: [
          450,
          625,
          800,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '450 / 625 / 800',
        children: [
          {
            values: 125,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 125% AP',
          },
        ],
      },
    ],
  },
  {
    description: '<span class="template_sbc"><b>Recast:</b></span> <b>Vel\'Koz</b> ends <i>Life Form Disintegration Ray</i>.',
    leveling: [],
  },
]
    export const VelKoz = {I,Q,W,E,R}