import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Ryze';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Ryze_Arcane_Mastery.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Ryze</b> increases his <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> mana</span></span> by <span style="color: #7A6DFF; white-space:normal">(6% per 100 AP)</span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Ryze_Overload_5.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Ryze\'s</b> other <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> casts reset <i>Overload\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and charge a <img alt="Overload 3.png" src="/wiki/images/Ryze_Overload_3.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Rune</i> <a href="/wiki/Stack" title="Stack">stack</a> for 4 seconds, refreshing on subsequent casts and stacking up to 2 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Ryze_Overload.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ryze</b> unleashes a runic blast in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and consumes all <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Overload 5" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Overload_5" title="Rune"><img alt="Rune" src="/wiki/images/Ryze_Overload_5.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Overload_5" title="Ryze/LoL">Rune</a></span></span></i> stacks.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 90 / 110 / 130 / 150 (+ 55% AP) (+ 2% bonus mana)',
        values: [70, 90, 110, 130, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 90 / 110 / 130 / 150',
        children: [
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 55% AP',
          },
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mana',
            unitsText: 'bonus mana',
            pre: '+ 2% bonus mana',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Ryze_Overload_4.png',
    description:
      'If <b>Ryze</b> consumed 2 stacks, he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '28 / 32 / 36 / 40 / 44%',
        values: [28, 32, 36, 40, 44],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '28 / 32 / 36 / 40 / 44%',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Spell Flux" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Spell_Flux" title="Flux"><img alt="Flux" src="/wiki/images/Ryze_Spell_Flux.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Spell_Flux" title="Ryze/LoL">Flux</a></span></span> Bonus:</b></span> <i>Overload</i> deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Realm Warp.png|20px|border]] Realm Warp\'s Rank" data-start="10;0" data-finish="100;3" data-bot_values="10;40;70;100" data-top_values="0;1;2;3" data-bot_key="%">10 / 40 / 70 / 100% (based on <a href="https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Ryze_Realm_Warp.png/revision/latest?cb=20160628224335" class="image"><img alt="Realm Warp.png" src="/wiki/images/Ryze_Realm_Warp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Realm Warp\'s</i> Rank)</span> <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased damage</span> and spreads to surrounding <i>Fluxed</i> enemies.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Overload deals 10 / 40 / 70 / 100% (based on  Realm Warp's Rank)  increased damage and spreads to surrounding Fluxed enemies",
        damagetype: 'None',
        values: [1, 40, 70, 100],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'increased damage and spreads to surrounding Fluxed enemies',
        pre: 'Overload deals 10 / 40 / 70 / 100%',
        post: 'increased damage and spreads to surrounding Fluxed enemies',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on  Realm Warp's Rank",
            pre: "based on  Realm Warp's Rank",
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Ryze_Rune_Prison.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ryze</b> seizes the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 35% for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 70% AP) (+ 4% bonus mana)',
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
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mana',
            unitsText: 'bonus mana',
            pre: '+ 4% bonus mana',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Spell Flux" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Spell_Flux" title="Flux"><img alt="Flux" src="/wiki/images/Ryze_Spell_Flux.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Spell_Flux" title="Ryze/LoL">Flux</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> instead of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Ryze_Spell_Flux.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ryze</b> projects an orb upon the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.\n<br><br>The target and surrounding enemies are also marked with <i>Flux</i> for 3 seconds. <b>Ryze\'s</b> basic abilities against <i>Flux</i> targets consume the mark to become empowered with an additional effect.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 45% AP) (+ 2% bonus mana)',
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
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mana',
            unitsText: 'bonus mana',
            pre: '+ 2% bonus mana',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Spell Flux" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Spell_Flux" title="Flux"><img alt="Flux" src="/wiki/images/Ryze_Spell_Flux.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Spell_Flux" title="Ryze/LoL">Flux</a></span></span> Bonus:</b></span> <i>Spell Flux</i> spreads farther.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Overload" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Overload" title="Overload\'s"><img alt="Overload\'s" src="/wiki/images/Ryze_Overload.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Overload" title="Ryze/LoL">Overload\'s</a></span></span></i> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Spell Flux" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Spell_Flux" title="Flux"><img alt="Flux" src="/wiki/images/Ryze_Spell_Flux.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Spell_Flux" title="Ryze/LoL">Flux</a></span></span></i> empowered damage is increased.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Overload Damage:',
        raw: '40 / 70 / 100%',
        values: [40, 70, 100],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 70 / 100%',
      },
    ],
  },
  {
    img: '/wiki/images/Ryze_Realm_Warp.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ryze</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 2 seconds to open a portal beneath him, marking the target location as its destination and gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. <b>Ryze</b> is able to act while channeling, but the portal will cancel if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
    leveling: [],
  },
  {
    description:
      'Upon completion, <b>Ryze</b> and allied units within will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to the location and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarmed</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Approximated">0.<small>75</small></span> seconds.',
    leveling: [],
  },
  {
    description:
      '<i>Realm Warp will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Ryze = { I, Q, W, E, R };
