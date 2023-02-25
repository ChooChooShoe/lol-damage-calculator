import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Ashe';

export default {
  'Frost Shot': {
    name: 'Frost Shot',
    display_name: 'Frost Shot',
    champion: 'Ashe',
    skill: 'I',
    image: {
      full: 'Ashe_P.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate - Frost Shot:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL" title="Ashe\'s"><img alt="Ashe\'s" src="/wiki/images/Ashe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL" title="Ashe/LoL">Ashe\'s</a></span></span> basic attacks apply a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> on-hit and cause her subsequent attacks to deal increased damage.',
      '<span class="template_sbc"><b>Innate - Critical Slow:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL" title="Ashe\'s"><img alt="Ashe\'s" src="/wiki/images/Ashe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL" title="Ashe/LoL">Ashe\'s</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> deal no bonus damage but apply an empowered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Frost Shot.png',
        description:
          "Innate - Frost Shot: Ashe's basic attacks and ability hits apply Frost to enemies for 2 seconds, which  slows them by 20% − 30% (based on level) for the duration. Basic attacks against enemies with Frost are modified to deal 110% (+ (75% +  35%) of critical strike chance) damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Frost Shot:</b></span> <b>Ashe\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits apply <i>Frost</i> to enemies for 2 seconds, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="30;" data-bot_values="20;20.59;21.18;21.76;22.35;22.94;23.53;24.12;24.71;25.29;25.88;26.47;27.06;27.65;28.24;28.82;29.41;30" data-top_values="" data-bot_key="%">20% − 30% (based on level)</span> for the duration. Basic attacks against enemies with <i>Frost</i> are modified to deal 110% <span style="color: #E56013; white-space:normal">(+&nbsp;(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) of critical strike chance)</span> damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Frost Shot:',
            raw: " Ashe's basic attacks and ability hits apply Frost to enemies for 2 seconds, which  slows them by 20% − 30% (based on level) for the duration",
            damagetype: 'None',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'for the duration',
            pre: "Ashe's basic attacks and ability hits apply Frost to enemies for 2 seconds, which  slows them by 20% − 30%",
            post: 'for the duration',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Basic attacks against enemies with Frost are modified to deal 110% (+ (75% +  35%) of critical strike chance) damage.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage.',
            pre: 'Basic attacks against enemies with Frost are modified to deal 110%',
            post: 'damage.',
            children: [
              {
                values: 0,
                units: 'total_critchance',
                unitsText: 'of critical strike chance',
                pre: '+',
                post: 'of critical strike chance',
                children: [
                  {
                    values: 75,
                    valuesIsPercent: true,
                    user: 'none',
                    units: '',
                    unitsText: '+  35',
                    pre: '75% +  35%',
                  },
                ],
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Frost Shot 2.png',
        description:
          "Innate - Critical Slow: Ashe's  critical strikes do not deal any additional damage, instead they double Frost's slow strength to 40% − 60% (based on level), decaying over 1 second to its normal strength.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Critical Slow:</b></span> <b>Ashe\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> do not deal any additional damage, instead they double <i>Frost\'s</i> slow strength to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="60;" data-bot_values="40;41.18;42.35;43.53;44.71;45.88;47.06;48.24;49.41;50.59;51.76;52.94;54.12;55.29;56.47;57.65;58.82;60" data-top_values="" data-bot_key="%">40% − 60% (based on level)</span>, decaying over 1 second to its normal strength.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Critical Slow:',
            raw: " Ashe's  critical strikes do not deal any additional damage, instead they double Frost's slow strength to 40% − 60% (based on level), decaying over 1 second to its normal strength.",
            damagetype: 'None',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: ', decaying over 1 second to its normal strength.',
            pre: "Ashe's  critical strikes do not deal any additional damage, instead they double Frost's slow strength to 40% − 60%",
            post: ', decaying over 1 second to its normal strength.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    occurrence: 'On-hit',
    spellshield: true,
    notes:
      '* <b>Ashe\'s</b> critical strikes are still considered <span style="color: #944B00; white-space:normal">critical strike damage</span> that will be reduced by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>.\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> will not deal additional damage on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span>.</li>\n<li><span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Cheap Shot" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cheap_Shot_(Rune)" title="Cheap Shot"><img alt="Cheap Shot" src="/wiki/images/Cheap_Shot_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Cheap_Shot_(Rune)" class="mw-redirect" title="Cheap Shot (Rune)">Cheap Shot</a></span></span> will trigger on a subsequent basic attack even when the target is no longer slowed.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
    video: 'Ashe - Passive',
  },
  "Ranger's Focus": {
    name: "Ranger's Focus",
    display_name: "Ranger's Focus",
    champion: 'Ashe',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'AsheQ.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana + 4 Focus',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL" title="Ashe\'s"><img alt="Ashe\'s" src="/wiki/images/Ashe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL" title="Ashe/LoL">Ashe\'s</a></span></span> basic attacks generate stacks of <i>Focus</i>, up to a cap. Once the stacks reach the cap, she can cast <i>Ranger\'s Focus</i>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Ashe</b> gains <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span> and augments her basic attacks to fire a flurry of arrows.',
    ],
    description: [
      {
        icon: '/wiki/images/Focus.png',
        description:
          "Passive: While Ranger's Focus is inactive, Ashe's basic attacks on-attack generate a stack of Focus for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times. Stacks expire by one every 1 second.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> While <i>Ranger\'s Focus</i> is inactive, <b>Ashe\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Focus</i> for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times. Stacks expire by one every 1 second.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " While Ranger's Focus is inactive, Ashe's basic attacks on-attack generate a stack of Focus for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times",
            min: 0,
            max: 10,
            description:
              " While Ranger's Focus is inactive, Ashe's basic attacks on-attack generate a stack of Focus for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times",
            values: 4,
            units: 'feastStacks',
            unitsText:
              "Ranger's Focus is inactive, Ashe's basic attacks on-attack generate a stack of Focus for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times",
            pre: "While Ranger's Focus is inactive, Ashe's basic attacks on-attack generate a stack of Focus for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Stacks expire by one every 1 second.',
            min: 0,
            max: 10,
            description: 'Stacks expire by one every 1 second.',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'expire by one every 1 second.',
            pre: 'Stacks expire by one every 1 second.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Ranger's Focus.png",
        description:
          'Active: For 4 seconds, Ashe gains  bonus attack speed and empowers her basic attacks to fire a flurry of five arrows.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> For 4 seconds, <b>Ashe</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and empowers her basic attacks to fire a flurry of five arrows.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' For 4 seconds, Ashe gains  bonus attack speed and empowers her basic attacks to fire a flurry of five arrows.',
            increasedStat: 'bonus_ad',
            values: 4,
            units: '',
            unitsText:
              '4 seconds, Ashe gains  bonus attack speed and empowers her basic attacks to fire a flurry of five arrows.',
            pre: 'For 4 seconds, Ashe gains  bonus attack speed and empowers her basic attacks to fire a flurry of five arrows.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '25 / 32.5 / 40 / 47.5 / 55%',
            valuesHTML:
              '25 / 32.<small>5</small> / 40 / 47.<small>5</small> / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '25 / 32.5 / 40 / 47.5 / 55%',
            values: [25, 32.5, 40, 47.5, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 32.5 / 40 / 47.5 / 55%',
          },
        ],
      },
      {
        icon: "/wiki/images/Ranger's Focus 2.png",
        description:
          'Each arrow deals modified physical damage that benefits from  Frost Shot and  life steal. Flurries apply on-hit effects only once.',
        descriptionHTML:
          'Each arrow deals <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> that benefits from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Frost Shot"><img alt="Frost Shot" src="/wiki/images/Ashe_Frost_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Ashe/LoL">Frost Shot</a></span></span></i> and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>. Flurries apply <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effects only once.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage Per Arrow:',
            values: '21 / 22 / 23 / 24 / 25% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">21 / 22 / 23 / 24 / 25% AD</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Arrow:',
            raw: '21 / 22 / 23 / 24 / 25% AD',
            damagetype: 'Physical',
            values: [21, 22, 23, 24, 25],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '21 / 22 / 23 / 24 / 25% AD',
          },
        ],
      },
      {
        description: "Ranger's Focus  resets Ashe's basic attack timer.",
        descriptionHTML:
          '<i>Ranger\'s Focus <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Ashe\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'special',
    occurrence: 'On-hit',
    spellshield: false,
    projectile: 'True',
    notes:
      '* The first attack from Ranger\'s Focus has 6 arrows, thus dealing 20% more total damage than expected.\n<ul><li><i>Ranger\'s Focus</i> first bolt deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> with the subsequent 4 bolts dealing a non-reactive damage type (e.g. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span>).  The entire effect is classified as a basic attack on a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Script"><a href="/wiki/Damage" title="Damage">script</a></span>-level, but is considered an ability for other effects (i.e <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Maokai" data-ability="Sap Magic" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maokai/LoL#Sap_Magic" title="Sap Magic"><img alt="Sap Magic" src="/wiki/images/Maokai_Sap_Magic.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maokai/LoL#Sap_Magic" title="Maokai/LoL">Sap Magic</a></span></span>), which is likely due to a mistaken script-level tag.</li>\n<li>Although <i>Ranger\'s Focus</i> has no actual cooldown, 4 stacks of focus are needed before <i>Ranger\'s Focus</i> can be reactivated. The time before being able to reactivate <i>Ranger\'s Focus</i> is <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="attack speed" data-displayformula="4/average attack speed. \'\'This is using her base attack speed as the minimum, and considering the time over the course of 4 consecutive attacks.\'\'" data-bot_values="6.08;5.33;4;3.2;2.67;2.29;2;1.78;1.6" data-top_values="0.658;0.75;1;1.25;1.5;1.75;2;2.25;2.5">6.<small>08</small> − 1.<small>6</small> (based on attack speed)</span> seconds.</li>\n<li>Each arrow from a flurry applies <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot_2" title="Frost"><img alt="Frost" src="/wiki/images/Ashe_Frost_Shot_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot_2" title="Ashe/LoL">Frost</a></span></span> and the bonus damage from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Frost Shot"><img alt="Frost Shot" src="/wiki/images/Ashe_Frost_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Ashe/LoL">Frost Shot</a></span></span> is calculated individually per arrow.\n<ul><li>Similarly, since a flurry is 5 instances of physical damage, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Cleaver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Cleaver" title="Black Cleaver"><img alt="Black Cleaver" src="/wiki/images/Black_Cleaver_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Cleaver" title="Black Cleaver">Black Cleaver</a></span></span> allows her to cleave the enemy target 5 times per flurry.</li>\n<li>Sources of flat damage reduction such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL" title="Amumu\'s"><img alt="Amumu\'s" src="/wiki/images/Amumu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL" title="Amumu/LoL">Amumu\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Tantrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Tantrum" title="Tantrum"><img alt="Tantrum" src="/wiki/images/Amumu_Tantrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Tantrum" title="Amumu/LoL">Tantrum</a></span></span></span>, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL" title="Leona\'s"><img alt="Leona\'s" src="/wiki/images/Leona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL" title="Leona/LoL">Leona\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-ability="Eclipse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL#Eclipse" title="Eclipse"><img alt="Eclipse" src="/wiki/images/Leona_Eclipse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL#Eclipse" title="Leona/LoL">Eclipse</a></span></span></span>, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL" title="Fizz\'s"><img alt="Fizz\'s" src="/wiki/images/Fizz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL" title="Fizz/LoL">Fizz\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Nimble Fighter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Nimble_Fighter" title="Nimble Fighter"><img alt="Nimble Fighter" src="/wiki/images/Fizz_Nimble_Fighter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Nimble_Fighter" title="Fizz/LoL">Nimble Fighter</a></span></span></span>, or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span> will apply the reduction to each arrow\'s damage, resulting in extremely reduced damaged compared to a normal attack.</li></ul></li>\n<li>Each additional arrow from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> will also split into 5 arrows.\n<ul><li>The arrows are evenly distributed among secondary enemies but one enemy cannot be hit by more than 5 arrows.</li>\n<li>The flurry will trigger on-hit effects once to each enemy hit, but no more than 3 targets per attack.</li></ul></li>\n<li>The flurry applies against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>. Stacks of <i>Focus</i> will not be granted when attacking structures.</li></ul>',
    video: 'Ashe - Q',
  },
  Volley: {
    name: 'Volley',
    display_name: 'Volley',
    champion: 'Ashe',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'Volley.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Not including the offset, see notes">1200</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Each missile">20</span>',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Full cone at ranks 1, 2/3 and 4/5, respectively">27.<small>75</small>°/ 37° / 46.<small>25</small>°</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Angle between individual missiles">4.<small>625</small>°</span>',
    speed: '2000',
    cast_time: '0.<small>25</small>',
    cost: '75 / 70 / 65 / 60 / 55',
    costtype: 'Mana',
    cooldown: '18 / 14.<small>5</small> / 11 / 7.<small>5</small> / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL" title="Ashe"><img alt="Ashe" src="/wiki/images/Ashe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL" title="Ashe/LoL">Ashe</a></span></span> fires arrows in a cone dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Critical Slow"><img alt="Critical Slow" src="/wiki/images/Ashe_Frost_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Ashe/LoL">Critical Slow</a></span></span> to the first enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Volley.png',
        description:
          'Active: Ashe shoots a volley of arrows in a cone in the target direction, each dealing physical damage to the first enemy hit, and applying  Critical Slow to enemy  champions hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ashe</b> shoots a volley of arrows in a cone in the target direction, each dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, and applying <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot_2" title="Critical Slow"><img alt="Critical Slow" src="/wiki/images/Ashe_Frost_Shot_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot_2" title="Ashe/LoL">Critical Slow</a></span></span></i> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Arrows:',
            values: '7 / 8 / 9 / 10 / 11',
            valuesHTML: '7 / 8 / 9 / 10 / 11',
          },
          {
            name: 'Physical Damage:',
            values: '20 / 35 / 50 / 65 / 80 (+ 100% AD)',
            valuesHTML:
              '20 / 35 / 50 / 65 / 80 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Arrows:',
            raw: '7 / 8 / 9 / 10 / 11',
            values: [7, 8, 9, 10, 11],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 8 / 9 / 10 / 11',
          },
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 100% AD)',
            damagetype: 'Physical',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'Enemies can intercept multiple arrows but do not take damage from any beyond the first.',
        descriptionHTML:
          'Enemies can intercept multiple arrows but do not take damage from any beyond the first.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The missiles are spawned in a straight horizontal line 75 units in front of <b>Ashe</b>, with a total width of 75/100/100/123/123 units.\n<ul><li><ul><li>Between each missile spawn location is a distance of 12.<small>5</small> units, except for the two outermost ones at the last two ranks (which are 11.<small>5</small> units from the closest other one), and the two centermost missiles at ranks 2 and 4 (which have 20 units between them and 15 units to the next missile, respectively).</li>\n<li>This inconsistent behaviour of spawn locations means the angle between each missile can vary off of 4.<small>625</small>° slighty.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Ashe - W',
  },
  Hawkshot: {
    name: 'Hawkshot',
    display_name: 'Hawkshot',
    champion: 'Ashe',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'AsheSpiritOfTheHawk.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: 'Global',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Vision bubble radiuses">1000</span>',
    speed: '1400',
    cast_time: '0.<small>25</small>',
    cost: '1',
    costtype: 'Charge',
    cooldown: '5',
    recharge: '90 / 80 / 70 / 60 / 50',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL" title="Ashe"><img alt="Ashe" src="/wiki/images/Ashe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL" title="Ashe/LoL">Ashe</a></span></span> sends out her Hawk Spirit. The spirit <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Expose"><a href="/wiki/Sight" title="Sight"><img alt="Exposed icon.png" src="/wiki/images/Exposed_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">exposes</a></span> the area along its path and a large area at its destination.',
      '<b>Ashe</b> periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a> a charge of <i>Hawkshot</i>, up to a cap.',
    ],
    description: [
      {
        icon: '/wiki/images/Hawkshot.png',
        description:
          'Active: Ashe sends a hawk spirit toward the target location, granting  sight of the area along its path「 repeatedly for 0.5 seconds after every 100 units traveled 」「 for effectively up-to 1.8 seconds at any location 」and at its destination for 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ashe</b> sends a hawk spirit toward the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area along its path<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;repeatedly for 0.<small>5</small> seconds after every 100 units traveled&nbsp;」</span><span class="flipText2">「&nbsp;for effectively up-to 1.<small>8</small> seconds at any location&nbsp;」</span></span>and at its destination for 5 seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Ashe periodically stocks a Hawkshot charge, up to a maximum of 2.',
        descriptionHTML:
          '<b>Ashe</b> periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a> a <i>Hawkshot</i> charge, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Ashe periodically stocks a Hawkshot charge, up to a maximum of 2.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Hawkshot charge, up to a maximum of 2.',
            pre: 'Ashe periodically stocks a Hawkshot charge, up to a maximum of 2.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spellshield: false,
    projectile: 'special',
    notes:
      '* <i>Hawkshot\'s</i> recharge timer seems to start at the beginning of the game, even prior to ranking the ability, but upon actually ranking the ability, it starts with one charge and the recharge timer starts from 0.\n<ul><li><i>Hawkshot</i> will ping enemy champions it spots if allies didn\'t already have vision of them, and put a \'revealed\' visual effect on them for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2.<small>75</small> seconds</span>, but does not actually reveal the units in particular, and is removed if the champion leaves the area.</li>\n<li><i>Hawkshot</i> will grant assist credit if a previously-unseen enemy champion is killed within 10 seconds of being revealed by the ability.</li>\n<li><i>Hawkshot</i> will trigger upon colliding with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> or but not <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.</li>\n<li><i>Hawkshot</i> will grant 0.33 points of <a href="/wiki/Vision_score" title="Vision score">vision score</a> for each champion revealed.</li></ul>',
    video: 'Ashe - E',
  },
  'Enchanted Crystal Arrow': {
    name: 'Enchanted Crystal Arrow',
    display_name: 'Enchanted Crystal Arrow',
    champion: 'Ashe',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'EnchantedCrystalArrow.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    range: 'Global',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Radius of explosion">400</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight radius of missile">350</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">260</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="accelerates with 200 speed per second">1500 - 2100</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '80 / 75 / 70 / 65 / 60',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL" title="Ashe"><img alt="Ashe" src="/wiki/images/Ashe_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL" title="Ashe/LoL">Ashe</a></span></span> launches a crystal arrow of ice that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> the first enemy champion hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. The arrow accelerates initially and its stun duration increases the farther the arrow has traveled.',
      'Surrounding enemies take <span style="color: #00B0F0; white-space:normal">magic damage</span> and are <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot" title="slowed"><img alt="slowed" src="/wiki/images/Ashe_Frost_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Ashe/LoL">slowed</a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Enchanted Crystal Arrow.png',
        description:
          'Active: Ashe fires a massive arrow of ice in the target direction, granting  sight of the area it flies through each for 1 second. The arrow shatters upon hitting an enemy  champion, dealing them magic damage,  stunning them for 1 − 3.5 (based on distance traveled) seconds, and granting  sight of the area around them for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ashe</b> fires a massive arrow of ice in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cannot grant sight through terrain and can only grant sight into brush when the missile flies through that brush">area</span> it flies through each for 1 second. The arrow shatters upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-displayformula="1+(0.18 per 200 units). \'\'This is capped at 2800 units traveled.\'\'" data-bot_values="1;1.18;1.36;1.54;1.71;1.89;2.07;2.25;2.43;2.61;2.79;2.96;3.14;3.32;3.5" data-top_values="0;200;400;600;800;1000;1200;1400;1600;1800;2000;2200;2400;2600;2800">1 − 3.<small>5</small> (based on distance traveled)</span> seconds, and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Ashe fires a massive arrow of ice in the target direction, granting  sight of the area it flies through each for 1 second',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'fires a massive arrow of ice in the target direction, granting  sight of the area it flies through each for 1 second',
            pre: 'Ashe fires a massive arrow of ice in the target direction, granting  sight of the area it flies through each for 1 second',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'The arrow shatters upon hitting an enemy  champion, dealing them magic damage,  stunning them for 1 − 3.5 (based on distance traveled) seconds, and granting  sight of the area around them for 1 second.',
            values: [1, 3.5],
            basedOn: 'distance traveled',
            user: 'none',
            units: '',
            unitsText:
              'seconds, and granting  sight of the area around them for 1 second.',
            pre: 'The arrow shatters upon hitting an enemy  champion, dealing them magic damage,  stunning them for 1 − 3.5',
            post: 'seconds, and granting  sight of the area around them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 300 / 400 / 500 / 600 (+ 100% AP)',
            valuesHTML:
              '200 / 300 / 400 / 500 / 600 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 300 / 400 / 500 / 600 (+ 100% AP)',
            damagetype: 'Magic',
            values: [200, 300, 400, 500, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 300 / 400 / 500 / 600',
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
      {
        description:
          'Enemies surrounding the primary target are dealt 50% damage and afflicted with  Frost Shot.',
        descriptionHTML:
          'Enemies surrounding the primary target are dealt 50% damage and afflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Frost Shot"><img alt="Frost Shot" src="/wiki/images/Ashe_Frost_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Ashe/LoL">Frost Shot</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies surrounding the primary target are dealt 50% damage and afflicted with  Frost Shot.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage and afflicted with  Frost Shot.surrounding the primary target are dealt 50',
            pre: 'Enemies surrounding the primary target are dealt 50% damage and afflicted with  Frost Shot.',
          },
        ],
        leveling: [
          {
            name: 'Reduced Damage:',
            values: '100 / 150 / 200 / 250 / 300 (+ 50% AP)',
            valuesHTML:
              '100 / 150 / 200 / 250 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 50% AP)',
            damagetype: 'None',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
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
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Enchanted Crystal Arrow\'s</i> projectile has an <img alt="Enchanted Crystal Arrow Minimap.png" src="/wiki/images/Enchanted_Crystal_Arrow_Minimap.png" decoding="async" loading="lazy" width="40" height="40" class="lazyload"> icon on the mini-map while it is in flight. It can be seen by only <b>Ashe</b> and her allies.\n<ul><li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li>The effect will be centered on the first champion struck, not at the location the missile collided with them.</li></ul>',
    video: 'Ashe - R',
  },
} satisfies { [skillName in string]: SkillData };
