import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Singed';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Singed</b> moves near a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Noxious Slipstream</i> for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Singed_Noxious_Slipstream.png',
    description:
      '<span class="template_sbc"><b>Noxious Slipstream:</b></span> For each stack, <b>Singed</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25% <b>bonus</b> movement speed</span></span>, up to a maximum of <span style="color: #F5EE99; white-space:normal">625%</span>.',
    leveling: [],
  },
  {
    description:
      'This effect cannot occur on the same target more than once every few seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Singed_Poison_Trail.png',
    description:
      '<span class="template_sbc"><b>Toggle:</b></span> <b>Singed</b> continually creates a toxic cloud in his wake that lingers for 3.<small>25</small> seconds. The cloud inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> to enemies within, and resets the duration every 0.<small>5</small> seconds while they remain.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> poison</span>:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds over 2 seconds. Subsequent inflictions refresh the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '5 / 7.5 / 10 / 12.5 / 15 (+ 11.25% AP)',
        values: [5, 7.5, 10, 12.5, 15],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 7.5 / 10 / 12.5 / 15',
        children: [
          {
            values: 11.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 11.25% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '40 / 60 / 80 / 100 / 120 (+ 90% AP)',
        values: [40, 60, 80, 100, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 60 / 80 / 100 / 120',
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
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Singed_Mega_Adhesive.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Singed</b> spills a potent adhesive that lands at the target location over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span></span>, creating a field for 3 seconds that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounds</a></span> enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '50 / 55 / 60 / 65 / 70%',
        values: [50, 55, 60, 65, 70],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 55 / 60 / 65 / 70%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Singed_Fling.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Singed</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flings</a></span> the target enemy 550 units over himself, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "50 / 60 / 70 / 80 / 90 (+ 6 / 6.5 / 7 / 7.5 / 8% of target's maximum health) (+ 60% AP)",
        healType: 'OutgoingHeals',
        values: [50, 60, 70, 80, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 60 / 70 / 80 / 90',
        children: [
          {
            values: [6, 6.5, 7, 7.5, 8],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 6 / 6.5 / 7 / 7.5 / 8% of target's maximum health",
          },
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
        name: 'Maximum Non-Champion Damage:',
        raw: '350 / 360 / 370 / 380 / 390 (+ 60% AP)',
        values: [350, 360, 370, 380, 390],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '350 / 360 / 370 / 380 / 390',
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
  {
    description:
      'If the target lands on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-ability="Mega Adhesive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL#Mega_Adhesive" title="Mega Adhesive"><img alt="Mega Adhesive" src="/wiki/images/Singed_Mega_Adhesive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL#Mega_Adhesive" title="Singed/LoL">Mega Adhesive</a></span></span></i>, they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Root Duration:',
        raw: '1 / 1.25 / 1.5 / 1.75 / 2',
        values: [1, 1.25, 1.5, 1.75, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.25 / 1.5 / 1.75 / 2',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Singed_Insanity_Potion.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Singed</b> empowers himself for 25 seconds with <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health regeneration</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Mana_regeneration" title="Mana regeneration"><img alt="Mana regeneration icon.png" src="/wiki/images/Mana_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><b>bonus</b> mana regeneration</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Stats:',
        raw: '30 / 65 / 100',
        values: [30, 65, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 65 / 100',
      },
      {
        effectType: 'Unique',
        name: 'Regeneration per Second:',
        raw: '6 / 13 / 20',
        values: [6, 13, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 13 / 20',
      },
      {
        effectType: 'Unique',
        name: 'Total Regeneration:',
        raw: '150 / 325 / 500',
        values: [150, 325, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 325 / 500',
      },
    ],
  },
  {
    description:
      'During this time, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-ability="Poison Trail" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL#Poison_Trail" title="Poison Trail"><img alt="Poison Trail" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL#Poison_Trail" title="Singed/LoL">Poison Trail</a></span></span></i> additionally applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> for 1 second, which refreshes every 0.<small>25</small> seconds while the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> persists.',
    leveling: [],
  },
];
export const Singed = { I, Q, W, E, R };
