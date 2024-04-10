// This file is auto-generated on Wed, 10 Apr 2024 12:26:01 -0400.

import { SkillGenData } from '@/api/DataTypes';

// prettier-ignore
export type SkillName = 'Pyromania' | 'Disintegrate' | 'Incinerate' | 'Summon: Tibbers' | 'Summon: Tibbers';

export const Skills = {
  Pyromania: {
    name: 'Pyromania',
    displayName: '',
    champion: 'Annie',
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
        icon: 'Pyromania.png',
        blurb:
          '<span class="template_sbc"><b>Innate:</b></span> <span data-champion="Annie" data-param="" style="display:inline;white-space:pre;" data-skin="Original" data-game="lol" class="inline-image label-after champion-icon"><span class="border" data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Annie/LoL" title="Annie\'s"><img alt="Annie\'s" data-image-name="Annie OriginalSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758" data-relevant="0" width="20" height="20" loading="lazy" decoding="async" class="thumbborder lazyload" data-image-key="Annie_OriginalSquare.png"></a></span> <span style="white-space:normal;"><a title="Annie/LoL" href="/wiki/Annie/LoL">Annie\'s</a></span></span> spell-casts generate stacks. At maximum stacks, her next offensive spell will consume them to <span class="glossary" style="white-space:pre; position:relative;" data-tip="Stun" data-game="lol"><a title="Stun" href="/wiki/Stun"><img data-image-key="Stun_icon.png" class="lazyload" width="20" loading="lazy" data-image-name="Stun icon.png" data-relevant="0" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940" alt="Stun icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target.',
        description:
          '<span class="template_sbc"><b>Innate - Pyromania:</b></span> <b>Annie</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Pyromania</i> whenever she hits an enemy with <i><span data-game="lol" style="display:inline;white-space:pre;" class="inline-image label-after ability-icon" data-champion="Annie" data-ability="Disintegrate" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Disintegrate" title="Disintegrate"><img class="thumbborder lazyload" alt="Disintegrate" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-name="Annie Disintegrate.png" data-image-key="Annie_Disintegrate.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Annie_Disintegrate.png/revision/latest/scale-to-width-down/20?cb=20130929122652" decoding="async" width="20" height="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Disintegrate" title="Annie/LoL">Disintegrate</a></span></span></i> or casts her other <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, stacking up to 4 times, at which she gains <i>Energized</i>.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<span class="template_sbc"><b>Energized:</b></span> <b>Annie</b> empowers her next cast of <i><span data-champion="Annie" class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-game="lol" data-ability="Disintegrate"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Disintegrate" title="Disintegrate"><img alt="Disintegrate" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" width="20" data-image-key="Annie_Disintegrate.png" loading="lazy" data-image-name="Annie Disintegrate.png" data-relevant="0" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Annie_Disintegrate.png/revision/latest/scale-to-width-down/20?cb=20130929122652" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Disintegrate" title="Annie/LoL">Disintegrate</a></span></span></i>, <i><span data-game="lol" class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Incinerate"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Incinerate" title="Incinerate"><img width="20" decoding="async" loading="lazy" data-relevant="0" data-image-key="Annie_Incinerate.png" data-image-name="Annie Incinerate.png" alt="Incinerate" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ed/Annie_Incinerate.png/revision/latest/scale-to-width-down/20?cb=20130929122653" height="20" class="thumbborder lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span style="white-space:normal;"><a title="Annie/LoL" href="/wiki/Annie/LoL#Incinerate">Incinerate</a></span></span></i>, or <i><span data-game="lol" data-param="" style="display:inline;white-space:pre;" data-champion="Annie" class="inline-image label-after ability-icon" data-ability="Summon: Tibbers"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a href="/wiki/Annie/LoL#Summon:_Tibbers" title="Summon: Tibbers"><img data-relevant="0" loading="lazy" data-image-name="Annie Summon- Tibbers.png" alt="Summon: Tibbers" height="20" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/92/Annie_Summon-_Tibbers.png/revision/latest/scale-to-width-down/20?cb=20170818001022" data-image-key="Annie_Summon-_Tibbers.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Summon:_Tibbers" title="Annie/LoL">Summon: Tibbers</a></span></span></i> to consume all <i>Pyromania</i> stacks to <span data-tip="Stun" class="glossary" style="white-space:pre; position:relative;" data-game="lol"><a title="Stun" href="/wiki/Stun"><img data-image-name="Stun icon.png" data-relevant="0" width="20" decoding="async" data-image-key="Stun_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Stun icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940" class="lazyload" loading="lazy" height="20"></a> <a class="mw-redirect" href="/wiki/Stun" title="Stun">stun</a></span> enemies hit for <span class="pp-tooltip" data-start="1.25;1" data-finish="1.75;11" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="1.25;1.5;1.75" data-top_values="1;6;11">1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> (based on level)</span> seconds.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<b>Annie</b> gains maximum stacks of <i>Pyromania</i> when the game starts and upon <a title="Death" href="/wiki/Death">respawning</a>. She will lose <i>Energized</i> and all <i>Pyromania</i> stacks upon <a title="Death" href="/wiki/Death">death</a>.',
        leveling: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: '',
    spelleffects: '',
    spellshield: 'True',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* <b>Annie</b> does not lose any stacks if she enters <span class="glossary" data-game="lol" style="white-space:pre; position:relative;" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death"><img data-image-key="Revival_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7c/Revival_icon.png/revision/latest/scale-to-width-down/20?cb=20170714051127" class="lazyload" alt="Revival icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" height="20" width="20" data-image-name="Revival icon.png" data-relevant="0" loading="lazy"></a> <a title="Death" href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health">resurrection</a></span>.\n<ul><li>Stacks are gained even if the ability is blocked by <span style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield" class="glossary"><a title="Spell shield" href="/wiki/Spell_shield"><img height="20" loading="lazy" alt="Spell Shield" decoding="async" data-image-name="Sivir Spell Shield.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Sivir_Spell_Shield.png/revision/latest/scale-to-width-down/20?cb=20170818194532" data-image-key="Sivir_Spell_Shield.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  Disintegrate: {
    name: 'Disintegrate',
    displayName: '',
    champion: 'Annie',
    skill: 'Q',
    range: '',
    targetRange:
      '<span class="glossary" style="white-space:pre; position:relative;" data-tip="Cr" data-game="lol"><a title="Range" href="/wiki/Range"><img data-image-key="Range_center.png" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Range center.png" decoding="async" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" class="lazyload" data-relevant="1" alt="Range center" width="20"></a></span> 625',
    attackRange: '',
    collisionRadius: '',
    effectRadius: '',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: '0.<small>25</small>',
    cost: [60.0, 65.0, 70.0, 75.0, 80.0],
    costtype: 'mana',
    static: '',
    cooldown: [4.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Disintegrate.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" data-game="lol" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-skin="Original"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a href="/wiki/Annie/LoL" title="Annie"><img height="20" decoding="async" alt="Annie" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-name="Annie OriginalSquare.png" data-image-key="Annie_OriginalSquare.png" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758" class="thumbborder lazyload" data-relevant="0"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie</a></span></span> hurls a fireball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> hurls a fireball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        leveling: [
          [
            {
              name: 'Magic Damage:',
              values: [70.0, 105.0, 140.0, 175.0, 210.0, 0.0],
              values_html:
                '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+ 75% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          'If this kills the target, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img class="lazyload" loading="lazy" alt="Cooldown icon" data-image-name="Cooldown icon.png" width="15" data-image-key="Cooldown_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" height="15" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027"></a>&nbsp;cooldown</span> is reduced and the <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img loading="lazy" width="15" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8b/Mana_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" data-image-key="Mana_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" data-image-name="Mana icon.png" height="15" alt="Mana icon" decoding="async"></a>&nbsp;mana cost</span></span> is refunded.',
        description:
          'If this kills the target, 50% of the <span style="white-space:nowrap"><a title="Cooldown" href="/wiki/Cooldown"><img loading="lazy" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" class="lazyload" width="15" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Cooldown icon" decoding="async" height="15" data-image-name="Cooldown icon.png" data-image-key="Cooldown_icon.png"></a>&nbsp;cooldown</span> is reduced and the <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a title="Mana" href="/wiki/Mana"><img data-image-key="Mana_icon.png" data-image-name="Mana icon.png" loading="lazy" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8b/Mana_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" height="15" width="15" decoding="async" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Mana icon"></a>&nbsp;mana cost</span></span> is refunded.',
        leveling: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: 'True',
    projectile: 'True',
    callforhelp: 'True',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* If the target becomes <span style="white-space:pre; position:relative;" data-tip="Untargetable" class="glossary" data-game="lol"><a href="/wiki/Untargetable" title="Untargetable"><img height="20" data-image-key="Untargetable_icon.png" alt="Untargetable icon" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Untargetable_icon.png/revision/latest/scale-to-width-down/20?cb=20220206063243" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Untargetable icon.png" data-relevant="0" decoding="async" class="lazyload"></a> <a title="Untargetable" href="/wiki/Untargetable" class="mw-redirect">untargetable</a></span>, <span style="white-space:pre; position:relative;" data-game="lol" class="glossary" data-tip="Death"><a title="Death" href="/wiki/Death"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Death" height="20" data-image-name="Death.png" data-image-key="Death.png" loading="lazy" data-relevant="0" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c3/Death.png/revision/latest/scale-to-width-down/20?cb=20200415031113" class="lazyload" decoding="async"></a> <a title="Death" href="/wiki/Death">dies</a></span>, or is too far away or no longer in <span data-tip="Sight" class="glossary" data-game="lol" style="white-space:pre; position:relative;"><a title="Sight" href="/wiki/Sight"><img data-image-key="Sight_icon.png" decoding="async" data-relevant="0" height="20" data-image-name="Sight icon.png" class="lazyload" loading="lazy" alt="Sight icon" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img data-image-key="Cooldown_icon.png" alt="Cooldown icon" data-relevant="0" class="lazyload" height="15" decoding="async" loading="lazy" data-image-name="Cooldown icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="15"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
    flavortext: '',
    flavorsound: '',
  },
  Incinerate: {
    name: 'Incinerate',
    displayName: '',
    champion: 'Annie',
    skill: 'W',
    range: '',
    targetRange: '',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-tip="Er" data-game="lol"><a href="/wiki/Range" title="Range"><img class="lazyload" height="20" data-image-name="Range model.png" data-relevant="1" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-key="Range_model.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/71/Range_model.png/revision/latest/scale-to-width-down/20?cb=20150616134216" loading="lazy" alt="Range model"></a></span> 600',
    width: '',
    angle:
      '<span style="white-space:pre; position:relative;" data-tip="Er" class="glossary" data-game="lol"><a title="Range" href="/wiki/Range"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Range model.png" data-relevant="1" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/71/Range_model.png/revision/latest/scale-to-width-down/20?cb=20150616134216" class="lazyload" loading="lazy" height="20" width="20" data-image-key="Range_model.png" alt="Range model"></a></span> 49.<small>52</small>°',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: '0.<small>25</small>',
    cost: [90.0, 95.0, 100.0, 105.0, 110.0],
    costtype: 'mana',
    static: '',
    cooldown: [8.0],
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Incinerate.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-game="lol" data-champion="Annie" class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-skin="Original" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL" title="Annie"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758" alt="Annie" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" data-image-name="Annie OriginalSquare.png" data-image-key="Annie_OriginalSquare.png" data-relevant="0" decoding="async" loading="lazy" width="20" height="20"></a></span> <span style="white-space:normal;"><a title="Annie/LoL" href="/wiki/Annie/LoL">Annie</a></span></span> casts a blazing cone of fire, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> releases fire in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        leveling: [
          [
            {
              name: 'Magic Damage:',
              values: [70.0, 115.0, 160.0, 205.0, 250.0, 0.0],
              values_html:
                '70 / 115 / 160 / 205 / 250 <span style="color: #7A6DFF; white-space:normal">(+ 85% AP)</span>',
            },
          ],
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'True',
    projectile: 'False',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* <i>Incinerate</i> can hit targets behind <b>Annie</b>, provided their radius intersects with the cone hitbox.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  'Summon: Tibbers': {
    name: 'Summon: Tibbers',
    displayName: '',
    champion: 'Annie',
    skill: 'R',
    range: '',
    targetRange:
      '<span data-game="lol" data-tip="Cr" style="white-space:pre; position:relative;" class="glossary"><a href="/wiki/Range" title="Range"><img loading="lazy" data-relevant="1" data-image-name="Range center.png" height="20" decoding="async" alt="Range center" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" width="20" data-image-key="Range_center.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span style="border-bottom:1px dotted gray;cursor:help;" title="Cast range" class="basic-tooltip">600</span>',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span class="glossary" data-game="lol" style="white-space:pre; position:relative;" data-tip="Cr"><a href="/wiki/Range" title="Range"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" width="20" alt="Range center" data-image-key="Range_center.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" data-relevant="1" height="20" class="lazyload" decoding="async" data-image-name="Range center.png"></a></span> <span style="border-bottom:1px dotted gray;cursor:help;" title="Summon impact radius" class="basic-tooltip">250</span> / <span style="white-space:pre; position:relative;" data-game="lol" class="glossary" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center" height="20" data-relevant="1" loading="lazy" data-image-key="Range_center.png" class="lazyload" decoding="async" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Range center.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211"></a></span> <span title="Tibbers\' aura radius" class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;">350</span>',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: '0.<small>25</small>',
    cost: [100.0],
    costtype: 'Mana',
    static: '',
    cooldown: [130.0, 122.0, 5.0, 0.0, 115.0, 107.0, 5.0, 0.0, 100.0],
    cdstart: 'on-cast',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Summon Tibbers.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-param="" class="inline-image label-after champion-icon" data-champion="Annie" data-skin="Original" data-game="lol" style="display:inline;white-space:pre;"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL" title="Annie"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758" width="20" alt="Annie" height="20" data-image-name="Annie OriginalSquare.png" data-image-key="Annie_OriginalSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" class="thumbborder lazyload" decoding="async" data-relevant="0"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie</a></span></span> summons her bear <span style="display:inline;white-space:pre;" data-param="" class="inline-image unit-icon label-after"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Tibbers" href="/wiki/Tibbers"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" decoding="async" alt="Tibbers" width="20" data-image-name="TibbersSquare.png" height="20" data-image-key="TibbersSquare.png" data-relevant="0" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a class="mw-redirect" title="Tibbers" href="/wiki/Tibbers">Tibbers</a></span></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in the area.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> summons <span data-param="" class="inline-image unit-icon label-after" style="display:inline;white-space:pre;"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a href="/wiki/Tibbers" title="Tibbers"><img height="20" class="thumbborder lazyload" alt="Tibbers" data-image-name="TibbersSquare.png" data-relevant="0" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" decoding="async" loading="lazy" data-image-key="TibbersSquare.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> to the target location in a burst of flame, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies near him. <i>Summon: Tibbers</i> can be recast at any time while <span class="inline-image unit-icon label-after" data-param="" style="display:inline;white-space:pre;"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Tibbers" title="Tibbers"><img data-relevant="0" loading="lazy" width="20" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" alt="Tibbers" data-image-name="TibbersSquare.png" decoding="async" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="TibbersSquare.png"></a></span> <span style="white-space:normal;"><a title="Tibbers" class="mw-redirect" href="/wiki/Tibbers">Tibbers</a></span></span> is alive.',
        leveling: [
          [
            {
              name: 'Initial Magic Damage:',
              values: [
                150.0, 212.0, 5.0, 0.0, 275.0, 337.0, 5.0, 0.0, 400.0, 0.0,
              ],
              values_html:
                '150 / 212.<small>5</small> / 275 / 337.<small>5</small> / 400 <span style="color: #7A6DFF; white-space:normal">(+ 75% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          '<span style="display:inline;white-space:pre;" data-param="" class="inline-image unit-icon label-after"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Tibbers" href="/wiki/Tibbers"><img alt="Tibbers" loading="lazy" decoding="async" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="TibbersSquare.png" data-image-key="TibbersSquare.png" width="20" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" data-relevant="0"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> with his attacks and also burns nearby enemies. Re-cast to direct him.',
        description:
          '<span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" data-width="20" style="display:inline-block;position:relative;"><a title="Tibbers" href="/wiki/Tibbers"><img loading="lazy" alt="Tibbers" data-image-name="TibbersSquare.png" data-image-key="TibbersSquare.png" data-relevant="0" decoding="async" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" height="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" title="Tibbers" class="mw-redirect">Tibbers</a></span></span> then remains on the field as a controllable <span class="glossary" style="white-space:pre; position:relative;" data-tip="Pet" data-game="lol"><a href="/wiki/Pets" title="Pets"><img loading="lazy" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/92/Annie_Summon-_Tibbers.png/revision/latest/scale-to-width-down/20?cb=20170818001022" data-image-key="Annie_Summon-_Tibbers.png" decoding="async" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" class="lazyload" alt="Summon Tibbers" data-image-name="Annie Summon- Tibbers.png"></a> <a href="/wiki/Pets" title="Pets">pet</a></span> for up to 45 seconds.',
        leveling: [],
      },
      {
        icon: 'Command- Tibbers.png',
        blurb: '',
        description:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Annie</b> directs <span style="display:inline;white-space:pre;" data-param="" class="inline-image unit-icon label-after"><span class="border" data-width="20" style="display:inline-block;position:relative;"><a title="Tibbers" href="/wiki/Tibbers"><img alt="Tibbers" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" width="20" height="20" decoding="async" loading="lazy" class="thumbborder lazyload" data-image-key="TibbersSquare.png" data-image-name="TibbersSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0"></a></span> <span style="white-space:normal;"><a class="mw-redirect" title="Tibbers" href="/wiki/Tibbers">Tibbers</a></span></span> to the target location.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<i>Summon: Tibber\'s recast can be used while affected by <span style="white-space:pre; position:relative;" data-tip="Cast-inhibiting crowd control" class="glossary" data-game="lol"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control"><img data-image-name="Silence icon.png" data-relevant="0" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" data-image-key="Silence_icon.png" alt="Silence icon" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223938" width="20" loading="lazy"></a> <a title="Crowd control" href="/wiki/Crowd_control#Disrupting">cast-inhibiting crowd control</a></span>. See <a title="Annie/LoL" href="/wiki/Annie/LoL#Pets">Pets</a> for more details about <span style="display:inline;white-space:pre;" data-param="" class="inline-image unit-icon label-after"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" decoding="async" data-relevant="0" loading="lazy" class="thumbborder lazyload" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" data-image-key="TibbersSquare.png" data-image-name="TibbersSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span>.</i>',
        leveling: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies / Tibbers',
    damagetype: 'magic',
    spelleffects: 'special',
    spellshield: 'True',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* Burst of flame deals <span data-tip="Area damage" style="white-space:pre; position:relative;" data-game="lol" class="glossary"><a title="Damage" href="/wiki/Damage"><img decoding="async" height="20" data-relevant="0" loading="lazy" alt="Death Lotus" class="lazyload" data-image-name="Katarina Death Lotus.png" data-image-key="Katarina_Death_Lotus.png" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/77/Katarina_Death_Lotus.png/revision/latest/scale-to-width-down/20?cb=20170707191154" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> and <i>Tibbers\' </i> basic attacks apply <span class="glossary" data-tip="Pet damage" data-game="lol" style="white-space:pre; position:relative;"><a href="/wiki/Damage" title="Damage"><img decoding="async" data-image-name="Malzahar Void Swarm.png" data-image-key="Malzahar_Void_Swarm.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" class="lazyload" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Malzahar_Void_Swarm.png/revision/latest/scale-to-width-down/20?cb=20170217195006" width="20" alt="Void Swarm" data-relevant="0"></a> <a href="/wiki/Damage" title="Damage">pet damage</a></span>.\n<ul><li>Tibbers will <span class="glossary" data-game="lol" style="white-space:pre; position:relative;" data-tip="Blink"><a title="Blink" href="/wiki/Blink"><img loading="lazy" alt="Flash" width="20" data-image-key="Flash.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Flash.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149" class="lazyload" data-relevant="0" height="20" decoding="async"></a> <a title="Blink" href="/wiki/Blink">blink</a></span> back next to <b>Annie</b> if he gets too far away.</li></ul>',
    flavortext: '',
    flavorsound:
      '<span><audio data-volume="1.0" preload="none" hidden="" class="ext-audiobutton"><source src="https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Annie_Original_R_1.ogg/revision/latest?cb=20221124072640" type="application/ogg"><a href="https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Annie_Original_R_1.ogg/revision/latest?cb=20221124072640">Link</a></audio><a class="ext-audiobutton" title="Play/Pause" data-state="play">▶️</a></span><sup><a href="/wiki/File:Annie_Original_R_1.ogg" title="File:Annie Original R 1.ogg">&nbsp;&nbsp;</a></sup> <i>"Get \'em, Tibbers!"</i>',
  },
  'Summon: Tibbers': {
    name: 'Summon: Tibbers',
    displayName: '',
    champion: 'Annie',
    skill: 'R',
    range: '',
    targetRange:
      '<span style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr" class="glossary"><a href="/wiki/Range" title="Range"><img height="20" data-relevant="1" loading="lazy" data-image-name="Range center.png" class="lazyload" alt="Range center" data-image-key="Range_center.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async"></a></span> <span style="border-bottom:1px dotted gray;cursor:help;" title="Cast range" class="basic-tooltip">600</span>',
    attackRange: '',
    collisionRadius: '',
    effectRadius:
      '<span data-game="lol" data-tip="Cr" style="white-space:pre; position:relative;" class="glossary"><a href="/wiki/Range" title="Range"><img width="20" data-image-name="Range center.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" data-relevant="1" decoding="async" alt="Range center" class="lazyload" height="20" data-image-key="Range_center.png" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a></span> <span title="Summon impact radius" class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;">250</span> / <span data-game="lol" style="white-space:pre; position:relative;" class="glossary" data-tip="Cr"><a title="Range" href="/wiki/Range"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Range_center.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" class="lazyload" data-image-name="Range center.png" loading="lazy" alt="Range center" width="20" height="20" data-relevant="1" decoding="async"></a></span> <span style="border-bottom:1px dotted gray;cursor:help;" title="Tibbers\' aura radius" class="basic-tooltip">350</span>',
    width: '',
    angle: '',
    innerRadius: '',
    tetherRadius: '',
    speed: [0.0],
    castTime: '0.<small>25</small>',
    cost: [100.0],
    costtype: 'Mana',
    static: '',
    cooldown: [130.0, 122.0, 5.0, 0.0, 115.0, 107.0, 5.0, 0.0, 100.0],
    cdstart: 'on-cast',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Summon Tibbers.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span data-champion="Annie" data-param="" data-skin="Original" data-game="lol" class="inline-image label-after champion-icon" style="display:inline;white-space:pre;"><span class="border" data-width="20" style="display:inline-block;position:relative;"><a href="/wiki/Annie/LoL" title="Annie"><img class="thumbborder lazyload" data-image-name="Annie OriginalSquare.png" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-image-key="Annie_OriginalSquare.png" data-relevant="0" alt="Annie" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758" width="20"></a></span> <span style="white-space:normal;"><a title="Annie/LoL" href="/wiki/Annie/LoL">Annie</a></span></span> summons her bear <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Tibbers" href="/wiki/Tibbers"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Tibbers" height="20" data-relevant="0" loading="lazy" class="thumbborder lazyload" data-image-name="TibbersSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" width="20" decoding="async" data-image-key="TibbersSquare.png"></a></span> <span style="white-space:normal;"><a title="Tibbers" class="mw-redirect" href="/wiki/Tibbers">Tibbers</a></span></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in the area.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> summons <span data-param="" class="inline-image unit-icon label-after" style="display:inline;white-space:pre;"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Tibbers" href="/wiki/Tibbers"><img data-image-key="TibbersSquare.png" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" alt="Tibbers" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" height="20" data-relevant="0" data-image-name="TibbersSquare.png" loading="lazy" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a title="Tibbers" class="mw-redirect" href="/wiki/Tibbers">Tibbers</a></span></span> to the target location in a burst of flame, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies near him. <i>Summon: Tibbers</i> can be recast at any time while <span style="display:inline;white-space:pre;" class="inline-image unit-icon label-after" data-param=""><span style="display:inline-block;position:relative;" data-width="20" class="border"><a href="/wiki/Tibbers" title="Tibbers"><img data-relevant="0" data-image-name="TibbersSquare.png" alt="Tibbers" loading="lazy" data-image-key="TibbersSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" height="20" width="20" class="thumbborder lazyload" decoding="async"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" title="Tibbers" class="mw-redirect">Tibbers</a></span></span> is alive.',
        leveling: [
          [
            {
              name: 'Initial Magic Damage:',
              values: [
                150.0, 212.0, 5.0, 0.0, 275.0, 337.0, 5.0, 0.0, 400.0, 0.0,
              ],
              values_html:
                '150 / 212.<small>5</small> / 275 / 337.<small>5</small> / 400 <span style="color: #7A6DFF; white-space:normal">(+ 75% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          '<span style="display:inline;white-space:pre;" class="inline-image unit-icon label-after" data-param=""><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Tibbers" title="Tibbers"><img data-image-key="TibbersSquare.png" class="thumbborder lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="TibbersSquare.png" data-relevant="0" alt="Tibbers" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" decoding="async" loading="lazy" width="20"></a></span> <span style="white-space:normal;"><a class="mw-redirect" title="Tibbers" href="/wiki/Tibbers">Tibbers</a></span></span> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> with his attacks and also burns nearby enemies. Re-cast to direct him.',
        description:
          '<span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Tibbers" title="Tibbers"><img loading="lazy" width="20" class="thumbborder lazyload" data-image-key="TibbersSquare.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" alt="Tibbers" data-image-name="TibbersSquare.png"></a></span> <span style="white-space:normal;"><a class="mw-redirect" title="Tibbers" href="/wiki/Tibbers">Tibbers</a></span></span> then remains on the field as a controllable <span class="glossary" data-tip="Pet" style="white-space:pre; position:relative;" data-game="lol"><a title="Pets" href="/wiki/Pets"><img alt="Summon Tibbers" class="lazyload" data-image-key="Annie_Summon-_Tibbers.png" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/92/Annie_Summon-_Tibbers.png/revision/latest/scale-to-width-down/20?cb=20170818001022" loading="lazy" height="20" width="20" data-image-name="Annie Summon- Tibbers.png"></a> <a href="/wiki/Pets" title="Pets">pet</a></span> for up to 45 seconds.',
        leveling: [],
      },
      {
        icon: 'Command- Tibbers.png',
        blurb: '',
        description:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Annie</b> directs <span style="display:inline;white-space:pre;" data-param="" class="inline-image unit-icon label-after"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Tibbers" href="/wiki/Tibbers"><img height="20" alt="Tibbers" decoding="async" data-relevant="0" loading="lazy" data-image-key="TibbersSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" class="thumbborder lazyload" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="TibbersSquare.png"></a></span> <span style="white-space:normal;"><a title="Tibbers" href="/wiki/Tibbers" class="mw-redirect">Tibbers</a></span></span> to the target location.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<i>Summon: Tibber\'s recast can be used while affected by <span data-tip="Cast-inhibiting crowd control" style="white-space:pre; position:relative;" class="glossary" data-game="lol"><a title="Crowd control" href="/wiki/Crowd_control#Disrupting"><img width="20" alt="Silence icon" data-image-name="Silence icon.png" class="lazyload" height="20" data-image-key="Silence_icon.png" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223938"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>. See <a href="/wiki/Annie/LoL#Pets" title="Annie/LoL">Pets</a> for more details about <span style="display:inline;white-space:pre;" class="inline-image unit-icon label-after" data-param=""><span data-width="20" style="display:inline-block;position:relative;" class="border"><a href="/wiki/Tibbers" title="Tibbers"><img loading="lazy" data-relevant="0" alt="Tibbers" class="thumbborder lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" height="20" width="20" data-image-name="TibbersSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" data-image-key="TibbersSquare.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" title="Tibbers" class="mw-redirect">Tibbers</a></span></span>.</i>',
        leveling: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies / Tibbers',
    damagetype: 'magic',
    spelleffects: 'special',
    spellshield: 'True',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* Burst of flame deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a title="Damage" href="/wiki/Damage"><img loading="lazy" height="20" width="20" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Katarina Death Lotus.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/77/Katarina_Death_Lotus.png/revision/latest/scale-to-width-down/20?cb=20170707191154" data-image-key="Katarina_Death_Lotus.png" class="lazyload" alt="Death Lotus" decoding="async"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> and <i>Tibbers\' </i> basic attacks apply <span class="glossary" style="white-space:pre; position:relative;" data-tip="Pet damage" data-game="lol"><a title="Damage" href="/wiki/Damage"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-name="Malzahar Void Swarm.png" data-image-key="Malzahar_Void_Swarm.png" alt="Void Swarm" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Malzahar_Void_Swarm.png/revision/latest/scale-to-width-down/20?cb=20170217195006" class="lazyload" decoding="async" data-relevant="0" width="20"></a> <a href="/wiki/Damage" title="Damage">pet damage</a></span>.\n<ul><li>Tibbers will <span class="glossary" data-tip="Blink" style="white-space:pre; position:relative;" data-game="lol"><a href="/wiki/Blink" title="Blink"><img loading="lazy" data-image-key="Flash.png" class="lazyload" decoding="async" alt="Flash" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149" data-relevant="0" data-image-name="Flash.png"></a> <a title="Blink" href="/wiki/Blink">blink</a></span> back next to <b>Annie</b> if he gets too far away.</li></ul>',
    flavortext: '',
    flavorsound:
      '<span><audio preload="none" class="ext-audiobutton" data-volume="1.0" hidden=""><source src="https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Annie_Original_R_1.ogg/revision/latest?cb=20221124072640" type="application/ogg"><a href="https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Annie_Original_R_1.ogg/revision/latest?cb=20221124072640">Link</a></audio><a class="ext-audiobutton" data-state="play" title="Play/Pause">▶️</a></span><sup><a href="/wiki/File:Annie_Original_R_1.ogg" title="File:Annie Original R 1.ogg">&nbsp;&nbsp;</a></sup> <i>"Get \'em, Tibbers!"</i>',
  },
} satisfies { [n in SkillName]: SkillGenData };
