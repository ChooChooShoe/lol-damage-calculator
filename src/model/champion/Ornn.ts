import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Ornn';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Ornn</b> increases his <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> and <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span> by 10% from all sources, further increased by 4% each time he upgrades a <i>Mythic</i> item into a <span class="template_sbc"><b>Masterwork</b></span> item.',
    leveling: [],
  },
  {
    img: '/wiki/images/Ornn_Living_Forge.png',
    description:
      '<span class="template_sbc"><b>Innate - Living Forge:</b></span> <b>Ornn</b> can purchase non-<a href="/wiki/Consumable_item" title="Consumable item">consumable</a> <a href="/wiki/Items" class="mw-redirect" title="Items">items</a> from anywhere on the field by forging them himself, and is also presented a <i>Forge Menu</i> with his recommended items to select to be forged. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">Forging</a></span> takes 4 seconds and the process is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> if <b>Ornn</b> takes damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, disabling <i>Living Forge</i> for a few seconds. <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="Gold Gold"><img alt="Gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">Gold</span></span> is only expended upon completing the <i>forge</i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Master Craftsman:</b></span> When <b>Ornn</b> reaches level 13, the <i><a href="/wiki/Item_group#Mythic" title="Item group">Mythic</a></i> item he owns or purchases is upgraded for free. Additionally, for each <a href="/wiki/Experience_(champion)" title="Experience (champion)">level</a> after 13 (levels 14, 15, 16 and 17, excluding 18), <b>Ornn</b> can upgrade one of an allied champion\'s <i>Mythic</i> item by selecting them within 600 range. Each <span class="template_sbc"><b>Masterwork</b></span> item has roughly <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1000 Gold"><img alt="1000 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1000</span></span>-worth of additional stats.\n',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: " Additionally, for each level after 13 (levels 14, 15, 16 and 17, excluding 18), Ornn can upgrade one of an allied champion's Mythic item by selecting them within 600 range",
        values: 1,
        user: 'player',
        units: 'total_ad',
        unitsText:
          ", Ornn can upgrade one of an allied champion's Mythic item by selecting them within 600 range",
        pre: 'Additionally, for each level after 13',
        post: ", Ornn can upgrade one of an allied champion's Mythic item by selecting them within 600 range",
        children: [
          {
            values: 1,
            user: 'none',
            units: '',
            unitsText: '14, 15, 16 and 17, excluding 18',
            pre: 'levels 14, 15, 16 and 17, excluding 18',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Temper:</b></span> <b>Ornn\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brittle"><a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control#Increasing the duration of Crowd Control"><img alt="Brittle icon.png" src="/wiki/images/Brittle_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control">Brittle</a></span> enemies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span> a short distance.',
    leveling: [],
  },
  {
    description:
      '<b>Ornn\'s</b> and allies\' <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effects against enemies afflicted by <i>Brittle</i> will consume the debuff to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Ornn\'s level" data-start="10;" data-finish="18;" data-bot_values="10;10.47;10.94;11.41;11.88;12.35;12.82;13.29;13.76;14.24;14.71;15.18;15.65;16.12;16.59;17.06;17.53;18" data-top_values="" data-bot_key="%">10% − 18% (based on <b>Ornn\'s</b> level)</span> of the target\'s <b>maximum</b> health</span>, capped at 250 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and last 30% longer (if applicable).',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "Ornn's and allies'  immobilizing effects against enemies afflicted by Brittle will consume the debuff to deal bonus magic damage equal to 10% − 18% (based on Ornn's level) of the target's maximum health, capped at 250 against  monsters, and last 30% longer (if applicable)",
        healType: 'OutgoingHeals',
        values: 1,
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ap',
        unitsText:
          "of the target's maximum health, capped at 250 against  monsters, and last 30% longer",
        pre: "Ornn's and allies'  immobilizing effects against enemies afflicted by Brittle will consume the debuff to deal bonus magic damage equal to 10% − 18%",
        post: "of the target's maximum health, capped at 250 against  monsters, and last 30% longer",
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on Ornn's level",
            pre: "based on Ornn's level",
          },
          {
            values: 0,
            user: 'player',
            units: 'total_ap',
            unitsText: 'if applicable',
            pre: 'if applicable',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Ornn_Volcanic_Rupture.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ornn</b> sends a fissure in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 40% for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 45 / 70 / 95 / 120 (+ 110% AD)',
        values: [20, 45, 70, 95, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 45 / 70 / 95 / 120',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 110% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'The fissure stops at maximum range or 200 units behind the first enemy champion struck. After 1.<small>125</small>-seconds, a magma pillar then erupts to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock aside</a></span> enemies, though not through terrain, and linger as impassible terrain for 4 seconds.',
    leveling: [],
  },
  {
    description:
      '<i>The pillar will not expire while <b>Ornn</b> is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ornn" data-ability="Searing Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ornn/LoL#Searing_Charge" title="charging"><img alt="charging" src="/wiki/images/Ornn_Searing_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ornn/LoL#Searing_Charge" title="Ornn/LoL">charging</a></span></span>.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Ornn_Bellows_Breath.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ornn</b> marches in the target direction over 0.<small>75</small> seconds, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>, and <b>reducing</b> his <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> by <span style="color: #F5EE99; white-space:normal">35%</span> for the duration.',
    leveling: [],
  },
  {
    description:
      'Over the march he belches fire over a cone in front of him, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>15</small> seconds to enemies hit. The final gout of flame will apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brittle"><a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control#Increasing the duration of Crowd Control"><img alt="Brittle icon.png" src="/wiki/images/Brittle_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control">Brittle</a></span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Total Magic Damage:',
        raw: "12 / 13 / 14 / 15 / 16% of target's maximum health",
        healType: 'OutgoingHeals',
        values: [12, 13, 14, 15, 16],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "12 / 13 / 14 / 15 / 16% of target's maximum health",
      },
      {
        effectType: 'Heal',
        name: 'Magic Damage Per Tick:',
        raw: "2.4 / 2.6 / 2.8 / 3 / 3.2% of target's maximum health",
        healType: 'OutgoingHeals',
        values: [2.4, 2.6, 2.8, 3, 3.2],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "2.4 / 2.6 / 2.8 / 3 / 3.2% of target's maximum health",
      },
    ],
  },
  {
    description:
      '<i>Bellows Breath</i> has a minimum damage threshold, which is also the damage dealt to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">Monsters</a></span> take modified damage as well.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Minimum/Minion Damage:',
        raw: '80 / 130 / 180 / 230 / 280',
        values: [80, 130, 180, 230, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 130 / 180 / 230 / 280',
      },
      {
        effectType: 'Unique',
        name: 'Minimum/Minion Damage Per Tick:',
        raw: '16 / 26 / 36 / 46 / 56',
        values: [16, 26, 36, 46, 56],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '16 / 26 / 36 / 46 / 56',
      },
      {
        effectType: 'Unique',
        name: 'Total Monster Damage:',
        raw: '155 / 180 / 205 / 230 / 255',
        values: [155, 180, 205, 230, 255],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '155 / 180 / 205 / 230 / 255',
      },
      {
        effectType: 'Unique',
        name: 'Monster Damage Per Tick:',
        raw: '31 / 36 / 41 / 46 / 51',
        values: [31, 36, 41, 46, 51],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '31 / 36 / 41 / 46 / 51',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Ornn_Searing_Charge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ornn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">charges</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through and stopping upon colliding with terrain.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '80 / 125 / 170 / 215 / 260 (+ 40% bonus armor) (+ 40% bonus magic resistance)',
        values: [80, 125, 170, 215, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 125 / 170 / 215 / 260',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'bonus armor',
            pre: '+ 40% bonus armor',
          },
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'bonus magic resistance',
            pre: '+ 40% bonus magic resistance',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <b>Ornn</b> collides with terrain during the charge, he creates a shockwave that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> nearby enemies for 1.<small>25</small> seconds and deals the same damage if they were not already hit by the charge.',
    leveling: [],
  },
  {
    description:
      'The shockwave destructs the pillar formed by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ornn" data-ability="Volcanic Rupture" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ornn/LoL#Volcanic_Rupture" title="Volcanic Rupture"><img alt="Volcanic Rupture" src="/wiki/images/Ornn_Volcanic_Rupture.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ornn/LoL#Volcanic_Rupture" title="Ornn/LoL">Volcanic Rupture</a></span></span></i> and partially destroys <a href="/wiki/Terrain" title="Terrain">terrain</a> created by enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Ornn_Call_of_the_Forge_God.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ornn</b> sounds his horn, summoning a lava elemental at maximum range from the target direction that stampedes towards his casting position at increasing speed. The elemental deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '125 / 175 / 225 (+ 20% AP)',
        values: [125, 175, 225],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 175 / 225',
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
        name: 'Slow:',
        raw: '40 / 50 / 60%',
        values: [40, 50, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60%',
      },
    ],
  },
  {
    description:
      '<i>Call of the Forge God</i> can be recast after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Includes the cast time">1.<small>25</small></span> seconds while the elemental is active.',
    leveling: [],
  },
  {
    img: '/wiki/images/Ornn_Call_of_the_Forge_God_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Ornn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, though not through terrain. If he collides with the elemental, he sends it stampeding in the same direction. The elemental deals the same damage to enemies it passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1 second, reduced to 0.<small>5</small> seconds after the first enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '250 / 350 / 450 (+ 40% AP)',
        values: [250, 350, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '250 / 350 / 450',
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
      'Each pass applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brittle"><a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control#Increasing the duration of Crowd Control"><img alt="Brittle icon.png" src="/wiki/images/Brittle_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control">Brittle</a></span> to targets for 3 seconds and can affect enemies only once. The elemental briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its trajectory as it travels.',
    leveling: [],
  },
];
export const Ornn = { I, Q, W, E, R };
