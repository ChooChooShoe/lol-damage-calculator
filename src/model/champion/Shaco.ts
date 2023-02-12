import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Shaco';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Shaco_Backstab.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Shaco\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="35;" data-bot_values="20;20.88;21.76;22.65;23.53;24.41;25.29;26.18;27.06;27.94;28.82;29.71;30.59;31.47;32.35;33.24;34.12;35" data-top_values="">20 − 35 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;25% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> when hitting an enemy from behind. <i>Backstab</i> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Shaco's basic attacks are empowered to deal 20 − 35 (based on level) (+ 25% bonus AD) bonus physical damage when hitting an enemy from behind",
        damagetype: 'Physical',
        values: [
          20, 20.88, 21.76, 22.65, 23.53, 24.41, 25.29, 26.18, 27.06, 27.94,
          28.82, 29.71, 30.59, 31.47, 32.35, 33.24, 34.12, 35,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus physical damage when hitting an enemy from behind',
        pre: "Shaco's basic attacks are empowered to deal 20 − 35",
        post: 'bonus physical damage when hitting an enemy from behind',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 25% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Deceive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Deceive" title="Deceive"><img alt="Deceive" src="/wiki/images/Shaco_Deceive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Deceive" title="Shaco/LoL">Deceive</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Two-Shiv Poison" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Two-Shiv Poison"><img alt="Two-Shiv Poison" src="/wiki/images/Shaco_Two-Shiv_Poison.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Shaco/LoL">Two-Shiv Poison</a></span></span></i> have additional effects when they hit an enemy from behind.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Shaco_Deceive.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shaco</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> for a duration, and after a 0.<small>125</small>-second delay, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Invisibility Duration:',
        raw: '2.5 / 2.75 / 3 / 3.25 / 3.5',
        values: [2.5, 2.75, 3, 3.25, 3.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2.5 / 2.75 / 3 / 3.25 / 3.5',
      },
    ],
  },
  {
    description:
      '<i>Deceive\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> breaks when <b>Shaco</b> uses a basic attack or casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Two-Shiv Poison" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Two-Shiv Poison"><img alt="Two-Shiv Poison" src="/wiki/images/Shaco_Two-Shiv_Poison.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Two-Shiv_Poison" title="Shaco/LoL">Two-Shiv Poison</a></span></span></i>, but not from casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Jack in the Box"><img alt="Jack in the Box" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">Jack in the Box</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Hallucinate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Hallucinate" title="Hallucinate"><img alt="Hallucinate" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Hallucinate" title="Shaco/LoL">Hallucinate</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      'After breaking the invisibility, <b>Shaco</b> empowers his next basic attack within 0.<small>25</small> seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, which is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '25 / 35 / 45 / 55 / 65 (+ 50% bonus AD)',
        values: [25, 35, 45, 55, 65],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 35 / 45 / 55 / 65',
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
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Backstab" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Backstab" title="Backstab"><img alt="Backstab" src="/wiki/images/Shaco_Backstab.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Backstab" title="Shaco/LoL">Backstab</a></span></span> Bonus:</b></span> The attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(40%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span>.',
    leveling: [],
  },
  {
    description: '<i>Deceive will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Shaco_Jack_in_the_Box.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shaco</b> summons a <i>box</i> at the target location that becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> after arming over 2 seconds, lasting for up to 40 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> seconds. The <i>box</i> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to enemies while stealthed.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: ' Shaco summons a box at the target location that becomes  stealthed after arming over 2 seconds, lasting for up to 40 (+ 10% AP) seconds',
        values: 2,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: 'Shaco summons a box at the target location that becomes  stealthed after arming over 2 seconds, lasting for up to 40',
        post: 'seconds',
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
    ],
  },
  {
    description:
      'The <i>box</i> will spring out upon enemy contact, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fearing"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> nearby enemies and reducing their <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> for 2 seconds, modified against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, who are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 0.<small>5</small> seconds. Enemy champions have their <span style="color: #F5EE99; white-space:normal">movement speed</span> set to a <span style="color: #F5EE99; white-space:normal">static 100</span>, reduced to a <span style="color: #F5EE99; white-space:normal">static 60</span> for non-champions.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Champion Disable Duration:',
        raw: '0.5 / 0.75 / 1 / 1.25 / 1.5',
        values: [0.5, 0.75, 1, 1.25, 1.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0.5 / 0.75 / 1 / 1.25 / 1.5',
      },
    ],
  },
  {
    description:
      'Once sprung, the <i>box</i> will remain for 5 seconds, during which it will automatically fire at nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies every 0.<small>5</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> with each attack. If the <i>box</i> attacks only one target, it deals increased damage. <i>Boxes</i> deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and 50% reduced damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '10 / 15 / 20 / 25 / 30 (+ 12% AP)',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 12% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '25 / 40 / 55 / 70 / 85 (+ 18% AP)',
        values: [25, 40, 55, 70, 85],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 40 / 55 / 70 / 85',
        children: [
          {
            values: 18,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 18% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Monster Damage:',
        raw: '10 / 20 / 30 / 40 / 50',
        values: [10, 20, 30, 40, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30 / 40 / 50',
      },
      {
        effectType: 'Unique',
        name: 'Total Monster Damage:',
        raw: '20 / 35 / 50 / 65 / 80 (+ 12% AP)',
        values: [20, 35, 50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 12% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Monster Damage:',
        raw: '35 / 60 / 85 / 110 / 135 (+ 18% AP)',
        values: [35, 60, 85, 110, 135],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 60 / 85 / 110 / 135',
        children: [
          {
            values: 18,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 18% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>See <a href="/wiki/Shaco/LoL#Pets" title="Shaco/LoL">Pets</a> for more details about boxes.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Shaco\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies for 2 seconds while <i>Two-Shiv Poison</i> is not on cooldown.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '20 / 22.5 / 25 / 27.5 / 30%',
        values: [20, 22.5, 25, 27.5, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 22.5 / 25 / 27.5 / 30%',
      },
    ],
  },
  {
    img: '/wiki/images/Shaco_Two-Shiv_Poison.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shaco</b> throws a dagger at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased by 50%</span> if they are <span style="color: #1F995C; white-space:normal"><b>below</b> 30% of their <b>maximum</b> health</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 95 / 120 / 145 / 170 (+ 80% bonus AD) (+ 60% AP)',
        values: [70, 95, 120, 145, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 95 / 120 / 145 / 170',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
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
        name: 'Increased Damage:',
        raw: '105 / 142.5 / 180 / 217.5 / 255 (+ 120% bonus AD) (+ 90% AP)',
        values: [105, 142.5, 180, 217.5, 255],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '105 / 142.5 / 180 / 217.5 / 255',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 120% bonus AD',
          },
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
        name: 'Slow:',
        raw: '20 / 22.5 / 25 / 27.5 / 30%',
        values: [20, 22.5, 25, 27.5, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 22.5 / 25 / 27.5 / 30%',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Backstab" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Backstab" title="Backstab"><img alt="Backstab" src="/wiki/images/Shaco_Backstab.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Backstab" title="Shaco/LoL">Backstab</a></span></span> Bonus:</b></span> The dagger deals an additional <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="50;" data-bot_values="15;17.06;19.12;21.18;23.24;25.29;27.35;29.41;31.47;33.53;35.59;37.65;39.71;41.76;43.82;45.88;47.94;50" data-top_values="">15 − 50 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, increased to <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="22.5;" data-finish="75;" data-bot_values="22.5;25.59;28.68;31.76;34.85;37.94;41.03;44.12;47.21;50.29;53.38;56.47;59.56;62.65;65.74;68.82;71.91;75" data-top_values="">22.<small>5</small> − 75 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> if the target is <span style="color: #1F995C; white-space:normal"><b>below</b> 30% of their <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' The dagger deals an additional 15 − 50 (based on level) (+ 10% AP) bonus magic damage, increased to 22',
        damagetype: 'Magic',
        values: [
          15, 17.06, 19.12, 21.18, 23.24, 25.29, 27.35, 29.41, 31.47, 33.53,
          35.59, 37.65, 39.71, 41.76, 43.82, 45.88, 47.94, 50,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage, increased to 22',
        pre: 'The dagger deals an additional 15 − 50',
        post: 'bonus magic damage, increased to 22',
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
        effectType: 'Heal',
        name: 'Line 2:',
        raw: '5 − 75 (based on level) (+ 15% AP) if the target is below 30% of their maximum health',
        healType: 'OutgoingHeals',
        values: [
          5, 9.12, 13.24, 17.35, 21.47, 25.59, 29.71, 33.82, 37.94, 42.06,
          46.18, 50.29, 54.41, 58.53, 62.65, 66.76, 70.88, 75,
        ],
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: 'if the target is below 30% of their maximum health',
        pre: '5 − 75',
        post: 'if the target is below 30% of their maximum health',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Shaco_Hallucinate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shaco</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishes</a></span> for 0.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> in the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="150 units">target direction</span> while creating a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of himself that is summoned in the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="150 units">opposite direction</span>, remaining within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1125 units">control range</span> of him as a controllable <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> for up to 18 seconds. <br><br><i>Hallucinate</i> can be recast at any time while the clone is alive, and can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Shaco_Command-_Hallucinate.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Shaco</b> commands the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> to move to the target location.',
    leveling: [],
  },
  {
    description:
      'The clone will explode upon dying or expiring to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and deploy three <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="mini-boxes"><img alt="mini-boxes" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">mini-boxes</a></span></span></i> that activate instantly, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fearing"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> nearby enemies for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 225 / 300 (+ 70% AP)',
        values: [150, 225, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 225 / 300',
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
      'The <i>boxes</i> possess <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Jack in the Box\'s"><img alt="Jack in the Box\'s" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">Jack in the Box\'s</a></span></span></i> effects, except they have a doubled, but shared <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span>, and deal <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span> with each attack, increased when attacking a single unit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Modified Magic Damage:',
        raw: '10 / 20 / 30 (+ 10% AP)',
        values: [10, 20, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30',
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
        name: 'Increased Modified Damage:',
        raw: '25 / 50 / 75 (+ 15% AP)',
        values: [25, 50, 75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 50 / 75',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>See <a href="/wiki/Shaco/LoL#Pets" title="Shaco/LoL">Pets</a> for more details about <b>Shaco\'s</b> clone.</i>',
    leveling: [],
  },
];
export const Shaco = { I, Q, W, E, R };
