import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Pantheon';

export default {
  'Mortal Will': {
    name: 'Mortal Will',
    display_name: 'Mortal Will',
    champion: 'Pantheon',
    skill: 'I',
    image: {
      full: 'Pantheon_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL" title="Pantheon"><img alt="Pantheon" src="/wiki/images/Pantheon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL" title="Pantheon/LoL">Pantheon</a></span></span> generates stacks of <i>Mortal Will</i> whenever he lands a basic attacks or casts an ability. At max stacks, his next basic ability consumes them to become empowered with an additional effect.',
    ],
    description: [
      {
        icon: '/wiki/images/Mortal_Will.png',
        description:
          "Innate: Pantheon generates a stack of Mortal Will whenever he lands a basic attack  on-hit or casts an ability, stacking up to 5 times. At 5 stacks, Pantheon's next basic ability consumes the stacks to become empowered with an additional effect.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Pantheon</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Mortal Will</i> whenever he lands a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> or casts an <a href="/wiki/Ability" class="mw-redirect" title="Ability">ability</a>, stacking up to 5 times. At 5 stacks, <b>Pantheon\'s</b> next basic ability consumes the stacks to become empowered with an additional effect.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: 'Pantheon generates a stack of Mortal Will whenever he lands a basic attack  on-hit or casts an ability, stacking up to 5 times',
            min: 0,
            max: 5,
            description:
              'Pantheon generates a stack of Mortal Will whenever he lands a basic attack  on-hit or casts an ability, stacking up to 5 times',
            values: 5,
            units: 'genericStacks',
            unitsText:
              'generates a stack of Mortal Will whenever he lands a basic attack  on-hit or casts an ability, stacking up to 5 times',
            pre: 'Pantheon generates a stack of Mortal Will whenever he lands a basic attack  on-hit or casts an ability, stacking up to 5 times',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: "At 5 stacks, Pantheon's next basic ability consumes the stacks to become empowered with an additional effect.",
            min: 0,
            max: 10,
            description:
              "At 5 stacks, Pantheon's next basic ability consumes the stacks to become empowered with an additional effect.",
            values: 5,
            units: 'genericStacks',
            unitsText:
              "5 stacks, Pantheon's next basic ability consumes the stacks to become empowered with an additional effect.",
            pre: "At 5 stacks, Pantheon's next basic ability consumes the stacks to become empowered with an additional effect.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Pantheon gains maximum stacks of Mortal Will upon starting the game, completing a  Recall channel, and respawning.',
        descriptionHTML:
          '<b>Pantheon</b> gains maximum stacks of <i>Mortal Will</i> upon starting the game, completing a <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> channel, and <a href="/wiki/Death" title="Death">respawning</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional details.',
  },
  'Comet Spear': {
    name: 'Comet Spear',
    display_name: 'Comet Spear',
    champion: 'Pantheon',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'PantheonQ.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '-40 - 560 /  1200',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Thrust width">120</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Spear missile width">110</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Spear missile speed">2700</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Release">0.<small>25</small></span>',
    cost: '30',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">13 / 11.<small>75</small> / 10.<small>5</small> / 9.<small>25</small> / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL" title="Pantheon"><img alt="Pantheon" src="/wiki/images/Pantheon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL" title="Pantheon/LoL">Pantheon</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> up to a few seconds, increasing the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> of his spear. After a brief period, it becomes empowered with a new effect.',
      '<i>Comet Spear</i> can be recast within the duration, and will cancel automatically afterwards, refunding a portion of the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Pantheon</b> thrusts his spear in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased against enemies at <span style="color: #1F995C; white-space:normal">low health</span>. This also <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduces</span> the cooldown.<br><br>\n<p><span class="template_sbc"><b>Empowered Recast:</b></span> <b>Pantheon</b> hurls his spear in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased against enemies at <span style="color: #1F995C; white-space:normal">low health</span> and reduced against enemies beyond the first.\n</p>',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span> Bonus:</b></span> The spear gains <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Comet_Spear.png',
        description:
          "Active: Pantheon  charges while being  slowed by 10% for up to 4 seconds to increase Comet Spear's  range after 0.35 seconds of channeling. Comet Spear can be recast within the duration.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 10% for up to 4 seconds to increase <i>Comet Spear\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> after 0.<small>35</small> seconds of channeling. <i>Comet Spear</i> can be recast within the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: "Pantheon  charges while being  slowed by 10% for up to 4 seconds to increase Comet Spear's  range after 0.35 seconds of channeling",
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "for up to 4 seconds to increase Comet Spear's  range after 0.35 seconds of channeling charges while being  slowed by 10",
            pre: "Pantheon  charges while being  slowed by 10% for up to 4 seconds to increase Comet Spear's  range after 0.35 seconds of channeling",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Pantheon hurls his spear in the target direction that deals physical damage to enemies hit,  increased against enemies below 20% of their maximum health but reduced by 50% against enemies beyond the first. Total damage is increased to 105% against  monsters and reduced to 70% against  minions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Pantheon</b> hurls his spear in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased</span> against enemies <span style="color: #1F995C; white-space:normal">below 20% of their <b>maximum</b> health</span> but reduced by 50% against enemies beyond the first. Total damage is increased to 105% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and reduced to 70% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Recast:',
            raw: 'Pantheon hurls his spear in the target direction that deals physical damage to enemies hit,  increased against enemies below 20% of their maximum health but reduced by 50% against enemies beyond the first',
            healType: 'PhysicalVamp',
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText:
              'of their maximum health but reduced by 50hurls his spear in the target direction that deals physical damage to enemies hit,  increased against enemies below 20',
            pre: 'Pantheon hurls his spear in the target direction that deals physical damage to enemies hit,  increased against enemies below 20% of their maximum health but reduced by 50% against enemies beyond the first',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Total damage is increased to 105% against  monsters and reduced to 70% against  minions.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against  monsters and reduced to 70damage is increased to 105',
            pre: 'Total damage is increased to 105% against  monsters and reduced to 70% against  minions.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '70 / 100 / 130 / 160 / 190 (+ 115% bonus AD)',
            valuesHTML:
              '70 / 100 / 130 / 160 / 190 <span style="color:orange; white-space:normal">(+&nbsp;115% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Secondary Physical Damage:',
            values: '35 / 50 / 65 / 80 / 95 (+ 57.5% bonus AD)',
            valuesHTML:
              '35 / 50 / 65 / 80 / 95 <span style="color:orange; white-space:normal">(+&nbsp;57.<small>5</small>% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 115% bonus AD)',
            damagetype: 'Physical',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
            children: [
              {
                values: 115,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 115% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Secondary Physical Damage:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 57.5% bonus AD)',
            damagetype: 'Physical',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 57.5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 57.5% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Releasing the ability within 0.35 seconds causes Pantheon to instead thrust his spear in the target direction, dealing the same physical damage to enemies hit and refunding 60% of Comet Spear's  cooldown. The thrust's damage is not reduced against enemies beyond the first.",
        descriptionHTML:
          'Releasing the ability within 0.<small>35</small> seconds causes <b>Pantheon</b> to instead thrust his spear in the target direction, dealing the same <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and refunding 60% of <i>Comet Spear\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>. The thrust\'s damage is not reduced against enemies beyond the first.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the charge is  interrupted or completes without reactivation, Comet Spear is cancelled and the ability is put on full cooldown but refunds  half the mana cost.',
        descriptionHTML:
          'If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> or completes without reactivation, <i>Comet Spear</i> is cancelled and the ability is put on full cooldown but refunds <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">half the mana cost</span></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Comet_Spear_2.png',
        description:
          'Mortal Will: Comet Spear gains 20 − 240 (based on level) (+ 115% bonus AD) bonus physical damage, affected by the previous damage reductions. Consumes the stacks upon recasting.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span>:</b></span> <i>Comet Spear</i> gains <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="240;" data-bot_values="20;32.94;45.88;58.82;71.76;84.71;97.65;110.59;123.53;136.47;149.41;162.35;175.29;188.24;201.18;214.12;227.06;240" data-top_values="">20 − 240 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;115% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, affected by the previous damage reductions. Consumes the stacks upon recasting.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Mortal Will:',
            raw: 'Comet Spear gains 20 − 240 (based on level) (+ 115% bonus AD) bonus physical damage, affected by the previous damage reductions',
            values: [
              20, 32.94, 45.88, 58.82, 71.76, 84.71, 97.65, 110.59, 123.53,
              136.47, 149.41, 162.35, 175.29, 188.24, 201.18, 214.12, 227.06,
              240,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus physical damage, affected by the previous damage reductions',
            pre: 'Comet Spear gains 20 − 240',
            post: 'bonus physical damage, affected by the previous damage reductions',
            children: [
              {
                values: 115,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 115% bonus AD',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a>',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'special',
    notes:
      '* Only the ranged version of <i>Comet Spear</i> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">intercepted</a></span>.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>The following table refers for interactions while <b>Pantheon</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Charge channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span>  <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Everfrost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Everfrost" title="Everfrost"><img alt="Everfrost" src="/wiki/images/Everfrost_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Everfrost" title="Everfrost">Everfrost</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ironspike Whip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip"><img alt="Ironspike Whip" src="/wiki/images/Ironspike_Whip_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip">Ironspike Whip</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Goredrinker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Goredrinker" title="Goredrinker"><img alt="Goredrinker" src="/wiki/images/Goredrinker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Goredrinker" title="Goredrinker">Goredrinker</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> (Recasts)\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<ul><li>Casting an item active that interrupts will cause <i>Comet Spear</i> to recast automatically and the active to buffer to cast afterwards.</li></ul>',
  },
  'Shield Vault': {
    name: 'Shield Vault',
    display_name: 'Shield Vault',
    champion: 'Pantheon',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'PantheonW.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '600',
    cast_time: 'none',
    cost: '55',
    costtype: 'Mana',
    cooldown: '13 / 12 / 11 / 10 / 9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL" title="Pantheon"><img alt="Pantheon" src="/wiki/images/Pantheon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL" title="Pantheon/LoL">Pantheon</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span> Bonus:</b></span> <b>Pantheon\'s</b> next basic attack within a few seconds will strike 3 times to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Shield_Vault.png',
        description:
          "Active: Pantheon  leaps to the front of the target enemy's location. If the target is within 800 units upon arrival, he deals physical damage and  stuns them for 1 second.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the front of the target enemy\'s location. If the target is within 800 units upon arrival, he deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If the target is within 800 units upon arrival, he deals physical damage and  stuns them for 1 second.',
            damagetype: 'Physical',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'the target is within 800 units upon arrival, he deals physical damage and  stuns them for 1 second.',
            pre: 'If the target is within 800 units upon arrival, he deals physical damage and  stuns them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 100 / 140 / 180 / 220 (+ 100% AP)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 100% AP)',
            damagetype: 'Physical',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
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
        icon: '/wiki/images/Shield_Vault_2.png',
        description:
          'Mortal Will: Pantheon empowers his next basic attack within 4 seconds to have a cast time and strike the target 3 times over a brief period, dealing 40% − 55% (based on level) AD physical damage per hit, up to 120% − 165% (based on level) AD. Each hit is affected by  critical strike modifiers and applies  on-hit effects at 100% effectiveness.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span>:</b></span> <b>Pantheon</b> empowers his next basic attack within 4 seconds to have a cast time and strike the target 3 times over a brief period, dealing <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="55;" data-bot_values="40;40.88;41.76;42.65;43.53;44.41;45.29;46.18;47.06;47.94;48.82;49.71;50.59;51.47;52.35;53.24;54.12;55" data-top_values="" data-bot_key="%">40% − 55% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> per hit, up to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="120;" data-finish="165;" data-bot_values="120;122.65;125.29;127.94;130.59;133.24;135.88;138.53;141.18;143.82;146.47;149.12;151.76;154.41;157.06;159.71;162.35;165" data-top_values="" data-bot_key="%">120% − 165% (based on level)</span> AD</span>. Each hit is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Mortal Will:',
            raw: 'Pantheon empowers his next basic attack within 4 seconds to have a cast time and strike the target 3 times over a brief period, dealing 40% − 55% (based on level) AD physical damage per hit, up to 120% − 165% (based on level) AD',
            damagetype: 'Physical',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ad',
            unitsText: 'AD physical damage per hit, up to 120% − 165%',
            pre: 'Pantheon empowers his next basic attack within 4 seconds to have a cast time and strike the target 3 times over a brief period, dealing 40% − 55%',
            post: 'AD physical damage per hit, up to 120% − 165%',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Each hit is affected by  critical strike modifiers and applies  on-hit effects at 100% effectiveness.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness.hit is affected by  critical strike modifiers and applies  on-hit effects at 100',
            pre: 'Each hit is affected by  critical strike modifiers and applies  on-hit effects at 100% effectiveness.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Empowered Shield Vault  resets Pantheon's basic attack timer. Pantheon will attempt to basic attack the target at the end of the leap.",
        descriptionHTML:
          '<i>Empowered Shield Vault <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Pantheon\'s</b> basic attack timer. <b>Pantheon</b> will attempt to basic attack the target at the end of the leap.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'special',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> on the initial vault. Deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span> on the additional attacks from the empowered ability.\n<ul><li>Despite the multi-hit attack only having a hidden 0.<small>375</small>-second cast time, <b>Pantheon</b> will remain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> until the last strike has been dealt.\n<ul><li>The empowered attack\'s total time is affected by <b>Pantheon\'s</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Attack_speed" title="Attack speed">attack speed</a></span>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> The attack\'s total time is the cast time plus <b>Pantheon\'s</b> attack windup time.</li></ul></li>\n<li>The 3 strikes that occurs after <i>Empowered Shield Vault</i> each apply a stack of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span>, even if the attacks are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, or missed while <b>Pantheon</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  'Aegis Assault': {
    name: 'Aegis Assault',
    display_name: 'Aegis Assault',
    champion: 'Pantheon',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'PantheonE.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cone radius, truncated in the back so it cannot hit behind Pantheon">525</span>',
    angle: '60°',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Active">None</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast">0.<small>25</small></span>',
    cost: '80',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">22 / 20.<small>5</small> / 19 / 17.<small>5</small> / 16</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL" title="Pantheon"><img alt="Pantheon" src="/wiki/images/Pantheon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL" title="Pantheon/LoL">Pantheon</a></span></span> braces his shield in the target direction and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a brief period, during which he becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> against non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> damage from enemies in that direction. He will also strike in a cone that continually deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
      '<i>Aegis Assault</i> can be recast within this time, and does so automatically after the duration. The channel cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Pantheon</b> slams his shield in a cone, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span> Bonus:</b></span> <b>Pantheon</b> briefly gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> after recasting.',
    ],
    description: [
      {
        icon: '/wiki/images/Aegis_Assault.png',
        description:
          'Active: Pantheon braces his shield in the target direction and  channels for 1.5 seconds, during which he becomes  invulnerable against non- turret damage dealt by enemies from the target direction. He also continually performs strikes in a cone in front of him, dealing 8.3% AD physical damage every 0.125 seconds to enemies hit, reduced by 50% against  minions and up to 100% AD total physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Pantheon</b> braces his shield in the target direction and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>5</small> seconds, during which he becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> against non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> damage dealt by enemies from the target direction. He also continually performs strikes in a cone in front of him, dealing <span style="color:orange; white-space:normal">8.<small><span style="text-decoration: overline;">3</span></small>% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> every 0.<small>125</small> seconds to enemies hit, reduced by 50% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and up to <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal"><b>total</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Pantheon braces his shield in the target direction and  channels for 1.5 seconds, during which he becomes  invulnerable against non- turret damage dealt by enemies from the target direction',
            damagetype: 'None',
            shieldType: 'OutgoingShields',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'braces his shield in the target direction and  channels for 1.5 seconds, during which he becomes  invulnerable against non- turret damage dealt by enemies from the target direction',
            pre: 'Pantheon braces his shield in the target direction and  channels for 1.5 seconds, during which he becomes  invulnerable against non- turret damage dealt by enemies from the target direction',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'He also continually performs strikes in a cone in front of him, dealing 8.3% AD physical damage every 0.125 seconds to enemies hit, reduced by 50% against  minions and up to 100% AD total physical damage.',
            increasedStat: 'total_ad',
            values: 8,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'AD physical damage every 0.125 seconds to enemies hit, reduced by 50also continually performs strikes in a cone in front of him, dealing 8.3',
            pre: 'He also continually performs strikes in a cone in front of him, dealing 8.3% AD physical damage every 0.125 seconds to enemies hit, reduced by 50% against  minions and up to 100% AD total physical damage.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Aegis Assault can be recast after 0.3 seconds, and does so automatically after the duration. Aegis Assault's channel cannot be  interrupted by  crowd control.",
        descriptionHTML:
          '<i>Aegis Assault</i> can be recast after 0.<small>3</small> seconds, and does so automatically after the duration. <i>Aegis Assault\'s</i> channel cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Pantheon slams with his shield in a cone in front of him, dealing physical damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Pantheon</b> slams with his shield in a cone in front of him, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '55 / 105 / 155 / 205 / 255 (+ 150% bonus AD)',
            valuesHTML:
              '55 / 105 / 155 / 205 / 255 <span style="color:orange; white-space:normal">(+&nbsp;150% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 105 / 155 / 205 / 255 (+ 150% bonus AD)',
            damagetype: 'Physical',
            values: [55, 105, 155, 205, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 105 / 155 / 205 / 255',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 150% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Aegis_Assault_2.png',
        description:
          'Mortal Will: After recasting, Pantheon gains  60% bonus movement speed for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span>:</b></span> After recasting, <b>Pantheon</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">60% <b>bonus</b> movement speed</span></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Mortal Will:',
            raw: 'After recasting, Pantheon gains  60% bonus movement speed for 1.5 seconds.',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed for 1.5 seconds.recasting, Pantheon gains  60',
            pre: 'After recasting, Pantheon gains  60% bonus movement speed for 1.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'false',
    notes:
      '*The initial cast count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>Detonating the ability manually is not.</li></ul></li>\n<li><b>Pantheon</b> retains his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerability</a></span> during the recast\'s cast time.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><b>Pantheon</b> will slam from wherever he was at the start of the recast\'s\' cast time.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block the slam\'s damage.</li>\n<li>The following table refers for interactions while <b>Pantheon</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
  'Grand Starfall': {
    name: 'Grand Starfall',
    display_name: 'Grand Starfall',
    champion: 'Pantheon',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'PantheonR.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '5500 / 1350',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outer width, reduced damage">450</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner width, maximum damage">125</span>',
    inner_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial spear impact radius">225</span>',
    cast_time: '0.<small>1</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">180 / 172.<small>5</small> / 165 / 157.<small>5</small> / 150</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL" title="Pantheon"><img alt="Pantheon" src="/wiki/images/Pantheon_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL" title="Pantheon/LoL">Pantheon</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor penetration</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span>, then leaps high into the air. After a short time, he throws a spear at the target location that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them.',
      '<b>Pantheon</b> then crashes down and creates a shockwave alongside himself that travels toward the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      '<b>Pantheon</b> gains full stacks of <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span></b></span> upon landing.',
    ],
    description: [
      {
        description: 'Passive: Pantheon gains  armor penetration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Pantheon</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor penetration</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Armor Penetration:',
            values: '10 / 15 / 20 / 25 / 30%',
            valuesHTML: '10 / 15 / 20 / 25 / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Armor Penetration:',
            raw: '10 / 15 / 20 / 25 / 30%',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
          },
        ],
      },
      {
        icon: '/wiki/images/Grand_Starfall.png',
        description:
          'Active: Pantheon  channels for 2 seconds, then leaps high into the air,  vanishing and becoming  immune to crowd control until he reappears. While in the air, Pantheon  channels again for 2.2 seconds and grants  sight around the target location 0.5 seconds into the channel.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 2 seconds, then leaps high into the air, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishing</a></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span> until he reappears. While in the air, <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> again for 2.<small>2</small> seconds and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around the target location 0.<small>5</small> seconds into the channel.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Pantheon  channels for 2 seconds, then leaps high into the air,  vanishing and becoming  immune to crowd control until he reappears',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              'channels for 2 seconds, then leaps high into the air,  vanishing and becoming  immune to crowd control until he reappears',
            pre: 'Pantheon  channels for 2 seconds, then leaps high into the air,  vanishing and becoming  immune to crowd control until he reappears',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'While in the air, Pantheon  channels again for 2.2 seconds and grants  sight around the target location 0.5 seconds into the channel.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'in the air, Pantheon  channels again for 2.2 seconds and grants  sight around the target location 0.5 seconds into the channel.',
            pre: 'While in the air, Pantheon  channels again for 2.2 seconds and grants  sight around the target location 0.5 seconds into the channel.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "After 0.8 seconds into the channel, Pantheon prepares for landing by hurling his spear to the target location over 0.2 seconds that deals 40 − 190 (based on  Comet Spear's rank) (+ 115% bonus AD) physical damage to enemies near its landing point and  slows them by 50% for 2 seconds.",
        descriptionHTML:
          'After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>8</small></span> seconds into the channel, <b>Pantheon</b> prepares for landing by hurling his spear to the target location over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>2</small></span> seconds that deals <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Comet Spear.png|20px|border]] Comet Spear\'s rank" data-start="40;0" data-finish="190;5" data-bot_values="40;70;100;130;160;190" data-top_values="0;1;2;3;4;5">40 − 190 (based on <a href="https://static.wikia.nocookie.net/leagueoflegends/images/0/0c/Pantheon_Comet_Spear.png/revision/latest?cb=20190730164444" class="image"><img alt="Comet Spear.png" src="/wiki/images/Pantheon_Comet_Spear.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> Comet Spear\'s rank)</span> <span style="color:orange; white-space:normal">(+&nbsp;115% <b>bonus</b> AD)</span> physical damage</span> to enemies near its landing point and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "After 0.8 seconds into the channel, Pantheon prepares for landing by hurling his spear to the target location over 0.2 seconds that deals 40 − 190 (based on  Comet Spear's rank) (+ 115% bonus AD) physical damage to enemies near its landing point and  slows them by 50% for 2 seconds.",
            damagetype: 'Physical',
            values: [0, 190],
            basedOn: " Comet Spear's rank",
            user: 'none',
            units: '',
            unitsText:
              'physical damage to enemies near its landing point and  slows them by 50% for 2 seconds.',
            pre: 'After 0.8 seconds into the channel, Pantheon prepares for landing by hurling his spear to the target location over 0.2 seconds that deals 40 − 190',
            post: 'physical damage to enemies near its landing point and  slows them by 50% for 2 seconds.',
            children: [
              {
                values: 115,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 115% bonus AD',
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
          'Over the remaining 1.2 seconds, Pantheon crashes down and creates a shockwave alongside himself that travels toward the target location, dealing magic damage to enemies hit, reduced by up to 50% for those hit at the edge of the area. Upon completion of the channel, Pantheon  reappears at the target location and gains full stacks of  Mortal Will.',
        descriptionHTML:
          'Over the remaining <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1.<small>2</small></span> seconds, <b>Pantheon</b> crashes down and creates a shockwave alongside himself that travels toward the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, reduced by up to 50% for those hit at the edge of the area. Upon completion of the channel, <b>Pantheon</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">reappears</a></span> at the target location and gains full stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Over the remaining 1.2 seconds, Pantheon crashes down and creates a shockwave alongside himself that travels toward the target location, dealing magic damage to enemies hit, reduced by up to 50% for those hit at the edge of the area',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for those hit at the edge of the areathe remaining 1.2 seconds, Pantheon crashes down and creates a shockwave alongside himself that travels toward the target location, dealing magic damage to enemies hit, reduced by up to 50',
            pre: 'Over the remaining 1.2 seconds, Pantheon crashes down and creates a shockwave alongside himself that travels toward the target location, dealing magic damage to enemies hit, reduced by up to 50% for those hit at the edge of the area',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '300 / 400 / 500 / 600 / 700 (+ 100% AP)',
            valuesHTML:
              '300 / 400 / 500 / 600 / 700 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '300 / 400 / 500 / 600 / 700 (+ 100% AP)',
            damagetype: 'Magic',
            values: [300, 400, 500, 600, 700],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 400 / 500 / 600 / 700',
            children: [
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
        description:
          'Grand Starfall is put on a  30-second cooldown if the first channel is canceled.',
        descriptionHTML:
          '<i>Grand Starfall</i> is put on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;30-second</span> cooldown if the first channel is canceled.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Grand Starfall is put on a  30-second cooldown if the first channel is canceled.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Starfall is put on a  30-second cooldown if the first channel is canceled.',
            pre: 'Grand Starfall is put on a  30-second cooldown if the first channel is canceled.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span>',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* The spear\'s damage is not empowered by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Mortal Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Mortal Will"><img alt="Mortal Will" src="/wiki/images/Pantheon_Mortal_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Mortal_Will" title="Pantheon/LoL">Mortal Will</a></span></span>, nor increased against enemies below <span style="color: #1F995C; white-space:normal">20% of their <b>maximum</b> health</span>.\n<ul><li>During the second channel, <b>Pantheon</b> gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minimum health threshold"><a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death#Ways to prevent dying by not losing health"><img alt="Unkillable icon.png" src="/wiki/images/Unkillable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death">minimum health threshold</a></span> of 1.\n<ul><li><b>Pantheon</b> will instantly die upon reappearing if he reaches this threshold.</li></ul></li>\n<li>Abilities that target <b>Pantheon</b> will redirect to the last location.</li>\n<li><a href="/wiki/Ping" title="Ping">Pinging</a> the ability will inform allies in <a href="/wiki/Hotkeys_and_commands" title="Hotkeys and commands">chat</a> which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champions are in range of <i>Grand Starfall</i>.</li>\n<li><b>Pantheon</b> is considered to be in his original casting position even after leaping, but he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to the target location the moment the second channel completes.</li>\n<li>Using <i>Grand Starfall</i> will inform allies with a ping.</li>\n<li>The following table refers for interactions while <b>Pantheon</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> (first channel):</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<ul><li>The cast time and second channel have the same interactions except they can only be interrupted by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">death</a></span>.</li>\n<li><i>Grand Starfall\'s</i> first channel will also be interrupted if he enters the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Pantheon_Original_R_SFX_0.ogg   Landing alert.',
  },
} satisfies { [skillName in string]: SkillData };
