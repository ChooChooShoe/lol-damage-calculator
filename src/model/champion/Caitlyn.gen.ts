import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Caitlyn';

export default {
  Headshot: {
    name: 'Headshot',
    display_name: 'Headshot',
    champion: 'Caitlyn',
    skill: 'I',
    image: {
      full: 'Caitlyn_Headshot.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Headshots missile speed">3000</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL" title="Caitlyn\'s"><img alt="Caitlyn\'s" src="/wiki/images/Caitlyn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL" title="Caitlyn/LoL">Caitlyn\'s</a></span></span> basic attacks generate stacks of <i>Count</i>. At maximum stacks, her next <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span> will fire a <i>Headshot</i> dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> that scales with her <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #E56013; white-space:normal">critical strike chance</span></span>.',
      'On <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Yordle Snap Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="trapped"><img alt="trapped" src="/wiki/images/Caitlyn_Yordle_Snap_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Caitlyn/LoL">trapped</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="90 Caliber Net" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="netted"><img alt="netted" src="/wiki/images/Caitlyn_90_Caliber_Net.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="Caitlyn/LoL">netted</a></span></span> targets, she gains another <i>Headshot</i> at extra <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>.',
    ],
    description: [
      {
        description:
          "Innate: Caitlyn's basic attacks generate a stack of Count on-attack, doubled if she is within  brush. At 6 stacks, or 5 while in brush, her next basic attack consumes all stacks to become a Headshot.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Caitlyn\'s</b> basic attacks generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Count</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>, doubled if she is within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>. At 6 stacks, or 5 while in <i>brush</i>, her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> consumes all stacks to become a <i>Headshot</i>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'At 6 stacks, or 5 while in brush, her next basic attack consumes all stacks to become a Headshot.',
            min: 0,
            max: 10,
            description:
              'At 6 stacks, or 5 while in brush, her next basic attack consumes all stacks to become a Headshot.',
            values: 6,
            units: 'genericStacks',
            unitsText:
              '6 stacks, or 5 while in brush, her next basic attack consumes all stacks to become a Headshot.',
            pre: 'At 6 stacks, or 5 while in brush, her next basic attack consumes all stacks to become a Headshot.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Headshot.png',
        description:
          "Headshot: Caitlyn's basic attack is empowered to have an  uncancellable windup and deal 60 / 90 / 120% (based on level) (+ (131.25% +  26.25%) critical strike chance) AD bonus physical damage, increased to 110 / 115 / 120% (based on level) (+ (131.25% +  26.25%) critical strike chance AD against non-champions.",
        descriptionHTML:
          '<span class="template_sbc"><b>Headshot:</b></span> <b>Caitlyn\'s</b> basic attack is empowered to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and deal <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="60;1" data-finish="120;13" data-bot_values="60;90;120" data-top_values="1;7;13" data-bot_key="%">60 / 90 / 120% (based on level)</span></span> <span style="color: #E56013; white-space:normal">(+&nbsp;(<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="75% multiplied by standard critical damage factor">131.<small>25</small></span>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="26.25%"><img alt="26.25%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">26.<small>25</small>%</a></span></span>) critical strike chance)</span> <span style="color:orange; white-space:normal">AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, increased to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="110;1" data-finish="120;13" data-bot_values="110;115;120" data-top_values="1;7;13" data-bot_key="%">110 / 115 / 120% (based on level)</span></span> <span style="color: #E56013; white-space:normal">(+&nbsp;(<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="75% multiplied by standard critical damage factor">131.<small>25</small></span>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="26.25%"><img alt="26.25%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">26.<small>25</small>%</a></span></span>) critical strike chance</span> <span style="color:orange; white-space:normal">AD</span> against non-champions.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Headshot:',
            raw: "Caitlyn's basic attack is empowered to have an  uncancellable windup and deal 60 / 90 / 120% (based on level) (+ (131.25% +  26.25%) critical strike chance) AD bonus physical damage, increased to 110 / 115 / 120% (based on level) (+ (131.25% +  26.25%) critical strike chance AD against non-champions.",
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText:
              'AD bonus physical damage, increased to 110 / 115 / 120%',
            pre: "Caitlyn's basic attack is empowered to have an  uncancellable windup and deal 60 / 90 / 120%",
            post: 'AD bonus physical damage, increased to 110 / 115 / 120%',
            children: [
              {
                values: 0,
                units: 'total_critchance',
                unitsText: 'critical strike chance',
                pre: '+',
                post: 'critical strike chance',
                children: [
                  {
                    values: 131.25,
                    valuesIsPercent: true,
                    user: 'none',
                    units: '',
                    unitsText: '+  26.25',
                    pre: '131.25% +  26.25%',
                  },
                ],
              },
              {
                values: 131.25,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  26.25',
                pre: '131.25% +  26.25%',
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
          'Caitlyn may fire more than one Headshot until it hits a target, which consumes all stacks.',
        descriptionHTML:
          '<b>Caitlyn</b> may fire more than one <i>Headshot</i> until it hits a target, which consumes all stacks.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Headshot_2.png',
        description:
          'Enemies that step over a  Yordle Snap Trap or are hit by  90 Caliber Net can grant an additional Headshot against them at  1300 range within 1.8 seconds, without consuming stacks. Each method grants only one Headshot at a time.',
        descriptionHTML:
          'Enemies that step over a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Yordle Snap Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Yordle Snap Trap"><img alt="Yordle Snap Trap" src="/wiki/images/Caitlyn_Yordle_Snap_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Caitlyn/LoL">Yordle Snap Trap</a></span></span></i> or are hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="90 Caliber Net" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="90 Caliber Net"><img alt="90 Caliber Net" src="/wiki/images/Caitlyn_90_Caliber_Net.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="Caitlyn/LoL">90 Caliber Net</a></span></span></i> can grant an additional <i>Headshot</i> against them at <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1300 range</span> within 1.<small>8</small> seconds, without consuming stacks. Each method grants only one <i>Headshot</i> at a time.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'Enemies that step over a  Yordle Snap Trap or are hit by  90 Caliber Net can grant an additional Headshot against them at  1300 range within 1.8 seconds, without consuming stacks',
            min: 0,
            max: 10,
            description:
              'Enemies that step over a  Yordle Snap Trap or are hit by  90 Caliber Net can grant an additional Headshot against them at  1300 range within 1.8 seconds, without consuming stacks',
            values: 9,
            units: 'total_ap',
            unitsText:
              'that step over a  Yordle Snap Trap or are hit by  90 Caliber Net can grant an additional Headshot against them at  1300 range within 1.8 seconds, without consuming stacks',
            pre: 'Enemies that step over a  Yordle Snap Trap or are hit by  90 Caliber Net can grant an additional Headshot against them at  1300 range within 1.8 seconds, without consuming stacks',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'Basic',
    spellshield: false,
    projectile: 'True',
    notes:
      '* <i>Headshot</i> is consumed when the missile successfully hits the target.\n<ul><li>If <b>Caitlyn\'s</b> current target becomes trapped by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Yordle Snap Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Yordle Snap Trap"><img alt="Yordle Snap Trap" src="/wiki/images/Caitlyn_Yordle_Snap_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Caitlyn/LoL">Yordle Snap Trap</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="90 Caliber Net" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="90 Caliber Net"><img alt="90 Caliber Net" src="/wiki/images/Caitlyn_90_Caliber_Net.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="Caitlyn/LoL">90 Caliber Net</a></span></span> while her attack is on cooldown, this ongoing cooldown will be refunded partially so that her next attack on them can begin earlier.\n<ul><li>Swapping the target to an enemy trapped by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Yordle Snap Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Yordle Snap Trap"><img alt="Yordle Snap Trap" src="/wiki/images/Caitlyn_Yordle_Snap_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Caitlyn/LoL">Yordle Snap Trap</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="90 Caliber Net" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="90 Caliber Net"><img alt="90 Caliber Net" src="/wiki/images/Caitlyn_90_Caliber_Net.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="Caitlyn/LoL">90 Caliber Net</a></span></span> also reduces her ongoing attack cooldown.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: The exact attack cooldown refund appears to be 50% of the attack cooldown at current attack speed, but at a minimum amount it lets <b>Caitlyn</b> start the attack against the trapped target within 0.<small>5</small> seconds of her previous attack windup completing.</li></ul></li></ul></li>\n<li>The bonus range from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span> will not have any effect during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Yordle Snap Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="trap"><img alt="trap" src="/wiki/images/Caitlyn_Yordle_Snap_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Caitlyn/LoL">trap</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="90 Caliber Net" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="net"><img alt="net" src="/wiki/images/Caitlyn_90_Caliber_Net.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#90_Caliber_Net" title="Caitlyn/LoL">net</a></span></span> extended <i>Headshot</i> attacks.</li>\n<li>Only the ordinary <span style="color:orange; white-space:normal">100% attack damage</span> portion of the attack can critically strike. The bonus from <i>Headshot</i> is added after the critical strike is rolled.\n<ul><li>The full damage of <i>Headshot</i> applies <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.</li>\n<li><i>Headshot</i> is a single instance of damage, thus does not trigger <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL" title="Amumu\'s"><img alt="Amumu\'s" src="/wiki/images/Amumu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL" title="Amumu/LoL">Amumu\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Tantrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Tantrum" title="Tantrum\'s"><img alt="Tantrum\'s" src="/wiki/images/Amumu_Tantrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Tantrum" title="Amumu/LoL">Tantrum\'s</a></span></span></span> or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Warden\'s Mail" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Warden%27s_Mail" title="Warden\'s Mail\'s"><img alt="Warden\'s Mail\'s" src="/wiki/images/Warden%27s_Mail_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Warden%27s_Mail" title="Warden\'s Mail">Warden\'s Mail\'s</a></span></span> passives twice.</li></ul></li>\n<li>The basic attack triggering <i>Headshot</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, but <i>Headshot\'s</i> damage remains unchanged if it does.</li>\n<li>Since <b>Caitlyn\'s</b> Art and Sustainability Update, Ability-granted <i>Headshots</i> are the same as the original <i>Headshot</i> override attack, though what lets them cast at high range is still relatively special. They trigger <a href="/wiki/On-attack" class="mw-redirect" title="On-attack">on-attack</a> effects (including stacking <i>Headshot</i>).\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> <a href="/wiki/Named_item_effect#Wind\'s_Fury" title="Named item effect">Wind\'s Fury</a>, is special cased to search targets with the increased range as well.</li></ul></li>\n<li>Because <i>Headshot</i> stacks are generated <a href="/wiki/On-attack" class="mw-redirect" title="On-attack">on-attack</a>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> bolts will not generate stacks towards <i>Headshot</i>.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li>Stacks will still be generated towards <i>Headshot</i> when attacking them.</li></ul></li></ul>',
    video: 'Caitlyn IVideo.ogv',
  },
  'Piltover Peacemaker': {
    name: 'Piltover Peacemaker',
    display_name: 'Piltover Peacemaker',
    champion: 'Caitlyn',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'CaitlynQ.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1300 /  1240',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial missile">120</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Expanded missile">180</span>',
    speed: '2200',
    cast_time: '0.<small>625</small>',
    cost: '55 / 60 / 65 / 70 / 75',
    costtype: 'mana',
    cooldown: '10 / 9 / 8 / 7 / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL" title="Caitlyn"><img alt="Caitlyn" src="/wiki/images/Caitlyn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL" title="Caitlyn/LoL">Caitlyn</a></span></span> revs up her rifle to unleash a penetrating shot that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
      'The projectile expands after the first target but also deals less damage.',
    ],
    description: [
      {
        icon: '/wiki/images/Piltover_Peacemaker.png',
        description:
          'Active: Caitlyn fires a piercing shot in the target direction that deals physical damage to the first enemy it passes through, after which it expands in width but deals only 50% damage to enemies it hits thereafter.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Caitlyn</b> fires a piercing shot in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy it passes through, after which it expands in width but deals only 50% damage to enemies it hits thereafter.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Caitlyn fires a piercing shot in the target direction that deals physical damage to the first enemy it passes through, after which it expands in width but deals only 50% damage to enemies it hits thereafter.',
            damagetype: 'Physical',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage to enemies it hits thereafter.fires a piercing shot in the target direction that deals physical damage to the first enemy it passes through, after which it expands in width but deals only 50',
            pre: 'Caitlyn fires a piercing shot in the target direction that deals physical damage to the first enemy it passes through, after which it expands in width but deals only 50% damage to enemies it hits thereafter.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '50 / 90 / 130 / 170 / 210 (+ 125 / 145 / 165 / 185 / 205% AD)',
            valuesHTML:
              '50 / 90 / 130 / 170 / 210 <span style="color:orange; white-space:normal">(+&nbsp;125 / 145 / 165 / 185 / 205% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 90 / 130 / 170 / 210 (+ 125 / 145 / 165 / 185 / 205% AD)',
            damagetype: 'Physical',
            values: [50, 90, 130, 170, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 90 / 130 / 170 / 210',
            children: [
              {
                values: [125, 145, 165, 185, 205],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 125 / 145 / 165 / 185 / 205% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies  revealed by  Yordle Snap Trap always take  full damage from Piltover Peacemaker.',
        descriptionHTML:
          'Enemies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Yordle Snap Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Yordle Snap Trap"><img alt="Yordle Snap Trap" src="/wiki/images/Caitlyn_Yordle_Snap_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Caitlyn/LoL">Yordle Snap Trap</a></span></span></i> always take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">full damage</span> from <i>Piltover Peacemaker</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Enemies hit while protected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> will still be considered a target for calculating damage for subsequent hits.\n<ul><li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
    video: 'Caitlyn QVideo.ogv',
  },
  'Yordle Snap Trap': {
    name: 'Yordle Snap Trap',
    display_name: 'Yordle Snap Trap',
    champion: 'Caitlyn',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'CaitlynW.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '800',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 15',
    cast_time: '0.<small>25</small>',
    cost: '20',
    costtype: 'Mana + 1 Charge',
    cooldown: '0.<small>5</small>',
    recharge: '30 / 24 / 19 / 15 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL" title="Caitlyn"><img alt="Caitlyn" src="/wiki/images/Caitlyn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL" title="Caitlyn/LoL">Caitlyn</a></span></span> sets a trap at the target location that lasts for a while. The trap springs when an enemy champion steps on it, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them.',
      '<b>Caitlyn</b> periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a> a charge of <i>Yordle Snap Trap</i>, up to a cap.',
      'The next <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Headshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Headshot" title="Headshot"><img alt="Headshot" src="/wiki/images/Caitlyn_Headshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Headshot" title="Caitlyn/LoL">Headshot</a></span></span></i> against a trapped target will deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Yordle_Snap_Trap.png',
        description:
          'Active: Caitlyn sets a visible trap at the target location that is  untargetable and arms after 1 second, lasting for a duration. The trap grants  sight of the area for 1 second after being placed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Caitlyn</b> sets a visible trap at the target location that is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and arms after 1 second, lasting for a duration. The trap grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1 second after being placed.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Caitlyn sets a visible trap at the target location that is  untargetable and arms after 1 second, lasting for a duration',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'sets a visible trap at the target location that is  untargetable and arms after 1 second, lasting for a duration',
            pre: 'Caitlyn sets a visible trap at the target location that is  untargetable and arms after 1 second, lasting for a duration',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'The trap grants  sight of the area for 1 second after being placed.',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'trap grants  sight of the area for 1 second after being placed.',
            pre: 'The trap grants  sight of the area for 1 second after being placed.',
          },
        ],
        leveling: [
          {
            name: 'Trap Duration:',
            values: '30 / 35 / 40 / 45 / 50',
            valuesHTML: '30 / 35 / 40 / 45 / 50',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Trap Duration:',
            raw: '30 / 35 / 40 / 45 / 50',
            damagetype: 'None',
            values: [30, 35, 40, 45, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Caitlyn periodically stocks a Yordle Snap Trap charge, up to a maximum amount. Deploying traps beyond the maximum destroys the oldest one.',
        descriptionHTML:
          '<b>Caitlyn</b> periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a> a <i>Yordle Snap Trap</i> charge, up to a maximum amount. Deploying traps beyond the maximum destroys the oldest one.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Maximum Traps:',
            values: '3 / 3 / 4 / 4 / 5',
            valuesHTML: '3 / 3 / 4 / 4 / 5',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Maximum Traps:',
            raw: '3 / 3 / 4 / 4 / 5',
            damagetype: 'None',
            values: [3, 3, 4, 4, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3 / 4 / 4 / 5',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The next enemy champion that springs the trap is  rooted for 1.5 seconds and  revealed for 3 seconds, as well as takes additional damage from  Headshot. Trapped targets become immune to further Yordle Snap Traps for 3 seconds.',
        descriptionHTML:
          'The next enemy champion that springs the trap is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 1.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> for 3 seconds, as well as takes additional damage from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Headshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Headshot" title="Headshot"><img alt="Headshot" src="/wiki/images/Caitlyn_Headshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Headshot" title="Caitlyn/LoL">Headshot</a></span></span></i>. Trapped targets become immune to further <i>Yordle Snap Traps</i> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The next enemy champion that springs the trap is  rooted for 1.5 seconds and  revealed for 3 seconds, as well as takes additional damage from  Headshot',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'next enemy champion that springs the trap is  rooted for 1.5 seconds and  revealed for 3 seconds, as well as takes additional damage from  Headshot',
            pre: 'The next enemy champion that springs the trap is  rooted for 1.5 seconds and  revealed for 3 seconds, as well as takes additional damage from  Headshot',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Trapped targets become immune to further Yordle Snap Traps for 3 seconds.',
            damagetype: 'None',
            values: 3,
            units: 'total_ap',
            unitsText:
              'targets become immune to further Yordle Snap Traps for 3 seconds.',
            pre: 'Trapped targets become immune to further Yordle Snap Traps for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Headshot Damage Increase:',
            values:
              '40 / 85 / 130 / 175 / 220 (+ 40 / 50 / 60 / 70 / 80% bonus AD)',
            valuesHTML:
              '40 / 85 / 130 / 175 / 220 <span style="color:orange; white-space:normal">(+&nbsp;40 / 50 / 60 / 70 / 80% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Headshot Damage Increase:',
            raw: '40 / 85 / 130 / 175 / 220 (+ 40 / 50 / 60 / 70 / 80% bonus AD)',
            damagetype: 'None',
            values: [40, 85, 130, 175, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 85 / 130 / 175 / 220',
            children: [
              {
                values: [40, 50, 60, 70, 80],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40 / 50 / 60 / 70 / 80% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spellshield: true,
    notes:
      '* <span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> Immunity vs <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">Airborne</a></span> moveblocks and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kinematics" class="mw-redirect" title="Kinematics">Kinematics</a></span>?:</span>\n<ul><li>If multiple traps are placed under an enemy, they will spring all at once.</li></ul>',
    video: 'Caitlyn WVideo.ogv',
  },
  '90 Caliber Net': {
    name: '90 Caliber Net',
    display_name: '90 Caliber Net',
    champion: 'Caitlyn',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'CaitlynE.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '800 /  740',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">1600</span>',
    cast_time: '0.<small>15</small>',
    cost: '75',
    costtype: 'mana',
    cooldown: '16 / 14 / 12 / 10 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL" title="Caitlyn"><img alt="Caitlyn" src="/wiki/images/Caitlyn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL" title="Caitlyn/LoL">Caitlyn</a></span></span> fires a heavy net that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the first target hit and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to them.',
      'Firing the net causes her to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">recoil</a></span> back.',
    ],
    description: [
      {
        icon: '/wiki/images/90_Caliber_Net.png',
        description:
          'Active: Caitlyn fires a net in the target direction and  recoils 390 units in the opposite direction. The net deals magic damage to the first enemy hit and  slows them by 50% for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Caitlyn</b> fires a net in the target direction and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">recoils</a></span> 390 units in the opposite direction. The net deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Caitlyn fires a net in the target direction and  recoils 390 units in the opposite direction',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'fires a net in the target direction and  recoils 390 units in the opposite direction',
            pre: 'Caitlyn fires a net in the target direction and  recoils 390 units in the opposite direction',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The net deals magic damage to the first enemy hit and  slows them by 50% for 1 second.',
            damagetype: 'Magic',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1 second.net deals magic damage to the first enemy hit and  slows them by 50',
            pre: 'The net deals magic damage to the first enemy hit and  slows them by 50% for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 130 / 180 / 230 / 280 (+ 80% AP)',
            valuesHTML:
              '80 / 130 / 180 / 230 / 280 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 130 / 180 / 230 / 280 (+ 80% AP)',
            damagetype: 'Magic',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
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
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Caitlyn will not dash backwards if she is  immobilized or  grounded during the cast time. She can cast any of her abilities during the dash.',
        descriptionHTML:
          '<i><b>Caitlyn</b> will not dash backwards if she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> during the cast time. She can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>The recoil can be used to pass through terrain.</li>\n<li>If <b>Caitlyn</b> buffers <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Piltover Peacemaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Piltover_Peacemaker" title="Piltover Peacemaker"><img alt="Piltover Peacemaker" src="/wiki/images/Caitlyn_Piltover_Peacemaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Piltover_Peacemaker" title="Caitlyn/LoL">Piltover Peacemaker</a></span></span> during <i>90 Caliber Net\'s</i> cast time, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Piltover Peacemaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Piltover_Peacemaker" title="Piltover Peacemaker"><img alt="Piltover Peacemaker" src="/wiki/images/Caitlyn_Piltover_Peacemaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Piltover_Peacemaker" title="Caitlyn/LoL">Piltover Peacemaker</a></span></span> will start after the cast time.\n<ul><li>If <b>Caitlyn</b> buffers an ability or <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> during this ability\'s cast time, the buffered ability or basic attack will instead start after the dash ends.</li>\n<li>Other abilities can be cast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> if they are input after the cast time.</li></ul></li>\n<li><i>90 Caliber Net\'s</i> missile will fail to fire if <b>Caitlyn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressed</a></span> during the cast time.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
    video: 'Caitlyn EVideo.ogv',
  },
  'Ace in the Hole': {
    name: 'Ace in the Hole',
    display_name: 'Ace in the Hole',
    champion: 'Caitlyn',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'CaitlynR.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '3500',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Collision width">80</span>',
    speed: '3200',
    cast_time: '0.<small>375</small>',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">90 / 82.<small>5</small> / 75 / 67.<small>5</small> / 60</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL" title="Caitlyn"><img alt="Caitlyn" src="/wiki/images/Caitlyn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL" title="Caitlyn/LoL">Caitlyn</a></span></span> targets an enemy champion and takes time to line up the perfect shot, dealing massive <span style="color: #FF8C34; white-space:normal">physical damage</span> to them at a huge range.',
      'The target\'s allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can intercept the shot for them.',
    ],
    description: [
      {
        icon: '/wiki/images/Ace_in_the_Hole.png',
        description:
          'Active: Caitlyn locks onto the target enemy champion and  channels for 1 second,  revealing them as well as  revealing herself.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Caitlyn</b> locks onto the target enemy champion and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1 second, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> herself.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Caitlyn locks onto the target enemy champion and  channels for 1 second,  revealing them as well as  revealing herself.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'locks onto the target enemy champion and  channels for 1 second,  revealing them as well as  revealing herself.',
            pre: 'Caitlyn locks onto the target enemy champion and  channels for 1 second,  revealing them as well as  revealing herself.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Ace in the Hole is placed on a 5-second  cooldown if canceled.',
        descriptionHTML:
          '<i>Ace in the Hole</i> is placed on a 5-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> if canceled.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Ace in the Hole is placed on a 5-second  cooldown if canceled.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'in the Hole is placed on a 5-second  cooldown if canceled.',
            pre: 'Ace in the Hole is placed on a 5-second  cooldown if canceled.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Once Caitlyn completes the channel, she fires a homing bullet toward the target that deals physical damage to the first enemy champion it hits, increased by 0% − 25% (based on critical strike chance).',
        descriptionHTML:
          'Once <b>Caitlyn</b> completes the channel, she fires a homing bullet toward the target that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy champion it hits, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-start="0;0" data-finish="25;100" data-bot_values="0;2.5;5;7.5;10;12.5;15;17.5;20;22.5;25" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 25% (based on critical strike chance)</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical damage:',
            values: '300 / 412.5 / 525 / 637.5 / 750 (+ 200% bonus AD)',
            valuesHTML:
              '300 / 412.<small>5</small> / 525 / 637.<small>5</small> / 750 <span style="color:orange; white-space:normal">(+&nbsp;200% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical damage:',
            raw: '300 / 412.5 / 525 / 637.5 / 750 (+ 200% bonus AD)',
            damagetype: 'Physical',
            values: [300, 412.5, 525, 637.5, 750],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 412.5 / 525 / 637.5 / 750',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 200% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'true',
    notes:
      '* The following will cancel <i>Ace in the Hole\'s</i> channel (mana expenditure is not compensated):\n<ul><li><ul><li><b>Caitlyn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.</li>\n<li>The target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><b>Caitlyn</b> or her target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>.</li>\n<li><b>Caitlyn</b> uses <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>.</li></ul></li>\n<li><i>Ace in the Hole</i> reveals the target and <b>Caitlyn</b> through a buff that lasts for up to 4 seconds.\n<ul><li>The buff is applied to the target from the start of the cast time.</li>\n<li>The buff ends prematurely when the channel is canceled or the bullet hits an enemy.\n<ul><li>The target is revealed for 1 second if the buff is ended prematurely.</li>\n<li>It is not removed if the cast time is cancelled or the bullet missile is destroyed.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li></ul></li>\n<li>The ability also goes on a 5-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> if <b>Caitlyn</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> during the cast time.\n<ul><li>The cast time does not end prematurely but the channel will be immediately canceled the moment the cast time completes.</li></ul></li>\n<li>If the target dies after the bullet has been fired, the shot will continue towards their corpse and may still hit other enemy champions.</li>\n<li>The bullet has a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> radius of 1500 attached to it.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).\n<ul><li>This excludes losing sight of the target.</li></ul></li>\n<li>The following table refers for interactions while <b>Caitlyn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Caitlyn_Original_R_0.ogg   "In my sights."',
    video: 'Caitlyn RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
