import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Jayce';
const I1: SubSkill[] = [
  {
    img: '/wiki/images/Jayce_Hextech_Capacitor.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Jayce</b> switches between either <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Hammer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Hammer Stance"><img alt="Hammer Stance" src="/wiki/images/Jayce_Transform_Mercury_Hammer.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Jayce/LoL">Hammer Stance</a></span></span></b></span> or <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Cannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Cannon Stance"><img alt="Cannon Stance" src="/wiki/images/Jayce_Transform_Mercury_Cannon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Jayce/LoL">Cannon Stance</a></span></span></b></span>, he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40 <b>bonus</b> movement speed</span></span> for 0.<small>75</small> seconds.',
    leveling: [],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Jayce_To_the_Skies%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target enemy\'s location. Upon arrival, he deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies within an area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '60 / 110 / 160 / 210 / 260 / 310 (+ 120% bonus AD)',
        values: [60, 110, 160, 210, 260, 310],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 110 / 160 / 210 / 260 / 310',
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
        name: 'Slow:',
        raw: '30 / 35 / 40 / 45 / 50 / 55%',
        values: [30, 35, 40, 45, 50, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50 / 55%',
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Lightning Field" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Lightning_Field" title="Lightning Field"><img alt="Lightning Field" src="/wiki/images/Jayce_Lightning_Field.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Lightning_Field" title="Jayce/LoL">Lightning Field</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const W1: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Jayce\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Mana Restored:',
        raw: '10 / 12 / 14 / 16 / 18 / 20',
        values: [10, 12, 14, 16, 18, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 12 / 14 / 16 / 18 / 20',
      },
    ],
  },
  {
    img: '/wiki/images/Jayce_Lightning_Field.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> surrounds himself with an electric field for 4 seconds that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every second to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '35 / 50 / 65 / 80 / 95 / 110 (+ 25% AP)',
        values: [35, 50, 65, 80, 95, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 50 / 65 / 80 / 95 / 110',
        children: [
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
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '140 / 200 / 260 / 320 / 380 / 440 (+ 100% AP)',
        values: [140, 200, 260, 320, 380, 440],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 200 / 260 / 320 / 380 / 440',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
        ],
      },
    ],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Jayce_Thundering_Blow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> swings his hammer at the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, while also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacing</a></span> them to a location 500 units in front of him.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "8 / 10.8 / 13.6 / 16.4 / 19.2 / 22% of target's maximum health (+ 100% bonus AD)",
        healType: 'OutgoingHeals',
        values: [8, 10.8, 13.6, 16.4, 19.2, 22],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "8 / 10.8 / 13.6 / 16.4 / 19.2 / 22% of target's maximum health",
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
        name: 'Maximum Monster Damage:',
        raw: '200 / 300 / 400 / 500 / 600 / 700',
        values: [200, 300, 400, 500, 600, 700],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400 / 500 / 600 / 700',
      },
    ],
  },
];
const R1: SubSkill[] = [
  {
    img: '/wiki/images/Jayce_Transform_Mercury_Cannon.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> transforms into <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Cannon Stance" src="/wiki/images/Jayce_Transform_Mercury_Cannon.png" decoding="async" loading="lazy" title="Cannon Stance" width="20" height="20" class="thumbborder lazyload"></span> <span style="white-space:normal;"><span class="template_sbc"><b>Cannon Stance</b></span></span></span>, receiving access to its <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;500 attack range</span>, and empowering his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to reduce the target\'s <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="25;16" data-bot_values="10;15;20;25" data-top_values="1;6;11;16" data-bot_key="%">10 / 15 / 20 / 25% (based on level)</span> for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: " Jayce transforms into  Cannon Stance, receiving access to its abilities, becoming  ranged with  500 attack range, and empowering his next basic attack to reduce the target's  armor and  magic resistance by 10 / 15 / 20 / 25% (based on level) for 5 seconds",
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'for 5 seconds',
        pre: "Jayce transforms into  Cannon Stance, receiving access to its abilities, becoming  ranged with  500 attack range, and empowering his next basic attack to reduce the target's  armor and  magic resistance by 10 / 15 / 20 / 25%",
        post: 'for 5 seconds',
      },
    ],
  },
  {
    description:
      '<b>Jayce</b> begins the game with <i>Transform</i> but cannot increase its rank. Instead, his basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> each have 6 ranks.',
    leveling: [],
  },
];
const I2: SubSkill[] = [
  {
    img: '/wiki/images/Jayce_Hextech_Capacitor_2.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Jayce</b> switches between either <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Hammer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Hammer Stance"><img alt="Hammer Stance" src="/wiki/images/Jayce_Transform_Mercury_Hammer.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Jayce/LoL">Hammer Stance</a></span></span></b></span> or <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Cannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Cannon Stance"><img alt="Cannon Stance" src="/wiki/images/Jayce_Transform_Mercury_Cannon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Jayce/LoL">Cannon Stance</a></span></span></b></span>, he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40 <b>bonus</b> movement speed</span></span> for 0.<small>75</small> seconds.',
    leveling: [],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Jayce_Shock_Blast.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> fires an electric bolt in the target direction that detonates upon hitting an enemy or reaching maximum range, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '55 / 110 / 165 / 220 / 275 / 330 (+ 120% bonus AD)',
        values: [55, 110, 165, 220, 275, 330],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 110 / 165 / 220 / 275 / 330',
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
    ],
  },
  {
    description:
      'If the bolt passes through <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Acceleration Gate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Acceleration_Gate" title="Acceleration Gate"><img alt="Acceleration Gate" src="/wiki/images/Jayce_Acceleration_Gate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Acceleration_Gate" title="Jayce/LoL">Acceleration Gate</a></span></span>, it becomes supercharged: increasing its damage by 40% as well as its speed, range and explosion radius.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '77 / 154 / 231 / 308 / 385 / 462 (+ 168% bonus AD)',
        values: [77, 154, 231, 308, 385, 462],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '77 / 154 / 231 / 308 / 385 / 462',
        children: [
          {
            values: 168,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 168% bonus AD',
          },
        ],
      },
    ],
  },
];
const W2: SubSkill[] = [
  {
    img: '/wiki/images/Jayce_Hyper_Charge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> empowers his next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 4 seconds to deal <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">300% <b>bonus</b> attack speed</span></span>.<br><br><i>Hyper Charge\'s</i> <b>total</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Modifier:',
        raw: '70 / 78 / 86 / 94 / 102 / 110% AD',
        values: [70, 78, 86, 94, 102, 110],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '70 / 78 / 86 / 94 / 102 / 110% AD',
      },
    ],
  },
  {
    description:
      '<i>Hyper Charge <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Jayce\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Jayce_Acceleration_Gate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> deploys an energy gate centered at the target location, lasting for 4 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. <b>Jayce</b> and all allied champions can move through it to gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '30 / 35 / 40 / 45 / 50 / 55%',
        values: [30, 35, 40, 45, 50, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50 / 55%',
      },
    ],
  },
  {
    description:
      '<i>The buff is continuously refreshed while inside the gate. Acceleration Gate will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R2: SubSkill[] = [
  {
    img: '/wiki/images/Jayce_Transform_Mercury_Hammer.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jayce</b> transforms into <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Hammer Stance" src="/wiki/images/Jayce_Transform_Mercury_Hammer.png" decoding="async" loading="lazy" title="Hammer Stance" width="20" height="20" class="thumbborder lazyload"></span> <span style="white-space:normal;"><span class="template_sbc"><b>Hammer Stance</b></span></span></span>, receiving access to its <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125 attack range</span>, gaining <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;1" data-finish="35;16" data-bot_values="5;15;25;35" data-top_values="1;6;11;16">5 / 15 / 25 / 35 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;7.5% <b>bonus</b> AD)</span> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>, and empowering his next basic attack to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;1" data-finish="145;16" data-bot_values="25;65;105;145" data-top_values="1;6;11;16">25 / 65 / 105 / 145 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;25% <b>bonus</b> AD)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Jayce transforms into  Hammer Stance, receiving access to its abilities, becoming  melee with  125 attack range, gaining 5 / 15 / 25 / 35 (based on level) (+ 7',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 7',
        pre: 'Jayce transforms into  Hammer Stance, receiving access to its abilities, becoming  melee with  125 attack range, gaining 5 / 15 / 25 / 35',
        post: '+ 7',
      },
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: '5% bonus AD)  bonus armor and  bonus magic resistance, and empowering his next basic attack to deal 25 / 65 / 105 / 145 (based on level) (+ 25% bonus AD) bonus magic damage',
        damagetype: 'Magic',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage',
        pre: '5% bonus AD  bonus armor and  bonus magic resistance, and empowering his next basic attack to deal 25 / 65 / 105 / 145',
        post: 'bonus magic damage',
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
      '<b>Jayce</b> begins the game with <i>Transform</i> but cannot increase its rank. Instead, his basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> each have 6 ranks.',
    leveling: [],
  },
];
export const Jayce = { I1, Q1, W1, E1, R1, I2, Q2, W2, E2, R2 };
