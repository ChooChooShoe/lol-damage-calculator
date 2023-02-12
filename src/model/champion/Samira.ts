import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Samira';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Samira\'s</b> damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> different from the previous damaging hit made against champions generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Style</i> for 6 seconds, refreshing on <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Does not have to be unique">subsequent</span> hits and stacking up to 6 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Samira_Style.gif',
    description:
      '<span class="template_sbc"><b>Style:</b></span> For each stack, <b>Samira</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">3.<small>5</small>% <b>bonus</b> movement speed</span></span>, up to a maximum of <span style="color: #F5EE99; white-space:normal">21%</span>. At maximum stacks, <b>Samira</b> can cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Inferno Trigger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Inferno Trigger"><img alt="Inferno Trigger" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Samira/LoL">Inferno Trigger</a></span></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Samira_Daredevil_Impulse.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Samira\'s</b> basic attacks against targets in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200 range use her blade, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>. Blade attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span></i>, and the slash and explosives of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span></i> deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2;" data-finish="19;" data-bot_values="2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19" data-top_values="">2 − 19 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3.5;" data-finish="10.5;" data-bot_values="3.5;3.91;4.32;4.74;5.15;5.56;5.97;6.38;6.79;7.21;7.62;8.03;8.44;8.85;9.26;9.68;10.09;10.5" data-top_values="" data-bot_key="%">3.<small>5</small>% − 10.<small>5</small>% (based on level)</span> AD)</span> <b>bonus</b> magic damage</span>, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-start="0;0" data-finish="100;100" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on target\'s <b>missing</b> health)</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' Blade attacks  on-hit,  Blade Whirl,  Wild Rush, and the slash and explosives of  Flair deal 2 − 19 (based on level) (+ 3',
        values: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 3',
        pre: 'Blade attacks  on-hit,  Blade Whirl,  Wild Rush, and the slash and explosives of  Flair deal 2 − 19',
        post: '+ 3',
      },
      {
        effectType: 'Heal',
        name: 'Line 4:',
        raw: "5% (based on level) AD) bonus magic damage, increased by 0% − 100% (based on target's missing health)",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: 'AD bonus magic damage, increased by 0% − 100%',
        pre: '5%',
        post: 'AD bonus magic damage, increased by 0% − 100%',
        children: [
          {
            values: 0,
            user: 'target',
            units: 'missing_hp',
            unitsText: "based on target's missing health",
            pre: "based on target's missing health",
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Samira\'s</b> basic attack against an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilized"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> target is empowered to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and deal the <span style="color:orange; white-space:normal">attack\'s damage</span> over 6 strikes in 0.<small>5</small> seconds. If the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>, the attack also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 0.<small>5</small> seconds. <b>Samira</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> into her <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> of the target if they are nearby, though not through terrain.',
    leveling: [],
  },
  {
    description:
      'The empowered attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Samira\'s</b> basic attack timer, is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects only once, and cannot occur on the same target more than once every few seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Samira_Flair.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Samira</b> fires a shot in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '0 / 5 / 10 / 15 / 20 (+ 85 / 95 / 105 / 115 / 125% AD)',
        values: [0, 5, 10, 15, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0 / 5 / 10 / 15 / 20',
        children: [
          {
            values: [85, 95, 105, 115, 125],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 85 / 95 / 105 / 115 / 125% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If a targetable enemy is in front of <b>Samira</b> at the time of cast, she will instead slash with her blade in a cone, dealing the same damage to enemies hit.',
    leveling: [],
  },
  {
    description:
      'If <i>Flair</i> is cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span></i>, <b>Samira</b> deploys explosives in her wake that detonate upon the end of the dash, dealing the same damage to enemies hit.',
    leveling: [],
  },
  {
    description:
      '<i>Flair</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(25%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span> and will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">apply</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 66.<small>6</small>% effectiveness.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Samira_Blade_Whirl.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Samira</b> spins her blade over 0.<small>75</small> seconds, destroying all hostile non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> within the area for the duration.',
    leveling: [],
  },
  {
    description:
      '<b>Samira</b> slashes twice during <i>Blade Whirl</i>, each one dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby enemies. The first slash occurs immediately and the second one occurs after the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 35 / 50 / 65 / 80 (+ 80% bonus AD)',
        values: [20, 35, 50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '40 / 70 / 100 / 130 / 160 (+ 160% bonus AD)',
        values: [40, 70, 100, 130, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 70 / 100 / 130 / 160',
        children: [
          {
            values: 160,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 160% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><b>Samira</b> cannot attack nor cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> during Blade Whirl. Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Inferno Trigger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Inferno Trigger"><img alt="Inferno Trigger" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Samira/LoL">Inferno Trigger</a></span></span> will end Blade Whirl early.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Samira_Wild_Rush.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Samira</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target enemy or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structure</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through. She also gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 60 / 70 / 80 / 90 (+ 20% bonus AD)',
        values: [50, 60, 70, 80, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 60 / 70 / 80 / 90',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 20% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '20 / 25 / 30 / 35 / 40%',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
      },
    ],
  },
  {
    description:
      'Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 3 seconds of damaging them resets <i>Wild Rush\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Inferno Trigger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Inferno Trigger"><img alt="Inferno Trigger" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Samira/LoL">Inferno Trigger</a></span></span> can be cast during the dash. Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span> will buffer it to cast at the end of the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Samira_Rank_S.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Samira</b> unleashes a torrent of shots for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="2.25 seconds, but rounded up to the next game tick.">2.<small>277</small> seconds</span>, <b>reducing</b> her <span style="color: #F5EE99; white-space:normal">movement speed</span> by <span style="color: #F5EE99; white-space:normal">30%</span> and rapidly shooting at  nearby enemies over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="2 seconds, but rounded up to the next game tick.">2.<small>013</small> seconds</span> at sporadic times in <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="on average; total of 5 intervals of 0.231 and 5 of 0.198 seconds">0.<small>2</small>-second intervals</span> each, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> with each shot, reduced by 75% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Shot:',
        raw: '5 / 15 / 25 (+ 50% AD)',
        values: [5, 15, 25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 15 / 25',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '50 / 150 / 250 (+ 500% AD)',
        values: [50, 150, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 150 / 250',
        children: [
          {
            values: 500,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 500% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minion Damage Per Shot:',
        raw: '1.25 / 3.75 / 6.25 (+ 12.5% AD)',
        values: [1.25, 3.75, 6.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 3.75 / 6.25',
        children: [
          {
            values: 12.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 12.5% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Minion Damage:',
        raw: '12.5 / 37.5 / 62.5 (+ 125% AD)',
        values: [12.5, 37.5, 62.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12.5 / 37.5 / 62.5',
        children: [
          {
            values: 125,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 125% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Each shot can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 66.<small>6</small>% effectiveness.',
    leveling: [],
  },
  {
    img: '/wiki/images/Samira_Inferno_Trigger_2.png',
    description:
      '<i>A nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy is required to cast this ability, and targets do not have to be visible to be shot at. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Daredevil Impulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="Style"><img alt="Style" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="Samira/LoL">Style</a></span></span> stacks are consumed at the end of the effect.</i>',
    leveling: [],
  },
  {
    description:
      '<i><b>Samira</b> cannot attack nor cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span> during Inferno Trigger, but she can still move. Inferno Trigger will end prematurely by all forms of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span> as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarm</a></span>.</i>',
    leveling: [],
  },
];
const X: SubSkill[] = [
  {
    img: '/wiki/images/Samira_splash_coin.png',
    description:
      '<b>Samira\'s</b> <a href="/wiki/Emoting" title="Emoting">taunt</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">prevents</a></span> her from inputting attack commands and casting non-movement abilities, and she may only interrupt it herself with a movement command. After 3 seconds without interruption, she will toss a <img alt="Samira splash coin.png" src="/wiki/images/Samira_splash_coin.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> coin in the direction she is facing.',
    leveling: [],
  },
  {
    description:
      'If she has at least <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1</span></span>, the coin deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">1 true damage</span></span></span> to the first enemy champion hit and granting them <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1</span></span> of <b>Samira\'s</b> <a href="/wiki/Gold" class="mw-redirect" title="Gold">gold</a>.',
    leveling: [],
  },
  {
    description:
      'If cast within 1200 units of a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champion, <b>Samira</b> will turn to face towards the closest one to perform the animation.',
    leveling: [],
  },
  {
    description:
      '<b>Samira\'s</b> <i>Taunt</i> can target and hit dead enemy champions, granting them <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1</span></span> but not triggering other effects.',
    leveling: [],
  },
];
export const Samira = { I, Q, W, E, R, X };
