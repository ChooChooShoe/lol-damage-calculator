import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Lulu';

export default {
  'Pix, Faerie Companion': {
    name: 'Pix, Faerie Companion',
    display_name: 'Pix, Faerie Companion',
    champion: 'Lulu',
    skill: 'I',
    image: {
      full: 'Lulu_PixFaerieCompanion.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bolt missile width">60</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bolt missile speed, 5200 acceleration; reaching maximum speed within 0.33 seconds">900 - 2600</span>',
    customlabel: 'Leash Range',
    custominfo:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pix\' leash range when moving freely">1600</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pix\' leash range when on another unit (Estimated)">2050</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL" title="Lulu"><img alt="Lulu" src="/wiki/images/Lulu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL" title="Lulu/LoL">Lulu</a></span></span> is assisted by <b>Pix</b>, whom follows her around. Whenever <b>Lulu</b> basic attacks, <b>Pix</b> fires 3 bolts that deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
      'Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Help, Pix!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Help,_Pix!" title="Help, Pix!"><img alt="Help, Pix!" src="/wiki/images/Lulu_Help%2C_Pix%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Help,_Pix!" title="Lulu/LoL">Help, Pix!</a></span></span></i> on an ally champion transfers <b>Pix</b> to them, to which he fires with their basic attacks.',
      '<b>Pix</b> snaps back to <b>Lulu</b> if she moves too far away.',
    ],
    description: [
      {
        icon: '/wiki/images/Pix,_Faerie_Companion.png',
        description:
          'Innate: Lulu is assisted by Pix, an  untargetable faerie, who follows her around and fires a barrage of 3 bolts towards her target whenever she uses a basic attack on-attack. Each bolt deals 5 − 39 (based on level) (+ 5% AP) magic damage to the first enemy it collides with, for a total of 15 − 117 (based on level) (+ 15% AP) on hitting a single target with all three bolts.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Lulu</b> is assisted by <i>Pix</i>, an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> faerie, who follows her around and fires a barrage of 3 bolts towards her target whenever she uses a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>. Each bolt deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="39;" data-bot_values="5;7;9;11;13;15;17;19;21;23;25;27;29;31;33;35;37;39" data-top_values="">5 − 39 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy it collides with, for a total of <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="117;" data-bot_values="15;21;27;33;39;45;51;57;63;69;75;81;87;93;99;105;111;117" data-top_values="">15 − 117 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> on hitting a single target with all three bolts.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: 'Lulu is assisted by Pix, an  untargetable faerie, who follows her around and fires a barrage of 3 bolts towards her target whenever she uses a basic attack on-attack',
            values: 3,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'is assisted by Pix, an  untargetable faerie, who follows her around and fires a barrage of 3 bolts towards her target whenever she uses a basic attack on-attack',
            pre: 'Lulu is assisted by Pix, an  untargetable faerie, who follows her around and fires a barrage of 3 bolts towards her target whenever she uses a basic attack on-attack',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Each bolt deals 5 − 39 (based on level) (+ 5% AP) magic damage to the first enemy it collides with, for a total of 15 − 117 (based on level) (+ 15% AP) on hitting a single target with all three bolts.',
            damagetype: 'Magic',
            values: [
              5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37,
              39,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'magic damage to the first enemy it collides with, for a total of 15 − 117',
            pre: 'Each bolt deals 5 − 39',
            post: 'magic damage to the first enemy it collides with, for a total of 15 − 117',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5% AP',
              },
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Casting  Help, Pix! on an ally champion transfers Pix's help to them, causing him to fire the bolts dependent on their basic attacks.",
        descriptionHTML:
          'Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Help, Pix!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Help,_Pix!" title="Help, Pix!"><img alt="Help, Pix!" src="/wiki/images/Lulu_Help%2C_Pix%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Help,_Pix!" title="Lulu/LoL">Help, Pix!</a></span></span></i> on an ally champion transfers <i>Pix\'s</i> help to them, causing him to fire the bolts dependent on their basic attacks.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Pix snaps back to Lulu if she is too far away.',
        descriptionHTML:
          '<i>Pix snaps back to <b>Lulu</b> if she is too far away.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'default',
    projectile: 'True',
    notes:
      '* <i>Pix\'s</i> bolts do not fire alongside abilities that apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects (e.g. <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>).\n<ul><li><i>Pix</i> does not fire if the target dies.</li>\n<li><i>Pix</i> consumes one stack of <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spellthief\'s Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spellthief%27s_Edge" title="Spellthief\'s Edge\'s"><img alt="Spellthief\'s Edge\'s" src="/wiki/images/Spellthief%27s_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spellthief%27s_Edge" title="Spellthief\'s Edge">Spellthief\'s Edge\'s</a></span></span> <a href="/wiki/Named_item_effect#Tribute" title="Named item effect">Tribute</a>.</li>\n<li><i>Pix</i> fires from his own location and not from the unit he is following.</li>\n<li><i>Pix\'s</i> damage is counted towards the champion he is currently helping.</li>\n<li>The empowered attack does not trigger against <a href="/wiki/Structure" class="mw-redirect" title="Structure">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li>Neither of them will intercept <i>Pix\'s</i> bolts.</li></ul></li></ul>',
  },
  Glitterlance: {
    name: 'Glitterlance',
    display_name: 'Glitterlance',
    champion: 'Lulu',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'LuluQ.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '950',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '1450',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL" title="Lulu"><img alt="Lulu" src="/wiki/images/Lulu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL" title="Lulu/LoL">Lulu</a></span></span> and <b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span></b> each fire a magic bolt toward the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Glitterlance.png',
        description:
          'Active: Lulu and  Pix each fire a magic bolt towards the target point, each one dealing magic damage to enemies hit, reduced to 70% against  minions, and  slowing them by 80% decaying over 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lulu</b> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span></i> each fire a magic bolt towards the target point, each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, reduced to 70% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 80% decaying over 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Lulu and  Pix each fire a magic bolt towards the target point, each one dealing magic damage to enemies hit, reduced to 70% against  minions, and  slowing them by 80% decaying over 2 seconds.',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against  minions, and  slowing them by 80and  Pix each fire a magic bolt towards the target point, each one dealing magic damage to enemies hit, reduced to 70',
            pre: 'Lulu and  Pix each fire a magic bolt towards the target point, each one dealing magic damage to enemies hit, reduced to 70% against  minions, and  slowing them by 80% decaying over 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 40% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Enemies take  25% damage from a second bolt.',
        descriptionHTML:
          'Enemies take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">25% damage</span> from a second bolt.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies take  25% damage from a second bolt.',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage from a second bolt.take  25',
            pre: 'Enemies take  25% damage from a second bolt.',
          },
        ],
        leveling: [
          {
            name: 'Reduced Damage:',
            values: '17.5 / 26.25 / 35 / 43.75 / 52.5 (+ 10% AP)',
            valuesHTML:
              '17.<small>5</small> / 26.<small>25</small> / 35 / 43.<small>75</small> / 52.<small>5</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
          {
            name: 'Reduced Minion Damage:',
            values: '12.25 / 18.375 / 24.5 / 30.625 / 36.75 (+ 7% AP)',
            valuesHTML:
              '12.<small>25</small> / 18.<small>375</small> / 24.<small>5</small> / 30.<small>625</small> / 36.<small>75</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '17.5 / 26.25 / 35 / 43.75 / 52.5 (+ 10% AP)',
            damagetype: 'None',
            values: [17.5, 26.25, 35, 43.75, 52.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '17.5 / 26.25 / 35 / 43.75 / 52.5',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Reduced Minion Damage:',
            raw: '12.25 / 18.375 / 24.5 / 30.625 / 36.75 (+ 7% AP)',
            damagetype: 'None',
            values: [12.25, 18.375, 24.5, 30.625, 36.75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12.25 / 18.375 / 24.5 / 30.625 / 36.75',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      "* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><ul><li><i>Pix</i> fires his bolt from wherever he is when <b>Lulu</b> casts <i>Glitterlance</i>. <b>Lulu's</b> bolt will fire from wherever she is at the end of the cast time.\n<ul><li>Depending on cursor position both bolts can either crossfire, fire in parallel, or in opposite directions.</li></ul></li></ul></li></ul>",
  },
  Whimsy: {
    name: 'Whimsy',
    display_name: 'Whimsy',
    champion: 'Lulu',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'LuluW.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '650',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Polymorph travel speed">2250</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enemy cast">0.<small>2419</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ally cast">None</span>',
    cost: '65',
    costtype: 'Mana',
    cooldown: '17 / 16.<small>5</small> / 16 / 15.<small>5</small> / 15',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL" title="Lulu"><img alt="Lulu" src="/wiki/images/Lulu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL" title="Lulu/LoL">Lulu</a></span></span> can cast <i>Whimsy</i> on herself or the target champion.',
      '<span class="template_sbc"><b>Enemy cast:</b></span> <b>Lulu</b> sends a spell to the target that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphs</a></span> them into a harmless critter, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarms</a></span> them, and reduces their <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span></span> for a short time.',
      '<span class="template_sbc"><b>Ally cast:</b></span> <b>Lulu</b> instantly casts a spell on the target that grants <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Whimsy.png',
        description:
          'Active: Lulu can cast Whimsy on herself or the target champion.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lulu</b> can cast <i>Whimsy</i> on herself or the target champion.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemy Cast: Lulu launches a spell onto the target enemy champion that  polymorphs them into a harmless critter for a duration, during which their base movement speed is reduced by 60, and  disarming them for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Enemy Cast:</b></span> <b>Lulu</b> launches a spell onto the target enemy champion that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphs</a></span> them into a harmless critter for a duration, during which their <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> is reduced by <span style="color: #F5EE99; white-space:normal">60</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarming</a></span> them for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Enemy Cast:',
            raw: 'Lulu launches a spell onto the target enemy champion that  polymorphs them into a harmless critter for a duration, during which their base movement speed is reduced by 60, and  disarming them for the same duration.',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'launches a spell onto the target enemy champion that  polymorphs them into a harmless critter for a duration, during which their base movement speed is reduced by 60, and  disarming them for the same duration.',
            pre: 'Lulu launches a spell onto the target enemy champion that  polymorphs them into a harmless critter for a duration, during which their base movement speed is reduced by 60, and  disarming them for the same duration.',
          },
        ],
        leveling: [
          {
            name: 'Disable Duration:',
            values: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            valuesHTML:
              '1.<small>2</small> / 1.<small>4</small> / 1.<small>6</small> / 1.<small>8</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            values: [1.2, 1.4, 1.6, 1.8, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Self / Ally Cast: Lulu instantly casts erratic magic upon the target allied champion or herself, granting the target  bonus attack speed and  25% (+ 5% per 100 AP) bonus movement speed for the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Self / Ally Cast:</b></span> <b>Lulu</b> instantly casts erratic magic upon the target allied champion or herself, granting the target <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for the duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Self / Ally Cast:',
            raw: 'Lulu instantly casts erratic magic upon the target allied champion or herself, granting the target  bonus attack speed and  25% (+ 5% per 100 AP) bonus movement speed for the duration.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed for the duration.',
            pre: 'Lulu instantly casts erratic magic upon the target allied champion or herself, granting the target  bonus attack speed and  25%',
            post: 'bonus movement speed for the duration.',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 5% per 100 AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '25 / 27.5 / 30 / 32.5 / 35%',
            valuesHTML:
              '25 / 27.<small>5</small> / 30 / 32.<small>5</small> / 35%',
          },
          {
            name: 'Duration:',
            values: '3 / 3.25 / 3.5 / 3.75 / 4',
            valuesHTML:
              '3 / 3.<small>25</small> / 3.<small>5</small> / 3.<small>75</small> / 4',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '25 / 27.5 / 30 / 32.5 / 35%',
            values: [25, 27.5, 30, 32.5, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 27.5 / 30 / 32.5 / 35%',
          },
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '3 / 3.25 / 3.5 / 3.75 / 4',
            values: [3, 3.25, 3.5, 3.75, 4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3.25 / 3.5 / 3.75 / 4',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies / Allies / Self',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'false',
    notes:
      '* <i>Whimsy\'s</i> movement speed reduction is not affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span>.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but still go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and pay its cost.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li>This only applies to the enemy cast.</li></ul></li></ul>',
  },
  'Help, Pix!': {
    name: 'Help, Pix!',
    display_name: 'Help, Pix!',
    champion: 'Lulu',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'LuluE.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '650',
    cast_time: 'none',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL" title="Lulu"><img alt="Lulu" src="/wiki/images/Lulu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL" title="Lulu/LoL">Lulu</a></span></span> can cast <i>Help, Pix!</i> on herself or the target champion.',
      '<span class="template_sbc"><b>Enemy cast:</b></span> <b>Lulu</b> sends <b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span></b> to the target for a few seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them.',
      '<span class="template_sbc"><b>Ally cast:</b></span> <b>Lulu</b> sends <b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span></b> to the target, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span> them for a short time if they are a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Help,_Pix!.png',
        description:
          'Active: Lulu can cast Help, Pix! on herself or the target unit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lulu</b> can cast <i>Help, Pix!</i> on herself or the target unit.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemy Cast: Lulu sends  Pix to the far side of the target enemy for 4 seconds, dealing magic damage and  revealing them for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Enemy Cast:</b></span> <b>Lulu</b> sends <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span></i> to the far side of the target enemy for 4 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Enemy Cast:',
            raw: 'Lulu sends  Pix to the far side of the target enemy for 4 seconds, dealing magic damage and  revealing them for the same duration.',
            damagetype: 'Magic',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'sends  Pix to the far side of the target enemy for 4 seconds, dealing magic damage and  revealing them for the same duration.',
            pre: 'Lulu sends  Pix to the far side of the target enemy for 4 seconds, dealing magic damage and  revealing them for the same duration.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 40% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 40% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Self / Ally Cast: Lulu sends  Pix to the target ally for 6.25 seconds. If the target is a  champion, they are granted a  shield for 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Self / Ally Cast:</b></span> <b>Lulu</b> sends <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span></i> to the target ally for 6.<small>25</small> seconds. If the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, they are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Self / Ally Cast:',
            raw: 'Lulu sends  Pix to the target ally for 6.25 seconds',
            values: 6,
            user: 'none',
            units: '',
            unitsText: 'sends  Pix to the target ally for 6.25 seconds',
            pre: 'Lulu sends  Pix to the target ally for 6.25 seconds',
          },
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: 'If the target is a  champion, they are granted a  shield for 2.5 seconds.',
            damagetype: 'None',
            shieldType: 'OutgoingShields',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'the target is a  champion, they are granted a  shield for 2.5 seconds.',
            pre: 'If the target is a  champion, they are granted a  shield for 2.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '75 / 110 / 145 / 180 / 215 (+ 55% AP)',
            valuesHTML:
              '75 / 110 / 145 / 180 / 215 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '75 / 110 / 145 / 180 / 215 (+ 55% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [75, 110, 145, 180, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 110 / 145 / 180 / 215',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies / Allies / Self',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'False',
    callforhelp: 'true',
    notes:
      '* <i>Help, Pix!</i> can be <a href="/wiki/Self-targeted" title="Self-targeted">self-cast</a>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Riposte" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Riposte" title="Riposte"><img alt="Riposte" src="/wiki/images/Fiora_Riposte.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Riposte" title="Fiora/LoL">Riposte</a></span></span> will block the damage but <b>Pix</b> will still follow regardless.</li>\n<li><i>Pix</i> will continue to assist the target ally for the full duration even if the shield breaks (the same applies for the shield if the target ally leaves <i>Pix\'s</i> leash range).</li>\n<li><i>Pix\'s</i> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Glitterlance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Glitterlance" title="Glitterlance"><img alt="Glitterlance" src="/wiki/images/Lulu_Glitterlance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Glitterlance" title="Lulu/LoL">Glitterlance</a></span></span> bolt can be fired while he is away from <b>Lulu</b> from his location and towards the cursor (effectively extending <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Glitterlance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Glitterlance" title="Glitterlance\'s"><img alt="Glitterlance\'s" src="/wiki/images/Lulu_Glitterlance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Glitterlance" title="Lulu/LoL">Glitterlance\'s</a></span></span> range).</li></ul>',
  },
  'Wild Growth': {
    name: 'Wild Growth',
    display_name: 'Wild Growth',
    champion: 'Lulu',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'LuluR.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knockup radius">400</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Aura radius">400</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL" title="Lulu"><img alt="Lulu" src="/wiki/images/Lulu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL" title="Lulu/LoL">Lulu</a></span></span> enchants herself or the target allied champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> surrounding enemies.',
      'The target remains enchanted for a few seconds, gaining <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> health</span></span>, size, and an aura that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Wild_Growth.png',
        description:
          'Active: Lulu enlarges herself or the target allied champion,  knocking up nearby enemies for 0.75 seconds. For the next 7 seconds, the target gains  bonus health and 40% increased size and  slows nearby enemies, which lingers for 0.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lulu</b> enlarges herself or the target allied champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> nearby enemies for 0.<small>75</small> seconds. For the next 7 seconds, the target gains <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> health</span></span> and 40% increased <a href="/wiki/Size" title="Size">size</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies, which lingers for 0.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'For the next 7 seconds, the target gains  bonus health and 40% increased size and  slows nearby enemies, which lingers for 0.25 seconds.',
            healType: 'OutgoingHeals',
            values: 7,
            valuesIsPercent: true,
            user: 'target',
            units: 'bonus_hp',
            unitsText:
              'increased size and  slows nearby enemies, which lingers for 0.25 seconds.the next 7 seconds, the target gains  bonus health and 40',
            pre: 'For the next 7 seconds, the target gains  bonus health and 40% increased size and  slows nearby enemies, which lingers for 0.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Health:',
            values: '275 / 350 / 425 / 500 / 575 (+ 45% AP)',
            valuesHTML:
              '275 / 350 / 425 / 500 / 575 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 37.5 / 45 / 52.5 / 60%',
            valuesHTML:
              '30 / 37.<small>5</small> / 45 / 52.<small>5</small> / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Health:',
            raw: '275 / 350 / 425 / 500 / 575 (+ 45% AP)',
            healType: 'BonusHealth',
            values: [275, 350, 425, 500, 575],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '275 / 350 / 425 / 500 / 575',
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
            name: 'Slow:',
            raw: '30 / 37.5 / 45 / 52.5 / 60%',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60%',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Allies / Self, Enemies',
    spellshield: true,
    notes:
      '* <i>Wild Growth\'s</i> <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span> is not affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> and its resulting health restoration will persist after the duration ends.\n<ul><li><i>Wild Growth\'s</i> size increase scales additively with other size increases.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Lulu_Original_R_0.ogg   "Hugify!"',
  },
} satisfies { [skillName in string]: SkillData };
