import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Yasuo';

export default {
  'Way of the Wanderer': {
    name: 'Way of the Wanderer',
    display_name: 'Way of the Wanderer',
    champion: 'Yasuo',
    skill: 'I',
    image: {
      full: 'Yasuo_Passive.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate - Intent:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo"><img alt="Yasuo" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo</a></span></span> <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span> is doubled, but his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> deal reduced damage.',
      '<span class="template_sbc"><b>Innate - Resolve:</b></span> <b>Yasuo\'s</b> movement generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span> that can be converted into a brief shield at max Flow. The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> triggers upon taking damage from a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Way of the Wanderer.png',
        description:
          "Innate - Intent: Yasuo's  total critical strike chance is multiplied by 2.5 from all other sources, but his  critical strikes deal only「 (57.5% +  31.5%) AD bonus physical damage. 」「 90% of the normal  critical strike damage. 」Additionally,「 every 1% critical strike chance in excess of 100% is converted into 0.4 bonus AD. 」「 every 50% critical strike chance in excess of 100% is converted into 20 bonus AD. 」",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Intent:</b></span> <b>Yasuo\'s</b> <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> critical strike chance</span></span> is multiplied by 2.<small>5</small> from all other sources, but his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> deal only<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(57.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="31.5%"><img alt="31.5%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">31.<small>5</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;90% of the normal <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical strike damage</span></span>.&nbsp;」</span></span>Additionally,<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;every <span style="color: #E56013; white-space:normal">1% critical strike chance</span> in excess of <span style="color: #E56013; white-space:normal">100%</span> is converted into <span style="color:orange; white-space:normal">0.<small>4</small> <b>bonus</b> AD</span>.&nbsp;」</span><span class="flipText2">「&nbsp;every <span style="color: #E56013; white-space:normal">50% critical strike chance</span> in excess of <span style="color: #E56013; white-space:normal">100%</span> is converted into <span style="color:orange; white-space:normal">20 <b>bonus</b> AD</span>.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Intent:',
            raw: " Yasuo's  total critical strike chance is multiplied by 2.5 from all other sources, but his  critical strikes deal only「 (57.5% +  31.5%) AD bonus physical damage. 」「 90% of the normal  critical strike damage. 」Additionally,「 every 1% critical strike chance in excess of 100% is converted into 0.4 bonus AD. 」「 every 50% critical strike chance in excess of 100% is converted into 20 bonus AD. 」",
            damagetype: 'Physical',
            values: 2,
            units: 'bonus_ad',
            unitsText:
              'AD bonus physical damage. 」「 90% of the normal  critical strike damage. 」Additionally,「 every 1% critical strike chance in excess of 100% is converted into 0.4 bonus AD. 」「 every 50% critical strike chance in excess of 100% is converted into 20 bonus AD. 」',
            pre: "Yasuo's  total critical strike chance is multiplied by 2.5 from all other sources, but his  critical strikes deal only「",
            post: 'AD bonus physical damage. 」「 90% of the normal  critical strike damage. 」Additionally,「 every 1% critical strike chance in excess of 100% is converted into 0.4 bonus AD. 」「 every 50% critical strike chance in excess of 100% is converted into 20 bonus AD. 」',
            children: [
              {
                values: 57.5,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  31.5',
                pre: '57.5% +  31.5%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Innate - Resolve: Yasuo generates  Flow for every 59 / 52.5 / 46 (based on level) units he travels by any means. At「 100 stacks 」「 5900 / 5250 / 4600 (based on level) units traveled 」and upon taking damage from an enemy  champion or  monster, Yasuo consumes all  Flow to grant himself a  shield for 100 − 475 (based on level) that lasts up to 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Resolve:</b></span> <b>Yasuo</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span> for every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="59;1" data-finish="46;13" data-bot_values="59;52.5;46" data-top_values="1;7;13">59 / 52.<small>5</small> / 46 (based on level)</span> units he travels by any means. At<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;100 stacks&nbsp;」</span><span class="flipText2">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5900;1" data-finish="4600;13" data-bot_values="5900;5250;4600" data-top_values="1;7;13">5900 / 5250 / 4600 (based on level)</span> units traveled&nbsp;」</span></span>and upon taking damage from an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, <b>Yasuo</b> consumes all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span> to grant himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="100;105;110;115;120;130;140;150;160;170;180;200;220;250;290;350;410;475" data-top_values="">100 − 475 (based on level)</span> that lasts up to 1 second.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate - Resolve:',
            raw: ' Yasuo generates  Flow for every 59 / 52.5 / 46 (based on level) units he travels by any means',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'units he travels by any means',
            pre: 'Yasuo generates  Flow for every 59 / 52.5 / 46',
            post: 'units he travels by any means',
          },
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: 'At「 100 stacks 」「 5900 / 5250 / 4600 (based on level) units traveled 」and upon taking damage from an enemy  champion or  monster, Yasuo consumes all  Flow to grant himself a  shield for 100 − 475 (based on level) that lasts up to 1 second.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'units traveled 」and upon taking damage from an enemy  champion or  monster, Yasuo consumes all  Flow to grant himself a  shield for 100 − 475',
            pre: 'At「 100 stacks 」「 5900 / 5250 / 4600',
            post: 'units traveled 」and upon taking damage from an enemy  champion or  monster, Yasuo consumes all  Flow to grant himself a  shield for 100 − 475',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Shield',
    notes:
      '* <b>Yasuo</b> is able to reach <span style="color: #E56013; white-space:normal">100% critical strike chance</span> with <i>Way of the Wanderer\'s</i> multiplier after obtaining a total of <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #E56013; white-space:normal">40% critical strike chance</span></span>.\n<ul><li><i>Way of the Wanderer</i> will multiply <b>Yasuo\'s</b> <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Critical_strike" title="Critical strike">critical strike chance</a></span> <b>after</b> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade\'s"><img alt="Guinsoo\'s Rageblade\'s" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade\'s</a></span></span> <a href="/wiki/Named_item_effect#Wrath" title="Named item effect">Wrath</a> is calculated.</li>\n<li><b>Yasuo\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> deal damage equal to <span style="color:orange; white-space:normal">151.75% AD</span>, and <span style="color:orange; white-space:normal">189% AD</span> with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge</a></span></span>. This is 13.<small>25</small>% less than the standard 175% and 21% less than the standard 210% with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge</a></span></span>.</li></ul>',
  },
  'Steel Tempest': {
    name: 'Steel Tempest',
    display_name: 'Steel Tempest',
    champion: 'Yasuo',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'YasuoQ1Wrapper.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '450 /  1150',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="When used with Sweeping Blade">215</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Thrust">80</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Whirlwind missile">180</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Whirlwind missile speed">1200</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Thrust cast time"><span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="bonus attack speed" data-displayformula="0.35-0.035 per 24% \'\'\'bonus\'\'\' attack speed)). \'\'This is capped at 50% reduction at 120% \'\'\'bonus\'\'\' attack speed.\'\'" data-bot_values="0.35;0.33;0.297;0.264;0.231;0.198;0.175" data-top_values="0;13.72;36.36;59;81.63;104.27;120" data-top_key="%">0.<small>35</small> − 0.<small>175</small> (based on <b>bonus</b> attack speed)</span></span></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Whirlwind cast time"><span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="bonus attack speed" data-displayformula="0.35-0.035 per 24% \'\'\'bonus\'\'\' attack speed)). \'\'This is capped at 20% reduction at 48% \'\'\'bonus\'\'\' attack speed.\'\'" data-bot_values="0.35;0.33;0.297;0.28" data-top_values="0;13.72;36.36;48" data-top_key="%">0.<small>35</small> − 0.<small>28</small> (based on <b>bonus</b> attack speed)</span></span></span>',
    static:
      '<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="bonus attack speed" data-displayformula="4*(1-(0.01 per 1.67% \'\'\'bonus\'\'\' attack speed)). \'\'This is capped at 67% reduction at 111.1% \'\'\'bonus\'\'\' attack speed.\'\'" data-bot_values="4;3.64;3.28;2.92;2.56;2.2;1.84;1.48;1.33" data-top_values="0;15;30;45;60;75;90;105;111.11" data-top_key="%">4 − 1.<small>33</small> (based on <b>bonus</b> attack speed)</span></span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo"><img alt="Yasuo" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo</a></span></span> thrusts his sword in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects to the first enemy hit. This can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
      'If this hits an enemy, <b>Yasuo</b> generates a stack of <i>Gathering Storm</i> for a few seconds. At 2 stacks, the next <i>Steel Tempest</i> consumes them all to become empowered with a new effect.',
      'If <i>Steel Tempest</i> is cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Sweeping Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Sweeping Blade"><img alt="Sweeping Blade" src="/wiki/images/Yasuo_Sweeping_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Yasuo/LoL">Sweeping Blade</a></span></span></i>, it instead affects enemies around <b>Yasuo</b>.',
      '<span class="template_sbc"><b>Gathering Storm Bonus:</b></span> <b>Yasuo</b> unleashes a whirlwind in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Steel Tempest.png',
        description:
          "Active: Yasuo thrusts his sword in a line in the target direction that deals physical damage to enemies hit and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit. Steel Tempest's damage can  critically strike for「 (47% +  29.4%) AD bonus physical damage. 」「 84% of the  critical damage champions usually have. 」",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yasuo</b> thrusts his sword in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness to the first enemy hit. <i>Steel Tempest\'s</i> damage can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(47%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="29.4%"><img alt="29.4%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">29.<small>4</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;84% of the <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span> champions usually have.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Yasuo thrusts his sword in a line in the target direction that deals physical damage to enemies hit and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness to the first enemy hitthrusts his sword in a line in the target direction that deals physical damage to enemies hit and applies  on-hit and on-attack effects at 100',
            pre: 'Yasuo thrusts his sword in a line in the target direction that deals physical damage to enemies hit and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "Steel Tempest's damage can  critically strike for「 (47% +  29.4%) AD bonus physical damage. 」「 84% of the  critical damage champions usually have. 」",
            damagetype: 'Physical',
            values: 0,
            units: 'bonus_ad',
            unitsText:
              'AD bonus physical damage. 」「 84% of the  critical damage champions usually have. 」',
            pre: "Steel Tempest's damage can  critically strike for「",
            post: 'AD bonus physical damage. 」「 84% of the  critical damage champions usually have. 」',
            children: [
              {
                values: 47,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  29.4',
                pre: '47% +  29.4%',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '20 / 45 / 70 / 95 / 120 (+ 105% AD)',
            valuesHTML:
              '20 / 45 / 70 / 95 / 120 <span style="color:orange; white-space:normal">(+&nbsp;105% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 105% AD)',
            damagetype: 'Physical',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 105,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 105% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Steel Tempest 2.png',
        description:
          'If this hits at least one enemy, Yasuo generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next Steel Tempest consumes them all to become empowered with a new effect.',
        descriptionHTML:
          'If this hits at least one enemy, <b>Yasuo</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Gathering Storm</i> for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next <i>Steel Tempest</i> consumes them all to become empowered with a new effect.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'If this hits at least one enemy, Yasuo generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits',
            min: 0,
            max: 10,
            description:
              'If this hits at least one enemy, Yasuo generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits',
            values: 6,
            units: 'feastStacks',
            unitsText:
              'this hits at least one enemy, Yasuo generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits',
            pre: 'If this hits at least one enemy, Yasuo generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'At 2 stacks, the next Steel Tempest consumes them all to become empowered with a new effect.',
            min: 0,
            max: 10,
            description:
              'At 2 stacks, the next Steel Tempest consumes them all to become empowered with a new effect.',
            values: 2,
            units: 'feastStacks',
            unitsText:
              '2 stacks, the next Steel Tempest consumes them all to become empowered with a new effect.',
            pre: 'At 2 stacks, the next Steel Tempest consumes them all to become empowered with a new effect.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Steel Tempest 3.png',
        description:
          'Gathering Storm Bonus: Yasuo unleashes a whirlwind in the target direction that deals the same damage to enemies hit and  knocks them up for 0.75 seconds, or 0.9 seconds in combination with  Sweeping Blade.',
        descriptionHTML:
          '<span class="template_sbc"><b>Gathering Storm Bonus:</b></span> <b>Yasuo</b> unleashes a whirlwind in the target direction that deals the same damage to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 0.<small>75</small> seconds, or 0.<small>9</small> seconds in combination with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Sweeping Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Sweeping Blade"><img alt="Sweeping Blade" src="/wiki/images/Yasuo_Sweeping_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Yasuo/LoL">Sweeping Blade</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Steel Tempest's thrust is  interrupted if Yasuo is affected by  disarming crowd control during the cast time, but its  cooldown is reset to 0.1 seconds.",
        descriptionHTML:
          '<i>Steel Tempest\'s</i> thrust is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> if <b>Yasuo</b> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarming crowd control"><a href="/wiki/Crowd_control#Disarming" title="Crowd control#Disarming"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disarming" title="Crowd control">disarming crowd control</a></span> during the cast time, but its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reset to 0.<small>1</small> seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If Steel Tempest is cast during  Sweeping Blade, it will instead affect enemies around Yasuo at the end of the dash, or doing so immediately at his landing location after  blinking while ending the dash prematurely.',
        descriptionHTML:
          'If <i>Steel Tempest</i> is cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Sweeping Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Sweeping Blade"><img alt="Sweeping Blade" src="/wiki/images/Yasuo_Sweeping_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Yasuo/LoL">Sweeping Blade</a></span></span></i>, it will instead affect enemies around <b>Yasuo</b> at the end of the dash, or doing so immediately at his landing location after <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinking</a></span> while ending the dash prematurely.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Special',
    spellshield: true,
    projectile: 'Special',
    callforhelp: 'special',
    notes:
      '* <i>Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Sweeping Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Sweeping Blade"><img alt="Sweeping Blade" src="/wiki/images/Yasuo_Sweeping_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Yasuo/LoL">Sweeping Blade</a></span></span> when Steel Tempest\'s remaining cooldown is less than 0.<small>5</small> seconds resets this remaining cooldown to allow casting it in combination, but adds the refunded time to the cooldown of that cast. If <b>Yasuo</b> becomes unable to cast abilities during the dash after buffering, Steel Tempest will not cast, but will still go on cooldown.</i><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li>The one <i>Gathering Storm</i> stack is named <i>Steel Wind Rising</i>.</li>\n<li>The whirlwind from consuming stacks of <i>Gathering Storm</i> can strike targets whose center is behind <b>Yasuo</b>, unlike most <a href="/wiki/Projectile" title="Projectile">missiles</a>.</li>\n<li>The whirlwind is not released when cast during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Sweeping Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Sweeping Blade"><img alt="Sweeping Blade" src="/wiki/images/Yasuo_Sweeping_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Yasuo/LoL">Sweeping Blade</a></span></span>, but instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> all enemies hit around <b>Yasuo</b> at the end of the dash for the same duration.</li>\n<li><i>Steel Tempest</i> applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> to the first (closest) enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to secondary enemies:\n<ul><li><i>Steel Tempest</i> will apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects to the first target hit, but will not do so to the secondary ones.</li>\n<li><i>Steel Tempest</i> will not apply <a href="/wiki/Ability_effects" title="Ability effects">spell effects</a> to the first target hit, but will do so to the secondary ones.</li>\n<li><span style="white-space:nowrap"><a href="/wiki/Spell_vamp" title="Spell vamp"><img alt="Spell vamp icon.png" src="/wiki/images/Spell_vamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Spell_vamp" class="mw-redirect" title="Spell vamp">Spell vamp</a></span> will only grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> from the damage dealt to secondary targets, and healing is reduced to 33% effectiveness, accordingly.</li>\n<li><span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">Life steal</a></span> will heal based on the damage dealt to the first target hit.</li></ul></li>\n<li>The whirlwind is a missile and can therefore be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">intercepted</a></span>.</li>\n<li><i>Steel Tempest</i> will only draw minion aggro if the first target is a champion.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>Each parry has different interactions with this ability, whether it\'s the first target of <i>Steel Tempest</i> or the secondary one. In either case <b>Yasuo</b> still gains a stack of <i>Gathering Storm</i> and his whirlwind knock-up cannot be negated by parries:\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">Dodge</a></span>: both first target and secondary target <b>do not</b> take damage.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">Block</a></span>: first target <b>does not</b> take damage, secondary target <b>does</b> take damage.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">Blind</a></span>: both first target and secondary target <b>do</b> take damage.</li></ul></li>\n<li><i>Steel Tempest</i> rolls its <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> individually against each enemy hit.</li>\n<li>Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Last Breath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Last Breath"><img alt="Last Breath" src="/wiki/images/Yasuo_Last_Breath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Yasuo/LoL">Last Breath</a></span></span> during <i>Steel Tempest</i> will buffer it to cast after the cast time has completed.\n<ul><li>However, if <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Last Breath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Last Breath"><img alt="Last Breath" src="/wiki/images/Yasuo_Last_Breath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Yasuo/LoL">Last Breath</a></span></span> is used on a target affected by an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> source that is not <b>Yasuo</b>, it is cast immediately due to <i>Steel Tempest\'s</i> cast time ending prematurely. <i>Steel Tempest</i> will still cast in this case.</li></ul></li>\n<li>If <i>Steel Tempest</i> is buffered during <i>Sweeping Blade</i> and <b>Yasuo</b> uses <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>, <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>, <i>Steel Tempest</i> will go on cooldown without casting. In <i>Protobelt\'s</i> case <b>Yasuo</b> will also need to cast a movement command after it, else <i>Steel Tempest</i> will still trigger.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> does not prevent a stack of <i>Gathering Storm</i> from being gained.</li>\n<li>While at two stacks, a range indicator will be shown for the effective range of the whirlwind.</li></ul>',
  },
  'Wind Wall': {
    name: 'Wind Wall',
    display_name: 'Wind Wall',
    champion: 'Yasuo',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'YasuoW.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '0 - 350 / 450',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight area radius">300</span>',
    cast_time: '0.<small>013</small>',
    cooldown: '30 / 27 / 24 / 21 / 18',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo"><img alt="Yasuo" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo</a></span></span> raises a wind wall that drifts in the target direction for a few seconds, blocking all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> that hit it.',
    ],
    description: [
      {
        icon: '/wiki/images/Wind Wall.png',
        description:
          'Active: Yasuo raises a wall of wind that travels in the target direction over 0.25 seconds. It then drifts another 50 units over 3.75 seconds, blocking all hostile non- turret  projectiles that hit it and granting  sight of its surroundings.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yasuo</b> raises a wall of wind that travels in the target direction over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>25</small> seconds</span>. It then drifts another 50 units over 3.<small>75</small> seconds, blocking all hostile non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> that hit it and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'It then drifts another 50 units over 3.75 seconds, blocking all hostile non- turret  projectiles that hit it and granting  sight of its surroundings.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'then drifts another 50 units over 3.75 seconds, blocking all hostile non- turret  projectiles that hit it and granting  sight of its surroundings.',
            pre: 'It then drifts another 50 units over 3.75 seconds, blocking all hostile non- turret  projectiles that hit it and granting  sight of its surroundings.',
          },
        ],
        leveling: [
          {
            name: 'Wall Width:',
            values: '320 / 390 / 460 / 530 / 600',
            valuesHTML: '320 / 390 / 460 / 530 / 600',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Wall Width:',
            raw: '320 / 390 / 460 / 530 / 600',
            values: [320, 390, 460, 530, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '320 / 390 / 460 / 530 / 600',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'None',
    projectile: 'Special',
    notes:
      '* <i>Wind Wall</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> in a small static area in front of the cast location.\n<ul><li><i>Wind Wall</i> starts blocking projectiles on-cast (despite not being fully formed).</li>\n<li><i>Wind Wall</i> travels via a missile, and thus stops upon colliding with an enemy <i>Wind Wall</i>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Yasuo_Original_W_0.ogg   "Face the wind!"',
  },
  'Sweeping Blade': {
    name: 'Sweeping Blade',
    display_name: 'Sweeping Blade',
    champion: 'Yasuo',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'YasuoE.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '475 / 625',
    target_range: '475',
    speed:
      '750 + <span style="color: #F5EE99; white-space:normal">60% movement speed</span>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the dash ends">0.<small>5</small> / 0.<small>4</small> / 0.<small>3</small> / 0.<small>2</small> / 0.<small>1</small></span>',
    ontargetcdstatic: '10 / 9 / 8 / 7 / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo"><img alt="Yasuo" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo</a></span></span><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target enemy\'s direction, dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span>. He also generates a stack of <i>Ride the Wind</i> for a few seconds, stacking up to 2 times.',
      '<i>Sweeping Blade</i> cannot be cast on the same target for a period.',
      '<span class="template_sbc"><b>Ride the Wind:</b></span> For each stack, <i>Sweeping Blade</i> deals increased damage.',
    ],
    description: [
      {
        icon: '/wiki/images/Sweeping Blade.png',
        description:
          'Active: Yasuo  dashes a fixed distance in the direction of the target enemy. Upon impact, he deals them magic damage, becomes  ghosted for 2 seconds, and generates a stack of Ride the Wind for 5 seconds, which refreshes on subsequent hits and stacks up to 2 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yasuo</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target enemy. Upon impact, he deals them <span style="color: #00B0F0; white-space:normal">magic damage</span>, becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2 seconds</span>, and generates a stack of <i>Ride the Wind</i> for 5 seconds, which refreshes on subsequent hits and stacks up to 2 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Upon impact, he deals them magic damage, becomes  ghosted for 2 seconds, and generates a stack of Ride the Wind for 5 seconds, which refreshes on subsequent hits and stacks up to 2 times.',
            min: 0,
            max: 10,
            description:
              'Upon impact, he deals them magic damage, becomes  ghosted for 2 seconds, and generates a stack of Ride the Wind for 5 seconds, which refreshes on subsequent hits and stacks up to 2 times.',
            values: 2,
            units: 'feastStacks',
            unitsText:
              'impact, he deals them magic damage, becomes  ghosted for 2 seconds, and generates a stack of Ride the Wind for 5 seconds, which refreshes on subsequent hits and stacks up to 2 times.',
            pre: 'Upon impact, he deals them magic damage, becomes  ghosted for 2 seconds, and generates a stack of Ride the Wind for 5 seconds, which refreshes on subsequent hits and stacks up to 2 times.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 70 / 80 / 90 / 100 (+ 20% bonus AD) (+ 60% AP)',
            valuesHTML:
              '60 / 70 / 80 / 90 / 100 <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 70 / 80 / 90 / 100 (+ 20% bonus AD) (+ 60% AP)',
            damagetype: 'Magic',
            values: [60, 70, 80, 90, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 70 / 80 / 90 / 100',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% bonus AD',
              },
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
          "Ride the Wind: For each stack, Sweeping Blade's base damage is increased by 25%, up to a 50% increase at maximum stacks.",
        descriptionHTML:
          '<span class="template_sbc"><b>Ride the Wind:</b></span> For each stack, <i>Sweeping Blade\'s</i> <b>base</b> damage is increased by 25%, up to a 50% increase at maximum stacks.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Ride the Wind:',
            raw: " For each stack, Sweeping Blade's base damage is increased by 25%, up to a 50% increase at maximum stacks.",
            min: 0,
            max: 10,
            description:
              " For each stack, Sweeping Blade's base damage is increased by 25%, up to a 50% increase at maximum stacks.",
            values: 2,
            valuesIsPercent: true,
            units: 'feastStacks',
            unitsText:
              ", up to a 50each stack, Sweeping Blade's base damage is increased by 25",
            pre: "For each stack, Sweeping Blade's base damage is increased by 25%, up to a 50% increase at maximum stacks.",
          },
        ],
        leveling: [
          {
            name: 'Increased Base Damage:',
            values: '15 / 17.5 / 20 / 22.5 / 25',
            valuesHTML:
              '15 / 17.<small>5</small> / 20 / 22.<small>5</small> / 25',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Base Damage:',
            raw: '15 / 17.5 / 20 / 22.5 / 25',
            damagetype: 'None',
            values: [15, 17.5, 20, 22.5, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17.5 / 20 / 22.5 / 25',
          },
        ],
      },
      {
        description:
          'Sweeping Blade can be cast on the same target only once every few seconds.',
        descriptionHTML:
          '<i>Sweeping Blade</i> can be cast on the same target only once every few seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Yasuo will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during Sweeping Blade.',
        descriptionHTML:
          '<i><b>Yasuo</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during Sweeping Blade.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Yasuo will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during Sweeping Blade.',
            damagetype: 'None',
            values: 0,
            units: 'total_ad',
            unitsText: ', during Sweeping Blade.',
            pre: 'Yasuo will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep',
            post: ', during Sweeping Blade.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'bug',
                pre: 'bug',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Last Breath can be cast during the dash. If  Steel Tempest has been buffered,  Wind Wall may also be cast during it. (bug)',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Last Breath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Last Breath"><img alt="Last Breath" src="/wiki/images/Yasuo_Last_Breath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Last_Breath" title="Yasuo/LoL">Last Breath</a></span></span> can be cast during the dash. If </i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Steel Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Steel Tempest"><img alt="Steel Tempest" src="/wiki/images/Yasuo_Steel_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Yasuo/LoL">Steel Tempest</a></span></span><i> has been buffered, </i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span><i> may also be cast during it. <sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: '(bug)',
            values: 0,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'bug',
                pre: 'bug',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* The on-target cooldown will be applied upon starting the dash.\n<ul><li><i>Sweeping Blade\'s</i> dash speed is affected by <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Movement_speed" title="Movement speed">movement speed</a></span>.</li>\n<li><i>Sweeping Blade</i> will generate 7.<small>5</small> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span> stacks per cast that travels the maximum distance.</li>\n<li><b>Yasuo</b> can use <i>Sweeping Blade\'s</i> fixed dash distance to cross walls both before and after hitting his target (provided his proximity to the wall and/or target allows it).</li>\n<li>After <i>Sweeping Blade</i>, <b>Yasuo</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for a moment to prevent situations where he would face extreme cases of body block.</li></ul>',
  },
  'Last Breath': {
    name: 'Last Breath',
    display_name: 'Last Breath',
    champion: 'Yasuo',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'YasuoR.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1400',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Anchored around the target">400</span>',
    cast_time: 'none',
    cooldown: '70 / 60 / 50 / 40 / 30',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo"><img alt="Yasuo" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> enemy champion and instantly generates max <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span>. He then briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span>, and deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> enemies.',
      'He becomes empowered for some time, causing his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> to gain <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b>-armor penetration</span></span>.',
      '<span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>Bonus</b>-armor penetration</span></span> affects <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> armor</span></span> only.',
    ],
    description: [
      {
        icon: '/wiki/images/Last Breath.png',
        description:
          'Active: Yasuo  blinks to the other side of a  visible  airborne enemy champion nearest to the cursor, instantly generating maximum  Flow while resetting  Gathering Storm stacks.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yasuo</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the other side of a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> enemy champion <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="searches in a 1100 radius">nearest to the cursor</span>, instantly generating maximum <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span> while resetting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Steel Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Gathering Storm"><img alt="Gathering Storm" src="/wiki/images/Yasuo_Steel_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Yasuo/LoL">Gathering Storm</a></span></span></i> stacks.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Upon arrival, he  knocks up all nearby  airborne enemy champions for 1 second,  revealing them and slashing them with his sword over the duration, dealing physical damage thereafter. Surrounding enemy champions that become  airborne during this time will also be affected by Last Breath through the remaining duration.',
        descriptionHTML:
          'Upon arrival, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> all nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> enemy champions for 1 second, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them and slashing them with his sword over the duration, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> thereafter. Surrounding enemy champions that become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> during this time will also be affected by <i>Last Breath</i> through the remaining duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Upon arrival, he  knocks up all nearby  airborne enemy champions for 1 second,  revealing them and slashing them with his sword over the duration, dealing physical damage thereafter',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'arrival, he  knocks up all nearby  airborne enemy champions for 1 second,  revealing them and slashing them with his sword over the duration, dealing physical damage thereafter',
            pre: 'Upon arrival, he  knocks up all nearby  airborne enemy champions for 1 second,  revealing them and slashing them with his sword over the duration, dealing physical damage thereafter',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '200 / 350 / 500 (+ 150% bonus AD)',
            valuesHTML:
              '200 / 350 / 500 <span style="color:orange; white-space:normal">(+&nbsp;150% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '200 / 350 / 500 (+ 150% bonus AD)',
            damagetype: 'Physical',
            values: [200, 350, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 350 / 500',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
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
          "For the next 15 seconds, Yasuo's  critical strikes gain  50% bonus-armor penetration.",
        descriptionHTML:
          'For the next 15 seconds, <b>Yasuo\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> gain <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">50% <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Modifies bonus armor only"><b>bonus</b>-armor penetration</span></span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "For the next 15 seconds, Yasuo's  critical strikes gain  50% bonus-armor penetration.",
            increasedStat: 'bonus_armor',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              "bonus-armor penetration.the next 15 seconds, Yasuo's  critical strikes gain  50",
            pre: "For the next 15 seconds, Yasuo's  critical strikes gain  50% bonus-armor penetration.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'A nearby  airborne enemy champion is required to cast this ability. If Yasuo would blink inside the  attack range of an enemy  turret (excluding the  Nexus Obelisk), Last Breath will instead attempt to position him outside of it.',
        descriptionHTML:
          '<i>A nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> enemy champion is required to cast this ability. If <b>Yasuo</b> would blink inside the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> of an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> (excluding the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nexus obelisk"><a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk"><img alt="Nexus Obelisk.png" src="/wiki/images/Nexus_Obelisk.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk">Nexus Obelisk</a></span>), Last Breath will instead attempt to position him outside of it.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If Yasuo would blink inside the  attack range of an enemy  turret (excluding the  Nexus Obelisk), Last Breath will instead attempt to position him outside of it.',
            damagetype: 'None',
            values: 0,
            units: 'total_ad',
            unitsText:
              ', Last Breath will instead attempt to position him outside of it.',
            pre: 'If Yasuo would blink inside the  attack range of an enemy  turret',
            post: ', Last Breath will instead attempt to position him outside of it.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'excluding the  Nexus Obelisk',
                pre: 'excluding the  Nexus Obelisk',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Single target',
    spellshield: 'Special',
    callforhelp: 'False',
    notes:
      '* <i>Last Breath</i> requires the target to be affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> from an <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="from the target\'s perspective">enemy source</span>, and simultaneously that the target is not considered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">cc-immune</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> during it.\n<ul><li><ul><li><i>Last Breath</i> cannot be cast if there are no nearby enemy champions that meet the conditions.\n<ul><li>Attempting to cast the ability on an enemy champion that is not airborne will indicate that they "<i>Must Be Airborne!</i>"</li></ul></li>\n<li>Self-applied or allied-applied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacements</a></span> do not allow <i>Last Breath</i> to target the champion. Those applied by the <i>neutral</i> team (e.g. <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragon\'s"><img alt="Dragon\'s" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragon\'s</a></span></span> initial knock back) <b>can</b> be targeted.</li>\n<li>An <a href="/wiki/Spell_indicator" title="Spell indicator">indicator</a> will be placed towards enemy champions that meet the cast conditions within range of <i>Last Breath</i> to signify the ability can be cast.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span> will prevent <b>Yasuo</b> from casting <i>Last Breath</i> on an airborne enemy champion outside its borders.\n<ul><li><b>Yasuo</b> can only do so if the airborne enemy champion is inside the zone.</li></ul></li></ul></li>\n<li>Upon <i>Last Breath\'s</i> cast, the targets\' facing directions snap to <b>Yasuo</b>. Afterwards, their facing directions shift in all other directions every 0.<small>25</small> seconds over the duration of the airborne.\n<ul><li>The last shift snaps them to the facing direction of the second one.</li>\n<li>On the <span style="white-space:pre"><span class="inline-image label-after skin-icon" style="display:inline;white-space:pre;" data-param="" data-skin="Nightbringer" data-champion="Yasuo" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL/Cosmetics" title="Nightbringer Yasuo"><img alt="Nightbringer Yasuo" src="/wiki/images/Yasuo_NightbringerCircle.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL/Cosmetics" title="Yasuo/LoL/Cosmetics">Nightbringer Yasuo</a></span></span></span> skin, these shifts in facing direction do not occur, but the targets\' facing directions will still snap to <b>Yasuo</b> upon <i>Last Breath\'s</i> cast.</li></ul></li>\n<li><b>Yasuo</b> does not need <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of enemy champions near his target to affect them with the ability.</li>\n<li>Even if the target is protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> the ability will still affect them and deal damage, but the <i>spell shield</i> will be consumed.</li>\n<li><i>Last Breath\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> can be fully <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansed</a></span> but its damage is applied instantly after the removal.\n<ul><li>It is not considered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suspension"><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control">suspension</a></span>.</li></ul></li>\n<li>Terrain displacing abilities (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taliyah" data-ability="Weaver\'s Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taliyah/LoL#Weaver\'s_Wall" title="Weaver\'s Wall"><img alt="Weaver\'s Wall" src="/wiki/images/Taliyah_Weaver%27s_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taliyah/LoL#Weaver\'s_Wall" title="Taliyah/LoL">Weaver\'s Wall</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-ability="Pillar of Ice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL#Pillar_of_Ice" title="Pillar of Ice"><img alt="Pillar of Ice" src="/wiki/images/Trundle_Pillar_of_Ice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL#Pillar_of_Ice" title="Trundle/LoL">Pillar of Ice</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ornn" data-ability="Volcanic Rupture" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ornn/LoL#Volcanic_Rupture" title="Volcanic Rupture"><img alt="Volcanic Rupture" src="/wiki/images/Ornn_Volcanic_Rupture.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ornn/LoL#Volcanic_Rupture" title="Ornn/LoL">Volcanic Rupture</a></span></span>) that affect enemy champions are considered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>, and will therefore interact with <i>Last Breath</i>.</li>\n<li>While <i>blinking</i>, <b>Yasuo</b> creates an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> <i>clone</i> of himself that cues a dashing animation (similar to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Sweeping Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Sweeping Blade\'s"><img alt="Sweeping Blade\'s" src="/wiki/images/Yasuo_Sweeping_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Sweeping_Blade" title="Yasuo/LoL">Sweeping Blade\'s</a></span></span>) towards the target. This unit\'s rules do not follow those of a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone\'s</a></span>. As such, it is more alike a champion, unless special cased.</li>\n<li>While performing <i>Last Breath</i>, <b>Yasuo</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">locked out</a></span> of performing actions.\n<ul><li>The lock out will end prematurely if <b>Yasuo</b> dies as well as by the following if all targets:\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">Cleanse</a></span> the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span>.</li>\n<li>Are too far away from <b>Yasuo</b>.</li>\n<li>Leave <b>Yasuo\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> (e.g. by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span>).</li>\n<li>Become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">Die</a></span>.</li>\n<li>Enter the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span>.</li></ul></li></ul></li>\n<li>The following table refers for interactions while <b>Yasuo</b> is locked out:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td>N/A\n</td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Yasuo_Original_R_0.ogg   "Sorye ge ton!"',
  },
} satisfies { [skillName in string]: SkillData };
