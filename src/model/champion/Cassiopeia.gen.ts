import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Cassiopeia';

export default {
  'Serpentine Grace': {
    name: 'Serpentine Grace',
    display_name: 'Serpentine Grace',
    champion: 'Cassiopeia',
    skill: 'I',
    image: {
      full: 'Cassiopeia_Passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia"><img alt="Cassiopeia" src="/wiki/images/Cassiopeia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">Cassiopeia</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">Movement Speed</span></span> per level, but she cannot purchase <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Boots" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Boots" title="Boots"><img alt="Boots" src="/wiki/images/Boots_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Boots" title="Boots">Boots</a></span></span> items.',
    ],
    description: [
      {
        icon: '/wiki/images/Serpentine_Grace.png',
        description:
          'Innate: Cassiopeia gains 4 − 72 (based on level)  bonus movement speed, but she cannot purchase Boots.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Cassiopeia</b> gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="4;" data-finish="72;" data-bot_values="4;8;12;16;20;24;28;32;36;40;44;48;52;56;60;64;68;72" data-top_values="">4 − 72 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, but she cannot purchase <a href="/wiki/Boots" title="Boots">Boots</a>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'Cassiopeia gains 4 − 72 (based on level)  bonus movement speed, but she cannot purchase Boots.',
            values: [
              4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68,
              72,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed, but she cannot purchase Boots.',
            pre: 'Cassiopeia gains 4 − 72',
            post: 'bonus movement speed, but she cannot purchase Boots.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* The movement speed from <i>Serpentine Grace</i> is worth <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="48 Gold"><img alt="48 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">48</span></span> per level, up to a maximum of <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="864 Gold"><img alt="864 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">864</span></span> at level 18.\n<ul><li>Without other movement speed modifiers taken into account, <i>Serpentine Grace</i> grants <b>Cassiopeia</b> a total of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="332;" data-finish="400;" data-bot_values="332;336;340;344;348;352;356;360;364;368;372;376;380;384;388;392;396;400" data-top_values="">332 − 400 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span>.</li>\n<li>As <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Predator" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Predator_(Rune)" title="Predator"><img alt="Predator" src="/wiki/images/Predator_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Predator_(Rune)" class="mw-redirect" title="Predator (Rune)">Predator</a></span></span> and <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Magical Footwear" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Magical_Footwear_(Rune)" title="Magical Footwear"><img alt="Magical Footwear" src="/wiki/images/Magical_Footwear_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Magical_Footwear_(Rune)" class="mw-redirect" title="Magical Footwear (Rune)">Magical Footwear</a></span></span> require boots, they will be replaced with <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span> and <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Perfect Timing" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Perfect_Timing_(Rune)" title="Perfect Timing"><img alt="Perfect Timing" src="/wiki/images/Perfect_Timing_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Perfect_Timing_(Rune)" class="mw-redirect" title="Perfect Timing (Rune)">Perfect Timing</a></span></span>, respectively.</li></ul>',
  },
  'Noxious Blast': {
    name: 'Noxious Blast',
    display_name: 'Noxious Blast',
    champion: 'Cassiopeia',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'CassiopeiaQ.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '850',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200',
    cast_time: '0.<small>25</small>',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'mana',
    cooldown: '3.<small>5</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia"><img alt="Cassiopeia" src="/wiki/images/Cassiopeia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">Cassiopeia</a></span></span> blasts an area with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">Poison</a></span> after a brief delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> over time to enemies hit. <br>She gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> if she hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Noxious_Blast.png',
        description:
          'Active: Cassiopeia creates a blast at the target location that explodes after a 0.4-second delay. Enemies within the blast are  poisoned for 3 seconds, taking magic damage every second over the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Cassiopeia</b> creates a blast at the target location that explodes after a 0.<small>4</small>-second delay. Enemies within the blast are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poisoned</a></span> for 3 seconds, taking <span style="color: #00B0F0; white-space:normal">magic damage</span> every second over the duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies within the blast are  poisoned for 3 seconds, taking magic damage every second over the duration.',
            damagetype: 'Magic',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'within the blast are  poisoned for 3 seconds, taking magic damage every second over the duration.',
            pre: 'Enemies within the blast are  poisoned for 3 seconds, taking magic damage every second over the duration.',
          },
        ],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values: '75 / 110 / 145 / 180 / 215 (+ 90% AP)',
            valuesHTML:
              '75 / 110 / 145 / 180 / 215 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '75 / 110 / 145 / 180 / 215 (+ 90% AP)',
            damagetype: 'Magic',
            values: [75, 110, 145, 180, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 110 / 145 / 180 / 215',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Noxious Blast hits an enemy  champion, Cassiopeia gains  bonus movement speed that decays over 3 seconds.',
        descriptionHTML:
          'If <i>Noxious Blast</i> hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Cassiopeia</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'If Noxious Blast hits an enemy  champion, Cassiopeia gains  bonus movement speed that decays over 3 seconds.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Noxious Blast hits an enemy  champion, Cassiopeia gains  bonus movement speed that decays over 3 seconds.',
            pre: 'If Noxious Blast hits an enemy  champion, Cassiopeia gains  bonus movement speed that decays over 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
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
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: true,
    notes:
      '* <i>Noxious Blast</i> always uses <a href="/wiki/Quick_cast" title="Quick cast">quick cast</a>, regardless of player settings.',
    video: 'Cassiopeia QVideo.ogv',
  },
  Miasma: {
    name: 'Miasma',
    display_name: 'Miasma',
    champion: 'Cassiopeia',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'CassiopeiaW.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '700',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Individual poison clouds">200</span>',
    speed: '3000',
    cast_time: '0.<small>25</small>',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'mana',
    cooldown: '24 / 22 / 20 / 18 / 16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia"><img alt="Cassiopeia" src="/wiki/images/Cassiopeia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">Cassiopeia</a></span></span> spews several clouds of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">Poison</a></span> that linger, continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within. They are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>.',
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">Grounded</a></span> enemies cannot use Movement abilities.',
    ],
    description: [
      {
        icon: '/wiki/images/Miasma.png',
        description:
          'Active: Cassiopeia spews forth 8 bolts of venom in an arc at the target location, creating toxic clouds at the area for 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Cassiopeia</b> spews forth 8 bolts of venom in an arc at the target location, creating toxic clouds at the area for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Cassiopeia spews forth 8 bolts of venom in an arc at the target location, creating toxic clouds at the area for 5 seconds.',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'spews forth 8 bolts of venom in an arc at the target location, creating toxic clouds at the area for 5 seconds.',
            pre: 'Cassiopeia spews forth 8 bolts of venom in an arc at the target location, creating toxic clouds at the area for 5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Enemies within the clouds are  poisoned to take magic damage every second and become  grounded and  slowed by an amount that decays over the area's duration.",
        descriptionHTML:
          'Enemies within the clouds are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poisoned</a></span> to take <span style="color: #00B0F0; white-space:normal">magic damage</span> every second and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by an amount that decays over the area\'s duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '20 / 25 / 30 / 35 / 40 (+ 15% AP)',
            valuesHTML:
              '20 / 25 / 30 / 35 / 40 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '40 / 50 / 60 / 70 / 80%',
            valuesHTML: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 15% AP)',
            damagetype: 'Magic',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Miasma will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Miasma will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    projectile: 'True',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">Cleanses</a></span> are ineffective against <i>Miasma</i> since the area of effect constantly reapplies the effect.\n<ul><li>If a target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> while affected by the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">ground</a></span>, the debuff will refresh to 0.<small>25</small> seconds.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> will block the portion of <i>Miasma</i> it destroys.</li></ul>',
    video: 'Cassiopeia WVideo.ogv',
  },
  'Twin Fang': {
    name: 'Twin Fang',
    display_name: 'Twin Fang',
    champion: 'Cassiopeia',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'CassiopeiaE.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '700',
    speed: '2500',
    cast_time: '0.<small>125</small>',
    cost: '50 / 48 / 46 / 44 / 42',
    costtype: 'mana',
    cooldown: '0.<small>75</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia"><img alt="Cassiopeia" src="/wiki/images/Cassiopeia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">Cassiopeia</a></span></span> launches an attack at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>. If this attack kills the target, the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> is refunded.',
      'Against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poisoned</a></span> target, the attack deals increased damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> her.',
    ],
    description: [
      {
        icon: '/wiki/images/Twin_Fang.png',
        description:
          "Active: Cassiopeia launches her fangs at the target enemy that deal 52 − 120 (based on level) (+ 10% AP) magic damage. If this kills the target, Twin Fang's  mana cost is refunded.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Cassiopeia</b> launches her fangs at the target enemy that deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="52;" data-finish="120;" data-bot_values="52;56;60;64;68;72;76;80;84;88;92;96;100;104;108;112;116;120" data-top_values="">52 − 120 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>. If this kills the target, <i>Twin Fang\'s</i> <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span> is refunded.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Cassiopeia launches her fangs at the target enemy that deal 52 − 120 (based on level) (+ 10% AP) magic damage',
            damagetype: 'Magic',
            values: [
              52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108,
              112, 116, 120,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage',
            pre: 'Cassiopeia launches her fangs at the target enemy that deal 52 − 120',
            post: 'magic damage',
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
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Against a  poisoned target, Twin Fang deals bonus magic damage and  heals Cassiopeia. The heal is reduced by 75% against  minions and small and medium  monsters.',
        descriptionHTML:
          'Against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poisoned</a></span> target, <i>Twin Fang</i> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Cassiopeia</b>. The heal is reduced by 75% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and small and medium <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'The heal is reduced by 75% against  minions and small and medium  monsters.',
            healType: 'DrainEffect',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against  minions and small and medium  monsters.heal is reduced by 75',
            pre: 'The heal is reduced by 75% against  minions and small and medium  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '20 / 40 / 60 / 80 / 100 (+ 60% AP)',
            valuesHTML:
              '20 / 40 / 60 / 80 / 100 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Heal:',
            values: '10 / 11.5 / 13 / 14.5 / 16% AP',
            valuesHTML:
              '<span style="color: #7A6DFF; white-space:normal">10 / 11.<small>5</small> / 13 / 14.<small>5</small> / 16% AP</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '20 / 40 / 60 / 80 / 100 (+ 60% AP)',
            damagetype: 'Magic',
            values: [20, 40, 60, 80, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 40 / 60 / 80 / 100',
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
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '10 / 11.5 / 13 / 14.5 / 16% AP',
            healType: 'DrainEffect',
            values: [10, 11.5, 13, 14.5, 16],
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText: 'AP',
            pre: '10 / 11.5 / 13 / 14.5 / 16% AP',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* Upon reaching the target, <i>Twin Fang</i> will wait for an ongoing <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-ability="Noxious Blast" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL#Noxious_Blast" title="Noxious Blast"><img alt="Noxious Blast" src="/wiki/images/Cassiopeia_Noxious_Blast.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL#Noxious_Blast" title="Cassiopeia/LoL">Noxious Blast</a></span></span> to explode before dealing its damage.\n<ul><li><i>Twin Fang\'s</i> damage against poisoned targets:\n<ul><li>When maxed first: <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="72;76;100;104;128;132;156;160;184;188;192;196;200;204;208;212;216;220" data-top_values="">72 − 220 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>.</li>\n<li>When maxed second: <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="72;76;80;84;88;92;96;120;124;148;152;176;200;204;208;212;216;220" data-top_values="">72 − 220 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>.</li>\n<li>When maxed last: <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="72;76;80;84;88;92;96;100;104;108;112;116;120;144;168;172;196;220" data-top_values="">72 − 220 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>.</li></ul></li>\n<li><i>Twin Fang\'s</i> cast indicator is incorrectly adding her own radius to the range like an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Edge range"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">edge range</a></span> ability, and therefore slightly larger than the actual cast range <i>Twin Fang</i> can cast at.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    video: 'Cassiopeia EVideo.ogv',
  },
  'Petrifying Gaze': {
    name: 'Petrifying Gaze',
    display_name: 'Petrifying Gaze',
    champion: 'Cassiopeia',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'CassiopeiaR.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="950 but starts 100 units behind Cassiopeia. Because of this, range is slightly greater laterally">850</span>',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pending for test">80°</span>',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia"><img alt="Cassiopeia" src="/wiki/images/Cassiopeia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">Cassiopeia</a></span></span> blasts in a cone, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> any that are facing her, while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> any others with their back turned.',
    ],
    description: [
      {
        icon: '/wiki/images/Petrifying_Gaze.png',
        description:
          'Active: Cassiopeia blasts enemies in a cone in the target direction, dealing magic damage to enemies struck within and  slowing them by 40% for 2 seconds. Enemies with their facing direction towards her are instead  stunned for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Cassiopeia</b> blasts enemies in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies struck within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 40% for 2 seconds. Enemies with their facing direction towards her are instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Cassiopeia blasts enemies in a cone in the target direction, dealing magic damage to enemies struck within and  slowing them by 40% for 2 seconds',
            damagetype: 'Magic',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 2 secondsblasts enemies in a cone in the target direction, dealing magic damage to enemies struck within and  slowing them by 40',
            pre: 'Cassiopeia blasts enemies in a cone in the target direction, dealing magic damage to enemies struck within and  slowing them by 40% for 2 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 50% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 50% AP)',
            damagetype: 'Magic',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <b>Cassiopeia</b> will turn to face the target direction over the cast time.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Petrifying Gaze\'s</i> target direction will change if <b>Cassiopeia\'s</b> facing direction changes during the cast time (i.e. through <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knockbacks</a></span>).</li></ul></li>\n<li>The facing direction of champions whose abilities/animations cause them to lock their facing or spin is always the direction they are moving in. For abilities that cause the champion to spin in place (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-ability="Death Lotus" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL#Death_Lotus" title="Death Lotus"><img alt="Death Lotus" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL#Death_Lotus" title="Katarina/LoL">Death Lotus</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Garen" data-ability="Judgment" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Garen/LoL#Judgment" title="Judgment"><img alt="Judgment" src="/wiki/images/Garen_Judgment.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Garen/LoL#Judgment" title="Garen/LoL">Judgment</a></span></span>) it will factor the direction they were facing on cast.\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL" title="Lucian\'s"><img alt="Lucian\'s" src="/wiki/images/Lucian_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL" title="Lucian/LoL">Lucian\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="The Culling" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#The_Culling" title="The Culling"><img alt="The Culling" src="/wiki/images/Lucian_The_Culling.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#The_Culling" title="Lucian/LoL">The Culling</a></span></span></span> is an exception and his facing direction is actually considered to be the direction he is facing.</li></ul></li></ul>',
    video: 'Cassiopeia RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
