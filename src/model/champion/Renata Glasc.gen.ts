import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Renata Glasc';

export default {
  Leverage: {
    name: 'Leverage',
    display_name: 'Leverage',
    champion: 'Renata Glasc',
    skill: 'I',
    image: {
      full: 'Renata_P.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renata Glasc" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renata_Glasc/LoL" title="Renata\'s"><img alt="Renata\'s" src="/wiki/images/Renata_Glasc_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renata_Glasc/LoL" title="Renata Glasc/LoL">Renata\'s</a></span></span> basic attacks apply a mark that lasts a few seconds and expires when attacking a new enemy. If the enemy was unmarked, this also deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
      'Allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions\'</a></span> damaging attacks and abilities against a marked target will consume the mark to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Renata_Glasc_Leverage.png',
        description:
          "Innate: Renata's basic attacks are empowered to apply a mark that lasts 6 seconds, refreshes on subsequent hits and expires when attacking a new enemy. If the enemy was unmarked, the attack also deals bonus magic damage equal to 1% − 2% (based on level) (+ 2% per 100 AP) of the target's maximum health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Renata\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to apply a mark that lasts 6 seconds, refreshes on subsequent hits and expires when attacking a new enemy. If the enemy was unmarked, the attack also deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;" data-finish="2;" data-bot_values="1;1.13;1.25;1.38;1.5;1.63;1.75;1.88;2" data-top_values="" data-bot_key="%">1% − 2% (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: "Renata's basic attacks are empowered to apply a mark that lasts 6 seconds, refreshes on subsequent hits and expires when attacking a new enemy",
            damagetype: 'None',
            values: 6,
            units: 'total_ap',
            unitsText:
              'basic attacks are empowered to apply a mark that lasts 6 seconds, refreshes on subsequent hits and expires when attacking a new enemy',
            pre: "Renata's basic attacks are empowered to apply a mark that lasts 6 seconds, refreshes on subsequent hits and expires when attacking a new enemy",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "If the enemy was unmarked, the attack also deals bonus magic damage equal to 1% − 2% (based on level) (+ 2% per 100 AP) of the target's maximum health.",
            healType: 'OutgoingHeals',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health.",
            pre: 'If the enemy was unmarked, the attack also deals bonus magic damage equal to 1% − 2%',
            post: "of the target's maximum health.",
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal additional bonus magic damage equal to 1% − 2% (based on level) (+ 2% per 100 AP) of the target's maximum health.",
        descriptionHTML:
          'Allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions\'</a></span> damaging attacks and abilities against a marked target will consume the mark to deal <span style="color: #00B0F0; white-space:normal">additional <b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;" data-finish="2;" data-bot_values="1;1.13;1.25;1.38;1.5;1.63;1.75;1.88;2" data-top_values="" data-bot_key="%">1% − 2% (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal additional bonus magic damage equal to 1% − 2% (based on level) (+ 2% per 100 AP) of the target's maximum health.",
            healType: 'OutgoingHeals',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health.",
            pre: "Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal additional bonus magic damage equal to 1% − 2%",
            post: "of the target's maximum health.",
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Leverage's damage is capped at 150 against  monsters.",
        descriptionHTML:
          '<i>Leverage\'s</i> damage is capped at 150 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Leverage's damage is capped at 150 against  monsters.",
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText: 'damage is capped at 150 against  monsters.',
            pre: "Leverage's damage is capped at 150 against  monsters.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Allies, Enemies',
    damagetype: 'magic',
    spelleffects: 'proc',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not block the mark\'s application.\n<ul><li><ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Interaction with mark consumption</li></ul></li></ul>',
  },
  Handshake: {
    name: 'Handshake',
    display_name: 'Handshake',
    champion: 'Renata Glasc',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RenataQ.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '900 / 275',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">140</span>',
    tether_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1200',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">1450</span>',
    cast_time: '0.<small>25</small>',
    cost: '80',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect if an enemy is hit">16</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renata Glasc" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renata_Glasc/LoL" title="Renata\'s"><img alt="Renata\'s" src="/wiki/images/Renata_Glasc_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renata_Glasc/LoL" title="Renata Glasc/LoL">Renata\'s</a></span></span> fires a hook in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them. She can recast the ability while the target is rooted.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Renata</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks</a></span> the target in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. If the thrown target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, enemies hit are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Renata_Glasc_Handshake.png',
        description:
          'Active: Renata fires a hook in the target direction that deals magic damage to the first enemy hit and  roots them for 1 second, during which they are  revealed.If the  root was applied, Renata forms a  tether between her and the target for the same duration, causing Renata to become unable to declare attacks and have her movement speed reduced by 30%.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Renata</b> fires a hook in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for 1 second, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.<br><br>If the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> was applied, <b>Renata</b> forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between her and the target for the same duration, causing <b>Renata</b> to become unable to declare attacks and have her <span style="color: #F5EE99; white-space:normal">movement speed</span> <b>reduced</b> by <span style="color: #F5EE99; white-space:normal">30%</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Renata fires a hook in the target direction that deals magic damage to the first enemy hit and  roots them for 1 second, during which they are  revealed.If the  root was applied, Renata forms a  tether between her and the target for the same duration, causing Renata to become unable to declare attacks and have her movement speed reduced by 30%.',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              '.fires a hook in the target direction that deals magic damage to the first enemy hit and  roots them for 1 second, during which they are  revealed.If the  root was applied, Renata forms a  tether between her and the target for the same duration, causing Renata to become unable to declare attacks and have her movement speed reduced by 30',
            pre: 'Renata fires a hook in the target direction that deals magic damage to the first enemy hit and  roots them for 1 second, during which they are  revealed.If the  root was applied, Renata forms a  tether between her and the target for the same duration, causing Renata to become unable to declare attacks and have her movement speed reduced by 30%.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
            valuesHTML:
              '80 / 125 / 170 / 215 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
            damagetype: 'Magic',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
        description: 'Handshake can be recast while the tether is active.',
        descriptionHTML:
          '<i>Handshake</i> can be recast while the tether is active.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Renata_Glasc_Handshake_2.png',
        description:
          'Recast: Renata breaks the tether to  knock the target in the target direction, though not through terrain, dealing the same damage to enemies they pass through. If the thrown target is a  champion, all secondary targets hit are  stunned for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Renata</b> breaks the tether to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock</a></span> the target in the target direction, though not through terrain, dealing the same damage to enemies they pass through. If the thrown target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, all secondary targets hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Ememies',
    damagetype: 'magic',
    spelleffects: 'special',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to the primary target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to secondary targets.\n<ul><li><i>Handshake\'s</i> interaction between its tether and root:\n<ul><li>If the root is not applied, neither is the tether.</li>\n<li>The tether\'s duration lasts the same as the root duration, even if it is modified by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">tenacity</a></span>.</li>\n<li>If the root is removed, the tether is as well, but not vice versa.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the hook but not the recast\'s effects as the primary target.\n<ul><li>As a secondary target, the recast\'s effects will be blocked.</li></ul></li>\n<li><b>Renata</b> may still move while the hook is in flight.\n<ul><li>Her facing direction is locked towards the target direction of the hook.</li></ul></li>\n<li>While the target is hooked, <b>Renata\'s</b> facing direction is considered to be in their direction and not in the one she is moving.</li>\n<li>The <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Movement_speed" title="Movement speed">movement speed</a></span> reduction stacks additively with other <span style="color: #F5EE99; white-space:normal">movement speed</span> bonuses.\n<ul><li>It is a negative bonus, not a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>, and is thus not reduced by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span>.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
  },
  Bailout: {
    name: 'Bailout',
    display_name: 'Bailout',
    champion: 'Renata Glasc',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RenataW.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Radius for movement speed towards enemies">1300</span>',
    cast_time: 'none',
    cost: '80',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">28 / 27 / 26 / 25 / 24</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renata Glasc" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renata_Glasc/LoL" title="Renata"><img alt="Renata" src="/wiki/images/Renata_Glasc_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renata_Glasc/LoL" title="Renata Glasc/LoL">Renata</a></span></span> grants herself or the target allied champion ramping <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> in addition to <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> toward enemies. <i>Bailout\'s</i> duration resets whenever the target scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion.',
      'If the target would <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">die</a></span> while <i>Bailout</i> is active, their health is set back to full but they suffer a <span style="color: #F9966B; white-space:normal">true damage</span> burn that would kill them over a short time. The target can stop the burn by scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Renata_Glasc_Bailout.png',
        description:
          "Active: Renata infuses herself or the target allied champion with a chemtech formula for 5 seconds, granting the target  bonus attack speed in addition to  bonus movement speed while they are facing nearby  visible enemy champions and minions, both increasing in effectiveness by 100% over the duration. Bailout's duration resets whenever the target scores a  takedown against an enemy champion within 6 seconds of damaging them.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Renata</b> infuses herself or the target allied champion with a chemtech formula for 5 seconds, granting the target <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> in addition to <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while they are facing nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champions and minions, both increasing in effectiveness by 100% over the duration. <br><i>Bailout\'s</i> duration resets whenever the target scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion within 6 seconds of damaging them.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Renata infuses herself or the target allied champion with a chemtech formula for 5 seconds, granting the target  bonus attack speed in addition to  bonus movement speed while they are facing nearby  visible enemy champions and minions, both increasing in effectiveness by 100% over the duration',
            increasedStat: 'bonus_ad',
            values: 5,
            valuesIsPercent: true,
            user: 'target',
            units: '',
            unitsText:
              'over the durationinfuses herself or the target allied champion with a chemtech formula for 5 seconds, granting the target  bonus attack speed in addition to  bonus movement speed while they are facing nearby  visible enemy champions and minions, both increasing in effectiveness by 100',
            pre: 'Renata infuses herself or the target allied champion with a chemtech formula for 5 seconds, granting the target  bonus attack speed in addition to  bonus movement speed while they are facing nearby  visible enemy champions and minions, both increasing in effectiveness by 100% over the duration',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: "Bailout's duration resets whenever the target scores a  takedown against an enemy champion within 6 seconds of damaging them.",
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'duration resets whenever the target scores a  takedown against an enemy champion within 6 seconds of damaging them.',
            pre: "Bailout's duration resets whenever the target scores a  takedown against an enemy champion within 6 seconds of damaging them.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '10 / 15 / 20 / 25 / 30% (+ 1% per 100 AP)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% per 100 AP)</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '10 / 12.5 / 15 / 17.5 / 20% (+ 1% per 100 AP)',
            valuesHTML:
              '10 / 12.<small>5</small> / 15 / 17.<small>5</small> / 20% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% per 100 AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Speed:',
            raw: '10 / 15 / 20 / 25 / 30% (+ 1% per 100 AP)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '10 / 12.5 / 15 / 17.5 / 20% (+ 1% per 100 AP)',
            damagetype: 'None',
            values: [10, 12.5, 15, 17.5, 20],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 12.5 / 15 / 17.5 / 20%',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If the target takes  fatal damage while Bailout is active, they are restored to 100% of their maximum health but suffer a  true damage burn equal to 10% of their maximum health every 0.264 seconds until they die from reaching 0 health, during which Bailout's duration resets every 0.25 seconds. This effect may occur only once per application of Bailout while the target already has the buff and is not burning.During this time, if they score a  takedown against an enemy champion within 6 seconds of damaging them, the burn is stopped prematurely and they are set to 20% of their maximum health.",
        descriptionHTML:
          'If the target takes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span> while <i>Bailout</i> is active, they are restored to <span style="color: #1F995C; white-space:normal">100% of their <b>maximum</b> health</span> but suffer a <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span> burn equal to <span style="color: #1F995C; white-space:normal">10% of their <b>maximum</b> health</span> every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> until they die from reaching 0 health, during which <i>Bailout\'s</i> duration resets every 0.<small>25</small> seconds. This effect may occur only <i>once</i> per application of <i>Bailout</i> while the target already has the buff and is not burning.<br>During this time, if they score a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion within 6 seconds of damaging them, the burn is stopped prematurely and they are set to <span style="color: #1F995C; white-space:normal">20% of their <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "If the target takes  fatal damage while Bailout is active, they are restored to 100% of their maximum health but suffer a  true damage burn equal to 10% of their maximum health every 0.264 seconds until they die from reaching 0 health, during which Bailout's duration resets every 0.25 seconds",
            healType: 'OutgoingHeals',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText:
              'of their maximum health but suffer a  true damage burn equal to 10the target takes  fatal damage while Bailout is active, they are restored to 100',
            pre: "If the target takes  fatal damage while Bailout is active, they are restored to 100% of their maximum health but suffer a  true damage burn equal to 10% of their maximum health every 0.264 seconds until they die from reaching 0 health, during which Bailout's duration resets every 0.25 seconds",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'This effect may occur only once per application of Bailout while the target already has the buff and is not burning.During this time, if they score a  takedown against an enemy champion within 6 seconds of damaging them, the burn is stopped prematurely and they are set to 20% of their maximum health.',
            healType: 'OutgoingHeals',
            values: 6,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'of their maximum health.effect may occur only once per application of Bailout while the target already has the buff and is not burning.During this time, if they score a  takedown against an enemy champion within 6 seconds of damaging them, the burn is stopped prematurely and they are set to 20',
            pre: 'This effect may occur only once per application of Bailout while the target already has the buff and is not burning.During this time, if they score a  takedown against an enemy champion within 6 seconds of damaging them, the burn is stopped prematurely and they are set to 20% of their maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: '',
    notes:
      '* Damage taken in excess of the fatal damage taken does not apply to the target\'s health after it was restored.\n<ul><li>The self-damage taken is considered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Raw damage"><a href="/wiki/Damage" title="Damage"><img alt="Fear Beyond Death 2.png" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">raw damage</a></span> and is calculated based on the target\'s <b>maximum</b> health at the time of taking lethal damage.</li>\n<li><i>Bailout\'s</i> bonuses will not reset in effectiveness if its duration is refreshed.</li>\n<li><i>Bailout</i> takes priority over all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> effects.</li>\n<li><i>Bailout</i> will stop refreshing its duration while the target is burning after 250 seconds have elapsed.</li>\n<li><i>Bailout</i> cannot be used on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> nor <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> units.</li></ul>',
  },
  'Loyalty Program': {
    name: 'Loyalty Program',
    display_name: 'Loyalty Program',
    champion: 'Renata Glasc',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RenataE.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial hit radius around Renata">325</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile explosion radius upon arriving at the target location">225</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">220</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed, spawns up-to 200 units closer to the cast location already">1450</span>',
    cast_time: '0.<small>25</small>',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'Mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renata Glasc" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renata_Glasc/LoL" title="Renata"><img alt="Renata" src="/wiki/images/Renata_Glasc_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renata_Glasc/LoL" title="Renata Glasc/LoL">Renata</a></span></span> sends out two chemtech rockets that strike targets around her, then converge into a single missile that explodes at the target location.',
      '<b>Renata</b> and allies struck are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>, and enemies struck are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Renata_Glasc_Loyalty_Program.png',
        description:
          'Active: Renata sends out chemtech rockets from either side of her that instantly strike targets around her. After 0.429 seconds they converge and travel to the target location as a single missile, striking targets along its path and exploding upon reaching the target location.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Renata</b> sends out chemtech rockets from either side of her that instantly strike targets around her. After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.4 seconds, but rounded up to the next game tick.">0.<small>429</small> seconds</span> they converge and travel to the target location as a single missile, striking targets along its path and exploding upon reaching the target location.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Renata and allies struck are granted a  shield for 3 seconds and enemies struck are dealt magic damage and  slowed by 30% for 2 seconds.',
        descriptionHTML:
          '<b>Renata</b> and allies struck are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 3 seconds and enemies struck are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 30% for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: 'Renata and allies struck are granted a  shield for 3 seconds and enemies struck are dealt magic damage and  slowed by 30% for 2 seconds.',
            damagetype: 'Magic',
            shieldType: 'SelfShield',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 2 seconds.and allies struck are granted a  shield for 3 seconds and enemies struck are dealt magic damage and  slowed by 30',
            pre: 'Renata and allies struck are granted a  shield for 3 seconds and enemies struck are dealt magic damage and  slowed by 30% for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '65 / 95 / 125 / 155 / 185 (+ 55% AP)',
            valuesHTML:
              '65 / 95 / 125 / 155 / 185 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>',
          },
          {
            name: 'Shield Strength:',
            values: '50 / 65 / 80 / 95 / 110 (+ 50% AP)',
            valuesHTML:
              '50 / 65 / 80 / 95 / 110 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '65 / 95 / 125 / 155 / 185 (+ 55% AP)',
            damagetype: 'Magic',
            values: [65, 95, 125, 155, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 95 / 125 / 155 / 185',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '50 / 65 / 80 / 95 / 110 (+ 50% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [50, 65, 80, 95, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 65 / 80 / 95 / 110',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Loyalty Program will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Loyalty Program will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Allies, Ememies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block either the rockets while they are in-flight or their explosion.\n<ul><li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
  },
  'Hostile Takeover': {
    name: 'Hostile Takeover',
    display_name: 'Hostile Takeover',
    champion: 'Renata Glasc',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RenataR.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '2000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cloud missiles sight radius, pending for test">750</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Berserker seek target radius">1000</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Individual cloud missiles">500</span>',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Angle at which the outermost cloud missiles fan out from Renata times two, estimated">14°</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Acceleration by 50 per second, pending for test">650 - 1000</span>',
    cast_time: '0.<small>75</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '150 / 140 / 130 / 120 / 110',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Renata</b> launches a cloud of potent chemicals that travels in the target direction. Enemy champions and minions hit briefly become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Berserk"><a href="/wiki/Berserk" title="Berserk"><img alt="Berserk icon.png" src="/wiki/images/Berserk_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Berserk" class="mw-redirect" title="Berserk">berserk</a></span>, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Berserk"><a href="/wiki/Berserk" title="Berserk"><img alt="Berserk icon.png" src="/wiki/images/Berserk_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Berserk</span>:</b></span> Berserk causes the target to prioritize attacking their allies over their enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Renata_Glasc_Hostile_Takeover.png',
        description:
          'Active: Renata launches a cloud of potent chemicals that travels in the target direction, granting  sight of its surroundings. Enemy champions and minions hit become  berserk for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Renata</b> launches a cloud of potent chemicals that travels in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. Enemy champions and minions hit become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Berserk"><a href="/wiki/Berserk" title="Berserk"><img alt="Berserk icon.png" src="/wiki/images/Berserk_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Berserk" class="mw-redirect" title="Berserk">berserk</a></span> for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Berserk Duration:',
            values: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            valuesHTML:
              '1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Berserk Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Berserked units gain 100% bonus attack speed and 25% increased size. Within their targeting radius, they prioritize attacking the closest unit by the following categories in descending order:\nTheir allied champions\nAllied non-champions\nAllied  wards\nEnemy units (including  monsters)',
        descriptionHTML:
          '<i>Berserked</i> units gain <span style="color:orangered; white-space:normal">100% <b>bonus</b> attack speed</span> and 25% increased <a href="/wiki/Size" title="Size">size</a>. Within their targeting radius, they prioritize attacking the closest unit by the following categories in descending order:\n<ol><li>Their allied champions</li>\n<li>Allied non-champions</li>\n<li>Allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span></li>\n<li>Enemy units (including <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>)</li></ol>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Berserked units gain 100% bonus attack speed and 25% increased size',
            increasedStat: 'bonus_ad',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText: 'bonus attack speed and 25units gain 100',
            pre: 'Berserked units gain 100% bonus attack speed and 25% increased size',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Within their targeting radius, they prioritize attacking the closest unit by the following categories in descending order:\nTheir allied champions\nAllied non-champions\nAllied  wards\nEnemy units (including  monsters)',
            damagetype: 'None',
            values: 0,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'Within their targeting radius, they prioritize attacking the closest unit by the following categories in descending order:\nTheir allied champions\nAllied non-champions\nAllied  wards\nEnemy units',
            pre: 'Within their targeting radius, they prioritize attacking the closest unit by the following categories in descending order:\nTheir allied champions\nAllied non-champions\nAllied  wards\nEnemy units',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'including  monsters',
                pre: 'including  monsters',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    spellshield: true,
    projectile: 'true',
    notes:
      ':<i>See <a href="/wiki/Types_of_Crowd_Control#Berserk" title="Types of Crowd Control">Types of Crowd Control#Berserk</a> for specific details on Berserk.</i>\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Renata_Original_R_1.ogg   "You work for me now!"',
  },
} satisfies { [skillName in string]: SkillData };
