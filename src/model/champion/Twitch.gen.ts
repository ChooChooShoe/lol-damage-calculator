import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Twitch';

export default {
  'Deadly Venom': {
    name: 'Deadly Venom',
    display_name: 'Deadly Venom',
    champion: 'Twitch',
    skill: 'I',
    image: {
      full: 'Twitch_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL" title="Twitch\'s"><img alt="Twitch\'s" src="/wiki/images/Twitch_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL" title="Twitch/LoL">Twitch\'s</a></span></span> basic attacks apply stacks of <i>Deadly Venom</i> for a few seconds, which stacks up to a cap.',
      '<span class="template_sbc"><b>Deadly Venom:</b></span> For each stack, the target is continually dealt <span style="color: #F9966B; white-space:normal">true damage</span>. This effect is considered a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span>.',
    ],
    description: [
      {
        description:
          "Innate: Twitch's basic attacks  on-hit apply a stack of Deadly Venom for 6 seconds, refreshing on subsequent applications and stacking up to 6 times.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Twitch\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Deadly Venom</i> for 6 seconds, refreshing on subsequent applications and stacking up to 6 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: "Twitch's basic attacks  on-hit apply a stack of Deadly Venom for 6 seconds, refreshing on subsequent applications and stacking up to 6 times.",
            min: 0,
            max: 6,
            description:
              "Twitch's basic attacks  on-hit apply a stack of Deadly Venom for 6 seconds, refreshing on subsequent applications and stacking up to 6 times.",
            values: 6,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit apply a stack of Deadly Venom for 6 seconds, refreshing on subsequent applications and stacking up to 6 times.',
            pre: "Twitch's basic attacks  on-hit apply a stack of Deadly Venom for 6 seconds, refreshing on subsequent applications and stacking up to 6 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Deadly_Venom.png',
        description:
          'Deadly Venom: For each stack, the target is dealt「  1 / 2 / 3 / 4 / 5 (based on level) (+ 3% AP) true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) total true damage over the duration, 」for a maximum of「 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) true damage with each tick. 」「 36 / 72 / 108 / 144 / 180 (based on level) (+ 108% AP) total true damage over the duration. 」This effect is considered a  poison.',
        descriptionHTML:
          '<span class="template_sbc"><b>Deadly Venom:</b></span> For each stack, the target is dealt<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="1 every 4 levels" data-bot_values="1;2;3;4;5" data-top_values="1;5;9;13;17">1 / 2 / 3 / 4 / 5 (based on level)</span></span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% AP)</span> <span style="color: #F9966B; white-space:normal">true damage</span> per second over the duration,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="1 every 4 levels" data-bot_values="6;12;18;24;30" data-top_values="1;5;9;13;17">6 / 12 / 18 / 24 / 30 (based on level)</span></span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> <span style="color: #F9966B; white-space:normal"><b>total</b> true damage</span> over the duration,&nbsp;」</span></span>for a maximum of<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="6 every 4 levels" data-bot_values="6;12;18;24;30" data-top_values="1;5;9;13;17">6 / 12 / 18 / 24 / 30 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> <span style="color: #F9966B; white-space:normal">true damage</span> with each tick.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="6 every 4 levels" data-bot_values="36;72;108;144;180" data-top_values="1;5;9;13;17">36 / 72 / 108 / 144 / 180 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;108% AP)</span> <span style="color: #F9966B; white-space:normal"><b>total</b> true damage</span> over the duration.&nbsp;」</span></span>This effect is considered a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Deadly Venom:',
            raw: 'For each stack, the target is dealt「  1 / 2 / 3 / 4 / 5 (based on level) (+ 3% AP) true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) total true damage over the duration, 」for a maximum of「 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) true damage with each tick. 」「 36 / 72 / 108 / 144 / 180 (based on level) (+ 108% AP) total true damage over the duration. 」This effect is considered a  poison.',
            min: 0,
            max: 10,
            description:
              'For each stack, the target is dealt「  1 / 2 / 3 / 4 / 5 (based on level) (+ 3% AP) true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) total true damage over the duration, 」for a maximum of「 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) true damage with each tick. 」「 36 / 72 / 108 / 144 / 180 (based on level) (+ 108% AP) total true damage over the duration. 」This effect is considered a  poison.',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30',
            pre: 'For each stack, the target is dealt「  1 / 2 / 3 / 4 / 5',
            post: 'true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30',
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 3% AP',
              },
              {
                values: 18,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 18% AP',
              },
              {
                values: 18,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 18% AP',
              },
              {
                values: 108,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 108% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'True',
    spelleffects: 'default',
    spellshield: false,
    notes:
      '* The first 5 stacks on a target are indicated each by a small mark around them, while a target affected by the maximum stacks of 6 is indicated by a single large mark above them instead.\n<ul><li><i>Deadly Venom</i> does not affect <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li>\n<li>Being applied on-hit, <i>Deadly Venom</i> stacks will still be applied if the attack was <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Riposte" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Riposte" title="parried"><img alt="parried" src="/wiki/images/Fiora_Riposte.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Riposte" title="Fiora/LoL">parried</a></span></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, but not if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and/or missed if <b>Twitch</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li></ul>',
  },
  Ambush: {
    name: 'Ambush',
    display_name: 'Ambush',
    champion: 'Twitch',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'TwitchHideInShadows.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">16</span>',
    customlabel: 'Detection Radius',
    custominfo: '500',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL" title="Twitch"><img alt="Twitch" src="/wiki/images/Twitch_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL" title="Twitch/LoL">Twitch</a></span></span> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflaged</a></span> for some time, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, increased while facing enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that cannot see him.',
      'Upon breaking stealth, <b>Twitch</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
      'When an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> dies while afflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i>, <i>Ambush\'s</i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Ambush.png',
        description:
          'Active: After a 1-second delay, Twitch becomes  camouflaged for a duration. Attacking or casting  Venom Cask or  Contaminate ends Ambush immediately.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> After a 1-second delay, <b>Twitch</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflaged</a></span> for a duration. Attacking or casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Venom Cask" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Venom_Cask" title="Venom Cask"><img alt="Venom Cask" src="/wiki/images/Twitch_Venom_Cask.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Venom_Cask" title="Twitch/LoL">Venom Cask</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Contaminate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Contaminate" title="Contaminate"><img alt="Contaminate" src="/wiki/images/Twitch_Contaminate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Contaminate" title="Twitch/LoL">Contaminate</a></span></span></i> ends <i>Ambush</i> immediately.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'After a 1-second delay, Twitch becomes  camouflaged for a duration',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'a 1-second delay, Twitch becomes  camouflaged for a duration',
            pre: 'After a 1-second delay, Twitch becomes  camouflaged for a duration',
          },
        ],
        leveling: [
          {
            name: 'Stealth Duration:',
            values: '10 / 11 / 12 / 13 / 14',
            valuesHTML: '10 / 11 / 12 / 13 / 14',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Stealth Duration:',
            raw: '10 / 11 / 12 / 13 / 14',
            values: [10, 11, 12, 13, 14],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 11 / 12 / 13 / 14',
          },
        ],
      },
      {
        icon: '/wiki/images/Ambush_2.png',
        description:
          'During this time, Twitch gains  10% bonus movement speed, increased to 30% while facing enemy  champions within a 1000-unit radius who cannot see him.',
        descriptionHTML:
          'During this time, <b>Twitch</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span>, increased to <span style="color: #F5EE99; white-space:normal">30%</span> while facing enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within a 1000-unit radius who cannot see him.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'During this time, Twitch gains  10% bonus movement speed, increased to 30% while facing enemy  champions within a 1000-unit radius who cannot see him.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed, increased to 30this time, Twitch gains  10',
            pre: 'During this time, Twitch gains  10% bonus movement speed, increased to 30% while facing enemy  champions within a 1000-unit radius who cannot see him.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Ambush_3.png',
        description:
          'Upon breaking stealth, Twitch gains  bonus attack speed for 5 seconds.',
        descriptionHTML:
          'Upon breaking stealth, <b>Twitch</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Upon breaking stealth, Twitch gains  bonus attack speed for 5 seconds.',
            increasedStat: 'bonus_ad',
            values: 5,
            units: '',
            unitsText:
              'breaking stealth, Twitch gains  bonus attack speed for 5 seconds.',
            pre: 'Upon breaking stealth, Twitch gains  bonus attack speed for 5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "When an enemy  champion dies while afflicted with  Deadly Venom, Ambush's  cooldown is reset.",
        descriptionHTML:
          'When an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> dies while afflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i>, <i>Ambush\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reset.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* Entering stealth cancels <b>Twitch\'s</b> current basic attack.\n<ul><li><i>Ambush</i> follows the same rules as stealth but he can still perform actions normally before entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>. Activating <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> during the 1-second delay allows him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> it while stealthed.</li>\n<li>If <b>Twitch</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> during the delay, he will gain the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span> after the stasis ends.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Twitch_Original_Q_3.ogg   "Sneaky, sneaky... "',
  },
  'Venom Cask': {
    name: 'Venom Cask',
    display_name: 'Venom Cask',
    champion: 'Twitch',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'TwitchVenomCask.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '950',
    speed: '1400',
    cast_time: '0.<small>25</small>',
    cost: '70',
    costtype: 'Mana',
    cooldown: '13 / 12 / 11 / 10 / 9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL" title="Twitch"><img alt="Twitch" src="/wiki/images/Twitch_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL" title="Twitch/LoL">Twitch</a></span></span> tosses a cask that explodes at the target location, inflicting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i> to enemies hit.',
      'The area then becomes contaminated for a short time, which continually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies and inflicts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Venom_Cask.png',
        description:
          'Active: Twitch hurls a cask of venom that explodes at the target location, applying  Deadly Venom to enemies hit and granting  sight of the area.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Twitch</b> hurls a cask of venom that explodes at the target location, applying <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i> to enemies hit and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The area then becomes contaminated for 3 seconds, applying a  Deadly Venom stack each second to enemies within and  slowing them.',
        descriptionHTML:
          'The area then becomes contaminated for 3 seconds, applying a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i> stack each second to enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'The area then becomes contaminated for 3 seconds, applying a  Deadly Venom stack each second to enemies within and  slowing them.',
            min: 0,
            max: 10,
            description:
              'The area then becomes contaminated for 3 seconds, applying a  Deadly Venom stack each second to enemies within and  slowing them.',
            values: 3,
            units: 'total_ap',
            unitsText:
              'area then becomes contaminated for 3 seconds, applying a  Deadly Venom stack each second to enemies within and  slowing them.',
            pre: 'The area then becomes contaminated for 3 seconds, applying a  Deadly Venom stack each second to enemies within and  slowing them.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50% (+ 6% per 100 AP)',
            valuesHTML:
              '30 / 35 / 40 / 45 / 50% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% per 100 AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50% (+ 6% per 100 AP)',
            damagetype: 'None',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 6% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spelleffects: 'False',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Venom Cask</i> can apply a maximum of 4 <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span> stacks per enemy.\n<ul><li><i>Venom Cask\'s</i> missile will fail to fire if <b>Twitch</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressed</a></span> during the cast time.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
  },
  Contaminate: {
    name: 'Contaminate',
    display_name: 'Contaminate',
    champion: 'Twitch',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'TwitchExpunge.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1200',
    cast_time: '0.<small>25</small>',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL" title="Twitch"><img alt="Twitch" src="/wiki/images/Twitch_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL" title="Twitch/LoL">Twitch</a></span></span> spreads a toxin to nearby enemies afflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>. This deals additional <span style="color: #FF8C34; white-space:normal">physical</span> and <span style="color: #00B0F0; white-space:normal">magic damage</span> based on stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Contaminate.png',
        description:
          'Active: Twitch sends out a lethal toxin to each nearby enemy afflicted by  Deadly Venom, dealing them physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Twitch</b> sends out a lethal toxin to each nearby enemy afflicted by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i>, dealing them <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Base Physical Damage:',
            values: '20 / 30 / 40 / 50 / 60',
            valuesHTML: '20 / 30 / 40 / 50 / 60',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Base Physical Damage:',
            raw: '20 / 30 / 40 / 50 / 60',
            damagetype: 'Physical',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Contaminate deals additional physical damage and 35% AP magic damage for each stack of  Deadly Venom on the target.',
        descriptionHTML:
          '<i>Contaminate</i> deals additional <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color: #7A6DFF; white-space:normal">35% AP</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> for each stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i> on the target.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'Contaminate deals additional physical damage and 35% AP magic damage for each stack of  Deadly Venom on the target.',
            min: 0,
            max: 10,
            description:
              'Contaminate deals additional physical damage and 35% AP magic damage for each stack of  Deadly Venom on the target.',
            values: 3,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'AP magic damage for each stack of  Deadly Venom on the target.deals additional physical damage and 35',
            pre: 'Contaminate deals additional physical damage and 35% AP magic damage for each stack of  Deadly Venom on the target.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage Per Stack:',
            values: '15 / 20 / 25 / 30 / 35 (+ 35% bonus AD)',
            valuesHTML:
              '15 / 20 / 25 / 30 / 35 <span style="color:orange; white-space:normal">(+&nbsp;35% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Stacks',
            name: 'Physical Damage Per Stack:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 35% bonus AD)',
            min: 0,
            max: 10,
            description: '15 / 20 / 25 / 30 / 35 (+ 35% bonus AD)',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 35% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'A nearby enemy with  Deadly Venom is required to cast this ability. The target does not have to be  visible to be targeted by this ability.',
        descriptionHTML:
          '<i>A nearby enemy with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span> is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be targeted by this ability.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Aoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* <b>Twitch</b> is given a range indicator for <i>Contaminate\'s</i> radius upon infecting an enemy champion with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span> (actual range is slightly larger than shown by the indicator).\n<ul><li><i>Contaminate</i> will not damage enemy targets whose <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span> stacks wear off or if they move out of <i>Contaminate\'s</i> range before the cast time completes.\n<ul><li>If the target moves out of range after the cast time, the missile will still hit and deal damage.</li></ul></li></ul>',
  },
  'Spray and Pray': {
    name: 'Spray and Pray',
    display_name: 'Spray and Pray',
    champion: 'Twitch',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'TwitchFullAutomatic.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '1100',
    target_range: "Twitch's  attack range",
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="bolt width">120</span>',
    speed: '4000',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">90</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL" title="Twitch"><img alt="Twitch" src="/wiki/images/Twitch_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL" title="Twitch/LoL">Twitch</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> for a few seconds, during which his basic attacks are replaced with bolts that deal the <span style="color:orange; white-space:normal">attack\'s damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Spray_and_Pray.png',
        description:
          'Active: Twitch gains  bonus attack damage and  300 bonus attack range for 6 seconds, during which his basic attacks are replaced by bolts that travel slightly further than his attack range in a straight line, dealing damage to every enemy unit hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Twitch</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;300 <b>bonus</b> attack range</span> for 6 seconds, during which his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> are replaced by <i>bolts</i> that travel slightly further than his attack range in a straight line, dealing damage to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="non-champions and champions, wards and plants, turrets and structures">every enemy unit</span> hit.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Twitch gains  bonus attack damage and  300 bonus attack range for 6 seconds, during which his basic attacks are replaced by bolts that travel slightly further than his attack range in a straight line, dealing damage to every enemy unit hit.',
            increasedStat: 'bonus_ad',
            values: 3,
            units: '',
            unitsText:
              'gains  bonus attack damage and  300 bonus attack range for 6 seconds, during which his basic attacks are replaced by bolts that travel slightly further than his attack range in a straight line, dealing damage to every enemy unit hit.',
            pre: 'Twitch gains  bonus attack damage and  300 bonus attack range for 6 seconds, during which his basic attacks are replaced by bolts that travel slightly further than his attack range in a straight line, dealing damage to every enemy unit hit.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values: '40 / 47.5 / 55 / 62.5 / 70',
            valuesHTML:
              '40 / 47.<small>5</small> / 55 / 62.<small>5</small> / 70',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '40 / 47.5 / 55 / 62.5 / 70',
            damagetype: 'None',
            values: [40, 47.5, 55, 62.5, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 47.5 / 55 / 62.5 / 70',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The bolts deal 100% − 60% (based on enemies hit) of the attack's damage, apply  on-hit effects at 100% effectiveness, and can  critically strike.",
        descriptionHTML:
          'The <i>bolts</i> deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="enemies hit" data-displayformula="100% - 10% per enemy hit. \'\'This is capped at 60% damage.\'\'" data-bot_values="100;90;80;70;60" data-top_values="0;1;2;3;4" data-bot_key="%">100% − 60% (based on enemies hit)</span> of the <span style="color:orange; white-space:normal">attack\'s damage</span>, apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness, and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "The bolts deal 100% − 60% (based on enemies hit) of the attack's damage, apply  on-hit effects at 100% effectiveness, and can  critically strike.",
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            basedOn: 'enemies hit',
            units: 'total_ap',
            unitsText:
              "of the attack's damage, apply  on-hit effects at 100% effectiveness, and can  critically strike.",
            pre: 'The bolts deal 100% − 60%',
            post: "of the attack's damage, apply  on-hit effects at 100% effectiveness, and can  critically strike.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'basic',
    projectile: 'true',
    callforhelp: 'True',
    notes:
      '* The extra distance that the bolts travel scales with <b>bonus</b> attack range.\n<ul><li><i>Spray and Pray</i> allows <b>Twitch</b> to outrange <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> by 50 units, allowing him to hit them without them returning fire.</li>\n<li><b>Twitch</b> targets his line attack at his target\'s location at the <i>start</i> of his attack windup.\n<ul><li>The <i>bolts</i> reach targets at a delay, composed of <b>Twitch\'s</b> windup time and distance the <i>bolt</i> has to travel at finite speed. Even the primary target can dodge the attack if they are moving quickly enough.</li></ul></li>\n<li>The <i>bolt</i> projectiles will naturally pass through terrain and enemy structures (the latter will be damaged by <i>bolts</i> even if they are not directly targeted).</li>\n<li>If <b>Twitch</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span> before winding up the attack, the hits will <i>miss</i> against <b>all</b> targets.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> <a href="/wiki/Named_item_effect#Wind\'s_Fury" title="Named item effect">Wind\'s Fury</a> interacts with <i>Spray and Pray\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> but not with the modified missile effect (the secondary bolts will not have pass-through effects).</li>\n<li>Whenever the <i>bolts</i> penetrate a target, a small elongated cloud appears at the location, which\'s VFX and SFX <b>can</b> be seen and heard inside the Fog of War.</li>\n<li>The <i>bolts\'</i> travel distance scales with the full value of <b>Twitch\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> increases such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span>, but not with size increases (which only increase his effective attack range, thereby the target range).</li>\n<li>(Outdated as of <a href="/wiki/V10.13" title="V10.13">V10.13</a>, now can hit everything with edge range, except for turrets) The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> center of a unit must be within the maximum travel distance of the <i>bolt</i> missile, and in front of the spawn location (<b>Twitch\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> center) for the <i>bolt</i> to be able to hit them.\n<ul><li>Other than this condition, the <i>bolt</i> missile has to only touch (pass within its half width of 60 units) the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> edge of the unit\'s radius.</li>\n<li>This is standard behaviour for <i>linear skillshots</i>.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Twitch_Original_R_7.ogg   "Pins and needles!"',
  },
} satisfies { [skillName in string]: SkillData };
