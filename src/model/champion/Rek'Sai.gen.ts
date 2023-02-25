import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = "Rek'Sai";

export default {
  "Fury of the Xer'Sai": {
    name: "Fury of the Xer'Sai",
    display_name: "Fury of the Xer'Sai",
    champion: "Rek'Sai",
    skill: 'I',
    image: {
      full: 'RekSai_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai\'s"><img alt="Rek\'Sai\'s" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai\'s</a></span></span> basic attacks and ability hits generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span>, which continually expires after a few seconds <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a>.',
      'When <b>Rek\'sai</b> becomes <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrowed"><img alt="Burrowed" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrowed</a></span></span></b></span>, she rapidly consumes <span style="color: #FA6533; white-space:normal">Fury</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> herself while she is wounded.',
    ],
    description: [
      {
        icon: "/wiki/images/Fury_of_the_Xer'Sai.png",
        description:
          "Innate: Rek'Sai basic attacks and ability hits generate  25 Fury. After 8 seconds of being out of combat, she loses 20 Fury per second.  Prey Seeker will not generate Fury against non- champions.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Rek\'Sai</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">25 Fury</span></a></span>. After 8 seconds of being <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a>, she loses <span style="color: #FA6533; white-space:normal">20 Fury</span> per second. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Prey Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Prey_Seeker" title="Prey Seeker"><img alt="Prey Seeker" src="/wiki/images/Rek%27Sai_Prey_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Prey_Seeker" title="Rek\'Sai/LoL">Prey Seeker</a></span></span></i> will not generate <span style="color: #FA6533; white-space:normal">Fury</span> against non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: "Rek'Sai basic attacks and ability hits generate  25 Fury",
            values: 2,
            units: 'total_ad',
            unitsText: 'basic attacks and ability hits generate  25 Fury',
            pre: "Rek'Sai basic attacks and ability hits generate  25 Fury",
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After 8 seconds of being out of combat, she loses 20 Fury per second',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              '8 seconds of being out of combat, she loses 20 Fury per second',
            pre: 'After 8 seconds of being out of combat, she loses 20 Fury per second',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "When Rek'Sai becomes  Burrowed, she consumes her current Fury over 3 seconds to  heal for up to 20 − 190 (based on level) at 100 Fury, stopping once fully consumed or she reaches  full health. If she starts generating Fury while Burrowed, the consumption occurs after 5 seconds.",
        descriptionHTML:
          'When <b>Rek\'Sai</b> becomes <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrowed"><img alt="Burrowed" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrowed</a></span></span></b></span>, she consumes her current <span style="color: #FA6533; white-space:normal">Fury</span> over 3 seconds to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="190;" data-bot_values="20;30;40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190" data-top_values="">20 − 190 (based on level)</span> at <span style="color: #FA6533; white-space:normal">100 Fury</span>, stopping once fully consumed or she reaches <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">full health</span></span>. If she starts generating <span style="color: #FA6533; white-space:normal">Fury</span> while <span class="template_sbc"><b>Burrowed</b></span>, the consumption occurs after 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "When Rek'Sai becomes  Burrowed, she consumes her current Fury over 3 seconds to  heal for up to 20 − 190 (based on level) at 100 Fury, stopping once fully consumed or she reaches  full health",
            healType: 'BonusHealth',
            values: [
              20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
              170, 180, 190,
            ],
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText:
              'at 100 Fury, stopping once fully consumed or she reaches  full health',
            pre: "When Rek'Sai becomes  Burrowed, she consumes her current Fury over 3 seconds to  heal for up to 20 − 190",
            post: 'at 100 Fury, stopping once fully consumed or she reaches  full health',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If she starts generating Fury while Burrowed, the consumption occurs after 5 seconds.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'she starts generating Fury while Burrowed, the consumption occurs after 5 seconds.',
            pre: 'If she starts generating Fury while Burrowed, the consumption occurs after 5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Heal',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Fury</a></span> bar changes from <span style="color:yellow;"><b>Yellow</b></span> to <span style="color:red;"><b>Red</b></span> when full.\n<ul><li>When <b>Rek\'Sai</b> automatically consumes <span style="color: #FA6533; white-space:normal">Fury</span> while <span class="template_sbc"><b>Burrowed</b></span> (no transformation), the healing buff will refresh every second while she has/maintains over <span style="color: #FA6533; white-space:normal">25 Fury</span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup> This causes the healing to last 6 seconds at <span style="color: #FA6533; white-space:normal">100 Fury</span>.</li></ul>',
  },
  "Queen's Wrath": {
    name: "Queen's Wrath",
    display_name: "Queen's Wrath",
    champion: "Rek'Sai",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RekSaiQ.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: '325',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">4</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai"><img alt="Rek\'Sai" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai</a></span></span> empowers her next 3 basic attacks within a few seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> to the target and surrounding enemies. The damage to the primary target can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
    ],
    description: [
      {
        icon: "/wiki/images/Queen's_Wrath.png",
        description:
          "Active: Rek'Sai empowers her next three basic attacks within 5 seconds to have a 0.25-second cast time and deal bonus physical damage to the target and surrounding enemies. The damage to the primary target is affected by  critical strike modifiers.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> empowers her next three basic attacks within 5 seconds to have a 0.<small>25</small>-second cast time and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> to the target and surrounding enemies. The damage to the primary target is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: "Rek'Sai empowers her next three basic attacks within 5 seconds to have a 0.25-second cast time and deal bonus physical damage to the target and surrounding enemies",
            damagetype: 'Physical',
            values: 5,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              'empowers her next three basic attacks within 5 seconds to have a 0.25-second cast time and deal bonus physical damage to the target and surrounding enemies',
            pre: "Rek'Sai empowers her next three basic attacks within 5 seconds to have a 0.25-second cast time and deal bonus physical damage to the target and surrounding enemies",
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '21 / 27 / 33 / 39 / 45 (+ 50% bonus AD)',
            valuesHTML:
              '21 / 27 / 33 / 39 / 45 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '21 / 27 / 33 / 39 / 45 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [21, 27, 33, 39, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '21 / 27 / 33 / 39 / 45',
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
        icon: '/wiki/images/undefined',
        description:
          "Queen's Wrath  resets Rek'Sai's basic attack timer, and ends prematurely if Rek'Sai is  Burrowed for more than 1.5 seconds.",
        descriptionHTML:
          '<i>Queen\'s Wrath <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Rek\'Sai\'s</b> basic attack timer, and ends prematurely if <b>Rek\'Sai</b> is <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrowed"><img alt="Burrowed" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrowed</a></span></span></b></span> for more than 1.<small>5</small> seconds.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Queen's Wrath  resets Rek'Sai's basic attack timer, and ends prematurely if Rek'Sai is  Burrowed for more than 1.5 seconds.",
            values: 1,
            units: 'total_ad',
            unitsText:
              "Wrath  resets Rek'Sai's basic attack timer, and ends prematurely if Rek'Sai is  Burrowed for more than 1.5 seconds.",
            pre: "Queen's Wrath  resets Rek'Sai's basic attack timer, and ends prematurely if Rek'Sai is  Burrowed for more than 1.5 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    notes:
      '* Damage to the primary target applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> and damage to secondary targets applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span>.\n<ul><li><i>Queen\'s Wrath\'s</i> bonus damage applies against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li>\n<li>There is a brief delay between each attack of <i>Queen\'s Fury</i> after the attack\'s cast time elapses.\n<ul><li>If <b>Rek\'Sai</b> has more than <span style="color:orangered; white-space:normal">1.<small>4</small> attack speed</span>, she can cancel this delay to perform the next attack quicker. This does not occur if she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Acquisition radius"><a href="/wiki/Basic_attack" title="Basic attack"><img alt="Acquisition range.png" src="/wiki/images/Acquisition_range.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack" title="Basic attack">attacking automatically</a></span>.</li></ul></li>\n<li><i>Queen\'s Wrath\'s</i> enhanced attacks still apply <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> and <a href="/wiki/On-attack" class="mw-redirect" title="On-attack">on-attack</a> effects and <a href="/wiki/Life_steal" title="Life steal">life steal</a> to the primary target.</li>\n<li>When <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, the damage dealt to the primary target is nullified; however, damage to any secondary targets still occurs.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Queen\'s Wrath</i> interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li>\n<li>If the primary target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the empowered attack\'s cast time, it is cancelled but not consumed.</li></ul>',
  },
  'Prey Seeker': {
    name: 'Prey Seeker',
    display_name: 'Prey Seeker',
    champion: "Rek'Sai",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RekSaiQ.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1650',
    cast_time: '0.<small>1</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">12 / 11.<small>5</small> / 11 / 10.<small>5</small> / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai"><img alt="Rek\'Sai" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai</a></span></span> fires a void bolt in the target direction that detonates on the first enemy hit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Prey_Seeker.png',
        description:
          "Active: Rek'Sai fires a void bolt in the target direction that detonates on the first enemy hit, dealing physical damage to all nearby enemies and  revealing them for 2.5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> fires a void bolt in the target direction that detonates on the first enemy hit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: "Rek'Sai fires a void bolt in the target direction that detonates on the first enemy hit, dealing physical damage to all nearby enemies and  revealing them for 2.5 seconds.",
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'fires a void bolt in the target direction that detonates on the first enemy hit, dealing physical damage to all nearby enemies and  revealing them for 2.5 seconds.',
            pre: "Rek'Sai fires a void bolt in the target direction that detonates on the first enemy hit, dealing physical damage to all nearby enemies and  revealing them for 2.5 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 95 / 130 / 165 / 200 (+ 50% bonus AD) (+ 70% AP)',
            valuesHTML:
              '60 / 95 / 130 / 165 / 200 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 50% bonus AD) (+ 70% AP)',
            damagetype: 'Physical',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      "* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Prey Seeker's</i> effect radius is centered around the location of the missile as it collides.</li></ul>",
  },
  Burrow: {
    name: 'Burrow',
    display_name: 'Burrow',
    champion: "Rek'Sai",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RekSaiW.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: '1300',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after casting Unburrow">4</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai"><img alt="Rek\'Sai" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai</a></span></span> becomes <span class="template_sbc"><b>Burrowed</b></span>, reducing her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> while gaining access to her <span class="template_sbc"><b>Burrowed</b></span> abilities. She also becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, as well as <i>Tremor Sense</i>.',
      'Once <i>Burrow</i> is learned, <b>Rek\'Sai</b> will enter <span class="template_sbc"><b>Burrowed</b></span> after <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="recalling"><img alt="recalling" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">recalling</a></span></span> and respawning.',
      '<span class="template_sbc"><b>Tremor Sense:</b></span> Once every brief moment, <b>Rek\'Sai</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured vision"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">obscured vision</a></span> of nearby enemies that are moving.',
    ],
    description: [
      {
        icon: '/wiki/images/Burrow.png',
        description:
          "Active: Rek'Sai becomes Burrowed, reducing her  attack range to 75 and her  sight radius to 250 units while gaining access to her Burrowed abilities. She also becomes  ghosted and gains  15 / 20 / 25 / 30 (based on level) bonus movement speed, as well as Tremor Sense.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> becomes <span class="template_sbc"><b>Burrowed</b></span>, reducing her <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> to 75 and her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> radius to 250 units while gaining access to her <span class="template_sbc"><b>Burrowed</b></span> abilities. She also becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="15;1" data-finish="30;16" data-bot_values="15;20;25;30" data-top_values="1;6;11;16">15 / 20 / 25 / 30 (based on level)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, as well as <i>Tremor Sense</i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: "Rek'Sai becomes Burrowed, reducing her  attack range to 75 and her  sight radius to 250 units while gaining access to her Burrowed abilities",
            increasedStat: 'total_ad',
            values: 7,
            units: '',
            unitsText:
              'becomes Burrowed, reducing her  attack range to 75 and her  sight radius to 250 units while gaining access to her Burrowed abilities',
            pre: "Rek'Sai becomes Burrowed, reducing her  attack range to 75 and her  sight radius to 250 units while gaining access to her Burrowed abilities",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'She also becomes  ghosted and gains  15 / 20 / 25 / 30 (based on level) bonus movement speed, as well as Tremor Sense.',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed, as well as Tremor Sense.',
            pre: 'She also becomes  ghosted and gains  15 / 20 / 25 / 30',
            post: 'bonus movement speed, as well as Tremor Sense.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Tremor Sense: Rek'Sai and her allies gain  obscured vision of nearby enemy units that are moving every 1.5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Tremor Sense:</b></span> <b>Rek\'Sai</b> and her allies gain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured vision"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">obscured vision</a></span> of nearby enemy units that are moving every 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Tremor Sense:',
            raw: "Rek'Sai and her allies gain  obscured vision of nearby enemy units that are moving every 1.5 seconds.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'and her allies gain  obscured vision of nearby enemy units that are moving every 1.5 seconds.',
            pre: "Rek'Sai and her allies gain  obscured vision of nearby enemy units that are moving every 1.5 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Once Burrow has been learned, Rek'Sai automatically becomes Burrowed upon completing a  Recall channel or respawning.",
        descriptionHTML:
          'Once <i>Burrow</i> has been learned, <b>Rek\'Sai</b> automatically becomes <span class="template_sbc"><b>Burrowed</b></span> upon completing a <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> channel or <a href="/wiki/Death" title="Death">respawning</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '*<i>Burrow</i> does not count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>Enemies detected by <i>Tremor Sense</i> are displayed as rings on the ground. Champions display larger rings and <b>Rek\'Sai</b> will react to this detection.</li>\n<li>Visible enemies will not be detected by Tremor Sense. Enemies standing still while <b>Rek\'Sai</b> is nearby are insensible by <i>Tremor Sense</i>.</li></ul>\n<figure class="thumb tleft " style="width: 300px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/1/16/Rek%27Sai_Ring_Screenshot.jpg/revision/latest?cb=20200210004918" class="image"><img alt="" src="/wiki/images/Rek%27Sai_Ring_Screenshot.jpg" decoding="async" loading="lazy" width="300" height="88" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/1/16/Rek%27Sai_Ring_Screenshot.jpg/revision/latest?cb=20200210004918" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/1/16/Rek%27Sai_Ring_Screenshot.jpg/revision/latest/scale-to-width-down/300?cb=20200210004918" decoding="async" loading="lazy" width="300" height="88" class="thumbimage" data-image-name="Rek\'Sai Ring Screenshot.jpg" data-image-key="Rek%27Sai_Ring_Screenshot.jpg" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/16/Rek%27Sai_Ring_Screenshot.jpg/revision/latest/scale-to-width-down/300?cb=20200210004918"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption"><b>Rek\'Sai</b> sensing a nearby enemy with <i>Tremor Sense</i>.</p> \t\t \t</figcaption> </figure>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Rek%27Sai_Original_TremorSense_SFX_2_3.ogg   Champion detection alert.',
  },
  Unburrow: {
    name: 'Unburrow',
    display_name: 'Unburrow',
    champion: "Rek'Sai",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RekSaiW.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Hitbox range">160</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knock aside range">250</span>',
    cast_time: 'none',
    static:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after casting Burrow">1</span>',
    ontargetcdstatic:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Begins after the target is displaced">10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai"><img alt="Rek\'Sai" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai</a></span></span> becomes <span class="template_sbc"><b>Un-Burrowed</b></span>, gaining access to her <span class="template_sbc"><b>Un-Burrowed</b></span> abilities. Additionally, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them aside</a></span>. The nearest enemy hit is instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span>, and cannot be affected again by <i>Unburrow</i> for some time.',
      '<b>Rek\'Sai</b> can automatically cast <i>Unborrow</i> by basic attacking an enemy, applying the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> against the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Unburrow.png',
        description:
          "Active: Rek'Sai becomes Un-Burrowed, gaining access to her Un-Burrowed abilities. Additionally, she deals physical damage to nearby enemies and  knocks them aside. The enemy closest to the center is instead  knocked up for 1 second, and cannot be affected by Unburrow again for some time.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> becomes <span class="template_sbc"><b>Un-Burrowed</b></span>, gaining access to her <span class="template_sbc"><b>Un-Burrowed</b></span> abilities. Additionally, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them aside</a></span>. The enemy closest to the center is instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 1 second, and cannot be affected by <i>Unburrow</i> again for some time.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'The enemy closest to the center is instead  knocked up for 1 second, and cannot be affected by Unburrow again for some time.',
            increasedStat: 'total_ad',
            values: 1,
            units: '',
            unitsText:
              'enemy closest to the center is instead  knocked up for 1 second, and cannot be affected by Unburrow again for some time.',
            pre: 'The enemy closest to the center is instead  knocked up for 1 second, and cannot be affected by Unburrow again for some time.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '55 / 70 / 85 / 100 / 115 (+ 80% bonus AD)',
            valuesHTML:
              '55 / 70 / 85 / 100 / 115 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 70 / 85 / 100 / 115 (+ 80% bonus AD)',
            damagetype: 'Physical',
            values: [55, 70, 85, 100, 115],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 70 / 85 / 100 / 115',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Rek'Sai can also trigger Unburrow by issuing an attack command, applying the  knock up against the target.",
        descriptionHTML:
          '<b>Rek\'Sai</b> can also trigger <i>Unburrow</i> by issuing an attack command, applying the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> against the target.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self / Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '*<i>Unburrow</i> does not count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><i>Unburrow\'s</i> per-target <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> only applies to targets affected by the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock-up</a></span>, but provides immunity to all effects of the ability.</li>\n<li><i>Unburrow</i> is still considered an ability and is thus stopped by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silence</a></span>. She can basic attack normally during this time, without leaving <i>unburrow</i>.</li>\n<li>For a brief moment during the beginning animation of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Tunnel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Tunnel" title="Tunnel"><img alt="Tunnel" src="/wiki/images/Rek%27Sai_Tunnel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Tunnel" title="Rek\'Sai/LoL">Tunnel</a></span></span>, <b>Rek\'Sai</b> can trigger <i>Unburrow</i> by issuing an attack command.</li></ul>',
  },
  'Furious Bite': {
    name: 'Furious Bite',
    display_name: 'Furious Bite',
    champion: "Rek'Sai",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RekSaiE.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '225',
    cast_time: '0.<small>25</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> bites the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>. At maximum <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span>, <i>Furious Bite\'s</i> damage is doubled and converted to <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Furious_Bite.png',
        description:
          "Active: Rek'Sai bites the target enemy, dealing physical damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> bites the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '55 / 60 / 65 / 70 / 75 (+ 85% bonus AD)',
            valuesHTML:
              '55 / 60 / 65 / 70 / 75 <span style="color:orange; white-space:normal">(+&nbsp;85% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 60 / 65 / 70 / 75 (+ 85% bonus AD)',
            damagetype: 'Physical',
            values: [55, 60, 65, 70, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 60 / 65 / 70 / 75',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 85% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "At maximum  Fury, Furious Bite's damage is doubled and converted to  true damage.",
        descriptionHTML:
          'At maximum <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span>, <i>Furious Bite\'s</i> damage is doubled and converted to <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'True Damage:',
            values: '110 / 120 / 130 / 140 / 150 (+ 170% bonus AD)',
            valuesHTML:
              '110 / 120 / 130 / 140 / 150 <span style="color:orange; white-space:normal">(+&nbsp;170% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'True Damage:',
            raw: '110 / 120 / 130 / 140 / 150 (+ 170% bonus AD)',
            damagetype: 'True',
            values: [110, 120, 130, 140, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '110 / 120 / 130 / 140 / 150',
            children: [
              {
                values: 170,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 170% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage"><span style="color: #FF8C34; white-space:normal">Physical damage</span></a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage"><span style="color: #F9966B; white-space:normal">True damage</span></a></span>',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
  },
  Tunnel: {
    name: 'Tunnel',
    display_name: 'Tunnel',
    champion: "Rek'Sai",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RekSaiE.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '850',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">26 / 24 / 22 / 20 / 18</span>',
    customlabel:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">On-Tunnel Cooldown</span>',
    custominfo:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after dash ends">10 / 8 / 6 / 4 / 2</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai"><img alt="Rek\'Sai" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction and creates a <i>Tunnel</i> in her wake that lasts for a while. <b>Rek\'Sai</b> can travel through the <i>Tunnel</i> in either direction, which becomes disabled afterwards for a few seconds.',
      '<b>Rek\'Sai</b> cannot enter a tunnel while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span>. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can stand on a <i>Tunnel</i> to destroy it and gain <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Tunnel.png',
        description:
          "Active: Rek'Sai  dashes in the target direction, leaving behind a Tunnel with two interconnected entrances that lasts up to 10 minutes. The Tunnel can be traversed again when Rek'Sai targets either entrance, shutting down the Tunnel for a few seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, leaving behind a <i>Tunnel</i> with two interconnected entrances that lasts up to 10 minutes. The <i>Tunnel</i> can be traversed again when <b>Rek\'Sai</b> targets either entrance, shutting down the <i>Tunnel</i> for a few seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: "Rek'Sai  dashes in the target direction, leaving behind a Tunnel with two interconnected entrances that lasts up to 10 minutes",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'dashes in the target direction, leaving behind a Tunnel with two interconnected entrances that lasts up to 10 minutes',
            pre: "Rek'Sai  dashes in the target direction, leaving behind a Tunnel with two interconnected entrances that lasts up to 10 minutes",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Rek'Sai can have up to 8 Tunnels active on the map at once, but deploying beyond the maximum destroys the oldest one. Enemy  champions can destroy a Tunnel by standing on either entrance for 1.5 seconds, granting them  5 upon successfully destroying the Tunnel.",
        descriptionHTML:
          '<b>Rek\'Sai</b> can have up to 8 <i>Tunnels</i> active on the map at once, but deploying beyond the maximum destroys the oldest one. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can destroy a <i>Tunnel</i> by standing on either entrance for 1.<small>5</small> seconds, granting them <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="5 Gold"><img alt="5 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">5</span></span> upon successfully destroying the <i>Tunnel</i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Rek'Sai can have up to 8 Tunnels active on the map at once, but deploying beyond the maximum destroys the oldest one",
            damagetype: 'None',
            values: 8,
            units: 'total_ap',
            unitsText:
              'can have up to 8 Tunnels active on the map at once, but deploying beyond the maximum destroys the oldest one',
            pre: "Rek'Sai can have up to 8 Tunnels active on the map at once, but deploying beyond the maximum destroys the oldest one",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Enemy  champions can destroy a Tunnel by standing on either entrance for 1.5 seconds, granting them  5 upon successfully destroying the Tunnel.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'champions can destroy a Tunnel by standing on either entrance for 1.5 seconds, granting them  5 upon successfully destroying the Tunnel.',
            pre: 'Enemy  champions can destroy a Tunnel by standing on either entrance for 1.5 seconds, granting them  5 upon successfully destroying the Tunnel.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "An Un-Burrowed Rek'Sai will automatically  Burrow before entering the Tunnel and automatically  Unburrow after exiting it. This does not put  Burrow on cooldown nor trigger  Fury of the Xer'Sai, but does trigger other Burrow effects and  Unburrow.",
        descriptionHTML:
          'An <span class="template_sbc"><b>Un-Burrowed</b></span> <b>Rek\'Sai</b> will automatically <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrow"><img alt="Burrow" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrow</a></span></span></i> before entering the <i>Tunnel</i> and automatically <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Unburrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Unburrow"><img alt="Unburrow" src="/wiki/images/Rek%27Sai_Unburrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Rek\'Sai/LoL">Unburrow</a></span></span></i> after exiting it. This does not put <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrow"><img alt="Burrow" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrow</a></span></span></i> on cooldown nor trigger <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Fury of the Xer\'Sai" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Fury_of_the_Xer\'Sai" title="Fury of the Xer\'Sai"><img alt="Fury of the Xer\'Sai" src="/wiki/images/Rek%27Sai_Fury_of_the_Xer%27Sai.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Fury_of_the_Xer\'Sai" title="Rek\'Sai/LoL">Fury of the Xer\'Sai</a></span></span></i>, but does trigger other <i>Burrow</i> effects and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Unburrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Unburrow"><img alt="Unburrow" src="/wiki/images/Rek%27Sai_Unburrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Rek\'Sai/LoL">Unburrow</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Rek'Sai cannot enter a tunnel while  immobilized,  grounded, or  silenced.",
        descriptionHTML:
          '<i><b>Rek\'Sai</b> cannot enter a tunnel while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    notes:
      '* Creating a <i>Tunnel</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area at the other end for 2 seconds.\n<ul><li><i>Tunnel</i> entrances can be targeted by allied movement abilities (ex: <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Leap Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Leap_Strike" title="Leap Strike"><img alt="Leap Strike" src="/wiki/images/Jax_Leap_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Leap_Strike" title="Jax/LoL">Leap Strike</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-ability="Shunpo" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL#Shunpo" title="Shunpo"><img alt="Shunpo" src="/wiki/images/Katarina_Shunpo.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL#Shunpo" title="Katarina/LoL">Shunpo</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Safeguard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Safeguard" title="Safeguard"><img alt="Safeguard" src="/wiki/images/Lee_Sin_Safeguard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Safeguard" title="Lee Sin/LoL">Safeguard</a></span></span></i>, <i><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span></i>).</li>\n<li><i>Tunnel</i> entrances are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> on allied champions\' minimaps, while enemies must first gain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of one before it becomes visible on theirs (the opposite entrance is not revealed).</li>\n<li>Destroying a <i>Tunnel</i> while <b>Rek\'Sai</b> is traversing it will not prevent her from reaching the opposite entrance.</li>\n<li><b>Rek\'Sai</b> can <i>Tunnel</i> through terrain if she dashes close to them and the wall is thin enough to allow the opposite entrance to spawn on the other side.</li></ul>',
  },
  'Void Rush': {
    name: 'Void Rush',
    display_name: 'Void Rush',
    champion: "Rek'Sai",
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RekSaiRWrapper.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1500',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">1400</span>',
    cast_time: '0.<small>25</small>',
    cooldown: '100 / 95 / 90 / 85 / 80',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai"><img alt="Rek\'Sai" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai</a></span></span> marks enemy champions she damages with <i>Marked as Prey</i>, which lasts a few seconds.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> selects the target <i>Marked as Prey</i>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishing</a></span> into the ground. After a brief delay, she emerges <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Unburrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Un-Burrowed"><img alt="Un-Burrowed" src="/wiki/images/Rek%27Sai_Unburrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Rek\'Sai/LoL">Un-Burrowed</a></span></span></b></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pounces</a></span> at the target, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> displacement immunity</span>:</b></span> The dash cannot be deterred by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Void_Rush_Mark.png',
        description:
          "Passive: Rek'Sai applies Marked as Prey to enemy champions she damages, lasting for 5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Rek\'Sai</b> applies <i>Marked as Prey</i> to enemy champions she damages, lasting for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: "Rek'Sai applies Marked as Prey to enemy champions she damages, lasting for 5 seconds.",
            damagetype: 'None',
            values: 5,
            units: 'total_ap',
            unitsText:
              'applies Marked as Prey to enemy champions she damages, lasting for 5 seconds.',
            pre: "Rek'Sai applies Marked as Prey to enemy champions she damages, lasting for 5 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Void_Rush.png',
        description:
          "Active: Rek'Sai selects the target Marked as Prey, becoming  displacement immune and  unable to act and  vanishing into the ground. After 1.5 seconds, she becomes targetable again and emerges from the ground  Un-Burrowed near the target and  pounces at them, dealing physical damage and  dashing 125 units through them.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rek\'Sai</b> selects the target <i>Marked as Prey</i>, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishing</a></span> into the ground. After 1.<small>5</small> seconds, she becomes targetable again and emerges from the ground <span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Unburrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Un-Burrowed"><img alt="Un-Burrowed" src="/wiki/images/Rek%27Sai_Unburrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Rek\'Sai/LoL">Un-Burrowed</a></span></span></b></span> near the target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pounces</a></span> at them, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> 125 units through them.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'After 1.5 seconds, she becomes targetable again and emerges from the ground  Un-Burrowed near the target and  pounces at them, dealing physical damage and  dashing 125 units through them.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              '1.5 seconds, she becomes targetable again and emerges from the ground  Un-Burrowed near the target and  pounces at them, dealing physical damage and  dashing 125 units through them.',
            pre: 'After 1.5 seconds, she becomes targetable again and emerges from the ground  Un-Burrowed near the target and  pounces at them, dealing physical damage and  dashing 125 units through them.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              "100 / 175 / 250 / 325 / 400 (+ 175% bonus AD) (+ 20 / 22.5 / 25 / 27.5 / 30% of target's missing health)",
            valuesHTML:
              '100 / 175 / 250 / 325 / 400 <span style="color:orange; white-space:normal">(+&nbsp;175% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30% of target\'s <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "100 / 175 / 250 / 325 / 400 (+ 175% bonus AD) (+ 20 / 22.5 / 25 / 27.5 / 30% of target's missing health)",
            healType: 'PhysicalVamp',
            values: [100, 175, 250, 325, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 175 / 250 / 325 / 400',
            children: [
              {
                values: 175,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 175% bonus AD',
              },
              {
                values: [20, 22.5, 25, 27.5, 30],
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: "+ 20 / 22.5 / 25 / 27.5 / 30% of target's missing health",
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If the target dies or is too far away before Rek'Sai vanishes, Void Rush is canceled with a  10-second cooldown.",
        descriptionHTML:
          '<i>If the target dies or is too far away before <b>Rek\'Sai</b> vanishes, Void Rush is canceled with a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;10-second</span> cooldown.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "If the target dies or is too far away before Rek'Sai vanishes, Void Rush is canceled with a  10-second cooldown.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "the target dies or is too far away before Rek'Sai vanishes, Void Rush is canceled with a  10-second cooldown.",
            pre: "If the target dies or is too far away before Rek'Sai vanishes, Void Rush is canceled with a  10-second cooldown.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <b>Rek\'Sai</b> will track the target if they change locations.\n<ul><li><ul><li>She will dash through the target\'s previous location without dealing damage if the target is too far away or moves beyond <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1750</span> units.</li></ul></li>\n<li>The damage can be dodged if the target moves <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="pending for confirmation">1000</span> or more units away.</li>\n<li>All sources of damage by <b>Rek\'Sai</b> count for applying the mark.</li>\n<li><i>Void Rush</i> has a brief cast time during which <b>Rek\'Sai</b> is still targetable.</li>\n<li><i>Void Rush\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> begins from the start of the cast time, and ends when the dash ends.</li>\n<li><i>Void Rush\'s</i> damage can be dodged by becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><b>Rek\'Sai</b> can activate <i>Void Rush</i> while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Burrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Burrowed"><img alt="Burrowed" src="/wiki/images/Rek%27Sai_Burrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Burrow" title="Rek\'Sai/LoL">Burrowed</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Unburrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Unburrowed"><img alt="Unburrowed" src="/wiki/images/Rek%27Sai_Unburrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Unburrow" title="Rek\'Sai/LoL">Unburrowed</a></span></span>.\n<ul><li>She will always emerge as <i>Unburrowed</i>.</li></ul></li>\n<li>If <b>Rek\'Sai</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> during the cast time, <i>Void Rush</i> is canceled and goes on a 10 second cooldown.\n<ul><li>If the <i>resurrection</i> occurs while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanished</a></span>, she will emerge and pounce the target immediately.</li></ul></li>\n<li>A screeching noise made by <b>Rek\'Sai</b> can be heard globally after <i>Void Rush</i> is cast (<i>will be heard by enemies even if they don\'t have <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of <b>Rek\'Sai</b> and/or her destination</i>).</li>\n<li>The following table refers for interactions while <b>Rek\'Sai</b> is performing <i>Void Rush</i>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Rek%27Sai_Original_R.ogg   Activation alert.',
    video: "Rek'Sai RVideo.ogv",
  },
} satisfies { [skillName in string]: SkillData };
