import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Annie';

export default {
  Pyromania: {
    name: 'Pyromania',
    display_name: 'Pyromania',
    champion: 'Annie',
    skill: 'I',
    image: {
      full: 'Annie_Passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL" title="Annie\'s"><img alt="Annie\'s" src="/wiki/images/Annie_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie\'s</a></span></span> spell-casts generate stacks. At maximum stacks, her next offensive spell will consume them to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Pyromania.png',
        description:
          'Innate - Pyromania: Annie generates a stack of Pyromania whenever she hits an enemy with  Disintegrate or casts her other abilities, stacking up to 4 times, at which she gains Energized.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Pyromania:</b></span> <b>Annie</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Pyromania</i> whenever she hits an enemy with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Disintegrate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Disintegrate" title="Disintegrate"><img alt="Disintegrate" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Disintegrate" title="Annie/LoL">Disintegrate</a></span></span></i> or casts her other <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, stacking up to 4 times, at which she gains <i>Energized</i>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate - Pyromania:',
            raw: 'Annie generates a stack of Pyromania whenever she hits an enemy with  Disintegrate or casts her other abilities, stacking up to 4 times, at which she gains Energized.',
            min: 0,
            max: 4,
            description:
              'Annie generates a stack of Pyromania whenever she hits an enemy with  Disintegrate or casts her other abilities, stacking up to 4 times, at which she gains Energized.',
            values: 4,
            valuesIsPercent: false,
            units: 'genericStacks',
            unitsText:
              'generates a stack of Pyromania whenever she hits an enemy with  Disintegrate or casts her other abilities, stacking up to 4 times, at which she gains Energized.',
            pre: 'Annie generates a stack of Pyromania whenever she hits an enemy with  Disintegrate or casts her other abilities, stacking up to 4 times, at which she gains Energized.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Energized: Annie empowers her next cast of  Disintegrate,  Incinerate, or  Summon: Tibbers to consume all Pyromania stacks to  stun enemies hit for 1.25 / 1.5 / 1.75 (based on level) seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Energized:</b></span> <b>Annie</b> empowers her next cast of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Disintegrate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Disintegrate" title="Disintegrate"><img alt="Disintegrate" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Disintegrate" title="Annie/LoL">Disintegrate</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Incinerate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Incinerate" title="Incinerate"><img alt="Incinerate" src="/wiki/images/Annie_Incinerate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Incinerate" title="Annie/LoL">Incinerate</a></span></span></i>, or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Summon: Tibbers" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Summon:_Tibbers" title="Summon: Tibbers"><img alt="Summon: Tibbers" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Summon:_Tibbers" title="Annie/LoL">Summon: Tibbers</a></span></span></i> to consume all <i>Pyromania</i> stacks to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> enemies hit for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.25;1" data-finish="1.75;11" data-bot_values="1.25;1.5;1.75" data-top_values="1;6;11">1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> (based on level)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Energized:',
            raw: 'Annie empowers her next cast of  Disintegrate,  Incinerate, or  Summon: Tibbers to consume all Pyromania stacks to  stun enemies hit for 1.25 / 1.5 / 1.75 (based on level) seconds.',
            min: 0,
            max: 10,
            description:
              'Annie empowers her next cast of  Disintegrate,  Incinerate, or  Summon: Tibbers to consume all Pyromania stacks to  stun enemies hit for 1.25 / 1.5 / 1.75 (based on level) seconds.',
            values: [1.25, 1.5, 1.75],
            valuesIsPercent: false,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'seconds.',
            pre: 'Annie empowers her next cast of  Disintegrate,  Incinerate, or  Summon: Tibbers to consume all Pyromania stacks to  stun enemies hit for 1.25 / 1.5 / 1.75',
            post: 'seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Annie gains maximum stacks of Pyromania when the game starts and upon respawning. She will lose Energized and all Pyromania stacks upon death.',
        descriptionHTML:
          '<b>Annie</b> gains maximum stacks of <i>Pyromania</i> when the game starts and upon <a href="/wiki/Death" title="Death">respawning</a>. She will lose <i>Energized</i> and all <i>Pyromania</i> stacks upon <a href="/wiki/Death" title="Death">death</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    spellshield: true,
    notes:
      '* <b>Annie</b> does not lose any stacks if she enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.\n<ul><li>Stacks are gained even if the ability is blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li></ul>',
    video: 'Annie IVideo.webm',
  },
  Disintegrate: {
    name: 'Disintegrate',
    display_name: 'Disintegrate',
    champion: 'Annie',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'AnnieQ.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '625',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'mana',
    cooldown: '4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL" title="Annie"><img alt="Annie" src="/wiki/images/Annie_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie</a></span></span> hurls a fireball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'If this kills the target, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced and the <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span> is refunded.',
    ],
    description: [
      {
        icon: '/wiki/images/Disintegrate.png',
        description:
          'Active: Annie hurls a fireball at the target enemy that deals magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> hurls a fireball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic damage:',
            values: '80 / 115 / 150 / 185 / 220 (+ 80% AP)',
            valuesHTML:
              '80 / 115 / 150 / 185 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 80% AP)',
            damagetype: 'Magic',
            values: [80, 115, 150, 185, 220],
            valuesIsPercent: false,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
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
          'If this kills the target, 50% of the  cooldown is reduced and the  mana cost is refunded.',
        descriptionHTML:
          'If this kills the target, 50% of the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced and the <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span> is refunded.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If this kills the target, 50% of the  cooldown is reduced and the  mana cost is refunded.',
            values: 50,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_mana',
            unitsText:
              'of the  cooldown is reduced and the  mana cost is refunded.this kills the target, 50',
            pre: 'If this kills the target, 50% of the  cooldown is reduced and the  mana cost is refunded.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
    video: 'Annie QVideo.webm',
  },
  Incinerate: {
    name: 'Incinerate',
    display_name: 'Incinerate',
    champion: 'Annie',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'AnnieW.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 600',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 49.<small>52</small>°',
    cast_time: '0.<small>25</small>',
    cost: '90 / 95 / 100 / 105 / 110',
    costtype: 'mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL" title="Annie"><img alt="Annie" src="/wiki/images/Annie_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie</a></span></span> casts a blazing cone of fire, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Incinerate.png',
        description:
          'Active: Annie releases fire in a cone in the target direction, dealing magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> releases fire in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic damage:',
            values: '70 / 115 / 160 / 205 / 250 (+ 85% AP)',
            valuesHTML:
              '70 / 115 / 160 / 205 / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;85% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 85% AP)',
            damagetype: 'Magic',
            values: [70, 115, 160, 205, 250],
            valuesIsPercent: false,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 85% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <i>Incinerate</i> can hit targets behind <b>Annie</b>, provided their radius intersects with the cone hitbox.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Annie WVideo.webm',
  },
  'Molten Shield': {
    name: 'Molten Shield',
    display_name: 'Molten Shield',
    champion: 'Annie',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'AnnieE.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '800',
    cast_time: 'none',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL" title="Annie"><img alt="Annie" src="/wiki/images/Annie_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie</a></span></span> grants herself or an allied champion—and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span>—a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> with a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span>.',
      'While the shield holds, enemies who <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span> it take <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Molten_Shield.png',
        description:
          'Active: Annie grants herself or the target allied  champion and  Tibbers a  shield for 3 seconds and 20% − 50% (based on level)  bonus movement speed that decays over 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> grants herself or the target allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 3 seconds and <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="50;" data-bot_values="20;21.76;23.53;25.29;27.06;28.82;30.59;32.35;34.12;35.88;37.65;39.41;41.18;42.94;44.71;46.47;48.24;50" data-top_values="" data-bot_key="%">20% − 50% (based on level)</span></span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Annie grants herself or the target allied  champion and  Tibbers a  shield for 3 seconds and 20% − 50% (based on level)  bonus movement speed that decays over 1.5 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed that decays over 1.5 seconds.',
            pre: 'Annie grants herself or the target allied  champion and  Tibbers a  shield for 3 seconds and 20% − 50%',
            post: 'bonus movement speed that decays over 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '60 / 100 / 140 / 180 / 220 (+ 40% AP)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 40% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [60, 100, 140, 180, 220],
            valuesIsPercent: false,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
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
        description:
          'While Molten Shield is active, enemies that deal damage to it take magic damage. This may only occur once per enemy per cast for each active Molten Shield.',
        descriptionHTML:
          'While <i>Molten Shield</i> is active, enemies that deal damage to it take <span style="color: #00B0F0; white-space:normal">magic damage</span>. This may only occur once per enemy per cast for each active <i>Molten Shield</i>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '25 / 35 / 45 / 55 / 65 (+ 40% AP)',
            valuesHTML:
              '25 / 35 / 45 / 55 / 65 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '25 / 35 / 45 / 55 / 65 (+ 40% AP)',
            damagetype: 'Magic',
            values: [25, 35, 45, 55, 65],
            valuesIsPercent: false,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
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
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a>',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    notes:
      '* <i>Molten Shield</i> casts on ally if targeted or if very close to targeting them (within a range of 225); otherwise self casts.\n<ul><li><i>Molten Shield</i> does not deal damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> when attacked by them.</li>\n<li>Attacks that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">miss</a></span> against the shielded target will not cause the shield to deal damage, while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> attacks still deal damage to the attacker.</li></ul>',
    video: 'Annie EVideo.webm',
  },
  'Summon: Tibbers': {
    name: 'Summon: Tibbers',
    display_name: 'Summon: Tibbers',
    champion: 'Annie',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'AnnieR.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '600',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Summon impact radius">250</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Tibbers\' aura radius">350</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">130 / 122.<small>5</small> / 115 / 107.<small>5</small> / 100</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL" title="Annie"><img alt="Annie" src="/wiki/images/Annie_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie</a></span></span> summons her bear <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in the area.',
      '<span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> with his attacks and also burns nearby enemies. Re-cast to direct him.',
    ],
    description: [
      {
        icon: '/wiki/images/Summon_Tibbers.png',
        description:
          'Active: Annie summons  Tibbers to the target location in a burst of flame, dealing magic damage to enemies near him. Summon: Tibbers can be recast at any time while  Tibbers is alive.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> summons <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> to the target location in a burst of flame, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies near him. <i>Summon: Tibbers</i> can be recast at any time while <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> is alive.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Initial Magic Damage:',
            values: '150 / 212.5 / 275 / 337.5 / 400 (+ 75% AP)',
            valuesHTML:
              '150 / 212.<small>5</small> / 275 / 337.<small>5</small> / 400 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Initial Magic Damage:',
            raw: '150 / 212.5 / 275 / 337.5 / 400 (+ 75% AP)',
            damagetype: 'Magic',
            values: [150, 212.5, 275, 337.5, 400],
            valuesIsPercent: false,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 212.5 / 275 / 337.5 / 400',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Tibbers then remains on the field as a controllable  pet for up to 45 seconds.',
        descriptionHTML:
          '<span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> then remains on the field as a controllable <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pet</a></span> for up to 45 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Tibbers then remains on the field as a controllable  pet for up to 45 seconds.',
            values: 45,
            valuesIsPercent: false,
            user: 'none',
            units: '',
            unitsText:
              'then remains on the field as a controllable  pet for up to 45 seconds.',
            pre: 'Tibbers then remains on the field as a controllable  pet for up to 45 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Command-_Tibbers.png',
        description: 'Recast: Annie directs  Tibbers to the target location.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Annie</b> directs <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> to the target location.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Summon: Tibber's recast can be used while affected by  cast-inhibiting crowd control. See Pets for more details about  Tibbers.",
        descriptionHTML:
          '<i>Summon: Tibber\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>. See <a href="/wiki/Annie/LoL#Pets" title="Annie/LoL">Pets</a> for more details about <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies / Tibbers',
    damagetype: 'magic',
    spelleffects: 'special',
    spellshield: true,
    notes:
      '* Burst of flame deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> and <i>Tibbers\' </i> basic attacks apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet damage"><a href="/wiki/Damage" title="Damage"><img alt="Void Swarm.png" src="/wiki/images/Malzahar_Void_Swarm.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">pet damage</a></span>.\n<ul><li>Tibbers will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> back next to <b>Annie</b> if he gets too far away.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Annie_Original_R_1.ogg   "Get \'em, Tibbers!"',
    video: 'Annie RVideo.webm',
  },
} satisfies { [skillName in string]: SkillData };
