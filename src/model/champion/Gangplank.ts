import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Gangplank';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Gangplank_Trial_by_Fire.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Gangplank</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to set the target on fire, dealing them<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F9966B;" data-start="55;" data-finish="310;" data-bot_values="55;70;85;100;115;130;145;160;175;190;205;220;235;250;265;280;295;310" data-top_values="">55 − 310 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span> <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> over 2.<small>5</small> seconds, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="2 per 1% critical strike chance" data-bot_values="0;20;40;60;80;100;120;140;160;180;200" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-top_key="%">0 − 200 (based on critical strike chance)</span>.&nbsp;」</span><span class="flipText2">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F9966B;" data-start="5.5;" data-finish="31;" data-bot_values="5.5;7;8.5;10;11.5;13;14.5;16;17.5;19;20.5;22;23.5;25;26.5;28;29.5;31" data-top_values="">5.<small>5</small> − 31 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;10% <b>bonus</b> AD)</span> <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> every 0.<small>25</small> seconds over 2.<small>5</small> seconds, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="0.2 per 1% critical strike chance" data-bot_values="0;2;4;6;8;10;12;14;16;18;20" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-top_key="%">0 − 20 (based on critical strike chance)</span>.&nbsp;」</span></span><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">Turrets</a></span> are dealt 50% damage.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Periodically, Gangplank empowers his next basic attack to set the target on fire, dealing them「 55 − 310 (based on level) (+ 100% bonus AD)  bonus true damage over 2',
        damagetype: 'True',
        values: [
          55, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250,
          265, 280, 295, 310,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus true damage over 2',
        pre: 'Periodically, Gangplank empowers his next basic attack to set the target on fire, dealing them「 55 − 310',
        post: 'bonus true damage over 2',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 seconds, increased by 0 − 200 (based on critical strike chance)',
        values: [5, 200],
        user: 'none',
        units: '',
        unitsText: 'seconds, increased by 0',
        pre: '5 seconds, increased by 0 − 200',
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
      {
        effectType: 'Damage',
        name: 'Line 4:',
        raw: '5 − 31 (based on level) (+ 10% bonus AD)  bonus true damage every 0',
        damagetype: 'True',
        values: [
          5, 6.53, 8.06, 9.59, 11.12, 12.65, 14.18, 15.71, 17.24, 18.76, 20.29,
          21.82, 23.35, 24.88, 26.41, 27.94, 29.47, 31,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus true damage every 0',
        pre: '5 − 31',
        post: 'bonus true damage every 0',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 10% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 6:',
        raw: '5 seconds, increased by 0 − 20 (based on critical strike chance)',
        values: [5, 20],
        user: 'none',
        units: '',
        unitsText: 'seconds, increased by 0',
        pre: '5 seconds, increased by 0 − 20',
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
    img: '/wiki/images/Gangplank_Trial_by_Fire_2.png',
    description:
      'If <b>Gangplank</b> successfully hits a target with <i>Trial by Fire</i>, he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="30;" data-bot_values="15;15.88;16.76;17.65;18.53;19.41;20.29;21.18;22.06;22.94;23.82;24.71;25.59;26.47;27.35;28.24;29.12;30" data-top_values="" data-bot_key="%">15% − 30% (based on level)</span> <b>bonus</b> movement speed</span></span> for 2 seconds. Every time a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span></i> explodes, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> for <i>Trial by Fire</i> resets and <b>Gangplank</b> gains its <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: 'If Gangplank successfully hits a target with Trial by Fire, he gains  15% − 30% (based on level) bonus movement speed for 2 seconds',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed for 2 seconds',
        pre: 'If Gangplank successfully hits a target with Trial by Fire, he gains  15% − 30%',
        post: 'bonus movement speed for 2 seconds',
      },
    ],
  },
  {
    description:
      '<i>Trial by Fire cannot be applied with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span> nor <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span>.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Gangplank_Parrrley.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gangplank</b> fires a shot at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness as a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> attack. <i>Parrrley</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for (175%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>total</b> damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '10 / 40 / 70 / 100 / 130 (+ 100% AD)',
        values: [10, 40, 70, 100, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 40 / 70 / 100 / 130',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Gangplank_Silver_Serpents.png',
    description:
      'If <i>Parrrley</i> kills the target, <b>Gangplank</b> plunders <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Silver Serpents" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Silver Serpents"><img alt="Silver Serpents" src="/wiki/images/Gangplank_Silver_Serpents.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Gangplank/LoL">Silver Serpents</a></span></span></i>. Each enemy killed by a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span></i> explosion that was originally set off by <i>Parrrley</i> also counts for the plunder.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Gold Plunder:',
        raw: ' 3 / 4 / 5 / 6 / 7',
        values: [3, 4, 5, 6, 7],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 4 / 5 / 6 / 7',
      },
      {
        effectType: 'Unique',
        name: 'Silver Serpent Plunder:',
        raw: ' 4 / 5 / 6 / 7 / 8',
        values: [4, 5, 6, 7, 8],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4 / 5 / 6 / 7 / 8',
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Silver Serpents" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Silver Serpents"><img alt="Silver Serpents" src="/wiki/images/Gangplank_Silver_Serpents.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Gangplank/LoL">Silver Serpents</a></span></span></i> can be spent in the <a href="/wiki/Shop" title="Shop">shop</a> to upgrade <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Cannon Barrage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Cannon_Barrage" title="Cannon Barrage"><img alt="Cannon Barrage" src="/wiki/images/Gangplank_Cannon_Barrage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Cannon_Barrage" title="Gangplank/LoL">Cannon Barrage</a></span></span></i>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Gangplank_Remove_Scurvy.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gangplank</b> consumes a large quantity of citrus fruit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Heal:',
        raw: '45 / 70 / 95 / 120 / 145 (+ 90% AP) (+ 13% missing health)',
        healType: 'BonusHealth',
        values: [45, 70, 95, 120, 145],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 70 / 95 / 120 / 145',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
          {
            values: 13,
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'missing health',
            pre: '+ 13% missing health',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Gangplank_Powder_Keg.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gangplank</b> consumes a charge to place a powder keg at the target location that lasts for 25 seconds and will connect to other kegs with overlapping connection radius through a trail of black powder. The keg starts with <span style="color: #1F995C; white-space:normal">3 health</span> and loses <span style="color: #1F995C; white-space:normal">1</span> every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="2;1;0.5" data-top_values="1;7;13">2 / 1 / 0.<small>5</small> (based on level)</span> seconds until it is left with <span style="color: #1F995C; white-space:normal">1 health</span>. <b>Gangplank</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> a <i>Powder Keg</i> charge, up to a maximum amount.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' The keg starts with 3 health and loses 1 every 2 / 1 / 0',
        healType: 'BonusHealth',
        values: [3, 1, 0],
        user: 'player',
        units: 'total_hp',
        unitsText: 'keg starts with 3 health and loses 1 every 2',
        pre: 'The keg starts with 3 health and loses 1 every 2 / 1 / 0',
      },
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: '5 (based on level) seconds until it is left with 1 health',
        healType: 'BonusHealth',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_hp',
        unitsText: 'seconds until it is left with 1 health',
        pre: '5',
        post: 'seconds until it is left with 1 health',
      },
      {
        effectType: 'Unique',
        name: 'Maximum charges:',
        raw: '3 / 3 / 4 / 4 / 5',
        values: [3, 3, 4, 4, 5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 3 / 4 / 4 / 5',
      },
    ],
  },
  {
    description:
      'Kegs can be <a href="/wiki/Basic_attack" title="Basic attack">basic attacked</a> by enemies or <b>Gangplank</b> (including his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span></i>), dealing 1 damage to it. When an enemy destroys it, it is safely defused. When <b>Gangplank</b> destroys it, it explodes and also triggers a chain reaction that explodes other nearby connected kegs with a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.3 seconds, but rounded up to the next game tick.">0.<small>33</small> seconds</span>-delay between explosions. The explosions also grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their radiuses for 2 seconds.',
    leveling: [],
  },
  {
    description:
      'Enemies caught in an explosion are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 2 seconds, and are dealt the triggering <span style="color:orange; white-space:normal">attack\'s damage</span>, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. Each enemy can only be hit once per chain and the damage dealt ignores <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">40% of the target\'s armor</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '30 / 37.5 / 45 / 52.5 / 60% (+ 0% − 25% (based on critical strike chance)',
        values: [30, 37.5, 45, 52.5, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '+ 0',
        pre: '30 / 37.5 / 45 / 52.5 / 60% + 0% − 25%',
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
      {
        effectType: 'Unique',
        name: 'Bonus Champion Damage:',
        raw: '75 / 105 / 135 / 165 / 195',
        values: [75, 105, 135, 165, 195],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 105 / 135 / 165 / 195',
      },
    ],
  },
  {
    description:
      'If the triggering attack was a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span>, the explosions deal 5% more damage on top of the critical damage.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Gangplank_Cannon_Barrage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gangplank</b> shoots a flare into the air, signaling his ship off-shore to fire upon the target location for 8 seconds, calling down 12 waves of cannonballs in clusters of 3 every 2 seconds, and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for the duration. Each wave deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 30% for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Wave:',
        raw: '40 / 70 / 100 (+ 10% AP)',
        values: [40, 70, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 70 / 100',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Cluster:',
        raw: '120 / 210 / 300 (+ 30% AP)',
        values: [120, 210, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 210 / 300',
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
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '480 / 840 / 1200 (+ 120% AP)',
        values: [480, 840, 1200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '480 / 840 / 1200',
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
  {
    description:
      '<b>Gangplank</b> can purchase upgrades for his ship in the store at the cost of 500 <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Silver Serpents" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Silver Serpents"><img alt="Silver Serpents" src="/wiki/images/Gangplank_Silver_Serpents.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Gangplank/LoL">Silver Serpents</a></span></span></i> each, which improve <i>Cannon Barrage</i>:',
    leveling: [],
  },
  {
    img: '/wiki/images/Death%27s_Daughter_item.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Death\'s Daughter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Death%27s_Daughter" title="Death\'s Daughter"><img alt="Death\'s Daughter" src="/wiki/images/Death%27s_Daughter_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Death%27s_Daughter" class="mw-redirect" title="Death\'s Daughter">Death\'s Daughter</a></span></span>:</b></span> A large cannonball lands in the center of the barrage after the first cluster of waves occur, dealing a cluster\'s worth of <span style="color: #F9966B; white-space:normal">true damage</span> to enemies within the impact and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 60% for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: "True Damage with  Death's Daughter:",
        raw: '120 / 210 / 300 (+ 30% AP)',
        values: [120, 210, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 210 / 300',
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
      {
        effectType: 'Unique',
        name: "Total Mixed Damage with  Death's Daughter:",
        raw: '600 / 1050 / 1500 (+ 150% AP)',
        values: [600, 1050, 1500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '600 / 1050 / 1500',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Fire_at_Will_item.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Fire at Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fire_at_Will" title="Fire at Will"><img alt="Fire at Will" src="/wiki/images/Fire_at_Will_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fire_at_Will" class="mw-redirect" title="Fire at Will">Fire at Will</a></span></span>:</b></span> <i>Cannon Barrage</i> fires<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;6 additional waves&nbsp;」</span><span class="flipText2">「&nbsp;2 additional clusters&nbsp;」</span></span> over its duration; 18 waves of cannonballs are called down in clusters of 3 every 1.<small>3<span style="text-decoration: overline;">3</span></small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage with  Fire at Will:',
        raw: '720 / 1260 / 1800 (+ 180% AP)',
        values: [720, 1260, 1800],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '720 / 1260 / 1800',
        children: [
          {
            values: 180,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 180% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: "Maximum Mixed Total Damage with  Fire at Will and  Death's Daughter:",
        raw: '840 / 1470 / 2100 (+ 210% AP)',
        values: [840, 1470, 2100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '840 / 1470 / 2100',
        children: [
          {
            values: 210,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 210% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Raise_Morale_item.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Raise Morale" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Raise_Morale" title="Raise Morale"><img alt="Raise Morale" src="/wiki/images/Raise_Morale_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Raise_Morale" class="mw-redirect" title="Raise Morale">Raise Morale</a></span></span>:</b></span> <i>Cannon Barrage</i> grants <b>Gangplank</b> and all allies within the area <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span>, lingering for 2 seconds.',
    leveling: [],
  },
];
export const Gangplank = { I, Q, W, E, R };
