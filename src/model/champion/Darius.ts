import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Darius';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Darius\' </b> damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Hemorrhage</i> to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Darius_Hemorrhage.png',
    description:
      '<span class="template_sbc"><b>Hemorrhage:</b></span> For each stack, the target is dealt<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="13;" data-finish="30;" data-bot_values="13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30" data-top_values="">13 − 30 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;30% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>total</b> physical damage</span> over the duration,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3.25;" data-finish="7.5;" data-bot_values="3.25;3.5;3.75;4;4.25;4.5;4.75;5;5.25;5.5;5.75;6;6.25;6.5;6.75;7;7.25;7.5" data-top_values="">3.<small>25</small> − 7.<small>5</small> (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;7.<small>5</small>% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> every 1.<small>25</small> seconds over the duration,&nbsp;」</span></span>up to a maximum of<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="65;" data-finish="150;" data-bot_values="65;70;75;80;85;90;95;100;105;110;115;120;125;130;135;140;145;150" data-top_values="">65 − 150 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;150% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>total</b> physical damage</span> over the duration.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="16.25;" data-finish="37.5;" data-bot_values="16.25;17.5;18.75;20;21.25;22.5;23.75;25;26.25;27.5;28.75;30;31.25;32.5;33.75;35;36.25;37.5" data-top_values="">16.<small>25</small> − 37.<small>5</small> (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;37.<small>5</small>% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> with each tick.&nbsp;」</span></span><i>Hemorrhage</i> deals 300% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 1:',
        raw: ' For each stack, the target is dealt「 13 − 30 (based on level) (+ 30% bonus AD) total physical damage over the duration, 」「 3',
        min: 0,
        max: 10,
        description:
          ' For each stack, the target is dealt「 13 − 30 (based on level) (+ 30% bonus AD) total physical damage over the duration, 」「 3',
        values: [
          13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
          30,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'total physical damage over the duration, 」「 3',
        pre: 'For each stack, the target is dealt「 13 − 30',
        post: 'total physical damage over the duration, 」「 3',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 30% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '25 − 7',
        values: [25, 7],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 − 7',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '5 (based on level) (+ 7',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 7',
        pre: '5',
        post: '+ 7',
      },
      {
        effectType: 'Damage',
        name: 'Line 5:',
        raw: '25 seconds over the duration, 」up to a maximum of「 65 − 150 (based on level) (+ 150% bonus AD) total physical damage over the duration',
        damagetype: 'Physical',
        values: [
          65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135,
          140, 145, 150,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'total physical damage over the duration',
        pre: '25 seconds over the duration, 」up to a maximum of「 65 − 150',
        post: 'total physical damage over the duration',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 150% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 7:',
        raw: '25 − 37',
        values: [25, 37],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 − 37',
      },
      {
        effectType: 'Unique',
        name: 'Line 8:',
        raw: '5 (based on level) (+ 37',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 37',
        pre: '5',
        post: '+ 37',
      },
    ],
  },
  {
    img: '/wiki/images/Hemorrhage_3.png',
    description:
      'When <b>Darius</b> kills a champion with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Noxian Guillotine" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Noxian Guillotine"><img alt="Noxian Guillotine" src="/wiki/images/Darius_Noxian_Guillotine.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Darius/LoL">Noxian Guillotine</a></span></span></i>, or applies 5 stacks on an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he becomes empowered with <i>Noxian Might</i> for 5 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Darius_Hemorrhage_2.png',
    description:
      '<span class="template_sbc"><b>Noxian Might:</b></span> <b>Darius</b> gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:orange;" data-displayformula="30 + 5 per level until level 10, then + 10 per level until level 13, then + 25 per level" data-bot_values="30;35;40;45;50;55;60;65;70;75;85;95;105;130;155;180;205;230" data-top_values="">30 − 230 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and instantly applies 5 <i>Hemorrhage</i> stacks through his usual means.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Darius gains 30 − 230 (based on level)  bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means',
        increasedStat: 'total_ap',
        values: [
          30, 41.76, 53.53, 65.29, 77.06, 88.82, 100.59, 112.35, 124.12, 135.88,
          147.65, 159.41, 171.18, 182.94, 194.71, 206.47, 218.24, 230,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText:
          'bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means',
        pre: 'Darius gains 30 − 230',
        post: 'bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Darius_Decimate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Darius</b> hefts his axe for 0.<small>75</small> seconds, and then swings it around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, reduced to 35% against enemies hit by the <i>handle</i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 80 / 110 / 140 / 170 (+ 100 / 110 / 120 / 130 / 140% AD)',
        values: [50, 80, 110, 140, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 80 / 110 / 140 / 170',
        children: [
          {
            values: [100, 110, 120, 130, 140],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100 / 110 / 120 / 130 / 140% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '17.5 / 28 / 38.5 / 49 / 59.5 (+ 35 / 38.5 / 42 / 45.5 / 49% AD)',
        values: [17.5, 28, 38.5, 49, 59.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '17.5 / 28 / 38.5 / 49 / 59.5',
        children: [
          {
            values: [35, 38.5, 42, 45.5, 49],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 35 / 38.5 / 42 / 45.5 / 49% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Against champions and large monsters hit, <b>Darius</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="enemies hit by the blade" data-displayformula="13%*Enemies hit. \'\'This is capped at 3 enemies.\'\'" data-bot_values="13;26;39" data-top_values="1;2;3+" data-bot_key="%">13% − 39% (based on enemies hit by the <i>blade</i>)</span> of his <b>missing</b> health</span></span>. The <i>handle</i> of <b>Darius\' </b> axe will not heal him nor apply nor refresh <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Hemorrhage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Hemorrhage" title="Hemorrhage"><img alt="Hemorrhage" src="/wiki/images/Darius_Hemorrhage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Hemorrhage" title="Darius/LoL">Hemorrhage</a></span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: 'Against champions and large monsters hit, Darius  heals for  13% − 39% (based on enemies hit by the blade) of his missing health',
        healType: 'BonusHealth',
        values: 1,
        valuesIsPercent: true,
        user: 'player',
        units: 'missing_hp',
        unitsText: 'of his missing health',
        pre: 'Against champions and large monsters hit, Darius  heals for  13% − 39%',
        post: 'of his missing health',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'base_ad',
            unitsText: 'based on enemies hit by the blade',
            pre: 'based on enemies hit by the blade',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><b>Darius</b> is unable to declare basic attacks or cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Apprehend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Apprehend" title="Apprehend"><img alt="Apprehend" src="/wiki/images/Darius_Apprehend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Apprehend" title="Darius/LoL">Apprehend</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Noxian Guillotine" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Noxian Guillotine"><img alt="Noxian Guillotine" src="/wiki/images/Darius_Noxian_Guillotine.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Darius/LoL">Noxian Guillotine</a></span></span> during Decimate.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Darius_Crippling_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Darius</b> empowers his next basic attack within 4 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> the target by 90% for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '140 / 145 / 150 / 155 / 160% AD',
        values: [140, 145, 150, 155, 160],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '140 / 145 / 150 / 155 / 160% AD',
      },
    ],
  },
  {
    description:
      'If this attack kills the target, half of <i>Crippling Strike\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced and its <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span> is refunded.',
    leveling: [],
  },
  {
    description:
      '<i>Crippling Strike\'s</i> <b>total</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [],
  },
  {
    description:
      '<i>Crippling Strike <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Darius\' </b> basic attack timer.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Darius</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor penetration</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Armor Penetration:',
        raw: '15 / 20 / 25 / 30 / 35%',
        values: [15, 20, 25, 30, 35],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35%',
      },
    ],
  },
  {
    img: '/wiki/images/Darius_Apprehend.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Darius</b> sweeps his axe in a cone in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1 second while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> enemies hit towards him. Upon arrival, they rebound <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">150</span> units off of him, remaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 40% for 1 second.',
    leveling: [],
  },
  {
    description:
      '<i><b>Darius</b> is unable to move or cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Decimate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Decimate" title="Decimate"><img alt="Decimate" src="/wiki/images/Darius_Decimate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Decimate" title="Darius/LoL">Decimate</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Noxian Guillotine" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Noxian Guillotine"><img alt="Noxian Guillotine" src="/wiki/images/Darius_Noxian_Guillotine.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Darius/LoL">Noxian Guillotine</a></span></span> for 0.<small>4</small> seconds after Apprehend\'s cast time.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Darius_Noxian_Guillotine.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Darius</b> attempts to execute the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">leaping</a></span> towards them to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Hemorrhage.png|20px]] Hemorrhage stacks" data-start="0;0" data-finish="100;5" data-bot_values="0;20;40;60;80;100" data-top_values="0;1;2;3;4;5" data-bot_key="%">0% − 100% (based on <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/de/Darius_Hemorrhage.png/revision/latest?cb=20191111171216" class="image"><img alt="Hemorrhage.png" src="/wiki/images/Darius_Hemorrhage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Hemorrhage stacks)</span>, and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around them for 2.<small>5</small> seconds from the start of the cast time.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'True Damage:',
        raw: '125 / 250 / 375 (+ 75% bonus AD)',
        values: [125, 250, 375],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 250 / 375',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 75% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Damage Per Stack:',
        raw: '25 / 50 / 75 (+ 15% bonus AD)',
        values: [25, 50, 75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 50 / 75',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 15% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum True Damage:',
        raw: '250 / 500 / 750 (+ 150% bonus AD)',
        values: [250, 500, 750],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '250 / 500 / 750',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 150% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the target dies within 0.<small>15</small> seconds after being hit by <i>Noxian Guillotine</i>, <b>Darius</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> for 3 seconds, during which they are gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by up to 99% over the duration. He can also recast the ability within 20 seconds at no cost, which refreshes on further executions.',
    leveling: [],
  },
  {
    description:
      'At rank 3, <i>Noxian Guillotine</i> has no <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> and recast timer.',
    leveling: [],
  },
  {
    description:
      '<i><b>Darius</b> is unable to cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Decimate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Decimate" title="Decimate"><img alt="Decimate" src="/wiki/images/Darius_Decimate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Decimate" title="Darius/LoL">Decimate</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Apprehend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Apprehend" title="Apprehend"><img alt="Apprehend" src="/wiki/images/Darius_Apprehend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Apprehend" title="Darius/LoL">Apprehend</a></span></span> for 0.<small>25</small> seconds after Noxian Guillotine\'s cast time.</i>',
    leveling: [],
  },
];
export const Darius = { I, Q, W, E, R };
