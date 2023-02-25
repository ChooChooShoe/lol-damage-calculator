import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Orianna';

export default {
  'Clockwork Windup': {
    name: 'Clockwork Windup',
    display_name: 'Clockwork Windup',
    champion: 'Orianna',
    skill: 'I',
    image: {
      full: 'OriannaPassive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Standard leash range, estimated">1290</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Leash range on ally, estimated">1355</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ball pickup range, estimated">135</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL" title="Orianna"><img alt="Orianna" src="/wiki/images/Orianna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL" title="Orianna/LoL">Orianna</a></span></span> is accompanied by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span>, which she commands with her abilities. <b>The Ball</b> attaches to <b>Orianna</b> when she approaches it, and snaps back to her when she moves too far away. <b>The Ball</b> incurs a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;brief</span> cooldown on <b>Orianna\'s</b> abilities whenever it moves.',
      "<b>Orianna's</b> basic attacks generate stacks of <i>Clockwork Winding</i>, which refresh on subsequent hits and stack up to a cap. All stacks are lost when attacking a new enemy.",
      '<span class="template_sbc"><b>Clockwork Winding:</b></span> <b>Orianna\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, increased for each stack.',
    ],
    description: [
      {
        icon: '/wiki/images/Clockwork_Windup.png',
        description:
          'Innate - The Ball: Orianna is accompanied by The Ball, which she commands with her abilities. The Ball incurs a  0.15-second global cooldown on all of her abilities between casts. Additionally, The Ball attaches to Orianna if she is near it, and snaps back to her if she moves too far away from it, which incurs a  0.5-second global cooldown on all of her abilities.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - The Ball:</b></span> <b>Orianna</b> is accompanied by <i>The Ball</i>, which she commands with her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>. <i>The Ball</i> incurs a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>15</small>-second</span> global cooldown on all of her abilities between casts. Additionally, <i>The Ball</i> attaches to <b>Orianna</b> if she is near it, and snaps back to her if she moves too far away from it, which incurs a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small>-second</span> global cooldown on all of her abilities.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Clockwork_Winding.png',
        description:
          "Innate: Orianna's basic attacks generate a stack of Clockwork Winding for 4 seconds, refreshing on subsequent attacks and stacking up to 2 times. All stacks are lost when attacking a new enemy.\nClockwork Winding: Orianna's basic attacks are empowered to deal 10 − 50 (based on level) (+ 15% AP) bonus magic damage  on-hit, increased by「 20% 」「 2 − 10 (based on level) (+ 3% AP) 」per stack, up to 14 − 70 (based on level) (+ 21% AP) total bonus magic damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Orianna\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Clockwork Winding</i> for 4 seconds, refreshing on subsequent attacks and stacking up to 2 times. All stacks are lost when attacking a new enemy.<br><br>\n<p><span class="template_sbc"><b>Clockwork Winding:</b></span> <b>Orianna\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="10;" data-finish="50;" data-bot_values="10;12.35;14.71;17.06;19.41;21.76;24.12;26.47;28.82;31.18;33.53;35.88;38.24;40.59;42.94;45.29;47.65;50" data-top_values="">10 − 50 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, increased by<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;20%&nbsp;」</span><span class="flipText2">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="2;" data-finish="10;" data-bot_values="2;2.47;2.94;3.41;3.88;4.35;4.82;5.29;5.76;6.24;6.71;7.18;7.65;8.12;8.59;9.06;9.53;10" data-top_values="">2 − 10 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% AP)</span>&nbsp;」</span></span>per stack, up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="14;" data-finish="70;" data-bot_values="14;17.29;20.59;23.88;27.18;30.47;33.76;37.06;40.35;43.65;46.94;50.24;53.53;56.82;60.12;63.41;66.71;70" data-top_values="">14 − 70 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;21% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>total bonus</b> magic damage</span>.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: "Orianna's basic attacks generate a stack of Clockwork Winding for 4 seconds, refreshing on subsequent attacks and stacking up to 2 times",
            min: 0,
            max: 2,
            description:
              "Orianna's basic attacks generate a stack of Clockwork Winding for 4 seconds, refreshing on subsequent attacks and stacking up to 2 times",
            values: 4,
            units: 'genericStacks',
            unitsText:
              'basic attacks generate a stack of Clockwork Winding for 4 seconds, refreshing on subsequent attacks and stacking up to 2 times',
            pre: "Orianna's basic attacks generate a stack of Clockwork Winding for 4 seconds, refreshing on subsequent attacks and stacking up to 2 times",
          },
          {
            effectType: 'Stacks',
            name: 'All stacks are lost when attacking a new enemy.\nClockwork Winding:',
            raw: "Orianna's basic attacks are empowered to deal 10 − 50 (based on level) (+ 15% AP) bonus magic damage  on-hit, increased by「 20% 」「 2 − 10 (based on level) (+ 3% AP) 」per stack, up to 14 − 70 (based on level) (+ 21% AP) total bonus magic damage.",
            min: 0,
            max: 10,
            description:
              "Orianna's basic attacks are empowered to deal 10 − 50 (based on level) (+ 15% AP) bonus magic damage  on-hit, increased by「 20% 」「 2 − 10 (based on level) (+ 3% AP) 」per stack, up to 14 − 70 (based on level) (+ 21% AP) total bonus magic damage.",
            values: [
              10, 12.35, 14.71, 17.06, 19.41, 21.76, 24.12, 26.47, 28.82, 31.18,
              33.53, 35.88, 38.24, 40.59, 42.94, 45.29, 47.65, 50,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus magic damage  on-hit, increased by「 20% 」「 2 − 10',
            pre: "Orianna's basic attacks are empowered to deal 10 − 50",
            post: 'bonus magic damage  on-hit, increased by「 20% 」「 2 − 10',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
              {
                values: 3,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 3% AP',
              },
              {
                values: 21,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 21% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'See Pets for more details about The Ball.',
        descriptionHTML:
          '<i>See <a href="/wiki/Orianna/LoL#Pets" title="Orianna/LoL">Pets</a> for more details about The Ball.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    notes:
      '* <i>Clockwork Winding\'s</i> stack count can be seen in <b>Orianna\'s</b> buff bar.\n<ul><li>The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> extra bolts will cause <i>Clockwork Winding</i> to reset its stacks, as she hits targets other than her latest one <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  'Command: Attack': {
    name: 'Command: Attack',
    display_name: 'Command: Attack',
    champion: 'Orianna',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'OrianaIzunaCommand.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '825',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Landing impact radius">175</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Flying ball missile width">160</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Flying ball missile speed">1400</span>',
    cast_time: 'None',
    cost: '30 / 35 / 40 / 45 / 50',
    costtype: 'Mana',
    cooldown:
      '6 / 5.<small>25</small> / 4.<small>5</small> / 3.<small>75</small> / 3',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL" title="Orianna"><img alt="Orianna" src="/wiki/images/Orianna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL" title="Orianna/LoL">Orianna</a></span></span> commands <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span> to fly to the target location and remain there, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through and nearby enemies upon arrival.',
    ],
    description: [
      {
        icon: '/wiki/images/Command_Attack.png',
        description:
          'Active: Orianna commands  The Ball to fly to the target location and remain there, dealing magic damage to enemies it passes through and nearby enemies upon arrival, reduced to 70% against those hit beyond the first.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Orianna</b> commands <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span></i> to fly to the target location and remain there, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through and nearby enemies upon arrival, reduced to 70% against those hit beyond the first.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Orianna commands  The Ball to fly to the target location and remain there, dealing magic damage to enemies it passes through and nearby enemies upon arrival, reduced to 70% against those hit beyond the first.',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against those hit beyond the first.commands  The Ball to fly to the target location and remain there, dealing magic damage to enemies it passes through and nearby enemies upon arrival, reduced to 70',
            pre: 'Orianna commands  The Ball to fly to the target location and remain there, dealing magic damage to enemies it passes through and nearby enemies upon arrival, reduced to 70% against those hit beyond the first.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 90 / 120 / 150 / 180 (+ 50% AP)',
            valuesHTML:
              '60 / 90 / 120 / 150 / 180 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 50% AP)',
            damagetype: 'Magic',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
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
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Spellaoe',
    spellshield: true,
    projectile: 'special',
    notes:
      '* If <i>The Ball</i> is currently on <b>Orianna</b> herself, <i>Command: Attack</i> will have it cast to fly at least 150 units if the player attempts to cast it closer.\n<ul><li><i>The Ball</i> does not grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> while in flight, but the sound effect of striking an enemy is audible through the Fog of War.</li>\n<li><b>Orianna</b> cannot use <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Command: Protect" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Command:_Protect" title="Command: Protect"><img alt="Command: Protect" src="/wiki/images/Orianna_Command-_Protect.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Command:_Protect" title="Orianna/LoL">Command: Protect</a></span></span> while <i>The Ball</i> is in transit with <i>Command: Attack</i> but she may buffer <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Command: Dissonance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Command:_Dissonance" title="Command: Dissonance"><img alt="Command: Dissonance" src="/wiki/images/Orianna_Command-_Dissonance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Command:_Dissonance" title="Orianna/LoL">Command: Dissonance</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Command: Shockwave" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Command:_Shockwave" title="Command: Shockwave"><img alt="Command: Shockwave" src="/wiki/images/Orianna_Command-_Shockwave.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Command:_Shockwave" title="Orianna/LoL">Command: Shockwave</a></span></span> to cast once it has reached the location.</li>\n<li><i>The Ball</i> will remain at the target location until <b>Orianna</b> retrieves it or if she goes beyond its leash range.\n<ul><li><b>Orianna</b> will attempt to walk to <i>Command: Attack\'s</i> cast point if it lies outside cast range (<i>The Ball</i> will never exceed its leash range regardless of target direction).</li></ul></li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> <i>The Ball</i> will drop to the ground upon colliding with <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo\'s"><img alt="Yasuo\'s" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span></span> but not with <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum\'s"><img alt="Braum\'s" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span></span>.\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL" title="Samira\'s"><img alt="Samira\'s" src="/wiki/images/Samira_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL" title="Samira/LoL">Samira\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span></span>?</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Orianna_Original_Q_0.ogg   "Ravage."',
  },
  'Command: Dissonance': {
    name: 'Command: Dissonance',
    display_name: 'Command: Dissonance',
    champion: 'Orianna',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'OrianaDissonanceCommand.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both damage and persisting field radius">225</span>',
    cast_time: 'none',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL" title="Orianna"><img alt="Orianna" src="/wiki/images/Orianna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL" title="Orianna/LoL">Orianna</a></span></span> commands <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span> to emit an electric pulse that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
      'The pulse leaves behind an electric field for a short time, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies and grants <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> to <b>Orianna</b> and allied champions.',
    ],
    description: [
      {
        icon: '/wiki/images/Command_Dissonance.png',
        description:
          'Active: Orianna commands  The Ball to emit an electric pulse that deals magic damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Orianna</b> commands <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span></i> to emit an electric pulse that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 105 / 150 / 195 / 240 (+ 70% AP)',
            valuesHTML:
              '60 / 105 / 150 / 195 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 70% AP)',
            damagetype: 'Magic',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
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
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The pulse leaves behind an electric field that last 3 seconds, granting  bonus movement speed to Orianna and her allies when they move within. Enemies that move within the field are  slowed by the same amount, decaying over 2 seconds after leaving.',
        descriptionHTML:
          'The pulse leaves behind an electric field that last 3 seconds, granting <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> to <b>Orianna</b> and her allies when they move within. Enemies that move within the field are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by the same amount, decaying over 2 seconds after leaving.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The pulse leaves behind an electric field that last 3 seconds, granting  bonus movement speed to Orianna and her allies when they move within',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'pulse leaves behind an electric field that last 3 seconds, granting  bonus movement speed to Orianna and her allies when they move within',
            pre: 'The pulse leaves behind an electric field that last 3 seconds, granting  bonus movement speed to Orianna and her allies when they move within',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Enemies that move within the field are  slowed by the same amount, decaying over 2 seconds after leaving.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'that move within the field are  slowed by the same amount, decaying over 2 seconds after leaving.',
            pre: 'Enemies that move within the field are  slowed by the same amount, decaying over 2 seconds after leaving.',
          },
        ],
        leveling: [
          {
            name: 'Movement Speed Modifier:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Movement Speed Modifier:',
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
    targeting: 'Auto',
    affects: 'Enemies, Allies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes: '* No additional notes.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Orianna_Original_W_0.ogg   "Pulse."',
  },
  'Command: Protect': {
    name: 'Command: Protect',
    display_name: 'Command: Protect',
    champion: 'Orianna',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'OrianaRedactCommand.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1120',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Flying ball missile width">160</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Flying ball missile speed">1850</span>',
    cast_time: 'none',
    cost: '60',
    costtype: 'Mana',
    cooldown: '9',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span> grants <b>bonus</b> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span> to the unit it is attached to.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL" title="Orianna"><img alt="Orianna" src="/wiki/images/Orianna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL" title="Orianna/LoL">Orianna</a></span></span> commands <b>The Ball</b> to fly and attach to herself or the target allied champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span> the target for a short time.',
    ],
    description: [
      {
        description:
          'Passive:  The Ball grants  bonus armor and  bonus magic resistance to the unit it is attached to.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span></i> grants <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> to the unit it is attached to.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Resistances:',
            values: '6 / 12 / 18 / 24 / 30',
            valuesHTML: '6 / 12 / 18 / 24 / 30',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '6 / 12 / 18 / 24 / 30',
            values: [6, 12, 18, 24, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 12 / 18 / 24 / 30',
          },
        ],
      },
      {
        icon: '/wiki/images/Command_Protect.png',
        description:
          'Active: Orianna commands The Ball to fly to herself or the target allied  champion and attach itself to the target, dealing magic damage to enemies it passes through and granting the target a  shield for 2.5 seconds upon arrival.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Orianna</b> commands <i>The Ball</i> to fly to herself or the target allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and attach itself to the target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through and granting the target a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds upon arrival.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Orianna commands The Ball to fly to herself or the target allied  champion and attach itself to the target, dealing magic damage to enemies it passes through and granting the target a  shield for 2.5 seconds upon arrival.',
            damagetype: 'Magic',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'commands The Ball to fly to herself or the target allied  champion and attach itself to the target, dealing magic damage to enemies it passes through and granting the target a  shield for 2.5 seconds upon arrival.',
            pre: 'Orianna commands The Ball to fly to herself or the target allied  champion and attach itself to the target, dealing magic damage to enemies it passes through and granting the target a  shield for 2.5 seconds upon arrival.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 90 / 120 / 150 / 180 (+ 30% AP)',
            valuesHTML:
              '60 / 90 / 120 / 150 / 180 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
          {
            name: 'Shield Strength:',
            values: '55 / 90 / 125 / 160 / 195 (+ 45% AP)',
            valuesHTML:
              '55 / 90 / 125 / 160 / 195 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 30% AP)',
            damagetype: 'Magic',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
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
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '55 / 90 / 125 / 160 / 195 (+ 45% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [55, 90, 125, 160, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 90 / 125 / 160 / 195',
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
    targeting: 'Unit',
    affects: 'Enemies, Allies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>The Ball</i> does not grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> while in flight, but the sound effect of striking an enemy is audible through the Fog of War.\n<ul><li><b>Orianna</b> cannot cast her other abilities while the <i>The Ball</i> is moving to the target with <i>Command: Protect</i>.</li>\n<li><b>Orianna</b> gains <i>Command: Protect\'s</i> bonus resistances whenever <i>The Ball</i> is attached to her (even if she didn\'t self-cast).</li>\n<li><i>The Ball</i> will remain where <i>Command: Protect\'s</i> target ally <a href="/wiki/Death" title="Death">died</a> or, if instead they die or become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> while it is mid-flight, snap back to <b>Orianna</b>.\n<ul><li><i>The Ball</i> will return to <b>Orianna</b> if <i>Command: Protect\'s</i> target ally moves too far away from her (<i>The Ball</i> will always respect its <a href="/wiki/Pets#Leash_range" title="Pets">leash range</a>, which is increased by 100 when attached to allied champions).</li></ul></li>\n<li><i>The Ball</i> will join <i>Command: Protect\'s</i> target ally in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealth</a></span> if they are affected by it when <b>Orianna</b> targets them.</li>\n<li><i>The Ball</i> snaps back to <b>Orianna</b> upon being intercepted by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectile-blocking</a></span> effects.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Orianna_Original_E_0.ogg   "Protect."',
  },
  'Command: Shockwave': {
    name: 'Command: Shockwave',
    display_name: 'Command: Shockwave',
    champion: 'Orianna',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'OrianaDetonateCommand.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 415',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '110 / 102.<small>5</small> / 95 / 87.<small>5</small> / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL" title="Orianna"><img alt="Orianna" src="/wiki/images/Orianna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL" title="Orianna/LoL">Orianna</a></span></span> commands <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span> to unleash a shockwave that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> them inward.',
    ],
    description: [
      {
        icon: '/wiki/images/Command_Shockwave.png',
        description:
          'Active: Orianna commands  The Ball to unleash a shockwave that deals magic damage to nearby enemies,  stunning them for 0.75 seconds, and  pulling them over 325 − 700 (based on proximity to ball) units, though not through terrain.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Orianna</b> commands <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Orianna" data-ability="Clockwork Windup" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="The Ball"><img alt="The Ball" src="/wiki/images/Orianna_Clockwork_Windup.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Orianna/LoL#Clockwork_Windup" title="Orianna/LoL">The Ball</a></span></span></i> to unleash a shockwave that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> them over <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="proximity to ball" data-displayformula="Non-linear." data-bot_values="325;350;700" data-top_values="415;250;0">325 − 700 (based on proximity to ball)</span> units, though not through terrain.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Orianna commands  The Ball to unleash a shockwave that deals magic damage to nearby enemies,  stunning them for 0.75 seconds, and  pulling them over 325 − 700 (based on proximity to ball) units, though not through terrain.',
            damagetype: 'Magic',
            values: [0, 700],
            basedOn: 'proximity to ball',
            user: 'none',
            units: '',
            unitsText: 'units, though not through terrain.',
            pre: 'Orianna commands  The Ball to unleash a shockwave that deals magic damage to nearby enemies,  stunning them for 0.75 seconds, and  pulling them over 325 − 700',
            post: 'units, though not through terrain.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '250 / 300 / 350 / 400 / 450 (+ 90% AP)',
            valuesHTML:
              '250 / 300 / 350 / 400 / 450 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '250 / 300 / 350 / 400 / 450 (+ 90% AP)',
            damagetype: 'Magic',
            values: [250, 300, 350, 400, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 300 / 350 / 400 / 450',
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
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* <i>Command: Shockwave</i> tosses enemies a set distance (those on the edge of the flinging area will be tossed to the center while those close to the middle will go over <i>The Ball</i> towards the edge) and can send them through walls.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Command: Shockwave</i> will cast from wherever the unit the <i>The Ball</i> is attached to is at the end of the cast time.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Orianna_Original_R_0.ogg   "Throw."',
  },
} satisfies { [skillName in string]: SkillData };
