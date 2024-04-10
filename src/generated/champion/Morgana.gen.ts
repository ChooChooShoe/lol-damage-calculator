// This file is auto-generated on Wed, 10 Apr 2024 12:27:23 -0400.

import { SkillGenData } from '@/api/DataTypes';

// prettier-ignore
export type SkillName = 'Soul Siphon' | 'Dark Binding' | 'Tormented Shadow' | 'Soul Shackles';

export const Skills = {
  'Soul Siphon': {
    name: 'Soul Siphon',
    displayName: '',
    champion: 'Morgana',
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
        icon: 'Soul Siphon.png',
        blurb:
          '<span class="template_sbc"><b>Innate:</b></span> <span data-champion="Morgana" class="inline-image label-after champion-icon" data-param="" data-skin="Original" data-game="lol" style="display:inline;white-space:pre;"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Morgana" href="/wiki/Morgana/LoL"><img width="20" data-image-key="Morgana_OriginalSquare.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-name="Morgana OriginalSquare.png" height="20" alt="Morgana" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/79/Morgana_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20190226165233" decoding="async" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a title="Morgana/LoL" href="/wiki/Morgana/LoL">Morgana</a></span></span> <span data-game="lol" data-tip="Heal" class="glossary" style="white-space:pre; position:relative;"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon" width="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Heal_power_icon.png/revision/latest/scale-to-width-down/20?cb=20170909150244" data-image-name="Heal power icon.png" loading="lazy" height="20" decoding="async" data-image-key="Heal_power_icon.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a title="Healing" href="/wiki/Healing">heals</a></span> herself for a portion of the damage dealt by her abilities against <span style="white-space:pre; position:relative;" data-tip="Champions" class="glossary" data-game="lol"><a title="Champion" href="/wiki/Champion"><img data-image-key="Champion_icon.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" height="20" alt="Champion icon" loading="lazy" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" decoding="async" data-image-name="Champion icon.png"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span data-game="lol" data-tip="Minions" class="glossary" style="white-space:pre; position:relative;"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img loading="lazy" alt="Minion icon" width="20" height="20" data-image-name="Minion icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/30/Minion_icon.png/revision/latest/scale-to-width-down/20?cb=20180701050249" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-key="Minion_icon.png" class="lazyload"></a> <a title="Minion (League of Legends)" href="/wiki/Minion_(League_of_Legends)">minions</a></span>, and medium and large <span data-game="lol" class="glossary" data-tip="Monsters" style="white-space:pre; position:relative;"><a title="Monster" href="/wiki/Monster"><img alt="Monster icon" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Monster icon.png" data-image-key="Monster_icon.png" decoding="async" data-relevant="0" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Monster_icon.png/revision/latest/scale-to-width-down/20?cb=20231028083627" height="20" width="20"></a> <a title="Monster" href="/wiki/Monster">monsters</a></span>.',
        description:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Morgana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img height="20" data-image-key="Heal_power_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Heal_power_icon.png/revision/latest/scale-to-width-down/20?cb=20170909150244" data-image-name="Heal power icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" loading="lazy" class="lazyload" width="20" data-relevant="0" alt="Heal power icon"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself for 18% of the <span class="basic-tooltip" title="Damage calculated after modifiers" style="border-bottom:1px dotted gray;cursor:help;">post-mitigation damage</span> dealt by her <a title="Champion ability" href="/wiki/Champion_ability">abilities</a> against <span class="glossary" data-tip="Champions" data-game="lol" style="white-space:pre; position:relative;"><a title="Champion" href="/wiki/Champion"><img width="20" alt="Champion icon" data-image-name="Champion icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" class="lazyload" data-relevant="0" decoding="async" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-key="Champion_icon.png"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span data-tip="Minions" class="glossary" data-game="lol" style="white-space:pre; position:relative;"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img data-image-name="Minion icon.png" alt="Minion icon" height="20" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/3/30/Minion_icon.png/revision/latest/scale-to-width-down/20?cb=20180701050249" class="lazyload" width="20" loading="lazy" data-image-key="Minion_icon.png"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and medium and large <span class="glossary" style="white-space:pre; position:relative;" data-tip="Monsters" data-game="lol"><a href="/wiki/Monster" title="Monster"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" width="20" height="20" data-relevant="0" decoding="async" class="lazyload" alt="Monster icon" data-image-name="Monster icon.png" data-image-key="Monster_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Monster_icon.png/revision/latest/scale-to-width-down/20?cb=20231028083627"></a> <a title="Monster" href="/wiki/Monster">monsters</a></span>.',
        leveling: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: '',
    spelleffects: 'Heal',
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
  'Dark Binding': {
    name: 'Dark Binding',
    displayName: '',
    champion: 'Morgana',
    skill: 'Q',
    range:
      '<span data-tip="Cr" style="white-space:pre; position:relative;" data-game="lol" class="glossary"><a title="Range" href="/wiki/Range"><img data-image-key="Range_center.png" data-relevant="1" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Range center" width="20" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" height="20" data-image-name="Range center.png" decoding="async" loading="lazy"></a></span> 1300',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius: '',
    width:
      '<span data-game="lol" style="white-space:pre; position:relative;" class="glossary" data-tip="Er"><a title="Range" href="/wiki/Range"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" data-image-name="Range model.png" decoding="async" data-relevant="1" alt="Range model" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/71/Range_model.png/revision/latest/scale-to-width-down/20?cb=20150616134216" loading="lazy" height="20" width="20" data-image-key="Range_model.png"></a></span> 140',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [1200.0],
    castTime: '0.<small>25</small>',
    cost: [50.0, 55.0, 60.0, 65.0, 70.0],
    costtype: 'Mana',
    static: '',
    cooldown: [10.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Dark Binding.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> throws a sphere of dark magic in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" data-game="lol" data-tip="Root" style="white-space:pre; position:relative;"><a href="/wiki/Root" title="Root"><img width="20" data-image-key="Root_icon.png" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/6b/Root_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224302" alt="Root icon" data-relevant="0" class="lazyload" data-image-name="Root icon.png" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20"></a> <a class="mw-redirect" title="Root" href="/wiki/Root">roots</a></span> them for a "short time".',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> throws a sphere of dark magic in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" data-tip="Root" data-game="lol" style="white-space:pre; position:relative;"><a href="/wiki/Root" title="Root"><img class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/6b/Root_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224302" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Root icon" decoding="async" data-image-name="Root icon.png" data-relevant="0" data-image-key="Root_icon.png" loading="lazy" height="20"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration.',
        leveling: [
          [
            {
              name: 'Magic Damage:',
              values: [80.0, 135.0, 190.0, 245.0, 300.0, 0.0],
              values_html:
                '80 / 135 / 190 / 245 / 300 <span style="color: #7A6DFF; white-space:normal">(+ 90% AP)</span>',
            },
          ],
          [
            {
              name: 'Root Duration:',
              values: [2.0, 2.0, 25.0, 0.0, 2.0, 5.0, 0.0, 2.0, 75.0, 0.0, 3.0],
              values_html:
                '2 / 2.<small>25</small> / 2.<small>5</small> / 2.<small>75</small> / 3',
            },
          ],
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: 'True',
    projectile: 'True',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.',
    flavortext: '',
    flavorsound: '',
  },
  'Tormented Shadow': {
    name: 'Tormented Shadow',
    displayName: '',
    champion: 'Morgana',
    skill: 'W',
    range: '',
    targetRange: '900',
    attackRange: '',
    collisionRadius: '',
    effectRadius: '275',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: '0.<small>25</small>',
    cost: [70.0, 85.0, 100.0, 115.0, 130.0],
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
        icon: 'false',
        blurb:
          '<span class="template_sbc"><b>Passive:</b></span> <i>Tormented Shadow\'s</i> <b>current</b> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img data-relevant="0" class="lazyload" height="15" decoding="async" alt="Cooldown reduction icon" loading="lazy" width="15" data-image-name="Cooldown reduction icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/95/Cooldown_reduction_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203444" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Cooldown_reduction_icon.png"></a>&nbsp;reduced</span> whenever <i><span data-param="" data-ability="Soul Siphon" data-champion="Morgana" class="inline-image label-after ability-icon" data-game="lol" style="display:inline;white-space:pre;"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a href="/wiki/Morgana/LoL#Soul_Siphon" title="Soul Siphon"><img width="20" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" data-relevant="0" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/71/Morgana_Soul_Siphon.png/revision/latest/scale-to-width-down/20?cb=20160608032411" decoding="async" alt="Soul Siphon" data-image-key="Morgana_Soul_Siphon.png" data-image-name="Morgana Soul Siphon.png"></a></span> <span style="white-space:normal;"><a title="Morgana/LoL" href="/wiki/Morgana/LoL#Soul_Siphon">Soul Siphon</a></span></span></i> triggers.',
        description:
          '<span class="template_sbc"><b>Passive:</b></span> <i>Tormented Shadow\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="15" width="15" data-image-name="Cooldown icon.png" alt="Cooldown icon" data-image-key="Cooldown_icon.png" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" data-relevant="0" class="lazyload" loading="lazy"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 5% of its <b>total</b> cooldown whenever <i><span data-champion="Morgana" data-ability="Soul Siphon" data-game="lol" style="display:inline;white-space:pre;" class="inline-image label-after ability-icon" data-param=""><span class="border" data-width="20" style="display:inline-block;position:relative;"><a title="Soul Siphon" href="/wiki/Morgana/LoL#Soul_Siphon"><img data-image-key="Morgana_Soul_Siphon.png" class="thumbborder lazyload" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Soul Siphon" loading="lazy" data-image-name="Morgana Soul Siphon.png" width="20" height="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/71/Morgana_Soul_Siphon.png/revision/latest/scale-to-width-down/20?cb=20160608032411"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL#Soul_Siphon" title="Morgana/LoL">Soul Siphon</a></span></span></i> triggers. Simultaneous triggers from multiple targets will stack the cooldown reduction.',
        leveling: [],
      },
      {
        icon: 'Tormented Shadow.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" data-param="" data-game="lol" style="display:inline;white-space:pre;" data-champion="Morgana" data-skin="Original"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Morgana/LoL" title="Morgana"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Morgana" loading="lazy" class="thumbborder lazyload" data-image-key="Morgana_OriginalSquare.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/79/Morgana_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20190226165233" data-image-name="Morgana OriginalSquare.png" width="20" decoding="async" height="20"></a></span> <span style="white-space:normal;"><a title="Morgana/LoL" href="/wiki/Morgana/LoL">Morgana</a></span></span> desecrates the target area for a few seconds, which continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> torments the soil at the target location, causing the area to become desecrated for 5 seconds. Enemies within take <span style="color: #00B0F0; white-space:normal">magic damage</span> on-cast and every 0.<small>5</small> seconds, increased by <span style="color: #1F995C; white-space:normal"><span data-top_label="target\'s missing health" data-top_key="%" data-bot_key="%" data-bot_values="0;17;34;51;68;85;102;119;136;153;170" style="position:relative; border-bottom:1px dotted; cursor:help;" class="pp-tooltip" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-displayformula="1.7% per 1% of target\'s \'\'\'missing\'\'\' health">0% − 170% (based on target\'s <b>missing</b> health)</span></span>. <i>Tormented Shadow</i> deals 170% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Monster_icon.png/revision/latest/scale-to-width-down/20?cb=20231028083627" loading="lazy" data-relevant="0" alt="Monster icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" width="20" height="20" data-image-name="Monster icon.png" data-image-key="Monster_icon.png" class="lazyload"></a> <a title="Monster" href="/wiki/Monster">monsters</a></span>.',
        leveling: [
          [
            {
              name: 'Minimum Damage Per Tick:',
              values: [
                6.0, 11.0, 5.0, 0.0, 17.0, 22.0, 5.0, 0.0, 28.0, 0.0, 5.0, 0.0,
              ],
              values_html:
                '6 / 11.<small>5</small> / 17 / 22.<small>5</small> / 28 <span style="color: #7A6DFF; white-space:normal">(+ 8.<small>5</small>% AP)</span>',
            },
            {
              name: 'Maximum Damage Per Tick:',
              values: [
                16.0, 2.0, 0.0, 31.0, 5.0, 0.0, 45.0, 9.0, 0.0, 60.0, 75.0, 0.0,
                75.0, 6.0, 0.0, 0.0, 95.0, 0.0,
              ],
              values_html:
                '16.<small>2</small> / 31.<small>05</small> / 45.<small>9</small> / 60.<small>75</small> / 75.<small>6</small> <span style="color: #7A6DFF; white-space:normal">(+ 22.<small>95</small>% AP)</span>',
            },
          ],
          [
            {
              name: 'Minimum Total Damage:',
              values: [60.0, 115.0, 170.0, 225.0, 280.0, 0.0],
              values_html:
                '60 / 115 / 170 / 225 / 280 <span style="color: #7A6DFF; white-space:normal">(+ 85% AP)</span>',
            },
            {
              name: 'Maximum Total Damage:',
              values: [
                162.0, 310.0, 5.0, 0.0, 459.0, 607.0, 5.0, 0.0, 756.0, 0.0, 5.0,
                0.0,
              ],
              values_html:
                '162 / 310.<small>5</small> / 459 / 607.<small>5</small> / 756 <span style="color: #7A6DFF; white-space:normal">(+ 229.<small>5</small>% AP)</span>',
            },
          ],
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: 'False',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes: '* Damage from multiple <i>Tormented Shadows</i> does not stack.',
    flavortext: '',
    flavorsound: '',
  },
  'Soul Shackles': {
    name: 'Soul Shackles',
    displayName: '',
    champion: 'Morgana',
    skill: 'R',
    range: '',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a title="Range" href="/wiki/Range"><img loading="lazy" data-image-key="Range_center.png" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" alt="Range center" height="20" data-image-name="Range center.png" class="lazyload" data-relevant="1" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211"></a></span> <span class="basic-tooltip" title="Can only cast if an enemy champion is within this range" style="border-bottom:1px dotted gray;cursor:help;">575</span> / <span style="border-bottom:1px dotted gray;cursor:help;" title="Latch-on range" class="basic-tooltip">625</span>',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius:
      '<span class="glossary" data-game="lol" data-tip="Er" style="white-space:pre; position:relative;"><a href="/wiki/Range" title="Range"><img alt="Range model" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-key="Range_model.png" data-relevant="1" loading="lazy" height="20" data-image-name="Range model.png" class="lazyload" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/71/Range_model.png/revision/latest/scale-to-width-down/20?cb=20150616134216"></a></span> 625',
    speed: [0.0],
    castTime: '0.<small>35</small>',
    cost: [100.0],
    costtype: 'Mana',
    static: '',
    cooldown: [120.0, 115.0, 110.0, 105.0, 100.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Soul Shackles.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-champion="Morgana" data-skin="Original" style="display:inline;white-space:pre;" data-game="lol" class="inline-image label-after champion-icon" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Morgana" href="/wiki/Morgana/LoL"><img decoding="async" class="thumbborder lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/79/Morgana_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20190226165233" data-image-name="Morgana OriginalSquare.png" data-relevant="0" alt="Morgana" width="20" data-image-key="Morgana_OriginalSquare.png"></a></span> <span style="white-space:normal;"><a title="Morgana/LoL" href="/wiki/Morgana/LoL">Morgana</a></span></span> latches chains of energy onto nearby enemy champions, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and forming a <span class="glossary" data-tip="Tether" data-game="lol" style="white-space:pre; position:relative;"><a href="/wiki/Tether" title="Tether"><img data-image-key="Karma_Focused_Resolve.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" loading="lazy" width="20" alt="Focused Resolve" class="lazyload" decoding="async" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/57/Karma_Focused_Resolve.png/revision/latest/scale-to-width-down/20?cb=20130929122918" data-image-name="Karma Focused Resolve.png"></a> <a title="Tether" href="/wiki/Tether">tether</a></span> between herself and each target for a short time, during which the targets are <span data-game="lol" data-tip="True sight" style="white-space:pre; position:relative;" class="glossary"><a href="/wiki/Sight#True_sight" title="Sight"><img data-image-key="True_Sight_icon.png" data-relevant="0" class="lazyload" data-image-name="True Sight icon.png" decoding="async" alt="True Sight icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/True_Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20150808161653" loading="lazy"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-tip="Slow" data-game="lol"><a title="Slow" href="/wiki/Slow"><img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-name="Slow icon.png" data-relevant="0" decoding="async" height="20" data-image-key="Slow_icon.png" alt="Slow icon" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744"></a> <a href="/wiki/Slow" title="Slow" class="mw-redirect">slowed</a></span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> latches chains of energy onto nearby enemy champions over the cast time, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and forming a <span style="white-space:pre; position:relative;" data-tip="Tether" class="glossary" data-game="lol"><a href="/wiki/Tether" title="Tether"><img width="20" data-image-name="Karma Focused Resolve.png" loading="lazy" data-image-key="Karma_Focused_Resolve.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" decoding="async" class="lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/57/Karma_Focused_Resolve.png/revision/latest/scale-to-width-down/20?cb=20130929122918" alt="Focused Resolve" data-relevant="0"></a> <a title="Tether" href="/wiki/Tether">tether</a></span> between herself and each target for 3 seconds, during which she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" class="lazyload" alt="Movement speed icon" data-relevant="0" height="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Movement_speed_icon.png" width="15" loading="lazy" decoding="async" data-image-name="Movement speed icon.png"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and the targets are <span class="glossary" data-tip="True sight" style="white-space:pre; position:relative;" data-game="lol"><a title="Sight" href="/wiki/Sight#True_sight"><img class="lazyload" decoding="async" width="20" alt="True Sight icon" height="20" data-image-key="True_Sight_icon.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/True_Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20150808161653" loading="lazy" data-image-name="True Sight icon.png"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <span class="glossary" data-game="lol" style="white-space:pre; position:relative;" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon" loading="lazy" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Slow icon.png" data-relevant="0" class="lazyload" height="20" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Slow_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224744" data-image-key="Slow_icon.png"></a> <a title="Slow" class="mw-redirect" href="/wiki/Slow">slowed</a></span> by 20%.',
        leveling: [
          [
            {
              name: 'Magic Damage:',
              values: [
                175.0, 212.0, 5.0, 0.0, 250.0, 287.0, 5.0, 0.0, 325.0, 0.0,
              ],
              values_html:
                '175 / 212.<small>5</small> / 250 / 287.<small>5</small> / 325 <span style="color: #7A6DFF; white-space:normal">(+ 80% AP)</span>',
            },
            {
              name: 'Total Magic Damage:',
              values: [350.0, 425.0, 500.0, 575.0, 650.0, 0.0],
              values_html:
                '350 / 425 / 500 / 575 / 650 <span style="color: #7A6DFF; white-space:normal">(+ 160% AP)</span>',
            },
          ],
          [
            {
              name: 'Bonus Movement Speed:',
              values: [10.0, 22.0, 5.0, 0.0, 35.0, 47.0, 5.0, 0.0, 0.0],
              values_html:
                '10 / 22.<small>5</small> / 35 / 47.<small>5</small> / 60%',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          '<b>Morgana</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" alt="Movement speed icon" width="15" height="15" data-image-name="Movement speed icon.png" data-image-key="Movement_speed_icon.png" class="lazyload" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> when moving towards enemies tethered to her.',
        description:
          'If a target does not break their tether by the ends of its duration, they are dealt the same <span style="color: #00B0F0; white-space:normal">magic damage</span> again and become <span style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun" class="glossary"><a href="/wiki/Stun" title="Stun"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-name="Stun icon.png" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940" width="20" data-image-key="Stun_icon.png" data-relevant="0" alt="Stun icon" height="20" class="lazyload"></a> <a href="/wiki/Stun" title="Stun" class="mw-redirect">stunned</a></span> for a duration, during which they are <span data-game="lol" data-tip="True sight" class="glossary" style="white-space:pre; position:relative;"><a title="Sight" href="/wiki/Sight#True_sight"><img data-image-key="True_Sight_icon.png" decoding="async" width="20" height="20" alt="True Sight icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/True_Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20150808161653" data-image-name="True Sight icon.png" data-relevant="0" class="lazyload" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        leveling: [
          [
            {
              name: 'Stun Duration:',
              values: [
                1.0, 5.0, 0.0, 1.0, 625.0, 0.0, 1.0, 75.0, 0.0, 1.0, 875.0, 0.0,
                2.0,
              ],
              values_html:
                '1.<small>5</small> / 1.<small>625</small> / 1.<small>75</small> / 1.<small>875</small> / 2',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          'If a target maintains the tether after its duration, they are dealt the same <span style="color: #00B0F0; white-space:normal">magic damage</span> and become briefly <span class="glossary" style="white-space:pre; position:relative;" data-tip="True sight" data-game="lol"><a href="/wiki/Sight#True_sight" title="Sight"><img class="lazyload" width="20" decoding="async" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="True Sight icon.png" data-image-key="True_Sight_icon.png" loading="lazy" data-relevant="0" alt="True Sight icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/True_Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20150808161653"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <span class="glossary" data-game="lol" style="white-space:pre; position:relative;" data-tip="Stun"><a title="Stun" href="/wiki/Stun"><img alt="Stun icon" loading="lazy" decoding="async" data-image-name="Stun icon.png" width="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" data-image-key="Stun_icon.png"></a> <a class="mw-redirect" title="Stun" href="/wiki/Stun">stunned</a></span>.',
        description:
          '<i>A nearby enemy champion is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-tip="Sight" data-game="lol"><a href="/wiki/Sight" title="Sight"><img loading="lazy" alt="Sight icon" data-image-key="Sight_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" width="20" data-image-name="Sight icon.png" height="20" decoding="async" data-relevant="0"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be tethered by this ability.</i>',
        leveling: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'False',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* <span style="white-space:pre; position:relative;" data-tip="Spell shield" class="glossary" data-game="lol"><a title="Spell shield" href="/wiki/Spell_shield"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Sivir_Spell_Shield.png/revision/latest/scale-to-width-down/20?cb=20170818194532" loading="lazy" alt="Spell Shield" height="20" data-image-key="Sivir_Spell_Shield.png" decoding="async" data-relevant="0" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Sivir Spell Shield.png" width="20"></a> <a title="Spell shield" href="/wiki/Spell_shield">Spell shield</a></span> will block the tether\'s application and initial damage but not the aftereffects of one already applied.\n<ul><li><b>Morgana</b> will turn to face southeast upon casting <i>Soul Shackles</i>.</li></ul>',
    flavortext: '',
    flavorsound:
      '<span><audio class="ext-audiobutton" hidden="" preload="none" data-volume="1.0"><source src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c9/Morgana_Original_R_SpellCastR_4.ogg/revision/latest?cb=20200402071313" type="application/ogg"><a href="https://static.wikia.nocookie.net/leagueoflegends/images/c/c9/Morgana_Original_R_SpellCastR_4.ogg/revision/latest?cb=20200402071313">Link</a></audio><a data-state="play" title="Play/Pause" class="ext-audiobutton">▶️</a></span><sup><a href="/wiki/File:Morgana_Original_R_SpellCastR_4.ogg" title="File:Morgana Original R SpellCastR 4.ogg">&nbsp;&nbsp;</a></sup> <i>"I will take on everything!"</i>',
  },
} satisfies { [n in SkillName]: SkillGenData };
