import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Taliyah';

export default {
  'Rock Surfing': {
    name: 'Rock Surfing',
    display_name: 'Rock Surfing',
    champion: 'Taliyah',
    skill: 'I',
    image: {
      full: 'Taliyah_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    static: '2',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taliyah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taliyah/LoL" title="Taliyah"><img alt="Taliyah" src="/wiki/images/Taliyah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taliyah/LoL" title="Taliyah/LoL">Taliyah</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while near <a href="/wiki/Terrain" title="Terrain">terrain</a>. This effect will be put on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> while in combat or casting an ability.',
    ],
    description: [
      {
        icon: '/wiki/images/Rock_Surfing.png',
        description:
          'Innate: While near terrain, Taliyah gains  10 / 15 / 25 / 40% (based on level) bonus movement speed, which builds up over 1 second while in range for at least 0.4 seconds, and decays at the same rate once out of range for at least 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> While near <a href="/wiki/Terrain" title="Terrain">terrain</a>, <b>Taliyah</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="10;15;25;40" data-top_values="1;9;12;15" data-bot_key="%">10 / 15 / 25 / 40% (based on level)</span></span></span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>, which builds up over 1 second while in range for at least 0.<small>4</small> seconds, and decays <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">at the same rate</span> once out of range for at least 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'While near terrain, Taliyah gains  10 / 15 / 25 / 40% (based on level) bonus movement speed, which builds up over 1 second while in range for at least 0.4 seconds, and decays at the same rate once out of range for at least 3 seconds.',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed, which builds up over 1 second while in range for at least 0.4 seconds, and decays at the same rate once out of range for at least 3 seconds.',
            pre: 'While near terrain, Taliyah gains  10 / 15 / 25 / 40%',
            post: 'bonus movement speed, which builds up over 1 second while in range for at least 0.4 seconds, and decays at the same rate once out of range for at least 3 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Taliyah is casting an ability or enters champion combat, Rock Surfing cannot occur again for a few seconds.',
        descriptionHTML:
          'If <b>Taliyah</b> is casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a> or enters <a href="/wiki/Combat_status" title="Combat status">champion combat</a>, <i>Rock Surfing</i> cannot occur again for a few seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* The movement speed builds up and decays linearly (by the same amount in the same interval), 25% of the maximum value every 0.<small>25</small> seconds.\n<ul><li><i>Rock Surfing</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li>Dealing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc</a></span> damage does not put <i>Rock Surfing</i> on cooldown.</li></ul>',
  },
  'Threaded Volley': {
    name: 'Threaded Volley',
    display_name: 'Threaded Volley',
    champion: 'Taliyah',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'TaliyahQ.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '1000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Stone Shard radius">175</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Boulder radius">225</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width, no offset to either side">200</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="5000 units per second² deceleration, minimum is 1500 speed but it reaches its destination earlier than it can slow down to it">3600 - 1950</span>',
    cast_time: '0.<small>25</small>',
    cost: '55 / 60 / 65 / 70 / 75',
    costtype: 'Mana',
    cooldown: '7 / 6 / 5 / 4 / 3',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taliyah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taliyah/LoL" title="Taliyah"><img alt="Taliyah" src="/wiki/images/Taliyah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taliyah/LoL" title="Taliyah/LoL">Taliyah</a></span></span> throws a volley of <i>Stone Shards</i> in the target direction that each explode upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. This also creates an area of <span style="color: #B36F21; white-space:normal">Worked Ground</span> under <b>Taliyah\'s</b> location that lasts for a while.',
      'Casting <i>Threaded Volley</i> on <span style="color: #B36F21; white-space:normal">Worked Ground</span> will consume the area to become empowered with a new effect as well as reduced <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> and <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
      '<span class="template_sbc"><b>Empowered Active:</b></span> <b>Taliyah</b> hurls a <i>Boulder</i> that explodes upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies. The first enemy hit takes <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased</span> damage from the <i>Boulder</i>.',
      '<b>Taliyah</b> can move and cast other abilities while launching <i>Stone Shards</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Threaded_Volley.png',
        description:
          'Active: Taliyah throws a volley of 5 Stone Shards in the target direction over 1.5 seconds that each shatter upon the first enemy hit, dealing magic damage to nearby enemies and  revealing them for 0.5 seconds. Subsequent hits deal 40% damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Taliyah</b> throws a volley of 5 <i>Stone Shards</i> in the target direction over 1.<small>5</small> seconds that each shatter upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 0.<small>5</small> seconds. Subsequent hits deal 40% damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Taliyah throws a volley of 5 Stone Shards in the target direction over 1.5 seconds that each shatter upon the first enemy hit, dealing magic damage to nearby enemies and  revealing them for 0.5 seconds',
            damagetype: 'Magic',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'throws a volley of 5 Stone Shards in the target direction over 1.5 seconds that each shatter upon the first enemy hit, dealing magic damage to nearby enemies and  revealing them for 0.5 seconds',
            pre: 'Taliyah throws a volley of 5 Stone Shards in the target direction over 1.5 seconds that each shatter upon the first enemy hit, dealing magic damage to nearby enemies and  revealing them for 0.5 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Subsequent hits deal 40% damage.',
            damagetype: 'None',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage.hits deal 40',
            pre: 'Subsequent hits deal 40% damage.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '45 / 65 / 85 / 105 / 125 (+ 50% AP)',
            valuesHTML:
              '45 / 65 / 85 / 105 / 125 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '45 / 65 / 85 / 105 / 125 (+ 50% AP)',
            damagetype: 'Magic',
            values: [45, 65, 85, 105, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 65 / 85 / 105 / 125',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Taliyah can move and cast other abilities while launching Stone Shards, and is unable to basic attack until she launches the third Stone Shard.',
        descriptionHTML:
          '<b>Taliyah</b> can move and cast other abilities while launching <i>Stone Shards</i>, and is unable to basic attack until she launches the third <i>Stone Shard</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Casting Threaded Volley creates a 400-unit area of Worked Ground at Taliyah's cast location that lasts 30 seconds. While on Worked Ground, Threaded Volley's cast consumes the area to become empowered with a new effect, costing  20 mana and having 50% reduced  cooldown, though not below 0.75 seconds.",
        descriptionHTML:
          'Casting <i>Threaded Volley</i> creates a 400-unit area of <span style="color: #B36F21; white-space:normal">Worked Ground</span> at <b>Taliyah\'s</b> cast location that lasts <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">30</span> seconds. While on <span style="color: #B36F21; white-space:normal">Worked Ground</span>, <i>Threaded Volley\'s</i> cast consumes the area to become empowered with a new effect, costing <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">20 mana</span></span> and having 50% reduced <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, though not below 0.<small>75</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Casting Threaded Volley creates a 400-unit area of Worked Ground at Taliyah's cast location that lasts 30 seconds",
            damagetype: 'None',
            values: 4,
            units: 'total_ad',
            unitsText:
              "Threaded Volley creates a 400-unit area of Worked Ground at Taliyah's cast location that lasts 30 seconds",
            pre: "Casting Threaded Volley creates a 400-unit area of Worked Ground at Taliyah's cast location that lasts 30 seconds",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "While on Worked Ground, Threaded Volley's cast consumes the area to become empowered with a new effect, costing  20 mana and having 50% reduced  cooldown, though not below 0.75 seconds.",
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              "reduced  cooldown, though not below 0.75 seconds.on Worked Ground, Threaded Volley's cast consumes the area to become empowered with a new effect, costing  20 mana and having 50",
            pre: "While on Worked Ground, Threaded Volley's cast consumes the area to become empowered with a new effect, costing  20 mana and having 50% reduced  cooldown, though not below 0.75 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Threaded_Volley_2.png',
        description:
          'Empowered Active: Taliyah hurls a Boulder that explodes upon the first enemy hit, dealing  190% damage to them and normal damage to nearby enemies,  slowing all targets hit for 1.5 seconds, and  revealing them for 0.5 seconds.  Monsters hit are also  stunned for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Empowered Active:</b></span> <b>Taliyah</b> hurls a <i>Boulder</i> that explodes upon the first enemy hit, dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">190%</span> damage to them and normal damage to nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> all targets hit for 1.<small>5</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 0.<small>5</small> seconds. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">Monsters</a></span> hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Empowered Active:',
            raw: 'Taliyah hurls a Boulder that explodes upon the first enemy hit, dealing  190% damage to them and normal damage to nearby enemies,  slowing all targets hit for 1.5 seconds, and  revealing them for 0.5 seconds',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage to them and normal damage to nearby enemies,  slowing all targets hit for 1.5 seconds, and  revealing them for 0.5 secondshurls a Boulder that explodes upon the first enemy hit, dealing  190',
            pre: 'Taliyah hurls a Boulder that explodes upon the first enemy hit, dealing  190% damage to them and normal damage to nearby enemies,  slowing all targets hit for 1.5 seconds, and  revealing them for 0.5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: ' Monsters hit are also  stunned for 3 seconds.',
            values: 3,
            user: 'none',
            units: '',
            unitsText: 'hit are also  stunned for 3 seconds.',
            pre: 'Monsters hit are also  stunned for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Empowered Damage:',
            values: '85.5 / 123.5 / 161.5 / 199.5 / 237.5 (+ 95% AP)',
            valuesHTML:
              '85.<small>5</small> / 123.<small>5</small> / 161.<small>5</small> / 199.<small>5</small> / 237.<small>5</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;95% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage:',
            raw: '85.5 / 123.5 / 161.5 / 199.5 / 237.5 (+ 95% AP)',
            damagetype: 'None',
            values: [85.5, 123.5, 161.5, 199.5, 237.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '85.5 / 123.5 / 161.5 / 199.5 / 237.5',
            children: [
              {
                values: 95,
                valuesIsPercent: true,
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
        icon: '/wiki/images/undefined',
        description:
          'Against  monsters, Threaded Volley deals 25 (+ 10% AP) bonus magic damage per Stone Shard, and the Boulder deals 47.5 (+ 19% AP) bonus magic damage against the primary target. This bonus damage is unaffected by the damage modifier from subsequent hits.',
        descriptionHTML:
          'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <i>Threaded Volley</i> deals <span style="color: #00B0F0; white-space:normal">25</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> per <i>Stone Shard</i>, and the <i>Boulder</i> deals <span style="color: #00B0F0; white-space:normal">47.<small>5</small></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;19% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> against the primary target. This <b>bonus</b> damage is unaffected by the damage modifier from subsequent hits.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Against  monsters, Threaded Volley deals 25 (+ 10% AP) bonus magic damage per Stone Shard, and the Boulder deals 47.5 (+ 19% AP) bonus magic damage against the primary target',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'bonus magic damage per Stone Shard, and the Boulder deals 47.5',
            pre: 'Against  monsters, Threaded Volley deals 25',
            post: 'bonus magic damage per Stone Shard, and the Boulder deals 47.5',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
              {
                values: 19,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 19% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'special',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* <i>Threaded Volley</i> will continue casting while in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span>.\n<ul><li>The first <i>Stone Shard</i> hit on each target is considered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>, while additional ones of the same cast are considered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent area damage"><a href="/wiki/Damage" title="Damage"><img alt="Poison Trail.png" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent area damage</a></span>.\n<ul><li>The <i>Boulder</i> applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>.</li></ul></li>\n<li>The first <i>Stone Shard</i> is launched instantly after the cast time ends, then the second and third <i>Stone Shards</i> are both launched over 1 second, and finally the fourth and fifth <i>Stone Shards</i> are both launched over 0.<small>5</small> seconds.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> only prevents one instance of damage.</li></ul>',
  },
  'Seismic Shove': {
    name: 'Seismic Shove',
    display_name: 'Seismic Shove',
    champion: 'Taliyah',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'TaliyahWVC.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 225',
    cast_time: '0.<small>25</small>',
    cost: '40 / 30 / 20 / 10 / 0',
    costtype: 'Mana',
    cooldown: '14 / 12.<small>5</small> / 11 / 9.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taliyah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taliyah/LoL" title="Taliyah"><img alt="Taliyah" src="/wiki/images/Taliyah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taliyah/LoL" title="Taliyah/LoL">Taliyah</a></span></span> creates a ledge at the target location that erects after a brief delay, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking</a></span> enemies hit in the target direction.',
    ],
    description: [
      {
        icon: '/wiki/images/Seismic_Shove.png',
        description:
          'Active: Taliyah marks the target location and selects a direction. After 0.792 seconds, a ledge erupts from the area that  knocks enemies hit 400 units in the target direction over 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Taliyah</b> marks the target location and selects a direction. After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Under normal tick interval circumstances, both cast time and 0.5s delay are rounding up">0.<small>792</small> seconds</span>, a ledge erupts from the area that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks</a></span> enemies hit 400 units in the target direction over 1 second.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Vector',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* The delay is measured from the start of the cast, before the cast time.',
  },
  'Unraveled Earth': {
    name: 'Unraveled Earth',
    display_name: 'Unraveled Earth',
    champion: 'Taliyah',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'TaliyahE.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius: '800',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">80°</span>',
    cast_time: '0.<small>25</small>',
    cost: '90 / 95 / 100 / 105 / 110',
    costtype: 'Mana',
    cooldown: '18 / 17 / 16 / 15 / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taliyah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taliyah/LoL" title="Taliyah"><img alt="Taliyah" src="/wiki/images/Taliyah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taliyah/LoL" title="Taliyah/LoL">Taliyah</a></span></span> scatters a field of stones in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. The stones remain for a few seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies within.',
      'Enemies that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked</a></span> into a stone will detonate it, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Unraveled_Earth.png',
        description:
          'Active: Taliyah scatters a field of 22 stones across the ground in the target direction that deals magic damage to enemies hit while they erupt. The stones then remain for 4 seconds and  slow enemies within the area by 20%.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Taliyah</b> scatters a field of 22 stones across the ground in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit while they erupt. The stones then remain for 4 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies within the area by 20%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Taliyah scatters a field of 22 stones across the ground in the target direction that deals magic damage to enemies hit while they erupt',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'scatters a field of 22 stones across the ground in the target direction that deals magic damage to enemies hit while they erupt',
            pre: 'Taliyah scatters a field of 22 stones across the ground in the target direction that deals magic damage to enemies hit while they erupt',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The stones then remain for 4 seconds and  slow enemies within the area by 20%.',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              '.stones then remain for 4 seconds and  slow enemies within the area by 20',
            pre: 'The stones then remain for 4 seconds and  slow enemies within the area by 20%.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 105 / 150 / 195 / 240 (+ 60% AP)',
            valuesHTML:
              '60 / 105 / 150 / 195 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 60% AP)',
            damagetype: 'Magic',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies that  dash or are  knocked into a stone will detonate it, dealing magic damage and  stunning them for 2 seconds, which is set to 0.75 seconds for non- monsters after the movement ends.',
        descriptionHTML:
          'Enemies that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked</a></span> into a stone will detonate it, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 2 seconds, which is set to 0.<small>75</small> seconds for non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> after the movement ends.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies that  dash or are  knocked into a stone will detonate it, dealing magic damage and  stunning them for 2 seconds, which is set to 0.75 seconds for non- monsters after the movement ends.',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'that  dash or are  knocked into a stone will detonate it, dealing magic damage and  stunning them for 2 seconds, which is set to 0.75 seconds for non- monsters after the movement ends.',
            pre: 'Enemies that  dash or are  knocked into a stone will detonate it, dealing magic damage and  stunning them for 2 seconds, which is set to 0.75 seconds for non- monsters after the movement ends.',
          },
        ],
        leveling: [
          {
            name: 'Detonation Magic Damage:',
            values: '25 / 45 / 65 / 85 / 105 (+ 30% AP)',
            valuesHTML:
              '25 / 45 / 65 / 85 / 105 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Detonation Magic Damage:',
            raw: '25 / 45 / 65 / 85 / 105 (+ 30% AP)',
            damagetype: 'Magic',
            values: [25, 45, 65, 85, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 45 / 65 / 85 / 105',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'An enemy can detonate up to 4 stones, but the damage is reduced by 0% − 75% (based on stones detonated). Unraveled Earth can affect targets only once per cast; the stones will still detonate but not apply their effects.',
        descriptionHTML:
          'An enemy can detonate up to 4 stones, but the damage is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="stones detonated" data-start="0;" data-finish="75;" data-bot_values="0;25;50;75" data-top_values="" data-bot_key="%">0% − 75% (based on stones detonated)</span>. <i>Unraveled Earth</i> can affect targets only once per cast; the stones will still detonate but not apply their effects.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'An enemy can detonate up to 4 stones, but the damage is reduced by 0% − 75% (based on stones detonated)',
            damagetype: 'None',
            values: 4,
            valuesIsPercent: true,
            basedOn: 'stones detonated',
            user: 'none',
            units: '',
            unitsText:
              '− 75enemy can detonate up to 4 stones, but the damage is reduced by 0',
            pre: 'An enemy can detonate up to 4 stones, but the damage is reduced by 0% − 75%',
          },
        ],
        leveling: [
          {
            name: 'Total Maximum Detonation Damage:',
            values: '62.5 / 112.5 / 162.5 / 212.5 / 262.5 (+ 82.5% AP)',
            valuesHTML:
              '62.<small>5</small> / 112.<small>5</small> / 162.<small>5</small> / 212.<small>5</small> / 262.<small>5</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;82.<small>5</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Maximum Detonation Damage:',
            raw: '62.5 / 112.5 / 162.5 / 212.5 / 262.5 (+ 82.5% AP)',
            damagetype: 'None',
            values: [62.5, 112.5, 162.5, 212.5, 262.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '62.5 / 112.5 / 162.5 / 212.5 / 262.5',
            children: [
              {
                values: 82.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 82.5% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Unraveled Earth deals 150% damage against  monsters.',
        descriptionHTML:
          '<i>Unraveled Earth</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Unraveled Earth deals 150% damage against  monsters.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage against  monsters.Earth deals 150',
            pre: 'Unraveled Earth deals 150% damage against  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* <i>Unraveled Earth</i> fires 6 rows of stones: the first row has 2 stones, and the rest have 4 each.\n<ul><li><ul><li>The stones spawn in rows that cascade in 0.<small>17</small> second intervals.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
  },
  "Weaver's Wall": {
    name: "Weaver's Wall",
    display_name: "Weaver's Wall",
    champion: 'Taliyah',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'TaliyahR.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '700',
    target_range: '2500 / 3500 / 4500 / 5500 / 6500',
    speed:
      '1500 / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Jump off dash speed">1200</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after wall expires or is destroyed">180 / 165 / 150 / 135 / 120</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taliyah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taliyah/LoL" title="Taliyah"><img alt="Taliyah" src="/wiki/images/Taliyah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taliyah/LoL" title="Taliyah/LoL">Taliyah</a></span></span> summons a torrent of spiraling rocks that cascades in the target direction, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks aside</a></span> champions hit and erects a wall of <a href="/wiki/Terrain" title="Terrain">terrain</a> in its wake. The wall lasts a few seconds before slowly disintegrating from the starting end.',
      '<b>Taliyah</b> will also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span>, during which <i>Weaver\'s Wall</i> can be recast. While the wall remains fully formed, she gains another recast empowered with a new effect.',
      '<span class="template_sbc"><b>Recast:</b></span> After the channel, <b>Taliyah</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">surf</a></span> along the wall as it erects. She can move to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">exit</a></span> the wall early, and automatically does so upon being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or reaching the finishing end. <br><br>\n<p><span class="template_sbc"><b>Empowered Recast:</b></span> <b>Taliyah</b> instantly destroys the wall.\n</p>',
    ],
    description: [
      {
        icon: "/wiki/images/Weaver's_Wall.png",
        description:
          'Active: Taliyah summons a torrent of spiraling rocks that cascades in the target direction,  knocking aside champions hit and erecting a wall of terrain in its wake. The wall lasts for 4 seconds after completion, then slowly disintegrates from its starting point.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Taliyah</b> summons a torrent of spiraling rocks that cascades in the target direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking aside</a></span> champions hit and erecting a wall of <a href="/wiki/Terrain" title="Terrain">terrain</a> in its wake. The wall lasts for 4 seconds after completion, then slowly disintegrates from its starting point.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The wall lasts for 4 seconds after completion, then slowly disintegrates from its starting point.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'wall lasts for 4 seconds after completion, then slowly disintegrates from its starting point.',
            pre: 'The wall lasts for 4 seconds after completion, then slowly disintegrates from its starting point.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Taliyah also  channels for 1 second, during which Weaver's Wall can be recast and she  reveals herself.",
        descriptionHTML:
          '<b>Taliyah</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1 second, during which <i>Weaver\'s Wall</i> can be recast and she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> herself.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Taliyah also  channels for 1 second, during which Weaver's Wall can be recast and she  reveals herself.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "also  channels for 1 second, during which Weaver's Wall can be recast and she  reveals herself.",
            pre: "Taliyah also  channels for 1 second, during which Weaver's Wall can be recast and she  reveals herself.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Weaver's_Wall_2.png",
        description:
          'Recast: Upon completing the  channel, Taliyah  surfs on the wall as it emerges,  revealing herself in the process. After 0.75 seconds, she may input a movement command to  jump off the wall to the target location, and automatically does so upon being  immobilized or  polymorphed or reaching maximum range.Once the wall has fully formed, Taliyah can recast to destroy the wall instantly.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> Upon completing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span>, <b>Taliyah</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">surfs</a></span> on the wall as it emerges, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> herself in the process. After 0.<small>75</small> seconds, she may input a movement command to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">jump</a></span> off the wall to the target location, and automatically does so upon being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span> or reaching maximum range.<br><br>Once the wall has fully formed, <b>Taliyah</b> can recast to destroy the wall instantly.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Weaver's Wall is placed on a  3-second static cooldown upon dealing  basic or ability damage, or upon taking  champion or  turret damage.",
        descriptionHTML:
          '<i>Weaver\'s Wall</i> is placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;3-second</span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> upon dealing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ability damage"><a href="/wiki/Ability_damage" title="Ability damage">ability damage</a></span>, or upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Weaver's Wall is placed on a  3-second static cooldown upon dealing  basic or ability damage, or upon taking  champion or  turret damage.",
            damagetype: 'None',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Wall is placed on a  3-second static cooldown upon dealing  basic or ability damage, or upon taking  champion or  turret damage.',
            pre: "Weaver's Wall is placed on a  3-second static cooldown upon dealing  basic or ability damage, or upon taking  champion or  turret damage.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Self, Enemies',
    spellshield: false,
    projectile: 'true',
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">jump</a></span> off distance can be extended to up to 1000 units when targeting across terrain.\n<ul><li>The initial cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>However neither recasts do.</li></ul></li>\n<li><b>Taliyah</b> can recast to destroy the wall even if she did not surf it or it is in the process of disintegrating.</li>\n<li><b>Taliyah</b> almost always jumps off of the wall to her left from when it reaches maximum range. If she is forced to jump off of the wall, she will do so towards the source that dealt damage or applied the crowd control to her.</li>\n<li><i>Weaver\'s Wall</i>, while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>, can be recast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> but not while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span> will prevent <i>Weaver\'s Wall</i> from summoning any further but does not destroy any initial terrain it spawned. If <b>Taliyah</b> is surfing during the collision, she immediately becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>25</small> seconds, interrupting the surf.</li>\n<li>If <b>Taliyah</b> would enter terrain and the wall reaches maximum range inside, she is preemptively forced off the wall before entering.\n<ul><li>The wall can surpass the edges of the map, but <b>Taliyah</b> cannot.</li></ul></li>\n<li>Dealing damage to a ward or trap does not trigger <i>Weaver\'s Wall\'s</i> 3-second cooldown.</li>\n<li>The following table refers for interactions while <b>Taliyah</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:\n<ul><li>The channel is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">ground</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> despite being a <a href="/wiki/Channel#Movement_Channels" title="Channel">movement channel</a>.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled, but can activate trinkets\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<ul><li>The following table refers for interactions while <b>Taliyah</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">surfing</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled, but can activate trinkets\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Damaging effects</li><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Taliyah_Original_R_4.ogg   "Let\'s shake things up."',
  },
} satisfies { [skillName in string]: SkillData };
