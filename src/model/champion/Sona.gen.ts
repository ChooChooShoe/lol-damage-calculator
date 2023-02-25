import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Sona';

export default {
  'Power Chord': {
    name: 'Power Chord',
    display_name: 'Power Chord',
    champion: 'Sona',
    skill: 'I',
    image: {
      full: 'Sona_Passive_Charged.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate - Accelerando:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL" title="Sona"><img alt="Sona" src="/wiki/images/Sona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL" title="Sona/LoL">Sona</a></span></span> gains a permanent stack of <i>Accelerando</i> each time she hits an enemy champion with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Hymn of Valor" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="Hymn of Valor"><img alt="Hymn of Valor" src="/wiki/images/Sona_Hymn_of_Valor.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="Sona/LoL">Hymn of Valor</a></span></span></i> and each time she mitigates sufficient damage or heals damaged allies with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Aria of Perseverance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="Aria of Perseverance"><img alt="Aria of Perseverance" src="/wiki/images/Sona_Aria_of_Perseverance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="Sona/LoL">Aria of Perseverance</a></span></span></i>. If she has max stacks, she instead <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduces</span> the cooldown of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Crescendo" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Crescendo" title="Crescendo"><img alt="Crescendo" src="/wiki/images/Sona_Crescendo.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Crescendo" title="Sona/LoL">Crescendo</a></span></span></i> each time.',
      '<img alt="Sona Power Chord 3.gif" src="/wiki/images/Sona_Power_Chord_3.gif" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Innate - Melody:</b></span> <b>Sona\'s</b> basic abilities incur a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;brief</span> cooldown on her other basic abilities, and cause her to generate a unique <a href="/wiki/Aura" title="Aura">aura</a> for a short time that empowers herself and nearby allied champions.',
      '<img alt="Sona Power Chord 2.png" src="/wiki/images/Sona_Power_Chord_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Innate - Power Chord:</b></span> <b>Sona\'s</b> basic abilities generate permanent stacks of <i>Power Chord</i>. At 3 stacks, her next basic attack consumes them all to become empowered with bonus magic damage and apply an additional effect based on the last basic ability cast.',
      '<img alt="Power Chord.png" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Accelerando:</b></span> For each stack, <b>Sona</b> gains <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;basic ability haste</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Sona_Power_Chord.png',
        description:
          'Innate - Accelerando: Sona generates a stack of Accelerando each time she hits an enemy  champion with  Hymn of Valor and each time she mitigates sufficient damage or heals damaged allies with  Aria of Perseverance, stacking up to 120 times. At maximum stacks, she instead reduces the  current cooldown of  Crescendo by 1.5 seconds each time.\n Accelerando: For each stack, Sona gains  0.5 basic ability haste, up to 60 at maximum stacks.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Accelerando:</b></span> <b>Sona</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Accelerando</i> each time she hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Hymn of Valor" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="Hymn of Valor"><img alt="Hymn of Valor" src="/wiki/images/Sona_Hymn_of_Valor.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="Sona/LoL">Hymn of Valor</a></span></span></i> and each time she mitigates sufficient damage or heals damaged allies with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Aria of Perseverance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="Aria of Perseverance"><img alt="Aria of Perseverance" src="/wiki/images/Sona_Aria_of_Perseverance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="Sona/LoL">Aria of Perseverance</a></span></span></i>, stacking up to 120 times. At maximum stacks, she instead reduces the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Crescendo" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Crescendo" title="Crescendo"><img alt="Crescendo" src="/wiki/images/Sona_Crescendo.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Crescendo" title="Sona/LoL">Crescendo</a></span></span></i> by 1.<small>5</small> seconds each time.<br><br>\n<p><img alt="Power Chord.png" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Accelerando:</b></span> For each stack, <b>Sona</b> gains <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small></span> <a href="/wiki/Ability_haste#Increasing_basic_ability_haste" class="mw-redirect" title="Ability haste">basic ability haste</a>, up to 60 at maximum stacks.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate - Accelerando:',
            raw: 'Sona generates a stack of Accelerando each time she hits an enemy  champion with  Hymn of Valor and each time she mitigates sufficient damage or heals damaged allies with  Aria of Perseverance, stacking up to 120 times',
            healType: 'DrainEffect',
            values: 1,
            units: 'genericStacks',
            unitsText:
              'generates a stack of Accelerando each time she hits an enemy  champion with  Hymn of Valor and each time she mitigates sufficient damage or heals damaged allies with  Aria of Perseverance, stacking up to 120 times',
            pre: 'Sona generates a stack of Accelerando each time she hits an enemy  champion with  Hymn of Valor and each time she mitigates sufficient damage or heals damaged allies with  Aria of Perseverance, stacking up to 120 times',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Sona_Power_Chord_3.gif',
        description:
          'Innate - Melody: Whenever Sona casts a basic ability, her other basic abilities incur a  0.5-second global cooldown and she generates a unique aura for 3 seconds that empowers herself and nearby allied champions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Melody:</b></span> Whenever <b>Sona</b> casts a <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a>, her other basic abilities incur a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small>-second</span> global cooldown and she generates a unique <a href="/wiki/Aura" title="Aura">aura</a> for 3 seconds that empowers herself and nearby allied champions.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Sona_Power_Chord_2.png',
        description:
          "Innate - Power Chord: Sona's basic abilities generate a stack of Power Chord, stacking up to 3 times. At 3 stacks, her next basic attack is empowered to consume them all to have an  uncancellable windup, deal 20 − 240 (based on level) (+ 20% AP) bonus magic damage, and apply an additional effect based on the last basic ability she casted:\n Hymn of Valor - Staccato: Deals 28 − 336 (based on level) (+ 28% AP) modified magic damage.\n Aria of Perseverance - Diminuendo: Reduces the target's size by 8% and damage dealt by 25% (+ 4% per 100 AP) for 3 seconds.\n Song of Celerity - Tempo:  Slows the target by 50% (+ 4% per 100 AP) for 2 seconds, capped at a maximum of 99%.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Power Chord:</b></span> <b>Sona\'s</b> basic abilities generate a stack of <i>Power Chord</i>, stacking up to 3 times. At 3 stacks, her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to consume them all to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="10 +&nbsp;10 per level until level 8, then +&nbsp;15 per level" data-bot_values="20;30;40;50;60;70;80;90;105;120;135;150;165;180;195;210;225;240" data-top_values="">20 − 240 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, and apply an additional effect based on the last basic ability she casted:\n<ul><li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Hymn of Valor" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="Hymn of Valor"><img alt="Hymn of Valor" src="/wiki/images/Sona_Hymn_of_Valor.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="Sona/LoL">Hymn of Valor</a></span></span></i> - <span class="template_sbc"><b>Staccato:</b></span> Deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="14 +&nbsp;14 per level until level 8, then +&nbsp;21 per level" data-bot_values="28;42;56;70;84;98;112;126;147;168;189;210;231;252;273;294;315;336" data-top_values="">28 − 336 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;28% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span>.</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Aria of Perseverance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="Aria of Perseverance"><img alt="Aria of Perseverance" src="/wiki/images/Sona_Aria_of_Perseverance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="Sona/LoL">Aria of Perseverance</a></span></span></i> - <span class="template_sbc"><b>Diminuendo:</b></span> Reduces the target\'s <a href="/wiki/Size" title="Size">size</a> by 8% and damage dealt by 25% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span> for 3 seconds.</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Song of Celerity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Song_of_Celerity" title="Song of Celerity"><img alt="Song of Celerity" src="/wiki/images/Sona_Song_of_Celerity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Song_of_Celerity" title="Sona/LoL">Song of Celerity</a></span></span></i> - <span class="template_sbc"><b>Tempo:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slows</a></span> the target by 50% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span> for 2 seconds, capped at a maximum of 99%.</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate - Power Chord:',
            raw: "Sona's basic abilities generate a stack of Power Chord, stacking up to 3 times",
            min: 0,
            max: 3,
            description:
              "Sona's basic abilities generate a stack of Power Chord, stacking up to 3 times",
            values: 3,
            units: 'genericStacks',
            unitsText:
              'basic abilities generate a stack of Power Chord, stacking up to 3 times',
            pre: "Sona's basic abilities generate a stack of Power Chord, stacking up to 3 times",
          },
          {
            effectType: 'Damage',
            name: 'At 3 stacks, her next basic attack is empowered to consume them all to have an  uncancellable windup, deal 20 − 240 (based on level) (+ 20% AP) bonus magic damage, and apply an additional effect based on the last basic ability she casted:\n Hymn of Valor - Staccato:',
            raw: "Deals 28 − 336 (based on level) (+ 28% AP) modified magic damage.\n Aria of Perseverance - Diminuendo: Reduces the target's size by 8% and damage dealt by 25% (+ 4% per 100 AP) for 3 seconds.\n Song of Celerity - Tempo:  Slows the target by 50% (+ 4% per 100 AP) for 2 seconds, capped at a maximum of 99%.",
            damagetype: 'Magic',
            values: [
              28, 46.12, 64.24, 82.35, 100.47, 118.59, 136.71, 154.82, 172.94,
              191.06, 209.18, 227.29, 245.41, 263.53, 281.65, 299.76, 317.88,
              336,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              "modified magic damage.\n Aria of Perseverance - Diminuendo: Reduces the target's size by 8% and damage dealt by 25%",
            pre: 'Deals 28 − 336',
            post: "modified magic damage.\n Aria of Perseverance - Diminuendo: Reduces the target's size by 8% and damage dealt by 25%",
            children: [
              {
                values: 28,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 28% AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4% per 100 AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4% per 100 AP',
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
          "Gaining Power Chord's empowered attack  resets Sona's basic attack timer.",
        descriptionHTML:
          '<i>Gaining Power Chord\'s empowered attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Sona\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'proc',
    spellshield: true,
    notes:
      '* <b>Sona</b> has a stack counter under her health-bar that is not visible to other champions.\n<ul><li><ul><li>When <i>Power Chord</i> is ready, Sona gains a ring around her. This ring will have a different color depending on the last ability used (<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Hymn of Valor" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="blue"><img alt="blue" src="/wiki/images/Sona_Hymn_of_Valor.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="Sona/LoL">blue</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Aria of Perseverance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="green"><img alt="green" src="/wiki/images/Sona_Aria_of_Perseverance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="Sona/LoL">green</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Song of Celerity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Song_of_Celerity" title="purple"><img alt="purple" src="/wiki/images/Sona_Song_of_Celerity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Song_of_Celerity" title="Sona/LoL">purple</a></span></span></i>).</li>\n<li>The effect does not change if abilities are used while the projectile is in motion.</li></ul></li>\n<li>The triggering attack will apply other <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal.</li>\n<li><b>Sona</b> retains <i>Power Chord\'s</i> stacks when entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li>The empowered attack will trigger but not be consumed nor apply its effects against <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  'Hymn of Valor': {
    name: 'Hymn of Valor',
    display_name: 'Hymn of Valor',
    champion: 'Sona',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SonaQ.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sound bolts search range">825</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Aura radius, center-to-edge">400</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sound bolts missile speed">1300</span>',
    cast_time: 'none',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL" title="Sona"><img alt="Sona" src="/wiki/images/Sona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL" title="Sona/LoL">Sona</a></span></span> projects sound bolts to the two nearest enemies that each deal <span style="color: #00B0F0; white-space:normal">magic damage</span>, and she gains a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord" title="Accelerando"><img alt="Accelerando" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Accelerando</a></span></span></i> for each bolt that damages an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
      '<img alt="Sona Hymn of Valor 2.png" src="/wiki/images/Sona_Hymn_of_Valor_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b><span class="inline-image label-only ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Melody</a></span></span> Bonus:</b></span> <b>Sona</b> and tagged allied champions deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> on their next basic attack within a few seconds.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord_2" title="Power Chord"><img alt="Power Chord" src="/wiki/images/Sona_Power_Chord_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord_2" title="Sona/LoL">Power Chord</a></span></span> – Staccato:</b></span> <i>Power Chord</i> deals <span style="color: #00B0F0; white-space:normal"><b>increased</b> magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Hymn_of_Valor.png',
        description:
          'Active: Sona sends out bolts of sound to the two nearest  visible enemies, prioritizing champions. Each bolt deals magic damage and grants  sight of the area around the target for 1 second.Sona gains a stack of  Accelerando for each bolt that hits an enemy  champion.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sona</b> sends out bolts of sound to the two nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies, prioritizing champions. Each bolt deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around the target for 1 second.<br><br><b>Sona</b> gains a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord" title="Accelerando"><img alt="Accelerando" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Accelerando</a></span></span></i> for each bolt that hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Each bolt deals magic damage and grants  sight of the area around the target for 1 second.Sona gains a stack of  Accelerando for each bolt that hits an enemy  champion.',
            min: 0,
            max: 10,
            description:
              'Each bolt deals magic damage and grants  sight of the area around the target for 1 second.Sona gains a stack of  Accelerando for each bolt that hits an enemy  champion.',
            values: 1,
            units: 'genericStacks',
            unitsText:
              'bolt deals magic damage and grants  sight of the area around the target for 1 second.Sona gains a stack of  Accelerando for each bolt that hits an enemy  champion.',
            pre: 'Each bolt deals magic damage and grants  sight of the area around the target for 1 second.Sona gains a stack of  Accelerando for each bolt that hits an enemy  champion.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 80 / 110 / 140 / 170 (+ 40% AP)',
            valuesHTML:
              '50 / 80 / 110 / 140 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 40% AP)',
            damagetype: 'Magic',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Sona_Hymn_of_Valor_2.png',
        description:
          'Melody Bonus: Sona and tagged allied champions deal bonus magic damage on their next basic attack within 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-only ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Melody</a></span></span> Bonus:</b></span> <b>Sona</b> and tagged allied champions deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> on their next basic attack within 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Melody Bonus:',
            raw: 'Sona and tagged allied champions deal bonus magic damage on their next basic attack within 5 seconds.',
            damagetype: 'Magic',
            values: 5,
            units: 'bonus_ad',
            unitsText:
              'and tagged allied champions deal bonus magic damage on their next basic attack within 5 seconds.',
            pre: 'Sona and tagged allied champions deal bonus magic damage on their next basic attack within 5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '10 / 15 / 20 / 25 / 30 (+ 20% AP)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 20% AP)',
            damagetype: 'Magic',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
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
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The sight is granted of the targets on-cast.\n<ul><li>The empowered attack will trigger but not be consumed against <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  'Aria of Perseverance': {
    name: 'Aria of Perseverance',
    display_name: 'Aria of Perseverance',
    champion: 'Sona',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SonaW.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Heal search range">1000</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Aura radius, center-to-edge">400</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Heal missile speed">1300</span>',
    cast_time: 'none',
    cost: '80 / 85 / 90 / 95 / 100',
    costtype: 'mana',
    cooldown: '10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL" title="Sona"><img alt="Sona" src="/wiki/images/Sona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL" title="Sona/LoL">Sona</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and projects a sound bolt that heals the most wounded allied champion nearby.',
      '<img alt="Sona Aria of Perseverance 2.png" src="/wiki/images/Sona_Aria_of_Perseverance_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b><span class="inline-image label-only ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Melody</a></span></span> Bonus:</b></span> <b>Sona</b> and tagged allied champions receive a brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>.',
      '<b>Sona</b> gains a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord" title="Accelerando"><img alt="Accelerando" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Accelerando</a></span></span></i> whenever she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> an ally or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> a minimum amount of damage for an ally with <i>Aria of Perseverance</i>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord_2" title="Power Chord"><img alt="Power Chord" src="/wiki/images/Sona_Power_Chord_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord_2" title="Sona/LoL">Power Chord</a></span></span> – Diminuendo:</b></span> <i>Power Chord</i> reduces the target\'s <a href="/wiki/Size" title="Size">size</a> and damage output for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Aria_of_Perseverance.png',
        description:
          'Active: Sona  heals herself and sends out a tone to heal the most wounded allied champion nearby.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sona</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and sends out a tone to heal the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Based on greatest % missing health">most wounded</span> allied champion nearby.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Heal:',
            values: '30 / 45 / 60 / 75 / 90 (+ 15% AP)',
            valuesHTML:
              '30 / 45 / 60 / 75 / 90 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 15% AP)',
            healType: 'DrainEffect',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Sona_Aria_of_Perseverance_2.png',
        description:
          'Melody Bonus: Sona and tagged allied champions are granted a  shield for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-only ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Melody</a></span></span> Bonus:</b></span> <b>Sona</b> and tagged allied champions are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Melody Bonus:',
            raw: 'Sona and tagged allied champions are granted a  shield for 1.5 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'and tagged allied champions are granted a  shield for 1.5 seconds.',
            pre: 'Sona and tagged allied champions are granted a  shield for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '25 / 45 / 65 / 85 / 105 (+ 25% AP)',
            valuesHTML:
              '25 / 45 / 65 / 85 / 105 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '25 / 45 / 65 / 85 / 105 (+ 25% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [25, 45, 65, 85, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 45 / 65 / 85 / 105',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Sona gains a stack of  Accelerando whenever she  heals a wounded ally or  shields a minimum amount of damage for an ally with Aria of Perseverance.',
        descriptionHTML:
          '<b>Sona</b> gains a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord" title="Accelerando"><img alt="Accelerando" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Accelerando</a></span></span></i> whenever she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> a wounded ally or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> a minimum amount of damage for an ally with <i>Aria of Perseverance</i>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Damage Mitigated:',
            values: '25 / 45 / 65 / 85 / 105',
            valuesHTML: '25 / 45 / 65 / 85 / 105',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Damage Mitigated:',
            raw: '25 / 45 / 65 / 85 / 105',
            damagetype: 'None',
            values: [25, 45, 65, 85, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 45 / 65 / 85 / 105',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects:
      '<a href="/wiki/Self-targeted" title="Self-targeted">Self</a>, Allies',
    spelleffects: 'Heal',
    notes:
      '* If no one is injured, <i>Aria of Perseverance</i> will target the closest allied champion.\n<ul><li>The projectile of <i>Aria of Perseverance</i> will follow an ally in stealth but will not reveal them.</li></ul>',
  },
  'Song of Celerity': {
    name: 'Song of Celerity',
    display_name: 'Song of Celerity',
    champion: 'Sona',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SonaE.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Aura radius, center-to-edge">400</span>',
    cast_time: 'none',
    cost: '65',
    costtype: 'mana',
    cooldown: '14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL" title="Sona"><img alt="Sona" src="/wiki/images/Sona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL" title="Sona/LoL">Sona</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time, which is extended to a few seconds if she does not take damage during this time.',
      '<img alt="Sona Song of Celerity 2.png" src="/wiki/images/Sona_Song_of_Celerity_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b><span class="inline-image label-only ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Melody</a></span></span> Bonus:</b></span> Tagged allied champions gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord_2" title="Power Chord"><img alt="Power Chord" src="/wiki/images/Sona_Power_Chord_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord_2" title="Sona/LoL">Power Chord</a></span></span> – Tempo:</b></span> <i>Power Chord</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the target for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Song_of_Celerity.png',
        description:
          'Active: Sona gains  20% (+ 2% per 100 AP) bonus movement speed for 7 seconds. If she takes damage during this time, the duration ends prematurely once or if 3 seconds have elapsed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sona</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 7 seconds. If she takes damage during this time, the duration ends prematurely once or if 3 seconds have elapsed.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Sona gains  20% (+ 2% per 100 AP) bonus movement speed for 7 seconds',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed for 7 seconds',
            pre: 'Sona gains  20%',
            post: 'bonus movement speed for 7 seconds',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If she takes damage during this time, the duration ends prematurely once or if 3 seconds have elapsed.',
            damagetype: 'None',
            values: 3,
            units: 'total_ap',
            unitsText:
              'she takes damage during this time, the duration ends prematurely once or if 3 seconds have elapsed.',
            pre: 'If she takes damage during this time, the duration ends prematurely once or if 3 seconds have elapsed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Sona_Song_of_Celerity_2.png',
        description:
          'Melody Bonus: Tagged allied champions gain bonus movement speed for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-only ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Melody</a></span></span> Bonus:</b></span> Tagged allied champions gain <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Melody Bonus:',
            raw: 'Tagged allied champions gain bonus movement speed for 3 seconds.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'allied champions gain bonus movement speed for 3 seconds.',
            pre: 'Tagged allied champions gain bonus movement speed for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '10 / 11 / 12 / 13 / 14% (+ 2% per 100 AP)',
            valuesHTML:
              '10 / 11 / 12 / 13 / 14% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '10 / 11 / 12 / 13 / 14% (+ 2% per 100 AP)',
            damagetype: 'None',
            values: [10, 11, 12, 13, 14],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 11 / 12 / 13 / 14%',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Allies',
    notes:
      '* To achieve a 99% <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> with the empowered attack via <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord" title="Power Chord"><img alt="Power Chord" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Power Chord</a></span></span>, it would require at least <span style="color: #7A6DFF; white-space:normal">1475 AP</span>.',
  },
  Crescendo: {
    name: 'Crescendo',
    display_name: 'Crescendo',
    champion: 'Sona',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SonaR.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1000',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 280',
    speed: '2400',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '140 / 120 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL" title="Sona"><img alt="Sona" src="/wiki/images/Sona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL" title="Sona/LoL">Sona</a></span></span> strikes an irresistible chord in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, which briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> and forces them to dance.',
    ],
    description: [
      {
        icon: '/wiki/images/Crescendo.png',
        description:
          'Active: Sona strikes an irresistible chord in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sona</b> strikes an irresistible chord in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Sona strikes an irresistible chord in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'strikes an irresistible chord in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
            pre: 'Sona strikes an irresistible chord in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 250 / 350 (+ 50% AP)',
            valuesHTML:
              '150 / 250 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 250 / 350 (+ 50% AP)',
            damagetype: 'Magic',
            values: [150, 250, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 250 / 350',
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
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Sona_Original_R_1.ogg   "Crescendo!"',
  },
} satisfies { [skillName in string]: SkillData };
