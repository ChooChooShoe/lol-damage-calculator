import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Tristana';

export default {
  'Draw a Bead': {
    name: 'Draw a Bead',
    display_name: 'Draw a Bead',
    champion: 'Tristana',
    skill: 'I',
    image: {
      full: 'Tristana_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Based on level, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL" title="Tristana"><img alt="Tristana" src="/wiki/images/Tristana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL" title="Tristana/LoL">Tristana</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> on her <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Explosive Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Explosive Charge"><img alt="Explosive Charge" src="/wiki/images/Tristana_Explosive_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Tristana/LoL">Explosive Charge</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Buster Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Buster Shot"><img alt="Buster Shot" src="/wiki/images/Tristana_Buster_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Tristana/LoL">Buster Shot</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Draw a Bead.png',
        description:
          "Innate: Tristana's basic attacks,  Explosive Charge and  Buster Shot gain  0 − 136 (based on level) bonus range, for a total of 525 − 661 (based on level).",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Tristana\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Explosive Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Explosive Charge"><img alt="Explosive Charge" src="/wiki/images/Tristana_Explosive_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Tristana/LoL">Explosive Charge</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Buster Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Buster Shot"><img alt="Buster Shot" src="/wiki/images/Tristana_Buster_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Tristana/LoL">Buster Shot</a></span></span></i> gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0;" data-finish="136;" data-bot_values="0;8;16;24;32;40;48;56;64;72;80;88;96;104;112;120;128;136" data-top_values="">0 − 136 (based on level)</span> <b>bonus</b> range</span>, for a total of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="525;" data-finish="661;" data-bot_values="525;533;541;549;557;565;573;581;589;597;605;613;621;629;637;645;653;661" data-top_values="">525 − 661 (based on level)</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: " Tristana's basic attacks,  Explosive Charge and  Buster Shot gain  0 − 136 (based on level) bonus range, for a total of 525 − 661 (based on level).",
            values: [
              0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120,
              128, 136,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus range, for a total of 525 − 661',
            pre: "Tristana's basic attacks,  Explosive Charge and  Buster Shot gain  0 − 136",
            post: 'bonus range, for a total of 525 − 661',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional details.',
  },
  'Rapid Fire': {
    name: 'Rapid Fire',
    display_name: 'Rapid Fire',
    champion: 'Tristana',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'TristanaQ.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">20 / 19 / 18 / 17 / 16</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL" title="Tristana"><img alt="Tristana" src="/wiki/images/Tristana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL" title="Tristana/LoL">Tristana</a></span></span> gains tremendous <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Rapid Fire.png',
        description:
          'Active: Tristana empowers her cannon, gaining  bonus attack speed for 7 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tristana</b> empowers her cannon, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 7 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Tristana empowers her cannon, gaining  bonus attack speed for 7 seconds.',
            increasedStat: 'bonus_ad',
            values: 7,
            units: '',
            unitsText:
              'empowers her cannon, gaining  bonus attack speed for 7 seconds.',
            pre: 'Tristana empowers her cannon, gaining  bonus attack speed for 7 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '65 / 80 / 95 / 110 / 125%',
            valuesHTML: '65 / 80 / 95 / 110 / 125%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '65 / 80 / 95 / 110 / 125%',
            values: [65, 80, 95, 110, 125],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 80 / 95 / 110 / 125%',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <i>Rapid Fire</i> is a non-refreshing buff that will not update on rank-up.',
  },
  'Rocket Jump': {
    name: 'Rocket Jump',
    display_name: 'Rocket Jump',
    champion: 'Tristana',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'TristanaW.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Can differ based on dash range/terrain interference">1100</span>',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'mana',
    cooldown: '22 / 20 / 18 / 16 / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL" title="Tristana"><img alt="Tristana" src="/wiki/images/Tristana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL" title="Tristana/LoL">Tristana</a></span></span> jumps to the target location. Upon landing, she deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies for a short time.',
      'When <b>Tristana</b> scores an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> or detonate <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Explosive Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Explosive Charge"><img alt="Explosive Charge" src="/wiki/images/Tristana_Explosive_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Tristana/LoL">Explosive Charge</a></span></span></i> at max stacks on a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, it will <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span> <i>Rocket Jump\'s</i> cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Rocket Jump.png',
        description:
          'Active: Tristana  jumps to the target location. Upon landing, she deals magic damage to nearby enemies and  slows them by 60% for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tristana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">jumps</a></span> to the target location. Upon landing, she deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 60% for a duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Upon landing, she deals magic damage to nearby enemies and  slows them by 60% for a duration.',
            damagetype: 'Magic',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for a duration.landing, she deals magic damage to nearby enemies and  slows them by 60',
            pre: 'Upon landing, she deals magic damage to nearby enemies and  slows them by 60% for a duration.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '95 / 145 / 195 / 245 / 295 (+ 50% AP)',
            valuesHTML:
              '95 / 145 / 195 / 245 / 295 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
          {
            name: 'Slow Duration:',
            values: '1 / 1.5 / 2 / 2.5 / 3',
            valuesHTML: '1 / 1.<small>5</small> / 2 / 2.<small>5</small> / 3',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '95 / 145 / 195 / 245 / 295 (+ 50% AP)',
            damagetype: 'Magic',
            values: [95, 145, 195, 245, 295],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '95 / 145 / 195 / 245 / 295',
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
          {
            effectType: 'Unique',
            name: 'Slow Duration:',
            raw: '1 / 1.5 / 2 / 2.5 / 3',
            values: [1, 1.5, 2, 2.5, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.5 / 2 / 2.5 / 3',
          },
        ],
      },
      {
        description:
          "Scoring an enemy  champion  takedown or detonating  Explosive Charge at maximum stacks on a  champion will reset Rocket Jump's  cooldown.",
        descriptionHTML:
          'Scoring an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> or detonating <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Explosive Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Explosive Charge"><img alt="Explosive Charge" src="/wiki/images/Tristana_Explosive_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Tristana/LoL">Explosive Charge</a></span></span></i> at maximum stacks on a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> will reset <i>Rocket Jump\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Tristana can cast any of her abilities during the dash. Rocket Jump will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i><b>Tristana</b> can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Rocket Jump will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies / Self',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <b>Tristana</b> can still use her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a>, and <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a> during <i>Rocket Jump</i>.\n<ul><li><i>Rocket Jump\'s</i> dash speed depends on the distance of the jump. Close-ranged jumps are much shorter while long-ranged jumps leave <b>Tristana</b> in the air significantly longer.</li>\n<li>If <b>Tristana</b> has less than 850 movement speed, a full-range <i>Rocket Jump</i> (including its cast time) will make her arrive quicker at its destination than walking at this speed could.</li>\n<li>Killing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> or detonating <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Explosive Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Explosive Charge"><img alt="Explosive Charge" src="/wiki/images/Tristana_Explosive_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Tristana/LoL">Explosive Charge</a></span></span> on them also resets <i>Rocket Jump\'s</i> cooldown.\n<ul><li>The former may be unintended.</li></ul></li></ul>',
  },
  'Explosive Charge': {
    name: 'Explosive Charge',
    display_name: 'Explosive Charge',
    champion: 'Tristana',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'TristanaE.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '525 − 661 (based on level)',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Passive">300</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Active">300</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Active (turret)">600</span>',
    speed: '2400',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Always equal to 100% of Tristana\'s attack windup"><span style="color:orangered; white-space:normal">0.<small>226</small> (at base attack speed)</span></span>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'mana',
    cooldown: '16 / 15.<small>5</small> / 15 / 14.<small>5</small> / 14',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Enemies explode when killed by <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL" title="Tristana\'s"><img alt="Tristana\'s" src="/wiki/images/Tristana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL" title="Tristana/LoL">Tristana\'s</a></span></span> basic attacks, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Tristana</b> tosses an explosive charge that attaches to the target enemy for a few seconds. The charge then explodes to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, increased based on <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span>.',
      '<b>Tristana\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against the target will increase the charge\'s damage. Upon reaching the cap, the charge explodes instantly.',
      'The charge can target and damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> and explodes farther on a turret.',
    ],
    description: [
      {
        description:
          "Passive: Tristana's basic attacks are empowered to trigger an explosion when they kill the target, dealing magic damage to nearby enemies.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Tristana\'s</b> basic attacks are empowered to trigger an explosion when they kill the target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '55 / 80 / 105 / 130 / 155 (+ 25% AP)',
            valuesHTML:
              '55 / 80 / 105 / 130 / 155 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 25% AP)',
            damagetype: 'Magic',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
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
        icon: '/wiki/images/Explosive Charge.png',
        description:
          'Active: Tristana tosses an explosive charge at the target enemy that attaches to them for 4 seconds. The charge then detonates, dealing physical damage to nearby enemies. Explosive Charge can target and damage  turrets, and explodes in a larger radius on a turret.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tristana</b> tosses an explosive charge at the target enemy that attaches to them for 4 seconds. The charge then detonates, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies. <i>Explosive Charge</i> can target and damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, and explodes in a larger radius on a turret.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Tristana tosses an explosive charge at the target enemy that attaches to them for 4 seconds',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'tosses an explosive charge at the target enemy that attaches to them for 4 seconds',
            pre: 'Tristana tosses an explosive charge at the target enemy that attaches to them for 4 seconds',
          },
        ],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values:
              '70 / 80 / 90 / 100 / 110 (+ 50 / 75 / 100 / 125 / 150% bonus AD) (+ 50% AP)',
            valuesHTML:
              '70 / 80 / 90 / 100 / 110 <span style="color:orange; white-space:normal">(+&nbsp;50 / 75 / 100 / 125 / 150% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '70 / 80 / 90 / 100 / 110 (+ 50 / 75 / 100 / 125 / 150% bonus AD) (+ 50% AP)',
            damagetype: 'Physical',
            values: [70, 80, 90, 100, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 80 / 90 / 100 / 110',
            children: [
              {
                values: [50, 75, 100, 125, 150],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50 / 75 / 100 / 125 / 150% bonus AD',
              },
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
        description:
          "Tristana's basic attacks  on-hit and abilities against the target increase Explosive Charge's damage by 30%, stacking up to 4 times for a maximum 120% increase, upon which the charge also detonates instantly.The charge's total damage is additionally increased by 0% − 33.3% (based on critical strike chance).",
        descriptionHTML:
          '<b>Tristana\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against the target increase <i>Explosive Charge\'s</i> damage by 30%, <a href="/wiki/Stack" title="Stack">stacking</a> up to 4 times for a maximum 120% increase, upon which the charge also detonates instantly.<br>The charge\'s <b>total</b> damage is additionally increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.333%*critical strike chance, capped at 33.3% increase" data-bot_values="0;3.33;6.66;9.99;13.32;16.65;19.98;23.31;26.64;29.97;33.3" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 33.<small>3</small>% (based on critical strike chance)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Tristana's basic attacks  on-hit and abilities against the target increase Explosive Charge's damage by 30%, stacking up to 4 times for a maximum 120% increase, upon which the charge also detonates instantly.The charge's total damage is additionally increased by 0% − 33.3% (based on critical strike chance).",
            values: 3,
            valuesIsPercent: true,
            basedOn: 'critical strike chance',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: "Tristana's basic attacks  on-hit and abilities against the target increase Explosive Charge's damage by 30%, stacking up to 4 times for a maximum 120% increase, upon which the charge also detonates instantly.The charge's total damage is additionally increased by 0% − 33.3%",
            post: '.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Damage Per Stack:',
            values:
              '21 / 24 / 27 / 30 / 33 (+ 15 / 22.5 / 30 / 37.5 / 45% bonus AD) (+ 15% AP)',
            valuesHTML:
              '21 / 24 / 27 / 30 / 33 <span style="color:orange; white-space:normal">(+&nbsp;15 / 22.<small>5</small> / 30 / 37.<small>5</small> / 45% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Stacks',
            name: 'Bonus Damage Per Stack:',
            raw: '21 / 24 / 27 / 30 / 33 (+ 15 / 22.5 / 30 / 37.5 / 45% bonus AD) (+ 15% AP)',
            min: 0,
            max: 10,
            description:
              '21 / 24 / 27 / 30 / 33 (+ 15 / 22.5 / 30 / 37.5 / 45% bonus AD) (+ 15% AP)',
            values: [21, 24, 27, 30, 33],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '21 / 24 / 27 / 30 / 33',
            children: [
              {
                values: [15, 22.5, 30, 37.5, 45],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 15 / 22.5 / 30 / 37.5 / 45% bonus AD',
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
      },
      {
        description:
          'If  Buster Shot is used to apply the last stack, the detonation will instead be delayed until the end of the  knock back or the 4 seconds expire.',
        descriptionHTML:
          '<i>If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Buster Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Buster Shot"><img alt="Buster Shot" src="/wiki/images/Tristana_Buster_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Tristana/LoL">Buster Shot</a></span></span> is used to apply the last stack, the detonation will instead be delayed until the end of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> or the 4 seconds expire.</i>',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'If  Buster Shot is used to apply the last stack, the detonation will instead be delayed until the end of the  knock back or the 4 seconds expire.',
            min: 0,
            max: 10,
            description:
              'If  Buster Shot is used to apply the last stack, the detonation will instead be delayed until the end of the  knock back or the 4 seconds expire.',
            values: 4,
            units: 'total_ap',
            unitsText:
              'Buster Shot is used to apply the last stack, the detonation will instead be delayed until the end of the  knock back or the 4 seconds expire.',
            pre: 'If  Buster Shot is used to apply the last stack, the detonation will instead be delayed until the end of the  knock back or the 4 seconds expire.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Tristana will attempt to basic attack the target afterwards.',
        descriptionHTML:
          '<i><b>Tristana</b> will attempt to basic attack the target afterwards.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* <i>Explosive Charge\'s</i> cast time is always 100% of the caster\'s attack windup time.\n<ul><li><ul><li>At base attack speed, <b>Tristana\'s</b> attack windup is 0.<small>225625</small> seconds.</li>\n<li>An easy formula to calculate the cast time is [ 0.<small>14801</small> seconds divided by <span style="color:orangered; white-space:normal"><b>total</b> attack speed</span> ].</li>\n<li>Reducing <b>Tristana\'s</b> attack speed via <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">attack speed reductions</a></span> also increases <i>Explosive Charge\'s</i> cast time by the same fraction.</li>\n<li>It is calculated from <b>Tristana\'s</b> total attack speed after cap (2.5) and floor (0.2), making the maximum possible cast time <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.74005 seconds, but rounded up to the next game tick.">0.<small>759</small> seconds</span>.</li></ul></li>\n<li><b>Tristana</b> will be automatically ordered to basic attack the target.</li>\n<li><i>Explosive Charge\'s</i> initial application deals 0 <span style="color: #FF8C34; white-space:normal">physical</span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="sourcetype pending for test, but probably proc">damage</span>, triggering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> aggro.\n<ul><li>It also triggers a <a href="/wiki/Stack" title="Stack">stack</a> of effects such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>.</li></ul></li>\n<li>All explosions by <i>Explosive Charge\'s</i> passive count as the same cast instance. Every cast of the active is a separate cast instance:\n<ul><li>Hitting a champion with the passive by killing a nearby unit, casting the active on them (see note above) and landing a basic attack against them triggers <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>.</li>\n<li>Hitting a champion with the passive by killing a nearby unit, casting the active on them and hitting them again with the Passive by killing another nearby unit does <b>not</b> trigger <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">Dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span> all prevent <i>Explosive Charge\'s</i> stack application via basic attacks.</li>\n<li><i>Explosive Charge\'s</i> detonation will deal damage to the primary target even if they have become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><i>Explosive Charge\'s</i> stacks from basic attacks are applied as an <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effect and will therefore interact with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade\'s"><img alt="Guinsoo\'s Rageblade\'s" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade\'s</a></span></span> Phantom Hit and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> bolts.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Buster Shot': {
    name: 'Buster Shot',
    display_name: 'Buster Shot',
    champion: 'Tristana',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'TristanaR.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '525 − 661 (based on level)',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Around target once the missile hits">200</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">2000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knockback speed, can differ slightly based on circumstance">1500</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '120 / 110 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL" title="Tristana"><img alt="Tristana" src="/wiki/images/Tristana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL" title="Tristana/LoL">Tristana</a></span></span> fires a massive cannonball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>. They and surrounding enemies are also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Buster Shot.png',
        description:
          'Active: Tristana fires a massive cannonball at the target enemy that deals magic damage. They and surrounding enemies are also  knocked back and  stunned for up-to 0.75 seconds, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tristana</b> fires a massive cannonball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>. They and surrounding enemies are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">for up-to 0.<small>75</small> seconds</span>, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '300 / 400 / 500 (+ 100% AP)',
            valuesHTML:
              '300 / 400 / 500 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
          {
            name: 'Knock Back Distance:',
            values: '600 / 800 / 1000',
            valuesHTML: '600 / 800 / 1000',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '300 / 400 / 500 (+ 100% AP)',
            damagetype: 'Magic',
            values: [300, 400, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 400 / 500',
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
            name: 'Knock Back Distance:',
            raw: '600 / 800 / 1000',
            values: [600, 800, 1000],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '600 / 800 / 1000',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to the primary target and deals 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span> to secondary targets.\n<ul><li><ul><li>The 0 damage to secondary targets triggers <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> aggro, but does not stack <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Explosive Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Explosive Charge"><img alt="Explosive Charge" src="/wiki/images/Tristana_Explosive_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Tristana/LoL">Explosive Charge</a></span></span></i>.</li></ul></li>\n<li><b>Tristana</b> will attempt to basic attack the target afterwards.</li>\n<li><i>Buster Shot\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacement</a></span> direction is based on <b>Tristana\'s</b> location at the end of the cast time.\n<ul><li>The primary target is pushed in a straight line away from that location, but the knockback distance and speed may be impeded by terrain.</li>\n<li>Secondary targets are displaced parallel to the primary target\'s displacement.</li></ul></li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">crowd control</a></span> is removed early when the forced movement stops.\n<ul><li>At normal knockback distance and knockback speed, this changes the duration of the disable to circa 0.<small>4</small> / 0.<small>5</small> / 0.<small>6</small> seconds by default.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will also resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
