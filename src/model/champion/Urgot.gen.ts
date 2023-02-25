import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Urgot';

export default {
  'Echoing Flames': {
    name: 'Echoing Flames',
    display_name: 'Echoing Flames',
    champion: 'Urgot',
    skill: 'I',
    image: {
      full: 'Urgot_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effect range, estimated">700</span>',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 60°',
    customlabel:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">Per-Leg Cooldown</span>',
    custominfo:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="30;20;10;5;2.5" data-top_values="1;6;9;11;13">30 / 20 / 10 / 5 / 2.<small>5</small> (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL" title="Urgot\'s"><img alt="Urgot\'s" src="/wiki/images/Urgot_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL" title="Urgot/LoL">Urgot\'s</a></span></span> six legs each conceal a shotgun that covers an arc, together forming a circle around him. Each shotgun can fire once before incurring a unique <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
      '<b>Urgot\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within the arc of a shotgun will cause it to fire in a cone, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Echoing_Flames.png',
        description:
          "Innate: Urgot's six legs each conceal a shotgun that covers an arc, together forming a full circle of cover around him. Each shotgun can fire once before incurring a unique  cooldown.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Urgot\'s</b> six legs each conceal a shotgun that covers an arc, together forming a full circle of cover around him. Each shotgun can fire once before incurring a unique <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Urgot's next basic attack  on-hit within the arc of a shotgun will cause it to fire in a cone, dealing 40% − 100% (based on level) AD (+ 2% − 6% (based on level) of target's maximum health) physical damage to enemies hit, capped at 100 − 360 (based on level) against  monsters.",
        descriptionHTML:
          '<b>Urgot\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> within the arc of a shotgun will cause it to fire in a cone, dealing <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="40;52;64;76;88;100" data-top_values="1;6;9;11;13;15" data-bot_key="%">40% − 100% (based on level)</span> AD</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="2;3;4;5;6" data-top_values="1;6;9;11;13" data-bot_key="%">2% − 6% (based on level)</span> of target\'s <b>maximum</b> health)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="100;" data-finish="360;" data-bot_values="100;115.29;130.59;145.88;161.18;176.47;191.76;207.06;222.35;237.65;252.94;268.24;283.53;298.82;314.12;329.41;344.71;360" data-top_values="">100 − 360 (based on level)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Urgot's next basic attack  on-hit within the arc of a shotgun will cause it to fire in a cone, dealing 40% − 100% (based on level) AD (+ 2% − 6% (based on level) of target's maximum health) physical damage to enemies hit, capped at 100 − 360 (based on level) against  monsters.",
            healType: 'PhysicalVamp',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ad',
            unitsText: 'AD',
            pre: "Urgot's next basic attack  on-hit within the arc of a shotgun will cause it to fire in a cone, dealing 40% − 100%",
            post: 'AD',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 2% − 6%',
                post: "of target's maximum health",
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
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: false,
    projectile: 'False',
    notes:
      '* <i>Echoing Flames</i>:\n<ul><li><ul><li>Shotgun attack range scales with <b>bonus</b> attack range.</li>\n<li>Will not trigger if the target is too far away or they are dead when the basic attack hits.</li>\n<li>Will not trigger while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span> or if the basic attack is blocked by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span>.\n<ul><li>It bypasses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span> effects.</li></ul></li>\n<li>Will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li>\n<li>Will trigger from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> additional bolts.</li>\n<li>Will not apply <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>, but does apply on <span style="white-space:nowrap"><a href="/wiki/Spell_vamp" title="Spell vamp"><img alt="Spell vamp icon.png" src="/wiki/images/Spell_vamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Spell_vamp" class="mw-redirect" title="Spell vamp">spell vamp</a></span> and <a href="/wiki/Omnivamp" class="mw-redirect" title="Omnivamp">omnivamp</a> at 33% effectiveness.</li>\n<li>Will apply <a href="/wiki/Spell_effect" class="mw-redirect" title="Spell effect">spell effects</a>.</li>\n<li>Will not trigger when basic attacking certain units (e.g <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL" title="Shaco\'s"><img alt="Shaco\'s" src="/wiki/images/Shaco_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL" title="Shaco/LoL">Shaco\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Jack in the Box"><img alt="Jack in the Box" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">Jack in the Box</a></span></span></span>), however it will trigger when attacking them with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Purge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Purge" title="Purge"><img alt="Purge" src="/wiki/images/Urgot_Purge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Purge" title="Urgot/LoL">Purge</a></span></span>.</li>\n<li>Will consume <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Manaflow Band" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Manaflow_Band_(Rune)" title="Manaflow Band"><img alt="Manaflow Band" src="/wiki/images/Manaflow_Band_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Manaflow_Band_(Rune)" class="mw-redirect" title="Manaflow Band (Rune)">Manaflow Band</a></span></span> if it is available.</li>\n<li>Will not consume <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tear of the Goddess" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess"><img alt="Tear of the Goddess" src="/wiki/images/Tear_of_the_Goddess_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess">Tear of the Goddess</a></span></span> charges. <sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li><b>Urgot\'s</b> legs never change in orientation, with his body instead rotating on top of them; the leg that faces northeast will always face northeast. This does not affect <b>Urgot\'s</b> facing direction for the purposes of abilities such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-ability="Petrifying Gaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL#Petrifying_Gaze" title="Petrifying Gaze"><img alt="Petrifying Gaze" src="/wiki/images/Cassiopeia_Petrifying_Gaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL#Petrifying_Gaze" title="Cassiopeia/LoL">Petrifying Gaze</a></span></span>.</li></ul>',
    video: 'Urgot - Passive',
  },
  'Corrosive Charge': {
    name: 'Corrosive Charge',
    display_name: 'Corrosive Charge',
    champion: 'Urgot',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'UrgotQ.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 210',
    cast_time: '0.<small>25</small>',
    cost: '70',
    costtype: 'Mana',
    cooldown: '10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL" title="Urgot"><img alt="Urgot" src="/wiki/images/Urgot_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL" title="Urgot/LoL">Urgot</a></span></span> launches a canister at the target location that explodes after a brief delay, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Corrosive_Charge.png',
        description:
          'Active: Urgot launches a canister at the target location. Upon landing, it explodes after 0.3 seconds to deal physical damage to enemies hit and  slow them for 1.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Urgot</b> launches a canister at the target location. Upon landing, it explodes after 0.<small>3</small> seconds to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them for 1.<small>25</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '25 / 70 / 115 / 160 / 205 (+ 70% AD)',
            valuesHTML:
              '25 / 70 / 115 / 160 / 205 <span style="color:orange; white-space:normal">(+&nbsp;70% AD)</span>',
          },
          {
            name: 'Slow:',
            values: '45 / 50 / 55 / 60 / 65%',
            valuesHTML: '45 / 50 / 55 / 60 / 65%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '25 / 70 / 115 / 160 / 205 (+ 70% AD)',
            damagetype: 'Physical',
            values: [25, 70, 115, 160, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 70 / 115 / 160 / 205',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 70% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '45 / 50 / 55 / 60 / 65%',
            values: [45, 50, 55, 60, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 50 / 55 / 60 / 65%',
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of Effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Corrosive Charge</i> prevents <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Purge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Purge" title="Purge"><img alt="Purge" src="/wiki/images/Urgot_Purge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Purge" title="Urgot/LoL">Purge</a></span></span> from firing for 0.<small>3</small> seconds.',
    video: 'Urgot - Q',
  },
  Purge: {
    name: 'Purge',
    display_name: 'Purge',
    champion: 'Urgot',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'UrgotW.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Center-to-edge; See notes for more details">490</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Automatic attacks missile speed">2500</span>',
    cast_time: 'none',
    cost: '40 / 30 / 20 / 10 / 0',
    costtype: 'Mana',
    static:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rank 5 toggle">0.<small>5</small></span>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">12 / 9 / 6 / 3 / 0</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL" title="Urgot\'s"><img alt="Urgot\'s" src="/wiki/images/Urgot_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL" title="Urgot/LoL">Urgot\'s</a></span></span> other abilities <i>mark</i> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit for a few seconds, only one enemy can be <i>marked</i> at a time. At max rank, <i>Purge</i> lasts indefinitely and becomes a <span class="template_sbc"><b>toggled</b></span> ability.',
      '<span class="template_sbc"><b>Active:</b></span> For a few seconds, <b>Urgot</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and autonomously attacks the nearest enemy at a <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>fixed</b> attack speed</span></span>, prioritizing the <i>marked</i> enemy. <i>Purge</i> can be recast within the duration, and does so automatically afterwards.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Urgot</b> ends <i>Purge</i>.',
      '<i>Purge</i> attacks deal <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. <b>Urgot</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span> and can move while firing, but his <span style="color: #F5EE99; white-space:normal">movement speed</span> is reduced.',
    ],
    description: [
      {
        description:
          "Passive: Urgot's other abilities mark enemy  champions hit for 5 seconds. Only one enemy can be marked at a time. Additionally, at maximum rank, Purge lasts indefinitely and becomes a toggled ability.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Urgot\'s</b> other abilities <i>mark</i> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit for 5 seconds. Only one enemy can be <i>marked</i> at a time.<br><br> Additionally, at maximum rank, <i>Purge</i> lasts indefinitely and becomes a toggled ability.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Passive:',
            raw: "Urgot's other abilities mark enemy  champions hit for 5 seconds",
            values: 5,
            units: 'kindredMarks',
            unitsText:
              'other abilities mark enemy  champions hit for 5 seconds',
            pre: "Urgot's other abilities mark enemy  champions hit for 5 seconds",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Purge.png',
        description:
          'Active: Urgot equips his machine gun for 4 seconds, granting  ghosting to minions and non-epic monsters around him and autonomously firing at the nearest enemy at a fixed  3.0 attack speed, prioritizing marked enemy champions and refreshing the mark with every attack. While firing, Urgot is able to move and gains 40%  slow resist, but his base movement speed is reduced by 125.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Urgot</b> equips his machine gun for 4 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> to minions and non-epic monsters around him and autonomously firing at the nearest enemy at a <b>fixed</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">3.<small>0</small> attack speed</span></span>, prioritizing <i>marked</i> enemy champions and refreshing the <i>mark</i> with every attack. While firing, <b>Urgot</b> is able to move and gains 40% <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span>, but his <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> is reduced by <span style="color: #F5EE99; white-space:normal">125</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Urgot equips his machine gun for 4 seconds, granting  ghosting to minions and non-epic monsters around him and autonomously firing at the nearest enemy at a fixed  3.0 attack speed, prioritizing marked enemy champions and refreshing the mark with every attack',
            increasedStat: 'kindredMarks',
            values: 4,
            units: '',
            unitsText:
              'equips his machine gun for 4 seconds, granting  ghosting to minions and non-epic monsters around him and autonomously firing at the nearest enemy at a fixed  3.0 attack speed, prioritizing marked enemy champions and refreshing the mark with every attack',
            pre: 'Urgot equips his machine gun for 4 seconds, granting  ghosting to minions and non-epic monsters around him and autonomously firing at the nearest enemy at a fixed  3.0 attack speed, prioritizing marked enemy champions and refreshing the mark with every attack',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'While firing, Urgot is able to move and gains 40%  slow resist, but his base movement speed is reduced by 125.',
            increasedStat: 'slow_resist',
            values: 4,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'slow resist, but his base movement speed is reduced by 125.firing, Urgot is able to move and gains 40',
            pre: 'While firing, Urgot is able to move and gains 40%  slow resist, but his base movement speed is reduced by 125.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Attacks with Purge deal modified physical damage, with a minimum threshold of 50 against  monsters and  minions, and apply  on-hit and on-attack damage at 50% effectiveness, but they cannot  critically strike. Urgot cannot perform attacks while unable to declare basic attacks.',
        descriptionHTML:
          'Attacks with <i>Purge</i> deal <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span>, with a minimum threshold of 50 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> damage at 50% effectiveness, but they cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. <b>Urgot</b> cannot perform attacks while unable to declare basic attacks.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Attacks with Purge deal modified physical damage, with a minimum threshold of 50 against  monsters and  minions, and apply  on-hit and on-attack damage at 50% effectiveness, but they cannot  critically strike',
            increasedStat: 'total_ap',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'effectiveness, but they cannot  critically strikewith Purge deal modified physical damage, with a minimum threshold of 50 against  monsters and  minions, and apply  on-hit and on-attack damage at 50',
            pre: 'Attacks with Purge deal modified physical damage, with a minimum threshold of 50 against  monsters and  minions, and apply  on-hit and on-attack damage at 50% effectiveness, but they cannot  critically strike',
          },
        ],
        leveling: [
          {
            name: 'Modified Physical Damage:',
            values: '12 (+ 20 / 23.5 / 27 / 30.5 / 34% AD)',
            valuesHTML:
              '12 <span style="color:orange; white-space:normal">(+&nbsp;20 / 23.<small>5</small> / 27 / 30.<small>5</small> / 34% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Modified Physical Damage:',
            raw: '12 (+ 20 / 23.5 / 27 / 30.5 / 34% AD)',
            damagetype: 'Physical',
            values: 12,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12',
            children: [
              {
                values: [20, 23.5, 27, 30.5, 34],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20 / 23.5 / 27 / 30.5 / 34% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Purge can be recast after 0.5 seconds within the duration, and does so automatically afterwards.',
        descriptionHTML:
          '<i>Purge</i> can be recast after 0.<small>5</small> seconds within the duration, and does so automatically afterwards.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Purge_2.png',
        description: 'Recast: Urgot ends Purge.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Urgot</b> ends <i>Purge</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'basic',
    spellshield: false,
    projectile: 'true',
    callforhelp: 'true',
    notes:
      '* Autonomous attack range scales with <b>bonus</b> attack range.\n<ul><li><i>Purge</i> uses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Edge range"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">edge range</a></span> for enemy targets only; Its range is <i>center-to-edge</i>.\n<ul><li><b>Urgot\'s</b> <a href="/wiki/Size" title="Size">size</a> increasing does not increase its range.</li></ul></li>\n<li>The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>Before maximum rank, if <i>Purge</i> is not manually recasted, the effect will end without being considered as an ability activation.</li></ul></li>\n<li><b>Urgot\'s</b> facing direction during <i>Purge</i> is in the direction he\'s moving and not in the direction of his attack target.</li>\n<li>Before maximum rank, if continuously attacking without being interrupted or interrupting or canceling the cast, <b>Urgot</b> will attack 13 times.</li>\n<li>The bolts are considered basic attacks and thus apply <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at full efficiency.</li>\n<li>During <i>Purge</i>, <b>Urgot\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> is reduced by 200 and his attack commands instead issue movement commands to walk into the respective range of his target.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">Slow resist</a></span> does not modify flat reductions in movement speed.</li>\n<li>Percentage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> apply after the flat movement reduction.</li>\n<li><i>Purge\'s</i> attacks do not interact with <b>Urgot\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span> timer.\n<ul><li>After ending <i>Purge</i>, he can usually attack again immediately.</li></ul></li>\n<li>If <b>Urgot</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Berserk"><a href="/wiki/Berserk" title="Berserk"><img alt="Berserk icon.png" src="/wiki/images/Berserk_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Berserk" class="mw-redirect" title="Berserk">berserked</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunted</a></span>, he will fire at the unit he is forced to attack.</li>\n<li><i>Purge</i> will fire while <b>Urgot</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> (e.g. while taking <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL" title="Thresh\'s"><img alt="Thresh\'s" src="/wiki/images/Thresh_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL" title="Thresh/LoL">Thresh\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span></span>), with the exception of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Disdain" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Disdain" title="Disdain\'s"><img alt="Disdain\'s" src="/wiki/images/Urgot_Disdain.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Disdain" title="Urgot/LoL">Disdain\'s</a></span></span> dash.</li>\n<li>Each shot counts as a separate hit for effects such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Muramana" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Muramana" title="Muramana\'s"><img alt="Muramana\'s" src="/wiki/images/Muramana_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Muramana" title="Muramana">Muramana\'s</a></span></span> <a href="/wiki/Named_item_effect#Shock" title="Named item effect">Shock</a>, and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Eclipse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Eclipse" title="Eclipse\'s"><img alt="Eclipse\'s" src="/wiki/images/Eclipse_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Eclipse" title="Eclipse">Eclipse\'s</a></span></span> <a href="/wiki/Named_item_effect#Ever_Rising_Moon" title="Named item effect">Ever Rising Moon</a>.</li>\n<li><i>Purge</i> will apply <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> on every shot at 100% of the listed damage.\n<ul><li>On-hit damage applied by the bolts are still reduced by <i>Purge</i>.</li></ul></li>\n<li>The movement speed stat tooltip erroneously reads that the <b>bonus</b> movement speed is being reduced before <b>base</b> movement speed.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li><i>Purge\'s</i> attacks will not break <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Duskblade of Draktharr" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Duskblade_of_Draktharr" title="Duskblade of Draktharr\'s"><img alt="Duskblade of Draktharr\'s" src="/wiki/images/Duskblade_of_Draktharr_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Duskblade_of_Draktharr" title="Duskblade of Draktharr">Duskblade of Draktharr\'s</a></span></span> <a href="/wiki/Named_item_effect#Nightstalker" title="Named item effect">Nightstalker\'s</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
    video: 'Urgot - W',
  },
  Disdain: {
    name: 'Disdain',
    display_name: 'Disdain',
    champion: 'Urgot',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'UrgotE.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '450',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">1200 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span></span>',
    cast_time: '0.<small>45</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown: '16 / 15.<small>5</small> / 15 / 14.<small>5</small> / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL" title="Urgot"><img alt="Urgot" src="/wiki/images/Urgot_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL" title="Urgot/LoL">Urgot</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself for a few seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them aside</a></span>.',
      '<b>Urgot</b> will stop upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flinging</a></span> them over.',
      '<i>Neither <b>Urgot\'s</b> dash nor the fling cross <a href="/wiki/Terrain" title="Terrain">terrain</a>.</i>',
    ],
    description: [
      {
        icon: '/wiki/images/Disdain.png',
        description: 'Active: Urgot grants himself a  shield for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Urgot</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Urgot grants himself a  shield for 4 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 4,
            user: 'none',
            units: '',
            unitsText: 'grants himself a  shield for 4 seconds.',
            pre: 'Urgot grants himself a  shield for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values:
              '55 / 75 / 95 / 115 / 135 (+ 135% bonus AD) (+ 13.5% bonus health)',
            valuesHTML:
              '55 / 75 / 95 / 115 / 135 <span style="color:orange; white-space:normal">(+&nbsp;135% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;13.<small>5</small>% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '55 / 75 / 95 / 115 / 135 (+ 135% bonus AD) (+ 13.5% bonus health)',
            healType: 'BonusHealth',
            values: [55, 75, 95, 115, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 75 / 95 / 115 / 135',
            children: [
              {
                values: 135,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 135% bonus AD',
              },
              {
                values: 13.5,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 13.5% bonus health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After the cast time, Urgot  dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through,  knocking them aside and  stunning them for 1 second.',
        descriptionHTML:
          'After the cast time, <b>Urgot</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, though not through terrain, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them aside</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'After the cast time, Urgot  dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through,  knocking them aside and  stunning them for 1 second.',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'the cast time, Urgot  dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through,  knocking them aside and  stunning them for 1 second.',
            pre: 'After the cast time, Urgot  dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through,  knocking them aside and  stunning them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '90 / 120 / 150 / 180 / 210 (+ 100% bonus AD)',
            valuesHTML:
              '90 / 120 / 150 / 180 / 210 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '90 / 120 / 150 / 180 / 210 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [90, 120, 150, 180, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 120 / 150 / 180 / 210',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Urgot will stop upon hitting an enemy  champion,  stunning them for 1.5 seconds and, after 0.25 seconds, also  flinging them to the location 100 units behind him, though not through terrain.',
        descriptionHTML:
          '<b>Urgot</b> will stop upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>5</small> seconds and, after 0.<small>25</small> seconds, also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flinging</a></span> them to the location <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="this destination is a fixed location and is unaffected by size modifiers on Urgot or the target moving away before the displacement started">100 units behind him</span>, though not through terrain.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Urgot will stop upon hitting an enemy  champion,  stunning them for 1.5 seconds and, after 0.25 seconds, also  flinging them to the location 100 units behind him, though not through terrain.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'will stop upon hitting an enemy  champion,  stunning them for 1.5 seconds and, after 0.25 seconds, also  flinging them to the location 100 units behind him, though not through terrain.',
            pre: 'Urgot will stop upon hitting an enemy  champion,  stunning them for 1.5 seconds and, after 0.25 seconds, also  flinging them to the location 100 units behind him, though not through terrain.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Purge can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Purge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Purge" title="Purge"><img alt="Purge" src="/wiki/images/Urgot_Purge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Purge" title="Urgot/LoL">Purge</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of Effect',
    spellshield: true,
    notes:
      '* <b>Urgot</b> turns around when tossing an enemy over him, always facing his victim.\n<ul><li>The target will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flung</a></span> to the location behind <b>Urgot</b> over 0.<small>5</small> seconds given that they do not move nor are moved from the position at which they collided with him while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>.</li>\n<li><i>Disdain</i> prevents <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Purge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Purge" title="Purge"><img alt="Purge" src="/wiki/images/Urgot_Purge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Purge" title="Urgot/LoL">Purge</a></span></span> from firing for 1.<small>25</small> seconds.</li>\n<li>The range indicator length is 475 units, but the dash only moves <b>Urgot</b> 450 units.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> is granted at the start of the cast time while the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> begins after.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">fling</a></span> will occur after 0.<small>25</small> seconds regardless of how far away the target is.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li></ul>',
    video: 'Urgot - E',
  },
  'Fear Beyond Death': {
    name: 'Fear Beyond Death',
    display_name: 'Fear Beyond Death',
    champion: 'Urgot',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'UrgotR.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '2500',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast range">Global</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Fear radius">600</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both initial cast and chains">160</span>',
    speed: '3200',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast if projectile does not hit a target, begins post-effect if it does">100 / 92.<small>5</small> / 85 / 77.<small>5</small> / 70</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL" title="Urgot"><img alt="Urgot" src="/wiki/images/Urgot_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL" title="Urgot/LoL">Urgot</a></span></span> fires a chem-drill in the target direction that impales the first enemy champion hit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and leashing them for a few seconds. The target is also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
      '<i>Fear Beyond Death</i> can be recast if the leashed target falls to <span style="color: #1F995C; white-space:normal">low health</span>, and does so automatically afterwards if they remain at <span style="color: #1F995C; white-space:normal">low health</span>. It will also recast if the chem-drill would kill the target.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Urgot</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppresses</a></span> the target and reels them in, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them and rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>. He then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executes</a></span> them, which briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Fear_Beyond_Death.png',
        description:
          "Active: Urgot fires a chem-drill in the target direction that impales the first enemy champion hit, dealing physical damage and leashing the target for 4 seconds, during which they are  revealed and  slowed by 0% − 75% (based on target's missing health).",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Urgot</b> fires a chem-drill in the target direction that impales the first enemy champion hit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and leashing the target for 4 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="1% per 1% missing health. \'\'This is capped at 75%\'\'" data-bot_values="0;7.5;15;22.5;30;37.5;45;52.5;60;67.5;75" data-top_values="0;7.5;15;22.5;30;37.5;45;52.5;60;67.5;75" data-bot_key="%" data-top_key="%">0% − 75% (based on target\'s <b>missing</b> health)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: "Urgot fires a chem-drill in the target direction that impales the first enemy champion hit, dealing physical damage and leashing the target for 4 seconds, during which they are  revealed and  slowed by 0% − 75% (based on target's missing health).",
            healType: 'PhysicalVamp',
            values: 4,
            valuesIsPercent: true,
            basedOn: "target's missing health",
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Urgot fires a chem-drill in the target direction that impales the first enemy champion hit, dealing physical damage and leashing the target for 4 seconds, during which they are  revealed and  slowed by 0% − 75%',
            post: '.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '100 / 162.5 / 225 / 287.5 / 350 (+ 50% bonus AD)',
            valuesHTML:
              '100 / 162.<small>5</small> / 225 / 287.<small>5</small> / 350 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '100 / 162.5 / 225 / 287.5 / 350 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [100, 162.5, 225, 287.5, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 162.5 / 225 / 287.5 / 350',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Fear_Beyond_Death_3.png',
        description:
          'Fear Beyond Death can be recast if the leashed target is below  25% of their maximum health, and does so automatically if the chem-drill would kill the target, the ability is cast again while the target was above the threshold and is then brought within it, or the target is within the threshold at the end of the duration.',
        descriptionHTML:
          '<i>Fear Beyond Death</i> can be recast if the leashed target is below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25% of their <b>maximum</b> health</span></span>, and does so automatically if the chem-drill would kill the target, the ability is cast again while the target was above the threshold and is then brought within it, or the target is within the threshold at the end of the duration.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Fear Beyond Death can be recast if the leashed target is below  25% of their maximum health, and does so automatically if the chem-drill would kill the target, the ability is cast again while the target was above the threshold and is then brought within it, or the target is within the threshold at the end of the duration.',
            healType: 'OutgoingHeals',
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText:
              'of their maximum health, and does so automatically if the chem-drill would kill the target, the ability is cast again while the target was above the threshold and is then brought within it, or the target is within the threshold at the end of the duration.Beyond Death can be recast if the leashed target is below  25',
            pre: 'Fear Beyond Death can be recast if the leashed target is below  25% of their maximum health, and does so automatically if the chem-drill would kill the target, the ability is cast again while the target was above the threshold and is then brought within it, or the target is within the threshold at the end of the duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Fear_Beyond_Death_2.png',
        description:
          'Recast - Mercy: Urgot launches chains at the leashed target, then  channels for 1.5 seconds once they latch on. During this time, he reels them toward him,  suppressing them,  revealing them, rendering them  untargetable, and preventing them from taking damage from other sources. If the target is near Urgot when the chains connect, they are pushed up to 1000 units away based on their proximity to him. This channel cannot be  interrupted by  crowd control.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast - Mercy:</b></span> <b>Urgot</b> launches chains at the leashed target, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>5</small> seconds once they latch on. During this time, he reels them toward him, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressing</a></span> them, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them, rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and preventing them from taking damage from <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Negates application of damage from any source that is not the execution">other sources</span>. If the target is near <b>Urgot</b> when the chains connect, they are pushed up to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1000</span> units away based on their proximity to him. This channel cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Recast - Mercy:',
            raw: 'Urgot launches chains at the leashed target, then  channels for 1.5 seconds once they latch on',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'launches chains at the leashed target, then  channels for 1.5 seconds once they latch on',
            pre: 'Urgot launches chains at the leashed target, then  channels for 1.5 seconds once they latch on',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'If the target is near Urgot when the chains connect, they are pushed up to 1000 units away based on their proximity to him',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'the target is near Urgot when the chains connect, they are pushed up to 1000 units away based on their proximity to him',
            pre: 'If the target is near Urgot when the chains connect, they are pushed up to 1000 units away based on their proximity to him',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Upon completing the channel, the target is   executed. If the execution is successful, he  fears nearby enemies for 1.5 seconds, during which they are  slowed by 75%.',
        descriptionHTML:
          'Upon completing the channel, the target is <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span></span>. If the execution is successful, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> nearby enemies for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 75%.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If the execution is successful, he  fears nearby enemies for 1.5 seconds, during which they are  slowed by 75%.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              '.the execution is successful, he  fears nearby enemies for 1.5 seconds, during which they are  slowed by 75',
            pre: 'If the execution is successful, he  fears nearby enemies for 1.5 seconds, during which they are  slowed by 75%.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Fear Beyond Death's recast can be used while affected by  cast-inhibiting crowd control.",
        descriptionHTML:
          '<i>Fear Beyond Death\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">True</a></span>',
    spelleffects: 'special',
    spellshield: 'Special',
    projectile: 'True',
    callforhelp: 'special',
    notes:
      '* Unlike most <a href="/wiki/Projectile" title="Projectile">missiles</a>, <i>Fear Beyond Death</i> <b>can</b> hit the edge of targets whose center is further than the missile range.\n<ul><li><ul><li>However, it still cannot hit targets whose center is behind <b>Urgot</b>.</li></ul></li>\n<li>Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> on first cast and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Raw damage"><a href="/wiki/Damage" title="Damage"><img alt="Fear Beyond Death 2.png" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">raw damage</a></span> on recast.</li>\n<li><b>Urgot</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> while the target is leashed and being reeled in.</li>\n<li><i>Fear Beyond Death\'s</i> execute against the enemy champion will aggro nearby enemy minions.</li>\n<li>The execution indicator appears on all enemy champions below the threshold while <i>Fear Beyond Death</i> is not on cooldown.</li>\n<li>The recast\'s name is <i>Mercy</i>.</li>\n<li><i>Mercy\'s</i> granted <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetability"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetability</a></span> does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroy</a></span> in-flight <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> for the target.</li>\n<li><b>Urgot</b> will place himself onto the ground and interrupts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacements</a></span> affecting him upon starting the channel.\n<ul><li>If the displacement effect is a <i>knock up</i> with no debuff source, the <i>airborne</i> status is not removed and he spends significantly less time in the air.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li><i>Fear Beyond Death</i> prevents <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Purge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Purge" title="Purge"><img alt="Purge" src="/wiki/images/Urgot_Purge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Purge" title="Urgot/LoL">Purge</a></span></span> from firing for 0.<small>8</small> seconds.\n<ul><li>The recast prevents <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Purge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Purge" title="Purge"><img alt="Purge" src="/wiki/images/Urgot_Purge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Purge" title="Urgot/LoL">Purge</a></span></span> from firing for 1.<small>5</small> seconds.</li></ul></li>\n<li>If <b>Urgot</b> is in <a href="/wiki/Channel#Casting_Times" title="Channel">cast time</a> or is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> while the chains are in transit, <i>Mercy\'s</i> forced movement will be deferred (the debuff will continuously refresh) until the cast or dash is complete. The target will still be <i>untargetable</i>, prevented from taking damage from other sources, and <i>suppressed</i> during this time.\n<ul><li>If <b>Urgot</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> a spell, the channel is interrupted when the chains hit.</li></ul></li>\n<li>Removing or resisting the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> has no effect on the mark <a href="/wiki/Debuff" title="Debuff">debuff</a>.</li>\n<li>The initial cast always counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>If the ability hits a target who is below the threshold, it will automatically recast itself and it won\'t be considered as an ability activation.</li>\n<li>If the ability hits a target who is above the threshold and it\'s recasted early, the recast will happen automatically when they reach the threshold and it won\'t be considered as as ability activation.</li>\n<li>If the target got hit while above the threshold and it is recasted after they fall below it, the recast will be considered as an ability activation.</li></ul></li>\n<li>Reactivating the ability early will reel the target as soon as they reach the <span style="color: #1F995C; white-space:normal">25% <b>maximum</b> health</span> threshold.\n<ul><li>The ability will reactivate and execute regardless of <b>Urgot</b> being affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> or not, including self or enemy-imposed <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span>.</li></ul></li>\n<li><i>Fear Beyond Death</i> can affect <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.</li>\n<li><i>Fear Beyond Death\'s</i> recast cannot be used if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><i>Fear Beyond Death\'s</i> recast cannot be used during <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>. Attempting to do so places the recast on a 5-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.\n<ul><li>If the target is below the threshold at the end of the duration and <b>Urgot</b> is revived, the recast will initiate regardless of this cooldown.</li></ul></li>\n<li>The recast\'s chains are classified as a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectile</a></span> and they will fail to affect their target if:\n<ul><li><b>Urgot</b> or his target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> or enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li>The target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, even if the granted source does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroy</a></span> in-flight projectiles.</li>\n<li>They collide with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.\n<ul><li>If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> intercepts the chains and <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum"><img alt="Braum" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum</a></span></span> is not the target, they\'re destroyed.</li>\n<li>If <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum"><img alt="Braum" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum</a></span></span> is the target, he will still be reeled in and executed as normal.</li></ul></li>\n<li>The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immune</a></span> when the chains hit.</li>\n<li>The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">a zombie</a></span>.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will <b>not</b> block the recast\'s chains.</li>\n<li>If the target removes the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppression</a></span> by any means they will prevent themselves from being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span> and stop the forced movement from being renewed, though allowing the most recent one to be present and move them to <b>Urgot\'s</b> previous location.\n<ul><li>Their untargetability and damage prevention of other sources granted by <i>Fear Beyond Death</i> is removed in the process.</li></ul></li>\n<li>If the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span> when the chains collide, <b>Urgot</b> will not begin the channel until after their displacement immunity ends.\n<ul><li>The target will be unaffected by <i>Fear Beyond Death\'s</i> forced movement during this time, but will still be suppressed, prevented taking damage from other sources, and rendered untargetable.</li>\n<li>If the target\'s displacement immunity does not end within 10 seconds, <i>Fear Beyond Death</i> will cancel.</li></ul></li>\n<li>When the chains start reeling in and suppressing a <a href="/wiki/Summoner" title="Summoner">player\'s</a> champion, chains will also cover the sides of their screen.</li>\n<li>The target champion shrinks in <a href="/wiki/Size" title="Size">size</a> in several steps after reaching <b>Urgot\'s</b> grinder and before being executed.\n<ul><li>If the <i>suppression</i> ends in any way, the target returns to their normal size.</li>\n<li>If the execution is successful, the victim\'s corpse will be effectively invisible unless they enter a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span>.</li></ul></li>\n<li>The target will die regardless of their <span style="color: #1F995C; white-space:normal"><b>current</b> health</span> once the recast\'s chains hit, even if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span>.\n<ul><li>If the target has <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerability</a></span> that persists the duration of the channel, it will protect them from the execution.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-ability="Undying Rage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL#Undying_Rage" title="Undying Rage"><img alt="Undying Rage" src="/wiki/images/Tryndamere_Undying_Rage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL#Undying_Rage" title="Tryndamere/LoL">Undying Rage</a></span></span> will prevent <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL" title="Tryndamere"><img alt="Tryndamere" src="/wiki/images/Tryndamere_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL" title="Tryndamere/LoL">Tryndamere</a></span></span> from dying by the execute. The execute will bypass his minimum health threshold though and reduce him to <span style="color: #1F995C; white-space:normal">1 health</span> in this case.</li>\n<li>The effect will also not prevent the activation of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> effects, such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guardian Angel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guardian_Angel" title="Guardian Angel"><img alt="Guardian Angel" src="/wiki/images/Guardian_Angel_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guardian_Angel" title="Guardian Angel">Guardian Angel</a></span></span> or <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL" title="Anivia\'s"><img alt="Anivia\'s" src="/wiki/images/Anivia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL" title="Anivia/LoL">Anivia\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Rebirth" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Rebirth" title="Rebirth"><img alt="Rebirth" src="/wiki/images/Anivia_Rebirth.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Rebirth" title="Anivia/LoL">Rebirth</a></span></span></span>.</li>\n<li><a href="/wiki/Death#Post-death_events" title="Death">Post-death events</a> such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">Zombie State</a></span> effects (e.g, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL" title="Karthus\'"><img alt="Karthus\'" src="/wiki/images/Karthus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL" title="Karthus/LoL">Karthus\'</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Death Defied" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Death_Defied" title="Death Defied"><img alt="Death Defied" src="/wiki/images/Karthus_Death_Defied.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Death_Defied" title="Karthus/LoL">Death Defied</a></span></span></span>, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kog\'Maw" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw\'s"><img alt="Kog\'Maw\'s" src="/wiki/images/Kog%27Maw_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw/LoL">Kog\'Maw\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kog\'Maw" data-ability="Icathian Surprise" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kog%27Maw/LoL#Icathian_Surprise" title="Icathian Surprise"><img alt="Icathian Surprise" src="/wiki/images/Kog%27Maw_Icathian_Surprise.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kog%27Maw/LoL#Icathian_Surprise" title="Kog\'Maw/LoL">Icathian Surprise</a></span></span></span>, and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL" title="Sion\'s"><img alt="Sion\'s" src="/wiki/images/Sion_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL" title="Sion/LoL">Sion\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-ability="Glory in Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Glory in Death"><img alt="Glory in Death" src="/wiki/images/Sion_Glory_in_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Sion/LoL">Glory in Death</a></span></span></span>) will be triggered.</li>\n<li>Only the target\'s <span style="color: #1F995C; white-space:normal"><b>current</b> health</span> will count as <b>Urgot\'s</b> damage in post-game statistics and <span style="white-space:nowrap"><a href="/wiki/Spell_vamp" title="Spell vamp"><img alt="Spell vamp icon.png" src="/wiki/images/Spell_vamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Spell_vamp" class="mw-redirect" title="Spell vamp">spell vamp</a></span> healing.</li></ul></li></ul></li>\n<li><i>Fear Beyond Death\'s</i> initial cast will not perform the automatic recast from dealing enough damage to kill <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL" title="Sion"><img alt="Sion" src="/wiki/images/Sion_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL" title="Sion/LoL">Sion</a></span></span>.</li>\n<li><i>Fear Beyond Death\'s</i> recast will be placed on a 5-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> if the target is below the threshold and becomes targetable again after completing the dash from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Galio" data-ability="Hero\'s Entrance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galio/LoL#Hero\'s_Entrance" title="Hero\'s Entrance"><img alt="Hero\'s Entrance" src="/wiki/images/Galio_Hero%27s_Entrance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galio/LoL#Hero\'s_Entrance" title="Galio/LoL">Hero\'s Entrance</a></span></span>.</li>\n<li>The following table refers for interactions while <b>Urgot</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Urgot_Original_R_2.ogg   The end is near.',
    video: 'Urgot - R',
  },
} satisfies { [skillName in string]: SkillData };
