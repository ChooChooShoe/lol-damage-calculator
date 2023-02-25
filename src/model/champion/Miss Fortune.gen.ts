import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Miss Fortune';

export default {
  'Love Tap': {
    name: 'Love Tap',
    display_name: 'Love Tap',
    champion: 'Miss Fortune',
    skill: 'I',
    image: {
      full: 'MissFortune_W.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Miss Fortune" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune\'s"><img alt="Miss Fortune\'s" src="/wiki/images/Miss_Fortune_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune/LoL">Miss Fortune\'s</a></span></span> basic attacks apply a mark that expires when attacking a new enemy. If the enemy was unmarked, this also deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Love Tap.png',
        description:
          "Innate: Miss Fortune's basic attacks are empowered to apply a mark that expires upon attacking a new enemy. If the enemy was unmarked, this also deals 50% − 100% (based on level) AD bonus physical damage, halved to 25% − 50% (based on level) AD against  minions.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Miss Fortune\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to apply a mark that expires upon attacking a new enemy. If the enemy was unmarked, this also deals <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="50% +&nbsp;10% every 3 levels up to 7, then +&nbsp;10% every 2 levels up to 13" data-bot_values="50;60;70;80;90;100" data-top_values="1;4;7;9;11;13" data-bot_key="%">50% − 100% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, halved to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="25% +&nbsp;5% every 3 levels up to 7, then +&nbsp;5% every 2 levels up to 13" data-bot_values="25;30;35;40;45;50" data-top_values="1;4;7;9;11;13" data-bot_key="%">25% − 50% (based on level)</span> AD</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If the enemy was unmarked, this also deals 50% − 100% (based on level) AD bonus physical damage, halved to 25% − 50% (based on level) AD against  minions.',
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'AD bonus physical damage, halved to 25% − 50%',
            pre: 'If the enemy was unmarked, this also deals 50% − 100%',
            post: 'AD bonus physical damage, halved to 25% − 50%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    notes:
      '* With <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>, <i>Love Tap</i> only applies to the primary target.\n<ul><li>The bonus damage applies <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Buildings" class="mw-redirect" title="Buildings">buildings</a>.</li></ul>',
  },
  'Double Up': {
    name: 'Double Up',
    display_name: 'Double Up',
    champion: 'Miss Fortune',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'MissFortuneRicochetShot.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: "Miss Fortune's  attack range",
    effect_radius: '500',
    angle: '160°',
    speed: '1400',
    cast_time: 'Basic Attack Timer',
    cost: '43 / 46 / 49 / 52 / 55',
    costtype: 'Mana',
    cooldown: '7 / 6 / 5 / 4 / 3',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Miss Fortune" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune"><img alt="Miss Fortune" src="/wiki/images/Miss_Fortune_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune/LoL">Miss Fortune</a></span></span> fires a shot at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, which then bounces to hit another enemy behind them. This applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects to both enemies hit.',
      '<i>Double Up\'s</i> bounce can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, and does so if <i>Double Up</i> kills the primary target.',
    ],
    description: [
      {
        icon: '/wiki/images/Double Up.png',
        description:
          'Active: Miss Fortune fires a shot at the target enemy that deals physical damage, which then bounces to hit another enemy behind them. This applies on-attack effects to the first enemy hit, and  on-hit effects to both enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> fires a shot at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, which then bounces to hit another enemy behind them. This applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects to the first enemy hit, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects to both enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '20 / 45 / 70 / 95 / 120 (+ 100% AD) (+ 35% AP)',
            valuesHTML:
              '20 / 45 / 70 / 95 / 120 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 100% AD) (+ 35% AP)',
            damagetype: 'Physical',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
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
        description:
          "Double Up's bounce is affected by  critical strike modifiers. If Double Up kills the primary target, the bounce will  critically strike.",
        descriptionHTML:
          '<i>Double Up\'s</i> bounce is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers. If <i>Double Up</i> kills the primary target, the bounce will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The bounce prioritizes units directly behind the primary target. A target does not have to be  visible be hit by the bounce.',
        descriptionHTML:
          '<i>The bounce prioritizes units directly behind the primary target. A target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> be hit by the bounce.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    onhiteffects: 'True',
    spellshield: 'Special',
    projectile: 'True',
    callforhelp: 'true',
    notes:
      '* <i>Double Up</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> to both targets, but also triggers spell effects by dealing an additional 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> can be used by either target. If it is on the primary target, the spell shield will not prevent the shot from bouncing.</li>\n<li>Neutral units count as valid targets to bounce.</li>\n<li>The bounce follows a priority order on targets behind in a certain angle:\n<ol><li>500 units in 20º.</li>\n<li>500 units in 40º.</li>\n<li>500 units in 110º.</li>\n<li><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">150 units</span> in 160º.</li></ol></li>\n<li><i>Double Up\'s</i> cast range adjusts based on <b>Miss Fortune\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>, which can be increased by items such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span>.</li>\n<li>The damage of a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span> shot is 35 / 70 / 105 / 140 / 175 <span style="color:orange; white-space:normal">(+&nbsp;175% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;61.25% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased to 42 / 84 / 126 / 168 / 210 <span style="color:orange; white-space:normal">(+&nbsp;210% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;73.5% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge\'s"><img alt="Infinity Edge\'s" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge\'s</a></span></span> bonus critical damage.</li>\n<li>If there is no secondary target, the shot will not bounce and the dud will instead fall to the ground.\n<ul><li>The dud lands on the ground 176 units behind the primary target and has a missile speed of 400 on its way there.</li></ul></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  Strut: {
    name: 'Strut',
    display_name: 'Strut',
    champion: 'Miss Fortune',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'MissFortuneViciousStrikes.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '45',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Miss Fortune" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune"><img alt="Miss Fortune" src="/wiki/images/Miss_Fortune_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune/LoL">Miss Fortune</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> after a few seconds without being attacked. This bonus is increased after another few seconds, and is granted instantly whenever <i>Strut</i> is cast.',
      'Marking a new target with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Miss Fortune" data-ability="Love Tap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Love Tap"><img alt="Love Tap" src="/wiki/images/Miss_Fortune_Love_Tap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Miss Fortune/LoL">Love Tap</a></span></span></i> reduces <i>Strut\'s</i> cooldown.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Strut.png',
        description:
          'Passive: Miss Fortune gains  25 bonus movement speed after 5 seconds without taking non- persistent damage. This bonus is increased after another 5 seconds, and is granted instantly whenever Strut is cast or upon respawning.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25 <b>bonus</b> movement speed</span></span> after 5 seconds without taking non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent</a></span> damage. This bonus is increased after another 5 seconds, and is granted instantly whenever <i>Strut</i> is cast or upon <a href="/wiki/Death" title="Death">respawning</a>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: ' Miss Fortune gains  25 bonus movement speed after 5 seconds without taking non- persistent damage',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'Fortune gains  25 bonus movement speed after 5 seconds without taking non- persistent damage',
            pre: 'Miss Fortune gains  25 bonus movement speed after 5 seconds without taking non- persistent damage',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'This bonus is increased after another 5 seconds, and is granted instantly whenever Strut is cast or upon respawning.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'bonus is increased after another 5 seconds, and is granted instantly whenever Strut is cast or upon respawning.',
            pre: 'This bonus is increased after another 5 seconds, and is granted instantly whenever Strut is cast or upon respawning.',
          },
        ],
        leveling: [
          {
            name: 'Increased Bonus Movement Speed:',
            values: '55 / 65 / 75 / 85 / 95',
            valuesHTML: '55 / 65 / 75 / 85 / 95',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Increased Bonus Movement Speed:',
            raw: '55 / 65 / 75 / 85 / 95',
            values: [55, 65, 75, 85, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 65 / 75 / 85 / 95',
          },
        ],
      },
      {
        icon: '/wiki/images/Guns Blazing.png',
        description:
          'Active: Miss Fortune gains  bonus attack speed for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Miss Fortune gains  bonus attack speed for 4 seconds.',
            increasedStat: 'bonus_ad',
            values: 4,
            units: '',
            unitsText: 'Fortune gains  bonus attack speed for 4 seconds.',
            pre: 'Miss Fortune gains  bonus attack speed for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '40 / 55 / 70 / 85 / 100%',
            valuesHTML: '40 / 55 / 70 / 85 / 100%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 55 / 70 / 85 / 100%',
            values: [40, 55, 70, 85, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100%',
          },
        ],
      },
      {
        description:
          "Marking a new target with  Love Tap reduces Strut's  current cooldown by 2 seconds.",
        descriptionHTML:
          'Marking a new target with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Miss Fortune" data-ability="Love Tap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Love Tap"><img alt="Love Tap" src="/wiki/images/Miss_Fortune_Love_Tap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Miss Fortune/LoL">Love Tap</a></span></span></i> reduces <i>Strut\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">2 seconds</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Marking a new target with  Love Tap reduces Strut's  current cooldown by 2 seconds.",
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              "a new target with  Love Tap reduces Strut's  current cooldown by 2 seconds.",
            pre: "Marking a new target with  Love Tap reduces Strut's  current cooldown by 2 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes: '* No additional notes.',
  },
  'Make It Rain': {
    name: 'Make It Rain',
    display_name: 'Make It Rain',
    champion: 'Miss Fortune',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'MissFortuneScattershot.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    effect_radius: '200',
    cast_time: '0.<small>25</small>',
    cost: '80',
    costtype: 'Mana',
    cooldown: '18 / 17 / 16 / 15 / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> casts a storm of bullets at the target location for a short time, which continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within.',
    ],
    description: [
      {
        icon: '/wiki/images/Make It Rain.png',
        description:
          'Active: Miss Fortune casts a storm of bullets at the target location for 2 seconds, granting  sight of the area, dealing magic damage every 0.25 seconds to enemies within, and  slowing them by 40% (+ 6% per 100 AP).',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> casts a storm of bullets at the target location for 2 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to enemies within, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 40% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% per 100 AP)</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Miss Fortune casts a storm of bullets at the target location for 2 seconds, granting  sight of the area, dealing magic damage every 0.25 seconds to enemies within, and  slowing them by 40% (+ 6% per 100 AP).',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Miss Fortune casts a storm of bullets at the target location for 2 seconds, granting  sight of the area, dealing magic damage every 0.25 seconds to enemies within, and  slowing them by 40%',
            post: '.',
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
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '8.75 / 12.5 / 16.25 / 20 / 23.75 (+ 15% AP)',
            valuesHTML:
              '8.<small>75</small> / 12.<small>5</small> / 16.<small>25</small> / 20 / 23.<small>75</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '8.75 / 12.5 / 16.25 / 20 / 23.75 (+ 15% AP)',
            damagetype: 'Magic',
            values: [8.75, 12.5, 16.25, 20, 23.75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8.75 / 12.5 / 16.25 / 20 / 23.75',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
      },
      {
        description: 'Make It Rain will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Make It Rain will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes:
      '* <i>Make It Rain\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansed</a></span>.',
  },
  'Bullet Time': {
    name: 'Bullet Time',
    display_name: 'Bullet Time',
    champion: 'Miss Fortune',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'MissFortuneBulletTime.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="range of each bullet stream">1450</span>',
    width:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="width of each bullet stream">40</span>',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="The effective angle is wider based the width of the missile streams + enemy size">30°</span>',
    speed: '2000',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120 / 115 / 110 / 105 / 100</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a short time, firing several waves of bullets in the target direction that deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Each wave can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Bullet Time.png',
        description:
          'Active: Miss Fortune  channels for up to 3 seconds, firing a number of waves of bullets in the target direction. Each wave is in a spread of 6 projectiles that deals 75% AD (+ 25% AP) physical damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 3 seconds, firing a number of waves of bullets in the target direction. Each wave is in a spread of 6 projectiles that deals <span style="color:orange; white-space:normal">75% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Miss Fortune  channels for up to 3 seconds, firing a number of waves of bullets in the target direction',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Fortune  channels for up to 3 seconds, firing a number of waves of bullets in the target direction',
            pre: 'Miss Fortune  channels for up to 3 seconds, firing a number of waves of bullets in the target direction',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Each wave is in a spread of 6 projectiles that deals 75% AD (+ 25% AP) physical damage to enemies hit.',
            damagetype: 'Physical',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'physical damage to enemies hit.',
            pre: 'Each wave is in a spread of 6 projectiles that deals 75% AD',
            post: 'physical damage to enemies hit.',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Total Waves:',
            values: '14 / 15 / 16 / 17 / 18',
            valuesHTML: '14 / 15 / 16 / 17 / 18',
          },
          {
            name: 'Wave Interval Time:',
            values: '0.2036 / 0.19 / 0.1781 / 0.1676 / 0.1583',
            valuesHTML:
              '0.<small>2036</small> / 0.<small>19</small> / 0.<small>1781</small> / 0.<small>1676</small> / 0.<small>1583</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Total Waves:',
            raw: '14 / 15 / 16 / 17 / 18',
            values: [14, 15, 16, 17, 18],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '14 / 15 / 16 / 17 / 18',
          },
          {
            effectType: 'Unique',
            name: 'Wave Interval Time:',
            raw: '0.2036 / 0.19 / 0.1781 / 0.1676 / 0.1583',
            values: [0.2036, 0.19, 0.1781, 0.1676, 0.1583],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.2036 / 0.19 / 0.1781 / 0.1676 / 0.1583',
          },
        ],
      },
      {
        description:
          'Each of the waves can  critically strike for (20% +  7%) bonus physical damage.',
        descriptionHTML:
          'Each of the waves can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(20%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="7%"><img alt="7%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">7%</a></span></span>) <b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Each of the waves can  critically strike for (20% +  7%) bonus physical damage.',
            damagetype: 'Physical',
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'bonus physical damage.',
            pre: 'Each of the waves can  critically strike for',
            post: 'bonus physical damage.',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  7',
                pre: '20% +  7%',
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
    spelleffects: 'aoedot',
    spellshield: false,
    projectile: 'True',
    notes:
      '* The damage dealt by each wave of <i>Bullet Time</i> is calculated when the wave reaches the target.\n<ul><li><b>Miss Fortune</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> herself for 4.<small>5</small> seconds if there is an enemy champion within the area.</li>\n<li>Targets cannot be damaged by more than one projectile per wave.</li>\n<li>The bullet streams that each fire 1 projectile per wave are spead by 6° between one another, aiming towards the angles +-3/9/15° from <b>Miss Fortune\'s</b> facing direction.</li>\n<li><i>Bullet time</i> picks 6 locations on the ground 500 units from <b>Miss Fortune</b> (with the aforementioned angles) and fires a bullet stream towards each.\n<ul><li>If <b>Miss Fortune</b> is moved to a new location, these locations <b>will</b> update (since patch <a href="/wiki/V13.3" title="V13.3">V13.3</a>); the cone will fire towards her new facing direction.</li></ul></li>\n<li><i>Bullet time</i> fires the first wave at <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.05 seconds, but rounded up to the next game tick.">0.<small>066</small> seconds</span>, and the last at <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="2.9 seconds, but rounded up to the next game tick.">2.<small>904</small> seconds</span>. Times between waves are equally spread between these values.\n<ul><li><b>Miss Fortune</b> may cancel the last ~0.<small>1</small> seconds of channel time at no loss of effect.</li></ul></li>\n<li>The following table refers for interactions while <b>Miss Fortune</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
