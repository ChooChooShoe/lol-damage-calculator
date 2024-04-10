// This file is auto-generated on Wed, 10 Apr 2024 12:27:19 -0400.

import { SkillGenData } from '@/api/DataTypes';

// prettier-ignore
export type SkillName = 'Relentless Assault' | 'Leap Strike' | 'Empower' | 'Grandmaster-At-Arms';

export const Skills = {
  'Relentless Assault': {
    name: 'Relentless Assault',
    displayName: '',
    champion: 'Jax',
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
        icon: 'Relentless Assault.png',
        blurb:
          '<span class="template_sbc"><b>Innate:</b></span> <span data-skin="Original" class="inline-image label-after champion-icon" data-champion="Jax" data-game="lol" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20" class="border"><a title="Jax\'s" href="/wiki/Jax/LoL"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f5/Jax_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20230926225838" data-image-key="Jax_OriginalSquare.png" alt="Jax\'s" loading="lazy" decoding="async" height="20" data-relevant="0" width="20" data-image-name="Jax OriginalSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL" title="Jax/LoL">Jax\'s</a></span></span> basic attacks generate stacks, up to a cap. Stacks expire one at a time.',
        description:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Jax\'s</b> <a title="Basic attack" href="/wiki/Basic_attack">basic attacks</a> generate a <a title="Stack" href="/wiki/Stack">stack</a> of <i>Relentless Assault</i> <span class="glossary" data-tip="On-attack" style="white-space:pre; position:relative;" data-game="lol"><a title="Attack effects" href="/wiki/Attack_effects#On_Attacking">on-attack</a></span> for 2.<small>5</small> seconds, refreshing on subsequent attacks and stacking up to 8 times. Stacks expire by one every 0.<small>25</small> seconds when the duration ends.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<span class="template_sbc"><b>Relentless Assault:</b></span> For each stack, <b>Jax</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img width="15" data-image-key="Attack_speed_icon.png" alt="Attack speed icon" data-image-name="Attack speed icon.png" data-relevant="0" decoding="async" height="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" class="lazyload" loading="lazy"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" data-bot_values="3.5;5;6.5;8;9.5;11" data-top_values="1;4;7;10;13;16" data-finish="11;16" data-bot_key="%" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3.5;1">3.<small>5</small>% − 11% (based on level)</span> <b>bonus</b> attack speed</span></span>, up to a maximum of <span style="color:orangered; white-space:normal"><span data-start="28;1" data-bot_values="28;40;52;64;76;88" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_values="1;4;7;10;13;16" data-finish="88;16" class="pp-tooltip" data-bot_key="%">28% − 88% (based on level)</span></span>.',
        leveling: [],
      },
      {
        icon: 'Jax Grandmaster at Angling.png',
        blurb: '',
        description:
          '<span class="template_sbc"><b>Grandmaster at Angling:</b></span> While out-of-combat with champions and idle in the river for 10 seconds, <b>Jax</b> will occasionally catch a fish, granting him <span style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" class="inline-image label-after" data-param=""><span data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Gold" title="1 Gold"><img decoding="async" data-image-name="Gold.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/10/Gold.png/revision/latest/scale-to-width-down/20?cb=20181122055358" width="20" alt="1 Gold" height="15" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-key="Gold.png" data-relevant="0"></a></span> <span style="white-space:normal;">1</span></span> and <span style="color: #7A6DFF; white-space:normal">1 ability power</span> for 5 seconds. He catches a fish at an average rate of one every 15 seconds. He also has a 5% chance to catch a <img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Jax Grandmaster at Angling 2" width="20" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/36/Jax_Grandmaster_at_Angling_2.png/revision/latest/scale-to-width-down/20?cb=20230930115825" class="lazyload" loading="lazy" data-image-name="Jax Grandmaster at Angling 2.png" data-image-key="Jax_Grandmaster_at_Angling_2.png" data-relevant="0" decoding="async"> rare fish that grants <span data-param="" class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;"><span data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Gold" title="10 Gold"><img class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/10/Gold.png/revision/latest/scale-to-width-down/20?cb=20181122055358" data-relevant="0" data-image-name="Gold.png" height="15" decoding="async" width="20" loading="lazy" data-image-key="Gold.png" alt="10 Gold" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span style="white-space:normal;">10</span></span> and <span style="color: #7A6DFF; white-space:normal">10 ability power</span> for 5 seconds.',
        leveling: [],
      },
      {
        icon: '',
        blurb:
          '<span class="template_sbc"><b>Relentless Assault:</b></span> For each stack, <b>Jax</b> gains <span style="white-space:nowrap"><a title="Attack speed" href="/wiki/Attack_speed"><img height="15" decoding="async" data-image-name="Attack speed icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Attack_speed_icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" loading="lazy" width="15" alt="Attack speed icon" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
        description: '',
        leveling: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies, Self',
    damagetype: '',
    spelleffects: '',
    spellshield: '',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* <b>Jax</b> will start fishing while idle in the river if he is in-combat with only monsters (e.g. any of the three Epic monsters).<sup><span style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended." class="basic-tooltip">(bug)</span></sup>\n<ul><li><b>Jax</b> catching a fish is a random event and will play a special animation.</li>\n<li>The total number of fish caught during the game is displayed when fishing as <span style="display:inline;white-space:pre;" data-game="lol" class="inline-image label-after ability-icon" data-param="" data-champion="Jax" data-ability="Relentless Assault"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a href="/wiki/Jax/LoL#Relentless_Assault" title="Grandmaster at Angling"><img class="thumbborder lazyload" loading="lazy" height="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Jax_Grandmaster_at_Angling.png/revision/latest/scale-to-width-down/20?cb=20230930115827" data-image-key="Jax_Grandmaster_at_Angling.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Grandmaster at Angling" decoding="async" width="20" data-image-name="Jax Grandmaster at Angling.png"></a></span> <span style="white-space:normal;"><a title="Jax/LoL" href="/wiki/Jax/LoL#Relentless_Assault">Grandmaster at Angling</a></span></span> passive.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  'Leap Strike': {
    name: 'Leap Strike',
    displayName: '',
    champion: 'Jax',
    skill: 'Q',
    range: '',
    targetRange:
      '<span style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr" class="glossary"><a href="/wiki/Range" title="Range"><img decoding="async" width="20" data-relevant="1" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-image-key="Range_center.png" loading="lazy" data-image-name="Range center.png" alt="Range center"></a></span> 700',
    attackRange: '',
    collisionRadius: '',
    effectRadius: '',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: 'false',
    cost: [65.0],
    costtype: 'Mana',
    static: '',
    cooldown: [8.0, 7.0, 5.0, 0.0, 7.0, 6.0, 5.0, 0.0, 6.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Leap Strike.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-param="" data-champion="Jax" data-game="lol" style="display:inline;white-space:pre;" class="inline-image label-after champion-icon" data-skin="Original"><span class="border" data-width="20" style="display:inline-block;position:relative;"><a title="Jax" href="/wiki/Jax/LoL"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f5/Jax_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20230926225838" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" loading="lazy" width="20" data-image-key="Jax_OriginalSquare.png" alt="Jax" class="thumbborder lazyload" data-image-name="Jax OriginalSquare.png" height="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL" title="Jax/LoL">Jax</a></span></span> <span data-tip="Dash" class="glossary" data-game="lol" style="white-space:pre; position:relative;"><a href="/wiki/Dash" title="Dash"><img alt="Dash" data-image-name="Dash.png" decoding="async" height="20" data-image-key="Dash.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Dash.png/revision/latest/scale-to-width-down/20?cb=20180514002826" class="lazyload" width="20" loading="lazy"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target unit. If they are an enemy, he deals <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> <span style="white-space:pre; position:relative;" class="glossary" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img decoding="async" data-image-key="Dash.png" alt="Dash" data-image-name="Dash.png" loading="lazy" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Dash.png/revision/latest/scale-to-width-down/20?cb=20180514002826" class="lazyload" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target unit\'s location.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          'If the target is an enemy and they are in range upon arrival, <b>Jax</b> deals them <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        leveling: [
          [
            {
              name: 'Physical Damage:',
              values: [65.0, 105.0, 145.0, 185.0, 225.0, 0.0, 0.0, 0.0],
              values_html:
                '65 / 105 / 145 / 185 / 225 <span style="color:orange; white-space:normal">(+ 100% <b>bonus</b> AD)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<i><b>Jax</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
        leveling: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'single',
    spellshield: 'special',
    projectile: '',
    callforhelp: 'True',
    grounded: 'true',
    knockdown: 'true',
    silence: '',
    additional: '',
    notes:
      '* <i>Leap Strike</i> cannot be cast on <a title="Structures" href="/wiki/Structures" class="mw-redirect">structures</a>.\n<ul><li>If the target is an enemy champion, <b>Jax</b> will be ordered to basic attack them after the dash ends.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a title="Spell shield" href="/wiki/Spell_shield"><img data-relevant="0" class="lazyload" alt="Spell Shield" height="20" data-image-key="Sivir_Spell_Shield.png" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" data-image-name="Sivir Spell Shield.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Sivir_Spell_Shield.png/revision/latest/scale-to-width-down/20?cb=20170818194532" loading="lazy"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the damage, including when <span data-ability="Empower" class="inline-image label-after ability-icon" data-champion="Jax" data-game="lol" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Empower" title="empowered"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-image-name="Jax Empower.png" data-relevant="0" alt="empowered" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/57/Jax_Empower.png/revision/latest/scale-to-width-down/20?cb=20230929221204" class="thumbborder lazyload" data-image-key="Jax_Empower.png" decoding="async" loading="lazy" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Empower" title="Jax/LoL">empowered</a></span></span>.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  Empower: {
    name: 'Empower',
    displayName: '',
    champion: 'Jax',
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
    cost: [30.0],
    costtype: 'Mana',
    static: '',
    cooldown: [7.0, 6.0, 5.0, 4.0, 3.0],
    cdstart: 'post-effect',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Empower.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-param="" data-champion="Jax" data-skin="Original" data-game="lol" class="inline-image label-after champion-icon" style="display:inline;white-space:pre;"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a title="Jax\'s" href="/wiki/Jax/LoL"><img decoding="async" loading="lazy" class="thumbborder lazyload" data-image-name="Jax OriginalSquare.png" width="20" alt="Jax\'s" data-image-key="Jax_OriginalSquare.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f5/Jax_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20230926225838"></a></span> <span style="white-space:normal;"><a title="Jax/LoL" href="/wiki/Jax/LoL">Jax\'s</a></span></span> empowers his next basic attack or <i><span class="inline-image label-after ability-icon" data-champion="Jax" data-param="" data-game="lol" data-ability="Leap Strike" style="display:inline;white-space:pre;"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a href="/wiki/Jax/LoL#Leap_Strike" title="Leap Strike"><img loading="lazy" height="20" data-image-name="Jax Leap Strike.png" data-relevant="0" data-image-key="Jax_Leap_Strike.png" width="20" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" alt="Leap Strike" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Jax_Leap_Strike.png/revision/latest/scale-to-width-down/20?cb=20230929221423"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Leap_Strike" title="Jax/LoL">Leap Strike</a></span></span></i> against an enemy to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Leap Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Leap_Strike" title="Leap Strike"><img data-image-key="Jax_Leap_Strike.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" loading="lazy" width="20" height="20" alt="Leap Strike" class="thumbborder lazyload" data-relevant="0" data-image-name="Jax Leap Strike.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Jax_Leap_Strike.png/revision/latest/scale-to-width-down/20?cb=20230929221423"></a></span> <span style="white-space:normal;"><a title="Jax/LoL" href="/wiki/Jax/LoL#Leap_Strike">Leap Strike</a></span></span></i> against an enemy within 10 seconds to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, reduced to 50% against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>. If <i>Empower</i> is used on a basic attack, it will gain <span style="white-space:nowrap"><a title="Range" href="/wiki/Range"><img data-image-key="Range_icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/13/Range_icon.png/revision/latest/scale-to-width-down/15?cb=20170715002053" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" width="15" decoding="async" loading="lazy" alt="Range icon" height="15" data-image-name="Range icon.png"></a>&nbsp;50 <b>bonus</b> range</span> and have an <span style="white-space:pre; position:relative;" data-tip="Uncancellable windup" data-game="lol" class="glossary"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack"><img data-image-name="Vi Relentless Force 2.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/5b/Vi_Relentless_Force_2.png/revision/latest/scale-to-width-down/20?cb=20160608034953" data-relevant="0" loading="lazy" data-image-key="Vi_Relentless_Force_2.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" alt="Relentless Force 2" height="20" decoding="async" class="lazyload"></a> <a title="Basic attack" href="/wiki/Basic_attack#Uncancellable_Windup">uncancellable windup</a></span>.',
        leveling: [
          [
            {
              name: 'Bonus Magic Damage:',
              values: [50.0, 85.0, 120.0, 155.0, 190.0, 0.0],
              values_html:
                '50 / 85 / 120 / 155 / 190 <span style="color: #7A6DFF; white-space:normal">(+ 60% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<i>Empower <span data-game="lol" data-tip="Basic attack reset" class="glossary" style="white-space:pre; position:relative;"><a href="/wiki/Basic_attack#Resets" title="Basic attack"><img data-image-key="Fiora_Bladework.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Fiora_Bladework.png/revision/latest/scale-to-width-down/20?cb=20150721193304" class="lazyload" alt="Bladework" width="20" loading="lazy" height="20" data-relevant="0" decoding="async" data-image-name="Fiora Bladework.png"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Jax\'s</b> basic attack timer.</i>',
        leveling: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'spell',
    spellshield: 'true',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* The empowered attack will trigger but not be consumed nor apply its effects against <a title="Structures" href="/wiki/Structures" class="mw-redirect">structures</a>.',
    flavortext: '',
    flavorsound: '',
  },
  'Grandmaster-At-Arms': {
    name: 'Grandmaster-At-Arms',
    displayName: '',
    champion: 'Jax',
    skill: 'R',
    range: '',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr" class="glossary"><a title="Range" href="/wiki/Range"><img decoding="async" width="20" class="lazyload" alt="Range center" data-relevant="1" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" loading="lazy" height="20" data-image-name="Range center.png" data-image-key="Range_center.png"></a></span> 375',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: '0.<small>25</small>',
    cost: [100.0],
    costtype: 'mana',
    static: '',
    cooldown: [100.0, 95.0, 90.0, 85.0, 80.0],
    cdstart: 'on-cast',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'false',
        blurb:
          '<span class="template_sbc"><b>Passive:</b></span> <span data-champion="Jax" style="display:inline;white-space:pre;" class="inline-image label-after champion-icon" data-skin="Original" data-game="lol" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Jax\'s" href="/wiki/Jax/LoL"><img class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f5/Jax_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20230926225838" loading="lazy" data-image-key="Jax_OriginalSquare.png" alt="Jax\'s" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Jax OriginalSquare.png" height="20" decoding="async" data-relevant="0" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL" title="Jax/LoL">Jax\'s</a></span></span> basic attacks generate stacks. At max stacks, he consumes them to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        description:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Jax\'s</b> <a class="mw-redirect" title="Basic attacks" href="/wiki/Basic_attacks">basic attacks</a> generate a stack of <i>Grandmaster-At-Arms</i> <span style="white-space:pre; position:relative;" class="glossary" data-tip="On-hit" data-game="lol"><a title="Attack effects" href="/wiki/Attack_effects#On_Hitting"><img height="20" alt="On-hit icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="On-hit icon.png" data-image-key="On-hit_icon.png" width="20" data-relevant="0" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106" class="lazyload" loading="lazy"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for 2.<small>5</small> seconds, refreshing on subsequent hits and stacking up to 2 times. At 2 stacks, his next basic attack is empowered to consume them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, reduced to 50% against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>. While <i>Grandmaster-At-Arms</i> is active, the empowered attack triggers at 1 stack instead.',
        leveling: [
          [
            {
              name: 'Bonus Magic Damage:',
              values: [60.0, 85.0, 110.0, 135.0, 160.0, 0.0],
              values_html:
                '60 / 85 / 110 / 135 / 160 <span style="color: #7A6DFF; white-space:normal">(+ 60% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: 'Jax Grandmaster-At-Arms.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> swings his lantern around, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits a champion, he gains <b>bonus</b> resistances. He applies his passive on-hit every 2 stacks instead of every 3 while active.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jax</b> swings his lantern around, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits a champion, he gains <span style="white-space:nowrap"><a title="Armor" href="/wiki/Armor"><img alt="Armor icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Armor_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442" height="15" data-image-name="Armor icon.png" width="15" data-image-key="Armor_icon.png" class="lazyload" decoding="async" loading="lazy" data-relevant="0"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, increased for each champion hit beyond the first, and <span style="white-space:nowrap"><a title="Magic resistance" href="/wiki/Magic_resistance"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Magic_resistance_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203539" decoding="async" data-relevant="0" height="15" width="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Magic resistance icon.png" alt="Magic resistance icon" loading="lazy" data-image-key="Magic_resistance_icon.png" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> equal to 60% of that amount as well as 10% increased <a title="Size" href="/wiki/Size">size</a> for 8 seconds.',
        leveling: [
          [
            {
              name: 'Magic Damage:',
              values: [150.0, 200.0, 250.0, 300.0, 350.0, 0.0],
              values_html:
                '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+ 100% AP)</span>',
            },
          ],
          [
            {
              name: 'Bonus Armor:',
              values: [
                15.0, 27.0, 5.0, 0.0, 40.0, 52.0, 5.0, 0.0, 65.0, 0.0, 0.0, 0.0,
              ],
              values_html:
                '15 / 27.<small>5</small> / 40 / 52.<small>5</small> / 65 <span style="color:orange; white-space:normal">(+ 40% <b>bonus</b> AD)</span>',
            },
            {
              name: 'Bonus Magic Resistance:',
              values: [
                9.0, 16.0, 5.0, 0.0, 24.0, 31.0, 5.0, 0.0, 39.0, 0.0, 0.0, 0.0,
              ],
              values_html:
                '9 / 16.<small>5</small> / 24 / 31.<small>5</small> / 39 <span style="color:orange; white-space:normal">(+ 24% <b>bonus</b> AD)</span>',
            },
          ],
          [
            {
              name: 'Bonus Armor per Champion Hit:',
              values: [
                15.0, 17.0, 5.0, 0.0, 20.0, 22.0, 5.0, 0.0, 25.0, 0.0, 0.0, 0.0,
              ],
              values_html:
                '15 / 17.<small>5</small> / 20 / 22.<small>5</small> / 25 <span style="color:orange; white-space:normal">(+ 10% <b>bonus</b> AD)</span>',
            },
            {
              name: 'Bonus Magic Resistance per Champion Hit:',
              values: [
                9.0, 10.0, 5.0, 0.0, 12.0, 13.0, 5.0, 0.0, 15.0, 0.0, 0.0, 0.0,
              ],
              values_html:
                '9 / 10.<small>5</small> / 12 / 13.<small>5</small> / 15 <span style="color:orange; white-space:normal">(+ 6% <b>bonus</b> AD)</span>',
            },
          ],
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'special',
    spellshield: 'special',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* The attack bonus deals <span style="white-space:pre; position:relative;" class="glossary" data-game="lol" data-tip="Proc damage"><a title="Damage" href="/wiki/Damage"><img class="lazyload" data-image-key="Wit%27s_End_item.png" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/16/Wit%27s_End_item.png/revision/latest/scale-to-width-down/20?cb=20201027220422" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Wit\'s End item" loading="lazy" width="20" data-image-name="Wit\'s End item.png" height="20" data-relevant="0"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span>. The swing deals <span data-game="lol" class="glossary" style="white-space:pre; position:relative;" data-tip="Area damage"><a title="Damage" href="/wiki/Damage"><img class="lazyload" width="20" alt="Death Lotus" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/77/Katarina_Death_Lotus.png/revision/latest/scale-to-width-down/20?cb=20170707191154" decoding="async" data-image-key="Katarina_Death_Lotus.png" data-relevant="0" data-image-name="Katarina Death Lotus.png" height="20"></a> <a title="Damage" href="/wiki/Damage">area damage</a></span>.\n<ul><li>The bonus resistances are represented by a glowing aura around <b>Jax</b> that grows with each enemy champion hit beyond the first.</li>\n<li><b>Jax</b> can move during <i>Grandmaster-At-Arms\' </i>cast time.</li>\n<li>The <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> can be <span data-game="lol" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Counter Strike" class="inline-image label-after ability-icon"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="dodged" href="/wiki/Jax/LoL#Counter_Strike"><img decoding="async" width="20" height="20" data-relevant="0" data-image-key="Jax_Counter_Strike.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9b/Jax_Counter_Strike.png/revision/latest/scale-to-width-down/20?cb=20230929221107" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Jax Counter Strike.png" loading="lazy" alt="dodged" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Counter_Strike" title="Jax/LoL">dodged</a></span></span> and <span style="display:inline;white-space:pre;" data-param="" data-champion="Shen" class="inline-image label-after ability-icon" data-ability="Spirit\'s Refuge" data-game="lol"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="blocked"><img decoding="async" data-image-name="Shen Spirit\'s Refuge.png" alt="blocked" height="20" class="thumbborder lazyload" width="20" data-image-key="Shen_Spirit%27s_Refuge.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Shen_Spirit%27s_Refuge.png/revision/latest/scale-to-width-down/20?cb=20170217191016" loading="lazy"></a></span> <span style="white-space:normal;"><a title="Shen/LoL" href="/wiki/Shen/LoL#Spirit\'s_Refuge">blocked</a></span></span> but it cannot <span data-game="lol" data-tip="Blind" style="white-space:pre; position:relative;" class="glossary"><a title="Blind" href="/wiki/Blind"><img class="lazyload" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/81/Blind_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224954" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" decoding="async" alt="Blind icon" data-image-key="Blind_icon.png" data-image-name="Blind icon.png" width="20"></a> <a class="mw-redirect" title="Blind" href="/wiki/Blind">miss</a></span>.</li>\n<li><span data-game="lol" data-tip="Spell shield" style="white-space:pre; position:relative;" class="glossary"><a title="Spell shield" href="/wiki/Spell_shield"><img loading="lazy" height="20" data-image-name="Sivir Spell Shield.png" alt="Spell Shield" decoding="async" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" data-image-key="Sivir_Spell_Shield.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Sivir_Spell_Shield.png/revision/latest/scale-to-width-down/20?cb=20170818194532" class="lazyload"></a> <a title="Spell shield" href="/wiki/Spell_shield">Spell shield</a></span> will only block the bonus damage from the third attack if it is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Empower" data-game="lol"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Jax/LoL#Empower" title="empowered"><img width="20" class="thumbborder lazyload" alt="empowered" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/57/Jax_Empower.png/revision/latest/scale-to-width-down/20?cb=20230929221204" data-relevant="0" data-image-key="Jax_Empower.png" loading="lazy" data-image-name="Jax Empower.png" decoding="async"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Empower" title="Jax/LoL">empowered</a></span></span>.</li>\n<li>The empowered attack will trigger but not be consumed nor apply its effects against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li>Stacks will still be generated when attacking them.</li></ul></li>\n<li class="mw-empty-elt"></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
} satisfies { [n in SkillName]: SkillGenData };
