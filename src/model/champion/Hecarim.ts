import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Hecarim';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Hecarim_Warpath.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Hecarim</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> equal to <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="12%+2% every 3 levels starting from level 3" data-bot_values="12;14;16;18;20;22;24" data-top_values="1;3;6;9;12;15;18" data-bot_key="%">12% − 24% (based on level)</span> of his <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Hecarim gains  bonus attack damage equal to 12% − 24% (based on level) of his  bonus movement speed',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'of his  bonus movement speed',
        pre: 'Hecarim gains  bonus attack damage equal to 12% − 24%',
        post: 'of his  bonus movement speed',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Hecarim_Rampage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Hecarim</b> cleaves his glaive around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, reduced to 60% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '60 / 85 / 110 / 135 / 160 (+ 90% bonus AD)',
        values: [60, 85, 110, 135, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 85 / 110 / 135 / 160',
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
      {
        effectType: 'Unique',
        name: 'Minion damage:',
        raw: '36 / 51 / 66 / 81 / 96 (+ 54% bonus AD)',
        values: [36, 51, 66, 81, 96],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '36 / 51 / 66 / 81 / 96',
        children: [
          {
            values: 54,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 54% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If this damages an enemy, <b>Hecarim</b> gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Rampage</i> for 8 seconds,  refreshing on subsequent damage and stacking up to 3 times. Each stack increases <i>Rampage\'s</i> damage by 3% <span style="color:orange; white-space:normal">(+&nbsp;4% per 100 <b>bonus</b> AD)</span> and reduces its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>base</b> cooldown</span> by 0.<small>75</small> seconds, up to a 9% <span style="color:orange; white-space:normal">(+&nbsp;12% per 100 <b>bonus</b> AD)</span> damage increase and a 2.<small>25</small>-second reduction of the <b>base</b> cooldown at maximum stacks. Stacks expire by one every 1 second when the duration ends.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 2:',
        raw: " Each stack increases Rampage's damage by 3% (+ 4% per 100 bonus AD) and reduces its  base cooldown by 0",
        min: 0,
        max: 10,
        description:
          " Each stack increases Rampage's damage by 3% (+ 4% per 100 bonus AD) and reduces its  base cooldown by 0",
        values: 3,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'and reduces its  base cooldown by 0',
        pre: "Each stack increases Rampage's damage by 3%",
        post: 'and reduces its  base cooldown by 0',
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 4% per 100 bonus AD',
          },
        ],
      },
      {
        effectType: 'Damage',
        name: 'Line 3:',
        raw: '75 seconds, up to a 9% (+ 12% per 100 bonus AD) damage increase and a 2',
        damagetype: 'None',
        values: 75,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'damage increase and a 2',
        pre: '75 seconds, up to a 9%',
        post: 'damage increase and a 2',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 12% per 100 bonus AD',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Hecarim_Spirit_of_Dread.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Hecarim</b> surrounds himself with the Spirit of Dread for 4 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every second to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '20 / 30 / 40 / 50 / 60 (+ 20% AP)',
        values: [20, 30, 40, 50, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'While active, <b>Hecarim</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> for 25% <span style="color:orange; white-space:normal">(+&nbsp;2% of 100 <b>bonus</b> AD)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt to enemies within the area, halved to 12.<small>5</small>% <span style="color:orange; white-space:normal">(+&nbsp;1% of 100 <b>bonus</b> AD)</span> for damage dealt by allies. The healing is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: 'While active, Hecarim gains  bonus armor and  bonus magic resistance and is  healed for 25% (+ 2% of 100 bonus AD) of the post-mitigation damage dealt to enemies within the area, halved to 12',
        healType: 'BonusHealth',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText:
          'of the post-mitigation damage dealt to enemies within the area, halved to 12',
        pre: 'While active, Hecarim gains  bonus armor and  bonus magic resistance and is  healed for 25%',
        post: 'of the post-mitigation damage dealt to enemies within the area, halved to 12',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'of 100 bonus AD',
            pre: '+ 2% of 100 bonus AD',
          },
        ],
      },
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: '5% (+ 1% of 100 bonus AD) for damage dealt by allies',
        damagetype: 'None',
        values: 5,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'for damage dealt by allies',
        pre: '5%',
        post: 'for damage dealt by allies',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'of 100 bonus AD',
            pre: '+ 1% of 100 bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Resistances:',
        raw: '15 / 20 / 25 / 30 / 35',
        values: [15, 20, 25, 30, 35],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35',
      },
      {
        effectType: 'Unique',
        name: 'Capped Healing:',
        raw: '120 / 150 / 180 / 210 / 240',
        values: [120, 150, 180, 210, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 150 / 180 / 210 / 240',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Hecarim_Devastating_Charge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Hecarim</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="time active" data-displayformula="3.3% \'\'\'total bonus\'\'\' movement speed every 0.25 seconds. \'\'This is capped at 3 seconds.\'\'" data-bot_values="25;28.33;31.67;35;38.33;41.67;45;48.33;51.67;55;58.33;61.67;65" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3" data-bot_key="%">25% − 65% (based on time active)</span> <b>bonus total</b> movement speed</span></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Hecarim becomes  ghosted and gains  25% − 65% (based on time active) bonus total movement speed for 4 seconds',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'bonus total movement speed for 4 seconds',
        pre: 'Hecarim becomes  ghosted and gains  25% − 65%',
        post: 'bonus total movement speed for 4 seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on time active',
            pre: 'based on time active',
          },
        ],
      },
    ],
  },
  {
    description:
      'During this time, <b>Hecarim</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to gain <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="50;0" data-finish="250;1200" data-bot_values="50;75;100;125;150;175;200;225;250" data-top_values="0;150;300;450;600;750;900;1050;1200">50 − 250 (based on distance traveled)</span> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and cause him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> in the target\'s direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 1 second. If the target remains nearby during the dash, the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> ends prematurely and <b>Hecarim</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="150;0" data-finish="350;1200" data-bot_values="150;175;200;225;250;275;300;325;350" data-top_values="0;150;300;450;600;750;900;1050;1200">150 − 350 (based on distance traveled)</span> units, though not through terrain, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 0.<small>25</small> seconds, and deals them <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="0;0" data-finish="100;1200" data-bot_values="0;12.5;25;37.5;50;62.5;75;87.5;100" data-top_values="0;150;300;450;600;750;900;1050;1200" data-bot_key="%">0% − 100% (based on distance traveled)</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "During this time, Hecarim empowers his next basic attack to gain 50 − 250 (based on distance traveled)  bonus range and cause him to  dash in the target's direction,  revealing them for 1 second",
        values: [5, 250],
        user: 'none',
        units: '',
        unitsText:
          "bonus range and cause him to  dash in the target's direction,  revealing them for 1 second",
        pre: 'During this time, Hecarim empowers his next basic attack to gain 50 − 250',
        post: "bonus range and cause him to  dash in the target's direction,  revealing them for 1 second",
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance traveled',
            pre: 'based on distance traveled',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' If the target remains nearby during the dash, the  ghosting and bonus movement speed ends prematurely and Hecarim  knocks them back 150 − 350 (based on distance traveled) units, though not through terrain,  stuns them for 0',
        values: [1, 350],
        user: 'none',
        units: '',
        unitsText: 'units, though not through terrain,  stuns them for 0',
        pre: 'If the target remains nearby during the dash, the  ghosting and bonus movement speed ends prematurely and Hecarim  knocks them back 150 − 350',
        post: 'units, though not through terrain,  stuns them for 0',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance traveled',
            pre: 'based on distance traveled',
          },
        ],
      },
      {
        effectType: 'Damage',
        name: 'Line 3:',
        raw: '25 seconds, and deals them modified physical damage, increased by 0% − 100% (based on distance traveled)',
        damagetype: 'Physical',
        values: 25,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText:
          '− 100seconds, and deals them modified physical damage, increased by 0',
        pre: '25 seconds, and deals them modified physical damage, increased by 0% − 100%',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance traveled',
            pre: 'based on distance traveled',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '30 / 45 / 60 / 75 / 90 (+ 50% bonus AD)',
        values: [30, 45, 60, 75, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60 / 75 / 90',
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
        name: 'Maximum Physical Damage:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 100% bonus AD)',
        values: [60, 90, 120, 150, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120 / 150 / 180',
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
    description:
      '<i>Devastating Charge</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    leveling: [],
  },
  {
    description:
      '<i>Devastating Charge <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Hecarim\'s</b> basic attack timer. <b>Hecarim</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Devastating Charge\'s duration is paused during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-ability="Onslaught of Shadows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL#Onslaught_of_Shadows" title="Onslaught of Shadows"><img alt="Onslaught of Shadows" src="/wiki/images/Hecarim_Onslaught_of_Shadows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL#Onslaught_of_Shadows" title="Hecarim/LoL">Onslaught of Shadows</a></span></span>.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Hecarim_Onslaught_of_Shadows.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Hecarim</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location and summons 5 spectral riders <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="see notes">in an arrow formation</span> that charge alongside him in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies in their path and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic damage:',
        raw: '150 / 250 / 350 (+ 100% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
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
  {
    description:
      'Upon arrival, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> nearby enemies for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="0.75;0" data-finish="1.5;1000" data-bot_values="0.75;0.83;0.9;0.98;1.05;1.13;1.2;1.27;1.35;1.43;1.5" data-top_values="0;100;200;300;400;500;600;700;800;900;1000">0.<small>75</small> − 1.<small>5</small> (based on distance traveled)</span> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them, ramping to 99% over the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '75 − 1',
        values: [75, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 − 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '5 (based on distance traveled) seconds and  slows them, ramping to 99% over the duration',
        values: 5,
        user: 'none',
        units: '',
        unitsText: 'seconds and  slows them, ramping to 99% over the duration',
        pre: '5',
        post: 'seconds and  slows them, ramping to 99% over the duration',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance traveled',
            pre: 'based on distance traveled',
          },
        ],
      },
    ],
  },
  {
    description:
      "<i>The wave of spectral riders travels independently of <b>Hecarim</b> and will always charge at the same distance. The slow's strength cannot be reduced and is increased based on how far away the affected units are from <b>Hecarim</b>. Onslaught of Shadows will cast at max range if cast beyond that.</i>",
    leveling: [],
  },
];
export const Hecarim = { I, Q, W, E, R };
