import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Orianna';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Orianna_Clockwork_Windup.png',
    description:
      '<span class="template_sbc"><b>Innate - The Ball:</b></span> <b>Orianna</b> is accompanied by <i>The Ball</i>, which she commands with her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>. <i>The Ball</i> incurs a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>15</small>-second</span> global cooldown on all of her abilities between casts. Additionally, <i>The Ball</i> attaches to <b>Orianna</b> if she is near it, and snaps back to her if she moves too far away from it, which incurs a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small>-second</span> global cooldown on all of her abilities.',
    leveling: [],
  },
  {
    img: '/wiki/images/Orianna_Clockwork_Winding.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Orianna\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Clockwork Winding</i> for 4 seconds, refreshing on subsequent attacks and stacking up to 2 times. All stacks are lost when attacking a new enemy.<br><br>\n<span class="template_sbc"><b>Clockwork Winding:</b></span> <b>Orianna\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="10;" data-finish="50;" data-bot_values="10;12.35;14.71;17.06;19.41;21.76;24.12;26.47;28.82;31.18;33.53;35.88;38.24;40.59;42.94;45.29;47.65;50" data-top_values="">10 − 50 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, increased by<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;20%&nbsp;」</span><span class="flipText2">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="2;" data-finish="10;" data-bot_values="2;2.47;2.94;3.41;3.88;4.35;4.82;5.29;5.76;6.24;6.71;7.18;7.65;8.12;8.59;9.06;9.53;10" data-top_values="">2 − 10 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% AP)</span>&nbsp;」</span></span>per stack, up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="14;" data-finish="70;" data-bot_values="14;17.29;20.59;23.88;27.18;30.47;33.76;37.06;40.35;43.65;46.94;50.24;53.53;56.82;60.12;63.41;66.71;70" data-top_values="">14 − 70 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;21% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>total bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 3:',
        raw: " Orianna's basic attacks are empowered to deal 10 − 50 (based on level) (+ 15% AP) bonus magic damage  on-hit, increased by「 20% 」「 2 − 10 (based on level) (+ 3% AP) 」per stack, up to 14 − 70 (based on level) (+ 21% AP) total bonus magic damage",
        min: 0,
        max: 10,
        description:
          " Orianna's basic attacks are empowered to deal 10 − 50 (based on level) (+ 15% AP) bonus magic damage  on-hit, increased by「 20% 」「 2 − 10 (based on level) (+ 3% AP) 」per stack, up to 14 − 70 (based on level) (+ 21% AP) total bonus magic damage",
        values: [
          10, 12.35, 14.71, 17.06, 19.41, 21.76, 24.12, 26.47, 28.82, 31.18,
          33.53, 35.88, 38.24, 40.59, 42.94, 45.29, 47.65, 50,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage  on-hit, increased by「 20% 」「 2 − 10',
        pre: "Orianna's basic attacks are empowered to deal 10 − 50",
        post: 'bonus magic damage  on-hit, increased by「 20% 」「 2 − 10',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
          {
            values: 3,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 3% AP',
          },
          {
            values: 21,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 21% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>See <a href="/wiki/Orianna/LoL#Pets" title="Orianna/LoL">Pets</a> for more details about The Ball.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Orianna_Command-_Attack.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Orianna</b> commands <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span></i> to fly to the target location and remain there, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through and nearby enemies upon arrival, reduced to 70% against those hit beyond the first.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 50% AP)',
        values: [60, 90, 120, 150, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120 / 150 / 180',
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
        raw: '42 / 63 / 84 / 105 / 126 (+ 35% AP)',
        values: [42, 63, 84, 105, 126],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '42 / 63 / 84 / 105 / 126',
        children: [
          {
            values: 35,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 35% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Orianna_Command-_Dissonance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Orianna</b> commands <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span></i> to emit an electric pulse that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 105 / 150 / 195 / 240 (+ 70% AP)',
        values: [60, 105, 150, 195, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 105 / 150 / 195 / 240',
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
      'The pulse leaves behind an electric field that last 3 seconds, granting <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> to <b>Orianna</b> and her allies when they move within. Enemies that move within the field are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by the same amount, decaying over 2 seconds after leaving.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Movement Speed Modifier:',
        raw: '30 / 35 / 40 / 45 / 50%',
        values: [30, 35, 40, 45, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span></i> grants <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> to the unit it is attached to.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Resistances:',
        raw: '6 / 12 / 18 / 24 / 30',
        values: [6, 12, 18, 24, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 12 / 18 / 24 / 30',
      },
    ],
  },
  {
    img: '/wiki/images/Orianna_Command-_Protect.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Orianna</b> commands <i>The Ball</i> to fly to herself or the target allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and attach itself to the target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through and granting the target a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds upon arrival.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 30% AP)',
        values: [60, 90, 120, 150, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120 / 150 / 180',
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
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '55 / 90 / 125 / 160 / 195 (+ 45% AP)',
        values: [55, 90, 125, 160, 195],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 90 / 125 / 160 / 195',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Orianna_Command-_Shockwave.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Orianna</b> commands <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span></i> to unleash a shockwave that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> them over <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="proximity to ball" data-displayformula="Non-linear." data-bot_values="325;350;700" data-top_values="415;250;0">325 − 700 (based on proximity to ball)</span> units, though not through terrain.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '75 seconds, and  pulling them over 325 − 700 (based on proximity to ball) units, though not through terrain',
        values: [75, 700],
        user: 'none',
        units: '',
        unitsText: 'units, though not through terrain',
        pre: '75 seconds, and  pulling them over 325 − 700',
        post: 'units, though not through terrain',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on proximity to ball',
            pre: 'based on proximity to ball',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '250 / 350 / 450 (+ 90% AP)',
        values: [250, 350, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '250 / 350 / 450',
        children: [
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
    ],
  },
];
export const Orianna = { I, Q, W, E, R };
