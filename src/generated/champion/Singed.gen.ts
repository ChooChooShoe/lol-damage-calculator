// This file is auto-generated on Wed, 10 Apr 2024 12:27:32 -0400.

import { SkillGenData } from '@/api/DataTypes';

// prettier-ignore
export type SkillName = 'Noxious Slipstream' | 'Poison Trail' | 'Mega Adhesive' | 'Insanity Potion';

export const Skills = {
  'Noxious Slipstream': {
    name: 'Noxious Slipstream',
    displayName: '',
    champion: 'Singed',
    skill: 'I',
    range: '',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span style="border-bottom:1px dotted gray;cursor:help;" title="Center-to-edge" class="basic-tooltip">225</span>',
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
    ontargetcdstatic: '8',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'false',
        blurb:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <span data-param="" data-skin="Original" data-game="lol" data-champion="Singed" class="inline-image label-after champion-icon" style="display:inline;white-space:pre;"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Singed" href="/wiki/Singed/LoL"><img class="thumbborder lazyload" height="20" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Singed_OriginalSquare.png" data-image-name="Singed OriginalSquare.png" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Singed_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402221057" decoding="async" alt="Singed" width="20"></a></span> <span style="white-space:normal;"><a title="Singed/LoL" href="/wiki/Singed/LoL">Singed</a></span></span> moves near a <span style="white-space:pre; position:relative;" class="glossary" data-tip="Champion" data-game="lol"><a href="/wiki/Champion" title="Champion"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Champion icon" loading="lazy" data-image-key="Champion_icon.png" decoding="async" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" width="20" class="lazyload" data-image-name="Champion icon.png" height="20"></a> <a title="Champion" href="/wiki/Champion">champion</a></span>, he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img height="15" width="15" decoding="async" data-image-name="Movement speed icon.png" data-image-key="Movement_speed_icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" loading="lazy" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Movement speed icon"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time, which refreshes on subsequent passes and stacks up to a cap.',
        description:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Singed</b> moves near a <span data-tip="Champion" class="glossary" style="white-space:pre; position:relative;" data-game="lol"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon" width="20" height="20" data-image-name="Champion icon.png" data-image-key="Champion_icon.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" loading="lazy" decoding="async"></a> <a title="Champion" href="/wiki/Champion">champion</a></span>, he gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Noxious Slipstream</i> for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.',
        leveling: [],
      },
      {
        icon: 'Noxious Slipstream.png',
        blurb:
          'This effect cannot occur on the same target more than once every few seconds.',
        description:
          '<span class="template_sbc"><b>Noxious Slipstream:</b></span> For each stack, <b>Singed</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img data-relevant="0" alt="Movement speed icon" decoding="async" height="15" data-image-key="Movement_speed_icon.png" width="15" data-image-name="Movement speed icon.png" class="lazyload" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25% <b>bonus</b> movement speed</span></span>, up to a maximum of <span style="color: #F5EE99; white-space:normal">625%</span>.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          'This effect cannot occur on the same target more than once every few seconds.',
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
  'Poison Trail': {
    name: 'Poison Trail',
    displayName: '',
    champion: 'Singed',
    skill: 'Q',
    range: '',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span data-tip="Cr" class="glossary" style="white-space:pre; position:relative;" data-game="lol"><a title="Range" href="/wiki/Range"><img width="20" decoding="async" data-relevant="1" class="lazyload" data-image-key="Range_center.png" loading="lazy" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Range center.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" alt="Range center"></a></span> <span style="border-bottom:1px dotted gray;cursor:help;" title="Individual gas clouds" class="basic-tooltip">180</span>',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: 'none',
    cost: [13.0],
    costtype: 'Mana per second',
    static: '1',
    cooldown: [0.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Poison Trail.png',
        blurb:
          '<span class="template_sbc"><b>Toggle:</b></span> <span style="display:inline;white-space:pre;" data-champion="Singed" data-param="" data-skin="Original" data-game="lol" class="inline-image label-after champion-icon"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL" title="Singed"><img data-image-name="Singed OriginalSquare.png" height="20" data-relevant="0" class="thumbborder lazyload" data-image-key="Singed_OriginalSquare.png" alt="Singed" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Singed_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402221057" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL" title="Singed/LoL">Singed</a></span></span> continually creates a toxic cloud that shortly lingers in his wake, which continually inflicts <span style="white-space:pre; position:relative;" data-tip="Poison" class="glossary" data-game="lol"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img decoding="async" height="20" data-image-key="Poison_icon.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" width="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Poison_icon.png/revision/latest/scale-to-width-down/20?cb=20150129035607" data-image-name="Poison icon.png" alt="Poison icon"></a> <a title="Cassiopeia/LoL" href="/wiki/Cassiopeia/LoL">poison</a></span> to enemies within.',
        description:
          '<span class="template_sbc"><b>Toggle:</b></span> <b>Singed</b> continually creates a toxic cloud in his wake that lingers for 3.<small>25</small> seconds. The cloud inflicts <span style="white-space:pre; position:relative;" class="glossary" data-game="lol" data-tip="Poison"><a title="Cassiopeia/LoL" href="/wiki/Cassiopeia/LoL"><img decoding="async" loading="lazy" alt="Poison icon" data-image-name="Poison icon.png" data-relevant="0" width="20" class="lazyload" height="20" data-image-key="Poison_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Poison_icon.png/revision/latest/scale-to-width-down/20?cb=20150129035607" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> to enemies within, and resets the duration every 0.<small>5</small> seconds while they remain.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<span class="template_sbc"><b><span style="white-space:pre; position:relative;" data-tip="Poison" data-game="lol" class="glossary"><a title="Cassiopeia/LoL" href="/wiki/Cassiopeia/LoL"><img width="20" data-image-name="Poison icon.png" loading="lazy" alt="Poison icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Poison_icon.png" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Poison_icon.png/revision/latest/scale-to-width-down/20?cb=20150129035607" class="lazyload" decoding="async" data-relevant="0"></a> poison</span>:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds over 2 seconds. Subsequent inflictions refresh the duration.',
        leveling: [
          [
            {
              name: 'Magic Damage per Tick:',
              values: [5.0, 7.0, 5.0, 0.0, 10.0, 12.0, 5.0, 0.0, 15.0, 0.0],
              values_html:
                '5 / 7.<small>5</small> / 10 / 12.<small>5</small> / 15 <span style="color: #7A6DFF; white-space:normal">(+ 10% AP)</span>',
            },
            {
              name: 'Total Magic Damage:',
              values: [40.0, 60.0, 80.0, 100.0, 120.0, 0.0],
              values_html:
                '40 / 60 / 80 / 100 / 120 <span style="color: #7A6DFF; white-space:normal">(+ 80% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          '<span class="template_sbc"><b><span data-game="lol" class="glossary" data-tip="Poison" style="white-space:pre; position:relative;"><a title="Cassiopeia/LoL" href="/wiki/Cassiopeia/LoL"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Poison_icon.png/revision/latest/scale-to-width-down/20?cb=20150129035607" class="lazyload" data-image-key="Poison_icon.png" alt="Poison icon" height="20" data-image-name="Poison icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" decoding="async" width="20" data-relevant="0"></a> poison</span>:</b></span> The target continually takes <span style="color: #00B0F0; white-space:normal">magic damage</span> over a short time. Subsequent inflictions refresh the duration.',
        description: '',
        leveling: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'AoEDoT',
    spellshield: '',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '*Toggle abilities do not count as ability activations for the purposes of on-cast effects such as <span data-tip="Spellblade" class="glossary" style="white-space:pre; position:relative;" data-game="lol"><a title="Named item effect" href="/wiki/Named_item_effect#Spellblade"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Sheen_item.png/revision/latest/scale-to-width-down/20?cb=20201118210052" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" alt="Sheen item" data-image-key="Sheen_item.png" width="20" loading="lazy" height="20" data-image-name="Sheen item.png" data-relevant="0"></a> <a title="Named item effect" href="/wiki/Named_item_effect#Spellblade">Spellblade</a></span> and triggering <span style="display:inline;white-space:pre;" class="inline-image label-after ability-icon" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol" data-param=""><span style="display:inline-block;position:relative;" data-width="20" class="border"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse\'s"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Kassadin Force Pulse.png" decoding="async" data-image-key="Kassadin_Force_Pulse.png" height="20" data-relevant="0" width="20" class="thumbborder lazyload" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/22/Kassadin_Force_Pulse.png/revision/latest/scale-to-width-down/20?cb=20170818190412" alt="Force Pulse\'s"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse\'s</a></span></span> passive.\n<ul><li>The clouds check for enemy targets in the area immediately upon being spawned. After a 0.<small>25</small>-0.<small>5</small> second delay, they check every 0.<small>25</small> seconds again until they fade.\n<ul><li>Targets already with the DoT can have the debuff refreshed only every 0.<small>5</small> seconds.</li>\n<li>Due to the inconsistent offset between the first and future ticks is it possible for a static target to miss out on one refresh of the debuff, equal to 3 ticks of damage.</li></ul></li>\n<li>If <b>Singed</b> has moved less than 90 units since spawning the last poison cloud, it will spawn 35 units in front of him. They also only spawn every 1 second in this case.\n<ul><li>When <b>Singed</b> is moving faster than that, the poison clouds spawn more frequently and on top of himself.</li></ul></li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  'Mega Adhesive': {
    name: 'Mega Adhesive',
    displayName: '',
    champion: 'Singed',
    skill: 'W',
    range: '',
    targetRange: '1000',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span data-game="lol" class="glossary" data-tip="Cr" style="white-space:pre; position:relative;"><a title="Range" href="/wiki/Range"><img width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" class="lazyload" alt="Range center" data-image-key="Range_center.png" decoding="async" data-relevant="1" data-image-name="Range center.png" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211"></a></span> 265',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: '0.<small>25</small>',
    cost: [60.0, 70.0, 80.0, 90.0, 100.0],
    costtype: 'Mana',
    static: '',
    cooldown: [17.0, 16.0, 15.0, 14.0, 13.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Mega Adhesive.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-champion="Singed" data-param="" data-skin="Original" data-game="lol" style="display:inline;white-space:pre;" class="inline-image label-after champion-icon"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Singed" href="/wiki/Singed/LoL"><img alt="Singed" class="thumbborder lazyload" data-image-key="Singed_OriginalSquare.png" data-relevant="0" loading="lazy" height="20" data-image-name="Singed OriginalSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Singed_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402221057"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL" title="Singed/LoL">Singed</a></span></span> creates a field of adhesive at the target location for a short time that <span data-game="lol" style="white-space:pre; position:relative;" class="glossary" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img data-image-key="Grounded_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest/scale-to-width-down/20?cb=20160509000039" width="20" data-image-name="Grounded icon.png" height="20" data-relevant="0" class="lazyload" alt="Grounded icon" loading="lazy" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a href="/wiki/Ground" title="Ground" class="mw-redirect">grounds</a></span> and <span data-game="lol" class="glossary" data-tip="Slows" style="white-space:pre; position:relative;"><a title="Slow" href="/wiki/Slow"><img width="20" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" decoding="async" height="20" data-image-name="Slow icon.png" alt="Slow icon" data-image-key="Slow_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744" class="lazyload"></a> <a class="mw-redirect" title="Slow" href="/wiki/Slow">slows</a></span> enemies within.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Singed</b> spills a potent adhesive that lands at the target location after 0.<small>375</small> seconds, creating a field for 3 seconds that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a title="Ground" href="/wiki/Ground"><img class="lazyload" loading="lazy" data-image-key="Grounded_icon.png" width="20" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest/scale-to-width-down/20?cb=20160509000039" data-relevant="0" alt="Grounded icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-name="Grounded icon.png"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounds</a></span> enemies within and <span data-tip="Slows" style="white-space:pre; position:relative;" data-game="lol" class="glossary"><a title="Slow" href="/wiki/Slow"><img class="lazyload" decoding="async" width="20" loading="lazy" height="20" data-image-name="Slow icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744" data-relevant="0" alt="Slow icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Slow_icon.png"></a> <a href="/wiki/Slow" title="Slow" class="mw-redirect">slows</a></span> them.',
        leveling: [
          [
            {
              name: 'Slow:',
              values: [50.0, 55.0, 60.0, 65.0, 0.0],
              values_html: '50 / 55 / 60 / 65 / 70%',
            },
          ],
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: '',
    spelleffects: '',
    spellshield: 'false',
    projectile: 'false',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* The delay between the cast and the slow field being estabilished is inconsistent, due to a bug with tick rates.<sup><span title="This is not intended." class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;">(bug)</span></sup>\n<ul><li><ul><li><span class="champion-ability-icon"><span data-param="" class="inline-image label-after champion-icon" data-champion="Karthus" data-skin="Original" style="display:inline;white-space:pre;" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a title="Karthus\'" href="/wiki/Karthus/LoL"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a9/Karthus_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20160326090500" width="20" height="20" alt="Karthus\'" class="thumbborder lazyload" decoding="async" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Karthus_OriginalSquare.png" data-relevant="0" data-image-name="Karthus OriginalSquare.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL" title="Karthus/LoL">Karthus\'</a></span></span> <span class="inline-image label-after ability-icon" data-param="" style="display:inline;white-space:pre;" data-ability="Lay Waste" data-game="lol" data-champion="Karthus"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Lay_Waste" title="Lay Waste"><img data-image-key="Karthus_Lay_Waste.png" alt="Lay Waste" class="thumbborder lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Karthus_Lay_Waste.png/revision/latest/scale-to-width-down/20?cb=20170818190306" decoding="async" width="20" data-relevant="0" loading="lazy" height="20" data-image-name="Karthus Lay Waste.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Lay_Waste" title="Karthus/LoL">Lay Waste</a></span></span></span> and <span data-game="lol" data-champion="Karthus" style="display:inline;white-space:pre;" data-param="" class="inline-image label-after ability-icon" data-ability="Defile"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a href="/wiki/Karthus/LoL#Defile" title="Defile\'s"><img data-image-key="Karthus_Defile.png" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/6a/Karthus_Defile.png/revision/latest/scale-to-width-down/20?cb=20170818010046" data-image-name="Karthus Defile.png" alt="Defile\'s" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" decoding="async" height="20" data-relevant="0" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Defile" title="Karthus/LoL">Defile\'s</a></span></span> ticks beyond the first and <span class="champion-ability-icon"><span data-skin="Original" data-game="lol" class="inline-image label-after champion-icon" data-param="" style="display:inline;white-space:pre;" data-champion="Zac"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a title="Zac\'s" href="/wiki/Zac/LoL"><img data-image-name="Zac OriginalSquare.png" data-relevant="0" decoding="async" height="20" class="thumbborder lazyload" data-image-key="Zac_OriginalSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/16/Zac_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20160417012331" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Zac\'s" loading="lazy"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL" title="Zac/LoL">Zac\'s</a></span></span> <span data-ability="Let\'s Bounce!" class="inline-image label-after ability-icon" data-champion="Zac" data-game="lol" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Let\'s Bounce!"><img data-image-key="Zac_Let%27s_Bounce%21.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/63/Zac_Let%27s_Bounce%21.png/revision/latest/scale-to-width-down/20?cb=20170818200420" decoding="async" class="thumbborder lazyload" data-relevant="0" height="20" alt="Let\'s Bounce!" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-name="Zac Let\'s Bounce!.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Zac/LoL">Let\'s Bounce!</a></span></span></span> have similar issues.</li></ul></li>\n<li>The goo missile is VFX only, to convey which location Singed threw the adhesive at. It has a fixed travel time but is independent from when the zone is established. It is not destructible by effects such as <span data-game="lol" data-param="" style="display:inline;white-space:pre;" data-champion="Yasuo" data-ability="Wind Wall" class="inline-image label-after ability-icon"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" height="20" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" data-image-name="Yasuo Wind Wall.png" width="20" data-image-key="Yasuo_Wind_Wall.png" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/2c/Yasuo_Wind_Wall.png/revision/latest/scale-to-width-down/20?cb=20131122024151" loading="lazy"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span>.</li>\n<li><i>Mega Adhesive\'s</i> <span data-tip="Slow" class="glossary" style="white-space:pre; position:relative;" data-game="lol"><a href="/wiki/Slow" title="Slow"><img data-relevant="0" alt="Slow icon" width="20" data-image-key="Slow_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20" data-image-name="Slow icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744" decoding="async" class="lazyload"></a> <a class="mw-redirect" href="/wiki/Slow" title="Slow">slow</a></span> and <span data-game="lol" class="glossary" data-tip="Ground" style="white-space:pre; position:relative;"><a href="/wiki/Ground" title="Ground"><img decoding="async" height="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest/scale-to-width-down/20?cb=20160509000039" data-image-name="Grounded icon.png" data-image-key="Grounded_icon.png" loading="lazy" width="20" class="lazyload" alt="Grounded icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">ground</a></span> debuffs are each marked as non-dispellable, so they are not removed by most <span style="white-space:pre; position:relative;" data-game="lol" class="glossary" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control"><img data-image-name="Gangplank Remove Scurvy.png" data-relevant="0" alt="Remove Scurvy" data-image-key="Gangplank_Remove_Scurvy.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Gangplank_Remove_Scurvy.png/revision/latest/scale-to-width-down/20?cb=20150707190028" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" loading="lazy" height="20" class="lazyload"></a> <a title="Crowd control" href="/wiki/Crowd_control#Removal">cleanses</a></span>. Each is however allowed to be removed by cleanses that <b>also</b> grant immunity to the debuff type, such as <span class="champion-ability-icon"><span data-champion="Olaf" data-game="lol" data-skin="Original" class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param=""><span data-width="20" style="display:inline-block;position:relative;" class="border"><a title="Olaf\'s" href="/wiki/Olaf/LoL"><img decoding="async" data-image-name="Olaf OriginalSquare.png" data-relevant="0" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" data-image-key="Olaf_OriginalSquare.png" class="thumbborder lazyload" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Olaf_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402220802" alt="Olaf\'s"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL" title="Olaf/LoL">Olaf\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-ability="Ragnarok" data-champion="Olaf" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Ragnarok" href="/wiki/Olaf/LoL#Ragnarok"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" alt="Ragnarok" data-image-key="Olaf_Ragnarok.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/1c/Olaf_Ragnarok.png/revision/latest/scale-to-width-down/20?cb=20230830010737" class="thumbborder lazyload" data-image-name="Olaf Ragnarok.png" data-relevant="0" decoding="async" loading="lazy" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Olaf/LoL#Ragnarok" title="Olaf/LoL">Ragnarok</a></span></span></span>.</li>\n<li><b>Singed</b> <span data-tip="Sight" data-game="lol" class="glossary" style="white-space:pre; position:relative;"><a href="/wiki/Sight" title="Sight"><img decoding="async" loading="lazy" data-image-key="Sight_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820" data-relevant="0" class="lazyload" height="20" width="20" data-image-name="Sight icon.png" alt="Sight icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a title="Sight" href="/wiki/Sight">reveals</a></span> himself to enemies briefly on-cast from fog of war if enemy targets are in the target area of <i>Mega Adhesive</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  'Insanity Potion': {
    name: 'Insanity Potion',
    displayName: '',
    champion: 'Singed',
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
    cooldown: [120.0, 115.0, 110.0, 105.0, 100.0],
    cdstart: 'on-cast',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Insanity Potion.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-param="" data-skin="Original" class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-game="lol" data-champion="Singed"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Singed/LoL" title="Singed"><img width="20" loading="lazy" class="thumbborder lazyload" data-image-name="Singed OriginalSquare.png" data-image-key="Singed_OriginalSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Singed_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150402221057" alt="Singed" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" height="20" data-relevant="0"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL" title="Singed/LoL">Singed</a></span></span> empowers himself for some time with <span style="white-space:nowrap"><a title="Ability power" href="/wiki/Ability_power"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Ability_power_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203441" data-image-key="Ability_power_icon.png" alt="Ability power icon" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="15" data-image-name="Ability power icon.png" class="lazyload" data-relevant="0" width="15"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal"><b>bonus</b> ability power</span></span>, <span style="white-space:nowrap"><a title="Armor" href="/wiki/Armor"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Armor_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442" decoding="async" data-image-name="Armor icon.png" width="15" class="lazyload" data-image-key="Armor_icon.png" alt="Armor icon" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="15"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img loading="lazy" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="15" data-relevant="0" decoding="async" data-image-key="Magic_resistance_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Magic_resistance_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203539" alt="Magic resistance icon" height="15" data-image-name="Magic resistance icon.png"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resist</span></span>, <span style="white-space:nowrap"><a title="Movement speed" href="/wiki/Movement_speed"><img alt="Movement speed icon" height="15" data-image-name="Movement speed icon.png" width="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" data-image-key="Movement_speed_icon.png" decoding="async" loading="lazy"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img width="15" height="15" decoding="async" data-relevant="0" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Health_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203537" alt="Health icon" loading="lazy" data-image-name="Health icon.png" data-image-key="Health_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health regen</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8b/Mana_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" height="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="15" alt="Mana icon" data-image-name="Mana icon.png" decoding="async" data-image-key="Mana_icon.png" loading="lazy" data-relevant="0" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><b>bonus</b> mana regen</span></span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Singed</b> empowers himself for 25 seconds with <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img data-relevant="0" height="15" data-image-name="Ability power icon.png" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Ability_power_icon.png" class="lazyload" alt="Ability power icon" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Ability_power_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203441" width="15"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Armor icon.png" height="15" loading="lazy" decoding="async" class="lazyload" alt="Armor icon" width="15" data-image-key="Armor_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Armor_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203442" data-relevant="0"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-key="Magic_resistance_icon.png" data-relevant="0" alt="Magic resistance icon" decoding="async" data-image-name="Magic resistance icon.png" width="15" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Magic_resistance_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203539" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Movement speed icon.png" data-relevant="0" alt="Movement speed icon" height="15" width="15" data-image-key="Movement_speed_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" decoding="async" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span style="white-space:nowrap"><a title="Health regeneration" href="/wiki/Health_regeneration"><img decoding="async" width="15" data-image-key="Health_regeneration_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/31/Health_regeneration_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203536" height="15" loading="lazy" alt="Health regeneration icon" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" data-image-name="Health regeneration icon.png"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health regeneration</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Mana_regeneration" title="Mana regeneration"><img width="15" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0c/Mana_regeneration_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203539" class="lazyload" height="15" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Mana_regeneration_icon.png" alt="Mana regeneration icon" data-image-name="Mana regeneration icon.png" data-relevant="0"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><b>bonus</b> mana regeneration</span></span>.',
        leveling: [
          [
            {
              name: 'Bonus Stats:',
              values: [30.0, 47.0, 5.0, 0.0, 65.0, 82.0, 5.0, 0.0, 100.0],
              values_html:
                '30 / 47.<small>5</small> / 65 / 82.<small>5</small> / 100',
            },
          ],
          [
            {
              name: 'Regeneration per Second:',
              values: [6.0, 9.0, 5.0, 0.0, 13.0, 16.0, 5.0, 0.0, 20.0],
              values_html:
                '6 / 9.<small>5</small> / 13 / 16.<small>5</small> / 20',
            },
            {
              name: 'Total Regeneration:',
              values: [150.0, 237.0, 5.0, 0.0, 325.0, 412.0, 5.0, 0.0, 500.0],
              values_html:
                '150 / 237.<small>5</small> / 325 / 412.<small>5</small> / 500',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          'During this time, <i><span class="inline-image label-after ability-icon" data-param="" style="display:inline;white-space:pre;" data-ability="Poison Trail" data-champion="Singed" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a title="Poison Trail" href="/wiki/Singed/LoL#Poison_Trail"><img alt="Poison Trail" height="20" width="20" data-relevant="0" class="thumbborder lazyload" loading="lazy" data-image-name="Singed Poison Trail.png" decoding="async" data-image-key="Singed_Poison_Trail.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/39/Singed_Poison_Trail.png/revision/latest/scale-to-width-down/20?cb=20141023220615" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span style="white-space:normal;"><a title="Singed/LoL" href="/wiki/Singed/LoL#Poison_Trail">Poison Trail</a></span></span></i> additionally applies <span style="white-space:pre; position:relative;" class="glossary" data-tip="Grievous wounds" data-game="lol"><a title="Grievous Wounds" href="/wiki/Grievous_Wounds"><img width="20" data-image-name="Grievous Wounds icon.png" data-image-key="Grievous_Wounds_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Grievous_Wounds_icon.png/revision/latest/scale-to-width-down/20?cb=20210214111420" class="lazyload" decoding="async" height="20" data-relevant="0" alt="Grievous Wounds icon"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span>.',
        description:
          'During this time, <i><span data-param="" class="inline-image label-after ability-icon" data-game="lol" style="display:inline;white-space:pre;" data-champion="Singed" data-ability="Poison Trail"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Poison Trail" href="/wiki/Singed/LoL#Poison_Trail"><img width="20" height="20" data-image-key="Singed_Poison_Trail.png" loading="lazy" alt="Poison Trail" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/39/Singed_Poison_Trail.png/revision/latest/scale-to-width-down/20?cb=20141023220615" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-name="Singed Poison Trail.png" class="thumbborder lazyload" data-relevant="0"></a></span> <span style="white-space:normal;"><a title="Singed/LoL" href="/wiki/Singed/LoL#Poison_Trail">Poison Trail</a></span></span></i> additionally applies <span class="glossary" style="white-space:pre; position:relative;" data-tip="Grievous wounds" data-game="lol"><a title="Grievous Wounds" href="/wiki/Grievous_Wounds"><img alt="Grievous Wounds icon" data-relevant="0" width="20" data-image-key="Grievous_Wounds_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Grievous_Wounds_icon.png/revision/latest/scale-to-width-down/20?cb=20210214111420" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" loading="lazy" decoding="async" data-image-name="Grievous Wounds icon.png" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> for 1 second, which refreshes every 0.<small>25</small> seconds while the <span class="glossary" data-tip="Poison" style="white-space:pre; position:relative;" data-game="lol"><a title="Cassiopeia/LoL" href="/wiki/Cassiopeia/LoL"><img loading="lazy" data-relevant="0" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Poison_icon.png/revision/latest/scale-to-width-down/20?cb=20150129035607" decoding="async" height="20" data-image-name="Poison icon.png" data-image-key="Poison_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Poison icon" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> persists.',
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
} satisfies { [n in SkillName]: SkillGenData };
