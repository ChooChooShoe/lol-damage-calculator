import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Senna';
const A: SubSkill[] = [
  {
    img: '/wiki/images/Basic_Attack.png',
    description:
      '<a href="/wiki/Basic_Attack" class="mw-redirect" title="Basic Attack"><span class="template_sbc"><b>Basic Attack:</b></span></a> <b>Senna</b> blasts the target with her relic cannon that uses a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span> beam, dealing <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.',
    leveling: [],
  },
  {
    description:
      '<b>Senna\'s</b> basic attacks can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, but they deal only <span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(160.<small>125</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="32.025%"><img alt="32.025%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">32.<small>025</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;91.<small>5</small>% of the <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span> champions usually have.&nbsp;」</span></span>',
    leveling: [],
  },
  {
    description:
      '<b>Senna</b> has an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack ratio"><a href="/wiki/Attack_speed" title="Attack speed">attack ratio</a></span> of 0.<small>3</small>, meaning she only gains<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;+ 0.<small>3</small> <span style="color:orangered; white-space:normal">attack speed</span> per <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">100% <b>bonus</b> attack speed</span></span>.&nbsp;」</span><span class="flipText2">「&nbsp;48% of the <span style="color:orangered; white-space:normal">attack speed</span> she would gain if her attack speed ratio was the same as her base attack speed.&nbsp;」</span></span>',
    leveling: [],
  },
  {
    description:
      'Additionally, <b>Senna\'s</b> base <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack windup</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="((0.5)+((0.35)-(0.5))/(times-1)*(x-1))/(1/0.625)*100" data-bot_values="31.25;30.699;30.147;29.596;29.044;28.493;27.941;27.39;26.838;26.287;25.735;25.184;24.632;24.081;23.529;22.978;22.426;21.875" data-top_values="" data-bot_key="%">31.<small>25</small>% − 21.<small>875</small>% (based on level)</span>,&nbsp;」</span><span class="flipText2">「&nbsp;by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100-((0.5)+((0.35)-(0.5))/(times-1)*(x-1))/0.5*100" data-bot_values="0;1.76;3.53;5.29;7.06;8.82;10.59;12.35;14.12;15.88;17.65;19.41;21.18;22.94;24.71;26.47;28.24;30" data-top_values="" data-bot_key="%">0% − 30% (based on level)</span>,&nbsp;」</span></span>but is only reduced by 60% of the expected value given attack speed bonuses.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '875% (based on level), 」「 by 0% − 30% (based on level), 」but is only reduced by 60% of the expected value given attack speed bonuses',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: ', 」「 by 0% − 30%',
        pre: '875%',
        post: ', 」「 by 0% − 30%',
      },
    ],
  },
];
const I: SubSkill[] = [
  {
    img: '/wiki/images/Senna_Absolution.png',
    description:
      '<span class="template_sbc"><b>Innate - Weakened Soul</b></span>: <b>Senna\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> on enemy champions apply a <a href="/wiki/Stack" title="Stack">stack</a> of <span style="color: #26DFB0; white-space:normal">Mist</span> for 4 seconds, modified to 0.<small>75</small> seconds if <b>Senna</b> starts winding up a basic attack on them. Subsequent hits will collect <span style="color: #26DFB0; white-space:normal">Mist</span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;" data-finish="10;" data-bot_values="1;2;3;4;5;6;7;8;9;10" data-top_values="" data-bot_key="%">1% − 10% (based on level)</span> of target\'s <b>current</b> health</span>, rendering the target immune to further <span style="color: #26DFB0; white-space:normal">Mist</span> applications for a few seconds. This damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: " Subsequent hits will collect Mist and deal bonus physical damage equal to 1% − 10% (based on level) of target's current health, rendering the target immune to further Mist applications for a few seconds",
        healType: 'PhysicalVamp',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ap',
        unitsText:
          "of target's current health, rendering the target immune to further Mist applications for a few seconds",
        pre: 'Subsequent hits will collect Mist and deal bonus physical damage equal to 1% − 10%',
        post: "of target's current health, rendering the target immune to further Mist applications for a few seconds",
      },
    ],
  },
  {
    img: '/wiki/images/MistWraithSquare.png',
    description:
      'Enemies that die near <b>Senna</b> may spawn a <i>Mist Wraith</i> from their corpse. A <i>Mist Wraith</i> lasts 8 seconds and <b>Senna</b> can basic attack or hit it with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Piercing Darkness" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Piercing_Darkness" title="Piercing Darkness"><img alt="Piercing Darkness" src="/wiki/images/Senna_Piercing_Darkness.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Piercing_Darkness" title="Senna/LoL">Piercing Darkness</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Dawning Shadow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Dawning_Shadow" title="Dawning Shadow"><img alt="Dawning Shadow" src="/wiki/images/Senna_Dawning_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Dawning_Shadow" title="Senna/LoL">Dawning Shadow</a></span></span></i> to kill them instantly, granting her <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="8 Gold"><img alt="8 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">8</span></span> and collecting their <span style="color: #26DFB0; white-space:normal">Mist</span>.\n',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Mist</b></span>: For each stack of <span style="color: #26DFB0; white-space:normal">Mist</span>, <b>Senna</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">0.<small>75</small> <b>bonus</b> attack damage</span></span>. For every 20 stacks, she also gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;20 <b>bonus</b> attack range</span> and <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #E56013; white-space:normal">10% critical strike chance</span></span>, capped at <span style="color: #E56013; white-space:normal">100% critical strike chance</span>. Additionally, 35% of the generated excess <span style="color: #E56013; white-space:normal">critical strike chance</span> is converted into <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Senna_Absolution_2.png',
    description:
      '<span class="template_sbc"><b>Innate - Relic Cannon</b></span>: <b>Senna\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> deal <span style="color:orange; white-space:normal">20% AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and grant her <span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="10;15;20" data-top_values="1;6;9" data-bot_key="%">10 / 15 / 20% (based on level)</span> of the target\'s movement speed</span> as <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 0.<small>5</small> seconds. This damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: " Senna's basic attacks  on-hit deal 20% AD bonus physical damage and grant her 10 / 15 / 20% (based on level) of the target's movement speed as  bonus movement speed for 0",
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          "of the target's movement speed as  bonus movement speed for 0",
        pre: "Senna's basic attacks  on-hit deal 20% AD bonus physical damage and grant her 10 / 15 / 20%",
        post: "of the target's movement speed as  bonus movement speed for 0",
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Senna_Piercing_Darkness.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Senna</b> fires a spectral laser in the direction of the target unit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself and allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit, and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit in a thinner line. Enemies hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 15% <span style="color:orange; white-space:normal">(+&nbsp;10% per 100 <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% per 100 AP)</span> for a duration. The damage against champions <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' Enemies hit are  slowed by 15% (+ 10% per 100 bonus AD) (+ 6% per 100 AP) for a duration',
        values: 1,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'for a duration',
        pre: 'Enemies hit are  slowed by 15%',
        post: 'for a duration',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 10% per 100 bonus AD',
          },
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 6% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Healing:',
        raw: '40 / 55 / 70 / 85 / 100 (+ 30% bonus AD) (+ 40% AP) (+ 1.6 per 1 Lethality)',
        values: [40, 55, 70, 85, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70 / 85 / 100',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 30% bonus AD',
          },
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
          {
            values: 1.6,
            user: 'none',
            units: '',
            unitsText: 'per 1 Lethality',
            pre: '+ 1.6 per 1 Lethality',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '30 / 65 / 100 / 135 / 170 (+ 50% bonus AD)',
        values: [30, 65, 100, 135, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 65 / 100 / 135 / 170',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 50% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow Duration:',
        raw: '1 / 1.25 / 1.5 / 1.75 / 2',
        values: [1, 1.25, 1.5, 1.75, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.25 / 1.5 / 1.75 / 2',
      },
    ],
  },
  {
    description:
      'Upon being hit, enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a>, <a href="/wiki/Senna#Absolution" title="Senna#Absolution"><img alt="MistWraithSquare.png" src="/wiki/images/MistWraithSquare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Senna#Absolution" title="Senna">Mist Wraiths</a> and <a href="/wiki/Champion_summoned_units#Targetable" title="Champion summoned units">any other attack-interactive units</a> are <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Piercing Darkness doesn\'t actually apply basic damage"><i>considered</i> basic attacked once</span>, while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Considers all turret-specific rules">*</span> are applied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
    leveling: [],
  },
  {
    description:
      '<i>Piercing Darkness\' </i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 1 second <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Senna_Last_Embrace.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Senna</b> throws a globule of Black Mist in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and attaches to them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '70 / 115 / 160 / 205 / 250 (+ 70% bonus AD)',
        values: [70, 115, 160, 205, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 115 / 160 / 205 / 250',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 70% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'After the duration or when the target dies, the Black Mist spreads out of the target, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them and surrounding enemies for a few seconds.',
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
const E: SubSkill[] = [
  {
    img: '/wiki/images/Senna_Curse_of_the_Black_Mist.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Senna</b> surrounds herself with an <a href="/wiki/Aura" title="Aura">aura</a> of mist and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span> for a duration. If <b>Senna</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Attacking, casting abilities, etc">breaks the camouflage</span>, she regains it after 1.<small>75</small> seconds without performing actions that <a href="/wiki/Stealth#Breaking_stealth" title="Stealth">break stealth</a>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Effect Duration:',
        raw: '6 / 6.5 / 7 / 7.5 / 8',
        values: [6, 6.5, 7, 7.5, 8],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 6.5 / 7 / 7.5 / 8',
      },
    ],
  },
  {
    description:
      'Allied champions who enter the mist gain <i>Wraith Form</i> for a duration equal to the remaining duration.',
    leveling: [],
  },
  {
    img: '/wiki/images/Senna_Curse_of_the_Black_Mist_2.png',
    description:
      '<span class="template_sbc"><b>Wraith Form:</b></span> Gain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>. Enemies will have <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured vision"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">obscured vision</a></span> of camouflaged <i>Wraiths</i> moving outside of the mist. <i>Wraith Form</i> can be regained if lost by breaking the camouflage after 1.<small>75</small> seconds without performing actions that break stealth. <i>Wraith Form</i> ends immediately upon <b>Senna\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">death</a></span>.',
    leveling: [],
  },
  {
    description:
      '<b>Senna</b> and allies camouflaged by <i>Curse of the Black Mist</i> also gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20%</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: 'Senna and allies camouflaged by Curse of the Black Mist also gain  20% (+ 5% per 100 AP) bonus movement speed',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed',
        pre: 'Senna and allies camouflaged by Curse of the Black Mist also gain  20%',
        post: 'bonus movement speed',
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
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Senna_Dawning_Shadow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Senna</b> fires two waves of spectral light in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area briefly along the path. The center wave deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for 3 seconds. It also collects <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Absolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Absolution" title="Mist Wraiths"><img alt="Mist Wraiths" src="/wiki/images/Senna_Absolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Absolution" title="Senna/LoL">Mist Wraiths</a></span></span></i> it hits.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '250 / 375 / 500 (+ 100% bonus AD) (+ 70% AP)',
        values: [250, 375, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '250 / 375 / 500',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
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
    img: '/wiki/images/Senna_Dawning_Shadow_2.png',
    description:
      'The broad wave grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to <b>Senna</b> and allied champions hit for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '100 / 150 / 200 (+ 40% AP)(+ 1.5 per  Mist collected)',
        values: [100, 150, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200',
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
            values: 1.5,
            user: 'none',
            units: '',
            unitsText: 'per  Mist collected',
            pre: '+ 1.5 per  Mist collected',
          },
        ],
      },
    ],
  },
];
export const Senna = { A, I, Q, W, E, R };
