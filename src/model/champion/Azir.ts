import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Azir';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> outside the enemy team\'s base is destroyed, a marker is placed above its ruins which can be targeted by <b>Azir</b>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Azir_Shurima%27s_Legacy.png',
    description:
      '<span class="template_sbc"><b>Innate - Disc of the Sun:</b></span> <b>Azir</b> can select a marker to construct the <span style="color: #56C456; white-space:normal">Sun Disc</span> above the ruins after a 0.<small>5</small>-second <a href="/wiki/Cast_time" class="mw-redirect" title="Cast time">cast time</a>. The <span style="color: #56C456; white-space:normal">Sun Disc</span> will activate after being assembled over 5 seconds.',
    leveling: [],
  },
  {
    description:
      'The <span style="color: #56C456; white-space:normal">Sun Disc</span> functions the same as a standard <a href="/wiki/Turret#Inner_turret" title="Turret">inner turret</a>, gains <span style="color: #7A6DFF; white-space:normal">15% AP</span> <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>, and grants its kill credit to <b>Azir</b>. The <span style="color: #56C456; white-space:normal">Sun Disc\'s</span> <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span> decays over 60 seconds and loses <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">100 armor</span></span> while <b>Azir</b> is not alive or is too far away.',
    leveling: [],
  },
  {
    description:
      '<i><b>Azir</b> cannot construct a <span style="color: #56C456; white-space:normal">Sun Disc</span> with the marker while he is unable to cast abilities.</i>',
    leveling: [],
  },
  {
    description:
      '<i>See <a href="/wiki/Azir/LoL#Pets" title="Azir/LoL">Pets</a> for more details about the <span style="color: #56C456; white-space:normal">Sun Disc</span>.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Azir_Conquering_Sands.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Azir</b> orders all <span style="color: #56C456; white-space:normal">Sand Soldiers</span> to dash toward the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies they pass through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 25% for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 90 / 110 / 130 / 150 (+ 30% AP)',
        values: [70, 90, 110, 130, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 90 / 110 / 130 / 150',
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
      'Enemies hit by subsequent soldiers take no additional damage and are instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by an additional 25% per soldier.',
    leveling: [],
  },
  {
    description:
      '<i>Conquering Sands will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Azir</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, doubled for 5 seconds if he summons a third concurrent soldier with <i>Arise!</i>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '15 / 25 / 35 / 45 / 55%',
        values: [15, 25, 35, 45, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 25 / 35 / 45 / 55%',
      },
      {
        effectType: 'Unique',
        name: 'Increased Attack Speed:',
        raw: '30 / 50 / 70 / 90 / 110%',
        values: [30, 50, 70, 90, 110],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 50 / 70 / 90 / 110%',
      },
    ],
  },
  {
    img: '/wiki/images/Azir_Arise%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Azir</b> summons a <span style="color: #56C456; white-space:normal">Sand Soldier</span> at the target location that is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, lasts 10 seconds, and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. The <span style="color: #56C456; white-space:normal">Sand Soldier</span> expires twice as fast while within range of an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, and does so instantly if <b>Azir</b> is too far away.<br><br><b>Azir</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <span style="color: #56C456; white-space:normal">Sand Soldier</span>, up to a maximum of 2.',
    leveling: [],
  },
  {
    description:
      'When <b>Azir</b> declares a basic attack against an enemy in a soldier\'s <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>, the <span style="color: #56C456; white-space:normal">Sand Soldier</span> attacks in his stead, thrusting their spear in the target\'s direction to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-bot_values="50;52;54;56;58;60;62;65;70;75;80;90;100;110;120;130;140;150" data-top_values="">50 − 150 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies struck in a line. Targets hit beyond the closest take <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;1" data-finish="100;16" data-bot_values="25;50;75;100" data-top_values="1;6;11;16" data-bot_key="%">25 / 50 / 75 / 100% (based on level)</span> damage. Subsequent <span style="color: #56C456; white-space:normal">Sand Soldiers</span> against the same target deal 25% damage.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "When Azir declares a basic attack against an enemy in a soldier's  attack range, the Sand Soldier attacks in his stead, thrusting their spear in the target's direction to deal 50 − 150 (based on level) (+ 55% AP) magic damage to enemies struck in a line",
        values: [
          50, 55.88, 61.76, 67.65, 73.53, 79.41, 85.29, 91.18, 97.06, 102.94,
          108.82, 114.71, 120.59, 126.47, 132.35, 138.24, 144.12, 150,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage to enemies struck in a line',
        pre: "When Azir declares a basic attack against an enemy in a soldier's  attack range, the Sand Soldier attacks in his stead, thrusting their spear in the target's direction to deal 50 − 150",
        post: 'magic damage to enemies struck in a line',
        children: [
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 55% AP',
          },
        ],
      },
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' Targets hit beyond the closest take 25 / 50 / 75 / 100% (based on level) damage',
        damagetype: 'None',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'damage',
        pre: 'Targets hit beyond the closest take 25 / 50 / 75 / 100%',
        post: 'damage',
      },
    ],
  },
  {
    description:
      '<span style="color: #56C456; white-space:normal">Sand Soldiers</span> cannot attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, nor <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">traps</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i>Arise! will cast at max range if cast beyond that. See <a href="/wiki/Azir/LoL#Pets" title="Azir/LoL">Pets</a> for more details about <span style="color: #56C456; white-space:normal">Sand Soldiers</span>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Azir_Shifting_Sands.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Azir</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 1.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target <span style="color: #56C456; white-space:normal">Sand Soldier</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within his path.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '70 / 110 / 150 / 190 / 230 (+ 60% AP)',
        values: [70, 110, 150, 190, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150 / 190 / 230',
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
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 40% AP)',
        values: [60, 90, 120, 150, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120 / 150 / 180',
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
      'If <b>Azir</b> dashes into an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he stops and gains a charge of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-ability="Arise!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL#Arise!" title="Arise!"><img alt="Arise!" src="/wiki/images/Azir_Arise%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL#Arise!" title="Azir/LoL">Arise!</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<i><b>Azir</b> can cast of any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Azir_Emperor%27s_Divide.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Azir</b> calls forth a phalanx of soldiers from <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">175</span> units behind him, catching enemies from up to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">325</span> units behind him and charging forward <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">575</span> units in the target direction.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Width:',
        raw: '6 / 7 / 8 soldiers',
        values: [6, 7, 8],
        user: 'none',
        units: '',
        unitsText: 'soldiers',
        pre: '6 / 7 / 8 soldiers',
      },
      {
        effectType: 'Unique',
        name: 'Width (charge):',
        raw: ' 620 / 720 / 820',
        values: [620, 720, 820],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '620 / 720 / 820',
      },
      {
        effectType: 'Unique',
        name: 'Width (impassable wall):',
        raw: ' 750 / 850 / 950',
        values: [750, 850, 950],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '750 / 850 / 950',
      },
    ],
  },
  {
    description:
      'Enemies impacted by the charge are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked away</a></span> over 1 second to a line 650 units in front of <b>Azir</b>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '175 / 325 / 475 (+ 60% AP)',
        values: [175, 325, 475],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 325 / 475',
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
      'Upon finishing their charge, the soldiers stand as a wall for 5 seconds, acting as impassible terrain against enemies and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their surroundings. <b>Azir</b> and his allies can move through these soldiers.',
    leveling: [],
  },
];
export const Azir = { I, Q, W, E, R };
