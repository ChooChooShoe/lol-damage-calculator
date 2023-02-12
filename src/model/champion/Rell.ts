import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Rell';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Rell_Break_the_Mold.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Rell\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;" data-finish="16;" data-bot_values="8;8.47;8.94;9.41;9.88;10.35;10.82;11.29;11.76;12.24;12.71;13.18;13.65;14.12;14.59;15.06;15.53;16" data-top_values="">8 − 16 (based on level)</span></span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> before reducing the target\'s <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> by 10% for 4 seconds, refreshing on subsequent hits. Basic attacks against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> will refresh the duration for all nearby afflicted enemies.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Rell's basic attacks are empowered to deal 8 − 16 (based on level) bonus magic damage before reducing the target's  armor and  magic resistance by 10% for 4 seconds, refreshing on subsequent hits",
        damagetype: 'Magic',
        values: [
          8, 8.47, 8.94, 9.41, 9.88, 10.35, 10.82, 11.29, 11.76, 12.24, 12.71,
          13.18, 13.65, 14.12, 14.59, 15.06, 15.53, 16,
        ],
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'bonus_armor',
        unitsText:
          "bonus magic damage before reducing the target's  armor and  magic resistance by 10% for 4 seconds, refreshing on subsequent hits",
        pre: "Rell's basic attacks are empowered to deal 8 − 16",
        post: "bonus magic damage before reducing the target's  armor and  magic resistance by 10% for 4 seconds, refreshing on subsequent hits",
      },
    ],
  },
  {
    description:
      '<b>Rell</b> gains <span style="color:yellow; white-space:normal"><b>bonus</b> armor</span> and <span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span> equal to the sum resistances reduced from all afflicted enemies, and <i>Break the Mold\'s</i> <b>bonus</b> damage is increased equal to the sum resistances reduced from the target.',
    leveling: [],
  },
  {
    description:
      '<i>Break the Mold</i> will reduce the target\'s <span style="color:yellow; white-space:normal">armor</span> and <span style="color: #00FFFF; white-space:normal">magic resistance</span> by a minimum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="5;6;7;8;9;10;11;12" data-top_values="1;3;5;8;10;12;15;17">5 − 12 (based on level)</span>, or <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.5;1.25;2" data-top_values="1;2;13">0.<small>5</small> / 1.<small>25</small> / 2 (based on level)</span> versus <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: "Break the Mold will reduce the target's armor and magic resistance by a minimum of 5 − 12 (based on level), or 0",
        values: [
          5, 5.41, 5.82, 6.24, 6.65, 7.06, 7.47, 7.88, 8.29, 8.71, 9.12, 9.53,
          9.94, 10.35, 10.76, 11.18, 11.59, 12,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: ', or 0',
        pre: "Break the Mold will reduce the target's armor and magic resistance by a minimum of 5 − 12",
        post: ', or 0',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 / 1',
        values: [5, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '25 / 2 (based on level) versus  minions',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'versus  minions',
        pre: '25 / 2',
        post: 'versus  minions',
      },
    ],
  },
  {
    description:
      '<b>Rell\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack windup</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100-((0.42)+((0.39)-(0.42))/(times-1)*(x-1))/0.42*100" data-bot_values="0;0.42;0.84;1.26;1.68;2.1;2.52;2.94;3.36;3.78;4.2;4.62;5.04;5.46;5.88;6.3;6.72;7.14" data-top_values="" data-bot_key="%">0% − 7.<small>14</small>% (based on level)</span>.&nbsp;」</span><span class="flipText2">「&nbsp;to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="((0.42)+((0.39)-(0.42))/(times-1)*(x-1))/(0.55/0.55)*100" data-bot_values="42;41.824;41.647;41.471;41.294;41.118;40.941;40.765;40.588;40.412;40.235;40.059;39.882;39.706;39.529;39.353;39.176;39" data-top_values="" data-bot_key="%">42% − 39% (based on level)</span>.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '14% (based on level)',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '14%',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: ' 」「 to 42% − 39% (based on level)',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '」「 to 42% − 39%',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Rell_Shattering_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> thrusts her lance in the target direction that completely destroys damage-mitigating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> of enemies hit before dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, reduced to 50% against enemies beyond the first. The first enemy hit is also afflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Break the Mold" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Break_the_Mold" title="Break the Mold"><img alt="Break the Mold" src="/wiki/images/Rell_Break_the_Mold.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Break_the_Mold" title="Rell/LoL">Break the Mold</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
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
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '35 / 52.5 / 70 / 87.5 / 105 (+ 25% AP)',
        values: [35, 52.5, 70, 87.5, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 52.5 / 70 / 87.5 / 105',
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
    ],
  },
  {
    description:
      'If <b>Rell</b> is tethered with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Attract and Repel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Attract and Repel"><img alt="Attract and Repel" src="/wiki/images/Rell_Attract_and_Repel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Rell/LoL">Attract and Repel</a></span></span></i>, she and the bound ally <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Heal Per Champion Hit:',
        raw: '10 / 15 / 20 / 25 / 30 (+ 30% AP) (+ 4% of missing health)',
        healType: 'BonusHealth',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'of missing health',
            pre: '+ 4% of missing health',
          },
        ],
      },
    ],
  },
];
const W1: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> While <b>Rell</b> is <span class="template_sbc"><b>Mounted</b></span>, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="5;6;7;8;9;10;11;12;13;14;15" data-top_values="1;7;8;9;10;11;12;13;14;15;16" data-bot_key="%">5% − 15% (based on level)</span> <b>bonus</b> movement speed</span></span>, which is only <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="20% + (40% - 20%) / 17 * (level - 1)" data-bot_values="20;21.18;22.35;23.53;24.71;25.88;27.06;28.24;29.41;30.59;31.76;32.94;34.12;35.29;36.47;37.65;38.82;40" data-top_values="" data-bot_key="%">20% − 40% (based on level)</span> as effective for 3 seconds when she takes damage from non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and is removed for 4 seconds when she becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' While Rell is Mounted, she gains  5% − 15% (based on level) bonus movement speed, which is only 20% − 40% (based on level) as effective for 3 seconds when she takes damage from non- minions and is removed for 4 seconds when she becomes  immobilized or  polymorphed',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed, which is only 20% − 40%',
        pre: 'While Rell is Mounted, she gains  5% − 15%',
        post: 'bonus movement speed, which is only 20% − 40%',
      },
    ],
  },
  {
    img: '/wiki/images/Rell_Ferromancy-_Crash_Down.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> becomes <span class="template_sbc"><b>Dismounted</b></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location over the cast time, granting herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that lasts until destroyed or casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Mount Up" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Ferromancy: Mount Up"><img alt="Ferromancy: Mount Up" src="/wiki/images/Rell_Ferromancy-_Mount_Up.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Rell/LoL">Ferromancy: Mount Up</a></span></span></i>. Upon arrival, she deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 1 second. She will continue <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">sliding</a></span> forward another <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">300 units</span> over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>5</small> seconds</span>, though not through terrain, affecting further enemies along her path.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Shield Strength:',
        raw: '35 / 60 / 85 / 110 / 135 (+ 12% of maximum health)',
        healType: 'BonusHealth',
        values: [35, 60, 85, 110, 135],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 60 / 85 / 110 / 135',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'of maximum health',
            pre: '+ 12% of maximum health',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 60% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
        children: [
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
      'While <b>Rell</b> is <span class="template_sbc"><b>Dismounted</b></span>, she can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Mount Up" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Ferromancy: Mount Up"><img alt="Ferromancy: Mount Up" src="/wiki/images/Rell_Ferromancy-_Mount_Up.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Rell/LoL">Ferromancy: Mount Up</a></span></span></i>. Upon completing a <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> channel or respawning, <b>Rell</b> will automatically revert to <span class="template_sbc"><b>Mounted</b></span> form without casting the ability and reset <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Mount Up" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Ferromancy: Mount Up\'s"><img alt="Ferromancy: Mount Up\'s" src="/wiki/images/Rell_Ferromancy-_Mount_Up.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Rell/LoL">Ferromancy: Mount Up\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [],
  },
  {
    description:
      '<i>This ability can be cast only while Rell is <span class="template_sbc"><b>Mounted</b></span>. <b>Rell</b> can cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Attract and Repel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Attract and Repel"><img alt="Attract and Repel" src="/wiki/images/Rell_Attract_and_Repel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Rell/LoL">Attract and Repel</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Magnet Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Magnet_Storm" title="Magnet Storm"><img alt="Magnet Storm" src="/wiki/images/Rell_Magnet_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Magnet_Storm" title="Rell/LoL">Magnet Storm</a></span></span> during the dash, and is not considered to be dismounted until after the leap ends. Ferromancy: Crash Down will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W2: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> While <b>Rell</b> is <span class="template_sbc"><b>Dismounted</b></span>, she gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">10% <b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">10% <b>bonus</b> magic resistance</span></span>, but her <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> is modified to <span style="color: #F5EE99; white-space:normal">280</span>. She has a movement speed cap of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="290 + (110) / 17 * (level - 1)" data-bot_values="290;296.47;302.94;309.41;315.88;322.35;328.82;335.29;341.76;348.24;354.71;361.18;367.65;374.12;380.59;387.06;393.53;400" data-top_values="">290 − 400 (based on level)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' She has a movement speed cap of 290 − 400 (based on level)',
        values: [
          290, 296.47, 302.94, 309.41, 315.88, 322.35, 328.82, 335.29, 341.76,
          348.24, 354.71, 361.18, 367.65, 374.12, 380.59, 387.06, 393.53, 400,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: 'She has a movement speed cap of 290 − 400',
      },
    ],
  },
  {
    img: '/wiki/images/Rell_Ferromancy-_Mount_Up.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> becomes <span class="template_sbc"><b>Mounted</b></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">15% <b>bonus</b> movement speed</span></span> for 3.<small>5</small> seconds, increased while moving towards enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Movement Speed:',
        raw: '25 / 30 / 35 / 40 / 45%',
        values: [25, 30, 35, 40, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45%',
      },
    ],
  },
  {
    description:
      'During this time, <b>Rell</b> empowers her next basic attack to consume the <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> to have a 0.<small>2</small>-second cast time, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;100 <b>bonus</b> attack range</span> and cause her to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">charge</a></span> at the target\'s location. Upon arrival or collision, she deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> the target for 1 second, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flings</a></span> them 150 units over herself, though not through terrain.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '10 / 25 / 40 / 55 / 70 (+ 40% AP)',
        values: [10, 25, 40, 55, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 25 / 40 / 55 / 70',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'While <b>Rell</b> is <span class="template_sbc"><b>Mounted</b></span>, she can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Crash Down" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Crash_Down" title="Ferromancy: Crash Down"><img alt="Ferromancy: Crash Down" src="/wiki/images/Rell_Ferromancy-_Crash_Down.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Crash_Down" title="Rell/LoL">Ferromancy: Crash Down</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<i>Ferromancy: Mount Up <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Rell\'s</b> basic attack timer. This ability can be cast only while <b>Rell</b> is <span class="template_sbc"><b>Dismounted</b></span>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Rell</b> forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between her and the ally bound by <i>Attract and Repel</i>, and grants the ally <span style="color:yellow; white-space:normal">10% of her <b>total</b> armor</span> and <span style="color: #00FFFF; white-space:normal">10% of her <b>total</b> magic resistance</span> while they are nearby.',
    leveling: [],
  },
  {
    img: '/wiki/images/Rell_Attract_and_Repel.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> binds herself and the target allied champion nearest to the cursor with <i>Attract and Repel</i>. <b>Rell</b> can then recast <i>Attract and Repel</i> while the tether persists.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Rell</b> erupts the tether, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> enemies between and around both herself and the bound ally for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 30% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
    ],
  },
  {
    description:
      '<b>Rell</b> can <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">self-target</a> to dispel the current bind if she and her bound ally are not near enemy champions, and if she has not casted an <a href="/wiki/Champion_ability" title="Champion ability">ability</a> nor taken damage from or attacked enemy champions within the last 3 seconds. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.<br><i>Attract and Repel</i> will incur a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;2.<small>75</small>-second</span> cooldown with no cost if <b>Rell</b> binds to an ally and a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1-second</span> cooldown with no cost if she self-targets.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Rell_Magnet_Storm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> erupts with magnetic fury, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> nearby enemies <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="to a ring 225 units around Rell, but minimum 100 pull distance">inward</span>. She then creates a gravitational field around her for the next 2 seconds that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kinematics" class="mw-redirect" title="Kinematics">drags</a></span> them towards her over the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '15 / 25 / 35 (+ 13.75% AP)',
        values: [15, 25, 35],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 25 / 35',
        children: [
          {
            values: 13.75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 13.75% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '120 / 200 / 280 (+ 110% AP)',
        values: [120, 200, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 200 / 280',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 110% AP',
          },
        ],
      },
    ],
  },
];
export const Rell = { I, Q, W1, W2, E, R };
