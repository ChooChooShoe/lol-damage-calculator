import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Shen';

export default {
  'Ki Barrier': {
    name: 'Ki Barrier',
    display_name: 'Ki Barrier',
    champion: 'Shen',
    skill: 'I',
    image: {
      full: 'Shen_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    static: '10',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <b>Shen</b> manifests a <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> that he can control with his abilities.',
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL" title="Shen\'s"><img alt="Shen\'s" src="/wiki/images/Shen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL" title="Shen/LoL">Shen\'s</a></span></span> ability casts grant him a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> based on <span style="color: #1F995C; white-space:normal">his <b>bonus</b> health</span> for a short time. If the triggering ability successfully affected at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <i>Ki Barrier\'s</i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Ki_Barrier.png',
        description:
          "Innate: After completing an ability's effects, Shen grants himself a  shield for 50 − 101 (based on level) (+ 12% bonus health) for 2.5 seconds. If the triggering ability successfully affected at least one enemy  champion, Ki Barrier's  cooldown is reduced by 4 − 7.5 (based on level) seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> After completing an <a href="/wiki/Champion_ability" title="Champion ability">ability\'s</a> effects, <b>Shen</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="101;" data-bot_values="50;53;56;59;62;65;68;71;74;77;80;83;86;89;92;95;98;101" data-top_values="">50 − 101 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;12% <b>bonus</b> health)</span> for 2.<small>5</small> seconds. If the triggering ability successfully affected at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <i>Ki Barrier\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="4;4.5;5;5.5;6;6.5;7;7.5" data-top_values="1;6;9;12;14;16;17;18">4 − 7.<small>5</small> (based on level)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: "After completing an ability's effects, Shen grants himself a  shield for 50 − 101 (based on level) (+ 12% bonus health) for 2.5 seconds",
            healType: 'BonusHealth',
            values: [
              50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95,
              98, 101,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'for 2.5 seconds',
            pre: "After completing an ability's effects, Shen grants himself a  shield for 50 − 101",
            post: 'for 2.5 seconds',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 12% bonus health',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: "If the triggering ability successfully affected at least one enemy  champion, Ki Barrier's  cooldown is reduced by 4 − 7.5 (based on level) seconds.",
            values: [
              4, 4.21, 4.41, 4.62, 4.82, 5.03, 5.24, 5.44, 5.65, 5.85, 6.06,
              6.26, 6.47, 6.68, 6.88, 7.09, 7.29, 7.5,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'seconds.',
            pre: "If the triggering ability successfully affected at least one enemy  champion, Ki Barrier's  cooldown is reduced by 4 − 7.5",
            post: 'seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Shen manifests a Spirit Blade that he can control with  Twilight Assault and  Spirit's Refuge.",
        descriptionHTML:
          '<b>Shen</b> manifests a <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> that he can control with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Twilight Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Twilight Assault"><img alt="Twilight Assault" src="/wiki/images/Shen_Twilight_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Shen/LoL">Twilight Assault</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Spirit\'s Refuge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Spirit\'s Refuge"><img alt="Spirit\'s Refuge" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Shen/LoL">Spirit\'s Refuge</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Shield',
    notes:
      '* The <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> spawns with <b>Shen</b>, teleports closer to him if he gets too far away, and instantly blinks to him if he uses any global <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> (<span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>, <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>, or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Stand United" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Stand_United" title="Stand United"><img alt="Stand United" src="/wiki/images/Shen_Stand_United.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Stand_United" title="Shen/LoL">Stand United</a></span></span>). It will also dissappear if <b>Shen</b> dies and reappear upon <a href="/wiki/Death" title="Death">respawning</a>.\n<ul><li>Enemies see an arrow pointing from <b>Shen</b> to the location of his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> even if it is not visible.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Twilight Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Twilight Assault"><img alt="Twilight Assault" src="/wiki/images/Shen_Twilight_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Shen/LoL">Twilight Assault</a></span></span> will grant the shield if the <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> reaches <b>Shen</b>. If it is stopped, no shield is granted.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Spirit\'s Refuge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Spirit\'s Refuge"><img alt="Spirit\'s Refuge" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Shen/LoL">Spirit\'s Refuge</a></span></span> will give the shield after the protective zone disappears.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Shadow Dash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Shadow_Dash" title="Shadow Dash"><img alt="Shadow Dash" src="/wiki/images/Shen_Shadow_Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Shadow_Dash" title="Shen/LoL">Shadow Dash</a></span></span> will give the shield when the dash ends.\n<ul><li>If the dash is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>, the shield will instead be received the moment the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> source is applied, before damage calculation (if any).</li></ul></li></ul>',
  },
  'Twilight Assault': {
    name: 'Twilight Assault',
    display_name: 'Twilight Assault',
    champion: 'Shen',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ShenQ.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recall range">Global</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Chasing blade missile width">160</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Acceleration 2000 per second">2000 - 5000</span>',
    cast_time: 'none',
    cost: '140 / 130 / 120 / 110 / 100',
    costtype: 'energy',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">8 / 7.<small>25</small> / 6.<small>5</small> / 5.<small>75</small> / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL" title="Shen"><img alt="Shen" src="/wiki/images/Shen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL" title="Shen/LoL">Shen</a></span></span> recalls his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> to his location, which shortly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit while moving away from him.',
      'Once it arrives, <b>Shen</b> empowers his next three basic attacks within a period to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
      'If the <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> hit at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> during the travel, the empowerment is enhanced and additionally grants him <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Twilight_Assault.png',
        description:
          'Active: Shen recalls his Spirit Blade to his location. Enemy champions hit are  slowed for the next 2 seconds while moving away from Shen.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shen</b> recalls his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> to his location. Enemy champions hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for the next 2 seconds while moving away from <b>Shen</b>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Enemy champions hit are  slowed for the next 2 seconds while moving away from Shen.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'champions hit are  slowed for the next 2 seconds while moving away from Shen.',
            pre: 'Enemy champions hit are  slowed for the next 2 seconds while moving away from Shen.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '15 / 20 / 25 / 30 / 35%',
            valuesHTML: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
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
        icon: '/wiki/images/Twilight_Assault_2.png',
        description:
          'Once it arrives, Shen empowers his next 3 basic attacks within 8 seconds to gain  75 bonus range and deal bonus magic damage.',
        descriptionHTML:
          'Once it arrives, <b>Shen</b> empowers his next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 8 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> range</span> and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Once it arrives, Shen empowers his next 3 basic attacks within 8 seconds to gain  75 bonus range and deal bonus magic damage.',
            increasedStat: 'bonus_ad',
            values: 3,
            units: '',
            unitsText:
              'it arrives, Shen empowers his next 3 basic attacks within 8 seconds to gain  75 bonus range and deal bonus magic damage.',
            pre: 'Once it arrives, Shen empowers his next 3 basic attacks within 8 seconds to gain  75 bonus range and deal bonus magic damage.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values:
              "10 − 40 (based on level) (+ 2 / 2.5 / 3 / 3.5 / 4% (+ 1.5% per 100 AP) of target's maximum health)",
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="40;16" data-bot_values="10;16;22;28;34;40" data-top_values="1;4;7;10;13;16">10 − 40 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;2 / 2.<small>5</small> / 3 / 3.<small>5</small> / 4% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1.<small>5</small>% per 100 AP)</span> of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "10 − 40 (based on level) (+ 2 / 2.5 / 3 / 3.5 / 4% (+ 1.5% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [
              10, 11.76, 13.53, 15.29, 17.06, 18.82, 20.59, 22.35, 24.12, 25.88,
              27.65, 29.41, 31.18, 32.94, 34.71, 36.47, 38.24, 40,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 − 40',
            children: [
              {
                values: [2, 2.5, 3, 3.5, 4],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 2 / 2.5 / 3 / 3.5 / 4%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 1.5,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 1.5% per 100 AP',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Twilight_Assault_3.png',
        description:
          'If the Spirit Blade hit at least one enemy  champion during the travel, the empowerment is enhanced to deal increased bonus magic damage and additionally grant Shen  50% bonus attack speed.',
        descriptionHTML:
          'If the <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> hit at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> during the travel, the empowerment is enhanced to deal increased <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and additionally grant <b>Shen</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">50% <b>bonus</b> attack speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'If the Spirit Blade hit at least one enemy  champion during the travel, the empowerment is enhanced to deal increased bonus magic damage and additionally grant Shen  50% bonus attack speed.',
            increasedStat: 'bonus_ad',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus attack speed.the Spirit Blade hit at least one enemy  champion during the travel, the empowerment is enhanced to deal increased bonus magic damage and additionally grant Shen  50',
            pre: 'If the Spirit Blade hit at least one enemy  champion during the travel, the empowerment is enhanced to deal increased bonus magic damage and additionally grant Shen  50% bonus attack speed.',
          },
        ],
        leveling: [
          {
            name: 'Increased Bonus Damage:',
            values:
              "10 − 40 (based on level) (+ 4 / 4.5 / 5 / 5.5 / 6% (+ 2% per 100 AP) of target's maximum health)",
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="40;16" data-bot_values="10;16;22;28;34;40" data-top_values="1;4;7;10;13;16">10 − 40 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;4 / 4.<small>5</small> / 5 / 5.<small>5</small> / 6% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Increased Bonus Damage:',
            raw: "10 − 40 (based on level) (+ 4 / 4.5 / 5 / 5.5 / 6% (+ 2% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [
              10, 11.76, 13.53, 15.29, 17.06, 18.82, 20.59, 22.35, 24.12, 25.88,
              27.65, 29.41, 31.18, 32.94, 34.71, 36.47, 38.24, 40,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 − 40',
            children: [
              {
                values: [4, 4.5, 5, 5.5, 6],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 4 / 4.5 / 5 / 5.5 / 6%',
                post: "of target's maximum health",
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
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Empowered attacks against  monsters deal 100% bonus damage, but their total damage is capped.',
        descriptionHTML:
          'Empowered attacks against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> deal 100% <b>bonus</b> damage, but their <b>total</b> damage is capped.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Empowered attacks against  monsters deal 100% bonus damage, but their total damage is capped.',
            increasedStat: 'total_ap',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus damage, but their total damage is capped.attacks against  monsters deal 100',
            pre: 'Empowered attacks against  monsters deal 100% bonus damage, but their total damage is capped.',
          },
        ],
        leveling: [
          {
            name: 'Maximum Monster Damage:',
            values: '120 / 140 / 160 / 180 / 200',
            valuesHTML: '120 / 140 / 160 / 180 / 200',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Maximum Monster Damage:',
            raw: '120 / 140 / 160 / 180 / 200',
            damagetype: 'None',
            values: [120, 140, 160, 180, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 140 / 160 / 180 / 200',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Spell',
    spellshield: true,
    projectile: 'Special',
    notes:
      '* The <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> will stop in place upon colliding with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>. If this occurs, <b>Shen</b> will not receive the empowered attacks.\n<ul><li>When it is called, the <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> also checks for units which\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">gameplay radius</a></span> it overlaps which (equal to a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 0 radius check) before flying off, allowing it to hit enemies whose center is behind the missile origin.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  "Spirit's Refuge": {
    name: "Spirit's Refuge",
    display_name: "Spirit's Refuge",
    champion: 'Shen',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ShenW.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    cast_time: 'none',
    cost: '40',
    costtype: 'energy',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the duration ends">18 / 16.<small>5</small> / 15 / 13.<small>5</small> / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL" title="Shen"><img alt="Shen" src="/wiki/images/Shen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL" title="Shen/LoL">Shen</a></span></span> primes his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span>, creating an area around it. After a short time, or when <b>Shen</b> or allied champions enter the area, the <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> briefly erupts a protective zone that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocks</a></span> enemy basic attacks that hit <b>Shen</b> or allied champions in the area.',
    ],
    description: [
      {
        icon: "/wiki/images/Spirit's_Refuge.png",
        description:
          'Active: Shen primes his Spirit Blade, creating an area around it. After 2 seconds, or when Shen or an allied champion enter the area, the Spirit Blade erupts a protective zone for 1.75 seconds,  blocking all non- turret basic attacks that hit Shen or allied champions in the area.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shen</b> primes his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span>, creating an area around it. After 2 seconds, or when <b>Shen</b> or an allied champion enter the area, the <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> erupts a protective zone for 1.<small>75</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span> all non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> basic attacks that hit <b>Shen</b> or allied champions in the area.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'After 2 seconds, or when Shen or an allied champion enter the area, the Spirit Blade erupts a protective zone for 1.75 seconds,  blocking all non- turret basic attacks that hit Shen or allied champions in the area.',
            damagetype: 'None',
            values: 2,
            units: 'total_ad',
            unitsText:
              '2 seconds, or when Shen or an allied champion enter the area, the Spirit Blade erupts a protective zone for 1.75 seconds,  blocking all non- turret basic attacks that hit Shen or allied champions in the area.',
            pre: 'After 2 seconds, or when Shen or an allied champion enter the area, the Spirit Blade erupts a protective zone for 1.75 seconds,  blocking all non- turret basic attacks that hit Shen or allied champions in the area.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Allies',
    notes:
      '* <i>Spirit\'s Refuge\'s</i> protective zone can be moved while active if <b>Shen</b> uses <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Twilight Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Twilight Assault"><img alt="Twilight Assault" src="/wiki/images/Shen_Twilight_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Shen/LoL">Twilight Assault</a></span></span>.\n<ul><li><i>Spirit\'s Refuge</i> cannot be ranked up at <a href="/wiki/Experience_(champion)" title="Experience (champion)">Level</a> 1.</li>\n<li><i>Spirit\'s Refuge</i> will also block damage from all abilities that use <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> (<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Lunge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Lunge" title="Lunge"><img alt="Lunge" src="/wiki/images/Fiora_Lunge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Lunge" title="Fiora/LoL">Lunge</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-ability="Mystic Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL#Mystic_Shot" title="Mystic Shot"><img alt="Mystic Shot" src="/wiki/images/Ezreal_Mystic_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL#Mystic_Shot" title="Ezreal/LoL">Mystic Shot</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Steel Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Steel Tempest"><img alt="Steel Tempest" src="/wiki/images/Yasuo_Steel_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Steel_Tempest" title="Yasuo/LoL">Steel Tempest</a></span></span>).</li></ul>',
  },
  'Shadow Dash': {
    name: 'Shadow Dash',
    display_name: 'Shadow Dash',
    champion: 'Shen',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ShenE.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '600 / 300',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Start location check radius">50</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Check radius during dash and at dash end">60</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed, slightly irregular">800 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span></span>',
    cast_time: 'none',
    cost: '150',
    costtype: 'energy',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the dash ends">18 / 16 / 14 / 12 / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Dealing damage with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Twilight Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Twilight Assault"><img alt="Twilight Assault" src="/wiki/images/Shen_Twilight_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Shen/LoL">Twilight Assault</a></span></span></i> or <i>Shadow Dash</i> will restore <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">energy</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL" title="Shen"><img alt="Shen" src="/wiki/images/Shen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL" title="Shen/LoL">Shen</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunting</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> he passes through and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> based on <span style="color: #1F995C; white-space:normal">his <b>bonus</b> health</span>.',
    ],
    description: [
      {
        description:
          'Passive: Dealing damage with  Twilight Assault or Shadow Dash restores  30 / 40 / 50 (based on level) energy.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Dealing damage with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Twilight Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Twilight Assault"><img alt="Twilight Assault" src="/wiki/images/Shen_Twilight_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Shen/LoL">Twilight Assault</a></span></span></i> or <i>Shadow Dash</i> restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="30;40;50" data-top_values="1;4;12">30 / 40 / 50 (based on level)</span> energy</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: 'Dealing damage with  Twilight Assault or Shadow Dash restores  30 / 40 / 50 (based on level) energy.',
            damagetype: 'None',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'energy.',
            pre: 'Dealing damage with  Twilight Assault or Shadow Dash restores  30 / 40 / 50',
            post: 'energy.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Shadow_Dash.png',
        description:
          'Active: Shen  dashes to the target location, dealing physical damage to enemy  champions and  monsters he passes through and  taunting them for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shen</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> he passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunting</a></span> them for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Shen  dashes to the target location, dealing physical damage to enemy  champions and  monsters he passes through and  taunting them for 1.5 seconds.',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'dashes to the target location, dealing physical damage to enemy  champions and  monsters he passes through and  taunting them for 1.5 seconds.',
            pre: 'Shen  dashes to the target location, dealing physical damage to enemy  champions and  monsters he passes through and  taunting them for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 85 / 110 / 135 / 160 (+ 15% bonus health)',
            valuesHTML:
              '60 / 85 / 110 / 135 / 160 <span style="color: #1F995C; white-space:normal">(+&nbsp;15% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 15% bonus health)',
            healType: 'PhysicalVamp',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 15% bonus health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Twilight Assault and  Spirit's Refuge can be cast during the dash. Shadow Dash will cast at max range if cast beyond that.",
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Twilight Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Twilight Assault"><img alt="Twilight Assault" src="/wiki/images/Shen_Twilight_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Shen/LoL">Twilight Assault</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Spirit\'s Refuge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Spirit\'s Refuge"><img alt="Spirit\'s Refuge" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Shen/LoL">Spirit\'s Refuge</a></span></span> can be cast during the dash. Shadow Dash will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* Casting <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during <i>Shadow Dash</i> will end the dash prematurely, but the end-of-dash collision check will hit enemies at the <a href="/wiki/Blink" title="Blink">blink\'s</a> location still.\n<ul><li><ul><li>This still cannot affect the same enemy more than once.</li></ul></li>\n<li>The energy restore from <i>Shadow Dash</i> may only occur once.</li></ul>',
  },
  'Stand United': {
    name: 'Stand United',
    display_name: 'Stand United',
    champion: 'Shen',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ShenR.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: 'Global',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">200 / 190 / 180 / 170 / 160</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL" title="Shen"><img alt="Shen" src="/wiki/images/Shen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL" title="Shen/LoL">Shen</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a short time, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span> the target allied champion for a few seconds. The <span style="white-space:nowrap"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;shield</span> is based on <span style="color: #1F995C; white-space:normal">his <b>bonus</b> health</span> and increases based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.',
      'Upon completing the channel, <b>Shen</b> and his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to the target ally, placed between them and the nearest enemy champion.',
    ],
    description: [
      {
        icon: '/wiki/images/Stand_United.png',
        description:
          "Active: Shen  channels for 3 seconds and granting a  shield to the target allied champion at the time of cast for up to 5 seconds, increased by 0% − 60% (based on target's missing health).",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Shen</b> <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="Stand United Minimap.png" src="/wiki/images/Stand_United_Minimap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel">channels</a></span> for 3 seconds and granting a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to the target allied champion at the time of cast for up to 5 seconds, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="1% per 1% of target\'s \'\'\'missing\'\'\' health. \'\'This is capped at 60% \'\'\'missing\'\'\' health.\'\'" data-bot_values="0;10;20;30;40;50;60" data-top_values="0;10;20;30;40;50;60" data-bot_key="%" data-top_key="%">0% − 60% (based on target\'s <b>missing</b> health)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: "Shen  channels for 3 seconds and granting a  shield to the target allied champion at the time of cast for up to 5 seconds, increased by 0% − 60% (based on target's missing health).",
            healType: 'OutgoingHeals',
            values: 3,
            valuesIsPercent: true,
            basedOn: "target's missing health",
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Shen  channels for 3 seconds and granting a  shield to the target allied champion at the time of cast for up to 5 seconds, increased by 0% − 60%',
            post: '.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Shield Strength:',
            values:
              '130 / 210 / 290 / 370 / 450 (+ 135% AP) (+ 16% bonus health)',
            valuesHTML:
              '130 / 210 / 290 / 370 / 450 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;135% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;16% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Shield Strength:',
            raw: '130 / 210 / 290 / 370 / 450 (+ 135% AP) (+ 16% bonus health)',
            healType: 'BonusHealth',
            values: [130, 210, 290, 370, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '130 / 210 / 290 / 370 / 450',
            children: [
              {
                values: 135,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 135% AP',
              },
              {
                values: 16,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 16% bonus health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Stand_United_2.png',
        description:
          "Upon completing the channel, Shen and his Spirit Blade  blink to the target ally's location, placed between them and the nearest enemy champion. Shen also  destroys any  projectiles targeting him at the time of completion.",
        descriptionHTML:
          'Upon completing the channel, <b>Shen</b> and his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to the target ally\'s location, placed between them and the nearest enemy champion. <b>Shen</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroys</a></span> any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> targeting him at the time of completion.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Allies',
    spelleffects: 'Shield',
    notes:
      '* <i>Stand United</i> can target allies via the <a href="/wiki/Map_(League_of_Legends)" title="Map (League of Legends)">mini map</a> or on their portraits or by using the <span class="template_sbc"><b>F2 - F5</b></span> keys (none of this can be done if <b>Shen</b> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span> or his target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>).\n<ul><li><b>Shen</b> will turn to face towards his target ally at the start of the channel.\n<ul><li>If the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealthed</a></span>, enemies could, in theory, use this to estimate their location.</li></ul></li>\n<li><b>Shen</b> will channel so long as his target is alive (even if the granted shield is broken). If his target dies, the channel is canceled and <i>Stand United</i> goes on full cooldown.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">Interrupting</a></span> <i>Stand United\'s</i> channel will not remove the shield prematurely.</li></ul></li>\n<li>The target\'s screen will glow purple to telegraph that <b>Shen</b> has targeted them with <i>Stand United</i>.\n<ul><li>It will change back when the channel ends.</li></ul></li>\n<li>Shen finds the nearest visible enemy champion within 2000 range from the ally or the nearest invisible champion within 600 range to place himself 175 units from his ally towards that enemy.</li>\n<li>The following table refers for interactions while <b>Shen</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
