import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Gangplank';

export default {
  'Trial by Fire': {
    name: 'Trial by Fire',
    display_name: 'Trial by Fire',
    champion: 'Gangplank',
    skill: 'I',
    image: {
      full: 'Gangplank_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    static: '15',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Every few seconds, Gangplank\'s next basic attack will burn the target, continually dealing <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span> and granting him <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
      'Whenever a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span></i> explodes, <i>Trial by Fire\'s</i> cooldown will <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span> and <b>Gangplank</b> will gain the <span style="color: #F5EE99; white-space:normal">movement speed</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Gangplank_Trial_by_Fire.png',
        description:
          'Innate: Periodically, Gangplank empowers his next basic attack to set the target on fire, dealing them「 55 − 310 (based on level) (+ 100% bonus AD) (+ 2 per 1% critical strike chance)  bonus true damage over 2.5 seconds. 」「 5.5 − 31 (based on level) (+ 10% bonus AD) (+ 0.2 per 1% critical strike chance)  bonus true damage every 0.25 seconds over 2.5 seconds. 」 Turrets are dealt 50% damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Gangplank</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to set the target on fire, dealing them<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F9966B;" data-start="55;" data-finish="310;" data-bot_values="55;70;85;100;115;130;145;160;175;190;205;220;235;250;265;280;295;310" data-top_values="">55 − 310 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span> <span style="color: #E56013; white-space:normal">(+&nbsp;2 per 1% critical strike chance)</span> <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> over 2.<small>5</small> seconds.&nbsp;」</span><span class="flipText2">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F9966B;" data-start="5.5;" data-finish="31;" data-bot_values="5.5;7;8.5;10;11.5;13;14.5;16;17.5;19;20.5;22;23.5;25;26.5;28;29.5;31" data-top_values="">5.<small>5</small> − 31 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;10% <b>bonus</b> AD)</span> <span style="color: #E56013; white-space:normal">(+&nbsp;0.<small>2</small> per 1% critical strike chance)</span> <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> every 0.<small>25</small> seconds over 2.<small>5</small> seconds.&nbsp;」</span></span><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">Turrets</a></span> are dealt 50% damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: 'Periodically, Gangplank empowers his next basic attack to set the target on fire, dealing them「 55 − 310 (based on level) (+ 100% bonus AD) (+ 2 per 1% critical strike chance)  bonus true damage over 2.5 seconds. 」「 5.5 − 31 (based on level) (+ 10% bonus AD) (+ 0.2 per 1% critical strike chance)  bonus true damage every 0.25 seconds over 2.5 seconds. 」 Turrets are dealt 50% damage.',
            damagetype: 'True',
            values: [
              55, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250,
              265, 280, 295, 310,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus true damage over 2.5 seconds. 」「 5.5 − 31',
            pre: 'Periodically, Gangplank empowers his next basic attack to set the target on fire, dealing them「 55 − 310',
            post: 'bonus true damage over 2.5 seconds. 」「 5.5 − 31',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_critchance',
                unitsText: 'critical strike chanceper 1',
                pre: '+ 2 per 1% critical strike chance',
              },
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 10% bonus AD',
              },
              {
                values: 0.2,
                valuesIsPercent: true,
                units: 'total_critchance',
                unitsText: 'critical strike chanceper 1',
                pre: '+ 0.2 per 1% critical strike chance',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Gangplank_Trial_by_Fire_2.png',
        description:
          'If Gangplank successfully hits a target with Trial by Fire, he gains  15% − 30% (based on level) bonus movement speed for 2 seconds. Every time a  Powder Keg explodes, the  cooldown for Trial by Fire resets and Gangplank gains its bonus movement speed.',
        descriptionHTML:
          'If <b>Gangplank</b> successfully hits a target with <i>Trial by Fire</i>, he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="30;" data-bot_values="15;15.88;16.76;17.65;18.53;19.41;20.29;21.18;22.06;22.94;23.82;24.71;25.59;26.47;27.35;28.24;29.12;30" data-top_values="" data-bot_key="%">15% − 30% (based on level)</span> <b>bonus</b> movement speed</span></span> for 2 seconds. Every time a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span></i> explodes, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> for <i>Trial by Fire</i> resets and <b>Gangplank</b> gains its <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'If Gangplank successfully hits a target with Trial by Fire, he gains  15% − 30% (based on level) bonus movement speed for 2 seconds',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed for 2 seconds',
            pre: 'If Gangplank successfully hits a target with Trial by Fire, he gains  15% − 30%',
            post: 'bonus movement speed for 2 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Trial by Fire cannot be applied with  Parrrley nor  Powder Keg.',
        descriptionHTML:
          '<i>Trial by Fire cannot be applied with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span> nor <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'True',
    spelleffects: 'default',
    spellshield: false,
    notes:
      '* Reapplying <i>Trial by Fire</i> before a previous application has run out will stack the full damage, instead of refreshing the duration.\n<ul><li>The bonus true damage scaling based on critical strike chance is capped at 100% of the stat.</li>\n<li>If the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or if <b>Gangplank</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>, the effect is not applied nor does <i>Trial by Fire</i> go on cooldown. If the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, the effect is not applied, but <i>Trial by Fire</i> will go on cooldown.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Buildings" class="mw-redirect" title="Buildings">buildings</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  Parrrley: {
    name: 'Parrrley',
    display_name: 'Parrrley',
    champion: 'Gangplank',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'GangplankQWrapper.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '625',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">2600</span>',
    cast_time: '0.<small>25</small>',
    cost: '55 / 50 / 45 / 40 / 35',
    costtype: 'Mana',
    cooldown: '4.<small>5</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL" title="Gangplank"><img alt="Gangplank" src="/wiki/images/Gangplank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL" title="Gangplank/LoL">Gangplank</a></span></span> shoots the target enemy with his pistol, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.',
      'If this attack kills the target, he gains <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Silver Serpents" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Silver Serpents"><img alt="Silver Serpents" src="/wiki/images/Gangplank_Silver_Serpents.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Gangplank/LoL">Silver Serpents</a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Parrrley.png',
        description:
          'Active: Gangplank fires a shot at the target enemy that deals physical damage and applies  on-hit and on-attack effects at 100% effectiveness as a  ranged attack. Parrrley can  critically strike for (175% +  35%) total damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gangplank</b> fires a shot at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness as a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> attack. <i>Parrrley</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for (175%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>total</b> damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Gangplank fires a shot at the target enemy that deals physical damage and applies  on-hit and on-attack effects at 100% effectiveness as a  ranged attack',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness as a  ranged attackfires a shot at the target enemy that deals physical damage and applies  on-hit and on-attack effects at 100',
            pre: 'Gangplank fires a shot at the target enemy that deals physical damage and applies  on-hit and on-attack effects at 100% effectiveness as a  ranged attack',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Parrrley can  critically strike for (175% +  35%) total damage.',
            damagetype: 'None',
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'total damage.',
            pre: 'Parrrley can  critically strike for',
            post: 'total damage.',
            children: [
              {
                values: 175,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '175% +  35%',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '10 / 40 / 70 / 100 / 130 (+ 100% AD)',
            valuesHTML:
              '10 / 40 / 70 / 100 / 130 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '10 / 40 / 70 / 100 / 130 (+ 100% AD)',
            damagetype: 'Physical',
            values: [10, 40, 70, 100, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 40 / 70 / 100 / 130',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Silver_Serpents.png',
        description:
          'If Parrrley kills the target, Gangplank plunders  gold and  Silver Serpents. Each enemy killed by a  Powder Keg explosion that was originally set off by Parrrley also counts for the plunder.',
        descriptionHTML:
          'If <i>Parrrley</i> kills the target, <b>Gangplank</b> plunders <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Silver Serpents" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Silver Serpents"><img alt="Silver Serpents" src="/wiki/images/Gangplank_Silver_Serpents.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Gangplank/LoL">Silver Serpents</a></span></span></i>. Each enemy killed by a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span></i> explosion that was originally set off by <i>Parrrley</i> also counts for the plunder.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Gold Plunder:',
            values: '3 / 4 / 5 / 6 / 7',
            valuesHTML:
              '<span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="3 / 4 / 5 / 6 / 7 Gold"><img alt="3 / 4 / 5 / 6 / 7 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">3 / 4 / 5 / 6 / 7</span></span>',
          },
          {
            name: 'Silver Serpent Plunder:',
            values: '4 / 5 / 6 / 7 / 8',
            valuesHTML:
              '<span class="inline-image ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Silver Serpents" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Gangplank/LoL#Silver Serpents"><img alt="Gangplank Silver Serpents.png" src="/wiki/images/Gangplank_Silver_Serpents.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> 4 / 5 / 6 / 7 / 8',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Gold Plunder:',
            raw: '3 / 4 / 5 / 6 / 7',
            values: [3, 4, 5, 6, 7],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 4 / 5 / 6 / 7',
          },
          {
            effectType: 'Unique',
            name: 'Silver Serpent Plunder:',
            raw: '4 / 5 / 6 / 7 / 8',
            values: [4, 5, 6, 7, 8],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 5 / 6 / 7 / 8',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Silver Serpents can be spent in the shop to upgrade  Cannon Barrage.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Silver Serpents" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Silver Serpents"><img alt="Silver Serpents" src="/wiki/images/Gangplank_Silver_Serpents.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Gangplank/LoL">Silver Serpents</a></span></span></i> can be spent in the <a href="/wiki/Shop" title="Shop">shop</a> to upgrade <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Cannon Barrage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Cannon_Barrage" title="Cannon Barrage"><img alt="Cannon Barrage" src="/wiki/images/Gangplank_Cannon_Barrage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Cannon_Barrage" title="Gangplank/LoL">Cannon Barrage</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies, Self',
    damagetype: 'Physical',
    spelleffects: 'basic',
    onhiteffects: 'True',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* <i>Parrrley</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>, but also triggers spell effects by dealing an additional 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">On-hit</a></span> effects that deal damage to secondary targets will allow <i>Parrrley</i> to plunder from enemies killed that way, much like with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Kegs"><img alt="Powder Kegs" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Kegs</a></span></span>.\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ravenous Hydra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ravenous_Hydra" title="Ravenous Hydra"><img alt="Ravenous Hydra" src="/wiki/images/Ravenous_Hydra_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ravenous_Hydra" title="Ravenous Hydra">Ravenous Hydra</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Titanic Hydra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Titanic_Hydra" title="Titanic Hydra"><img alt="Titanic Hydra" src="/wiki/images/Titanic_Hydra_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Titanic_Hydra" title="Titanic Hydra">Titanic Hydra</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Sunfire Aegis" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sunfire_Aegis" title="Sunfire Aegis\'"><img alt="Sunfire Aegis\'" src="/wiki/images/Sunfire_Aegis_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sunfire_Aegis" title="Sunfire Aegis">Sunfire Aegis\'</a></span></span> <i>Flametouch</i> (reapplication corresponding to the attack) work like this and will grant additional plunder from enemies they kill when triggered by <i>Parrrley</i> as their <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span>.</li>\n<li>Even spell effects such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Luden\'s Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Luden%27s_Tempest" title="Luden\'s Tempest\'s"><img alt="Luden\'s Tempest\'s" src="/wiki/images/Luden%27s_Tempest_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Luden%27s_Tempest" title="Luden\'s Tempest">Luden\'s Tempest\'s</a></span></span> <i>Echo</i> will work with this when triggered by <i>Parrrley</i> as their <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span>. Spell effects that do not belong to their triggering cast instance, such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Liandry\'s Anguish" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Liandry%27s_Anguish" title="Liandry\'s Anguish\'s"><img alt="Liandry\'s Anguish\'s" src="/wiki/images/Liandry%27s_Anguish_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Liandry%27s_Anguish" title="Liandry\'s Anguish">Liandry\'s Anguish\'s</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Demonic Embrace" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Demonic_Embrace" title="Demonic Embrace\'s"><img alt="Demonic Embrace\'s" src="/wiki/images/Demonic_Embrace_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Demonic_Embrace" title="Demonic Embrace">Demonic Embrace\'s</a></span></span> damage debuffs, do not grant plunder for enemies they kill.</li></ul></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Remove Scurvy': {
    name: 'Remove Scurvy',
    display_name: 'Remove Scurvy',
    champion: 'Gangplank',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'GangplankW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown: '22 / 20 / 18 / 16 / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL" title="Gangplank"><img alt="Gangplank" src="/wiki/images/Gangplank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL" title="Gangplank/LoL">Gangplank</a></span></span> eats citrus to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanse</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effects and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Remove_Scurvy.png',
        description:
          'Active: Gangplank consumes a large quantity of citrus fruit,  cleansing himself from all  crowd control and  healing himself.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gangplank</b> consumes a large quantity of citrus fruit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Heal:',
            values:
              '45 / 70 / 95 / 120 / 145 (+ 90% AP) (+ 13% missing health)',
            valuesHTML:
              '45 / 70 / 95 / 120 / 145 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;13% <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '45 / 70 / 95 / 120 / 145 (+ 90% AP) (+ 13% missing health)',
            healType: 'BonusHealth',
            values: [45, 70, 95, 120, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 70 / 95 / 120 / 145',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
              {
                values: 13,
                valuesIsPercent: true,
                units: 'missing_hp',
                unitsText: 'missing health',
                pre: '+ 13% missing health',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    spelleffects: 'Heal',
    notes:
      '* <i>Remove Scury</i> does not remove <a href="/wiki/Debuff" title="Debuff">debuffs</a> other than <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>, even if both occur from the same effect. For example, <i>Remove Scurvy</i> will dispel the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> from <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span>, but not its <a href="/wiki/Damage_modifier" title="Damage modifier">damage reduction</a>.\n<ul><li><i>Remove Scurvy</i> can remove the underlying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>, but a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> ability is required to override the displacement.</li></ul>',
  },
  'Powder Keg': {
    name: 'Powder Keg',
    display_name: 'Powder Keg',
    champion: 'Gangplank',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'GangplankE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Connection radius">345</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Explosion radius">360</span>',
    cast_time: '0.<small>25</small>',
    cost: '1',
    costtype: 'Charge',
    static: '0.<small>5</small>',
    recharge: '18 / 17 / 16 / 15 / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Gangplank</b> places a <i>Powder Keg</i> at the target location, which can be basic attacked or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="shot"><img alt="shot" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">shot</a></span></span> to damage it. If an enemy destroys a <i>Powder Keg</i>, it is safely dismantled.',
      'If <b>Gangplank</b> destroys a <i>Powder Keg</i>, it will explode to deal the <span style="color: #FF8C34; white-space:normal">attack\'s damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them. Against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, the explosion additionally deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and ignores a <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">portion of their armor</span></span>.<br><br>\n<p>The explosion will cause nearby <i>Powder Kegs</i> to also explode.\n</p>',
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL" title="Gangplank"><img alt="Gangplank" src="/wiki/images/Gangplank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL" title="Gangplank/LoL">Gangplank</a></span></span> stocks a <i>Powder Keg</i> every few seconds, up to a maximum.',
    ],
    description: [
      {
        icon: '/wiki/images/Powder_Keg.png',
        description:
          'Active: Gangplank consumes a charge to place a powder keg at the target location that lasts for 25 seconds and will connect to other kegs with overlapping connection radius through a trail of black powder. The keg starts with 3 health and loses 1 every 2 / 1 / 0.5 (based on level) seconds until it is left with 1 health. Gangplank periodically stocks a Powder Keg charge, up to a maximum amount.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gangplank</b> consumes a charge to place a powder keg at the target location that lasts for 25 seconds and will connect to other kegs with overlapping connection radius through a trail of black powder. The keg starts with <span style="color: #1F995C; white-space:normal">3 health</span> and loses <span style="color: #1F995C; white-space:normal">1</span> every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="2;1;0.5" data-top_values="1;7;13">2 / 1 / 0.<small>5</small> (based on level)</span> seconds until it is left with <span style="color: #1F995C; white-space:normal">1 health</span>. <b>Gangplank</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> a <i>Powder Keg</i> charge, up to a maximum amount.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Gangplank consumes a charge to place a powder keg at the target location that lasts for 25 seconds and will connect to other kegs with overlapping connection radius through a trail of black powder',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              'consumes a charge to place a powder keg at the target location that lasts for 25 seconds and will connect to other kegs with overlapping connection radius through a trail of black powder',
            pre: 'Gangplank consumes a charge to place a powder keg at the target location that lasts for 25 seconds and will connect to other kegs with overlapping connection radius through a trail of black powder',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'The keg starts with 3 health and loses 1 every 2 / 1 / 0.5 (based on level) seconds until it is left with 1 health',
            healType: 'BonusHealth',
            values: [],
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText: 'seconds until it is left with 1 health',
            pre: 'The keg starts with 3 health and loses 1 every 2 / 1 / 0.5',
            post: 'seconds until it is left with 1 health',
          },
        ],
        leveling: [
          {
            name: 'Maximum charges:',
            values: '3 / 3 / 4 / 4 / 5',
            valuesHTML: '3 / 3 / 4 / 4 / 5',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Maximum charges:',
            raw: '3 / 3 / 4 / 4 / 5',
            values: [3, 3, 4, 4, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3 / 4 / 4 / 5',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Kegs can be basic attacked by enemies or Gangplank (including his  Parrrley), dealing 1 damage to it. When an enemy destroys it, it is safely defused. When Gangplank destroys it, it explodes and also triggers a chain reaction that explodes other nearby connected kegs with a 0.33 seconds-delay between explosions. The explosions also grant  sight of their radiuses for 2 seconds.',
        descriptionHTML:
          'Kegs can be <a href="/wiki/Basic_attack" title="Basic attack">basic attacked</a> by enemies or <b>Gangplank</b> (including his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span></i>), dealing 1 damage to it. When an enemy destroys it, it is safely defused. When <b>Gangplank</b> destroys it, it explodes and also triggers a chain reaction that explodes other nearby connected kegs with a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.3 seconds, but rounded up to the next game tick.">0.<small>33</small> seconds</span>-delay between explosions. The explosions also grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their radiuses for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Kegs can be basic attacked by enemies or Gangplank (including his  Parrrley), dealing 1 damage to it',
            damagetype: 'None',
            values: 0,
            user: 'none',
            units: '',
            unitsText: ', dealing 1 damage to it',
            pre: 'Kegs can be basic attacked by enemies or Gangplank',
            post: ', dealing 1 damage to it',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'including his  Parrrley',
                pre: 'including his  Parrrley',
              },
            ],
          },
          {
            effectType: 'Gain',
            name: 'Line 4:',
            raw: 'The explosions also grant  sight of their radiuses for 2 seconds.',
            increasedStat: 'total_ad',
            values: 2,
            units: '',
            unitsText:
              'explosions also grant  sight of their radiuses for 2 seconds.',
            pre: 'The explosions also grant  sight of their radiuses for 2 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Enemies caught in an explosion are  slowed for 2 seconds, and are dealt the triggering attack's damage, dealing bonus physical damage against  champions. Each enemy can only be hit once per chain and the damage dealt ignores  40% of the target's armor.",
        descriptionHTML:
          'Enemies caught in an explosion are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 2 seconds, and are dealt the triggering <span style="color:orange; white-space:normal">attack\'s damage</span>, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. Each enemy can only be hit once per chain and the damage dealt ignores <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">40% of the target\'s armor</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Enemies caught in an explosion are  slowed for 2 seconds, and are dealt the triggering attack's damage, dealing bonus physical damage against  champions",
            increasedStat: 'bonus_ad',
            values: 2,
            units: '',
            unitsText:
              "caught in an explosion are  slowed for 2 seconds, and are dealt the triggering attack's damage, dealing bonus physical damage against  champions",
            pre: "Enemies caught in an explosion are  slowed for 2 seconds, and are dealt the triggering attack's damage, dealing bonus physical damage against  champions",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "Each enemy can only be hit once per chain and the damage dealt ignores  40% of the target's armor.",
            damagetype: 'None',
            values: 4,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText:
              "of the target's armor.enemy can only be hit once per chain and the damage dealt ignores  40",
            pre: "Each enemy can only be hit once per chain and the damage dealt ignores  40% of the target's armor.",
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values:
              '30 / 37.5 / 45 / 52.5 / 60% (+ 0% − 25% (based on critical strike chance)',
            valuesHTML:
              '30 / 37.<small>5</small> / 45 / 52.<small>5</small> / 60% <span style="color: #E56013; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.25% per 1% critical strike chance" data-bot_values="0;2.5;5;7.5;10;12.5;15;17.5;20;22.5;25" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 25% (based on critical strike chance)</span></span>',
          },
          {
            name: 'Bonus Champion Damage:',
            values: '75 / 105 / 135 / 165 / 195',
            valuesHTML: '75 / 105 / 135 / 165 / 195',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 37.5 / 45 / 52.5 / 60% (+ 0% − 25% (based on critical strike chance)',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            basedOn: 'critical strike chance',
            user: 'none',
            units: '',
            unitsText: '+ 0',
            pre: '30 / 37.5 / 45 / 52.5 / 60% + 0% − 25%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Champion Damage:',
            raw: '75 / 105 / 135 / 165 / 195',
            damagetype: 'None',
            values: [75, 105, 135, 165, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 105 / 135 / 165 / 195',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the triggering attack was a  critical strike, the explosions deal 5% more damage on top of the critical damage.',
        descriptionHTML:
          'If the triggering attack was a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span>, the explosions deal 5% more damage on top of the critical damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If the triggering attack was a  critical strike, the explosions deal 5% more damage on top of the critical damage.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'more damage on top of the critical damage.the triggering attack was a  critical strike, the explosions deal 5',
            pre: 'If the triggering attack was a  critical strike, the explosions deal 5% more damage on top of the critical damage.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* The triggering attack\'s damage can include <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span>\'s base damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span>.\n<ul><li>When triggered with critical strike, <i>Spellblade</i> and the bonus damage to champions are added after the calculations, meaning that these effects are not increased by 10%.</li>\n<li>The total damage can be easily calculated with this formula:<br>{aDMG * [1.75 (<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="+ 0.35"><img alt="+ 0.35" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">+ 0.35</a></span></span>)] * 1.1} + sDMG + cDMG<br>Where:\n<ul><li>aDMG = Triggering attack\'s damage</li>\n<li>sDMG = Spellblade\'s damage</li>\n<li>cDMG = Bonus damage to champions</li></ul></li>\n<li>Kegs have special interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span>:\n<ul><li>If the keg destroying attack was empowered with <i>Spellblade</i>, its damage will be added to the explosions\' damage.</li>\n<li>If the keg was not destroyed, it will consume the effect and the keg will store the damage it would have dealt. If the storing keg is the initial detonation of the chain, it will add its damage to the explosions\' damage as it was triggered with <i>Spellblade</i>.</li>\n<li>If the storing keg was attacked with a new instance of <i>Spellblade</i>, it will override the previously stored damage (if different).</li>\n<li>Damage can only be stored if <i>Spellblade</i> was consumed by \'<i>Gangplank</i>.</li>\n<li>The stored damage is static and will not change if <b>Gangplank\'s</b> <b>base</b> attack damage or ability power (see below) changes.</li></ul></li>\n<li>Specific <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> item interactions:\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Trinity Force" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trinity_Force" title="Trinity Force"><img alt="Trinity Force" src="/wiki/images/Trinity_Force_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trinity_Force" title="Trinity Force">Trinity Force</a></span></span>: Attacking kegs or dealing damage to champions with the explosion does not increase the <span style="color:orange; white-space:normal">base attack damage</span>.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Divine Sunderer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Divine_Sunderer" title="Divine Sunderer"><img alt="Divine Sunderer" src="/wiki/images/Divine_Sunderer_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Divine_Sunderer" title="Divine Sunderer">Divine Sunderer</a></span></span>: Explosions always apply the minimum damage of this item and does not apply the heal.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Lich Bane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lich_Bane" title="Lich Bane"><img alt="Lich Bane" src="/wiki/images/Lich_Bane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lich_Bane" title="Lich Bane">Lich Bane</a></span></span>: The <span style="color: #00B0F0; white-space:normal">magic damage</span> will be added to the explosions\' damage, but will be dealt as <span style="color: #FF8C34; white-space:normal">physical damage</span>.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Essence Reaver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Essence_Reaver" title="Essence Reaver"><img alt="Essence Reaver" src="/wiki/images/Essence_Reaver_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Essence_Reaver" title="Essence Reaver">Essence Reaver</a></span></span>: Consuming the effect on kegs will restore <span style="color: #0099CC; white-space:normal">mana</span>. Explosions does not trigger this.</li></ul></li>\n<li>Placed barrels do <b>not</b> grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">vision</a></span> until they explode, but they are revealed to <b>Gangplank</b>.\n<ul><li>If <b>Gangplank</b> loses allied vision, for instance due to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span>, he will also lose vision on his barrels temporarily.</li>\n<li>Barrels prematurely grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their explosion radius (including across terrain and into bushes) if <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span> or a lit fuse is travelling towards them.\n<ul><li>This area reveal happens even if <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span> is not going to make it explode.</li></ul></li></ul></li>\n<li>An exploding <i>Powder Keg</i> will splash <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley\'s"><img alt="Parrrley\'s" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley\'s</a></span></span> <b>bonus</b> damage, and will also be modified if the attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>.</li>\n<li>Attacks against <i>Powder Kegs</i> will apply <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effects (such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tiamat" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tiamat" title="Tiamat\'s"><img alt="Tiamat\'s" src="/wiki/images/Tiamat_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tiamat" title="Tiamat">Tiamat\'s</a></span></span> <a href="/wiki/Named_item_effect#Cleave" title="Named item effect">Cleave</a>), but <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> against the barrel itself is reduced to 0.\n<ul><li>Damage from <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effects will <b>not</b> increase the damage of the explosion.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> is a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Since late Season 9 - previously, Spellblade worked simply because it would add to the attack\'s damage directly">special-cased exception</span>.</li></ul></li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Dead Man\'s Plate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dead_Man%27s_Plate" title="Dead Man\'s Plate\'s"><img alt="Dead Man\'s Plate\'s" src="/wiki/images/Dead_Man%27s_Plate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dead_Man%27s_Plate" title="Dead Man\'s Plate">Dead Man\'s Plate\'s</a></span></span> <a href="/wiki/Named_item_effect#Crushing_Blow" title="Named item effect">Crushing Blow</a> will not trigger from <i>Powder Kegs</i> destroyed from <b>Gangplank</b>, even with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span>.</li>\n<li><b>Gangplank</b> stocks <i>Powder Kegs</i> even if the ability hasn\'t been learned yet.\n<ul><li>This is due to the recharge rate at level 1 being set the same as level 0.</li>\n<li>While at maximum charges, ranking up the ability to rank 3 or 5 grants the remaining charge immediately regardless of the recharge timer.</li></ul></li></ul>',
  },
  'Cannon Barrage': {
    name: 'Cannon Barrage',
    display_name: 'Cannon Barrage',
    champion: 'Gangplank',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'GangplankR.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: 'Global',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Volley damage and Raise Morale effect radius">580</span>',
    inner_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Death\'s Daughter">170</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">180 / 170 / 160 / 150 / 140</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL" title="Gangplank"><img alt="Gangplank" src="/wiki/images/Gangplank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL" title="Gangplank/LoL">Gangplank</a></span></span> orders a cannon bombardment to the target location, each blast deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within.',
      '<b>Gangplank</b> can improve <i>Cannon Barrage</i> by purchasing upgrades in the shop with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Silver Serpents" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Silver Serpents"><img alt="Silver Serpents" src="/wiki/images/Gangplank_Silver_Serpents.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Gangplank/LoL">Silver Serpents</a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Cannon_Barrage.png',
        description:
          'Active: Gangplank shoots a flare into the air, signaling his ship off-shore to fire upon the target location for 8 seconds, calling down 12 waves of cannonballs in clusters of 3 every 2 seconds, and granting  sight of the area for the duration. Each wave deals magic damage to all enemies within the area and  slows them by 30% for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gangplank</b> shoots a flare into the air, signaling his ship off-shore to fire upon the target location for 8 seconds, calling down 12 waves of cannonballs in clusters of 3 every 2 seconds, and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for the duration. Each wave deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 30% for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Gangplank shoots a flare into the air, signaling his ship off-shore to fire upon the target location for 8 seconds, calling down 12 waves of cannonballs in clusters of 3 every 2 seconds, and granting  sight of the area for the duration',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'shoots a flare into the air, signaling his ship off-shore to fire upon the target location for 8 seconds, calling down 12 waves of cannonballs in clusters of 3 every 2 seconds, and granting  sight of the area for the duration',
            pre: 'Gangplank shoots a flare into the air, signaling his ship off-shore to fire upon the target location for 8 seconds, calling down 12 waves of cannonballs in clusters of 3 every 2 seconds, and granting  sight of the area for the duration',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Each wave deals magic damage to all enemies within the area and  slows them by 30% for 0.5 seconds.',
            damagetype: 'Magic',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.5 seconds.wave deals magic damage to all enemies within the area and  slows them by 30',
            pre: 'Each wave deals magic damage to all enemies within the area and  slows them by 30% for 0.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Wave:',
            values: '40 / 55 / 70 / 85 / 100 (+ 10% AP)',
            valuesHTML:
              '40 / 55 / 70 / 85 / 100 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
          {
            name: 'Total Magic Damage:',
            values: '480 / 660 / 840 / 1020 / 1200 (+ 120% AP)',
            valuesHTML:
              '480 / 660 / 840 / 1020 / 1200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;120% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Wave:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 10% AP)',
            damagetype: 'Magic',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '480 / 660 / 840 / 1020 / 1200 (+ 120% AP)',
            damagetype: 'Magic',
            values: [480, 660, 840, 1020, 1200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '480 / 660 / 840 / 1020 / 1200',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Gangplank can purchase upgrades for his ship in the store at the cost of 500  Silver Serpents each, which improve Cannon Barrage:',
        descriptionHTML:
          '<b>Gangplank</b> can purchase upgrades for his ship in the store at the cost of 500 <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Silver Serpents" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Silver Serpents"><img alt="Silver Serpents" src="/wiki/images/Gangplank_Silver_Serpents.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Silver_Serpents" title="Gangplank/LoL">Silver Serpents</a></span></span></i> each, which improve <i>Cannon Barrage</i>:',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Gangplank can purchase upgrades for his ship in the store at the cost of 500  Silver Serpents each, which improve Cannon Barrage:',
            damagetype: 'None',
            values: 5,
            units: 'total_ad',
            unitsText:
              'can purchase upgrades for his ship in the store at the cost of 500  Silver Serpents each, which improve Cannon Barrage:',
            pre: 'Gangplank can purchase upgrades for his ship in the store at the cost of 500  Silver Serpents each, which improve Cannon Barrage:',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Death's_Daughter_item.png",
        description:
          "Death's Daughter: A large cannonball lands in the center of the barrage after the first cluster of waves occur, dealing a cluster's worth of true damage to enemies within the impact and  slowing them by 60% for 1.5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Death\'s Daughter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Death%27s_Daughter" title="Death\'s Daughter"><img alt="Death\'s Daughter" src="/wiki/images/Death%27s_Daughter_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Death%27s_Daughter" class="mw-redirect" title="Death\'s Daughter">Death\'s Daughter</a></span></span>:</b></span> A large cannonball lands in the center of the barrage after the first cluster of waves occur, dealing a cluster\'s worth of <span style="color: #F9966B; white-space:normal">true damage</span> to enemies within the impact and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 60% for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: "Death's Daughter:",
            raw: "A large cannonball lands in the center of the barrage after the first cluster of waves occur, dealing a cluster's worth of true damage to enemies within the impact and  slowing them by 60% for 1.5 seconds.",
            damagetype: 'True',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "for 1.5 seconds.large cannonball lands in the center of the barrage after the first cluster of waves occur, dealing a cluster's worth of true damage to enemies within the impact and  slowing them by 60",
            pre: "A large cannonball lands in the center of the barrage after the first cluster of waves occur, dealing a cluster's worth of true damage to enemies within the impact and  slowing them by 60% for 1.5 seconds.",
          },
        ],
        leveling: [
          {
            name: "True Damage with  Death's Daughter:",
            values: '120 / 165 / 210 / 255 / 300 (+ 30% AP)',
            valuesHTML:
              '120 / 165 / 210 / 255 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
          {
            name: "Total Mixed Damage with  Death's Daughter:",
            values: '600 / 825 / 1050 / 1275 / 1500 (+ 150% AP)',
            valuesHTML:
              '600 / 825 / 1050 / 1275 / 1500 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;150% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: "True Damage with  Death's Daughter:",
            raw: '120 / 165 / 210 / 255 / 300 (+ 30% AP)',
            damagetype: 'True',
            values: [120, 165, 210, 255, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 165 / 210 / 255 / 300',
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
          {
            effectType: 'Damage',
            name: "Total Mixed Damage with  Death's Daughter:",
            raw: '600 / 825 / 1050 / 1275 / 1500 (+ 150% AP)',
            damagetype: 'None',
            values: [600, 825, 1050, 1275, 1500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '600 / 825 / 1050 / 1275 / 1500',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Fire_at_Will_item.png',
        description:
          'Fire at Will: Cannon Barrage fires「 6 additional waves 」「 2 additional clusters 」 over its duration; 18 waves of cannonballs are called down in clusters of 3 every 1.33 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Fire at Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fire_at_Will" title="Fire at Will"><img alt="Fire at Will" src="/wiki/images/Fire_at_Will_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fire_at_Will" class="mw-redirect" title="Fire at Will">Fire at Will</a></span></span>:</b></span> <i>Cannon Barrage</i> fires<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;6 additional waves&nbsp;」</span><span class="flipText2">「&nbsp;2 additional clusters&nbsp;」</span></span> over its duration; 18 waves of cannonballs are called down in clusters of 3 every 1.<small>3<span style="text-decoration: overline;">3</span></small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Fire at Will:',
            raw: 'Cannon Barrage fires「 6 additional waves 」「 2 additional clusters 」 over its duration; 18 waves of cannonballs are called down in clusters of 3 every 1.33 seconds.',
            damagetype: 'None',
            values: 6,
            units: 'total_ad',
            unitsText:
              'Barrage fires「 6 additional waves 」「 2 additional clusters 」 over its duration; 18 waves of cannonballs are called down in clusters of 3 every 1.33 seconds.',
            pre: 'Cannon Barrage fires「 6 additional waves 」「 2 additional clusters 」 over its duration; 18 waves of cannonballs are called down in clusters of 3 every 1.33 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Total Magic Damage with  Fire at Will:',
            values: '720 / 990 / 1260 / 1530 / 1800 (+ 180% AP)',
            valuesHTML:
              '720 / 990 / 1260 / 1530 / 1800 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;180% AP)</span>',
          },
          {
            name: "Maximum Mixed Total Damage with  Fire at Will and  Death's Daughter:",
            values: '840 / 1155 / 1470 / 1785 / 2100 (+ 210% AP)',
            valuesHTML:
              '840 / 1155 / 1470 / 1785 / 2100 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;210% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage with  Fire at Will:',
            raw: '720 / 990 / 1260 / 1530 / 1800 (+ 180% AP)',
            damagetype: 'Magic',
            values: [720, 990, 1260, 1530, 1800],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '720 / 990 / 1260 / 1530 / 1800',
            children: [
              {
                values: 180,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 180% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: "Maximum Mixed Total Damage with  Fire at Will and  Death's Daughter:",
            raw: '840 / 1155 / 1470 / 1785 / 2100 (+ 210% AP)',
            damagetype: 'None',
            values: [840, 1155, 1470, 1785, 2100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '840 / 1155 / 1470 / 1785 / 2100',
            children: [
              {
                values: 210,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 210% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Raise_Morale_item.png',
        description:
          'Raise Morale: Cannon Barrage grants Gangplank and all allies within the area  30% bonus movement speed, lingering for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Raise Morale" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Raise_Morale" title="Raise Morale"><img alt="Raise Morale" src="/wiki/images/Raise_Morale_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Raise_Morale" class="mw-redirect" title="Raise Morale">Raise Morale</a></span></span>:</b></span> <i>Cannon Barrage</i> grants <b>Gangplank</b> and all allies within the area <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span>, lingering for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Raise Morale:',
            raw: 'Cannon Barrage grants Gangplank and all allies within the area  30% bonus movement speed, lingering for 2 seconds.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed, lingering for 2 seconds.Barrage grants Gangplank and all allies within the area  30',
            pre: 'Cannon Barrage grants Gangplank and all allies within the area  30% bonus movement speed, lingering for 2 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'area',
    spellshield: true,
    notes:
      "* <i>Cannon Barrage's</i> slow lingers for 0.<small>25</small> seconds after affected enemies leave the target area.",
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Gangplank_Original_R_2.ogg   "Volley fire!"',
  },
} satisfies { [skillName in string]: SkillData };
