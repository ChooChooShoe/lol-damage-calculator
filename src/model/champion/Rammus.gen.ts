import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Rammus';

export default {
  'Spiked Shell': {
    name: 'Spiked Shell',
    display_name: 'Spiked Shell',
    champion: 'Rammus',
    skill: 'I',
    image: {
      full: 'Armordillo_ScavengeArmor.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL" title="Rammus\'"><img alt="Rammus\'" src="/wiki/images/Rammus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL" title="Rammus/LoL">Rammus\'</a></span></span> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on his <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;armor</span></span>. This effect is increased during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Defensive Ball Curl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Defensive Ball Curl"><img alt="Defensive Ball Curl" src="/wiki/images/Rammus_Defensive_Ball_Curl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Rammus/LoL">Defensive Ball Curl</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Spiked_Shell.png',
        description:
          "Innate: Rammus'  basic attacks deal 10 (+ 10% armor) bonus magic damage  on-hit, increased to 15 (+ 15% armor) during  Defensive Ball Curl.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Rammus\' </b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> deal <span style="color: #00B0F0; white-space:normal">10</span> <span style="color:yellow; white-space:normal">(+&nbsp;10% armor)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, increased to <span style="color: #00B0F0; white-space:normal">15</span> <span style="color:yellow; white-space:normal">(+&nbsp;15% armor)</span> during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Defensive Ball Curl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Defensive Ball Curl"><img alt="Defensive Ball Curl" src="/wiki/images/Rammus_Defensive_Ball_Curl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Rammus/LoL">Defensive Ball Curl</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: "Rammus'  basic attacks deal 10 (+ 10% armor) bonus magic damage  on-hit, increased to 15 (+ 15% armor) during  Defensive Ball Curl.",
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage  on-hit, increased to 15',
            pre: "Rammus'  basic attacks deal 10",
            post: 'bonus magic damage  on-hit, increased to 15',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_armor',
                unitsText: 'armor',
                pre: '+ 10% armor',
              },
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_armor',
                unitsText: 'armor',
                pre: '+ 15% armor',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'proc',
    notes:
      '* <i>Spiked Shell</i> applies to <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
  },
  Powerball: {
    name: 'Powerball',
    display_name: 'Powerball',
    champion: 'Rammus',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'PowerBall.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="center-to-edge, against champions">75</span>',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="effect radius upon collision">250</span>',
    cast_time: 'none',
    cost: '60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">16 / 13.<small>5</small> / 11 / 8.<small>5</small> / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL" title="Rammus"><img alt="Rammus" src="/wiki/images/Rammus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL" title="Rammus/LoL">Rammus</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a few seconds to roll into a ball, gradually gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>. <i>Powerball</i> can be recast within the duration, and does so automatically afterwards.',
      '<b>Rammus</b> stops rolling upon hitting an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>. Enemies hit are then briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Rammus</b> ends <i>Powerball</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Powerball.png',
        description:
          'Active: Rammus  channels for up to 6 seconds to roll into a ball, gaining  25% − 39.17% (based on level) bonus total movement speed per second over the duration, up to a maximum of 150% − 235% (based on level). Powerball can be recast after 1 second within the duration, and does so automatically afterwards or when  interrupted.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rammus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 6 seconds to roll into a ball, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="25;" data-finish="39.166666666667;" data-bot_values="25;25.83;26.67;27.5;28.33;29.17;30;30.83;31.67;32.5;33.33;34.17;35;35.83;36.67;37.5;38.33;39.17" data-top_values="" data-bot_key="%">25% − 39.<small>17</small>% (based on level)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus total</b> movement speed</span></span> per second over the duration, up to a maximum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="150;" data-finish="235;" data-bot_values="150;155;160;165;170;175;180;185;190;195;200;205;210;215;220;225;230;235" data-top_values="" data-bot_key="%">150% − 235% (based on level)</span>. <br><br><i>Powerball</i> can be recast after 1 second within the duration, and does so automatically afterwards or when <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Rammus  channels for up to 6 seconds to roll into a ball, gaining  25% − 39.17% (based on level) bonus total movement speed per second over the duration, up to a maximum of 150% − 235% (based on level)',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus total movement speed per second over the duration, up to a maximum of 150% − 235%',
            pre: 'Rammus  channels for up to 6 seconds to roll into a ball, gaining  25% − 39.17%',
            post: 'bonus total movement speed per second over the duration, up to a maximum of 150% − 235%',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Powerball can be recast after 1 second within the duration, and does so automatically afterwards or when  interrupted.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'can be recast after 1 second within the duration, and does so automatically afterwards or when  interrupted.',
            pre: 'Powerball can be recast after 1 second within the duration, and does so automatically afterwards or when  interrupted.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Rammus stops rolling upon colliding with an enemy, dealing magic damage to all nearby enemies and  knocking them back 125 units, though not through terrain. Enemies hit are then  stunned and  revealed for 0.4 seconds, as well as  slowed for 1 second.',
        descriptionHTML:
          '<b>Rammus</b> stops rolling upon colliding with an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span> 125 units, though not through terrain. Enemies hit are then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>4</small></span> seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Rammus stops rolling upon colliding with an enemy, dealing magic damage to all nearby enemies and  knocking them back 125 units, though not through terrain',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'stops rolling upon colliding with an enemy, dealing magic damage to all nearby enemies and  knocking them back 125 units, though not through terrain',
            pre: 'Rammus stops rolling upon colliding with an enemy, dealing magic damage to all nearby enemies and  knocking them back 125 units, though not through terrain',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 130 / 160 / 190 / 220 (+ 100% AP)',
            valuesHTML:
              '100 / 130 / 160 / 190 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
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
            name: 'Magic Damage:',
            raw: '100 / 130 / 160 / 190 / 220 (+ 100% AP)',
            damagetype: 'Magic',
            values: [100, 130, 160, 190, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 130 / 160 / 190 / 220',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
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
        description: 'Recast: Rammus ends Powerball.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Rammus</b> ends <i>Powerball</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>If the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.</li></ul></li>\n<li>The <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks multiplicatively"><a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking#Stacks multiplicatively"><img alt="Multiple stacking icon.png" src="/wiki/images/Multiple_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking">stacks multiplicatively</a></span> with other sources of movement speed boosts.</li>\n<li><i>Powerball</i> will still collide with enemies if <b>Rammus</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span>.</li>\n<li>For the purpose of moving closer to an enemy when right clicking them, <i>Powerball</i> also reduces <b>Rammus\'</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span><span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to 0&nbsp;」</span><span class="flipText2">「&nbsp;by 125&nbsp;」</span></span>for the duration.\n<ul><li>Regardless of this, during <i>Powerball</i> <b>Rammus</b> will also always attempt to path towards his target\'s center instead.</li></ul></li>\n<li><b>Rammus</b> will ignore <a href="/wiki/Unit_collision" title="Unit collision">unit collision</a> for the purpose of pathfinding during <i>Powerball</i>.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> Rammus is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span>.</li></ul></li>\n<li><i>Powerball</i> is not a <a href="/wiki/Channel#Movement_Channels" title="Channel">movement channel</a>, and so will not be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">ground</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will also resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>The following table refers for interactions while <b>Rammus</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Defensive Ball Curl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Defensive Ball Curl"><img alt="Defensive Ball Curl" src="/wiki/images/Rammus_Defensive_Ball_Curl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Rammus/LoL">Defensive Ball Curl</a></span></span> interrupts. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Frenzying Taunt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Frenzying_Taunt" title="Frenzying Taunt"><img alt="Frenzying Taunt" src="/wiki/images/Rammus_Frenzying_Taunt.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Frenzying_Taunt" title="Rammus/LoL">Frenzying Taunt</a></span></span> is disabled. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Soaring Slam" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Soaring_Slam" title="Soaring Slam"><img alt="Soaring Slam" src="/wiki/images/Rammus_Soaring_Slam.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Soaring_Slam" title="Rammus/LoL">Soaring Slam</a></span></span> modifies this ability. This ability recasts to end channel.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
  'Defensive Ball Curl': {
    name: 'Defensive Ball Curl',
    display_name: 'Defensive Ball Curl',
    champion: 'Rammus',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'DefensiveBallCurl.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">7</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL" title="Rammus"><img alt="Rammus" src="/wiki/images/Rammus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL" title="Rammus/LoL">Rammus</a></span></span> enters a defensive stance for a few seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resist</span></span>. During this time, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Spiked Shell" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Spiked_Shell" title="Spiked Shell\'s"><img alt="Spiked Shell\'s" src="/wiki/images/Rammus_Spiked_Shell.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Spiked_Shell" title="Rammus/LoL">Spiked Shell\'s</a></span></span></i> damage is increased and also applies to enemies that land a basic attack against <b>Rammus</b>.',
      "<i>Defensive Ball Curl</i> can be recast within the duration, and does so automatically afterward. <b>Rammus'</b> basic attacks extend <i>Defensive Ball Curl's</i> duration up to a few seconds.",
      '<span class="template_sbc"><b>Recast:</b></span> <b>Rammus</b> ends <i>Defensive Ball Curl</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Defensive_Ball_Curl.png',
        description:
          "Active: Rammus enters a defensive stance for 6 seconds, gaining  bonus armor and  bonus magic resistance. While active, enemies that use a basic attack  on-hit against Rammus are dealt magic damage equal to  Spiked Shell's bonus damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rammus</b> enters a defensive stance for 6 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>. While active, enemies that use a basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> against <b>Rammus</b> are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> equal to <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Spiked Shell" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Spiked_Shell" title="Spiked Shell\'s"><img alt="Spiked Shell\'s" src="/wiki/images/Rammus_Spiked_Shell.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Spiked_Shell" title="Rammus/LoL">Spiked Shell\'s</a></span></span></i> <b>bonus</b> damage.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Rammus enters a defensive stance for 6 seconds, gaining  bonus armor and  bonus magic resistance',
            increasedStat: 'bonus_armor',
            values: 6,
            units: '',
            unitsText:
              'enters a defensive stance for 6 seconds, gaining  bonus armor and  bonus magic resistance',
            pre: 'Rammus enters a defensive stance for 6 seconds, gaining  bonus armor and  bonus magic resistance',
          },
        ],
        leveling: [
          {
            name: 'Bonus Armor:',
            values: '35 (+ 40 / 55 / 70 / 85 / 100% total armor)',
            valuesHTML:
              '35 <span style="color:yellow; white-space:normal">(+&nbsp;40 / 55 / 70 / 85 / 100% <b>total</b> armor)</span>',
          },
          {
            name: 'Bonus Magic Resistance:',
            values: '10 (+ 30 / 35 / 40 / 45 / 50% total magic resistance)',
            valuesHTML:
              '10 <span style="color: #00FFFF; white-space:normal">(+&nbsp;30 / 35 / 40 / 45 / 50% <b>total</b> magic resistance)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: '35 (+ 40 / 55 / 70 / 85 / 100% total armor)',
            values: 35,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35',
            children: [
              {
                values: [40, 55, 70, 85, 100],
                valuesIsPercent: true,
                units: 'total_armor',
                unitsText: 'total armor',
                pre: '+ 40 / 55 / 70 / 85 / 100% total armor',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Resistance:',
            raw: '10 (+ 30 / 35 / 40 / 45 / 50% total magic resistance)',
            damagetype: 'Magic',
            values: 10,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10',
            children: [
              {
                values: [30, 35, 40, 45, 50],
                valuesIsPercent: true,
                units: 'total_mr',
                unitsText: 'total magic resistance',
                pre: '+ 30 / 35 / 40 / 45 / 50% total magic resistance',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Rammus'  basic attacks extend the remaining duration of Defensive Ball Curl by 0.4 seconds, up to a maximum of 4 additional seconds.",
        descriptionHTML:
          "<b>Rammus' </b> basic attacks extend the remaining duration of <i>Defensive Ball Curl</i> by 0.<small>4</small> seconds, up to a maximum of 4 additional seconds.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Defensive Ball Curl can be recast after 1 second within the duration, and does so automatically upon casting  Powerball.',
        descriptionHTML:
          '<i>Defensive Ball Curl</i> can be recast after 1 second within the duration, and does so automatically upon casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Defensive Ball Curl can be recast after 1 second within the duration, and does so automatically upon casting  Powerball.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Ball Curl can be recast after 1 second within the duration, and does so automatically upon casting  Powerball.',
            pre: 'Defensive Ball Curl can be recast after 1 second within the duration, and does so automatically upon casting  Powerball.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Recast: Rammus ends Defensive Ball Curl.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Rammus</b> ends <i>Defensive Ball Curl</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: false,
    notes:
      '*The initial cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>Deactivating the ability manually does not.</li></ul></li>\n<li><i>Defensive Ball Curl</i> ends immediately if <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span> is cast.</li>\n<li><i>Defensive Ball Curl</i> will return damage from attacks and/or abilities that apply <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> (<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-ability="Mystic Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL#Mystic_Shot" title="Mystic Shot"><img alt="Mystic Shot" src="/wiki/images/Ezreal_Mystic_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL#Mystic_Shot" title="Ezreal/LoL">Mystic Shot</a></span></span>) as well as from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> <a href="/wiki/Named_item_effect#Wind\'s_Fury" title="Named item effect">Wind\'s Fury</a> (will not return damage from <a href="/wiki/Turret" title="Turret">turrets</a>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="H-28G Evolution Turret"><img alt="H-28G Evolution Turret" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL">H-28G Evolution Turret</a></span></span>, or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Jack in the Box"><img alt="Jack in the Box" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">Jack in the Box</a></span></span>).</li>\n<li>The resistance scaling will factor from all sources, including <i>Defensive Ball Curl\'s</i> flat bonus. This will recalculate over the duration.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> is reduced by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span>.</li></ul>',
  },
  'Frenzying Taunt': {
    name: 'Frenzying Taunt',
    display_name: 'Frenzying Taunt',
    champion: 'Rammus',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'PuncturingTaunt.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '325',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL" title="Rammus"><img alt="Rammus" src="/wiki/images/Rammus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL" title="Rammus/LoL">Rammus</a></span></span> briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunts</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, and gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for the same duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Frenzying_Taunt.png',
        description:
          'Active: Rammus  taunts the target enemy  champion or  monster for a duration and gains  bonus attack speed for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rammus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunts</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> for a duration and gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for the same duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Taunt Duration:',
            values: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            valuesHTML:
              '1.<small>2</small> / 1.<small>4</small> / 1.<small>6</small> / 1.<small>8</small> / 2',
          },
          {
            name: 'Bonus Attack Speed Duration:',
            values: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            valuesHTML:
              '1.<small>2</small> / 1.<small>4</small> / 1.<small>6</small> / 1.<small>8</small> / 2',
          },
          {
            name: 'Bonus Attack Speed:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Taunt Duration:',
            raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            values: [1.2, 1.4, 1.6, 1.8, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed Duration:',
            raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            values: [1.2, 1.4, 1.6, 1.8, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
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
          'The duration of the bonus attack speed continuously refreshes during  Powerball,  Defensive Ball Curl and  Soaring Slam.',
        descriptionHTML:
          'The duration of the <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> continuously refreshes during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Defensive Ball Curl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Defensive Ball Curl"><img alt="Defensive Ball Curl" src="/wiki/images/Rammus_Defensive_Ball_Curl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Rammus/LoL">Defensive Ball Curl</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Soaring Slam" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Soaring_Slam" title="Soaring Slam"><img alt="Soaring Slam" src="/wiki/images/Rammus_Soaring_Slam.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Soaring_Slam" title="Rammus/LoL">Soaring Slam</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies, Self',
    spelleffects: 'false',
    spellshield: true,
    notes:
      '* <i>Frenzying Taunt</i>, despite being usable on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, does not force them to attack <b>Rammus</b>. He does not draw aggro since the ability does not deal damage.\n<ul><li>The bonus attack speed duration is separate from the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunt</a></span> duration.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Soaring Slam': {
    name: 'Soaring Slam',
    display_name: 'Soaring Slam',
    champion: 'Rammus',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'Tremors2.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '800 OR 150% movement speed',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slam radius">400</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner radius">200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Tremors radius">400</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Minimum dash speed">900</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Maximum dash speed">2000</span>',
    cast_time: 'None',
    cost: '100',
    costtype: 'Mana',
    cooldown: '90',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL" title="Rammus"><img alt="Rammus" src="/wiki/images/Rammus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL" title="Rammus/LoL">Rammus</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immunity"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">Cc-immunity</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them. The impact deals increased damage at the epicenter based on how far <i>Soaring Slam</i> was cast.',
      '<i>Soaring Slam</i> gains increased <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> based on <b>Rammus\'</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;movement speed</span>. <b>Rammus</b> can cast this ability during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span></i>, which will additionally <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> enemies in the epicenter.',
      'The impact causes 3 aftershocks to burst from the area over a short time, each dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies. <br><br><i>Soaring Slam\'s</i> damage affects <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and is doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immunity"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cc-immunity</span></b></span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">Crowd control</a></span> cannot be applied during this time.',
    ],
    description: [
      {
        icon: '/wiki/images/Soaring_Slam.png',
        description:
          'Active: Rammus  leaps to the target location with  immunity to crowd control. Upon arrival, he creates an impact that deals magic damage to nearby enemies and  slows them for 1.5 seconds. The impact deals increased damage at the epicenter if Soaring Slam was cast further than 800 units, capped at 1700 units with 50% increased damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rammus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immunity"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immunity to crowd control</a></span>. Upon arrival, he creates an impact that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1.<small>5</small> seconds. The impact deals increased damage at the epicenter if <i>Soaring Slam</i> was cast further than 800 units, capped at 1700 units with 50% increased damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Upon arrival, he creates an impact that deals magic damage to nearby enemies and  slows them for 1.5 seconds',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'arrival, he creates an impact that deals magic damage to nearby enemies and  slows them for 1.5 seconds',
            pre: 'Upon arrival, he creates an impact that deals magic damage to nearby enemies and  slows them for 1.5 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'The impact deals increased damage at the epicenter if Soaring Slam was cast further than 800 units, capped at 1700 units with 50% increased damage.',
            damagetype: 'None',
            values: 8,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'increased damage.impact deals increased damage at the epicenter if Soaring Slam was cast further than 800 units, capped at 1700 units with 50',
            pre: 'The impact deals increased damage at the epicenter if Soaring Slam was cast further than 800 units, capped at 1700 units with 50% increased damage.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 137.5 / 175 / 212.5 / 250 (+ 60% AP)',
            valuesHTML:
              '100 / 137.<small>5</small> / 175 / 212.<small>5</small> / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '15 / 16.25 / 17.5 / 18.75 / 20%',
            valuesHTML:
              '15 / 16.<small>25</small> / 17.<small>5</small> / 18.<small>75</small> / 20%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 137.5 / 175 / 212.5 / 250 (+ 60% AP)',
            damagetype: 'Magic',
            values: [100, 137.5, 175, 212.5, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 137.5 / 175 / 212.5 / 250',
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
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 16.25 / 17.5 / 18.75 / 20%',
            values: [15, 16.25, 17.5, 18.75, 20],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 16.25 / 17.5 / 18.75 / 20%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If Soaring Slam was cast during  Powerball, enemies within the epicenter are also  knocked up for 0.75 seconds and are dealt  Powerball's damage.  Powerball will not collide with enemies during the dash, and its channel will be maintained for the dash and end afterwards.",
        descriptionHTML:
          'If <i>Soaring Slam</i> was cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span></i>, enemies within the epicenter are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 0.<small>75</small> seconds and are dealt <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball\'s"><img alt="Powerball\'s" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball\'s</a></span></span></i> damage. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span></i> will not collide with enemies during the dash, and its channel will be maintained for the dash and end afterwards.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Center Minimum Damage:',
            values:
              '100 / 137.5 / 175 / 212.5 / 250 (+ 60% AP) (+  100 / 130 / 160 / 190 / 220 (+ 100% AP))',
            valuesHTML:
              '100 / 137.<small>5</small> / 175 / 212.<small>5</small> / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span> (+ <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="100 / 130 / 160 / 190 / 220 (+&nbsp;100% AP)"><img alt="100 / 130 / 160 / 190 / 220 (+&nbsp;100% AP)" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">100 / 130 / 160 / 190 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span></a></span></span>)',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Center Minimum Damage:',
            raw: '100 / 137.5 / 175 / 212.5 / 250 (+ 60% AP) (+  100 / 130 / 160 / 190 / 220 (+ 100% AP))',
            damagetype: 'None',
            values: [100, 137.5, 175, 212.5, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 137.5 / 175 / 212.5 / 250',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
              {
                values: [100, 130, 160, 190, 220],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+  100 / 130 / 160 / 190 / 220',
                children: [
                  {
                    values: 100,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'AP',
                    pre: '+ 100% AP',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The impact causes 3 aftershocks to burst from the area over 3.5 seconds, each one dealing magic damage to enemies within and applying the initial  slow, which stacks up to 4 times.',
        descriptionHTML:
          'The impact causes 3 aftershocks to burst from the area over 3.<small>5</small> seconds, each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within and applying the initial <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>, which stacks up to 4 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'The impact causes 3 aftershocks to burst from the area over 3.5 seconds, each one dealing magic damage to enemies within and applying the initial  slow, which stacks up to 4 times.',
            min: 0,
            max: 10,
            description:
              'The impact causes 3 aftershocks to burst from the area over 3.5 seconds, each one dealing magic damage to enemies within and applying the initial  slow, which stacks up to 4 times.',
            values: 3,
            units: 'total_ap',
            unitsText:
              'impact causes 3 aftershocks to burst from the area over 3.5 seconds, each one dealing magic damage to enemies within and applying the initial  slow, which stacks up to 4 times.',
            pre: 'The impact causes 3 aftershocks to burst from the area over 3.5 seconds, each one dealing magic damage to enemies within and applying the initial  slow, which stacks up to 4 times.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Hit:',
            values: '20 / 25 / 30 / 35 / 40 (+ 10% AP)',
            valuesHTML:
              '20 / 25 / 30 / 35 / 40 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
          {
            name: 'Maximum Slow:',
            values: '60 / 65 / 70 / 75 / 80%',
            valuesHTML: '60 / 65 / 70 / 75 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Hit:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 10% AP)',
            damagetype: 'Magic',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
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
            effectType: 'Unique',
            name: 'Maximum Slow:',
            raw: '60 / 65 / 70 / 75 / 80%',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 65 / 70 / 75 / 80%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Soaring Slam's damage affects structures and is doubled against  turrets.",
        descriptionHTML:
          '<i>Soaring Slam\'s</i> damage affects <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and is doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Soaring Slam will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Soaring Slam will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'special',
    spellshield: 'Special',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> for the impact and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent area damage"><a href="/wiki/Damage" title="Damage"><img alt="Poison Trail.png" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent area damage</a></span> for the aftershocks.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the impact (including with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span>) but not each aftershock.</li>\n<li><b>Rammus</b> is required to have had at least <span style="color: #F5EE99; white-space:normal">461.<small>5</small> movement speed</span> <i>average</i> over the last second to be able to cast <i>Soaring Slam</i> further than its minimum cast range and thereby deal the increased center damage.\n<ul><li>The maximum increased center damage is reachable once  <b>Rammus</b> has had at least <span style="color: #F5EE99; white-space:normal">1307.<small>69</small> movement speed</span> <i>average</i> for the past second.</li></ul></li>\n<li><i>Soaring Slam</i> will not impact nor generate aftershocks if the dash is interrupted.</li>\n<li>The following table refers for interactions while <b>Rammus</b> is dashing:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
