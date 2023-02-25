import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Tryndamere';

export default {
  'Battle Fury': {
    name: 'Battle Fury',
    display_name: 'Battle Fury',
    champion: 'Tryndamere',
    skill: 'I',
    image: {
      full: 'Tryndamere_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL" title="Tryndamere"><img alt="Tryndamere" src="/wiki/images/Tryndamere_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL" title="Tryndamere/LoL">Tryndamere</a></span></span> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span> on his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span>, and enemy kills. His <span style="color: #FA6533; white-space:normal">Fury</span> begins to decay after a period without dealing or taking damage.',
      '<b>Tryndamere</b> gains <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span> based on his <span style="color: #FA6533; white-space:normal">Fury</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Battle Fury.png',
        description:
          'Innate: Tryndamere generates  5 Fury on his basic attacks, and 10 Fury on  critical strikes and each time he kills an enemy. After 8 seconds without dealing or taking damage, Tryndamere loses 5 Fury per second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Tryndamere</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">5 Fury</span></a></span> on his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, and <span style="color: #FA6533; white-space:normal">10 Fury</span> on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> and each time he kills an enemy. After 8 seconds without dealing or taking damage, <b>Tryndamere</b> loses <span style="color: #FA6533; white-space:normal">5 Fury</span> per second.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: ' Tryndamere generates  5 Fury on his basic attacks, and 10 Fury on  critical strikes and each time he kills an enemy',
            values: 5,
            units: 'total_ad',
            unitsText:
              'generates  5 Fury on his basic attacks, and 10 Fury on  critical strikes and each time he kills an enemy',
            pre: 'Tryndamere generates  5 Fury on his basic attacks, and 10 Fury on  critical strikes and each time he kills an enemy',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'After 8 seconds without dealing or taking damage, Tryndamere loses 5 Fury per second.',
            damagetype: 'None',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              '8 seconds without dealing or taking damage, Tryndamere loses 5 Fury per second.',
            pre: 'After 8 seconds without dealing or taking damage, Tryndamere loses 5 Fury per second.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Tryndamere gains  0% − 40% (based on Fury) critical strike chance.',
        descriptionHTML:
          '<b>Tryndamere</b> gains <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#FA6533;" data-top_label="Fury" data-start="0;0" data-finish="40;100" data-bot_values="0;4;8;12;16;20;24;28;32;36;40" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%">0% − 40% (based on Fury)</span> critical strike chance</span></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* Attacks against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Structures"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span> will not grant bonus <span style="color: #FA6533; white-space:normal">Fury</span>, but will still reset the timer on <span style="color: #FA6533; white-space:normal">Fury</span> decay.\n<ul><li>Attacks against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span> will generate <span style="color: #FA6533; white-space:normal">Fury</span> and reset the decay timer. Attacks against wards can critically strike, generating bonus <span style="color: #FA6533; white-space:normal">Fury</span>.</li>\n<li>Attacks against <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a> will generate <span style="color: #FA6533; white-space:normal">Fury</span> and reset the decay timer. Additionally, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Honeyfruit" title="Honeyfruit"><img alt="Honeyfruit" src="/wiki/images/HoneyfruitSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Honeyfruit" class="mw-redirect" title="Honeyfruit">Honeyfruit</a></span></span> drops restore <span style="color: #FA6533; white-space:normal">5 Fury</span> for each pod collected and reset the decay timer.</li></ul>',
  },
  Bloodlust: {
    name: 'Bloodlust',
    display_name: 'Bloodlust',
    champion: 'Tryndamere',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'TryndamereQ.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '<span style="color: #FA6533; white-space:normal">100%</span>',
    costtype:
      '<span style="color: #FA6533; white-space:normal"><b>Current</b> Fury</span>',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL" title="Tryndamere"><img alt="Tryndamere" src="/wiki/images/Tryndamere_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL" title="Tryndamere/LoL">Tryndamere</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>, increased based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Tryndamere</b> consumes all of his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> himself based on <span style="color: #FA6533; white-space:normal">Fury</span> consumed.',
    ],
    description: [
      {
        description:
          'Passive: Tryndamere gains  bonus attack damage, plus an additional amount based on his missing health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Tryndamere</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>, plus an additional amount based on his <span style="color: #1F995C; white-space:normal"><b>missing</b> health</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values: '10 / 15 / 20 / 25 / 30',
            valuesHTML: '10 / 15 / 20 / 25 / 30',
          },
          {
            name: 'Additional Bonus AD:',
            values: '0.15 / 0.25 / 0.35 / 0.45 / 0.55 per 1% missing health',
            valuesHTML:
              '0.<small>15</small> / 0.<small>25</small> / 0.<small>35</small> / 0.<small>45</small> / 0.<small>55</small> per <span style="color: #1F995C; white-space:normal">1% <b>missing</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '10 / 15 / 20 / 25 / 30',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
          },
          {
            effectType: 'Heal',
            name: 'Additional Bonus AD:',
            raw: '0.15 / 0.25 / 0.35 / 0.45 / 0.55 per 1% missing health',
            healType: 'BonusHealth',
            values: [0.15, 0.25, 0.35, 0.45, 0.55],
            valuesIsPercent: true,
            units: 'missing_hp',
            unitsText: 'missing healthper 1',
            pre: '0.15 / 0.25 / 0.35 / 0.45 / 0.55 per 1% missing health',
          },
        ],
      },
      {
        icon: '/wiki/images/Bloodlust.png',
        description:
          'Active: Tryndamere consumes all of his  Fury to  heal himself, increased for every point of Fury consumed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tryndamere</b> consumes all of his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> himself, increased for every point of <span style="color: #FA6533; white-space:normal">Fury</span> consumed.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Heal:',
            values: '30 / 40 / 50 / 60 / 70 (+ 30% AP)',
            valuesHTML:
              '30 / 40 / 50 / 60 / 70 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Heal:',
            raw: '30 / 40 / 50 / 60 / 70 (+ 30% AP)',
            healType: 'DrainEffect',
            values: [30, 40, 50, 60, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <i>Bloodlust</i> can still be activated even if Tryndamere does not have any <b>Fury</b>.',
  },
  'Mocking Shout': {
    name: 'Mocking Shout',
    display_name: 'Mocking Shout',
    champion: 'Tryndamere',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'TryndamereW.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius: '850',
    cast_time: '0.<small>3</small>',
    cooldown: '14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL" title="Tryndamere"><img alt="Tryndamere" src="/wiki/images/Tryndamere_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL" title="Tryndamere/LoL">Tryndamere</a></span></span> reduces the <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">attack damage</span></span> of nearby champions for a few seconds. Targets facing away from him are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Mocking Shout.png',
        description:
          'Active: Tryndamere reduces the  attack damage of nearby enemy champions for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tryndamere</b> reduces the <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">attack damage</span></span> of nearby enemy champions for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Tryndamere reduces the  attack damage of nearby enemy champions for 4 seconds.',
            damagetype: 'None',
            values: 4,
            units: 'total_ad',
            unitsText:
              'reduces the  attack damage of nearby enemy champions for 4 seconds.',
            pre: 'Tryndamere reduces the  attack damage of nearby enemy champions for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Attack Damage Reduction:',
            values: '20 / 35 / 50 / 65 / 80',
            valuesHTML: '20 / 35 / 50 / 65 / 80',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Attack Damage Reduction:',
            raw: '20 / 35 / 50 / 65 / 80',
            damagetype: 'None',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
          },
        ],
      },
      {
        description:
          'Targets facing in the opposite direction of Tryndamere are also  slowed for the duration.',
        descriptionHTML:
          'Targets facing in the opposite direction of <b>Tryndamere</b> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for the duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Slow:',
            values: '30 / 37.5 / 45 / 52.5 / 60%',
            valuesHTML:
              '30 / 37.<small>5</small> / 45 / 52.<small>5</small> / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 37.5 / 45 / 52.5 / 60%',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60%',
          },
        ],
      },
      {
        description:
          'A nearby enemy champion is required to cast this ability. The target does not have to be  visible to be targeted by this ability.',
        descriptionHTML:
          '<i>A nearby enemy champion is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be targeted by this ability.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    spellshield: true,
    notes:
      '*<i>Mocking Shout</i> very briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> <b>Tryndamere</b> if he uses it while in the fog of war to enemies.',
  },
  'Spinning Slash': {
    name: 'Spinning Slash',
    display_name: 'Spinning Slash',
    champion: 'Tryndamere',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'TryndamereE.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '660',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 225',
    cast_time: 'none',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL" title="Tryndamere"><img alt="Tryndamere" src="/wiki/images/Tryndamere_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL" title="Tryndamere/LoL">Tryndamere</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and generating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span> per enemy hit.',
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strikes</a></span> <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> <i>Spinning Slash\'s</i> cooldown, increased against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Spinning Slash.png',
        description:
          'Active: Tryndamere  dashes to the target location, dealing physical damage to enemies hit and generating  2 Fury per enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tryndamere</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and generating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">2 Fury</span></a></span> per enemy hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Tryndamere  dashes to the target location, dealing physical damage to enemies hit and generating  2 Fury per enemy hit.',
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'dashes to the target location, dealing physical damage to enemies hit and generating  2 Fury per enemy hit.',
            pre: 'Tryndamere  dashes to the target location, dealing physical damage to enemies hit and generating  2 Fury per enemy hit.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '80 / 110 / 140 / 170 / 200 (+ 130% bonus AD) (+ 80% AP)',
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color:orange; white-space:normal">(+&nbsp;130% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 130% bonus AD) (+ 80% AP)',
            damagetype: 'Physical',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 130% bonus AD',
              },
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
          "Critical strikes reduce Spinning Slash's  current cooldown by 0.75 seconds, doubled to 1.5 seconds against  champions.",
        descriptionHTML:
          '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strikes</a></span> reduce <i>Spinning Slash\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 0.<small>75</small> seconds, doubled to 1.<small>5</small> seconds against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Bloodlust and  Undying Rage can be cast during the dash. Spinning Slash will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-ability="Bloodlust" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL#Bloodlust" title="Bloodlust"><img alt="Bloodlust" src="/wiki/images/Tryndamere_Bloodlust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL#Bloodlust" title="Tryndamere/LoL">Bloodlust</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-ability="Undying Rage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL#Undying_Rage" title="Undying Rage"><img alt="Undying Rage" src="/wiki/images/Tryndamere_Undying_Rage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL#Undying_Rage" title="Tryndamere/LoL">Undying Rage</a></span></span> can be cast during the dash. Spinning Slash will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* <i>Spinning Slash</i> has no minimum dash range.\n<ul><li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> will interrupt the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> but <i>Spinning Slash</i> will deal damage to enemies at the new location instantly.\n<ul><li>Enemies already hit by <i>Spinning Slash</i> cannot be damaged more than once.</li></ul></li>\n<li>To ensure <i>Spinning Slash</i> deals damage when dashing away from an enemy champion, <b>Tryndamere</b> needs to move <i>r-35</i> units towards the enemy beyond the distance he can basic attack at, where <i>r</i> represents the enemy\'s radius and <i>35</i> is the distance in units beyond <b>Tryndamere\'s</b> basic attack range that <i>Spinning Slash</i> can reach.</li>\n<li>The cooldown reduction upon <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span> triggers even if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Cooldown reduction on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> interaction with <i>parrying</i> effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li></ul>',
  },
  'Undying Rage': {
    name: 'Undying Rage',
    display_name: 'Undying Rage',
    champion: 'Tryndamere',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'UndyingRage.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL" title="Tryndamere"><img alt="Tryndamere" src="/wiki/images/Tryndamere_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL" title="Tryndamere/LoL">Tryndamere</a></span></span> becomes enraged, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span> and a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minimum health threshold"><a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death#Ways to prevent dying by not losing health"><img alt="Unkillable icon.png" src="/wiki/images/Unkillable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death">minimum health threshold</a></span> for a few seconds.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minimum health threshold"><a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death#Ways to prevent dying by not losing health"><img alt="Unkillable icon.png" src="/wiki/images/Unkillable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> minimum health threshold</span>:</b></span> The target\'s health cannot be reduced below the threshold.',
    ],
    description: [
      {
        icon: '/wiki/images/Undying Rage.png',
        description:
          'Active: Tryndamere becomes enraged, instantly gaining  Fury and a  minimum health threshold for 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tryndamere</b> becomes enraged, instantly gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span> and a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minimum health threshold"><a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death#Ways to prevent dying by not losing health"><img alt="Unkillable icon.png" src="/wiki/images/Unkillable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death">minimum health threshold</a></span> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: ' Tryndamere becomes enraged, instantly gaining  Fury and a  minimum health threshold for 5 seconds.',
            healType: 'BonusHealth',
            values: 5,
            units: 'total_hp',
            unitsText:
              'becomes enraged, instantly gaining  Fury and a  minimum health threshold for 5 seconds.',
            pre: 'Tryndamere becomes enraged, instantly gaining  Fury and a  minimum health threshold for 5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Fury Gained:',
            values: '50 / 75 / 100',
            valuesHTML:
              '<span style="color: #FA6533; white-space:normal">50 / 75 / 100</span>',
          },
          {
            name: 'Minimum Health Threshold:',
            values: '30 / 50 / 70',
            valuesHTML: '30 / 50 / 70',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Gain',
            name: 'Fury Gained:',
            raw: '50 / 75 / 100',
            values: [50, 75, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100',
          },
          {
            effectType: 'Heal',
            name: 'Minimum Health Threshold:',
            raw: '30 / 50 / 70',
            healType: 'BonusHealth',
            values: [30, 50, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70',
          },
        ],
      },
      {
        description:
          'Undying Rage can be used while affected by  cast-inhibiting crowd control.',
        descriptionHTML:
          '<i>Undying Rage can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes: '* No additional notes.',
  },
} satisfies { [skillName in string]: SkillData };
