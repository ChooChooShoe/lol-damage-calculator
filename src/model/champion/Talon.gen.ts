import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Talon';

export default {
  "Blade's End": {
    name: "Blade's End",
    display_name: "Blade's End",
    champion: 'Talon',
    skill: 'I',
    image: {
      full: 'TalonP.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL" title="Talon\'s"><img alt="Talon\'s" src="/wiki/images/Talon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL" title="Talon/LoL">Talon\'s</a></span></span> abilities apply stacks of <i>Wound</i> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> each time they are hit, stacking up to a cap.',
      'His next basic attack against an enemy with max stacks consumes them all to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> over a short time.',
    ],
    description: [
      {
        icon: "/wiki/images/Blade's End.png",
        description:
          "Innate: Talon's abilities apply a stack of Wound to enemy  champions and large  monsters hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Talon\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Wound</i> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: " Talon's abilities apply a stack of Wound to enemy  champions and large  monsters hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
            min: 0,
            max: 10,
            description:
              " Talon's abilities apply a stack of Wound to enemy  champions and large  monsters hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
            values: 6,
            units: 'total_ap',
            unitsText:
              'abilities apply a stack of Wound to enemy  champions and large  monsters hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.',
            pre: "Talon's abilities apply a stack of Wound to enemy  champions and large  monsters hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Talon's next basic attack against an enemy with 3 Wound stacks is empowered to consume them all to cause the target to bleed, dealing「 75 − 255 (based on level) (+ 200% bonus AD) total physical damage over 2 seconds, 」「 4.69 − 15.94 (based on level) (+ 12.5% bonus AD) physical damage every 0.125 seconds over 2 seconds, 」increased to 120% damage against  monsters. The target cannot gain Wound stacks during this time.",
        descriptionHTML:
          '<b>Talon\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against an enemy with 3 <i>Wound</i> stacks is empowered to consume them all to cause the target to bleed, dealing<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="75;" data-finish="255;" data-bot_values="75;85.59;96.18;106.76;117.35;127.94;138.53;149.12;159.71;170.29;180.88;191.47;202.06;212.65;223.24;233.82;244.41;255" data-top_values="">75 − 255 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;200% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>total</b> physical damage</span> over 2 seconds,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="4.6875;" data-finish="15.9375;" data-bot_values="4.69;5.35;6.01;6.67;7.33;8;8.66;9.32;9.98;10.64;11.31;11.97;12.63;13.29;13.95;14.61;15.28;15.94" data-top_values="">4.<small>69</small> − 15.<small>94</small> (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;12.<small>5</small>% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> every 0.<small>125</small> seconds over 2 seconds,&nbsp;」</span></span>increased to 120% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. The target cannot gain <i>Wound</i> stacks during this time.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Talon's next basic attack against an enemy with 3 Wound stacks is empowered to consume them all to cause the target to bleed, dealing「 75 − 255 (based on level) (+ 200% bonus AD) total physical damage over 2 seconds, 」「 4.69 − 15.94 (based on level) (+ 12.5% bonus AD) physical damage every 0.125 seconds over 2 seconds, 」increased to 120% damage against  monsters",
            values: [
              75, 85.59, 96.18, 106.76, 117.35, 127.94, 138.53, 149.12, 159.71,
              170.29, 180.88, 191.47, 202.06, 212.65, 223.24, 233.82, 244.41,
              255,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'total physical damage over 2 seconds, 」「 4.69 − 15.94',
            pre: "Talon's next basic attack against an enemy with 3 Wound stacks is empowered to consume them all to cause the target to bleed, dealing「 75 − 255",
            post: 'total physical damage over 2 seconds, 」「 4.69 − 15.94',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 200% bonus AD',
              },
              {
                values: 12.5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 12.5% bonus AD',
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
    damagetype: 'Physical',
    spelleffects: 'default',
    spellshield: 'Special',
    notes:
      '* <i>Blade End\'s</i> enhanced attack will still trigger if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.\n<ul><li>Both passes of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-ability="Rake" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL#Rake" title="Rake"><img alt="Rake" src="/wiki/images/Talon_Rake.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL#Rake" title="Talon/LoL">Rake</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-ability="Shadow Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Shadow Assault"><img alt="Shadow Assault" src="/wiki/images/Talon_Shadow_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Talon/LoL">Shadow Assault</a></span></span> apply a stack of <i>Wound</i>.</li>\n<li>Interaction with <i>parrying</i> effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>). If the attack gets parried, dodged or missed the stacks do not trigger or refresh and their amount remains unchanged.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> prevents <i>Wound</i> <a href="/wiki/Stacks" class="mw-redirect" title="Stacks">stacks</a> from being applied.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> prevents <i>Blade End\'s</i> enhanced attack from triggering though still consuming all <i>Wound</i> <a href="/wiki/Stacks" class="mw-redirect" title="Stacks">stacks</a>.</li></ul></li></ul>',
  },
  'Noxian Diplomacy': {
    name: 'Noxian Diplomacy',
    display_name: 'Noxian Diplomacy',
    champion: 'Talon',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'TalonQ.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '575 / 170',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed, estimated">1400</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Stab">0.<small>25</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash">None</span>',
    cost: '40',
    costtype: 'Mana',
    cooldown: '8 / 7.<small>5</small> / 7 / 6.<small>5</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL" title="Talon"><img alt="Talon" src="/wiki/images/Talon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL" title="Talon/LoL">Talon</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>. If the target is within melee range, <b>Talon</b> instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span> the target, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
      'If <i>Noxian Diplomacy</i> kills the target, <b>Talon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> and <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduces</span> the cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Noxian Diplomacy.png',
        description:
          'Active: Talon  dashes towards the target enemy, dealing physical damage upon arrival. If Noxian Diplomacy is cast within close range, Talon instead stabs the target to  critically strike for (50% +  35%) bonus physical damage, as well as gain  75 bonus attack range on his next basic attack within 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Talon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> towards the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> upon arrival. If <i>Noxian Diplomacy</i> is cast within close range, <b>Talon</b> instead stabs the target to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(50%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span>, as well as gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> attack range</span> on his next basic attack within 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If Noxian Diplomacy is cast within close range, Talon instead stabs the target to  critically strike for (50% +  35%) bonus physical damage, as well as gain  75 bonus attack range on his next basic attack within 1 second.',
            increasedStat: 'bonus_ad',
            values: 0,
            units: '',
            unitsText:
              'bonus physical damage, as well as gain  75 bonus attack range on his next basic attack within 1 second.',
            pre: 'If Noxian Diplomacy is cast within close range, Talon instead stabs the target to  critically strike for',
            post: 'bonus physical damage, as well as gain  75 bonus attack range on his next basic attack within 1 second.',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '50% +  35%',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '65 / 85 / 105 / 125 / 145 (+ 100% bonus AD)',
            valuesHTML:
              '65 / 85 / 105 / 125 / 145 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 85 / 105 / 125 / 145 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [65, 85, 105, 125, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 85 / 105 / 125 / 145',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          "If Noxian Diplomacy kills the target, Talon  heals for 9 − 55 (based on level) and the ability's  cooldown is reduced by 50%.",
        descriptionHTML:
          'If <i>Noxian Diplomacy</i> kills the target, <b>Talon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;" data-finish="55;" data-bot_values="9;11.71;14.41;17.12;19.82;22.53;25.24;27.94;30.65;33.35;36.06;38.76;41.47;44.18;46.88;49.59;52.29;55" data-top_values="">9 − 55 (based on level)</span> and the ability\'s <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 50%.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "If Noxian Diplomacy kills the target, Talon  heals for 9 − 55 (based on level) and the ability's  cooldown is reduced by 50%.",
            healType: 'OutgoingHeals',
            values: [
              9, 11.71, 14.41, 17.12, 19.82, 22.53, 25.24, 27.94, 30.65, 33.35,
              36.06, 38.76, 41.47, 44.18, 46.88, 49.59, 52.29, 55,
            ],
            basedOn: 'level',
            units: 'total_ap',
            unitsText: "and the ability's  cooldown is reduced by 50%.",
            pre: 'If Noxian Diplomacy kills the target, Talon  heals for 9 − 55',
            post: "and the ability's  cooldown is reduced by 50%.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Noxian Diplomacy's stab  resets Talon's basic attack timer.  Shadow Assault can be cast during the dash.",
        descriptionHTML:
          '<i>Noxian Diplomacy\'s stab <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Talon\'s</b> basic attack timer. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-ability="Shadow Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Shadow Assault"><img alt="Shadow Assault" src="/wiki/images/Talon_Shadow_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Talon/LoL">Shadow Assault</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* <b>Talon</b> will track the target if they change locations.\n<ul><li><ul><li>He will dash to the target\'s previous location while still dealing damage if the target is too far away or moves beyond <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">800</span> units.</li></ul></li>\n<li><b>Talon</b> will be ordered to basic attack the target at the end of the dash.</li>\n<li>While <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>, <i>Noxian Diplomacy</i> can only be cast within stab range.</li>\n<li><i>Noxian Diplomacy</i> will also grant the heal if the target dies upon <b>Talon\'s</b> completion of the dash.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).\n<ul><li>This only applies to the stab version.</li></ul></li></ul>',
  },
  Rake: {
    name: 'Rake',
    display_name: 'Rake',
    champion: 'Talon',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'TalonW.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '900',
    angle: '22°',
    cast_time: '0.<small>25</small>',
    cost: '55 / 60 / 65 / 70 / 75',
    costtype: 'Mana',
    cooldown: '9 / 8.<small>5</small> / 8 / 7.<small>5</small> / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL" title="Talon"><img alt="Talon" src="/wiki/images/Talon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL" title="Talon/LoL">Talon</a></span></span> throws a fan of daggers in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
      'After a brief delay, the daggers home back to him, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Rake.png',
        description:
          'Active: Talon throws a fan of daggers in a cone in the target direction that deals physical damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Talon</b> throws a fan of daggers in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '40 / 50 / 60 / 70 / 80 (+ 40% bonus AD)',
            valuesHTML:
              '40 / 50 / 60 / 70 / 80 <span style="color:orange; white-space:normal">(+&nbsp;40% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '40 / 50 / 60 / 70 / 80 (+ 40% bonus AD)',
            damagetype: 'Physical',
            values: [40, 50, 60, 70, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'At maximum range, the daggers linger for 0.75 seconds before homing back to Talon, dealing physical damage to enemies hit and  slowing them for 1 second.',
        descriptionHTML:
          'At maximum range, the daggers linger for 0.<small>75</small> seconds before homing back to <b>Talon</b>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 1 second.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '50 / 80 / 110 / 140 / 170 (+ 80% bonus AD)',
            valuesHTML:
              '50 / 80 / 110 / 140 / 170 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Slow:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 80% bonus AD)',
            damagetype: 'Physical',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
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
        description: 'Rake deals 105% damage against  monsters.',
        descriptionHTML:
          '<i>Rake</i> deals 105% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Rake deals 105% damage against  monsters.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage against  monsters.deals 105',
            pre: 'Rake deals 105% damage against  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Enemies can be hit only once per pass.',
        descriptionHTML: '<i>Enemies can be hit only once per pass.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* If <b>Talon</b> dies while <i>Rake</i> is mid-air, the projectiles will still complete their travel.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  "Assassin's Path": {
    name: "Assassin's Path",
    display_name: "Assassin's Path",
    champion: 'Talon',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'TalonE.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '725',
    speed:
      '<span style="color: #F5EE99; white-space:normal">100% movement speed</span>',
    cast_time: 'none',
    cooldown: '2',
    customlabel:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">On-Terrain Cooldown</span>',
    custominfo: '160 / 135 / 110 / 85 / 60',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL" title="Talon"><img alt="Talon" src="/wiki/images/Talon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL" title="Talon/LoL">Talon</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">vaults</a></span> over the target <a href="/wiki/Terrain" title="Terrain">terrain</a>.',
      "<b>Talon</b> cannot cast <i>Assassin's Path</i> on the same area for a set duration.",
    ],
    description: [
      {
        icon: "/wiki/images/Assassin's Path.png",
        description:
          'Active: Talon  dashes up to 800 units over the target area of terrain, during which he gains  unobstructed vision.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Talon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> up to 800 units over the target area of <a href="/wiki/Terrain" title="Terrain">terrain</a>, during which he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Talon  dashes up to 800 units over the target area of terrain, during which he gains  unobstructed vision.',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'dashes up to 800 units over the target area of terrain, during which he gains  unobstructed vision.',
            pre: 'Talon  dashes up to 800 units over the target area of terrain, during which he gains  unobstructed vision.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Talon cannot cast Assassin's Path on the same area of terrain for a set duration.",
        descriptionHTML:
          "<b>Talon</b> cannot cast <i>Assassin's Path</i> on the same area of terrain for a set duration.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Shadow Assault can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-ability="Shadow Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Shadow Assault"><img alt="Shadow Assault" src="/wiki/images/Talon_Shadow_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL#Shadow_Assault" title="Talon/LoL">Shadow Assault</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    notes:
      '* <i>Assassin\'s Path</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.\n<ul><li><b>Talon</b> will stop dashing upon entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> but will continue to do so afterwards.</li></ul>',
  },
  'Shadow Assault': {
    name: 'Shadow Assault',
    display_name: 'Shadow Assault',
    champion: 'Talon',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'TalonR.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius: '550',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">100 / 90 / 80 / 70 / 60</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL" title="Talon"><img alt="Talon" src="/wiki/images/Talon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL" title="Talon/LoL">Talon</a></span></span> disperses a ring of blades around him that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time.',
      '<b>Talon</b> can recast while invisible, and automatically does so if he emerges from invisibility.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Talon</b> breaks invisibility and causes the blades to converge to him, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Breaking invisibility with a basic attack or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-ability="Noxian Diplomacy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL#Noxian_Diplomacy" title="Noxian Diplomacy"><img alt="Noxian Diplomacy" src="/wiki/images/Talon_Noxian_Diplomacy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL#Noxian_Diplomacy" title="Talon/LoL">Noxian Diplomacy</a></span></span></i> causes the blades to converge to the target instead.',
    ],
    description: [
      {
        icon: '/wiki/images/Shadow Assault.png',
        description:
          'Active: Talon disperses a ring of blades around him that deals physical damage to nearby enemies, and gains  invisibility and  bonus movement speed for up to 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Talon</b> disperses a ring of blades around him that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for up to 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Talon disperses a ring of blades around him that deals physical damage to nearby enemies, and gains  invisibility and  bonus movement speed for up to 2.5 seconds.',
            increasedStat: 'bonus_ad',
            values: 2,
            units: '',
            unitsText:
              'disperses a ring of blades around him that deals physical damage to nearby enemies, and gains  invisibility and  bonus movement speed for up to 2.5 seconds.',
            pre: 'Talon disperses a ring of blades around him that deals physical damage to nearby enemies, and gains  invisibility and  bonus movement speed for up to 2.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '90 / 112.5 / 135 / 157.5 / 180 (+ 100% bonus AD)',
            valuesHTML:
              '90 / 112.<small>5</small> / 135 / 157.<small>5</small> / 180 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '40 / 47.5 / 55 / 62.5 / 70%',
            valuesHTML:
              '40 / 47.<small>5</small> / 55 / 62.<small>5</small> / 70%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '90 / 112.5 / 135 / 157.5 / 180 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [90, 112.5, 135, 157.5, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 112.5 / 135 / 157.5 / 180',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '40 / 47.5 / 55 / 62.5 / 70%',
            values: [40, 47.5, 55, 62.5, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 47.5 / 55 / 62.5 / 70%',
          },
        ],
      },
      {
        description:
          'Shadow Assault can be recast after 1 second within the duration, and does so automatically after the duration or if Talon emerges from invisibility.',
        descriptionHTML:
          '<i>Shadow Assault</i> can be recast after 1 second within the duration, and does so automatically after the duration or if <b>Talon</b> emerges from invisibility.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Shadow Assault can be recast after 1 second within the duration, and does so automatically after the duration or if Talon emerges from invisibility.',
            damagetype: 'None',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Assault can be recast after 1 second within the duration, and does so automatically after the duration or if Talon emerges from invisibility.',
            pre: 'Shadow Assault can be recast after 1 second within the duration, and does so automatically after the duration or if Talon emerges from invisibility.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Recast: Talon ends Shadow Assault, breaking the invisibility and causing the blades to converge to him, dealing the same damage to enemies hit. Breaking invisibility with a basic attack or  Noxian Diplomacy causes the blades to converge to the target instead.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Talon</b> ends <i>Shadow Assault</i>, breaking the invisibility and causing the blades to converge to him, dealing the same damage to enemies hit. Breaking invisibility with a basic attack or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Talon" data-ability="Noxian Diplomacy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Talon/LoL#Noxian_Diplomacy" title="Noxian Diplomacy"><img alt="Noxian Diplomacy" src="/wiki/images/Talon_Noxian_Diplomacy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Talon/LoL#Noxian_Diplomacy" title="Talon/LoL">Noxian Diplomacy</a></span></span></i> causes the blades to converge to the target instead.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Total Physical Damage:',
            values: '180 / 225 / 270 / 315 / 360 (+ 200% bonus AD)',
            valuesHTML:
              '180 / 225 / 270 / 315 / 360 <span style="color:orange; white-space:normal">(+&nbsp;200% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '180 / 225 / 270 / 315 / 360 (+ 200% bonus AD)',
            damagetype: 'Physical',
            values: [180, 225, 270, 315, 360],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '180 / 225 / 270 / 315 / 360',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 200% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block a single pass.\n<ul><li><i>Shadow Assault</i> does not cancel <b>Talon\'s</b> basic attacks.</li>\n<li><i>Shadow Assault</i> has a minimum lifetime of 0.8 seconds before convergence.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
