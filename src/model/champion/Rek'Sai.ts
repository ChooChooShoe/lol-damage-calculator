import type { SubSkill} from '@/api/DataTypes';
      import type { ChampionName } from '../ChampionListData';
      import ChampionListData from '../ChampionListData';
      export const name: ChampionName = 'Rek'Sai';
      const I: SubSkill[] = [
  {
    img: '/wiki/images/Rek%27Sai_Fury_of_the_Xer%27Sai.png',
    description: '<span class="template_sbc"><b>Innate:</b></span> <b>Rek\'Sai</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">25 Fury</span></a></span>. After 8 seconds of being <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a>, she loses <span style="color: #FA6533; white-space:normal">20 Fury</span> per second. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Prey Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Prey_Seeker" title="Prey Seeker"><img alt="Prey Seeker" src="/wiki/images/Rek%27Sai_Prey_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Prey_Seeker" title="Rek\'Sai/LoL">Prey Seeker</a></span></span></i> will not generate <span style="color: #FA6533; white-space:normal">Fury</span> against non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [],
  },
  {
    description: 'When <b>Rek\'Sai</b> becomes <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrowed"><img alt="Burrowed" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrowed</a></span></span></b></span>, she consumes her current <span style="color: #FA6533; white-space:normal">Fury</span> over 3 seconds to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="190;" data-bot_values="20;30;40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190" data-top_values="">20 − 190 (based on level)</span> at <span style="color: #FA6533; white-space:normal">100 Fury</span>, stopping once fully consumed or she reaches <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">full health</span></span>. If she starts generating <span style="color: #FA6533; white-space:normal">Fury</span> while <span class="template_sbc"><b>Burrowed</b></span>, the consumption occurs after 5 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "When Rek'Sai becomes  Burrowed, she consumes her current Fury over 3 seconds to  heal for up to 20 − 190 (based on level) at 100 Fury, stopping once fully consumed or she reaches  full health",
        healType: 'BonusHealth',
        values: [
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          100,
          110,
          120,
          130,
          140,
          150,
          160,
          170,
          180,
          190,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_hp',
        unitsText: 'at 100 Fury, stopping once fully consumed or she reaches  full health',
        pre: "When Rek'Sai becomes  Burrowed, she consumes her current Fury over 3 seconds to  heal for up to 20 − 190",
        post: 'at 100 Fury, stopping once fully consumed or she reaches  full health',
      },
    ],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Rek%27Sai_Queen%27s_Wrath.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> empowers her next three basic attacks within 5 seconds to have a 0.<small>25</small>-second cast time and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> to the target and surrounding enemies. The damage to the primary target is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '21 / 27 / 33 / 39 / 45 (+ 50% bonus AD)',
        values: [
          21,
          27,
          33,
          39,
          45,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '21 / 27 / 33 / 39 / 45',
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
        name: 'Total Bonus Physical Damage:',
        raw: '63 / 81 / 99 / 117 / 135 (+ 150% bonus AD)',
        values: [
          63,
          81,
          99,
          117,
          135,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '63 / 81 / 99 / 117 / 135',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 150% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description: '<i>Queen\'s Wrath <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Rek\'Sai\'s</b> basic attack timer, and ends prematurely if <b>Rek\'Sai</b> is <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrowed"><img alt="Burrowed" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrowed</a></span></span></b></span> for more than 1.<small>5</small> seconds.</i>',
    leveling: [],
  },
];
const W1: SubSkill[] = [
  {
    img: '/wiki/images/Rek%27Sai_Burrow.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> becomes <span class="template_sbc"><b>Burrowed</b></span>, reducing her <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> to 75 and her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> radius to 250 units while gaining access to her <span class="template_sbc"><b>Burrowed</b></span> abilities. She also becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="15;1" data-finish="30;16" data-bot_values="15;20;25;30" data-top_values="1;6;11;16">15 / 20 / 25 / 30 (based on level)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, as well as <i>Tremor Sense</i>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' She also becomes  ghosted and gains  15 / 20 / 25 / 30 (based on level) bonus movement speed, as well as Tremor Sense',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed, as well as Tremor Sense',
        pre: 'She also becomes  ghosted and gains  15 / 20 / 25 / 30',
        post: 'bonus movement speed, as well as Tremor Sense',
      },
    ],
  },
  {
    description: '<span class="template_sbc"><b>Tremor Sense:</b></span> <b>Rek\'Sai</b> and her allies gain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured vision"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">obscured vision</a></span> of nearby enemy units that are moving every 1.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description: 'Once <i>Burrow</i> has been learned, <b>Rek\'Sai</b> automatically becomes <span class="template_sbc"><b>Burrowed</b></span> upon completing a <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> channel or <a href="/wiki/Death" title="Death">respawning</a>.',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Rek%27Sai_Furious_Bite.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> bites the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '55 / 60 / 65 / 70 / 75 (+ 85% bonus AD)',
        values: [
          55,
          60,
          65,
          70,
          75,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 60 / 65 / 70 / 75',
        children: [
          {
            values: 85,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 85% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description: 'At maximum <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span>, <i>Furious Bite\'s</i> damage is doubled and converted to <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'True Damage:',
        raw: '110 / 120 / 130 / 140 / 150 (+ 170% bonus AD)',
        values: [
          110,
          120,
          130,
          140,
          150,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 120 / 130 / 140 / 150',
        children: [
          {
            values: 170,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 170% bonus AD',
          },
        ],
      },
    ],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Rek%27Sai_Prey_Seeker.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> fires a void bolt in the target direction that detonates on the first enemy hit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '60 / 95 / 130 / 165 / 200 (+ 50% bonus AD) (+ 70% AP)',
        values: [
          60,
          95,
          130,
          165,
          200,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 95 / 130 / 165 / 200',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 50% bonus AD',
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
];
const W2: SubSkill[] = [
  {
    img: '/wiki/images/Rek%27Sai_Unburrow.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> becomes <span class="template_sbc"><b>Un-Burrowed</b></span>, gaining access to her <span class="template_sbc"><b>Un-Burrowed</b></span> abilities. Additionally, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them aside</a></span>. The enemy closest to the center is instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 1 second, and cannot be affected by <i>Unburrow</i> again for some time.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '55 / 70 / 85 / 100 / 115 (+ 80% bonus AD)',
        values: [
          55,
          70,
          85,
          100,
          115,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 70 / 85 / 100 / 115',
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
    ],
  },
  {
    description: '<b>Rek\'Sai</b> can also trigger <i>Unburrow</i> by issuing an attack command, applying the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> against the target.',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Rek%27Sai_Tunnel.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, leaving behind a <i>Tunnel</i> with two interconnected entrances that lasts up to 10 minutes. The <i>Tunnel</i> can be traversed again when <b>Rek\'Sai</b> targets either entrance, shutting down the <i>Tunnel</i> for a few seconds.',
    leveling: [],
  },
  {
    description: '<b>Rek\'Sai</b> can have up to 8 <i>Tunnels</i> active on the map at once, but deploying beyond the maximum destroys the oldest one. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can destroy a <i>Tunnel</i> by standing on either entrance for 1.<small>5</small> seconds, granting them <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="5 Gold"><img alt="5 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">5</span></span> upon successfully destroying the <i>Tunnel</i>.',
    leveling: [],
  },
  {
    description: 'An <span class="template_sbc"><b>Un-Burrowed</b></span> <b>Rek\'Sai</b> will automatically <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrow"><img alt="Burrow" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrow</a></span></span></i> before entering the <i>Tunnel</i> and automatically <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Unburrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Unburrow"><img alt="Unburrow" src="/wiki/images/Rek%27Sai_Unburrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Rek\'Sai/LoL">Unburrow</a></span></span></i> after exiting it. This does not put <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrow"><img alt="Burrow" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrow</a></span></span></i> on cooldown nor trigger <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Fury of the Xer\'Sai" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Fury_of_the_Xer\'Sai" title="Fury of the Xer\'Sai"><img alt="Fury of the Xer\'Sai" src="/wiki/images/Rek%27Sai_Fury_of_the_Xer%27Sai.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Fury_of_the_Xer\'Sai" title="Rek\'Sai/LoL">Fury of the Xer\'Sai</a></span></span></i>, but does trigger other <i>Burrow</i> effects and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Unburrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Unburrow"><img alt="Unburrow" src="/wiki/images/Rek%27Sai_Unburrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Rek\'Sai/LoL">Unburrow</a></span></span></i>.',
    leveling: [],
  },
  {
    description: '<i><b>Rek\'Sai</b> cannot enter a tunnel while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span>.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Rek%27Sai_Void_Rush_Mark.png',
    description: '<span class="template_sbc"><b>Passive:</b></span> <b>Rek\'Sai</b> applies <i>Marked as Prey</i> to enemy champions she damages, lasting for 5 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Rek%27Sai_Void_Rush.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> selects the target <i>Marked as Prey</i>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishing</a></span> into the ground. After 1.<small>5</small> seconds, she becomes targetable again and emerges from the ground <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Unburrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Un-Burrowed"><img alt="Un-Burrowed" src="/wiki/images/Rek%27Sai_Unburrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Rek\'Sai/LoL">Un-Burrowed</a></span></span></b></span> near the target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pounces</a></span> at them, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> 125 units through them.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: "100 / 250 / 400 (+ 175% bonus AD) (+ 20 / 25 / 30% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [
          100,
          250,
          400,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 250 / 400',
        children: [
          {
            values: 175,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 175% bonus AD',
          },
          {
            values: [
              20,
              25,
              30,
            ],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 20 / 25 / 30% of target's missing health",
          },
        ],
      },
    ],
  },
  {
    description: '<i>If the target dies or is too far away before <b>Rek\'Sai</b> vanishes, Void Rush is canceled with a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;10-second</span> cooldown.</i>',
    leveling: [],
  },
]
    export const RekSai = {I,Q1,W1,E1,Q2,W2,E2,R}