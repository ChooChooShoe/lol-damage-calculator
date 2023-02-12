import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Katarina';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Katarina_Voracity.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within 3 seconds of damaging them reduces the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> of <b>Katarina\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> by 15 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Katarina_Sinister_Steel.png',
    description:
      '<span class="template_sbc"><b>Innate - Sinister Steel:</b></span> Whenever <b>Katarina</b> retrieves a <span style="color: #AF1AAF; white-space:normal">Dagger</span>, she uses it to slash around herself, dealing <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-bot_values="68;72;77;82;89;96;103;112;121;131;142;154;166;180;194;208;224;240" data-top_values="">68 − 240 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="65;1" data-finish="95;16" data-bot_values="65;75;85;95" data-top_values="1;6;11;16" data-bot_key="%">65 / 75 / 85 / 95% (based on level)</span> AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit, as well as reducing <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-ability="Shunpo" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL#Shunpo" title="Shunpo\'s"><img alt="Shunpo\'s" src="/wiki/images/Katarina_Shunpo.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL#Shunpo" title="Katarina/LoL">Shunpo\'s</a></span></span></i> <b>current</b> cooldown by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="78;1" data-finish="96;16" data-bot_values="78;84;90;96" data-top_values="1;6;11;16" data-bot_key="%">78 / 84 / 90 / 96% (based on level)</span> of its <b>total</b> cooldown.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Whenever Katarina retrieves a Dagger, she uses it to slash around herself, dealing 68 − 240 (based on level) (+ 60% bonus AD) (+ 65 / 75 / 85 / 95% (based on level) AP) magic damage to nearby enemies and applying  on-hit effects at 100% effectiveness to enemy  champions hit, as well as reducing  Shunpo's current cooldown by 78 / 84 / 90 / 96% (based on level) of its total cooldown",
        damagetype: 'Magic',
        values: [
          68, 78.12, 88.24, 98.35, 108.47, 118.59, 128.71, 138.82, 148.94,
          159.06, 169.18, 179.29, 189.41, 199.53, 209.65, 219.76, 229.88, 240,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ap',
        unitsText:
          "magic damage to nearby enemies and applying  on-hit effects at 100% effectiveness to enemy  champions hit, as well as reducing  Shunpo's current cooldown by 78 / 84 / 90 / 96%",
        pre: 'Whenever Katarina retrieves a Dagger, she uses it to slash around herself, dealing 68 − 240',
        post: "magic damage to nearby enemies and applying  on-hit effects at 100% effectiveness to enemy  champions hit, as well as reducing  Shunpo's current cooldown by 78 / 84 / 90 / 96%",
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 60% bonus AD',
          },
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 65 / 75 / 85 / 95%',
            post: 'AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span style="color: #AF1AAF; white-space:normal">Daggers</span> grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their radius and will disappear after being on the ground for 4 seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Katarina_Bouncing_Blade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Katarina</b> throws a <span style="color: #AF1AAF; white-space:normal">Dagger</span> at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and can bounce to up to two additional nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 35% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
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
    ],
  },
  {
    description:
      'The <span style="color: #AF1AAF; white-space:normal">Dagger</span> then lands onto the ground after 1 second, <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="slightly random location">about 350 units</span> opposite from where it struck the first target.',
    leveling: [],
  },
  {
    description:
      '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> for the <span style="color: #AF1AAF; white-space:normal">Dagger</span> to bounce to them.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Katarina_Preparation.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Katarina</b> tosses a <span style="color: #AF1AAF; white-space:normal">Dagger</span> into the air above her current location and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays until it lands after 1.<small>25</small> seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for the same duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement speed:',
        raw: '50 / 60 / 70 / 80 / 90%',
        values: [50, 60, 70, 80, 90],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 60 / 70 / 80 / 90%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Katarina_Shunpo.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Katarina</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location around the target unit or <span style="color: #AF1AAF; white-space:normal">Dagger</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the nearest enemy in range and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '20 / 35 / 50 / 65 / 80 (+ 40% AD) (+ 25% AP)',
        values: [20, 35, 50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 40% AD',
          },
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
    ],
  },
  {
    description:
      '<i>Shunpo <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Katarina\'s</b> basic attack timer. Upon blinking, <b>Katarina</b> enters a 0.<small>15</small>-second cast time.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Katarina_Death_Lotus.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Katarina</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2.<small>5</small> seconds, rapidly throwing a dagger every 0.<small>166</small> seconds to up to 3 of the closest nearby enemy champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> herself in the process.<br><br>Each dagger deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color: #00B0F0; white-space:normal">magic damage</span>, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> (without applying <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>) effects, and inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> on the target for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Dagger:',
        raw: '18% (+ 30% per 100% bonus attack speed) bonus AD',
        values: 18,
        valuesIsPercent: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: 'bonus AD',
        pre: '18%',
        post: 'bonus AD',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'per 100',
            pre: '+ 30% per 100% bonus attack speed',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '270% (+ 450.009% per 100% bonus attack speed) bonus AD',
        values: 270,
        valuesIsPercent: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: 'bonus AD',
        pre: '270%',
        post: 'bonus AD',
        children: [
          {
            values: 450.009,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'per 100',
            pre: '+ 450.009% per 100% bonus attack speed',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Dagger:',
        raw: '25 / 37.5 / 50 (+ 19% AP)',
        values: [25, 37.5, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 37.5 / 50',
        children: [
          {
            values: 19,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 19% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Magic Damage:',
        raw: '375 / 562.5 / 750 (+ 285% AP)',
        values: [375, 562.5, 750],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '375 / 562.5 / 750',
        children: [
          {
            values: 285,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 285% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'On-Attack/On-Hit Effectiveness:',
        raw: '30 / 35 / 40%',
        values: [30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40%',
      },
    ],
  },
  {
    description:
      '<i>An enemy champion within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 500 units is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability.</i>',
    leveling: [],
  },
];
export const Katarina = { I, Q, W, E, R };
