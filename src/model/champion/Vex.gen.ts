import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Vex';

export default {
  "Doom 'n Gloom": {
    name: "Doom 'n Gloom",
    display_name: "Doom 'n Gloom",
    champion: 'Vex',
    skill: 'I',
    image: {
      full: 'Icons_Vex_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash and blink detection radius">1600</span>',
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="25;22;19;16" data-top_values="1;6;11;16">25 / 22 / 19 / 16 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive - Doom:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL" title="Vex"><img alt="Vex" src="/wiki/images/Vex_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL" title="Vex/LoL">Vex</a></span></span> empowers her next basic ability to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knock down</a></span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flee"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fear</a></span> enemies hit.',
      '<span class="template_sbc"><b>Innate - Gloom:</b></span> Nearby enemies that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> become marked with <i>Gloom</i> for a few seconds. <b>Vex\'s</b> next basic attack or basic ability hit will consume the mark to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> <i>Doom\'s</i> cooldown.<br><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-ability="Looming Darkness" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL#Looming_Darkness" title="Looming Darkness"><img alt="Looming Darkness" src="/wiki/images/Vex_Looming_Darkness.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL#Looming_Darkness" title="Vex/LoL">Looming Darkness</a></span></span></i> will also inflict <i>Gloom</i>, but cannot detonate it.',
    ],
    description: [
      {
        description:
          "Passive - Doom: Periodically, Vex empowers her next basic ability to  knock down and  fear enemies hit for 0.75 / 1 / 1.25 / 1.5 (based on level) seconds, during which they are  slowed by 60% − 99% (based on distance from Vex). If  Looming Darkness triggers Doom, enemies hit will  flee from the epicenter instead.Doom's  cooldown resets upon respawning.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive - Doom:</b></span> Periodically, <b>Vex</b> empowers her next <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knock down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fear</a></span> enemies hit for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.75;1;1.25;1.5" data-top_values="1;6;9;13">0.<small>75</small> / 1 / 1.<small>25</small> / 1.<small>5</small> (based on level)</span> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance from Vex" data-displayformula="60% + 3.9% for every 55 units away from Vex" data-bot_values="60;63.9;67.8;71.7;75.6;79.5;83.4;87.3;91.2;95.1;99" data-top_values="250;305;360;415;470;525;580;635;690;745;800" data-bot_key="%">60% − 99% (based on distance from <b>Vex</b>)</span>. If <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-ability="Looming Darkness 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL#Looming_Darkness_2" title="Looming Darkness"><img alt="Looming Darkness" src="/wiki/images/Vex_Looming_Darkness_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL#Looming_Darkness_2" title="Vex/LoL">Looming Darkness</a></span></span></i> triggers <i>Doom</i>, enemies hit will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flee"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">flee</a></span> from the epicenter instead.<br><i>Doom\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> resets upon <a href="/wiki/Death" title="Death">respawning</a>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Passive - Doom:',
            raw: ' Periodically, Vex empowers her next basic ability to  knock down and  fear enemies hit for 0.75 / 1 / 1.25 / 1.5 (based on level) seconds, during which they are  slowed by 60% − 99% (based on distance from Vex)',
            values: [0, 1, 1.25, 1.5],
            basedOn: 'distance from Vex',
            user: 'none',
            units: '',
            unitsText: 'seconds, during which they are  slowed by 60% − 99%',
            pre: 'Periodically, Vex empowers her next basic ability to  knock down and  fear enemies hit for 0.75 / 1 / 1.25 / 1.5',
            post: 'seconds, during which they are  slowed by 60% − 99%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Vex Doom 'n Gloom.png",
        description:
          "Innate - Gloom: Nearby enemy  champions and  monsters that  dash or  blink will be marked with Gloom for 6 seconds. Vex's next basic attack, which becomes  non-projectile, or basic ability hit against an enemy with Gloom will detonate the mark.  Looming Darkness will also inflict Gloom, but cannot detonate it.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Gloom:</b></span> Nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> will be marked with <i>Gloom</i> for 6 seconds. <b>Vex\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a>, which becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>, or basic ability hit against an enemy with <i>Gloom</i> will detonate the mark. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-ability="Looming Darkness" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL#Looming_Darkness" title="Looming Darkness"><img alt="Looming Darkness" src="/wiki/images/Vex_Looming_Darkness.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL#Looming_Darkness" title="Vex/LoL">Looming Darkness</a></span></span></i> will also inflict <i>Gloom</i>, but cannot detonate it.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate - Gloom:',
            raw: ' Nearby enemy  champions and  monsters that  dash or  blink will be marked with Gloom for 6 seconds',
            values: 6,
            units: 'kindredMarks',
            unitsText:
              'enemy  champions and  monsters that  dash or  blink will be marked with Gloom for 6 seconds',
            pre: 'Nearby enemy  champions and  monsters that  dash or  blink will be marked with Gloom for 6 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Gloom's detonation deals 30 − 140 (based on level) (+ 20% AP)  bonus magic damage and refunds 25% of Doom's cooldown. Against non-champions, this instead deals 40 / 45 / 50 / 55 / 60% (based on level) damage and refunds 10% of Doom's cooldown.",
        descriptionHTML:
          '<i>Gloom\'s</i> detonation deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="30;" data-finish="140;" data-bot_values="30;36.47;42.94;49.41;55.88;62.35;68.82;75.29;81.76;88.24;94.71;101.18;107.65;114.12;120.59;127.06;133.53;140" data-top_values="">30 − 140 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span></span> and refunds 25% of <i>Doom\'s</i> cooldown. Against non-champions, this instead deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="40;45;50;55;60" data-top_values="1;6;9;13;16" data-bot_key="%">40 / 45 / 50 / 55 / 60% (based on level)</span> damage and refunds 10% of <i>Doom\'s</i> cooldown.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Gloom's detonation deals 30 − 140 (based on level) (+ 20% AP)  bonus magic damage and refunds 25% of Doom's cooldown",
            damagetype: 'Magic',
            values: [
              30, 36.47, 42.94, 49.41, 55.88, 62.35, 68.82, 75.29, 81.76, 88.24,
              94.71, 101.18, 107.65, 114.12, 120.59, 127.06, 133.53, 140,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: "bonus magic damage and refunds 25% of Doom's cooldown",
            pre: "Gloom's detonation deals 30 − 140",
            post: "bonus magic damage and refunds 25% of Doom's cooldown",
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: "Against non-champions, this instead deals 40 / 45 / 50 / 55 / 60% (based on level) damage and refunds 10% of Doom's cooldown.",
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: "damage and refunds 10% of Doom's cooldown.",
            pre: 'Against non-champions, this instead deals 40 / 45 / 50 / 55 / 60%',
            post: "damage and refunds 10% of Doom's cooldown.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'proc',
    spellshield: 'Special',
    projectile: 'false',
    notes:
      '* <i>Gloom</i> will mark <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Scuttler" title="Rift Scuttler"><img alt="Rift Scuttler" src="/wiki/images/Rift_ScuttlerSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Scuttler" class="mw-redirect" title="Rift Scuttler">Rift Scuttler</a></span></span> when they use their dashes.\n<ul><li><i>Gloom</i> can mark <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>, but not other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span>.</li>\n<li><i>Gloom\'s</i> mark has a very brief cooldown and refreshes on subsequent dashes or blinks nearby enemies use.</li>\n<li><i>Gloom\'s</i> mark duration will refresh to 0.<small>5</small> seconds when <b>Vex</b> starts an attack windup against a target that has a mark which is about to expire.</li>\n<li><i>Gloom</i> will mark enemies even if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><i>Gloom</i> will mark enemies that are inside the detection radius when they blink, but will not mark those that blink inside from far away.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li><i>Doom\'s</i> cooldown starts as soon as the basic ability is cast.</li>\n<li>Non-champions (e.g. <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Scuttler" title="Rift Scuttler"><img alt="Rift Scuttler" src="/wiki/images/Rift_ScuttlerSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Scuttler" class="mw-redirect" title="Rift Scuttler">Rift Scuttler</a></span></span>) are not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by the fear-empowered ability.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block all of <i>Doom\'s</i> effects but not <i>Gloom\'s</i> empowered attack nor mark.</li>\n<li>Nearby enemies that become displaced do not count for being marked by <i>Gloom</i>.</li>\n<li><b>Vex\'s</b> basic abilities use a different icon when <i>Doom</i> is ready:\n<ul><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/1/15/Vex_Mistral_Bolt_2.png/revision/latest?cb=20210908215523" class="image"><img alt="Vex Mistral Bolt 2.png" src="/wiki/images/Vex_Mistral_Bolt_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> Mistral Bolt</li>\n<li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/eb/Vex_Personal_Space_2.png/revision/latest?cb=20210908215524" class="image"><img alt="Vex Personal Space 2.png" src="/wiki/images/Vex_Personal_Space_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> Personal Space</li>\n<li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/4e/Vex_Looming_Darkness_2.png/revision/latest?cb=20210908215526" class="image"><img alt="Vex Looming Darkness 2.png" src="/wiki/images/Vex_Looming_Darkness_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> Looming Darkness</li></ul></li></ul>',
  },
  'Mistral Bolt': {
    name: 'Mistral Bolt',
    display_name: 'Mistral Bolt',
    champion: 'Vex',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'VexQ.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '1200',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="First part">360</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Second part">160</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="First part">600</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Second part">3200</span>',
    cast_time: '0.<small>15</small>',
    cost: '45 / 50 / 55 / 60 / 65',
    costtype: 'Mana',
    cooldown: '8 / 7 / 6 / 5 / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL" title="Vex"><img alt="Vex" src="/wiki/images/Vex_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL" title="Vex/LoL">Vex</a></span></span> launches a wave of mist in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. After a short delay, the wave accelerates but also narrows.',
    ],
    description: [
      {
        icon: '/wiki/images/Vex Mistral Bolt.png',
        description:
          'Active: Vex launches a wave of mist in the target direction that deals magic damage to enemies hit. After travelling 500 units, the wave accelerates but also narrows itself.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vex</b> launches a wave of mist in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. After travelling 500 units, the wave accelerates but also narrows itself.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After travelling 500 units, the wave accelerates but also narrows itself.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'travelling 500 units, the wave accelerates but also narrows itself.',
            pre: 'After travelling 500 units, the wave accelerates but also narrows itself.',
          },
        ],
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
    ],
    targeting: 'Direction',
    affects: 'Ememies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><ul><li><i>Mistral Bolt</i> will fire from wherever <b>Vex</b> is at the end of the cast time, towards the originally targeted location or 1200 units in the originally targeted direction if cast beyond that.</li></ul></li></ul>',
  },
  'Personal Space': {
    name: 'Personal Space',
    display_name: 'Personal Space',
    champion: 'Vex',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'VexW.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 475 / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Against dashing enemies">550</span>',
    cast_time: '0.<small>25</small>',
    cost: '75',
    costtype: 'mana',
    cooldown: '20 / 18 / 16 / 14 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL" title="Vex"><img alt="Vex" src="/wiki/images/Vex_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL" title="Vex/LoL">Vex</a></span></span> emits a shockwave, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span> herself for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Vex Personal Space.png',
        description:
          'Active: Vex emits a shockwave around her before the cast time, dealing magic damage to nearby enemies and granting herself a  shield for 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vex</b> emits a shockwave around her before the cast time, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and granting herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Vex emits a shockwave around her before the cast time, dealing magic damage to nearby enemies and granting herself a  shield for 2.5 seconds.',
            damagetype: 'Magic',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'emits a shockwave around her before the cast time, dealing magic damage to nearby enemies and granting herself a  shield for 2.5 seconds.',
            pre: 'Vex emits a shockwave around her before the cast time, dealing magic damage to nearby enemies and granting herself a  shield for 2.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '50 / 75 / 100 / 125 / 150 (+ 75% AP)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
          {
            name: 'Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 30% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 75% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 30% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      "* <i>Personal Space</i> can be buffered 0.<small>1</small> seconds before it comes off cooldown or becomes available otherwise.\n<ul><li><b>Vex</b> can move during <i>Personal Space's</i> cast time.</li></ul>",
  },
  'Looming Darkness': {
    name: 'Looming Darkness',
    display_name: 'Looming Darkness',
    champion: 'Vex',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'VexE.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="cast distance" data-displayformula="200 +13 per X cast distance. \'\'This is capped at 300 effect radius.\'\'" data-bot_values="200;213;226;239;252;265;278;291;300" data-top_values="0;X;X;X;X;X;X;X;800">200 − 300 (based on cast distance)</span>',
    speed: '1300',
    cast_time: '0.<small>25</small>',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'mana',
    cooldown: '13',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL" title="Vex"><img alt="Vex" src="/wiki/images/Vex_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL" title="Vex/LoL">Vex</a></span></span> tosses her <i>Shadow</i> to explode at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit for a short time. The explosion widens based on cast distance.',
    ],
    description: [
      {
        icon: '/wiki/images/Vex Looming Darkness.png',
        description:
          "Active: Vex tosses her Shadow to explode at the target location, dealing magic damage to enemies hit and  slowing them for 2 seconds. The explosion's radius increases based on cast distance.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vex</b> tosses her <i>Shadow</i> to explode at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds. The explosion\'s radius increases based on cast distance.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Vex tosses her Shadow to explode at the target location, dealing magic damage to enemies hit and  slowing them for 2 seconds',
            damagetype: 'Magic',
            values: 2,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'tosses her Shadow to explode at the target location, dealing magic damage to enemies hit and  slowing them for 2 seconds',
            pre: 'Vex tosses her Shadow to explode at the target location, dealing magic damage to enemies hit and  slowing them for 2 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 70 / 90 / 110 / 130 (+ 40 / 45 / 50 / 55 / 60% AP)',
            valuesHTML:
              '50 / 70 / 90 / 110 / 130 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40 / 45 / 50 / 55 / 60% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 40 / 45 / 50 / 55 / 60% AP)',
            damagetype: 'Magic',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
            children: [
              {
                values: [40, 45, 50, 55, 60],
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40 / 45 / 50 / 55 / 60% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
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
      {
        description:
          'Looming Darkness will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Looming Darkness will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'true',
    notes: '* No additional details.',
  },
  'Shadow Surge': {
    name: 'Shadow Surge',
    display_name: 'Shadow Surge',
    champion: 'Vex',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'VexR.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '2000 / 2250 / 2500 / 2750 / 3000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile sight radius">650</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast radius">Global</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="First cast missile width">260</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="First cast missile speed">1600</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed, estimated">2200</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Active">0.<small>25</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast">None</span>',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect of initial cast">140 / 130 / 120 / 110 / 100</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL" title="Vex"><img alt="Vex" src="/wiki/images/Vex_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL" title="Vex/LoL">Vex</a></span></span> sends her <i>Shadow</i> in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. <i>Shadow</i> stops upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, marking and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for a few seconds. <br><i>Shadow Surge</i> can be recast while the target is marked.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Vex</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> towards the marked target. Upon arrival, the mark is consumed to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'If the target dies within a few seconds of being marked, <b>Vex</b> can cast <i>Shadow Surge</i> again within some time.',
    ],
    description: [
      {
        icon: '/wiki/images/Vex Shadow Surge.png',
        description:
          'Active: Vex sends her Shadow in the target direction that grants  sight around its trajectory and deals magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vex</b> sends her <i>Shadow</i> in the target direction that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Does not see into bush or across terrain">trajectory</span> and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 100 / 125 / 150 / 175 (+ 20% AP)',
            valuesHTML:
              '75 / 100 / 125 / 150 / 175 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 100 / 125 / 150 / 175 (+ 20% AP)',
            damagetype: 'Magic',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Shadow stops upon hitting an enemy  champion to mark them for 4 seconds, during which they are  revealed. Shadow Surge can be recast while the target is marked.',
        descriptionHTML:
          '<i>Shadow</i> stops upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> to mark them for 4 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>. <i>Shadow Surge</i> can be recast while the target is marked.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Shadow stops upon hitting an enemy  champion to mark them for 4 seconds, during which they are  revealed',
            damagetype: 'None',
            values: 4,
            units: 'kindredMarks',
            unitsText:
              'stops upon hitting an enemy  champion to mark them for 4 seconds, during which they are  revealed',
            pre: 'Shadow stops upon hitting an enemy  champion to mark them for 4 seconds, during which they are  revealed',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Vex Shadow Surge 2.png',
        description:
          'Recast: Vex  dashes towards the marked target with  displacement immunity. Upon arrival, she consumes their mark and deals magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Vex</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> towards the marked target with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span>. Upon arrival, she consumes their mark and deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 50% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 50% AP)',
            damagetype: 'Magic',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
      {
        description:
          'If the target dies within 6 seconds of being marked, Vex can cast Shadow Surge again within 12 seconds at no cost after 0.5 seconds.',
        descriptionHTML:
          'If the target dies within 6 seconds of being marked, <b>Vex</b> can cast <i>Shadow Surge</i> again within 12 seconds at no cost after 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'If the target dies within 6 seconds of being marked, Vex can cast Shadow Surge again within 12 seconds at no cost after 0.5 seconds.',
            increasedStat: 'kindredMarks',
            values: 6,
            units: '',
            unitsText:
              'the target dies within 6 seconds of being marked, Vex can cast Shadow Surge again within 12 seconds at no cost after 0.5 seconds.',
            pre: 'If the target dies within 6 seconds of being marked, Vex can cast Shadow Surge again within 12 seconds at no cost after 0.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'true',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><b>Vex\'s</b> dash will track the target if they change locations.\n<ul><li>She will not stop tracking the target until she reaches them, as there is no maximum tracking distance.</li></ul></li>\n<li><i>Shadow Surge</i> grants sight of the area along its path for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>4</small></span> seconds each.</li>\n<li><i>Shadow Surge</i> cannot be recast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>, or if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><i>Shadow Surge</i> may also be recast if the target died to the ability.</li>\n<li>The following table refers for interactions while <b>Vex</b> is dashing:\n<ul><li>All movement spells are disabled during the first 0.<small>25</small> seconds of the dash.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>  <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Vex_Original_R_0.ogg   "Do the thing, Shadow."',
  },
} satisfies { [skillName in string]: SkillData };
