import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Xin Zhao';

export default {
  Determination: {
    name: 'Determination',
    display_name: 'Determination',
    champion: 'Xin Zhao',
    skill: 'I',
    image: {
      full: 'XinZhaoP.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao\'s"><img alt="Xin Zhao\'s" src="/wiki/images/Xin_Zhao_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao/LoL">Xin Zhao\'s</a></span></span> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Wind Becomes Lightning" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Wind Becomes Lightning"><img alt="Wind Becomes Lightning" src="/wiki/images/Xin_Zhao_Wind_Becomes_Lightning.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Xin Zhao/LoL">Wind Becomes Lightning</a></span></span></i> strikes generate a stack of <i>Determination</i>, which stacks up to 3 times.',
      'The third stack consumes them all to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> <b>Xin Zhao</b>.',
    ],
    description: [
      {
        icon: '/wiki/images/Determination.png',
        description:
          "Innate: Xin Zhao's basic attacks and  Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times. The third stack consumes them all to deal 15 / 30 / 45 / 60% (based on level) AD bonus physical damage and  heal Xin Zhao for 6 − 74 (based on level) (+ 10% AD) (+ 65% AP).",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Xin Zhao\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Wind Becomes Lightning" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Wind Becomes Lightning"><img alt="Wind Becomes Lightning" src="/wiki/images/Xin_Zhao_Wind_Becomes_Lightning.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Xin Zhao/LoL">Wind Becomes Lightning</a></span></span></i> strikes generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Determination</i>, stacking up to 3 times. The third stack consumes them all to deal <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="15% +&nbsp;15% every 5 levels" data-bot_values="15;30;45;60" data-top_values="1;6;11;16" data-bot_key="%">15 / 30 / 45 / 60% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> <b>Xin Zhao</b> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="6;" data-finish="74;" data-bot_values="6;10;14;18;22;26;30;34;38;42;46;50;54;58;62;66;70;74" data-top_values="">6 − 74 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;10% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;65% AP)</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: " Xin Zhao's basic attacks and  Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times",
            min: 0,
            max: 10,
            description:
              " Xin Zhao's basic attacks and  Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times",
            values: 3,
            units: 'feastStacks',
            unitsText:
              "Zhao's basic attacks and  Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times",
            pre: "Xin Zhao's basic attacks and  Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'The third stack consumes them all to deal 15 / 30 / 45 / 60% (based on level) AD bonus physical damage and  heal Xin Zhao for 6 − 74 (based on level) (+ 10% AD) (+ 65% AP).',
            healType: 'PhysicalVamp',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'bonus_ad',
            unitsText: 'AD bonus physical damage and  heal Xin Zhao for 6 − 74',
            pre: 'The third stack consumes them all to deal 15 / 30 / 45 / 60%',
            post: 'AD bonus physical damage and  heal Xin Zhao for 6 − 74',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 10% AD',
              },
              {
                values: 65,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'proc',
    notes:
      '* The stack counter displays 1–3 rather than the usual 0–2, meaning that a count of 1 does not translate to having 1 stack.\n<ul><li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Wind Becomes Lightning" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Wind Becomes Lightning\'s"><img alt="Wind Becomes Lightning\'s" src="/wiki/images/Xin_Zhao_Wind_Becomes_Lightning.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Xin Zhao/LoL">Wind Becomes Lightning\'s</a></span></span></i> generates one stack per strike that hits at least one enemy.</li>\n<li>Stacks reset when <b>Xin Zhao</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>.</li>\n<li>Stacks of <i>Determination</i> will be gained even if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Determination\'s</i> interaction with <i>parrying</i> effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li>\n<li><i>Determination</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span>.\n<ul><li>Since it is a separate instance of damage when applied by basic attack or either of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Wind Becomes Lightning" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Wind Becomes Lightning\'s"><img alt="Wind Becomes Lightning\'s" src="/wiki/images/Xin_Zhao_Wind_Becomes_Lightning.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Xin Zhao/LoL">Wind Becomes Lightning\'s</a></span></span> strikes, flat damage reduction that applies to both the main and bonus damage such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL" title="Amumu\'s"><img alt="Amumu\'s" src="/wiki/images/Amumu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL" title="Amumu/LoL">Amumu\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Tantrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Tantrum" title="Tantrum\'s"><img alt="Tantrum\'s" src="/wiki/images/Amumu_Tantrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Tantrum" title="Amumu/LoL">Tantrum\'s</a></span></span></span> passive will reduce each, for twice the reduction.</li>\n<li>The bonus damage cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.</li></ul></li>\n<li>When applied by a basic attack:\n<ul><li>The attack uses a unique animation.</li>\n<li>The bonus damage benefits from <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> It <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">applies life steal</a></span> specifically.</li></ul></li></ul></li>\n<li>When applied by either of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Wind Becomes Lightning" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Wind Becomes Lightning\'s"><img alt="Wind Becomes Lightning\'s" src="/wiki/images/Xin_Zhao_Wind_Becomes_Lightning.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Wind_Becomes_Lightning" title="Xin Zhao/LoL">Wind Becomes Lightning\'s</a></span></span> strikes:\n<ul><li>Triggers against the closest target struck by the strike (equals first target to receive spell effects).</li>\n<li>Does not benefit from <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span>, including not healing from <i>Wind Becomes Lightning\'s</i> 33% conversion for this bonus damage.</li>\n<li>Since <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> is \'single target\', <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drain"><a href="/wiki/Vamp" title="Vamp"><img alt="Ravenous Hunter rune.png" src="/wiki/images/Ravenous_Hunter_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Vamp" title="Vamp">Vamp</a></span> will heal from 100% of the bonus damage.</li></ul></li></ul>',
  },
  'Three Talon Strike': {
    name: 'Three Talon Strike',
    display_name: 'Three Talon Strike',
    champion: 'Xin Zhao',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'XinZhaoQ.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '30',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">7 / 6.<small>5</small> / 6 / 5.<small>5</small> / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao"><img alt="Xin Zhao" src="/wiki/images/Xin_Zhao_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao/LoL">Xin Zhao</a></span></span> empowers his next three basic attacks within a few seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> his other ability cooldowns.',
      'The third attack will also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Three Talon Strike.png',
        description:
          "Active: Xin Zhao empowers his next three basic attacks on-attack to each have an  uncancellable windup, deal bonus physical damage and reduce his other abilities'  current cooldowns by 1 second. Each attack refreshes the duration.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xin Zhao</b> empowers his next three basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> to each have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and reduce his other <a href="/wiki/Champion_ability" title="Champion ability">abilities\'</a> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> by 1 second. Each attack refreshes the duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: " Xin Zhao empowers his next three basic attacks on-attack to each have an  uncancellable windup, deal bonus physical damage and reduce his other abilities'  current cooldowns by 1 second",
            damagetype: 'Physical',
            values: 1,
            units: 'bonus_ad',
            unitsText:
              "Zhao empowers his next three basic attacks on-attack to each have an  uncancellable windup, deal bonus physical damage and reduce his other abilities'  current cooldowns by 1 second",
            pre: "Xin Zhao empowers his next three basic attacks on-attack to each have an  uncancellable windup, deal bonus physical damage and reduce his other abilities'  current cooldowns by 1 second",
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '16 / 25 / 34 / 43 / 52 (+ 40% bonus AD)',
            valuesHTML:
              '16 / 25 / 34 / 43 / 52 <span style="color:orange; white-space:normal">(+&nbsp;40% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '16 / 25 / 34 / 43 / 52 (+ 40% bonus AD)',
            damagetype: 'Physical',
            values: [16, 25, 34, 43, 52],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '16 / 25 / 34 / 43 / 52',
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
        description: 'The third attack  knocks up the target for 0.75 seconds.',
        descriptionHTML:
          'The third attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> the target for 0.<small>75</small> seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Three Talon Strike's bonus damage is affected by  critical strike modifiers.",
        descriptionHTML:
          '<i>Three Talon Strike\'s</i> <b>bonus</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Three Talon Strike  resets Xin Zhao's basic attack timer.",
        descriptionHTML:
          '<i>Three Talon Strike <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Xin Zhao\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Basic',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block the third attack.\n<ul><li>The enhanced attacks present input buffering during their wind-up animation (<b>Xin Zhao</b> cannot be issued any commands until after it ends).</li></ul>',
  },
  'Wind Becomes Lightning': {
    name: 'Wind Becomes Lightning',
    display_name: 'Wind Becomes Lightning',
    champion: 'Xin Zhao',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'XinZhaoW.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1000 /  940',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slash semi-circle radius">275</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slash and thrust extra check radius">125</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Thrust missile width">80</span>',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 160º',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Thrust missile speed">6250</span>',
    cast_time: '0.<small>5</small>',
    cost: '60 / 55 / 50 / 45 / 40',
    costtype: 'Mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao"><img alt="Xin Zhao" src="/wiki/images/Xin_Zhao_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao/LoL">Xin Zhao</a></span></span> slashes in an arc, then thrusts his spear in a line in the target direction. Each strike deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and heals <b>Xin Zhao</b> based on his <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.',
      'The thrust deals increased damage based on <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit, enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> and marked <img alt="Xin Zhao Challenged Mark.png" src="/wiki/images/Xin_Zhao_Challenged_Mark.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"><i>Challenged</i> for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Wind Becomes Lightning.png',
        description:
          'Active: Xin Zhao slashes in an arc and, after the cast time, thrusts his spear in a line in the target direction. Each strike deals physical damage to enemies hit, modified to 50% − 100% (based on level) against  minions.\nThe thrust deals increased damage, further by 0% − 33.3% (based on critical strike chance), and  slows enemies hit by 50% for 1.5 seconds. Enemy  champions and  monsters hit are also marked Challenged for 3 seconds, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xin Zhao</b> slashes in an arc and, after the cast time, thrusts his spear in a line in the target direction. Each strike deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, modified to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="100;" data-bot_values="50;53.33;56.67;60;63.33;66.67;70;73.33;76.67;80;83.33;86.67;90;93.33;96.67;100" data-top_values="" data-bot_key="%">50% − 100% (based on level)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.<br><br>\n<p>The thrust deals increased damage, further by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.33 * critical strike chance" data-bot_values="0;3.33;6.66;9.99;13.32;16.65;19.98;23.31;26.64;29.97;33.3" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 33.<small>3</small>% (based on critical strike chance)</span></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit by 50% for 1.<small>5</small> seconds. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit are also marked <img alt="Xin Zhao Challenged Mark.png" src="/wiki/images/Xin_Zhao_Challenged_Mark.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"><i>Challenged</i> for 3 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Each strike deals physical damage to enemies hit, modified to 50% − 100% (based on level) against  minions.\nThe thrust deals increased damage, further by 0% − 33.3% (based on critical strike chance), and  slows enemies hit by 50% for 1.5 seconds',
            values: 5,
            valuesIsPercent: true,
            basedOn: 'critical strike chance',
            user: 'none',
            units: '',
            unitsText:
              'against  minions.\nThe thrust deals increased damage, further by 0% − 33.3%',
            pre: 'Each strike deals physical damage to enemies hit, modified to 50% − 100%',
            post: 'against  minions.\nThe thrust deals increased damage, further by 0% − 33.3%',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Enemy  champions and  monsters hit are also marked Challenged for 3 seconds, during which they are  revealed.',
            values: 3,
            units: 'kindredMarks',
            unitsText:
              'champions and  monsters hit are also marked Challenged for 3 seconds, during which they are  revealed.',
            pre: 'Enemy  champions and  monsters hit are also marked Challenged for 3 seconds, during which they are  revealed.',
          },
        ],
        leveling: [
          {
            name: 'Slash Physical Damage:',
            values: '30 / 40 / 50 / 60 / 70 (+ 30% AD)',
            valuesHTML:
              '30 / 40 / 50 / 60 / 70 <span style="color:orange; white-space:normal">(+&nbsp;30% AD)</span>',
          },
          {
            name: 'Thrust Physical Damage:',
            values: '50 / 85 / 120 / 155 / 190 (+ 90% AD) (+ 65% AP)',
            valuesHTML:
              '50 / 85 / 120 / 155 / 190 <span style="color:orange; white-space:normal">(+&nbsp;90% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;65% AP)</span>',
          },
          {
            name: 'Total Physical Damage:',
            values: '80 / 125 / 170 / 215 / 260 (+ 120% AD) (+ 65% AP)',
            valuesHTML:
              '80 / 125 / 170 / 215 / 260 <span style="color:orange; white-space:normal">(+&nbsp;120% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;65% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Slash Physical Damage:',
            raw: '30 / 40 / 50 / 60 / 70 (+ 30% AD)',
            damagetype: 'Physical',
            values: [30, 40, 50, 60, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 30% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Thrust Physical Damage:',
            raw: '50 / 85 / 120 / 155 / 190 (+ 90% AD) (+ 65% AP)',
            damagetype: 'Physical',
            values: [50, 85, 120, 155, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 85 / 120 / 155 / 190',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 90% AD',
              },
              {
                values: 65,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 120% AD) (+ 65% AP)',
            damagetype: 'Physical',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 120% AD',
              },
              {
                values: 65,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "The durations of  Three Talon Strike,  Audacious Charge's bonus attack speed, and  Crescent Guard are delayed relative to Wind Becomes Lightning's cast time after 0.2 seconds of its activation.",
        descriptionHTML:
          'The durations of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Three Talon Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Three_Talon_Strike" title="Three Talon Strike"><img alt="Three Talon Strike" src="/wiki/images/Xin_Zhao_Three_Talon_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Three_Talon_Strike" title="Xin Zhao/LoL">Three Talon Strike</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Audacious Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Audacious Charge\'s"><img alt="Audacious Charge\'s" src="/wiki/images/Xin_Zhao_Audacious_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Xin Zhao/LoL">Audacious Charge\'s</a></span></span></i> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span>, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Crescent Guard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Crescent_Guard" title="Crescent Guard"><img alt="Crescent Guard" src="/wiki/images/Xin_Zhao_Crescent_Guard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Crescent_Guard" title="Xin Zhao/LoL">Crescent Guard</a></span></span></i> are delayed relative to <i>Wind Becomes Lightning\'s</i> cast time after 0.<small>2</small> seconds of its activation.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Wind Becomes Lightning's damage  heals Xin Zhao for 33.3% of his  life steal.",
        descriptionHTML:
          '<i>Wind Becomes Lightning\'s</i> damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Xin Zhao</b> for 33.<small><span style="text-decoration: overline;">3</span></small>% of his <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Wind Becomes Lightning's damage  heals Xin Zhao for 33.3% of his  life steal.",
            healType: 'LifeSteal',
            values: 3,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText:
              "of his  life steal.Becomes Lightning's damage  heals Xin Zhao for 33.3",
            pre: "Wind Becomes Lightning's damage  heals Xin Zhao for 33.3% of his  life steal.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: 'Special',
    projectile: 'False',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block only a single instance of damage - either the thrust or the slash.\n<ul><li>The first strike will occur immediately and the second will occur after the cast time completes.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li>The first strike will occur from wherever <b>Xin Zhao</b> is at the start of the cast time.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>The second strike will occur from wherever <b>Xin Zhao</b> is at the end of the cast time.</li></ul></li>\n<li>The first strike\'s hitbox includes a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 275 radius 160° cone in front of <b>Xin Zhao</b> and an additional <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 125 radius around him.</li>\n<li>The second strike\'s hitbox includes the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 125 radius around <b>Xin Zhao</b>, a missile with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1000 range and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 80 total width, and a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> -60 radius area check upon the end of the missile.\n<ul><li>The 125 radius check does not hit <a href="/wiki/Champion_summoned_units" title="Champion summoned units">champion summoned units</a>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li>\n<li>Because <i>Wind Becomes Lightning</i> uses an older type of \'healing based on life steal\' and not <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">applies life steal</a></span></i>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spirit Visage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spirit_Visage" title="Spirit Visage"><img alt="Spirit Visage" src="/wiki/images/Spirit_Visage_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spirit_Visage" title="Spirit Visage">Spirit Visage</a></span></span> will amplify the life gain twice (+25% life steal and +25% healing), for a total of +56.<small>25</small>%.</li></ul>',
    yvideo: 'Xin Zhao - W',
  },
  'Audacious Charge': {
    name: 'Audacious Charge',
    display_name: 'Audacious Charge',
    champion: 'Xin Zhao',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'XinZhaoE.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '650 / 1100',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">250</span>',
    speed: '2500',
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown: '11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao"><img alt="Xin Zhao" src="/wiki/images/Xin_Zhao_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao/LoL">Xin Zhao</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them. He then gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
      '<i>Audacious Charge\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> is increased against a <img alt="Xin Zhao Challenged Mark.png" src="/wiki/images/Xin_Zhao_Challenged_Mark.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"><i>Challenged</i> target.',
    ],
    description: [
      {
        icon: '/wiki/images/Audacious Charge.png',
        description:
          "Active: Xin Zhao  dashes to the target enemy's location, dealing magic damage to enemies near them and  slowing them by 30% for 0.5 seconds. Audacious Charge's range is increased against Challenged targets.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xin Zhao</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies near them and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 30% for 0.<small>5</small> seconds. <i>Audacious Charge\'s</i> range is increased against <span style="white-space:nowrap"><img alt="Xin Zhao Challenged Mark.png" src="/wiki/images/Xin_Zhao_Challenged_Mark.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"><i>Challenged</i></span> targets.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: " Xin Zhao  dashes to the target enemy's location, dealing magic damage to enemies near them and  slowing them by 30% for 0.5 seconds",
            damagetype: 'Magic',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "for 0.5 secondsZhao  dashes to the target enemy's location, dealing magic damage to enemies near them and  slowing them by 30",
            pre: "Xin Zhao  dashes to the target enemy's location, dealing magic damage to enemies near them and  slowing them by 30% for 0.5 seconds",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 75 / 100 / 125 / 150 (+ 60% AP)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 60% AP)',
            damagetype: 'Magic',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
        description: 'Xin Zhao then gains  bonus attack speed for 5 seconds.',
        descriptionHTML:
          '<b>Xin Zhao</b> then gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Xin Zhao then gains  bonus attack speed for 5 seconds.',
            increasedStat: 'bonus_ad',
            values: 5,
            units: '',
            unitsText: 'Zhao then gains  bonus attack speed for 5 seconds.',
            pre: 'Xin Zhao then gains  bonus attack speed for 5 seconds.',
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
        description:
          'Three Talon Strike and  Crescent Guard can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Three Talon Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Three_Talon_Strike" title="Three Talon Strike"><img alt="Three Talon Strike" src="/wiki/images/Xin_Zhao_Three_Talon_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Three_Talon_Strike" title="Xin Zhao/LoL">Three Talon Strike</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Crescent Guard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Crescent_Guard" title="Crescent Guard"><img alt="Crescent Guard" src="/wiki/images/Xin_Zhao_Crescent_Guard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Crescent_Guard" title="Xin Zhao/LoL">Crescent Guard</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    callforhelp: 'True',
    notes:
      "* The primary target cannot dodge <i>Audacious Charge's</i> effects.\n<ul><li><ul><li>The target will always emit the area of effect from their position.</li></ul></li>\n<li>If no unit is targeted directly, <i>Audacious Charge</i> will search for possible targets in a 200 radius around the target location.</li></ul>",
  },
  'Crescent Guard': {
    name: 'Crescent Guard',
    display_name: 'Crescent Guard',
    champion: 'Xin Zhao',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'XinZhaoR.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knockback radius">500</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Immunity minimum radius">450</span>',
    cast_time: '0.<small>35</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120 / 115 / 110 / 105 / 100</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive - Challenge:</b></span> The last enemy champion hit by <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao\'s"><img alt="Xin Zhao\'s" src="/wiki/images/Xin_Zhao_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL" title="Xin Zhao/LoL">Xin Zhao\'s</a></span></span> basic attacks or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Audacious Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Audacious Charge"><img alt="Audacious Charge" src="/wiki/images/Xin_Zhao_Audacious_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Xin Zhao/LoL">Audacious Charge</a></span></span></i> is marked <img alt="Xin Zhao Challenged Mark.png" src="/wiki/images/Xin_Zhao_Challenged_Mark.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"><i>Challenged</i> for a short time.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Xin Zhao</b> sweeps his spear to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies based on <span style="color: #1F995C; white-space:normal">their <b>current</b> health</span>, this will also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> those not marked <i>Challenged</i>.',
      'For the next few seconds, <b>Xin Zhao</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> far away from of him.',
    ],
    description: [
      {
        icon: '/wiki/images/Xin Zhao Challenged Mark.png',
        description:
          "Passive - Challenge: The last enemy champion hit by Xin Zhao's basic attacks or  Audacious Charge is marked Challenged for 3 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive - Challenge:</b></span> The last enemy champion hit by <b>Xin Zhao\'s</b> basic attacks or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xin Zhao" data-ability="Audacious Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Audacious Charge"><img alt="Audacious Charge" src="/wiki/images/Xin_Zhao_Audacious_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xin_Zhao/LoL#Audacious_Charge" title="Xin Zhao/LoL">Audacious Charge</a></span></span></i> is marked <i>Challenged</i> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Passive - Challenge:',
            raw: " The last enemy champion hit by Xin Zhao's basic attacks or  Audacious Charge is marked Challenged for 3 seconds.",
            values: 3,
            units: 'kindredMarks',
            unitsText:
              "last enemy champion hit by Xin Zhao's basic attacks or  Audacious Charge is marked Challenged for 3 seconds.",
            pre: "The last enemy champion hit by Xin Zhao's basic attacks or  Audacious Charge is marked Challenged for 3 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Crescent Guard.png',
        description:
          'Active: Xin Zhao sweeps his spear around him, dealing physical damage to nearby enemies, capped at 600 against  monsters, and  knocking back all non-Challenged targets hit up-to 700 units over 0.75 seconds, as well as  stunning them for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xin Zhao</b> sweeps his spear around him, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, capped at 600 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> all non-<i>Challenged</i> targets hit up-to 700 units over 0.<small>75</small> seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Xin Zhao sweeps his spear around him, dealing physical damage to nearby enemies, capped at 600 against  monsters, and  knocking back all non-Challenged targets hit up-to 700 units over 0.75 seconds, as well as  stunning them for the same duration.',
            increasedStat: 'total_ap',
            values: 6,
            units: '',
            unitsText:
              'Zhao sweeps his spear around him, dealing physical damage to nearby enemies, capped at 600 against  monsters, and  knocking back all non-Challenged targets hit up-to 700 units over 0.75 seconds, as well as  stunning them for the same duration.',
            pre: 'Xin Zhao sweeps his spear around him, dealing physical damage to nearby enemies, capped at 600 against  monsters, and  knocking back all non-Challenged targets hit up-to 700 units over 0.75 seconds, as well as  stunning them for the same duration.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              "75 / 125 / 175 / 225 / 275 (+ 100% bonus AD) (+ 110% AP) (+ 15% of target's current health)",
            valuesHTML:
              '75 / 125 / 175 / 225 / 275 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;110% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;15% of target\'s <b>current</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "75 / 125 / 175 / 225 / 275 (+ 100% bonus AD) (+ 110% AP) (+ 15% of target's current health)",
            healType: 'PhysicalVamp',
            values: [75, 125, 175, 225, 275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 125 / 175 / 225 / 275',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 110,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 110% AP',
              },
              {
                values: 15,
                valuesIsPercent: true,
                user: 'target',
                units: 'current_hp',
                unitsText: "of target's current health",
                pre: "+ 15% of target's current health",
              },
            ],
          },
        ],
      },
      {
        description:
          'For the next 4 seconds, Xin Zhao is  invulnerable against enemy  champions far away from him.',
        descriptionHTML:
          'For the next 4 seconds, <b>Xin Zhao</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> far away from him.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'For the next 4 seconds, Xin Zhao is  invulnerable against enemy  champions far away from him.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'the next 4 seconds, Xin Zhao is  invulnerable against enemy  champions far away from him.',
            pre: 'For the next 4 seconds, Xin Zhao is  invulnerable against enemy  champions far away from him.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">Pets</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">traps</a></span>, <a href="/wiki/Ground-targeted" class="mw-redirect" title="Ground-targeted">ground</a> <a href="/wiki/Area_of_effect" title="Area of effect">AoEs</a>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Damage over time"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">DoTs</a></span>, and delayed-damage abilities (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Death Mark" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Death_Mark" title="Death Mark"><img alt="Death Mark" src="/wiki/images/Zed_Death_Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Death_Mark" title="Zed/LoL">Death Mark</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Explosive Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Explosive Charge"><img alt="Explosive Charge" src="/wiki/images/Tristana_Explosive_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Tristana/LoL">Explosive Charge</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Hemoplague" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Hemoplague" title="Hemoplague"><img alt="Hemoplague" src="/wiki/images/Vladimir_Hemoplague.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Hemoplague" title="Vladimir/LoL">Hemoplague</a></span></span>) will not damage <b>Xin Zhao</b> if the enemy champion source is outside the circle when the damage applies.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will also resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li></ul>',
    yvideo: 'Xin Zhao - R',
  },
} satisfies { [skillName in string]: SkillData };
