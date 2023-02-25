import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Senna';

export default {
  'Basic Attack': {
    name: 'Basic Attack',
    display_name: 'Basic Attack',
    champion: 'Senna',
    skill: 'A',
    attack_range: '600',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Non-projectile">N/A</span>',
    blurb: [],
    description: [
      {
        icon: '/wiki/images/Basic_Attack.png',
        description:
          'Basic Attack: Senna blasts the target with her relic cannon that uses a  non-projectile beam, dealing 100% AD physical damage and applying  on-hit and on-attack effects.',
        descriptionHTML:
          '<a href="/wiki/Basic_Attack" class="mw-redirect" title="Basic Attack"><span class="template_sbc"><b>Basic Attack:</b></span></a> <b>Senna</b> blasts the target with her relic cannon that uses a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span> beam, dealing <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Basic Attack:',
            raw: 'Senna blasts the target with her relic cannon that uses a  non-projectile beam, dealing 100% AD physical damage and applying  on-hit and on-attack effects.',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'AD physical damage and applying  on-hit and on-attack effects.blasts the target with her relic cannon that uses a  non-projectile beam, dealing 100',
            pre: 'Senna blasts the target with her relic cannon that uses a  non-projectile beam, dealing 100% AD physical damage and applying  on-hit and on-attack effects.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Senna's basic attacks can  critically strike, but they deal only 「 (160.125% +  32.025%) AD physical damage. 」「 91.5% of the  critical damage champions usually have. 」",
        descriptionHTML:
          '<b>Senna\'s</b> basic attacks can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, but they deal only <span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(160.<small>125</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="32.025%"><img alt="32.025%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">32.<small>025</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;91.<small>5</small>% of the <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span> champions usually have.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Senna's basic attacks can  critically strike, but they deal only 「 (160.125% +  32.025%) AD physical damage. 」「 91.5% of the  critical damage champions usually have. 」",
            damagetype: 'Physical',
            values: 0,
            units: 'total_ad',
            unitsText:
              'AD physical damage. 」「 91.5% of the  critical damage champions usually have. 」',
            pre: "Senna's basic attacks can  critically strike, but they deal only 「",
            post: 'AD physical damage. 」「 91.5% of the  critical damage champions usually have. 」',
            children: [
              {
                values: 160.125,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  32.025',
                pre: '160.125% +  32.025%',
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
          'Senna has an attack ratio of 0.4, meaning she only gains「 + 0.4 attack speed per  100% bonus attack speed. 」「 64% of the attack speed she would gain if her attack speed ratio was the same as her base attack speed. 」',
        descriptionHTML:
          '<b>Senna</b> has an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack ratio"><a href="/wiki/Attack_speed" title="Attack speed">attack ratio</a></span> of 0.<small>4</small>, meaning she only gains<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;+ 0.<small>4</small> <span style="color:orangered; white-space:normal">attack speed</span> per <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">100% <b>bonus</b> attack speed</span></span>.&nbsp;」</span><span class="flipText2">「&nbsp;64% of the <span style="color:orangered; white-space:normal">attack speed</span> she would gain if her attack speed ratio was the same as her base attack speed.&nbsp;」</span></span>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Additionally, Senna's base attack windup is reduced「 to 31.25% − 21.875% (based on level), 」「 by 0% − 30% (based on level), 」but is only reduced by 60% of the expected value given attack speed bonuses.",
        descriptionHTML:
          'Additionally, <b>Senna\'s</b> base <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack windup</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="((0.5)+((0.35)-(0.5))/(times-1)*(x-1))/(1/0.625)*100" data-bot_values="31.25;30.699;30.147;29.596;29.044;28.493;27.941;27.39;26.838;26.287;25.735;25.184;24.632;24.081;23.529;22.978;22.426;21.875" data-top_values="" data-bot_key="%">31.<small>25</small>% − 21.<small>875</small>% (based on level)</span>,&nbsp;」</span><span class="flipText2">「&nbsp;by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100-((0.5)+((0.35)-(0.5))/(times-1)*(x-1))/0.5*100" data-bot_values="0;1.76;3.53;5.29;7.06;8.82;10.59;12.35;14.12;15.88;17.65;19.41;21.18;22.94;24.71;26.47;28.24;30" data-top_values="" data-bot_key="%">0% − 30% (based on level)</span>,&nbsp;」</span></span>but is only reduced by 60% of the expected value given attack speed bonuses.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Additionally, Senna's base attack windup is reduced「 to 31.25% − 21.875% (based on level), 」「 by 0% − 30% (based on level), 」but is only reduced by 60% of the expected value given attack speed bonuses.",
            damagetype: 'None',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: ', 」「 by 0% − 30%',
            pre: "Additionally, Senna's base attack windup is reduced「 to 31.25% − 21.875%",
            post: ', 」「 by 0% − 30%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Attack',
    projectile: 'False',
    notes:
      '* At level 18, only with the per level <b>bonus</b> attack speed, <b>Senna</b> will have <span style="color:orangered; white-space:normal">0.<small>897</small> attack speed</span>, and will take <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.28632106343723 seconds, but rounded up to the next game tick.">0.<small>297</small> seconds</span> to perform an attack compared to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span> at level 1.',
  },
  Absolution: {
    name: 'Absolution',
    display_name: 'Absolution',
    champion: 'Senna',
    skill: 'I',
    image: {
      full: 'Senna_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Mist Wraith spawn area">2000</span>',
    ontargetcdstatic:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="6;5;4" data-top_values="1;6;11">6 / 5 / 4 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate - Weakened Soul</b></span>: <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL" title="Senna\'s"><img alt="Senna\'s" src="/wiki/images/Senna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL" title="Senna/LoL">Senna\'s</a></span></span> basic attacks and damaging abilities against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Mist</i> for a few seconds. Subsequent hits collect the <i>Mist</i>, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>current</b> health</span>. The target cannot gain <i>Mist</i> for a few seconds after being collected.',
      'Enemies that die near <b>Senna</b> may spawn a <i>Mist Wrath</i> from their corpse, which lasts for a period. She can kill <i>Mist Wraiths</i> to gain <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span> and <i>Mist</i> stacks.',
      '<span class="template_sbc"><b>Innate - Relic Cannon</b></span>: <b>Senna\'s</b> basic attacks deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and briefly grant her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> based on the <span style="color: #F5EE99; white-space:normal">target\'s movement speed</span>.',
      '<span class="template_sbc"><b>Mist</b></span>: For each stack, <b>Senna</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>. For every few stacks, she also gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> and <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span>, or <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> if she has max critical strike chance.',
    ],
    description: [
      {
        icon: '/wiki/images/Absolution.png',
        description:
          "Innate - Weakened Soul: Senna's basic attacks  on-hit and damaging abilities on enemy champions apply a stack of Mist for 4 seconds, modified to 0.75 seconds if Senna starts winding up a basic attack on them. Subsequent hits will collect Mist and deal bonus physical damage equal to 1% − 10% (based on level) of target's current health, rendering the target immune to further Mist applications for a few seconds. This damage applies  life steal at 100% effectiveness.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Weakened Soul</b></span>: <b>Senna\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> on enemy champions apply a <a href="/wiki/Stack" title="Stack">stack</a> of <span style="color: #26DFB0; white-space:normal">Mist</span> for 4 seconds, modified to 0.<small>75</small> seconds if <b>Senna</b> starts winding up a basic attack on them. Subsequent hits will collect <span style="color: #26DFB0; white-space:normal">Mist</span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;" data-finish="10;" data-bot_values="1;2;3;4;5;6;7;8;9;10" data-top_values="" data-bot_key="%">1% − 10% (based on level)</span> of target\'s <b>current</b> health</span>, rendering the target immune to further <span style="color: #26DFB0; white-space:normal">Mist</span> applications for a few seconds. This damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate - Weakened Soul:',
            raw: "Senna's basic attacks  on-hit and damaging abilities on enemy champions apply a stack of Mist for 4 seconds, modified to 0.75 seconds if Senna starts winding up a basic attack on them",
            min: 0,
            max: 10,
            description:
              "Senna's basic attacks  on-hit and damaging abilities on enemy champions apply a stack of Mist for 4 seconds, modified to 0.75 seconds if Senna starts winding up a basic attack on them",
            values: 4,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit and damaging abilities on enemy champions apply a stack of Mist for 4 seconds, modified to 0.75 seconds if Senna starts winding up a basic attack on them',
            pre: "Senna's basic attacks  on-hit and damaging abilities on enemy champions apply a stack of Mist for 4 seconds, modified to 0.75 seconds if Senna starts winding up a basic attack on them",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "Subsequent hits will collect Mist and deal bonus physical damage equal to 1% − 10% (based on level) of target's current health, rendering the target immune to further Mist applications for a few seconds",
            healType: 'PhysicalVamp',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ap',
            unitsText:
              "of target's current health, rendering the target immune to further Mist applications for a few seconds",
            pre: 'Subsequent hits will collect Mist and deal bonus physical damage equal to 1% − 10%',
            post: "of target's current health, rendering the target immune to further Mist applications for a few seconds",
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'This damage applies  life steal at 100% effectiveness.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText: 'effectiveness.damage applies  life steal at 100',
            pre: 'This damage applies  life steal at 100% effectiveness.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/MistWraithSquare.png',
        description:
          'Enemies that die near Senna may spawn a Mist Wraith from their corpse. A Mist Wraith lasts 8 seconds and Senna can basic attack or hit it with  Piercing Darkness or  Dawning Shadow to kill them instantly, granting her  8 and collecting their Mist.\nEnemy  champions and large  monsters will spawn a Mist Wraith.\nEpic  monsters will spawn 2 Mist Wraiths.\n Minions and lesser  monsters that Senna kills have a 8.3% chance to spawn a Mist Wraith.\nLarge  minions that Senna does not kill will spawn a Mist Wraith, while lesser  minions and lesser  monsters that Senna does not kill have a 28% chance to spawn.',
        descriptionHTML:
          'Enemies that die near <b>Senna</b> may spawn a <i>Mist Wraith</i> from their corpse. A <i>Mist Wraith</i> lasts 8 seconds and <b>Senna</b> can basic attack or hit it with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Piercing Darkness" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Piercing_Darkness" title="Piercing Darkness"><img alt="Piercing Darkness" src="/wiki/images/Senna_Piercing_Darkness.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Piercing_Darkness" title="Senna/LoL">Piercing Darkness</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Dawning Shadow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Dawning_Shadow" title="Dawning Shadow"><img alt="Dawning Shadow" src="/wiki/images/Senna_Dawning_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Dawning_Shadow" title="Senna/LoL">Dawning Shadow</a></span></span></i> to kill them instantly, granting her <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="8 Gold"><img alt="8 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">8</span></span> and collecting their <span style="color: #26DFB0; white-space:normal">Mist</span>.\n<ul><li>Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> will spawn a <i>Mist Wraith</i>.</li>\n<li>Epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> will spawn 2 <i>Mist Wraiths</i>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> and lesser <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> that <b>Senna</b> kills have a 8.<small><span style="text-decoration: overline;">3</span></small>% chance to spawn a <i>Mist Wraith</i>.</li>\n<li>Large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> that <b>Senna</b> does not kill will spawn a <i>Mist Wraith</i>, while lesser <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and lesser <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> that <b>Senna</b> does not kill have a 28% chance to spawn.</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'A Mist Wraith lasts 8 seconds and Senna can basic attack or hit it with  Piercing Darkness or  Dawning Shadow to kill them instantly, granting her  8 and collecting their Mist.\nEnemy  champions and large  monsters will spawn a Mist Wraith.\nEpic  monsters will spawn 2 Mist Wraiths.\n Minions and lesser  monsters that Senna kills have a 8.3% chance to spawn a Mist Wraith.\nLarge  minions that Senna does not kill will spawn a Mist Wraith, while lesser  minions and lesser  monsters that Senna does not kill have a 28% chance to spawn.',
            increasedStat: 'total_ad',
            values: 8,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'chance to spawn a Mist Wraith.\nLarge  minions that Senna does not kill will spawn a Mist Wraith, while lesser  minions and lesser  monsters that Senna does not kill have a 28Mist Wraith lasts 8 seconds and Senna can basic attack or hit it with  Piercing Darkness or  Dawning Shadow to kill them instantly, granting her  8 and collecting their Mist.',
            pre: 'A Mist Wraith lasts 8 seconds and Senna can basic attack or hit it with  Piercing Darkness or  Dawning Shadow to kill them instantly, granting her  8 and collecting their Mist.\nEnemy  champions and large  monsters will spawn a Mist Wraith.\nEpic  monsters will spawn 2 Mist Wraiths.\n Minions and lesser  monsters that Senna kills have a 8.3% chance to spawn a Mist Wraith.\nLarge  minions that Senna does not kill will spawn a Mist Wraith, while lesser  minions and lesser  monsters that Senna does not kill have a 28% chance to spawn.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Mist: For each stack of Mist, Senna gains  0.75 bonus attack damage. For every 20 stacks, she also gains  20 bonus attack range and  10% critical strike chance, capped at 100% critical strike chance. Additionally, 35% of the generated excess critical strike chance is converted into  life steal.',
        descriptionHTML:
          '<span class="template_sbc"><b>Mist</b></span>: For each stack of <span style="color: #26DFB0; white-space:normal">Mist</span>, <b>Senna</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">0.<small>75</small> <b>bonus</b> attack damage</span></span>. For every 20 stacks, she also gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;20 <b>bonus</b> attack range</span> and <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #E56013; white-space:normal">10% critical strike chance</span></span>, capped at <span style="color: #E56013; white-space:normal">100% critical strike chance</span>. Additionally, 35% of the generated excess <span style="color: #E56013; white-space:normal">critical strike chance</span> is converted into <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'For every 20 stacks, she also gains  20 bonus attack range and  10% critical strike chance, capped at 100% critical strike chance',
            min: 0,
            max: 10,
            description:
              'For every 20 stacks, she also gains  20 bonus attack range and  10% critical strike chance, capped at 100% critical strike chance',
            values: 2,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'critical strike chance, capped at 100every 20 stacks, she also gains  20 bonus attack range and  10',
            pre: 'For every 20 stacks, she also gains  20 bonus attack range and  10% critical strike chance, capped at 100% critical strike chance',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'Additionally, 35% of the generated excess critical strike chance is converted into  life steal.',
            damagetype: 'None',
            values: 3,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText:
              'of the generated excess critical strike chance is converted into  life steal.35',
            pre: 'Additionally, 35% of the generated excess critical strike chance is converted into  life steal.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Absolution_2.png',
        description:
          "Innate - Relic Cannon: Senna's basic attacks  on-hit deal 20% AD bonus physical damage and grant her 10 / 15 / 20% (based on level) of the target's movement speed as  bonus movement speed for 0.5 seconds. This damage applies  life steal at 100% effectiveness.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Relic Cannon</b></span>: <b>Senna\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> deal <span style="color:orange; white-space:normal">20% AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and grant her <span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="10;15;20" data-top_values="1;6;9" data-bot_key="%">10 / 15 / 20% (based on level)</span> of the target\'s movement speed</span> as <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 0.<small>5</small> seconds. This damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Relic Cannon:',
            raw: "Senna's basic attacks  on-hit deal 20% AD bonus physical damage and grant her 10 / 15 / 20% (based on level) of the target's movement speed as  bonus movement speed for 0.5 seconds",
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              "of the target's movement speed as  bonus movement speed for 0.5 seconds",
            pre: "Senna's basic attacks  on-hit deal 20% AD bonus physical damage and grant her 10 / 15 / 20%",
            post: "of the target's movement speed as  bonus movement speed for 0.5 seconds",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'This damage applies  life steal at 100% effectiveness.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText: 'effectiveness.damage applies  life steal at 100',
            pre: 'This damage applies  life steal at 100% effectiveness.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    spellshield: false,
    notes:
      '* Despite <b>Senna</b> dealing 1 damage to <i>Mist Wraiths</i>, attacking them will calculate the <span style="color:orange; white-space:normal">attack\'s damage</span> (including <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers) and any <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effects for the purposes of <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drain"><a href="/wiki/Vamp" title="Vamp"><img alt="Ravenous Hunter rune.png" src="/wiki/images/Ravenous_Hunter_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Vamp" title="Vamp">drain</a></span> effects.\n<ul><li><i>Relic Cannon</i> is only applied if the attack deals more than 0 damage.\n<ul><li>Hence, it is not applied if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> or <b>Senna\'s</b> basic attack\'s <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">attack damage</span></span> is reduced to 0 or below.</li></ul></li>\n<li>Dealing 0 damage is valid for marking and collecting <span style="color: #26DFB0; white-space:normal">Mist</span> from champions, but dealing no damage at all is not.\n<ul><li>Hence, <b>Senna</b> can mark and collect from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> enemies.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">Dodge</a></span> prevents marking and collecting a <span style="color: #26DFB0; white-space:normal">Mist</span> via <b>Senna\'s</b> basic attacks and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Piercing Darkness" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Piercing_Darkness" title="Piercing Darkness"><img alt="Piercing Darkness" src="/wiki/images/Senna_Piercing_Darkness.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Piercing_Darkness" title="Senna/LoL">Piercing Darkness</a></span></span>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <span style="color: #26DFB0; white-space:normal">Mist</span> interaction with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>.</li></ul></li>\n<li><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nunu &amp; Willump" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nunu_%26_Willump/LoL" title="Nunu &amp; Willump"><img alt="Nunu &amp; Willump" src="/wiki/images/Nunu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nunu_%26_Willump/LoL" class="mw-redirect" title="Nunu &amp; Willump/LoL">Nunu &amp; Willump</a></span></span> spawn a wraith each.</li>\n<li>Enemies will not see newly spawned wraiths while <b>Senna</b> is not visible.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> executed by allies with <a href="/wiki/Named_item_effect#Spoils_of_War" title="Named item effect">Spoils of War</a> have a 4.<small>166</small>% chance to spawn wraiths.</li>\n<li>A wraith can be hit by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-ability="Cosmic Binding" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL#Cosmic_Binding" title="Cosmic Binding"><img alt="Cosmic Binding" src="/wiki/images/Bard_Cosmic_Binding.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL#Cosmic_Binding" title="Bard/LoL">Cosmic Binding</a></span></span> and it will interact with it the same way minions or monsters interact with Cosmic Binding but it will not take damage.</li>\n<li><i>Mist Wraith</i> has a spawn animation, but is targetable immediately.</li>\n<li><i>Mist Wraith</i> grants a small amount of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around itself.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> secondary bolts will ignore <i>Mist Wraiths</i>.</li>\n<li>Attacking a <i>Mist Wraith</i> will not consume energized stacks, but you can benefit from the range increase of <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span> when collecting wraiths.</li>\n<li><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Due to lack of available metric">Excluding</span> the range increase and the bonus shielding on <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Dawning Shadow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Dawning_Shadow" title="Dawning Shadow"><img alt="Dawning Shadow" src="/wiki/images/Senna_Dawning_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Dawning_Shadow" title="Senna/LoL">Dawning Shadow</a></span></span>, one stack of <span style="color: #26DFB0; white-space:normal">Mist</span> is worth approximately <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="44.55 Gold"><img alt="44.55 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">44.<small></small><small>55</small></span></span> (<span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="+8 Gold"><img alt="+8 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">+8</span></span> from <i>Mist Wraith</i> pickup), <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="32.8125 Gold"><img alt="32.8125 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">32.<small></small><small>8125</small></span></span> if the critical chance is converted to life steal. The bonuses have a gross value of <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="46.25 Gold"><img alt="46.25 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">46.<small></small><small>25</small></span></span> (<span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="32.8125 Gold"><img alt="32.8125 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">32.<small></small><small>8125</small></span></span> with life steal).\n<ul><li><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">0.<small>75</small> AD</span></span> is worth <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="26.25‬ Gold"><img alt="26.25‬ Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">26.<small>25</small>‬</span></span>.</li>\n<li><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small>%</span> <a href="/wiki/Critical_strike#Critical_strike_chance" title="Critical strike">critical strike chance</a> is worth <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="20 Gold"><img alt="20 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">20</span></span>. <i>Absolution</i> reduces its efficiency by 8.<small>5</small>%, making the value <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="18.3 Gold"><img alt="18.3 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">18.<small></small><small>3</small></span></span>.\n<ul><li><span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>175</small>%</span> <a href="/wiki/Life_steal" title="Life steal">life steal</a> is worth ≈<span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="6.5625 Gold"><img alt="6.5625 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">6.<small></small><small>5625</small></span></span>.</li></ul></li></ul></li>\n<li>The bonus on-hit damage applies an additional stack of <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Cleaver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Cleaver" title="Black Cleaver\'s"><img alt="Black Cleaver\'s" src="/wiki/images/Black_Cleaver_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Cleaver" title="Black Cleaver">Black Cleaver\'s</a></span></span> <a href="/wiki/Named_item_effect#Carve" title="Named item effect">Carve</a> to offset <b>Senna\'s</b> low attack speed.</li></ul>',
    video: 'Senna - Passive',
  },
  'Piercing Darkness': {
    name: 'Piercing Darkness',
    display_name: 'Piercing Darkness',
    champion: 'Senna',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SennaQ.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1300',
    target_range: '600 - 1100',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage">100</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Heal">280</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Based on level, further reduced by attack speed"><span style="color:orangered; white-space:normal">0.<small>4</small>-0.<small>25</small></span></span>',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'Mana',
    cooldown: '15',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL" title="Senna"><img alt="Senna" src="/wiki/images/Senna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL" title="Senna/LoL">Senna</a></span></span> fires a spectral laser toward the target unit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself and allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit while dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit for a short time.',
      '<i>Piercing Darkness\' </i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
      '<i>Piercing Darkness</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects.',
    ],
    description: [
      {
        icon: '/wiki/images/Piercing_Darkness.png',
        description:
          'Active: Senna fires a spectral laser in the direction of the target unit,  healing herself and allied  champions hit, and dealing physical damage to enemies hit in a thinner line. Enemies hit are  slowed by 15% (+ 10% per 100 bonus AD) (+ 6% per 100 AP) for a duration. The damage against champions applies  life steal at 100% effectiveness.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Senna</b> fires a spectral laser in the direction of the target unit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself and allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit, and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit in a thinner line. Enemies hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 15% <span style="color:orange; white-space:normal">(+&nbsp;10% per 100 <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% per 100 AP)</span> for a duration. The damage against champions <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies hit are  slowed by 15% (+ 10% per 100 bonus AD) (+ 6% per 100 AP) for a duration',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'for a duration',
            pre: 'Enemies hit are  slowed by 15%',
            post: 'for a duration',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 10% per 100 bonus AD',
              },
              {
                values: 6,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 6% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'The damage against champions applies  life steal at 100% effectiveness.',
            increasedStat: 'lifesteal',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'effectiveness.damage against champions applies  life steal at 100',
            pre: 'The damage against champions applies  life steal at 100% effectiveness.',
          },
        ],
        leveling: [
          {
            name: 'Healing:',
            values:
              '40 / 55 / 70 / 85 / 100 (+ 30% bonus AD) (+ 40% AP) (+ 1.6 per 1 Lethality)',
            valuesHTML:
              '40 / 55 / 70 / 85 / 100 <span style="color:orange; white-space:normal">(+&nbsp;30% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span> <span style="color:tomato; white-space:normal">(+&nbsp;1.<small>6</small> per 1 Lethality)</span>',
          },
          {
            name: 'Physical Damage:',
            values: '30 / 65 / 100 / 135 / 170 (+ 50% bonus AD)',
            valuesHTML:
              '30 / 65 / 100 / 135 / 170 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Slow Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Healing:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 30% bonus AD) (+ 40% AP) (+ 1.6 per 1 Lethality)',
            healType: 'BonusHealth',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
              },
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: 1.6,
                user: 'none',
                units: '',
                unitsText: 'per 1 Lethality',
                pre: '+ 1.6 per 1 Lethality',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '30 / 65 / 100 / 135 / 170 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [30, 65, 100, 135, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 65 / 100 / 135 / 170',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Upon being hit, enemy  turrets,  wards, jungle plants,  Mist Wraiths and any other attack-interactive units are considered basic attacked once, while  champions and  turrets* are applied  on-hit effects at 100% effectiveness.',
        descriptionHTML:
          'Upon being hit, enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a>, <a href="/wiki/Senna#Absolution" title="Senna#Absolution"><img alt="MistWraithSquare.png" src="/wiki/images/MistWraithSquare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Senna#Absolution" title="Senna">Mist Wraiths</a> and <a href="/wiki/Champion_summoned_units#Targetable" title="Champion summoned units">any other attack-interactive units</a> are <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Piercing Darkness doesn\'t actually apply basic damage"><i>considered</i> basic attacked once</span>, while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Considers all turret-specific rules">*</span> are applied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Upon being hit, enemy  turrets,  wards, jungle plants,  Mist Wraiths and any other attack-interactive units are considered basic attacked once, while  champions and  turrets* are applied  on-hit effects at 100% effectiveness.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness.being hit, enemy  turrets,  wards, jungle plants,  Mist Wraiths and any other attack-interactive units are considered basic attacked once, while  champions and  turrets* are applied  on-hit effects at 100',
            pre: 'Upon being hit, enemy  turrets,  wards, jungle plants,  Mist Wraiths and any other attack-interactive units are considered basic attacked once, while  champions and  turrets* are applied  on-hit effects at 100% effectiveness.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Piercing Darkness'   current cooldown is reduced by 1 second  on-hit.",
        descriptionHTML:
          '<i>Piercing Darkness\' </i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 1 second <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Piercing Darkness'   current cooldown is reduced by 1 second  on-hit.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "Darkness'   current cooldown is reduced by 1 second  on-hit.",
            pre: "Piercing Darkness'   current cooldown is reduced by 1 second  on-hit.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Allies, Enemies, Turrets, Wards',
    damagetype: 'Physical',
    spelleffects: 'AoE',
    onhiteffects: 'true',
    spellshield: 'Special',
    projectile: 'False',
    notes:
      '* <i>Piercing Darkness</i> also applies most <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects to one enemy champion struck, and ocassionally to two.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li><ul><li><span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span> will spend a stack on hitting a champion with <i>Piercing Darkness</i> but only if <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span> was activated first by an auto-attack.</li></ul></li>\n<li><i>Piercing Darkness\' </i>cast time is always 80% of the caster\'s attack windup time.\n<ul><li>Because <b>Senna\'s</b> windup percent scales down with levels but her windup time also only scales with 60% attack speed, the precise numbers get complicated quickly.</li>\n<li>At base attack speed and level 1, <b>Senna\'s</b> attack windup is 0.<small>5</small> seconds.</li>\n<li>Reducing <b>Senna\'s</b> attack speed via <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">attack speed reductions</a></span> also increases <i>Piercing Darkness\' </i>cast time by 60% of the fraction.</li>\n<li><i>Piercing Darkness\' </i>cast time reduction per level via her own windup-per-level-reduction mirrors <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL" title="Lucian\'s"><img alt="Lucian\'s" src="/wiki/images/Lucian_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL" title="Lucian/LoL">Lucian\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Piercing Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Piercing_Light" title="Piercing Light\'s"><img alt="Piercing Light\'s" src="/wiki/images/Lucian_Piercing_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Piercing_Light" title="Lucian/LoL">Piercing Light\'s</a></span></span></span> cast time values.</li></ul></li></ul>\n<ul><li><b>Senna</b> can generally target anything that is not either explicitly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> or herself.\n<ul><li>Valid targets include anything that can be targeted by a basic attack from someone.</li></ul></li>\n<li><i>Piercing Darkness</i> will attempt to lead the target if it is moving but does not adjust further during cast time (enemies can dodge the laser if they change their position by a sufficient amount during the cast time).\n<ul><li>It leads by (up-to?) 80 units.</li></ul></li>\n<li>On-hit effects are applied in order of struck units\' spawn IDs. This matters for effects that are consumed on-hit (e.g. <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Duskblade of Draktharr" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Duskblade_of_Draktharr" title="Duskblade of Draktharr"><img alt="Duskblade of Draktharr" src="/wiki/images/Duskblade_of_Draktharr_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Duskblade_of_Draktharr" title="Duskblade of Draktharr">Duskblade of Draktharr</a></span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span>), which are applied to the target with the lowest <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="among enemy champions, this would also be the enemy first pick in Blind Pick mode">Spawn ID</span>.\n<ul><li>"Spawn ID" is an unofficial abbreviation to describe the spawn order for all units at the beginning of games, below are some examples.</li>\n<li>If <b>Senna</b> targets an enemy champion but hits at least one more enemy champion simultaneously, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Press the Attack" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Press_the_Attack" title="Press the Attack\'s"><img alt="Press the Attack\'s" src="/wiki/images/Press_the_Attack_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Press_the_Attack" title="Press the Attack">Press the Attack\'s</a></span></span> first stack will be applied to that target. If no champion was targeted, it will default to the champion with the lowest Spawn ID out of the ones struck by the ability. Whether the effect stacks up on a champion or not when multiple enemy champions are stuck also depends on Spawn ID.</li>\n<li>If <i>Piercing Darkness</i> struck an enemy champion and turret simultaneously, with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span> fully charged, the passive effect will most likely proc on the turret since towers are often spawned before champions.</li></ul></li>\n<li>For on-attack effects, they are also applied in order of struck units\' spawn IDs. However, there are some specific on-attack effects that will apply to both the target of <i>Piercing Darkness</i> and the target with the lowest <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="among enemy champions, this would also be the enemy first pick in Blind Pick mode">Spawn ID</span> if the two unit is not identical. <sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="all under condition that the targeted enemy champion is not having lowest Spawn ID among all struck enemy champions">Confirmed cases</span>:\n<ul><li><a href="/wiki/Named_item_effect#Energized" title="Named item effect">Energized</a> effects are stacked 2 stacks</li>\n<li><a href="/wiki/Named_item_effect#Spectral_Waltz" title="Named item effect">Spectral Waltz</a> are granted 2 stacks</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span></li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not prevent on-hit effects from being applied.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Piercing Darkness</i> interaction with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li></ul>',
    video: 'Senna - Q',
  },
  'Last Embrace': {
    name: 'Last Embrace',
    display_name: 'Last Embrace',
    champion: 'Senna',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SennaW.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1300',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 280',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '1200',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL" title="Senna"><img alt="Senna" src="/wiki/images/Senna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL" title="Senna/LoL">Senna</a></span></span> throws a globule of Black Mist in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and sticks onto them.',
      'After a brief moment, the Black Mist spreads out from the target, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them and surrounding enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Last_Embrace.png',
        description:
          'Active: Senna throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and attaches to them for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Senna</b> throws a globule of Black Mist in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and attaches to them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Senna throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and attaches to them for 1 second.',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and attaches to them for 1 second.',
            pre: 'Senna throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and attaches to them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '70 / 115 / 160 / 205 / 250 (+ 70% bonus AD)',
            valuesHTML:
              '70 / 115 / 160 / 205 / 250 <span style="color:orange; white-space:normal">(+&nbsp;70% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 70% bonus AD)',
            damagetype: 'Physical',
            values: [70, 115, 160, 205, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 70% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After the duration or when the target dies, the Black Mist spreads out of the target,  rooting them and surrounding enemies for a few seconds.',
        descriptionHTML:
          'After the duration or when the target dies, the Black Mist spreads out of the target, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them and surrounding enemies for a few seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Root Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Last Embrace</i> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> the primary target if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Senna - W',
  },
  'Curse of the Black Mist': {
    name: 'Curse of the Black Mist',
    display_name: 'Curse of the Black Mist',
    champion: 'Senna',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SennaE.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: '400',
    cast_time: '1',
    cost: '70',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">26 / 24.<small>5</small> / 23 / 21.<small>5</small> / 20</span>',
    customlabel: 'Detection Radius',
    custominfo: '400',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL" title="Senna"><img alt="Senna" src="/wiki/images/Senna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL" title="Senna/LoL">Senna</a></span></span> creates an aura of mist and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span> for a few seconds. She will quickly regain camouflage after breaking stealth.',
      'Allied champions that enter the mist gain <i>Wraith Form</i> for the remaining duration. <b>Senna</b> and allies camouflaged by <i>Curse of the Black Mist</i> also gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
      '<img alt="Curse of the Black Mist 2.png" src="/wiki/images/Senna_Curse_of_the_Black_Mist_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <span class="template_sbc"><b>Wraith Form</b></span>: Gain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>. Enemies will have <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured vision"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">obscured vision</a></span> of camouflaged <i>Wraiths</i> moving outside the mist. <i>Wraiths</i> will quickly regain camouflage after breaking stealth.',
    ],
    description: [
      {
        icon: '/wiki/images/Curse_of_the_Black_Mist.png',
        description:
          'Active: Senna surrounds herself with an aura of mist and gains  camouflage for a duration. If Senna breaks the camouflage, she regains it after 1.75 seconds without performing actions that break stealth.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Senna</b> surrounds herself with an <a href="/wiki/Aura" title="Aura">aura</a> of mist and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span> for a duration. If <b>Senna</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Attacking, casting abilities, etc">breaks the camouflage</span>, she regains it after 1.<small>75</small> seconds without performing actions that <a href="/wiki/Stealth#Breaking_stealth" title="Stealth">break stealth</a>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If Senna breaks the camouflage, she regains it after 1.75 seconds without performing actions that break stealth.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Senna breaks the camouflage, she regains it after 1.75 seconds without performing actions that break stealth.',
            pre: 'If Senna breaks the camouflage, she regains it after 1.75 seconds without performing actions that break stealth.',
          },
        ],
        leveling: [
          {
            name: 'Effect Duration:',
            values: '6 / 6.5 / 7 / 7.5 / 8',
            valuesHTML: '6 / 6.<small>5</small> / 7 / 7.<small>5</small> / 8',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Effect Duration:',
            raw: '6 / 6.5 / 7 / 7.5 / 8',
            values: [6, 6.5, 7, 7.5, 8],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 6.5 / 7 / 7.5 / 8',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Allied champions who enter the mist gain Wraith Form for a duration equal to the remaining duration.',
        descriptionHTML:
          'Allied champions who enter the mist gain <i>Wraith Form</i> for a duration equal to the remaining duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Curse_of_the_Black_Mist_2.png',
        description:
          "Wraith Form: Gain  camouflage. Enemies will have  obscured vision of camouflaged Wraiths moving outside of the mist. Wraith Form can be regained if lost by breaking the camouflage after 1.75 seconds without performing actions that break stealth. Wraith Form ends immediately upon Senna's  death.",
        descriptionHTML:
          '<span class="template_sbc"><b>Wraith Form:</b></span> Gain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>. Enemies will have <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured vision"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">obscured vision</a></span> of camouflaged <i>Wraiths</i> moving outside of the mist. <i>Wraith Form</i> can be regained if lost by breaking the camouflage after 1.<small>75</small> seconds without performing actions that break stealth. <i>Wraith Form</i> ends immediately upon <b>Senna\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">death</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Wraith Form can be regained if lost by breaking the camouflage after 1.75 seconds without performing actions that break stealth',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Form can be regained if lost by breaking the camouflage after 1.75 seconds without performing actions that break stealth',
            pre: 'Wraith Form can be regained if lost by breaking the camouflage after 1.75 seconds without performing actions that break stealth',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Senna and allies camouflaged by Curse of the Black Mist also gain  20% (+ 5% per 100 AP) bonus movement speed.',
        descriptionHTML:
          '<b>Senna</b> and allies camouflaged by <i>Curse of the Black Mist</i> also gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20%</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Senna and allies camouflaged by Curse of the Black Mist also gain  20% (+ 5% per 100 AP) bonus movement speed.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed.',
            pre: 'Senna and allies camouflaged by Curse of the Black Mist also gain  20%',
            post: 'bonus movement speed.',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 5% per 100 AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <b>Senna</b> can move while casting.\n<ul><li>Allies affected by the <i>Curse of the Blast Mist</i> aura receive a buff called <i>Cloak of Mist</i>.</li>\n<li>Obscured units appear as <i>Wraiths</i>, hence the name. The wraith model does not distinguish which champion is obscured.\n<ul><li>On the <a href="/wiki/Map_(League_of_Legends)" title="Map (League of Legends)">mini-map</a>, obscured champions will be displayed as wraith icons instead of champion icons to the enemy team.</li></ul></li>\n<li>In-game, the \'Cloak of Mist\' buff grants camouflage and the \'Wraith Form\' buff obscures the unit and grants movement speed. However, \'Cloak of Mist\' has the unspecified effect of negating the obscuring effects of \'Wraith Form\' (i.e. the unit is not a wraith while inside the mist); the unit has the bonus movement speed even when they are not a wraith (e.g. inside the mist or an enemy is nearby); and \'Wraith Form\' also grants the functionality of camouflage (i.e. the unit is treated as a camouflaged unit with regards to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">True Sight</a></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Control Ward" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Control_Ward" title="Control Wards"><img alt="Control Wards" src="/wiki/images/Control_Ward_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Control_Ward" title="Control Ward">Control Wards</a></span></span>, and enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>).\n<ul><li>Given this overly complex interaction between the two buffs granted as well as the overlapping effects, it is easier to describe the effects as a single buff that is modified in specific circumstances rather than trying to establish a new game mechanic.</li>\n<li><b>Senna</b> likewise has her aura buff and the \'Wraith Form\' buff, but her \'Wraith Form\' does not share gameplay functionality with other allies benefiting from Wraith Form. For <b>Senna</b>, the appearance of being a wraith is a form-swap while camouflaged (similar to <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL" title="Evelynn\'s"><img alt="Evelynn\'s" src="/wiki/images/Evelynn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL" title="Evelynn/LoL">Evelynn\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Demon Shade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Demon Shade"><img alt="Demon Shade" src="/wiki/images/Evelynn_Demon_Shade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Evelynn/LoL">Demon Shade</a></span></span></span>). <b>Senna</b> will remain in her wraith form when she is detected so long as the camouflage effect isn\'t broken, and her wraith\'s appearance is very distinct from other wraiths.</li></ul></li>\n<li>Allied champions who enter the mist and have <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealth</a></span> of their own will still gain the <i>Wraith Form</i> buff but they will not grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured vision"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">obscured vision</a></span> of themselves to the enemy while out of the mist nor will they appear as a <i>Wraith</i>.\n<ul><li>Allies who have their own <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span> and also have <i>Wraith Form</i> will be revealed to enemies from their stealth\'s detection range, not <i>Wraith Form\'s</i>.</li></ul></li>\n<li><i>Curse of the Black Mist</i> will not activate if <b>Senna</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> during the cast time.</li>\n<li><i>Wraith Form</i> will not be granted to allies that are in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> or are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>. It will be granted to allies even if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Senna_Original_E_7.ogg   "Shadows catch the fallen."',
    video: 'Senna - E',
  },
  'Dawning Shadow': {
    name: 'Dawning Shadow',
    display_name: 'Dawning Shadow',
    champion: 'Senna',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SennaR.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: 'Global',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Central beam">320</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Wide beam">2400</span>',
    speed: '20000',
    cast_time: '1',
    cost: '100',
    costtype: 'Mana',
    cooldown: '140 / 130 / 120 / 110 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL" title="Senna"><img alt="Senna" src="/wiki/images/Senna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL" title="Senna/LoL">Senna</a></span></span> fires two waves of spectral light in the target direction. The center wave deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemy champions hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for a short time.',
      'The broad wave <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> <b>Senna</b> and allied champions hit for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Dawning_Shadow.png',
        description:
          'Active: Senna fires two waves of spectral light in the target direction, granting  sight of the area briefly along the path. The center wave deals physical damage to enemy  champions hit and  reveals them for 3 seconds. It also collects  Mist Wraiths it hits.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Senna</b> fires two waves of spectral light in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area briefly along the path. The center wave deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for 3 seconds. It also collects <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Absolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Absolution" title="Mist Wraiths"><img alt="Mist Wraiths" src="/wiki/images/Senna_Absolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Absolution" title="Senna/LoL">Mist Wraiths</a></span></span></i> it hits.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The center wave deals physical damage to enemy  champions hit and  reveals them for 3 seconds',
            damagetype: 'Physical',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'center wave deals physical damage to enemy  champions hit and  reveals them for 3 seconds',
            pre: 'The center wave deals physical damage to enemy  champions hit and  reveals them for 3 seconds',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '250 / 325 / 400 / 475 / 550 (+ 115% bonus AD) (+ 70% AP)',
            valuesHTML:
              '250 / 325 / 400 / 475 / 550 <span style="color:orange; white-space:normal">(+&nbsp;115% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '250 / 325 / 400 / 475 / 550 (+ 115% bonus AD) (+ 70% AP)',
            damagetype: 'Physical',
            values: [250, 325, 400, 475, 550],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 325 / 400 / 475 / 550',
            children: [
              {
                values: 115,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 115% bonus AD',
              },
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
        icon: '/wiki/images/Dawning_Shadow_2.png',
        description:
          'The broad wave grants a  shield to Senna and allied champions hit for 3 seconds.',
        descriptionHTML:
          'The broad wave grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to <b>Senna</b> and allied champions hit for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: 'The broad wave grants a  shield to Senna and allied champions hit for 3 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 3,
            units: 'total_ad',
            unitsText:
              'broad wave grants a  shield to Senna and allied champions hit for 3 seconds.',
            pre: 'The broad wave grants a  shield to Senna and allied champions hit for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values:
              '100 / 125 / 150 / 175 / 200 (+ 40% AP)(+ 1.5 per  Mist collected)',
            valuesHTML:
              '100 / 125 / 150 / 175 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span><br><span style="color: #26DFB0; white-space:normal">(+&nbsp;1.<small>5</small> per <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Absolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Absolution" title="Mist"><img alt="Mist" src="/wiki/images/Senna_Absolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Absolution" title="Senna/LoL">Mist</a></span></span> collected)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 40% AP)(+ 1.5 per  Mist collected)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: 1.5,
                user: 'none',
                units: '',
                unitsText: 'per  Mist collected',
                pre: '+ 1.5 per  Mist collected',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Allies / Enemies',
    damagetype: 'physical',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><b>Senna</b> reveals herself during the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Senna_Original_R_3.ogg   "No shadow without light!"',
    video: 'Senna - R',
  },
} satisfies { [skillName in string]: SkillData };
