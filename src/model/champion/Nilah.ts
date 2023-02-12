import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Nilah';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Nilah</b> <a href="/wiki/Kill" title="Kill">kills</a> a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span>, she and the nearest allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> gain an additional <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #883FD1; white-space:normal">50% of the experience</span></span> they would have lost from sharing.',
    leveling: [],
  },
  {
    img: '/wiki/images/Nilah_Joy_Unending.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever a nearby allied champion uses an <a href="/wiki/Champion_ability" title="Champion ability">ability</a> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> either <b>Nilah</b> or themselves, both they and <b>Nilah</b> receive a <b>bonus</b> amount equal to 7.<small>5</small>% of the healing or 15% of the shielding after a 0.<small>5</small>-second delay. <b>Bonus</b> shielding lasts as long as the shield that triggered the effect, up to a maximum duration of 4 seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Nilah</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="0.33% per 1% critical strike chance, capped at 100% critical strike chance" data-bot_values="0;3.3;6.6;9.9;13.2;16.5;19.8;23.1;26.4;29.7;33" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 33% (based on critical strike chance)</span></span> <span style="color:yellow; white-space:normal">armor penetration</span>. Her <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i>Formless Blade</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> her for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="0.2% per 1% critical strike chance, capped at 100% critical strike chance" data-bot_values="0;2;4;6;8;10;12;14;16;18;20" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 20% (based on critical strike chance)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, converting each heal instance beyond <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that last 6 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Nilah_Formless_Blade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nilah</b> cracks her whip-blade in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="1.2% per 1% critical strike chance, capped at 100% critical strike chance" data-bot_values="0;12;24;36;48;60;72;84;96;108;120" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 120% (based on critical strike chance)</span>. <i>Formless Blade</i> can hit <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '5 / 10 / 15 / 20 / 25 (+ 90 / 97.5 / 105 / 112.5 / 120% AD)',
        values: [5, 10, 15, 20, 25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 10 / 15 / 20 / 25',
        children: [
          {
            values: [90, 97.5, 105, 112.5, 120],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 90 / 97.5 / 105 / 112.5 / 120% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '11 / 22 / 33 / 44 / 55 (+ 198 / 214.5 / 231 / 247.5 / 264% AD)',
        values: [11, 22, 33, 44, 55],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '11 / 22 / 33 / 44 / 55',
        children: [
          {
            values: [198, 214.5, 231, 247.5, 264],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 198 / 214.5 / 231 / 247.5 / 264% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Formless Blade</i> is cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-ability="Slipstream" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL#Slipstream" title="Slipstream"><img alt="Slipstream" src="/wiki/images/Nilah_Slipstream.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL#Slipstream" title="Nilah/LoL">Slipstream</a></span></span></i>, <b>Nilah</b> leaves behind a wave that is sent towards her location at the end of the dash, dealing the same damage to enemies hit.',
    leveling: [],
  },
  {
    description:
      'If <i>Formless Blade</i> hits an enemy, <b>Nilah</b> empowers herself for 4 seconds: gaining <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125 <b>bonus</b> attack range</span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="level" data-start="10;" data-finish="60;" data-bot_values="10;12.94;15.88;18.82;21.76;24.71;27.65;30.59;33.53;36.47;39.41;42.35;45.29;48.24;51.18;54.12;57.06;60" data-top_values="" data-bot_key="%">10% − 60% (based on level)</span> <b>bonus</b> attack speed</span></span>, and causing her basic attacks to strike in a cone that deals <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Against secondary non-champion targets, this is reduced to <span style="color:orange; white-space:normal">33% AD</span> for <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span style="color:orange; white-space:normal">10% AD</span> for <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and additionally executes minions left below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">20 health</span></span>. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">On-hit</a></span> effects are applied only to the primary target.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' gaining  125 bonus attack range and  10% − 60% (based on level) bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit',
        increasedStat: 'bonus_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText:
          'bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit',
        pre: 'gaining  125 bonus attack range and  10% − 60%',
        post: 'bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Nilah_Jubilant_Veil.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nilah</b> envelops herself in mist for 2.<small>25</small> seconds, during which she becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span>, gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, reduces all incoming <span style="color: #00B0F0; white-space:normal">magic damage</span> taken by 25%, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodges</a></span> all non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> basic attacks.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '15 / 17.5 / 20 / 22.5 / 25%',
        values: [15, 17.5, 20, 22.5, 25],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 17.5 / 20 / 22.5 / 25%',
      },
    ],
  },
  {
    description:
      'Allied champions she touches will also be enveloped for 1.<small>5</small> seconds, gaining the same effects.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Nilah_Slipstream.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nilah</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target unit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies she passes through.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '65 / 90 / 115 / 140 / 165 (+ 20% AD)',
        values: [65, 90, 115, 140, 165],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 90 / 115 / 140 / 165',
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
  {
    description:
      '<b>Nilah</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Slipstream</i> charge, up to a maximum of 2.',
    leveling: [],
  },
  {
    description:
      '<i>Slipstream <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Nilah\'s</b> basic attack timer. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-ability="Formless Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL#Formless_Blade" title="Formless Blade"><img alt="Formless Blade" src="/wiki/images/Nilah_Formless_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL#Formless_Blade" title="Nilah/LoL">Formless Blade</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-ability="Apotheosis" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL#Apotheosis" title="Apotheosis"><img alt="Apotheosis" src="/wiki/images/Nilah_Apotheosis.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL#Apotheosis" title="Nilah/LoL">Apotheosis</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Nilah_Apotheosis.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nilah</b> whirls her whip-blade over 1 second, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies every 0.<small>25</small> seconds. She then unleashes a burst that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> them 250 units towards her. Each hit also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> targets by 10% for 3 seconds, refreshing on subsequent hits.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage per Tick:',
        raw: '15 / 30 / 45 (+ 28% bonus AD)',
        values: [15, 30, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 30 / 45',
        children: [
          {
            values: 28,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 28% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '60 / 120 / 180 (+ 112% bonus AD)',
        values: [60, 120, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 120 / 180',
        children: [
          {
            values: 112,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 112% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '125 / 225 / 325 (+ 120% bonus AD)',
        values: [125, 225, 325],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 225 / 325',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 120% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Total Physical Damage:',
        raw: '185 / 345 / 505 (+ 232% bonus AD)',
        values: [185, 345, 505],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '185 / 345 / 505',
        children: [
          {
            values: 232,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 232% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Nilah</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and nearby allied champions for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="20% + 0.3% per 1% critical strike chance, capped at 100% critical strike chance" data-bot_values="20;23;26;29;32;35;38;41;44;47;50" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">20% − 50% (based on critical strike chance)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, reduced to 10% against non-champions, converting each heal instance beyond <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that last 6 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: 'Nilah  heals herself and nearby allied champions for 20% − 50% (based on critical strike chance) of the post-mitigation damage dealt to  champions, reduced to 10% against non-champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds',
        healType: 'BonusHealth',
        values: 2,
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText:
          'of the post-mitigation damage dealt to  champions, reduced to 10% against non-champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds',
        pre: 'Nilah  heals herself and nearby allied champions for 20% − 50%',
        post: 'of the post-mitigation damage dealt to  champions, reduced to 10% against non-champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds',
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
      '<i><b>Nilah</b> is unable to basic attack and cast her other <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during Apotheosis, but she is able to move.</i>',
    leveling: [],
  },
];
export const Nilah = { I, Q, W, E, R };
