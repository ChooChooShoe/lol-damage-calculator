import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Ashe';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Ashe_Frost_Shot.png',
    description:
      '<span class="template_sbc"><b>Innate - Frost Shot:</b></span> <b>Ashe\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits apply <i>Frost</i> to enemies for 2 seconds, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="30;" data-bot_values="20;20.59;21.18;21.76;22.35;22.94;23.53;24.12;24.71;25.29;25.88;26.47;27.06;27.65;28.24;28.82;29.41;30" data-top_values="" data-bot_key="%">20% − 30% (based on level)</span> for the duration. Basic attacks against enemies with <i>Frost</i> are modified to deal 110% <span style="color: #E56013; white-space:normal">(+&nbsp;(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) of critical strike chance)</span> damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: " Ashe's basic attacks and ability hits apply Frost to enemies for 2 seconds, which  slows them by 20% − 30% (based on level) for the duration",
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'for the duration',
        pre: "Ashe's basic attacks and ability hits apply Frost to enemies for 2 seconds, which  slows them by 20% − 30%",
        post: 'for the duration',
      },
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' Basic attacks against enemies with Frost are modified to deal 110% (+ (75% +  35%) of critical strike chance) damage',
        values: 1,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'damage',
        pre: 'Basic attacks against enemies with Frost are modified to deal 110%',
        post: 'damage',
        children: [
          {
            values: 0,
            user: 'player',
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
  },
  {
    img: '/wiki/images/Ashe_Frost_Shot_2.png',
    description:
      '<span class="template_sbc"><b>Innate - Critical Slow:</b></span> <b>Ashe\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> do not deal any additional damage, instead they double <i>Frost\'s</i> slow strength to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="60;" data-bot_values="40;41.18;42.35;43.53;44.71;45.88;47.06;48.24;49.41;50.59;51.76;52.94;54.12;55.29;56.47;57.65;58.82;60" data-top_values="" data-bot_key="%">40% − 60% (based on level)</span>, decaying over 1 second to its normal strength.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Ashe's  critical strikes do not deal any additional damage, instead they double Frost's slow strength to 40% − 60% (based on level), decaying over 1 second to its normal strength",
        damagetype: 'None',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: ', decaying over 1 second to its normal strength',
        pre: "Ashe's  critical strikes do not deal any additional damage, instead they double Frost's slow strength to 40% − 60%",
        post: ', decaying over 1 second to its normal strength',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Ashe_Focus.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> While <i>Ranger\'s Focus</i> is inactive, <b>Ashe\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Focus</i> for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times. Stacks expire by one every 1 second.',
    leveling: [],
  },
  {
    img: '/wiki/images/Ashe_Ranger%27s_Focus.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> For 4 seconds, <b>Ashe</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and empowers her basic attacks to fire a flurry of five arrows.',
    leveling: [
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
    img: '/wiki/images/Ashe_Ranger%27s_Focus_2.png',
    description:
      'Each arrow deals <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> that benefits from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Frost Shot"><img alt="Frost Shot" src="/wiki/images/Ashe_Frost_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Ashe/LoL">Frost Shot</a></span></span></i> and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>. Flurries apply <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effects only once.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Arrow:',
        raw: '21 / 22 / 23 / 24 / 25% AD',
        values: [21, 22, 23, 24, 25],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '21 / 22 / 23 / 24 / 25% AD',
      },
      {
        effectType: 'Unique',
        name: 'Total Damage Per Flurry:',
        raw: '105 / 110 / 115 / 120 / 125% AD',
        values: [105, 110, 115, 120, 125],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '105 / 110 / 115 / 120 / 125% AD',
      },
    ],
  },
  {
    description:
      '<i>Ranger\'s Focus <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Ashe\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Ashe_Volley.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ashe</b> shoots a volley of arrows in a cone in the target direction, each dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, and applying <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot_2" title="Critical Slow"><img alt="Critical Slow" src="/wiki/images/Ashe_Frost_Shot_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot_2" title="Ashe/LoL">Critical Slow</a></span></span></i> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit.',
    leveling: [
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
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 35 / 50 / 65 / 80 (+ 100% AD)',
        values: [20, 35, 50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
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
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Ashe_Hawkshot.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ashe</b> sends a hawk spirit toward the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area along its path<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;repeatedly for 0.<small>5</small> seconds after every 100 units traveled&nbsp;」</span><span class="flipText2">「&nbsp;for effectively up-to 1.<small>8</small> seconds at any location&nbsp;」</span></span>and at its destination for 5 seconds.',
    leveling: [],
  },
  {
    description:
      '<b>Ashe</b> periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a> a <i>Hawkshot</i> charge, up to a maximum of 2.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Ashe_Enchanted_Crystal_Arrow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ashe</b> fires a massive arrow of ice in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cannot grant sight through terrain and can only grant sight into brush when the missile flies through that brush">area</span> it flies through each for 1 second. The arrow shatters upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-displayformula="1+(0.18 per 200 units). \'\'This is capped at 2800 units traveled.\'\'" data-bot_values="1;1.18;1.36;1.54;1.71;1.89;2.07;2.25;2.43;2.61;2.79;2.96;3.14;3.32;3.5" data-top_values="0;200;400;600;800;1000;1200;1400;1600;1800;2000;2200;2400;2600;2800">1 − 3.<small>5</small> (based on distance traveled)</span> seconds, and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around them for 1 second.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' The arrow shatters upon hitting an enemy  champion, dealing them magic damage,  stunning them for 1 − 3',
        damagetype: 'Magic',
        values: [1, 3],
        user: 'none',
        units: '',
        unitsText:
          'arrow shatters upon hitting an enemy  champion, dealing them magic damage,  stunning them for 1',
        pre: 'The arrow shatters upon hitting an enemy  champion, dealing them magic damage,  stunning them for 1 − 3',
      },
      {
        effectType: 'Gain',
        name: 'Line 3:',
        raw: '5 (based on distance traveled) seconds, and granting  sight of the area around them for 1 second',
        values: 5,
        user: 'none',
        units: '',
        unitsText:
          'seconds, and granting  sight of the area around them for 1 second',
        pre: '5',
        post: 'seconds, and granting  sight of the area around them for 1 second',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance traveled',
            pre: 'based on distance traveled',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 400 / 600 (+ 100% AP)',
        values: [200, 400, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 400 / 600',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
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
      'Enemies surrounding the primary target are dealt 50% damage and afflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Frost Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Frost Shot"><img alt="Frost Shot" src="/wiki/images/Ashe_Frost_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Frost_Shot" title="Ashe/LoL">Frost Shot</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '100 / 200 / 300 (+ 50% AP)',
        values: [100, 200, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 200 / 300',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
    ],
  },
];
export const Ashe = { I, Q, W, E, R };
