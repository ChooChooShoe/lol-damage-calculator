import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Lux';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Lux_Illumination.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Lux\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a mark to enemies hit for 6 seconds, refeshing on subsequent hits. <br><br><b>Lux\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Final Spark" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Final_Spark" title="Final Spark"><img alt="Final Spark" src="/wiki/images/Lux_Final_Spark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Final_Spark" title="Lux/LoL">Final Spark</a></span></span></i> consume the mark to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="190;" data-bot_values="20;30;40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190" data-top_values="">20 − 190 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: " Lux's basic attacks and  Final Spark consume the mark to deal 20 − 190 (based on level) (+ 20% AP) bonus magic damage",
        damagetype: 'Magic',
        values: [
          20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
          170, 180, 190,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage',
        pre: "Lux's basic attacks and  Final Spark consume the mark to deal 20 − 190",
        post: 'bonus magic damage',
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
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Lux_Light_Binding.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lux</b> shoots a sphere of light in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first two enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 60% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Lux_Prismatic_Barrier.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lux</b> throws her wand in the target direction that homes back to her after reaching maximum range. Allied champions hit by the wand gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds, which can stack up to 2 times, stacking with the previous shield and refreshing its duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '40 / 55 / 70 / 85 / 100 (+ 35% AP)',
        values: [40, 55, 70, 85, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70 / 85 / 100',
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
        name: 'Maximum Shield:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 70% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Lux</b> receives the shield upon throwing the wand and upon its return.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Lux_Lucent_Singularity.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lux</b> sends a lucent singularity to the target location, remaining there for 5 seconds to grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '25 / 30 / 35 / 40 / 45%',
        values: [25, 30, 35, 40, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45%',
      },
    ],
  },
  {
    description:
      '<i>Lucent Singularity</i> can be recast at any time while it is in flight or within the duration, and does so automatically after the duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Lux</b> detonates the singularity, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within. If <i>Lucent Singularity</i> was recast while in flight, it will detonate upon arrival.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+ 80% AP)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
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
  {
    description:
      "The slow lingers for 1 second after leaving the area. Enemies hit by <i>Lucent Singularity's</i> detonation are also slowed by the same amount for 1 second.",
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Lux_Final_Spark.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lux</b> fires a massive laser in a line in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for 1.<small>5</small> seconds, as well as granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the surrounding area.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '300 / 400 / 500 (+ 120% AP)',
        values: [300, 400, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 400 / 500',
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
];
export const Lux = { I, Q, W, E, R };
