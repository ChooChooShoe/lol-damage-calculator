import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Vladimir';

export default {
  'Crimson Pact': {
    name: 'Crimson Pact',
    display_name: 'Crimson Pact',
    champion: 'Vladimir',
    skill: 'I',
    image: {
      full: 'VladimirP.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL" title="Vladimir"><img alt="Vladimir" src="/wiki/images/Vladimir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL" title="Vladimir/LoL">Vladimir</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> based on his <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span>, and <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span> based on his <span style="color: #7A6DFF; white-space:normal">ability power</span>.',
      '<small><i>These bonuses do not stack with each other.</i></small>',
    ],
    description: [
      {
        icon: '/wiki/images/Crimson_Pact.png',
        description:
          'Innate: Vladimir gains (3.3% bonus health) as  ability power and (160% AP) as  bonus health. These two bonuses do not stack with each other.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Vladimir</b> gains <span style="color: #1F995C; white-space:normal">(3.<small><span style="text-decoration: overline;">3</span></small>% <b>bonus</b> health)</span> as <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> and <span style="color: #7A6DFF; white-space:normal">(160% AP)</span> as <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>. These two bonuses do not stack with each other.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Vladimir gains (3.3% bonus health) as  ability power and (160% AP) as  bonus health',
            healType: 'BonusHealth',
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'as  ability power and',
            pre: 'Vladimir gains',
            post: 'as  ability power and',
            children: [
              {
                values: 3.3,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '3.3% bonus health',
              },
              {
                values: 160,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '160% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Crimson Pact</i> only affects <b>Vladimir\'s</b> <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> and will not increase <b>Vladimir\'s</b> <span style="color: #1F995C; white-space:normal"><b>current</b> health</span> to prevent <b>Vladimir</b> from restoring health whenever his <span style="color: #7A6DFF; white-space:normal">AP</span> fluctuates.\n<ul><li><ul><li><b>Vladimir\'s</b> <span style="color: #1F995C; white-space:normal"><b>current</b> health</span> can decrease to match his <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> if <i>Crimson Pact\'s</i> <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span> is lost.</li></ul></li>\n<li><i>Crimson Pact\'s</i> <b>bonus</b> ability power <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks multiplicatively"><a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking#Stacks multiplicatively"><img alt="Multiple stacking icon.png" src="/wiki/images/Multiple_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking">stacks multiplicatively</a></span> with other sources of <span style="color: #7A6DFF; white-space:normal">% ability power</span> but its <b>bonus</b> health <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks additively"><a href="/wiki/Stacking#Stacks_additively" title="Stacking#Stacks additively"><img alt="Additive stacking icon.png" src="/wiki/images/Additive_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_additively" title="Stacking">stacks additively</a></span> with other sources of <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span>. Examples on how they calculate below:\n<ul><li>Case 1: With <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rabadon\'s Deathcap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rabadon%27s_Deathcap" title="Rabadon\'s Deathcap"><img alt="Rabadon\'s Deathcap" src="/wiki/images/Rabadon%27s_Deathcap_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rabadon%27s_Deathcap" title="Rabadon\'s Deathcap">Rabadon\'s Deathcap</a></span></span> you get a total of (<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="From Rabadon\'s Deathcap."><span style="color: #7A6DFF; white-space:normal">35% AP</span></span> + <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Crimson Pact\'s bonus AP enhanced by Rabadon\'s Deathcap."><span style="color: #1F995C; white-space:normal">4.<small>49955</small>% <b>bonus</b> health</span></span>) <span style="color: #7A6DFF; white-space:normal"><b>bonus</b> ability power</span> and (<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Crimson Pact\'s bonus health comes from AP, thus indirectly enhanced by Rabadon\'s Deathcap."><span style="color: #7A6DFF; white-space:normal">216% AP</span></span> + <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Though these 2 bonuses do not stack with each other and it\'s Crimson Pact\'s bonus AP that enhanced by Rabadon\'s Deathcap, the enhanced part of AP is credited to Rabadon\'s Deathcap, not Crimson Pact, thus still counted as resource for Crimson Pact\'s bonus health."><span style="color: #1F995C; white-space:normal">1.<small>86648</small>% <b>bonus</b> health</span></span>) <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span>.</li>\n<li>Case 2: With <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Vigilant Wardstone" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vigilant_Wardstone" title="Vigilant Wardstone"><img alt="Vigilant Wardstone" src="/wiki/images/Vigilant_Wardstone_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vigilant_Wardstone" title="Vigilant Wardstone">Vigilant Wardstone</a></span></span> you get a total of (<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="From Vigilant Wardstone."><span style="color: #7A6DFF; white-space:normal">12% AP</span></span> + <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Crimson Pact\'s bonus AP comes from bonus health, thus enhanced by both Vigilant Wardstone\'s effects, multiplicatively."><span style="color: #1F995C; white-space:normal">4.<small>1809152</small>% <b>bonus</b> health</span></span>) <span style="color: #7A6DFF; white-space:normal"><b>bonus</b> ability power</span> and (<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Crimson Pact\'s bonus health comes from AP, thus indirectly enhanced by Vigilant Wardstone\'s AP multiplier, but not bonus HP multiplier (HP stacking is additive)."><span style="color: #7A6DFF; white-space:normal">179.<small>2</small>% AP</span></span> + <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Wardstone\'s AP multiplier affects Crimsom Pact\'s AP from bonus HP, previously enhanced by Wardstone\'s HP multiplier. Resulting additional AP is then converted to HP by Crimson Pact, and added to Wardstone\'s HP multiplier."><span style="color: #1F995C; white-space:normal">12.<small>71672832</small>% <b>bonus</b> health</span></span>) <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span>.</li>\n<li>Case 3: With both <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rabadon\'s Deathcap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rabadon%27s_Deathcap" title="Rabadon\'s Deathcap"><img alt="Rabadon\'s Deathcap" src="/wiki/images/Rabadon%27s_Deathcap_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rabadon%27s_Deathcap" title="Rabadon\'s Deathcap">Rabadon\'s Deathcap</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Vigilant Wardstone" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vigilant_Wardstone" title="Vigilant Wardstone"><img alt="Vigilant Wardstone" src="/wiki/images/Vigilant_Wardstone_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vigilant_Wardstone" title="Vigilant Wardstone">Vigilant Wardstone</a></span></span> you get a total of (<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="From Rabadon\'s Deathcap and Vigilant Wardstone, stacked additively."><span style="color: #7A6DFF; white-space:normal">47% AP</span></span> + <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Same sequence as Case 2, but with Rabadon\'s and Wardstone\'s AP multipliers stacked additively."><span style="color: #1F995C; white-space:normal">5.<small>4874512</small>% <b>bonus</b> health</span></span>) <span style="color: #7A6DFF; white-space:normal"><b>bonus</b> ability power</span> and (<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Same sequence as Case 2, but with Rabadon\'s and Wardstone\'s AP multipliers stacked additively."><span style="color: #7A6DFF; white-space:normal">235.<small>2</small>% AP</span></span> + <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Same sequence as Case 2, but with Rabadon\'s and Wardstone\'s AP multipliers stacked additively."><span style="color: #1F995C; white-space:normal">14.<small>80718592</small>% <b>bonus</b> health</span></span>) <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span>.</li></ul></li></ul>',
  },
  Transfusion: {
    name: 'Transfusion',
    display_name: 'Transfusion',
    champion: 'Vladimir',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'VladimirQ.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '600',
    cast_time: '0.<small>25</small>',
    cooldown:
      '9 / 7.<small>9</small> / 6.<small>8</small> / 5.<small>7</small> / 4.<small>6</small>',
    blurb: [
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL" title="Vladimir"><img alt="Vladimir" src="/wiki/images/Vladimir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL" title="Vladimir/LoL">Vladimir</a></span></span> drains blood from the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself. He then generates a stack of <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> over the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
      'At 2 stacks, <b>Vladimir</b> briefly gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and enters <i>Crimson Rush</i>, during which <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> depletes over a short time.',
      '<span class="template_sbc"><b>Crimson Rush Bonus:</b></span> <i>Transfusion</i> consumes all <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> to deal increased damage and heal <b>Vladimir</b> for an additional amount based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Transfusion.png',
        description:
          'Active: Vladimir drains blood from the target enemy, dealing magic damage and  healing himself. He then generates a stack of  Bloodthirst over the  cooldown, which is displayed in his secondary resource bar.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vladimir</b> drains blood from the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself. He then generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> over the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, which is displayed in his secondary resource bar.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 100 / 120 / 140 / 160 (+ 60% AP)',
            valuesHTML:
              '80 / 100 / 120 / 140 / 160 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Heal:',
            values: '20 / 25 / 30 / 35 / 40 (+ 35% AP)',
            valuesHTML:
              '20 / 25 / 30 / 35 / 40 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 100 / 120 / 140 / 160 (+ 60% AP)',
            damagetype: 'Magic',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
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
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 35% AP)',
            healType: 'DrainEffect',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
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
          'At 2 stacks, Vladimir gains  10% / 20% / 30% / 40% (based on level) bonus movement speed for 0.5 seconds, and enters Crimson Rush while the  Bloodthirst depletes over 2.5 seconds. The  Bloodthirst depletes 75% slower during  Sanguine Pool,  Tides of Blood, or  stasis.',
        descriptionHTML:
          'At 2 stacks, <b>Vladimir</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="10%;20%;30%;40%" data-top_values="1;6;11;16">10% / 20% / 30% / 40% (based on level)</span> <b>bonus</b> movement speed</span></span> for 0.<small>5</small> seconds, and enters <i>Crimson Rush</i> while the <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> depletes over 2.<small>5</small> seconds. The <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> depletes 75% slower during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Sanguine Pool" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Sanguine_Pool" title="Sanguine Pool"><img alt="Sanguine Pool" src="/wiki/images/Vladimir_Sanguine_Pool.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Sanguine_Pool" title="Vladimir/LoL">Sanguine Pool</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Tides of Blood" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Tides_of_Blood" title="Tides of Blood"><img alt="Tides of Blood" src="/wiki/images/Vladimir_Tides_of_Blood.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Tides_of_Blood" title="Vladimir/LoL">Tides of Blood</a></span></span></i>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'At 2 stacks, Vladimir gains  10% / 20% / 30% / 40% (based on level) bonus movement speed for 0.5 seconds, and enters Crimson Rush while the  Bloodthirst depletes over 2.5 seconds',
            min: 0,
            max: 10,
            description:
              'At 2 stacks, Vladimir gains  10% / 20% / 30% / 40% (based on level) bonus movement speed for 0.5 seconds, and enters Crimson Rush while the  Bloodthirst depletes over 2.5 seconds',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed for 0.5 seconds, and enters Crimson Rush while the  Bloodthirst depletes over 2.5 seconds',
            pre: 'At 2 stacks, Vladimir gains  10% / 20% / 30% / 40%',
            post: 'bonus movement speed for 0.5 seconds, and enters Crimson Rush while the  Bloodthirst depletes over 2.5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The  Bloodthirst depletes 75% slower during  Sanguine Pool,  Tides of Blood, or  stasis.',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'slower during  Sanguine Pool,  Tides of Blood, or  stasis. Bloodthirst depletes 75',
            pre: 'The  Bloodthirst depletes 75% slower during  Sanguine Pool,  Tides of Blood, or  stasis.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Crimson_Rush.png',
        description:
          'Crimson Rush Bonus: Transfusion consumes all  Bloodthirst to deal  85% increased damage and heal Vladimir for an additional 30 − 200 (based on level) (+ 5% (+ 4% per 100 AP) missing health), reduced to 35% against  minions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Crimson Rush Bonus:</b></span> <i>Transfusion</i> consumes all <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> to deal <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">85% increased damage</span> and heal <b>Vladimir</b> for an additional <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="200;" data-bot_values="30;40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190;200" data-top_values="">30 − 200 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;5% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span> <b>missing</b> health)</span>, reduced to 35% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Crimson Rush Bonus:',
            raw: 'Transfusion consumes all  Bloodthirst to deal  85% increased damage and heal Vladimir for an additional 30 − 200 (based on level) (+ 5% (+ 4% per 100 AP) missing health), reduced to 35% against  minions.',
            healType: 'BonusHealth',
            values: [
              30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
              170, 180, 190, 200,
            ],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: ', reduced to 35% against  minions.',
            pre: 'Transfusion consumes all  Bloodthirst to deal  85% increased damage and heal Vladimir for an additional 30 − 200',
            post: ', reduced to 35% against  minions.',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'missing_hp',
                unitsText: 'missing health',
                pre: '+ 5%',
                post: 'missing health',
                children: [
                  {
                    values: 4,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 4% per 100 AP',
                  },
                ],
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Increased Damage:',
            values: '148 / 185 / 222 / 259 / 296 (+ 111% AP)',
            valuesHTML:
              '148 / 185 / 222 / 259 / 296 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;111% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '148 / 185 / 222 / 259 / 296 (+ 111% AP)',
            damagetype: 'None',
            values: [148, 185, 222, 259, 296],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '148 / 185 / 222 / 259 / 296',
            children: [
              {
                values: 111,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 111% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'false',
    callforhelp: 'True',
    notes:
      '* Even thought the healing effect is visualized as a projectile, the healing itself triggers instantly.\n<ul><li><i>Vladimir\'s</i> resource bar changes colors depending on <i>Bloodthirst\'s</i> charge-up.\n<ol><li><span style="color:white">White</span> while generating the first stack and while at 1 stack (there is no time-out period).</li>\n<li><span style="color:orange">Orange</span> while generating the second stack.</li>\n<li><span style="color:red">Red</span> while <i>Crimson Rush</i> is active (<i>Bloodthirst</i> will deplete over 2.<small>5</small> seconds once triggered).</li></ol>\n<ul><li>Each stack generates over-time (<i>Transfusion\'s</i> cooldown).</li></ul></li>\n<li><b>Vladimir</b> can cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Sanguine Pool" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Sanguine_Pool" title="Sanguine Pool"><img alt="Sanguine Pool" src="/wiki/images/Vladimir_Sanguine_Pool.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Sanguine_Pool" title="Vladimir/LoL">Sanguine Pool</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Hemoplague" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Hemoplague" title="Hemoplague"><img alt="Hemoplague" src="/wiki/images/Vladimir_Hemoplague.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Hemoplague" title="Vladimir/LoL">Hemoplague</a></span></span> during <i>Transfusion\'s</i> cast time.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span> depletes normally while under <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> effects.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Sanguine Pool': {
    name: 'Sanguine Pool',
    display_name: 'Sanguine Pool',
    champion: 'Vladimir',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'VladimirSanguinePool.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    cast_time: 'none',
    cost: '<span style="color: #1F995C; white-space:normal">20%</span>',
    costtype:
      '<span style="color: #1F995C; white-space:normal"><b>current</b> health</span>',
    cooldown: '28 / 25 / 22 / 19 / 16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL" title="Vladimir"><img alt="Vladimir" src="/wiki/images/Vladimir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL" title="Vladimir/LoL">Vladimir</a></span></span> sinks into a pool of blood for a short time, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span>, and briefly gaining <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> decaying movement speed</span></span>. He cannot use basic attacks and abilities, but can still move.',
      'Enemies within the pool are continually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>, and dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> based on his <span style="color: #1F995C; white-space:normal">bonus health</span>. <b>Vladimir</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for a portion of the damage dealt.',
    ],
    description: [
      {
        icon: '/wiki/images/Sanguine_Pool.png',
        description:
          'Active: Vladimir sinks into a pool of blood, becoming  untargetable and  ghosted for 2 seconds. He also gains  37.5% bonus movement speed that decays exponentially over 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vladimir</b> sinks into a pool of blood, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for 2 seconds. He also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">37.<small>5</small>% <b>bonus</b> movement speed</span></span> that decays exponentially over 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Vladimir sinks into a pool of blood, becoming  untargetable and  ghosted for 2 seconds',
            damagetype: 'None',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'sinks into a pool of blood, becoming  untargetable and  ghosted for 2 seconds',
            pre: 'Vladimir sinks into a pool of blood, becoming  untargetable and  ghosted for 2 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'He also gains  37.5% bonus movement speed that decays exponentially over 1 second.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed that decays exponentially over 1 second.also gains  37.5',
            pre: 'He also gains  37.5% bonus movement speed that decays exponentially over 1 second.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies within the pool are dealt magic damage every 0.5 seconds over the duration and are  slowed by 40%. Vladimir  heals himself for 15% of the pre-mitigation damage dealt.',
        descriptionHTML:
          'Enemies within the pool are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over the duration and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 40%. <b>Vladimir</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself for 15% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated before modifiers">pre-mitigation damage</span> dealt.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Vladimir  heals himself for 15% of the pre-mitigation damage dealt.',
            healType: 'SelfHeal',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of the pre-mitigation damage dealt. heals himself for 15',
            pre: 'Vladimir  heals himself for 15% of the pre-mitigation damage dealt.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '20 / 33.75 / 47.5 / 61.25 / 75 (+ 2.5% bonus health)',
            valuesHTML:
              '20 / 33.<small>75</small> / 47.<small>5</small> / 61.<small>25</small> / 75 <span style="color: #1F995C; white-space:normal">(+&nbsp;2.<small>5</small>% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage Per Tick:',
            raw: '20 / 33.75 / 47.5 / 61.25 / 75 (+ 2.5% bonus health)',
            healType: 'BonusHealth',
            values: [20, 33.75, 47.5, 61.25, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 33.75 / 47.5 / 61.25 / 75',
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 2.5% bonus health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Vladimir cannot use basic attacks nor abilities during Sanguine Pool, but he can still move. If  Tides of Blood is charging at the time of Sanguine Pool's activation, that ability may still be recast.",
        descriptionHTML:
          '<i><b>Vladimir</b> cannot use basic attacks nor abilities during Sanguine Pool, but he can still move. If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Tides of Blood" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Tides_of_Blood" title="Tides of Blood"><img alt="Tides of Blood" src="/wiki/images/Vladimir_Tides_of_Blood.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Tides_of_Blood" title="Vladimir/LoL">Tides of Blood</a></span></span> is charging at the time of Sanguine Pool\'s activation, that ability may still be recast.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    notes:
      '* The first tick damages immediately so the final one occurs 0.<small>5</small> seconds before <b>Vladimir</b> becomes targetable again.\n<ul><li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> ends immediately once affected enemies get out of range.</li>\n<li><b>Vladimir</b> can still use <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a> and <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a> during <i>Sanguine Pool</i>.</li>\n<li>While unable to attack, <b>Vladimir</b> can still input attack commands - causing him to follow his attack target.\n<ul><li><b>Vladimir\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to 0&nbsp;」</span><span class="flipText2">「&nbsp;by 450&nbsp;」</span></span>while pooled - causing him to attempt to move right up to his attack target.</li></ul></li></ul>',
  },
  'Tides of Blood': {
    name: 'Tides of Blood',
    display_name: 'Tides of Blood',
    champion: 'Vladimir',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'VladimirE.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="range of each blood missile">600</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="width of each blood missile">120</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="speed of every blood missile">4000</span>',
    cast_time: 'none',
    cost: '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#1F995C;" data-top_label="seconds" data-start="2;0" data-finish="8;0.75" data-bot_values="2;4;6;8" data-top_values="0;0.25;0.5;0.75" data-bot_key="%">2 / 4 / 6 / 8% (based on charge time)</span>',
    costtype:
      '<span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">13 / 11 / 9 / 7 / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL" title="Vladimir"><img alt="Vladimir" src="/wiki/images/Vladimir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL" title="Vladimir/LoL">Vladimir</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> up to a brief moment to ramp up a <span style="color: #1F995C; white-space:normal">health cost</span>. <i>Tides of Blood</i> can be recast within the duration, and does so automatically afterwards or if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Vladimir</b> unleashes a nova of blood bolts that each deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit based on <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span>, which is further increased based on charge time. If he charged long enough, enemies hit are also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Tides_of_Blood.png',
        description:
          "Active: Vladimir  charges for up to 1.5 seconds, during which he increases Tides of Blood's damage over the first second of the channel, and becomes  slowed by 20% afterwards for the remaining duration. Tides of Blood can be recast within the duration, and does so automatically afterwards or if it is  interrupted.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vladimir</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 1.<small>5</small> seconds, during which he increases <i>Tides of Blood\'s</i> damage over the first second of the channel, and becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 20% afterwards for the remaining duration. <i>Tides of Blood</i> can be recast within the duration, and does so automatically afterwards or if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: "Vladimir  charges for up to 1.5 seconds, during which he increases Tides of Blood's damage over the first second of the channel, and becomes  slowed by 20% afterwards for the remaining duration",
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "afterwards for the remaining duration charges for up to 1.5 seconds, during which he increases Tides of Blood's damage over the first second of the channel, and becomes  slowed by 20",
            pre: "Vladimir  charges for up to 1.5 seconds, during which he increases Tides of Blood's damage over the first second of the channel, and becomes  slowed by 20% afterwards for the remaining duration",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Vladimir unleashes a nova of 15 blood bolts around himself that each deal magic damage to the first enemy hit, increased based on charge time, up to the first second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Vladimir</b> unleashes a nova of 15 blood bolts around himself that each deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, increased based on charge time, up to the first second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Recast:',
            raw: 'Vladimir unleashes a nova of 15 blood bolts around himself that each deal magic damage to the first enemy hit, increased based on charge time, up to the first second.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'unleashes a nova of 15 blood bolts around himself that each deal magic damage to the first enemy hit, increased based on charge time, up to the first second.',
            pre: 'Vladimir unleashes a nova of 15 blood bolts around himself that each deal magic damage to the first enemy hit, increased based on charge time, up to the first second.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values: '30 / 45 / 60 / 75 / 90 (+ 1.5% maximum health) (+ 35% AP)',
            valuesHTML:
              '30 / 45 / 60 / 75 / 90 <span style="color: #1F995C; white-space:normal">(+&nbsp;1.<small>5</small>% <b>maximum</b> health)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Magic Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 1.5% maximum health) (+ 35% AP)',
            healType: 'BonusHealth',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 1.5,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 1.5% maximum health',
              },
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
          'If Tides of Blood was charged for at least 1 second, enemies hit are also  slowed for 0.5 seconds.',
        descriptionHTML:
          'If <i>Tides of Blood</i> was charged for at least 1 second, enemies hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If Tides of Blood was charged for at least 1 second, enemies hit are also  slowed for 0.5 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Tides of Blood was charged for at least 1 second, enemies hit are also  slowed for 0.5 seconds.',
            pre: 'If Tides of Blood was charged for at least 1 second, enemies hit are also  slowed for 0.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies can intercept multiple bolts, but can be damaged only once.',
        descriptionHTML:
          '<i>Enemies can intercept multiple bolts, but can be damaged only once.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Vladimir is below 12% of his maximum health, Tides of Blood will not cost any health.',
        descriptionHTML:
          '<i>If <b>Vladimir</b> is below <span style="color: #1F995C; white-space:normal">12% of his <b>maximum</b> health</span>, Tides of Blood will not cost any <span style="color: #1F995C; white-space:normal">health</span>.</i>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'If Vladimir is below 12% of his maximum health, Tides of Blood will not cost any health.',
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'of his maximum health, Tides of Blood will not cost any health.Vladimir is below 12',
            pre: 'If Vladimir is below 12% of his maximum health, Tides of Blood will not cost any health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The spell indicator shows 11 equally spaced missile indicators when hovering the ability in the HUD, however the spell actually casts 15 equally spaced missiles.\n<ul><li>The <span style="color: #1F995C; white-space:normal">health</span> cost may still drop <b>Vladimir</b> below the specified amount if he is above it. This is verified for every tick of <span style="color: #1F995C; white-space:normal">health</span> cost, i.e if the first tick drops him below it, the next ones will stop affecting him if he remains below it.</li>\n<li>The following table refers for interactions while <b>Vladimir</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Charge channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Sanguine Pool" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Sanguine_Pool" title="Sanguine Pool"><img alt="Sanguine Pool" src="/wiki/images/Vladimir_Sanguine_Pool.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Sanguine_Pool" title="Vladimir/LoL">Sanguine Pool</a></span></span> is usable. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Transfusion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Transfusion" title="Transfusion"><img alt="Transfusion" src="/wiki/images/Vladimir_Transfusion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Transfusion" title="Vladimir/LoL">Transfusion</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Hemoplague" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Hemoplague" title="Hemoplague"><img alt="Hemoplague" src="/wiki/images/Vladimir_Hemoplague.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Hemoplague" title="Vladimir/LoL">Hemoplague</a></span></span> both interrupt after 0.<small>25</small> seconds.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
  Hemoplague: {
    name: 'Hemoplague',
    display_name: 'Hemoplague',
    champion: 'Vladimir',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'VladimirHemoplague.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '625',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 375',
    cast_time: 'none',
    cooldown: '120',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL" title="Vladimir"><img alt="Vladimir" src="/wiki/images/Vladimir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL" title="Vladimir/LoL">Vladimir</a></span></span> unleashes a plague at the target location that infects nearby enemies hit for a few seconds, increasing the damage they take from all sources.',
      'After the duration, infected targets are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span>, which heals <b>Vladimir</b> for each <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Hemoplague.png',
        description:
          'Active: Vladimir spreads a virulent plague at the target location that infects enemies hit for 4 seconds, increasing the damage they take from all sources by 10%.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vladimir</b> spreads a virulent plague at the target location that infects enemies hit for 4 seconds, increasing the damage they take from all sources by 10%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Vladimir spreads a virulent plague at the target location that infects enemies hit for 4 seconds, increasing the damage they take from all sources by 10%.',
            damagetype: 'None',
            values: 4,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              '.spreads a virulent plague at the target location that infects enemies hit for 4 seconds, increasing the damage they take from all sources by 10',
            pre: 'Vladimir spreads a virulent plague at the target location that infects enemies hit for 4 seconds, increasing the damage they take from all sources by 10%.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After the duration, the infection bursts to deal magic damage to all affected targets and, after a 0.4-second delay,  heal Vladimir for each infected champion, reduced by 40% for subsequent champions.',
        descriptionHTML:
          'After the duration, the infection bursts to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to all affected targets and, after a 0.<small>4</small>-second delay, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> <b>Vladimir</b> for each infected champion, reduced by 40% for subsequent champions.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 70% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
          {
            name: 'Heal:',
            values: '150 / 200 / 250 / 300 / 350 (+ 70% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 70% AP)',
            damagetype: 'Magic',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 70% AP)',
            healType: 'DrainEffect',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
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
    targeting: 'Location',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: 'Special',
    projectile: 'false',
    notes:
      '* <i>Hemoplague</i> will amplify almost all sources and types of damage (including damage from neutral monsters but excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage"><span style="color: #F9966B; white-space:normal">true damage</span></a></span>, with percent modifiers stacking multiplicatively).\n<ul><li><ul><li><i>Hemoplague</i> amplifies itself for an actual 165 / 220 / 275 / 330 / 385 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;77% AP)</span> damage.</li></ul></li>\n<li><i>Hemoplague\'s</i> modifier to incoming damage stacks additively with <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL" title="Alistar\'s"><img alt="Alistar\'s" src="/wiki/images/Alistar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL" title="Alistar/LoL">Alistar\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-ability="Unbreakable Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL#Unbreakable_Will" title="Unbreakable Will"><img alt="Unbreakable Will" src="/wiki/images/Alistar_Unbreakable_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL#Unbreakable_Will" title="Alistar/LoL">Unbreakable Will</a></span></span></span> for a total damage reduction of 45/55/65%.<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="this might be unintended">*</span></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> does not negate the detonation.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
