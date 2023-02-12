import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Sejuani';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Sejuani_Fury_of_the_North.png',
    description:
      '<span class="template_sbc"><b>Innate - Icebreaker:</b></span> Enemies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> by <b>Sejuani</b> are marked <i>Frozen</i> for the disable\'s duration. <b>Sejuani\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <a href="/wiki/Champion_ability" title="Champion ability">ability</a> against a <i>Frozen</i> enemy will consume the mark to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal">10% of their <b>maximum</b> health</span>, capped at 300 against epic monsters.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Frost Armor:</b></span> <b>Sejuani</b> gains <i>Frost Armor</i>, which lingers for 3 seconds after taking damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. She restores it after <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="12;" data-finish="6;" data-bot_values="12;11.65;11.29;10.94;10.59;10.24;9.88;9.53;9.18;8.82;8.47;8.12;7.76;7.41;7.06;6.71;6.35;6" data-top_values="">12 − 6 (based on level)</span> seconds without taking damage from them.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' She restores it after 12 − 6 (based on level) seconds without taking damage from them',
        damagetype: 'None',
        values: [
          12, 11.65, 11.29, 10.94, 10.59, 10.24, 9.88, 9.53, 9.18, 8.82, 8.47,
          8.12, 7.76, 7.41, 7.06, 6.71, 6.35, 6,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds without taking damage from them',
        pre: 'She restores it after 12 − 6',
        post: 'seconds without taking damage from them',
      },
    ],
  },
  {
    img: '/wiki/images/Sejuani_Frost_Armor.png',
    description:
      '<span class="template_sbc"><b>Frost Armor:</b></span> <b>Sejuani</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple-immune"><a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist#Cripple Immunity"><img alt="Cripple immune.png" src="/wiki/images/Cripple_immune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist">cripple immunity</a></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">10 (+&nbsp;50% <b>bonus</b> armor) <b>bonus</b> armor</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">10 (+&nbsp;50% <b>bonus</b> magic resistance) <b>bonus</b> magic resistance</span></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Sejuani gains  slow immunity,  cripple immunity,  10 (+ 50% bonus armor) bonus armor, and  10 (+ 50% bonus magic resistance) bonus magic resistance',
        increasedStat: 'bonus_armor',
        values: 1,
        user: 'player',
        units: '',
        unitsText: 'bonus armor, and  10',
        pre: 'Sejuani gains  slow immunity,  cripple immunity,  10',
        post: 'bonus armor, and  10',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'bonus armor',
            pre: '+ 50% bonus armor',
          },
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'bonus magic resistance',
            pre: '+ 50% bonus magic resistance',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Sejuani_Arctic_Assault.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bristle" title="Bristle"><img alt="Bristle" src="/wiki/images/BristleSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bristle" title="Bristle">Bristle</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location until he collides with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '90 / 140 / 190 / 240 / 290 (+ 60% AP)',
        values: [90, 140, 190, 240, 290],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 140 / 190 / 240 / 290',
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
      '<i><b>Sejuani</b> can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Arctic Assault will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Sejuani_Winter%27s_Wrath.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> After 0.<small>25</small> seconds into the cast time, <b>Sejuani</b> swings her flail in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: '20 / 25 / 30 / 35 / 40 (+ 20% AP) (+ 2% of her maximum health)',
        healType: 'BonusHealth',
        values: [20, 25, 30, 35, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'of her maximum health',
            pre: '+ 2% of her maximum health',
          },
        ],
      },
    ],
  },
  {
    description:
      'After the cast time, <b>Sejuani</b> lashes out with her flail in a line in the same direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 75% for 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: '30 / 70 / 110 / 150 / 190 (+ 60% AP) (+ 6% of her maximum health)',
        healType: 'BonusHealth',
        values: [30, 70, 110, 150, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 70 / 110 / 150 / 190',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'of her maximum health',
            pre: '+ 6% of her maximum health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Physical Damage:',
        raw: '50 / 95 / 140 / 185 / 230 (+ 80% AP) (+ 8% of her maximum health)',
        healType: 'BonusHealth',
        values: [50, 95, 140, 185, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 95 / 140 / 185 / 230',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'of her maximum health',
            pre: '+ 8% of her maximum health',
          },
        ],
      },
    ],
  },
  {
    description:
      "<i><b>Sejuani</b> can move during Winter's Wrath's cast time.</i>",
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Sejuani_Frost_Stack.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-ability="Winter\'s Wrath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL#Winter\'s_Wrath" title="Winter\'s Wrath"><img alt="Winter\'s Wrath" src="/wiki/images/Sejuani_Winter%27s_Wrath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL#Winter\'s_Wrath" title="Sejuani/LoL">Winter\'s Wrath</a></span></span> and both <b>Sejuani\'s</b> and nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> champions\' attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> apply <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Frost</i> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, medium or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-ability="Fury of the North" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL#Fury_of_the_North" title="Frozen"><img alt="Frozen" src="/wiki/images/Sejuani_Fury_of_the_North.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL#Fury_of_the_North" title="Sejuani/LoL">Frozen</a></span></span>. Enemies hit by <i>Permafrost</i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-ability="Glacial Prison" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL#Glacial_Prison" title="Glacial Prison\'s"><img alt="Glacial Prison\'s" src="/wiki/images/Sejuani_Glacial_Prison.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL#Glacial_Prison" title="Sejuani/LoL">Glacial Prison\'s</a></span></span></i> bola have all of their <i>Frost</i> stacks consumed. Enemy champions cannot be affected by <i>Frost</i> for 10 seconds after having it consumed. <br><br><b>Sejuani</b> can cast <i>Permafrost</i> against an enemy with 4 stacks.',
    leveling: [],
  },
  {
    img: '/wiki/images/Sejuani_Permafrost.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sejuani</b> hurls a trap at the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy with 4 stacks of <i>Frost</i> closest to the cursor, which deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocks them down</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '55 / 105 / 155 / 205 / 255 (+ 60% AP)',
        values: [55, 105, 155, 205, 255],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 105 / 155 / 205 / 255',
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
      '<i>Permafrost <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Sejuani\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Sejuani_Glacial_Prison.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sejuani</b> throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '125 / 150 / 175 (+ 40% AP)',
        values: [125, 150, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 150 / 175',
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
      'If the bola travels over 400 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> for 1.<small>5</small> seconds instead. For the same duration, a frost storm is created that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within by 30% and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area in a smaller radius.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '200 / 300 / 400 (+ 80% AP)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
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
      'Afterwards, the storm shatters to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them by 80% for 1 second, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 300 / 400 (+ 80% AP)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
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
      "The enemy hit by the bola is not affected by the storm's effects.",
    leveling: [],
  },
];
export const Sejuani = { I, Q, W, E, R };
