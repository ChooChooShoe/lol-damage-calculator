import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Wukong';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Wukong</b> or his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone"><img alt="clone" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone</a></span></span></i> damage an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, he generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Strength of Stone</i> for 5 seconds, refreshing on subsequent hits and stacking up to 10 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Wukong_Stone_Skin.png',
    description:
      '<span class="template_sbc"><b>Strength of Stone:</b></span> <b>Wukong</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="9;" data-bot_values="5;5.24;5.47;5.71;5.94;6.18;6.41;6.65;6.88;7.12;7.35;7.59;7.82;8.06;8.29;8.53;8.76;9" data-top_values="">5 − 9 (based on level)</span> <b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health regeneration</span></span> equal to <span style="color: #1F995C; white-space:normal">0.<small>35</small>% of his <b>maximum</b> health</span>, increased by 50% for each stack up to a maximum of <span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="54;" data-bot_values="30;31.41;32.82;34.24;35.65;37.06;38.47;39.88;41.29;42.71;44.12;45.53;46.94;48.35;49.76;51.18;52.59;54" data-top_values="">30 − 54 (based on level)</span> <b>bonus</b> armor</span> and <span style="color: #1F995C; white-space:normal">2.<small>1</small>% <b>maximum</b> health</span> regeneration.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Wukong gains  5 − 9 (based on level) bonus armor and  bonus health regeneration equal to 0',
        healType: 'HealthRegen',
        values: [
          5, 5.24, 5.47, 5.71, 5.94, 6.18, 6.41, 6.65, 6.88, 7.12, 7.35, 7.59,
          7.82, 8.06, 8.29, 8.53, 8.76, 9,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_armor',
        unitsText: 'bonus armor and  bonus health regeneration equal to 0',
        pre: 'Wukong gains  5 − 9',
        post: 'bonus armor and  bonus health regeneration equal to 0',
      },
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: '35% of his maximum health, increased by 50% for each stack up to a maximum of 30 − 54 (based on level) bonus armor and 2',
        healType: 'BonusHealth',
        values: [
          30, 31.41, 32.82, 34.24, 35.65, 37.06, 38.47, 39.88, 41.29, 42.71,
          44.12, 45.53, 46.94, 48.35, 49.76, 51.18, 52.59, 54,
        ],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_armor',
        unitsText: 'bonus armor and 2',
        pre: '35% of his maximum health, increased by 50% for each stack up to a maximum of 30 − 54',
        post: 'bonus armor and 2',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Wukong_Crushing_Blow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Wukong</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 5 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, and inflict <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Range:',
        raw: '75 / 100 / 125 / 150 / 175',
        values: [75, 100, 125, 150, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 100 / 125 / 150 / 175',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '20 / 45 / 70 / 95 / 120 (+ 45% bonus AD)',
        values: [20, 45, 70, 95, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 45 / 70 / 95 / 120',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 45% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Armor Reduction:',
        raw: "10 / 15 / 20 / 25 / 30% of target's armor",
        values: [10, 15, 20, 25, 30],
        valuesIsPercent: true,
        user: 'target',
        units: 'total_armor',
        unitsText: "of target's armor",
        pre: "10 / 15 / 20 / 25 / 30% of target's armor",
      },
    ],
  },
  {
    description:
      '<i>Crushing Blow\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 0.<small>5</small> seconds whenever <b>Wukong</b> or his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone"><img alt="clone" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone</a></span></span></i> damage an enemy.',
    leveling: [],
  },
  {
    description:
      '<i>Crushing Blow <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Wukong\'s</b> and his <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone\'s"><img alt="clone\'s" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone\'s</a></span></span> basic attack timer. Other abilities can be used during the attack\'s animation.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Wukong_Warrior_Trickster.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Wukong</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> for 1 second and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, leaving behind a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of himself at his casting position for 3.<small>25</small> seconds.',
    leveling: [],
  },
  {
    description:
      'The clone is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to allies and can basic attack autonomously, prioritizing the last enemy <b>Wukong</b> damaged. It can also gain the effects of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Crushing Blow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Crushing Blow"><img alt="Crushing Blow" src="/wiki/images/Wukong_Crushing_Blow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Wukong/LoL">Crushing Blow</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Nimbus Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Nimbus Strike\'s"><img alt="Nimbus Strike\'s" src="/wiki/images/Wukong_Nimbus_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Wukong/LoL">Nimbus Strike\'s</a></span></span></i> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span>, and casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Cyclone" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Cyclone" title="Cyclone"><img alt="Cyclone" src="/wiki/images/Wukong_Cyclone.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Cyclone" title="Wukong/LoL">Cyclone</a></span></span></i> whenever <b>Wukong</b> does.',
    leveling: [],
  },
  {
    description: 'The clone deals reduced outgoing damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Clone Outgoing Damage:',
        raw: '35 / 40 / 45 / 50 / 55%',
        values: [35, 40, 45, 50, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 40 / 45 / 50 / 55%',
      },
    ],
  },
  {
    description:
      '<i>See <a href="/wiki/Wukong/LoL#Pets" title="Wukong/LoL">Pets</a> for more details about <b>Wukong\'s</b> clone. <b>Wukong</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Warrior Trickster will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Wukong_Nimbus_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Wukong</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location and sends out <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> <i>clones</i> to strike up to two additional enemies near the target\'s location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. <i>Nimbus Strike</i> deals 120% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 100% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
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
      {
        effectType: 'Unique',
        name: 'Monster Damage:',
        raw: '96 / 132 / 168 / 204 / 240 (+ 120% AP)',
        values: [96, 132, 168, 204, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '96 / 132 / 168 / 204 / 240',
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
      'Upon arrival, <b>Wukong</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '40 / 45 / 50 / 55 / 60%',
        values: [40, 45, 50, 55, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50 / 55 / 60%',
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Crushing Blow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Crushing Blow"><img alt="Crushing Blow" src="/wiki/images/Wukong_Crushing_Blow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Crushing_Blow" title="Wukong/LoL">Crushing Blow</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Wukong_Cyclone.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Wukong</b> spins his staff around for up to 2 seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span>. The staff deals <span style="color: #FF8C34; white-space:normal">physical damage</span> every 0.<small>25</small> seconds to enemies hit, and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them up</a></span> once for 0.<small>6</small> seconds. <i>Cyclone</i> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> enemies who were already hit by either <b>Wukong</b> or his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="clone"><img alt="clone" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">clone</a></span></span></i> within the same cast.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage Per Tick:',
        raw: "1 / 1.5 / 2% of target's maximum health (+ 34.375% AD)",
        healType: 'OutgoingHeals',
        values: [1, 1.5, 2],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "1 / 1.5 / 2% of target's maximum health",
        children: [
          {
            values: 34.375,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 34.375% AD',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Physical Damage:',
        raw: "8 / 12 / 16% of target's maximum health (+ 275% AD)",
        healType: 'OutgoingHeals',
        values: [8, 12, 16],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "8 / 12 / 16% of target's maximum health",
        children: [
          {
            values: 275,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 275% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Cyclone</i> can be recast after 0.<small>5</small> seconds within the duration, and does so automatically afterwards or by casting another <a href="/wiki/Champion_ability" title="Champion ability">ability</a>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Wukong_Cyclone_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Wukong</b> ends Cyclone. After 1 second, he can cast <i>Cyclone</i> a second time within 8 seconds of the first cast.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Maximum Total Physical Damage:',
        raw: "16 / 24 / 32% of target's maximum health (+ 550% AD)",
        healType: 'OutgoingHeals',
        values: [16, 24, 32],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "16 / 24 / 32% of target's maximum health",
        children: [
          {
            values: 550,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 550% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Nimbus Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Nimbus Strike\'s"><img alt="Nimbus Strike\'s" src="/wiki/images/Wukong_Nimbus_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Nimbus_Strike" title="Wukong/LoL">Nimbus Strike\'s</a></span></span></i> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> duration is continuously refreshed while spinning.',
    leveling: [],
  },
  {
    description:
      '<i>Cyclone\'s</i> damage is capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="200;400;600" data-top_values="6;11;16">200 / 400 / 600 (based on level)</span> per second against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "Cyclone's damage is capped at 200 / 400 / 600 (based on level) per second against  monsters",
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'per second against  monsters',
        pre: "Cyclone's damage is capped at 200 / 400 / 600",
        post: 'per second against  monsters',
      },
    ],
  },
];
export const Wukong = { I, Q, W, E, R };
