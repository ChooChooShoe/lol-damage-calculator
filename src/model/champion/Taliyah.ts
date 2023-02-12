import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Taliyah';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Taliyah_Rock_Surfing.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> While near <a href="/wiki/Terrain" title="Terrain">terrain</a>, <b>Taliyah</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="10;15;25;40" data-top_values="1;9;12;15" data-bot_key="%">10 / 15 / 25 / 40% (based on level)</span></span></span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>, which builds up over 1 second while in range for at least 0.<small>4</small> seconds, and decays <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">at the same rate</span> once out of range for at least 3 seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' While near terrain, Taliyah gains  10 / 15 / 25 / 40% (based on level) bonus movement speed, which builds up over 1 second while in range for at least 0',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'bonus movement speed, which builds up over 1 second while in range for at least 0',
        pre: 'While near terrain, Taliyah gains  10 / 15 / 25 / 40%',
        post: 'bonus movement speed, which builds up over 1 second while in range for at least 0',
      },
    ],
  },
  {
    description:
      'If <b>Taliyah</b> is casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a> or enters <a href="/wiki/Combat_status" title="Combat status">champion combat</a>, <i>Rock Surfing</i> cannot occur again for a few seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Taliyah_Threaded_Volley.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Taliyah</b> throws a volley of 5 <i>Stone Shards</i> in the target direction over 1.<small>5</small> seconds that each shatter upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 0.<small>5</small> seconds. Subsequent hits deal 40% damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '45 / 65 / 85 / 105 / 125 (+ 50% AP)',
        values: [45, 65, 85, 105, 125],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 65 / 85 / 105 / 125',
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
        raw: '18 / 26 / 34 / 42 / 50 (+ 20% AP)',
        values: [18, 26, 34, 42, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '18 / 26 / 34 / 42 / 50',
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
        raw: '117 / 169 / 221 / 273 / 325 (+ 130% AP)',
        values: [117, 169, 221, 273, 325],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '117 / 169 / 221 / 273 / 325',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 130% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Taliyah</b> can move and cast other abilities while launching <i>Stone Shards</i>, and is unable to basic attack until she launches the third <i>Stone Shard</i>.',
    leveling: [],
  },
  {
    description:
      'Casting <i>Threaded Volley</i> creates a 400-unit area of <span style="color: #B36F21; white-space:normal">Worked Ground</span> at <b>Taliyah\'s</b> cast location that lasts <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">30</span> seconds. While on <span style="color: #B36F21; white-space:normal">Worked Ground</span>, <i>Threaded Volley\'s</i> cast consumes the area to become empowered with a new effect, costing <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">20 mana</span></span> and having 50% reduced <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, though not below 0.<small>75</small> seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Taliyah_Threaded_Volley_2.png',
    description:
      '<span class="template_sbc"><b>Empowered Active:</b></span> <b>Taliyah</b> hurls a <i>Boulder</i> that explodes upon the first enemy hit, dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">190%</span> damage to them and normal damage to nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> all targets hit for 1.<small>5</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 0.<small>5</small> seconds. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">Monsters</a></span> hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Empowered Damage:',
        raw: '85.5 / 123.5 / 161.5 / 199.5 / 237.5 (+ 95% AP)',
        values: [85.5, 123.5, 161.5, 199.5, 237.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '85.5 / 123.5 / 161.5 / 199.5 / 237.5',
        children: [
          {
            values: 95,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 95% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '20 / 25 / 30 / 35 / 40%',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
      },
    ],
  },
  {
    description:
      'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <i>Threaded Volley</i> deals <span style="color: #00B0F0; white-space:normal">25</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> per <i>Stone Shard</i>, and the <i>Boulder</i> deals <span style="color: #00B0F0; white-space:normal">47.<small>5</small></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;19% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> against the primary target. This <b>bonus</b> damage is unaffected by the damage modifier from subsequent hits.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: 'Against  monsters, Threaded Volley deals 25 (+ 10% AP) bonus magic damage per Stone Shard, and the Boulder deals 47',
        values: 2,
        user: 'none',
        units: '',
        unitsText:
          'bonus magic damage per Stone Shard, and the Boulder deals 47',
        pre: 'Against  monsters, Threaded Volley deals 25',
        post: 'bonus magic damage per Stone Shard, and the Boulder deals 47',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: '5 (+ 19% AP) bonus magic damage against the primary target',
        values: 5,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage against the primary target',
        pre: '5',
        post: 'bonus magic damage against the primary target',
        children: [
          {
            values: 19,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 19% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Taliyah_Seismic_Shove.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Taliyah</b> marks the target location and selects a direction. After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Under normal tick interval circumstances, both cast time and 0.5s delay are rounding up">0.<small>792</small> seconds</span>, a ledge erupts from the area that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks</a></span> enemies hit 400 units in the target direction over 1 second.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Taliyah_Unraveled_Earth.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Taliyah</b> scatters a field of 22 stones across the ground in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit while they erupt. The stones then remain for 4 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies within the area by 20%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 105 / 150 / 195 / 240 (+ 60% AP)',
        values: [60, 105, 150, 195, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 105 / 150 / 195 / 240',
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
      'Enemies that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked</a></span> into a stone will detonate it, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 2 seconds, which is set to 0.<small>75</small> seconds for non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> after the movement ends.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Detonation Magic Damage:',
        raw: '25 / 45 / 65 / 85 / 105 (+ 30% AP)',
        values: [25, 45, 65, 85, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 45 / 65 / 85 / 105',
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
      'An enemy can detonate up to 4 stones, but the damage is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="stones detonated" data-start="0;" data-finish="75;" data-bot_values="0;25;50;75" data-top_values="" data-bot_key="%">0% − 75% (based on stones detonated)</span>. <i>Unraveled Earth</i> can affect targets only once per cast; the stones will still detonate but not apply their effects.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: 'An enemy can detonate up to 4 stones, but the damage is reduced by 0% − 75% (based on stones detonated)',
        damagetype: 'None',
        values: 4,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText:
          '− 75enemy can detonate up to 4 stones, but the damage is reduced by 0',
        pre: 'An enemy can detonate up to 4 stones, but the damage is reduced by 0% − 75%',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on stones detonated',
            pre: 'based on stones detonated',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Maximum Detonation Damage:',
        raw: '62.5 / 112.5 / 162.5 / 212.5 / 262.5 (+ 82.5% AP)',
        values: [62.5, 112.5, 162.5, 212.5, 262.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '62.5 / 112.5 / 162.5 / 212.5 / 262.5',
        children: [
          {
            values: 82.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 82.5% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Unraveled Earth</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Taliyah_Weaver%27s_Wall.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Taliyah</b> summons a torrent of spiraling rocks that cascades in the target direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking aside</a></span> champions hit and erecting a wall of <a href="/wiki/Terrain" title="Terrain">terrain</a> in its wake. The wall lasts for 4 seconds after completion, then slowly disintegrates from its starting point.',
    leveling: [],
  },
  {
    description:
      '<b>Taliyah</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1 second, during which <i>Weaver\'s Wall</i> can be recast and she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> herself.',
    leveling: [],
  },
  {
    img: '/wiki/images/Taliyah_Weaver%27s_Wall_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> Upon completing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span>, <b>Taliyah</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">surfs</a></span> on the wall as it emerges, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> herself in the process. After 0.<small>75</small> seconds, she may input a movement command to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">jump</a></span> off the wall to the target location, and automatically does so upon being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span> or reaching maximum range.<br><br>Once the wall has fully formed, <b>Taliyah</b> can recast to destroy the wall instantly.',
    leveling: [],
  },
  {
    description:
      '<i>Weaver\'s Wall</i> is placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;3-second</span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> upon dealing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ability damage"><a href="/wiki/Ability_damage" title="Ability damage">ability damage</a></span>, or upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> damage.',
    leveling: [],
  },
];
export const Taliyah = { I, Q, W, E, R };
