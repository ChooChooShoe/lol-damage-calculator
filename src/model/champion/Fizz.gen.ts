import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Fizz';

export default {
  'Nimble Fighter': {
    name: 'Nimble Fighter',
    display_name: 'Nimble Fighter',
    champion: 'Fizz',
    skill: 'I',
    image: {
      full: 'Fizz_P.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL" title="Fizz"><img alt="Fizz" src="/wiki/images/Fizz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL" title="Fizz/LoL">Fizz</a></span></span> ignores <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">unit collision</a></span>, and takes reduced damage.',
    ],
    description: [
      {
        icon: '/wiki/images/Nimble Fighter.png',
        description:
          'Innate: Fizz gains  ghosting and takes 4 (+ 1% AP) reduced damage from every instance of damage, up to a maximum of 50% reduction.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Fizz</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and takes 4 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% AP)</span> reduced damage from every instance of damage, up to a maximum of 50% reduction.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' Fizz gains  ghosting and takes 4 (+ 1% AP) reduced damage from every instance of damage, up to a maximum of 50% reduction.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'reduced damage from every instance of damage, up to a maximum of 50% reduction.',
            pre: 'Fizz gains  ghosting and takes 4',
            post: 'reduced damage from every instance of damage, up to a maximum of 50% reduction.',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 1% AP',
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
    notes: '* No additional notes.',
  },
  'Urchin Strike': {
    name: 'Urchin Strike',
    display_name: 'Urchin Strike',
    champion: 'Fizz',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'FizzQ.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '550',
    target_range: '550',
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown: '8 / 7.<small>5</small> / 7 / 6.<small>5</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL" title="Fizz"><img alt="Fizz" src="/wiki/images/Fizz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL" title="Fizz/LoL">Fizz</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> through the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span style="color: #FF8C34; white-space:normal">physical damage</span>, and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects.',
    ],
    description: [
      {
        icon: '/wiki/images/Urchin Strike.png',
        description:
          'Active: Fizz  dashes a fixed distance in the direction of the target enemy. If they are in range upon arrival, he deals magic damage plus 100% AD physical damage and applies  on-hit effects at 100% effectiveness.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target enemy. If they are in range upon arrival, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> plus <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If they are in range upon arrival, he deals magic damage plus 100% AD physical damage and applies  on-hit effects at 100% effectiveness.',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'AD physical damage and applies  on-hit effects at 100they are in range upon arrival, he deals magic damage plus 100',
            pre: 'If they are in range upon arrival, he deals magic damage plus 100% AD physical damage and applies  on-hit effects at 100% effectiveness.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '10 / 25 / 40 / 55 / 70 (+ 55% AP)',
            valuesHTML:
              '10 / 25 / 40 / 55 / 70 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '10 / 25 / 40 / 55 / 70 (+ 55% AP)',
            damagetype: 'Magic',
            values: [10, 25, 40, 55, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 25 / 40 / 55 / 70',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Seastone Trident and  Chum the Waters can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Seastone Trident" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Seastone_Trident" title="Seastone Trident"><img alt="Seastone Trident" src="/wiki/images/Fizz_Seastone_Trident.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Seastone_Trident" title="Fizz/LoL">Seastone Trident</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Chum the Waters" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Chum_the_Waters" title="Chum the Waters"><img alt="Chum the Waters" src="/wiki/images/Fizz_Chum_the_Waters.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Chum_the_Waters" title="Fizz/LoL">Chum the Waters</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span>',
    spelleffects: 'Special',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* <i>Urchin Strike</i> can only go through walls if the target is on the other side.\n<ul><li><i>Urchin Strike</i> only damages targets if within 200 units of their original location upon completion of the dash.</li>\n<li><b>Fizz</b> will be automatically ordered to <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> the target after <i>Urchin Strike</i>.</li>\n<li><i>Urchin Strike</i> does not deal damage if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>The physical portion of the effect deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>, while the magic portion of the effect deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span>.</li>\n<li><span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">Life steal</a></span> applies only on the physical damage component. <span style="white-space:nowrap"><a href="/wiki/Spell_vamp" title="Spell vamp"><img alt="Spell vamp icon.png" src="/wiki/images/Spell_vamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Spell_vamp" class="mw-redirect" title="Spell vamp">Spell vamp</a></span> applies to both the physical damage and bonus magic damage.</li></ul>',
  },
  'Seastone Trident': {
    name: 'Seastone Trident',
    display_name: 'Seastone Trident',
    champion: 'Fizz',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'FizzW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '30 / 40 / 50 / 60 / 70',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">7 / 6.<small>5</small> / 6 / 5.<small>5</small> / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL" title="Fizz"><img alt="Fizz" src="/wiki/images/Fizz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL" title="Fizz/LoL">Fizz</a></span></span> basic attacks bleed his enemies, continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL" title="Fizz"><img alt="Fizz" src="/wiki/images/Fizz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL" title="Fizz/LoL">Fizz</a></span></span> empowers his next basic attack to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, and has an additional effect based on fatality.\n<ul><li>If this attack kills the target, the cooldown is <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> and the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> is refunded.</li>\n<li>If this attack does not kill the target, <b>Fizz\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> for a few seconds.</li></ul>',
    ],
    description: [
      {
        description:
          "Passive: Fizz's basic attacks rend enemies  on-hit, dealing magic damage every 0.5 seconds over 3 seconds, refreshing on subsequent hits.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Fizz\'s</b> basic attacks rend enemies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over 3 seconds, refreshing on subsequent hits.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values: '20 / 30 / 40 / 50 / 60 (+ 40% AP)',
            valuesHTML:
              '20 / 30 / 40 / 50 / 60 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 40% AP)',
            damagetype: 'Magic',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
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
        icon: '/wiki/images/Seastone Trident.png',
        description:
          'Active: Fizz empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 4 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Fizz empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus magic damage.',
            increasedStat: 'bonus_ad',
            values: 4,
            units: '',
            unitsText:
              'empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus magic damage.',
            pre: 'Fizz empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus magic damage.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '50 / 70 / 90 / 110 / 130 (+ 50% AP)',
            valuesHTML:
              '50 / 70 / 90 / 110 / 130 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 50% AP)',
            damagetype: 'Magic',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
      {
        description:
          "If Seastone Trident kills its target, the  cooldown is reduced to 1 second and Fizz restores  mana. Otherwise, if the target is not killed, Fizz's basic attacks deal bonus magic damage  on-hit for the next 5 seconds.",
        descriptionHTML:
          'If <i>Seastone Trident</i> kills its target, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced to 1 second and <b>Fizz</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>. Otherwise, if the target is not killed, <b>Fizz\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for the next 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If Seastone Trident kills its target, the  cooldown is reduced to 1 second and Fizz restores  mana',
            values: 1,
            user: 'target',
            units: 'total_mana',
            unitsText:
              'Seastone Trident kills its target, the  cooldown is reduced to 1 second and Fizz restores  mana',
            pre: 'If Seastone Trident kills its target, the  cooldown is reduced to 1 second and Fizz restores  mana',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "Otherwise, if the target is not killed, Fizz's basic attacks deal bonus magic damage  on-hit for the next 5 seconds.",
            damagetype: 'Magic',
            values: 5,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              "if the target is not killed, Fizz's basic attacks deal bonus magic damage  on-hit for the next 5 seconds.",
            pre: "Otherwise, if the target is not killed, Fizz's basic attacks deal bonus magic damage  on-hit for the next 5 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Mana Restored:',
            values: '20 / 28 / 36 / 44 / 52',
            valuesHTML:
              '<span style="color: #0099CC; white-space:normal">20 / 28 / 36 / 44 / 52</span>',
          },
          {
            name: 'Bonus Magic Damage On-Hit:',
            values: '10 / 15 / 20 / 25 / 30 (+ 35% AP)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '20 / 28 / 36 / 44 / 52',
            values: [20, 28, 36, 44, 52],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 28 / 36 / 44 / 52',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage On-Hit:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 35% AP)',
            damagetype: 'Magic',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
        ],
      },
      {
        description: "Seastone Trident  resets Fizz's basic attack timer.",
        descriptionHTML:
          '<i>Seastone Trident <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Fizz\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'special',
    occurrence: 'On-hit',
    spellshield: true,
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> on the empowered attack, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent damage</a></span> on the damage over time effect, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> on the bonus damage on-hit.\n<ul><li><i>Seastone Trident\'s </i> interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.\n<ul><li>The passive bonus damage gets negated by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span> the attack, or if <b>Fizz</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li>The active:\n<ul><li>If the attacked enemy is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span> or if <b>Fizz</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>, the empowered attack won\'t deal any damage, but the empowered attack won\'t be consumed.</li>\n<li>If the attacked enemy is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span>, the empowered attack won\'t deal any damage despite being consumed. But the attack will apply the passive bonus damage of <i>Seastone Trident</i>.</li></ul></li></ul></li>\n<li>The empowered attack will trigger but not be consumed nor apply its effects against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  Playful: {
    name: 'Playful',
    display_name: 'Playful',
    champion: 'Fizz',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'FizzE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '400',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 375',
    cast_time: 'none',
    cost: '90 / 95 / 100 / 105 / 110',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the recast times out">16 / 14 / 12 / 10 / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL" title="Fizz"><img alt="Fizz" src="/wiki/images/Fizz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL" title="Fizz/LoL">Fizz</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">vaults</a></span> in the target direction and balances onto his spear, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>. From this position, Fizz can either slam the ground or choose to jump again with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Trickster" title="Trickster"><img alt="Trickster" src="/wiki/images/Fizz_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Trickster" title="Fizz/LoL">Trickster</a></span></span></i>.',
      'Slamming the ground deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Playful.png',
        description:
          'Active: Fizz  dashes to the target location while becoming  untargetable, balancing on his trident for 0.75 seconds, during which he can cast  Trickster after 0.15 seconds into the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location while becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, balancing on his trident for 0.<small>75</small> seconds, during which he can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Trickster" title="Trickster"><img alt="Trickster" src="/wiki/images/Fizz_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Trickster" title="Fizz/LoL">Trickster</a></span></span></i> after 0.<small>15</small> seconds into the duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'He then begins to hop off of his trident over 0.5 seconds, afterwards becoming targetable and landing to create a splash that deals magic damage to nearby enemies and  slows them for 2 seconds.',
        descriptionHTML:
          'He then begins to hop off of his trident over 0.<small>5</small> seconds, afterwards becoming targetable and landing to create a splash that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 120 / 170 / 220 / 270 (+ 90% AP)',
            valuesHTML:
              '70 / 120 / 170 / 220 / 270 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
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
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 90% AP)',
            damagetype: 'Magic',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
        description:
          'While hopping off of the trident, Fizz may input movement commands to direct his landing. Playful will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>While hopping off of the trident, <b>Fizz</b> may input movement commands to direct his landing. Playful will cast at max range if cast beyond that.</i>',
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
    notes:
      '*<i>Playful</i> counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>Detonating the ability early for <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Trickster" title="Trickster"><img alt="Trickster" src="/wiki/images/Fizz_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Trickster" title="Fizz/LoL">Trickster</a></span></span> does not.</li></ul></li>\n<li><i>Playful</i> cannot be used for approximately 0.<small>5</small> seconds after using <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Urchin Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Urchin_Strike" title="Urchin Strike"><img alt="Urchin Strike" src="/wiki/images/Fizz_Urchin_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Urchin_Strike" title="Fizz/LoL">Urchin Strike</a></span></span>.</li>\n<li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> can be used while hopping off the trident but not while balanced on it.</li>\n<li>If the first dash is interrupted, <b>Fizz</b> initiates the hop immediately, and if the second one is, the splash will not occur.\n<ul><li>In either cases, <b>Fizz</b> loses the untargetability.</li></ul></li>\n<li>If <i>Playful</i> is cast while under the effect of a move block, <b>Fizz</b> will not become untargetable and will initiate the hop instantly.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li>If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Trickster" title="Trickster"><img alt="Trickster" src="/wiki/images/Fizz_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Trickster" title="Fizz/LoL">Trickster</a></span></span> is cast, the splash will not occur.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>There is a minimum dash distance of 25 units for <i>Playful</i>.\n<ul><li>If Fizz casts <i>Playful</i> on top of himself after being teleported (e.g. <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>, <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>), the minimum dash distance will not apply.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>If <b>Fizz</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span> during either <i>Playful</i> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Trickster" title="Trickster"><img alt="Trickster" src="/wiki/images/Fizz_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Trickster" title="Fizz/LoL">Trickster</a></span></span>, the splash occurs after the stasis ends.</li></ul>',
  },
  Trickster: {
    name: 'Trickster',
    display_name: 'Trickster',
    champion: 'Fizz',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'FizzE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '300',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 225',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL" title="Fizz"><img alt="Fizz" src="/wiki/images/Fizz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL" title="Fizz/LoL">Fizz</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">vaults</a></span> in the target direction and slams down, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.<br>This area is smaller than <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Playful" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Playful" title="Playful"><img alt="Playful" src="/wiki/images/Fizz_Playful.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Playful" title="Fizz/LoL">Playful</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Trickster.png',
        description:
          'Active: Fizz  dashes to the target location, hopping down and splashing onto the ground prematurely upon arrival to deal the same damage in a smaller radius but not applying the slow.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, hopping down and splashing onto the ground prematurely upon arrival to deal the same damage in a smaller radius but not applying the slow.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Trickster will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Trickster will cast at max range if cast beyond that.</i>',
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
    notes:
      '* <i>Trickster</i> does not count as an ability activation.\n<ul><li>Both <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Playful" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Playful" title="Playful\'s"><img alt="Playful\'s" src="/wiki/images/Fizz_Playful.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Playful" title="Fizz/LoL">Playful\'s</a></span></span> and <i>Trickster\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> may be directed separately.</li>\n<li><i>Trickster</i> has a minimum dash distance of 75 units.</li>\n<li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> cannot be used during the dash.</li>\n<li>The splash occurs immediately if <b>Fizz</b> encounters terrain that cannot be dashed through (he has to be particularly close to the wall).</li></ul>',
  },
  'Chum the Waters': {
    name: 'Chum the Waters',
    display_name: 'Chum the Waters',
    champion: 'Fizz',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'FizzR.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1300',
    speed: '1300',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '100 / 92.<small>5</small> / 85 / 77.<small>5</small> / 70',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL" title="Fizz"><img alt="Fizz" src="/wiki/images/Fizz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL" title="Fizz/LoL">Fizz</a></span></span> tosses a lure in the target direction that lands on the ground, attracting a shark that erupts after a short delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.<br>The farther the lure flies, the larger the shark that is attracted, increasing the effects.',
      'The lure attaches to the first enemy champion that touches it, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them. The shark will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knockup</a></span> the target instead of knocking them back.',
    ],
    description: [
      {
        icon: '/wiki/images/Chum the Waters.png',
        description:
          "Active: Fizz throws down a lure at the target location that attracts a shark, granting  sight of the area before it emerges to chomp at the lure after 2 seconds, dealing magic damage to nearby enemies,  knocking them back, though not through terrain, and  slowing them for 2 seconds. The further the lure travels in its initial flight, the larger the shark that is attracted; increasing Chum the Waters'  damage, slow, eruption radius and knock back distance.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> throws down a lure at the target location that attracts a shark, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before it emerges to chomp at the lure after 2 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>, though not through terrain, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds. The further the lure travels in its initial flight, the larger the shark that is attracted; increasing <i>Chum the Waters\' </i> damage, slow, eruption radius and knock back distance.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Fizz throws down a lure at the target location that attracts a shark, granting  sight of the area before it emerges to chomp at the lure after 2 seconds, dealing magic damage to nearby enemies,  knocking them back, though not through terrain, and  slowing them for 2 seconds',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'throws down a lure at the target location that attracts a shark, granting  sight of the area before it emerges to chomp at the lure after 2 seconds, dealing magic damage to nearby enemies,  knocking them back, though not through terrain, and  slowing them for 2 seconds',
            pre: 'Fizz throws down a lure at the target location that attracts a shark, granting  sight of the area before it emerges to chomp at the lure after 2 seconds, dealing magic damage to nearby enemies,  knocking them back, though not through terrain, and  slowing them for 2 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Guppy (<455): 40% slow, 200 eruption radius and 150 unit knock back distance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Guppy (&lt;455):</b></span> 40% slow, 200 eruption radius and 150 unit knock back distance.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Guppy (<455):',
            raw: ' 40% slow, 200 eruption radius and 150 unit knock back distance.',
            damagetype: 'None',
            values: 40,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'slow, 200 eruption radius and 150 unit knock back distance.',
            pre: '40% slow, 200 eruption radius and 150 unit knock back distance.',
          },
        ],
        leveling: [
          {
            name: 'Guppy Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 80% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Guppy Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 80% AP)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Chomper (455-910): 60% slow, 325 eruption radius and 250 unit knock back distance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Chomper (455-910):</b></span> 60% slow, 325 eruption radius and 250 unit knock back distance.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Chomper (455-910):',
            raw: ' 60% slow, 325 eruption radius and 250 unit knock back distance.',
            damagetype: 'None',
            values: 60,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'slow, 325 eruption radius and 250 unit knock back distance.',
            pre: '60% slow, 325 eruption radius and 250 unit knock back distance.',
          },
        ],
        leveling: [
          {
            name: 'Chomper Damage:',
            values: '225 / 275 / 325 / 375 / 425 (+ 100% AP)',
            valuesHTML:
              '225 / 275 / 325 / 375 / 425 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Chomper Damage:',
            raw: '225 / 275 / 325 / 375 / 425 (+ 100% AP)',
            damagetype: 'None',
            values: [225, 275, 325, 375, 425],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '225 / 275 / 325 / 375 / 425',
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
        description:
          'Gigalodon (>910): 80% slow, 450 eruption radius and 350 unit knock back distance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Gigalodon (&gt;910):</b></span> 80% slow, 450 eruption radius and 350 unit knock back distance.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Gigalodon (>910):',
            raw: ' 80% slow, 450 eruption radius and 350 unit knock back distance.',
            damagetype: 'None',
            values: 80,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'slow, 450 eruption radius and 350 unit knock back distance.',
            pre: '80% slow, 450 eruption radius and 350 unit knock back distance.',
          },
        ],
        leveling: [
          {
            name: 'Gigalodon Damage:',
            values: '300 / 350 / 400 / 450 / 500 (+ 120% AP)',
            valuesHTML:
              '300 / 350 / 400 / 450 / 500 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;120% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Gigalodon Damage:',
            raw: '300 / 350 / 400 / 450 / 500 (+ 120% AP)',
            damagetype: 'None',
            values: [300, 350, 400, 450, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 350 / 400 / 450 / 500',
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
        description:
          "Enemy  champions can intercept the lure while it is in flight, which attaches to them upon contact and causes the shark to emerge at their position after the same delay. The lure's holder is  slowed and  revealed for the duration and afterwards is impacted by the eruption but is  knocked up for 1 second instead of knocked back.",
        descriptionHTML:
          'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can intercept the lure while it is in flight, which attaches to them upon contact and causes the shark to emerge at their position after the same delay. The lure\'s holder is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> for the duration and afterwards is impacted by the eruption but is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 1 second instead of knocked back.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "The lure's holder is  slowed and  revealed for the duration and afterwards is impacted by the eruption but is  knocked up for 1 second instead of knocked back.",
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              "lure's holder is  slowed and  revealed for the duration and afterwards is impacted by the eruption but is  knocked up for 1 second instead of knocked back.",
            pre: "The lure's holder is  slowed and  revealed for the duration and afterwards is impacted by the eruption but is  knocked up for 1 second instead of knocked back.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'special',
    notes:
      '* <i>Chum the Waters</i> will stop its movement if the lure collides with an enemy champion with a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> (does not attach) or upon colliding with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> (does not get destroyed).\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>The targeted area does not change unless the ability was cast beyond maximum range.</li></ul></li>\n<li>If the lure attaches to an enemy champion, a countdown will appear at their position to signify when the shark is about to emerge. The countdown begins from 4 seconds. However, the numbers decrease twice as fast.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Fizz_Original_R_6.ogg   "Feeding time!"',
  },
} satisfies { [skillName in string]: SkillData };
