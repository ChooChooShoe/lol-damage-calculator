// This file is auto-generated on Wed, 10 Apr 2024 12:26:02 -0400.

import { SkillGenData } from '@/api/DataTypes';

// prettier-ignore
export type SkillName = 'Berserker Rage' | 'Undertow' | 'Tough It Out' | 'Ragnarok';

export const Skills = {
  'Berserker Rage': {
    name: 'Berserker Rage',
    displayName: '',
    champion: 'Olaf',
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
        icon: 'Berserker Rage.png',
        blurb:
          '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" data-skin="Original" style="display:inline;white-space:pre;" data-param="" data-champion="Olaf" data-game="lol"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Olaf" href="/wiki/Olaf/LoL"><img data-image-name="Olaf OriginalSquare.png" loading="lazy" class="thumbborder lazyload" decoding="async" alt="Olaf" width="20" height="20" data-image-key="Olaf_OriginalSquare.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf</a></span></span> gains <span style="white-space:nowrap"><a title="Attack speed" href="/wiki/Attack_speed"><img data-image-key="Attack_speed_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" class="lazyload" decoding="async" height="15" alt="Attack speed icon" width="15" data-image-name="Attack speed icon.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/76/Life_steal_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203537" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-relevant="0" decoding="async" data-image-name="Life steal icon.png" alt="Life steal icon" height="15" width="15" data-image-key="Life_steal_icon.png"></a>&nbsp;life steal</span> based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>.',
        description:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Olaf</b> gains <span style="white-space:nowrap"><a title="Attack speed" href="/wiki/Attack_speed"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" decoding="async" height="15" data-image-key="Attack_speed_icon.png" alt="Attack speed icon" loading="lazy" data-image-name="Attack speed icon.png" data-relevant="0" class="lazyload" width="15"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a title="Life steal" href="/wiki/Life_steal"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/76/Life_steal_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203537" decoding="async" class="lazyload" width="15" loading="lazy" data-image-key="Life_steal_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Life steal icon" height="15" data-image-name="Life steal icon.png" data-relevant="0"></a>&nbsp;<a title="Life steal" href="/wiki/Life_steal">life steal</a></span> based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>, up to <span style="color:orangered; white-space:normal"><span data-useformula="50+(50/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="50;52.12;54.34;56.66;59.09;61.62;64.25;66.99;69.82;72.76;75.81;78.96;82.21;85.56;89.01;92.57;96.24;100" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_values="" class="pp-tooltip" data-bot_key="%">50% − 100% (based on level)</span> <b>bonus</b> attack speed</span> and <span data-top_values="" data-useformula="8+(17/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_key="%" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="8;8.72;9.48;10.27;11.09;11.95;12.85;13.78;14.74;15.74;16.77;17.85;18.95;20.09;21.27;22.48;23.72;25" class="pp-tooltip">8% − 25% (based on level)</span> life steal at <span style="color: #1F995C; white-space:normal">70% <b>missing</b> health</span>.',
        leveling: [],
      },
    ],
    targeting: 'Passive',
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
    notes: '* No additional details.',
    flavortext: '',
    flavorsound: '',
  },
  Undertow: {
    name: 'Undertow',
    displayName: '',
    champion: 'Olaf',
    skill: 'Q',
    range: '',
    targetRange:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" loading="lazy" data-image-name="Range center.png" data-image-key="Range_center.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-relevant="1" height="20"></a></span> <span style="border-bottom:1px dotted gray;cursor:help;" class="basic-tooltip" title="Minimum missile range, estimated">425</span> / <span title="Maximum missile range" class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;">1000</span>',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span style="white-space:pre; position:relative;" class="glossary" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center" decoding="async" loading="lazy" width="20" data-image-name="Range center.png" data-image-key="Range_center.png" data-relevant="1" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" height="20" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span style="border-bottom:1px dotted gray;cursor:help;" title="Impact additional radius" class="basic-tooltip">100</span> / <span style="border-bottom:1px dotted gray;cursor:help;" title="Axe retrieval radius" class="basic-tooltip">250</span> / <span style="border-bottom:1px dotted gray;cursor:help;" class="basic-tooltip" title="Axe landing brief sight radius">300</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-tip="Er" data-game="lol"><a href="/wiki/Range" title="Range"><img alt="Range model" data-image-key="Range_model.png" loading="lazy" decoding="async" data-image-name="Range model.png" data-relevant="1" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/71/Range_model.png/revision/latest/scale-to-width-down/20?cb=20150616134216" class="lazyload" height="20"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">180</span>',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [1600.0],
    castTime: '0.<small>25</small>',
    cost: [50.0, 55.0, 60.0, 65.0, 70.0],
    costtype: 'Mana',
    static: '',
    cooldown: [9.0],
    cdstart: 'on-cast',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Undertow.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-skin="Original" style="display:inline;white-space:pre;" class="inline-image label-after champion-icon" data-param="" data-game="lol" data-champion="Olaf"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a title="Olaf" href="/wiki/Olaf/LoL"><img data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" height="20" loading="lazy" alt="Olaf" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802" data-image-name="Olaf OriginalSquare.png" width="20" data-image-key="Olaf_OriginalSquare.png" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf</a></span></span> throws an axe to the target location that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through, briefly <span data-game="lol" class="glossary" style="white-space:pre; position:relative;" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img class="lazyload" data-image-key="Slow_icon.png" width="20" data-image-name="Slow icon.png" data-relevant="0" alt="Slow icon" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744" decoding="async" loading="lazy"></a> <a class="mw-redirect" href="/wiki/Slow" title="Slow">slowing</a></span> them based on distance travelled. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img data-image-name="Champion icon.png" data-relevant="0" width="20" height="20" class="lazyload" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-key="Champion_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" alt="Champion icon"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit also have <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Armor_penetration_icon.png" alt="Armor penetration icon" height="15" class="lazyload" width="15" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/64/Armor_penetration_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442" loading="lazy" data-image-name="Armor penetration icon.png" data-relevant="0"></a>&nbsp;<span style="color:yellow; white-space:normal">reduced armor</span></span> for a few seconds.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> throws an axe to the target location that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through and <span class="glossary" data-game="lol" data-tip="Slows" style="white-space:pre; position:relative;"><a title="Slow" href="/wiki/Slow"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744" alt="Slow icon" class="lazyload" data-image-name="Slow icon.png" loading="lazy" data-relevant="0" decoding="async" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" data-image-key="Slow_icon.png"></a> <a title="Slow" href="/wiki/Slow" class="mw-redirect">slows</a></span> them for <span class="pp-tooltip" data-top_label="distance traveled" data-displayformula="1.5+(0.125 per 75 units traveled)" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="1.5;1.63;1.75;1.88;2;2.13;2.25;2.38;2.5" data-top_values="400;475;550;625;700;775;850;925;1000">1.<small>5</small> − 2.<small>5</small> (based on distance traveled)</span> seconds. Enemy <span data-tip="Champions" style="white-space:pre; position:relative;" class="glossary" data-game="lol"><a href="/wiki/Champion" title="Champion"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Champion_icon.png" width="20" data-relevant="0" height="20" class="lazyload" loading="lazy" alt="Champion icon" data-image-name="Champion icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" decoding="async"></a> <a title="Champion" href="/wiki/Champion">champions</a></span> hit are also inflicted with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Armor penetration icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/64/Armor_penetration_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442" decoding="async" height="15" class="lazyload" width="15" loading="lazy" data-relevant="0" data-image-key="Armor_penetration_icon.png" data-image-name="Armor penetration icon.png"></a>&nbsp;<span style="color:yellow; white-space:normal">20% armor reduction</span></span> for 4 seconds.',
        leveling: [
          [
            {
              name: 'Physical Damage:',
              values: [65.0, 115.0, 165.0, 215.0, 265.0, 0.0, 0.0, 0.0],
              values_html:
                '65 / 115 / 165 / 215 / 265 <span style="color:orange; white-space:normal">(+ 100% <b>bonus</b> AD)</span>',
            },
          ],
          [
            {
              name: 'Slow:',
              values: [25.0, 30.0, 35.0, 40.0, 0.0],
              values_html: '25 / 30 / 35 / 40 / 45%',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          'The axe remains in place during the cooldown, and <b>Olaf</b> can pick up the axe to reduce the <span style="white-space:nowrap"><a title="Cooldown" href="/wiki/Cooldown"><img loading="lazy" width="15" data-image-key="Cooldown_icon.png" data-image-name="Cooldown icon.png" alt="Cooldown icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" data-relevant="0" class="lazyload" height="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async"></a>&nbsp;<b>total</b> cooldown</span>.',
        description:
          '<i>Undertow</i> deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> against <span data-tip="Monsters" data-game="lol" class="glossary" style="white-space:pre; position:relative;"><a title="Monster" href="/wiki/Monster"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" height="20" data-image-name="Monster icon.png" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Monster_icon.png/revision/latest/scale-to-width-down/20?cb=20231028083627" loading="lazy" width="20" data-relevant="0" alt="Monster icon" data-image-key="Monster_icon.png"></a> <a title="Monster" href="/wiki/Monster">monsters</a></span>.',
        leveling: [
          [
            {
              name: 'Monster Bonus Physical Damage:',
              values: [5.0, 10.0, 15.0, 20.0, 25.0],
              values_html: '5 / 10 / 15 / 20 / 25',
            },
            {
              name: 'Total Monster Damage:',
              values: [70.0, 125.0, 180.0, 235.0, 290.0, 0.0, 0.0, 0.0],
              values_html:
                '70 / 125 / 180 / 235 / 290 <span style="color:orange; white-space:normal">(+ 100% <b>bonus</b> AD)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb: '',
        description:
          'The axe remains in place for a duration equal to <i>Undertow\'s</i> cooldown, briefly granting <span style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight" class="glossary"><a title="Sight" href="/wiki/Sight"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" class="lazyload" height="20" loading="lazy" data-relevant="0" data-image-name="Sight icon.png" alt="Sight icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820" decoding="async" data-image-key="Sight_icon.png"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. <b>Olaf</b> can pick up the axe to reduce <i>Undertow\'s</i> <span style="white-space:nowrap"><a title="Cooldown" href="/wiki/Cooldown"><img alt="Cooldown icon" data-relevant="0" width="15" height="15" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" loading="lazy" class="lazyload" data-image-name="Cooldown icon.png" data-image-key="Cooldown_icon.png"></a>&nbsp;<b>current</b> cooldown</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">2.<small>5</small> seconds</span>, which resets the cooldown if that has already elapsed.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<i>Undertow will cast at max range if cast beyond that. Nearby monsters are granted <span data-tip="Ghosting" style="white-space:pre; position:relative;" data-game="lol" class="glossary"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost" height="20" class="lazyload" width="20" data-image-name="Ghost.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" loading="lazy" data-relevant="0" data-image-key="Ghost.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/20?cb=20180514003209"></a> <a title="Unit collision" href="/wiki/Unit_collision">ghosting</a></span> upon Undertow\'s cast.</i>',
        leveling: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Aoe',
    spellshield: 'True',
    projectile: 'special',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* <i>Undertow</i> may hit additional targets upon landing, but not targets already struck in-flight.\n<ul><li><ul><li>The axe will land approximately 50 units further than <i>Undertow\'s</i> target range if cast below maximum range.</li></ul></li>\n<li>The axe is stopped prematurely upon encountering <span data-ability="Wind Wall" class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-game="lol" data-champion="Yasuo"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Wind Wall" href="/wiki/Yasuo/LoL#Wind_Wall"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/2c/Yasuo_Wind_Wall.png/revision/latest/scale-to-width-down/20?cb=20131122024151" data-image-name="Yasuo Wind Wall.png" height="20" data-image-key="Yasuo_Wind_Wall.png" data-relevant="0" class="thumbborder lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Wind Wall" loading="lazy" decoding="async" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> or <span data-champion="Braum" data-game="lol" data-ability="Unbreakable" class="inline-image label-after ability-icon" data-param="" style="display:inline;white-space:pre;"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/3f/Braum_Unbreakable.png/revision/latest/scale-to-width-down/20?cb=20170818001617" alt="Unbreakable" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" class="thumbborder lazyload" loading="lazy" width="20" height="20" data-image-name="Braum Unbreakable.png" data-image-key="Braum_Unbreakable.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>, remaining on the ground upon collision.</li>\n<li>The timer for how long an axe stays on the ground does not begin until it has landed, thus it is possible to throw another axe before retrieving the first.</li>\n<li><b>Olaf</b> cannot pick up an enemy <b>Olaf\'s</b> axe on the ground.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  'Tough It Out': {
    name: 'Tough It Out',
    displayName: '',
    champion: 'Olaf',
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
    cost: [50.0],
    costtype: 'Mana',
    static: '',
    cooldown: [16.0, 15.0, 14.0, 13.0, 12.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Olaf Tough It Out.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" data-param="" style="display:inline;white-space:pre;" data-skin="Original" data-game="lol" data-champion="Olaf"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Olaf/LoL" title="Olaf"><img alt="Olaf" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802" height="20" decoding="async" data-relevant="0" data-image-key="Olaf_OriginalSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Olaf OriginalSquare.png" loading="lazy" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf</a></span></span> gains tremendous <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img decoding="async" data-image-key="Attack_speed_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="15" height="15" class="lazyload" alt="Attack speed icon" data-image-name="Attack speed icon.png" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" data-relevant="0"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds, and <span data-game="lol" class="glossary" data-tip="Shield" style="white-space:pre; position:relative;"><a href="/wiki/Shield" title="Shield"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Hybrid_resistances_icon.png/revision/latest/scale-to-width-down/20?cb=20170516021237" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20" data-image-name="Hybrid resistances icon.png" data-image-key="Hybrid_resistances_icon.png" width="20" data-relevant="0" class="lazyload" alt="Hybrid resistances icon"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span> for a short time.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" loading="lazy" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Attack speed icon" class="lazyload" width="15" decoding="async" data-image-key="Attack_speed_icon.png" height="15" data-image-name="Attack speed icon.png"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds.',
        leveling: [
          [
            {
              name: 'Bonus Attack Speed:',
              values: [40.0, 50.0, 60.0, 70.0, 0.0],
              values_html: '40 / 50 / 60 / 70 / 80%',
            },
          ],
        ],
      },
      {
        icon: 'Olaf Tough It Out 2.png',
        blurb: '',
        description:
          'He also grants himself a <span data-game="lol" data-tip="Shield" class="glossary" style="white-space:pre; position:relative;"><a title="Shield" href="/wiki/Shield"><img loading="lazy" width="20" alt="Hybrid resistances icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" data-image-name="Hybrid resistances icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Hybrid_resistances_icon.png/revision/latest/scale-to-width-down/20?cb=20170516021237" class="lazyload" height="20" data-image-key="Hybrid_resistances_icon.png" decoding="async"></a> <a title="Shield" href="/wiki/Shield">shield</a></span> for 2.<small>5</small> seconds with an amount that is capped at <span style="color: #1F995C; white-space:normal">70% <b>missing</b> health</span>.',
        leveling: [
          [
            {
              name: 'Shield Strength:',
              values: [10.0, 40.0, 70.0, 100.0, 130.0, 0.0, 5.0, 0.0, 0.0, 0.0],
              values_html:
                '10 / 40 / 70 / 100 / 130 <span style="color: #1F995C; white-space:normal">(+ 17.<small>5</small>% <b>missing</b> health)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<i>Tough It Out <span data-tip="Basic attack reset" class="glossary" data-game="lol" style="white-space:pre; position:relative;"><a href="/wiki/Basic_attack#Resets" title="Basic attack"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Fiora_Bladework.png/revision/latest/scale-to-width-down/20?cb=20150721193304" data-image-name="Fiora Bladework.png" data-relevant="0" data-image-key="Fiora_Bladework.png" alt="Bladework" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" decoding="async" height="20" width="20" loading="lazy"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Olaf\'s</b> basic attack timer.</i>',
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
    notes: '* No additional details.',
    flavortext: '',
    flavorsound: '',
  },
  Ragnarok: {
    name: 'Ragnarok',
    displayName: '',
    champion: 'Olaf',
    skill: 'R',
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
          '<span class="template_sbc"><b>Passive:</b></span> <span data-skin="Original" data-game="lol" data-param="" class="inline-image label-after champion-icon" data-champion="Olaf" style="display:inline;white-space:pre;"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL" title="Olaf"><img alt="Olaf" height="20" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" data-image-name="Olaf OriginalSquare.png" data-image-key="Olaf_OriginalSquare.png" data-relevant="0" decoding="async" loading="lazy"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img height="15" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Armor_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442" loading="lazy" width="15" data-image-name="Armor icon.png" data-image-key="Armor_icon.png" alt="Armor icon" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img width="15" data-relevant="0" decoding="async" loading="lazy" data-image-key="Magic_resistance_icon.png" class="lazyload" data-image-name="Magic resistance icon.png" alt="Magic resistance icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Magic_resistance_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203539" height="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resist</span></span>.',
        description:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Olaf</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Armor_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442" data-image-key="Armor_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Armor icon" loading="lazy" width="15" data-image-name="Armor icon.png" data-relevant="0" height="15" decoding="async"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a title="Magic resistance" href="/wiki/Magic_resistance"><img loading="lazy" class="lazyload" alt="Magic resistance icon" width="15" decoding="async" height="15" data-image-name="Magic resistance icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Magic_resistance_icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Magic_resistance_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203539"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>.',
        leveling: [
          [
            {
              name: 'Bonus Resistances:',
              values: [10.0, 15.0, 20.0, 25.0, 30.0],
              values_html: '10 / 15 / 20 / 25 / 30',
            },
          ],
        ],
      },
      {
        icon: 'Ragnarok.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> becomes enraged for a short time, <span data-game="lol" data-tip="Cleanse" style="white-space:pre; position:relative;" class="glossary"><a href="/wiki/Crowd_control#Removal" title="Crowd control"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" width="20" height="20" data-image-name="Gangplank Remove Scurvy.png" data-image-key="Gangplank_Remove_Scurvy.png" data-relevant="0" alt="Remove Scurvy" decoding="async" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Gangplank_Remove_Scurvy.png/revision/latest/scale-to-width-down/20?cb=20150707190028"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> himself and becoming <span data-game="lol" class="glossary" style="white-space:pre; position:relative;" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Cc-immune icon" data-image-key="Cc-immune_icon.png" decoding="async" data-image-name="Cc-immune icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/b1/Cc-immune_icon.png/revision/latest/scale-to-width-down/20?cb=20200327223512" height="20" data-relevant="0" class="lazyload" width="20" loading="lazy"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">cc-immune</a></span>, as well as gaining <span style="white-space:nowrap"><a title="Attack damage" href="/wiki/Attack_damage"><img data-image-name="Attack damage icon.png" height="15" class="lazyload" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="15" loading="lazy" alt="Attack damage icon" data-image-key="Attack_damage_icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/75/Attack_damage_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and increased <a href="/wiki/Size" title="Size">size</a>. For a brief moment, he gains <span style="white-space:nowrap"><a title="Movement speed" href="/wiki/Movement_speed"><img alt="Movement speed icon" decoding="async" class="lazyload" data-image-name="Movement speed icon.png" data-relevant="0" data-image-key="Movement_speed_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="15" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" loading="lazy" width="15"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing nearby enemy <span style="white-space:pre; position:relative;" data-tip="Champions" class="glossary" data-game="lol"><a title="Champion" href="/wiki/Champion"><img data-relevant="0" alt="Champion icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-name="Champion icon.png" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" loading="lazy" class="lazyload" height="20" data-image-key="Champion_icon.png"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Olaf</b> becomes enraged for 3 seconds, <span data-tip="Cleanse" style="white-space:pre; position:relative;" class="glossary" data-game="lol"><a title="Crowd control" href="/wiki/Crowd_control#Removal"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Gangplank_Remove_Scurvy.png/revision/latest/scale-to-width-down/20?cb=20150707190028" data-relevant="0" data-image-key="Gangplank_Remove_Scurvy.png" width="20" height="20" decoding="async" class="lazyload" loading="lazy" alt="Remove Scurvy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Gangplank Remove Scurvy.png"></a> <a title="Crowd control" href="/wiki/Crowd_control#Removal">cleansing</a></span> himself of all <span style="white-space:pre; position:relative;" data-tip="Crowd control" data-game="lol" class="glossary"><a title="Crowd control" href="/wiki/Crowd_control"><img alt="Stun icon" height="20" data-image-name="Stun icon.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" data-image-key="Stun_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940" loading="lazy" decoding="async" width="20"></a> <a title="Crowd control" href="/wiki/Crowd_control">crowd control</a></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a title="Crowd control" href="/wiki/Crowd_control#Immunity"><img loading="lazy" data-image-name="Cc-immune icon.png" width="20" height="20" alt="Cc-immune icon" data-image-key="Cc-immune_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-relevant="0" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/b1/Cc-immune_icon.png/revision/latest/scale-to-width-down/20?cb=20200327223512"></a> <a title="Crowd control" href="/wiki/Crowd_control#Immunity">immune to them</a></span>, as well as gaining <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img height="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="15" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/75/Attack_damage_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203443" loading="lazy" decoding="async" data-image-name="Attack damage icon.png" data-image-key="Attack_damage_icon.png" data-relevant="0" alt="Attack damage icon"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and 10% increased <a href="/wiki/Size" title="Size">size</a>. For the first second of <i>Ragnarok</i>, he also gains <span style="white-space:nowrap"><a title="Movement speed" href="/wiki/Movement_speed"><img class="lazyload" alt="Movement speed icon" decoding="async" data-image-key="Movement_speed_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" height="15" data-relevant="0" loading="lazy" data-image-name="Movement speed icon.png" width="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing <span data-tip="Sight" class="glossary" data-game="lol" style="white-space:pre; position:relative;"><a href="/wiki/Sight" title="Sight"><img data-image-key="Sight_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820" class="lazyload" data-relevant="0" data-image-name="Sight icon.png" decoding="async" height="20" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Sight icon" loading="lazy"></a> <a title="Sight" href="/wiki/Sight">visible</a></span> enemy <span data-tip="Champions" class="glossary" data-game="lol" style="white-space:pre; position:relative;"><a title="Champion" href="/wiki/Champion"><img alt="Champion icon" data-relevant="0" data-image-name="Champion icon.png" height="20" data-image-key="Champion_icon.png" class="lazyload" loading="lazy" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within 2000 units.',
        leveling: [
          [
            {
              name: 'Bonus Attack Damage:',
              values: [10.0, 15.0, 20.0, 25.0, 30.0, 0.0],
              values_html:
                '10 / 15 / 20 / 25 / 30 <span style="color:orange; white-space:normal">(+ 25% AD)</span>',
            },
          ],
          [
            {
              name: 'Bonus Movement Speed:',
              values: [20.0, 45.0, 0.0],
              values_html: '20 / 45 / 70%',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          '<i>Ragnarok\'s</i> duration can be extended by hitting <a title="Basic attack" href="/wiki/Basic_attack">basic attacks</a> and <i><span data-ability="Reckless Swing" data-param="" style="display:inline;white-space:pre;" data-champion="Olaf" data-game="lol" class="inline-image label-after ability-icon"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Reckless Swing"><img height="20" class="thumbborder lazyload" data-relevant="0" decoding="async" loading="lazy" data-image-name="Olaf Reckless Swing.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" alt="Reckless Swing" data-image-key="Olaf_Reckless_Swing.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/1d/Olaf_Reckless_Swing.png/revision/latest/scale-to-width-down/20?cb=20230830010737"></a></span> <span style="white-space:normal;"><a title="Olaf/LoL" href="/wiki/Olaf/LoL#Reckless_Swing">Reckless Swing</a></span></span></i> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img data-image-key="Champion_icon.png" data-relevant="0" class="lazyload" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" alt="Champion icon" data-image-name="Champion icon.png"></a> <a title="Champion" href="/wiki/Champion">champion</a></span>.',
        description:
          '<i>Ragnarok\'s</i> duration is increased by and up to 2.<small>5</small> seconds for each basic attack <span data-game="lol" data-tip="On-hit" class="glossary" style="white-space:pre; position:relative;"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects"><img class="lazyload" alt="On-hit icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" loading="lazy" height="20" data-image-name="On-hit icon.png" width="20" data-image-key="On-hit_icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/75/On-hit_icon.png/revision/latest/scale-to-width-down/20?cb=20201114055106"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> or cast of <i><span data-param="" style="display:inline;white-space:pre;" data-champion="Olaf" data-ability="Reckless Swing" data-game="lol" class="inline-image label-after ability-icon"><span data-width="20" style="display:inline-block;position:relative;" class="border"><a title="Reckless Swing" href="/wiki/Olaf/LoL#Reckless_Swing"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/1d/Olaf_Reckless_Swing.png/revision/latest/scale-to-width-down/20?cb=20230830010737" data-image-key="Olaf_Reckless_Swing.png" class="thumbborder lazyload" decoding="async" alt="Reckless Swing" loading="lazy" width="20" data-relevant="0" data-image-name="Olaf Reckless Swing.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Olaf/LoL">Reckless Swing</a></span></span></i> against an enemy <span data-tip="Champion" style="white-space:pre; position:relative;" data-game="lol" class="glossary"><a href="/wiki/Champion" title="Champion"><img data-image-name="Champion icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" data-image-key="Champion_icon.png" decoding="async" class="lazyload" loading="lazy" data-relevant="0" alt="Champion icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" height="20"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
        leveling: [],
      },
      {
        icon: '',
        blurb:
          '<span class="template_sbc"><b><span data-game="lol" data-tip="Cc-immune" style="white-space:pre; position:relative;" class="glossary"><a href="/wiki/Crowd_control#Immunity" title="Crowd control"><img data-image-name="Cc-immune icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/b1/Cc-immune_icon.png/revision/latest/scale-to-width-down/20?cb=20200327223512" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Cc-immune icon" loading="lazy" class="lazyload" decoding="async" width="20" height="20" data-image-key="Cc-immune_icon.png" data-relevant="0"></a> Cc-immunity</span></b></span>: <span data-tip="Crowd control" data-game="lol" style="white-space:pre; position:relative;" class="glossary"><a href="/wiki/Crowd_control" title="Crowd control"><img loading="lazy" alt="Stun icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-image-name="Stun icon.png" decoding="async" data-image-key="Stun_icon.png" class="lazyload" width="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940"></a> <a title="Crowd control" href="/wiki/Crowd_control">Crowd control</a></span> cannot be applied during this time.',
        description: '',
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
    notes:
      '* <i>Ragnarok</i> removes the underlying <span data-tip="Stun" data-game="lol" class="glossary" style="white-space:pre; position:relative;"><a title="Stun" href="/wiki/Stun"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940" alt="Stun icon" width="20" data-relevant="0" data-image-key="Stun_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" class="lazyload" height="20" loading="lazy" data-image-name="Stun icon.png"></a> <a class="mw-redirect" title="Stun" href="/wiki/Stun">stun</a></span> from <span style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne" class="glossary"><a href="/wiki/Airborne" title="Airborne"><img data-relevant="0" loading="lazy" data-image-key="Airborne_icon.png" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Airborne icon.png" alt="Airborne icon" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d6/Airborne_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223933" decoding="async" class="lazyload"></a> <a title="Airborne" href="/wiki/Airborne" class="mw-redirect">airborne</a></span> effects, but not the forced displacement, which requires him to use a <span data-tip="Blink" data-game="lol" class="glossary" style="white-space:pre; position:relative;"><a href="/wiki/Blink" title="Blink"><img class="lazyload" alt="Flash" data-image-key="Flash.png" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" decoding="async" data-relevant="0" height="20" data-image-name="Flash.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> or <span data-game="lol" style="white-space:pre; position:relative;" data-tip="Dash" class="glossary"><a title="Dash" href="/wiki/Dash"><img height="20" width="20" class="lazyload" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Dash.png" data-image-key="Dash.png" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Dash.png/revision/latest/scale-to-width-down/20?cb=20180514002826" alt="Dash" data-relevant="0"></a> <a title="Dash" href="/wiki/Dash">dash</a></span> ability to override it.\n<ul><li><i>Ragnarok</i> does not bypass self or ally applied effects, unless otherwise stated. Some examples include <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img data-image-key="Zhonya%27s_Hourglass_item.png" alt="Zhonya\'s Hourglass" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/b5/Zhonya%27s_Hourglass_item.png/revision/latest/scale-to-width-down/20?cb=20201029203022" data-relevant="0" width="20" decoding="async" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" data-image-name="Zhonya\'s Hourglass item.png"></a></span> <span style="white-space:normal;"><a title="Zhonya\'s Hourglass" href="/wiki/Zhonya%27s_Hourglass">Zhonya\'s Hourglass</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-item="Guardian Angel" data-param="" data-game="lol"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Guardian Angel" href="/wiki/Guardian_Angel"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Guardian_Angel_item.png/revision/latest/scale-to-width-down/20?cb=20210904172822" width="20" data-image-name="Guardian Angel item.png" data-image-key="Guardian_Angel_item.png" decoding="async" loading="lazy" alt="Guardian Angel" height="20" class="thumbborder lazyload" data-relevant="0"></a></span> <span style="white-space:normal;"><a title="Guardian Angel" href="/wiki/Guardian_Angel">Guardian Angel</a></span></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-champion="Kalista" data-param="" data-ability="Fate\'s Call" data-game="lol"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Fate\'s Call"><img alt="Fate\'s Call" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20" data-image-name="Kalista Fate\'s Call.png" decoding="async" data-image-key="Kalista_Fate%27s_Call.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/5b/Kalista_Fate%27s_Call.png/revision/latest/scale-to-width-down/20?cb=20141104220726" width="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Kalista/LoL">Fate\'s Call</a></span></span>.\n<ul><li>He prevents both ally and enemy <span data-champion="Bard" data-skin="Original" data-game="lol" data-param="" class="inline-image label-after champion-icon" style="display:inline;white-space:pre;"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Bard" href="/wiki/Bard/LoL"><img height="20" class="thumbborder lazyload" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/37/Bard_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402215420" decoding="async" data-image-key="Bard_OriginalSquare.png" alt="Bard" loading="lazy" data-image-name="Bard OriginalSquare.png" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL" title="Bard/LoL">Bard</a></span></span> from putting him in <span data-tip="Stasis" data-game="lol" class="glossary" style="white-space:pre; position:relative;"><a title="Stasis" href="/wiki/Stasis"><img loading="lazy" width="20" data-image-name="Stasis icon.png" decoding="async" class="lazyload" alt="Stasis icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Stasis_icon.png" height="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e2/Stasis_icon.png/revision/latest/scale-to-width-down/20?cb=20150225124408"></a> <a class="mw-redirect" href="/wiki/Stasis" title="Stasis">stasis</a></span> with <span data-param="" data-champion="Bard" data-game="lol" data-ability="Tempered Fate" class="inline-image label-after ability-icon" style="display:inline;white-space:pre;"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL#Tempered_Fate" title="Tempered Fate"><img width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Bard_Tempered_Fate.png/revision/latest/scale-to-width-down/20?cb=20150224202956" alt="Tempered Fate" decoding="async" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-image-key="Bard_Tempered_Fate.png" class="thumbborder lazyload" data-image-name="Bard Tempered Fate.png" data-relevant="0"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL#Tempered_Fate" title="Bard/LoL">Tempered Fate</a></span></span>.</li>\n<li>The ability will remain for its full duration regardless.</li></ul></li>\n<li><i>Ragnarok</i> does not negate any <a title="Debuff" href="/wiki/Debuff">debuffs</a> other than <span data-game="lol" class="glossary" data-tip="Crowd control" style="white-space:pre; position:relative;"><a href="/wiki/Crowd_control" title="Crowd control"><img data-image-name="Stun icon.png" loading="lazy" data-relevant="0" data-image-key="Stun_icon.png" width="20" height="20" decoding="async" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940" alt="Stun icon"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> from being applied unless absolutely necessary.</li>\n<li>The <span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span> updates dynamically over the duration; Increases or reductions in <span style="color:orange; white-space:normal">attack damage</span> after the effect has been applied will still be amplified.</li>\n<li>The <span style="color:orange; white-space:normal">25% attack damage</span> scaling amplifies the flat <span style="color:orange; white-space:normal">attack damage <b>bonus</b></span> as well.</li>\n<li><i>Ragnarok</i> will not expire during <span data-champion="Olaf" style="display:inline;white-space:pre;" data-ability="Reckless Swing" class="inline-image label-after ability-icon" data-param="" data-game="lol"><span class="border" data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Reckless Swing\'s"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/1d/Olaf_Reckless_Swing.png/revision/latest/scale-to-width-down/20?cb=20230830010737" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Olaf_Reckless_Swing.png" loading="lazy" alt="Reckless Swing\'s" width="20" data-relevant="0" decoding="async" height="20" class="thumbborder lazyload" data-image-name="Olaf Reckless Swing.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL#Reckless_Swing" title="Olaf/LoL">Reckless Swing\'s</a></span></span> cast time.</li>\n<li><i>Ragnarok</i> will not resist the displacement caused by the 10 additional <span class="inline-image unit-icon label-after" data-param="" style="display:inline;white-space:pre;"><span class="border" data-width="20" style="display:inline-block;position:relative;"><a title="Blast Cones" href="/wiki/Blast_Cone"><img decoding="async" data-image-key="Blast_ConeSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a6/Blast_ConeSquare.png/revision/latest/scale-to-width-down/20?cb=20170119022005" class="thumbborder lazyload" height="20" data-image-name="Blast ConeSquare.png" loading="lazy" data-relevant="1" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" alt="Blast Cones"></a></span> <span style="white-space:normal;"><a class="mw-redirect" title="Blast Cone" href="/wiki/Blast_Cone">Blast Cones</a></span></span> spawned by <span data-param="" style="display:inline;white-space:pre;" class="inline-image unit-icon label-after"><span class="border" data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Infernal_Drake" title="Infernal Rift"><img height="20" loading="lazy" class="thumbborder lazyload" data-image-name="Infernal DrakeSquare.png" data-image-key="Infernal_DrakeSquare.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" decoding="async" alt="Infernal Rift" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Infernal_DrakeSquare.png/revision/latest/scale-to-width-down/20?cb=20170408124043"></a></span> <span style="white-space:normal;"><a href="/wiki/Infernal_Drake" title="Infernal Drake">Infernal Rift</a></span></span> if they\'re triggered by <b>Olaf</b>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><i>Ragnarok\'s</i> duration will not be increased if the basic attack is <span class="glossary" data-game="lol" data-tip="Dodged" style="white-space:pre; position:relative;"><a href="/wiki/Attack_effects#Parrying" title="Attack effects"><img width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Jax_Counter_Strike_old.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Jax_Counter_Strike_old.png/revision/latest/scale-to-width-down/20?cb=20171223030746" height="20" class="lazyload" decoding="async" alt="Jax Counter Strike old" data-image-name="Jax Counter Strike old.png" loading="lazy" data-relevant="0"></a> <a title="Attack effects" href="/wiki/Attack_effects#Parrying">dodged</a></span>.</li>\n<li><i>Ragnarok\'s</i> duration will be increased if the basic attack is <span style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked" class="glossary"><a href="/wiki/Attack_effects#Parrying" title="Attack effects"><img data-relevant="0" data-image-key="Shen_Spirit%27s_Refuge.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Shen_Spirit%27s_Refuge.png/revision/latest/scale-to-width-down/20?cb=20170217191016" decoding="async" loading="lazy" alt="Spirit\'s Refuge" width="20" data-image-name="Shen Spirit\'s Refuge.png" class="lazyload" height="20"></a> <a title="Attack effects" href="/wiki/Attack_effects#Parrying">blocked</a></span>.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
} satisfies { [n in SkillName]: SkillGenData };
