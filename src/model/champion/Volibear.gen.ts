import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Volibear';

export default {
  'The Relentless Storm': {
    name: 'The Relentless Storm',
    display_name: 'The Relentless Storm',
    champion: 'Volibear',
    skill: 'I',
    image: {
      full: 'Volibear_Icon_P.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Maximum range to chain between targets">450</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL" title="Volibear\'s"><img alt="Volibear\'s" src="/wiki/images/Volibear_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL" title="Volibear/LoL">Volibear\'s</a></span></span> basic attacks and ability hits generate a stack of <i>The Relentless Storm</i>, which stacks up to 5 times. At 5 stacks, he gains Lightning Claws.',
      '<span class="template_sbc"><b>The Relentless Storm:</b></span> For each stack, <b>Volibear</b> gains <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span>.<br><br>\n<p><span class="template_sbc"><b>Lightning Claws:</b></span> <b>Volibear\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> that can chain to up to four surrounding enemies.\n</p>',
    ],
    description: [
      {
        icon: '/wiki/images/The_Relentless_Storm.png',
        description:
          'Innate: Whenever Volibear damages at least one enemy with a basic attack or ability, he generates a stack of The Relentless Storm for 6 seconds, refreshing on subsequent damage and stacking up to 5 times. At 5 stacks, Volibear gains Lightning Claws.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Volibear</b> damages at least one enemy with a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, he generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>The Relentless Storm</i> for 6 seconds, refreshing on subsequent damage and stacking up to 5 times. At 5 stacks, <b>Volibear</b> gains <i>Lightning Claws</i>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: 'Whenever Volibear damages at least one enemy with a basic attack or ability, he generates a stack of The Relentless Storm for 6 seconds, refreshing on subsequent damage and stacking up to 5 times',
            min: 0,
            max: 5,
            description:
              'Whenever Volibear damages at least one enemy with a basic attack or ability, he generates a stack of The Relentless Storm for 6 seconds, refreshing on subsequent damage and stacking up to 5 times',
            values: 6,
            units: 'genericStacks',
            unitsText:
              'Volibear damages at least one enemy with a basic attack or ability, he generates a stack of The Relentless Storm for 6 seconds, refreshing on subsequent damage and stacking up to 5 times',
            pre: 'Whenever Volibear damages at least one enemy with a basic attack or ability, he generates a stack of The Relentless Storm for 6 seconds, refreshing on subsequent damage and stacking up to 5 times',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'At 5 stacks, Volibear gains Lightning Claws.',
            min: 0,
            max: 10,
            description: 'At 5 stacks, Volibear gains Lightning Claws.',
            values: 5,
            units: 'genericStacks',
            unitsText: '5 stacks, Volibear gains Lightning Claws.',
            pre: 'At 5 stacks, Volibear gains Lightning Claws.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The Relentless Storm: For each stack, Volibear gains  5% (+ 4% per 100 AP) bonus attack speed, up to 25% (+ 20% per 100 AP).',
        descriptionHTML:
          '<span class="template_sbc"><b>The Relentless Storm:</b></span> For each stack, <b>Volibear</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">5%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, up to <span style="color:orangered; white-space:normal">25%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% per 100 AP)</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'The Relentless Storm:',
            raw: 'For each stack, Volibear gains  5% (+ 4% per 100 AP) bonus attack speed, up to 25% (+ 20% per 100 AP).',
            min: 0,
            max: 10,
            description:
              'For each stack, Volibear gains  5% (+ 4% per 100 AP) bonus attack speed, up to 25% (+ 20% per 100 AP).',
            values: 5,
            valuesIsPercent: true,
            units: 'bonus_ad',
            unitsText: 'bonus attack speed, up to 25%',
            pre: 'For each stack, Volibear gains  5%',
            post: 'bonus attack speed, up to 25%',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4% per 100 AP',
              },
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 20% per 100 AP',
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
          "Lightning Claws: Volibear's claws ignite with lightning, empowering his basic attacks  on-hit to deal 11 − 60 (based on level) (+ 40% AP) bonus magic damage to the target and the nearest  visible enemy within 450 units of the target, chaining up to 4 subsequent targets.",
        descriptionHTML:
          '<span class="template_sbc"><b>Lightning Claws:</b></span> <b>Volibear\'s</b> claws ignite with lightning, empowering his basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="10+1 per level until lvl 3, then+2 until lvl 6, then+3 per level until lvl 13, then+4 per level" data-bot_values="11;12;13;15;17;19;22;25;28;31;34;37;40;44;48;52;56;60" data-top_values="">11 − 60 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span> <b>bonus</b> magic damage</span> to the target and the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy within 450 units of the target, chaining up to 4 subsequent targets.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Lightning Claws:',
            raw: "Volibear's claws ignite with lightning, empowering his basic attacks  on-hit to deal 11 − 60 (based on level) (+ 40% AP) bonus magic damage to the target and the nearest  visible enemy within 450 units of the target, chaining up to 4 subsequent targets.",
            damagetype: 'Magic',
            values: [
              11, 13.88, 16.76, 19.65, 22.53, 25.41, 28.29, 31.18, 34.06, 36.94,
              39.82, 42.71, 45.59, 48.47, 51.35, 54.24, 57.12, 60,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus magic damage to the target and the nearest  visible enemy within 450 units of the target, chaining up to 4 subsequent targets.',
            pre: "Volibear's claws ignite with lightning, empowering his basic attacks  on-hit to deal 11 − 60",
            post: 'bonus magic damage to the target and the nearest  visible enemy within 450 units of the target, chaining up to 4 subsequent targets.',
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
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'periodic',
    spellshield: false,
    projectile: 'false',
    notes:
      '* <b>Volibear\'s</b> spikes visually grow as <i>The Relentless Storm</i> stacks.\n<ul><li>Stacks of <i>The Relentless Storm</i> are also granted <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, but will specifically not be if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span>.</li>\n<li>While at four stacks, the next attack or ability on-hit reaching the fifth stack will be empowered by <i>Lightning Claws</i>.</li>\n<li>A stack of <i>The Relentless Storm</i> is not gained if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and/or missed if <b>Volibear</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>. A stack is granted even if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>. In all cases, <i>Lightning Claws</i> will not apply (on-hit damage is parried and the bounce is prevented).\n<ul><li>Since <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-ability="Frenzied Maul" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL#Frenzied_Maul" title="Frenzied Maul"><img alt="Frenzied Maul" src="/wiki/images/Volibear_Frenzied_Maul.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL#Frenzied_Maul" title="Volibear/LoL">Frenzied Maul</a></span></span> cannot be missed while <b>Volibear</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>, gaining stacks from <i>The Relentless Storm</i> and applying <i>Lighting Claws</i> from the ability will not be prevented from that parry effect.</li></ul></li>\n<li><b>Volibear</b> has a hidden passive that grants him <span style="color:yellow; white-space:normal">1 armor</span> for every enemy <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL" title="Zilean"><img alt="Zilean" src="/wiki/images/Zilean_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL" title="Zilean/LoL">Zilean</a></span></span> within 800 range of him.\n<ul><li>Likewise, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL" title="Zilean"><img alt="Zilean" src="/wiki/images/Zilean_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL" title="Zilean/LoL">Zilean</a></span></span> gains <span style="color: #7A6DFF; white-space:normal">1 ability power</span> for every nearby <b>Volibear</b>.</li>\n<li>Neither <b>Volibear</b> nor <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL" title="Zilean"><img alt="Zilean" src="/wiki/images/Zilean_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL" title="Zilean/LoL">Zilean</a></span></span> need <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of one another to gain these bonuses.</li></ul></li>\n<li>The empowered attacks do not affect <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  'Thundering Smash': {
    name: 'Thundering Smash',
    display_name: 'Thundering Smash',
    champion: 'Volibear',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'VolibearQ.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">14 / 13 / 12 / 11 / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL" title="Volibear"><img alt="Volibear" src="/wiki/images/Volibear_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL" title="Volibear/LoL">Volibear</a></span></span> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a few seconds, increased while facing an enemy champion.',
      'During this time, his next basic attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> to the target, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Thundering_Smash.png',
        description:
          'Active: Volibear drops on all fours, becoming  ghosted and gaining  bonus movement speed for 4 seconds, doubled while facing a  visible enemy  champion within 2000 units.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Volibear</b> drops on all fours, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 4 seconds, doubled while facing a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 2000 units.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Volibear drops on all fours, becoming  ghosted and gaining  bonus movement speed for 4 seconds, doubled while facing a  visible enemy  champion within 2000 units.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'drops on all fours, becoming  ghosted and gaining  bonus movement speed for 4 seconds, doubled while facing a  visible enemy  champion within 2000 units.',
            pre: 'Volibear drops on all fours, becoming  ghosted and gaining  bonus movement speed for 4 seconds, doubled while facing a  visible enemy  champion within 2000 units.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '8 / 12 / 16 / 20 / 24%',
            valuesHTML: '8 / 12 / 16 / 20 / 24%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '8 / 12 / 16 / 20 / 24%',
            values: [8, 12, 16, 20, 24],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 12 / 16 / 20 / 24%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "During this time, Volibear's next basic attack is empowered to consume the bonus movement speed to have an  uncancellable windup and  pounce on the target, dealing bonus physical damage and  stunning them for 1 second.",
        descriptionHTML:
          'During this time, <b>Volibear\'s</b> next basic attack is empowered to consume the <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="to 25 to 150 units closer than attack range, if Volibear is not closer already"><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pounce</a></span> on the target</span>, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "During this time, Volibear's next basic attack is empowered to consume the bonus movement speed to have an  uncancellable windup and  pounce on the target, dealing bonus physical damage and  stunning them for 1 second.",
            damagetype: 'Physical',
            values: 1,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              "this time, Volibear's next basic attack is empowered to consume the bonus movement speed to have an  uncancellable windup and  pounce on the target, dealing bonus physical damage and  stunning them for 1 second.",
            pre: "During this time, Volibear's next basic attack is empowered to consume the bonus movement speed to have an  uncancellable windup and  pounce on the target, dealing bonus physical damage and  stunning them for 1 second.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '10 / 30 / 50 / 70 / 90 (+ 120% bonus AD)',
            valuesHTML:
              '10 / 30 / 50 / 70 / 90 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '10 / 30 / 50 / 70 / 90 (+ 120% bonus AD)',
            damagetype: 'Physical',
            values: [10, 30, 50, 70, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 30 / 50 / 70 / 90',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Volibear becomes  immobilized or  polymorphed by an enemy during Thundering Smash, the effect ends prematurely and the  cooldown is reset.',
        descriptionHTML:
          'If <b>Volibear</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span> by an enemy during <i>Thundering Smash</i>, the effect ends prematurely and the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reset.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Thundering Smash's bonus damage is affected by  critical strike modifiers and applies  life steal at 100% effectiveness.",
        descriptionHTML:
          '<i>Thundering Smash\'s</i> <b>bonus</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Thundering Smash's bonus damage is affected by  critical strike modifiers and applies  life steal at 100% effectiveness.",
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText:
              "effectiveness.Smash's bonus damage is affected by  critical strike modifiers and applies  life steal at 100",
            pre: "Thundering Smash's bonus damage is affected by  critical strike modifiers and applies  life steal at 100% effectiveness.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Thundering Smash  resets Volibear's basic attack timer.",
        descriptionHTML:
          '<i>Thundering Smash <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Volibear\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'basic',
    spellshield: true,
    callforhelp: 'false',
    notes:
      '* <i>Thundering Smash\'s</i> empowered attack scales with <b>Volibear\'s</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span>.\n<ul><li>Unlike most spells that empower a basic attack, <i>Thundering Smash</i> does <b>not</b> have an increased <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>.</li>\n<li><i>Thundering Smash</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>, but also triggers spell effects by dealing an additional 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.</li>\n<li><i>Thundering Smash</i> will still apply its effects to the target even if the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>, but not if he goes into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li><i>Thundering Smash</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> over walls provided <b>Volibear</b> is in attack range of his target on the other side.</li>\n<li><i>Thundering Smash\'s</i> attack triggers against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, consuming the effect but dealing its bonus damage, if applicable.</li>\n<li>The windup for the attack completes even if the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> but the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> and damage do not apply.</li>\n<li><i>Thundering Smash\'s</i> reset does not trigger from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drowsy"><a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control#Drowsy"><img alt="Drowsy icon.png" src="/wiki/images/Drowsy_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control">drowsy</a></span> and is only granted after falling <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span>.</li>\n<li>The <a href="/wiki/Summoner" title="Summoner">player\'s</a> screen will flash red briefly and cue a sound effect when <b>Volibear</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> while <i>Thundering Smash</i> is active.</li>\n<li><b>Volibear\'s</b> next attack after using <i>Thundering Smash</i> will come out faster.</li>\n<li>Despite being an empowered attack, <i>Thundering Smash</i> does not draw minion aggro.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  'Frenzied Maul': {
    name: 'Frenzied Maul',
    display_name: 'Frenzied Maul',
    champion: 'Volibear',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'VolibearW.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '325 / 350',
    cast_time: '0.<small>25</small>',
    cost: '30 / 35 / 40 / 45 / 50',
    costtype: 'Mana',
    cooldown: '5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL" title="Volibear"><img alt="Volibear" src="/wiki/images/Volibear_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL" title="Volibear/LoL">Volibear</a></span></span> strikes the target enemy to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> based on <span style="color: #1F995C; white-space:normal">his <b>bonus</b> health</span>, apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects, and mark them <i>Wounded</i> for a period.',
      '<span class="template_sbc"><b>Wounded Bonus:</b></span> <i>Frenzied Maul</i> deals increased damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Volibear</b> based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Frenzied_Maul.png',
        description:
          'Active: Volibear strikes the target enemy to deal physical damage, apply  on-hit and on-attack effects at 100% effectiveness, and mark them Wounded for 8 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Volibear</b> strikes the target enemy to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>, apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness, and mark them <i>Wounded</i> for 8 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Volibear strikes the target enemy to deal physical damage, apply  on-hit and on-attack effects at 100% effectiveness, and mark them Wounded for 8 seconds.',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness, and mark them Wounded for 8 seconds.strikes the target enemy to deal physical damage, apply  on-hit and on-attack effects at 100',
            pre: 'Volibear strikes the target enemy to deal physical damage, apply  on-hit and on-attack effects at 100% effectiveness, and mark them Wounded for 8 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '5 / 30 / 55 / 80 / 105 (+ 100% AD) (+ 5% of his bonus health)',
            valuesHTML:
              '5 / 30 / 55 / 80 / 105 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;5% of his <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '5 / 30 / 55 / 80 / 105 (+ 100% AD) (+ 5% of his bonus health)',
            healType: 'PhysicalVamp',
            values: [5, 30, 55, 80, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 30 / 55 / 80 / 105',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
              {
                values: 5,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'of his bonus health',
                pre: '+ 5% of his bonus health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Wounded Bonus: Frenzied Maul deals  50% increased damage and  heals Volibear. The heal is halved against  minions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Wounded Bonus:</b></span> <i>Frenzied Maul</i> deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">50% increased damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Volibear</b>. The heal is halved against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Wounded Bonus:',
            raw: 'Frenzied Maul deals  50% increased damage and  heals Volibear',
            healType: 'DrainEffect',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'increased damage and  heals VolibearMaul deals  50',
            pre: 'Frenzied Maul deals  50% increased damage and  heals Volibear',
          },
        ],
        leveling: [
          {
            name: 'Heal:',
            values:
              '20 / 35 / 50 / 65 / 80 (+ 7 / 8.5 / 10 / 11.5 / 13% of his missing health)',
            valuesHTML:
              '20 / 35 / 50 / 65 / 80 <span style="color: #1F995C; white-space:normal">(+&nbsp;7 / 8.<small>5</small> / 10 / 11.<small>5</small> / 13% of his <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 7 / 8.5 / 10 / 11.5 / 13% of his missing health)',
            healType: 'BonusHealth',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
            children: [
              {
                values: [7, 8.5, 10, 11.5, 13],
                valuesIsPercent: true,
                units: 'missing_hp',
                unitsText: 'of his missing health',
                pre: '+ 7 / 8.5 / 10 / 11.5 / 13% of his missing health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Frenzied Maul applies  life steal at 100% effectiveness.',
        descriptionHTML:
          '<i>Frenzied Maul</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Frenzied Maul applies  life steal at 100% effectiveness.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText: 'effectiveness.Maul applies  life steal at 100',
            pre: 'Frenzied Maul applies  life steal at 100% effectiveness.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies, Self',
    damagetype: 'Physical',
    spelleffects: 'basic',
    onhiteffects: 'true',
    spellshield: true,
    callforhelp: 'false',
    notes:
      '* <b>Volibear</b> will be ordered to <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> the target after casting <i>Frenzied Maul</i>.\n<ul><li><i>Frenzied Maul</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>, but also triggers spell effects by dealing an additional 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.</li>\n<li><i>Frenzied Maul\'s</i> bite <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> even if it is blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li>\n<li><i>Frenzied Maul\'s</i> strike can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, but it cannot miss if <b>Volibear</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>. The <i>Wound</i> mark does not apply if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, but will otherwise do so regardless.\n<ul><li>The bite can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> but <b>Volibear</b> still heals. It does not heal nor deal damage if the bite is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>. The bite cannot miss if <b>Volibear</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li></ul></li>\n<li><i>Frenzied Maul</i> deals bonus damage and heals if the target is still <i>Wounded</i> after the cast time. If the mark wares off before the cast time completes, the ability\'s animation will appear as if the bite was applied but there is no bonus damage or heal.</li>\n<li>Despite being single target, <i>Frenzied Maul</i> does not draw minion aggro.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Sky Splitter': {
    name: 'Sky Splitter',
    display_name: 'Sky Splitter',
    champion: 'Volibear',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'VolibearE.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1200',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">325</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shield granting radius">425</span>',
    cast_time: 'none',
    cost: '60',
    costtype: 'Mana',
    cooldown: '13',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL" title="Volibear"><img alt="Volibear" src="/wiki/images/Volibear_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL" title="Volibear/LoL">Volibear</a></span></span> conjures a lightning bolt that shortly strikes the target location to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for a short time.',
      'The bolt can hit <b>Volibear</b>, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> him for a portion of <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span> for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Sky_Splitter.png',
        description:
          'Active: Volibear summons a lightning bolt to strike at the target location after a 2-second delay. If Volibear is within the strike, he gains a  shield equal to 14% of his maximum health (+ 75% AP) for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Volibear</b> summons a lightning bolt to strike at the target location after a 2-second delay. If <b>Volibear</b> is within the strike, he gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to <span style="color: #1F995C; white-space:normal">14% of his <b>maximum</b> health</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Volibear summons a lightning bolt to strike at the target location after a 2-second delay',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'summons a lightning bolt to strike at the target location after a 2-second delay',
            pre: 'Volibear summons a lightning bolt to strike at the target location after a 2-second delay',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'If Volibear is within the strike, he gains a  shield equal to 14% of his maximum health (+ 75% AP) for 3 seconds.',
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'for 3 seconds.',
            pre: 'If Volibear is within the strike, he gains a  shield equal to 14% of his maximum health',
            post: 'for 3 seconds.',
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
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Sky_Splitter_2.png',
        description:
          'The bolt deals magic damage to enemies hit, capped at 650 against non-champions,  slows them by 40% for 2 seconds, and grants  sight of the area for 1 second.',
        descriptionHTML:
          'The bolt deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, capped at 650 against non-champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 40% for 2 seconds, and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The bolt deals magic damage to enemies hit, capped at 650 against non-champions,  slows them by 40% for 2 seconds, and grants  sight of the area for 1 second.',
            increasedStat: 'total_ap',
            values: 6,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'for 2 seconds, and grants  sight of the area for 1 second.bolt deals magic damage to enemies hit, capped at 650 against non-champions,  slows them by 40',
            pre: 'The bolt deals magic damage to enemies hit, capped at 650 against non-champions,  slows them by 40% for 2 seconds, and grants  sight of the area for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "80 / 110 / 140 / 170 / 200 (+ 80% AP) (+ 11 / 12 / 13 / 14 / 15% of target's maximum health)",
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;11 / 12 / 13 / 14 / 15% of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "80 / 110 / 140 / 170 / 200 (+ 80% AP) (+ 11 / 12 / 13 / 14 / 15% of target's maximum health)",
            healType: 'OutgoingHeals',
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
              {
                values: [11, 12, 13, 14, 15],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 11 / 12 / 13 / 14 / 15% of target's maximum health",
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* Enemies cannot see the location of the cast for the first second, but they can already tell that the spell is underway by noticing <b>Volibear\'s</b> cast animation.\n<ul><li><b>Volibear</b> will receive the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> even if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li></ul>',
  },
  Stormbringer: {
    name: 'Stormbringer',
    display_name: 'Stormbringer',
    champion: 'Volibear',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'VolibearR.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '700',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">300</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slow radius">500</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Turret damage and disable radius">700</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">750</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">160 / 140 / 120</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL" title="Volibear"><img alt="Volibear" src="/wiki/images/Volibear_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL" title="Volibear/LoL">Volibear</a></span></span> gains <i>Stormbringer</i> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immunity"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">Cc-immunity</a></span> to the target location. The impact deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit in the epicenter, and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies.',
      'Nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> will be dealt the same <span style="color: #FF8C34; white-space:normal">physical damage</span> and become disabled for a few seconds.',
      '<span class="template_sbc"><b>Stormbringer:</b></span> <b>Volibear</b> embiggens for a period, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>, <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>,  <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span>.<br><br>\n<p><span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immunity"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cc-immunity</span></b></span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">Crowd control</a></span> cannot be applied during this time.\n</p>',
    ],
    description: [
      {
        icon: '/wiki/images/Stormbringer.png',
        description:
          'Active: Volibear gains Stormbringer for 12 seconds and  leaps to the target location with  crowd control immunity, granting  sight of the area in a 500 radius during the travel.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Volibear</b> gains <i>Stormbringer</i> for 12 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immunity"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span>, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area in a 500 radius during the travel.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Volibear gains Stormbringer for 12 seconds and  leaps to the target location with  crowd control immunity, granting  sight of the area in a 500 radius during the travel.',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'gains Stormbringer for 12 seconds and  leaps to the target location with  crowd control immunity, granting  sight of the area in a 500 radius during the travel.',
            pre: 'Volibear gains Stormbringer for 12 seconds and  leaps to the target location with  crowd control immunity, granting  sight of the area in a 500 radius during the travel.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Stormbringer: Volibear gains  ghosting,  bonus health,  50 bonus attack range, 25 increased range on  Frenzied Maul, and 35% increased size.',
        descriptionHTML:
          '<span class="template_sbc"><b>Stormbringer:</b></span> <b>Volibear</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>, <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> attack range</span>, 25 increased range on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-ability="Frenzied Maul" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL#Frenzied_Maul" title="Frenzied Maul"><img alt="Frenzied Maul" src="/wiki/images/Volibear_Frenzied_Maul.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL#Frenzied_Maul" title="Volibear/LoL">Frenzied Maul</a></span></span></i>, and 35% increased <a href="/wiki/Size" title="Size">size</a>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Stormbringer:',
            raw: 'Volibear gains  ghosting,  bonus health,  50 bonus attack range, 25 increased range on  Frenzied Maul, and 35% increased size.',
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            units: 'bonus_ad',
            unitsText:
              'increased size.gains  ghosting,  bonus health,  50 bonus attack range, 25 increased range on  Frenzied Maul, and 35',
            pre: 'Volibear gains  ghosting,  bonus health,  50 bonus attack range, 25 increased range on  Frenzied Maul, and 35% increased size.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Health:',
            values: '175 / 262.5 / 350 / 437.5 / 525',
            valuesHTML:
              '175 / 262.<small>5</small> / 350 / 437.<small>5</small> / 525',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Health:',
            raw: '175 / 262.5 / 350 / 437.5 / 525',
            healType: 'BonusHealth',
            values: [175, 262.5, 350, 437.5, 525],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 262.5 / 350 / 437.5 / 525',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Volibear impacts after 1 second,  slowing nearby enemies by 50% decaying over 1 second. Enemies within the epicenter are also dealt  physical damage.',
        descriptionHTML:
          '<b>Volibear</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="centered on Volibear\'s location when the dash ends in any way">impacts</span> after 1 second, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies by 50% decaying over 1 second. Enemies within the epicenter are also dealt <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #FF8C34; white-space:normal">physical damage</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Volibear impacts after 1 second,  slowing nearby enemies by 50% decaying over 1 second',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'decaying over 1 secondimpacts after 1 second,  slowing nearby enemies by 50',
            pre: 'Volibear impacts after 1 second,  slowing nearby enemies by 50% decaying over 1 second',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '300 / 400 / 500 / 600 / 700 (+ 250% bonus AD) (+ 125% AP)',
            valuesHTML:
              '300 / 400 / 500 / 600 / 700 <span style="color:orange; white-space:normal">(+&nbsp;250% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;125% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '300 / 400 / 500 / 600 / 700 (+ 250% bonus AD) (+ 125% AP)',
            damagetype: 'Physical',
            values: [300, 400, 500, 600, 700],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 400 / 500 / 600 / 700',
            children: [
              {
                values: 250,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 250% bonus AD',
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
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Volibear also disables enemy  turrets in an area for a duration, rendering them unable to attack, as well as dealing them the  same damage.',
        descriptionHTML:
          '<b>Volibear</b> also disables enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> in an area for a duration, rendering them unable to attack, as well as dealing them the <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">same damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Turret Disable Duration:',
            values: '3 / 3.5 / 4 / 4.5 / 5',
            valuesHTML: '3 / 3.<small>5</small> / 4 / 4.<small>5</small> / 5',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Turret Disable Duration:',
            raw: '3 / 3.5 / 4 / 4.5 / 5',
            values: [3, 3.5, 4, 4.5, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3.5 / 4 / 4.5 / 5',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Stormbringer will cast at max range if cast beyond that.  Thundering Smash's duration will be paused for the  leap.",
        descriptionHTML:
          '<i>Stormbringer will cast at max range if cast beyond that. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-ability="Thundering Smash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL#Thundering_Smash" title="Thundering Smash\'s"><img alt="Thundering Smash\'s" src="/wiki/images/Volibear_Thundering_Smash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL#Thundering_Smash" title="Volibear/LoL">Thundering Smash\'s</a></span></span> duration will be paused for the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leap</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies, Self',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Stormbringer</i> will disable any turret that is not the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nexus obelisk"><a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk"><img alt="Nexus Obelisk.png" src="/wiki/images/Nexus_Obelisk.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk">Nexus Obelisk</a></span>, even if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.\n<ul><li><ul><li><i>Stormbringer</i> will not deal damage to untargetable turrets.</li></ul></li>\n<li><b>Volibear</b> grows to his new size over 1.<small>25</small> seconds, starting 0.<small>25</small> seconds after landing, and shrinks back to his normal size over 0.<small>5</small> seconds after <i>Stormbinger\'s</i> status ends, respectively.</li>\n<li><b>Volibear</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> over 1 second regardless of distance or <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Movement_speed" title="Movement speed">movement speed</a></span>.\n<ul><li><b>Volibear</b> impacts immediately at his current location if <i>Stormbringer</i> is cast over terrain he cannot pass through (due to not being able to cover the distance required).<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>The additional bonuses are granted on-cast.</li>\n<li>The turret disable debuff is named <i>Ohmwrecker</i>.</li>\n<li>Disabling a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> does not prevent aggro of the current target it is locked onto. The increased turret shot damage from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ohmwrecker (Turret Item)" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ohmwrecker_(Turret_Item)" title="Ohmwrecker"><img alt="Ohmwrecker" src="/wiki/images/Ohmwrecker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ohmwrecker_(Turret_Item)" class="mw-redirect" title="Ohmwrecker (Turret Item)">Ohmwrecker</a></span></span> is also reset.\n<ul><li>Turrets maintain the same targeting behavior even when disabled; damaging an enemy champion will still draw turret aggro. However, if the turret\'s desired target leaves range or has become an invalid target, it will lock onto the most previous target it was going to attack prior to becoming disabled, or instead, find a new one if that condition is not applicable.</li></ul></li>\n<li>The following table refers for interactions while <b>Volibear</b> is dashing:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Volibear_Original_R_2.ogg   I am the storm!',
  },
} satisfies { [skillName in string]: SkillData };
