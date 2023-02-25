import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Lissandra';

export default {
  'Iceborn Subjugation': {
    name: 'Iceborn Subjugation',
    display_name: 'Iceborn Subjugation',
    champion: 'Lissandra',
    skill: 'I',
    image: {
      full: 'Lissandra_Passive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Aura radius around Lissandra, center-to-edge">1350</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Thrall slow field and explosion radius">450</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Whenever an enemy champion dies while <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lissandra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lissandra/LoL" title="Lissandra"><img alt="Lissandra" src="/wiki/images/Lissandra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lissandra/LoL" title="Lissandra/LoL">Lissandra</a></span></span> is nearby, she spawns a <i>Frozen Thrall</i> from their corpse.',
      '<i>Frozen Thralls</i> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> ice spirits that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> nearby enemies and gain increasing <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> over their lifespan. They will chase nearby enemies for a few seconds before exploding, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> in an area.',
    ],
    description: [
      {
        icon: '/wiki/images/Iceborn Subjugation.png',
        description:
          'Innate: Whenever a nearby enemy champion dies, Lissandra spawns a Frozen Thrall from their corpse.Frozen Thralls are  invulnerable and  untargetable ice spirits that have 33.48 − 325 (based on seconds) movement speed and  slow nearby enemies by 25%. They will chase nearby  visible enemies for 4 seconds, prioritizing  champions, after which they shatter to deal 120 − 520 (based on level) (+ 50% AP) magic damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever a nearby enemy champion dies, <b>Lissandra</b> spawns a <i>Frozen Thrall</i> from their corpse.<br><br><i>Frozen Thralls</i> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> ice spirits that have <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="seconds" data-bot_values="33.48;78.65;117.33;149.82;177.78;201.18;221.33;238.23;252.85;263.9;275.6;284.7;292.18;298.68;303.88;308.75;325" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3;3.25;3.5;3.75;4">33.<small>48</small> − 325 (based on seconds)</span> movement speed</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> nearby enemies by 25%. They will chase nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies for 4 seconds, prioritizing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, after which they shatter to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="120;140;160;180;200;220;240;260;280;300;320;340;370;400;430;460;490;520" data-top_values="">120 − 520 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: ' Whenever a nearby enemy champion dies, Lissandra spawns a Frozen Thrall from their corpse.Frozen Thralls are  invulnerable and  untargetable ice spirits that have 33.48 − 325 (based on seconds) movement speed and  slow nearby enemies by 25%',
            values: [3, 325],
            basedOn: 'seconds',
            user: 'none',
            units: '',
            unitsText: 'movement speed and  slow nearby enemies by 25%',
            pre: 'Whenever a nearby enemy champion dies, Lissandra spawns a Frozen Thrall from their corpse.Frozen Thralls are  invulnerable and  untargetable ice spirits that have 33.48 − 325',
            post: 'movement speed and  slow nearby enemies by 25%',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'They will chase nearby  visible enemies for 4 seconds, prioritizing  champions, after which they shatter to deal 120 − 520 (based on level) (+ 50% AP) magic damage to nearby enemies.',
            damagetype: 'Magic',
            values: [
              120, 143.53, 167.06, 190.59, 214.12, 237.65, 261.18, 284.71,
              308.24, 331.76, 355.29, 378.82, 402.35, 425.88, 449.41, 472.94,
              496.47, 520,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage to nearby enemies.',
            pre: 'They will chase nearby  visible enemies for 4 seconds, prioritizing  champions, after which they shatter to deal 120 − 520',
            post: 'magic damage to nearby enemies.',
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
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Thralls</i> are units that are considered champions (they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>) and they take the form of the champion they arise from.\n<ul><li><ul><li>Additionally, near the end of their life span, they will cue that champion\'s <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> animation.</li>\n<li>They cannot be teleported by an allied <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Realm Warp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Realm Warp"><img alt="Realm Warp" src="/wiki/images/Ryze_Realm_Warp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Ryze/LoL">Realm Warp</a></span></span>.</li></ul></li>\n<li><i>Iceborn Subjugation</i> will not summon a <i>Thrall</i> against enemy champions that enter a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span>, and will instead summon one after they\'ve left the state.</li></ul>',
    yvideo: 'Lissandra - Passive',
  },
  'Ice Shard': {
    name: 'Ice Shard',
    display_name: 'Ice Shard',
    champion: 'Lissandra',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'LissandraQ.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '725 / 825',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="standard width">150</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Width after shattering">180</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both before and after shattering">2200</span>',
    cast_time: '0.<small>25</small>',
    cost: '55 / 60 / 65 / 70 / 75',
    costtype: 'Mana',
    cooldown: '8 / 7 / 6 / 5 / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lissandra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lissandra/LoL" title="Lissandra"><img alt="Lissandra" src="/wiki/images/Lissandra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lissandra/LoL" title="Lissandra/LoL">Lissandra</a></span></span> throws a spear of ice in the target direction that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the first target hit and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies it passes through.',
      'If <i>Ice Shard</i> hits an enemy, it will shatter, increasing its width and maximum range.',
    ],
    description: [
      {
        icon: '/wiki/images/Ice Shard.png',
        description:
          'Active: Lissandra launches a shard of ice in the target direction that deals magic damage to enemies hit. The first target hit is  slowed for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lissandra</b> launches a shard of ice in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. The first target hit is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The first target hit is  slowed for 1.5 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'first target hit is  slowed for 1.5 seconds.',
            pre: 'The first target hit is  slowed for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 110 / 140 / 170 / 200 (+ 80% AP)',
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '20 / 24 / 28 / 32 / 36%',
            valuesHTML: '20 / 24 / 28 / 32 / 36%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 80% AP)',
            damagetype: 'Magic',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 24 / 28 / 32 / 36%',
            values: [20, 24, 28, 32, 36],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 24 / 28 / 32 / 36%',
          },
        ],
      },
      {
        description:
          'If Ice Shard hits an enemy, it will shatter, increasing its width and maximum range.',
        descriptionHTML:
          'If <i>Ice Shard</i> hits an enemy, it will shatter, increasing its width and maximum range.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* The shattering projectiles travel the remaining distance <i>Ice Shard</i> would plus an extra 100 units.\n<ul><li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the damage and the slow but will not stop the projectile from shattering.</li></ul>',
    yvideo: 'Lissandra - Q',
  },
  'Ring of Frost': {
    name: 'Ring of Frost',
    display_name: 'Ring of Frost',
    champion: 'Lissandra',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'LissandraW.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: '450',
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lissandra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lissandra/LoL" title="Lissandra"><img alt="Lissandra" src="/wiki/images/Lissandra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lissandra/LoL" title="Lissandra/LoL">Lissandra</a></span></span> freezes nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Ring of Frost.png',
        description:
          'Active: Lissandra freezes nearby enemies, dealing magic damage and  rooting them for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lissandra</b> freezes nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
          {
            name: 'Root Duration:',
            values: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
            valuesHTML:
              '1.<small>1</small> / 1.<small>2</small> / 1.<small>3</small> / 1.<small>4</small> / 1.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
            values: [1.1, 1.2, 1.3, 1.4, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes: '* No additional information.',
    yvideo: 'Lissandra - W',
  },
  'Glacial Path': {
    name: 'Glacial Path',
    display_name: 'Glacial Path',
    champion: 'Lissandra',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'LissandraE.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1025',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 250',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="starting speed">1200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="minimum speed">640</span>',
    cast_time: '0.<small>25</small>',
    cost: '80 / 85 / 90 / 95 / 100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">24 / 21 / 18 / 15 / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lissandra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lissandra/LoL" title="Lissandra"><img alt="Lissandra" src="/wiki/images/Lissandra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lissandra/LoL" title="Lissandra/LoL">Lissandra</a></span></span> sends a claw of ice in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through. <i>Glacial Path</i> can be recast while the claw is active.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Lissandra</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the claw.',
    ],
    description: [
      {
        icon: '/wiki/images/Glacial Path.png',
        description:
          'Active: Lissandra sends a claw of ice in the target direction that deals magic damage to enemies it passes through, decelerating over 1.25 seconds. Glacial Path can be recast after 0.5 seconds while the claw is active.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lissandra</b> sends a claw of ice in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through, decelerating over 1.<small>25</small> seconds. <i>Glacial Path</i> can be recast after 0.<small>5</small> seconds while the claw is active.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Lissandra sends a claw of ice in the target direction that deals magic damage to enemies it passes through, decelerating over 1.25 seconds',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'sends a claw of ice in the target direction that deals magic damage to enemies it passes through, decelerating over 1.25 seconds',
            pre: 'Lissandra sends a claw of ice in the target direction that deals magic damage to enemies it passes through, decelerating over 1.25 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 60% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 60% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
        description:
          'Recast: Lissandra consumes the claw and  blinks to its current location.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Lissandra</b> consumes the claw and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to its current location.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies, Self',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '*Both casts count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><b>Lissandra</b> can reactivate <i>Glacial Path</i> for the duration (plus another 0.<small>2</small>-0.<small>3</small> seconds after the claw \'skins\' into the ground).</li>\n<li><i>Glacial Path</i> allows <b>Lissandra</b> to surpass through every single wall in all maps, so long as the claw is at least halfway through them.</li>\n<li><i>Glacial Path</i> cannot be recast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li><i>Glacial Path\'s</i> endpoint shows through terrain, <a href="/wiki/Sight" title="Sight">fog of war</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> to enemies within 600 range of it.</li></ul>',
    yvideo: 'Lissandra - E',
  },
  'Frozen Tomb': {
    name: 'Frozen Tomb',
    display_name: 'Frozen Tomb',
    champion: 'Lissandra',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'LissandraR.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '550',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 550',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enemy cast">0.<small>375</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Self cast">None</span>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lissandra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lissandra/LoL" title="Lissandra"><img alt="Lissandra" src="/wiki/images/Lissandra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lissandra/LoL" title="Lissandra/LoL">Lissandra</a></span></span> can cast <i>Frozen Tomb</i> on herself or a target enemy champion.',
      '<span class="template_sbc"><b>Enemy Cast:</b></span> <b>Lissandra</b> briefly freezes the target enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them.',
      '<span class="template_sbc"><b>Self Cast:</b></span> <b>Lissandra</b> instantly entombs herself for a short time, placing herself in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span>. She <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> over the duration based on <span style="color: #1F995C; white-space:normal">her <b>missing</b> health</span>.',
      '<span class="template_sbc"><b>Frozen Tomb:</b></span> <i>Frozen Tomb</i> creates a field of ice that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Frozen Tomb.png',
        description:
          'Active: Lissandra can cast Frozen Tomb on herself or a target enemy champion.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lissandra</b> can cast <i>Frozen Tomb</i> on herself or a target enemy champion.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Enemy Cast: Lissandra freezes the target enemy champion,  knocking them down and  stunning them for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Enemy Cast:</b></span> <b>Lissandra</b> freezes the target enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Enemy Cast:',
            raw: ' Lissandra freezes the target enemy champion,  knocking them down and  stunning them for 1.5 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'freezes the target enemy champion,  knocking them down and  stunning them for 1.5 seconds.',
            pre: 'Lissandra freezes the target enemy champion,  knocking them down and  stunning them for 1.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Self Cast: Lissandra instantly entombs herself, placing herself in  stasis for 2.5 seconds while  healing herself every 0.25 seconds over the duration, which is increased by 0% − 100% (based on missing health) at time of cast.',
        descriptionHTML:
          '<span class="template_sbc"><b>Self Cast:</b></span> <b>Lissandra</b> instantly entombs herself, placing herself in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span> for 2.<small>5</small> seconds while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself every 0.<small>25</small> seconds over the duration, which is increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="missing health" data-displayformula="1% per 1% of \'\'\'missing\'\'\' health" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on <b>missing</b> health)</span></span> at time of cast.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Self Cast:',
            raw: ' Lissandra instantly entombs herself, placing herself in  stasis for 2.5 seconds while  healing herself every 0.25 seconds over the duration, which is increased by 0% − 100% (based on missing health) at time of cast.',
            healType: 'BonusHealth',
            values: 2,
            valuesIsPercent: true,
            basedOn: 'missing health',
            user: 'none',
            units: '',
            unitsText: 'at time of cast.',
            pre: 'Lissandra instantly entombs herself, placing herself in  stasis for 2.5 seconds while  healing herself every 0.25 seconds over the duration, which is increased by 0% − 100%',
            post: 'at time of cast.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Heal per Tick:',
            values: '9 / 11.5 / 14 / 16.5 / 19 (+ 2.5% AP)',
            valuesHTML:
              '9 / 11.<small>5</small> / 14 / 16.<small>5</small> / 19 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2.<small>5</small>% AP)</span>',
          },
          {
            name: 'Minimum Total Heal:',
            values: '90 / 115 / 140 / 165 / 190 (+ 25% AP)',
            valuesHTML:
              '90 / 115 / 140 / 165 / 190 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Heal per Tick:',
            raw: '9 / 11.5 / 14 / 16.5 / 19 (+ 2.5% AP)',
            healType: 'DrainEffect',
            values: [9, 11.5, 14, 16.5, 19],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '9 / 11.5 / 14 / 16.5 / 19',
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 2.5% AP',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Minimum Total Heal:',
            raw: '90 / 115 / 140 / 165 / 190 (+ 25% AP)',
            healType: 'DrainEffect',
            values: [90, 115, 140, 165, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 115 / 140 / 165 / 190',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
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
          'Frozen Tomb creates a field of ice that spreads out from the target over 1.5 seconds and covers the surrounding area for 3 seconds, dealing magic damage to enemies and  slowing them for 0.5 seconds, refreshing every 0.25 seconds while they remain.',
        descriptionHTML:
          '<i>Frozen Tomb</i> creates a field of ice that spreads out from the target over 1.<small>5</small> seconds and covers the surrounding area for 3 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 0.<small>5</small> seconds, refreshing every 0.<small>25</small> seconds while they remain.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Frozen Tomb creates a field of ice that spreads out from the target over 1.5 seconds and covers the surrounding area for 3 seconds, dealing magic damage to enemies and  slowing them for 0.5 seconds, refreshing every 0.25 seconds while they remain.',
            damagetype: 'Magic',
            values: 1,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'Tomb creates a field of ice that spreads out from the target over 1.5 seconds and covers the surrounding area for 3 seconds, dealing magic damage to enemies and  slowing them for 0.5 seconds, refreshing every 0.25 seconds while they remain.',
            pre: 'Frozen Tomb creates a field of ice that spreads out from the target over 1.5 seconds and covers the surrounding area for 3 seconds, dealing magic damage to enemies and  slowing them for 0.5 seconds, refreshing every 0.25 seconds while they remain.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 75% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 41.25 / 52.5 / 63.75 / 75%',
            valuesHTML:
              '30 / 41.<small>25</small> / 52.<small>5</small> / 63.<small>75</small> / 75%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 75% AP)',
            damagetype: 'Magic',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 41.25 / 52.5 / 63.75 / 75%',
            values: [30, 41.25, 52.5, 63.75, 75],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 41.25 / 52.5 / 63.75 / 75%',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies, Self',
    damagetype: 'magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    callforhelp: 'true',
    notes:
      '* Enemies can only be damaged by the field of ice once every 4 seconds.\n<ul><li><ul><li>Under normal circumstances, this means once per cast of <i>Frozen Tomb</i>.</li></ul></li>\n<li>Enemies who come in contact with <i>Frozen Tomb\'s</i> slow field will be damaged and a small visual and sound effect will play.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the single-targeted portion and the radiating ice damage, but will not stop it from spreading.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost.\n<ul><li>This only applies to the enemy cast.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Lissandra_Original_R_1.ogg   "Freeze!"',
    yvideo: 'Lissandra - R',
  },
} satisfies { [skillName in string]: SkillData };
