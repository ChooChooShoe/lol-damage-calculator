import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Ziggs';

export default {
  'Short Fuse': {
    name: 'Short Fuse',
    display_name: 'Short Fuse',
    champion: 'Ziggs',
    skill: 'I',
    image: {
      full: 'ZiggsPassiveReady.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Attack missile speed, same as basic attacks">1500</span>',
    static: '12',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ziggs" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ziggs/LoL" title="Ziggs\'"><img alt="Ziggs\'" src="/wiki/images/Ziggs_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ziggs/LoL" title="Ziggs/LoL">Ziggs\'</a></span></span> next basic attack will deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, increased against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
      '<i>Short Fuse\'s</i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> whenever <b>Ziggs</b> casts an ability.',
    ],
    description: [
      {
        icon: '/wiki/images/Short_Fuse.png',
        description:
          'Innate: Periodically, Ziggs empowers his next basic attack to deal 20 − 160 (based on level) (+ 50% AP) bonus magic damage,「 increased by 150% against structures. 」「 increased to 50 − 400 (based on level) (+ 125% AP) against structures. 」',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Ziggs</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="16 +&nbsp;4 per level up to 6, then +&nbsp;8 per level up to 12, and then +&nbsp;12 per level up to 18" data-bot_values="20;24;28;32;36;40;48;56;64;72;80;88;100;112;124;136;148;160" data-top_values="">20 − 160 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>,<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;increased by 150% against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.&nbsp;」</span><span class="flipText2">「&nbsp;increased to <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="40 +&nbsp;10 per level up to 6, then +&nbsp;20 per level up to 12, and then +&nbsp;30 per level up to 18" data-bot_values="50;60;70;80;90;100;120;140;160;180;200;220;250;280;310;340;370;400" data-top_values="">50 − 400 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;125% AP)</span> against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'Periodically, Ziggs empowers his next basic attack to deal 20 − 160 (based on level) (+ 50% AP) bonus magic damage,「 increased by 150% against structures. 」「 increased to 50 − 400 (based on level) (+ 125% AP) against structures. 」',
            values: [
              20, 28.24, 36.47, 44.71, 52.94, 61.18, 69.41, 77.65, 85.88, 94.12,
              102.35, 110.59, 118.82, 127.06, 135.29, 143.53, 151.76, 160,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus magic damage,「 increased by 150% against structures. 」「 increased to 50 − 400',
            pre: 'Periodically, Ziggs empowers his next basic attack to deal 20 − 160',
            post: 'bonus magic damage,「 increased by 150% against structures. 」「 increased to 50 − 400',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
              {
                values: 125,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 125% AP',
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
          "Short Fuse's  cooldown is reduced by 4 / 5 / 6 (based on level) seconds whenever Ziggs casts an ability.",
        descriptionHTML:
          '<i>Short Fuse\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="4;1" data-finish="6;13" data-bot_values="4;5;6" data-top_values="1;7;13">4 / 5 / 6 (based on level)</span> seconds whenever <b>Ziggs</b> casts an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Short Fuse's  cooldown is reduced by 4 / 5 / 6 (based on level) seconds whenever Ziggs casts an ability.",
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'seconds whenever Ziggs casts an ability.',
            pre: "Short Fuse's  cooldown is reduced by 4 / 5 / 6",
            post: 'seconds whenever Ziggs casts an ability.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* The empowered attack will not trigger against <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Short Fuse\'s</i> interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li></ul>',
  },
  'Bouncing Bomb': {
    name: 'Bouncing Bomb',
    display_name: 'Bouncing Bomb',
    champion: 'Ziggs',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ZiggsQ.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1400',
    target_range: '850',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Hit detection on bounces">150</span>',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Explosion radius">240</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial missile">1700</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bounces travel over 0.495 seconds each, regardless of distance">Fixed time</span>',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '6 / 5.<small>5</small> / 5 / 4.<small>5</small> / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ziggs" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ziggs/LoL" title="Ziggs"><img alt="Ziggs" src="/wiki/images/Ziggs_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ziggs/LoL" title="Ziggs/LoL">Ziggs</a></span></span> throws a bomb to the target location that bounces twice forward. It will explode upon hitting an enemy, terrain, or the final bounce, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Bouncing_Bomb.png',
        description:
          'Active: Ziggs throws a bomb to the target location that bounces forward up to two times, the distance traveled each time being based on how far it was originally thrown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ziggs</b> throws a bomb to the target location that bounces forward up to two times, the distance traveled each time being based on how far it was originally thrown.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The bomb explodes upon landing near an enemy, within terrain, or the final bounce, dealing magic damage to nearby enemies.',
        descriptionHTML:
          'The bomb explodes upon landing near an enemy, within terrain, or the final bounce, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '95 / 145 / 195 / 245 / 295 (+ 65% AP)',
            valuesHTML:
              '95 / 145 / 195 / 245 / 295 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;65% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '95 / 145 / 195 / 245 / 295 (+ 65% AP)',
            damagetype: 'Magic',
            values: [95, 145, 195, 245, 295],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '95 / 145 / 195 / 245 / 295',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Bouncing Bomb will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Bouncing Bomb will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* <i>Bouncing Bomb</i> can be thrown or bounce over units/terrain.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the damage of the explosion, but the explosion can still damage other targets in the radius.</li>\n<li><b>Ziggs</b> will throw the bomb from his location at the end of the cast time, towards the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Relevant only if cast beyond maximum range">pre-clamped</span> cast location, causing the bounces to adjust their angle accordingly.</li></ul>',
  },
  'Satchel Charge': {
    name: 'Satchel Charge',
    display_name: 'Satchel Charge',
    champion: 'Ziggs',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ZiggsW.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 325 / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 400',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">1750</span>',
    cast_time: '0.<small>25</small>',
    cost: '65',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">20 / 18 / 16 / 14 / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ziggs" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ziggs/LoL" title="Ziggs"><img alt="Ziggs" src="/wiki/images/Ziggs_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ziggs/LoL" title="Ziggs/LoL">Ziggs</a></span></span> hurls a charge to the target location that remains for a few seconds. <i>Satchel Charge</i> can be recast within the duration, and does so automatically afterwards.',
      '<span class="template_sbc"><b>Recast:</b></span> The charge explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> nearby enemies hit. If this hits <b>Ziggs</b>, he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> farther away.',
      'The explosion will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">execute</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> hit <span style="color: #1F995C; white-space:normal">below a certain health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Satchel_Charge.png',
        description:
          'Active: Ziggs hurls a charge to the target location, remaining there for 4 seconds and granting  sight of the area. Satchel Charge can be recast within the duration, and does so automatically afterwards. If recast while in flight, the charge will explode immediately upon landing.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ziggs</b> hurls a charge to the target location, remaining there for 4 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. <i>Satchel Charge</i> can be recast within the duration, and does so automatically afterwards. If recast while in flight, the charge will explode immediately upon landing.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Ziggs hurls a charge to the target location, remaining there for 4 seconds and granting  sight of the area',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'hurls a charge to the target location, remaining there for 4 seconds and granting  sight of the area',
            pre: 'Ziggs hurls a charge to the target location, remaining there for 4 seconds and granting  sight of the area',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Ziggs detonates the charge, causing it to explode to deal magic damage to nearby enemies and  knock them back up to 500 units away from the center of the explosion, though not through terrain. If this hits Ziggs, he will  dash up to 825 units away from the center.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Ziggs</b> detonates the charge, causing it to explode to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span> up to 500 units away from the center of the explosion, though not through terrain. If this hits <b>Ziggs</b>, he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> up to 825 units away from the center.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Recast:',
            raw: 'Ziggs detonates the charge, causing it to explode to deal magic damage to nearby enemies and  knock them back up to 500 units away from the center of the explosion, though not through terrain',
            damagetype: 'Magic',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'detonates the charge, causing it to explode to deal magic damage to nearby enemies and  knock them back up to 500 units away from the center of the explosion, though not through terrain',
            pre: 'Ziggs detonates the charge, causing it to explode to deal magic damage to nearby enemies and  knock them back up to 500 units away from the center of the explosion, though not through terrain',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If this hits Ziggs, he will  dash up to 825 units away from the center.',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'this hits Ziggs, he will  dash up to 825 units away from the center.',
            pre: 'If this hits Ziggs, he will  dash up to 825 units away from the center.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
          'Turret Explosion: The explosion also   executes enemy  turrets within that are below a maximum health threshold.',
        descriptionHTML:
          '<span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="Turret Explosion:" src="/wiki/images/Satchel_Charge_Turret_Explosion_Indicator.png" decoding="async" loading="lazy" title="Turret Explosion:" width="20" height="20" class="lazyload"></span> <span style="white-space:normal;"><span class="template_sbc"><b>Turret Explosion:</b></span></span></span> The explosion also <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executes</a></span></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> within that are below a <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> threshold.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Demolition Threshold:',
            values: "25 / 27.5 / 30 / 32.5 / 35% of turret's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">25 / 27.<small>5</small> / 30 / 32.<small>5</small> / 35% of turret\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Demolition Threshold:',
            raw: "25 / 27.5 / 30 / 32.5 / 35% of turret's maximum health",
            healType: 'BonusHealth',
            values: [25, 27.5, 30, 32.5, 35],
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText: "of turret's maximum health",
            pre: "25 / 27.5 / 30 / 32.5 / 35% of turret's maximum health",
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Ziggs does not  dash if he is  immobilized or  grounded. He can cast any of his abilities during the dash.',
        descriptionHTML:
          '<i><b>Ziggs</b> does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>. He can cast any of his abilities during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies / Self',
    damagetype: 'magic',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'true',
    notes:
      '*The initial cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>Detonating the ability manually does not.</li></ul></li>\n<li>Deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to non-turrets and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Raw damage"><a href="/wiki/Damage" title="Damage"><img alt="Fear Beyond Death 2.png" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">raw damage</a></span> to turrets.</li>\n<li><i>Satchel Charge\'s</i> distance increases with proximity to the charge, resulting in being knocked straight up when aligned directly on top of it.</li>\n<li><b>Ziggs</b> will not <i>dash</i> from <i>Satchel Charge\'s</i> detonation while <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleporting"><img alt="Teleporting" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleporting</a></span></span> but he will while <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recalling"><img alt="Recalling" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recalling</a></span></span>.</li></ul>',
  },
  'Hexplosive Minefield': {
    name: 'Hexplosive Minefield',
    display_name: 'Hexplosive Minefield',
    champion: 'Ziggs',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ZiggsE.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effective minefield radius">325</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Detection and explosion radius of each individual mine">135</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Travel speed to cast location">1550</span>',
    cast_time: '0.<small>25</small>',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'mana',
    cooldown: '16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ziggs" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ziggs/LoL" title="Ziggs"><img alt="Ziggs" src="/wiki/images/Ziggs_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ziggs/LoL" title="Ziggs/LoL">Ziggs</a></span></span> scatters proximity mines over the target location that remain a period. Each mine will explode upon contact with an enemy or terrain, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Hexplosive_Minefield.png',
        description:
          'Active: Ziggs scatters a cluster of 11 proximity mines over the target location that grant  sight of the area for 2 seconds, arming after 0.5 seconds and lasting for up to 10 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ziggs</b> scatters a cluster of 11 proximity mines over the target location that grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 2 seconds, <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="travel time of the mines spreading out plus a brief delay">arming after 0.<small>5</small> seconds</span> and lasting for up to 10 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Ziggs scatters a cluster of 11 proximity mines over the target location that grant  sight of the area for 2 seconds, arming after 0.5 seconds and lasting for up to 10 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'scatters a cluster of 11 proximity mines over the target location that grant  sight of the area for 2 seconds, arming after 0.5 seconds and lasting for up to 10 seconds.',
            pre: 'Ziggs scatters a cluster of 11 proximity mines over the target location that grant  sight of the area for 2 seconds, arming after 0.5 seconds and lasting for up to 10 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Each mine within the area explodes upon contact with terrain or an enemy, dealing magic damage and  slowing them for 1.5 seconds, as well as granting  sight of the area around the explosion for 2 seconds. An enemy takes 40% damage from subsequent mines.',
        descriptionHTML:
          'Each mine within the area explodes upon contact with terrain or an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 1.<small>5</small> seconds, as well as granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around the explosion for 2 seconds. An enemy takes 40% damage from subsequent mines.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Each mine within the area explodes upon contact with terrain or an enemy, dealing magic damage and  slowing them for 1.5 seconds, as well as granting  sight of the area around the explosion for 2 seconds',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'mine within the area explodes upon contact with terrain or an enemy, dealing magic damage and  slowing them for 1.5 seconds, as well as granting  sight of the area around the explosion for 2 seconds',
            pre: 'Each mine within the area explodes upon contact with terrain or an enemy, dealing magic damage and  slowing them for 1.5 seconds, as well as granting  sight of the area around the explosion for 2 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'An enemy takes 40% damage from subsequent mines.',
            damagetype: 'None',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage from subsequent mines.enemy takes 40',
            pre: 'An enemy takes 40% damage from subsequent mines.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Mine:',
            values: '30 / 70 / 110 / 150 / 190 (+ 30% AP)',
            valuesHTML:
              '30 / 70 / 110 / 150 / 190 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '10 / 20 / 30 / 40 / 50%',
            valuesHTML: '10 / 20 / 30 / 40 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Mine:',
            raw: '30 / 70 / 110 / 150 / 190 (+ 30% AP)',
            damagetype: 'Magic',
            values: [30, 70, 110, 150, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 70 / 110 / 150 / 190',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '10 / 20 / 30 / 40 / 50%',
            values: [10, 20, 30, 40, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 20 / 30 / 40 / 50%',
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* The mine cluster is built of 2 rings, with 3 mines in the inner ring (radius pending for test) and 8 mines on the other ring (200 radius), all equally spaced.\n<ul><li><ul><li>The angular offset is randomized on each cast.</li>\n<li>Because of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 135 detonation radius of each mine, the total possible range of a mine from the minefield hitting an enemy from the cast location is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 335 units. It will often be slightly less as the minefield is not guaranteed to be angled the right way for this.</li></ul></li>\n<li>Mines will not explode upon contact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the effects of a single detonation.</li></ul>',
  },
  'Mega Inferno Bomb': {
    name: 'Mega Inferno Bomb',
    display_name: 'Mega Inferno Bomb',
    champion: 'Ziggs',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ZiggsR.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '5000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">525</span>',
    inner_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">230</span>',
    speed: '2250',
    cast_time: '0.<small>375</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 107.<small>5</small> / 95 / 82.<small>5</small> / 70',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ziggs" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ziggs/LoL" title="Ziggs"><img alt="Ziggs" src="/wiki/images/Ziggs_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ziggs/LoL" title="Ziggs/LoL">Ziggs</a></span></span> catapults the <i>Mega Inferno Bomb</i> to the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, increased at the epicenter.',
    ],
    description: [
      {
        icon: '/wiki/images/Mega_Inferno_Bomb.png',
        description:
          'Active: Ziggs catapults the Mega Inferno Bomb to the target location, granting  sight within a 600 radius around its destination for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ziggs</b> catapults the <i>Mega Inferno Bomb</i> to the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> within a 600 radius around its destination for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Ziggs catapults the Mega Inferno Bomb to the target location, granting  sight within a 600 radius around its destination for 4 seconds.',
            increasedStat: 'total_ap',
            values: 6,
            units: '',
            unitsText:
              'catapults the Mega Inferno Bomb to the target location, granting  sight within a 600 radius around its destination for 4 seconds.',
            pre: 'Ziggs catapults the Mega Inferno Bomb to the target location, granting  sight within a 600 radius around its destination for 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Mega_Inferno_Bomb_Minimap.png',
        description:
          'The bomb explodes upon arrival to deal magic damage to enemies hit, increased by 50% against those in the epicenter.',
        descriptionHTML:
          'The bomb explodes upon arrival to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, increased by 50% against those in the epicenter.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The bomb explodes upon arrival to deal magic damage to enemies hit, increased by 50% against those in the epicenter.',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against those in the epicenter.bomb explodes upon arrival to deal magic damage to enemies hit, increased by 50',
            pre: 'The bomb explodes upon arrival to deal magic damage to enemies hit, increased by 50% against those in the epicenter.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 250 / 300 / 350 / 400 (+ 73.33% AP)',
            valuesHTML:
              '200 / 250 / 300 / 350 / 400 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;73.<small>3<span style="text-decoration: overline;">3</span></small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 73.33% AP)',
            damagetype: 'Magic',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
            children: [
              {
                values: 73.33,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 73.33% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* Allies cannot see <i>Mega Inferno Bomb\'s</i> area indicator until shortly before the blast.\n<ul><li><i>Mega Inferno Bomb</i> takes 2.<small>64</small> seconds from the start of the cast time to land when <i>Ziggs</i> casts at maximum range (reduced to 1.<small>617</small> seconds from the start of the cast time when casting within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2700</span> units).\n<ul><li>When cast within 2700 units, <i>Mega Inferno Bomb</i> has a fixed travel time. Beyond that, the travel time is equal to the cast distance divided by the now-fixed missile speed.</li></ul></li>\n<li>The area reveal on the target location begins as soon as the cast time is completed and can see into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> and across terrain.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Ziggs_Original_R_2.ogg   "I bring the Big One!"',
  },
} satisfies { [skillName in string]: SkillData };
