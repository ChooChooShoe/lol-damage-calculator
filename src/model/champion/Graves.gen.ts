import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Graves';

export default {
  'New Destiny': {
    name: 'New Destiny',
    display_name: 'New Destiny',
    champion: 'Graves',
    skill: 'I',
    image: {
      full: 'GravesTrueGrit.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '625 /  565',
    target_range: '425',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Individual pellets missile width">40</span>',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Basic attack spread">24°</span> /<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"></a></span> 30°',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pellets missile speed">3800</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Invisible missile, used for certain attack effects and against wards/plants">3000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Invisible missile when critting">3400</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Graves" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Graves/LoL" title="Graves\'"><img alt="Graves\'" src="/wiki/images/Graves_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Graves/LoL" title="Graves/LoL">Graves\'</a></span></span> basic attacks consume up to <span style="color: #E34D4C; white-space:normal">2 shells</span> before needing to reload. The reload speed is reduced based on his <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
      'Each attack fires several <span style="color: #56C456; white-space:normal">pellets</span> in a cone that each collide with the first enemy hit. Hitting a target with multiple <span style="color: #56C456; white-space:normal">pellets</span> will deal increased damage, and non-champion enemies are additionally <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/New Destiny.png',
        description:
          "Innate - Double Barrel: Graves' basic attacks consume ammunition within 2 shells. He will reload over a few seconds immediately after expending all shells or withholding leftover shells for a while. The reload time is reduced by Graves' level and  bonus attack speed, and can be interrupted by declaring an attack or casting an ability.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Double Barrel:</b></span> <b>Graves\'</b> <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> consume <a href="/wiki/Ammunition" title="Ammunition">ammunition</a> within <span style="color: #E34D4C; white-space:normal">2 shells</span>. He will <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Graves is unable to declare basic attacks during this time.">reload</span> over a few seconds immediately after expending all shells or withholding leftover shells for a while. The reload time is reduced by <b>Graves\'</b> level and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, and can be interrupted by declaring an attack or casting an ability.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate - Double Barrel:',
            raw: " Graves' basic attacks consume ammunition within 2 shells",
            values: 2,
            units: 'total_ad',
            unitsText: 'basic attacks consume ammunition within 2 shells',
            pre: "Graves' basic attacks consume ammunition within 2 shells",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Innate - 12-Gauge: Graves' basic attack sprays 4 pellets in a cone, each colliding with the first enemy unit or structure in their path, dealing 70% − 100.01% (based on level) AD physical damage plus「 23.31% − 33.3% (based on level) AD damage 」「 about one-third of the damage 」for each subsequent pellet hitting the same target, up to 139.93% − 199.92% (based on level) AD physical damage against a single target. Pellets deal 25% reduced damage against structures.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - 12-Gauge:</b></span> <b>Graves\'</b> basic attack sprays <span style="color: #56C456; white-space:normal">4 pellets</span> in a cone, each colliding with the first enemy unit or structure in their path, dealing <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))" data-bot_values="70;71.13;72.34;73.63;75;76.44;77.97;79.58;81.26;83.03;84.87;86.79;88.8;90.88;93.04;95.28;97.6;100.01" data-top_values="" data-bot_key="%">70% − 100.<small>01</small>% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> plus<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))*0.33302" data-bot_values="23.31;23.69;24.09;24.52;24.97;25.46;25.97;26.5;27.06;27.65;28.26;28.9;29.57;30.26;30.98;31.73;32.5;33.3" data-top_values="" data-bot_key="%">23.<small>31</small>% − 33.<small>3</small>% (based on level)</span> AD</span> damage&nbsp;」</span><span class="flipText2">「&nbsp;about one-third of the damage&nbsp;」</span></span>for each subsequent <span style="color: #56C456; white-space:normal">pellet</span> hitting the same target, up to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))*(1+3*0.33302)" data-bot_values="139.93;142.19;144.61;147.19;149.92;152.81;155.87;159.08;162.45;165.97;169.66;173.51;177.51;181.67;186;190.48;195.12;199.92" data-top_values="" data-bot_key="%">139.<small>93</small>% − 199.<small>92</small>% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> against a single target. Pellets deal 25% reduced damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - 12-Gauge:',
            raw: " Graves' basic attack sprays 4 pellets in a cone, each colliding with the first enemy unit or structure in their path, dealing 70% − 100.01% (based on level) AD physical damage plus「 23.31% − 33.3% (based on level) AD damage 」「 about one-third of the damage 」for each subsequent pellet hitting the same target, up to 139.93% − 199.92% (based on level) AD physical damage against a single target",
            increasedStat: 'total_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'AD physical damage plus「 23.31% − 33.3%',
            pre: "Graves' basic attack sprays 4 pellets in a cone, each colliding with the first enemy unit or structure in their path, dealing 70% − 100.01%",
            post: 'AD physical damage plus「 23.31% − 33.3%',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Pellets deal 25% reduced damage against structures.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'reduced damage against structures.deal 25',
            pre: 'Pellets deal 25% reduced damage against structures.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Critical strikes spray 6 pellets over a 25% wider cone, with each pellet dealing (20% +  9.33345%) bonus physical damage, resulting in「  59.98% (+ 12.44%) bonus damage to attacks where all pellets hit. 」「 223.97% − 319.98% (based on level) (+17.42% − 24.88% (based on level)) AD physical damage if all pellets hit. 」',
        descriptionHTML:
          '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strikes</a></span> spray <span style="color: #56C456; white-space:normal">6 pellets</span> over a 25% wider cone, with each <span style="color: #56C456; white-space:normal">pellet</span> dealing <span style="color: #FF8C34; white-space:normal">(20%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="9.33345%"><img alt="9.33345%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">9.<small>33345</small>%</a></span></span>) <b>bonus</b> physical damage</span>, resulting in<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">59.<small>98</small>% (+&nbsp;<span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge item.png" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span>12.<small>44</small>%)</span></span> <b>bonus</b> damage to attacks where all pellets hit.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))*2*1.5998" data-bot_values="223.97;227.59;231.46;235.58;239.95;244.59;249.47;254.61;260;265.65;271.55;277.71;284.12;290.78;297.7;304.87;312.3;319.98" data-top_values="" data-bot_key="%">223.<small>97</small>% − 319.<small>98</small>% (based on level)</span></span> <span style="color:orange; white-space:normal">(+<span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge item.png" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100*(0.6895 +&nbsp;0.01765*x*(0.595 +&nbsp;0.0225*(x-1)))*2*0.1244" data-bot_values="17.42;17.7;18;18.32;18.66;19.02;19.4;19.8;20.22;20.66;21.12;21.59;22.09;22.61;23.15;23.71;24.28;24.88" data-top_values="" data-bot_key="%">17.<small>42</small>% − 24.<small>88</small>% (based on level)</span>) AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> if all pellets hit.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Critical strikes spray 6 pellets over a 25% wider cone, with each pellet dealing (20% +  9.33345%) bonus physical damage, resulting in「  59.98% (+ 12.44%) bonus damage to attacks where all pellets hit. 」「 223.97% − 319.98% (based on level) (+17.42% − 24.88% (based on level)) AD physical damage if all pellets hit. 」',
            damagetype: 'Physical',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus physical damage, resulting in「  59.98%',
            pre: 'Critical strikes spray 6 pellets over a 25% wider cone, with each pellet dealing',
            post: 'bonus physical damage, resulting in「  59.98%',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  9.33345',
                pre: '20% +  9.33345%',
              },
              {
                values: 12.44,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 12.44%',
              },
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+17.42% − 24.88%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Pellets apply  life steal at 100% effectiveness. Only the first pellet to hit each enemy applies on-hit effects.',
        descriptionHTML:
          '<span style="color: #56C456; white-space:normal">Pellets</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">apply</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness. Only the first <span style="color: #56C456; white-space:normal">pellet</span> to hit each enemy applies <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Pellets apply  life steal at 100% effectiveness',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText: 'effectivenessapply  life steal at 100',
            pre: 'Pellets apply  life steal at 100% effectiveness',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Innate - Buckshot: Non-champion units hit by more than one pellet are  knocked back, though not through terrain.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Buckshot:</b></span> Non-champion units hit by more than one <span style="color: #56C456; white-space:normal">pellet</span> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span>, though not through terrain.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    occurrence: 'On-hit',
    spellshield: false,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* The in-game HUD displays <b>Graves\'</b> reload speed in place of his attack speed. This is a visual bug, and his attack speed behaves normally.\n<ul><li>His reload speed is in the form of reloads per second:\n<ul><li><b>Graves\'</b> bonus attack speed <a href="/wiki/Growth" class="mw-redirect" title="Growth">growth</a> and the cap affect his reload speed, making his <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> more worth after each level.</li>\n<li>Reload speed: Scales less the more attack speed you have until <span style="color:orangered; white-space:normal">150% <b>bonus</b> attack speed</span> (not included growth). Going over that will decrease the reload speed until capping at <span style="color:orangered; white-space:normal">200% <b>bonus</b> attack speed</span>.</li>\n<li>The reload time after firing both <b>shells</b> and the time before the reloading starts while sitting on one shell are the same, of 2.<small>08</small> seconds. They\'re then reduced by <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span>, to a minimum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="&nbsp;�• \'\'\'Time Cap\'\'\' = 1 / Reload Speed Cap. • \'\'\'Reload Speed Cap\'\'\' = 0.651 + ~0.014 per level, up to 0.891." data-bot_values="1.54;1.5;1.47;1.44;1.41;1.39;1.36;1.33;1.31;1.29;1.26;1.24;1.22;1.2;1.18;1.16;1.14;1.12" data-top_values="">1.<small>54</small> − 1.<small>12</small> (based on level)</span> seconds.\n<ul><li>Reload speed at 150% bonus attack speed: <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.651;0.665;0.679;0.694;0.708;0.722;0.736;0.75;0.764;0.778;0.792;0.806;0.821;0.835;0.849;0.863;0.877;0.891" data-top_values="">0.<small>651</small> − 0.<small>891</small> (based on level)</span>.</li></ul></li></ul></li>\n<li>The reload time with one <b>shell</b> is 1.<small>3</small> seconds.</li></ul>\n<ul><li><b>Graves\'</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack windup</a></span> is based on such a low value that it will always take only <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1/30th of a second">1 game tick</span>, even at the lowest possible <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span> (<i>0.2AS</i>).</li>\n<li>When <b>Graves\' </b>has his range increased by 35% to <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;573.<small>75</small></span> via <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span>, it has special effects on his cone spread:\n<ul><li>The reach of the individual missiles is also increased by 35% to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 843.<small>75</small> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effective to-edge reach">783.<small>75</small></span>.</li>\n<li>The spread of the individual missiles is <i>decreased</i> by 35% (<i>angle &nbsp;×&nbsp; 1/1.35</i>) to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="RFC basic attack adjusted spread">17.<small><span style="text-decoration: overline;">7</span></small>°</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="RFC critical attack adjusted spread">22.<small><span style="text-decoration: overline;">2</span></small>°</span>.\n<ul><li>The reduced spread means that the empowered attack can deal adequate damage in a scaled-up cone.</li></ul></li></ul></li>\n<li>Given the right circumstances <i>pellets</i> can fly past and beyond the intended target without colliding with them, and thus collide with other enemies.\n<ul><li>Because the first pellet to hit an enemy deals unreduced damage, this can increase the total damage of the attack dealt, but spread across more targets instead.</li>\n<li>If <b>Graves</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span> <i>pellets</i> will fly (still in a cone) in a random direction (excluding his target\'s) but he can still damage nearby enemy units hit by pellets.</li></ul></li>\n<li>Structures will intercept and can be hit by multiple <i>pellets</i>, as with other valid targets.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">Wards</a></span> and <a href="/wiki/Jungle_plants" title="Jungle plants">Jungle plants</a> will not intercept <i>pellets</i>, and instead be triggered by a hiden homing attack missile (3000 missile speed, 3400 on crit), reminiscent of the more standard ranged attack of pre-rework <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Graves" data-skin="Original" data-variant="old" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Graves/LoL" title="Graves"><img alt="Graves" src="/wiki/images/Graves_OriginalSquare_old.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Graves/LoL" title="Graves/LoL">Graves</a></span></span>.\n<ul><li><b>Graves</b> will not collaterally damage wards or jungle plants, and blocking pellets from reaching the target ward or jungle plant will not prevent <b>Graves</b> from damaging them.</li></ul></li>\n<li>The first <span style="color: #56C456; white-space:normal">pellet</span> to hit an enemy deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>, additional ones to hit the same enemy from the same attack deal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span>.\n<ul><li>Because of this, only the first pellet to hit each enemy applies on-hit effects (see further details below).</li>\n<li>The additional pellets still <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">apply life steal</a></span>.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Warden\'s Mail" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Warden%27s_Mail" title="Warden\'s Mail"><img alt="Warden\'s Mail" src="/wiki/images/Warden%27s_Mail_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Warden%27s_Mail" title="Warden\'s Mail">Warden\'s Mail</a></span></span> only reduces damage from the first pellet to hit its wearer.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen\'s"><img alt="Randuin\'s Omen\'s" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen\'s</a></span></span> damage reduction to critical damage will apply to the damage of each pellet from a critical buckshot.</li></ul></li>\n<li>Attack effects have a variety of interactions with <b>New Destiny</b>:\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">On-hit</a></span> effects are dealt to each stuck target, but not multiple times to the same target by subsequent pellets from the same attack.\n<ul><li>The order is based on the order in which the targets are hit. "Single-use" on-hit effects (e.g. <span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Sheen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sheen" title="Sheen"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a>) will be applied to the first enemy hit; the closest one.</li></ul></li>\n<li><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">On-Action Effects</a> such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Help, Pix!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Help,_Pix!" title="Help, Pix!"><img alt="Help, Pix!" src="/wiki/images/Lulu_Help%2C_Pix%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Help,_Pix!" title="Lulu/LoL">Help, Pix!</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> will be triggered, and still obey their standard target-acquisition rules. <a href="/wiki/Named_item_effect#Wind\'s_Fury" title="Named item effect">Wind\'s Fury</a> can select secondary targets that will also be damaged by collision from <b>Graves\'</b> attack.</li>\n<li><span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Kircheis Shard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kircheis_Shard" title="Kircheis Shard"><img alt="Kircheis Shard item.png" src="/wiki/images/Kircheis_Shard_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> <a href="/wiki/Named_item_effect#Energized" title="Named item effect">Energized</a> is special and will be applied by a hidden homing attack missile (3000 missile speed, 3400 on crit), reminiscent of the more standard ranged attack of pre-rework <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Graves" data-skin="Original" data-variant="old" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Graves/LoL" title="Graves"><img alt="Graves" src="/wiki/images/Graves_OriginalSquare_old.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Graves/LoL" title="Graves/LoL">Graves</a></span></span>. The effect is therefore guaranteed to affect his attack target.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Cleaver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Cleaver" title="Black Cleaver"><img alt="Black Cleaver" src="/wiki/images/Black_Cleaver_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Cleaver" title="Black Cleaver">Black Cleaver</a></span></span> triggers on every instance of <span style="color: #FF8C34; white-space:normal">physical damage</span>, so it will apply 1 stack when each individual <i>pellet</i> hits, stacking multiple times if multiple <i>pellets</i> hit the same target (Armor reduction does not take effect until the automatic stat update).</li></ul></li></ul>',
    video: 'Graves IVideo.ogv',
  },
  'End of the Line': {
    name: 'End of the Line',
    display_name: 'End of the Line',
    champion: 'Graves',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'GravesQLineSpell.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '800 /  900',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial shell missile width">80</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Explosion rectangle width">500</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Powder trail return missile width">200</span>',
    cast_time: '0.<small>25</small>',
    cost: '80',
    costtype: 'Mana',
    cooldown: '13 / 11.<small>5</small> / 10 / 8.<small>5</small> / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Graves" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Graves/LoL" title="Graves"><img alt="Graves" src="/wiki/images/Graves_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Graves/LoL" title="Graves/LoL">Graves</a></span></span> fires an explosive shell that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through.',
      'The shell leaves a powder trail as it travels, and will detonate the trail after a short time, or immediately if it hits <a href="/wiki/Terrain" title="Terrain">terrain</a>. The explosion deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies within.',
    ],
    description: [
      {
        icon: '/wiki/images/End of the Line.png',
        description:
          'Active: Graves fires a round in the target direction that deals physical damage to enemies it passes through and leaves behind a powder trail.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Graves</b> fires a round in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through and leaves behind a powder trail.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '45 / 60 / 75 / 90 / 105 (+ 80% bonus AD)',
            valuesHTML:
              '45 / 60 / 75 / 90 / 105 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '45 / 60 / 75 / 90 / 105 (+ 80% bonus AD)',
            damagetype: 'Physical',
            values: [45, 60, 75, 90, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 60 / 75 / 90 / 105',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'After 2 seconds, or 0.231 seconds upon colliding with terrain, the round detonates to deal physical damage to enemies within a wide perpendicular area and in a reverse wave along the powder trail.',
        descriptionHTML:
          'After 2 seconds, or <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.2 seconds, but rounded up to the next game tick.">0.<small>231</small> seconds</span> upon colliding with terrain, the round detonates to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies within a wide perpendicular area and in a reverse wave along the powder trail.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'After 2 seconds, or 0.231 seconds upon colliding with terrain, the round detonates to deal physical damage to enemies within a wide perpendicular area and in a reverse wave along the powder trail.',
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              '2 seconds, or 0.231 seconds upon colliding with terrain, the round detonates to deal physical damage to enemies within a wide perpendicular area and in a reverse wave along the powder trail.',
            pre: 'After 2 seconds, or 0.231 seconds upon colliding with terrain, the round detonates to deal physical damage to enemies within a wide perpendicular area and in a reverse wave along the powder trail.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '85 / 120 / 155 / 190 / 225 (+ 40 / 70 / 100 / 130 / 160% bonus AD)',
            valuesHTML:
              '85 / 120 / 155 / 190 / 225 <span style="color:orange; white-space:normal">(+&nbsp;40 / 70 / 100 / 130 / 160% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '85 / 120 / 155 / 190 / 225 (+ 40 / 70 / 100 / 130 / 160% bonus AD)',
            damagetype: 'Physical',
            values: [85, 120, 155, 190, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '85 / 120 / 155 / 190 / 225',
            children: [
              {
                values: [40, 70, 100, 130, 160],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40 / 70 / 100 / 130 / 160% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> can only block one instance of the ability\'s damage.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> will destroy the projectile entirely and mitigate all effects, including the trail on the ground.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> is considered to be terrain for the purposes of the projectile, triggering its second effect.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  'Smoke Screen': {
    name: 'Smoke Screen',
    display_name: 'Smoke Screen',
    champion: 'Graves',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'GravesSmokeGrenade.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '950',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Canister landing damage radius">200</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts traveling at the start of the cast time">1500</span>',
    cast_time: '0.<small>25</small>',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'Mana',
    cooldown: '26 / 24 / 22 / 20 / 18',
    customlabel: 'Sight Reduction',
    custominfo:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated, reduces sight radius to this number">250</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Graves" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Graves/LoL" title="Graves"><img alt="Graves" src="/wiki/images/Graves_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Graves/LoL" title="Graves/LoL">Graves</a></span></span> fires a smoke canister at the target location that creates a cloud of smoke upon impact, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies.',
      'Enemies within the lingering cloud are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsighted</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Smoke Screen.png',
        description:
          'Active: Graves fires a smoke canister at the target location that upon impact deals magic damage to enemies within the area and  slows them by 50% for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Graves</b> fires a smoke canister at the target location that upon impact deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Graves fires a smoke canister at the target location that upon impact deals magic damage to enemies within the area and  slows them by 50% for 0.5 seconds.',
            damagetype: 'Magic',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.5 seconds.fires a smoke canister at the target location that upon impact deals magic damage to enemies within the area and  slows them by 50',
            pre: 'Graves fires a smoke canister at the target location that upon impact deals magic damage to enemies within the area and  slows them by 50% for 0.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 110 / 160 / 210 / 260 (+ 60% AP)',
            valuesHTML:
              '60 / 110 / 160 / 210 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 110 / 160 / 210 / 260 (+ 60% AP)',
            damagetype: 'Magic',
            values: [60, 110, 160, 210, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210 / 260',
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
        icon: '/wiki/images/Smoke Screen 2.png',
        description:
          'The canister creates a cloud of smoke for 4 seconds that applies  nearsight of outside the area to all enemies within every 0.25 seconds, reducing their  sight radius relative to the center.',
        descriptionHTML:
          'The canister creates a cloud of smoke for 4 seconds that applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span> of outside the area to all enemies within every 0.<small>25</small> seconds, reducing their <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> radius relative to the center.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The canister creates a cloud of smoke for 4 seconds that applies  nearsight of outside the area to all enemies within every 0.25 seconds, reducing their  sight radius relative to the center.',
            damagetype: 'None',
            values: 4,
            units: 'total_ap',
            unitsText:
              'canister creates a cloud of smoke for 4 seconds that applies  nearsight of outside the area to all enemies within every 0.25 seconds, reducing their  sight radius relative to the center.',
            pre: 'The canister creates a cloud of smoke for 4 seconds that applies  nearsight of outside the area to all enemies within every 0.25 seconds, reducing their  sight radius relative to the center.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* <i>Smoke Screen</i> will nearsight <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> units.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> will block the instance of damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>, but will not mitigate the persistent area of effect.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">Crowd control immunity</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> have no effect on the user\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> radius reduction despite the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span> being resisted / removed. Loss of allied vision will still be affected.\n<ul><li>Removing or resisting the nearsight will prevent it from being reapplied while staying inside the area (leaving and coming back inside will not).</li></ul></li>\n<li>The nearsight debuff applies to non-champions but it does not inherently stop them from performing actions that require <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span>, such as <a href="/wiki/Basic_attack" title="Basic attack">basic attacking</a>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  Quickdraw: {
    name: 'Quickdraw',
    display_name: 'Quickdraw',
    champion: 'Graves',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'GravesMove.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '375 / 275',
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown: '16 / 15 / 14 / 13 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Graves" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Graves/LoL" title="Graves"><img alt="Graves" src="/wiki/images/Graves_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Graves/LoL" title="Graves/LoL">Graves</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction and reloads <span style="color: #E34D4C; white-space:normal">1 shell</span>. He also gains a stack of <i>True Grit</i>, doubled if he dashed toward an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
      'Each time he hits an enemy with a <span style="color: #56C456; white-space:normal">pellet</span>, the cooldown is <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span>.',
      '<span class="template_sbc"><b>True Grit:</b></span> For each stack, <b>Graves</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>. Attacks versus non-minion enemies will refresh the duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Quickdraw.png',
        description:
          'Active: Graves  dashes to the target location, reloading one shell while generating a stack of True Grit for 4 seconds, stacking up to 8 times. Dashing towards an enemy  champion generates 2 stacks of True Grit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Graves</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, reloading one <span style="color: #E34D4C; white-space:normal">shell</span> while generating a <a href="/wiki/Stack" title="Stack">stack</a> of <i>True Grit</i> for 4 seconds, stacking up to 8 times. Dashing towards an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> generates 2 stacks of <i>True Grit</i>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Active:',
            raw: ' Graves  dashes to the target location, reloading one shell while generating a stack of True Grit for 4 seconds, stacking up to 8 times',
            min: 0,
            max: 10,
            description:
              ' Graves  dashes to the target location, reloading one shell while generating a stack of True Grit for 4 seconds, stacking up to 8 times',
            values: 4,
            units: 'feastStacks',
            unitsText:
              'dashes to the target location, reloading one shell while generating a stack of True Grit for 4 seconds, stacking up to 8 times',
            pre: 'Graves  dashes to the target location, reloading one shell while generating a stack of True Grit for 4 seconds, stacking up to 8 times',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Dashing towards an enemy  champion generates 2 stacks of True Grit.',
            min: 0,
            max: 10,
            description:
              'Dashing towards an enemy  champion generates 2 stacks of True Grit.',
            values: 2,
            units: 'feastStacks',
            unitsText:
              'towards an enemy  champion generates 2 stacks of True Grit.',
            pre: 'Dashing towards an enemy  champion generates 2 stacks of True Grit.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Quickdraw's  current cooldown is reduced by 0.5 seconds for every pellet impacting an enemy.",
        descriptionHTML:
          '<i>Quickdraw\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 0.<small>5</small> seconds for every <span style="color: #56C456; white-space:normal">pellet</span> impacting an enemy.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'True Grit: For each stack, Graves gains  bonus armor. Subsequent casts of Quickdraw and attacks versus non- minions will refresh the duration of True Grit.',
        descriptionHTML:
          '<span class="template_sbc"><b>True Grit:</b></span> For each stack, <b>Graves</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>. Subsequent casts of <i>Quickdraw</i> and attacks versus non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> will refresh the duration of <i>True Grit</i>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Armor:',
            values: '4 / 7 / 10 / 13 / 16',
            valuesHTML: '4 / 7 / 10 / 13 / 16',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: '4 / 7 / 10 / 13 / 16',
            values: [4, 7, 10, 13, 16],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 7 / 10 / 13 / 16',
          },
        ],
      },
      {
        description:
          "Quickdraw  resets Graves' basic attack timer. If Graves dashes while reloading, he can cast any of his abilities during the dash.(bug) Quickdraw will cast at max range if cast beyond that.",
        descriptionHTML:
          '<i>Quickdraw <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Graves\'</b> basic attack timer. If <b>Graves</b> dashes while reloading, he can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup> Quickdraw will cast at max range if cast beyond that.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If Graves dashes while reloading, he can cast any of his abilities during the dash.(bug) Quickdraw will cast at max range if cast beyond that.',
            damagetype: 'None',
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'Quickdraw will cast at max range if cast beyond that.',
            pre: 'If Graves dashes while reloading, he can cast any of his abilities during the dash.',
            post: 'Quickdraw will cast at max range if cast beyond that.',
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
    targeting: 'Location',
    affects: 'Self',
    notes:
      '* <b>Graves</b> gains the one additional stack of <i>True Grit</i> from <i>Quickdraw</i> if at any point during the dash a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champion is in front of <i>Graves</i> within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1300 distance.\n<ul><li><ul><li>Enemy champions have to be targetable to grant the additional stack.</li>\n<li>The additional stack of <i>True Grit</i> is gained when dashing towards <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> just like actual champions.</li>\n<li>This check never happens if <b>Graves</b> dashes 0 distance (impossible outside of bugs), and will not always repeat a final time at the very end of the dash. Otherwise, it occurs continously while <b>Graves</b> is dashing.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> Exact angle requirement.</li></ul></li></ul>',
  },
  'Collateral Damage': {
    name: 'Collateral Damage',
    display_name: 'Collateral Damage',
    champion: 'Graves',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'GravesChargeShot.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1100 /  1690',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Collateral cone radius, estimated">590</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shell missile width">200</span>',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Collateral cone angle, estimated">60°</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shell missile speed. The explosion is instantaneous">2100</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 105 / 90 / 75 / 60',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Graves" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Graves/LoL" title="Graves"><img alt="Graves" src="/wiki/images/Graves_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Graves/LoL" title="Graves/LoL">Graves</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">recoils</a></span> backward and fires an explosive shell in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through.',
      'Upon hitting an enemy champion or max range, the shell explodes to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> in a cone.',
    ],
    description: [
      {
        icon: '/wiki/images/Collateral Damage.png',
        description:
          'Active: Graves fires an explosive shell in the target direction that deals physical damage to enemies hit and causes him to  recoil 300 units in the opposite direction.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Graves</b> fires an explosive shell in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and causes him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">recoil</a></span> 300 units in the opposite direction.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Graves fires an explosive shell in the target direction that deals physical damage to enemies hit and causes him to  recoil 300 units in the opposite direction.',
            damagetype: 'Physical',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'fires an explosive shell in the target direction that deals physical damage to enemies hit and causes him to  recoil 300 units in the opposite direction.',
            pre: 'Graves fires an explosive shell in the target direction that deals physical damage to enemies hit and causes him to  recoil 300 units in the opposite direction.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '275 / 350 / 425 / 500 / 575 (+ 150% bonus AD)',
            valuesHTML:
              '275 / 350 / 425 / 500 / 575 <span style="color:orange; white-space:normal">(+&nbsp;150% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '275 / 350 / 425 / 500 / 575 (+ 150% bonus AD)',
            damagetype: 'Physical',
            values: [275, 350, 425, 500, 575],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '275 / 350 / 425 / 500 / 575',
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
          'Upon hitting an enemy  champion or reaching the end of its range, the shell explodes in a cone to deal 80% damage to additional enemies.',
        descriptionHTML:
          'Upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or reaching the end of its range, the shell explodes in a cone to deal 80% damage to additional enemies.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Upon hitting an enemy  champion or reaching the end of its range, the shell explodes in a cone to deal 80% damage to additional enemies.',
            damagetype: 'None',
            values: 8,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'damage to additional enemies.hitting an enemy  champion or reaching the end of its range, the shell explodes in a cone to deal 80',
            pre: 'Upon hitting an enemy  champion or reaching the end of its range, the shell explodes in a cone to deal 80% damage to additional enemies.',
          },
        ],
        leveling: [
          {
            name: 'Reduced Damage:',
            values: '220 / 280 / 340 / 400 / 460 (+ 120% bonus AD)',
            valuesHTML:
              '220 / 280 / 340 / 400 / 460 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '220 / 280 / 340 / 400 / 460 (+ 120% bonus AD)',
            damagetype: 'None',
            values: [220, 280, 340, 400, 460],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '220 / 280 / 340 / 400 / 460',
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
    ],
    targeting: 'Direction',
    affects: 'Enemies / Self',
    damagetype: 'Physical',
    spelleffects: 'Special',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to the target hit by the shell (including to non-champions struck before exploding<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>) and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to targets within the explosion cone.\n<ul><li>The projectile will still explode early if the champion hit by the shell is protected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li>\n<li>The explosion cone is anchored on the location of the shell missile when it collided with a champion, or otherwise its maximum cast range.</li>\n<li><i>Collateral Damage</i> is disabled while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> but not while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li><b>Graves</b> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> after the cast time if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
