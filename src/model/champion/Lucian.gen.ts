import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Lucian';

export default {
  Lightslinger: {
    name: 'Lightslinger',
    display_name: 'Lightslinger',
    champion: 'Lucian',
    skill: 'I',
    image: {
      full: 'Lucian_Passive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> After casting an ability, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL" title="Lucian\'s"><img alt="Lucian\'s" src="/wiki/images/Lucian_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL" title="Lucian/LoL">Lucian\'s</a></span></span> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within a few seconds fires a second attack that deals <span style="color: #FF8C34; white-space:normal"><b>reduced</b> physical damage</span>.',
      '<span class="template_sbc"><b>Innate - Vigilance:</b></span> Whenever <b>Lucian</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielded</a></span> or granted a <a href="/wiki/Buff" title="Buff">buff</a> by an ally, his next two shots within a few seconds are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. The shots can stack up to a cap.',
    ],
    description: [
      {
        icon: '/wiki/images/Lightslinger.png',
        description:
          "Innate: After casting an ability, Lucian's next basic attack within 3.5 seconds fires an additional shot on-attack after 0.25 seconds, which deals 50 / 55 / 60% (based on level) AD physical damage, increased to 100% AD against  minions.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <b>Lucian\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 3.<small>5</small> seconds fires an additional shot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> after 0.<small>25</small> seconds, which deals <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="50;55;60" data-top_values="1;7;13" data-bot_key="%">50 / 55 / 60% (based on level)</span> AD <span style="color: #FF8C34; white-space:normal">physical damage</span></span>, increased to <span style="color:orange; white-space:normal">100% AD</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: "After casting an ability, Lucian's next basic attack within 3.5 seconds fires an additional shot on-attack after 0.25 seconds, which deals 50 / 55 / 60% (based on level) AD physical damage, increased to 100% AD against  minions.",
            increasedStat: 'total_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText:
              'AD physical damage, increased to 100% AD against  minions.',
            pre: "After casting an ability, Lucian's next basic attack within 3.5 seconds fires an additional shot on-attack after 0.25 seconds, which deals 50 / 55 / 60%",
            post: 'AD physical damage, increased to 100% AD against  minions.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The second shot applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
        descriptionHTML:
          'The second shot applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness and is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The second shot applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness and is affected by  critical strike modifiers.second shot applies  on-hit and on-attack effects at 100',
            pre: 'The second shot applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If Lucian's primary target is killed before the second shot can go off, he automatically shoots another enemy in range.",
        descriptionHTML:
          "If <b>Lucian's</b> primary target is killed before the second shot can go off, he automatically shoots another enemy in range.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Innate - Vigilance: Whenever Lucian is  healed,  shielded or granted a buff by an ally, his next two shots within 6 seconds are empowered to deal 14 (+ 20% AD) bonus magic damage  on-hit. The empowered shots can stack up to 4 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Vigilance:</b></span> Whenever <b>Lucian</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielded</a></span> or granted a <a href="/wiki/Buff" title="Buff">buff</a> by an ally, his next two shots within 6 seconds are empowered to deal <span style="color: #00B0F0; white-space:normal">14</span> <span style="color:orange; white-space:normal">(+&nbsp;20% AD)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. The empowered shots can <a href="/wiki/Stack" title="Stack">stack</a> up to 4 times.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate - Vigilance:',
            raw: 'Whenever Lucian is  healed,  shielded or granted a buff by an ally, his next two shots within 6 seconds are empowered to deal 14 (+ 20% AD) bonus magic damage  on-hit',
            healType: 'BonusHealth',
            values: 6,
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage  on-hit',
            pre: 'Whenever Lucian is  healed,  shielded or granted a buff by an ally, his next two shots within 6 seconds are empowered to deal 14',
            post: 'bonus magic damage  on-hit',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20% AD',
              },
            ],
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'The empowered shots can stack up to 4 times.',
            min: 0,
            max: 10,
            description: 'The empowered shots can stack up to 4 times.',
            values: 4,
            units: 'genericStacks',
            unitsText: 'empowered shots can stack up to 4 times.',
            pre: 'The empowered shots can stack up to 4 times.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'attack',
    occurrence: 'On-hit',
    callforhelp: 'true',
    notes:
      '* <i>Lightslinger</i> is triggered and consumed by the first attack.\n<ul><li>The second attack, if the initial target was killed, will prioritize enemy champions regardless of having <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of them or not and enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> with <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">low health</span></span>.\n<ul><li><i>Lightslinger</i> will still be consumed if no second target is found when <b>Lucian</b> fires.</li></ul></li>\n<li><b>Lucian</b> can perform actions freely while firing <i>Lightslinger</i> since the second attack is integrated into the first one.\n<ul><li>The second attack has special movement animations depending on the direction <b>Lucian</b> is moving while firing.</li></ul></li>\n<li>The additional shot counts as a separate hit for effects such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Muramana" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Muramana" title="Muramana\'s"><img alt="Muramana\'s" src="/wiki/images/Muramana_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Muramana" title="Muramana">Muramana\'s</a></span></span> <a href="/wiki/Named_item_effect#Shock" title="Named item effect">Shock</a>, and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Eclipse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Eclipse" title="Eclipse\'s"><img alt="Eclipse\'s" src="/wiki/images/Eclipse_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Eclipse" title="Eclipse">Eclipse\'s</a></span></span> <a href="/wiki/Named_item_effect#Ever_Rising_Moon" title="Named item effect">Ever Rising Moon</a>.</li>\n<li>The empowered shots will apply against structures.</li></ul>',
  },
  'Piercing Light': {
    name: 'Piercing Light',
    display_name: 'Piercing Light',
    champion: 'Lucian',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'LucianQ.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1000',
    target_range: '500',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    cast_time:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0.4;" data-finish="0.25;" data-bot_values="0.4;0.39;0.38;0.37;0.36;0.36;0.35;0.34;0.33;0.32;0.31;0.3;0.29;0.29;0.28;0.27;0.26;0.25" data-top_values="">0.<small>4</small> − 0.<small>25</small> (based on level)</span>',
    cost: '48 / 56 / 64 / 72 / 80',
    costtype: 'Mana',
    cooldown: '9 / 8 / 7 / 6 / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL" title="Lucian"><img alt="Lucian" src="/wiki/images/Lucian_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL" title="Lucian/LoL">Lucian</a></span></span> fires a laser in a line in the direction of the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Piercing_Light.png',
        description:
          'Active: Lucian fires a laser in a line in the direction of the target enemy that deals physical damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lucian</b> fires a laser in a line in the direction of the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '95 / 125 / 155 / 185 / 215 (+ 60 / 75 / 90 / 105 / 120% bonus AD)',
            valuesHTML:
              '95 / 125 / 155 / 185 / 215 <span style="color:orange; white-space:normal">(+&nbsp;60 / 75 / 90 / 105 / 120% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '95 / 125 / 155 / 185 / 215 (+ 60 / 75 / 90 / 105 / 120% bonus AD)',
            damagetype: 'Physical',
            values: [95, 125, 155, 185, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '95 / 125 / 155 / 185 / 215',
            children: [
              {
                values: [60, 75, 90, 105, 120],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60 / 75 / 90 / 105 / 120% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'AoE',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <i>Piercing Light</i> will attempt to lead the target if it is moving but does not adjust further during cast time (enemies can dodge the laser if they change their position by a sufficient amount during the cast time).',
  },
  'Ardent Blaze': {
    name: 'Ardent Blaze',
    display_name: 'Ardent Blaze',
    champion: 'Lucian',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'LucianW.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '900',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="initial missile width">110</span>',
    speed: '1600',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'Mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL" title="Lucian"><img alt="Lucian" src="/wiki/images/Lucian_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL" title="Lucian/LoL">Lucian</a></span></span> fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or maximum range, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and marking enemies hit.',
      '<b>Lucian</b> briefly gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> when he or allied champions damage a marked target. Allied champions triggering this effect grant <b>Lucian</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Lightslinger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Lightslinger" title="Vigilance"><img alt="Vigilance" src="/wiki/images/Lucian_Lightslinger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Lightslinger" title="Lucian/LoL">Vigilance</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Ardent_Blaze.png',
        description:
          'Active: Lucian fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing magic damage to enemies hit and granting  sight of the area for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lucian</b> fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Lucian fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing magic damage to enemies hit and granting  sight of the area for 1 second.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing magic damage to enemies hit and granting  sight of the area for 1 second.',
            pre: 'Lucian fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing magic damage to enemies hit and granting  sight of the area for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 110 / 145 / 180 / 215 (+ 90% AP)',
            valuesHTML:
              '75 / 110 / 145 / 180 / 215 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 110 / 145 / 180 / 215 (+ 90% AP)',
            damagetype: 'Magic',
            values: [75, 110, 145, 180, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 110 / 145 / 180 / 215',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Ardent_Blaze_2.png',
        description: 'Enemies hit are marked for 6 seconds.',
        descriptionHTML: 'Enemies hit are marked for 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Enemies hit are marked for 6 seconds.',
            values: 6,
            units: 'kindredMarks',
            unitsText: 'hit are marked for 6 seconds.',
            pre: 'Enemies hit are marked for 6 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Ardent_Blaze_3.png',
        description:
          'Lucian gains  bonus movement speed for 1 second when he or allied champions damage a marked target. Allied champions triggering this effect grant Lucian  Vigilance.',
        descriptionHTML:
          '<b>Lucian</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 1 second when he or allied champions damage a marked target. Allied champions triggering this effect grant <b>Lucian</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Lightslinger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Lightslinger" title="Vigilance"><img alt="Vigilance" src="/wiki/images/Lucian_Lightslinger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Lightslinger" title="Lucian/LoL">Vigilance</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Lucian gains  bonus movement speed for 1 second when he or allied champions damage a marked target',
            increasedStat: 'kindredMarks',
            values: 1,
            units: '',
            unitsText:
              'gains  bonus movement speed for 1 second when he or allied champions damage a marked target',
            pre: 'Lucian gains  bonus movement speed for 1 second when he or allied champions damage a marked target',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '60 / 65 / 70 / 75 / 80',
            valuesHTML: '60 / 65 / 70 / 75 / 80',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '60 / 65 / 70 / 75 / 80',
            values: [60, 65, 70, 75, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 65 / 70 / 75 / 80',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies / Self, Allies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><ul><li>Like most <a href="/wiki/Projectile" title="Projectile">missiles</a>, it will not collide with enemies whose center is beyond the maximum range (not behind <b>Lucian</b>), but this determines only the center and timing of the explosion.</li></ul></li>\n<li><i>Ardent Blaze</i> will cast from wherever <b>Lucian</b> is at the end of the cast time.</li>\n<li><b>Lucian</b> will not gain <i>Ardent Blaze\'s</i> bonus movement speed if attacks on <span style="color: #AF1AAF; white-space:normal">marked</span> targets are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, or if missed while the attacker is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">DoTs</a></span> will proc <i>Ardent Blaze</i> only once.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not prevent the mark.</li></ul>',
  },
  'Relentless Pursuit': {
    name: 'Relentless Pursuit',
    display_name: 'Relentless Pursuit',
    champion: 'Lucian',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'LucianE.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '425 / 200',
    speed: '1350',
    cast_time: 'none',
    cost: '40 / 30 / 20 / 10 / 0',
    costtype: 'Mana',
    cooldown: '22 / 20 / 18 / 16 / 14',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <i>Relentless Pursuit\'s</i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> for each <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Lightslinger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Lightslinger" title="Lightslinger"><img alt="Lightslinger" src="/wiki/images/Lucian_Lightslinger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Lightslinger" title="Lucian/LoL">Lightslinger</a></span></span></i> shot hit, doubled against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL" title="Lucian"><img alt="Lucian" src="/wiki/images/Lucian_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL" title="Lucian/LoL">Lucian</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction.',
    ],
    description: [
      {
        description:
          "Passive: Relentless Pursuit's  current cooldown is reduced by 1 second for each  Lightslinger shot hit, doubled to 2 seconds against enemy  champions.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <i>Relentless Pursuit\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 1 second for each <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Lightslinger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Lightslinger" title="Lightslinger"><img alt="Lightslinger" src="/wiki/images/Lucian_Lightslinger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Lightslinger" title="Lucian/LoL">Lightslinger</a></span></span></i> shot hit, doubled to 2 seconds against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: "Relentless Pursuit's  current cooldown is reduced by 1 second for each  Lightslinger shot hit, doubled to 2 seconds against enemy  champions.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "Pursuit's  current cooldown is reduced by 1 second for each  Lightslinger shot hit, doubled to 2 seconds against enemy  champions.",
            pre: "Relentless Pursuit's  current cooldown is reduced by 1 second for each  Lightslinger shot hit, doubled to 2 seconds against enemy  champions.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Relentless_Pursuit.png',
        description: 'Active: Lucian  dashes in the target direction.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lucian</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Relentless Pursuit  resets Lucian's basic attack timer. Lucian can cast any of his abilities during the dash. Relentless Pursuit will cast at max range if cast beyond that.",
        descriptionHTML:
          '<i>Relentless Pursuit <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Lucian\'s</b> basic attack timer. <b>Lucian</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Relentless Pursuit will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self',
    notes:
      '* Additional on-hits during <i>Lightslinger</i> are not considered for the cooldown reduction (i.e <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade"><img alt="Guinsoo\'s Rageblade" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade</a></span></span>).\n<ul><li>Unlike some dashes, <b>Lucian\'s</b> dash speed does <i>not</i> scale with his <span style="color: #F5EE99; white-space:normal">movement speed</span>.</li>\n<li><i>Relentless Pursuit\'s</i> dash can go through terrain, but will not be extended further if the target location is within terrain, unlike other dashes, like <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL" title="Ekko"><img alt="Ekko" src="/wiki/images/Ekko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL" title="Ekko/LoL">Ekko</a></span></span>\'s <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-ability="Phase Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL#Phase_Dive" title="Phase Dive"><img alt="Phase Dive" src="/wiki/images/Ekko_Phase_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL#Phase_Dive" title="Ekko/LoL">Phase Dive</a></span></span>.</li>\n<li>Casting <i>Relentless Pursuit</i> directly after attacking with <i>Lightslinger</i> will reduce Relentless Pursuit\'s cooldown when the projectiles hit the target.\n<ul><li>In combination with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Navori Quickblades" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades"><img alt="Navori Quickblades" src="/wiki/images/Navori_Quickblades_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades">Navori Quickblades</a></span></span>, attacking a champion with <i>Lightslinger</i>, followed by <i>Relentless Pursuit</i>, and another Lightslinger attack will fully reset rank 5 Relentless Pursuit\'s cooldown if they all critically strike the target.</li></ul></li></ul>',
  },
  'The Culling': {
    name: 'The Culling',
    display_name: 'The Culling',
    champion: 'Lucian',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'LucianR.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1200 /  1140 (plus offset)',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Individual missile width">220</span> (plus offset)',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">110 / 100 / 90</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL" title="Lucian"><img alt="Lucian" src="/wiki/images/Lucian_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL" title="Lucian/LoL">Lucian</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a few seconds to rapidly fire a torrent of bullets in the target direction. Each shot deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit. <i>The Culling</i> can be recast within the duration.',
      'While channeling, <b>Lucian</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and may still move and cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Relentless Pursuit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Relentless_Pursuit" title="Relentless Pursuit"><img alt="Relentless Pursuit" src="/wiki/images/Lucian_Relentless_Pursuit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Relentless_Pursuit" title="Lucian/LoL">Relentless Pursuit</a></span></span></i>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Lucian</b> ends <i>The Culling</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/The_Culling.png',
        description:
          'Active: Lucian  channels for up to 3 seconds, rapidly firing up to 22 (+ 1 per 4% critical strike chance) shots in the target direction. Each shot deals physical damage to the first enemy hit, doubled against  minions. The Culling can be recast after 0.75 seconds during the channel, and does so automatically when the channel ends.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lucian</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 3 seconds, rapidly firing up to 22 <span style="color: #E56013; white-space:normal">(+&nbsp;1 per 4% critical strike chance)</span> shots in the target direction. Each shot deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>. <i>The Culling</i> can be recast after 0.<small>75</small> seconds during the channel, and does so automatically when the channel ends.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Lucian  channels for up to 3 seconds, rapidly firing up to 22 (+ 1 per 4% critical strike chance) shots in the target direction',
            damagetype: 'None',
            values: 3,
            user: 'none',
            units: '',
            unitsText: 'shots in the target direction',
            pre: 'Lucian  channels for up to 3 seconds, rapidly firing up to 22',
            post: 'shots in the target direction',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'total_critchance',
                unitsText: 'critical strike chanceper 4',
                pre: '+ 1 per 4% critical strike chance',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Physical Damage Per Shot:',
            values: '15 / 30 / 45 (+ 25% AD) (+ 15% AP)',
            valuesHTML:
              '15 / 30 / 45 <span style="color:orange; white-space:normal">(+&nbsp;25% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span>',
          },
          {
            name: 'Minion Damage Per Shot:',
            values: '30 / 60 / 90 (+ 50% AD) (+ 30% AP)',
            valuesHTML:
              '30 / 60 / 90 <span style="color:orange; white-space:normal">(+&nbsp;50% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Shot:',
            raw: '15 / 30 / 45 (+ 25% AD) (+ 15% AP)',
            damagetype: 'Physical',
            values: [15, 30, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 30 / 45',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 25% AD',
              },
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minion Damage Per Shot:',
            raw: '30 / 60 / 90 (+ 50% AD) (+ 30% AP)',
            damagetype: 'None',
            values: [30, 60, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
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
      {
        icon: '/wiki/images/undefined',
        description:
          'While channeling, Lucian is  ghosted and may still move and cast  Relentless Pursuit.',
        descriptionHTML:
          'While channeling, <b>Lucian</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and may still move and cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Relentless Pursuit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Relentless_Pursuit" title="Relentless Pursuit"><img alt="Relentless Pursuit" src="/wiki/images/Lucian_Relentless_Pursuit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Relentless_Pursuit" title="Lucian/LoL">Relentless Pursuit</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Recast: Lucian ends The Culling.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Lucian</b> ends <i>The Culling</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'aoedot',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* At <span style="color: #E56013; white-space:normal">100% critical strike chance</span>, <i>The Culling</i> fires up to 25 additional shots, for a total of 47 shots.\n<ul><li><ul><li>The <b>total</b> damage at the maximum number of shots (at <span style="color: #E56013; white-space:normal">100% critical strike chance</span>) is <span style="color: #FF8C34; white-space:normal">705 / 1057.<small>5</small> / 1410 / 1762.<small>5</small> / 2115</span> <span style="color:orange; white-space:normal">(+&nbsp;1175% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;705% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.</li>\n<li>Against minions, this is increased to <span style="color: #FF8C34; white-space:normal">1410 / 2115 / 2820 / 3525 / 4230</span> <span style="color:orange; white-space:normal">(+&nbsp;2350% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1410% AP)</span>.</li></ul></li>\n<li>The fire rate increases with the number of shots.</li>\n<li>During <i>The Culling</i>, <b>Lucian\'s</b> facing direction is in the direction that he is firing.</li>\n<li><b>Lucian</b> can interact with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span> without <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupting</a></span> <i>The Culling</i>.</li>\n<li><i>The Culling</i> creates the shots at an offset of 35 units to the front plus 35 units towards each side of <b>Lucian</b> (sides alternating, first shot fired from <b>Lucian\'s</b> right gun), unlike the missiles of most abilities.</li>\n<li>The damage dealt by each bullet of <i>The Culling</i> is calculated when the bullet reaches a target, just like single missile abilities.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> only blocks one instance of damage.</li>\n<li>The following table refers for interactions while <b>Lucian</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Relentless Pursuit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Relentless_Pursuit" title="Relentless Pursuit"><img alt="Relentless Pursuit" src="/wiki/images/Lucian_Relentless_Pursuit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Relentless_Pursuit" title="Lucian/LoL">Relentless Pursuit</a></span></span> is usable. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Piercing Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Piercing_Light" title="Piercing Light"><img alt="Piercing Light" src="/wiki/images/Lucian_Piercing_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Piercing_Light" title="Lucian/LoL">Piercing Light</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="Ardent Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#Ardent_Blaze" title="Ardent Blaze"><img alt="Ardent Blaze" src="/wiki/images/Lucian_Ardent_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#Ardent_Blaze" title="Lucian/LoL">Ardent Blaze</a></span></span> are disabled. This ability recasts to end channel.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Lucian_Original_R_2.ogg   "Cleansin\' fury!"',
  },
} satisfies { [skillName in string]: SkillData };
