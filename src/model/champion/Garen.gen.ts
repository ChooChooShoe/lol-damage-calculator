import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Garen';

export default {
  Perseverance: {
    name: 'Perseverance',
    display_name: 'Perseverance',
    champion: 'Garen',
    skill: 'I',
    image: {
      full: 'Garen_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Garen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Garen/LoL" title="Garen"><img alt="Garen" src="/wiki/images/Garen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Garen/LoL" title="Garen/LoL">Garen</a></span></span> continually <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;regenerates</span> a portion of his <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span></span>.',
      'This ability is temporarily disabled if he is attacked by epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Perseverance.png',
        description:
          'Innate: Garen  regenerates「 1.5% − 10.1% (based on level) of his  maximum health every 5 seconds. 」「 0.15% − 1.01% (based on level) of his  maximum health every 0.5 seconds. 」',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Garen</b> <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">regenerates</a></span><span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="1.3%+0.2 per level up to level 6, then+0.8% up to level 13, then+0.4%" data-bot_values="1.5;1.7;1.9;2.1;2.3;2.5;3.3;4.1;4.9;5.7;6.5;7.3;8.1;8.5;8.9;9.3;9.7;10.1" data-top_values="" data-bot_key="%">1.<small>5</small>% − 10.<small>1</small>% (based on level)</span> of his <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health</span></span> every 5 seconds.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="0.13%+0.02% per level up to level 6, then+0.08% up to level 13, then+0.04%" data-bot_values="0.15;0.17;0.19;0.21;0.23;0.25;0.33;0.41;0.49;0.57;0.65;0.73;0.81;0.85;0.89;0.93;0.97;1.01" data-top_values="" data-bot_key="%">0.<small>15</small>% − 1.<small>01</small>% (based on level)</span> of his <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health</span></span> every 0.<small>5</small> seconds.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: ' Garen  regenerates「 1.5% − 10.1% (based on level) of his  maximum health every 5 seconds. 」「 0.15% − 1.01% (based on level) of his  maximum health every 0.5 seconds. 」',
            healType: 'HealthRegen',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText:
              'of his  maximum health every 5 seconds. 」「 0.15% − 1.01%',
            pre: 'Garen  regenerates「 1.5% − 10.1%',
            post: 'of his  maximum health every 5 seconds. 」「 0.15% − 1.01%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Perseverance is lost for 8 seconds if Garen takes damage from epic  monsters,  turrets, or  champions, or if he is hit by an enemy ability or affected by an enemy summoner spell, refreshing on subsequent damage and hits taken from them.',
        descriptionHTML:
          '<i>Perseverance</i> is lost for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Not a cooldown, unaffected by ability haste">8 seconds</span> if <b>Garen</b> takes damage from epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, or if he is hit by an enemy <a href="/wiki/Champion_ability" title="Champion ability">ability</a> or affected by an enemy <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spell</a>, refreshing on subsequent damage and hits taken from them.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Perseverance is lost for 8 seconds if Garen takes damage from epic  monsters,  turrets, or  champions, or if he is hit by an enemy ability or affected by an enemy summoner spell, refreshing on subsequent damage and hits taken from them.',
            damagetype: 'None',
            values: 8,
            units: 'total_ap',
            unitsText:
              'is lost for 8 seconds if Garen takes damage from epic  monsters,  turrets, or  champions, or if he is hit by an enemy ability or affected by an enemy summoner spell, refreshing on subsequent damage and hits taken from them.',
            pre: 'Perseverance is lost for 8 seconds if Garen takes damage from epic  monsters,  turrets, or  champions, or if he is hit by an enemy ability or affected by an enemy summoner spell, refreshing on subsequent damage and hits taken from them.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Heal',
    notes:
      '* <i>Perseverance</i> does not go on nor refresh its cooldown from damage which was fully prevented by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerability</a></span>.',
    yvideo: 'Garen - Passive',
  },
  'Decisive Strike': {
    name: 'Decisive Strike',
    display_name: 'Decisive Strike',
    champion: 'Garen',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'GarenQ.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Garen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Garen/LoL" title="Garen"><img alt="Garen" src="/wiki/images/Garen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Garen/LoL" title="Garen/LoL">Garen</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span>.',
      'His next <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">lunge</a></span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silencing</a></span> the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Decisive Strike.png',
        description:
          'Active: Garen  cleanses himself of all  slows and gains  35% bonus movement speed for a few seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Garen</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself of all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">35% <b>bonus</b> movement speed</span></span> for a few seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Garen  cleanses himself of all  slows and gains  35% bonus movement speed for a few seconds.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed for a few seconds. cleanses himself of all  slows and gains  35',
            pre: 'Garen  cleanses himself of all  slows and gains  35% bonus movement speed for a few seconds.',
          },
        ],
        leveling: [
          {
            name: 'Movement Speed Duration:',
            values: '1 / 1.65 / 2.3 / 2.95 / 3.6',
            valuesHTML:
              '1 / 1.<small>65</small> / 2.<small>3</small> / 2.<small>95</small> / 3.<small>6</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Movement Speed Duration:',
            raw: '1 / 1.65 / 2.3 / 2.95 / 3.6',
            values: [1, 1.65, 2.3, 2.95, 3.6],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.65 / 2.3 / 2.95 / 3.6',
          },
        ],
      },
      {
        description:
          'Additionally, Garen empowers his next basic attack within 4.5 seconds to have an  uncancellable windup,  lunge at the target, deal bonus physical damage, and  silence the target for 1.5 seconds.',
        descriptionHTML:
          'Additionally, <b>Garen</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 4.<small>5</small> seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">lunge</a></span> at the target, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silence</a></span> the target for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Additionally, Garen empowers his next basic attack within 4.5 seconds to have an  uncancellable windup,  lunge at the target, deal bonus physical damage, and  silence the target for 1.5 seconds.',
            damagetype: 'Physical',
            values: 4,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              'Garen empowers his next basic attack within 4.5 seconds to have an  uncancellable windup,  lunge at the target, deal bonus physical damage, and  silence the target for 1.5 seconds.',
            pre: 'Additionally, Garen empowers his next basic attack within 4.5 seconds to have an  uncancellable windup,  lunge at the target, deal bonus physical damage, and  silence the target for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '30 / 60 / 90 / 120 / 150 (+ 50% AD)',
            valuesHTML:
              '30 / 60 / 90 / 120 / 150 <span style="color:orange; white-space:normal">(+&nbsp;50% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 60 / 90 / 120 / 150 (+ 50% AD)',
            damagetype: 'Physical',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
            ],
          },
        ],
      },
      {
        description: "Decisive Strike  resets Garen's basic attack timer.",
        descriptionHTML:
          '<i>Decisive Strike <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Garen\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: 'Special',
    notes:
      '* The enhanced attack will apply other <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal (the bonus damage does not).\n<ul><li><ul><li>The bonus damage will also apply <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span>.</li>\n<li>The bonus damage is applied to <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul></li>\n<li><i>Decisive Strike</i> locks <b>Garen</b> out of using basic attacks for a short period of time. This is shortened with <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Attack_speed" title="Attack speed">attack speed</a></span>.</li>\n<li>The enhanced attack will still complete and hit the target even if they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> during the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack\'s windup</a></span>.</li>\n<li><i>Decisive Strike</i> will not prevent the reapplication of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> (e.g. the persistent slow from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-ability="Pillar of Ice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL#Pillar_of_Ice" title="Pillar of Ice"><img alt="Pillar of Ice" src="/wiki/images/Trundle_Pillar_of_Ice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL#Pillar_of_Ice" title="Trundle/LoL">Pillar of Ice</a></span></span> will be immediately reapplied after removal if <b>Garen</b> is still within its <a href="/wiki/Area_of_effect" title="Area of effect">area of effect</a>).</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only negate the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silence</a></span>.</li>\n<li><i>Decisive Strike\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">lunge</a></span> can pass very thin terrain and will otherwise not be able to. In any case, <b>Garen</b> will still hit his target.</li></ul>',
    yvideo: 'Garen - Q',
  },
  Courage: {
    name: 'Courage',
    display_name: 'Courage',
    champion: 'Garen',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'GarenW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">23 / 21 / 19 / 17 / 15</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Garen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Garen/LoL" title="Garen"><img alt="Garen" src="/wiki/images/Garen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Garen/LoL" title="Garen/LoL">Garen</a></span></span> permanently gains <b>bonus</b> <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span> by killing enemies, up to a cap. Upon reaching the cap, he gains another permanent boost to these defenses.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Garen</b> reduces incoming damage for a few seconds. He also briefly gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> and increased <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">tenacity</a></span>.',
    ],
    description: [
      {
        description:
          'Passive: Whenever Garen kills an enemy, he generates a stack of Courage, stacking up to 150 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Whenever <b>Garen</b> kills an enemy, he generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Courage</i>, stacking up to 150 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: ' Whenever Garen kills an enemy, he generates a stack of Courage, stacking up to 150 times.',
            min: 0,
            max: 10,
            description:
              ' Whenever Garen kills an enemy, he generates a stack of Courage, stacking up to 150 times.',
            values: 1,
            units: 'feastStacks',
            unitsText:
              'Garen kills an enemy, he generates a stack of Courage, stacking up to 150 times.',
            pre: 'Whenever Garen kills an enemy, he generates a stack of Courage, stacking up to 150 times.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Courage: For each stack, Garen gains  0.2 bonus armor and  0.2 bonus magic resistance, up to a maximum of 30 bonus resistances. After reaching maximum stacks, Garen gains 10% bonus armor and 10% bonus magic resistance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Courage:</b></span> For each stack, <b>Garen</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">0.<small>2</small> <b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">0.<small>2</small> <b>bonus</b> magic resistance</span></span>, up to a maximum of 30 <b>bonus</b> resistances. After reaching maximum stacks, <b>Garen</b> gains <span style="color:yellow; white-space:normal">10% <b>bonus</b> armor</span> and <span style="color: #00FFFF; white-space:normal">10% <b>bonus</b> magic resistance</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'After reaching maximum stacks, Garen gains 10% bonus armor and 10% bonus magic resistance.',
            increasedStat: 'feastStacks',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus armor and 10reaching maximum stacks, Garen gains 10',
            pre: 'After reaching maximum stacks, Garen gains 10% bonus armor and 10% bonus magic resistance.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Courage.png',
        description:
          'Active: Garen reduces incoming damage by 30% for a few seconds. For the first 0.75 seconds, Garen additionally grants himself a  shield and 60%  tenacity.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Garen</b> reduces incoming damage by 30% for a few seconds. For the first 0.<small>75</small> seconds, <b>Garen</b> additionally grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> and 60% <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">tenacity</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Garen reduces incoming damage by 30% for a few seconds',
            damagetype: 'None',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'for a few secondsreduces incoming damage by 30',
            pre: 'Garen reduces incoming damage by 30% for a few seconds',
          },
        ],
        leveling: [
          {
            name: 'Duration:',
            values: '2 / 2.75 / 3.5 / 4.25 / 5',
            valuesHTML:
              '2 / 2.<small>75</small> / 3.<small>5</small> / 4.<small>25</small> / 5',
          },
          {
            name: 'Shield Strength:',
            values: '65 / 85 / 105 / 125 / 145 (+ 18% bonus health)',
            valuesHTML:
              '65 / 85 / 105 / 125 / 145 <span style="color: #1F995C; white-space:normal">(+&nbsp;18% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '2 / 2.75 / 3.5 / 4.25 / 5',
            values: [2, 2.75, 3.5, 4.25, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.75 / 3.5 / 4.25 / 5',
          },
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '65 / 85 / 105 / 125 / 145 (+ 18% bonus health)',
            healType: 'BonusHealth',
            values: [65, 85, 105, 125, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 85 / 105 / 125 / 145',
            children: [
              {
                values: 18,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 18% bonus health',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <i>Courage\'s</i> bonus resistances are only gained when it is ranked up at least once, but <i>Courage\'s</i> passive is retroactive for units killed before it was learned.\n<ul><li><i>Courage\'s</i> <b>bonus</b> resistances can be obtained by any of <b>Garen\'s</b> damage sources (basic attacks, abilities, summoner spells, runes, item actives).\n<ul><li>This does not include <i>last hits</i> transferred to <b>Garen</b> artificially, through effects such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Relic Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Relic_Shield" title="Spoils of War"><img alt="Spoils of War" src="/wiki/images/Relic_Shield_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Relic_Shield" title="Relic Shield">Spoils of War</a></span></span>.</li></ul></li>\n<li>The kills on these enemy unit types count towards <i>Courage\'s</i> <b>bonus</b> resistances:\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">Champions</a></span> (Only <a href="/wiki/Kill" title="Kill">kills</a>, <a href="/wiki/Assist" title="Assist">Assists</a> don\'t grant the <b>bonus</b> resistances)</li>\n<li>All <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span></li>\n<li><a href="/wiki/Champion_summoned_units" title="Champion summoned units">Champion summoned units</a> (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-ability="Noxious Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL#Noxious_Trap" title="Noxious Trap"><img alt="Noxious Trap" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL#Noxious_Trap" title="Teemo/LoL">Noxious Trap</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Dark Procession" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Dark_Procession" title="Dark Procession"><img alt="Dark Procession" src="/wiki/images/Yorick_Dark_Procession.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Dark_Procession" title="Yorick/LoL">Dark Procession</a></span></span>)</li>\n<li>All <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.\n<ul><li>The bonus is equal for all these units; <i>Large</i> units do not grant a larger bonus.</li></ul></li></ul></li>\n<li>The kills on these enemy unit types do <b>not</b> count towards <i>Courage\'s</i> <b>bonus</b> resistances:\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">Wards</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">Turrets</a></span> (including <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-ability="Shurima\'s Legacy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL#Shurima\'s_Legacy" title="Sun Disk"><img alt="Sun Disk" src="/wiki/images/Azir_Shurima%27s_Legacy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL#Shurima\'s_Legacy" title="Azir/LoL">Sun Disk</a></span></span>) and other <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a></li>\n<li><a href="/wiki/Jungle_plants" title="Jungle plants">Jungle plants</a>.</li>\n<li>Units destroyed by \'trampling\' such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL" title="Zyra\'s"><img alt="Zyra\'s" src="/wiki/images/Zyra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL" title="Zyra/LoL">Zyra\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Rampant Growth" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Rampant_Growth" title="seeds"><img alt="seeds" src="/wiki/images/Zyra_Rampant_Growth.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Rampant_Growth" title="Zyra/LoL">seeds</a></span></span></span>, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL" title="Zac\'s"><img alt="Zac\'s" src="/wiki/images/Zac_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL" title="Zac/LoL">Zac\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Cell Division" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Cell_Division" title="goo"><img alt="goo" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Cell_Division" title="Zac/LoL">goo</a></span></span></span> or <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai\'s"><img alt="Rek\'Sai\'s" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Tunnel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Tunnel" title="tunnels"><img alt="tunnels" src="/wiki/images/Rek%27Sai_Tunnel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Tunnel" title="Rek\'Sai/LoL">tunnels</a></span></span></span>.</li></ul></li>\n<li><i>Courage</i> will only grant bonus resistances from units killed by <b>Garen</b> himself. <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Eye of the Herald" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald"><img alt="Eye of the Herald" src="/wiki/images/Eye_of_the_Herald_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald">Eye of the Herald</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Relic Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Relic_Shield" title="Spoils of War"><img alt="Spoils of War" src="/wiki/images/Relic_Shield_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Relic_Shield" title="Relic Shield">Spoils of War</a></span></span> of allies do not count.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">Tenacity</a></span> increase <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks additively"><a href="/wiki/Stacking#Stacks_additively" title="Stacking#Stacks additively"><img alt="Additive stacking icon.png" src="/wiki/images/Additive_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_additively" title="Stacking">stacks additively</a></span> with the <i>tenacity reduction</i> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brittle"><a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control#Increasing the duration of Crowd Control"><img alt="Brittle icon.png" src="/wiki/images/Brittle_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control">Brittle</a></span>, but multiplicatively with other sources.</li></ul>',
    yvideo: 'Garen - W',
  },
  Judgment: {
    name: 'Judgment',
    display_name: 'Judgment',
    champion: 'Garen',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'GarenE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius: '325',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">9</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Garen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Garen/LoL" title="Garen"><img alt="Garen" src="/wiki/images/Garen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Garen/LoL" title="Garen/LoL">Garen</a></span></span> rapidly spins with his sword for a short time, continually dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies. He spins more based on his <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
      'The nearest enemy is dealt increased damage. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit by enough spins will have <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">reduced armor</span></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <i>Judgment</i> is ended early, with the cooldown <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> by its remaining duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Judgment.png',
        description:
          'Active: Garen rapidly spins his sword around himself 7 (+ 1 per 25% bonus attack speed) times over 3 seconds, becoming  ghosted and unable to basic attack and dealing physical damage to nearby enemies periodically. Judgment can be recast after 1 second for its duration, and does so automatically after it ends.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Garen</b> rapidly spins his sword around himself 7 (+ 1 per <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Only bonus attack speed from item stats, mythic item passives, and growth (per level)"><span style="color:orangered; white-space:normal">25% <b>bonus</b> attack speed</span></span>) times over 3 seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and unable to basic attack and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies periodically. <i>Judgment</i> can be recast after 1 second for its duration, and does so automatically after it ends.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Garen rapidly spins his sword around himself 7 (+ 1 per 25% bonus attack speed) times over 3 seconds, becoming  ghosted and unable to basic attack and dealing physical damage to nearby enemies periodically',
            damagetype: 'Physical',
            values: 7,
            units: 'total_ad',
            unitsText:
              'times over 3 seconds, becoming  ghosted and unable to basic attack and dealing physical damage to nearby enemies periodically',
            pre: 'Garen rapidly spins his sword around himself 7',
            post: 'times over 3 seconds, becoming  ghosted and unable to basic attack and dealing physical damage to nearby enemies periodically',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus attack speedper 25',
                pre: '+ 1 per 25% bonus attack speed',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Judgment can be recast after 1 second for its duration, and does so automatically after it ends.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'can be recast after 1 second for its duration, and does so automatically after it ends.',
            pre: 'Judgment can be recast after 1 second for its duration, and does so automatically after it ends.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage Per Spin:',
            values:
              '4 / 8 / 12 / 16 / 20 (+ 0 − 8.2 (based on level)) (+ 32 / 34 / 36 / 38 / 40% AD)',
            valuesHTML:
              '4 / 8 / 12 / 16 / 20 (+ <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="0.8 per level until lvl 9, then+0.2 per level" data-bot_values="0;0.8;1.6;2.4;3.2;4;4.8;5.6;6.4;6.6;6.8;7;7.2;7.4;7.6;7.8;8;8.2" data-top_values="">0 − 8.<small>2</small> (based on level)</span>) <span style="color:orange; white-space:normal">(+&nbsp;32 / 34 / 36 / 38 / 40% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Spin:',
            raw: '4 / 8 / 12 / 16 / 20 (+ 0 − 8.2 (based on level)) (+ 32 / 34 / 36 / 38 / 40% AD)',
            damagetype: 'Physical',
            values: [4, 8, 12, 16, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 8 / 12 / 16 / 20',
            children: [
              {
                values: [
                  0, 0.48, 0.96, 1.45, 1.93, 2.41, 2.89, 3.38, 3.86, 4.34, 4.82,
                  5.31, 5.79, 6.27, 6.75, 7.24, 7.72, 8.2,
                ],
                basedOn: 'level',
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 0 − 8.2',
              },
              {
                values: [32, 34, 36, 38, 40],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 32 / 34 / 36 / 38 / 40% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'Enemy champions hit 6 times by Judgment are inflicted with  25% armor reduction for 6 seconds, with the duration refreshing upon the 7th hit and every 6th hit thereafter.',
        descriptionHTML:
          'Enemy champions hit 6 times by <i>Judgment</i> are inflicted with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">25% armor reduction</span></span> for 6 seconds, with the duration refreshing upon the 7th hit and every 6th hit thereafter.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Enemy champions hit 6 times by Judgment are inflicted with  25% armor reduction for 6 seconds, with the duration refreshing upon the 7th hit and every 6th hit thereafter.',
            values: 6,
            valuesIsPercent: true,
            units: 'total_armor',
            unitsText:
              'armor reduction for 6 seconds, with the duration refreshing upon the 7th hit and every 6th hit thereafter.champions hit 6 times by Judgment are inflicted with  25',
            pre: 'Enemy champions hit 6 times by Judgment are inflicted with  25% armor reduction for 6 seconds, with the duration refreshing upon the 7th hit and every 6th hit thereafter.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Judgment 3.png',
        description:
          'Judgment deals 25% increased damage against the nearest enemy hit.',
        descriptionHTML:
          '<i>Judgment</i> deals 25% increased damage against the nearest enemy hit.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Judgment deals 25% increased damage against the nearest enemy hit.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'increased damage against the nearest enemy hit.deals 25',
            pre: 'Judgment deals 25% increased damage against the nearest enemy hit.',
          },
        ],
        leveling: [
          {
            name: 'Increased Damage Per Spin:',
            values:
              '5 / 10 / 15 / 20 / 25 (+ 0 − 10.25 (based on level)) (+ 40 / 42.5 / 45 / 47.5 / 50% AD)',
            valuesHTML:
              '5 / 10 / 15 / 20 / 25 (+ <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0;1;2;3;4;5;6;7;8;8.25;8.5;8.75;9;9.25;9.5;9.75;10;10.25" data-top_values="">0 − 10.<small>25</small> (based on level)</span>) <span style="color:orange; white-space:normal">(+&nbsp;40 / 42.<small>5</small> / 45 / 47.<small>5</small> / 50% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage Per Spin:',
            raw: '5 / 10 / 15 / 20 / 25 (+ 0 − 10.25 (based on level)) (+ 40 / 42.5 / 45 / 47.5 / 50% AD)',
            damagetype: 'None',
            values: [5, 10, 15, 20, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25',
            children: [
              {
                values: [
                  0, 0.6, 1.21, 1.81, 2.41, 3.01, 3.62, 4.22, 4.82, 5.43, 6.03,
                  6.63, 7.24, 7.84, 8.44, 9.04, 9.65, 10.25,
                ],
                basedOn: 'level',
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 0 − 10.25',
              },
              {
                values: [40, 42.5, 45, 47.5, 50],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40 / 42.5 / 45 / 47.5 / 50% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Judgment 2.png',
        description:
          'Recast: Garen ends Judgment prematurely, reducing its  cooldown by its remaining duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Garen</b> ends <i>Judgment</i> prematurely, reducing its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by its remaining duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Judgment can  critically strike for  (75% +  35%) bonus physical damage. Additionally, Judgment deals 150% damage against  monsters.',
        descriptionHTML:
          '<i>Judgment</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for  <span style="color: #FF8C34; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span>. Additionally, <i>Judgment</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Judgment can  critically strike for  (75% +  35%) bonus physical damage',
            damagetype: 'Physical',
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'bonus physical damage',
            pre: 'Judgment can  critically strike for',
            post: 'bonus physical damage',
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
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Additionally, Judgment deals 150% damage against  monsters.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage against  monsters.Judgment deals 150',
            pre: 'Additionally, Judgment deals 150% damage against  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'aoedot',
    notes:
      '*The initial casts count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>Deactivating the ability manually does not.</li></ul></li>\n<li>Each spin triggers a stack of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span>.</li>\n<li>For the purpose of moving closer to an enemy when right clicking them, <i>Judgment</i> also reduces <b>Garen\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> <span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to 100&nbsp;」</span><span class="flipText2">「&nbsp;by 75&nbsp;」</span></span> for the duration.</li>\n<li><i>Judgment</i> cancels <b>Garen\'s</b> last movement command upon ending.</li>\n<li>Each spin deals damage simultaneously to all enemies within its range when the spin is completed.</li>\n<li>The spin animation is capped at once per 0.<small>2</small> seconds, but the amount of ticks will keep on scaling.</li>\n<li>The armor reduction stacks multiplicatively with other percentage armor penetration effects.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><a href="/wiki/Garen#Decisive_Strike" title="Garen#Decisive Strike"><img alt="Decisive Strike.png" src="/wiki/images/Garen_Decisive_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Garen#Decisive_Strike" title="Garen">Decisive Strike</a> and <a href="/wiki/Garen#Courage" title="Garen#Courage"><img alt="Courage.png" src="/wiki/images/Garen_Courage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Garen#Courage" title="Garen">Courage</a> are usable. <a href="/wiki/Garen#Demacian_Justice" title="Garen#Demacian Justice"><img alt="Demacian Justice.png" src="/wiki/images/Garen_Demacian_Justice.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Garen#Demacian_Justice" title="Garen">Demacian Justice</a> interrupts.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    yvideo: 'Garen - E',
  },
  'Demacian Justice': {
    name: 'Demacian Justice',
    display_name: 'Demacian Justice',
    champion: 'Garen',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'GarenR.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '400',
    cast_time: '0.<small>435</small>',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Garen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Garen/LoL" title="Garen"><img alt="Garen" src="/wiki/images/Garen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Garen/LoL" title="Garen/LoL">Garen</a></span></span> strikes a lethal blow to an enemy champion that deals <span style="color: #F9966B; white-space:normal">true damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Demacian Justice.png',
        description:
          'Active: Garen calls upon the might of Demacia onto the target enemy  champion, dealing them  true damage as well as  revealing them for 1 second at the start of the cast time.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Garen</b> calls upon the might of <i>Demacia</i> onto the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing them <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span> as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for 1 second at the start of the cast time.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Garen calls upon the might of Demacia onto the target enemy  champion, dealing them  true damage as well as  revealing them for 1 second at the start of the cast time.',
            damagetype: 'True',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'calls upon the might of Demacia onto the target enemy  champion, dealing them  true damage as well as  revealing them for 1 second at the start of the cast time.',
            pre: 'Garen calls upon the might of Demacia onto the target enemy  champion, dealing them  true damage as well as  revealing them for 1 second at the start of the cast time.',
          },
        ],
        leveling: [
          {
            name: 'True Damage:',
            values:
              "150 / 225 / 300 / 375 / 450 (+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health)",
            valuesHTML:
              '150 / 225 / 300 / 375 / 450 <span style="color: #1F995C; white-space:normal">(+&nbsp;25 / 27.<small>5</small> / 30 / 32.<small>5</small> / 35% of target\'s <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'True Damage:',
            raw: "150 / 225 / 300 / 375 / 450 (+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health)",
            healType: 'OutgoingHeals',
            values: [150, 225, 300, 375, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 225 / 300 / 375 / 450',
            children: [
              {
                values: [25, 27.5, 30, 32.5, 35],
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: "+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health",
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'True',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* The target will die if they\'re at least under <span style="color: #1F995C; white-space:normal">20 / 21.<small>57</small> / 23.<small>08</small> / 24.<small>53</small> / 25.<small>93</small>% <b>maximum</b> health</span> + <span style="color: #1F995C; white-space:normal">120 / 176.<small>47</small> / 230.<small>77</small> / 283.<small>02</small> / 333.<small>33</small> <b>flat</b> health</span> on top of that. This does not count effects that mitigate <a href="/wiki/True_damage" title="True damage">true damage</a>, such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span>.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Garen_Original_R_0.ogg   "For the cause!"',
    yvideo: 'Garen - R',
  },
} satisfies { [skillName in string]: SkillData };
