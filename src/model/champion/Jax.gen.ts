import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Jax';

export default {
  'Relentless Assault': {
    name: 'Relentless Assault',
    display_name: 'Relentless Assault',
    champion: 'Jax',
    skill: 'I',
    image: {
      full: 'Armsmaster_MasterOfArms.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL" title="Jax\'s"><img alt="Jax\'s" src="/wiki/images/Jax_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL" title="Jax/LoL">Jax\'s</a></span></span> basic attacks generate stacks, up to a cap. Stacks expire one at a time.',
      '<span class="template_sbc"><b>Relentless Assault:</b></span> For each stack, <b>Jax</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Relentless_Assault.png',
        description:
          "Innate: Jax's basic attacks generate a stack of Relentless Assault on-attack for 2.5 seconds, refreshing on subsequent attacks and stacking up to 8 times. Stacks expire by one every 0.25 seconds when the duration ends.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Jax\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Relentless Assault</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> for 2.<small>5</small> seconds, refreshing on subsequent attacks and stacking up to 8 times. Stacks expire by one every 0.<small>25</small> seconds when the duration ends.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: "Jax's basic attacks generate a stack of Relentless Assault on-attack for 2.5 seconds, refreshing on subsequent attacks and stacking up to 8 times",
            min: 0,
            max: 8,
            description:
              "Jax's basic attacks generate a stack of Relentless Assault on-attack for 2.5 seconds, refreshing on subsequent attacks and stacking up to 8 times",
            values: 2,
            units: 'genericStacks',
            unitsText:
              'basic attacks generate a stack of Relentless Assault on-attack for 2.5 seconds, refreshing on subsequent attacks and stacking up to 8 times',
            pre: "Jax's basic attacks generate a stack of Relentless Assault on-attack for 2.5 seconds, refreshing on subsequent attacks and stacking up to 8 times",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Relentless Assault: For each stack, Jax gains 3.5% − 11% (based on level)  bonus attack speed, up to a maximum of 28% − 88% (based on level).',
        descriptionHTML:
          '<span class="template_sbc"><b>Relentless Assault:</b></span> For each stack, <b>Jax</b> gains <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3.5;1" data-finish="11;16" data-bot_values="3.5;5;6.5;8;9.5;11" data-top_values="1;4;7;10;13;16" data-bot_key="%">3.<small>5</small>% − 11% (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span>, up to a maximum of <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="28;1" data-finish="88;16" data-bot_values="28;40;52;64;76;88" data-top_values="1;4;7;10;13;16" data-bot_key="%">28% − 88% (based on level)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Relentless Assault:',
            raw: 'For each stack, Jax gains 3.5% − 11% (based on level)  bonus attack speed, up to a maximum of 28% − 88% (based on level).',
            min: 0,
            max: 10,
            description:
              'For each stack, Jax gains 3.5% − 11% (based on level)  bonus attack speed, up to a maximum of 28% − 88% (based on level).',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'bonus_ad',
            unitsText: 'bonus attack speed, up to a maximum of 28% − 88%',
            pre: 'For each stack, Jax gains 3.5% − 11%',
            post: 'bonus attack speed, up to a maximum of 28% − 88%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Grandmaster_at_Angling.png',
        description:
          'Grandmaster at Angling: While out of combat and idle in the river, Jax will occasionally catch a fish, granting him  1.',
        descriptionHTML:
          '<span class="template_sbc"><b>Grandmaster at Angling:</b></span> While out of combat and idle in the river, <b>Jax</b> will occasionally catch a fish, granting him <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Grandmaster at Angling:',
            raw: 'While out of combat and idle in the river, Jax will occasionally catch a fish, granting him  1.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'out of combat and idle in the river, Jax will occasionally catch a fish, granting him  1.',
            pre: 'While out of combat and idle in the river, Jax will occasionally catch a fish, granting him  1.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies, Self',
    notes: '* No additional details.',
  },
  'Leap Strike': {
    name: 'Leap Strike',
    display_name: 'Leap Strike',
    champion: 'Jax',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'JaxLeapStrike.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '700',
    cast_time: 'false',
    cost: '65',
    costtype: 'Mana',
    cooldown: '8 / 7.<small>5</small> / 7 / 6.<small>5</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL" title="Jax"><img alt="Jax" src="/wiki/images/Jax_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL" title="Jax/LoL">Jax</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target unit. If they are an enemy, he deals <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Leap_Strike.png',
        description: "Active: Jax  dashes to the target unit's location.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target unit\'s location.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the target is an enemy and they are in range upon arrival, Jax deals them physical damage.',
        descriptionHTML:
          'If the target is an enemy and they are in range upon arrival, <b>Jax</b> deals them <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '65 / 105 / 145 / 185 / 225 (+ 100% bonus AD)',
            valuesHTML:
              '65 / 105 / 145 / 185 / 225 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 105 / 145 / 185 / 225 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [65, 105, 145, 185, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 105 / 145 / 185 / 225',
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
        icon: '/wiki/images/undefined',
        description: 'Jax can cast any of his abilities during the dash.',
        descriptionHTML:
          '<i><b>Jax</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'single',
    spellshield: 'Special',
    callforhelp: 'True',
    notes:
      '* <i>Leap Strike</i> cannot be cast on <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.\n<ul><li>If the target is an enemy champion, <b>Jax</b> will be ordered to basic attack them after the dash ends.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the damage, including when <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Empower" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Empower" title="empowered"><img alt="empowered" src="/wiki/images/Jax_Empower.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Empower" title="Jax/LoL">empowered</a></span></span>.</li></ul>',
  },
  Empower: {
    name: 'Empower',
    display_name: 'Empower',
    champion: 'Jax',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'JaxEmpowerTwo.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '30',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">7 / 6 / 5 / 4 / 3</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL" title="Jax\'s"><img alt="Jax\'s" src="/wiki/images/Jax_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL" title="Jax/LoL">Jax\'s</a></span></span> empowers his next basic attack or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Leap Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Leap_Strike" title="Leap Strike"><img alt="Leap Strike" src="/wiki/images/Jax_Leap_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Leap_Strike" title="Jax/LoL">Leap Strike</a></span></span></i> against an enemy to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Empower.png',
        description:
          'Active: Jax empowers his next basic attack or  Leap Strike against an enemy within 10 seconds to deal bonus magic damage. If Empower is used on a basic attack, it will gain  50 bonus range.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Leap Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Leap_Strike" title="Leap Strike"><img alt="Leap Strike" src="/wiki/images/Jax_Leap_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Leap_Strike" title="Jax/LoL">Leap Strike</a></span></span></i> against an enemy within 10 seconds to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. If <i>Empower</i> is used on a basic attack, it will gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Jax empowers his next basic attack or  Leap Strike against an enemy within 10 seconds to deal bonus magic damage',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'empowers his next basic attack or  Leap Strike against an enemy within 10 seconds to deal bonus magic damage',
            pre: 'Jax empowers his next basic attack or  Leap Strike against an enemy within 10 seconds to deal bonus magic damage',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If Empower is used on a basic attack, it will gain  50 bonus range.',
            increasedStat: 'bonus_ad',
            values: 5,
            units: '',
            unitsText:
              'Empower is used on a basic attack, it will gain  50 bonus range.',
            pre: 'If Empower is used on a basic attack, it will gain  50 bonus range.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '50 / 85 / 120 / 155 / 190 (+ 60% AP)',
            valuesHTML:
              '50 / 85 / 120 / 155 / 190 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '50 / 85 / 120 / 155 / 190 (+ 60% AP)',
            damagetype: 'Magic',
            values: [50, 85, 120, 155, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 85 / 120 / 155 / 190',
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
        icon: '/wiki/images/undefined',
        description: "Empower  resets Jax's basic attack timer.",
        descriptionHTML:
          '<i>Empower <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Jax\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'spell',
    spellshield: true,
    notes:
      '* The empowered attack will trigger but not be consumed nor apply its effects against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
  },
  'Counter Strike': {
    name: 'Counter Strike',
    display_name: 'Counter Strike',
    champion: 'Jax',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'JaxCounterStrike.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 375',
    cast_time: 'None',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">14 / 12.<small>5</small> / 11 / 9.<small>5</small> / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL" title="Jax"><img alt="Jax" src="/wiki/images/Jax_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL" title="Jax/LoL">Jax</a></span></span> enters <i>Evasion</i> for a short time: a defensive stance that causes him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span> all incoming non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> basic attacks and take reduced damage from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area of effect"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area of effect</a></span> abilities from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
      '<i>Counter Strike</i> can be recast within this time, and does so automatically after the duration.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Jax</b> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> nearby enemies, the damage is increased if he dodged more attacks.',
    ],
    description: [
      {
        icon: '/wiki/images/Counter_Strike.png',
        description:
          'Active: Jax enters Evasion for 2 seconds: a defensive stance that causes him to  dodge all incoming non- turret basic attacks and take 25% reduced damage from all area of effect abilities from  champions.  Counter Strike can be recast after 1 second, and does so automatically after the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> enters <i>Evasion</i> for 2 seconds: a defensive stance that causes him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span> all incoming non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> basic attacks and take 25% reduced damage from all <a href="/wiki/Area_of_effect" title="Area of effect">area of effect</a> abilities from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. <br><br> <i>Counter Strike</i> can be recast after 1 second, and does so automatically after the duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Jax enters Evasion for 2 seconds: a defensive stance that causes him to  dodge all incoming non- turret basic attacks and take 25% reduced damage from all area of effect abilities from  champions',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'reduced damage from all area of effect abilities from  championsenters Evasion for 2 seconds: a defensive stance that causes him to  dodge all incoming non- turret basic attacks and take 25',
            pre: 'Jax enters Evasion for 2 seconds: a defensive stance that causes him to  dodge all incoming non- turret basic attacks and take 25% reduced damage from all area of effect abilities from  champions',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: ' Counter Strike can be recast after 1 second, and does so automatically after the duration.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Strike can be recast after 1 second, and does so automatically after the duration.',
            pre: 'Counter Strike can be recast after 1 second, and does so automatically after the duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Jax deals magic damage to nearby enemies, with the total damage increased by 20% for each attack dodged, up to a 100% increase, and  stuns them for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Jax</b> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, with the <b>total</b> damage increased by 20% for each attack dodged, up to a 100% increase, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Recast:',
            raw: 'Jax deals magic damage to nearby enemies, with the total damage increased by 20% for each attack dodged, up to a 100% increase, and  stuns them for 1 second.',
            damagetype: 'Magic',
            values: 2,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'for each attack dodged, up to a 100deals magic damage to nearby enemies, with the total damage increased by 20',
            pre: 'Jax deals magic damage to nearby enemies, with the total damage increased by 20% for each attack dodged, up to a 100% increase, and  stuns them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values:
              "55 / 85 / 115 / 145 / 175 (+ 70% AP) (+ 4% of target's maximum health)",
            valuesHTML:
              '55 / 85 / 115 / 145 / 175 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;4% of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Magic Damage:',
            raw: "55 / 85 / 115 / 145 / 175 (+ 70% AP) (+ 4% of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [55, 85, 115, 145, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 85 / 115 / 145 / 175',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 4% of target's maximum health",
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><i>Counter Strike</i> will also dodge abilities that can trigger <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> (<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-ability="Mystic Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL#Mystic_Shot" title="Mystic Shot"><img alt="Mystic Shot" src="/wiki/images/Ezreal_Mystic_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL#Mystic_Shot" title="Ezreal/LoL">Mystic Shot</a></span></span>) which will count towards <i>Counter Strike\'s</i> increased damage. There are exceptions however.</li></ul>',
  },
  'Grandmaster-At-Arms': {
    name: 'Grandmaster-At-Arms',
    display_name: 'Grandmaster-At-Arms',
    champion: 'Jax',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'JaxRApexForm.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 375',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">100 / 95 / 90 / 85 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL" title="Jax\'s"><img alt="Jax\'s" src="/wiki/images/Jax_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL" title="Jax/LoL">Jax\'s</a></span></span> basic attacks generate stacks. At max stacks, he consumes them to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> swings his lantern around, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits a champion, he gains <b>bonus</b> resistances. He applies his passive on-hit every 2 stacks instead of every 3 while active.',
    ],
    description: [
      {
        description:
          "Passive: Jax's basic attacks generate a stack of Grandmaster-At-Arms  on-hit for 2.5 seconds, refreshing on subsequent hits and stacking up to 2 times. At 2 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage. While Grandmaster-At-Arms is active, the empowered attack triggers at 1 stack instead.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Jax\'s</b> <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> generate a stack of <i>Grandmaster-At-Arms</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for 2.<small>5</small> seconds, refreshing on subsequent hits and stacking up to 2 times. At 2 stacks, his next basic attack is empowered to consume them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. While <i>Grandmaster-At-Arms</i> is active, the empowered attack triggers at 1 stack instead.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: "Jax's basic attacks generate a stack of Grandmaster-At-Arms  on-hit for 2.5 seconds, refreshing on subsequent hits and stacking up to 2 times",
            min: 0,
            max: 2,
            description:
              "Jax's basic attacks generate a stack of Grandmaster-At-Arms  on-hit for 2.5 seconds, refreshing on subsequent hits and stacking up to 2 times",
            values: 2,
            units: 'genericStacks',
            unitsText:
              'basic attacks generate a stack of Grandmaster-At-Arms  on-hit for 2.5 seconds, refreshing on subsequent hits and stacking up to 2 times',
            pre: "Jax's basic attacks generate a stack of Grandmaster-At-Arms  on-hit for 2.5 seconds, refreshing on subsequent hits and stacking up to 2 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'At 2 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage',
            min: 0,
            max: 10,
            description:
              'At 2 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage',
            values: 2,
            units: 'genericStacks',
            unitsText:
              '2 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage',
            pre: 'At 2 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage',
          },
          {
            effectType: 'Stacks',
            name: 'Line 3:',
            raw: 'While Grandmaster-At-Arms is active, the empowered attack triggers at 1 stack instead.',
            min: 0,
            max: 10,
            description:
              'While Grandmaster-At-Arms is active, the empowered attack triggers at 1 stack instead.',
            values: 1,
            units: 'genericStacks',
            unitsText:
              'Grandmaster-At-Arms is active, the empowered attack triggers at 1 stack instead.',
            pre: 'While Grandmaster-At-Arms is active, the empowered attack triggers at 1 stack instead.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '60 / 85 / 110 / 135 / 160 (+ 60% AP)',
            valuesHTML:
              '60 / 85 / 110 / 135 / 160 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 60% AP)',
            damagetype: 'Magic',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
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
        icon: '/wiki/images/Jax_Grandmaster-At-Arms.png',
        description:
          'Active: Jax swings his lantern around, dealing magic damage to nearby enemies. If this hits a champion, he gains  bonus armor, increased for each champion hit beyond the first, and  bonus magic resistance equal to 60% of that amount as well as 10% increased size for 8 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> swings his lantern around, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits a champion, he gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, increased for each champion hit beyond the first, and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> equal to 60% of that amount as well as 10% increased <a href="/wiki/Size" title="Size">size</a> for 8 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If this hits a champion, he gains  bonus armor, increased for each champion hit beyond the first, and  bonus magic resistance equal to 60% of that amount as well as 10% increased size for 8 seconds.',
            increasedStat: 'bonus_armor',
            values: 6,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'of that amount as well as 10this hits a champion, he gains  bonus armor, increased for each champion hit beyond the first, and  bonus magic resistance equal to 60',
            pre: 'If this hits a champion, he gains  bonus armor, increased for each champion hit beyond the first, and  bonus magic resistance equal to 60% of that amount as well as 10% increased size for 8 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 100% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
          {
            name: 'Bonus Armor:',
            values: '15 / 27.5 / 40 / 52.5 / 65 (+ 40% bonus AD)',
            valuesHTML:
              '15 / 27.<small>5</small> / 40 / 52.<small>5</small> / 65 <span style="color:orange; white-space:normal">(+&nbsp;40% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Bonus Armor per Champion Hit:',
            values: '15 / 17.5 / 20 / 22.5 / 25 (+ 10% bonus AD)',
            valuesHTML:
              '15 / 17.<small>5</small> / 20 / 22.<small>5</small> / 25 <span style="color:orange; white-space:normal">(+&nbsp;10% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 100% AP)',
            damagetype: 'Magic',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
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
          {
            effectType: 'Damage',
            name: 'Bonus Armor:',
            raw: '15 / 27.5 / 40 / 52.5 / 65 (+ 40% bonus AD)',
            damagetype: 'None',
            values: [15, 27.5, 40, 52.5, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 27.5 / 40 / 52.5 / 65',
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
          {
            effectType: 'Damage',
            name: 'Bonus Armor per Champion Hit:',
            raw: '15 / 17.5 / 20 / 22.5 / 25 (+ 10% bonus AD)',
            damagetype: 'None',
            values: [15, 17.5, 20, 22.5, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17.5 / 20 / 22.5 / 25',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 10% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'proc',
    spellshield: 'Special',
    notes:
      '* <b>Jax</b> can move during <i>Grandmaster-At-Arms\' </i> cast time.\n<ul><li>The <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> can be <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Counter Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Counter_Strike" title="dodged"><img alt="dodged" src="/wiki/images/Jax_Counter_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Counter_Strike" title="Jax/LoL">dodged</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Spirit\'s Refuge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="blocked"><img alt="blocked" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Shen/LoL">blocked</a></span></span> but it cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">miss</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block the bonus damage from the third attack if it is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Empower" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Empower" title="empowered"><img alt="empowered" src="/wiki/images/Jax_Empower.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Empower" title="Jax/LoL">empowered</a></span></span>.</li>\n<li>The empowered attack will trigger but not be consumed nor apply its effects against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li>Stacks will still be generated when attacking them.</li></ul></li>\n<li class="mw-empty-elt"></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
