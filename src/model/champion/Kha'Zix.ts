import type { SubSkill} from '@/api/DataTypes';
      import type { ChampionName } from '../ChampionListData';
      import ChampionListData from '../ChampionListData';
      export const name: ChampionName = 'Kha'Zix';
      const I: SubSkill[] = [
  {
    img: '/wiki/images/Kha%27Zix_Unseen_Threat.png',
    description: '<span class="template_sbc"><b>Innate:</b></span> <b>Kha\'Zix</b> gains <i>Unseen Threat</i> whenever the enemy loses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of him or he activates <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Void Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Void_Assault" title="Void Assault"><img alt="Void Assault" src="/wiki/images/Kha%27Zix_Void_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Void_Assault" title="Kha\'Zix/LoL">Void Assault</a></span></span></i>. <br><br><span class="template_sbc"><b>Unseen Threat:</b></span> <b>Kha\'Zix</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against an enemy champion to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="14;" data-finish="116;" data-bot_values="14;20;26;32;38;44;50;56;62;68;74;80;86;92;98;104;110;116" data-top_values="">14 − 116 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;40% <b>bonus</b> AD)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them by 25% for 2 seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: " Kha'Zix empowers his next basic attack against an enemy champion to deal 14 − 116 (based on level) (+ 40% bonus AD) bonus magic damage and  slow them by 25% for 2 seconds",
        values: [
          14,
          20,
          26,
          32,
          38,
          44,
          50,
          56,
          62,
          68,
          74,
          80,
          86,
          92,
          98,
          104,
          110,
          116,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage and  slow them by 25% for 2 seconds',
        pre: "Kha'Zix empowers his next basic attack against an enemy champion to deal 14 − 116",
        post: 'bonus magic damage and  slow them by 25% for 2 seconds',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 40% bonus AD',
          },
        ],
      },
    ],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Unseen_Threat_2.png',
    description: '<span class="template_sbc"><b>Passive:</b></span> <b>Kha\'Zix</b> considers any enemy unit to be <span style="color: #AF1AAF; white-space:normal">Isolated</span> if they are not nearby to one of their allies. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Taste Their Fear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Taste_Their_Fear" title="Taste Their Fear"><img alt="Taste Their Fear" src="/wiki/images/Kha%27Zix_Taste_Their_Fear.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Taste_Their_Fear" title="Kha\'Zix/LoL">Taste Their Fear</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Evolved Reaper Claws" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Evolved_Reaper_Claws" title="Evolved Reaper Claws"><img alt="Evolved Reaper Claws" src="/wiki/images/Kha%27Zix_Evolved_Enlarged_Claws.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Evolved_Reaper_Claws" title="Kha\'Zix/LoL">Evolved Reaper Claws</a></span></span></i>, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Evolved Spike Racks" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Evolved_Spike_Racks" title="Evolved Spike Racks"><img alt="Evolved Spike Racks" src="/wiki/images/Kha%27Zix_Evolved_Spike_Racks.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Evolved_Spike_Racks" title="Kha\'Zix/LoL">Evolved Spike Racks</a></span></span></i> have special interactions against <span style="color: #AF1AAF; white-space:normal">Isolated</span> targets.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kha%27Zix_Taste_Their_Fear.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Kha\'Zix</b> slashes the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by 110% against <span style="color: #AF1AAF; white-space:normal">Isolated</span> targets.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical damage:',
        raw: '60 / 85 / 110 / 135 / 160 (+ 115% bonus AD)',
        values: [
          60,
          85,
          110,
          135,
          160,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 85 / 110 / 135 / 160',
        children: [
          {
            values: 115,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 115% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '126 / 178.5 / 231 / 283.5 / 336 (+ 241.5% bonus AD)',
        values: [
          126,
          178.5,
          231,
          283.5,
          336,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '126 / 178.5 / 231 / 283.5 / 336',
        children: [
          {
            values: 241.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 241.5% bonus AD',
          },
        ],
      },
    ],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Kha%27Zix_Evolved_Enlarged_Claws.png',
    description: '<span class="template_sbc"><b>Passive:</b></span> <b>Kha\'Zix</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> on his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i>Taste Their Fear</i>. <br><br><span class="template_sbc"><b>Evolved Bonus:</b></span> If the target is <span style="color: #AF1AAF; white-space:normal">Isolated</span>, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 45%.',
    leveling: [],
  },
];
const W1: SubSkill[] = [
  {
    img: '/wiki/images/Kha%27Zix_Void_Spike.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Kha\'Zix</b> fires a bolt of spikes in the target direction that explodes upon hitting an enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '85 / 115 / 145 / 175 / 205 (+ 100% bonus AD)',
        values: [
          85,
          115,
          145,
          175,
          205,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '85 / 115 / 145 / 175 / 205',
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
    ],
  },
  {
    description: '<b>Kha\'Zix</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself if he is within the explosion.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '55 / 75 / 95 / 115 / 135 (+ 50% AP)',
        values: [
          55,
          75,
          95,
          115,
          135,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 75 / 95 / 115 / 135',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
    ],
  },
];
const W2: SubSkill[] = [
  {
    img: '/wiki/images/Kha%27Zix_Evolved_Spike_Racks.png',
    description: '<span class="template_sbc"><b>Evolved Bonus:</b></span> <i>Void Spike</i> now fires three clusters in a cone, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> by 60% and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> enemy champions hit for 2 seconds. Multiple explosions do not deal extra damage to the same target nor provide <b>Kha\'Zix</b> with additional healing.',
    leveling: [],
  },
  {
    description: '<span style="color: #AF1AAF; white-space:normal">Isolated</span> targets hit by <i>Evolved Spike Racks</i> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 90% instead.',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Kha%27Zix_Leap.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Kha\'Zix</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies upon arrival.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '65 / 100 / 135 / 170 / 205 (+ 20% bonus AD)',
        values: [
          65,
          100,
          135,
          170,
          205,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 100 / 135 / 170 / 205',
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
    ],
  },
  {
    description: '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Taste Their Fear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Taste_Their_Fear" title="Taste Their Fear"><img alt="Taste Their Fear" src="/wiki/images/Kha%27Zix_Taste_Their_Fear.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Taste_Their_Fear" title="Kha\'Zix/LoL">Taste Their Fear</a></span></span> can be cast during the dash. Leap will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Kha%27Zix_Evolved_Wings.png',
    description: '<span class="template_sbc"><b>Evolved Bonus:</b></span> <i>Leap</i> gains 200 <b>bonus</b> cast range, and the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> resets upon scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
    leveling: [],
  },
];
const R1: SubSkill[] = [
  {
    description: '<span class="template_sbc"><b>Passive:</b></span> Each rank in <i>Void Assault</i> allows <b>Kha\'Zix</b> to evolve one of his abilities, granting it additional effects. Evolving an ability causes him to enter a 2-second cast time. <b>Kha\'Zix</b> cannot evolve while he is unable to cast abilities.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kha%27Zix_Void_Assault.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Kha\'Zix</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> for 1.<small>25</small> seconds, during which he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kha%27Zix_Void_Assault_2.png',
    description: 'After 2 seconds of leaving <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span>, and for the next 10 seconds, <i>Void Assault</i> can be recast at no additional cost.',
    leveling: [],
  },
  {
    description: '<span class="template_sbc"><b>Recast</b></span>: <b>Kha\'Zix</b> mimics the first cast\'s effects.',
    leveling: [],
  },
];
const R2: SubSkill[] = [
  {
    img: '/wiki/images/Kha%27Zix_Evolved_Active_Camouflage.png',
    description: '<span class="template_sbc"><b>Evolved Bonus:</b></span> The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> now lasts 2 seconds, and <i>Void Assault</i> can be recast twice.',
    leveling: [],
  },
]
    export const KhaZix = {I,Q1,Q2,W1,W2,E1,E2,R1,R2}