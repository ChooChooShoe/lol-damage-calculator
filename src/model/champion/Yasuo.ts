import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Yasuo';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Yasuo_Way_of_the_Wanderer.png',
    description:
      '<span class="template_sbc"><b>Innate - Intent:</b></span> <b>Yasuo\'s</b> <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> critical strike chance</span></span> is multiplied by 2.<small>5</small> from all other sources, but his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> deal only<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(57.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="31.5%"><img alt="31.5%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">31.<small>5</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;90% of the normal <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical strike damage</span></span>.&nbsp;」</span></span>Additionally,<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;every <span style="color: #E56013; white-space:normal">1% critical strike chance</span> in excess of <span style="color: #E56013; white-space:normal">100%</span> is converted into <span style="color:orange; white-space:normal">0.<small>4</small> <b>bonus</b> AD</span>.&nbsp;」</span><span class="flipText2">「&nbsp;every <span style="color: #E56013; white-space:normal">50% critical strike chance</span> in excess of <span style="color: #E56013; white-space:normal">100%</span> is converted into <span style="color:orange; white-space:normal">20 <b>bonus</b> AD</span>.&nbsp;」</span></span>',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Resolve:</b></span> <b>Yasuo</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span> for every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="59;1" data-finish="46;13" data-bot_values="59;52.5;46" data-top_values="1;7;13">59 / 52.<small>5</small> / 46 (based on level)</span> units he travels by any means. At<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;100 stacks&nbsp;」</span><span class="flipText2">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5900;1" data-finish="4600;13" data-bot_values="5900;5250;4600" data-top_values="1;7;13">5900 / 5250 / 4600 (based on level)</span> units traveled&nbsp;」</span></span>and upon taking damage from an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, <b>Yasuo</b> consumes all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span> to grant himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="100;105;110;115;120;130;140;150;160;170;180;200;220;250;290;350;410;475" data-top_values="">100 − 475 (based on level)</span> that lasts up to 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: ' Yasuo generates  Flow for every 59 / 52',
        values: [5, 52],
        user: 'none',
        units: '',
        unitsText: 'generates  Flow for every 59',
        pre: 'Yasuo generates  Flow for every 59 / 52',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 / 46 (based on level) units he travels by any means',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'units he travels by any means',
        pre: '5 / 46',
        post: 'units he travels by any means',
      },
      {
        effectType: 'Shield',
        name: 'Line 3:',
        raw: ' At「 100 stacks 」「 5900 / 5250 / 4600 (based on level) units traveled 」and upon taking damage from an enemy  champion or  monster, Yasuo consumes all  Flow to grant himself a  shield for 100 − 475 (based on level) that lasts up to 1 second',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'units traveled 」and upon taking damage from an enemy  champion or  monster, Yasuo consumes all  Flow to grant himself a  shield for 100 − 475',
        pre: 'At「 100 stacks 」「 5900 / 5250 / 4600',
        post: 'units traveled 」and upon taking damage from an enemy  champion or  monster, Yasuo consumes all  Flow to grant himself a  shield for 100 − 475',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Yasuo_Steel_Tempest.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yasuo</b> thrusts his sword in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness to the first enemy hit. <i>Steel Tempest\'s</i> damage can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(47%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="29.4%"><img alt="29.4%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">29.<small>4</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;84% of the <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span> champions usually have.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 45 / 70 / 95 / 120 (+ 105% AD)',
        values: [20, 45, 70, 95, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 45 / 70 / 95 / 120',
        children: [
          {
            values: 105,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 105% AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Yasuo_Steel_Tempest_2.png',
    description:
      'If this hits at least one enemy, <b>Yasuo</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Gathering Storm</i> for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next <i>Steel Tempest</i> consumes them all to become empowered with a new effect.',
    leveling: [],
  },
  {
    img: '/wiki/images/Yasuo_Steel_Tempest_3.png',
    description:
      '<span class="template_sbc"><b>Gathering Storm Bonus:</b></span> <b>Yasuo</b> unleashes a whirlwind in the target direction that deals the same damage to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 0.<small>75</small> seconds, or 0.<small>9</small> seconds in combination with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Sweeping Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Sweeping Blade"><img alt="Sweeping Blade" src="/wiki/images/Yasuo_Sweeping_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Yasuo/LoL">Sweeping Blade</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<i>Steel Tempest\'s</i> thrust is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> if <b>Yasuo</b> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarming crowd control"><a href="/wiki/Crowd_control#Disarming" title="Crowd control#Disarming"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disarming" title="Crowd control">disarming crowd control</a></span> during the cast time, but its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reset to 0.<small>1</small> seconds.',
    leveling: [],
  },
  {
    description:
      'If <i>Steel Tempest</i> is cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Sweeping Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Sweeping Blade"><img alt="Sweeping Blade" src="/wiki/images/Yasuo_Sweeping_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Yasuo/LoL">Sweeping Blade</a></span></span></i>, it will instead affect enemies around <b>Yasuo</b> at the end of the dash, or doing so immediately at his landing location after <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinking</a></span> while ending the dash prematurely.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Yasuo_Wind_Wall.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yasuo</b> raises a wall of wind that travels in the target direction over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>25</small> seconds</span>. It then drifts another 50 units over 3.<small>75</small> seconds, blocking all hostile non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> that hit it and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Wall Width:',
        raw: '320 / 390 / 460 / 530 / 600',
        values: [320, 390, 460, 530, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '320 / 390 / 460 / 530 / 600',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Yasuo_Sweeping_Blade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yasuo</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target enemy. Upon impact, he deals them <span style="color: #00B0F0; white-space:normal">magic damage</span>, becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2 seconds</span>, and generates a stack of <i>Ride the Wind</i> for 5 seconds, which refreshes on subsequent hits and stacks up to 2 times.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 70 / 80 / 90 / 100 (+ 20% bonus AD) (+ 60% AP)',
        values: [60, 70, 80, 90, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 70 / 80 / 90 / 100',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 20% bonus AD',
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
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Ride the Wind:</b></span> For each stack, <i>Sweeping Blade\'s</i> <b>base</b> damage is increased by 25%, up to a 50% increase at maximum stacks.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Base Damage:',
        raw: '15 / 17.5 / 20 / 22.5 / 25',
        values: [15, 17.5, 20, 22.5, 25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 17.5 / 20 / 22.5 / 25',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Increased Base Damage:',
        raw: '30 / 35 / 40 / 45 / 50',
        values: [30, 35, 40, 45, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50',
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '90 / 105 / 120 / 135 / 150 (+ 20% bonus AD) (+ 60% AP)',
        values: [90, 105, 120, 135, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 105 / 120 / 135 / 150',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 20% bonus AD',
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
    ],
  },
  {
    description:
      '<i>Sweeping Blade</i> can be cast on the same target only once every few seconds.',
    leveling: [],
  },
  {
    description:
      '<i><b>Yasuo</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during Sweeping Blade.</i>',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Last Breath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Last Breath"><img alt="Last Breath" src="/wiki/images/Yasuo_Last_Breath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Yasuo/LoL">Last Breath</a></span></span> can be cast during the dash. If </i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Steel Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Steel Tempest"><img alt="Steel Tempest" src="/wiki/images/Yasuo_Steel_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Yasuo/LoL">Steel Tempest</a></span></span><i> has been buffered, </i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span><i> may also be cast during it. <sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Yasuo_Last_Breath.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yasuo</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the other side of a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> enemy champion <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="searches in a 1100 radius">nearest to the cursor</span>, instantly generating maximum <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span> while resetting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Steel Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Gathering Storm"><img alt="Gathering Storm" src="/wiki/images/Yasuo_Steel_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Yasuo/LoL">Gathering Storm</a></span></span></i> stacks.',
    leveling: [],
  },
  {
    description:
      'Upon arrival, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> all nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> enemy champions for 1 second, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them and slashing them with his sword over the duration, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> thereafter. Surrounding enemy champions that become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> during this time will also be affected by <i>Last Breath</i> through the remaining duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '200 / 350 / 500 (+ 150% bonus AD)',
        values: [200, 350, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 350 / 500',
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
    description:
      'For the next 15 seconds, <b>Yasuo\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> gain <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">50% <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Modifies bonus armor only"><b>bonus</b>-armor penetration</span></span></span>.',
    leveling: [],
  },
  {
    description:
      '<i>A nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> enemy champion is required to cast this ability. If <b>Yasuo</b> would blink inside the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> of an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> (excluding the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nexus obelisk"><a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk"><img alt="Nexus Obelisk.png" src="/wiki/images/Nexus_Obelisk.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk">Nexus Obelisk</a></span>), Last Breath will instead attempt to position him outside of it.</i>',
    leveling: [],
  },
];
export const Yasuo = { I, Q, W, E, R };
