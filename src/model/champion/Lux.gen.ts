import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Lux';

export default {
  Illumination: {
    name: 'Illumination',
    display_name: 'Illumination',
    champion: 'Lux',
    skill: 'I',
    image: {
      full: 'LuxIlluminatingFraulein.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL" title="Lux\'s"><img alt="Lux\'s" src="/wiki/images/Lux_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL" title="Lux/LoL">Lux\'s</a></span></span> abilities apply a mark to enemies hit for a few seconds. Her basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Final Spark" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Final_Spark" title="Final Spark"><img alt="Final Spark" src="/wiki/images/Lux_Final_Spark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Final_Spark" title="Lux/LoL">Final Spark</a></span></span></i> consume the mark to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Illumination.png',
        description:
          "Innate: Lux's abilities apply a mark to enemies hit for 6 seconds, refeshing on subsequent hits. Lux's basic attacks and  Final Spark consume the mark to deal 20 − 190 (based on level) (+ 20% AP) bonus magic damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Lux\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a mark to enemies hit for 6 seconds, refeshing on subsequent hits. <br><br><b>Lux\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Final Spark" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Final_Spark" title="Final Spark"><img alt="Final Spark" src="/wiki/images/Lux_Final_Spark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Final_Spark" title="Lux/LoL">Final Spark</a></span></span></i> consume the mark to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="190;" data-bot_values="20;30;40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190" data-top_values="">20 − 190 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: "Lux's abilities apply a mark to enemies hit for 6 seconds, refeshing on subsequent hits",
            damagetype: 'None',
            values: 6,
            units: 'total_ap',
            unitsText:
              'abilities apply a mark to enemies hit for 6 seconds, refeshing on subsequent hits',
            pre: "Lux's abilities apply a mark to enemies hit for 6 seconds, refeshing on subsequent hits",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "Lux's basic attacks and  Final Spark consume the mark to deal 20 − 190 (based on level) (+ 20% AP) bonus magic damage.",
            damagetype: 'Magic',
            values: [
              20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
              170, 180, 190,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage.',
            pre: "Lux's basic attacks and  Final Spark consume the mark to deal 20 − 190",
            post: 'bonus magic damage.',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: 'Special',
    notes:
      '* Starting an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack windup</a></span> against a target with a mark that is about to expire refreshes its duration to 0.<small>25</small> seconds. Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Final Spark" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Final_Spark" title="Final Spark"><img alt="Final Spark" src="/wiki/images/Lux_Final_Spark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Final_Spark" title="Lux/LoL">Final Spark</a></span></span></i> refreshes the marks of all marked enemies to 1.<small>25</small> seconds if they are within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">5000</span> units of the ability\'s casting position and have a mark with a remaining duration of less than 1 second.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> prevents <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Final Spark" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Final_Spark" title="Final Spark"><img alt="Final Spark" src="/wiki/images/Lux_Final_Spark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Final_Spark" title="Lux/LoL">Final Spark</a></span></span> from consuming the mark.\n<ul><li>The on-hit damage from <i>Illumination</i> via basic attack cannot be blocked by <i>spell shield</i>.</li></ul></li>\n<li><i>Illumination\'s</i> trigger from a basic attack can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> (bonus damage is negated and the mark will still be consumed).</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Parry interactions (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li></ul>',
    yvideo: 'Lux - Passive',
  },
  'Light Binding': {
    name: 'Light Binding',
    display_name: 'Light Binding',
    champion: 'Lux',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'LuxLightBinding.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '1300 /  1240',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '1200',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL" title="Lux"><img alt="Lux" src="/wiki/images/Lux_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL" title="Lux/LoL">Lux</a></span></span> shoots a sphere of light in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first two enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Light_Binding.png',
        description:
          'Active: Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and  roots them for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lux</b> shoots a sphere of light in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first two enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and  roots them for 2 seconds.',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and  roots them for 2 seconds.',
            pre: 'Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and  roots them for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 60% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 60% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Targets immune to the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> still count towards <i>Light Binding\'s</i> two-target limit.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    yvideo: 'Lux - Q',
  },
  'Prismatic Barrier': {
    name: 'Prismatic Barrier',
    display_name: 'Prismatic Barrier',
    champion: 'Lux',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'LuxPrismaticWave.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '* 1175',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="circle check upon commencing of direction reversal">110</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="both outgoing and returning, homing missile">220</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Original speed; decelerates/accelerates depending on travel time, see notes">2400</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effect starts at beginning of cast time">0.<small>25</small></span>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL" title="Lux"><img alt="Lux" src="/wiki/images/Lux_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL" title="Lux/LoL">Lux</a></span></span> throws her wand in the target direction that homes back to her after reaching maximum range.',
      'Allied champions hit by the wand gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for a short time, which can stack up to twice. <b>Lux</b> receives the shield upon throwing the wand and upon its return.',
    ],
    description: [
      {
        icon: '/wiki/images/Prismatic_Barrier.png',
        description:
          'Active: Lux throws her wand in the target direction that homes back to her after reaching maximum range. Allied champions hit by the wand gain a  shield for 2.5 seconds, which can stack up to 2 times, stacking with the previous shield and refreshing its duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lux</b> throws her wand in the target direction that homes back to her after reaching maximum range. Allied champions hit by the wand gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds, which can stack up to 2 times, stacking with the previous shield and refreshing its duration.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: 'Allied champions hit by the wand gain a  shield for 2.5 seconds, which can stack up to 2 times, stacking with the previous shield and refreshing its duration.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            units: 'genericStacks',
            unitsText:
              'champions hit by the wand gain a  shield for 2.5 seconds, which can stack up to 2 times, stacking with the previous shield and refreshing its duration.',
            pre: 'Allied champions hit by the wand gain a  shield for 2.5 seconds, which can stack up to 2 times, stacking with the previous shield and refreshing its duration.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '40 / 55 / 70 / 85 / 100 (+ 35% AP)',
            valuesHTML:
              '40 / 55 / 70 / 85 / 100 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 35% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
            children: [
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
        icon: '/wiki/images/undefined',
        description:
          'Lux receives the shield upon throwing the wand and upon its return.',
        descriptionHTML:
          '<b>Lux</b> receives the shield upon throwing the wand and upon its return.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Allies',
    spelleffects: 'Shield',
    projectile: 'special',
    notes:
      '* Each pass of the wand grants a shield to each target once.\n<ul><li><i>Prismatic Barrier</i> may only stack up to 2 times. Subsequent instances of passing through the wand have no effect on the shield\'s strength nor duration.</li>\n<li>The shield will also be granted to allies near the wand\'s return location.</li>\n<li>Both passes of <i>Prismatic Barrier</i> cannot hit units whose <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Center range"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">center</a></span> is beyond the missile range or behind its origin, even if their <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Edge range"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">hitbox radius</a></span> overlaps.\n<ul><li>At the return location, this behaviour is overridden by an additional center check with the same diameter as the missile width.</li></ul></li>\n<li>If <b>Lux</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> before her wand returns it will fizzle upon reaching maximum range.</li>\n<li><b>Lux\'s</b> wand decelerates on the way out and accelerates on the way back.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li><i>Prismatic Barrier</i> is destroyed by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span> but not <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.</li></ul>',
    yvideo: 'Lux - W',
  },
  'Lucent Singularity': {
    name: 'Lucent Singularity',
    display_name: 'Lucent Singularity',
    champion: 'Lux',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'LuxLightStrikeKugel.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Area of effect radius">310</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight radius">600</span>',
    speed: '1200',
    cast_time: '0.<small>25</small>',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL" title="Lux"><img alt="Lux" src="/wiki/images/Lux_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL" title="Lux/LoL">Lux</a></span></span> sends a lucent singularity to the target location that lasts for a few seconds, slowing nearby enemies.',
      '<i>Lucent Singularity</i> can be recast within this time, and does so automatically after the duration.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Lux</b> detonates the singularity, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
    ],
    description: [
      {
        icon: '/wiki/images/Lucent_Singularity.png',
        description:
          'Active: Lux sends a lucent singularity to the target location, remaining there for 5 seconds to grant  sight of the area and  slow nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lux</b> sends a lucent singularity to the target location, remaining there for 5 seconds to grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Lux sends a lucent singularity to the target location, remaining there for 5 seconds to grant  sight of the area and  slow nearby enemies.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'sends a lucent singularity to the target location, remaining there for 5 seconds to grant  sight of the area and  slow nearby enemies.',
            pre: 'Lux sends a lucent singularity to the target location, remaining there for 5 seconds to grant  sight of the area and  slow nearby enemies.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '25 / 30 / 35 / 40 / 45%',
            valuesHTML: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Lucent Singularity can be recast at any time while it is in flight or within the duration, and does so automatically after the duration.',
        descriptionHTML:
          '<i>Lucent Singularity</i> can be recast at any time while it is in flight or within the duration, and does so automatically after the duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Lux detonates the singularity, dealing magic damage to enemies within. If Lucent Singularity was recast while in flight, it will detonate upon arrival.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Lux</b> detonates the singularity, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within. If <i>Lucent Singularity</i> was recast while in flight, it will detonate upon arrival.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 120 / 170 / 220 / 270 (+ 80% AP)',
            valuesHTML:
              '70 / 120 / 170 / 220 / 270 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 80% AP)',
            damagetype: 'Magic',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
        icon: '/wiki/images/undefined',
        description:
          "The slow lingers for 1 second after leaving the area. Enemies hit by Lucent Singularity's detonation are also slowed by the same amount for 1 second.",
        descriptionHTML:
          "The slow lingers for 1 second after leaving the area. Enemies hit by <i>Lucent Singularity's</i> detonation are also slowed by the same amount for 1 second.",
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The slow lingers for 1 second after leaving the area',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'slow lingers for 1 second after leaving the area',
            pre: 'The slow lingers for 1 second after leaving the area',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: "Enemies hit by Lucent Singularity's detonation are also slowed by the same amount for 1 second.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "hit by Lucent Singularity's detonation are also slowed by the same amount for 1 second.",
            pre: "Enemies hit by Lucent Singularity's detonation are also slowed by the same amount for 1 second.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The initial cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>The manual recast does not.</li></ul></li>\n<li><i>Lucent Singularity</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> while also in flight.</li></ul>',
    yvideo: 'Lux - E',
  },
  'Final Spark': {
    name: 'Final Spark',
    display_name: 'Final Spark',
    champion: 'Lux',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'LuxR.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '3400',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200',
    cast_time: '1',
    cost: '100',
    costtype: 'Mana',
    cooldown: '60 / 55 / 50 / 45 / 40',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL" title="Lux"><img alt="Lux" src="/wiki/images/Lux_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL" title="Lux/LoL">Lux</a></span></span> fires a massive laser in a line in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Final_Spark.png',
        description:
          'Active: Lux fires a massive laser in a line in the target direction that deals magic damage to enemies hit and  reveals them for 1.5 seconds, as well as granting  sight of the surrounding area.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lux</b> fires a massive laser in a line in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for 1.<small>5</small> seconds, as well as granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the surrounding area.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Lux fires a massive laser in a line in the target direction that deals magic damage to enemies hit and  reveals them for 1.5 seconds, as well as granting  sight of the surrounding area.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'fires a massive laser in a line in the target direction that deals magic damage to enemies hit and  reveals them for 1.5 seconds, as well as granting  sight of the surrounding area.',
            pre: 'Lux fires a massive laser in a line in the target direction that deals magic damage to enemies hit and  reveals them for 1.5 seconds, as well as granting  sight of the surrounding area.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '300 / 350 / 400 / 450 / 500 (+ 120% AP)',
            valuesHTML:
              '300 / 350 / 400 / 450 / 500 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;120% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '300 / 350 / 400 / 450 / 500 (+ 120% AP)',
            damagetype: 'Magic',
            values: [300, 350, 400, 450, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 350 / 400 / 450 / 500',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <i>Final Spark</i> grants sight of its surroundings during the cast time and for 0.<small>5</small> seconds afterwards.\n<ul><li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Lucent Singularity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Lucent_Singularity" title="Lucent Singularity"><img alt="Lucent Singularity" src="/wiki/images/Lux_Lucent_Singularity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Lucent_Singularity" title="Lux/LoL">Lucent Singularity</a></span></span> can only be recast if it is present. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Light Binding" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Light_Binding" title="Light Binding"><img alt="Light Binding" src="/wiki/images/Lux_Light_Binding.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Light_Binding" title="Lux/LoL">Light Binding</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Prismatic Barrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Prismatic_Barrier" title="Prismatic Barrier"><img alt="Prismatic Barrier" src="/wiki/images/Lux_Prismatic_Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Prismatic_Barrier" title="Lux/LoL">Prismatic Barrier</a></span></span> are disabled.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Lux_Original_R_2.ogg   "By the light!"',
    yvideo: 'Lux - R',
  },
} satisfies { [skillName in string]: SkillData };
