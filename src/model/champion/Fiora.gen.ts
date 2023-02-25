import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Fiora';

export default {
  "Duelist's Dance": {
    name: "Duelist's Dance",
    display_name: "Duelist's Dance",
    champion: 'Fiora',
    skill: 'I',
    image: {
      full: 'Fiora_P.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="If Fiora is visible">1200</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Distance for remaining \'near\' the target">1350</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="If Fiora is out of vision, estimated">250</span>',
    angle: '90°',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL" title="Fiora"><img alt="Fiora" src="/wiki/images/Fiora_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL" title="Fiora/LoL">Fiora</a></span></span> challenges nearby enemy champions, calling out a direction from which she will try to strike their <span style="color: #AF1AAF; white-space:normal">Vitals</span>. A new <span style="color: #AF1AAF; white-space:normal">Vital</span> is called out after some time or if one is struck.',
      'Striking a vital deals <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Fiora</b> and grants her a burst of <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;movement speed</span></span>.',
    ],
    description: [
      {
        icon: "/wiki/images/Duelist's_Dance.png",
        description:
          'Innate: Fiora identifies the Vitals of nearby  visible enemy champions, marked as an arc around them in North-, East-, South- or Westward direction. Vitals take 1.75 seconds to become targetable and linger for 13.25 seconds afterwards while Fiora remains near the target, otherwise the Vital will disappear. After a Vital ends, Fiora identifies a new one on her target.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Fiora</b> identifies the <span style="color: #AF1AAF; white-space:normal">Vitals</span> of nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champions, marked as an arc around them in North-, East-, South- or Westward direction. <span style="color: #AF1AAF; white-space:normal">Vitals</span> take 1.<small>75</small> seconds to become targetable and linger for 13.<small>25</small> seconds afterwards while <b>Fiora</b> remains near the target, otherwise the <span style="color: #AF1AAF; white-space:normal">Vital</span> will disappear. After a <span style="color: #AF1AAF; white-space:normal">Vital</span> ends, <b>Fiora</b> identifies a new one on her target.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Vitals take 1.75 seconds to become targetable and linger for 13.25 seconds afterwards while Fiora remains near the target, otherwise the Vital will disappear',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'take 1.75 seconds to become targetable and linger for 13.25 seconds afterwards while Fiora remains near the target, otherwise the Vital will disappear',
            pre: 'Vitals take 1.75 seconds to become targetable and linger for 13.25 seconds afterwards while Fiora remains near the target, otherwise the Vital will disappear',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Duelist's_Dance_2.png",
        description:
          "Dealing damage in the direction of a Vital will trigger it to deal  bonus true damage equal to 3% (+ 4% per 100 bonus AD) of target's maximum health,  heal Fiora for 35 − 100 (based on level), and grant her 20 / 30 / 40 / 50% (based on  Grand Challenge's Rank)  bonus movement speed that decays over 1.85 seconds.",
        descriptionHTML:
          'Dealing damage in the direction of a <span style="color: #AF1AAF; white-space:normal">Vital</span> will trigger it to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> equal to <span style="color: #1F995C; white-space:normal">3% <span style="color:orange; white-space:normal">(+&nbsp;4% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> <b>Fiora</b> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="35;" data-finish="100;" data-bot_values="35;38.82;42.65;46.47;50.29;54.12;57.94;61.76;65.59;69.41;73.24;77.06;80.88;84.71;88.53;92.35;96.18;100" data-top_values="">35 − 100 (based on level)</span>, and grant her <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-top_label="[[File:Grand Challenge.png|20px|link=]] Grand Challenge\'s Rank" data-displayformula="20%+(10%*Grand Challenge\'s Rank)" data-bot_values="20;30;40;50" data-top_values="0;1;2;3" data-bot_key="%">20 / 30 / 40 / 50% (based on <img alt="Grand Challenge.png" src="/wiki/images/Fiora_Grand_Challenge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Grand Challenge\'s</i> Rank)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 1.<small>85</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Dealing damage in the direction of a Vital will trigger it to deal  bonus true damage equal to 3% (+ 4% per 100 bonus AD) of target's maximum health,  heal Fiora for 35 − 100 (based on level), and grant her 20 / 30 / 40 / 50% (based on  Grand Challenge's Rank)  bonus movement speed that decays over 1.85 seconds.",
            healType: 'OutgoingHeals',
            values: 3,
            valuesIsPercent: true,
            basedOn: " Grand Challenge's Rank",
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health,  heal Fiora for 35 − 100",
            pre: 'Dealing damage in the direction of a Vital will trigger it to deal  bonus true damage equal to 3%',
            post: "of target's maximum health,  heal Fiora for 35 − 100",
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 4% per 100 bonus AD',
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
    damagetype: 'True',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* <span style="color: #AF1AAF; white-space:normal">Vitals</span> can be triggered by any source of damage <b>Fiora</b> deals, except those with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Reactive damage"><a href="/wiki/Damage" title="Damage"><img alt="Thornmail item.png" src="/wiki/images/Thornmail_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">reactive damage</a></span> types.\n<ul><li>The <span style="color: #AF1AAF; white-space:normal">Vitals</span> are visible to all units.</li>\n<li>A <span style="color: #AF1AAF; white-space:normal">Vital\'s</span> angle is fixed to the champion\'s model and doesn\'t interact with its orientation.</li>\n<li><span style="color: #AF1AAF; white-space:normal">Vitals</span> spawn directions alternate in a Northeast-Southwest pattern. Other than that, they have a 50% chance to spawn North or East, or South or West, respectively.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> The direction of the first Vital upon <b>Fiora</b> and her enemy encountering one another in the game for the first time is always South- or Westward. This is regardless of whether Fiora is in the Blue or Red team.</li></ul></li>\n<li><span style="color: #AF1AAF; white-space:normal">Vitals</span> will not trigger if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, or missed while <b>Fiora</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.\n<ul><li>If the <span style="color: #AF1AAF; white-space:normal">Vital</span> is triggered by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Lunge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Lunge" title="Lunge"><img alt="Lunge" src="/wiki/images/Fiora_Lunge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Lunge" title="Fiora/LoL">Lunge</a></span></span>, it can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, but it can\'t be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> and will trigger even if <b>Fiora</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li></ul></li></ul>',
    video: 'Fiora IVideo.ogv',
  },
  Lunge: {
    name: 'Lunge',
    display_name: 'Lunge',
    champion: 'Fiora',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'FioraQ.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '420',
    target_range: '50 / 360',
    cast_time: 'none',
    cost: '20 / 25 / 30 / 35 / 40',
    costtype: 'Mana',
    cooldown:
      '13 / 11.<small>25</small> / 9.<small>5</small> / 7.<small>75</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL" title="Fiora"><img alt="Fiora" src="/wiki/images/Fiora_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL" title="Fiora/LoL">Fiora</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction and then stabs a nearby enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects.',
      'If she stabs a target, the cooldown is <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Lunge.png',
        description:
          "Active: Fiora  dashes in the target direction, then stabs a nearby enemy. Lunge can hit structures and  wards. Stabbing a target reduces Lunge's  cooldown by 50%.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fiora</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, then stabs a nearby enemy. <i>Lunge</i> can hit <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>. Stabbing a target reduces <i>Lunge\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by 50%.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: "Stabbing a target reduces Lunge's  cooldown by 50%.",
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: ".a target reduces Lunge's  cooldown by 50",
            pre: "Stabbing a target reduces Lunge's  cooldown by 50%.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The stab deals physical damage and applies  on-hit effects at 100% effectiveness.',
        descriptionHTML:
          'The stab deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The stab deals physical damage and applies  on-hit effects at 100% effectiveness.',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness.stab deals physical damage and applies  on-hit effects at 100',
            pre: 'The stab deals physical damage and applies  on-hit effects at 100% effectiveness.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '70 / 80 / 90 / 100 / 110 (+ 90 / 95 / 100 / 105 / 110% bonus AD)',
            valuesHTML:
              '70 / 80 / 90 / 100 / 110 <span style="color:orange; white-space:normal">(+&nbsp;90 / 95 / 100 / 105 / 110% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 80 / 90 / 100 / 110 (+ 90 / 95 / 100 / 105 / 110% bonus AD)',
            damagetype: 'Physical',
            values: [70, 80, 90, 100, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 80 / 90 / 100 / 110',
            children: [
              {
                values: [90, 95, 100, 105, 110],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90 / 95 / 100 / 105 / 110% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Fiora can cast any of her abilities during the dash. The target does not have to be  visible to be hit by this ability.',
        descriptionHTML:
          '<i><b>Fiora</b> can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'basic',
    onhiteffects: 'True',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <i>Lunge</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>, but also triggers spell effects by dealing an additional 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.\n<ul><li><ul><li><i>Lunge</i> cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.</li></ul></li>\n<li><i>Lunge</i> won\'t deal damage, if the spell is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, but will deal damage if <b>Fiora</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li><i>Lunge</i> does not apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects apart from certain exceptions.\n<ul><li>It does apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Energized"><a href="/wiki/Named_item_effect#Energized" title="Named item effect#Energized"><img alt="Kircheis Shard item.png" src="/wiki/images/Kircheis_Shard_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Energized" title="Named item effect">Energized</a></span> as if it was an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effect.</li>\n<li>It does not stack <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade"><img alt="Guinsoo\'s Rageblade" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade</a></span></span> nor trigger Phantom Hit.</li></ul></li>\n<li>The stab prioritizes in order of:\n<ul><li>Enemy champion affected by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Grand Challenge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Grand_Challenge" title="Grand Challenge"><img alt="Grand Challenge" src="/wiki/images/Fiora_Grand_Challenge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Grand_Challenge" title="Fiora/LoL">Grand Challenge</a></span></span>.</li>\n<li><span style="color: #AF1AAF; white-space:normal">Vitals</span> facing <b>Fiora</b>.</li>\n<li>Champions who would die to the strike.</li>\n<li>The nearest champion.</li>\n<li>Enemies that would die to the strike.</li>\n<li>The closest enemy.</li>\n<li>Structures</li>\n<li>Wards.</li></ul></li>\n<li><i>Lunge</i> will not attempt to strike <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a>.</li>\n<li><b>Fiora</b> does not stab if the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.</li>\n<li><b>Fiora</b> cannot cast or buffer <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during the dash.\n<ul><li><b>Fiora</b> can cast <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> during the dash, potentinally interrupting it based on the timing, preventing the stab if it does.</li></ul></li>\n<li>The dash <b>can</b> pass through walls.</li>\n<li><i>Lunge\'s</i> dash speed is affected by movement speed.</li></ul>',
    video: 'Fiora QVideo.ogv',
  },
  Riposte: {
    name: 'Riposte',
    display_name: 'Riposte',
    champion: 'Fiora',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'FioraW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '900',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '3200',
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown: '24 / 22 / 20 / 18 / 16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL" title="Fiora"><img alt="Fiora" src="/wiki/images/Fiora_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL" title="Fiora/LoL">Fiora</a></span></span> briefly parries all incoming damage, debuffs, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">disables</a></span>, then stabs in a direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      'The stab <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the first enemy champion hit, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them if <b>Fiora</b> parried an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effect.',
    ],
    description: [
      {
        icon: '/wiki/images/Riposte.png',
        description:
          'Active: Fiora enters a defensive stance for 0.75 seconds, becoming  unable to act, preventing all incoming non- turret damage, and gaining debuff immunity and  crowd control immunity.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fiora</b> enters a defensive stance for 0.<small>75</small> seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>, preventing all incoming non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> damage, and gaining <a href="/wiki/Debuff" title="Debuff">debuff</a> immunity and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Additionally, over the first 0.6 seconds of the duration, Fiora poises to strike, after which she sends a shock with her sword in a line in the target direction, dealing magic damage to all enemies hit until colliding with an enemy champion.',
        descriptionHTML:
          'Additionally, over the first 0.<small>6</small> seconds of the duration, <b>Fiora</b> poises to strike, after which she sends a shock with her sword in a line in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies hit until colliding with an enemy champion.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '110 / 150 / 190 / 230 / 270 (+ 100% AP)',
            valuesHTML:
              '110 / 150 / 190 / 230 / 270 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '110 / 150 / 190 / 230 / 270 (+ 100% AP)',
            damagetype: 'Magic',
            values: [110, 150, 190, 230, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '110 / 150 / 190 / 230 / 270',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The enemy champion struck is also  slowed and  crippled by 50% for 2 seconds. If Riposte negates at least one hostile  immobilizing effect, Fiora  stuns the target for the same duration instead.',
        descriptionHTML:
          'The enemy champion struck is also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">crippled</a></span> by 50% for 2 seconds. If <i>Riposte</i> negates at least one <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="belonging to an enemy source">hostile</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effect, <b>Fiora</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> the target for the same duration instead.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The enemy champion struck is also  slowed and  crippled by 50% for 2 seconds',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 2 secondsenemy champion struck is also  slowed and  crippled by 50',
            pre: 'The enemy champion struck is also  slowed and  crippled by 50% for 2 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Riposte</i> is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerability</a></span> but instead reduces any damage to her by 100% late into the damage event. Because of this, it interacts differently with effects triggered from damage:\n<ul><li><ul><li><span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">Life steal</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">Healing</a></span> based on damage dealt (Vamp) will still have effect even if the damage is ultimately ignored by <i>Riposte</i>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">Shields</a></span> will absorb damage before <i>Riposte</i> takes effect.</li>\n<li><b>Fiora</b> cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span> by <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pyke" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pyke/LoL" title="Pyke\'s"><img alt="Pyke\'s" src="/wiki/images/Pyke_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pyke/LoL" title="Pyke/LoL">Pyke\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pyke" data-ability="Death from Below" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pyke/LoL#Death_from_Below" title="Death from Below"><img alt="Death from Below" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pyke/LoL#Death_from_Below" title="Pyke/LoL">Death from Below</a></span></span></span> during <i>Riposte</i> but she can by <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Aspect of the Dragon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aspect_of_the_Dragon" title="Aspect of the Dragon"><img alt="Aspect of the Dragon" src="/wiki/images/Aspect_of_the_Dragon_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aspect_of_the_Dragon" class="mw-redirect" title="Aspect of the Dragon">Aspect of the Dragon</a></span></span>.</li></ul></li>\n<li><i>Riposte</i> will not negate allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.</li>\n<li><i>Riposte</i> will not negate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">Immobilizing</a></span> effects include those from <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blast_Cone" title="Blast Cone"><img alt="Blast Cone" src="/wiki/images/Blast_ConeSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blast_Cone" class="mw-redirect" title="Blast Cone">Blast Cone</a></span></span> (only if triggered by an enemy) and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">epic monsters</a></span>.</li>\n<li>Debuff immunity includes <a href="/wiki/Summoner_spells" class="mw-redirect" title="Summoner spells">summoner spells</a>, such as <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> and <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span>, as well as <a href="/wiki/Damage_over_time" title="Damage over time">damage over time</a> and other effects.</li>\n<li><i>Riposte</i> is and is not prioritized over certain effects:\n<ul><li><i>Riposte</i> will block effects before <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span>.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-ability="Black Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL#Black_Shield" title="Black Shield"><img alt="Black Shield" src="/wiki/images/Morgana_Black_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL#Black_Shield" title="Morgana/LoL">Black Shield</a></span></span> will negate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> before <i>Riposte</i>.\n<ul><li><i>Riposte</i> will not be able to apply its <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>, as it requires <i>Riposte</i> to negate the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilize</a></span> and not any other external source to do so.</li></ul></li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will also prevent <span style="color: #AF1AAF; white-space:normal">Vitals</span> from being triggered by <i>Riposte</i>.</li>\n<li>The following table refers for interactions while <b>Fiora</b> is performing <i>Riposte</i>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Fiora_Original_W_1.ogg   En garde!',
    video: 'Fiora WVideo.ogv',
  },
  Bladework: {
    name: 'Bladework',
    display_name: 'Bladework',
    champion: 'Fiora',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'FioraE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">11 / 10 / 9 / 8 / 7</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL" title="Fiora"><img alt="Fiora" src="/wiki/images/Fiora_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL" title="Fiora/LoL">Fiora</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for the next two attacks.',
      'The first attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the target, and the second attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Bladework.png',
        description:
          'Active: Fiora empowers her next two basic attacks on-attack within 4 seconds to gain  25 bonus range and  bonus attack speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fiora</b> empowers her next two <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> within 4 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Fiora empowers her next two basic attacks on-attack within 4 seconds to gain  25 bonus range and  bonus attack speed.',
            increasedStat: 'bonus_ad',
            values: 4,
            units: '',
            unitsText:
              'empowers her next two basic attacks on-attack within 4 seconds to gain  25 bonus range and  bonus attack speed.',
            pre: 'Fiora empowers her next two basic attacks on-attack within 4 seconds to gain  25 bonus range and  bonus attack speed.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '50 / 60 / 70 / 80 / 90%',
            valuesHTML: '50 / 60 / 70 / 80 / 90%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '50 / 60 / 70 / 80 / 90%',
            values: [50, 60, 70, 80, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The first attack  slows the target by 30% for 1 second but cannot  critically strike. The second attack will  critically strike for  modified critical damage, including to  structures.',
        descriptionHTML:
          'The first attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the target by 30% for 1 second but cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. The second attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal"><b>modified</b> critical damage</span></span>, including to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The first attack  slows the target by 30% for 1 second but cannot  critically strike',
            values: 3,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'for 1 second but cannot  critically strikefirst attack  slows the target by 30',
            pre: 'The first attack  slows the target by 30% for 1 second but cannot  critically strike',
          },
        ],
        leveling: [
          {
            name: 'Critical damage:',
            values: '160 / 170 / 180 / 190 / 200%',
            valuesHTML: '160 / 170 / 180 / 190 / 200%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Critical damage:',
            raw: '160 / 170 / 180 / 190 / 200%',
            damagetype: 'None',
            values: [160, 170, 180, 190, 200],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '160 / 170 / 180 / 190 / 200%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Bladework  resets Fiora's basic attack timer.",
        descriptionHTML:
          '<i>Bladework <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Fiora\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'Basic',
    occurrence: 'On-hit',
    spellshield: 'Special',
    notes:
      '* <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge</a></span></span>\'s <span style="color: #944B00; white-space:normal"><b>bonus</b> critical damage</span> will increase the damage of the second attack by 35% AD.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block the slow from the first hit.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Bladework\'s</i> interaction with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li></ul>',
    video: 'Fiora EVideo.ogv',
  },
  'Grand Challenge': {
    name: 'Grand Challenge',
    display_name: 'Grand Challenge',
    champion: 'Fiora',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'FioraR.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '500',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Movement speed radius, includes target radius">550</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Heal zone radius, does not include target radius">500</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown: '110 / 100 / 90 / 80 / 70',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance\'s"><img alt="Duelist\'s Dance\'s" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance\'s</a></span></span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> is increased.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL" title="Fiora"><img alt="Fiora" src="/wiki/images/Fiora_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL" title="Fiora/LoL">Fiora</a></span></span> reveals all <span style="color: #AF1AAF; white-space:normal">Vitals</span> on an enemy champion and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while near them.',
      'If <b>Fiora</b> triggers at least one <span style="color: #AF1AAF; white-space:normal">Vital</span> before the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or triggers all four, she creates a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Grand Challenge 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Victory Zone"><img alt="Victory Zone" src="/wiki/images/Fiora_Grand_Challenge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Fiora/LoL"><i>Victory Zone</i></a></span></span> which continually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Fiora</b> and her allies.',
    ],
    description: [
      {
        description:
          "Passive:  Duelist's Dance's  bonus movement speed is increased.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance\'s"><img alt="Duelist\'s Dance\'s" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> is increased.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Additional Bonus Movement Speed:',
            values: '10 / 15 / 20 / 25 / 30%',
            valuesHTML: '10 / 15 / 20 / 25 / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Additional Bonus Movement Speed:',
            raw: '10 / 15 / 20 / 25 / 30%',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
          },
        ],
      },
      {
        icon: '/wiki/images/Grand_Challenge.png',
        description:
          "Active: Fiora challenges the target enemy champion for 8 seconds, highlighting all four of their Vitals after a 0.5-second delay. While in effect,  Duelist's Dance does not identify new Vitals on Fiora's target.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fiora</b> challenges the target enemy champion for 8 seconds, highlighting all four of their <span style="color: #AF1AAF; white-space:normal">Vitals</span> after a 0.<small>5</small>-second delay. While in effect, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance"><img alt="Duelist\'s Dance" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance</a></span></span></i> does not identify new <span style="color: #AF1AAF; white-space:normal">Vitals</span> on <b>Fiora\'s</b> target.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Fiora challenges the target enemy champion for 8 seconds, highlighting all four of their Vitals after a 0.5-second delay',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'challenges the target enemy champion for 8 seconds, highlighting all four of their Vitals after a 0.5-second delay',
            pre: 'Fiora challenges the target enemy champion for 8 seconds, highlighting all four of their Vitals after a 0.5-second delay',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "While near the target, Fiora gains  Duelist's Dance's  bonus movement speed.",
        descriptionHTML:
          'While near the target, <b>Fiora</b> gains <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance\'s"><img alt="Duelist\'s Dance\'s" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Grand_Challenge_2.png',
        description:
          'If Fiora triggers at least one Vital before the target  dies, or triggers all four, she creates a  Victory Zone at their location for 2 − 5 (based on Vitals hit) seconds, which  heals Fiora and all allies within the area every second.',
        descriptionHTML:
          'If <b>Fiora</b> triggers at least one <span style="color: #AF1AAF; white-space:normal">Vital</span> before the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or triggers all four, she creates a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Grand Challenge 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Victory Zone"><img alt="Victory Zone" src="/wiki/images/Fiora_Grand_Challenge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Fiora/LoL"><i>Victory Zone</i></a></span></span> at their location for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#AF1AAF;" data-top_label="Vitals hit" data-start="2;" data-finish="5;" data-bot_values="2;3;4;5" data-top_values="">2 − 5 (based on Vitals hit)</span> seconds, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Fiora</b> and all allies within the area every second.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'If Fiora triggers at least one Vital before the target  dies, or triggers all four, she creates a  Victory Zone at their location for 2 − 5 (based on Vitals hit) seconds, which  heals Fiora and all allies within the area every second.',
            healType: 'OutgoingHeals',
            values: [2, 5],
            basedOn: 'Vitals hit',
            user: 'none',
            units: '',
            unitsText:
              'seconds, which  heals Fiora and all allies within the area every second.',
            pre: 'If Fiora triggers at least one Vital before the target  dies, or triggers all four, she creates a  Victory Zone at their location for 2 − 5',
            post: 'seconds, which  heals Fiora and all allies within the area every second.',
          },
        ],
        leveling: [
          {
            name: 'Heal per Tick:',
            values: '75 / 87.5 / 100 / 112.5 / 125 (+ 60% bonus AD)',
            valuesHTML:
              '75 / 87.<small>5</small> / 100 / 112.<small>5</small> / 125 <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal per Tick:',
            raw: '75 / 87.5 / 100 / 112.5 / 125 (+ 60% bonus AD)',
            healType: 'BonusHealth',
            values: [75, 87.5, 100, 112.5, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 87.5 / 100 / 112.5 / 125',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Unlike  Duelist's Dance, the Vitals will continue to linger even if Fiora is not nearby.",
        descriptionHTML:
          '<i>Unlike <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance"><img alt="Duelist\'s Dance" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance</a></span></span>, the <span style="color: #AF1AAF; white-space:normal">Vitals</span> will continue to linger even if <b>Fiora</b> is not nearby.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies',
    damagetype: 'True',
    spelleffects: 'Heal',
    spellshield: false,
    notes:
      '* <i>Grand Challenge</i> is dispelled instantly if targeting a <a href="/wiki/Decoy" class="mw-redirect" title="Decoy">decoy</a>.\n<ul><li><ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL" title="Sion\'s"><img alt="Sion\'s" src="/wiki/images/Sion_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL" title="Sion/LoL">Sion\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-ability="Glory in Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Glory in Death"><img alt="Glory in Death" src="/wiki/images/Sion_Glory_in_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Sion/LoL">Glory in Death</a></span></span></span></li></ul></li>\n<li>The damage of this ability scales with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance"><img alt="Duelist\'s Dance" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance</a></span></span>.</li>\n<li>Even if <b>Fiora</b> dies, the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Grand Challenge 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Victory Zone"><img alt="Victory Zone" src="/wiki/images/Fiora_Grand_Challenge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Fiora/LoL"><i>Victory Zone</i></a></span></span> will trigger so long as she hit at least one <span style="color: #AF1AAF; white-space:normal">Vital</span> and they die before the <span style="color: #AF1AAF; white-space:normal">Vitals</span> wear off.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span> effects will not prevent the activation of the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Grand Challenge 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Victory Zone"><img alt="Victory Zone" src="/wiki/images/Fiora_Grand_Challenge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Fiora/LoL"><i>Victory Zone</i></a></span></span>.</li></ul></li>\n<li>Ally units in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span> will not be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> by the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Grand Challenge 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Victory Zone"><img alt="Victory Zone" src="/wiki/images/Fiora_Grand_Challenge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Fiora/LoL">Victory Zone</a></span></span>.</li>\n<li><b>Fiora</b> will automatically attack the target upon casting if the target was selected while they weren\'t in range of the ability.</li></ul>',
    video: 'Fiora RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
