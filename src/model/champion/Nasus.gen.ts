import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Nasus';

export default {
  'Soul Eater': {
    name: 'Soul Eater',
    display_name: 'Soul Eater',
    champion: 'Nasus',
    skill: 'I',
    image: {
      full: 'Nasus_Passive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nasus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nasus/LoL" title="Nasus"><img alt="Nasus" src="/wiki/images/Nasus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nasus/LoL" title="Nasus/LoL">Nasus</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span> based on level.',
    ],
    description: [
      {
        icon: '/wiki/images/Soul Eater.png',
        description:
          'Innate: Nasus gains  9 / 14 / 19% (based on level) life steal.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Nasus</b> gains <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;1" data-finish="19;13" data-bot_values="9;14;19" data-top_values="1;7;13" data-bot_key="%">9 / 14 / 19% (based on level)</span> <a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' Nasus gains  9 / 14 / 19% (based on level) life steal.',
            increasedStat: 'lifesteal',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'life steal.',
            pre: 'Nasus gains  9 / 14 / 19%',
            post: 'life steal.',
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
  'Siphoning Strike': {
    name: 'Siphoning Strike',
    display_name: 'Siphoning Strike',
    champion: 'Nasus',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'NasusQ.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '20',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">7.<small>5</small> / 6.<small>5</small> / 5.<small>5</small> / 4.<small>5</small> / 3.<small>5</small></span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nasus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nasus/LoL" title="Nasus\'"><img alt="Nasus\'" src="/wiki/images/Nasus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nasus/LoL" title="Nasus/LoL">Nasus\'</a></span></span> next basic attack within a period will gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on the amount of <span style="color: #5C58C9; white-space:normal">Siphoning Strike</span> stacks.',
      'If this attack kills the target, <b>Nasus</b> generates permanent stacks of <span style="color: #5C58C9; white-space:normal">Siphoning Strike</span>, increased against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Siphoning Strike.png',
        description:
          'Active: Nasus empowers his next basic attack within 10 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nasus</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 10 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Nasus empowers his next basic attack within 10 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage.',
            increasedStat: 'bonus_ad',
            values: 1,
            units: '',
            unitsText:
              'empowers his next basic attack within 10 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage.',
            pre: 'Nasus empowers his next basic attack within 10 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '30 / 50 / 70 / 90 / 110 (+ Siphoning Strike stacks)',
            valuesHTML:
              '30 / 50 / 70 / 90 / 110 <span style="color: #5C58C9; white-space:normal">(+&nbsp;<i>Siphoning Strike</i> stacks)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Stacks',
            name: 'Bonus Physical Damage:',
            raw: '30 / 50 / 70 / 90 / 110 (+ Siphoning Strike stacks)',
            min: 0,
            max: 10,
            description: '30 / 50 / 70 / 90 / 110 (+ Siphoning Strike stacks)',
            values: [30, 50, 70, 90, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70 / 90 / 110',
            children: [
              {
                values: 0,
                units: 'siphoningStrikeStacks',
                unitsText: 'Siphoning Strike stacks',
                pre: '+ Siphoning Strike stacks',
              },
            ],
          },
        ],
      },
      {
        description:
          'If Siphoning Strike kills the target, Nasus permanently gains 3 stacks, increased to 12 if the target is a  champion, large  minion, or large  monster.',
        descriptionHTML:
          'If <i>Siphoning Strike</i> kills the target, <b>Nasus</b> permanently gains <span style="color: #5C58C9; white-space:normal">3 stacks</span>, increased to <span style="color: #5C58C9; white-space:normal">12</span> if the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span>, or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'If Siphoning Strike kills the target, Nasus permanently gains 3 stacks, increased to 12 if the target is a  champion, large  minion, or large  monster.',
            increasedStat: 'siphoningStrikeStacks',
            values: 3,
            units: '',
            unitsText:
              'Siphoning Strike kills the target, Nasus permanently gains 3 stacks, increased to 12 if the target is a  champion, large  minion, or large  monster.',
            pre: 'If Siphoning Strike kills the target, Nasus permanently gains 3 stacks, increased to 12 if the target is a  champion, large  minion, or large  monster.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "Siphoning Strike  resets Nasus' basic attack timer.",
        descriptionHTML:
          '<i>Siphoning Strike <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Nasus\'</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: false,
    notes:
      '* <b>Nasus</b> can gain <i>Siphoning Strike</i> <span style="color: #5C58C9; white-space:normal">stacks</span> by killing any enemy unit, this includes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pets"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span>.\n<ul><li><ul><li><a href="/wiki/Jungle_plants" title="Jungle plants">Jungle plants</a> and <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> that are not turrets (e.g. <a href="/wiki/Inhibitors" class="mw-redirect" title="Inhibitors">inhibitors</a>) will not grant <span style="color: #5C58C9; white-space:normal">stacks</span>.</li></ul></li>\n<li><i>Siphoning Strike</i> will not generate <span style="color: #5C58C9; white-space:normal">stacks</span> from secondary units killed by other effects (e.g. <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tiamat" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tiamat" title="Tiamat"><img alt="Tiamat" src="/wiki/images/Tiamat_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tiamat" title="Tiamat">Tiamat</a></span></span>).</li>\n<li><span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">Life steal</a></span> applies to the entire damage of <i>Siphoning Strike</i></li>\n<li><i>Siphoning Strike</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, but only the <span style="color:orange; white-space:normal">100% AD</span> and flat bonus damage from ranks are increased. The bonus damage from <span style="color: #5C58C9; white-space:normal">stacks</span> does <b>not</b> factor into its critical damage.</li>\n<li><i>Siphoning Strike</i> will trigger <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tear of the Goddess" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess\'"><img alt="Tear of the Goddess\'" src="/wiki/images/Tear_of_the_Goddess_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess">Tear of the Goddess\'</a></span></span> <span class="template_sbc"><b>Mana Charge</b></span>.</li></ul>',
  },
  Wither: {
    name: 'Wither',
    display_name: 'Wither',
    champion: 'Nasus',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'NasusW.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '700',
    cast_time: '0.<small>25</small>',
    cost: '80',
    costtype: 'Mana',
    cooldown: '15 / 14 / 13 / 12 / 11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nasus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nasus/LoL" title="Nasus"><img alt="Nasus" src="/wiki/images/Nasus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nasus/LoL" title="Nasus/LoL">Nasus</a></span></span> ages the target enemy champion for a few seconds, gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">crippling</a></span> them over the duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Wither.png',
        description:
          'Active: Nasus ages the target enemy champion for 5 seconds,  slowing them by 35% and  crippling them by「 75% of that amount, 」「 26.25%, 」both increasing every second over the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nasus</b> ages the target enemy champion for 5 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 35% and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">crippling</a></span> them by<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;75% of that amount,&nbsp;」</span><span class="flipText2">「&nbsp;26.<small>25</small>%,&nbsp;」</span></span>both increasing every second over the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Nasus ages the target enemy champion for 5 seconds,  slowing them by 35% and  crippling them by「 75% of that amount, 」「 26.25%, 」both increasing every second over the duration.',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'and  crippling them by「 75ages the target enemy champion for 5 seconds,  slowing them by 35',
            pre: 'Nasus ages the target enemy champion for 5 seconds,  slowing them by 35% and  crippling them by「 75% of that amount, 」「 26.25%, 」both increasing every second over the duration.',
          },
        ],
        leveling: [
          {
            name: 'Maximum Slow:',
            values: '47 / 59 / 71 / 83 / 95%',
            valuesHTML: '47 / 59 / 71 / 83 / 95%',
          },
          {
            name: 'Maximum Cripple:',
            values: '35.25 / 44.25 / 53.25 / 62.25 / 71.25%',
            valuesHTML:
              '35.<small>25</small> / 44.<small>25</small> / 53.<small>25</small> / 62.<small>25</small> / 71.<small>25</small>%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Maximum Slow:',
            raw: '47 / 59 / 71 / 83 / 95%',
            values: [47, 59, 71, 83, 95],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '47 / 59 / 71 / 83 / 95%',
          },
          {
            effectType: 'Unique',
            name: 'Maximum Cripple:',
            raw: '35.25 / 44.25 / 53.25 / 62.25 / 71.25%',
            values: [35.25, 44.25, 53.25, 62.25, 71.25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35.25 / 44.25 / 53.25 / 62.25 / 71.25%',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* If <i>Wither\'s</i> duration is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">Tenacity</a></span> the effects will apply slower (negative tenacity percentage) or faster (positive tenacity percentage) so the maximum values are still reached when the modified duration ends.\n<ul><li><i>Wither\'s</i> cripple effectiveness calculates from its slow\'s base values, thus <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span> will not interact with the attack speed modifier indirectly.</li>\n<li>Both <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">cripple</a></span> from <i>Wither</i> are considered to be a single <a href="/wiki/Debuff" title="Debuff">debuff</a>. <sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li>Therefore, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow immunity"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span> will prevent both, even without technical <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple immunity"><a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist#Cripple Immunity"><img alt="Cripple immune.png" src="/wiki/images/Cripple_immune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist">cripple immunity</a></span>.</li></ul></li>\n<li><i>Wither</i> is cancelled if <b>Nasus</b> loses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the target during the cast time.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Nasus_Original_W_0.ogg   "Become dust."',
  },
  'Spirit Fire': {
    name: 'Spirit Fire',
    display_name: 'Spirit Fire',
    champion: 'Nasus',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'NasusE.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '650',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 400 / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200',
    cast_time: '0.<small>25</small>',
    cost: '70 / 85 / 100 / 115 / 130',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nasus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nasus/LoL" title="Nasus"><img alt="Nasus" src="/wiki/images/Nasus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nasus/LoL" title="Nasus/LoL">Nasus</a></span></span> unleashes a spirit fire at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
      'The fire remains for a few seconds, <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">reducing enemy armor</span></span> and continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Spirit Fire.png',
        description:
          'Active: Nasus unleashes a spirit fire at the target location, granting  sight of the area for 2.5 seconds and, after a 0.264 seconds delay, dealing magic damage to enemies within.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nasus</b> unleashes a spirit fire at the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="centered at the location">area</span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2.<small>5</small> seconds</span> and, after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Nasus unleashes a spirit fire at the target location, granting  sight of the area for 2.5 seconds and, after a 0.264 seconds delay, dealing magic damage to enemies within.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'unleashes a spirit fire at the target location, granting  sight of the area for 2.5 seconds and, after a 0.264 seconds delay, dealing magic damage to enemies within.',
            pre: 'Nasus unleashes a spirit fire at the target location, granting  sight of the area for 2.5 seconds and, after a 0.264 seconds delay, dealing magic damage to enemies within.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '55 / 95 / 135 / 175 / 215 (+ 60% AP)',
            valuesHTML:
              '55 / 95 / 135 / 175 / 215 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 95 / 135 / 175 / 215 (+ 60% AP)',
            damagetype: 'Magic',
            values: [55, 95, 135, 175, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 95 / 135 / 175 / 215',
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
        ],
      },
      {
        description:
          'The fire then remains for 5 seconds, dealing magic damage each second to enemies within and inflicting them with  armor reduction, lingering for 1 second.',
        descriptionHTML:
          'The fire then remains for 5 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> each second to enemies within and inflicting them with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span>, lingering for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The fire then remains for 5 seconds, dealing magic damage each second to enemies within and inflicting them with  armor reduction, lingering for 1 second.',
            damagetype: 'Magic',
            values: 5,
            units: 'total_armor',
            unitsText:
              'fire then remains for 5 seconds, dealing magic damage each second to enemies within and inflicting them with  armor reduction, lingering for 1 second.',
            pre: 'The fire then remains for 5 seconds, dealing magic damage each second to enemies within and inflicting them with  armor reduction, lingering for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '11 / 19 / 27 / 35 / 43 (+ 12% AP)',
            valuesHTML:
              '11 / 19 / 27 / 35 / 43 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;12% AP)</span>',
          },
          {
            name: 'Armor Reduction:',
            values: "25 / 30 / 35 / 40 / 45% of target's armor",
            valuesHTML:
              '<span style="color:yellow; white-space:normal">25 / 30 / 35 / 40 / 45% of target\'s armor</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '11 / 19 / 27 / 35 / 43 (+ 12% AP)',
            damagetype: 'Magic',
            values: [11, 19, 27, 35, 43],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '11 / 19 / 27 / 35 / 43',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Armor Reduction:',
            raw: "25 / 30 / 35 / 40 / 45% of target's armor",
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText: "of target's armor",
            pre: "25 / 30 / 35 / 40 / 45% of target's armor",
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'AoEDoT',
    spellshield: false,
    notes:
      '* The sight is granted when the cast time completes, the damage happens after an additional delay.',
  },
  'Fury of the Sands': {
    name: 'Fury of the Sands',
    display_name: 'Fury of the Sands',
    champion: 'Nasus',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'NasusR.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Increased by 0.8 per 1% bonus size beyond Nasus\' base radius of 80 units">400</span>',
    cast_time: '0.<small>2</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nasus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nasus/LoL" title="Nasus"><img alt="Nasus" src="/wiki/images/Nasus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nasus/LoL" title="Nasus/LoL">Nasus</a></span></span> empowers himself for some time, gaining bonus size, <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>.',
      'While empowered, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nasus" data-ability="Siphoning Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nasus/LoL#Siphoning_Strike" title="Siphoning Strike"><img alt="Siphoning Strike" src="/wiki/images/Nasus_Siphoning_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nasus/LoL#Siphoning_Strike" title="Nasus/LoL">Siphoning Strike</a></span></span></i> has reduced <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, and <b>Nasus</b> creates an <a href="/wiki/Aura" title="Aura">aura</a> that continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Fury of the Sands.png',
        description:
          'Active: Nasus empowers himself for 15 seconds, gaining  bonus health,  bonus armor,  bonus magic resistance, increased size, and  50 bonus attack range for the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nasus</b> empowers himself for 15 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>, increased <a href="/wiki/Size" title="Size">size</a>, and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> attack range</span> for the duration.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: ' Nasus empowers himself for 15 seconds, gaining  bonus health,  bonus armor,  bonus magic resistance, increased size, and  50 bonus attack range for the duration.',
            healType: 'BonusHealth',
            values: 1,
            units: 'bonus_ad',
            unitsText:
              'empowers himself for 15 seconds, gaining  bonus health,  bonus armor,  bonus magic resistance, increased size, and  50 bonus attack range for the duration.',
            pre: 'Nasus empowers himself for 15 seconds, gaining  bonus health,  bonus armor,  bonus magic resistance, increased size, and  50 bonus attack range for the duration.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Health:',
            values: '300 / 375 / 450 / 525 / 600',
            valuesHTML: '300 / 375 / 450 / 525 / 600',
          },
          {
            name: 'Bonus Resistances:',
            values: '40 / 47.5 / 55 / 62.5 / 70',
            valuesHTML:
              '40 / 47.<small>5</small> / 55 / 62.<small>5</small> / 70',
          },
          {
            name: 'Increased Size:',
            values: '30 / 32.5 / 35 / 37.5 / 40%',
            valuesHTML:
              '30 / 32.<small>5</small> / 35 / 37.<small>5</small> / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Health:',
            raw: '300 / 375 / 450 / 525 / 600',
            healType: 'BonusHealth',
            values: [300, 375, 450, 525, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 375 / 450 / 525 / 600',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '40 / 47.5 / 55 / 62.5 / 70',
            values: [40, 47.5, 55, 62.5, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 47.5 / 55 / 62.5 / 70',
          },
          {
            effectType: 'Unique',
            name: 'Increased Size:',
            raw: '30 / 32.5 / 35 / 37.5 / 40%',
            values: [30, 32.5, 35, 37.5, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 32.5 / 35 / 37.5 / 40%',
          },
        ],
      },
      {
        description:
          "While Nasus is empowered, he deals magic damage every 0.5 seconds to nearby enemies, capped at 240 per second, and  Siphoning Strike's  cooldown is halved.",
        descriptionHTML:
          'While <b>Nasus</b> is empowered, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to nearby enemies, capped at 240 per second, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nasus" data-ability="Siphoning Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nasus/LoL#Siphoning_Strike" title="Siphoning Strike\'s"><img alt="Siphoning Strike\'s" src="/wiki/images/Nasus_Siphoning_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nasus/LoL#Siphoning_Strike" title="Nasus/LoL">Siphoning Strike\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is halved.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values:
              "1.5 / 1.75 / 2 / 2.25 / 2.5% (+ 0.5% per 100 AP) of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small> / 2.<small>5</small>% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;0.<small>5</small>% per 100 AP)</span> of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage Per Tick:',
            raw: "1.5 / 1.75 / 2 / 2.25 / 2.5% (+ 0.5% per 100 AP) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [1.5, 1.75, 2, 2.25, 2.5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '1.5 / 1.75 / 2 / 2.25 / 2.5%',
            post: "of target's maximum health",
            children: [
              {
                values: 0.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.5% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    notes:
      '* <i>Fury of the Sands\' </i>bonus health is not affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> and <b>Nasus</b> retains it once the duration ends.',
  },
} satisfies { [skillName in string]: SkillData };
