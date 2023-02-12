import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Qiyana';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Qiyana_Royal_Privilege.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Qiyana\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">basic abilities</a> deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#FF8C34;" data-start="15;" data-finish="83;" data-bot_values="15;19;23;27;31;35;39;43;47;51;55;59;63;67;71;75;79;83" data-top_values="">15 − 83 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;30% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color: #FF8C34; white-space:normal"><b>additional</b> physical damage</span>. <br><br>This effect cannot occur on the same target more than once every few seconds.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Qiyana's basic attacks and basic abilities deal 15 − 83 (based on level) (+ 30% bonus AD) (+ 30% AP) additional physical damage",
        damagetype: 'Physical',
        values: [
          15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79,
          83,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'additional physical damage',
        pre: "Qiyana's basic attacks and basic abilities deal 15 − 83",
        post: 'additional physical damage',
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
    description:
      'Gathering an <span style="color: #AF1AAF; white-space:normal">Element</span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Terrashape"><img alt="Terrashape" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Terrashape</a></span></span></i> resets <i>Royal Privilege\'s</i> per-target <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> for enemies affected by <i>Royal Privilege</i> using a different <span style="color: #AF1AAF; white-space:normal">Element</span> (or no <span style="color: #AF1AAF; white-space:normal">Element</span>).',
    leveling: [],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Qiyana_Edge_of_Ixtal.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> slashes forward in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies in a line, reduced to 75% damage against targets beyond the first. <i>Edge of Ixtal</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 80 / 110 / 140 / 170 (+ 75% bonus AD)',
        values: [50, 80, 110, 140, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 80 / 110 / 140 / 170',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 75% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '37.5 / 60 / 82.5 / 105 / 127.5 (+ 56.25% bonus AD)',
        values: [37.5, 60, 82.5, 105, 127.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '37.5 / 60 / 82.5 / 105 / 127.5',
        children: [
          {
            values: 56.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 56.25% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Gathering an <span style="color: #AF1AAF; white-space:normal">Element</span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Terrashape"><img alt="Terrashape" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Terrashape</a></span></span></i> resets <i>Edge of Ixtal\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and upgrades it into <i>Elemental Wrath</i>.',
    leveling: [],
  },
  {
    description:
      'If cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Audacity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Audacity" title="Audacity\'s"><img alt="Audacity\'s" src="/wiki/images/Qiyana_Audacity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Audacity" title="Qiyana/LoL">Audacity\'s</a></span></span></i> dash towards an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and the target is within 150 units of <b>Qiyana</b> at the end of the dash, <i>Edge of Ixtal</i> will autonomously aim at the target.',
    leveling: [],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Qiyana_Elemental_Wrath.gif',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> hurls her blade in the target direction that blasts in a line upon hitting an enemy or maximum range, consuming the current <span style="color: #AF1AAF; white-space:normal">Element</span> to empower the blade with an additional effect.',
    leveling: [],
  },
  {
    description:
      'Enemies hit are dealt <i>Edge of Ixtal\'s</i> damage, reduced to 75% against subsequent enemies beyond the closest. <i>Elemental Wrath</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 80 / 110 / 140 / 170 (+ 75% bonus AD)',
        values: [50, 80, 110, 140, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 80 / 110 / 140 / 170',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 75% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '37.5 / 60 / 82.5 / 105 / 127.5 (+ 56.25% bonus AD)',
        values: [37.5, 60, 82.5, 105, 127.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '37.5 / 60 / 82.5 / 105 / 127.5',
        children: [
          {
            values: 56.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 56.25% bonus AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Qiyana_Terrashape_Brush.png',
    description:
      '<span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span>:</b></span> The blade creates a grass field around <b>Qiyana</b> that lasts for up to 3 seconds, granting her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span> until she attacks, casts an ability other than <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Qiyana" data-ability="Terrashape" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Qiyana/LoL#Terrashape" title="Terrashape"><img alt="Terrashape" src="/wiki/images/Qiyana_Terrashape.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Qiyana/LoL#Terrashape" title="Qiyana/LoL">Terrashape</a></span></span></i>, or exits the field.',
    leveling: [],
  },
  {
    img: '/wiki/images/Qiyana_Terrashape_River.png',
    description:
      '<span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span>:</b></span> The blast <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> enemies hit for 0.<small>5</small> seconds, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 20% for 1 second.',
    leveling: [],
  },
  {
    img: '/wiki/images/Qiyana_Terrashape_Rock.png',
    description:
      '<span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span>:</b></span> The blast deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">60% increased damage</span> against enemies below <span style="color: #1F995C; white-space:normal">50% of their <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '80 / 128 / 176 / 224 / 272 (+ 120% bonus AD)',
        values: [80, 128, 176, 224, 272],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 128 / 176 / 224 / 272',
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
        name: 'Subsequent Increased Damage:',
        raw: '60 / 96 / 132 / 168 / 204 (+ 90% bonus AD)',
        values: [60, 96, 132, 168, 204],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 96 / 132 / 168 / 204',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 90% bonus AD',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> While holding an <span style="color: #AF1AAF; white-space:normal">Element</span>, <b>Qiyana</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> attack range</span> and <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> on her basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and basic abilities. While <a href="/wiki/Combat_status" title="Combat status">out-of-combat</a> and moving near the <span style="color: #AF1AAF; white-space:normal">Element</span> currently being held, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '5 / 10 / 15 / 20 / 25%',
        values: [5, 10, 15, 20, 25],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 10 / 15 / 20 / 25%',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '8 / 22 / 36 / 50 / 64 (+ 10% bonus AD) (+ 45% AP)',
        values: [8, 22, 36, 50, 64],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 22 / 36 / 50 / 64',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 10% bonus AD',
          },
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
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '3 / 5 / 7 / 9 / 11%',
        values: [3, 5, 7, 9, 11],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 5 / 7 / 9 / 11%',
      },
    ],
  },
  {
    img: '/wiki/images/Qiyana_Terrashape.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> up to 300 units towards the target location to gather the <span style="color: #AF1AAF; white-space:normal">Element</span> of the nearest <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape Brush.png" src="/wiki/images/Qiyana_Terrashape_Brush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span></b></span>, <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape River.png" src="/wiki/images/Qiyana_Terrashape_River.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span></b></span> or <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape Rock.png" src="/wiki/images/Qiyana_Terrashape_Rock.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span> she targeted.',
    leveling: [],
  },
  {
    description: '<i>A target Element is required to cast this ability</i>.',
    leveling: [],
  },
  {
    description:
      'Once <i>Terrashape</i> has been learned, <b>Qiyana</b> is automatically given the <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Terrashape Rock.png" src="/wiki/images/Qiyana_Terrashape_Rock.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span> element upon <a href="/wiki/Death" title="Death">respawning</a>.',
    leveling: [],
  },
  {
    description:
      '<i><b>Qiyana</b> can cast any of her abilities during the dash.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Qiyana_Audacity.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target enemy. If they are in range upon arrival, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 90 / 130 / 170 / 210 (+ 50% bonus AD)',
        values: [50, 90, 130, 170, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 90 / 130 / 170 / 210',
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
    ],
  },
  {
    description:
      '<i><b>Qiyana</b> can cast any of her abilities during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Qiyana_Supreme_Display_of_Talent.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Qiyana</b> sweeps a windblast in the target direction that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> enemies hit, though not through terrain, and stops upon hitting <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span>.',
    leveling: [],
  },
  {
    description:
      'The windblast creates a cascading shockwave across any <span class="template_sbc"><b><span style="color: #43D9FB; white-space:normal">River</span></b></span> or <span class="template_sbc"><b><span style="color: #96FB97; white-space:normal">Brush</span></b></span> it passes through, as well as around the borders of <span class="template_sbc"><b><span style="color: #B36F21; white-space:normal">Terrain</span></b></span> it reaches, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="proximity" data-bot_values="0.5;1" data-top_values="0;X">0.<small>5</small> − 1 (based on proximity)</span> seconds, and briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area along its path. The damage based on the target\'s health ratio is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: '5 − 1 (based on proximity) seconds, and briefly granting  sight of the area along its path',
        values: [5, 1],
        user: 'none',
        units: '',
        unitsText:
          'seconds, and briefly granting  sight of the area along its path',
        pre: '5 − 1',
        post: 'seconds, and briefly granting  sight of the area along its path',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on proximity',
            pre: 'based on proximity',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: "100 / 200 / 300 (+ 170% bonus AD) (+ 10% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [100, 200, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 200 / 300',
        children: [
          {
            values: 170,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 170% bonus AD',
          },
          {
            values: 10,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 10% of target's maximum health",
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Capped Monster Health Damage:',
        raw: '500 / 750 / 1000',
        values: [500, 750, 1000],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '500 / 750 / 1000',
      },
    ],
  },
];
export const Qiyana = { I, Q1, Q2, W, E, R };
