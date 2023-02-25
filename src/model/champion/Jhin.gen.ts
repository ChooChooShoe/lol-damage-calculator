import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Jhin';

export default {
  'Basic Attack': {
    name: 'Basic Attack',
    display_name: 'Basic Attack',
    champion: 'Jhin',
    skill: 'A',
    attack_range: '550',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Non-critical attacks">2600</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Critical strikes">3000</span>',
    blurb: [],
    description: [
      {
        icon: '/wiki/images/Basic_Attack.png',
        description:
          'Basic Attack: Jhin fires at the target with  Whisper, dealing 100% AD physical damage and applying  on-hit and on-attack effects.',
        descriptionHTML:
          '<a href="/wiki/Basic_Attack" class="mw-redirect" title="Basic Attack"><span class="template_sbc"><b>Basic Attack:</b></span></a> <b>Jhin</b> fires at the target with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Whisper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Whisper" title="Whisper"><img alt="Whisper" src="/wiki/images/Jhin_Whisper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Whisper" title="Jhin/LoL">Whisper</a></span></span>, dealing <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Basic Attack:',
            raw: 'Jhin fires at the target with  Whisper, dealing 100% AD physical damage and applying  on-hit and on-attack effects.',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'AD physical damage and applying  on-hit and on-attack effects.fires at the target with  Whisper, dealing 100',
            pre: 'Jhin fires at the target with  Whisper, dealing 100% AD physical damage and applying  on-hit and on-attack effects.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Jhin's basic attacks can  critically strike. These attacks have slightly increased missile speed, but deal only「 (150.5% +  30.1%) AD physical damage. 」「 86% of the  critical damage champions usually have. 」",
        descriptionHTML:
          '<b>Jhin\'s</b> basic attacks can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. These attacks have slightly increased missile speed, but deal only<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(150.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="30.1%"><img alt="30.1%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">30.<small>1</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;86% of the <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span> champions usually have.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'These attacks have slightly increased missile speed, but deal only「 (150.5% +  30.1%) AD physical damage. 」「 86% of the  critical damage champions usually have. 」',
            damagetype: 'Physical',
            values: 0,
            units: 'total_ad',
            unitsText:
              'AD physical damage. 」「 86% of the  critical damage champions usually have. 」',
            pre: 'These attacks have slightly increased missile speed, but deal only「',
            post: 'AD physical damage. 」「 86% of the  critical damage champions usually have. 」',
            children: [
              {
                values: 150.5,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  30.1',
                pre: '150.5% +  30.1%',
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
          "Jhin's attack speed cannot be improved at all except through growth.",
        descriptionHTML:
          '<b>Jhin\'s</b> <span style="color:orangered; white-space:normal">attack speed</span> cannot be improved at all except through <a href="/wiki/Growth" class="mw-redirect" title="Growth">growth</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'attack',
    projectile: 'True',
    notes:
      '* The 3000 missile speed for critical strikes also applies to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Whisper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Whisper" title="Whisper\'s"><img alt="Whisper\'s" src="/wiki/images/Jhin_Whisper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Whisper" title="Jhin/LoL">Whisper\'s</a></span></span> 4th shot, which is a guaranteed critical strike.',
  },
  Whisper: {
    name: 'Whisper',
    display_name: 'Whisper',
    champion: 'Jhin',
    skill: 'I',
    image: {
      full: 'Jhin_P.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate - Death in 4 Acts:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL" title="Jhin\'s"><img alt="Jhin\'s" src="/wiki/images/Jhin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL" title="Jhin/LoL">Jhin\'s</a></span></span> gun may fire up to 4 times before needing to reload. The final round will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.',
      '<span class="template_sbc"><b>Innate - Every Moment Matters:</b></span> <b>Jhin</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>, increased by his <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>. Whenever he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>, he gains a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> based on his <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
      '<b>Jhin\'s</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span> cannot increase except by <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;leveling</span> up, and he deals reduced <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike damage</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Whisper.png',
        description:
          "Innate - Death In 4 Acts: Jhin's basic attacks consume ammunition within 4 rounds. He will reload over 2.5 seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being out of combat and not being affected by  crowd control. The latter reload can be interrupted by declaring an attack or casting an ability.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Death In 4 Acts:</b></span> <b>Jhin\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> consume <a href="/wiki/Ammunition" title="Ammunition">ammunition</a> within 4 rounds. He will <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Jhin is unable to declare basic attacks during this time.">reload</span> over 2.<small>5</small> seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a> and not being affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>. The latter reload can be interrupted by declaring an attack or casting an ability.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate - Death In 4 Acts:',
            raw: "Jhin's basic attacks consume ammunition within 4 rounds",
            values: 4,
            units: 'total_ad',
            unitsText: 'basic attacks consume ammunition within 4 rounds',
            pre: "Jhin's basic attacks consume ammunition within 4 rounds",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'He will reload over 2.5 seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being out of combat and not being affected by  crowd control',
            damagetype: 'None',
            values: 2,
            units: 'total_ad',
            unitsText:
              'will reload over 2.5 seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being out of combat and not being affected by  crowd control',
            pre: 'He will reload over 2.5 seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being out of combat and not being affected by  crowd control',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Jhin's final round attack has an  uncancellable windup versus champions, always  critically strikes, including against  structures, and deals bonus physical damage equal to 15 / 20 / 25% (based on level) of the target's  missing health.",
        descriptionHTML:
          '<b>Jhin\'s</b> final round attack has an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> versus champions, always <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>, including against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>, and deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;1" data-finish="25;11" data-bot_values="15;20;25" data-top_values="1;6;11" data-bot_key="%">15 / 20 / 25% (based on level)</span> of the target\'s <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>missing</b> health</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Jhin's final round attack has an  uncancellable windup versus champions, always  critically strikes, including against  structures, and deals bonus physical damage equal to 15 / 20 / 25% (based on level) of the target's  missing health.",
            healType: 'PhysicalVamp',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'target',
            units: 'missing_hp',
            unitsText: "of the target's  missing health.",
            pre: "Jhin's final round attack has an  uncancellable windup versus champions, always  critically strikes, including against  structures, and deals bonus physical damage equal to 15 / 20 / 25%",
            post: "of the target's  missing health.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Innate - Every Moment Matters: Jhin gains  bonus attack damage equal to 4% − 44% (based on level)「 (+ 0.3% per 1% critical strike chance) (+ 0.25% per 1% bonus attack speed) 」「 (+ 30% critical strike chance) (+ 25% bonus attack speed) 」AD.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Every Moment Matters:</b></span> <b>Jhin</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> equal to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="3% +&nbsp;1% per level up to 9, then +&nbsp;2% up to 11, then +&nbsp;4% up to 18" data-bot_values="4;5;6;7;8;9;10;11;12;14;16;20;24;28;32;36;40;44" data-top_values="" data-bot_key="%">4% − 44% (based on level)</span></span><span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #E56013; white-space:normal">(+&nbsp;0.<small>3</small>% per 1% critical strike chance)</span> <span style="color:orangered; white-space:normal">(+&nbsp;0.<small>25</small>% per 1% <b>bonus</b> attack speed)</span>&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #E56013; white-space:normal">(+&nbsp;30% critical strike chance)</span> <span style="color:orangered; white-space:normal">(+&nbsp;25% <b>bonus</b> attack speed)</span>&nbsp;」</span></span><span style="color:orange; white-space:normal">AD</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Every Moment Matters:',
            raw: 'Jhin gains  bonus attack damage equal to 4% − 44% (based on level)「 (+ 0.3% per 1% critical strike chance) (+ 0.25% per 1% bonus attack speed) 」「 (+ 30% critical strike chance) (+ 25% bonus attack speed) 」AD.',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '「',
            pre: 'Jhin gains  bonus attack damage equal to 4% − 44%',
            post: '「',
            children: [
              {
                values: 0.3,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 1',
                pre: '+ 0.3% per 1% critical strike chance',
              },
              {
                values: 0.25,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 1',
                pre: '+ 0.25% per 1% bonus attack speed',
              },
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_critchance',
                unitsText: 'critical strike chance',
                pre: '+ 30% critical strike chance',
              },
              {
                values: 25,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus attack speed',
                pre: '+ 25% bonus attack speed',
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
          'Additionally,  critical strikes grant Jhin 10% (+ 0.4% per 1% bonus attack speed)  bonus movement speed for 2 seconds.',
        descriptionHTML:
          'Additionally, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> grant <b>Jhin</b> <span style="color: #F5EE99; white-space:normal">10%</span> <span style="color:orangered; white-space:normal">(+&nbsp;0.<small>4</small>% per 1% <b>bonus</b> attack speed)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Additionally,  critical strikes grant Jhin 10% (+ 0.4% per 1% bonus attack speed)  bonus movement speed for 2 seconds.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed for 2 seconds.',
            pre: 'Additionally,  critical strikes grant Jhin 10%',
            post: 'bonus movement speed for 2 seconds.',
            children: [
              {
                values: 0.4,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 1',
                pre: '+ 0.4% per 1% bonus attack speed',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    notes:
      '* The penalty to <b>Jhin\'s</b> <span style="color: #944B00; white-space:normal">critical damage</span> also reduces the base damage ((100 + 75)&nbsp;×&nbsp;0.86 rather than 100 + (75&nbsp;×&nbsp;0.86) and stacks with other sources (i.e <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge</a></span></span>) ((100 + 75 + 35)&nbsp;×&nbsp;0.86).\n<ul><li><ul><li>This penalty does not affect <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Curtain Call" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Curtain_Call" title="Curtain Call"><img alt="Curtain Call" src="/wiki/images/Jhin_Curtain_Call.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Curtain_Call" title="Jhin/LoL">Curtain Call</a></span></span>.</li></ul></li>\n<li>The <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>missing</b> health</span></span> damage benefits from <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span>.</li>\n<li>The 4th attack cannot be canceled by <b>Jhin</b> himself.</li>\n<li>The 4th attack versus a structure is classified as a critical strike.</li>\n<li>The attack damage multiplier stacks additively with <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Dragon Slayer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon_Slayer" title="Dragon Slayer\'s"><img alt="Dragon Slayer\'s" src="/wiki/images/Dragon_Slayer_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon_Slayer" title="Dragon Slayer">Dragon Slayer\'s</a></span></span>.</li>\n<li><i>Every Moment Matters\' </i> bonus <span style="color:orange; white-space:normal">AD</span> will benefit from any amount of <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span>, even in excess of an amount that would usually reach the attacks per second cap (2.<small>5</small>).\n<ul><li>The maximum modifier without attack speed is 74%.\n<ul><li>44% base modifier at level 18.</li>\n<li>30% from critical strike chance on account of the 100% cap.</li>\n<li><a href="/wiki/Attack_speed#Reducing_attack_speed" title="Attack speed">Attack speed slows</a> will not affect <b>Jhin\'s</b> bonus attack damage from his passive and will ignore his attack speed as it is fixed.</li></ul></li></ul></li>\n<li>Attack damage reductions apply before the multiplier causing them to be stronger against <b>Jhin</b> than advertised or versus other champions.</li>\n<li>The bonus damage based on the target\'s missing health does not affect structures.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Jhin_Original_PassiveAttackBuff_4.ogg   "One, two, three, four, two, two, three, four."',
  },
  'Dancing Grenade': {
    name: 'Dancing Grenade',
    display_name: 'Dancing Grenade',
    champion: 'Jhin',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'JhinQ.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '550',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bounce range">450</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial missile speed">1800</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bounce missile speed">600</span>',
    cast_time: '0.<small>25</small>',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    cooldown: '7 / 6.<small>5</small> / 6 / 5.<small>5</small> / 5',
    blurb: [
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL" title="Jhin"><img alt="Jhin" src="/wiki/images/Jhin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL" title="Jhin/LoL">Jhin</a></span></span> throws a grenade at the target enemy that can bounce to up to three additional nearby enemies, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
      'The damage is additionally increased if the enemy the grenade last bounced off of dies shortly after being hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Dancing_Grenade.png',
        description:
          'Active: Jhin throws a grenade at the target enemy that deals physical damage and can bounce to up to three additional nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jhin</b> throws a grenade at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and can bounce to up to three additional nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values:
              '45 / 70 / 95 / 120 / 145 (+ 35 / 42.5 / 50 / 57.5 / 65% AD) (+ 60% AP)',
            valuesHTML:
              '45 / 70 / 95 / 120 / 145 <span style="color:orange; white-space:normal">(+&nbsp;35 / 42.<small>5</small> / 50 / 57.<small>5</small> / 65% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '45 / 70 / 95 / 120 / 145 (+ 35 / 42.5 / 50 / 57.5 / 65% AD) (+ 60% AP)',
            damagetype: 'Physical',
            values: [45, 70, 95, 120, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 70 / 95 / 120 / 145',
            children: [
              {
                values: [35, 42.5, 50, 57.5, 65],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 35 / 42.5 / 50 / 57.5 / 65% AD',
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
        icon: '/wiki/images/undefined',
        description:
          'The damage is increased by 35% of the base damage if the enemy the grenade last bounced off of dies.',
        descriptionHTML:
          'The damage is increased by 35% of the <b>base</b> damage if the enemy the grenade last bounced off of dies.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The damage is increased by 35% of the base damage if the enemy the grenade last bounced off of dies.',
            damagetype: 'None',
            values: 3,
            valuesIsPercent: true,
            units: 'base_ad',
            unitsText:
              'of the base damage if the enemy the grenade last bounced off of dies.damage is increased by 35',
            pre: 'The damage is increased by 35% of the base damage if the enemy the grenade last bounced off of dies.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'True',
    callforhelp: 'true',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not prevent the canister from bouncing.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Deadly Flourish': {
    name: 'Deadly Flourish',
    display_name: 'Deadly Flourish',
    champion: 'Jhin',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'JhinW.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '2520 / -20',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 90',
    cast_time: '0.<small>75</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Enemy champions that trigger a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Captive Audience" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Lotus Trap"><img alt="Lotus Trap" src="/wiki/images/Jhin_Captive_Audience.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Jhin/LoL">Lotus Trap</a></span></span></i> or damaged by <b>Jhin</b> and his allies are marked with <img alt="Caught Out.png" src="/wiki/images/Jhin_Caught_Out.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Caught Out</i> for a few seconds.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Jhin</b> fires a shot in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies in a line until colliding with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
      'Hitting a marked <img alt="Caught Out.png" src="/wiki/images/Jhin_Caught_Out.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Caught Out</i> champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration and grants <b>Jhin</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Whisper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Whisper" title="Every Moment Matters\'"><img alt="Every Moment Matters\'" src="/wiki/images/Jhin_Whisper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Whisper" title="Jhin/LoL">Every Moment Matters\'</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    ],
    description: [
      {
        description:
          'Passive: Enemy  champions that trigger a  Lotus Trap to bloom or are damaged by Jhin or allied champions are marked for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that trigger a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Captive Audience" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Lotus Trap"><img alt="Lotus Trap" src="/wiki/images/Jhin_Captive_Audience.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Jhin/LoL">Lotus Trap</a></span></span></i> to bloom or are damaged by <b>Jhin</b> or allied champions are <i>marked</i> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: 'Enemy  champions that trigger a  Lotus Trap to bloom or are damaged by Jhin or allied champions are marked for 4 seconds.',
            damagetype: 'None',
            values: 4,
            units: 'total_ap',
            unitsText:
              'champions that trigger a  Lotus Trap to bloom or are damaged by Jhin or allied champions are marked for 4 seconds.',
            pre: 'Enemy  champions that trigger a  Lotus Trap to bloom or are damaged by Jhin or allied champions are marked for 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Deadly_Flourish.png',
        description:
          'Active: Jhin fires a shot in the target direction that deals physical damage to all enemies in a line until colliding with an enemy champion, reduced by 25% against  minions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jhin</b> fires a shot in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies in a line until colliding with an enemy champion, reduced by 25% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Jhin fires a shot in the target direction that deals physical damage to all enemies in a line until colliding with an enemy champion, reduced by 25% against  minions.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against  minions.fires a shot in the target direction that deals physical damage to all enemies in a line until colliding with an enemy champion, reduced by 25',
            pre: 'Jhin fires a shot in the target direction that deals physical damage to all enemies in a line until colliding with an enemy champion, reduced by 25% against  minions.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 95 / 130 / 165 / 200 (+ 50% AD)',
            valuesHTML:
              '60 / 95 / 130 / 165 / 200 <span style="color:orange; white-space:normal">(+&nbsp;50% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 50% AD)',
            damagetype: 'Physical',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
        icon: '/wiki/images/undefined',
        description:
          "Hitting a marked champion  roots them for a duration and grants Jhin  Every Moment Matters'  bonus movement speed.",
        descriptionHTML:
          'Hitting a <i>marked</i> champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration and grants <b>Jhin</b> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Whisper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Whisper" title="Every Moment Matters\'"><img alt="Every Moment Matters\'" src="/wiki/images/Jhin_Whisper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Whisper" title="Jhin/LoL">Every Moment Matters\'</a></span></span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Root Duration:',
            values: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            valuesHTML:
              '1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Special',
    spellshield: true,
    projectile: 'special',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to the enemy champion and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to all other enemy units.\n<ul><li>The <i>Caught Out</i> mark only appears if <i>Deadly Flourish</i> can potentially <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> the target, and will not if the ability\'s cooldown is longer than 4 seconds or isn\'t ranked up.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li><i>Deadly Flourish</i> is blocked by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> but not <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span>.\n<ul><li><i>Deadly Flourish</i> is special cased to be intercepted by the former because it looks like a blockable missile, even though it isn\'t functionally a missile.</li></ul></li></ul>',
  },
  'Captive Audience': {
    name: 'Captive Audience',
    display_name: 'Captive Audience',
    champion: 'Jhin',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'JhinE.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '750',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Trigger radius">160</span>',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Trap sight radius">260</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="On-trigger reveals and explosion radius">260</span>',
    cast_time: '0.<small>25</small>',
    cost: '30',
    costtype: 'Mana + 1 Charge',
    cooldown: '2',
    recharge: '24 / 21.<small>5</small> / 19 / 16.<small>5</small> / 14',
    blurb: [
      '<span class="template_sbc"><b>Passive - Beauty in Death:</b></span> Killing an enemy champion summons a free <i>Blooming Lotus Trap</i> under them.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL" title="Jhin"><img alt="Jhin" src="/wiki/images/Jhin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL" title="Jhin/LoL">Jhin</a></span></span> places a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> <i>Lotus Trap</i> at the target location. When an enemy crosses, it will <i>bloom</i>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them. The trap detonates shortly after, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies.',
      '<b>Jhin</b> stocks a <i>Lotus Trap</i> every few seconds, holding up to two.',
    ],
    description: [
      {
        description:
          'Passive - Beauty in Death: Whenever Jhin kills an enemy champion, he summons a Blooming Lotus Trap on their corpse.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive - Beauty in Death:</b></span> Whenever <b>Jhin</b> kills an enemy champion, he summons a <i>Blooming Lotus Trap</i> on their corpse.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Captive_Audience.png',
        description:
          'Active: Jhin places a Lotus Trap at the target location which, upon landing, becomes  stealthed after arming over 1 second, lasting for up to 180 seconds and granting  sight within its radius. The Lotus Trap blooms upon enemy contact, with enemies in the area at the time of its trigger becoming  revealed for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jhin</b> places a <i>Lotus Trap</i> at the target location which, upon landing, becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> after arming over 1 second, lasting for up to 180 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> within its radius. The <i>Lotus Trap blooms</i> upon enemy contact, with enemies in the area at the time of its trigger becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Jhin places a Lotus Trap at the target location which, upon landing, becomes  stealthed after arming over 1 second, lasting for up to 180 seconds and granting  sight within its radius',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'places a Lotus Trap at the target location which, upon landing, becomes  stealthed after arming over 1 second, lasting for up to 180 seconds and granting  sight within its radius',
            pre: 'Jhin places a Lotus Trap at the target location which, upon landing, becomes  stealthed after arming over 1 second, lasting for up to 180 seconds and granting  sight within its radius',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The Lotus Trap blooms upon enemy contact, with enemies in the area at the time of its trigger becoming  revealed for 4 seconds.',
            damagetype: 'None',
            values: 4,
            units: 'total_ap',
            unitsText:
              'Lotus Trap blooms upon enemy contact, with enemies in the area at the time of its trigger becoming  revealed for 4 seconds.',
            pre: 'The Lotus Trap blooms upon enemy contact, with enemies in the area at the time of its trigger becoming  revealed for 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Jhin periodically stocks a Lotus Trap charge, up to a maximum of 2.',
        descriptionHTML:
          '<b>Jhin</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Lotus Trap</i> charge, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Jhin periodically stocks a Lotus Trap charge, up to a maximum of 2.',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              'periodically stocks a Lotus Trap charge, up to a maximum of 2.',
            pre: 'Jhin periodically stocks a Lotus Trap charge, up to a maximum of 2.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Blooming Lotus Traps  slow enemies within the area by 35% for 2 seconds before exploding, dealing magic damage to enemies. Lotus Traps deal 65% damage against  minions as well as  champions who have been struck by another Lotus Trap in the last 1 second.',
        descriptionHTML:
          '<i>Blooming Lotus Traps</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies within the area by 35% for 2 seconds before exploding, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies. <i>Lotus Traps</i> deal 65% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> who have been struck by another <i>Lotus Trap</i> in the last 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Blooming Lotus Traps  slow enemies within the area by 35% for 2 seconds before exploding, dealing magic damage to enemies',
            damagetype: 'Magic',
            values: 3,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'for 2 seconds before exploding, dealing magic damage to enemiesLotus Traps  slow enemies within the area by 35',
            pre: 'Blooming Lotus Traps  slow enemies within the area by 35% for 2 seconds before exploding, dealing magic damage to enemies',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Lotus Traps deal 65% damage against  minions as well as  champions who have been struck by another Lotus Trap in the last 1 second.',
            increasedStat: 'total_ap',
            values: 6,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'damage against  minions as well as  champions who have been struck by another Lotus Trap in the last 1 second.Traps deal 65',
            pre: 'Lotus Traps deal 65% damage against  minions as well as  champions who have been struck by another Lotus Trap in the last 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '20 / 80 / 140 / 200 / 260 (+ 120% AD) (+ 100% AP)',
            valuesHTML:
              '20 / 80 / 140 / 200 / 260 <span style="color:orange; white-space:normal">(+&nbsp;120% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 80 / 140 / 200 / 260 (+ 120% AD) (+ 100% AP)',
            damagetype: 'Magic',
            values: [20, 80, 140, 200, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 80 / 140 / 200 / 260',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 120% AD',
              },
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'See Pets for more details about Lotus Traps.',
        descriptionHTML:
          '<i>See <a href="/wiki/Jhin/LoL#Pets" title="Jhin/LoL">Pets</a> for more details about Lotus Traps.</i>',
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
    projectile: 'Special',
    notes:
      '* <i>Beauty in Death</i> does not consume <i>Lotus Trap</i> charges.\n<ul><li>The <i>Lotus Trap</i> will stop upon encountering a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.</li>\n<li><i>Beauty in Death</i> does not trigger after killing a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span>.</li>\n<li>The reveal debuff is named <img alt="Caught Out.png" src="/wiki/images/Jhin_Caught_Out.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Caught Out</i>.\n<ul><li>This debuff is shared between <i>Captive Audience</i> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Curtain Call" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Curtain_Call" title="Curtain Call"><img alt="Curtain Call" src="/wiki/images/Jhin_Curtain_Call.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Curtain_Call" title="Jhin/LoL">Curtain Call</a></span></span>.</li></ul></li></ul>',
  },
  'Curtain Call': {
    name: 'Curtain Call',
    display_name: 'Curtain Call',
    champion: 'Jhin',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'JhinR.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '3500',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missiles width">160</span>',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">60°</span>',
    speed: '5000',
    cast_time: '1',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">120 / 112.<small>5</small> / 105 / 97.<small>5</small> / 90</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL" title="Jhin"><img alt="Jhin" src="/wiki/images/Jhin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL" title="Jhin/LoL">Jhin</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> up to a period, being able to fire up to four shots in a large cone in front of him.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Jhin</b> fires a round in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>. It stops upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for a short time.',
      'The fourth shot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span> for <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
      '<i>Curtain Call</i> plays music globally when first activated and its range is always <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">visible</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Curtain_Call.png',
        description:
          'Active: Jhin  channels for up to 10 seconds, transforming his weapon into a cannon and gaining the ability to recast Curtain Call 4 times within the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jhin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 10 seconds, transforming his weapon into a cannon and gaining the ability to recast <i>Curtain Call</i> 4 times within the duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Jhin  channels for up to 10 seconds, transforming his weapon into a cannon and gaining the ability to recast Curtain Call 4 times within the duration.',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'channels for up to 10 seconds, transforming his weapon into a cannon and gaining the ability to recast Curtain Call 4 times within the duration.',
            pre: 'Jhin  channels for up to 10 seconds, transforming his weapon into a cannon and gaining the ability to recast Curtain Call 4 times within the duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Curtain_Call_2.png',
        description:
          "Recast: After 0.25 seconds, Jhin fires a round in the target direction that grants  sight around its trajectory for 0.5 seconds and deals physical damage to enemies hit, increased by 0% − 300% (based on target's missing health). The bullet stops upon hitting an enemy champion,  slowing them by 80% for 0.5 seconds and  revealing them for 2 seconds. Each cast has a static cooldown of 1 second.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> After 0.<small>25</small> seconds, <b>Jhin</b> fires a round in the target direction that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its trajectory for 0.<small>5</small> seconds and deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="3% per 1% of target\'s \'\'\'missing\'\'\' health." data-bot_values="0;30;60;90;120;150;180;210;240;270;300" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 300% (based on target\'s <b>missing</b> health)</span></span>. The bullet stops upon hitting an enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 80% for 0.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2 seconds. Each cast has a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> of 1 second.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The bullet stops upon hitting an enemy champion,  slowing them by 80% for 0.5 seconds and  revealing them for 2 seconds',
            values: 8,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.5 seconds and  revealing them for 2 secondsbullet stops upon hitting an enemy champion,  slowing them by 80',
            pre: 'The bullet stops upon hitting an enemy champion,  slowing them by 80% for 0.5 seconds and  revealing them for 2 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Each cast has a static cooldown of 1 second.',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'cast has a static cooldown of 1 second.',
            pre: 'Each cast has a static cooldown of 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values: '50 / 87.5 / 125 / 162.5 / 200 (+ 25% AD)',
            valuesHTML:
              '50 / 87.<small>5</small> / 125 / 162.<small>5</small> / 200 <span style="color:orange; white-space:normal">(+&nbsp;25% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '50 / 87.5 / 125 / 162.5 / 200 (+ 25% AD)',
            damagetype: 'Physical',
            values: [50, 87.5, 125, 162.5, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 87.5 / 125 / 162.5 / 200',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 25% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Curtain_Call_3.png',
        description:
          'The fourth shot  critically strikes for (100% +  35%) bonus physical damage.',
        descriptionHTML:
          'The fourth shot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span> for <span style="color: #FF8C34; white-space:normal">(100%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The fourth shot  critically strikes for (100% +  35%) bonus physical damage.',
            damagetype: 'Physical',
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'bonus physical damage.',
            pre: 'The fourth shot  critically strikes for',
            post: 'bonus physical damage.',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '100% +  35%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Special',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to enemy champions and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to other enemy units.\n<ul><li>Each cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.</li>\n<li><i>Curtain Call\'s</i> shooting range is fixed in front of <b>Jhin</b>.</li>\n<li>The opening sound effect and area of range are audible and visible to both teams.</li>\n<li>Leveling up the ability while channeling will change the final cooldown.</li>\n<li><b>Jhin</b> will turn to face in the target direction whenever he uses a recast.</li>\n<li><b>Jhin</b> gains a wider field of view during <i>Curtain Call</i>.</li>\n<li>The reveal debuff is named <img alt="Caught Out.png" src="/wiki/images/Jhin_Caught_Out.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Caught Out</i>.\n<ul><li>This debuff is shared between <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Captive Audience" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Captive Audience"><img alt="Captive Audience" src="/wiki/images/Jhin_Captive_Audience.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Jhin/LoL">Captive Audience</a></span></span> and <i>Curtain Call</i>.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>The following table refers for interactions while <b>Jhin</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>   <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Jhin_Original_R_1.ogg   "Prepare... for your finale."',
  },
} satisfies { [skillName in string]: SkillData };
