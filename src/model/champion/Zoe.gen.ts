import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Zoe';

export default {
  'More Sparkles!': {
    name: 'More Sparkles!',
    display_name: 'More Sparkles!',
    champion: 'Zoe',
    skill: 'I',
    image: {
      full: 'Zoe_P.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> After casting an ability, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL" title="Zoe\'s"><img alt="Zoe\'s" src="/wiki/images/Zoe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL" title="Zoe/LoL">Zoe\'s</a></span></span> next basic attack or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-ability="Spell Thief" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL#Spell_Thief" title="Spell Thief"><img alt="Spell Thief" src="/wiki/images/Zoe_Spell_Thief.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL#Spell_Thief" title="Zoe/LoL">Spell Thief</a></span></span></i> bolt within a few seconds will deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/More_Sparkles!.png',
        description:
          'Innate: After casting an ability, Zoe empowers her next basic attack or  Spell Thief bolt within 5 seconds to become  non-projectile and deal 16 − 130 (based on level) (+ 20% AP) bonus magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <b>Zoe</b> empowers her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-ability="Spell Thief" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL#Spell_Thief" title="Spell Thief"><img alt="Spell Thief" src="/wiki/images/Zoe_Spell_Thief.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL#Spell_Thief" title="Zoe/LoL">Spell Thief</a></span></span></i> bolt within 5 seconds to become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span> and deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-bot_values="16;20;24;28;32;36;42;48;54;60;66;74;82;90;100;110;120;130" data-top_values="">16 − 130 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: 'After casting an ability, Zoe empowers her next basic attack or  Spell Thief bolt within 5 seconds to become  non-projectile and deal 16 − 130 (based on level) (+ 20% AP) bonus magic damage.',
            damagetype: 'Magic',
            values: [
              16, 22.71, 29.41, 36.12, 42.82, 49.53, 56.24, 62.94, 69.65, 76.35,
              83.06, 89.76, 96.47, 103.18, 109.88, 116.59, 123.29, 130,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage.',
            pre: 'After casting an ability, Zoe empowers her next basic attack or  Spell Thief bolt within 5 seconds to become  non-projectile and deal 16 − 130',
            post: 'bonus magic damage.',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: false,
    projectile: 'False',
    notes:
      '* The empowered attack will trigger but not be consumed against <a href="/wiki/Ward" title="Ward">wards</a>.',
    yvideo: 'Zoe - Passive',
  },
  'Paddle Star': {
    name: 'Paddle Star',
    display_name: 'Paddle Star',
    champion: 'Zoe',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ZoeQ.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '800 /  800 / Global',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="From collision point, both initial and redirected star, estimated">180</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial width">100</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="After redirection">140</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initially">1200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="After redirection">2500</span>',
    cast_time: '0.<small>25</small>',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">8.<small>5</small> / 8 / 7.<small>5</small> / 7 / 6.<small>5</small></span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL" title="Zoe"><img alt="Zoe" src="/wiki/images/Zoe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL" title="Zoe/LoL">Zoe</a></span></span> shoots a star in the target direction that explodes upon hitting an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies hit based on the distance travelled.',
      'The star will briefly linger at max range, during which <i>Paddle Star</i> can be recast.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Zoe</b> redirects the star in the target path, making it larger and faster. It will fizzle upon flying too far outbound from <b>Zoe</b>.',
      '<b>Zoe</b> can move during <i>Paddle Star</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Paddle_Star.png',
        description:
          'Active: Zoe shoots a star in the target direction that explodes upon hitting an enemy, dealing magic damage to nearby enemies hit, reduced to 80% for enemies hit beyond the first. The total damage is increased by 0% − 150% (based on distance traveled).',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zoe</b> shoots a star in the target direction that explodes upon hitting an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies hit, reduced to 80% for enemies hit beyond the first. The <b>total</b> damage is increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-bot_values="0;25;50;75;100;125;150" data-top_values="800;950;1350;1650;1950;2250;2550" data-bot_key="%">0% − 150% (based on distance traveled)</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Zoe shoots a star in the target direction that explodes upon hitting an enemy, dealing magic damage to nearby enemies hit, reduced to 80% for enemies hit beyond the first',
            damagetype: 'Magic',
            values: 8,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for enemies hit beyond the firstshoots a star in the target direction that explodes upon hitting an enemy, dealing magic damage to nearby enemies hit, reduced to 80',
            pre: 'Zoe shoots a star in the target direction that explodes upon hitting an enemy, dealing magic damage to nearby enemies hit, reduced to 80% for enemies hit beyond the first',
          },
        ],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values:
              '7 − 50 (based on level) (+ 50 / 80 / 110 / 140 / 170) (+ 60% AP)',
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="7 + 1 per level until 2, then + 2 until 11, then + 3 until 15, then + 4" data-bot_values="7;8;10;12;14;16;18;20;22;24;26;29;32;35;38;42;46;50" data-top_values="">7 − 50 (based on level)</span> (+ 50 / 80 / 110 / 140 / 170) <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '7 − 50 (based on level) (+ 50 / 80 / 110 / 140 / 170) (+ 60% AP)',
            damagetype: 'Magic',
            values: [
              7, 9.53, 12.06, 14.59, 17.12, 19.65, 22.18, 24.71, 27.24, 29.76,
              32.29, 34.82, 37.35, 39.88, 42.41, 44.94, 47.47, 50,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 − 50',
            children: [
              {
                values: [50, 80, 110, 140, 170],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 50 / 80 / 110 / 140 / 170',
              },
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
          'The star lingers at maximum range for 1 second, during which Paddle Star can be recast after 0.25 seconds in the duration.',
        descriptionHTML:
          'The star lingers at maximum range for 1 second, during which <i>Paddle Star</i> can be recast after 0.<small>25</small> seconds in the duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The star lingers at maximum range for 1 second, during which Paddle Star can be recast after 0.25 seconds in the duration.',
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              'star lingers at maximum range for 1 second, during which Paddle Star can be recast after 0.25 seconds in the duration.',
            pre: 'The star lingers at maximum range for 1 second, during which Paddle Star can be recast after 0.25 seconds in the duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Paddle_Star_2.png',
        description:
          'Recast: Zoe redirects the star in the target path, empowering it with increased speed and radius, and resetting its damage modifier on cast. The redirected star can travel until it reaches 800-units outbound from Zoe.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Zoe</b> redirects the star in the target path, empowering it with increased speed and radius, and resetting its damage modifier on cast. The redirected star can travel until it reaches 800-units outbound from <b>Zoe</b>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The redirected star can travel until it reaches 800-units outbound from Zoe.',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'redirected star can travel until it reaches 800-units outbound from Zoe.',
            pre: 'The redirected star can travel until it reaches 800-units outbound from Zoe.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Paddle Star's recast can be used while affected by  cast-inhibiting crowd control.",
        descriptionHTML:
          '<i>Paddle Star\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Both casts count as ability activations for the purposes of on-cast effects such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-ability="More Sparkles!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL#More_Sparkles!" title="More Sparkles!"><img alt="More Sparkles!" src="/wiki/images/Zoe_More_Sparkles%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL#More_Sparkles!" title="Zoe/LoL">More Sparkles!</a></span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>The recast radius matches the initial cast radius of the ability, but <b>Zoe</b> can move any amount of distance away from the projectile before reactivating.</li>\n<li><i>Paddle Star\'s</i> effect radius is centered around the location of the missile as it collides.</li>\n<li><b>Paddle Star</b> plays new SFX while an enemy is affected by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-ability="Sleepy Trouble Bubble" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL#Sleepy_Trouble_Bubble" title="Sleepy Trouble Bubble"><img alt="Sleepy Trouble Bubble" src="/wiki/images/Zoe_Sleepy_Trouble_Bubble.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL#Sleepy_Trouble_Bubble" title="Zoe/LoL">Sleepy Trouble Bubble</a></span></span></i>.</li></ul>',
    yvideo: 'Zoe - Q',
  },
  'Spell Thief': {
    name: 'Spell Thief',
    display_name: 'Spell Thief',
    champion: 'Zoe',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ZoeW.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enemy cast spell shard drop radius">2200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Minion spell shard radius">Global</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ally minion kill spell shard drop radius">1500</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enemy lock-on range">525</span>',
    cost: '1 Spell Shard',
    cooldown: '0.<small>25</small>',
    blurb: [
      '<span class="template_sbc"><b>Passive - Wheeeee:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL" title="Zoe"><img alt="Zoe" src="/wiki/images/Zoe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL" title="Zoe/LoL">Zoe</a></span></span> casts <i>Spell Thief</i> or a summoner spell, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time. She also conjures 3 orbiting bolts for a period that will each shoot to the nearest enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      '<span class="template_sbc"><b>Passive:</b></span> Whenever an enemy champion casts a <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Summoner_spell" title="summoner spell"><img alt="summoner spell" src="/wiki/images/Summoner_spell_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Summoner_spell" title="Summoner spell">summoner spell</a></span></span> or <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Active_ability_items" title="item active"><img alt="item active" src="/wiki/images/Active_ability_item_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Active_ability_items" title="Active ability items">item active</a></span></span>, they drop the corresponding <i><span style="color:yellow; white-space:normal"><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="Spell Shard" src="/wiki/images/Spell_Thief_Minimap.png" decoding="async" loading="lazy" title="Spell Shard" width="20" height="20" class="lazyload"></span> <span style="white-space:normal;">Spell Shard</span></span></span></i> onto the ground for a while. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> have a chance to spawn with random <i><span style="color:yellow; white-space:normal">Spell Shards</span></i> that drop if <b>Zoe</b> kills them.<br><br><b>Zoe</b> can collect a <i><span style="color:yellow; white-space:normal">Spell Shard</span></i> for a while.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Zoe</b> mimics the active of the collected <i><span style="color:yellow; white-space:normal">Spell Shard</span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Zoe_Spell_Thief_2.png',
        description:
          'Passive - Wheeeee: Whenever Zoe casts Spell Thief or a summoner spell, she gains  bonus movement speed for a duration, and summons three bolts that orbit her for the next 10 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive - Wheeeee:</b></span> Whenever <b>Zoe</b> casts <i>Spell Thief</i> or a summoner spell, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a duration, and summons three bolts that orbit her for the next 10 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive - Wheeeee:',
            raw: 'Whenever Zoe casts Spell Thief or a summoner spell, she gains  bonus movement speed for a duration, and summons three bolts that orbit her for the next 10 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Zoe casts Spell Thief or a summoner spell, she gains  bonus movement speed for a duration, and summons three bolts that orbit her for the next 10 seconds.',
            pre: 'Whenever Zoe casts Spell Thief or a summoner spell, she gains  bonus movement speed for a duration, and summons three bolts that orbit her for the next 10 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '30 / 40 / 50 / 60 / 70%',
            valuesHTML: '30 / 40 / 50 / 60 / 70%',
          },
          {
            name: 'Bonus Movement Speed Duration:',
            values: '2 / 2.25 / 2.5 / 2.75 / 3',
            valuesHTML:
              '2 / 2.<small>25</small> / 2.<small>5</small> / 2.<small>75</small> / 3',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '30 / 40 / 50 / 60 / 70%',
            values: [30, 40, 50, 60, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed Duration:',
            raw: '2 / 2.25 / 2.5 / 2.75 / 3',
            values: [2, 2.25, 2.5, 2.75, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.25 / 2.5 / 2.75 / 3',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Zoe is not affected by  complete crowd control, she shoots one bolt at a time at the nearest non- sleeping enemy in range, prioritizing her attack target, dealing magic damage with each bolt.',
        descriptionHTML:
          'If <b>Zoe</b> is not affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Complete crowd control"><a href="/wiki/Crowd_control#Loss_of_Control" title="Crowd control#Loss of Control"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Loss_of_Control" title="Crowd control">complete crowd control</a></span>, she shoots one bolt at a time at the nearest non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleeping</a></span> enemy in range, prioritizing her attack target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> with each bolt.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage Per Bolt:',
            values: '25 / 35 / 45 / 55 / 65 (+ 13.3% AP)',
            valuesHTML:
              '25 / 35 / 45 / 55 / 65 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;13.<small><span style="text-decoration: overline;">3</span></small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Bolt:',
            raw: '25 / 35 / 45 / 55 / 65 (+ 13.3% AP)',
            damagetype: 'Magic',
            values: [25, 35, 45, 55, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
            children: [
              {
                values: 13.3,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 13.3% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Spell_Thief.png',
        description:
          'Passive: Whenever an enemy champion casts a  summoner spell or  item active, they drop the corresponding  Spell Shard onto the ground that grants  sight over a 100-radius area and remains for 40 seconds. Enemy  minions have a 10% chance to spawn with a random Spell Shard that drops and remains for 20 seconds if Zoe kills them. Allied champions that kill them will cause the orb to drop only if Zoe is nearby.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Whenever an enemy champion casts a <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Summoner_spell" title="summoner spell"><img alt="summoner spell" src="/wiki/images/Summoner_spell_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Summoner_spell" title="Summoner spell">summoner spell</a></span></span> or <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Active_ability_items" title="item active"><img alt="item active" src="/wiki/images/Active_ability_item_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Active_ability_items" title="Active ability items">item active</a></span></span>, they drop the corresponding <i><span style="color:yellow; white-space:normal"><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="Spell Shard" src="/wiki/images/Spell_Thief_Minimap.png" decoding="async" loading="lazy" title="Spell Shard" width="20" height="20" class="lazyload"></span> <span style="white-space:normal;">Spell Shard</span></span></span></i> onto the ground that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> over a 100-radius area and remains for 40 seconds. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> have a 10% chance to spawn with a random <i><span style="color:yellow; white-space:normal">Spell Shard</span></i> that drops and remains for 20 seconds if <b>Zoe</b> kills them. Allied champions that kill them will cause the orb to drop only if <b>Zoe</b> is nearby.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: 'Whenever an enemy champion casts a  summoner spell or  item active, they drop the corresponding  Spell Shard onto the ground that grants  sight over a 100-radius area and remains for 40 seconds',
            increasedStat: 'total_ad',
            values: 1,
            units: '',
            unitsText:
              'an enemy champion casts a  summoner spell or  item active, they drop the corresponding  Spell Shard onto the ground that grants  sight over a 100-radius area and remains for 40 seconds',
            pre: 'Whenever an enemy champion casts a  summoner spell or  item active, they drop the corresponding  Spell Shard onto the ground that grants  sight over a 100-radius area and remains for 40 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Enemy  minions have a 10% chance to spawn with a random Spell Shard that drops and remains for 20 seconds if Zoe kills them',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'chance to spawn with a random Spell Shard that drops and remains for 20 seconds if Zoe kills them minions have a 10',
            pre: 'Enemy  minions have a 10% chance to spawn with a random Spell Shard that drops and remains for 20 seconds if Zoe kills them',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Zoe can collect a Spell Shard for 60 seconds, and replace it by moving directly onto another Spell Shard.',
        descriptionHTML:
          '<b>Zoe</b> can collect a <i><span style="color:yellow; white-space:normal">Spell Shard</span></i> for 60 seconds, and replace it by moving directly onto another <i><span style="color:yellow; white-space:normal">Spell Shard</span></i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Zoe can collect a Spell Shard for 60 seconds, and replace it by moving directly onto another Spell Shard.',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'can collect a Spell Shard for 60 seconds, and replace it by moving directly onto another Spell Shard.',
            pre: 'Zoe can collect a Spell Shard for 60 seconds, and replace it by moving directly onto another Spell Shard.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Active: Zoe mimics the active of the collected Spell Shard.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zoe</b> mimics the active of the collected <i><span style="color:yellow; white-space:normal">Spell Shard</span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Varied',
    affects: 'Varied',
    damagetype: 'Varied',
    spelleffects: 'Special',
    spellshield: 'Special',
    projectile: 'Special',
    notes:
      '* Mimics the details of the mimicked active.\n<ul><li><b>Zoe</b> will cast <i>Spell Thief</i> in place of her own summoner spells if she has either of them as a collected <i><span style="color:yellow; white-space:normal">Spell Shard</span></i>, even if she tries to cast the summoner spell while it is on cooldown.</li>\n<li>Minions that can drop <i><span style="color:yellow; white-space:normal">Spell Shards</span></i> are marked with a tied cosmic balloon that floats above them.\n<ul><li>Minions do not drop a shard for <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>.</li></ul></li>\n<li><b>Zoe</b> utilizes an attack-like animation whenever one of the bubbles hurls itself at an enemy, making it look as if she can attack while moving.</li>\n<li><b>Zoe</b> cannot steal <a href="/wiki/Consumable_item" title="Consumable item">consumables</a>, <a href="/wiki/Trinket" class="mw-redirect" title="Trinket">trinkets</a>, <a href="/wiki/Item#Classification" class="mw-redirect" title="Item">component</a> items, or items that create deployable or persistent effects. Some actives are excluded.</li></ul>\n<table class="article-table sortable" style="float:left;">\n<tbody><tr>\n<th><a href="/wiki/Item" class="mw-redirect" title="Item">Item</a>\n</th>\n<th>Stealable\n</th></tr>\n<tr>\n<td data-sort-value="Anathema\'s Chains"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Anathema\'s Chains" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anathema%27s_Chains" title="Anathema\'s Chains"><img alt="Anathema\'s Chains" src="/wiki/images/Anathema%27s_Chains_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anathema%27s_Chains" title="Anathema\'s Chains">Anathema\'s Chains</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Black Mist Scythe"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Mist Scythe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Mist_Scythe" title="Black Mist Scythe"><img alt="Black Mist Scythe" src="/wiki/images/Black_Mist_Scythe_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Mist_Scythe" title="Black Mist Scythe">Black Mist Scythe</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Black Spear"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Spear" title="Black Spear"><img alt="Black Spear" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Spear" title="Black Spear">Black Spear</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Bulwark of the Mountain"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Bulwark of the Mountain" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bulwark_of_the_Mountain" title="Bulwark of the Mountain"><img alt="Bulwark of the Mountain" src="/wiki/images/Bulwark_of_the_Mountain_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bulwark_of_the_Mountain" title="Bulwark of the Mountain">Bulwark of the Mountain</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Everfrost"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Everfrost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Everfrost" title="Everfrost"><img alt="Everfrost" src="/wiki/images/Everfrost_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Everfrost" title="Everfrost">Everfrost</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Farsight Alteration"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Farsight Alteration" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Farsight_Alteration" title="Farsight Alteration"><img alt="Farsight Alteration" src="/wiki/images/Farsight_Alteration_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Farsight_Alteration" title="Farsight Alteration">Farsight Alteration</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Frostfang"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Frostfang" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Frostfang" title="Frostfang"><img alt="Frostfang" src="/wiki/images/Frostfang_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Frostfang" title="Frostfang">Frostfang</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Galeforce"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Gargoyle Stoneplate"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span></td>\n<td><span><img alt="No" src="/wiki/images/Not_done.svg" decoding="async" loading="lazy" title="No" width="10" height="11" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Goredrinker"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Goredrinker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Goredrinker" title="Goredrinker"><img alt="Goredrinker" src="/wiki/images/Goredrinker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Goredrinker" title="Goredrinker">Goredrinker</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Harrowing Crescent"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Harrowing Crescent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Harrowing_Crescent" title="Harrowing Crescent"><img alt="Harrowing Crescent" src="/wiki/images/Harrowing_Crescent_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Harrowing_Crescent" title="Harrowing Crescent">Harrowing Crescent</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Hextech Rocketbelt"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Ironspike Whip"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ironspike Whip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip"><img alt="Ironspike Whip" src="/wiki/images/Ironspike_Whip_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip">Ironspike Whip</a></span></span></td>\n<td><span><img alt="No" src="/wiki/images/Not_done.svg" decoding="async" loading="lazy" title="No" width="10" height="11" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Knight\'s Vow"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Knight\'s Vow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Knight%27s_Vow" title="Knight\'s Vow"><img alt="Knight\'s Vow" src="/wiki/images/Knight%27s_Vow_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Knight%27s_Vow" title="Knight\'s Vow">Knight\'s Vow</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Locket of the Iron Solari"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Locket of the Iron Solari" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Locket_of_the_Iron_Solari" title="Locket of the Iron Solari"><img alt="Locket of the Iron Solari" src="/wiki/images/Locket_of_the_Iron_Solari_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Locket_of_the_Iron_Solari" title="Locket of the Iron Solari">Locket of the Iron Solari</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Mercurial Scimitar"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Mercurial Scimitar" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mercurial_Scimitar" title="Mercurial Scimitar"><img alt="Mercurial Scimitar" src="/wiki/images/Mercurial_Scimitar_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mercurial_Scimitar" title="Mercurial Scimitar">Mercurial Scimitar</a></span></span></td>\n<td><span><img alt="No" src="/wiki/images/Not_done.svg" decoding="async" loading="lazy" title="No" width="10" height="11" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Mikael\'s Blessing"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Mikael\'s Blessing" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mikael%27s_Blessing" title="Mikael\'s Blessing"><img alt="Mikael\'s Blessing" src="/wiki/images/Mikael%27s_Blessing_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mikael%27s_Blessing" title="Mikael\'s Blessing">Mikael\'s Blessing</a></span></span></td>\n<td><span><img alt="No" src="/wiki/images/Not_done.svg" decoding="async" loading="lazy" title="No" width="10" height="11" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Oracle Lens"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Oracle Lens" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Oracle_Lens" title="Oracle Lens"><img alt="Oracle Lens" src="/wiki/images/Oracle_Lens_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Oracle_Lens" title="Oracle Lens">Oracle Lens</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Pauldrons of Whiterock"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Pauldrons of Whiterock" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pauldrons_of_Whiterock" title="Pauldrons of Whiterock"><img alt="Pauldrons of Whiterock" src="/wiki/images/Pauldrons_of_Whiterock_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pauldrons_of_Whiterock" title="Pauldrons of Whiterock">Pauldrons of Whiterock</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td><span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Predator" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Predator_(Rune)" title="Predator Boots"><img alt="Predator Boots" src="/wiki/images/Predator_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Predator_(Rune)" class="mw-redirect" title="Predator (Rune)">Predator Boots</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Prowler\'s Claw"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Quicksilver Sash"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Quicksilver Sash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quicksilver_Sash" title="Quicksilver Sash"><img alt="Quicksilver Sash" src="/wiki/images/Quicksilver_Sash_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quicksilver_Sash" title="Quicksilver Sash">Quicksilver Sash</a></span></span></td>\n<td><span><img alt="No" src="/wiki/images/Not_done.svg" decoding="async" loading="lazy" title="No" width="10" height="11" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Randuin\'s Omen"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Redemption"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Redemption" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Redemption" title="Redemption"><img alt="Redemption" src="/wiki/images/Redemption_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Redemption" title="Redemption">Redemption</a></span></span></td>\n<td><span><img alt="No" src="/wiki/images/Not_done.svg" decoding="async" loading="lazy" title="No" width="10" height="11" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Runesteel Spaulders"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runesteel Spaulders" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runesteel_Spaulders" title="Runesteel Spaulders"><img alt="Runesteel Spaulders" src="/wiki/images/Runesteel_Spaulders_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runesteel_Spaulders" title="Runesteel Spaulders">Runesteel Spaulders</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Scarecrow Effigy"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Scarecrow Effigy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigy"><img alt="Scarecrow Effigy" src="/wiki/images/Scarecrow_Effigy_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigy">Scarecrow Effigy</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Shard of True Ice"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shard of True Ice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shard_of_True_Ice" title="Shard of True Ice"><img alt="Shard of True Ice" src="/wiki/images/Shard_of_True_Ice_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shard_of_True_Ice" title="Shard of True Ice">Shard of True Ice</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Shurelya\'s Battlesong"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Silvermere Dawn"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Silvermere Dawn" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Silvermere_Dawn" title="Silvermere Dawn"><img alt="Silvermere Dawn" src="/wiki/images/Silvermere_Dawn_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Silvermere_Dawn" title="Silvermere Dawn">Silvermere Dawn</a></span></span></td>\n<td><span><img alt="No" src="/wiki/images/Not_done.svg" decoding="async" loading="lazy" title="No" width="10" height="11" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Stopwatch"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span></td>\n<td><span><img alt="No" src="/wiki/images/Not_done.svg" decoding="async" loading="lazy" title="No" width="10" height="11" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Stridebreaker"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Targon\'s Buckler"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Targon\'s Buckler" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Targon%27s_Buckler" title="Targon\'s Buckler"><img alt="Targon\'s Buckler" src="/wiki/images/Targon%27s_Buckler_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Targon%27s_Buckler" title="Targon\'s Buckler">Targon\'s Buckler</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Turbo Chemtank"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Warding Totem"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Warding Totem" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Warding_Totem" title="Warding Totem"><img alt="Warding Totem" src="/wiki/images/Warding_Totem_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Warding_Totem" class="mw-redirect" title="Warding Totem">Warding Totem</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Watchful Wardstone"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Watchful Wardstone" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Watchful_Wardstone" title="Watchful Wardstone"><img alt="Watchful Wardstone" src="/wiki/images/Watchful_Wardstone_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Watchful_Wardstone" title="Watchful Wardstone">Watchful Wardstone</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Vigilant Wardstone"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Vigilant Wardstone" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vigilant_Wardstone" title="Vigilant Wardstone"><img alt="Vigilant Wardstone" src="/wiki/images/Vigilant_Wardstone_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vigilant_Wardstone" title="Vigilant Wardstone">Vigilant Wardstone</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Youmuu\'s Ghostblade"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Zeke\'s Convergence"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zeke\'s Convergence" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeke%27s_Convergence" title="Zeke\'s Convergence"><img alt="Zeke\'s Convergence" src="/wiki/images/Zeke%27s_Convergence_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeke%27s_Convergence" title="Zeke\'s Convergence">Zeke\'s Convergence</a></span></span></td>\n<td><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</td></tr>\n<tr>\n<td data-sort-value="Zhonya\'s Hourglass"><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span></td>\n<td><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</td></tr></tbody></table>\n<table class="article-table" style="float:left;">\n<tbody><tr>\n<th colspan="2">Key\n</th></tr>\n<tr>\n<th><span><img alt="Yes" src="/wiki/images/Done.svg" decoding="async" loading="lazy" title="Yes" width="10" height="10" class="lazyload"></span>\n</th>\n<td>Can be stolen.\n</td></tr>\n<tr>\n<th><span><img alt="No" src="/wiki/images/Not_done.svg" decoding="async" loading="lazy" title="No" width="10" height="11" class="lazyload"></span>\n</th>\n<td>Cannot be stolen.\n</td></tr>\n<tr>\n<th><span><img alt="Not Applicable" src="/wiki/images/YellowLine.jpg" decoding="async" loading="lazy" title="Not Applicable" width="10" height="3" class="lazyload"></span>\n</th>\n<td>Not applicable to be stolen.\n</td></tr>\n<tr>\n<th><span><img alt="Wanted" src="/wiki/images/Circle.svg" decoding="async" loading="lazy" title="Wanted" width="10" height="10" class="lazyload"></span>\n</th>\n<td>Untested\n</td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Zoe_Original_W_15.ogg   "You left a copy of your spell here. I took it. \'Kay thanks."',
    yvideo: 'Zoe - W',
  },
  'Sleepy Trouble Bubble': {
    name: 'Sleepy Trouble Bubble',
    display_name: 'Sleepy Trouble Bubble',
    champion: 'Zoe',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ZoeE.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '800 + 50 + 250',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bubble trap radius">250</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial missile width">100</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="">200</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial missile speed">1850</span>',
    cast_time: '0.<small>25</small>',
    cost: '80',
    costtype: 'Mana',
    cooldown: '16 / 15 / 14 / 13 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL" title="Zoe"><img alt="Zoe" src="/wiki/images/Zoe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL" title="Zoe/LoL">Zoe</a></span></span> kicks a bubble in the target direction that bursts upon the first enemy hit. At max range, it will linger as a trap for a few seconds that bursts upon enemy contact.',
      'The burst deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drowsy"><a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control#Drowsy"><img alt="Drowsy icon.png" src="/wiki/images/Drowsy_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control">drowsy</a></span>, which gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them. Afterwards, the target falls <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span> for a short time, during which they cannot act.',
      'If the target is attacked during <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">Sleep</a></span> by an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, they wake up and take <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span> equal to the attack, up to a cap.',
    ],
    description: [
      {
        icon: '/wiki/images/Sleepy_Trouble_Bubble.png',
        description:
          'Active: Zoe kicks a bubble in the target direction that bursts upon the first enemy hit, otherwise lingering at maximum range over 1 second, then becoming a trap for 5 seconds that bursts upon contact with an enemy. The bubble can move through terrain only once, but travels the entire distance as bonus range, and will fall short if it would enter terrain again.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zoe</b> kicks a bubble in the target direction that bursts upon the first enemy hit, otherwise lingering at maximum range over 1 second, then becoming a trap for 5 seconds that bursts upon contact with an enemy. The bubble can move through <a href="/wiki/Terrain" title="Terrain">terrain</a> only once, but travels the entire distance as <b>bonus</b> range, and will fall short if it would enter terrain again.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Zoe kicks a bubble in the target direction that bursts upon the first enemy hit, otherwise lingering at maximum range over 1 second, then becoming a trap for 5 seconds that bursts upon contact with an enemy',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'kicks a bubble in the target direction that bursts upon the first enemy hit, otherwise lingering at maximum range over 1 second, then becoming a trap for 5 seconds that bursts upon contact with an enemy',
            pre: 'Zoe kicks a bubble in the target direction that bursts upon the first enemy hit, otherwise lingering at maximum range over 1 second, then becoming a trap for 5 seconds that bursts upon contact with an enemy',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The burst deals magic damage to the target and inflicts them with  drowsy for 1.4 seconds, which gradually  slows them until they fall  asleep for 2.25 seconds. While the target is  asleep, they are inflicted with  magic resistance reduction.',
        descriptionHTML:
          'The burst deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the target and inflicts them with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drowsy"><a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control#Drowsy"><img alt="Drowsy icon.png" src="/wiki/images/Drowsy_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control">drowsy</a></span> for 1.<small>4</small> seconds, which gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them until they fall <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span> for 2.<small>25</small> seconds. While the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span>, they are inflicted with <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance reduction</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The burst deals magic damage to the target and inflicts them with  drowsy for 1.4 seconds, which gradually  slows them until they fall  asleep for 2.25 seconds',
            damagetype: 'Magic',
            values: 1,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'burst deals magic damage to the target and inflicts them with  drowsy for 1.4 seconds, which gradually  slows them until they fall  asleep for 2.25 seconds',
            pre: 'The burst deals magic damage to the target and inflicts them with  drowsy for 1.4 seconds, which gradually  slows them until they fall  asleep for 2.25 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 110 / 150 / 190 / 230 (+ 45% AP)',
            valuesHTML:
              '70 / 110 / 150 / 190 / 230 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
          {
            name: 'Maximum Slow:',
            values: '10 / 15 / 20 / 25 / 30%',
            valuesHTML: '10 / 15 / 20 / 25 / 30%',
          },
          {
            name: 'Magic Resistance Reduction:',
            values: '20 / 22.5 / 25 / 27.5 / 30%',
            valuesHTML:
              '20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 45% AP)',
            damagetype: 'Magic',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Maximum Slow:',
            raw: '10 / 15 / 20 / 25 / 30%',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
          },
          {
            effectType: 'Damage',
            name: 'Magic Resistance Reduction:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            damagetype: 'Magic',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The next instance of non- persistent damage that the  sleeping target takes from  champions, large  monsters or  structures consumes the debuff to deal  bonus true damage equal to the post-mitigation damage dealt, capped at Sleepy Trouble Bubble's damage. The bonus damage is dealt before the triggering damage.",
        descriptionHTML:
          'The next instance of non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent</a></span> damage that the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleeping</a></span> target takes from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Structures"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span> consumes the debuff to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> equal to the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt, capped at <i>Sleepy Trouble Bubble\'s</i> damage. The <b>bonus</b> damage is dealt before the triggering damage.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Damage Cap:',
            values: '70 / 110 / 150 / 190 / 230 (+ 45% AP)',
            valuesHTML:
              '70 / 110 / 150 / 190 / 230 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Damage Cap:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 45% AP)',
            damagetype: 'None',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <b>Zoe</b> will gain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured vision"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">obscured vision</a></span> of the target while they\'re <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span> if they are not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span>.\n<ul><li>If exceptionally close to terrain, the bubble will pass through without detection and will still be able to pass through a second piece of terrain - although it sacrifices any range its already used going through the first piece.</li>\n<li><i>Sleepy Trouble Bubble</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li><i>Sleepy Trouble Bubble\'s</i> range will be extended if <b>Zoe</b> casts it right before blinking back from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-ability="Portal Jump" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL#Portal_Jump" title="Portal Jump"><img alt="Portal Jump" src="/wiki/images/Zoe_Portal_Jump.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL#Portal_Jump" title="Zoe/LoL">Portal Jump</a></span></span>. This is due to the range of the missile being measured at the start of the cast time and <b>Zoe</b> already having blinked back once the cast time finishes.</li>\n<li>At the end of the path of the initial missile, before continuing with the short bounce, <i>Sleepy Trouble Bubble</i> checks for targets in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 100 radius to immediately collide with.\n<ul><li>This "lollipop" is one of only a few that is larger than the ability\'s missile width.</li></ul></li>\n<li><i>Sleepy Trouble Bubble</i> can still be collided with during the short bounce between end of initial missile and the trap being formed.\n<ul><li>This seems to use a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> very small or negative collision radius, rather than normal missile collision.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
  'Portal Jump': {
    name: 'Portal Jump',
    display_name: 'Portal Jump',
    champion: 'Zoe',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ZoeR.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '575',
    cast_time: '0.<small>25</small>',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">11 / 8 / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL" title="Zoe"><img alt="Zoe" src="/wiki/images/Zoe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL" title="Zoe/LoL">Zoe</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> in the target direction, after which she cannot move for a brief moment.',
      'Afterwards, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> back to her starting position.',
    ],
    description: [
      {
        icon: '/wiki/images/Portal_Jump.png',
        description:
          'Active: Zoe  blinks in the target direction and remains there for 0.75 seconds, during which she sets her movement speed to a static 0 and has  unobstructed vision. Afterwards, she  blinks back to her casting position.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zoe</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> in the target direction and remains there for 0.<small>75</small> seconds, during which she sets her <span style="color: #F5EE99; white-space:normal">movement speed</span> to a <span style="color: #F5EE99; white-space:normal">static 0</span> and has <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span>. Afterwards, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> back to her casting position.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Portal Jump  resets Zoe's basic attack timer. Zoe is unable to basic attack and cast her abilities and movement spells for 0.75 seconds after casting Portal Jump and for 0.5 seconds after blinking back.",
        descriptionHTML:
          '<i>Portal Jump <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Zoe\'s</b> basic attack timer. <b>Zoe</b> is unable to basic attack and cast her abilities and movement spells for 0.<small>75</small> seconds after casting </i>Portal Jump<i> and for 0.<small>5</small> seconds after blinking back.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    notes:
      '* <b>Zoe</b> will always <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> back.\n<ul><li><ul><li>She will still be considered to blink even if she fails to move her intended location while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attached</a></span> (e.g. if she were affected by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-ability="The Show Stopper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL#The_Show_Stopper" title="The Show Stopper"><img alt="The Show Stopper" src="/wiki/images/Sett_The_Show_Stopper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL#The_Show_Stopper" title="Sett/LoL">The Show Stopper</a></span></span>).</li></ul></li>\n<li><b>Zoe</b> can attack and cast abilities and movement spells at the target location for 0.<small>5</small> seconds after she is able to use them again.</li>\n<li>Upon reaching her destination, <b>Zoe</b> will either raspberry at the nearest enemy champion, or lick an ice cream cone when there are no enemy champions in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span>.</li>\n<li><b>Zoe\'</b>s return position is shifted by 25 units in the target direction from her cast location.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Zoe_Original_R_1.ogg   "Whoop!"',
    yvideo: 'Zoe - R',
  },
} satisfies { [skillName in string]: SkillData };
