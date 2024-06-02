// This file is auto-generated on Tue, 16 Apr 2024 17:26:17 -0400.

import { SkillGenData } from '@/api/DataTypes';

// prettier-ignore
export type SkillName = 'Pyromania' | 'Disintegrate' | 'Incinerate' | 'Molten Shield' | 'Summon: Tibbers';

export const Skills = {
  Pyromania: {
    name: 'Pyromania',
    displayName: '',
    champion: 'Annie',
    skill: 'I',
    range: 'None',
    targetRange: 'None',
    attackRange: 'None',
    collisionRadius: 'None',
    effectRadius: 'None',
    width: 'None',
    angle: 'None',
    innerRadius: 'None',
    tetherRadius: 'None',
    speed: 'None',
    castTime: 'None',
    cost: 'None',
    costtype: '',
    static: '',
    cooldown: 'None',
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
          '<span class="template_sbc"><b>Innate:</b></span> <span data-game="lol" data-param="" style="display:inline;white-space:pre;" data-champion="Annie" data-skin="Original" class="inline-image label-after champion-icon"><span data-width="20" style="display:inline-block;position:relative;" class="border"><a href="/wiki/Annie/LoL" title="Annie\'s"><img data-relevant="0" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" class="thumbborder lazyload" alt="Annie\'s" data-image-name="Annie OriginalSquare.png" data-image-key="Annie_OriginalSquare.png" loading="lazy" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie\'s</a></span></span> spell-casts generate stacks. At maximum stacks, her next offensive spell will consume them to <span data-game="lol" class="glossary" data-tip="Stun" style="white-space:pre; position:relative;"><a title="Stun" href="/wiki/Stun"><img class="lazyload" loading="lazy" data-image-name="Stun icon.png" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-key="Stun_icon.png" data-relevant="0" alt="Stun icon" height="20"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target.',
        description:
          '<span class="template_sbc"><b>Innate - Pyromania:</b></span> <b>Annie</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Pyromania</i> whenever she hits an enemy with <i><span style="display:inline;white-space:pre;" data-game="lol" data-param="" data-champion="Annie" data-ability="Disintegrate" class="inline-image label-after ability-icon"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Annie/LoL#Disintegrate" title="Disintegrate"><img class="thumbborder lazyload" alt="Disintegrate" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" decoding="async" height="20" data-image-name="Annie Disintegrate.png" data-image-key="Annie_Disintegrate.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Annie_Disintegrate.png/revision/latest/scale-to-width-down/20?cb=20130929122652"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Disintegrate" title="Annie/LoL">Disintegrate</a></span></span></i> or casts her other <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, stacking up to 4 times, at which she gains <i>Energized</i>.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<span class="template_sbc"><b>Energized:</b></span> <b>Annie</b> empowers her next cast of <i><span data-game="lol" data-ability="Disintegrate" style="display:inline;white-space:pre;" data-champion="Annie" data-param="" class="inline-image label-after ability-icon"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a href="/wiki/Annie/LoL#Disintegrate" title="Disintegrate"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Annie_Disintegrate.png/revision/latest/scale-to-width-down/20?cb=20130929122652" loading="lazy" decoding="async" class="thumbborder lazyload" height="20" data-image-key="Annie_Disintegrate.png" alt="Disintegrate" data-image-name="Annie Disintegrate.png" width="20"></a></span> <span style="white-space:normal;"><a title="Annie/LoL" href="/wiki/Annie/LoL#Disintegrate">Disintegrate</a></span></span></i>, <i><span data-param="" data-champion="Annie" class="inline-image label-after ability-icon" data-ability="Incinerate" style="display:inline;white-space:pre;" data-game="lol"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a title="Incinerate" href="/wiki/Annie/LoL#Incinerate"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" width="20" loading="lazy" data-image-key="Annie_Incinerate.png" height="20" data-relevant="0" alt="Incinerate" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ed/Annie_Incinerate.png/revision/latest/scale-to-width-down/20?cb=20130929122653" data-image-name="Annie Incinerate.png" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Incinerate" title="Annie/LoL">Incinerate</a></span></span></i>, or <i><span class="inline-image label-after ability-icon" data-game="lol" style="display:inline;white-space:pre;" data-champion="Annie" data-ability="Summon: Tibbers" data-param=""><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Summon: Tibbers" href="/wiki/Annie/LoL#Summon:_Tibbers"><img data-image-name="Annie Summon- Tibbers.png" decoding="async" data-image-key="Annie_Summon-_Tibbers.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" width="20" height="20" alt="Summon: Tibbers" class="thumbborder lazyload" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/92/Annie_Summon-_Tibbers.png/revision/latest/scale-to-width-down/20?cb=20170818001022"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Summon:_Tibbers" title="Annie/LoL">Summon: Tibbers</a></span></span></i> to consume all <i>Pyromania</i> stacks to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img class="lazyload" alt="Stun icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" loading="lazy" height="20" width="20" data-image-name="Stun icon.png" data-image-key="Stun_icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223940"></a> <a title="Stun" href="/wiki/Stun" class="mw-redirect">stun</a></span> enemies hit for <span data-finish="1.75;11" data-bot_values="1.25;1.5;1.75" data-top_values="1;6;11" style="position:relative; border-bottom:1px dotted; cursor:help;" class="pp-tooltip" data-start="1.25;1">1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> (based on level)</span> seconds.',
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
      '* <b>Annie</b> does not lose any stacks if she enters <span class="glossary" data-game="lol" data-tip="Resurrection" style="white-space:pre; position:relative;"><a title="Death" href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health"><img decoding="async" width="20" height="20" data-image-name="Revival icon.png" class="lazyload" data-image-key="Revival_icon.png" alt="Revival icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7c/Revival_icon.png/revision/latest/scale-to-width-down/20?cb=20170714051127" data-relevant="0" loading="lazy"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.\n<ul><li>Stacks are gained even if the ability is blocked by <span data-tip="Spell shield" style="white-space:pre; position:relative;" data-game="lol" class="glossary"><a href="/wiki/Spell_shield" title="Spell shield"><img decoding="async" data-image-key="Sivir_Spell_Shield.png" loading="lazy" data-relevant="0" width="20" data-image-name="Sivir Spell Shield.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Spell Shield" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Sivir_Spell_Shield.png/revision/latest/scale-to-width-down/20?cb=20170818194532"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  Disintegrate: {
    name: 'Disintegrate',
    displayName: '',
    champion: 'Annie',
    skill: 'Q',
    range: 'None',
    targetRange: {
      Both: [[625.0], ' 625\n'],
    },
    attackRange: 'None',
    collisionRadius: 'None',
    effectRadius: 'None',
    width: 'None',
    angle: 'None',
    innerRadius: 'None',
    tetherRadius: 'None',
    speed: 'None',
    castTime: {
      Both: [[0.25], '0.25\n'],
    },
    cost: {
      Both: [[60.0, 65.0, 70.0, 75.0, 80.0], '60 / 65 / 70 / 75 / 80\n'],
    },
    costtype: 'mana',
    static: '',
    cooldown: {
      Both: [[4.0], '4\n'],
    },
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
          '<span class="template_sbc"><b>Active:</b></span> <span data-champion="Annie" style="display:inline;white-space:pre;" data-game="lol" data-skin="Original" class="inline-image label-after champion-icon" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Annie" href="/wiki/Annie/LoL"><img data-image-key="Annie_OriginalSquare.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758" alt="Annie" loading="lazy" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" class="thumbborder lazyload" data-image-name="Annie OriginalSquare.png" height="20"></a></span> <span style="white-space:normal;"><a title="Annie/LoL" href="/wiki/Annie/LoL">Annie</a></span></span> hurls a fireball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> hurls a fireball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        leveling: [
          [
            {
              name: 'Magic Damage:',
              values: {
                Both: [
                  [70.0, 105.0, 140.0, 175.0, 0.0],
                  '70 / 105 / 140 / 175 / 210 (+ 75% AP)',
                ],
              },
              values_html:
                '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+ 75% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          'If this kills the target, the <span style="white-space:nowrap"><a title="Cooldown" href="/wiki/Cooldown"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="Cooldown_icon.png" class="lazyload" data-relevant="0" alt="Cooldown icon" decoding="async" loading="lazy" width="15" height="15" data-image-name="Cooldown icon.png"></a>&nbsp;cooldown</span> is reduced and the <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img decoding="async" width="15" data-image-key="Mana_icon.png" height="15" class="lazyload" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8b/Mana_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" data-image-name="Mana icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" alt="Mana icon"></a>&nbsp;mana cost</span></span> is refunded.',
        description:
          'If this kills the target, 50% of the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img data-relevant="0" decoding="async" data-image-key="Cooldown_icon.png" class="lazyload" data-image-name="Cooldown icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" width="15" loading="lazy" height="15" alt="Cooldown icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a>&nbsp;cooldown</span> is reduced and the <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img decoding="async" data-image-key="Mana_icon.png" height="15" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8b/Mana_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="15" data-image-name="Mana icon.png" class="lazyload" alt="Mana icon"></a>&nbsp;mana cost</span></span> is refunded.',
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
      '* If the target becomes <span class="glossary" data-game="lol" style="white-space:pre; position:relative;" data-tip="Untargetable"><a title="Untargetable" href="/wiki/Untargetable"><img width="20" loading="lazy" height="20" data-relevant="0" alt="Untargetable icon" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" class="lazyload" data-image-key="Untargetable_icon.png" data-image-name="Untargetable icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/41/Untargetable_icon.png/revision/latest/scale-to-width-down/20?cb=20220206063243"></a> <a class="mw-redirect" title="Untargetable" href="/wiki/Untargetable">untargetable</a></span>, <span data-tip="Death" data-game="lol" style="white-space:pre; position:relative;" class="glossary"><a href="/wiki/Death" title="Death"><img loading="lazy" data-image-name="Death.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c3/Death.png/revision/latest/scale-to-width-down/20?cb=20200415031113" class="lazyload" alt="Death" height="20" decoding="async" data-relevant="0" data-image-key="Death.png" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"></a> <a title="Death" href="/wiki/Death">dies</a></span>, or is too far away or no longer in <span style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight" class="glossary"><a title="Sight" href="/wiki/Sight"><img data-image-key="Sight_icon.png" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sight_icon.png/revision/latest/scale-to-width-down/20?cb=20130928145820" decoding="async" data-relevant="0" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" alt="Sight icon" width="20" data-image-name="Sight icon.png"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon" class="lazyload" decoding="async" width="15" height="15" data-image-key="Cooldown_icon.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cooldown_icon.png/revision/latest/scale-to-width-down/15?cb=20220425052027" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-image-name="Cooldown icon.png"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
    flavortext: '',
    flavorsound: '',
  },
  Incinerate: {
    name: 'Incinerate',
    displayName: '',
    champion: 'Annie',
    skill: 'W',
    range: 'None',
    targetRange: 'None',
    attackRange: 'None',
    collisionRadius: 'None',
    effectRadius: {
      Both: [[600.0], ' 600\n'],
    },
    width: 'None',
    angle: {
      Both: [[0.0], ' 49.52°\n'],
    },
    innerRadius: 'None',
    tetherRadius: 'None',
    speed: 'None',
    castTime: {
      Both: [[0.25], '0.25\n'],
    },
    cost: {
      Both: [[90.0, 95.0, 100.0, 105.0, 110.0], '90 / 95 / 100 / 105 / 110\n'],
    },
    costtype: 'mana',
    static: '',
    cooldown: {
      Both: [[8.0], '8\n'],
    },
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
          '<span class="template_sbc"><b>Active:</b></span> <span data-champion="Annie" data-param="" data-skin="Original" data-game="lol" class="inline-image label-after champion-icon" style="display:inline;white-space:pre;"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a title="Annie" href="/wiki/Annie/LoL"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758" class="thumbborder lazyload" height="20" data-image-name="Annie OriginalSquare.png" decoding="async" data-image-key="Annie_OriginalSquare.png" loading="lazy" data-relevant="0" alt="Annie" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie</a></span></span> casts a blazing cone of fire, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> releases fire in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        leveling: [
          [
            {
              name: 'Magic Damage:',
              values: {
                Both: [
                  [70.0, 115.0, 160.0, 205.0, 0.0],
                  '70 / 115 / 160 / 205 / 250 (+ 85% AP)',
                ],
              },
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
  'Molten Shield': {
    name: 'Molten Shield',
    displayName: '',
    champion: 'Annie',
    skill: 'E',
    range: 'None',
    targetRange: {
      Both: [[800.0], '800\n'],
    },
    attackRange: 'None',
    collisionRadius: 'None',
    effectRadius: 'None',
    width: 'None',
    angle: 'None',
    innerRadius: 'None',
    tetherRadius: 'None',
    speed: 'None',
    castTime: {
      Both: [[0.0], 'none\n'],
    },
    cost: {
      Both: [[60.0, 65.0, 70.0, 75.0, 80.0], '60 / 65 / 70 / 75 / 80\n'],
    },
    costtype: 'mana',
    static: '',
    cooldown: {
      Both: [[12.0, 11.5, 11.0, 10.5, 10.0], '12 / 11.5 / 11 / 10.5 / 10\n'],
    },
    cdstart: '',
    ontargetcd: '',
    ontargetcdstatic: '',
    recharge: '',
    customlabel: '',
    custominfo: '',
    details: [
      {
        icon: 'Molten Shield.png',
        blurb:
          '<span class="template_sbc"><b>Active:</b></span> <span style="display:inline;white-space:pre;" data-champion="Annie" data-skin="Original" data-param="" data-game="lol" class="inline-image label-after champion-icon"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a href="/wiki/Annie/LoL" title="Annie"><img data-image-name="Annie OriginalSquare.png" data-image-key="Annie_OriginalSquare.png" decoding="async" width="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20" alt="Annie" data-relevant="0" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a title="Annie/LoL" href="/wiki/Annie/LoL">Annie</a></span></span> grants herself or an allied champion—and <span style="display:inline;white-space:pre;" class="inline-image unit-icon label-after" data-param=""><span data-width="20" style="display:inline-block;position:relative;" class="border"><a title="Tibbers" href="/wiki/Tibbers"><img class="thumbborder lazyload" decoding="async" height="20" data-image-name="TibbersSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" alt="Tibbers" loading="lazy" data-image-key="TibbersSquare.png" width="20" data-relevant="0"></a></span> <span style="white-space:normal;"><a title="Tibbers" href="/wiki/Tibbers" class="mw-redirect">Tibbers</a></span></span>—a <span style="white-space:pre; position:relative;" class="glossary" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img width="20" data-relevant="0" data-image-key="Hybrid_resistances_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-name="Hybrid resistances icon.png" loading="lazy" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Hybrid_resistances_icon.png/revision/latest/scale-to-width-down/20?cb=20170516021237" class="lazyload" alt="Hybrid resistances icon"></a> <a title="Shield" href="/wiki/Shield">shield</a></span> with a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="lazyload" loading="lazy" width="15" alt="Movement speed icon" data-relevant="0" data-image-key="Movement_speed_icon.png" height="15" data-image-name="Movement speed icon.png" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span>.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> grants herself or the target allied <span data-game="lol" style="white-space:pre; position:relative;" class="glossary" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630" class="lazyload" width="20" height="20" loading="lazy" alt="Champion icon" decoding="async" data-image-name="Champion icon.png" data-image-key="Champion_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and <span class="inline-image unit-icon label-after" data-param="" style="display:inline;white-space:pre;"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img decoding="async" loading="lazy" height="20" alt="Tibbers" data-image-name="TibbersSquare.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-key="TibbersSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" data-relevant="0" class="thumbborder lazyload" width="20"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> a <span data-game="lol" data-tip="Shield" class="glossary" style="white-space:pre; position:relative;"><a title="Shield" href="/wiki/Shield"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" data-image-name="Hybrid resistances icon.png" class="lazyload" loading="lazy" data-image-key="Hybrid_resistances_icon.png" width="20" height="20" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Hybrid_resistances_icon.png/revision/latest/scale-to-width-down/20?cb=20170516021237" alt="Hybrid resistances icon"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 3 seconds and <span style="color: #F5EE99; white-space:normal"><span style="position:relative; border-bottom:1px dotted; cursor:help;" class="pp-tooltip" data-finish="50;" data-top_values="" data-bot_key="%" data-bot_values="20;21.76;23.53;25.29;27.06;28.82;30.59;32.35;34.12;35.88;37.65;39.41;41.18;42.94;44.71;46.47;48.24;50" data-start="20;">20% − 50% (based on level)</span></span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="15" data-image-key="Movement_speed_icon.png" data-relevant="0" class="lazyload" loading="lazy" decoding="async" alt="Movement speed icon" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png/revision/latest/scale-to-width-down/15?cb=20170515203540" data-image-name="Movement speed icon.png" width="15"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 1.<small>5</small> seconds.',
        leveling: [
          [
            {
              name: 'Shield Strength:',
              values: {
                Both: [
                  [60.0, 95.0, 130.0, 165.0, 0.0],
                  '60 / 95 / 130 / 165 / 200 (+ 40% AP)',
                ],
              },
              values_html:
                '60 / 95 / 130 / 165 / 200 <span style="color: #7A6DFF; white-space:normal">(+ 40% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          'While the shield holds, enemies who <span class="glossary" style="white-space:pre; position:relative;" data-tip="Basic attack" data-game="lol"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span> it take <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        description:
          'While <i>Molten Shield</i> is active, enemies that deal damage to it take <span style="color: #00B0F0; white-space:normal">magic damage</span>. This may only occur once per enemy per cast for each active <i>Molten Shield</i>.',
        leveling: [
          [
            {
              name: 'Magic Damage:',
              values: {
                Both: [
                  [25.0, 35.0, 45.0, 55.0, 0.0],
                  '25 / 35 / 45 / 55 / 65 (+ 40% AP)',
                ],
              },
              values_html:
                '25 / 35 / 45 / 55 / 65 <span style="color: #7A6DFF; white-space:normal">(+ 40% AP)</span>',
            },
          ],
        ],
      },
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a>',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: '',
    projectile: '',
    callforhelp: '',
    grounded: '',
    knockdown: '',
    silence: '',
    additional: '',
    notes:
      '* <i>Molten Shield</i> casts on ally if targeted or if very close to targeting them (within a range of 225); otherwise self casts.\n<ul><li><i>Molten Shield</i> does not deal damage to <span style="white-space:pre; position:relative;" class="glossary" data-tip="Turret" data-game="lol"><a href="/wiki/Turret" title="Turret"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/82/Turret_icon.png/revision/latest/scale-to-width-down/20?cb=20180701054101" class="lazyload" data-relevant="0" decoding="async" loading="lazy" height="20" alt="Turret icon" data-image-name="Turret icon.png" data-image-key="Turret_icon.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20"></a> <a title="Turret" href="/wiki/Turret">turrets</a></span> when attacked by them.</li>\n<li>Attacks that are <span data-game="lol" class="glossary" data-tip="Dodged" style="white-space:pre; position:relative;"><a href="/wiki/Attack_effects#Parrying" title="Attack effects"><img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" data-relevant="0" loading="lazy" data-image-name="Jax Counter Strike old.png" alt="Jax Counter Strike old" decoding="async" data-image-key="Jax_Counter_Strike_old.png" class="lazyload" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Jax_Counter_Strike_old.png/revision/latest/scale-to-width-down/20?cb=20171223030746"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-tip="Blind" data-game="lol"><a href="/wiki/Blind" title="Blind"><img data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/8/81/Blind_icon.png/revision/latest/scale-to-width-down/20?cb=20171201224954" data-image-name="Blind icon.png" class="lazyload" height="20" alt="Blind icon" data-image-key="Blind_icon.png" decoding="async" width="20"></a> <a href="/wiki/Blind" title="Blind" class="mw-redirect">miss</a></span> against the shielded target will not cause the shield to deal damage, while <span style="white-space:pre; position:relative;" class="glossary" data-tip="Block" data-game="lol"><a href="/wiki/Attack_effects#Parrying" title="Attack effects"><img data-relevant="0" loading="lazy" height="20" width="20" decoding="async" alt="Spirit\'s Refuge" data-image-name="Shen Spirit\'s Refuge.png" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Shen_Spirit%27s_Refuge.png/revision/latest/scale-to-width-down/20?cb=20170217191016" class="lazyload" data-image-key="Shen_Spirit%27s_Refuge.png"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> attacks still deal damage to the attacker.</li></ul>',
    flavortext: '',
    flavorsound: '',
  },
  'Summon: Tibbers': {
    name: 'Summon: Tibbers',
    displayName: '',
    champion: 'Annie',
    skill: 'R',
    range: 'None',
    targetRange: {
      Both: [[600.0], ' 600\n'],
    },
    attackRange: 'None',
    collisionRadius: 'None',
    effectRadius: {
      Both: [[250.0, 350.0], ' 250 /  350\n'],
    },
    width: 'None',
    angle: 'None',
    innerRadius: 'None',
    tetherRadius: 'None',
    speed: 'None',
    castTime: {
      Both: [[0.25], '0.25\n'],
    },
    cost: {
      Both: [[100.0], '100\n'],
    },
    costtype: 'Mana',
    static: '',
    cooldown: {
      Both: [
        [130.0, 122.5, 115.0, 107.5, 100.0],
        '130 / 122.5 / 115 / 107.5 / 100\n',
      ],
    },
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
          '<span class="template_sbc"><b>Active:</b></span> <span data-param="" data-skin="Original" data-game="lol" style="display:inline;white-space:pre;" class="inline-image label-after champion-icon" data-champion="Annie"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Annie" href="/wiki/Annie/LoL"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Annie_OriginalSquare.png/revision/latest/scale-to-width-down/20?cb=20150404100758" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" width="20" data-image-name="Annie OriginalSquare.png" data-image-key="Annie_OriginalSquare.png" data-relevant="0" class="thumbborder lazyload" alt="Annie" decoding="async"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie</a></span></span> summons her bear <span style="display:inline;white-space:pre;" class="inline-image unit-icon label-after" data-param=""><span style="display:inline-block;position:relative;" data-width="20" class="border"><a href="/wiki/Tibbers" title="Tibbers"><img class="thumbborder lazyload" data-image-key="TibbersSquare.png" height="20" alt="Tibbers" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" width="20" data-relevant="0" data-image-name="TibbersSquare.png" decoding="async" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in the area.',
        description:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> summons <span style="display:inline;white-space:pre;" data-param="" class="inline-image unit-icon label-after"><span style="display:inline-block;position:relative;" class="border" data-width="20"><a title="Tibbers" href="/wiki/Tibbers"><img class="thumbborder lazyload" data-image-key="TibbersSquare.png" data-relevant="0" alt="Tibbers" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" loading="lazy" height="20" data-image-name="TibbersSquare.png" width="20" decoding="async"></a></span> <span style="white-space:normal;"><a title="Tibbers" href="/wiki/Tibbers" class="mw-redirect">Tibbers</a></span></span> to the target location in a burst of flame, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies near him. <i>Summon: Tibbers</i> can be recast at any time while <span data-param="" class="inline-image unit-icon label-after" style="display:inline;white-space:pre;"><span data-width="20" class="border" style="display:inline-block;position:relative;"><a title="Tibbers" href="/wiki/Tibbers"><img alt="Tibbers" height="20" loading="lazy" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" decoding="async" width="20" data-image-key="TibbersSquare.png" data-image-name="TibbersSquare.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> is alive.',
        leveling: [
          [
            {
              name: 'Initial Magic Damage:',
              values: {
                Both: [
                  [150.0, 212.5, 275.0, 337.5, 0.0],
                  '150 / 212.5 / 275 / 337.5 / 400 (+ 75% AP)',
                ],
              },
              values_html:
                '150 / 212.<small>5</small> / 275 / 337.<small>5</small> / 400 <span style="color: #7A6DFF; white-space:normal">(+ 75% AP)</span>',
            },
          ],
        ],
      },
      {
        icon: '',
        blurb:
          '<span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" alt="Tibbers" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" class="thumbborder lazyload" decoding="async" data-image-name="TibbersSquare.png" loading="lazy" width="20" height="20" data-image-key="TibbersSquare.png"></a></span> <span style="white-space:normal;"><a class="mw-redirect" title="Tibbers" href="/wiki/Tibbers">Tibbers</a></span></span> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> with his attacks and also burns nearby enemies. Re-cast to direct him.',
        description:
          '<span data-param="" class="inline-image unit-icon label-after" style="display:inline;white-space:pre;"><span style="display:inline-block;position:relative;" data-width="20" class="border"><a title="Tibbers" href="/wiki/Tibbers"><img data-image-name="TibbersSquare.png" alt="Tibbers" data-image-key="TibbersSquare.png" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" class="thumbborder lazyload" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" width="20" height="20"></a></span> <span style="white-space:normal;"><a class="mw-redirect" title="Tibbers" href="/wiki/Tibbers">Tibbers</a></span></span> then remains on the field as a controllable <span data-tip="Pet" data-game="lol" style="white-space:pre; position:relative;" class="glossary"><a href="/wiki/Pets" title="Pets"><img data-relevant="0" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/9/92/Annie_Summon-_Tibbers.png/revision/latest/scale-to-width-down/20?cb=20170818001022" decoding="async" height="20" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Annie Summon- Tibbers.png" data-image-key="Annie_Summon-_Tibbers.png" class="lazyload" alt="Summon Tibbers"></a> <a title="Pets" href="/wiki/Pets">pet</a></span> for up to 45 seconds.',
        leveling: [],
      },
      {
        icon: 'Command- Tibbers.png',
        blurb: '',
        description:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Annie</b> directs <span data-param="" style="display:inline;white-space:pre;" class="inline-image unit-icon label-after"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Tibbers" href="/wiki/Tibbers"><img loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" height="20" data-image-name="TibbersSquare.png" data-image-key="TibbersSquare.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" decoding="async" width="20" class="thumbborder lazyload" alt="Tibbers"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" title="Tibbers" class="mw-redirect">Tibbers</a></span></span> to the target location.',
        leveling: [],
      },
      {
        icon: '',
        blurb: '',
        description:
          '<i>Summon: Tibber\'s recast can be used while affected by <span data-tip="Cast-inhibiting crowd control" data-game="lol" class="glossary" style="white-space:pre; position:relative;"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest/scale-to-width-down/20?cb=20171201223938" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" loading="lazy" alt="Silence icon" width="20" height="20" class="lazyload" data-image-name="Silence icon.png" data-image-key="Silence_icon.png" data-relevant="0"></a> <a title="Crowd control" href="/wiki/Crowd_control#Disrupting">cast-inhibiting crowd control</a></span>. See <a href="/wiki/Annie/LoL#Pets" title="Annie/LoL">Pets</a> for more details about <span data-param="" class="inline-image unit-icon label-after" style="display:inline;white-space:pre;"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a title="Tibbers" href="/wiki/Tibbers"><img data-relevant="0" class="thumbborder lazyload" height="20" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cd/TibbersSquare.png/revision/latest/scale-to-width-down/20?cb=20140614013543" loading="lazy" alt="Tibbers" decoding="async" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20" data-image-name="TibbersSquare.png" data-image-key="TibbersSquare.png"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span>.</i>',
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
      '* Burst of flame deals <span class="glossary" style="white-space:pre; position:relative;" data-tip="Area damage" data-game="lol"><a title="Damage" href="/wiki/Damage"><img alt="Death Lotus" decoding="async" loading="lazy" width="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-image-name="Katarina Death Lotus.png" data-image-key="Katarina_Death_Lotus.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/77/Katarina_Death_Lotus.png/revision/latest/scale-to-width-down/20?cb=20170707191154" height="20" data-relevant="0" class="lazyload"></a> <a title="Damage" href="/wiki/Damage">area damage</a></span> and <i>Tibbers\' </i> basic attacks apply <span style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet damage" class="glossary"><a title="Damage" href="/wiki/Damage"><img alt="Void Swarm" decoding="async" data-image-name="Malzahar Void Swarm.png" width="20" data-image-key="Malzahar_Void_Swarm.png" class="lazyload" loading="lazy" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Malzahar_Void_Swarm.png/revision/latest/scale-to-width-down/20?cb=20170217195006" height="20" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" data-relevant="0"></a> <a href="/wiki/Damage" title="Damage">pet damage</a></span>.\n<ul><li>Tibbers will <span data-game="lol" style="white-space:pre; position:relative;" data-tip="Blink" class="glossary"><a href="/wiki/Blink" title="Blink"><img data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149" class="lazyload" alt="Flash" data-image-name="Flash.png" data-image-key="Flash.png" height="20" decoding="async" loading="lazy" data-relevant="0" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" width="20"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> back next to <b>Annie</b> if he gets too far away.</li></ul>',
    flavortext: '',
    flavorsound:
      '<span><audio data-volume="1.0" hidden="" class="ext-audiobutton" preload="none"><source src="https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Annie_Original_R_1.ogg/revision/latest?cb=20221124072640" type="application/ogg"><a href="https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Annie_Original_R_1.ogg/revision/latest?cb=20221124072640">Link</a></audio><a data-state="play" title="Play/Pause" class="ext-audiobutton">▶️</a></span><sup><a href="/wiki/File:Annie_Original_R_1.ogg" title="File:Annie Original R 1.ogg">&nbsp;&nbsp;</a></sup> <i>"Get \'em, Tibbers!"</i>',
  },
} satisfies { [n in SkillName]: SkillGenData };
