// This file is auto-generated on Wed, 10 Apr 2024 12:27:02 -0400.

import { SkillGenData } from '@/api/DataTypes';

// prettier-ignore
export type SkillName = 'Love Tap' | 'Double Up' | 'Strut' | 'Strut' | 'Bullet Time';

export const Skills = {
  'Love Tap': {
    name: 'Love Tap',
    displayName: '',
    champion: 'Miss Fortune',
    skill: 'I',
    range: '',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius: '',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: '',
    cost: [0.0],
    costtype: '',
    static: '',
    cooldown: [0.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Love Tap.png',
        blurb:
          '<span class="template_sbc"><b>Innate:</b></span> <span style="display:inline;white-space:pre;" data-param="" data-game="lol" data-champion="Miss Fortune" class="inline-image label-after champion-icon" data-skin="Original"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Miss Fortune\'s" href="/wiki/Miss_Fortune/LoL"><img decoding="async" height="20" loading="lazy" class="thumbborder lazyload" data-image-name="Miss Fortune OriginalSquare.png" alt="Miss Fortune\'s" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" data-image-key="Miss_Fortune_OriginalSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Miss_Fortune_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20221122021718"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune/LoL">Miss Fortune\'s</a></span></span> basic attacks apply a mark that expires when attacking a new enemy. If the enemy was unmarked, this also deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        description:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Miss Fortune\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to apply a mark that expires upon attacking a new enemy. If the enemy was unmarked, this also deals <span style="color:orange; white-space:normal"><span data-displayformula="50% + 10% every 3 levels up to 7, then + 10% every 2 levels up to 13" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_values="1;4;7;9;11;13" class="pp-tooltip" data-bot_values="50;60;70;80;90;100" data-bot_key="%">50% − 100% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, halved to <span style="color:orange; white-space:normal"><span style="position:relative; border-bottom:1px dotted; cursor:help;" class="pp-tooltip" data-bot_values="25;30;35;40;45;50" data-displayformula="25% + 5% every 3 levels up to 7, then + 5% every 2 levels up to 13" data-top_values="1;4;7;9;11;13" data-bot_key="%">25% − 50% (based on level)</span> AD</span> against <span class="glossary" style="white-space:pre; position:relative;" data-tip="Minion" data-game="lol"><a title="Minion (League of Legends)" href="/wiki/Minion_(League_of_Legends)"><img class="lazyload" data-image-key="Minion_icon.png" width="20" data-relevant="0" data-image-name="Minion icon.png" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" alt="Minion icon" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/30/Minion_icon.png/revision/latest/scale-to-width-down/20?cb=20180701050249"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        leveling: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    spellshield: '',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* With <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-game="lol" data-param="" data-item="Runaan\'s Hurricane"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f5/Runaan%27s_Hurricane_item.png/revision/latest/scale-to-width-down/20?cb=20201027214148" class="thumbborder lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-name="Runaan\'s Hurricane item.png" height="20" alt="Runaan\'s Hurricane" width="20" data-image-key="Runaan%27s_Hurricane_item.png" data-relevant="0"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>, <i>Love Tap</i> only applies to the primary target.\n<ul><li>The bonus damage applies <span style="white-space:nowrap"><a title="Life steal" href="/wiki/Life_steal"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Life_steal_icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/76/Life_steal_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203537" alt="Life steal icon" class="lazyload" data-image-name="Life steal icon.png" decoding="async" width="15" loading="lazy" height="15"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.</li>\n<li>The empowered attack will not trigger against <a title="Buildings" class="mw-redirect" href="/wiki/Buildings">buildings</a>.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  'Double Up': {
    name: 'Double Up',
    displayName: '',
    champion: 'Miss Fortune',
    skill: 'Q',
    range: '',
    targetRange:
      '<span class="glossary" data-game="lol" style="white-space:pre; position:relative;" data-tip="Er"><a title="Range" href="/wiki/Range"><img data-image-key="Range_model.png" loading="lazy" decoding="async" height="20" alt="Range model" data-image-name="Range model.png" data-relevant="1" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/71/Range_model.png/revision/latest/scale-to-width-down/20?cb=20150616134216" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20"></a></span> Miss Fortune\'s <span style="white-space:nowrap"><a title="Range" href="/wiki/Range"><img data-image-key="Range_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" alt="Range icon" loading="lazy" height="15" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/13/Range_icon.png/revision/latest/scale-to-width-down/15?cb=20170715002053" class="lazyload" data-image-name="Range icon.png" decoding="async" width="15"></a>&nbsp;attack range</span>',
    attackRange: '',
    collisionRadius: '',
    effectRadius: '500',
    width: '',
    angle: '160°',
    innerRadius: '',
    tetherRadius: '',
    speed: [1400.0],
    castTime: 'Basic Attack Timer',
    cost: [43.0, 46.0, 49.0, 52.0, 55.0],
    costtype: 'Mana',
    static: '',
    cooldown: [7.0, 6.0, 5.0, 4.0, 3.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Double Up.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-skin="Original" data-champion="Miss Fortune" style="display:inline;white-space:pre;" class="inline-image label-after champion-icon" data-param="" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a title="Miss Fortune" href="/wiki/Miss_Fortune/LoL"><img alt="Miss Fortune" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" width="20" height="20" data-image-name="Miss Fortune OriginalSquare.png" data-image-key="Miss_Fortune_OriginalSquare.png" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Miss_Fortune_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20221122021718" data-relevant="0"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune/LoL">Miss Fortune</a></span></span> fires a shot at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, which then bounces to hit another enemy behind them. This applies <span data-game="lol" data-tip="On-hit" class="glossary" style="white-space:pre; position:relative;"><a title="Attack effects" href="/wiki/Attack_effects#On_Hitting"><img data-image-key="On-hit_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20" data-image-name="On-hit icon.png" class="lazyload" alt="On-hit icon" decoding="async" width="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106"></a> <a title="Attack effects" href="/wiki/Attack_effects#On_Hitting">on-hit</a></span> effects to both enemies hit.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> fires a shot at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, which then bounces to hit another enemy behind them. This applies <span data-tip="On-attack" class="glossary" style="white-space:pre; position:relative;" data-game="lol"><a title="Attack effects" href="/wiki/Attack_effects#On_Attacking">on-attack</a></span> effects to the first enemy hit, and <span class="glossary" data-game="lol" data-tip="On-hit" style="white-space:pre; position:relative;"><a title="Attack effects" href="/wiki/Attack_effects#On_Hitting"><img alt="On-hit icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" class="lazyload" data-image-name="On-hit icon.png" data-relevant="0" data-image-key="On-hit_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106" height="20" width="20" decoding="async"></a> <a title="Attack effects" href="/wiki/Attack_effects#On_Hitting">on-hit</a></span> effects to both enemies hit.',
        leveling: [
          [
            {
              name: 'Physical Damage:',
              values: [20.0, 45.0, 70.0, 95.0, 120.0, 0.0, 0.0, 0.0],
              values_html:
                '20 / 45 / 70 / 95 / 120 <span style="color:orange; white-space:normal">(+ 100% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+ 35% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          '<i>Double Up\'s</i> bounce can <span data-tip="Critically strike" class="glossary" style="white-space:pre; position:relative;" data-game="lol"><a title="Critical strike" href="/wiki/Critical_strike"><img width="20" class="lazyload" loading="lazy" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Critical strike icon.png" decoding="async" data-image-key="Critical_strike_icon.png" alt="Critical strike icon" data-relevant="1" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550"></a> <a title="Critical strike" href="/wiki/Critical_strike">critically strike</a></span>, and does so if <i>Double Up</i> kills the primary target.',
        description:
          '<i>Double Up\'s</i> bounce is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a title="Critical strike" href="/wiki/Critical_strike"><img decoding="async" data-image-key="Critical_strike_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Critical strike icon.png" loading="lazy" data-relevant="1" alt="Critical strike icon" width="20" height="20" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550"></a> <a title="Critical strike" href="/wiki/Critical_strike">critical strike</a></span> modifiers. If <i>Double Up</i> kills the primary target, the bounce will <span class="glossary" style="white-space:pre; position:relative;" data-tip="Critically strike" data-game="lol"><a href="/wiki/Critical_strike" title="Critical strike"><img width="20" alt="Critical strike icon" loading="lazy" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-name="Critical strike icon.png" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550" data-image-key="Critical_strike_icon.png" data-relevant="1"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<i>The bounce prioritizes units directly behind the primary target. A target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-tip="Sight" data-game="lol"><a href="/wiki/Sight" title="Sight"><img decoding="async" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820" data-relevant="0" alt="Sight icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" height="20" data-image-name="Sight icon.png" loading="lazy" data-image-key="Sight_icon.png"></a> <a title="Sight" href="/wiki/Sight">visible</a></span> be hit by the bounce.</i>',
        leveling: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    spellshield: 'Special',
    projectile: 'True',
    callforhelp: 'true',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* <i>Double Up</i> deals <span data-tip="Basic damage" class="glossary" style="white-space:pre; position:relative;" data-game="lol"><a title="Damage" href="/wiki/Damage"><img width="20" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/Basic_Attack.png/revision/latest/scale-to-width-down/20?cb=20200517010633" class="lazyload" decoding="async" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" alt="Basic Attack" data-image-key="Basic_Attack.png" data-image-name="Basic Attack.png"></a> <a title="Damage" href="/wiki/Damage">basic damage</a></span> to both targets, but also triggers spell effects by dealing an additional 0 <span data-tip="Spell damage" class="glossary" style="white-space:pre; position:relative;" data-game="lol"><a title="Damage" href="/wiki/Damage"><img loading="lazy" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Annie_Disintegrate.png/revision/latest/scale-to-width-down/20?cb=20130929122652" class="lazyload" data-image-key="Annie_Disintegrate.png" decoding="async" data-image-name="Annie Disintegrate.png" width="20" alt="Disintegrate" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.\n<ul><li><span data-tip="Spell shield" style="white-space:pre; position:relative;" data-game="lol" class="glossary"><a href="/wiki/Spell_shield" title="Spell shield"><img data-image-key="Sivir_Spell_Shield.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Sivir_Spell_Shield.png/revision/latest/scale-to-width-down/20?cb=20170818194532" loading="lazy" width="20" data-relevant="0" data-image-name="Sivir Spell Shield.png" decoding="async" alt="Spell Shield" class="lazyload"></a> <a title="Spell shield" href="/wiki/Spell_shield">Spell shields</a></span> can be used by either target. If it is on the primary target, the spell shield will not prevent the shot from bouncing.</li>\n<li>Neutral units count as valid targets to bounce.</li>\n<li>The bounce follows a priority order on targets behind in a certain angle:\n<ol><li>500 units in 20º.</li>\n<li>500 units in 40º.</li>\n<li>500 units in 110º.</li>\n<li><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">150 units</span> in 160º.</li></ol></li>\n<li><i>Double Up\'s</i> cast range adjusts based on <b>Miss Fortune\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img width="15" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/13/Range_icon.png/revision/latest/scale-to-width-down/15?cb=20170715002053" alt="Range icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-key="Range_icon.png" class="lazyload" data-image-name="Range icon.png" decoding="async" height="15"></a>&nbsp;attack range</span>, which can be increased by items such as <span style="display:inline;white-space:pre;" class="inline-image label-after item-icon" data-param="" data-item="Rapid Firecannon" data-game="lol"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img data-relevant="0" class="thumbborder lazyload" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/92/Rapid_Firecannon_item.png/revision/latest/scale-to-width-down/20?cb=20211001052608" alt="Rapid Firecannon" width="20" data-image-name="Rapid Firecannon item.png" data-image-key="Rapid_Firecannon_item.png" loading="lazy" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span style="white-space:normal;"><a title="Rapid Firecannon" href="/wiki/Rapid_Firecannon">Rapid Firecannon</a></span></span>.</li>\n<li>The damage of a <span data-game="lol" data-tip="Critical strike" style="white-space:pre; position:relative;" class="glossary"><a href="/wiki/Critical_strike" title="Critical strike"><img height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" alt="Critical strike icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550" decoding="async" data-relevant="1" data-image-key="Critical_strike_icon.png" width="20" data-image-name="Critical strike icon.png" loading="lazy"></a> <a title="Critical strike" href="/wiki/Critical_strike">critically striking</a></span> shot is 35 / 70 / 105 / 140 / 175 <span style="color:orange; white-space:normal">(+ 175% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+ 61.25% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased to 42 / 84 / 126 / 168 / 210 <span style="color:orange; white-space:normal">(+ 210% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+ 73.5% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> by <span class="inline-image label-after item-icon" data-param="" data-game="lol" style="display:inline;white-space:pre;" data-item="Infinity Edge"><span class="border" data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Infinity_Edge" title="Infinity Edge\'s"><img height="20" width="20" decoding="async" class="thumbborder lazyload" alt="Infinity Edge\'s" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/15/Infinity_Edge_item.png/revision/latest/scale-to-width-down/20?cb=20201104234931" data-image-key="Infinity_Edge_item.png" loading="lazy" data-image-name="Infinity Edge item.png"></a></span> <span style="white-space:normal;"><a title="Infinity Edge" href="/wiki/Infinity_Edge">Infinity Edge\'s</a></span></span> bonus critical damage.</li>\n<li>If there is no secondary target, the shot will not bounce and the dud will instead fall to the ground.\n<ul><li>The dud lands on the ground 176 units behind the primary target and has a missile speed of 400 on its way there.</li></ul></li></ul>\n<ul><li>If the target becomes <span class="glossary" data-tip="Untargetable" data-game="lol" style="white-space:pre; position:relative;"><a href="/wiki/Untargetable" title="Untargetable"><img decoding="async" class="lazyload" loading="lazy" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Untargetable_icon.png/revision/latest/scale-to-width-down/20?cb=20220206063243" alt="Untargetable icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" data-image-name="Untargetable icon.png" data-image-key="Untargetable_icon.png" width="20"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a title="Death" href="/wiki/Death"><img height="20" width="20" data-image-key="Death.png" data-image-name="Death.png" data-relevant="0" alt="Death" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c3/Death.png/revision/latest/scale-to-width-down/20?cb=20200415031113" loading="lazy" class="lazyload"></a> <a title="Death" href="/wiki/Death">dies</a></span>, or is too far away or no longer in <span data-game="lol" data-tip="Sight" class="glossary" style="white-space:pre; position:relative;"><a href="/wiki/Sight" title="Sight"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820" data-image-name="Sight icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Sight icon" data-image-key="Sight_icon.png" height="20" class="lazyload" loading="lazy" width="20" decoding="async" data-relevant="0"></a> <a title="Sight" href="/wiki/Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a title="Cooldown" href="/wiki/Cooldown"><img loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" height="15" width="15" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" data-image-key="Cooldown_icon.png" class="lazyload" data-image-name="Cooldown icon.png" alt="Cooldown icon" decoding="async"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  Strut: {
    name: 'Strut',
    displayName: '',
    champion: 'Miss Fortune',
    skill: 'W',
    range: '',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius: '',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: 'none',
    cost: [45.0],
    costtype: 'Mana',
    static: '',
    cooldown: [12.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Strut.png',
        blurb:
          '<span class="template_sbc"><b>Passive:</b></span> <span data-skin="Original" style="display:inline;white-space:pre;" data-param="" data-champion="Miss Fortune" data-game="lol" class="inline-image label-after champion-icon"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune"><img data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" height="20" alt="Miss Fortune" loading="lazy" data-image-key="Miss_Fortune_OriginalSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Miss_Fortune_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20221122021718" decoding="async" width="20" data-image-name="Miss Fortune OriginalSquare.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune/LoL">Miss Fortune</a></span></span> gains <span style="white-space:nowrap"><a title="Movement speed" href="/wiki/Movement_speed"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" height="15" loading="lazy" data-relevant="0" decoding="async" width="15" data-image-key="Movement_speed_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Movement speed icon" data-image-name="Movement speed icon.png" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> after a few seconds without being attacked. This bonus is increased after another few seconds, and is granted instantly whenever <i>Strut</i> is cast.',
        description:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a title="Movement speed" href="/wiki/Movement_speed"><img width="15" height="15" class="lazyload" data-image-key="Movement_speed_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Movement speed icon" loading="lazy" data-relevant="0" data-image-name="Movement speed icon.png"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25 <b>bonus</b> movement speed</span></span> after 5 seconds without taking non-<span data-game="lol" class="glossary" style="white-space:pre; position:relative;" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/aa/Brand_Blaze.png/revision/latest/scale-to-width-down/20?cb=20160420084402" height="20" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Brand Blaze.png" class="lazyload" loading="lazy" data-image-key="Brand_Blaze.png" data-relevant="0" alt="Blaze"></a> <a href="/wiki/Damage" title="Damage">persistent</a></span> damage. This bonus is increased after another 5 seconds, and is granted instantly whenever <i>Strut</i> is cast or upon <a href="/wiki/Death" title="Death">respawning</a>.',
        leveling: [
          [
            {
              name: 'Increased Bonus Movement Speed:',
              values: [55.0, 65.0, 75.0, 85.0, 95.0],
              values_html: '55 / 65 / 75 / 85 / 95',
            },
          ],
        ],
      },
      {
        icon: 'Guns Blazing.png',
        blurb:
          'Marking a new target with <i><span style="display:inline;white-space:pre;" data-param="" data-game="lol" data-ability="Love Tap" class="inline-image label-after ability-icon" data-champion="Miss Fortune"><span data-width="20" style="display:inline-block;position:relative;" class="border"><a title="Love Tap" href="/wiki/Miss_Fortune/LoL#Love_Tap"><img loading="lazy" data-image-name="Miss Fortune Love Tap.png" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/99/Miss_Fortune_Love_Tap.png/revision/latest/scale-to-width-down/20?cb=20170628190734" alt="Love Tap" width="20" height="20" class="thumbborder lazyload" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Miss_Fortune_Love_Tap.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Miss Fortune/LoL">Love Tap</a></span></span></i> reduces <i>Strut\'s</i> cooldown.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" decoding="async" data-relevant="0" loading="lazy" width="15" data-image-name="Attack speed icon.png" class="lazyload" height="15" alt="Attack speed icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Attack_speed_icon.png"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 4 seconds.',
        leveling: [
          [
            {
              name: 'Bonus Attack Speed:',
              values: [40.0, 55.0, 70.0, 85.0, 0.0],
              values_html: '40 / 55 / 70 / 85 / 100%',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img data-image-key="Attack_speed_icon.png" loading="lazy" data-relevant="0" class="lazyload" alt="Attack speed icon" data-image-name="Attack speed icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="15" decoding="async" width="15" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
        description:
          'Marking a new target with <i><span style="display:inline;white-space:pre;" data-ability="Love Tap" class="inline-image label-after ability-icon" data-champion="Miss Fortune" data-param="" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Love Tap"><img data-image-key="Miss_Fortune_Love_Tap.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" decoding="async" alt="Love Tap" width="20" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/99/Miss_Fortune_Love_Tap.png/revision/latest/scale-to-width-down/20?cb=20170628190734" data-image-name="Miss Fortune Love Tap.png" loading="lazy"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Miss Fortune/LoL">Love Tap</a></span></span></i> reduces <i>Strut\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon" class="lazyload" loading="lazy" data-image-key="Cooldown_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" height="15" data-image-name="Cooldown icon.png" width="15" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027"></a>&nbsp;<b>current</b> cooldown</span> by <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">2 seconds</span>.',
        leveling: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: '',
    spelleffects: '',
    spellshield: '',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes: '* No additional notes.',
    flavortext: '',
    flavorsound: '',
  },
  Strut: {
    name: 'Strut',
    displayName: '',
    champion: 'Miss Fortune',
    skill: 'W',
    range: '',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius: '',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: 'none',
    cost: [45.0],
    costtype: 'Mana',
    static: '',
    cooldown: [12.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Strut.png',
        blurb:
          '<span class="template_sbc"><b>Passive:</b></span> <span data-param="" class="inline-image label-after champion-icon" data-champion="Miss Fortune" style="display:inline;white-space:pre;" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune"><img class="thumbborder lazyload" data-image-key="Miss_Fortune_OriginalSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" loading="lazy" alt="Miss Fortune" data-image-name="Miss Fortune OriginalSquare.png" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Miss_Fortune_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20221122021718" decoding="async" height="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL" title="Miss Fortune/LoL">Miss Fortune</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img decoding="async" height="15" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Movement_speed_icon.png" data-image-name="Movement speed icon.png" data-relevant="0" loading="lazy" width="15" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" alt="Movement speed icon"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> after a few seconds without being attacked. This bonus is increased after another few seconds, and is granted instantly whenever <i>Strut</i> is cast.',
        description:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img data-relevant="0" alt="Movement speed icon" data-image-name="Movement speed icon.png" height="15" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" class="lazyload" decoding="async" loading="lazy" width="15" data-image-key="Movement_speed_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25 <b>bonus</b> movement speed</span></span> after 5 seconds without taking non-<span class="glossary" data-game="lol" style="white-space:pre; position:relative;" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/aa/Brand_Blaze.png/revision/latest/scale-to-width-down/20?cb=20160420084402" data-image-name="Brand Blaze.png" class="lazyload" decoding="async" loading="lazy" width="20" alt="Blaze" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Brand_Blaze.png" data-relevant="0"></a> <a title="Damage" href="/wiki/Damage">persistent</a></span> damage. This bonus is increased after another 5 seconds, and is granted instantly whenever <i>Strut</i> is cast or upon <a href="/wiki/Death" title="Death">respawning</a>.',
        leveling: [
          [
            {
              name: 'Increased Bonus Movement Speed:',
              values: [55.0, 65.0, 75.0, 85.0, 95.0],
              values_html: '55 / 65 / 75 / 85 / 95',
            },
          ],
        ],
      },
      {
        icon: 'Guns Blazing.png',
        blurb:
          'Marking a new target with <i><span data-champion="Miss Fortune" data-param="" data-ability="Love Tap" data-game="lol" class="inline-image label-after ability-icon" style="display:inline;white-space:pre;"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Love Tap"><img data-relevant="0" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/99/Miss_Fortune_Love_Tap.png/revision/latest/scale-to-width-down/20?cb=20170628190734" class="thumbborder lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" data-image-name="Miss Fortune Love Tap.png" decoding="async" loading="lazy" alt="Love Tap" data-image-key="Miss_Fortune_Love_Tap.png"></a></span> <span style="white-space:normal;"><a title="Miss Fortune/LoL" href="/wiki/Miss_Fortune/LoL#Love_Tap">Love Tap</a></span></span></i> reduces <i>Strut\'s</i> cooldown.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img height="15" data-image-name="Attack speed icon.png" data-image-key="Attack_speed_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" alt="Attack speed icon" data-relevant="0" width="15" loading="lazy" class="lazyload" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 4 seconds.',
        leveling: [
          [
            {
              name: 'Bonus Attack Speed:',
              values: [40.0, 55.0, 70.0, 85.0, 0.0],
              values_html: '40 / 55 / 70 / 85 / 100%',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> gains <span style="white-space:nowrap"><a title="Attack speed" href="/wiki/Attack_speed"><img data-image-name="Attack speed icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" loading="lazy" class="lazyload" alt="Attack speed icon" width="15" data-relevant="0" data-image-key="Attack_speed_icon.png" height="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
        description:
          'Marking a new target with <i><span data-champion="Miss Fortune" data-game="lol" style="display:inline;white-space:pre;" data-param="" data-ability="Love Tap" class="inline-image label-after ability-icon"><span data-width="20" style="display:inline-block;position:relative;" class="border"><a title="Love Tap" href="/wiki/Miss_Fortune/LoL#Love_Tap"><img data-image-name="Miss Fortune Love Tap.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/99/Miss_Fortune_Love_Tap.png/revision/latest/scale-to-width-down/20?cb=20170628190734" data-image-key="Miss_Fortune_Love_Tap.png" data-relevant="0" class="thumbborder lazyload" loading="lazy" alt="Love Tap" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" decoding="async" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Miss_Fortune/LoL#Love_Tap" title="Miss Fortune/LoL">Love Tap</a></span></span></i> reduces <i>Strut\'s</i> <span style="white-space:nowrap"><a title="Cooldown" href="/wiki/Cooldown"><img data-image-key="Cooldown_icon.png" decoding="async" data-relevant="0" data-image-name="Cooldown icon.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="15" alt="Cooldown icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" loading="lazy" height="15"></a>&nbsp;<b>current</b> cooldown</span> by <span style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste" class="basic-tooltip">2 seconds</span>.',
        leveling: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: '',
    spelleffects: '',
    spellshield: '',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes: '* No additional notes.',
    flavortext: '',
    flavorsound: '',
  },
  'Bullet Time': {
    name: 'Bullet Time',
    displayName: '',
    champion: 'Miss Fortune',
    skill: 'R',
    range: '',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span class="basic-tooltip" title="range of each bullet stream" style="border-bottom:1px dotted gray;cursor:help;">1450</span>',
    width:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="width of each bullet stream">40</span>',
    angle:
      '<span style="border-bottom:1px dotted gray;cursor:help;" title="The effective angle is wider based the width of the missile streams + enemy size" class="basic-tooltip">30°</span>',
    innerRadius: '',
    tetherRadius: '',
    speed: [2000.0],
    castTime: 'none',
    cost: [100.0],
    costtype: 'Mana',
    static: '',
    cooldown: [120.0, 115.0, 110.0, 105.0, 100.0],
    cdstart: 'on-cast',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Bullet Time.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> <span data-game="lol" class="glossary" style="white-space:pre; position:relative;" data-tip="Channel"><a title="Channel" href="/wiki/Channel"><img data-image-name="Channeling icon.png" class="lazyload" height="20" data-image-key="Channeling_icon.png" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" data-relevant="0" decoding="async" alt="Channeling icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Channeling_icon.png/revision/latest/scale-to-width-down/20?cb=20180628192319"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a short time, firing several waves of bullets in the target direction that deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Each wave can <span data-tip="Critically strike" style="white-space:pre; position:relative;" class="glossary" data-game="lol"><a href="/wiki/Critical_strike" title="Critical strike"><img width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550" decoding="async" data-image-name="Critical strike icon.png" loading="lazy" height="20" class="lazyload" data-image-key="Critical_strike_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Critical strike icon" data-relevant="1"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Miss Fortune</b> <span data-game="lol" style="white-space:pre; position:relative;" data-tip="Channel" class="glossary"><a href="/wiki/Channel" title="Channel"><img height="20" alt="Channeling icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Channeling icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Channeling_icon.png/revision/latest/scale-to-width-down/20?cb=20180628192319" data-image-key="Channeling_icon.png" decoding="async" class="lazyload" loading="lazy" width="20"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 3 seconds, firing a number of waves of bullets in the target direction. Each wave is in a spread of 6 projectiles that deals <span style="color:orange; white-space:normal">75% AD</span> <span style="color: #7A6DFF; white-space:normal">(+ 25% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        leveling: [
          [
            {
              name: 'Total Waves:',
              values: [14.0, 15.0, 16.0, 17.0, 18.0],
              values_html: '14 / 15 / 16 / 17 / 18',
            },
            {
              name: 'Maximum Total Physical Damage:',
              values: [
                1050.0, 1125.0, 1200.0, 1275.0, 0.0, 0.0, 0.0, 375.0, 400.0,
                425.0, 0.0,
              ],
              values_html:
                '<span style="color:orange; white-space:normal">1050 / 1125 / 1200 / 1275 / 1350% AD</span> <span style="color: #7A6DFF; white-space:normal">(+ 350 / 375 / 400 / 425 / 450% AP)</span>',
            },
          ],
          [
            {
              name: 'Wave Interval Time:',
              values: [
                0.0, 2036.0, 0.0, 0.0, 19.0, 0.0, 0.0, 1781.0, 0.0, 0.0, 1676.0,
                0.0, 0.0, 1583.0,
              ],
              values_html:
                '0.<small>2036</small> / 0.<small>19</small> / 0.<small>1781</small> / 0.<small>1676</small> / 0.<small>1583</small>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb: '',
        description:
          'Each of the waves can <span style="white-space:pre; position:relative;" class="glossary" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img loading="lazy" decoding="async" alt="Critical strike icon" width="20" data-relevant="1" data-image-name="Critical strike icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Critical_strike_icon.png/revision/latest/scale-to-width-down/20?cb=20191126102550" height="20" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Critical_strike_icon.png"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(20%&nbsp;+&nbsp;<span data-game="lol" class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="10%" href="/wiki/Infinity_Edge"><img data-image-key="Infinity_Edge_item.png" width="20" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20" data-image-name="Infinity Edge item.png" data-relevant="0" alt="10%" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/15/Infinity_Edge_item.png/revision/latest/scale-to-width-down/20?cb=20201104234931"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">10%</a></span></span>) <b>bonus</b> physical damage</span>.',
        leveling: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'aoedot',
    spellshield: 'False',
    projectile: 'True',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: 'true',
    additional: '',
    notes:
      '* The damage dealt by each wave of <i>Bullet Time</i> is calculated when the wave reaches the target.\n<ul><li><b>Miss Fortune</b> <span class="glossary" style="white-space:pre; position:relative;" data-tip="Sight" data-game="lol"><a href="/wiki/Sight" title="Sight"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Sight icon.png" data-image-key="Sight_icon.png" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820" height="20" decoding="async" alt="Sight icon" data-relevant="0" class="lazyload" width="20"></a> <a title="Sight" href="/wiki/Sight">reveals</a></span> herself for 4.<small>5</small> seconds if there is an enemy champion within the area.</li>\n<li>Targets cannot be damaged by more than one projectile per wave.</li>\n<li>The bullet streams that each fire 1 projectile per wave are spead by 6° between one another, aiming towards the angles +-3/9/15° from <b>Miss Fortune\'s</b> facing direction.</li>\n<li><i>Bullet time</i> picks 6 locations on the ground 500 units from <b>Miss Fortune</b> (with the aforementioned angles) and fires a bullet stream towards each.\n<ul><li>If <b>Miss Fortune</b> is moved to a new location, these locations <b>will</b> update (since patch <a title="V13.3" href="/wiki/V13.3">V13.3</a>); the cone will fire towards her new facing direction.</li></ul></li>\n<li><i>Bullet time</i> fires the first wave at <span title="0.05 seconds, but rounded up to the next game tick." style="border-bottom:1px dotted gray;cursor:help;" class="basic-tooltip">0.<small>066</small> seconds</span>, and the last at <span title="2.9 seconds, but rounded up to the next game tick." style="border-bottom:1px dotted gray;cursor:help;" class="basic-tooltip">2.<small>904</small> seconds</span>. Times between waves are equally spread between these values.\n<ul><li><b>Miss Fortune</b> may cancel the last ~0.<small>1</small> seconds of channel time at no loss of effect.</li></ul></li>\n<li>The following table refers for interactions while <b>Miss Fortune</b> is <span class="glossary" data-game="lol" data-tip="Channel" style="white-space:pre; position:relative;"><a title="Channel" href="/wiki/Channel"><img data-image-name="Channeling icon.png" loading="lazy" decoding="async" data-relevant="0" height="20" class="lazyload" alt="Channeling icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Channeling_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Channeling_icon.png/revision/latest/scale-to-width-down/20?cb=20180628192319" width="20"></a> <a title="Channel" href="/wiki/Channel">channeling</a></span>:</li></ul>\n<table style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;" class="article-table">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span data-item="Shurelya\'s Battlesong" class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-game="lol"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" data-image-key="Shurelya%27s_Battlesong_item.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" decoding="async" width="20" loading="lazy" height="20" data-image-name="Shurelya\'s Battlesong item.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d4/Shurelya%27s_Battlesong_item.png/revision/latest/scale-to-width-down/20?cb=20201110202228"></a></span> <span style="white-space:normal;"><a title="Shurelya\'s Battlesong" href="/wiki/Shurelya%27s_Battlesong">Shurelya\'s Battlesong</a></span></span> <span style="display:inline;white-space:pre;" data-game="lol" data-item="Youmuu\'s Ghostblade" class="inline-image label-after item-icon" data-param=""><span class="border" data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img loading="lazy" data-relevant="0" width="20" data-image-key="Youmuu%27s_Ghostblade_item.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Youmuu%27s_Ghostblade_item.png/revision/latest/scale-to-width-down/20?cb=20201027220530" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Youmuu\'s Ghostblade" height="20" class="thumbborder lazyload" data-image-name="Youmuu\'s Ghostblade item.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span style="display:inline;white-space:pre;" data-param="" class="inline-image label-after item-icon" data-game="lol" data-item="Randuin\'s Omen"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img data-relevant="0" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/08/Randuin%27s_Omen_item.png/revision/latest/scale-to-width-down/20?cb=20201027213705" data-image-name="Randuin\'s Omen item.png" loading="lazy" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Randuin\'s Omen" decoding="async" class="thumbborder lazyload" data-image-key="Randuin%27s_Omen_item.png"></a></span> <span style="white-space:normal;"><a title="Randuin\'s Omen" href="/wiki/Randuin%27s_Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" data-item="Hextech Rocketbelt" data-game="lol" style="display:inline;white-space:pre;" data-param=""><span data-width="20" style="display:inline-block;position:relative;" class="border"><a title="Hextech Rocketbelt" href="/wiki/Hextech_Rocketbelt"><img data-image-key="Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" alt="Hextech Rocketbelt" height="20" class="thumbborder lazyload" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8c/Hextech_Rocketbelt_item.png/revision/latest/scale-to-width-down/20?cb=20201118204847" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Hextech Rocketbelt item.png"></a></span> <span style="white-space:normal;"><a title="Hextech Rocketbelt" href="/wiki/Hextech_Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-game="lol" data-spell="Barrier"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" loading="lazy" class="thumbborder lazyload" data-image-name="Barrier.png" height="20" decoding="async" width="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cc/Barrier.png/revision/latest/scale-to-width-down/20?cb=20180514002510" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Barrier.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span data-spell="Clarity" class="inline-image label-after spell-icon" data-game="lol" data-param="" style="display:inline;white-space:pre;"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img data-image-name="Clarity.png" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d7/Clarity.png/revision/latest/scale-to-width-down/20?cb=20180514002750" width="20" decoding="async" data-image-key="Clarity.png" data-relevant="0" alt="Clarity" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span data-param="" class="inline-image label-after spell-icon" data-spell="Cleanse" data-game="lol" style="display:inline;white-space:pre;"><span data-width="20" style="display:inline-block;position:relative;" class="border icon-20"><a href="/wiki/Cleanse" title="Cleanse"><img width="20" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Cleanse.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/95/Cleanse.png/revision/latest/scale-to-width-down/20?cb=20180514002812" decoding="async" alt="Cleanse" height="20" class="thumbborder lazyload" data-relevant="0" data-image-name="Cleanse.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-game="lol" data-param="" data-spell="Exhaust"><span class="border icon-20" data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Exhaust" title="Exhaust"><img loading="lazy" width="20" height="20" alt="Exhaust" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Exhaust.png" decoding="async" class="thumbborder lazyload" data-image-key="Exhaust.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/4a/Exhaust.png/revision/latest/scale-to-width-down/20?cb=20180514003128"></a></span> <span style="white-space:normal;"><a title="Exhaust" href="/wiki/Exhaust">Exhaust</a></span></span> <span style="display:inline;white-space:pre;" data-spell="Ghost" class="inline-image label-after spell-icon" data-param="" data-game="lol"><span style="display:inline-block;position:relative;" class="border icon-20" data-width="20"><a title="Ghost" href="/wiki/Ghost"><img data-image-name="Ghost.png" data-image-key="Ghost.png" width="20" decoding="async" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/20?cb=20180514003209" alt="Ghost" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" loading="lazy"></a></span> <span style="white-space:normal;"><a title="Ghost" href="/wiki/Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20" class="border icon-20"><a href="/wiki/Heal" title="Heal"><img width="20" alt="Heal" decoding="async" class="thumbborder lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-key="Heal.png" height="20" data-image-name="Heal.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/6e/Heal.png/revision/latest/scale-to-width-down/20?cb=20180514003319"></a></span> <span style="white-space:normal;"><a title="Heal" href="/wiki/Heal">Heal</a></span></span> <span data-game="lol" data-spell="Ignite" class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20" class="border icon-20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" data-image-key="Ignite.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Ignite.png/revision/latest/scale-to-width-down/20?cb=20180514003345" height="20" data-image-name="Ignite.png" loading="lazy" data-relevant="0" decoding="async" width="20"></a></span> <span style="white-space:normal;"><a title="Ignite" href="/wiki/Ignite">Ignite</a></span></span> <span data-param="" style="display:inline;white-space:pre;" data-game="lol" data-spell="Smite" class="inline-image label-after spell-icon"><span class="border icon-20" data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Smite" title="Smite"><img loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Smite.png" data-relevant="0" decoding="async" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/05/Smite.png/revision/latest/scale-to-width-down/20?cb=20180514003641" alt="Smite" data-image-key="Smite.png" width="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a title="Smite" href="/wiki/Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span data-spell="Flash" class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20" class="border icon-20"><a href="/wiki/Flash" title="Flash"><img decoding="async" loading="lazy" data-relevant="0" width="20" class="thumbborder lazyload" data-image-key="Flash.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149" data-image-name="Flash.png" alt="Flash" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span style="white-space:normal;"><a title="Flash" href="/wiki/Flash">Flash</a></span></span> <span data-spell="Teleport" class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-game="lol"><span style="display:inline-block;position:relative;" class="border icon-20" data-width="20"><a title="Teleport" href="/wiki/Teleport"><img alt="Teleport" width="20" class="thumbborder lazyload" data-image-name="Teleport.png" decoding="async" data-image-key="Teleport.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Teleport.png/revision/latest/scale-to-width-down/20?cb=20180514003653" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" loading="lazy" data-relevant="0"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span data-param="" class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-spell="Recall" data-game="lol"><span style="display:inline-block;position:relative;" class="border icon-20" data-width="20"><a href="/wiki/Recall" title="Recall"><img width="20" data-image-name="Recall.png" alt="Recall" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Recall.png" loading="lazy" height="20" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/43/Recall.png/revision/latest/scale-to-width-down/20?cb=20171227214733" decoding="async" data-relevant="0"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" data-param="" data-spell="Hexflash" data-game="lol" style="display:inline;white-space:pre;"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img data-image-name="Hexflash.png" alt="Hexflash" width="20" loading="lazy" class="thumbborder lazyload" height="20" data-relevant="0" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/76/Hexflash.png/revision/latest/scale-to-width-down/20?cb=20180514003331" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Hexflash.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><img data-image-name="Silence icon.png" data-image-key="Silence_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223938" class="lazyload" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" width="20" alt="Silence icon" decoding="async" height="20"> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavortext: '',
    flavorsound: '',
  },
} satisfies { [n in SkillName]: SkillGenData };
